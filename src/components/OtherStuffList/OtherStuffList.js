import React from 'react';

import './OtherStuffList.module.css';

const otherStuffs = [
  {
    name: 'Overwatch Patch Alert',
    description:
      'A developer tools Chrome extension which allows users to easily track any SOAP HTTP requests that are made by the browser. Its meant to act as the Network tab, but only for SOAP HTTP traffic, currently has ~3,500 actively weekly users.',
    tools: ['Go', 'Pushover API']
  },
  {
    name: 'MyFitnessPal Weight Exporter',
    description:
      "A slideshow which displays statistics about an office or company. The StatBoard was designed to be displayed on a television in a common area in the office so that staff can see cool inforation at a glance. It's useful for highlighting office events, competitions, anniversaries, weather, even communiting information.",
    tools: ['Node.js', 'Puppeteer.js']
  }
];

const OtherStuff = ({ name, description, tools }) => (
  <div styleName="other-stuff-item">
    <h3 styleName="other-stuff-name">{name}</h3>
    <p styleName="other-stuff-description">{description}</p>
    <ul className="inline-list">
      {tools.map((tool, i) => (
        <li className="subtext" styleName="other-stuff-tool-item" key={i}>
          {tool}
        </li>
      ))}
    </ul>
  </div>
);

const OtherStuffList = () => (
  <>
    {otherStuffs.map((otherStuff, i) => (
      <OtherStuff
        name={otherStuff.name}
        description={otherStuff.description}
        tools={otherStuff.tools}
        key={i}
      />
    ))}
  </>
);

export default OtherStuffList;
