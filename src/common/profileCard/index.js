import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/styles";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    backgroundColor: theme.palette.primary.main,
  },
  content:{
    padding: theme.spacing(1),
  },
  contentLine: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  featured:{
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
  },
  vip:{
    backgroundColor: '#e79627',
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 2,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

function ImgMediaCard({escort}) {
  const classes = useStyles();
  const {name, ethic, price, location, age, image, isFeatured} = escort;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body1" component="h2" className={isFeatured ? classes.featured : null}>
            {isFeatured && <span className={classes.vip}>VIP</span>}
            {name}
          </Typography>
          <div className={classes.contentLine}>
            <Typography variant="body2" color="textSecondary" component="p">
              {ethic}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ${price}
            </Typography>
          </div>
          <div className={classes.contentLine}>
            <Typography variant="body2" color="textSecondary" component="p">
              {location}
            </Typography>
            <Typography variant="body2" component="p">
              {age}yr
            </Typography>
          </div>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
const propTypes = {
  escort: PropTypes.object.isRequired,
};

ImgMediaCard.propTypes = propTypes;

export default ImgMediaCard;
