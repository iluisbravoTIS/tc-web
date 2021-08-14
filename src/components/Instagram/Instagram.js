import React from 'react';
import styled from 'styled-components';

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


const Instagram = () => {

    let img = "./assets/Back.png";
    return (
        <>
            <Styles>
                <div className="height100" id="Instagram">
                    <img alt="cotizador.img" className="" src={img} />
                    <div className="sectionContent">
                        <h1>INSTAGRAM</h1>
                    </div>

                </div>
            </Styles>
        </>
    )
}

export default Instagram;