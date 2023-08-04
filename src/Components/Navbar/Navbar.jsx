import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const navitems = [
    {
      index: 0,
      name: 'Home',
      link: '/'
    },
    {
      index: 1,
      name: 'About',
      link: '/about'
    },
    {
      index: 2,
      name: 'Projects',
      link: '/projects'
    },
    {
      index: 3,
      name: 'Experience',
      link: '/experience'
    },
    {
      index: 4,
      name: 'Contact',
      link: '/contact'
    }
  ];
  

const Navbar = () => {
  return (
    <>
      <div className='navbar-screen'>
      <NavLink to="/"> R.J</NavLink>
       
           
           
       
        <div className='nav-item'>
          {navitems.map((item) => (
            <NavLink
              
              key={item.index}
              to={item.link}
              activeClassName='active'
              exact
            >
              {item.name}
            </NavLink>
          ))}
        </div>

      </div>

    </>
  );
};

export default Navbar;
