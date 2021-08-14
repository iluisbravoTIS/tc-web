import React from 'react';
import styled from 'styled-components';
import VerticalLinearStepper from './Wizard';

const Styles = styled.div`
    .height100{         
        height: 100vh;
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
    }
`;


const Cotizar = () => {

    let img = "./assets/Back.png";

    return (
        <>
            <Styles>
                <div className="height100" id="Cotizar">
                    <img alt="cotizador.img" className="" src={img} />
                    <div className="sectionContent">
                        <h1>COTIZADOR</h1>
                        <VerticalLinearStepper/>
                    </div>

                </div>
            </Styles>
        </>
    )
}

export default Cotizar;