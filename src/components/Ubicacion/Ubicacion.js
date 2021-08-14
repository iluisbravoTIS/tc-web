import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid } from '@material-ui/core';

const Styles = styled.div`
    .height100{         
        min-height: 100vh;
        width: 100%;
        object-fit: cover;
        padding: 5vh;
    }

    .mapHeight{
        height: 60vh;
        /* width: 500px; */
        margin: auto;
    }
    .textTitle{
        background-color: rgb(0, 0, 0, 0.4);
        padding: 10px;
        margin-bottom:10px;
    }
`;


const Ubicacion = () => {

    return (
        <>
            <Styles>
                <div className="height100 bg-sage" id="Ubicacion">

                    <Grid container spacing={3}>

                        <Grid item className="text-center" xs={12} md={3}>
                        </Grid>

                        <Grid item className="text-center" xs={12} md={6}>

                            <div className="textTitle">
                                <h2>
                                    Encuentranos
                                </h2>
                            </div>

                            <div className="textTitle">
                                <h4>
                                    Tatuajes chilos es un estudio privado donde atendemos solamente con cita previa para poder
                                    brindarle un mejor servicio y dedicar ese tiempo solo a ti.
                                </h4>
                            </div>
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