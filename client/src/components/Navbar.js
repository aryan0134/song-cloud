import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'; 

function Navbar() {
  return (
    <>
        <nav className='sidebar'>
            <label className='navbar-label'>
                <img src='logo.png'></img>
            </label>
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
        </nav>
    </>
  )
}

export default Navbar;