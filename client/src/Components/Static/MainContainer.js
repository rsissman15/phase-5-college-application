import React from 'react'
import { useState, useEffect,useMemo,useContext } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import LoginPage from '../Authentication/LoginPage';
import SignUp from '../Authentication/SignUp';
import { header } from '../Globals.js';
import CollegeList from '../Colleges/CollegeList';
import College from '../Colleges/College';
import ApplicationsList from '../Applications/ApplicationsList';
import Profile from './Profile/Profile';
import { UserContext } from '../../Context/UserContext';
import { CollegeContext } from '../../Context/CollegeContext';
import { ApplicationContext } from '../../Context/ApplicationContext';




function MainContainer() {


  // const [currentUser,setCurrentUser]=useState(null)
  // const [loggedIn,setLoggedIn]=useState(false)
  //const [colleges,setColleges]=useState([])
  //const [applications,setApplications]=useState([])
  const [search, setSearch] = useState('')
  const [currentPage,setCurrentPage]=useState(1)
  const [collegesPerPage]=useState(150)

  const { currentUser,setCurrentUser,loggedIn,setLoggedIn,logInUser } = useContext(UserContext);
  const {colleges,setColleges}=useContext(CollegeContext)
  const {applications,setApplications}=useContext(ApplicationContext)


  colleges.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

applications.sort(function(a, b){
  if(a.name < b.name) { return -1; }
  if(a.name > b.name) { return 1; }
  return 0;
})


const paginate=(pageNumber)=>{
  setCurrentPage(pageNumber)
  setSearch('')
}

  

  // const logInUser=(user)=>{
    
  //     setCurrentUser(user)
  //     setLoggedIn(true)
    
    
  // }

  const submitApplication=(newApplication)=>{
 
    setApplications([...applications,newApplication])
  }

//   useEffect(()=>{
    
//       fetch('/get-current-user',{
//         method:'GET',
//         headers:{
//           ...header
         
//         }
//       })
//       .then(res=>res.json())
//       .then(user=>{
//         if(!user.error){
//           logInUser(user)
          
//         }
//       }
        
//     )

// },[])

  // useEffect(()=>{
    // if(loggedIn){
    //   fetch('/colleges',{
    //     method:'GET',
    //     headers:{
    //       ...header
    //     }
    //   })
    //   .then(res=>res.json())
    //   .then(college=>{
    //     setColleges(college)
        


    //   }
       
    // )} 
  //   if(loggedIn){
  //     fetch(`/users/${currentUser.id}/applications`,{
  //       method:'GET',
  //       headers:{
  //         ...header
  //       }
  //     })
  //     .then(res=>res.json())
  //     .then(application=>{
  //       setApplications(application)


  //     }
       
  //   )} 
  // },[loggedIn])


  const collegeData = useMemo(() => {
    let computedCollege = colleges;
  
    if (search) {
      setCurrentPage(1)
        computedCollege = computedCollege.filter(
            college =>
            college.name.toLowerCase().includes(search.toLowerCase())
        );
    }
   
    //Current Page slice
    return computedCollege.slice(
      (currentPage - 1) * collegesPerPage,
      (currentPage - 1) * collegesPerPage + collegesPerPage
  );
  }, [colleges, currentPage, search]);


  const logoutUser=()=>{
    fetch('/logout',{
      method: "DELETE"
    })
   setCurrentUser(null)
   setLoggedIn(false)
   setColleges([])
   setCurrentPage(1)
   setSearch('')

  }



 


 




  return (
    <BrowserRouter>
      <div className="App">
        <Navbar logoutUser={logoutUser}/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path='/colleges' element={<CollegeList colleges={collegeData} collegesPerPage={collegesPerPage} totalColleges={colleges.length} paginate={paginate} search={search} setSearch={setSearch}/>}></Route>
          <Route path="/colleges/:id" element={ <College submitApplication={submitApplication}/> } />
          <Route path="/applications" element={ <ApplicationsList/> } />
          <Route path='/me' element={<Profile/>}/>
          <Route path='*' element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;