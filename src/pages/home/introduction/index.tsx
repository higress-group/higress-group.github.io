import React from 'react';

import { translate } from '@docusaurus/Translate';
import { getLink } from '../../../utils';
import './index.scss';

const data = {
  title: translate({ id: 'homepage.introTitle', message: 'Higress 是什么？' }),
  desc: translate({
    id: 'homepage.introDesc',
    message:
      'Higress是基于阿里内部两年多的Envoy Gateway实践沉淀，以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量调度 + 服务治理 + 安全防护三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够为您带来低成本的网关部署运维及高性能、易使用、易扩展、功能丰富的一站式网关解决方案。',
  }),
  img: 'https://img.alicdn.com/imgextra/i4/O1CN01goCCMC1HBLZend9Gl_!!6000000000719-2-tps-3201-1561.png',
};

export const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-body">
        <div className="introduction">
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="img-wrapper">
          <img src={getLink(data.img)} />
        </div>
      </div>
    </section>
  );
};
