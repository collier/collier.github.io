import React from 'react';
import { Link } from 'gatsby';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>
        <Link to="/">DJ Collier</Link>
      </h1>
      <ul className={styles.linksList}>
        <li className={styles.link}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.link}>Projects</li>
        <li className={styles.link}>Playground</li>
        <li className={styles.link}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.link}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
