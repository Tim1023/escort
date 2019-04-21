import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from './routes'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes/>
    </ThemeProvider>
  );
}

export default App;
