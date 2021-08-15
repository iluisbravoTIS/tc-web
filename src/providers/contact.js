import validator from 'validator'



const Contacts = (() =>{
    
    const apiURL = 'https://tc-webapi.herokuapp.com/contact'
    return {
        New: async ({firstname, lastname, phone, email, confirmacion_de_edad}) =>{
            //Validaciones
            if(!firstname)
                return { isOk: false, message: 'No se ha especificado el primer nombre'};
            if(!lastname)
                return { isOk: false, message: 'No se ha especificado el apellido'};
            if(!validator.isMobilePhone(phone))
                return { isOk: false, message: 'Ingrese un telefono valido'};
            if(!validator.isEmail(email)) 
                return { isOk: false, message: 'Ingrese un email valido'};
            if(!confirmacion_de_edad)
                return { isOk: false, message: 'No ha confirmado su edad'};
    
            const data = {
                firstname,
                lastname,
                phone,
                email,
                confirmacion_de_edad
            }

            const url = `${apiURL}`;
            var params = {
                 method: 'POST',
                 body: JSON.stringify(data),
                 headers: {
                    "content-type": 'application/json'
                },
                mode: 'cors',
                cache: 'default' 
            };

            const rawRespose = await fetch(url, params);
            const response = rawRespose.json();
            return response;

        },
        GetByEmail: async (email) =>{
            try{
                const url = `${apiURL}/ByEmail/${email}`;
                const rawRespose = await fetch(url);
                const response = rawRespose.json();
                return response;
            }catch(e){
                console.error(e);
            }
        },
        GetByPhone: async (phone) =>{
            try{
                const url = `${apiURL}/ByPhone/${phone}`;
                const rawRespose = await fetch(url);
                const response = rawRespose.json();
                return response;
            }catch(e){
                console.error(e);
            }
        }
    }
})();

export default Contacts;


