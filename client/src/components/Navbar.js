import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

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
        </nav>
    </>
  )
}

export default Navbar;