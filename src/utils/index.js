/* eslint-disable import/prefer-default-export */
export const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const getScrollTop = () => {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
};

export const getLink = (link, language) => {
  if (`${link}`.length > 1 && /^\/[^/]/.test(`${link}`)) {
    if (!language) {
      const path = window.location.pathname;
      if (path !== '/') {
        const secondSlash = path.indexOf('/', 1);
        const topDir = path.substring(1, secondSlash);
        language = topDir.indexOf('-') !== -1 ? topDir : null;
      }
      language = language || 'default';
    }
    return `${window?.rootPath || ''}/${language === 'default' ? 'zh-cn' : language}${link}`;
  }
  return link;
};

export const parseJSONStr = (str) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
};
