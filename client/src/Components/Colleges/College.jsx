import React from 'react'
import { useState,useEffect,useContext } from 'react';
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
import ApplicationForm from './ApplicationForm';
import { UserContext } from '../../Context/UserContext';
import { CollegeContext } from '../../Context/CollegeContext';

const BannerContainer = styled.div`
    width: fullwidth;
    height: 100%;
    background:linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 200px 0 3000px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;

  
const image_url='data:image/png;base64,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'


const College = ({submitApplication}) => {

  const { loggedIn } = useContext(UserContext);
  const {colleges}=useContext(CollegeContext)

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

      const classes = useStyles();

      const [college,setCollege]=useState([])
      const { id }=useParams();
      const navigate=useNavigate();
      const [showForm,setShowForm]=useState(false)


      const handleForm=()=>{
        setShowForm(click=>!click)
      }

      useEffect(()=>{
        const college=colleges.find(a=>a.id.toString()===id)
        setCollege(college)
      },[colleges, id])
    
      useEffect(()=>{
        if(!loggedIn){
          navigate('/login')
        }
      })

    
  return (
    <BannerContainer>
        <Typography component="h1" variant="h5" style = {{color:'white'}}>
            {college.name}
    </Typography>
    <Card className={classes.root} border='5px solid red'>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image_url}
            title={college.name}
          />
        </CardActionArea>
    </Card>
    <Form className='max-w-lg mx-auto'  component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} align="center">
        <Typography component="h1" variant="h5" style = {{color:'white'}}>
           Location: {college.country}
        </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        <Typography component="h1" variant="h5" style = {{color:'white'}}>
           Webpage: {college.web_pages}
        </Typography>
        </Grid>
        <Grid item xs={12} align="center">
        {showForm ? null : <Button  type="submit" variant="info" className="ms-3" onClick={()=>navigate('/colleges') }>Go Back</Button> }

        </Grid>
      </Grid>
    </Form>
    <Grid item xs={12} align="center">
        {showForm ? null : <Button  type="submit"
                variant="info" className="ms-3" onClick={handleForm}>Add Application</Button> }
        {showForm ? <ApplicationForm colleges={colleges} submitApplication={submitApplication}/> :null}
        </Grid>
    </BannerContainer>
    

  )
}

export default College