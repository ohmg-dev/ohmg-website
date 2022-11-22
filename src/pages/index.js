import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Learn about the La. Historical Map Georeferencer</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://oldinsurancemaps.net">
            Go to the Main Site &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A crowdsourcing platform for georeferencing content from the Sanborn maps collection at the Library of Congress.">
      <HomepageHeader />
      <div style={{backgroundColor:'#123b4f', color:'white'}}>
        
      </div>
      <div style={{color:'rgb(75, 17, 19)', background:'rgb(255, 235, 236)', textAlign:'center', padding:'20px'}}>
        <div>
          <strong>Work in Progress</strong>
        </div>
        <div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p>This site is still under construction and a bit fragmented. Please be patient!</p></div>
      </div>
      <main>
        <HomepageFeatures />
        <iframe height="400px;" style={{width:'100%', border:'1px solid grey'}} src="https://oldinsurancemaps.net/viewer/baton-rouge-la/?year=1898&utm_source=documentation-embed#/center/-91.18179,30.44938/zoom/16.2"></iframe>
      </main>
    </Layout>
  );
}
