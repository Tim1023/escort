import React from "react";
import {makeStyles} from "@material-ui/core/styles/index";
import Container from "@material-ui/core/es/Container/Container";
import Paper from "@material-ui/core/es/Paper/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(12),
  },
}));


const Page = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        Login
      </Paper>
    </Container>
  )
}
export default Page;
