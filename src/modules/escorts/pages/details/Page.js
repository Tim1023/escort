import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles/index";
import Container from "@material-ui/core/container";
import Grid from '@material-ui/core/Grid';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    banner: {
      height: '80vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    container: {
      marginTop: '-10vh',
    },
    content: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
      height: '100%',
    },
    flex: {
      display: 'flex',
    },
    brief: {
      marginRight: theme.spacing(1),
      color: theme.palette.primary.contrastText,
      fontWeight: 'bold',
    },
    image: {
      maxHeight: 500,
      maxWidth: '100%',
      height: 'auto',
    },
    blockContent: {
      marginTop: theme.spacing(1),
    },
    noPaddingY: {
      paddingTop: 0 + '!important',
      paddingBottom: 0 + '!important',
    },
    detailImage: {
      display: 'block',
      padding: theme.spacing(2),
    }
  }
));

const escort = {
  images: [
    'https://www.newzealandgirls.co.nz/auckland-escorts/images_girls/24234_picture2_5275.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture2_5179.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture4_1894.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture5_9788.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture6_3021.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture8_6694.jpg',
    'https://www.newzealandgirls.co.nz/all/images_girls/34331_picture9_6290.jpg',
  ],
  coverImage: 'https://www.myangelsescorts.com/upload/new-zealand/auckland/asian-escorts/201904/image-38997.jpeg',
  name: 'Summer',
  age: 22,
  nationality: 'Indonesian',
  location: 'Auckland',
  phone: '0219999999',
  about: [
    {
      label: 'Nationality',
      value: 'Chinese',
    },
    {
      label: 'Age',
      value: '12',
    },
    {
      label: 'Size',
      value: '6',
    },
    {
      label: 'Height',
      value: '48kg',
    },
    {
      label: 'Eyes',
      value: 'Dark brown',
    },
    {
      label: 'Hair',
      value: 'DARK',
    },
    {
      label: 'Bust',
      value: 'D cup',
    },
    {
      label: 'In calls',
      value: 'Yes',
    },
    {
      label: 'Out calls',
      value: 'Yes',
    }
  ],
  workingHours: [
    {
      label: 'Monday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Tuesday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Wednesday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Thursday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Friday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Saturday',
      value: '12 Midnight  till  12 Midnight',
    },
    {
      label: 'Sunday',
      value: '12 Midnight  till  12 Midnight',
    },
  ],
  fees: [
    {
      label: 'Full Service[60mins]',
      value: '180',
    },
    {
      label: 'Full Service[30mins]',
      value: '180',
    },
    {
      label: 'Full Service[20mins]',
      value: '100',
    },
    {
      label: 'Sensual Massage[60mins]',
      value: '140',
    },
    {
      label: 'Sensual Massage[30mins]',
      value: '120',
    },
    {
      label: 'Outcalls/hr',
      value: '300',
    },
    {
      label: 'Overnight',
      value: '1500',
    },


  ],
  description: 'I will impress you from the moment you walk through the door... I am a stunning Indonesian escort. I have an exotic look and I always dress well in sexy lingerie with high heels to accentuate my soft legs. I have a sexy size 7 figure with busty D cup breasts, beautiful dark brown eyes and super soft skin. I am skilled and very experienced in giving you total satisfaction. I am very friendly, caring and you will enjoy our time together. My girlfriend experience can include a pampering shower to heat things up before moving to the bedroom for steamy bodyslides and erotic sensual massage. Once things have started to get aroused your pleasure is all mine. I am available 24/7 for incalls to my private location with easy parking. Book me today, you wont be disappointed! xx'
}

const detail = (e) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        className={classes.banner}
        style={{backgroundImage: `url(${escort.coverImage})`}}/>
      <Container className={classes.container}>
        <Paper className={classes.content}>
          <Grid
            spacing={2}
            container
            justify='space-between'
            alignItems='center'
          >
            <Grid item>
              <div className={classes.flex}>
                <Typography
                  className={classes.brief}
                  variant="h5"
                >
                  {escort.name}
                </Typography>
                <Typography className={classes.brief} variant="h5">
                  {escort.age}
                </Typography>
                <Typography className={classes.brief} variant="h5">
                  {escort.nationality}
                </Typography>
              </div>

              <Typography variant="h6">
                {escort.location}
              </Typography>

              <Typography variant="h6">
                {escort.phone}
              </Typography>
            </Grid>
            <Grid item>
              <Fab variant="extended" color="primary" aria-label="Add">
                <AddIcon/>
                Follow
              </Fab>
            </Grid>


          </Grid>

        </Paper>
        <Paper className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Grid
                container
                justify="center"
              >
                <img
                  className={classes.image}
                  alt='main'
                  src={escort.coverImage}/>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                {escort.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Grid
          container
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <Typography className={classes.brief} variant="h5">
                About me
              </Typography>
              <Grid
                className={classes.blockContent}
                container
                spacing={3}
              >
                {escort.about.map(item => (
                  <React.Fragment key={item.label}>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={4}>
                      <Typography variant="body1">
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={8}>
                      <Typography variant="body1">
                        {item.value}
                      </Typography>
                    </Grid>
                  </React.Fragment>

                ))}

              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <Typography className={classes.brief} variant="h5">
                Working hours
              </Typography>
              <Grid
                className={classes.blockContent}
                container
                spacing={3}
              >
                {escort.workingHours.map(item => (
                  <React.Fragment key={item.label}>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={4}>
                      <Typography variant="body1">
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={8}>
                      <Typography variant="body1">
                        {item.value}
                      </Typography>
                    </Grid>
                  </React.Fragment>

                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <Typography className={classes.brief} variant="h5">
                My Fees
              </Typography>
              <Grid
                className={classes.blockContent}
                container
                spacing={3}
              >
                {escort.fees.map(item => (
                  <React.Fragment key={item.label}>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={8}>
                      <Typography variant="body1">
                        {item.label}
                      </Typography>
                    </Grid>
                    <Grid
                      className={classes.noPaddingY}
                      item
                      xs={4}>
                      <Typography variant="body1">
                        {item.value}
                      </Typography>
                    </Grid>
                  </React.Fragment>

                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <Typography className={classes.brief} variant="h5">
                Extra services
              </Typography>
              <Grid
                className={classes.blockContent}
                container
                spacing={3}
              >
                <Grid item xs={12} sm={5}>
                  Extra Services [INCLUDED]:
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Typography variant="body1">
                    Bi Double • Blow Job • Body Slide • Breast Play • Cuddling • GFE • Hand Relief • Kissing • Oil /
                    Body
                    Slide • Oral
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                  Extra Services [EXCLUDED]:
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Typography variant="body1">
                    Bi Double • Blow Job • Body Slide • Breast Play • Cuddling • GFE • Hand Relief • Kissing • Oil /
                    Body
                    Slide • Oral
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Paper className={classes.content}>
              <Grid
                justify='space-evenly'
                container
              >
                {escort.images.map(item =>
                  <img
                    alt='coverImage'
                    key={item}
                    className={classes.detailImage}
                    src={item}/>
                )}
              </Grid>
            </Paper>

          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  )
}

export default detail;
