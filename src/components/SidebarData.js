import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: '',
    path: '/',
    image: 'profile-picture.png', // Path to your profile picture
    cName: 'nav-profile',
    isClickable: true // Indicate that this item should not be clickable
  },
  {
    title: 'About me',
    path: '/aboutme',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    isClickable: true
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    isClickable: true
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text',
    isClickable: true
  },
  {
    title: 'Budo',
    path: '/budo',
    icon: <GiIcons.GiKatana />,
    cName: 'nav-text',
    isClickable: true
  }
];
