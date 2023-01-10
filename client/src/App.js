// client/src/components/App.js
import React from "react";
import { useState, useEffect } from "react";
import MainContainer from "./Static/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <MainContainer/>
    
  );
}

export default App;