const Deal = (() => {

    const apiURL = 'http://7053b52ae2d6.ngrok.io/contact'
    return {
        New: async (contact) => {
            const request = 
            {
                dealstage,
                pipeline,
                dealname,
                parte_del_cuerpo_a_tatuar,
                alto_del_tatuaje,
                ancho_del_tatuaje,
                color_de_tatuaje,
                comentarios_adicionales,
                foto_del_tatuaje,
                color_de_piel
            };
            const httpMethod = 
            {
                method: 'POST',
                body: JSON.stringify(request),
                headers:{
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            };
            const url = {apiURL}
            const result = await fetch();
        },
        UploadImage: async () => {
            
        }
    }

})();


// funcion para buscar si se debe mostrar el boton cotizar
// criterio consulta datos contacto propiedad permititir cotizar 