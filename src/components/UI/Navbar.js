import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/colors.scss';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink className={(navData) => navData.isActive ? classes.active: classes.inactive } to="/">
        Avaleht
      </NavLink>
      <NavLink className={(navData) => navData.isActive ? classes.active : classes.inactive } to="/contact">
        Kontakt
      </NavLink>
      <NavLink className={(navData) => navData.isActive ? classes.active : classes.inactive } to="/about">
        Meist
      </NavLink>
    </div>
  );
};

export default Navbar;
