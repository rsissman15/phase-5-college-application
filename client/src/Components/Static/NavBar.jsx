import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';




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
    logoutUser();
    navigate('/home')  

  }

  const logInLinks=()=>{
    return (
      <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <img
                id='nav-logo'
              alt="airspace logo"
              src="https://i.fbcd.co/products/resized/resized-1500-1000/39b81c6d55057ae880a7ddeeb08686cedc2bf29a80142a4c77967a7dc5939ce5.webp"
              width="100"
              
              className="d-inline-block align-top"
            />
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