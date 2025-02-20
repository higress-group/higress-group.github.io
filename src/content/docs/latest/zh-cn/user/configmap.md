---
title: 全局配置说明
keywords: [Ingress]
description: 全局配置说明。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configmap.md
---

## 通用全局配置

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
    addXRealIpHeader: false
    disableXEnvoyHeaders: false
    downstream:
      connectionBufferLimits: 32768
      http2:
        initialConnectionWindowSize: 1048576
        initialStreamWindowSize: 65535
        maxConcurrentStreams: 100
      idleTimeout: 180
      maxRequestHeadersKb: 60
    upstream:
      connectionBufferLimits: 1048576
      idleTimeout: 10
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
```

### 配置说明

| 字段         | 类型                 | 说明                                                                    | 默认                  |
|------------|--------------------|-----------------------------------------------------------------------|---------------------|
| addXRealIpHeader     | boolean            | 是否添加 x-real-ip 请求头，如果是true，则会为请求头添加 x-real-ip 参数                      | false               |
| disableXEnvoyHeaders | boolean            | 是否关闭附加在转发请求中的 x-envoy 前缀请求头（例如 x-envoy-original-path），如果是true，则会关闭 | false               |
| downstream    | 参考下面 downstream 设置 | downstream 设置                         | 参考下面 downstream 默认值 |
| upstream    | 参考下面 upstream 设置 | upstream 设置                         | 参考下面 upstream 默认值 |
| tracing    | 参考下面 tracing 设置 | tracing 设置                         | 参考下面 tracing 默认值 |
| gzip    | 参考下面 gzip 设置 | gzip 设置                         | 参考下面 gzip 默认值 |



#### Tracing 配置说明

| 字段         | 类型                 | 说明                                 | 默认    |
|------------|--------------------|------------------------------------|-------|
| enable     | boolean            | 是否开启 tracing 功能                    | false |
| sampling   | float              | 采样率，0.0 - 100.0 之间                 | 100.0 |
| timeout    | int                | 链路跟踪中间件 grpc 连接超时，单位毫秒       | 500   |
| skywalking | 参考下面 skywalking 设置 | skywalking 配置                      | 未设置   |
| zipkin     | 参考下面 zipkin 设置     | zipkin 配置                          | 未设置   |
| opentelemetry     | 参考下面 opentelemetry 设置     | opentelemetry 配置                          | 未设置   |


##### skywalking 配置
| 字段           | 类型     | 说明                     | 默认  |
|--------------|--------|------------------------|-----|
| service      | string | Skywalking grpc 服务名称，即控制台服务列表看到的服务名称，例如 my-server.dns、my-server.my-ns.svc.cluster.local   | 空   |
| port         | string | Skywalking grpc 服务端口   | 空   |
| access_token | string | Skywalking grpc 服务访问凭证 | 空   |


##### zipkin 配置
| 字段           | 类型     | 说明          | 默认  |
|--------------|--------|-------------|-----|
| service      | string | zipkin 服务名称，即控制台服务列表看到的服务名称，例如 my-server.dns、my-server.my-ns.svc.cluster.local | 空   |
| port         | string | zipkin 服务端口 | 空   |

##### opentelemetry 配置
| 字段           | 类型     | 说明                     | 默认  |
|--------------|--------|------------------------|-----|
| service      | string | opentelemetry grpc 服务名称，即控制台服务列表看到的服务名称，例如 my-server.dns、my-server.my-ns.svc.cluster.local   | 空   |
| port         | string | opentelemetry grpc 服务端口   | 空   |


> 注意：
> skywalking，zipkin，opentelemetry 不能同时设置，只有一个配置能生效

#### Gzip 配置说明


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


#### Downstream 配置说明

| 字段         | 类型                 | 说明                    | 默认                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | 连接缓冲区大小，单位字节          | 32768               |
| http2     | 参考下面 http2 设置 | http2 设置              | 参考下面 http2 默认值 |
| idleTimeout    | int            | 连接空闲超时时间，单位秒，0表示关闭该配置 | 180               |
| maxRequestHeadersKb    | int            | 最大请求头大小，单位Kb，最大为8192Kb  | 60               |

##### http2 配置说明

| 字段         | 类型                 | 说明                                   | 默认                  |
|------------|--------------------|--------------------------------------|---------------------|
| initialConnectionWindowSize     | int            | http2 连接窗口大小，单位字节，范围为65535～2147483647          | 1048576               |
| initialStreamWindowSize     | int            | http2 流窗口大小，单位字节，范围为65535～2147483647 | 65535               |
| maxConcurrentStreams    | int            | http2 最大并发流数量，范围为1～2147483647        | 100               |


#### Upstream 配置说明

| 字段         | 类型                 | 说明                    | 默认                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | 连接缓冲区大小，单位字节          | 1048576               |
| idleTimeout    | int            | 连接空闲超时时间(空闲定义是没有未处理完的请求，如果有请求在处理中，不会判定为idle)，单位秒，0表示关闭该配置 | 10               |


## TLS 证书全局配置

> 注意：当前仅对Ingress模式生效，Gateway API暂不支持


Higress TLS 的全局配置 ConfigMap 对象 higress-https ， 参考配置如下： 

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-https
  namespace: higress-system
data:
  cert: |
    automaticHttps: true
    renewBeforeDays: 30
    fallbackForInvalidSecret: true
    acmeIssuer:
    - name: letsencrypt
      email: test@example.com
    credentialConfig:
    - tlsIssuer: letsencrypt
      domains:
      - foo.com
      tlsSecret: foo-com-secret
```

