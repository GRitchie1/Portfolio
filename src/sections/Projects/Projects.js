import React from 'react';
import './Projects.css';
import Project from '../../components/Project/Project';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = [
      {title:"RFID Robotic Arm", content:"As part of my HND Mechatronics course I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.  This project was 3D printed on my Ender3V2.", img:img1, readmore:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" },
      {title:"Automatic GreenHouse", content:"I am currently developing a modular automatic greenhouse that can water the plants and control the air temperature & humidity.", img:img2, readmore:"https://github.com/GRitchie1/AutomaticGreenhouse" },
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
      return(<button onClick={this.handleClick}>Load More</button>)
    }

  }
  render() {
    return (
      <div id="projects" className="Projects-Section">
        <header className="Projects-Header">
          <h1 >Projects</h1>
          <p> Here are some of my current and past projects.</p>
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