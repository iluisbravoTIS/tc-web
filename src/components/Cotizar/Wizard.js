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

const Styles = styled.div`
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
    'Ubicación específica',
    'Dimensiones del tatuaje',
    'Referencia',
    'Color de la piel',
    'Color del tatuaje',
    'Comentarios',
    'Nombre'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepMayor />;
    case 1:
      return <StepUbicacion />;
    case 2:
      return <StepUbicacionEspecifica />
    case 3:
      return <StepDimensiones />;
    case 4:
      return <StepReferencia />;
    case 5:
      return <StepColorPiel />; //
    case 6:
      return <StepColorTatuaje />; //
    case 7:
      return <StepComentarios />; //
    case 8:
      return <StepNombre />;
    default:
      return 'Unknown step';
  }
}

const VerticalLinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>Back</Button>
                      <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} className={classes.button}>Reset</Button>
            </Paper>
          )}
        </div>
      </Styles>

    </>

  );
}

export default VerticalLinearStepper;