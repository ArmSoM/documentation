import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
// const {withBaseUrl} = useBaseUrlUtils();
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (
      <Translate id="home.page.HomePageFeatures.gettingStart.title">
        Getting Started Guide
      </Translate>
    ),
    image: {
      src: './img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <Translate id="home.page.HomePageFeatures.gettingStart.description">
        Start your favorite SBC/SOM, Provide complete product usage documentation to help software engineers quickly develop applications.
      </Translate>
    ),
    hrefLink: "./docs/sbc/sbc-introduction"
  },
  {
    title: (
      <Translate id="home.page.HomePageFeatures.HardwareInformation.title">
        Hardware Information
      </Translate>
    ),
    image: {
      src: './img/Open-source-hardware-logo.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <Translate id="home.page.HomePageFeatures.HardwareInformation.description">
        Provides rich hardware development documents, including schematics, PCB, DXF, etc. 
        Help hardware engineers quickly develop and put into production
      </Translate>
    ),
    hrefLink: "./docs/sbc/sbc-introduction"
  },
   {
    title: (
      <Translate id="home.page.HomePageFeatures.PassionateCommunity.title">
        Passionate developer community
      </Translate>
    ),
    image: {
      src: './img/undraw_around_the_world.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <Translate id="home.page.HomePageFeatures.PassionateCommunity.description">
        The armsom community is powered by a passionate of developers that publish videos, guides, and open source projects.
      </Translate>
    ),
    hrefLink: "http://forum.armsom.org/"
  },
];

function Feature({ image,title, description,hrefLink, index}) {
  return (
  
      <div className={clsx('col col--4',index === 3 && 'col--offset-4')}>
        <div className="text--center">
        <a href={hrefLink} target="_blank"> 
        <img
          className={styles.featureImage}
          width={Math.floor(image.width)}
          height={Math.floor(image.height)}
          src={(image.src)}
          loading="lazy"
        />
        </a>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx}/>
          ))}
        </div>
      </div>
    </section>
  );
}
