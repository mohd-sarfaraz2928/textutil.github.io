
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [mode2, setMode2]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0a344d';
     showAlert("this is dark mode","success");
     setInterval(() => {
      showAlert(" ");
     }, 2000);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("this is light mode","success");
    }
  }
  const toggleMode2=()=>{
    if(mode2==='light'){
      setMode2('green')
      document.body.style.backgroundColor='green';
    //  showAlert("this is dark mode","success");
    }
    else{
      setMode2('light')
      document.body.style.backgroundColor='white';
      // showAlert("this is light mode","success");
    }
  }

  return (
    
    <>
  
    <Navbar title="textutil" mode={mode} mode2={mode2} toggleMode={toggleMode} toggleMode2={toggleMode2}   />
    <Alert alert={alert} mode={mode}  />
    
    <div className="container my-3"  >
    {/* <Routes> */}
        {/* <Route path="/" element={} />
        <Route path="about" element={<About mode={mode}/>} /> */}
      {/* </Routes> */}
      <Textform mode={mode} mode2={mode2} />
    </div>
    
</>
  );
}

export default App;



