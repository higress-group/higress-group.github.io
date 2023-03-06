import React from 'react';
import { translate } from '@docusaurus/Translate';
import { Button, ButtonType } from '../../../components';
import { getLink } from '../../../utils';

import './index.scss';

const topData = {
  brandLogoUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01bmdCFQ1Zupzs0XIKc_!!6000000003255-55-tps-288-86.svg',
  briefIntroduction: translate({
    id: 'homepage.briefIntroduction',
    message:
      '一个遵循开源Ingress/Gateway API标准，提供流量调度、服务治理、安全防护三合一的高集成、易使用、易扩展、热更新的下一代云原生网关。',
  }),
  buttons: [
    {
      text: translate({ id: 'homepage.quickstartButton', message: '快速入门' }),
      link: '/docs/user/quickstart',
      type: 'primary',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/alibaba/higress',
      type: 'normal',
      target: '_blank',
    },
  ],
  versionNote: {
    text: 'Release Note of 0.6.0',
    link: 'https://github.com/alibaba/higress/releases/tag/v0.6.0',
  },
  releaseDate: 'Released on Jan 19, 2023',
};

export const Top = ({ language }: { language?: string }) => {
  const [state, setState] = React.useState({
    starCount: '',
    forkCount: '',
  });

  const { starCount, forkCount } = state;

  React.useEffect(() => {
    fetch('//api.github.com/repos/alibaba/higress')
      .then((res) => res.json())
      .then((data) => {
        setState({
          starCount: `${data.stargazers_count}`,
          forkCount: `${data.forks_count}`,
        });
      });
  }, []);

  return (
    <section className="top-section">
      <div className="top-body">
        <div className="vertical-middle">
          <div className="product-name">
            <img src={getLink(topData.brandLogoUrl)} />
          </div>
          <p className="product-desc">{topData.briefIntroduction}</p>
          <div className="button-area">
            {topData.buttons.map((b) => (
              <Button type={b.type as ButtonType} key={b.text} link={b.link} target={b.target} language={language}>
                {b.text}
              </Button>
            ))}
          </div>
          <div className="github-buttons">
            <a href="https://github.com/alibaba/higress" target="_blank" rel="noopener noreferrer">
              <div className="star">
                <img src="https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png" />
                <span className="type">Star</span>
                <span className="line" />
                <span className="count">{starCount}</span>
              </div>
            </a>
            <a href="https://github.com/alibaba/higress/fork" target="_blank" rel="noopener noreferrer">
              <div className="fork">
                <img src="https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png" />
                <span className="type">Fork</span>
                <span className="line" />
                <span className="count">{forkCount}</span>
              </div>
            </a>
          </div>
          <div className="version-note">
            <a target="_blank" rel="noopener noreferrer" href={getLink(topData.versionNote.link)}>
              {topData.versionNote.text}
            </a>
          </div>
          {/* <div className="release-date">{dataSource.brand.releaseDate}</div> */}
        </div>
        {/* <div className="animation">
            <img className="img1" src="//img.alicdn.com/tfs/TB1evnpJhnaK1RjSZFBXXcW7VXa-702-312.png" />
            <img className="img2" src="//img.alicdn.com/tfs/TB1iau9JcbpK1RjSZFyXXX_qFXa-914-1156.png" />
            <div className="outer-circle" />
            <div className="rotate-circle">
              <svg viewBox="0 0 404 404" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="linear"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(17, 186, 250, 1)" />
                    <stop offset="50%" stopColor="rgba(17, 186, 250, 0.1)" />
                    <stop offset="50%" stopColor="rgba(17, 186, 250, 1)" />
                    <stop offset="100%" stopColor="rgba(17, 186, 250, 0.1)" />
                  </linearGradient>
                  </defs>
                <circle cx="202" cy="202" r="200" fill="rgba(0, 0, 0, 0)" stroke="url(#linear)" strokeWidth="4" />
              </svg>
            </div>
            <img className="img3" src="//img.alicdn.com/tfs/TB1EBu.JgHqK1RjSZJnXXbNLpXa-914-1156.png" />
            <img className="img4" src="//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png" />
            <img className="img5" src="//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png" />
          </div> */}
      </div>
    </section>
  );
};
