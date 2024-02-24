import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, {useState} from 'react';
import Alert from './component/Alert';
import About from './component/About';
import Contact from './component/Contact';

import { 
  BrowserRouter,
  Routes,
  Route,
  Link
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert  ({
      msg: message,
      type: type
    })
    setTimeout (()=> {
        setAlert(null);
      }, 3000);
    }
  
  const toggleMode= ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert  ("Dark mode has been enabled","success");
      // setInterval(() => {
      //   document.title='Amazing App to format your text!!';
      // }, 2500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#0000';
      showAlert  ("Light mode has been enabled","success");
      // setInterval(() => {
      //   document.title='Install TextFormatter!!';
      // }, 2500);
    }
  }
  return (
    <BrowserRouter>    
      
        <Navbar title="TextFormatter" mode={mode} toggleMode={toggleMode} aboutText="About TextFormatter"/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}/>
              
            {/* </Route> */}
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
              {/* <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
            {/* </Route> */}

            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
