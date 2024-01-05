---
title: 全局配置说明
keywords: [Ingress]
description: 全局配置说明。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configmap.md
---

# 全局配置

Higress 的全局配置 ConfigMap 对象 higress-config 增加 higress 项， 参考配置如下： 

```yaml
apiVersion: v1
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
       service: skywalking-oap-server.op-system.svc.cluster.local
       port: 11800
    gzip:
      enable: false
      minContentLength: 1024
      contentType:
        - text/html
        - application/json
        - text/css
        - application/javascript
        - application/xhtml+xml
        - image/svg+xml
      disableOnEtagHeader: true
      memoryLevel: 5
      windowBits: 12
      chunkSize: 4096
      compressionLevel: BEST_COMPRESSION
      compressionStrategy: DEFAULT_STRATEGY
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
```

# 配置说明

## Tracing 配置说明

| 字段         | 类型                 | 说明                                 | 默认    |
|------------|--------------------|------------------------------------|-------|
| enable     | boolean            | 是否开启 tracing 功能                    | false |
| sampling   | float              | 采样率，0.0 - 100.0 之间                 | 100.0 |
| timeout    | int                | 链路跟踪中间件 grpc 连接超时，单位毫秒       | 500   |
| skywalking | 参考下面 skywalking 设置 | skywalking 配置                      | 未设置   |
| zipkin     | 参考下面 zipkin 设置     | zipkin 配置                          | 未设置   |


### skywalking 配置
| 字段           | 类型     | 说明                     | 默认  |
|--------------|--------|------------------------|-----|
| service      | string | Skywalking grpc 服务地址   | 空   |
| port         | string | Skywalking grpc 服务端口   | 空   |
| access_token | string | Skywalking grpc 服务访问凭证 | 空   |


### zipkin 配置
| 字段           | 类型     | 说明          | 默认  |
|--------------|--------|-------------|-----|
| service      | string | zipkin 服务地址 | 空   |
| port         | string | zipkin 服务端口 | 空   |

> 注意：
> skywalking 和 zipkin 不能同时设置，只有一个配置能生效

## Gzip 配置说明


| 字段         | 类型             | 说明                                             | 默认                                                                                                       |
|------------|----------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| enable     | boolean        | 是否开启 gzip 功能                                   | false                                                                                                    |
| minContentLength | int            | 启用压缩输出最少字节长度                                   | 1024                                                                                                     |
| contentType    | array          | 启用压缩输出content-type类型                           | text/html,application/json,text/css,<br/>application/javascript,application/xhtml+xml,<br/>image/svg+xml |
| disableOnEtagHeader | boolean        | 如果是true时, 当 response 包含 etag header时会关闭 gzip功能 | true                                                                                                     |
| memoryLevel     | int            | 从 1 到 9 控制 zlib用到内存.                           | 5                                                                                                        |
| windowBits     | int            | 从 9 到 15 表示压缩算法窗口大小.                           | 12                                                                                                       |
| chunkSize      | int            | zlib buffer大小                                  | 4096                                                                                                     |
|  compressionLevel       | string         | zlib 压缩比率                                      | BEST_COMPRESSION                                                                                         |
|  compressionStrategy    | string         | zlib 压缩策略                                      | DEFAULT_STRATEGY                                                                                         |


关于 gzip 参数配置详细说明可以参考 envoy gzip压缩文档： https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip
