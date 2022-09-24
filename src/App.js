import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts/>} />
        <Route path='/nav' element={<Navbar/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
