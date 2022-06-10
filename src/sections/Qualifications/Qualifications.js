import './Qualifications.css';
import codecademy from './Codecademy.png'
import htb from './htb.jpg'
import transcript from './GRitchie1 HTB Transcript.pdf'

function Qualifications() {
    return (
      <div id="qualifications" className="Qualification-Section">
        <header className="Qualification-Header">
          <h1 >Qualifications</h1>
          <p> I am currently studying HND Mechatroncs at the City of Glasgow College, Scotland.</p>
          <p> I have completed my HNC Mechatronics and recieved an A for my Graded Unit.  </p>
          <p>I have also undertaken many online courses on CodeCademy and Hack the Box Academy.</p>
        </header>
        <div className='Qualification-LinksContainer'>
          <a className='Qualification-Links' href="https://www.codecademy.com/profiles/GRitchie1">
            <img src={codecademy} alt="Codecademy"></img>
          </a>
          <a className='Qualification-Links' href={transcript}>
            <img src={htb} alt="Hack the Box Academy"></img>
          </a>
        </div>
      </div>
    );
  }
  
  export default Qualifications;