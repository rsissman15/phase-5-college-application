import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { header } from '../Globals.js';
import { useNavigate } from 'react-router-dom'
import Error from '../../Styles.js/Error.jsx';


const MajorUpdate = ({application, handleUpdateApplication,setShowForm}) => {

  const [majorType]= useState([
    "Accounting",
    "Aerospace Engineering",
  "Architecture",
  "Arts & Museum Mgmt",
  "Astronomy / Physics",
  "Athletic Training",
  "Aviation & Aeronautics",
  "Biology",
  "Biomedical Engineering",
  "Business - General",
  "Chemical Engineering",
  "Chemistry",
  "Civil Engineering",
  "Computer Science",
  "Cyber Security",
  "Dance",
  "Data Science - Analytics",
  "Economics (Global)",
  "Education",
  "Electrical Engineering",
  "English & Writing",
  "Fashion & Apparel Design",
  "Film / Broadcast",
  "Finance & Banking",
  "Food Science",
  "Graphic Design",
  "History",
  "Hotel & Resort Mgmt",
  "Human Dev & Family Sci",
  "Human Resources Mgmt",
  "Industrial Engineering",
  "Information Systems (MIS)",
  "Insurance & Risk Mgmt",
  "Journalism",
  "Marketing & PR",
  "Mathematics",
  "Mechanical Engineering",
  "Music (Instrumental)",
  "Non-Profit Management",
  "Nursing (RN/BSN)",
  "Other",
  "Pharmacy",
  "Philosophy",
  "Physical Ther / Kinesiology",
  "Physicians Assistant",
  "Political Science",
  "Pre - Dental",
  "Pre - Medical",
  "Pre - Veterinary Medicine",
  "Psychology / Sociology",
  "Public Health Administration",
  "Sport Management",
  "Supply Chain (Logistics)",
  "Theatre (Drama + Musical)",
  "Undecided",
  "Urban & Regional Planning",
  "Web Design & Digital Media",
  "Womens Studies (+LGBT)"])
    const Add = majorType.map(Add => Add)

    
    majorType.sort(function(a, b){
      if(a < b) { return -1; }
      if(a> b) { return 1; }
      return 0;
    })

  
    
  
    const [major,setMajor]=useState("")

    const navigate=useNavigate();
    const [errors, setErrors] = useState([]);




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
    }).then((response) => {
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