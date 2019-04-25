import React from 'react';
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {extraServiceTypes} from "../content/options";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3, 0),
    width: '100%'
  },
  checkbox: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('md')]: {
      width: 'calc( 100% / 3 )',
    },
    marginRight: 0,
  },
  formGroup: {
    height: '80vh',
    overflowY: 'scroll',
  },
}));

function ExtraServices(props) {
  const classes = useStyles();
  const initState = extraServiceTypes.reduce((obj, item) => {
    obj[item] = false;
    return obj
  }, {});
  const [state, setState] = React.useState(initState);

  const handleChange = name => event => {
    const newState = {...state, [name]: event.target.checked};
    const result = Object.entries(newState).filter(([name,value]) => value).map(item => item[0])
    setState(newState);
    props.handleChange(result)
  };

  return (
    <FormControl
      required
      component="fieldset"
      className={classes.formControl}>
      <FormLabel component="legend">{props.label} </FormLabel>
      <FormGroup
        className={classes.formGroup}
        row>
        {extraServiceTypes.map(item =>
          <FormControlLabel
            className={classes.checkbox}
            key={item}
            control={<Checkbox checked={state[item]} onChange={handleChange(item)} value={item}/>}
            label={item}
          />
        )}
      </FormGroup>
    </FormControl>
  );
}

const propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

ExtraServices.propTypes = propTypes;

export default ExtraServices;
