import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

import {FormContext} from "./reducer";
import Packages from "./components/packages";
import Categories from "./components/categories";
import Content from "./components/content";
import Checkout from "./components/checkout";

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

  function handleChange({type, payload}) {
    switch (type) {
      case 'package':
        dispatch({type: 'UPDATE_PACKAGE', payload});
        break;
      case 'category':
        dispatch({type: 'UPDATE_CATEGORY', payload});
        break;
      case 'content':
        dispatch({type:'UPDATE_CONTENT', payload});
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
          <Paper className={classes.instructions}>
            <Checkout/>
          </Paper>
          ) : (
          <div>
            <div className={activeStep !== 0 ? classes.hide : ''}>
              <Paper className={classes.instructions}>
                <Packages handleChange={handleChange}/>
              </Paper>
            </div>
            <div className={activeStep !== 1 ? classes.hide : ''}>
              <Paper className={classes.instructions}>
                <Categories handleChange={handleChange}/>
              </Paper>
            </div>
            <div className={activeStep !== 2 ? classes.hide : ''}>
              <Content handleChange={handleChange}/>
            </div>
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
