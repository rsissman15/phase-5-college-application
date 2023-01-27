import React,{useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Button from 'react-bootstrap/Button';
import MajorUpdate from './MajorUpdate';






const ApplicationTable = ({application,handleDelete, handleUpdateApplication}) => {
   

    const [showForm,setShowForm]=useState(false)

    const handleForm=()=>{
        setShowForm(click=>!click)
    }




    
  return (
        <TableBody>
            <TableRow key={application.id} >
            <TableCell align="center" component="th" scope="row">
                {application.name}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                {application.location}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                {application.major}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                {application.application_deadline}
                </TableCell>
                <TableCell>
                <Button  type="submit" variant="info" className="ms-3" onClick={()=>(handleDelete(application))}>Delete</Button>
                </TableCell>
                { showForm ? <MajorUpdate handleUpdateApplication={handleUpdateApplication} application={application}/> : <TableCell>
                  <Button  type="submit" variant="info" className="ms-3" onClick={handleForm}>Update Major</Button>
                  </TableCell> }
                
            </TableRow>
        </TableBody>

    );
}

export default ApplicationTable