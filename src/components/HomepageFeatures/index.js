import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SBC',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Single Board Computer 
      </>
    ),
  },
  {
    title: 'LM',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        LGA moudle
      </>
    ),
  },
   {
    title: 'AIM',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        AI moudle
      </>
    ),
  },
  {
    title: 'BM',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        B2B moudle
      </>
    ),
  },
];

function Feature({Svg, title, description, index}) {
  return (
    <div className={clsx('col col--4',index === 3 && 'col--offset-4')}>
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
