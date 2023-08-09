import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


export default function BackgroundSection()  {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center" style={{marginTop: '25px'}}>
          <h2>Background</h2>
          <p>OHMG is an attempt to make a more generic application from the platform built for OldInsuranceMaps.net, a crowdsourcing site for georeferencing historical fire insurance maps. While that project was built specifically for the <a href="https://loc.gov/collections/sanborn-maps">Sanborn Map collection</a> at the Library of Congress, we believe that aspects of the workflows and tools developed can be valuable for a much wider range of maps. If this interests you, please <a href="mailto:hello@oldinsurancemaps.net">get in touch</a>.</p>
        </div>
        {/* <div className="text--center">
          <Link
            className="button button--secondary button--lg"
            to="https://oldinsurancemaps.net">
            Visit OldInsuranceMaps.net
          </Link>
        </div> */}
      </div>
    </section>
  );
}
