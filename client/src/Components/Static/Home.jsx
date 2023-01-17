
import React, { useEffect, useState } from "react";
import styled from "styled-components";



const BannerContainer = styled.div`
    width: auto;
    height: 100%;
    background:linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5)), url("https://images.squarespace-cdn.com/content/5c375dc2a9e028615db64332/1633028281952-YOHMIT8A6AQUKZP0YCHE/US+College+Logo+Collage.jpg?content-type=image%2Fjpeg");
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 210px 0 210px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
`;

function Home() {
    

    const NextArrow = () => {
        return (
            <div className="arrow next" style={{ backgroundColor: "rgba(162, 208, 162, 0.02)" }}>
                <div>
                    <h1 style={{ fontSize: "150px" }}>{">"}</h1>
                </div>
            </div>
        )
    }
    const PreviousArrow = () => {
        return (
            <div className="arrow previous" style={{ backgroundColor: "rgba(162, 208, 162, 0.02)" }}>
                <h1 style={{ fontSize: "150px" }}>{"<"}</h1>
            </div>
        )
    }

    return (
        <div className="homepage-container">
            <BannerContainer >
                <h1 style={{ color: "white", fontSize: "80px", textAlign: "center", textShadow: "2px 2px black" }}>Welcome to the College Organizer App</h1>
                <h2 style={{ color: "white", fontSize: "60px", textAlign: "center", textShadow: "2px 2px black" }}>An Application to help you stay organized during your college search</h2>
            </BannerContainer>
        </div>
    );
}

export default Home;