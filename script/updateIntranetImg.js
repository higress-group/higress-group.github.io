// 用于在构建前遍历所有的 Markdown 文件，替换所有的内网语雀图片链接为本地路径
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import fetch from 'node-fetch'; 

const CONTENT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../src/content');
const IMAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../public/img');

// 正则匹配 ![](https://intranetproxy.alipay.com/xxxx)
const regex = /!\[.*?\]\((https:\/\/intranetproxy\.alipay\.com[^\)]+)\)/g;

// 下载图片并保存到本地
async function downloadImage(url) {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch image from ${url}`);
  }

  const buffer = await response.buffer();
  
  // 使用时间戳生成文件名
  const fileName = `${Date.now()}.png`;
  const filePath = path.join(IMAGE_DIR, fileName);

  // 将buffer写入文件
  await fs.writeFile(filePath, buffer);
  
  // 返回本地路径
  return filePath;
}

// 处理 Markdown 文件
async function processMarkdown(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  let newContent = content;

  // 匹配所有需要处理的 URL
  const matches = Array.from(content.matchAll(regex));
  
  for (const match of matches) {
    const oldUrl = match[1]; // URL 部分
    const localFilePath = await downloadImage(oldUrl); // 下载并保存
    const localUrl = `/img/${path.basename(localFilePath)}`; // 生成新的本地 URL
    newContent = newContent.replace(oldUrl, localUrl); // 替换旧 URL
  }

  // 写回文件
  await fs.writeFile(filePath, newContent, 'utf-8');
}

// 遍历目录中的所有 Markdown 和 MDX 文件
async function processDirectory(directory) {
  const files = await fs.readdir(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);

    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      // 递归遍历子目录
      await processDirectory(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      await processMarkdown(filePath);
    }
  }
}

// 确保存储目录存在
async function ensureImageDirectory() {
  try {
    await fs.access(IMAGE_DIR);
  } catch (error) {
    await fs.mkdir(IMAGE_DIR, { recursive: true });
  }
}

// 开始处理
async function main() {
  await ensureImageDirectory(); // 确保图片存储目录存在
  await processDirectory(CONTENT_DIR);
  console.log('处理完成');
}

main().catch(err => console.error('处理出错:', err));
