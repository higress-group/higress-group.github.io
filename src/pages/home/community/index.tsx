import React from 'react';
import { translate } from '@docusaurus/Translate';
import './index.scss';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { getLink } from '../../../utils';

const data = {
  title: translate({ id: 'homepage.introTitle', message: '参与 Higress 社区' }),
  list: [
    'https://img.alicdn.com/imgextra/i2/O1CN01qPd7Ix1uZPVEsWjWp_!!6000000006051-0-tps-720-405.jpg',
  ],
};

const Community = () => {
  return (
    <BrowserOnly>
      {() => (
        <section className="community-section">
          <h3>{data.title}</h3>
          <div className="community">
            {data.list.map((community, i) => (
              <div className="community-item" key={i}>
                <img src={getLink(community)} />
              </div>
            ))}
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default Community;
