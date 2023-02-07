import React from 'react'
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
       <Button onClick={handleClick} variant="info" className="ms-3">Click for More Info</Button>
        {college.name}
        
        </ul>

    </div>
   
  )
}

export default Colleges