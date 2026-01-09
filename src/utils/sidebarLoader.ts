import zhSidebarConfig from '../content/docs/docs/latest/_sidebar.json';
import enSidebarConfig from '../content/docs/en/docs/latest/_sidebar.json';
import zhAiSidebarConfig from '../content/docs/ai/_sidebar.json';
import enAiSidebarConfig from '../content/docs/en/ai/_sidebar.json';

/**
 * 动态加载指定语言的 sidebar 配置
 */
function loadSidebarConfigByLocale(locale: string, type: 'docs' | 'ai' = 'docs') {
  if (type === 'ai') {
    // AI 文档配置
    if (locale === 'en') {
      return enAiSidebarConfig;
    }
    return zhAiSidebarConfig;
  }

  // 默认文档配置
  if (locale === 'en') {
    return enSidebarConfig;
  }
  // root 和 zh-cn 都返回中文配置
  return zhSidebarConfig;
}

/**
 * 转换 _sidebar.json 配置为 Starlight sidebar 格式
 */
function transformSidebarItem(item: any, locale: string = 'root', type: 'docs' | 'ai' = 'docs'): any {
  const transformed: any = {
    label: item.label,
    translations: item.translations,
  };

  // 处理链接 - 需要转换路径格式
  if (item.link) {
    if (type === 'ai') {
      // AI 文档路径
      // 原格式: "ai/quick-start"
      // 中文文件位置: src/content/ai/quick-start.md
      // 英文文件位置: src/content/ai/en/quick-start.md
      // Starlight 期望的链接格式（相对于 content，需要尾部斜杠）:
      // - root locale: "ai/quick-start/"
      // - en locale: "en/ai/quick-start/"
      if (locale === 'en') {
        transformed.link = `en/${item.link}/`;
      } else {
        // root locale (中文)
        transformed.link = `${item.link}/`;
      }
    } else {
      // 原格式: "docs/user/quickstart"
      // 中文文件位置: src/content/docs/docs/latest/user/quickstart.md
      // 英文文件位置: src/content/docs/en/docs/latest/user/quickstart.md
      // Starlight 期望的链接格式（相对于 content/docs，需要尾部斜杠）:
      // - root locale: "docs/latest/user/quickstart/"
      // - en locale: "en/docs/latest/user/quickstart/"
      const cleanLink = item.link.replace(/^docs\//, '');
      if (locale === 'en') {
        transformed.link = `en/docs/latest/${cleanLink}/`;
      } else {
        // root locale (中文)
        transformed.link = `docs/latest/${cleanLink}/`;
      }
    }
  }

  // 处理自动生成
  if (item.autogenerate) {
    if (type === 'ai') {
      // AI 文档自动生成
      if (locale === 'en') {
        transformed.autogenerate = {
          directory: `en/${item.autogenerate.directory}`,
        };
      } else {
        transformed.autogenerate = {
          directory: item.autogenerate.directory,
        };
      }
    } else {
      // 默认文档自动生成
      if (locale === 'en') {
        transformed.autogenerate = {
          directory: `en/docs/latest/${item.autogenerate.directory}`,
        };
      } else {
        // root locale (中文)
        transformed.autogenerate = {
          directory: `docs/latest/${item.autogenerate.directory}`,
        };
      }
    }
  }

  // 处理子项
  if (item.items) {
    transformed.items = item.items.map((subItem: any) =>
      transformSidebarItem(subItem, locale, type)
    );

    // 只有当有 items 或 autogenerate 时才添加 collapsed
    if (item.collapsed !== undefined) {
      transformed.collapsed = item.collapsed;
    }
  } else if (item.autogenerate) {
    // autogenerate 的项也可以有 collapsed
    if (item.collapsed !== undefined) {
      transformed.collapsed = item.collapsed;
    }
  }

  return transformed;
}

/**
 * 加载并转换 sidebar 配置
 */
export function loadSidebarConfig(locale: string = 'root', type: 'docs' | 'ai' = 'docs') {
  const sidebarConfig = loadSidebarConfigByLocale(locale, type);
  return sidebarConfig.map((item) => transformSidebarItem(item, locale, type));
}
