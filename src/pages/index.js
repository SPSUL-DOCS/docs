import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

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
    <Layout>
      <Head>
        <meta name="title" content="🚀 SPSUL DOCS"/>
        <meta name="description" content="Dokumentace pro studenty Střední průmyslové školy Ústí nad Labem, Resslova 5"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://docs.spsul.cz/"/>
        <meta property="og:title" content="🚀 SPSUL DOCS"/>
        <meta property="og:description" content="Dokumentace pro studenty Střední průmyslové školy Ústí nad Labem, Resslova 5"/>
        <meta property="og:image" content="https://docs.spsul.cz/img/spsul.webp"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://docs.spsul.cz/"/>
        <meta property="twitter:title" content="🚀 SPSUL DOCS"/>
        <meta property="twitter:description" content="Dokumentace pro studenty Střední průmyslové školy Ústí nad Labem, Resslova 5"/>
        <meta property="twitter:image" content="https://docs.spsul.cz/img/spsul.webp"/>
      </Head>
      <HomepageHeader />
      <main>
       
      </main>
    </Layout>
  );
}