import React from "react";
import Button from "@material-ui/core/es/Button/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/es/Grid/Grid";

function Ads() {
  return(
    <Grid
      container
      justify='flex-end'
    >
      <Button
        component={Link}
        to='/escorts/create'
        variant="contained"
        color="secondary"
      >
        Add Ads
      </Button>

    </Grid>
  )
}

export default Ads;
