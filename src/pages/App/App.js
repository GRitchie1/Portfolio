import logo from '../../Spiral.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Gregor Ritchie's Portfolio Website</h1>
        <p> This website has been made using React. </p>
        <button fontSize="100">
          &#8595;
        </button>

      </header>
    </div>
  );
}

export default App;
