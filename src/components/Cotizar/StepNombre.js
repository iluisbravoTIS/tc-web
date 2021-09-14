import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const StepNombre = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    const [nombre, setNombre] = React.useState();
    const [apellido, setApellido] = React.useState();
    const [whats, setWhats] = React.useState();
    const [email, setEmail] = React.useState();

    React.useEffect(() => {

        setNombre(wizard.nombreCliente);
        setApellido(wizard.apellidoCliente);
        setWhats(wizard.telefonoCliente);
        setEmail(wizard.emailCliente);

        if (wizard.nombreCliente && wizard.apellidoCliente && wizard.telefonoCliente && wizard.emailCliente) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    const onChangeInfo = (evt) => {
        let target = evt.target.name;
        let value = evt.target.value;

        switch (target) {
            case "nombre":
                wizard.nombreCliente = value;
                setWizard(wizard);
                setNombre(value);
                break;
            case "apellido":
                wizard.apellidoCliente = value;
                setWizard(wizard);
                setApellido(value);
                break;
            case "whatsapp":
                if (isNaN(value)) { return }
                wizard.telefonoCliente = value;
                setWizard(wizard);
                setWhats(value);
                break;
            case "email":
                wizard.emailCliente = value;
                setWizard(wizard);
                setEmail(value);
                break;
            default:
                break;
        }

        if (wizard.nombreCliente && wizard.apellidoCliente && wizard.telefonoCliente && validateEmail(wizard.emailCliente)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
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
                        <TextField fullWidth id="standard-basic"
                            label="Nombre*"
                            name="nombre"
                            onChange={onChangeInfo}
                            value={nombre}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="Apellido*"
                            name="apellido"
                            onChange={onChangeInfo}
                            value={apellido}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="WhatsApp*"
                            name="whatsapp"
                            onChange={onChangeInfo}
                            value={whats}
                            inputProps={{ maxLength: 10 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="Email*"
                            name="email"
                            onChange={onChangeInfo}
                            value={email}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                </Grid>
            </form>
            <br />
        </>
    )
}

export default StepNombre;