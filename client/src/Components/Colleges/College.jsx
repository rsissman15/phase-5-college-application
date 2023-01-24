import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const College = ({colleges,loggedIn}) => {

    const useStyles = makeStyles({
        root: {
          width: 400,
          paddingLeft:'100px',
          paddingRight:'100px',
          margin: "0 4px",
        },
        media: {
          height: 300,
        },
        
      });

      const classes = useStyles();

      const [college,setCollege]=useState([])
      const { id }=useParams();
      const navigate=useNavigate();

      useEffect(()=>{
        const college=colleges.find(a=>a.id.toString()===id)
        setCollege(college)
      },[id])
    
      useEffect(()=>{
        if(!loggedIn){
          navigate('/login')
        }
      },[loggedIn])

    
  return (
    <Card className={classes.root} border='5px solid red'>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h1">
            {college.name}
        </Typography>
        <Typography gutterBottom variant="h3" component="h1">
            {college.web_pages}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card> 
  )
}

export default College