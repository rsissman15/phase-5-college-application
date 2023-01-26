import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {header, getToken } from '../Globals'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



const ApplicationForm = ({colleges,submitApplication}) => {
    const { id }=useParams();
    let college=colleges.find(college=>college.id.toString()===id)




 
    const [formData,setFormData]=useState({
        name:college.name,
        location:college.country,
        application_deadline:"",
        major:""

      })

    const [errors,setErrors]=useState('')

    const navigate=useNavigate()

    


    const handleChange=(e)=>{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
      }
    
      function handleSubmit(e){
        e.preventDefault();
        const updatedFormData={...formData}
        fetch(`http://localhost:3000/colleges/${college.id}/applications`, {
          method: "POST",
          headers: {
            ...header,
            ...getToken()


          },
          body: JSON.stringify(updatedFormData)
        })
        .then((response) => {
          if (response.ok) {
              response.json().then((data) =>{
                submitApplication(data)
                navigate('/applications') 

              });
          } 
          else {
             response.json().then((errorData) =>  setErrors(errorData.errors))
            
          }
      })
          //.then(resp => resp.json())
          // .then(data => {
          //   submitReservation(data)
          // })
      }
    
      return (
        <>
         <Typography component="h1" variant="h5" color="white">
                Welcome Back!
                </Typography>
                <Form className='max-w-lg mx-auto'  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} align="center">
                    <TextField
                        required
                        id="name"
                        label="name"
                        name="name"
                        variant="filled"
                        autoComplete="name"
                        value={formData.name}
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
                        required
                        
                        name="location"
                        label="location"
                        autoComplete="location"
                        variant="filled"
                        id="location"
                        value={formData.location}
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
                    <TextField
                        required
                        
                        name="application_deadline"
                        type="date"
                        label="Application Deadline"
                        autoComplete="application_deadline"
                        variant="filled"
                        id="location"
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
                    <TextField
                        required
                        
                        name="major"
                        label="Major"
                        autoComplete="major"
                        variant="filled"
                        id="major"
                        value={formData.major}
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
                        variant="info" className="ms-3"
                    >
                        Submit
                    </Button>
                        </Grid>

                </Grid>

                <Grid container>
                    <Grid item xs={12} align="center">
                    <Link href="/signup" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={12} align="center">
                    <Link href="/home" variant="body2">
                        {"Go back"}
                    </Link>
                    </Grid>
                </Grid>
                </Form>
        </>
        
               
        
      )
}

export default ApplicationForm