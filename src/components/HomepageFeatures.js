import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'YKMC',
    description: (
      <>
        我创建了一个我的世界公益服YKMC，用纯净版或下载专用客户端开玩！
        <a class="button button--primary" href="https://mc.yooking.top" target="_blank">YKMC</a>
      </>
    ),
  },
  {
    title: '开服不易，为服务器捐款。',

      description: (
      <>

      
      <a class="button button--primary" href="https://afdian.net/@ykmc25565" target="_blank">去爱发电捐款</a>
     
      
      </>
    ),
  },
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
