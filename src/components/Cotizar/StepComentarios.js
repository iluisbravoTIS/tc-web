import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textarea: {

    resize: 'none',
  }
}));

const StepComentarios = (props) => {
  let wizard = props.wizard;
  let setWizard = props.setWizard;

  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    let newText = event.target.value;
    wizard.comentarios = newText;
    setWizard(wizard);
    setValue(newText);
  };

  return (
    <>
      <div >
        <p>Si gustas, agrega descripción o comentarios sobre tu tatuaje.</p>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>

          <TextField
            fullWidth
            className={classes.textarea}
            id="outlined-multiline-static"
            multiline
            rows={5}
            variant="outlined"
            placeholder='Comentarios [300 caracteres]'
            inputProps={{ maxLength: 300 }}
            value={value}
            onChange={handleChange}
          >

          </TextField>
        </Grid>
      </Grid>


    </>
  )
}

export default StepComentarios;