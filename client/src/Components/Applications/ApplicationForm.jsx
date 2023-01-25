import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { header,baseUrl,getToken } from '../Globals.js';



const ApplicationForm = ({colleges}) => {
     const { id }=useParams();

     const navigate=useNavigate()

     let college=colleges.find(a=>a.id.toString()===id)

     const [formData,setFormData]=useState({
      name:college.name,
      location: college.country,
      major:"",
      application_deadline:""
     })

     
     const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
    }
     

   

      // function handleChange(e){
      //   setDate({date:e.target.value})
      // }
    
      // function handleSubmit(e){
      //   e.preventDefault();
      //   fetch(`http://localhost:3001/activities/${activityid}/reservations`, {
      //     method: "POST",
      //     headers: {
      //       ...header,
      //       ...getToken()


      //     },
      //     body: JSON.stringify(date)
      //   })
      //   .then((response) => {
      //     if (response.ok) {
      //         response.json().then((data) =>{
      //           submitReservation(data)
      //           navigate('/reservations') 

      //         });
      //     } 
      //     else {
      //        response.json().then((errorData) =>  setErrors(errorData.errors))
            
      //     }
      // })
      //     //.then(resp => resp.json())
      //     // .then(data => {
      //     //   submitReservation(data)
      //     // })
      // }
    
      return (
        
        <div className="container">
              <Container >
        <Box
          
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete={formData.name}
              value={formData.name}
              autoFocus
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete={formData.location}
              value={formData.location}
              autoFocus
            />
            <TextField
            
              margin="normal"
              required
              fullWidth
              name="major"
              label="Major"
              id="Major"
              value={formData.major}
              onChange={handleChange}
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="application_deadline"
              type="date"
              id="date"
              value={formData.application_deadline}
              onChange={handleChange}
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Application
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/colleges" variant="body2">
                  {"Go back"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </div>
      )
}

export default ApplicationForm