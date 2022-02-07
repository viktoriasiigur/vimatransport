import logo from '../assets/logo.png';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Transportteenused üle Eesti
        </p>
      </header>
    </div>
  );
}

export default Main;
