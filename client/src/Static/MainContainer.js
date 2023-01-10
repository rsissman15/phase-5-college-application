import React from 'react'
import { useState, useEffect } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainContainer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/testing" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;