### 配置说明
| 字段                       | 类型      | 说明                                                                            | 默认                    |
|--------------------------|---------|-------------------------------------------------------------------------------|-----------------------|
| automaticHttps                     | boolean | 是否启动通过 ACME Issuer 来签发证书                                                      | true                  |
| renewBeforeDays          | int     | 证书过期前多少天自动Renew， 最大值为90天                                                      | 30                    |
| fallbackForInvalidSecret | boolean | 如果开启，当 ingress TLS 里配置 secretName 不存在时，会在 credentialConfig 配置里根据域名匹配 secret | false                 |
| acmeIssuer               | array   | acmeIssuer 设置                                                                 | 参考下面 acmeIssuer       |
| credentialConfig         | array   | credentialConfig 设置                                                           | 参考下面 credentialConfig |


### credentialConfig 配置

| 字段           | 类型     | 说明                                                                                | 默认 |
|--------------|--------|-----------------------------------------------------------------------------------|----|
| tlsSecret    | string | 证书 secret 名称                                                                      | -  |
| tlsIssuer    | string | 对应 ACME Issuer 名称，现在只支持 letsencrypt。不填 tlsIssuer 时，domains可以填列表或泛域名，用于全局管理这些域名的secret配置； 如果设置为 letsencrypt， domains 下只能配置一个域名，而且不能是泛域名，并且 tlsSecret 不能是已经存在的非 Higress 创建的自动证书 | -  |
| domains      | array  | 域名配置，可以是泛域名                                                                       | -  |


### acmeIssuer 配置

| 字段                       | 类型     | 说明                            | 默认 |
|--------------------------|--------|-------------------------------|---|
| name                     | string | ACME Issuer 名称，只支持 letsencrypt | - |
| email                    | string | ACME Issuer 邮箱，用于通知证书变更等事件                | - |

### 如何开启和关闭 ACME Issuer 自动管理证书

安装时默认启动 ACME Issuer 自动管理证书和系统随机生成邮箱地址，具体配置参数如下：

| **参数名**                          | **参数说明**                            | **默认值** |
|----------------------------------|-------------------------------------|---------|
|higress-core.controller.automaticHttps.enabled | 是否开启ACME Issuer签发证书，只支持 letsencrypt | true   |
|higress-core.controller.automaticHttps.email   | ACME Issuer 邮箱，如果为空，系统随机生成邮箱地址        | -       |


