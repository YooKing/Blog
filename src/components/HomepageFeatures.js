import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  
  {
    title: '路漫漫其修远兮，吾将上下而求索',
    description: (
      <>
      
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
    <div className="text--center">
     
      </div>
  <div class="card">
    <div class="card__header">
      <h3>{title}</h3>
    </div>
    <div class="card__body margin-left--xs">
      <p>
      {description}
      </p>
    </div>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
