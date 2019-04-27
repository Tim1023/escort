import React from 'react';
import PropTypes from 'prop-types'
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from "@material-ui/core/FormLabel";

import Selects from "./selects";
import ExtraServices from "../extraServices";
import {
  fields,
  escortBasicFields,
  escortRatesFields,
  workingHoursFields,
  contactFields, locationFields,
} from "./fields";
import {
  aucklandSuburbs,
  centralNorthIslandSuburbs, christchurchSuburbs,
  hamiltonSuburbs,
  northlandSuburbs, southIslandSuburbs,
  taurangaSuburbs, wellingtonSuburbs
} from "./options";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginRight: theme.spacing(10),
    width: 200,
  },
}));


function Content(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState(fields);

  const handleChange = name => event => {
    const value = Array.isArray(event) ? event : event.target.value;
    setValues({...values, [name]: value});
    props.handleChange({type: 'content', payload: {[name]: value}});
  };

  const getSuburbs = () => {
    switch (values.city) {
      case 'Auckland':
        return aucklandSuburbs;
      case 'Northland':
        return northlandSuburbs;
      case 'Hamilton':
        return hamiltonSuburbs;
      case 'Central North Island':
        return centralNorthIslandSuburbs;
      case 'Tauranga':
        return taurangaSuburbs;
      case 'Wellington':
        return wellingtonSuburbs;
      case 'Christchurch':
        return christchurchSuburbs;
      case 'South Island':
        return southIslandSuburbs;
      default:
        return [];
    }
  };

  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>

        <FormLabel component="legend">Basic info</FormLabel>
        <form className={classes.container}>

          {escortBasicFields.map(item =>
            !item.options
              ? <TextField
                required={item.required}
                key={item.value}
                label={item.label}
                className={classes.textField}
                value={values[item.value]}
                onChange={handleChange(item.value)}
                margin="normal"
              />
              : <Selects
                required={item.required}
                key={item.value}
                label={item.label}
                value={values[item.value]}
                options={item.options}
                handleChange={handleChange(item.value)}
              />
          )}
        </form>
      </Paper>
      <Paper className={classes.paper}>

        <FormLabel component="legend">Rates</FormLabel>
        <form className={classes.container}>

          {escortRatesFields.map(item =>
            !item.options
              ? <TextField
                required={item.required}
                key={item.value}
                label={item.label}
                className={classes.textField}
                value={values[item.value]}
                onChange={handleChange(item.value)}
                margin="normal"
              />
              : <Selects
                required={item.required}
                key={item.value}
                label={item.label}
                value={values[item.value]}
                options={item.options}
                handleChange={handleChange(item.value)}
              />
          )}
        </form>
      </Paper>
      <Paper className={classes.paper}>

        <FormLabel component="legend">Extra Services</FormLabel>
        <form className={classes.container}>
          <ExtraServices
            label={'Extra Services[INCLUDED]'}
            handleChange={handleChange('includedServices')}
          />
        </form>
        <form className={classes.container}>
          <ExtraServices
            label={'Extra Services[EXCLUDED]'}
            handleChange={handleChange('excludedServices')}
          />
        </form>
      </Paper>
      <Paper className={classes.paper}>

        <FormLabel component="legend">Working Hours</FormLabel>
        <form className={classes.container}>

          {workingHoursFields.map(item =>
            <Selects
              required={item.required}
              key={item.value}
              label={item.label}
              value={values[item.value]}
              options={item.options}
              handleChange={handleChange(item.value)}
            />
          )}
        </form>
      </Paper>
      <Paper className={classes.paper}>

        <FormLabel component="legend">Contact</FormLabel>
        <form className={classes.container}>
          {contactFields.map(item =>
            !item.options
              ? <TextField
                required={item.required}
                key={item.value}
                label={item.label}
                className={classes.textField}
                value={values[item.value]}
                onChange={handleChange(item.value)}
                margin="normal"
              />
              : <Selects
                required={item.required}
                key={item.value}
                label={item.label}
                value={values[item.value]}
                options={item.options}
                handleChange={handleChange(item.value)}
              />
          )}
        </form>
      </Paper>
      <Paper className={classes.paper}>

        <FormLabel component="legend">Location</FormLabel>
        <form className={classes.container}>

          {locationFields.map(item =>
            <Selects
              required={item.required}
              key={item.value}
              label={item.label}
              value={values[item.value]}
              options={item.options}
              handleChange={handleChange(item.value)}
            />
          )}
          <Selects
            required
            label='Suburb'
            value={values.suburb}
            options={getSuburbs()}
            handleChange={handleChange('suburb')}
          />
        </form>
      </Paper>
    </div>

  );
}

const propTypes = {
  handleChange: PropTypes.func.isRequired,
};

Content.propTypes = propTypes;

export default Content;
