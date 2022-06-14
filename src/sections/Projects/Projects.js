import React from 'react';
import './Projects.css';
import {Project, OpenProject} from '../../components/Project/Project';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = [
      {title:"RFID Robotic Arm", overview:"As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.",content:"As part of my HND Mechatronics Graded Unit I built an RFID Robotic arm to pick up, identify, and sort items based on their RFID codes.  This project was 3D printed on my Ender3V2.  This project incorporated mechanical design, 3D modelling, 3D printing, electrical engineering, electronics and programming microcontrollers. ", img:img1, url:"https://github.com/GRitchie1/RFIDRoboticArm-HNDGradedUnit" },
      {title:"Automatic GreenHouse", overview:"An Automatic GreenHouse project to control air temperature and humidity, and water the plants autonomously.", content:"I am currently developing a modular automatic greenhouse that can water the plants and control the air temperature & humidity.  This will run entirely on solar power, and will be modular allowing for multiple units to be controlled by a single Controller Node running a Machine Learning algorithm.  This project is still in the design stage.", img:img2, url:"https://github.com/GRitchie1/AutomaticGreenhouse" },
      {title:"Balena To Do List", overview:"A desktop, Flask based 'To Do List' application run on Raspberry Pi 4 managed by Balena.", content:"As an experiment I built a To Do List application using Flask.  This runs on a Raspberry Pi 4, managed using Balena.io, with the official Pi touchscreen to create a desktop 'To Do List'.  This allows users to track items with features such as sub-steps, due dates, and a Random Task selector.  The goal of this project was to learn Flask, and build a tool to improve my productivity.", img:img3, url:"https://github.com/GRitchie1/Balena_ToDoList" },
    ]
    this.projectsToShow=[this.projectslist[0]]
    this.pageSize = 1               //Number of projects per page
    this.state = { loadNumber: 1, openProjectID: -1 }; //Default number of pages to show
    this.currentOpenProject = null

    this.handleOpenProject = this.handleOpenProject.bind(this)

    
  }

  handleLoadMoreClick = () => {
    this.setState(({ loadNumber }) => ({
      loadNumber: loadNumber + 1,
      openProjectID: -1
    }))

    this.projectsToShow = this.projectslist.slice(0,((this.pageSize*this.state.loadNumber)+1))
  }

  handleOpenProject(id) {
    this.setState(() => ({
    openProjectID: id
    }))
  }

  loadMoreButton(){
    if (this.state.loadNumber*this.pageSize < this.projectslist.length && this.state.openProjectID === -1){
      return(<button className="ProjectsButton" onClick={this.handleLoadMoreClick}>Load More</button>)
    }

  }

  showProjects(){
    if (this.state.openProjectID === -1){
      return(
        <div className='Projects-Container'>
          {this.projectsToShow.map((project, index)=>{return(<Project title={project.title} overview={project.overview} img={project.img} index={index} key={index} handleOpenProject={this.handleOpenProject.bind(this)} url={project.url}/>);})}
        </div>
      );
    }
    else{
      var currentOpenProject = this.projectslist[this.state.openProjectID]
      return(
        <OpenProject title={currentOpenProject.title} content={currentOpenProject.content} img={currentOpenProject.img} handleOpenProject={this.handleOpenProject.bind(this)} url={currentOpenProject.url}/>
      );
    }
  }

  

  render() {
    return (
      <div id="projects" className="Projects-Section">
        <header className="Projects-Header">
          <h1>Projects </h1>
          <p> Here are some of my current and past projects and experiments.</p>
        </header>
        {this.showProjects()}
        {this.loadMoreButton()}
      </div>
    );
    
  }
}
  
  export default Projects;