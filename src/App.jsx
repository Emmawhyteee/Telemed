import { useState,useEffect } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GetInvolved from './components/GetInvolved';
import Service from './components/Service';
import Telemed from './components/Telemed';
import Footer from './components/Footer';
import More from './components/More';

import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles



function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,     // whether animation should happen only once - while scrolling down
    });
  }, []);


  return (
    <>
     
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/service" element={<Service />} />
        <Route path="/telemed" element={<Telemed />} />
        <Route path="/more" element={<More />} />
       
        
        </Routes>
          
        <Footer />
    </div>
    </>
  )
}

export default App
