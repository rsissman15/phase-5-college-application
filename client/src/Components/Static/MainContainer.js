import React from 'react'
import { useState, useEffect } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import LoginPage from '../Authentication/LoginPage';
import SignUp from '../Authentication/SignUp';
import { header,baseUrl,getToken } from '../Globals.js';
import CollegeList from '../Colleges/CollegeList';
import College from '../Colleges/College';
import ApplicationsList from '../Applications/ApplicationsList';



function MainContainer() {
  const [currentUser,setCurrentUser]=useState({})
  const [loggedIn,setLoggedIn]=useState(false)
  const [colleges,setColleges]=useState([])
  const [applications,setApplications]=useState([])
  const [start,setStart]=useState(0)
  const [search, setSearch] = useState('')

  colleges.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

  
  const filterColleges=colleges.filter(college => college.name.toLowerCase().includes(search.toLowerCase()))
  const displayColleges=filterColleges.slice(start,start+10)
  

  const handleMoreColleges=()=>{
    setStart((start+10)%colleges.length)
  }
  

  const logInUser=(user)=>{
    setCurrentUser(user)
    setLoggedIn(true)
  }


  
  const submitApplication=(newApplication)=>{
    console.log(newApplication)
    setApplications([...applications,newApplication])
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
      .then(user=>{
        logInUser(user)
      }
        
    )} 
    if(loggedIn){
      fetch(baseUrl+'/colleges',{
        method:'GET',
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(college=>{
        setColleges(college)


      }
       
    )} 
    if(loggedIn){
      fetch(baseUrl+`/users/${currentUser.id}/applications`,{
        method:'GET',
        headers:{
          ...header,
          ...getToken()
        }
      })
      .then(res=>res.json())
      .then(application=>{
        setApplications(application)


      }
       
    )} 
  },[loggedIn])





  const logoutUser=()=>{
    setCurrentUser({})
    setLoggedIn(false)
    localStorage.removeItem('jwt')

  }



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar loggedIn={loggedIn} currentUser={currentUser} logoutUser={logoutUser}/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<LoginPage loggedIn={loggedIn} logInUser={logInUser}/>}></Route>
          <Route path="/signup" element={<SignUp logInUser={logInUser} loggedIn={loggedIn} />}></Route>
          <Route path='/colleges' element={<CollegeList colleges={displayColleges} handleMoreColleges={handleMoreColleges} search={search} setSearch={setSearch} loggedIn={loggedIn}/>}></Route>
          <Route path="/colleges/:id" element={ <College colleges={colleges} loggedIn={loggedIn} submitApplication={submitApplication}/> } />
          <Route path="/applications" element={ <ApplicationsList applications={applications} currentUser={currentUser} loggedIn={loggedIn}/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;