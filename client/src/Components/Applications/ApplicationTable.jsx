import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from 'react-bootstrap/Button';
import TableHead from '@mui/material/TableHead';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.primary.white,
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor: theme.palette.info.lightBlue,
      color: theme.palette.primary.white,
    },
  }));




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ApplicationTable = ({application}) => {
    const classes = useStyles();
  return (

        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
            <StyledTableCell align="center">Major</StyledTableCell>
            <StyledTableCell align="center">Application Deadline</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>

        
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={application.id}>
            <StyledTableCell align="center" component="th" scope="row">
                {application.name}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                {application.location}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                {application.major}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                {application.application_deadline}
                </StyledTableCell>
                <StyledTableCell>
                <Button       type="submit"
            variant="info" className="ms-3">Delete</Button>
                </StyledTableCell>
            </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
    );
}

export default ApplicationTable