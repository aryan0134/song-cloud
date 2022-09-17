import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import axios from 'axios';
import uuid from 'react-uuid';

function Navbar() {
    const [token, setToken] = useState("")
    const [top, setTop] = useState([])

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

    const myTop = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${token}`
          }
            
        })
    
        console.log(data)
        setTop(data.items)
    }
    const renderTop= () => {
        return top.map((item) => (
            <div key={uuid()} className='flex-11'>
                <div key={uuid()} className='PlayerArtist1'>
                  <img src={item.album.images[0].url} />
                </div>
                <div key={uuid()} className='PlayerName1'><h1>{item.name}</h1><h1>{item.artists[0].name}</h1></div>
            </div>
        ))
    }  
  return (
    <>
        <nav className='sidebar'>
<<<<<<< HEAD
            <label className='navbar-label'>
                <img src='logo.png'></img>
            </label>
=======
            <div className="app-logo">
                <div className='image-logo'>
                    
                </div>
                <div className="app-logo-text">
                    <h1>Song Cloud</h1>
                </div>
            </div>
>>>>>>> d6483d62fa4bd404d754719d728a51587201bef2
            <ul className='nav-menu-items'>
                {SidebarData.map((item, index) => {
                     return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                     );
                })}
            </ul>
            <div className='sidebar-divider'>
            </div>
            <div className="my-songs" onClick={myTop}>
                {renderTop()}
            </div>
        </nav>
    </>
  )
}

export default Navbar;