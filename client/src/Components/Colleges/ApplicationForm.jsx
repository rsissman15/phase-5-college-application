import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getToken } from '../Globals'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Error from '../../Styles.js/Error';





const ApplicationForm = ({colleges,submitApplication}) => {
    const { id }=useParams();
    let college=colleges.find(college=>college.id.toString()===id)

    const [majorType]= useState([
        "Architecture",
        "Arts & Museum Mgmt",
        "Dance",
        "Fashion & Apparel Design",
        "Film / Broadcast",
        "Graphic Design",
        "Music (Instrumental)",
        "Theatre (Drama + Musical)",
        "Urban & Regional Planning",
        "Web Design & Digital Media","Athletic Training",
        "Biology",
        "Chemistry",
        "Food Science",
        "Nursing (RN/BSN)",
        "Pharmacy",
        "Physical Ther / Kinesiology",
        "Physicians Assistant",
        "Pre - Dental",
        "Pre - Medical",
        "Pre - Veterinary Medicine","Education",
        "English & Writing",
        "History",
        "Human Dev & Family Sci",
        "Journalism",
        "Mathematics",
        "Non-Profit Management",
        "Philosophy",
        "Political Science",
        "Psychology / Sociology",
        "Womens Studies (+LGBT)","Aerospace Engineering",
        "Astronomy / Physics",
        "Aviation & Aeronautics",
        "Biomedical Engineering",
        "Chemical Engineering",
        "Civil Engineering",
        "Computer Science",
        "Cyber Security",
        "Electrical Engineering",
        "Industrial Engineering",
        "Mechanical Engineering",
        "Accounting", 
        "Business - General",
        "Data Science - Analytics",
        "Economics (Global)",
        "Finance & Banking",
        "Hotel & Resort Mgmt",
        "Human Resources Mgmt",
        "Information Systems (MIS)",
        "Insurance & Risk Mgmt",
        "Marketing & PR",
        "Public Health Administration",
        "Sport Management",
        "Supply Chain (Logistics)","Undecided","Other"])
    const Add = majorType.map(Add => Add)
    const [major, setMajor] = useState('')
    const[name]=useState(college.name)
    const[location]=useState(college.country)
    const[applicationDeadline,setApplicationDeadline]=useState('')
    const [fileData,setFileData]=useState(null)




    majorType.sort(function(a, b){
        if(a < b) { return -1; }
        if(a> b) { return 1; }
        return 0;
      })
      
      

    const handlemajorTypeChange = (e) => { 
        setMajor(majorType[e.target.value]) 
        
          }

    const [errors,setErrors]=useState('')
    const navigate=useNavigate()
    
      function handleSubmit(e){
        e.preventDefault();
        const formData= new FormData()
        formData.append('name',name)
        formData.append('location',location)
        formData.append('major',major)
        formData.append('application_deadline',applicationDeadline)
        if(fileData){
            formData.append('file_data',fileData)

        }
         


    
        fetch(`/colleges/${college.id}/applications`, {
          method: "POST",
          body:formData 
        })
        .then((response) => {
          if (response.ok) {
              response.json().then((data) =>{
                submitApplication(data)
                navigate('/applications') 

              });
          } 
          else {
             response.json().then((errorData) =>  {
                setErrors(errorData.errors) 
               

            })
            
          }
      })

      }
      return (
        <>
            <Form className='max-w-lg mx-auto' encType="multipart:true" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} align="center">
                <TextField
                    required
                    id="name"
                    label="Name"
                    name="name"
                    variant="filled"
                    autoComplete="Name"
                    value={name}
                    sx={{
                    input: {
                        color: "black",
                        background: "white",
                        height: "35px",
                        width:"400px",
                    }
                    }}
                
                />
                </Grid>
                <Grid item xs={12} align="center">
                <TextField
                    required
                    
                    name="location"
                    label="Location"
                    autoComplete="location"
                    variant="filled"
                    id="location"
                    value={location}
   
                    sx={{
                    input: {
                        color: "black",
                        background: "white",
                        height: "35px",
                        width:"400px",
                    }
                    }}
                />
                </Grid>
                <Grid item xs={12} align="center">
                <TextField
                    required
                    
                    name="application_deadline"
                    type="date"
                    label="Deadline"
                    autoComplete="application_deadline"
                    variant="filled"
                    id="location"
                    value={applicationDeadline}
                    onChange={(e)=>setApplicationDeadline(e.target.value)}
                    sx={{
                    input: {
                        color: "black",
                        background: "white",
                        height: "35px",
                        width:"400px",
                    }
                    }}
                />
                </Grid>
                <Grid item xs={12} align="center">
                < select
                    onChange={e => handlemajorTypeChange(e)}
                    className="browser-default custom-select">
                    <option selected disabled>Select Major</option>
                    {
                        Add.map((address, key) => <option key={key} value={key}>{address} 
                        </option>)
                    }
                </select >
                 
                </Grid>
                <Grid item xs={12} align="center">
                    <input align="center" style={{color:'#00C5FF'}} type='file' name='file' multiple onChange={e=>setFileData(e.target.files[0])} ></input>
                </Grid>
               
                
                    <Grid item xs={12} align="center">
                    <Button
                    type="submit"
                    variant="info" className="ms-3"
                >
                    Submit
                </Button>
                    </Grid>

            </Grid>

            <Grid container >
                <Grid item xs={12} align="center">
                <Link href="/colleges" variant="body2">
                    {"Go back"}
                </Link>
                </Grid>
            </Grid>
            </Form>

           
                {errors ?  <h1>   {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </h1>: null }
                  

        </>
        
               
        
      )
}

export default ApplicationForm