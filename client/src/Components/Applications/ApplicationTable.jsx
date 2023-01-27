import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from 'react-bootstrap/Button';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.primary.white,
      fontSize: 20,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor: theme.palette.primary.white,
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

    );
}

export default ApplicationTable