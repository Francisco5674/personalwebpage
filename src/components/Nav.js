import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Nav () {

    const [sidebar, setSidebar] = useState(false);
    const location = useLocation(); // Get current location

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {/* Conditionally render the title */}
            {location.pathname !== '/' && (
              <div className='navbar-title'>
                Francisco Fuentes
              </div>
            )}
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    {item.isClickable ? (
                      <Link to={item.path}>
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="profile-picture" />
                        ) : (
                          item.icon
                        )}
                        <span>{item.title}</span>
                      </Link>
                    ) : (
                      <>
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="profile-picture" />
                        ) : (
                          item.icon
                        )}
                        <span>{item.title}</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
  );
}

export default Nav
