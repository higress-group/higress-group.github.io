import React from 'react';
import { translate } from '@docusaurus/Translate';
import { getLink } from '../../utils';
import './index.scss';

const LicenseLogo = 'https://img.alicdn.com/imgextra/i4/O1CN019fTXYL1tVSMxQUfXI_!!6000000005907-1-tps-65-70.gif';
const RecordLogo = 'https://img.alicdn.com/imgextra/i4/O1CN01Yy52TB1LzVPtZYepI_!!6000000001370-2-tps-20-20.png';

const data = {
  vision: {
    title: translate({ id: 'homepage.footerVersionTitle', message: '愿景' }),
    content: translate({ id: 'homepage.footerVersionContent', message: '为用户提供一站式云原生网关解决方案.' }),
  },
  documentation: {
    title: translate({ id: 'homepage.footerDocTitle', message: '文档' }),
    list: [
      {
        text: translate({ id: 'homepage.footerDocListText1', message: 'Higress 是什么？' }),
        link: '/docs/overview/what-is-higress',
        target: '',
      },
      {
        text: translate({ id: 'homepage.footerDocListText2', message: '快速开始' }),
        link: '/docs/user/quickstart',
        target: '',
      },
      {
        text: translate({ id: 'homepage.footerDocListText3', message: '报告文档问题' }),
        link: 'https://github.com/higress-group/higress-group.github.io/issues/new',
        target: '',
      },
      {
        text: translate({ id: 'homepage.footerDocListText3', message: '在Github上编辑此文档' }),
        link: 'https://github.com/higress-group/higress-group.github.io',
        target: '',
      },
    ],
  },
  resources: {
    title: translate({ id: 'homepage.footerResourcesTitle', message: '资源' }),
    list: [
      {
        text: translate({ id: 'homepage.footerResourcesListText1', message: '博客' }),
        link: '/blog',
        target: '',
      },
      {
        text: translate({ id: 'homepage.footerResourcesListText2', message: '社区' }),
        link: '/community',
        target: '',
      },
    ],
  },
  copyright: 'Copyright © 2022 Higress',
};

type Props = {
  logo: string;
};

export const Footer = (props: Props) => {
  const { logo } = props;
  return (
    <footer className="footer-container">
      <div className="footer-body">
        <img src={getLink(logo)} />
        <p className="docusaurus-power">website powered by docusaurus</p>
        <div className="cols-container">
          <div className="col col-12">
            <h3>{data.vision.title}</h3>
            <p>{data.vision.content}</p>
          </div>
          <div className="col col-6">
            <dl>
              <dt>{data.documentation.title}</dt>
              {data.documentation.list.map((d, i) => (
                <dd key={i}>
                  <a href={getLink(d.link)} target={d.target || '_self'}>
                    {d.text}
                  </a>
                </dd>
              ))}
            </dl>
          </div>
          <div className="col col-6">
            <dl>
              <dt>{data.resources.title}</dt>
              {data.resources.list.map((d, i) => (
                <dd key={i}>
                  <a href={getLink(d.link)} target={d.target || '_self'}>
                    {d.text}
                  </a>
                </dd>
              ))}
            </dl>
          </div>
        </div>
        <div className="copyright">
          <span>{data.copyright}</span>
        </div>
        <div className="record">
          <div>
            <a target="_blank" href="http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301843301000000126540">
              <img src={getLink(LicenseLogo)} style={{ width: 20, height: 20, marginRight: 8 }} />
            </a>
          </div>

          <div style={{ marginRight: 12 }}>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016922">
              <img src={getLink(RecordLogo)} style={{ width: 20, height: 20, margin: 0 }} />
              <span>浙公网安备 33011002016922号</span>
            </a>
          </div>
          <div>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              浙ICP备12022327号-1119
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
