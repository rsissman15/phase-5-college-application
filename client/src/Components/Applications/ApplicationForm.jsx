import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { header,baseUrl,getToken } from '../Globals.js';
import Form from 'react-bootstrap/Form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
    paddingLeft:'0px',
    paddingRight:'0px',
    margin: "0 0px",
  },
  media: {
    height: 300,
  },
  
});



const ApplicationForm = ({colleges}) => {
     const { id }=useParams();
     const classes = useStyles();

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
      <Form className='max-w-lg mx-auto'  component="form"  noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center"  className={classes.root}>
            <TextField
             className={classes.root}
              margin="normal"
              required
              style = {{width: 600}}
              id="name"
              variant="filled"
              label="Name"
              name="name"
              autoComplete={formData.name}
              value={formData.name}
              autoFocus
              sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
            
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
            margin="normal"
            required
            style = {{width: 600}}
            id="location"
            variant="filled"
            label="Location"
            name="location"
            autoComplete={formData.location}
            value={formData.location}
            autoFocus
              sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              margin="normal"
              required
              style = {{width: 600}}
              name="major"
              variant="filled"
              label="Major"
              id="Major"
              value={formData.major}
              onChange={handleChange}
              autoFocus
              sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
                margin="normal"
                required
                style = {{width: 600}}
                name="application_deadline"
                type="date"
                id="date"
                variant="filled"
                label="Application Deadline"
                value={formData.application_deadline}
                onChange={handleChange}
              sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
            />
          </Grid>
          
              <Grid item xs={12} align="center">
                <Button
                type="submit"
                variant="info" className="ms-3">
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button
                type="go back"
                variant="info" className="ms-3"onClick={()=>navigate('/colleges') }>
                Go Back
              </Button>
            </Grid>

        </Grid>
    </Form>
      )
}

export default ApplicationForm