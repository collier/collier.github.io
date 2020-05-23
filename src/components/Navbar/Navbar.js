import React from 'react';
import { Link } from 'gatsby';

import './Navbar.module.css';

function Navbar() {
  return (
    <nav styleName="navbar">
      <Link to="/" styleName="brand">
        DJ Collier
      </Link>
      <ul styleName="links-list">
        <li styleName="link">
          <Link to="/">Home</Link>
        </li>
        <li styleName="link">
          <Link to="/projects">Projects</Link>
        </li>
        <li styleName="link">
          <Link to="/about">About</Link>
        </li>
        <li styleName="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
