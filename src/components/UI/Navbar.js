import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/colors.scss';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to="/">
        Avaleht
      </NavLink>
      <NavLink to="/contact">
        Kontakt
      </NavLink>
      <NavLink to="/about">
        Meist
      </NavLink>
    </div>
  );
};

export default Navbar;
