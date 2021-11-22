import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';

import './Navbar.css';

const Navbar = () => {
  const menuList = MenuList.map(({ title, url }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} exact activeClassName='active'>
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <div className='logo'>
        VPN<font>Lab</font>
      </div>
      <div className='menu-icon'>
        <i className='fa fa-bars'></i>
      </div>
      <ul className='menu-list'>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
