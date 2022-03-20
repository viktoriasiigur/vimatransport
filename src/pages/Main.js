import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import classes from "./Main.module.scss";

const Main = () => {
  return (
    <div className={classes.content}>
      <img src={logo} className={classes.logo} alt="logo" />
      <p className={classes.description}>Transportteenused üle Eesti</p>
      <div className={classes.button}>
        <Link to="/kontakt">
          <div>Telli sõit</div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
