import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/Search',
        icon: <AiIcons.AiOutlineSearch />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text'
    },

]