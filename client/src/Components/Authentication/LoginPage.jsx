import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { header,baseUrl,getToken } from '../Globals.js';


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
            navigate('/home')
        }
       },[loggedIn])


       const handleSubmit=(e)=>{
        
        e.preventDefault();
        
        fetch(baseUrl+'/login',{
            method:'POST',
            headers: {
              ...header,
              ...getToken()
            },
            body:JSON.stringify(formData)
        })

            .then((response) => {
              if (response.ok) {
                  response.json().then((data) =>{
                    logInUser(data.user)
                    localStorage.setItem('jwt', data.token)
                    navigate('/home')  
                    console.log(data)
                  });
              } 
              else {
                    response.json().then((errorData) =>  setErrors(errorData.errors));
              }
          })
    }
      

 
 
  return (
    <div>
      
      <Container >
        <Box
          onSubmit={handleSubmit}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </div>
  );
}

export default LoginPage;