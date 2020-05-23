import React from 'react';

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

export default () => (
  <Layout>
    <main>
      <h1>Projects</h1>
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
        <ProjectList />
      </section>
    </main>
  </Layout>
);
