import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import LanguageIcon from '@material-ui/icons/Language';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
    textOverflow: 'unset',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
      <MenuItem component={Link} href="/pricing">
        Pricing
      </MenuItem>

      {isAuthenticated
        ? <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Account</p>
        </MenuItem>
        :
        <React.Fragment>

          <MenuItem component={Link} href="/register">

            Sign Up
          </MenuItem>
          <MenuItem component={Link} href="/login">

            Login
          </MenuItem>
        </React.Fragment>
      }
      <MenuItem onClick={handleLanguageMenuOpen}>
        Language
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Escort
          </Typography>

          <div className={classes.sectionDesktop}>
            <Link
              href='/pricing'
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
                  href='/register'
                  color="inherit"
                  className={classes.link}
                >
                  Sign Up
                </Link>
                <Link
                  href='/login'
                  color="inherit"
                  className={classes.link}
                >
                  Login
                </Link>
              </React.Fragment>

            }
            <IconButton
              aria-owns={isProfileMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              onClick={handleLanguageMenuOpen}
              color="inherit"
            >
              <LanguageIcon/>
            </IconButton>
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
