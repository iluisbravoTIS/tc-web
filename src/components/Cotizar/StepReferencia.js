import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .hide{         
        display:none;       
    }
`;

const StepReferencia = () => {

    const refButton = React.useRef();
    const [file, setFile] = React.useState();
    const [fileName, setNameFile] = React.useState("Selecciona imagen");

    const onclickFile = () => {
        refButton.current.click()
    }

    const handleFileUpload = event => {
        console.log(event.target.files[0].name);
        let nameFile = event.target.files[0].name;
        setNameFile(event.target.files[0].name)
    };


    return (
        <>
            <Styles>
                <div >
                    <p>Ingrese una imagén de referencia</p>
                    <input type="file" className="hide" ref={refButton} onChange={handleFileUpload}></input>
                    { fileName }
                    <br />
                    <Button variant="contained" onClick={
                        onclickFile
                    }>Subir Imagen</Button>
                </div>
            </Styles>

        </>
    )
}

export default StepReferencia;