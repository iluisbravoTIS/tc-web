import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    img{         
        height: auto;
        /* max-width:60px;
        max-height:80px; */
    }

    img:hover{         
        opacity:0.5;
        cursor:pointer;
    }

    .cabeza{
        position:absolute;
        object-fit: contain;
        top:18px;
        left:65px;
        width:60px;
        height:80px;
        /* max-height:80px; */
    }

    .brazoizq{
        left:5px;
        object-fit: contain;
        top:100px;
        position:absolute;
        width:50px;
        height:80px;
        object-fit: contain;
    }

    .antebrazoizq{
        left:10px;
        top:170px;
        position:absolute;
        width:35px;
        height:80px;
        object-fit: contain;
    }

    .manoizq{
        left:-15px;
        top:240px;
        position:absolute;
        width:45px;
        height:60px;
        object-fit: contain;
    }

    .brazoder{
        left:140px;
        top:100px;
        position:absolute;
        max-width:45px;
        max-height:80px;
    }

    .antebrazoder{
        left:140px;
        top:175px;
        position:absolute;
        width:45px;
        max-height:70px;
        object-fit: contain;
    }

    .manoder{
        left:160px;
        top:240px;
        position:absolute;
        width:45px;
        height:60px;
        object-fit: contain;
    }

    .pecho{
        left:55px;
        top:85px;
        position:absolute;
        max-width:80px;
        height:120px;
        object-fit: contain;
    }
    
    .cadera{
        left:50px;
        top:185px;
        position:absolute;
        width:90px;       
        height:110px;  
        object-fit: contain;
    }

    .musloizq{
        left:45px;
        top:275px;
        position:absolute;  
        width:45px;
        height:110px;
        object-fit: contain;
    }

    .piernaizq{
        left:45px;
        top:380px;
        position:absolute;  
        width:45px;
        height:110px;
        object-fit: contain;
    }

    .musloder{
        left:95px;
        top:275px;
        position:absolute;  
        width:45px;
        height:115px;
        object-fit: contain;
    }

    .piernader{
        left:90px;
        top:385px;
        position:absolute;  
        width:45px;
        height:105px;
        object-fit: contain;
    }

    .contentBody{
        height: 500px;
        position:relative;
        padding-left: 20px;
    }
