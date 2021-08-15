import React from 'react';

const StepReferencia = () => {

    const [img, setImg] = React.useState();


    return (
        <>
            <div >
                <p>Ingrese una imagén de referencia</p>
                <input type="file" src={img}></input>
            </div>
        </>
    )
}

export default StepReferencia;