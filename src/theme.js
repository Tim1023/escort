import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#ffffff',
      dark: '#0c0c0c',
      contrastText: '#c2185b',
    },
    secondary: {
      light: '#fa5788',
      main: '#c2185b',
      dark: '#8c0032',
      contrastText: '#ffffff',
    },
    background: {
      default: "#0a0a0a",
      paper: '#272526'
    },
    type: 'dark',
  },
});

export default theme;
