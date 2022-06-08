import logo from '../../Spiral.png';
import './Main.css';

function Main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <h1>Welcome to Gregor Ritchie's Portfolio Website</h1>
        <p> This website has been made using React. </p>
        <button fontSize="100">
          &#8595;
        </button>

      </header>
    </div>
  );
}

export default Main;
