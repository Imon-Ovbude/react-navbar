import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList } from './MenuList';

import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const menuList = MenuList.map(({ title, url }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} exact activeClassName='active'>
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className='logo'>
        VPN<font>Lab</font>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
