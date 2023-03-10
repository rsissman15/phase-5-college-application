import React from 'react'
import { useEffect,useContext } from 'react';
import SearchBar from '../Static/SearchBar'
import Colleges from './Colleges'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import styled from "styled-components";
import Pagination from '../Static/Pagination';
import { UserContext } from '../../Context/UserContext';


const BannerContainer = styled.div`
    width: fullwidth;
    height: 100%;
    background:linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 0px 0 100px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;



const CollegeList = ({colleges,search,setSearch,collegesPerPage,totalColleges, paginate}) => {

  const { loggedIn } = useContext(UserContext);



  const displayColleges=colleges.map(college=><Colleges key={college.id} college={college}/>)

  const navigate=useNavigate();

  useEffect(()=>{
    if(!loggedIn){
      navigate('/login')
    }
  })


  return (
    <>
     <SearchBar search={search} setSearch={setSearch}/>
     <Pagination collegesPerPage={collegesPerPage} totalColleges={totalColleges} paginate={paginate}/>
   
      <BannerContainer>
     
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              color:'white'
            }}
          >
            {displayColleges}
           
          </Box>
          
          
      </BannerContainer>
     
      
    </>
    
  )
}

export default CollegeList