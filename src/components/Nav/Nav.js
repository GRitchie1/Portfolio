import React from 'react';
import styles from './Nav.module.css';

export class NavBar extends React.Component {
    constructor(props){
      super(props);
      this.pages=[
        {name:"Home", to:"#home"},
        {name:"About Me", to:"#aboutme"},
        {name:"Qualifications", to:"#qualifications"},
        {name:"Projects", to:"#projects"},
        {name:"Contact Me", to:"#contactme"},
      ];
    }
    
    render() {
      return (
        <div>
          <div className={styles.NavBar}>
            {this.pages.map((page, index)=>{return(<NavItem key={index} name={page.name} to={page.to}/>);})
            }
            
          </div>
          <div className={styles.HamburgerMenu}>
            <span id={styles.one} className={styles.hamburger_lines}></span>
            <span id={styles.two} className={styles.hamburger_lines}></span>
            <span id={styles.three} className={styles.hamburger_lines}></span>
          </div>
        </div>
      );
    }
  }


class NavItem extends React.Component{
  render(){
    return(
      <a className={styles.NavLink} href={this.props.to}>
        <div className={styles.NavItem}>
          {this.props.name}
        </div>
      </a>
    )
  }
}

export default NavBar;