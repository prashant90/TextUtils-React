import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500)
 }
  

 const toggleMode = (cls) =>{

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been enabled", "success")
  }else{
    setMode('light')
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success")
  }
  
 }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */ }
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
      <Routes>
         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
         <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
