import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Handle Complex Content',
    Svg: require('@site/static/icons/noun-book-3124501.svg').default,
    description: (
      <>
        Multi-document items, like atlases, are first-class citizens, with full support for multiple maps on each sheet and multiple content scales across the atlas. <a href="/features#handle-complex-content">Learn more...</a>
      </>
    ),
  },
  {
    title: 'Collaborative Model',
    Svg: require('@site/static/icons/noun_Users_1236015.svg').default,
    description: (
      <>
        An iterative, componentized workflow provides direct access for any user to contribute at any stage in the overall process. <a href="/features#collaborative-model">Learn more...</a>
      </>
    ),
  },
  {
    title: 'Seamless Mosaics',
    Svg: require('@site/static/icons/noun_FoldedMap_2592599.svg').default,
    description: (
      <>
        Margins are removed from adjacent map layers by creating a "multimask" across the entire item, rather than trimming each layer independently. <a href="/features#seamless-mosaics">Learn more...</a>
      </>
    ),
  },
  {
    title: 'Transformations & Projections',
    Svg: require('@site/static/icons/noun_Scroll_2592600.svg').default,
    description: (
      <>
        Backed by GDAL, any standard transformation algorithms can be used for GCPs, and any projection can be targeted. <a href="/features#transformations--projections">Learn more...</a>
      </>
    ),
  },
  {
    title: 'Web Services',
    Svg: require('@site/static/icons/noun_Layer_2583171.svg').default,
    description: (
      <>
        Layers are immediately published as web services and can easily be integrated into third-party platforms, like OpenHistoricalMap and Felt. <a href="/features#web-services">Learn more...</a>
      </>
    ),
  },
  {
    title: 'Data API',
    Svg: require('@site/static/icons/noun_map pin_1832932.svg').default,
    description: (
      <>
         A simple API can provide researchers with programmatic access to GCPs, cutlines, and GeoTIFF download links. <a href="/features#data-api">Learn more...</a>
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
          {/* <h2>Features</h2> */}
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
