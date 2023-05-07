import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureListOld = [
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

const FeatureList = [
  {
    title: 'Handling Complex Content',
    Svg: require('@site/static/icons/noun-book-3124501.svg').default,
    description: (
      <>
        Multi-document items, like atlases, are first-class citizens, with full support for multiple maps on each sheet and multiple content scales across the atlas.
      </>
    ),
  },
  {
    title: 'Collaborative Work Model',
    Svg: require('@site/static/icons/noun_Users_1236015.svg').default,
    description: (
      <>
        An iterative, componentized workflow provides direct access for any user to contribute at any stage in the overall process.
      </>
    ),
  },
  {
    title: 'Seamless Mosaics',
    Svg: require('@site/static/icons/noun_FoldedMap_2592599.svg').default,
    description: (
      <>
        Margins are removed from adjacent map layers by creating a "multimask" across the entire item, rather than trimming each layer independently.
      </>
    ),
  },
  {
    title: 'Full Transformation Support',
    Svg: require('@site/static/icons/noun_Scroll_2592600.svg').default,
    description: (
      <>
        Backed by GDAL, any standard transformation algorithms can be used for GCPs, and any projection can be targeted.
      </>
    ),
  },
  {
    title: 'Web Services',
    Svg: require('@site/static/icons/noun_Layer_2583171.svg').default,
    description: (
      <>
        Layers are immediately published as web services and can easily be integrated into third-party platforms, like OpenHistoricalMap and Felt. 
      </>
    ),
  },
  {
    title: 'Data API',
    Svg: require('@site/static/icons/noun_map pin_1832932.svg').default,
    description: (
      <>
         A simple API can provide researchers with programmatic access to GCPs, cutlines, and GeoTIFF download links.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
    <section className={styles.features}>
      <div className="container">
        <div className="text--center" style={{marginTop: '25px'}}>
          <h2>Features</h2>
          </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// function Feature({Svg, title, description}) {
//   return (
//     <div style={{minWidth:'25%'}}>
//       <div className="text--center">
//         <Svg className="svg-icon" role="img" />
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
//     <section className="front-page">
//       {FeatureList.map((props, idx) => (
//         <Feature key={idx} {...props} />
//       ))}
//     </section>
//   );
// }
