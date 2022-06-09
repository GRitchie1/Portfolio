import React from 'react';
import styles from './Project.module.css';

export class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
    }
    
    render() {
      return (
        <div className={styles.ProjectContainer}>
          <img src={this.img} alt={this.title}></img>
          <h3>{this.title}</h3>
          <p>{this.content}</p>
        </div>
      );
    }
  }

  export default Project;