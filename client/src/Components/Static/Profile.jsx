import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@mui/material/Avatar';
import Person2Icon from '@mui/icons-material/Person2';


const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 500px 0 500px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;


const Profile = ({currentUser}) => {
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

      const image_url="https://cdn2.iconfinder.com/data/icons/web-and-apps-interface/32/User-1024.png"

      const classes = useStyles();
  return (
    <BannerContainer>
        

    
 

    <Form className='max-w-lg mx-auto'  component="form" noValidate sx={{ mt: 3 }}>
   
        
    <Grid container spacing={5}>
        <Grid item xs={12} align="center">
            <Avatar sx={{ m: 12, bgcolor: 'secondary.main', align:"center"}}>
                <Person2Icon />
            </Avatar>
       
        </Grid>
        <Grid item xs={12} align="center">
        <Typography component="h1" variant="h5" style = {{color:'white'}}>
        Username: {currentUser.username}
        </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <Typography component="h1" variant="h5" style = {{color:'white'}}>
        Email: {currentUser.email}
        </Typography>
        </Grid>
    </Grid>
    </Form>
</BannerContainer>
    // <BannerContainer>
    //      <div>Username: {currentUser.username}</div>

    // </BannerContainer>
   
  )
}

export default Profile