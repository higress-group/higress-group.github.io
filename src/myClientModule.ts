import type { ClientModule } from '@docusaurus/types';

const module: ClientModule = {
  onRouteUpdate({ location, previousLocation }) {
    console.log('------', location);
    if (!(location.pathname.startsWith('/zh-cn') || location.pathname.startsWith('/en-us'))) {
      window.location.href = 'zh-cn';
    }
  },
};
export default module;
