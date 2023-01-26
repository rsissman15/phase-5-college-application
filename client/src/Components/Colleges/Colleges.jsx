import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
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
        <Button onClick={handleClick} variant="info" className="ms-3">Click for More Info</Button>
        </ul>

    </div>
   
  )
}

export default Colleges