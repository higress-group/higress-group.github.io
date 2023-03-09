# Higress Official Website

[![CI Status](https://github.com/higress-group/higress-group.github.io/workflows/higress.io%20deploy/badge.svg)](https://github.com/higress-group/higress-group.github.io/actions)

All website material  of https://higress.io

### Quick Start

1. `npm install`

2. `npm run start`

3. visit
```
localhost:3000/
```

### Build

1. `npm run build`

2. `npm run serve` to visit

3. visit
```
localhost:3000/
```

## Requirements
Base docusaurus v2.3.1
Node.js version 16.14+


## Note for i18n
For now, we use [docusaurus](https://www.zhihu.com/people/erda-project) `v2.3.1`, and there is a problem with `defaultLocale` in `docusaurus.config.js`. We can't deploy site like `https://my-site`, [see this](https://github.com/facebook/docusaurus/discussions/8745).

It will be solved perfectly in `v2.4`, stay tuned.

## How To Write Documents


### Add a new doc
 
1. Add new .md file under i18n/en-us/docusaurus-plugin-content-docs/current or i18n/zh-cn/docusaurus-plugin-content-docs/current. Corresponding to Chinese file and English file , and the Chinese and English file names should be consistent.
2. Update sidebar.js, add a new entry to the blog in either en-us or zh-cn.

### Add a new article for developers

1. Add new .md file under i18n/en-us/docusaurus-plugin-content-docs/current/developers or i18n/zh-cn/docusaurus-plugin-content-docs/current/developers, the file name should end up with _dev.md. Note that the suffix _dev is necessary.
2. Update sidebar.js, add a new entry in either en-us or zh-cn.

### Add a new blog

1. Add new .md file under i18n/en-us/docusaurus-plugin-content-blog/current or i18n/zh-cn/docusaurus-plugin-content-blog/current. Corresponding to Chinese file and English file , and the Chinese and English file names should be consistent.
2. `SEO` config is required.

## SEO

the type is :
```
---
title: title
keywords: [keywords1,keywords2]
description: some description
author: author name
date: 2018-12-29
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/master/i18n/en/docusaurus-plugin-content-blog/30-line-wasm.md
---
```
**Note:**
1. `title` can not include `:` 
2. `keywords` must be a `Array`
3. `custom_edit_url` is a link to the doc in this repo, required.


## Note for .md file
1. Do not use un correct html tag like `<img>、<br>`, replace with `<img /> <br />`
2. If you want show `<xx>`, replace with `&lt;xx&gt;`





