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
...
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
