import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Volume Management',
    Svg: require('@site/static/icons/noun_UprightBook_2089467.svg').default,
    description: (
      <>
        A <a href="https://oldinsurancemaps.net/loc/sanborn03275_003/?utm_source=documentation-link">Volume Summary</a> page
        aggregates all sheets from a Sanborn map edition (or volume) for an
        overview of georeferencing progress.
      </>
    ),
  },
  {
    title: 'Architectural Detail',
    Svg: require('@site/static/icons/noun_Scroll_2592600.svg').default,
    description: (
      <>
        Sanborn map sheets contain extensive information about every building at a very large scale (1:100 or 1:200).
      </>
    ),
  },
  {
    title: 'Geospatial Layers',
    Svg: require('@site/static/icons/noun_Layer_2583171.svg').default,
    description: (
      <>
        Users will georeference map sheets one-by-one, eventually creating a continuous mosaic out of the
        volume.
      </>
    ),
  },
  {
    title: 'Explore the Mosaics',
    Svg: require('@site/static/icons/noun_map pin_1832932.svg').default,
    description: (
      <>
        The mosaics can be used in web maps, as below, to provide a window to what American
        cities looked like at the turn of the 20th century.
      </>
    ),
  },
];

// function Feature({Svg, title, description}) {
//   return (
//     <div className={clsx('col col--3')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures()  {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Feature({Svg, title, description}) {
  return (
    <div style={{minWidth:'25%'}}>
      <div className="text--center">
        <Svg className="svg-icon" role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures()  {
  return (
    <section className="front-page">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
