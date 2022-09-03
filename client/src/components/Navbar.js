import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'; 

function Navbar() {
  return (
    <>
        <nav className='sidebar'>
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