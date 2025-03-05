import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ margin: '0 10px', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>Contact</Link>
    </nav>
  );
}

// export default App;

export default App
