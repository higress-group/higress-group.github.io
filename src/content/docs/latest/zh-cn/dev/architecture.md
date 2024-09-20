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
### 给新手的一些tips：
如果在linux服务器编译打包时发现使用https方式clone子项目失败，如连接超时等导致下载依赖出错，可以尝试修改submodule配置为ssh，并配置GOPROXY：
```
#前提是已经在github中配置了本地公钥
#修改https方式为ssh方式
sed -i 's|https://github.com/|git@github.com:|g' .gitmodules
#同步.git/config中的配置
git submodule sync
#修改Makefile.core.mk中的GOPROXY配置
#export GOPROXY ?= https://proxy.golang.org,direct
export GOPROXY ?= https://goproxy.cn,direct
```
另外，在windows中开发时，为了方便进行代码开发，可以执行以下步骤完成依赖配置：
```
#如果https方式无法clone submodule，则同上修改.gitmodules配置，并执行git submodule sync同步
#初始化submodule（如果执行这条命令发现部分submodule没有clone，可以添加 --force）：
git submodule update --init
#使用Git Bash工具，进入tools/hack目录，执行以下命令完成依赖加载：
bash -x prebuild.sh
```

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
2. 执行 `make build-envoy` 命令，构建 Envoy 本体；
3. 构建完成后，生成的 envoy 产物文件（tar.gz 后置的压缩包）会放在 higress 仓库目录的 `external/package` 子目录内；
4. 将构建完成后输出的 tar.gz 文件，放到 OSS 或其他文件下载服务器上，注意文件名要以架构名结尾，例如 `envoy-amd64.tar.gz` 或者 `envoy-arm64.tar.gz`；
5. 设置环境变量`ENVOY_PACKAGE_URL_PATTERN`为 envoy 产物文件的下载地址，参考上面的快速构建步骤，构建 Higress Gateway 镜像
