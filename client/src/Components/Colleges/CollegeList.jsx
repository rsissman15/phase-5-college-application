import React from 'react'
import { useState,useEffect } from 'react';
import SearchBar from '../Static/SearchBar'
import Colleges from './Colleges'
import MoreColleges from './MoreColleges'
import { useNavigate } from 'react-router-dom'



const CollegeList = ({colleges, handleMoreColleges,search,setSearch,loggedIn}) => {


  const displayColleges=colleges.map(college=><Colleges key={college.id} college={college}/>)

  const navigate=useNavigate();

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  },[loggedIn])


  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
      {displayColleges}
      <MoreColleges handleMoreColleges={handleMoreColleges}/>
    </div>
  )
}

export default CollegeList