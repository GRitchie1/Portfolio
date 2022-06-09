import React from 'react';
import styles from './Project.module.css';

export class Project extends React.Component {
    constructor(props){
      super(props);
      this.title = props.title
      this.img = props.img
      this.content = props.content
      this.readmore = props.readmore
    }
    
    render() {
      return (
        <div className={styles.ProjectContainer}>
          <img className={styles.ProjectImg} src={this.img} alt={this.title}></img>
          <div className={styles.ProjectTextContainer}>
            <h3 className={styles.ProjectText}>{this.title}</h3>
            <p className={styles.ProjectText}>{this.content}</p>
            <a className={styles.ProjectText} href={this.readmore}>Read More</a>
          </div>
        </div>
      );
    }
  }

  export default Project;