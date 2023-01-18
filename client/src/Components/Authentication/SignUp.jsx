import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { header,baseUrl,getToken } from '../Globals.js';





// const theme = createTheme();

function SignUp({loggedIn,logInUser}) {
  const [formData,setFormData]=useState({
    email:"",
    username:"",
    password:""

  })


  const [errors, setErrors] = useState([]);
  const navigate=useNavigate();

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
      fetch(baseUrl+'/users',{
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
                  });
              } 
              else {
                  response.json().then((errorData) =>  setErrors(errorData.errors));
              }
          })
  }


  

  return (
    
    // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
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
            Sign up
          </Typography>
          <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    
  );
}

export default SignUp;