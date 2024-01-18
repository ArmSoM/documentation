import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.topBannerTitleText)} >
          <Translate id="home.page.HomePageTitle"></Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="home.page.HomePageIntroduction"></Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/sige7-1">
            <Translate id="home.page.HomePageButton"></Translate>
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
      title={`${siteConfig.title}`}
      description="The ArmSoM team consists of young open source hardware  enthusiasts. Our mission is to build a more open and reliable global open source community - single board computer,  development board， mini pc， open source  development board，open source hardware, raspberry pi，Thin client，embedded development board, arm development board, arm linux board,  arm single board computer，jetson nano">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
