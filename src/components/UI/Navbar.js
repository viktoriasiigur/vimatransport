import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/colors.scss';
import './Navbar.scss';

// const linkStyle = {
//   textDecoration: 'none',
//   textTransform: 'uppercase',
// };

const Navbar = () => {
  return (
    <div className="Navbar-navigation">
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
