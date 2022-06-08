import React from 'react';
import styles from './Nav.module.css';

export class NavBar extends React.Component {
    constructor(props){
      super(props);
      this.pages=[
        {name:"Home", to:"/"},
        {name:"About Me", to:"#aboutme"},
        {name:"Qualifications", to:"#qualifications"},
        {name:"Projects", to:"#projects"},
        {name:"Contact Me", to:"#contactme"},
      ];
    }
    
    render() {
      return (
        <div className={styles.NavBar}>
          {this.pages.map((page, index)=>{return(<NavItem key={index} name={page.name} to={page.to}/>);})
          }
          
        </div>
      );
    }
  }


class NavItem extends React.Component{
  render(){
    return(
        <div className={styles.NavItem}>
          <a className={styles.NavLink} href={this.props.to}>{this.props.name}</a>
        </div>
    )
  }
}

export default NavBar;