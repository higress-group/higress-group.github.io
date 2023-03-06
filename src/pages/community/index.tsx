import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import { Bar, Slider } from '../../components';
import { EventCard } from './eventCard';
import { ContactItem, ContactData } from './contactItem';
import { ContributorItem, ContributorData } from './contributorItem';
import Layout from '@theme/Layout';

import './index.scss';

const data = {
  barText: translate({ id: 'community.barText', message: '社区' }),
  events: {
    title: translate({ id: 'community.eventsTitle', message: '事件 & 新闻' }),
    list: [],
  },
  contacts: {
    title: translate({ id: 'community.contactsTitle', message: '联系我们' }),
    desc: translate({ id: 'community.contactsDesc', message: '有问题需要反馈？请通过一下方式联系我们。' }),
    list: [
      {
        img: '/img/mailinglist.png',
        imgHover: '/img/mailinglist_hover.png',
        title: translate({ id: 'community.contactsListTitle1', message: '邮件列表' }),
        link: 'mailto:higress+subscribe@googlegroups.com',
      },
      {
        img: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
        imgHover: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
        title: translate({ id: 'community.contactsListTitle2', message: '钉钉群(推荐)' }),
      },
    ],
  },
  contributorGuide: {
    title: translate({ id: 'community.contributeTitle', message: '贡献指南' }),
    desc: translate({ id: 'community.contributeDesc', message: '欢迎为 Higress 做贡献！' }),
    list: [
      {
        img: '/img/channels/email_gray.svg',
        title: translate({ id: 'community.contributeListTitle1', message: '邮件列表' }),
        content: <span>{translate({ id: 'community.contributeListContent1', message: '加入我们的邮件列表。' })}</span>,
      },
      {
        img: '/img/channels/github_gray.svg',
        title: translate({ id: 'community.contributeListTitle2', message: '报告问题' }),
        content: (
          <span>
            {translate({ id: 'community.contributeListContent2_1', message: '提交' })}&nbsp;
            <a href="https://github.com/alibaba/higress/issues/new">
              {translate({ id: 'community.contributeListContent2_2', message: '新问题' })}
            </a>
            。
          </span>
        ),
      },
      {
        img: '/img/documents.png',
        title: translate({ id: 'community.contributeListTitle3', message: '改进文档' }),
        content: (
          <span>
            {translate({ id: 'community.contributeListContent3_1', message: '改进' })}&nbsp;
            <a href="https://github.com/higress-group/higress-group.github.io">
              {translate({ id: 'community.contributeListContent3_2', message: '文档' })}
            </a>
            。
          </span>
        ),
      },
      {
        img: '/img/pullrequest.png',
        title: translate({ id: 'community.contributeListContent4', message: '提交 PR' }),
        content: (
          <span>
            {translate({ id: 'community.contributeListContent4', message: '创建一个' })}&nbsp;
            <a href="https://github.com/alibaba/higress/pulls">PR</a>。
          </span>
        ),
      },
    ],
  },
};

export default function Community(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Higress">
      <div className="community-page">
        <Bar img="https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png" text={data.barText} />
        <section className="events-section">
          <h3>{data.events.title}</h3>
          <Slider>
            {data.events.list.map((event, i) => (
              <EventCard event={event} key={i} />
            ))}
          </Slider>
        </section>
        <section className="contact-section">
          <h3>{data.contacts.title}</h3>
          <p>{data.contacts.desc}</p>
          <div className="contact-list">
            {data.contacts.list.map((contact, i) => (
              <ContactItem contact={contact as ContactData} key={i} />
            ))}
          </div>
        </section>
        <section className="contributor-section">
          <h3>{data.contributorGuide.title}</h3>
          <p>{data.contributorGuide.desc}</p>
          <div className="contributor-list">
            {data.contributorGuide.list.map((contributor, i) => (
              <ContributorItem contributor={contributor as ContributorData} key={i} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
