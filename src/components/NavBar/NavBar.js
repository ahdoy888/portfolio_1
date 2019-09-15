import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  props = {
    history: []
  }
  return (
    <nav>
      <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
      <ul>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <Link to={'/resume'} onClick={() => props.history.push("/resume")}>Resume</Link>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  )
  
}

export default NavBar;
