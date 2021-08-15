import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid } from '@material-ui/core';

const Styles = styled.div`
    .height100{         
        min-height: 100vh;
        width: 100%;
        object-fit: cover;
        /* padding: 5vh; */
    }

    .mapHeight{
        height: 60vh;
        /* width: 500px; */
        margin: auto;
    }

    .text{        
        background-color: rgb(0, 0, 0, 0.4);
        padding: 10px;
        margin: 10px auto;
        width: fit-content;
        color: #FFF;
    }
    
    .textTitle{
        font-weight: 700;
    }
    .img{
        object-fit: cover;
        height: inherit;
        width: 100%;
        /* position: absolute; */
        padding: 0px !important;
        z-index: -1;
        opacity: 0.8;
        background-image: url("./assets/estudio3.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
    }
`;


const Ubicacion = () => {

    const foto3 = "./assets/estudio3.jpeg";

    return (
        <>
            <Styles>
                <div className="height100 bg-green" id="Ubicacion">
                    {/* <img alt="foto.img" src={foto3} /> */}

                    <Grid container spacing={3} className="p-5">

                        <Grid item className="text-center" xs={12} md={3}>
                        </Grid>

                        <Grid item className="text-center" xs={12} md={6}>


                            <h2 className="textTitle text">
                                {/* Encuéntranos */}
                                ENCUÉNTRANOS
                            </h2>



                            <h4 className="text">
                                Tatuajes chilos es un estudio privado donde atendemos solamente con cita previa para poder
                                brindarle un mejor servicio y dedicar ese tiempo solo a ti.
                            </h4>

                        </Grid>

                        <Grid item className="text-center" xs={12} md={12}>

                            <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.675146635573!2d-110.99330858456383!3d29.08574297017394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce87d05f654199%3A0x1fbdd3823cc1076c!2sTIS%20Consulting%20Group!5e0!3m2!1sen!2smx!4v1628984128869!5m2!1sen!2smx"
                                width="100%"
                                height="380"
                                allowfullscreen="true"
                                loading="lazy"></iframe>

                            {/* <MapContainer className="mapHeight" center={[29.085963302573685, -110.99108771548272]} zoom={16} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[29.085963302573685, -110.99108771548272]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer> */}
                       
                        </Grid>

                    </Grid>

                </div>
            </Styles>
        </>
    )
}

export default Ubicacion;