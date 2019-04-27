import React from "react";
import {makeStyles} from "@material-ui/core/styles/index";
import Container from "@material-ui/core/es/Container/Container";
import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from "react-router-dom";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(12),
  },
  header:{
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  item: {
    padding: theme.spacing(3),
  },
  row: {
    marginBottom: theme.spacing(2),
  },
  description: {
    minHeight: '4.5rem',
    padding: theme.spacing(0,3),
  },
  attributes:{
    borderTop: `1px solid ${theme.palette.primary.light}`,
    padding: theme.spacing(3,3,2,3),
    width: '100%',
    textAlign: 'center',
  }

}));

const packages = [
  {
    id: 1,
    name: '1 Day Package',
    description: 'Great for traveling/touring escorts',
    cost: 5,
    duration: 1,
  },
  {
    id: 2,
    name: '7 Day Package',
    description: 'Great for First-Time users to test out website effectiveness',
    cost: 5,
    duration: 1,
  },
  {
    id: 3,
    name: '14 Day Package',
    description: 'Great for agencies and full time working escorts',
    cost: 5,
    duration: 1,
  },
  {
    id: 4,
    name: '30 Day Package',
    description: 'Great for agencies and full time working escorts',
    cost: 5,
    duration: 1,
  },
];

const Page = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography
        className={classes.header}
        variant='h5'
      >
        Pick the best plan for you
      </Typography>
        <Grid
          container
          spacing={3}
        >
          {packages.map(item => (
              <Grid
                key={item.id}
                item
                lg={3}
                sm={6}
                xs={12}
              >
                <Paper className={classes.item}>
                <Grid
                  container
                  alignItems='center'
                  direction='column'
                >
                  <Typography
                    className={classes.row}
                    variant='h6'>
                    {item.name}
                  </Typography>
                  <Typography
                    className={clsx(classes.row,classes.description)}
                    variant='body1'>
                    {item.description}
                  </Typography>
                  <Typography
                    className={classes.row}
                    variant='h3'
                    color="secondary"
                  >
                    ${item.cost}
                  </Typography>
                  <div className={classes.attributes}>
                    <Typography
                      className={classes.row}
                      variant='body1'>
                      Ad Duration: {item.duration} day
                    </Typography>
                  </div>

                  <Button
                    component={Link}
                    to='/escorts/create'
                    color="secondary"
                    variant="contained"
                  >
                    Get Started
                  </Button>
                </Grid>
                </Paper>
              </Grid>
            ))
          }
        </Grid>
    </Container>
  )
}
export default Page;
