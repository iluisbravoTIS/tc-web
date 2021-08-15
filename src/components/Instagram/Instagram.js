import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .height100{         
        min-height: 100vh;
        width: 100%;      
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

    .sectionContent{
        position: relative;
        padding: 30px
    }
`;

const Instagram = () => {

    let img = "./assets/Back.png";
    return (
        <>
            <Styles>
                <div className="height100 img" id="Instagram">
                    {/* <img alt="cotizador.img" className="" src={img} /> */}
                    <div className="sectionContent">
                        <h2 className="textTitle text">
                            {/* Encuéntranos */}
                            INSTAGRAM
                        </h2>

                        <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
                    </div>

                </div>
            </Styles>
        </>
    )
}

export default Instagram;