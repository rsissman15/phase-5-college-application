import React from 'react'
import ApplicationTable from './ApplicationTable'
import styled from "styled-components";
import TableHead from '@mui/material/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@mui/material/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import { TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';




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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontSize: 20,
    color: 'blue',
  },
})







const ApplicationsList = ({applications,handleDelete}) => {
  const classes = useStyles();

    const renderApplications=applications.map(application=><ApplicationTable key={application.id} application={application} handleDelete={handleDelete}/>)
  return (
    // <BannerContainer>
  
    // </BannerContainer>
    <>
    <TableContainer component={Paper}/>
      <Table className={classes.table} aria-label="simple table">
      < TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Location</TableCell>
          <TableCell align="center">Major</TableCell>
          <TableCell align="center">Application Deadline</TableCell>
          <TableCell align="center"></TableCell>
        </TableRow>
      </TableHead>
      {renderApplications}
      </Table>
    <TableContainer/>
    </>

  


  )
}

export default ApplicationsList