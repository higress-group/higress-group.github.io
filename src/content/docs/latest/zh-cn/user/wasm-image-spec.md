---
title: Wasm 插件镜像规范
keywords: [wasm,image,oci]
description: Wasm 插件镜像规范
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/user/wasm-image-spec.md
---

# Wasm 插件镜像规范

## 1. 概述

本规范旨在定义对 Higress Wasm Plugin 镜像的内容和构建方式。在编写时，笔者参考了 [Wasm Image Specification](https://github.com/solo-io/wasm/blob/master/spec/spec-compat.md)。

> 注意：本规范使用 OCI 镜像格式，并不限定插件只能使用 OCI 镜像，对于自定义插件开发，请参考[自定义插件](../plugins/custom.md)里介绍的更简单的方式。
>
> OCI 镜像是用来规范所有平台推出的通用标准插件使用


## 2. 镜像结构

每个镜像必须基于 `scratch` 使用 [OCI 格式规范](https://github.com/opencontainers/image-spec)进行构建，且可包含以下文件：

- spec.yaml：必要。插件的元数据文件。其内容格式请见第 3 节。
- README.md：必要。插件的用法说明文件。使用 Markdown 格式。语言可使用英文或中文。
- README_{lang}.md：可选。插件用法说明文件的翻译版本。使用 Markdown 格式。`lang` 的取值为 `ZH` 或 `EN`。
- icon.png：可选。插件的图标文件。也可以选择在 spec.yaml 中指定图标 URL。二者同时存在时，系统会使用包内部的图标文件用于展示。
- plugin.wasm：必要。插件的二进制文件。

镜像的每一层只可包含一个文件。

除 plugin.wasm 所在层外，其它层需根据文件名设置 media type：

- spec.yaml：application/vnd.module.wasm.spec.v1+yaml 
- README.md：application/vnd.module.wasm.doc.v1+markdown
- README_{lang}.md：application/vnd.module.wasm.doc.v1.{lang}+markdown
- icon.png：application/vnd.module.wasm.icon.v1+png

plugin.wasm 文件必须放置于镜像的最后一层，且该层应使用 application/vnd.oci.image.layer.v1.tar+gzip 作为 media type。

## 3. 元数据文件格式

本节以 `basic-auth` 插件的元数据信息为例，介绍元数据文件 `spec.yaml` 的格式。

```yaml
apiVersion: 1.0.0  # 本文件所使用的格式版本。目前固定为 1.0.0
info:
  category: auth # 插件类型。可选值有：auth（认证鉴权）、security（安全防护）、protocol（协议转换）、flow-control（流量控制）、flow-monitor（流量观测）、custom（自定义）
  name: basic-auth/v1  # 插件名称。这是插件的唯一标识。建议在尾部追加类似"/v1"的版本号，以便应对后续不兼容升级的场景
  title: Basic Auth # 显示名称，支持国际化
  description: 本插件实现了基于 HTTP Basic Auth 标准进行认证鉴权的功能。 # 功能描述，支持国际化
  x-description-i18n: # 上面 description 字段的国际化内容。所有支持国际化的字段均可使用"x-{name}-i18n"的方式添加国际化内容
    en-US: This plugin implements an authentication function based on HTTP Basic Auth standard.
  iconUrl: https://img.alicdn.com/imgextra/i1/O1CN01I7WjVs1K33EQjInid_!!6000000001107-2-tps-960-290.png # 可选，插件的图标文件 URL。
  version: 1.0.0 # 版本号
  contact: # 联系信息
    name: Higress Team
    url: http://higress.cn/
    email: admin@higress.io
spec:
  phase: AUTHN # 运行阶段。取值请参考 https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#PluginPhase
  priority: 0 # 阶段内的运行优先级。取值请参考 https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin
  configSchema: # 插件运行配置的数据模型，目前仅支持使用 OpenAPI 3.0.0 标准中的 Schema 格式进行定义
    openAPIV3Schema: # 以下内容的数据格式请参考 https://openapi.apifox.cn/#schema-%E5%AF%B9%E8%B1%A1 。部分显示用字段支持国际化。
      type: object
      properties:
        consumers:
          type: array
          x-scope: GLOBAL # 配置项作用范围。可选值：GLOBAL（全局配置）、RULE（规则级配置，即在关联到路由、域名、服务等特定时的配置）、ANY（不限制作用范围）。可空。缺省值为 ANY。
          title: 调用方列表
          x-title-i18n:
            en-US: Consumer List
          description: 服务调用方列表，用于对请求进行认证
          x-description-i18n:
            en-US: List of service consumers which will be used in request authentication
          items:
            type: object
            properties:
              name:
                type: string
                title: 名称
                x-title-i18n:
                  en-US: Name
                description: 该调用方的名称
                x-description-i18n:
                  en-US: The name of the consumer
                # 数据校验场景参照 JSON Schema Validation Spec 实现
                # https://json-schema.org/draft/2020-12/json-schema-validation.html
                # 目前支持以下字段：
                # - maximum
                # - minimum
                # - maxLength
                # - minLength
                # - pattern
                # - maxItems
                # - minItems
                # - required
                minLength: 6 # 最小长度，用于数据校验
                maxLength: 256 # 最大长度，用于数据校验
                pattern: "^$" # 正则表达式，用于数据校验
                example:
                  - consumer1
              credential:
                type: string
                title: 访问凭证
                x-title-i18n:
                  en-US: Credential
                description: 该调用方的访问凭证
                x-description-i18n:
                  en-US: The credential of the consumer
                example:
                  - admin:123456
            required:
              - name
              - credential
        allow:
          type: array
          title: 授权访问的调用方列表
          x-title-i18n:
            en-US: Allowed Consumers
          description: 对于匹配上述条件的请求，允许访问的调用方列表
          x-description-i18n:
            en-US: Consumers to be allowed for matched requests
          items:
            type: string
            example:
              - consumer1
      required:
        - allow
        - consumers
      example:
        consumers:
          - name: consumer1
            credential: admin:123456
          - name: consumer2
            credential: guest:abc
        allow:
          - consumer2
```

## 4. 镜像构建方式

1. 在 Higress 项目目录内启动构建用容器

```bash
GO_VERSION="1.19"
TINYGO_VERSION="0.28.1"
ORAS_VERSION="1.0.0"
PLUGIN_NAME="hello-world"
BUILDER_IMAGE="higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go${GO_VERSION}-tinygo${TINYGO_VERSION}-oras${ORAS_VERSION}"
docker run -v ${PWD}:/workspace -e PLUGIN_NAME=${PLUGIN_NAME} -it --rm ${BUILDER_IMAGE} /bin/bash
```

2. 在容器中构建 Wasm 文件

```bash
cd /workspace/plugins/wasm-go/extensions/${PLUGIN_NAME}
go mod tidy
tinygo build -o ./plugin.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
```

3. 构建并推送 OCI 镜像

```bash
tar czvf plugin.tar.gz plugin.wasm
IMAGE_REGISTRY_SERVICE=docker.io
IMAGE_REPOSITORY="${IMAGE_REGISTRY_SERVICE}/plugins/${PLUGIN_NAME}"
IMAGE_TAG="v0.0.1"
oras login ${IMAGE_REGISTRY_SERVICE}
oras push ${IMAGE_REPOSITORY}:${IMAGE_TAG} \
    ./spec.yaml:application/vnd.module.wasm.spec.v1+yaml  \
    ./README.md:application/vnd.module.wasm.doc.v1+markdown \
    ./README_EN.md:application/vnd.module.wasm.doc.v1.en+markdown \
    ./plugin.tar.gz:application/vnd.oci.image.layer.v1.tar+gzip
```

## 5. 附录

### 5.1 各插件类型的缺省图标

- 自定义：https://img.alicdn.com/imgextra/i1/O1CN018iKKih1iVx287RltL_!!6000000004419-2-tps-42-42.png
- 认证鉴权：https://img.alicdn.com/imgextra/i4/O1CN01BPFGlT1pGZ2VDLgaH_!!6000000005333-2-tps-42-42.png
- 流量管控：https://img.alicdn.com/imgextra/i3/O1CN01bAFa9k1t1gdQcVTH0_!!6000000005842-2-tps-42-42.png
- 流量观测：https://img.alicdn.com/imgextra/i4/O1CN01aet3s61MoLOEEhRIo_!!6000000001481-2-tps-42-42.png
- 安全防护：https://img.alicdn.com/imgextra/i1/O1CN01jKT9vC1O059vNaq5u_!!6000000001642-2-tps-42-42.png
- 传输协议：https://img.alicdn.com/imgextra/i2/O1CN01xIywow1mVGuRUjbhe_!!6000000004959-2-tps-42-42.png
