
import React, {useContext } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { UserContext } from "../../Context/UserContext";



const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5)), url("https://media.istockphoto.com/id/1310210737/photo/group-of-diverse-international-graduating-students-celebrating.jpg?s=612x612&w=0&k=20&c=zfhRvFf-Pg-EC-0IGIURRO3yKQQj6gwXPjqNul1Ji2s=");
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 300px 0 300px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;



function Home() {
    const navigate=useNavigate();
    const { loggedIn } = useContext(UserContext);


    const logInHome=()=>{
        return(
            <div> 
            <h1 style={{ color: "White", fontSize: "60px", textAlign: "center", textShadow: "2px 2px black" }}>Welcome to College Power Planner</h1>
            </div>

        )
       
      

    }

    const logOutHome=()=>{
        return(
            <div>
                <h1 style={{ color: "White", fontSize: "60px", textAlign: "center", textShadow: "2px 2px black" }}>Welcome to College Power Planner</h1>
                <h2 style={{ color: "White", fontSize: "35px", textAlign: "center", textShadow: "2px 2px black" }}>To help you stay organized during your college application process!</h2>
                <Button variant="info" className="ms-3" size="lg" onClick={()=>navigate(`/login`)}>Login</Button>
                <Button variant="info" className="ms-3" size="lg" onClick={()=>navigate(`/signup`)}>Signup</Button>
            </div>

        )
       
    }
    


    

    return (
        <div className="d-grid gap-2">
            
            <BannerContainer >
                {loggedIn ? logInHome(): logOutHome()}
               
            </BannerContainer>
           
        </div>
    );
}

export default Home;