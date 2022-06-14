import React from 'react';
import styles from './Project.module.css';
import Button from '../Button/Button'

class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.url = props.url
      this.index = props.index
    }
    
    render() {
      return (
        <div className={styles.ProjectContainer}>
          <img className={styles.ProjectImg} src={this.img} alt={this.title}></img>
          <div className={styles.ProjectTextContainer}>
            <h3 className={styles.ProjectText}>{this.title}</h3>
            <p className={styles.ProjectText}>{this.content}</p>
            <Button link={this.url} text="Read More"/>
            <button onClick={()=>this.props.handleOpenProject(this.index)}>open</button>
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
          <button onClick={()=>this.props.handleOpenProject(-1)}>Close</button>
          <img className={styles.OpenProjectImg} src={this.img} alt={this.title}></img>
          <h3 className={styles.ProjectText}>{this.title}</h3>
          <p className={styles.ProjectText}>{this.content}</p>
          <Button link={this.url} text="Read More"/>
        </div>
      );
    }
  }


  export {Project, OpenProject}

