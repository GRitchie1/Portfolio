import './Contact.css';
import linkedin from './LinkedIn.png'
import github from './GitHub.png'

function Contact() {
    return (
      <div id="contactme" className="Contact-Section">
        <header className="Contact-Header">
          <h1 >Connect With Me</h1>
          <a className="Contact-Links" href="https://www.linkedin.com/in/gregorritchie/" >
            <img src={linkedin} alt="LinkedIn"></img>
          </a>
          <a className="Contact-Links" href="https://github.com/GRitchie1" >
            <img src={github} alt="GitHub"></img>
          </a>
        </header>
      </div>
    );
  }
  
  export default Contact;