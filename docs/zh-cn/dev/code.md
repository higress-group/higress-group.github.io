---
title: 源码阅读指引
keywords: higress,coding
description: Higress 源码阅读指引.
---

# 源码阅读指引

如果您想给 Higress 贡献代码，请参考[参与贡献](../developers/guide_dev.md)

代码目录结构说明

- cmd: 命令行参数解析等处理代码

- pkg/ingress: Ingress 资源转换为 Istio 资源等相关代码

- pkg/bootstrap: 包括启动 gRPC/xDS/HTTP server 等的代码

- registry: 实现对接多种注册中心进行服务发现的代码

- envoy: 依赖的 envoy 官方仓库 commit，以及对应的补丁代码

- istio: 依赖的 istio 官方仓库 commit，以及对应的补丁代码

- plugins: Higress 插件 sdk，以及官方内置插件代码

- script: 编译相关脚本

- docker: docker 镜像构建相关脚本

在编译过程中会自动执行`make prebuild`，将产生 `external` 目录，这是将用到的 envoy 和 istio 依赖，打上对应的补丁代码后生成。

如果要修改 envoy 和 istio 代码，并产生新的补丁文件，可以直接在 external 目录下修改，并进行重命名，再执行 prebuild，之后对比生成补丁文件，例如:

```bash
mv external/envoy external/envoy_new
make prebuild
diff -Naur external/envoy external/envoy_new > envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch
```

注意补丁执行顺序按照文件名字符顺序，请以时间戳开头
