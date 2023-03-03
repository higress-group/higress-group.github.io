---
title: 组件编译说明
keywords: higress,architecture
description: Higress 组件编译说明.
---

# 组件编译说明

## Higress Controller

Higress 的控制面程序，会连接 Istio ，用于生成 Istio API 对象，通过 xDS 协议发送给 Istio。

在 higress 仓库目录下执行 `make build` 即可进行本地环境能运行的二进制编译

若需要编译 docker 镜像，请执行 `make docker-build`


## Higress Gateway

Higress 的数据面程序，用于实现网关路由转发等能力。

在 higress 仓库目录下执行 `make build-gateway` 会编译出 Higress Gateway 的镜像。
