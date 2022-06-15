import React from 'react';
import './Projects.css';
import {Project, OpenProject} from '../../components/Project/Project';
import Button from '../../components/Button/Button'
import projectslist from './ProjectsList'

export class Projects extends React.Component {
  constructor(props){
    super(props);
    this.projectslist = projectslist
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
      return(<div className="ProjectsButton"><Button onClick={this.handleLoadMoreClick} text="Load More"></Button></div>)
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