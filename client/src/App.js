import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import './App.css';
import Player from './components/Player';
import { songsdata } from './components/Audio';

function App() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  
  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <>
      <Router>
        <Navbar />
        <audio src={currentSong.track} ref={audioElem} onTimeUpdate={onPlaying} />
        <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        <div className="container homeslide searchpage">
          <Routes>
            <Route path='/' exact element={ <Home songs={songs} setCurrentSong={setCurrentSong} /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/Search' element={ <Search /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

