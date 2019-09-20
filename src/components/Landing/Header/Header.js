import React, { Component } from 'react';
import './Header.css';

const Header = () => {
    return (
      <header className="vertical-center header-landing">
        <div>
          <h1><a href="/">Hi, My name is <strong className="name">Jacky Koo</strong>.<br />I'm a Fullstack Developer</a></h1>
        </div>
      </header>
    )
}

export default Header;
