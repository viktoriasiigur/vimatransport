import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './Main.scss';

const Main = () => {
  return (
    <div className="Main-content">
      <img src={logo} className="Main-logo" alt="logo" />
      <p className="Main-description">Transportteenused üle Eesti</p>
      <div className="Main-link">
        <Link to="/contact">
          <div>Telli sõit</div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
