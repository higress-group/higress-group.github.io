import React from 'react';
import { translate } from '@docusaurus/Translate';
import './index.scss';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { getLink } from '../../../utils';

const data = {
  title: translate({ id: 'homepage.introTitle', message: '参与 Higress 社区' }),
  list: [
    '/img/dingtalk_group.jpg',
    'https://img.alicdn.com/imgextra/i3/O1CN01RkvQ3J1WMXUBDJ2y6_!!6000000002774-2-tps-1056-1371.png',
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
