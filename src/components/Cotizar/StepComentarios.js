import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textarea: {
    width:500,
    resize: 'none',
  }
}));

const StepComentarios = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div >
                <p>Si gustas, agrega descripción o comentarios sobre tu tatuaje.</p>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
               
                <textarea
                className={classes.textarea}
                maxlength="300"
                id="outlined-multiline-static"
                multiline
                rows={5}
                variant="outlined"
                placeholder='Comentarios [300 caracteres]'>
                 
                </textarea>
                </div>
            </form>
            
        </>
    )
}

export default StepComentarios;