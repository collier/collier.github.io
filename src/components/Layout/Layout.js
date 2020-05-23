import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './Layout.module.css';

const Layout = ({ children }) => (
  <div styleName="container">
    <div styleName="navbar">
      <Navbar />
    </div>
    <div styleName="content">{children}</div>
    <div styleName="footer">
      <Footer />
    </div>
  </div>
);

export default Layout;
