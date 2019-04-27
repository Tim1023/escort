import React from 'react';
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/Select';

import {categories} from "./options";

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
        {categories.map(value =>
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
