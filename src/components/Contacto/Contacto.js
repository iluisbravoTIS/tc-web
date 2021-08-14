import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .height100{         
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }
`;


const Contacto = () => {

    return (
        <>
            <Styles>
                <div className="height100 bg-green" id="Contacto">
                    <h1>CONTACTO</h1>
                </div>
            </Styles>
        </>
    )
}

export default Contacto;