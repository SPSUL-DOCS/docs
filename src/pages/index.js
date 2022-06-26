import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="/img/spsul.webp" alt="Logo" style={{width: 55 + 'vh', height: 'auto'}}></img>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg "
            to="/docs/intro">
            Otevřít DOCS 📰
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
      >
      <HomepageHeader />
      <main>
       
      </main>
    </Layout>
  );
}
