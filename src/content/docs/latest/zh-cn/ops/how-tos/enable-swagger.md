---
title: 启用 Console 内的 Swagger UI
keywords: [ops,console,swagger]
description: 介绍如何启用 Higress Console 内的 Swagger UI
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/enable-swagger.md
---
# 启用 Console 内的 Swagger UI

## K8s 部署

在 helm 安装或升级命令中添加 `--set higress-console.swagger.enabled=true` 参数即可。

## Docker Compose 部署

进入安装目录，在 `compose/console.env` 文件内添加以下两行内容，并重启 Higress 即可：

```bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
```

## all-in-one 镜像部署

在 `docker run` 命令中添加 `-e O11Y=on` 参数即可。
