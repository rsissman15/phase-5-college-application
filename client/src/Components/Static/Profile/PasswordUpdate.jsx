import React,{useState} from 'react'
import { header,baseUrl,getToken } from '../../Globals';
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';


const PasswordUpdate= (currentUser,handleUpdatePassword) => {
    
    const [password,setPassword]=useState("")

    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    console.log(currentUser)



    const handleChange = (e) => { 
    setPassword(e.target.value) 
    }

   
    function handleSubmit(e){
    e.preventDefault()
    fetch(baseUrl+`/user/${currentUser.id}`,{
        method:'PATCH',
        headers:{
            ...header,
            ...getToken()
        },
        body:JSON.stringify({password: password})
    }) .then((response) => {
    if (response.ok) {
        response.json().then((data) =>{
            console.log(data)
            // handleUpdatePassword(data)
            // navigate('/colleges')
            // alert("Your password has been updated")

        });
    } 
    else {
        response.json().then((errorData) =>  setErrors(errorData.errors))
        
    }
    })

    }
  return (
    <div>
        <Form className='max-w-lg mx-auto'  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                <TextField
                    required
                    onChange={handleChange}
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    value={password}
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
                <Button>Submit</Button>
            </Grid>
        </Form>
    </div>
  )
}

export default PasswordUpdate