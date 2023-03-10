import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import Error from '../../Styles.js/Error.jsx';
import Grid from '@mui/material/Grid';




const FileUpdate = ({application, handleUpdateFileApplication,setShowFileForm}) => {
    
    const [file_data,setFileData]=useState('')
    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);




    const handleFileChange = (e) => { 
        setFileData(e.target.files[0])
    }
    

   function handleSubmit(e){
    e.preventDefault()
    const formData= new FormData()
    if(file_data){
      formData.append('file_data',file_data)

  }
    fetch(`/applications/${application.id}`,{
        method:'PATCH',
        body:(formData)
    }).then((response) => {
      if (response.ok) {
          response.json().then((data) =>{
            handleUpdateFileApplication(data)
            navigate('/applications')
            alert("Your file has been updated")
            setShowFileForm(false)

          });
      } 
      else {
         response.json().then((errorData) =>  setErrors(errorData.errors))
        
      }
    })
  
   }

   



  return (
    <div >
        <form className="add-activity-form" onSubmit={handleSubmit}>
        <Grid item xs={12} align="center">
                    <input align="center" style={{color:'#00C5FF'}} type='file' name='file' multiple onChange={e=>handleFileChange(e)} ></input>
        </Grid>
          <Button variant="info" className="ms-3" type='submit'>Update File</Button>
          <Button variant="info" className="ms-3" type='submit' onClick={()=>setShowFileForm(false)}>Cancel</Button>
      </form>
      
        {errors ?  
        <h1> {errors.map((err) => (
          <Error key={err}>{err}</Error>
            ))}</h1>: null }

                  
     </div>
  )
}

export default FileUpdate
