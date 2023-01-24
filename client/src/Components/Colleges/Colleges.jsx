import React,{useState,useEffect} from 'react'
import ApplicationForm from '../Applications/ApplicationForm'
import { useParams } from 'react-router-dom'
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';



const Colleges = ({college}) => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/colleges/${college.id}`)
  }

  return (
    <div>
       <ul>
        {college.name}
        <Button onClick={handleClick} color="primary">Click for More Info</Button>
        </ul>

    </div>
   
  )
}

export default Colleges