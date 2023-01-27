import React,{useState} from 'react'
import { TextField } from '@mui/material'
import Button from 'react-bootstrap/Button';
import { header,baseUrl,getToken } from '../Globals.js';
import { useNavigate } from 'react-router-dom'

import Error from '../../Styles.js/Error.jsx';


const MajorUpdate = ({application, handleUpdateApplication}) => {
    const [major,setMajor]=useState("")

    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);


    const handleChange=(e)=>{
        setMajor(e.target.value)}


    

   function handleSubmit(e){
    e.preventDefault()
    fetch(baseUrl+`/applications/${application.id}`,{
        method:'PATCH',
        headers:{
            ...header,
            ...getToken()
        },
        body:JSON.stringify({major: major})
    }) .then((response) => {
      if (response.ok) {
          response.json().then((data) =>{
            handleUpdateApplication(data)
            navigate('/colleges')

          });
      } 
      else {
         response.json().then((errorData) =>  setErrors(errorData.errors))
        
      }
    })
  
   }
    



  return (

    <div className="container">
            <form className="add-activity-form" onSubmit={handleSubmit}>
            <h3>Major</h3>
            <input
                type="test"
                onChange={handleChange}
                value={major}
            />
            <Button type="submit">Update Major</Button>
            </form>

            {errors ?  <h1>   {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </h1>: null }
           
        </div>
   
    
            




  )
}

export default MajorUpdate