// src/context/UserContext.js
import React, { createContext, useState, useEffect,useContext } from "react";
import { header } from "../Components/Globals";
import { UserContext } from "./UserContext";

// Create context
const CollegeContext = createContext();

// Create provider
function CollegeProvider ({ children }) {
    const [colleges,setColleges]=useState([])
    const { loggedIn} = useContext(UserContext);


    useEffect(()=>{
        if(loggedIn){
          fetch('/colleges',{
            method:'GET',
            headers:{
              ...header
            }
          })
          .then(res=>res.json())
          .then(college=>{
            setColleges(college)
            
          }
           
        )} 
         
      },[loggedIn])
 
 

  return (
    <CollegeContext.Provider value={{colleges,setColleges }}>
      {children}
    </CollegeContext.Provider>
  )
}

export { CollegeContext, CollegeProvider };
