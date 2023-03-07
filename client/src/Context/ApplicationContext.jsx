// src/context/UserContext.js
import React, { createContext, useState, useEffect,useContext } from "react";
import { header } from "../Components/Globals";
import { UserContext } from "./UserContext";

// Create context
const ApplicationContext = createContext();

// Create provider
function ApplicationProvider ({ children }) {
    
    const { loggedIn,currentUser} = useContext(UserContext);
    const [applications,setApplications]=useState([])


    useEffect(()=>{
        if(loggedIn){
            fetch(`/users/${currentUser.id}/applications`,{
              method:'GET',
              headers:{
                ...header
              }
            })
            .then(res=>res.json())
            .then(application=>{
              setApplications(application)
      
      
            }
             
          )} 
   
         
      },[loggedIn,currentUser])



      function handleDelete(application){
        fetch(`/applications/${application.id}`,{
          method:'DELETE'
        })
        .then(()=>{
          setApplications(applications.filter(currentApplication=>currentApplication.id !== application.id))
        })
      }
    
      function handleUpdateMajorApplication(application){
        setApplications(applications.map((oldApplication) => oldApplication.id !== application.id ? oldApplication : { ...oldApplication, major: application.major}))
      }

      function handleUpdateDateApplication(application){
       
        setApplications(applications.map((oldApplication) => oldApplication.id !== application.id ? oldApplication : { ...oldApplication, application_deadline: application.application_deadline}))
      }

      function handleUpdateFileApplication(application){
        setApplications(applications.map((oldApplication) => oldApplication.id !== application.id ? oldApplication : { ...oldApplication, file_data: application.file_data}))
      }

      console.log(applications)
   
 

  return (
    <ApplicationContext.Provider value={{applications,setApplications,handleDelete,handleUpdateMajorApplication,handleUpdateDateApplication,handleUpdateFileApplication }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export { ApplicationContext, ApplicationProvider };
