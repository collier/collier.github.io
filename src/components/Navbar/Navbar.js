import React from 'react';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>DJ Collier</h1>
      <ul className={styles.linksList}>
        <li className={styles.link}>About</li>
        <li className={styles.link}>Projects</li>
        <li className={styles.link}>Say Hello!</li>
      </ul>
    </nav>
  );
}

export default Navbar;
