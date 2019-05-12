import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundImage: 'url(https://images.pexels.com/photos/415314/pexels-photo-415314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    backgroundPosition: 'center',
    height: '50vh',
    border: '2px solid #2ba6cb',
    position:'relative',
    '&:before':{
      position:'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      left:0,
      top:0,
      content: "' '",
      background: 'rgba(0,0,0,.5)',
}
  },
  content: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    height:'100%',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  head:{
    fontWeight: 'bold',
  },
  footer:{
    display:'flex',
    justifyContent:'space-around',
  }
}));

function AdultModal() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  function handleClose() {
    const now = new Date().valueOf();
    localStorage.setItem('modal',now.toString())
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent
          className={classes.root}
        >
          <DialogContentText  component='div' className={classes.content}>
            <Typography className={classes.head} variant="h2" color='primary'>
              Escorts
            </Typography>
            <Typography variant="h6" color='primary'>
              The pages contains adult themes and is intended for adults aged 18 and over. If you are sensitive to adult
              material please exit the site.
            </Typography>
            <div className={classes.footer}>
              <Button
                onClick={handleClose}
                variant="contained"
                color='secondary'
                className={classes.button}>
                Agree
              </Button>
              <a href='https://www.disney.com'>
                <Button
                  className={classes.button}>
                  leave
                </Button>
              </a>
            </div>

          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default AdultModal;
