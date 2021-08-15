import React from 'react';
import styled from 'styled-components';
import VerticalLinearStepper from './Wizard';
import Settings from '../../providers/settings';

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


    const [isOnline, setIsOnline] = React.useState(true);

    const getIsOnline = async () => {
        debugger;
        // fetch("https://tc-webapi.herokuapp.com/status", {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => {
        //         debugger;
        //         console.log(json);
        //     })
        //     .catch(err => console.log(err));
        let result = await Settings.GetStatus();        
        setIsOnline(result.isOnline);
    }

    React.useEffect(() => {
        getIsOnline();
    });

    return (
        <>
            <Styles>
                <div className="height100 img" id="Cotizar">
                    {/* <img alt="cotizador.img" className="" src={img} /> */}
                    <div className="sectionContent">
                        <h2 className="textTitle text">
                            COTIZAR
                        </h2>

                        { (isOnline === "true") && (<VerticalLinearStepper />) }
                        { (isOnline !== "true") && (<h2 className="text">
                            Por el momento la agenda se encuentra cerrada se abrirá en los primeros días del siguiente mes.
                        </h2>) }
                        

                    </div>

                </div>
            </Styles>
        </>
    )
}

export default Cotizar;