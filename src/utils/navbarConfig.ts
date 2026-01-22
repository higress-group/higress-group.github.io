/**
 * 导航栏配置文件
 * 用于管理不同页面的导航栏行为和样式
 */

export interface NavbarConfig {
  /** 是否启用滚动效果 */
  enableScrollEffect: boolean;
  /** 滚动时的样式类名 */
  scrollClasses: string[];
  /** 初始背景样式 */
  initialBackground: string;
  /** 滚动触发的距离（像素） */
  scrollThreshold: number;
}

/** 默认导航栏配置 */
export const DEFAULT_NAVBAR_CONFIG: NavbarConfig = {
  enableScrollEffect: true,
  scrollClasses: ['bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-gray-200/20'],
  initialBackground: 'bg-transparent',
  scrollThreshold: 20,
};

/** 特殊页面的导航栏配置 */
export const PAGE_SPECIFIC_CONFIGS: Record<string, Partial<NavbarConfig>> = {
  // 首页可能需要特殊处理
  '/': {
    scrollClasses: ['bg-white/95', 'backdrop-blur-lg', 'shadow-md', 'border-b', 'border-gray-200/30'],
  },
  '/en': {
    scrollClasses: ['bg-white/95', 'backdrop-blur-lg', 'shadow-md', 'border-b', 'border-gray-200/30'],
  },
  // 文档页面可能需要不同的样式
  '/docs': {
    scrollClasses: ['bg-white', 'shadow-sm', 'border-b', 'border-gray-200'],
  },
  // 可以根据需要添加更多页面配置
};

/**
 * 根据当前路径获取导航栏配置
 */
export function getNavbarConfig(currentPath: string): NavbarConfig {
  // 检查是否有页面特定配置
  for (const [path, config] of Object.entries(PAGE_SPECIFIC_CONFIGS)) {
    if (currentPath === path || currentPath.startsWith(path + '/')) {
      return { ...DEFAULT_NAVBAR_CONFIG, ...config };
    }
  }
  
  return DEFAULT_NAVBAR_CONFIG;
}

/**
 * 判断是否为首页
 */
export function isHomePage(currentPath: string): boolean {
  return currentPath === '/' || currentPath === '/en' || currentPath === '/en/';
}