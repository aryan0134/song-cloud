import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import axios from 'axios';
import uuid from 'react-uuid';
import * as FaIcons from 'react-icons/fa';


function Navbar({currentSong, count, setCount}){
    const [token, setToken] = useState("")
    const [top, setTop] = useState([])
    // const [count, setCount]= useState(1)

    function decrease(){
        setCount(0)
    }

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
    useEffect(()=>{
        const myTop = async () => {
            const {data} = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                Authorization: `Bearer ${token}`
            }     
            })
            console.log(data)
            setTop(data.items)
        }
        myTop()
    },[token])
    const renderTop= () => {
        // myTop()
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
        {count==1 ? <nav className='sidebar zindex'>
            <div className="app-logo">
                <div className='image-logo'>
                    
                </div>
                <div className="app-logo-text">
                    <h1>Song Cloud</h1>
                </div>
            </div>
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
            <div className="my-songs" >
                {renderTop()}
            </div>
            {count==1 ? <div className='expand-player'>
                <div className='expand-pic'>
                    <div className='expand-icon' onClick={decrease} > 
                        <FaIcons.FaChevronCircleDown />
                    </div>
                    <img src={currentSong.image} />
                </div>
                <div className='expand-name'>
                    <h1>
                        {currentSong.title}
                    </h1>
                    <h3>
                        {currentSong.artist}
                    </h3>
                </div>
            </div> : ""}
        </nav> 
        : <nav className='sidebar'>
        <div className="app-logo">
            <div className='image-logo'>
                
            </div>
            <div className="app-logo-text">
                <h1>Song Cloud</h1>
            </div>
        </div>
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
        <div className="my-songs">
            {renderTop()}
        </div>
        {count==1 ? <div className='expand-player'>
            <div className='expand-pic'>
                <div className='expand-icon' onClick={decrease} > 
                    <FaIcons.FaChevronCircleDown />
                </div>
                <img src={currentSong.image} />
            </div>
            <div className='expand-name'>
                <h1>
                    {currentSong.title}
                </h1>
                <h3>
                    {currentSong.artist}
                </h3>
            </div>
        </div> : ""}
    </nav>}
    </>
  )
}

export default Navbar;