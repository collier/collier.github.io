import React from 'react';

import StatBoardImg from '../../assets/stat-board.png';
import SOAPAnalyzerImg from '../../assets/soap-analyzer-2.png';
import NFLDraftPWAImg from '../../assets/nfl-draft-pwa-4.png';
import PersonalSiteImg from '../../assets/personal-site-2.png';

import './ProjectList.module.css';

const projects = [
  {
    name: 'SOAP Analyzer',
    description:
      'A developer tools Chrome extension which allows users to easily track any SOAP HTTP requests that are made by the browser. Its meant to act as the Network tab, but only for SOAP HTTP traffic, currently has ~3,500 actively weekly users.',
    tools: [
      'React.js',
      'Chrome Extension',
      'Webpack',
      'Bootstrap',
      'Ace Code Editor'
    ],
    imgSource: SOAPAnalyzerImg
  },
  {
    name: 'Office Stat Board',
    description:
      "A slideshow which displays statistics about an office or company. The StatBoard was designed to be displayed on a television in a common area in the office so that staff can see cool inforation at a glance. It's useful for highlighting office events, competitions, anniversaries, weather, even communiting information.",
    tools: [
      'React.js',
      'Go',
      'Create React App',
      'Ant Design',
      'CSS Modules',
      'Advent Of Code API',
      'Dark Sky API',
      'ESPN API',
      'DC Metro Hero API'
    ],
    imgSource: StatBoardImg
  },
  {
    name: 'NFL Draft PWA',
    description:
      'A progressive web app reference for picks made during NFL Drafts. Allows users to filter draft picks by year and also by team.',
    tools: [
      'React.js',
      'Framework7',
      'Create React App',
      'Node.js',
      'CSS Modules'
    ],
    imgSource: NFLDraftPWAImg
  },
  {
    name: 'My Personal Site',
    description:
      'A progressive web app reference for picks made during NFL Drafts. Allows users to filter draft picks by year and also by team.',
    tools: ['React.js', 'Gatsby.js', 'CSS Modules'],
    imgSource: PersonalSiteImg
  }
];

const ProjectItem = ({ name, description, tools, imgSource }) => (
  <div styleName="project-item">
    <div styleName="project-details">
      <h3 styleName="project-name">{name}</h3>
      <p styleName="project-description">{description}</p>
      <ul className="inline-list">
        {tools.map((tool, i) => (
          <li className="subtext" styleName="project-tool-item" key={i}>
            {tool}
          </li>
        ))}
      </ul>
    </div>
    <img src={imgSource} alt={name} styleName="project-pic" />
  </div>
);

const ProjectList = () => (
  <>
    {projects.map((project, i) => (
      <ProjectItem
        name={project.name}
        description={project.description}
        tools={project.tools}
        imgSource={project.imgSource}
        key={i}
      />
    ))}
  </>
);

export default ProjectList;
