import React from 'react'
import { useState,useEffect } from 'react';
import SearchBar from '../Static/SearchBar'
import Colleges from './Colleges'
import MoreColleges from './MoreColleges'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';



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
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           {displayColleges}
        </Box>
     
      <MoreColleges handleMoreColleges={handleMoreColleges}/>
    </div>
  )
}

export default CollegeList