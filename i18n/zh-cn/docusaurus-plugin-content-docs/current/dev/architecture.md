---
title: 组件编译说明
keywords: [higress,architecture]
description: Higress 组件编译说明.
---

# 组件编译说明

## Higress Controller

Higress 的控制面程序，会连接 Istio ，用于生成 Istio API 对象，通过 xDS 协议发送给 Istio。

在 higress 仓库目录下执行 `make build` 即可进行本地环境能运行的二进制编译

若需要编译 docker 镜像，请执行 `make docker-build`。Higress Controller使用的Istio pilot镜像使用`make build-istio-local` 编译。

## Higress Gateway

Higress 的数据面程序，用于实现网关路由转发等能力。

### 快速构建

适用场景：未对 Envoy 本体进行了修改，即不需要重新编译 Envoy 本体的情况

构建步骤：
1. 在命令行下进入 higress 仓库目录；
2. 执行 `make build-gateway-local` 命令，进行 Higress Gateway 镜像的构建；
3. 构建完成后会输出镜像 tag。

### 完整构建

适用场景：需要重新编译 Envoy 本体的情况

构建步骤：
1. 在命令行下进入 higress 仓库目录；
2. 执行 `cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release` 命令，构建 Envoy 本体；
3. 构建完成后，生成的 `envoy.tar.gz` 文件会放在 higress 仓库目录的 `external/package` 子目录内；
4. 将构建完成后输出的 `envoy.tar.gz` 文件，根据本机的系统架构重命名为 `envoy-amd64.tar.gz` 或 `envoy-arm64.tar.gz`；
5. 如果需要构建多平台镜像，那么需要在另一个平台的系统上完成 Envoy 的构建，并将其生成的 envoy.tar.gz 文件重命名后复制到本机上（参考以上 2、3 两步）；
6. 参考上面的快速构建步骤，构建 Higress Gateway 镜像。