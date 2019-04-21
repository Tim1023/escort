import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Search from "../../../../common/search";
import Categories from "../../../../common/categories";

const useStyles = makeStyles(theme => {
  console.log(theme)
  return {
    root: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.primary.contrastText,
      marginTop: theme.spacing(15),
    },
    banner: {
      height: '100vh',
      backgroundSize: 'cover',
      backgroundImage: 'url(https://images.pexels.com/photos/1157936/pexels-photo-1157936.jpeg)',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    search: {
      marginTop: theme.spacing(5),
    },
    categories:{
      marginTop: theme.spacing(4),
    }
  }
});

const Page = () => {
  const classes = useStyles();

  return <div>
    <div className={classes.banner}>
      <Typography className={classes.title} variant="h1" color="inherit" noWrap>
        Escort
      </Typography>
      <div className={classes.search}>
        <Search/>
      </div>
      <div className={classes.categories}>
        <Categories></Categories>

      </div>
    </div>
  </div>
}
export default Page;
