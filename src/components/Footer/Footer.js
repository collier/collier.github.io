import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';

import useSiteMetadata from '../../hooks/useSiteMetadata';

import './Footer.module.css';

function Footer() {
  const {
    githubUrl,
    twitterUrl,
    codepenUrl,
    linkedinUrl,
    emailAddress
  } = useSiteMetadata();
  return (
    <footer styleName="footer">
      <div styleName="message">
        <p>Designed and built using Gatsby.js. DJ Collier 2020.</p>
      </div>
      <div styleName="socials">
        <a href={githubUrl} styleName="social-link">
          <FaGithub />
        </a>
        <a href={twitterUrl} styleName="social-link">
          <FaTwitter />
        </a>
        <a href={codepenUrl} styleName="social-link">
          <FaCodepen />
        </a>
        <a href={linkedinUrl} styleName="social-link">
          <FaLinkedin />
        </a>
        <a href={`mailto:${emailAddress}`} styleName="social-link">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
