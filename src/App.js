import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './Screens/Preloader';
import Navbar from './Components/Navbar/Navbar';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import Contact from './Screens/Contact/Contact';
import Projects from './Screens/Projects/Project';
import Work from './Screens/Work/Work';

function App() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
   
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])
  return (
    <>
     {
      loading?
      <Preloader/>
      :
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Work/>} />
        </Routes>
      </div>
     }
       
       
      
    </>
  );
}

export default App;
