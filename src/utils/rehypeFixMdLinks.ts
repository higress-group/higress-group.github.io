import { visit } from 'unist-util-visit';
import type { Root as HastRoot, Element } from 'hast';

/**
 * Rehype plugin to fix internal markdown links for Astro/Starlight.
 * 
 * In Astro with trailing slashes, a file like `annotation-use-case.md` becomes
 * `/docs/latest/user/annotation-use-case/`. This means relative links like
 * `./quickstart.md` would resolve to `/docs/latest/user/annotation-use-case/quickstart`
 * instead of the correct `/docs/latest/user/quickstart`.
 * 
 * This plugin fixes this by:
 * 1. Converting `./xxx.md` to `../xxx` (go up one level because of trailing slash URLs)
 * 2. Removing .md extension from other relative links
 * 3. Keeping external links unchanged
 */
export function rehypeFixMdLinks() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') return;
      
      const href = node.properties?.href;
      if (typeof href !== 'string') return;
      
      let url = href;
      
      // Skip external links (http://, https://, mailto:, etc.)
      if (/^[a-z]+:/i.test(url)) {
        return;
      }
      
      // Skip anchor-only links
      if (url.startsWith('#')) {
        return;
      }
      
      // Skip absolute paths (already processed or from sidebar)
      if (url.startsWith('/')) {
        return;
      }
      
      // Extract anchor if present
      let anchor = '';
      const anchorIndex = url.indexOf('#');
      if (anchorIndex !== -1) {
        anchor = url.slice(anchorIndex);
        url = url.slice(0, anchorIndex);
      }
      
      // Remove .md extension
      if (url.endsWith('.md')) {
        url = url.slice(0, -3);
      }
      
      // Fix relative paths for Astro's trailing slash URLs
      // In Astro, each .md file becomes a directory with trailing slash
      // So `./sibling.md` from `current.md` needs to become `../sibling`
      // because the URL is `/path/current/` not `/path/current`
      if (url.startsWith('./')) {
        // Same directory sibling: ./file -> ../file
        url = '../' + url.slice(2);
      } else if (url.startsWith('../')) {
        // Parent directory: ../file -> ../../file
        url = '../' + url;
      } else if (!url.startsWith('/') && !url.startsWith('.') && url.length > 0) {
        // Bare relative path like "file" -> "../file"
        url = '../' + url;
      }
      
      node.properties = node.properties || {};
      node.properties.href = url + anchor;
    });
  };
}
