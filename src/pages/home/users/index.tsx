import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { Bone } from '../../../components';

import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.scss';

const data = {
  desc: (
    <span>
      <Translate id="homepage.userDesc1">请在</Translate>{' '}
      <a rel="noopener noreferrer" target="_blank" href="https://survey.aliyun.com/apps/zhiliao/SmDQwdihe">
        Wanted: who&#39;s using Higress
      </a>{' '}
      <Translate id="homepage.userDesc2">上提供信息来获取 Higress 开源落地支持</Translate>
    </span>
  ),
  
  list: [
    'https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png',
    'https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png',
    'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png',
    'https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg',
    'https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg',
    'https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01wbAkCU1JitvJcJilZ_!!6000000001063-2-tps-2560-680.png',
    'https://img.alicdn.com/imgextra/i2/O1CN01xY9jNx27ygN9k8iYO_!!6000000007866-0-tps-1650-891.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN018rBpj61JL5L7kbcTe_!!6000000001011-2-tps-1058-450.png',
    'https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png',
    'https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png',
    'https://img.alicdn.com/imgextra/i2/O1CN01j9lDmk1J7LLkD9jcJ_!!6000000000981-2-tps-2019-770.png',
    'https://img.alicdn.com/imgextra/i1/O1CN01lxfk0h1k9AZkdpUD1_!!6000000004640-0-tps-225-225.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01gf8yAj1V7aybEg6hV_!!6000000002606-2-tps-140-44.png',
    'https://img.alicdn.com/imgextra/i4/O1CN01Dn73yA1TXaDbBodqt_!!6000000002392-0-tps-262-224.jpg',
    'https://img.alicdn.com/imgextra/i4/O1CN01UVr5D81iOAKlrECQa_!!6000000004402-2-tps-760-360.png',
    'https://img.alicdn.com/imgextra/i2/O1CN012yurEm1IJQHB14rXA_!!6000000000872-0-tps-225-225.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01BgqXoy1WEISsHIL9A_!!6000000002756-0-tps-259-194.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01jZVSJ21XmTdX3M1M3_!!6000000002966-0-tps-462-109.jpg',
    'https://img.alicdn.com/imgextra/i4/O1CN01XNXCIJ1SqzSgWfMyr_!!6000000002299-0-tps-200-200.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01zGLOSN1H6liYr71AH_!!6000000000709-0-tps-160-160.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN016jVoUz1TrHKLtarsx_!!6000000002435-0-tps-204-192.jpg',
    'https://img.alicdn.com/imgextra/i2/O1CN01vaysCW1LZOwOMRk0e_!!6000000001313-2-tps-200-200.png',
    'https://img.alicdn.com/imgextra/i1/O1CN01xxepgv1WGaRShnpyV_!!6000000002761-0-tps-325-260.jpg',
    'https://img.alicdn.com/imgextra/i3/O1CN010dmxna28CQF8RGD8G_!!6000000007896-0-tps-539-135.jpg',
    'https://img.alicdn.com/imgextra/i4/O1CN0121yiq01LMZqlUGn7u_!!6000000001285-0-tps-225-225.jpg',
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
