import './Qualifications.css';
import codecademy from './Codecademy.png'
import htb from './htb.jpg'
import transcript from './GRitchie1 HTB Transcript.pdf'

function Qualifications() {
    return (
      <div id="qualifications" className="Qualification-Section">
        <header className="Qualification-Header">
          <h1 >Qualifications</h1>
          <p> 
            I am currently studying HND Mechatroncs at the City of Glasgow College, Scotland.
            As part of my HND Graded Unit I developed a robotic arm to sort items by RFID tag, this can be seen in the <a href="#projects">Projects</a> section.  
          </p>
          <p> 
            I recently completed an HNC in Mechatronics at the City of Glasgow College.  
            As well as building on existing skills in Robotics and Programming this course covered Mechanical and Electrical Engineering and Cyber Security.  
          </p>
          <p> 
            I have also undertaken several online courses on CodeCademy and Hack the Box Academy which can be seen in the student transcripts below.
          </p>
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