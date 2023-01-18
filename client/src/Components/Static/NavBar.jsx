import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';


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


export default function NavBar({loggedIn,logoutUser,currentUser}) {
  const classes = useStyles();

  const logOutLinks=()=>{
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/home">Homepage</Link>
            </Typography>
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
            <Button color="inherit">
              <Link to="/signup">Signup</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );

  }


  const handleLogout=e=>{
    e.preventDefault();
    logoutUser();
  }

  const logInLinks=()=>{
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <Link to="/home">Homepage</Link>
          </Typography>
          <Button color="inherit">
            <a href="#"onClick={handleLogout}>Logout</a>
          </Button>
          <Button color="inherit">
            <Link to="/all_colleges">Colleges</Link>
          </Button>
          <Button color="inherit">
            <Link to="/applications">Applications</Link>
          </Button>
        </Toolbar>
      </AppBar>
      </Box>
    );

  }
  return(
    <div>
      {loggedIn ? logInLinks() : logOutLinks()}
    </div>
    
  )
  
}