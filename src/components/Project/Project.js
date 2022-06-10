import React from 'react';
import styles from './Project.module.css';
import Button from '../Button/Button'

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
            <Button link={this.readmore} text="Read More"/>
          </div>
        </div>
      );
    }
  }

  export default Project;