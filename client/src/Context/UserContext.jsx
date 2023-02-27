// src/context/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import { header } from "../Components/Globals";

// Create context
const UserContext = createContext();

// Create provider
function UserProvider ({ children }) {
    const [currentUser,setCurrentUser]=useState(null)
    const [loggedIn,setLoggedIn]=useState(false)
    

    useEffect(()=>{
    
        fetch('/get-current-user',{
          method:'GET',
          headers:{
            ...header
           
          }
        })
        .then(res=>res.json())
        .then(user=>{
          if(!user.error){
            logInUser(user)
            
          }
        }
          
      )
  
  },[])



    const logInUser=(user)=>{
    
        setCurrentUser(user)
        setLoggedIn(true)
      
      
    }




 

 

  return (
    <UserContext.Provider value={{currentUser,setCurrentUser,loggedIn,setLoggedIn,logInUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
