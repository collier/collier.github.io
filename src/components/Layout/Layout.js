import React from 'react';

import Navbar from '../Navbar';

import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;
