---
title: 使用 HTTP/HTTPS 协议加载 Wasm 插件
keywords: [ops,config,wasm,plugin,http,https]
description: 介绍如何为使用 HTTP/HTTPS 协议加载 Wasm 插件
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/load-wasm-with-http.md
---

# 使用 HTTP/HTTPS 协议加载 Wasm 插件

## 文件要求

考虑到便捷性，建议目标 URL 直接指向 Wasm 文件。

## HTTP 协议

直接配置即可，但需要确保目标 URL 可以被 Gateway 容器访问到。可以尝试在容器内 curl 验证。

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS 协议

配置方式和要求与 HTTP 协议类似。但如果服务端使用的是自签等非可信任证书的话，需要在 Gateway 容器内增加一个名为“WASM_INSECURE_REGISTRIES”的环境变量，值可以直接配置为“*”，表示信任所有服务器返回的 HTTPS 证书。
