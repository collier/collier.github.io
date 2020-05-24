import React from 'react';

import Layout from '../components/Layout';
import WorkList from '../components/WorkList';
import DashList from '../components/DashList';

import styles from '../styles/about.module.css';

export default () => (
  <Layout>
    <main>
      <h1>About</h1>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          justo nisl. Ut posuere justo consectetur, finibus augue vitae,
          bibendum orci. Aliquam nec turpis pretium quam feugiat aliquet. Fusce
          semper, eros at bibendum tincidunt, felis sapien rutrum quam, a
          pulvinar ex purus at purus.
        </p>
        <p>
          Aliquam eget fringilla est. Cras quis semper massa, sit amet congue
          purus. Mauris bibendum pharetra odio, et laoreet risus maximus vel.
          Etiam eget pharetra neque, eget venenatis arcu. Duis pellentesque enim
          felis, ut ultrices eros placerat non. Curabitur maximus, enim a
          imperdiet faucibus, ligula orci tincidunt turpis, ac mollis ligula
          felis rhoncus leo.
        </p>
      </section>
      <section>
        <h2>Skills And Experience</h2>
        <p>JavaScript (ES6+), TypeScript, Node.js, Java, Go, HTML/CSS</p>
        <p>
          React.js, Marionette/Backbone.js, Gatsby.js, Bootstrap, Handlebars,
          CSS Modules, jQuery
        </p>
        <p>Microsoft SQL Server, MySQL, ElasticSearch, Logstash</p>
        <p>
          Webpack, Git, SVN, Balsamiq, Chrome Extensions, Postman, OpenText
          AppWorks & Content Server
        </p>
        <p>
          <strong>It's Been A While</strong>: PHP, R, C#
        </p>
      </section>
      <section>
        <h2>Places I've Worked</h2>
        <WorkList />
      </section>
      <section>
        <h2>Education</h2>
        <h3>Univerity of Virginia</h3>
        <p className="m-n">
          Bachelor of Science (BSc), Systems Engineering and Mathematics
        </p>
        <p className="subtext">
          2009-2013, School of Engineering and Applied Science, with Distinction
        </p>
        <p>
          <b>Interesting Stuff I Studied:</b>
        </p>
        <div styleName="styles.coursework">
          <DashList
            className={styles.courseList}
            items={[
              'Human Machine Interface',
              'Linear Programming',
              'Science of Information',
              'Stochastic Decision Models',
              'Discrete Event Simulation'
            ]}
          />
          <DashList
            className={styles.courseList}
            items={[
              'Non-Euclidean Geometry',
              'Abstract Algebra',
              'Real Analysis',
              'History of Math',
              'Atmosphere and Weather'
            ]}
          />
        </div>
      </section>
    </main>
  </Layout>
);
