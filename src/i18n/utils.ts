import en from './en';
import zhCn from './zh-cn';

const translations = {
  en,
  'zh-cn': zhCn,
  'root': zhCn, // default to zh-cn
};

export function useTranslations(locale: string | undefined) {
  const lang = locale || 'root';
  // @ts-ignore
  const dict = translations[lang] || translations.root;

  return function t(key: keyof typeof zhCn) {
    return dict[key] || key;
  };
}
