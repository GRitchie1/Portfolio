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
          <HamburgerMenu/>
        </div>
      );
    }
  }


class HamburgerMenu extends React.Component{
  constructor(props){
    super(props)
    this.state ={expandMenu: 0}
    this.pages=[
      {name:"Home", to:"#home"},
      {name:"About Me", to:"#aboutme"},
      {name:"Qualifications", to:"#qualifications"},
      {name:"Projects", to:"#projects"},
      {name:"Contact Me", to:"#contactme"},
    ];
  }
  handleClick = () => {
    
    if (this.state.expandMenu === 0){
      this.setState(() => ({
        expandMenu: 1
      }))
    }
    else if (this.state.expandMenu === 1){
      this.setState(() => ({
        expandMenu: 0
      }))
    }
  }
  render(){
    if (this.state.expandMenu === 0){
      return (
        <div onClick={this.handleClick} className={styles.HamburgerMenu}>
                <span id={styles.one} className={styles.hamburger_lines}></span>
                <span id={styles.two} className={styles.hamburger_lines}></span>
                <span id={styles.three} className={styles.hamburger_lines}></span>
        </div>
      )
    }
    else{
      return(
      <div className={styles.HamNavBar}>
        <div onClick={this.handleClick} className={styles.HamburgerMenu}>
          <span id={styles.one} className={styles.hamburger_lines}></span>
          <span id={styles.two} className={styles.hamburger_lines}></span>
          <span id={styles.three} className={styles.hamburger_lines}></span>
        </div>
        <div id={styles.HamNav}>
          {this.pages.map((page, index)=>{return(<NavItem key={index} name={page.name} to={page.to}/>);})}
        </div>
      </div>
      )
    }
    
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