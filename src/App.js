import React from 'react';
import {BrowserRouter as Router,Routes , Route, Link} from 'react-router-dom';
import './App.css';

import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
