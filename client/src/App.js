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
  const [count, setCount]= useState(0)
  const CLIENT_ID = "c8cdda9b5f474d3f837a090b38bdc62f"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "streaming%20user-top-read"

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()


    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}

  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  // const [plays, setPlays] = useState(false);
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

  // useEffect(() => {
  //   if (plays) {
  //     audioElem.current.currentTime= 0;
  //     audioElem.current.play();
  //   }
  //   // else {
  //   //   audioElem.current.pause();
  //   // }
  // }, [plays])


  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  return (
    <> 
    
      <Router>
        {!token ?
                       <div className="SignIn">
                        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}  >Login</a></div> 
                        : <button onClick={logout} className="logout-btn">Logout</button>}
        
        <Navbar currentSong={currentSong} count={count} setCount={setCount} />
        <audio src={currentSong.track} ref={audioElem} onTimeUpdate={onPlaying} />
        <Player count={count} setCount={setCount} songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
        <div className="container homeslide searchpage">
          <Routes>
            <Route path='/' exact element={ <Home songs={songs} setCurrentSong={setCurrentSong} isplaying={isplaying} setisplaying={setisplaying} /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/Search' element={ <Search /> } />
          </Routes>
        </div>
         
      </Router>

    </>
  );
}

export default App;

