import './About.css';
import image from './image.jpg'

function About() {
    return (
      <div id='aboutme' className="About-Section">
        <header className="About-Header">
          <h1 >About Me</h1>
          <p> 
            I have been leading the development of mechatronics projects for the past 3 years.  
            I have been studying mechatronics at college, as well as working full time.  
            I have also built several personal projects outside of work which can be seen in the <a href="#projects">Projects</a> section.
          </p>
          <p> 
            Having gained a wide variety of IT experience I am now looking to develop my skills further.  
            I am currently looking for a role where I can utilise my skills and experience, as well as learn from more experienced developers.
          </p>
          <p> 
            If I'm not at my desk, you can probably find me fixing my classic VW Van or riding my motorbike.
          </p>
        </header>
        <img src={image} className="About-Image" alt="Gregor Ritchie" />
      </div>
    );
  }
  
  export default About;