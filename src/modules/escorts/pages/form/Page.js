import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

import Packages from "./components/packages";
import Categories from "./components/categories";
import {FormContext} from "./reducer";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(12),
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  hide: {
    display: 'none',
  }
}));

function getSteps() {
  return ['Select package', 'Select category', 'Create ad'];
}

function Form() {
  const {state, dispatch} = useContext(FormContext);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleChange({type, payload}) {
    switch (type) {
      case 'package':
        dispatch({type: 'UPDATE_PACKAGE', payload});
        break;
      case 'category':
        dispatch({type: 'UPDATE_CATEGORY', payload});
        break;
      default:
        throw new Error();
    }
  }

  return (
    <Container className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Paper className={classes.instructions}>
              <div className={activeStep !== 0 ? classes.hide : ''}>
                <Packages handleChange={handleChange}/>
              </div>
              <div className={activeStep !== 1 ? classes.hide : ''}>
                <Categories handleChange={handleChange}/>
              </div>
              <div className={activeStep !== 2 ? classes.hide : ''}>
                2222
              </div>
            </Paper>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Form;
