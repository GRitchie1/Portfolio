import React from 'react';
import styles from './Project.module.css';
import Button from '../Button/Button'

class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.overview = props.overview
      this.url = props.url
      this.index = props.index
    }
    
    render() {
      return (
        <div className={styles.ProjectContainer}>
          <img className={styles.ProjectImg} src={this.img} alt={this.title}></img>
          <div className={styles.ProjectTextContainer}>
            <h2 className={styles.ProjectText}>{this.title}</h2>
            <p className={styles.ProjectText}>{this.overview}</p>
            <Button onClick={()=>this.props.handleOpenProject(this.index)} text="Read More"></Button>
          </div>
        </div>
      );
    }
  }


  class OpenProject extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.url = props.url
    }
    
    render() {
      return (
        <div className={styles.OpenProjectContainer}>
          <Button text="Close" onClick={()=>this.props.handleOpenProject(-1)}></Button>
          <img className={styles.OpenProjectImg} src={this.img} alt={this.title}></img>
          <h2 className={styles.ProjectText}>{this.title}</h2>
          <p className={styles.ProjectText}>{this.content}</p>
          {this.url ? <Button link={this.url} text="Check it out on GitHub"/> : <Button link='#contactme' text="Contact Me"/>}
          
        </div>
      );
    }
  }


  export {Project, OpenProject}

