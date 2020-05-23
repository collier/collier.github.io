import React from 'react';
import { Link } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go';
import useSiteMetadata from '../hooks/useSiteMetadata';
import SocialLinks from '../components/SocialLinks';

import ProfileImg from '../assets/profile-sm.jpg';
import '../styles/index.module.css';

const GhostLink = ({ href, children }) => (
  <a href={href} styleName="ghost-link">
    {children}
  </a>
);

function IndexPage() {
  const { githubUrl } = useSiteMetadata();
  return (
    <div styleName="container">
      <div styleName="col1">
        <h1 styleName="title">Hello, I'm D.J. Collier.</h1>
        <h2 styleName="intro">
          I'm a front-end <i>leaning</i> full stack web developer who loves
          building approachable yet powerful applications for users.
        </h2>
        <h3 styleName="blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor
          est, vehicula et aliquam sit amet, dignissim luctus lacus. Proin
          mattis, urna at molestie maximus, nunc risus molestie diam, eu
          venenatis dui sapien in diam. Maecenas odio purus, euismod vulputate
          lacus vel, viverra interdum nisl. Sed pellentesque ut diam eget
          feugiat.
        </h3>
        <GhostLink href={githubUrl}>
          Visit GitHub Profile <GoMarkGithub styleName="github-icon" />
        </GhostLink>
      </div>
      <div styleName="col2">
        <img src={ProfileImg} alt="D.J. Collier" styleName="profile-pic" />
        <ul className="inline-list" styleName="nav-list">
          <li styleName="nav-link">
            <Link to="/projects">Projects</Link> ·
          </li>
          <li styleName="nav-link">
            <Link to="/about">About</Link> ·
          </li>
          <li styleName="nav-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div styleName="socials">
          <SocialLinks styleName="socials" />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
