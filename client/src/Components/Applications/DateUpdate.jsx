import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { header } from '../Globals.js';
import { useNavigate } from 'react-router-dom'
import Error from '../../Styles.js/Error.jsx';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';



const DateUpdate = ({application, handleUpdateDateApplication,setShowDateForm}) => {
    
    const [date,setDate]=useState("")
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    const handleDateChange = (e) => { 
        setDate(e.target.value)  
    }
    

   function handleSubmit(e){
    e.preventDefault()
    fetch(`/applications/${application.id}`,{
        method:'PATCH',
        headers:{
            ...header
        },
        body:JSON.stringify({application_deadline: date})
    }).then((response) => {
      if (response.ok) {
          response.json().then((data) =>{
            handleUpdateDateApplication(data)
            navigate('/applications')
            alert("Your application deadline")
            setShowDateForm(false)
            


          });
      } 
      else {
         response.json().then((errorData) =>  setErrors(errorData.errors))
        
      }
    })
  
   }
    



  return (
    <div >
        <form className="add-activity-form" onSubmit={handleSubmit}>
          <Grid item xs={12} align="center">
                <TextField
                    required
                    
                    name="application_deadline"
                    type="date"
                    label="Deadline"
                    autoComplete="application_deadline"
                    variant="filled"
                    id="location"
                    value={date}
                    onChange={(e)=>handleDateChange(e)}
                    sx={{
                    input: {
                        color: "black",
                        background: "white",
                        height: "35px",
                        width:"400px",
                    }
                    }}
                />
             </Grid>
          <Button variant="info" className="ms-3" type='submit'>Update Deadline</Button>
          <Button variant="info" className="ms-3" type='submit' onClick={()=>setShowDateForm(false)}>Cancel</Button>
      </form>
      
        {errors ?  
        <h1> {errors.map((err) => (
          <Error key={err}>{err}</Error>
            ))}</h1>: null }

                  
     </div>

 
    
            




  )
}

export default DateUpdate