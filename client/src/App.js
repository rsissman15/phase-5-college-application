// client/src/components/App.js
import React from "react";
import MainContainer from "./Components/Static/MainContainer";
import { ApplicationProvider } from "./Context/ApplicationContext";
import { CollegeProvider } from "./Context/CollegeContext";
import { UserProvider } from "./Context/UserContext";


function App() {

  return (
  <UserProvider>
    <CollegeProvider>
      <ApplicationProvider>
          <MainContainer/>
      </ApplicationProvider> 
    </CollegeProvider>
  </UserProvider>
   
  );
}

export default App;