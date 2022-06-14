import React from 'react';
import styles from './Button.module.css';

export class Button extends React.Component {
    constructor(props){
      super(props);
      this.text = props.text
      this.icon = props.icon
      this.link = props.link
    }
    
    render() {
      return (
        <a className={styles.ButtonLink} href={this.link} onClick={this.props.onClick}>
          <div className={styles.ButtonContainer}>
            <p className={styles.ButtonText}>{this.text}</p>
          </div>
        </a>
      );
    }
  } 

  export default Button;