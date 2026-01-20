import zhSidebarConfig from "../content/docs/docs/latest/_sidebar.json";
import enSidebarConfig from "../content/docs/en/docs/latest/_sidebar.json";
import zhAiSidebarConfig from "../content/docs/docs/ai/_sidebar.json";
import enAiSidebarConfig from "../content/docs/en/docs/ai/_sidebar.json";
import zhHimarketSidebarConfig from "../content/docs/docs/himarket/_sidebar.json";
import zhDeveloperSidebarConfig from "../content/docs/docs/developers/_sidebar.json";
import enDeveloperSidebarConfig from "../content/docs/en/docs/developers/_sidebar.json";
// 暂时没有英文版配置，先用中文的或者空的
const enHimarketSidebarConfig: any[] = [];

/**
 * 动态加载指定语言的 sidebar 配置
 */
function loadSidebarConfigByLocale(
  locale: string,
  type: "docs" | "ai" | "himarket" | "developer" = "docs",
) {
  if (type === "ai") {
    // AI 文档配置
    if (locale === "en") {
      return enAiSidebarConfig;
    }
    return zhAiSidebarConfig;
  }

  if (type === "himarket") {
    // HiMarket 文档配置
    if (locale === "en") {
      return enHimarketSidebarConfig;
    }
    return zhHimarketSidebarConfig;
  }

  if (type === "developer") {
    // HiMarket 文档配置
    if (locale === "en") {
      return enDeveloperSidebarConfig;
    }
    return zhDeveloperSidebarConfig;
  }


  // 默认文档配置
  if (locale === "en") {
    return enSidebarConfig;
  }
  // root 和 zh-cn 都返回中文配置
  return zhSidebarConfig;
}

/**
 * 转换 _sidebar.json 配置为 Starlight sidebar 格式
 */
function transformSidebarItem(
  item: any,
  locale: string = "root",
  type: "docs" | "ai" | "himarket" | "developer" = "docs",
): any {
  const transformed: any = {
    label: item.label,
    translations: item.translations,
  };

  // 处理链接 - 需要转换路径格式
  if (item.link) {
    if (type === "ai") {
      const cleanLink = item.link.replace(/^docs\//, "");
      if (locale === "en") {
        transformed.link = `en/docs/ai/${cleanLink}`;
      } else {
        // root locale (中文)
        transformed.link = `docs/ai/${cleanLink}/`;
      }
    } else if (type === "himarket") {
      // HiMarket 文档路径
      // 原格式: "docs/himarket/..."
      // 中文文件位置: src/content/docs/docs/himarket/...
      // 英文文件位置: src/content/docs/en/docs/himarket/...
      const cleanLink = item.link.replace(/^docs\//, "");
      if (locale === "en") {
        transformed.link = `en/docs/himarket/${cleanLink}/`;
      } else {
        // root locale (中文)
        transformed.link = `docs/himarket/${cleanLink}/`;
      }
    } else if (type === "developer") {
      // HiMarket 文档路径
      // 原格式: "docs/himarket/..."
      // 中文文件位置: src/content/docs/docs/himarket/...
      // 英文文件位置: src/content/docs/en/docs/himarket/...
      const cleanLink = item.link.replace(/^docs\//, "");
      if (locale === "en") {
        transformed.link = `en/docs/developers/${cleanLink}/`;
      } else {
        // root locale (中文)
        transformed.link = `docs/developers/${cleanLink}/`;
      }
    } else {
      // 原格式: "docs/user/quickstart"
      // 中文文件位置: src/content/docs/docs/latest/user/quickstart.md
      // 英文文件位置: src/content/docs/en/docs/latest/user/quickstart.md
      // Starlight 期望的链接格式（相对于 content/docs，需要尾部斜杠）:
      // - root locale: "docs/latest/user/quickstart/"
      // - en locale: "en/docs/latest/user/quickstart/"
      const cleanLink = item.link.replace(/^docs\//, "");
      if (locale === "en") {
        transformed.link = `en/docs/latest/${cleanLink}/`;
      } else {
        // root locale (中文)
        transformed.link = `docs/latest/${cleanLink}/`;
      }
    }
  }

  // 处理自动生成
  if (item.autogenerate) {
    if (type === "ai") {
      // AI 文档自动生成
      if (locale === "en") {
        transformed.autogenerate = {
          directory: `en/docs/ai/${item.autogenerate.directory}`,
        };
      } else {
        transformed.autogenerate = {
          directory: `docs/ai/${item.autogenerate.directory}`,
        };
      }
    } else if (type === "himarket") {
      // HiMarket 文档自动生成
      if (locale === "en") {
        transformed.autogenerate = {
          directory: `en/docs/himarket/${item.autogenerate.directory}`,
        };
      } else {
        transformed.autogenerate = {
          directory: `docs/himarket/${item.autogenerate.directory}`,
        };
      }
    } else if (type === "developer") {
      // HiMarket 文档自动生成
      if (locale === "en") {
        transformed.autogenerate = {
          directory: `en/docs/developers/${item.autogenerate.directory}`,
        };
      } else {
        transformed.autogenerate = {
          directory: `docs/developers/${item.autogenerate.directory}`,
        };
      }
    } else {
      // 默认文档自动生成
      if (locale === "en") {
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
      transformSidebarItem(subItem, locale, type),
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
export function loadSidebarConfig(
  locale: string = "root",
  type: "docs" | "ai" | "himarket" = "docs",
) {
  const sidebarConfig = loadSidebarConfigByLocale(locale, type);
  return sidebarConfig.map((item) => transformSidebarItem(item, locale, type));
}
