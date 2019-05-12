import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from './routes'
import theme from './theme';
import AdultModal from "./common/adultModal";

const App = ()=> {
  const isEntryModalShowedToday = ()=>{
    const preDateTime = localStorage.getItem('modal');
    const now = new Date().valueOf();
    if(!preDateTime){
      return false
    }
    if(new Date(preDateTime)){
      return now - preDateTime < 24*60*60*1000
    }
    return false
  };
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    {
      !isEntryModalShowedToday() && (
        <AdultModal/>
      )
    }
    <Routes/>
  </ThemeProvider>;
}

export default App;
