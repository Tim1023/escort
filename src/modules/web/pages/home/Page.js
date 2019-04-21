import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Pagination from '@kevinwang0316/react-materialui-pagination';

import Search from "../../../../common/search";
import Categories from "../../../../common/categories";
import ProfileCard from "../../../../common/profileCard";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.primary.contrastText,
      marginTop: theme.spacing(15),
    },
    subTitle: {
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(3),
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
    categories: {
      marginTop: theme.spacing(4),
    },
    container: {
      marginTop: '-30vh',
    },
    paper:{
      padding: theme.spacing(3),
    },
    pagination:{
      marginTop: theme.spacing(3),
      display: 'flex',
      justifyContent:'center',
    }
  }
));

const featuredEscorts = [
  {
    id: 1,
    name: 'Lizard',
    price: 160,
    location: 'Auckland',
    age: 23,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 2,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201904/image-42261.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 3,
    name: 'Alice',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 4,
    name: 'Bob',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/wechat-escorts/201903/image-37466.jpeg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 5,
    name: 'Tom',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 6,
    name: 'Jerry',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/sensual-massage/201904/image-40393.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
  {
    id: 7,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: true,
    ethnic: 'Europe',
  },
  {
    id: 8,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: true,
    ethnic: 'Chinese',
  },
];
const normalEscorts = [
  {
    id: 1,
    name: 'Lizard',
    price: 160,
    location: 'Auckland',
    age: 23,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 2,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201904/image-42261.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 3,
    name: 'Alice',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 4,
    name: 'Bob',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/wechat-escorts/201903/image-37466.jpeg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 5,
    name: 'Tom',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 6,
    name: 'Jerry',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/sensual-massage/201904/image-40393.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 7,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Europe',
  },
  {
    id: 8,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 11,
    name: 'Lizard',
    price: 160,
    location: 'Auckland',
    age: 23,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 12,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201904/image-42261.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 13,
    name: 'Alice',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 14,
    name: 'Bob',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/wechat-escorts/201903/image-37466.jpeg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 15,
    name: 'Tom',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 16,
    name: 'Jerry',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/sensual-massage/201904/image-40393.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 17,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Europe',
  },
  {
    id: 18,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 21,
    name: 'Lizard',
    price: 160,
    location: 'Auckland',
    age: 23,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 22,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201904/image-42261.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 23,
    name: 'Alice',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 24,
    name: 'Bob',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/wechat-escorts/201903/image-37466.jpeg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 25,
    name: 'Tom',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 26,
    name: 'Jerry',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/sensual-massage/201904/image-40393.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
  {
    id: 27,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Europe',
  },
  {
    id: 28,
    name: 'Lily',
    price: 180,
    location: 'Auckland',
    age: 18,
    image: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201902/image-31140.jpg',
    isFeatured: false,
    ethnic: 'Chinese',
  },
];

const Page = () => {
  const classes = useStyles();
  const [offset, setOffset] = React.useState(0);

  function onPageChange(e) {
    setOffset(e)
  }
  return <div>
    <div className={classes.banner}>
      <Typography className={classes.title} variant="h3" color="inherit" noWrap>
        Escort
      </Typography>
      <div className={classes.search}>
        <Search/>
      </div>
      <div className={classes.categories}>
        <Categories/>
      </div>
    </div>
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Typography className={classes.subTitle} variant="h5" color="inherit" noWrap>
          Featured
        </Typography>
        <Grid container spacing={3}>
          {featuredEscorts.map(escort => (
            <Grid
              item
              key={escort.id}
              xs={6}
              md={4}
              lg={3}
            >
              <ProfileCard escort={escort}/>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Typography className={classes.subTitle} variant="h5" color="inherit" noWrap>
          Escorts
        </Typography>
        <Grid container spacing={3}>
          {normalEscorts.map(escort => (
            <Grid
              item
              key={escort.id}
              xs={6}
              md={4}
              lg={3}
            >
              <ProfileCard escort={escort}/>
            </Grid>
          ))}
        </Grid>
        <div className={classes.pagination}>
          <Pagination
            offset={offset}
            limit={32}
            total={640}
            onClick={onPageChange}
          />
        </div>
      </Paper>
    </Container>
  </div>
}
export default Page;
