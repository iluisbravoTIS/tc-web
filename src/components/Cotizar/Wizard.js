import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StepMayor from './StepMayor';
import StepNombre from './StepNombre';
import StepUbicacionEspecifica from './StepUbicacionEspecifica';
import StepUbicacion from './StepUbicacion';
import StepDimensiones from './StepDimensiones';
import StepColorPiel from './StepColorPiel';
import StepColorTatuaje from './StepColorTatuaje';
import StepReferencia from './StepReferencia';
import StepComentarios from './StepComentarios';

import styled from 'styled-components';
import Contacts from '../../providers/contact';
import DealsService from '../../providers/deals';

const Styles = styled.div`
    .MuiRadio-colorPrimary.Mui-checked{
        color:#CE7344;
    }

    .MuiRadio-colorSecondary.Mui-checked,
    .MuiStepIcon-root.MuiStepIcon-completed,
    .MuiStepIcon-root.MuiStepIcon-active{
        color:#CE7344;
    }

    .MuiButton-containedPrimary{
      background-color: #E9CC64;
    }

    .MuiButton-containedPrimary:hover{
      background-color: #B4AE82;
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Mayor',
    'Ubicación del tatuaje',
    'Dimensiones del tatuaje',
    'Imagén de referencia',
    'Color de la piel',
    'Color del tatuaje',
    'Comentarios',
    'Nombre'
  ];
}


const VerticalLinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const steps = getSteps();

  const [wizardData, setWizardData] = React.useState(
    {
      mayorEdad: false,
      ubicacionTatuaje: "",
      alto: 0,
      ancho: 0,
      foto: "foto",
      colorPiel: "",
      colorTatuaje: "",
      comentarios: "",
      nombreCliente: "",
      apellidoCliente: "",
      telefonoCliente: "",
      emailCliente: ""
    }
  );

  const newDeal = async () => {
    debugger;
    const existEmail = await Contacts.GetByEmail(wizardData.emailCliente);
    const exitPhone = await Contacts.GetByPhone(wizardData.telefonoCliente);
    var contactData = {};
    if (existEmail.data.total > 0 || exitPhone.data.total > 0) { //Existe

    }
    else {
      const contactResult = await Contacts.New({
        confirmacion_de_edad: wizardData.mayorEdad,
        email: wizardData.emailCliente,
        phone: wizardData.telefonoCliente,
        firstname: wizardData.nombreCliente,
        lastname: wizardData.apellidoCliente
      });

      if (contactResult.isOk) {
        contactData.id = contactResult.data.id;
        contactData.firstname = wizardData.nombreCliente;
        contactData.lastname = wizardData.apellidoCliente;
      } else {
        //Mensaje de error en el alta del contacto
      }
    }
    const today = new Date();
    const dealResult = await DealsService.New(contactData.id,
      {
        dealname: `${contactData.firstname} ${contactData.lastname} ${Math.floor(today)}`,
        parte_del_cuerpo_a_tatuar: wizardData.ubicacionTatuaje,
        alto_del_tatuaje: Number(wizardData.alto),
        ancho_del_tatuaje: Number(wizardData.ancho),
        color_de_tatuaje: wizardData.colorTatuaje,
        comentarios_adicionales: wizardData.comentarios,
        color_de_piel: wizardData.colorPiel,
        foto_del_tatuaje: wizardData.foto
      });

    if (dealResult.isOk) {

    } else {
      //Mostramos error en el deal
    }
  }

  const handleNext = () => {
    console.log(activeStep)
    setDisabled(true);
    switch (activeStep) {
      case 0:
        let data = wizardData;
        data.mayorEdad = true;
        setWizardData(data);
        break;
      case 1:
        // setWizardData(data);
        break;
      case 7:
        //Buscar
        newDeal();
        console.log(wizardData)
        break;


      default:
        break;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <StepMayor setData={() => setWizardData} />;
      case 1:
        return <StepUbicacion wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 2:
        return <StepDimensiones wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 3:
        return <StepReferencia wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 4:
        return <StepColorPiel wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 5:
        return <StepColorTatuaje wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 6:
        return <StepComentarios wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      case 7:
        return <StepNombre wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} />;
      default:
        return 'Unknown step';
    }
  }

  return (
    <>
      <Styles>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Atras</Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                        disabled={disabled}
                      >
                        {activeStep === steps.length - 1 ? 'Enviar' : 'Aceptar'}

                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>¡Listo!<br />
                <br />
                Hemos recibido tus datos, esto sucederá ahora:<br />
                <br />
                1. Te mandaremos tu cotización por WhatsApp o Email.<br />
                2. Si tienes preguntas de tu cotización nos lo haces saber.<br />
                3. Cuando estés listo, deberás pagar el anticipo especificado en la cotización.<br />
                4. Deberás enviarnos el comprobante de pago del anticipo.<br />
                5. Te enviaremos nuestro calendario para que reserves tu cita.<br />
                6. Te esperamos con mucho gusto de poder atenderte.<br /></Typography>
              <Button onClick={handleReset} className={classes.button}>Reset</Button>
            </Paper>
          )}
        </div>
      </Styles>
    </>
  );
}

export default VerticalLinearStepper;