import React from 'react'
import { useState, useMemo,useContext } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import LoginPage from '../Authentication/LoginPage';
import SignUp from '../Authentication/SignUp';
import CollegeList from '../Colleges/CollegeList';
import College from '../Colleges/College';
import ApplicationsList from '../Applications/ApplicationsList';
import Profile from './Profile/Profile';
import { UserContext } from '../../Context/UserContext';
import { CollegeContext } from '../../Context/CollegeContext';
import { ApplicationContext } from '../../Context/ApplicationContext';
//import Fuse from 'fuse.js'





function MainContainer() {


  const [search, setSearch] = useState('')
  const [currentPage,setCurrentPage]=useState(1)
  const [collegesPerPage]=useState(225)
  const { setCurrentUser,setLoggedIn} = useContext(UserContext);
  const {colleges,setColleges}=useContext(CollegeContext)
  const {applications,setApplications}=useContext(ApplicationContext)
  // const fuse=new Fuse(colleges,{
  //   keys:[
  //     'name'
  //   ]
  // })
  // const results=fuse.search(search)


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

  
  const submitApplication=(newApplication)=>{
 
    setApplications([...applications,newApplication])
  }




  const collegeData = useMemo(() => {
   let computedCollege = colleges;
    //let collegeResult=search ? results.map(result=>result.item) : colleges
    let myArray = search.toLowerCase().split(" ");

   
    if (search) {
      setCurrentPage(1)
      for (let i = 0; i < myArray.length; i++) {
        computedCollege = computedCollege.filter(
          college =>
          college.name.toLowerCase().includes(myArray[i])
      );
      }
    
    
    }
   
    //Current Page slice
    return   computedCollege.slice(
      (currentPage - 1) * collegesPerPage,
      (currentPage - 1) * collegesPerPage + collegesPerPage
  );
  }, [colleges, currentPage, search,collegesPerPage]);


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