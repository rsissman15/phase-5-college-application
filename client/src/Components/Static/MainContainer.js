import React from 'react'
import { useState, useEffect } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import LoginPage from '../Authentication/LoginPage';
import SignUp from '../Authentication/SignUp';
import { header,baseUrl,getToken } from '../Globals.js';


function MainContainer() {
  const [currentUser,setCurrentUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)
  

  const logInUser=(user)=>{
    setCurrentUser(user)
    setLoggedIn(true)
  }

  useEffect(()=>{
    const token=localStorage.getItem('jwt')
    if(token && !loggedIn){
      fetch(baseUrl+'/get-current-user',{
        method:'GET',
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(user=>logInUser(user)
    )} 
  },[loggedIn])


  const logoutUser=()=>{
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')

  }

  
  console.log(currentUser)
  console.log(loggedIn)


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar loggedIn={loggedIn} currentUser={currentUser} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUp logInUser={logInUser} loggedIn={loggedIn} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;