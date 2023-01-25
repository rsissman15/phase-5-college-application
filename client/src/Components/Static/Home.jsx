
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5))
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 210px 0 210px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
`;



function Home() {
    const navigate=useNavigate();
    

    return (
        <div className="d-grid gap-2">
            
            <BannerContainer >
                <h1 style={{ color: "Black", fontSize: "80px", textAlign: "center", textShadow: "2px 2px black" }}>College Organizer App</h1>
                <Button className="ms-3" size="lg" onClick={()=>navigate(`/login`)}>Login</Button>
                <Button className="ms-3" size="lg" onClick={()=>navigate(`/signup`)}>Signup</Button>
            </BannerContainer>
           
        </div>
    );
}

export default Home;