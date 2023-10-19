import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
// import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
// const {withBaseUrl} = useBaseUrlUtils();

const FeatureList = [
  {
    title: 'Getting Started Guide',
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <>
        Start your favorite SBC/SOM, Provide complete product usage documentation to help software engineers quickly develop applications.
        {/* 启动您喜爱的SBC/SOM，帮助软件工程师快速进行应用开发。*/}
      </>
    ),
  },
  {
    title: 'Hardware Information',
    image: {
      src: '/img/Open-source-hardware-logo.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <>
        Provides rich hardware development documents, including schematics, PCB, DXF, etc. 
        Help hardware engineers quickly develop and put into production
      </>
    ),
  },
   {
    title: 'Passionate developer community',
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1038.23,
      height: 693.31,
    },
    description: (
      <>
        The armsom community is powered by a passionate community of developers that publish videos, guides, and open source projects.
      </>
    ),
  },
];

function Feature({ image,title, description, index}) {
  return (
    <div className={clsx('col col--4',index === 3 && 'col--offset-4')}>
      <div className="text--center">
      <img
        className={styles.featureImage}
        width={Math.floor(image.width)}
        height={Math.floor(image.height)}
        src={(image.src)}
        loading="lazy"
      />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
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
