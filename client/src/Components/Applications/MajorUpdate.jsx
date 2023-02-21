import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { header,baseUrl,getToken } from '../Globals.js';
import { useNavigate } from 'react-router-dom'
import Error from '../../Styles.js/Error.jsx';


const MajorUpdate = ({application, handleUpdateApplication,setShowForm}) => {

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

  
    
  
    const [major,setMajor]=useState("")

    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);

    majorType.sort(function(a, b){
      if(a < b) { return -1; }
      if(a> b) { return 1; }
      return 0;
    })



    const handlemajorTypeChange = (e) => { 
      setMajor(majorType[e.target.value]) 
      
        }


    

   function handleSubmit(e){
    e.preventDefault()
    fetch(`/applications/${application.id}`,{
        method:'PATCH',
        headers:{
            ...header
        },
        body:JSON.stringify({major: major})
    }) .then((response) => {
      if (response.ok) {
          response.json().then((data) =>{
            handleUpdateApplication(data)
            navigate('/applications')
            alert("Your major has been updated")
           setShowForm(false)
            


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
            < select
            onChange={e => handlemajorTypeChange(e)}
            className="browser-default custom-select">
            <option selected disabled>Select Major</option>
            {
                Add.map((address, key) => <option key={key} value={key}>{address} 
                </option>)
            }
            
          </select >
          <Button variant="info" className="ms-3" type='submit'>Update Major</Button>
      </form>
      
        {errors ?  
        <h1> {errors.map((err) => (
          <Error key={err}>{err}</Error>
            ))}</h1>: null }

                  
     </div>

 
    
            




  )
}

export default MajorUpdate