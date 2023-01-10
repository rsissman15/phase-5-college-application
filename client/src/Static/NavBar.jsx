import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Navbar = ({loggedIn,logoutUser,currentUser}) => {
  const classes = useStyles();

    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup">Signup</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>

    )
  }



export default Navbar