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
       <Button padding="10px 60px" onClick={handleClick} variant="info" className="mx-auto mr-20" >Click for More Info</Button>
       &nbsp;&nbsp;&nbsp;
       {college.name}

        
        </ul>

    </div>
   
  )
}

export default Colleges