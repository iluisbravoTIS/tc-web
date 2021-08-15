import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Styles = styled.div`
    .hide{         
        display:none;       
    }
`;

const StepReferencia = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    const refButton = React.useRef();
    const [file, setFile] = React.useState();
    const [fileName, setNameFile] = React.useState("Selecciona imagen");

    const onclickFile = () => {
        refButton.current.click()
    }

    const handleFileUpload = async event => {
        console.log(event.target.files[0].name);
        let nameFile = event.target.files[0].name;
        let file64 = await convertBase64(event.target.files);
        debugger;

        // wizard.foto = file64;
        // setWizard(wizard);

        setDisabled(false);

        

        setNameFile(nameFile);
        setFile(file64);


    };

    const convertBase64 = async (archivos) => {
        Array.from(archivos).forEach(archivo => {
            var reader = new FileReader();
            reader.readAsDataURL(archivo)
            reader.onload = function () {
                var base64 = reader.result;
                console.log(base64)

                wizard.foto = base64;
                setWizard(wizard);

                return base64;
            }
        })
    }


    return (
        <>
            <Styles>
                <div >

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <p>Ingrese una imagén de referencia</p>
                            <input type="file" className="hide" ref={refButton} onChange={handleFileUpload}></input>
                            <TextField disabled placeholder={fileName} variant="outlined" size="small" multiline></TextField>
                            <br />
                            <Button variant="contained" onClick={
                                onclickFile
                            }>Subir Imagen</Button>

                        </Grid>
                    </Grid>

                </div>
            </Styles>

        </>
    )
}

export default StepReferencia;