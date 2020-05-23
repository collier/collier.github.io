import React from 'react';
import classnames from 'classnames';

import styles from './DashList.module.css';

classnames.bind(styles);

const DashList = ({ items, className }) => (
  <ul className={classnames('dash-list', className)}>
    {items.map((item, i) => (
      <li styleName="dash-item" key={i}>
        {item}
      </li>
    ))}
  </ul>
);

export default DashList;
