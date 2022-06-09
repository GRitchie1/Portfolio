import './About.css';
import image from './image.jpg'

function About() {
    return (
      <div className="About-Section">
        <header className="About-Header">
          <h1>About Me</h1>
          <p> I am an aspiring software engineer with a passion for systems development and mechatronics.  I have been leading the development of mechatronics projects for the past 3 years.  I have built several personal projects outside of work which can be seen below.</p>
          <p> If I'm not at my desk, you can probably find me fixing my classic VW Van or riding my motorbike.</p>
        </header>
        <img src={image} className="About-Image" alt="Gregor Ritchie" />
      </div>
    );
  }
  
  export default About;