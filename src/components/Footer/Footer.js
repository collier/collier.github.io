import React from 'react';
import SocialLinks from '../SocialLinks';

import './Footer.module.css';

const Footer = () => (
  <footer styleName="footer">
    <div styleName="message">
      <p>Designed and built using Gatsby.js. DJ Collier 2020.</p>
    </div>
    <div styleName="socials">
      <SocialLinks styleName="socials" />
    </div>
  </footer>
);

export default Footer;
