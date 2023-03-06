import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Top } from './home/top';
import { Introduction } from './home/introduction';
import { MseMap } from './home/msemap';
import { Feature } from './home/feature';
import { User } from './home/users';
import { Community } from './home/community';
// import { Footer } from '../components';
import './index.scss';

export default function Home(): React.Element {
  const { siteConfig, i18n, ...rest } = useDocusaurusContext();
  const curLang = i18n.currentLocale;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Higress">
      <div className="home-page">
        <Top language={curLang} />
        <Introduction />
        <MseMap />
        <Feature />
        <User />
        <Community />
        {/* <Footer logo={'//img.alicdn.com/imgextra/i2/O1CN01oNTGgE1lfW7oEPIzP_!!6000000004846-2-tps-960-290.png'} /> */}
      </div>
    </Layout>
  );
}
