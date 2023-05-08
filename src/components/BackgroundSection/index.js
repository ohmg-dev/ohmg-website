import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


export default function BackgroundSection()  {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center" style={{marginTop: '25px'}}>
          <h2>Learn More</h2>
        </div>
        <div className="text--center">
          <Link
            className="button button--secondary button--lg"
            to="/about">
            About
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/donate">
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
