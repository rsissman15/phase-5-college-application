import React,{useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from 'react-bootstrap/Button';
import MajorUpdate from './MajorUpdate';
import EditIcon from '@mui/icons-material/Edit';






const ApplicationTable = ({application,handleDelete, handleUpdateApplication}) => {
   

    const [showForm,setShowForm]=useState(false)

    const handleForm=()=>{
        setShowForm(click=>!click)
    }






  return (
    <>

            <TableRow key={application.id} >
            <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                {application.name}
                </TableCell>
                <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                {application.location}
                </TableCell>
                <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                {application.major}
                { showForm ? <MajorUpdate handleUpdateApplication={handleUpdateApplication} application={application}/> : 
                  <EditIcon style={{color:'#00C5FF'}} type="submit" variant="info" className="ms-3" onClick={handleForm}>Update Major</EditIcon>
                   }     
                </TableCell>
                <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                {application.application_deadline}
                </TableCell>
                <TableCell>
                <Button  type="submit" variant="info" className="ms-3" onClick={()=>(handleDelete(application))}>Delete</Button>
                </TableCell>
              
            </TableRow>
       
    </>
        

    );
}

export default ApplicationTable