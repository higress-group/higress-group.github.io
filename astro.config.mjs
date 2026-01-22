import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import { loadSidebarConfig } from "./src/utils/sidebarLoader";
import { sidebarCategory } from "./src/utils/sign";
import {
  remarkRemoveMdLinks,
  remarkRemovePlainLanguageCode,
  remarkRemoveRepeatHeader,
  addPrefixImageLink,
  setLinkReferrer,
} from "./src/utils/frontmatter.mjs";

import fs from "node:fs/promises";
import path from "node:path";

// 加载所有 sidebar 配置
const zhDocsSidebar = loadSidebarConfig("root", "docs");
const zhAiSidebar = loadSidebarConfig("root", "ai");
const zhHimarketSidebar = loadSidebarConfig("root", "himarket");
const zhDeveloperSidebar = loadSidebarConfig("root", "developer");

// Custom integration to copy markdown files
const copyMarkdownIntegration = () => ({
  name: "copy-markdown",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const srcDir = path.join(process.cwd(), "src/content/docs");
      const destDir = path.join(dir.pathname, "overview"); // dir is a URL object

      // Function to recursively copy files
      const copyDir = async (src, dest) => {
        await fs.mkdir(dest, { recursive: true });
        const entries = await fs.readdir(src, { withFileTypes: true });

        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);

          if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
          } else if (
            entry.isFile() &&
            (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
          ) {
            await fs.copyFile(srcPath, destPath);
          }
        }
      };

      try {
        console.log(`Copying markdown files from ${srcDir} to ${destDir}...`);
        await copyDir(srcDir, destDir);
        console.log("Markdown files copied successfully.");
      } catch (err) {
        console.error("Error copying markdown files:", err);
      }
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: "https://higress.ai",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh-CN",
        locales: {
          "zh-CN": "zh-CN",
          en: "en",
        },
      },
    }),
    copyMarkdownIntegration(),
    starlight({
      title: "Higress",
      expressiveCode: {
        // 使用高对比度的亮色主题，与网站强制亮色模式保持一致
        themes: ["github-light"],
        // 网站只有亮色模式，禁用暗色模式切换
        useStarlightDarkModeSwitch: false,
        // 使用 Starlight 的 UI 主题颜色
        useStarlightUiThemeColors: true,
      },
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
          tag: "link",
          attrs: {
            rel: "icon",
            href: "https://img.alicdn.com/imgextra/i4/O1CN01AViQMJ1J2lY4OPRgv_!!6000000000971-2-tps-376-375.png",
          },
        },
        {
          tag: "script",
          attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-YHS75WKFBR",
            async: true,
          },
        },
        {
          tag: "script",
          attrs: {
            src: "/scripts.js",
          },
        },
      ],
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        // Head: "./src/components/starlight/Head.astro",
        Header: "./src/components/starlight/Header.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
        PageFrame: "./src/components/starlight/PageFrame.astro",
        TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro",
        Search: "./src/components/starlight/Search.astro",
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    rehypePlugins: [
      // 在这里添加 rehype-external-links 插件配置
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    remarkPlugins: [
      remarkRemoveMdLinks,
      remarkRemovePlainLanguageCode,
      remarkRemoveRepeatHeader,
      addPrefixImageLink,
      setLinkReferrer,
    ],
  },

  redirects: {
    "/en-us/": "/en/",
    "/en/ai/": "/en/ai/quick-start",
    "/docs/": "/docs/latest/overview/what-is-higress/",
    "/docs/latest/dev/CustomResourceDefinition/":
      "/docs/latest/dev/customresourcedefinition/",
    "/en-us/docs/latest/dev/CustomResourceDefinition/":
      "/en/docs/latest/dev/customresourcedefinition/",
  },
});
