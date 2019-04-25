import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  textField: {
    marginRight: theme.spacing(10),
    width: 200,
  },
}));

const Selects = ({label, value, options, required, handleChange}) =>{
  const classes = useStyles();
  return(
    <TextField
      required={required}
      select
      label={label}
      className={classes.textField}
      value={value}
      onChange={handleChange}
      margin="normal"
    >
      {options.map(option => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
};

const propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

Selects.propTypes = propTypes;

export default Selects;
