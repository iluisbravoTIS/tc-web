const Deal = (() => {

    const apiURL = 'https://tc-webapi.herokuapp.com'
    return {
        New: async (contactid, {dealname, parte_del_cuerpo_a_tatuar, alto_del_tatuaje, ancho_del_tatuaje, color_de_tatuaje, comentarios_adicionales, color_de_piel, foto_del_tatuaje}) => {
            try{
                const request = 
                {
                    dealstage: '1272076',
                    pipeline: 'default',
                    dealname,
                    parte_del_cuerpo_a_tatuar,
                    alto_del_tatuaje,
                    ancho_del_tatuaje,
                    color_de_tatuaje,
                    comentarios_adicionales,
                    color_de_piel,
                    foto_del_tatuaje
                };
                const httpMethod = 
                {
                    method: 'POST',
                    body: request,
                    headers:{
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    }
                };
                const url = `${apiURL}/deal/${contactid}`;
                const result = await fetch(url, httpMethod);
                return result;
            }catch(e){
                console.error(e);
                return { isOk=false, message: e.message};
            }
        }
    }

})();


// funcion para buscar si se debe mostrar el boton cotizar
// criterio consulta datos contacto propiedad permititir cotizar 