import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StepNombre = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;

    const [nombre, setNombre] = React.useState();
    const [apellido, setEdad] = React.useState();
    const [whats, setWhats] = React.useState();
    const [email, setEmail] = React.useState();


    const onChangeInfo = (evt) => {
    let target = evt.target.name;
    let value = evt.target.value;
    
        switch (target) {
            case "nombre":
                wizard.nombreCliente =value;
                setWizard(wizard);
                setNombre(value);
                break;
            case "apellido":
                wizard.apellidoCliente =value;
                setWizard(wizard);
                setEdad(value);
                break;
            case "whatsapp":
                wizard.telefonoCliente =value;
                setWizard(wizard);
                setWhats(value);
                break;
            case "email":
                wizard.emailCliente =value;
                setWizard(wizard);
                setEmail(value);
                break;
            default:
                break;
        }
    }

    const submitInfo = (evt) => {
        evt.preventDefault();

        let info = {
            nombre,
            apellido,
            whats,
            email
        };
        console.log(info, "Nombre");
    }

    return (
        <>

            <form noValidate autoComplete="off" onSubmit={submitInfo}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic" label="Nombre*" name="nombre" onChange={onChangeInfo}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic" label="Apellido*" name="apellido" onChange={onChangeInfo}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic" label="WhatsApp*" name="whatsapp" onChange={onChangeInfo}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic" label="Email*" name="email" onChange={onChangeInfo}/>
                    </Grid>
                </Grid>

            </form>
        </>
    )
}

export default StepNombre;