---
title: 源码阅读指引
keywords: [higress,coding]
description: Higress 源码阅读指引.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/dev/code.md
---

# 源码阅读指引

如果您想给 Higress 贡献代码，请参考[参与贡献](../developers/guide_dev.md)

代码目录结构说明

- cmd: 命令行参数解析等处理代码

- pkg/ingress: Ingress 资源转换为 Istio 资源等相关代码

- pkg/bootstrap: 包括启动 gRPC/xDS/HTTP server 等的代码

- registry: 实现对接多种注册中心进行服务发现的代码

- envoy: 依赖的 envoy 仓库 commit

- istio: 依赖的 istio 仓库 commit

- plugins: Higress 插件 sdk，以及官方内置插件代码

- script: 编译相关脚本

- docker: docker 镜像构建相关脚本

在编译过程中会自动执行`make prebuild`，将产生 `external` 目录，这是将用到的 envoy 和 istio 依赖

如果要修改 envoy 和 istio 代码，可以直接在 external 目录下修改，并进行重命名，再执行 prebuild，之后对比生成补丁文件，例如:

```bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > envoy.patch
```

测试完成后，可以将对应的补丁文件，patch 到 envoy 或 istio 的仓库里进行提交.

首先 fork higress 的 [envoy](https://github.com/higress-group/envoy) 或 [istio](https://github.com/higress-group/istio) 仓库，接着推送你的改动，并提交 PR，例如：

```bash
git clone https://github.com/<your-fork>/envoy.git
cd envoy
git checkout -b <Your branch name>
patch -p1 < envoy.patch
git add -u
git commit -m <Your change info>
git push origin <Your branch name>
```
