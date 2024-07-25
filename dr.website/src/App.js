import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home'; // Ensure Home is in the routes folder
import About from './components/About'; // Ensure About exists in components
import Services from './routes/Services'; // Ensure Services is in the routes folder
import ContactUs from './components/contactus'; // Ensure Contactus exists and is correctly named
import Doctor1 from './components/Doctor1';
import Doctor2 from './components/Doctor2';
import Doctor3 from './components/Doctor3';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/doctor1" element={<Doctor1 />} />
        <Route path="/doctor2" element={<Doctor2 />} />
        <Route path="/doctor3" element={<Doctor3 />} />
      </Routes>
    </Router>
  );
}

export default App;
