import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { loadSidebarConfig } from "./src/utils/sidebarLoader";
import { sidebarCategory } from "./src/utils/sign";

// 加载所有 sidebar 配置
const zhDocsSidebar = loadSidebarConfig("root", "docs");
const zhAiSidebar = loadSidebarConfig("root", "ai");
const zhHimarketSidebar = loadSidebarConfig("root", "himarket");
const zhDeveloperSidebar = loadSidebarConfig("root", "developer");

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      title: "Higress",
      customCss: ["./src/styles/global.css", "./src/styles/fonts.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      // 使用中文 docs 作为默认 sidebar（只是为了让 Starlight 不报错）
      sidebar: [
        {
          label: sidebarCategory.latest,
          items: zhDocsSidebar,
        },
        {
          label: sidebarCategory.ai,
          items: zhAiSidebar,
        },
        {
          label: sidebarCategory.himarket,
          items: zhHimarketSidebar,
        },
        {
          label: sidebarCategory.developer,
          items: zhDeveloperSidebar,
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-YHS75WKFBR",
            async: true,
          }
        },
        {
          tag: "script",
          attrs: {
            src: "/scripts.js"
          }
        }
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        // Head: "./src/components/starlight/Head.astro",
        Header: "./src/components/starlight/Header.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
        PageFrame: "./src/components/starlight/PageFrame.astro",
        TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro",
        Search: "./src/components/starlight/Search.astro"
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    '/zh-cn/': '/',
		'/en-us/': '/en/',
		'/ai/': '/ai/quick-start/',
		'/en/ai/': '/en/ai/quick-start',
    '/docs/': '/docs/latest/overview/what-is-higress/',
    '/docs/latest/dev/CustomResourceDefinition/': '/docs/latest/dev/customresourcedefinition/',
		'/en-us/docs/latest/dev/CustomResourceDefinition/': '/en/docs/latest/dev/customresourcedefinition/',
  }
});
