import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss"

function Navbar() {
  return (
    <nav>
      <Link to="/">Avaleht</Link>
      <Link to="/contact">Kontakt</Link>
      <Link to="/about">Meist</Link>
    </nav>
  )
}

export default Navbar;
