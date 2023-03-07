import React,{useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@mui/material';
import MajorUpdate from './MajorUpdate';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import DateUpdate from './DateUpdate';
import FileUpdate from './FileUpdate';










const ApplicationTable = ({application,handleDelete, handleUpdateMajorApplication,handleUpdateDateApplication,handleUpdateFileApplication}) => {

    const [showMajorForm,setShowMajorForm]=useState(false)
    const[showDateForm,setShowDateForm]=useState(false)
    const[showFileForm,setShowFileForm]=useState(false)


    const handleMajorForm=()=>{
        setShowMajorForm(click=>!click)
    }

    const handleDateForm=()=>{
        setShowDateForm(click=>!click)
    }

    const handleFileForm=()=>{
        setShowFileForm(click=>!click)
    }


    const file_data_url=()=>{
        if(application.file_data==null){
            return "http://localhost:4000/applications"
            
           
        }
        else{
            return "http://localhost:3000/"+application.file_data
        }
    }
    const application_file_attached=()=>{
        if (application.file_data==null){
            return(
                <Button endIcon={<FolderIcon />}  disabled type="submit">Download Files</Button>
            )
        }
        else{
            return(
                <Button endIcon={<FolderIcon />} variant="info" className="ms-3" href={file_data_url()} type="submit">Download Files</Button>
            )
        }
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
                { showMajorForm ? <MajorUpdate handleUpdateMajorApplication={handleUpdateMajorApplication} application={application} setShowMajorForm={setShowMajorForm}/> : 
                  <EditIcon style={{color:'#00C5FF'}} type="submit" variant="info" className="ms-3" onClick={handleMajorForm}>Update Major</EditIcon>
                   }     
                </TableCell>
                <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                {application.application_deadline}
                { showDateForm ? <DateUpdate handleUpdateDateApplication={handleUpdateDateApplication} application={application} setShowDateForm={setShowDateForm}/> : 
                  <EditIcon style={{color:'#00C5FF'}} type="submit" variant="info" className="ms-3" onClick={handleDateForm}>Update Date</EditIcon>
                   }     
                </TableCell>
                <TableCell style={{color:'#00C5FF'}} align="center" component="th" scope="row">
                    {application_file_attached()}
                    { showFileForm ? <FileUpdate handleUpdateFileApplication={handleUpdateFileApplication} application={application} setShowFileForm={setShowFileForm}/> : 
                  <EditIcon style={{color:'#00C5FF'}} type="submit" variant="info" className="ms-3" onClick={handleFileForm}>Update Date</EditIcon>
                   }   
                </TableCell>
                <TableCell>
                <Button  style={{color:'#00C5FF'}} variant="info" className="ms-3" onClick={()=>(handleDelete(application))}>Delete</Button>
                </TableCell>

            </TableRow>
       
    </>
        

    );
}

export default ApplicationTable