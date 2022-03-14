import logo from '../../assets/logo.png';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main-content">
      <img src={logo} className="Main-logo" alt="logo" />
      <p>Transportteenused üle Eesti</p>
    </div>
  );
};

export default Main;
