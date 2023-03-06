import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Icon } from '../../../components';
import BrowserOnly from '@docusaurus/BrowserOnly';
import './index.scss';

const data = {
  list: [
    {
      icon: 'feature-1',
      title: translate({ id: 'homepage.featureListTitle1', message: '易于使用' }),
      content: [
        translate({
          id: 'homepage.featureListContent1',
          message:
            '提供流量调度、服务治理、安全防护一站式网关解决方案，支持Console与K8s Ingress、Gateway API配置方式，也支持HTTP到Dubbo协议转换，一键轻松完成协议映射配置。',
        }),
      ],
    },
    {
      icon: 'feature-2',
      title: translate({ id: 'homepage.featureListTitle2', message: '生产等级' }),
      content: [
        translate({
          id: 'homepage.featureListContent2',
          message: '脱胎于阿里巴巴生产验证的内部产品，经历双十一洪峰锤炼，企业级的开源产品',
        }),
      ],
    },
    {
      icon: 'feature-3',
      title: translate({ id: 'homepage.featureListTitle3', message: '便于扩展' }),
      content: translate({
        id: 'homepage.featureListContent3',
        message:
          '提供Wasm、Lua、进程外三种插件扩展机制，让多语言编写插件不再成为障碍，插件生效粒度既支持全局级、域名级，也支持细粒度的路由级',
      }),
    },
    {
      icon: 'feature-4',
      title: translate({ id: 'homepage.featureListTitle4', message: '动态热更新' }),
      content: translate({
        id: 'homepage.featureListContent4',
        message: '彻底摆脱reload引起的流量抖动，配置变更毫秒级生效且业务无感，Wasm插件热更新且流量无损',
      }),
    },
    {
      icon: 'feature-5',
      title: translate({ id: 'homepage.featureListTitle5', message: '平滑升级' }),
      content: translate({
        id: 'homepage.featureTitle',
        message:
          '兼容Nginx Ingress Annotation 80%+ 的使用场景，且提供功能更丰富的注解，简单一步轻松搞定Nginx Ingress迁移',
      }),
    },
    {
      icon: 'feature-6',
      title: translate({ id: 'homepage.featureListTitle6', message: '安全防护' }),
      content: translate({
        id: 'homepage.featureTitle',
        message: '提供JWT、OIDC、自定义认证鉴权，深度集成开源Web应用防火墙，让安全防护成为标配',
      }),
    },
  ],
  title: translate({ id: 'homepage.featureTitle', message: '特色功能' }),
};

const Feature = () => {
  return (
    <BrowserOnly>
      {() => (
        <section className="feature-section">
          <div className="feature-container">
            <h3>{data.title}</h3>
            <ul>
              {data.list.map((feature, i) => (
                <Item feature={feature} key={i} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

const Item = (props) => {
  const { feature } = props;
  return (
    <BrowserOnly>
      {() => (
        <li>
          <Icon type={feature.icon} />
          <div>
            <h4>{feature.title}</h4>
            <p>{feature.content}</p>
          </div>
        </li>
      )}
    </BrowserOnly>
  );
};

export default Feature;
