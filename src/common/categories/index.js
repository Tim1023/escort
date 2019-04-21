import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Link from "@material-ui/core/Link";
import {makeStyles} from '@material-ui/core/styles';

const sections = [
  'Non Asian Escorts',
  'Asian Escorts',
  'Two Girl Fantasy',
  'BDSM Services',
  'Sensual Message',
  'Clubs/Agencies',
]
const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Categories = () => {
  const classes = useStyles();
  return (
    <Toolbar component="nav" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          key={section}
          variant="h7"
          href="#"
          className={classes.toolbarLink}
        >
          {section}
        </Link>
      ))}
    </Toolbar>
  )

}

export default Categories;
