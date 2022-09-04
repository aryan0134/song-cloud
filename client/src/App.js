import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <Navbar />
      <Player />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App;
