import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

import styles from '../styles/index.module.css';

function IndexPage() {
  const { githubUrl } = useSiteMetadata();
  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        <h1 className={styles.title}>Hello, I'm D.J. Collier.</h1>
        <h2 className={styles.intro}>
          I'm a front-end <i>leaning</i> full stack web developer who loves
          building approachable yet powerful applications for users.
        </h2>
        <h3 className={styles.blurb}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor
          est, vehicula et aliquam sit amet, dignissim luctus lacus. Proin
          mattis, urna at molestie maximus, nunc risus molestie diam, eu
          venenatis dui sapien in diam. Maecenas odio purus, euismod vulputate
          lacus vel, viverra interdum nisl. Sed pellentesque ut diam eget
          feugiat.
        </h3>
        <a href={githubUrl}></a>
      </div>
      <div className={styles.col2}>
        <ul className={styles.navList}>
          <li className={styles.navLink}>Projects ·</li>
          <li className={styles.navLink}>Experiments ·</li>
          <li className={styles.navLink}>
            <Link to="/about">About</Link> ·
          </li>
          <li className={styles.navLink}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;
