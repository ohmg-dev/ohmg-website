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
          <span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <svg viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>
          </span>
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
