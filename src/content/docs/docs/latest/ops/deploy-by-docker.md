---
title: 基于 Docker 容器进行独立部署
keywords: [deploy,docker,all-in-one,ops]
description: 如何使用 Docker All-in-One 容器实现 Higress 的独立部署
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/deploy-by-docker.md
---

# 基于 Docker 进行独立部署

Higress 提供了一种基于 Docker 在本地进行快速部署的办法。无需逐个下载各个组件的镜像，只需要下载一个 All-in-One 的完整镜像即可启动 Higress。

> **注意**
>
> Docker All-in-One 模式没有大规模生产使用过，目前主要用于本地部署测试的场景。如果要进行生产部署，更建议使用[云原生模式](./deploy-by-helm)。

## 安装 Higress

基于 Docker All-in-One 镜像进行部署时，Higress 的所有组件都打包在了这个镜像里面，配置信息则通过卷挂载的方式保存在本地磁盘上。

### 启动命令

```shell
# 创建一个工作目录
mkdir higress; cd higress
# 启动 higress，配置文件会写到工作目录下
docker run -d --rm --name higress-ai -v ${PWD}:/data \
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

然后即可通过 http://localhost:8001/ 访问 Higress Console 进行配置管理

Higress 网关服务在本地监听的端口如下：
- 8080：Gateway HTTP 服务端口
- 8443：Gateway HTTPS 服务端口

### 停止容器

```shell
docker stop higress-ai
```

`--rm` 参数确保容器停止后自动被删除。

### 环境变量

| **变量名** | **变量说明** | **默认值** |
|------------|-------------|--------------|
| MODE | All-in-One 容器的运行模式。可选值有：<br/>- full：gateway 和 console 均运行<br/>- gateway：仅运行 gateway<br/>- console：仅运行 console | full |
| O11Y | 是否启用 Higress 内置的监控套件（如 AI 监控面板）<br/>注：若要使用该功能，请在镜像 tag 后添加 `-o11y` 后缀，如 `latest-o11y`。 | off |
| USE_PLUGIN_SERVER | 是否启用内置的插件服务器。若不启用，Higress 将需要从位于公网的镜像服务器下载 Wasm 插件。 | on |
| GATEWAY_HTTP_PORT | Higress Gateway 在容器内监听的 HTTP 服务端口 | 8080 |
| GATEWAY_HTTPS_PORT | Higress Gateway 在容器内监听的 HTTPS 服务端口 | 8443 |
| CONSOLE_PORT | Higress Console 在容器内监听的 HTTP 服务端口 | 8001 |
| ENABLE_CONSOLE_ROUTE | 是否为 Higress Console 在 Gateway 上创建路由。1 表示创建，其他值表示不创建。 | 0 |
