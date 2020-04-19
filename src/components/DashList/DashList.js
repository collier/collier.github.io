import React from 'react';
import classnames from 'classnames';

const DashList = ({ items, className }) => (
  <ul className={classnames('dash-list', className)}>
    {items.map((item, i) => (
      <li className="dash-item" key={i}>
        {item}
      </li>
    ))}
  </ul>
);

export default DashList;
