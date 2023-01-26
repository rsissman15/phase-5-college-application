import React from 'react'
import ApplicationTable from './ApplicationTable'
import styled from "styled-components";


const BannerContainer = styled.div`
    width: fullwidth;
    height: 100%;
    background:linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;
    padding: 100px 0 800px 0;
    box-shadow: inset 5px 5px 10px 4px #000000;
    backgroundSize: 'cover',
`;

const ApplicationsList = ({applications}) => {
    const renderApplications=applications.map(application=><ApplicationTable key={application.id} application={application}/>)
  return (
    <BannerContainer>
      {renderApplications}
    </BannerContainer>

  )
}

export default ApplicationsList