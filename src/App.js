import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contacts from './Components/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts/>} />
      </Routes>
    </Router>
  );
}

export default App;
