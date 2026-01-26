import fs from "node:fs/promises";
import path from "node:path";

// Sidebar JSON 配置类型
interface SidebarItem {
  label: string;
  translations?: { en?: string };
  link?: string;
  items?: SidebarItem[];
  autogenerate?: { directory: string };
  collapsed?: boolean;
}

interface DocLink {
  title: string;
  url: string;
}

interface DocSection {
  title: string;
  links: DocLink[];
}

const SITE_URL = "https://higress.ai";

/**
 * 从 autogenerate 目录读取所有 markdown 文件
 */
async function getFilesFromDirectory(
  baseDir: string,
  directory: string,
): Promise<DocLink[]> {
  const links: DocLink[] = [];
  const fullPath = path.join(baseDir, directory);

  try {
    const entries = await fs.readdir(fullPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
        // 跳过 _sidebar.json 和其他非文档文件
        if (entry.name.startsWith("_")) continue;

        const filePath = path.join(fullPath, entry.name);
        const content = await fs.readFile(filePath, "utf-8");

        // 从 frontmatter 或第一个 H1 标题提取标题
        let title = entry.name.replace(/\.(md|mdx)$/, "");

        // 尝试从 frontmatter 提取 title
        const frontmatterMatch = content.match(/^---\s*\n[\s\S]*?title:\s*["']?([^"'\n]+)["']?\s*\n[\s\S]*?---/);
        if (frontmatterMatch) {
          title = frontmatterMatch[1].trim();
        } else {
          // 尝试从第一个 H1 提取
          const h1Match = content.match(/^#\s+(.+)$/m);
          if (h1Match) {
            title = h1Match[1].trim();
          }
        }

        // 构建 URL 路径
        const slug = entry.name.replace(/\.(md|mdx)$/, "");
        const urlPath = `docs/latest/${directory}/${slug}/`;

        links.push({
          title,
          url: `${SITE_URL}/${urlPath}`,
        });
      } else if (entry.isDirectory()) {
        // 递归处理子目录
        const subLinks = await getFilesFromDirectory(baseDir, `${directory}/${entry.name}`);
        links.push(...subLinks);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${fullPath}`);
  }

  return links;
}

/**
 * 递归提取 sidebar item 中的所有链接
 */
async function extractLinks(
  item: SidebarItem,
  baseDir: string,
  docType: "docs" | "ai" | "himarket" | "developer" = "docs",
): Promise<DocLink[]> {
  const links: DocLink[] = [];

  // 处理直接链接
  if (item.link) {
    const cleanLink = item.link.replace(/^docs\//, "");
    let urlPath: string;

    switch (docType) {
      case "ai":
        urlPath = `docs/ai/${cleanLink}/`;
        break;
      case "himarket":
        urlPath = `docs/himarket/${cleanLink}/`;
        break;
      case "developer":
        urlPath = `docs/developers/${cleanLink}/`;
        break;
      default:
        urlPath = `docs/latest/${cleanLink}/`;
    }

    links.push({
      title: item.label,
      url: `${SITE_URL}/${urlPath}`,
    });
  }

  // 处理 autogenerate 目录
  if (item.autogenerate) {
    const autoLinks = await getFilesFromDirectory(baseDir, item.autogenerate.directory);
    links.push(...autoLinks);
  }

  // 处理嵌套 items
  if (item.items) {
    for (const subItem of item.items) {
      const subLinks = await extractLinks(subItem, baseDir, docType);
      links.push(...subLinks);
    }
  }

  return links;
}

/**
 * 处理顶级 sidebar 配置，生成文档分区
 */
async function processSidebarConfig(
  config: SidebarItem[],
  baseDir: string,
  docType: "docs" | "ai" | "himarket" | "developer" = "docs",
): Promise<DocSection[]> {
  const sections: DocSection[] = [];

  for (const item of config) {
    const links = await extractLinks(item, baseDir, docType);

    if (links.length > 0) {
      // 如果 item 本身有 link，第一个链接就是它自己
      // 否则使用 item.label 作为分区标题
      if (item.items || item.autogenerate) {
        sections.push({
          title: item.label,
          links,
        });
      } else if (links.length === 1) {
        // 单个链接项，归入上一个分区或创建新分区
        if (sections.length > 0) {
          sections[sections.length - 1].links.push(...links);
        } else {
          sections.push({
            title: "文档",
            links,
          });
        }
      }
    }
  }

  return sections;
}

/**
 * 生成 llms.txt 内容
 */
export async function generateLlmsTxt(contentDir: string): Promise<string> {
  const docsBaseDir = path.join(contentDir, "docs/docs/latest");

  // 读取 sidebar 配置
  const sidebarPath = path.join(docsBaseDir, "_sidebar.json");
  const sidebarContent = await fs.readFile(sidebarPath, "utf-8");
  const sidebarConfig: SidebarItem[] = JSON.parse(sidebarContent);

  // 处理配置生成文档分区
  const sections = await processSidebarConfig(sidebarConfig, docsBaseDir, "docs");

  // 追加 AI 网关文档分区
  try {
    const aiBaseDir = path.join(contentDir, "docs/docs/ai");
    const aiSidebarPath = path.join(aiBaseDir, "_sidebar.json");
    const aiSidebarContent = await fs.readFile(aiSidebarPath, "utf-8");
    const aiSidebarConfig: SidebarItem[] = JSON.parse(aiSidebarContent);
    const aiSections = await processSidebarConfig(aiSidebarConfig, aiBaseDir, "ai");
    const normalizedAiSections = aiSections.map((section) =>
      section.title === "文档" ? { ...section, title: "AI 网关" } : section,
    );
    sections.push(...normalizedAiSections);
  } catch (error) {
    console.warn("Warning: Could not process AI docs sidebar for llms.txt");
  }

  // 追加 HiMarket 文档分区
  try {
    const himarketBaseDir = path.join(contentDir, "docs/docs/himarket");
    const himarketSidebarPath = path.join(himarketBaseDir, "_sidebar.json");
    const himarketSidebarContent = await fs.readFile(himarketSidebarPath, "utf-8");
    const himarketSidebarConfig: SidebarItem[] = JSON.parse(himarketSidebarContent);
    const himarketSections = await processSidebarConfig(
      himarketSidebarConfig,
      himarketBaseDir,
      "himarket",
    );
    sections.push(...himarketSections);
  } catch (error) {
    console.warn("Warning: Could not process HiMarket docs sidebar for llms.txt");
  }

  // 生成 llms.txt 内容
  let content = `# Higress

> Higress 是一款云原生 API 网关，基于 Istio 和 Envoy 构建，支持 AI 网关、API 网关和微服务网关三合一。提供流量管理、服务治理、安全防护等企业级特性。

Higress 的核心特性：
- AI 网关：支持多模型代理、语义缓存、Token 管理等 AI 场景
- API 网关：提供丰富的流量治理能力，支持灰度发布、限流熔断等
- 微服务网关：无缝对接 Nacos、Dubbo、Spring Cloud 等微服务框架
- 插件扩展：支持 Wasm 插件开发，提供认证、转换、安全等丰富插件

`;

  for (const section of sections) {
    content += `## ${section.title}\n\n`;
    for (const link of section.links) {
      content += `- [${link.title}](${link.url})\n`;
    }
    content += "\n";
  }

  return content.trim() + "\n";
}

/**
 * 将 llms.txt 写入指定目录
 */
export async function writeLlmsTxt(outputDir: string, contentDir: string): Promise<void> {
  const content = await generateLlmsTxt(contentDir);
  const outputPath = path.join(outputDir, "llms.txt");

  await fs.writeFile(outputPath, content, "utf-8");
  console.log(`Generated llms.txt at ${outputPath}`);
}
