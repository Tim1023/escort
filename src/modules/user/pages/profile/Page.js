import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/es/Container/Container";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(12),
  },
}));

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            <LinkTab label="MY ADS" href="ads" />
            <LinkTab label="MY POINTS" href="points" />
            <LinkTab label="MY FAVORITES" href="favorites" />
            <LinkTab label="MY PROFILE" href="info" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Page One</TabContainer>}
        {value === 1 && <TabContainer>Page Two</TabContainer>}
        {value === 2 && <TabContainer>Page Three</TabContainer>}
      </div>
    </Container>
  );
}

export default NavTabs;
