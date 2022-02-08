import logo from '../assets/logo.png';
import "../styles/Main.scss";

function Main() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Transportteenused üle Eesti
        </p>
      </header>
    </div>
  );
}

export default Main;
