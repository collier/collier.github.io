import React from 'react';

import DashList from '../DashList';

import './WorkList.module.css';

const workItems = [
  {
    company: 'Counterpoint Consulting',
    title: 'Senior Software Consultant',
    timeframe: 'Aug 2014 – Current',
    location: 'Tysons Corner, VA',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Donec suscipit euismod lacus, vitae volutpat eros lobortis nec.',
      'Nulla vehicula velit ut semper congue.'
    ]
  },
  {
    company: 'Foodio',
    title: 'Co-Founder and CTO',
    timeframe: 'Aug 2012 – Aug 2014',
    location: 'Charlottesville, VA',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Donec suscipit euismod lacus, vitae volutpat eros lobortis nec.',
      'Nulla vehicula velit ut semper congue.'
    ]
  },
  {
    company: 'Videology',
    title: 'Research and Development Intern',
    timeframe: 'Summer 2012',
    location: 'Baltimore, MD',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Donec suscipit euismod lacus, vitae volutpat eros lobortis nec.',
      'Nulla vehicula velit ut semper congue.'
    ]
  }
];

const WorkItem = ({ company, title, timeframe, location, bullets }) => (
  <div styleName="work-item">
    <h3>{company}</h3>
    <p className="subtext">
      {title} • {timeframe} • {location}
    </p>
    <DashList items={bullets} />
  </div>
);

const WorkList = () => (
  <>
    {workItems.map((workItem, i) => (
      <WorkItem
        company={workItem.company}
        title={workItem.title}
        timeframe={workItem.timeframe}
        location={workItem.location}
        bullets={workItem.bullets}
        key={i}
      />
    ))}
  </>
);

export default WorkList;
