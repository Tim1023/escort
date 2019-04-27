import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  header:{
    marginBottom: theme.spacing(2),
  },
  cost:{
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
  },
  button:{
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(0,2),
    minWidth: 90,
  },
}));

const Finish = () => {
  const classes = useStyles();
  return <div className={classes.root}>
      <Typography
        className={classes.header}
        variant='h6'>
        Order Details
      </Typography>
      <div className={classes.header}>
        <Typography variant='body1'>
          Order ID: 201904271740206880
        </Typography>
        <Typography variant='body1'>
          Ad Name: tttt
        </Typography>
        <Typography variant='body1'>
          Category: Commercial Ads
        </Typography>
        <Typography variant='body1'>
          Package Name: 7 Days Package
        </Typography>
        <Typography variant='body1'>
          Payment Amount: <span className={classes.cost}>90</span> Points【$9】
        </Typography>
      </div>
    <div>
      <Button
        component={Link}
        to='/'
        variant="contained"
        className={classes.button}>
        Back
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Pay
      </Button>
    </div>
  </div>
};



export default Finish;
