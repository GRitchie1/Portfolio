//import logo from '../../Spiral.png';
import './Main.css';

function Main() {
  return (
    <div id="home" className="MainSection">
        <h1 >I am Gregor Ritchie</h1>
        <p> I am an aspiring software engineer with a passion for systems development and mechatronics.</p>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="Main-Button">
          <a href="#aboutme">
            <span class="m_scroll_arrows one"></span>
            <span class="m_scroll_arrows two"></span>
            <span class="m_scroll_arrows three"></span>
          </a>
        </div>
    </div>
  );
}

export default Main;
