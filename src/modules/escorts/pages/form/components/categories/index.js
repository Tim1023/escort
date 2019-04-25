import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/Select';
import PropTypes from 'prop-types'

const data = [
  {
    id: 1,
    name: 'Non Asian Escorts',
  },
  {
    id: 2,
    name: 'Asian Escorts'
  },
  {
    id: 3,
    name: 'Two Girl Fantasy'
  },
  {
    id: 4,
    name: 'BDSM Services'
  },
  {
    id: 5,
    name: 'Sensual Message'
  },
  {
    id: 6,
    name: 'Clubs/Agencies'
  },
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 240,
  },
  select:{
   marginTop: theme.spacing(2),
  },
  label:{
    fontSize: 18
  }
}));

function Categories(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: '',
    name: '',
  });

  function handleChange({target: {value: id, name}}) {
    setValues(() => ({
      id,
      name,
    }));
    props.handleChange({type:'category',payload:id});
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        className={classes.label}
        component="legend">
        Categories
      </InputLabel>

      <NativeSelect
        className={classes.select}
        value={values.id}
        onChange={handleChange}
        input={<Input name="Category" id="category-label-placeholder"/>}
        name='Category'
      >
        {data.map(value =>
          <MenuItem
            key={value.id}
            value={value.id}>
            {value.name}
          </MenuItem>
        )}
      </NativeSelect>
    </FormControl>
  );
}
const propTypes = {
  handleChange: PropTypes.func.isRequired,
};

Categories.propTypes = propTypes;

export default Categories;
