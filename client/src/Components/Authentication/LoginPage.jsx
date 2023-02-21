import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { header,baseUrl,getToken } from '../Globals.js';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Error from '../../Styles.js/Error.jsx';

const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 300px 0 300px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;




function LoginPage({logInUser,loggedIn}) {
    const [formData,setFormData]=useState({
        username:"",
        password:""
    
      })
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

      const handleChange=(e)=>{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
      }


      useEffect(()=>{
        if(loggedIn){
            navigate('/colleges')
        }
       },[loggedIn])


       const handleSubmit=(e)=>{
        
        e.preventDefault();
        
        fetch(baseUrl+'/login',{
            method:'POST',
            headers: {
              ...header,
              //...getToken()
            },
            body:JSON.stringify(formData)
        })

            .then((response) => {
              if (response.ok) {
                  response.json().then((data) =>{
                    logInUser(data)
                    //localStorage.setItem('jwt', data.token)
                    navigate('/colleges')  
                  });
              } 
              else {
                    response.json().then((errorData) =>  setErrors(errorData.errors));
              }
          })
    }
      

 
 
  return (
    <BannerContainer >
    <Typography component="h1" variant="h5" color="white">
      Welcome Back!
    </Typography>
    <Form className='max-w-lg mx-auto'  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} align="center">
          <TextField
            required
            id="username"
            label="Username"
            name="username"
            variant="filled"
            autoComplete="username"
            value={formData.username}
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
            
            name="password"
            label="Password"
            type="password"
            autoComplete="password"
            variant="filled"
            id="password"
            value={formData.password}
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
            Login
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
    
           
    {errors ?  <h1>   {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </h1>: null }
                  
</BannerContainer >
  );
}

export default LoginPage;