`;

const StepUbicacion = () => {

    let cabeza = './assets/body/cabeza.png';
    let brazoizq = './assets/body/brazoizq.png';
    let brazoder = './assets/body/brazoder.png';
    let antebrazoizq = './assets/body/antebrazoizq.png';
    let antebrazoder = './assets/body/antebrazoder.png';
    let pecho = './assets/body/pecho.png';
    let cadera = './assets/body/cadera.png';
    let musloizq = './assets/body/musloizq.png';
    let musloder = './assets/body/musloder.png';
    let piernaizq = './assets/body/piernaizq.png';
    let piernader = './assets/body/piernader.png';
    let manoder = './assets/body/manoder.png';
    let manoizq = './assets/body/manoizq.png';

    const [parteSeleccionada, setParteSeleccionada] = React.useState();
    const [subPartesSeleccionada, setSubPartesSeleccionada] = React.useState([]);
    const [subParteSeleccionada, setSubParteSeleccionada] = React.useState([]);

    const partesEspecificas = [
        { parte: "Cabeza", subPartes: ["Detrás de la oreja", "Oreja", "Cuello frente", "Cuello lado", "Nuca", "Cabeza"] },
        { parte: "Brazo Izquierdo", subPartes: ["Hombro", "Bicep", "Tricep dentro", "Tricep detrás"] },
        { parte: "Brazo Derecho", subPartes: ["Hombro", "Bicep", "Tricep dentro", "Tricep detrás"] },
        { parte: "Pecho", subPartes: ["Clavícula", "Pecho", "Esternón", "Costillas", "Espalda", "Trapecio", "Abdomen"] },
        { parte: "Cadera", subPartes: ["Cadera", "Pelvis", "Nalga", "Privada"] },
        { parte: "Muslo Izquierdo", subPartes: ["Muslo", "Muslo lateral", "Muslo atrás", "Rodilla", "Rodilla atrás"] },
        { parte: "Muslo Derecho", subPartes: ["Muslo", "Muslo lateral", "Muslo atrás", "Rodilla", "Rodilla atrás"] },
        { parte: "Antebrazo Izquierdo", subPartes: ["Antebrazo dentro", "Antebrazo fuera", "Codos"] },
        { parte: "Antebrazo Derecho", subPartes: ["Antebrazo dentro", "Antebrazo fuera", "Codos"]},
        { parte: "Pierna Izquierda", subPartes: ["Espinilla", "Pantorrilla", "Pantorrilla lateral", "Pie", "Tobillo"] },
        { parte: "Pierna Derecha", subPartes: ["Espinilla", "Pantorrilla", "Pantorrilla lateral", "Pie", "Tobillo"] },
        { parte: "Mano Izquierda", subPartes: ["Muñeca", "Manos", "Dedos"]},
        { parte: "Mano Derecha", subPartes: ["Muñeca", "Manos", "Dedos"] }
    ];

    const changeParte = (evt) => {
        debugger;
        let target = evt.target.name;

        let partes = partesEspecificas.filter(pe => pe.parte === target);
        setParteSeleccionada(target);
        setSubPartesSeleccionada(partes[0].subPartes);
    }

    const handleChangeSubParteSeleccionada = (evt) => {
        let subParte = evt.target.value;
        setSubParteSeleccionada(subParte);

    }


    return (
        <>
            <Styles>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <div >
                            <p>Ingrese la ubicación del tatuaje</p>
                            <div className="contentBody">
                                <img name="Cabeza" className="cabeza" alt="cabeza.png" src={cabeza} onClick={changeParte} />
                                <img name="Brazo Izquierdo" className="brazoizq" alt="cabeza.png" src={brazoizq} onClick={changeParte} />
                                <img name="Brazo Derecho" className="brazoder" alt="cabeza.png" src={brazoder} onClick={changeParte} />
                                <img name="Pecho" className="pecho" alt="cabeza.png" src={pecho} onClick={changeParte} />
                                <img name="Cadera" className="cadera" alt="cabeza.png" src={cadera} onClick={changeParte} />
                                <img name="Muslo Izquierdo" className="musloizq" alt="cabeza.png" src={musloizq} onClick={changeParte} />
                                <img name="Muslo Derecho" className="musloder" alt="cabeza.png" src={musloder} onClick={changeParte} />
                                <img name="Antebrazo Izquierdo" className="antebrazoizq" alt="cabeza.png" src={antebrazoizq} onClick={changeParte} />
                                <img name="Antebrazo Derecho" className="antebrazoder" alt="cabeza.png" src={antebrazoder} onClick={changeParte} />
                                <img name="Pierna Izquierda" className="piernaizq" alt="cabeza.png" src={piernaizq} onClick={changeParte} />
                                <img name="Pierna Derecha" className="piernader" alt="cabeza.png" src={piernader} onClick={changeParte} />
                                <img name="Mano Derecha" className="manoder" alt="cabeza.png" src={manoder} onClick={changeParte} />
                                <img name="Mano Izquierda" className="manoizq" alt="cabeza.png" src={manoizq} onClick={changeParte} />

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <h2>{parteSeleccionada}</h2>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Partes:</FormLabel>
                            <RadioGroup aria-label="partes" name="partes" onChange={handleChangeSubParteSeleccionada}>
                                {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                                {
                                    subPartesSeleccionada.map(sps => {
                                        return <FormControlLabel value={sps} control={<Radio />} label={sps} />
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>

            </Styles>
        </>
    )
}

export default StepUbicacion;