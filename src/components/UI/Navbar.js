import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar-navigation">
      <Link component={Link} to="/">
        Avaleht
      </Link>
      <Link to="/contact">Kontakt</Link>
      <Link to="/about">Meist</Link>
    </div>
  );
};

export default Navbar;
