import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
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
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

const Categories = () => {
  const classes = useStyles();
  return (
    <Toolbar component="nav" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Link
          key={section}
          to="#"
          className={classes.toolbarLink}
        >
          {section}
        </Link>
      ))}
    </Toolbar>
  )

}

export default Categories;
