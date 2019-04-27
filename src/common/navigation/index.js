import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {fade} from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LanguageIcon from '@material-ui/icons/Language';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  title: {
    display: 'none',
    flexGrow: 1,
    textOverflow: 'unset',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textDecoration: 'none',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  }
}));


function ButtonAppBar({isAuthenticated}) {
  const classes = useStyles();
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isProfileMenuOpen = Boolean(profileAnchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setProfileAnchorEl(event.currentTarget);
  }

  function handleLanguageMenuOpen(event) {
    setLanguageAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setProfileAnchorEl(null);
    setLanguageAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const accountMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );
  const languageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isLanguageMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>English</MenuItem>
      <MenuItem onClick={handleMenuClose}>中文</MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/pricing">
        Pricing
      </MenuItem>
      <MenuItem onClick={handleLanguageMenuOpen}>
        Language
      </MenuItem>
      {isAuthenticated
        ? <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Account</p>
        </MenuItem>
        :
        <div>

          <MenuItem component={Link} to="/signUp">

            Sign Up
          </MenuItem>
          <MenuItem component={Link} to="/login">

            Login
          </MenuItem>
        </div>
      }

    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar color='default' position="fixed">
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            className={classes.title}
            variant="h6"
            noWrap>
            Logo
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Link
              to='/pricing'
              color="inherit"
              className={classes.link}
            >
              Pricing
            </Link>
            {isAuthenticated
              ? <IconButton
                aria-owns={isProfileMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              :
              <React.Fragment>
                <Link
                  to='/signUp'
                  color="inherit"
                  className={classes.link}
                >
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  color="inherit"
                  className={classes.link}
                >
                  Login
                </Link>
                <IconButton
                  aria-owns={isProfileMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleLanguageMenuOpen}
                  color="inherit"
                >
                  <LanguageIcon/>
                </IconButton>
              </React.Fragment>
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {accountMenu}
      {languageMenu}
      {renderMobileMenu}
    </div>
  );
}

ButtonAppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default ButtonAppBar;
