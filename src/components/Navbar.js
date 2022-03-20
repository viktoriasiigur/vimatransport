import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.active : classes.inactive
        }
        to="/"
      >
        Avaleht
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.active : classes.inactive
        }
        to="/meist"
      >
        Meist
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? classes.active : classes.inactive
        }
        to="/kontakt"
      >
        Kontakt
      </NavLink>
    </div>
  );
};

export default Navbar;
