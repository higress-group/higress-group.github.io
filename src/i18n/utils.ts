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

/**
 * Helper function to add locale prefix to internal links
 * @param url - The URL to localize
 * @param locale - The current locale (e.g., 'en', 'root', 'zh-cn')
 * @returns The localized URL with appropriate prefix
 *
 * @example
 * localizeUrl('/docs/guide', 'en') // returns '/en/docs/guide'
 * localizeUrl('/docs/guide', 'root') // returns '/docs/guide'
 * localizeUrl('https://example.com', 'en') // returns 'https://example.com'
 */
export function localizeUrl(url: string, locale: string | undefined): string {
  // Don't modify external URLs (starting with http:// or https://)
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Determine if current locale is English
  const isEnglish = locale === 'en';

  // Add /en prefix for English locale
  return isEnglish ? `/en${url}` : url;
}
