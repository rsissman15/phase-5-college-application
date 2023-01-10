import React from 'react'
import { useState, useEffect } from "react";
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar';
import LoginPage from '../Authentication/LoginPage';

function MainContainer() {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetch("/all_colleges")
      .then((r) => r.json())
      .then((data) => setCount(data));
  }, []);

  console.log(count)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;