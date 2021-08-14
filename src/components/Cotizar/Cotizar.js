import React from 'react';
import styled from 'styled-components';
import VerticalLinearStepper from './Wizard';

const Styles = styled.div`
    .height100{         
        min-height: 100vh;
        width: 100%;        
    }

    img{
        object-fit: cover;
        height: inherit;
        width: 100%;
        position: absolute;
    }

    .sectionContent{
        position: relative;
        padding: 30px;
    }

    .img{
        object-fit: cover;
        height: inherit;
        width: 100%;
        /* position: absolute; */
        padding: 0px !important;
        z-index: -1;
        /* opacity: 0.8; */
        background-image: url("./assets/Back.png");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .MuiTypography-body1 ,
    .MuiTypography-body2 ,
    .MuiButton-root
    {
        font-family: "Caviar Dreams" !important;
        font-weight: 900;
    }
`;


const Cotizar = () => {

    let img = "./assets/Back.png";

    return (
        <>
            <Styles>
                <div className="height100 img" id="Cotizar">
                    {/* <img alt="cotizador.img" className="" src={img} /> */}
                    <div className="sectionContent">
                        <h1>COTIZADOR</h1>
                        <VerticalLinearStepper />
                    </div>

                </div>
            </Styles>
        </>
    )
}

export default Cotizar;