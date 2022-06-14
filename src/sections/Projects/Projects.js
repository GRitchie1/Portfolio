import React from 'react';
import './Projects.css';
import Project from '../../components/Project/Project';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = [
      {title:"RFID Robotic Arm", content:"As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.  This project was 3D printed on my Ender3V2.  This project incorporated mechanical design, 3D modelling, 3D printing, electrical engineering, electronics and programming microcontrollers. ", img:img1, readmore:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" },
      {title:"Automatic GreenHouse", content:"I am currently developing a modular automatic greenhouse that can water the plants and control the air temperature & humidity.  This will run entirely on solar power, and will be modular allowing for multiple units to be controlled by a single Controller Node running a Machine Learning algorithm.  This project is still in the design stage.", img:img2, readmore:"https://github.com/GRitchie1/AutomaticGreenhouse" },
    ]
    this.projectsToShow=[this.projectslist[0]]
    this.pageSize = 1               //Number of projects per page
    this.state = { loadNumber: 1 }; //Default number of pages to show
  }
  handleClick = () => {
    this.setState(({ loadNumber }) => ({
      loadNumber: loadNumber + 1
    }))

    this.projectsToShow = this.projectslist.slice(0,((this.pageSize*this.state.loadNumber)+1))
  }
  loadMoreButton(){
    if (this.state.loadNumber*this.pageSize < this.projectslist.length){
      return(<button className="ProjectsButton" onClick={this.handleClick}>Load More</button>)
    }

  }
  render() {
    return (
      <div id="projects" className="Projects-Section">
        <header className="Projects-Header">
          <h1 >Projects</h1>
          <p> Here are some of my current and past projects and experiments.</p>
        </header>
          <div className='Projects-Container'>
            {this.projectsToShow.map((project)=>{return(<Project title={project.title} content={project.content} img={project.img} readmore={project.readmore}/>);})}
          </div>
        {this.loadMoreButton()}
          
      </div>
    );
  }
}
  
  export default Projects;