import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import './App.css';
import Player from './components/Player';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Player />
        <div className="container">
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/Search' element={ <Search /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
