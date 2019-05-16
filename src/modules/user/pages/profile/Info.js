import React from "react";
import {Store} from "../../../../store";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import {makeStyles} from "@material-ui/core/styles/index";
import Button from "@material-ui/core/es/Button/Button";
import UserDialog from "./UserDialog";
import PasswordDialog from "./PasswordDialog";

const useStyles = makeStyles(theme => ({
  paper:{
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    '& div':{
      height: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
    }
  },
  topUp:{
    marginLeft: theme.spacing(2),
  },
  actionWrapper:{
    marginTop: theme.spacing(3),
  }
}));

function Info() {
  const classes = useStyles();

  const {state: {user: {id, email, username, point}}, dispatch} = React.useContext(Store);

  const [userOpen, setUserOpen] = React.useState(false);

  function toggleUserOpen() {
    setUserOpen(!userOpen);
  }

  const [passwordOpen, setPasswordOpen] = React.useState(false);

  function togglePasswordOpen() {
    setPasswordOpen(!passwordOpen);
  }

  return (
    <Grid container>
      <Grid xs={12} md={4} lg={4} xl={4} item>
        <Paper className={classes.paper}>
          <div>
            ID: {id}
          </div>
          <div>
            Email: {email}
          </div>
          <div>
            Username: {username}
          </div>
          <Grid component='div' container>
            <div>
              Points: {point}
            </div>
            <Button
              className={classes.topUp}
              size='small'
              variant="contained"
              color="secondary"
            >
              Top up
            </Button>
          </Grid>
          <Grid
            className={classes.actionWrapper}
            container
            justify='space-between'
          >
            <Button
              onClick={toggleUserOpen}
              variant="contained"
            >
              Edit profile
            </Button>
            <Button
              onClick={togglePasswordOpen}
              variant="contained"
            >
              Change Password
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <UserDialog
        open={userOpen}
        handleToggle={toggleUserOpen}
      />
      <PasswordDialog
        open={passwordOpen}
        handleToggle={togglePasswordOpen}
      />
    </Grid>


  )
}

export default Info;
