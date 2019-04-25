import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types'

const data = [
  {
    id: '1',
    name: '1 Day Package',
    cost: 50,
  },
  {
    id: '2',
    name: '7 Days Package',
    cost: 90,
  },
  {
    id: '3',
    name: '14 Days Package',
    cost: 160,
  },
  {
    id: '4',
    name: '30 Days Package',
    cost: 300,
  },
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  comment:{
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  cost:{
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
  }
}));

const Packages = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  function handleChange({target:{value}}) {
    setValue(value);
    props.handleChange({type:'package', payload:value})
  }

  return (
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Package</FormLabel>
        <RadioGroup
          aria-label="Package"
          name="package"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          {data.map(item =>
            <React.Fragment
              key={item.id}
            >
              <FormControlLabel
                value={item.id}
                control={<Radio/>}
                label={item.name}/>
              <FormHelperText className={classes.comment}>
                Point cost: <span className={classes.cost}>{item.cost}【${item.cost / 10}】</span>
              </FormHelperText>
            </React.Fragment>
          )}

        </RadioGroup>
      </FormControl>

  );
};

const propTypes = {
  handleChange: PropTypes.func.isRequired,
};

Packages.propTypes = propTypes;

export default Packages;
