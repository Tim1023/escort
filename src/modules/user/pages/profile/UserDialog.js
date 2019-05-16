import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'
import {updateUser} from "../../services";
import {Store} from "../../../../store";
import {cleanObject} from "../../../../utils/helper";

function UserDialog({open, handleToggle}) {
  const { dispatch } = React.useContext(Store);

  const [values, setValues] = React.useState({
    email: '',
    username: '',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = async() => {
    await updateUser(cleanObject(values), dispatch)
    handleClose();
  };
  const handleClose = () => {
    handleToggle();
    setValues({
      email: '',
      username: '',
    })
  };
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Update</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          value={values.email}
          onChange={handleChange('email')}
        />
        <TextField
          margin="dense"
          label="Username"
          fullWidth
          value={values.username}
          onChange={handleChange('username')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}


UserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default UserDialog;
