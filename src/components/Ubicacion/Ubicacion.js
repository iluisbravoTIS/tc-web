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
                <div className="height100 img" id="Ubicacion">
                    {/* <img alt="foto.img" src={foto3} /> */}

                    <Grid container spacing={3} className="p-5">

                        <Grid item className="text-center" xs={12} md={3}>
                        </Grid>

                        <Grid item className="text-center" xs={12} md={6}>


                            <h2 className="textTitle text">
                                Encuéntranos
                            </h2>



                            <h4 className="text">
                                Tatuajes chilos es un estudio privado donde atendemos solamente con cita previa para poder
                                brindarle un mejor servicio y dedicar ese tiempo solo a ti.
                            </h4>

                        </Grid>

                        <Grid item className="text-center" xs={12} md={12}>
                            <MapContainer className="mapHeight" center={[29.085963302573685, -110.99108771548272]} zoom={16} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[29.085963302573685, -110.99108771548272]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </Grid>

                    </Grid>

                </div>
            </Styles>
        </>
    )
}

export default Ubicacion;