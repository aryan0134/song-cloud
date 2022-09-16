import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'; 

function Navbar() {
    
  return (
    <>
        <nav className='sidebar'>
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

            </div>
        </nav>
    </>
  )
}

export default Navbar;