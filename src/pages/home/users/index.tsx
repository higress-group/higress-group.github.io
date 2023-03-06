import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { Bone } from '../../../components';

import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.scss';

const data = {
  desc: (
    <span>
      <Translate id="homepage.userDesc1">请在</Translate>{' '}
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/alibaba/higress/issues/1">
        Wanted: who&#39;s using Higress
      </a>{' '}
      <Translate id="homepage.userDesc2">上提供信息来帮助 Higress 做的更好。</Translate>
    </span>
  ),
  list: [
    'https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png',
    'https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png',
    'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png',
    'https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg',
    'https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg',
    'https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg',
    'https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png',
    'https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png',
    'https://img.alicdn.com/imgextra/i2/O1CN01j9lDmk1J7LLkD9jcJ_!!6000000000981-2-tps-2019-770.png',
  ],
  title: translate({ id: 'homepage.userTitle', message: '谁在使用 Higress' }),
};

const User = () => {
  return (
    <BrowserOnly>
      {() => (
        <section className="users-section">
          <h3>{data.title}</h3>
          <Bone type="dark" />
          <p>{data.desc}</p>
          <div className="users">
            {data.list.map((user, i) => (
              <div className="user-item" key={i}>
                <img src={user} />
              </div>
            ))}
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default User;
