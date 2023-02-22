import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';




export default function NavBar({loggedIn,logoutUser,currentUser}) {
 
  const navigate=useNavigate();


  const logOutLinks=()=>{
    return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">College Power Planner</Navbar.Brand>
        </Container>
      </Navbar>
    </>     
    );

  }

  const handleLogout=e=>{
    e.preventDefault();
    logoutUser()
    navigate('/home')  
  }

  const logInLinks=()=>{
    return (
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <Avatar sx={{ m: 12, bgcolor: '#00C5FF', align:"center"}} onClick={()=>(navigate('/home'))}>
                <SchoolIcon />
            </Avatar>         
          </Navbar.Brand>
        <Navbar.Text id="current-user-name">
                <b>{`Welcome ${currentUser.username}`}</b>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
            <Button variant="info" className="ms-3" href="/colleges">
              Colleges
            </Button>
            <Button variant="info" className="ms-3" href="/applications">
              My Applications
            </Button>
            <Button variant="info" className="ms-3" href="#" onClick={handleLogout}>
              Logout
            </Button>
            <Avatar sx={{ m: 12, bgcolor: '#00C5FF', align:"center"}} onClick={()=>(navigate('/me'))}>
                <Person2Icon />
            </Avatar>
       
            
        </Navbar.Collapse>
        </Container>
      </Navbar> 
  
     </>
    
    );

  }
  return(
    <div>
      {loggedIn ? logInLinks() : logOutLinks()}
    </div>
    
  )
  
}