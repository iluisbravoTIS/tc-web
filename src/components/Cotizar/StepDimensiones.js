import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Grid, InputLabel, Input, FormHelperText} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import SimpleModal from './ModelaStepDimensiones';
import { OpenInBrowser } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      backgroundSize: "contain"
    }
  })
);


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const StepDimensiones = () => {
    const [open, setOpen] = React.useState(false);

    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let value = '';

    const onChangeInputNumber = (e) => {
        const regex = /^[a-z\b]+$/;

        console.log(e.value);

        if (e.target.value === '' || regex.test(e.target.value)) {
            value = e.target.value;
        }
    }

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [alto, setAlto] = React.useState();
    const [ancho, setAncho] = React.useState();


    const onChangeInfo = (evt) => {
        let target = evt.target.name;
        let value = evt.target.value;
        
        switch (target) {
            case "alto":
                setAlto(value);
                break;
            case "ancho":
                setAncho(value);
                break;
            default:
                break;
        }
    }
    
    //<img width="30%" heigh="30%" src="./assets/ejemplo_tatuaje.png" alt="ejemplo de tatuaje"/>-->
    return (
        <>
            <div >
                <Grid container>
                    <Grid item xs={12}>
                        <p>De qué tamaño sería tu tatuaje.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}> </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl>

                            <Grid item xs={12}>
                                <InputLabel htmlFor="alto">Alto</InputLabel>
                                <Input  
                                    id="alto" 
                                    aria-describedby="helper-altura" 
                                    type="number"
                                    pattern="[0-9]{0,5}"
                                    min={0}
                                    max={250}
                                    onChange={onChangeInfo}
                                    />
                                <FormHelperText id="helper-altura">Tamaño en cm.</FormHelperText>
                            </Grid>
                        </FormControl>
                        <FormControl>
                            <Grid item xs={12}>
                                <InputLabel htmlFor="ancho">Ancho</InputLabel>
                                <Input  
                                    id="ancho" 
                                    aria-describedby="helper-ancho" 
                                    type="number"
                                    pattern="[0-9]{0,5}"
                                    min={0}
                                    max={250}
                                    onChange={onChangeInfo}
                                    />
                                <FormHelperText id="helper-ancho">Tamaño en cm.</FormHelperText>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <CardMedia
                            className={classes.media}
                            image="./assets/ejemplo_tatuaje.png"
                            title="Ejemplo de tamaño"
                        />
                    </Grid>
                    {/* <Grid container>
                        <Grid item xs={4} sm={9}></Grid>
                        <Grid item xs={8} sm={3}>
                            <SimpleModal/>
                        </Grid>
                    </Grid> */}
                </Grid>
            </div>
        </>
    )
}

export default StepDimensiones;
