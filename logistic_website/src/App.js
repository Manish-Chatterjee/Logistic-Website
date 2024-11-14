// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Strategy from './pages/strategy';
import Career from './pages/career';
import Contact from './pages/contact';
import OpenRoles from './pages/openRoles';

import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript


import './style.scss'
import PrivacyPolicy from './pages/privacyPolicy';

const App = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/openRoles" element={<OpenRoles />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
  );
};

export default App;