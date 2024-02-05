import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [bgColor, setBgcolor] = useState('white');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161556';
      setTextColor('light');
      setBgcolor('dark');
      document.title = "Textutils - Dark Mode";

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setTextColor('black')
      setBgcolor('white');
      document.title = "Textutils - Light Mode";
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title = 'TextUtils' mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
         <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform heading = "Enter the text to analyze" setTextColor={textColor} bgColor={bgColor} />} />
          </Routes>      
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
