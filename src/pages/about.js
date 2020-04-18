import React from 'react';

import Layout from '../components/Layout';

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
      </section>
      <section>
        <h2>Places I've Worked</h2>
        <h3>Foodio</h3>
        <p>Co-Founder and CTO • Aug 2012 – Aug 2014</p>
        <ul>
          <li>
            Designing javascript based ordering software, used as a template to
            launch 9 restaurant mobile applications in both the Apple App Store
            and Google Play.
          </li>
          <li>
            Developing an administrator dashboard letting restaurants update
            menus, hours, and delivery areas online. Gave access to incoming
            orders to confirm, cancel, or mark as fraud. Provided data analytics
            showing repeat customers, order volume, peak hours, and map of
            deliveries.
          </li>
        </ul>
      </section>
    </main>
  </Layout>
);
