import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const StepColorTatuaje = () => {

    const [value, setValue] = React.useState('0');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <FormControl component="fieldset">
            <FormLabel component="legend">Mi tatuaje será</FormLabel>
            <RadioGroup name="color" value={value} onChange={handleChange}>
                <FormControlLabel control={<Radio color="primary" />} value="0" label="Color" />
                <FormControlLabel control={<Radio color="primary" />} value="1" label="Blanco y Negro" />
            </RadioGroup>
            </FormControl>
        </>
    )
}

export default StepColorTatuaje;