import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaCodepen,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';

import useSiteMetadata from '../../hooks/useSiteMetadata';

import './SocialLinks.module.css';

export default function SocialLinks() {
  const {
    githubUrl,
    twitterUrl,
    codepenUrl,
    linkedinUrl,
    emailAddress
  } = useSiteMetadata();
  const socialLinks = [
    {
      href: githubUrl,
      icon: <FaGithub />
    },
    {
      href: twitterUrl,
      icon: <FaTwitter />
    },
    {
      href: codepenUrl,
      icon: <FaCodepen />
    },
    {
      href: linkedinUrl,
      icon: <FaLinkedin />
    },
    {
      href: `mailto:${emailAddress}`,
      icon: <FaEnvelope />
    }
  ];
  return (
    <>
      {socialLinks.map(({ href, icon }, i) => (
        <a href={href} styleName="social-link" key={i}>
          {icon}
        </a>
      ))}
    </>
  );
}
