import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import Grid from "@material-ui/core/es/Grid/Grid";

const useStyles = makeStyles(theme => ({
  link:{
    textDecoration: 'none',
    '&:hover':{
      textDecoration: 'underline',
    }
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(3, 0),
  },
}));
const footers = [
  {
    title: 'Company',
    description: ['About', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Advertising'],
  },

  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function StickyFooter() {
  const classes = useStyles();

  return (

    <Container maxWidth="md" componen="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map(footer => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
              {footer.description.map(item => (
                <div key={item}>
                  <Typography
                    className={classes.link}
                    component={Link}
                    key={item}
                    to="#"
                    variant="subtitle1"
                    color="textSecondary">
                    {item}
                  </Typography>
                </div>

              ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default StickyFooter;
