import React from 'react';
import './Projects.css';
import Project from '../../components/Project/Project';

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = [
      {title:"This is the 1st project.", content:"This project was great!", img:"src" },
      {title:"This is the 2nd project.", content:"This project awesome!", img:"src" }
    ]
  }
  render() {
    return (
      <div id="projects" className="Projects-Section">
        <header className="Projects-Header">
          <h1 >Projects</h1>
          <p> Here are some of my past projects.</p>
          {this.projectslist.map((project)=>{return(<Project title={project.title} content={project.content} img={project.img}/>);})}
        </header>
      </div>
    );
  }
}
  
  export default Projects;