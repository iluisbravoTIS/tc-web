import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .height100{         
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }
`;


const Ubicacion = () => {

    return (
        <>
            <Styles>
                <div className="height100 bg-sage" id="Ubicacion">
                    <h1>UBICACIÓN</h1>
                </div>
            </Styles>
        </>
    )
}

export default Ubicacion;