---
title: 配置 Ingress 转发给注册在 Nacos 的服务
keywords: [ingress,higress nacos]
description: 配置 Ingress 转发给注册在 Nacos 的服务
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/nacos-route.md
---

# 配置 Ingress 转发给注册在 Nacos 的服务


## 配置服务来源

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # 定义一个名为 “production” 的服务来源
  - name: production
    # 注册中心类型是 Nacos 2.x，支持 gRPC 协议
    type: nacos2
    # 注册中心的访问地址，可以是域名或者IP
    domain: 192.xxx.xx.32
    # 注册中心的访问端口，Nacos 默认都是 8848
    port: 8848
    # Nacos 命名空间 ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos 服务分组
    nacosGroups:
    - DEFAULT_GROUP
    # 定义一个名为 “uat” 的服务来源
  - name: uat
    # 注册中心类型是 Nacos 1.x，只支持 HTTP 协议
    type: nacos
    # 注册中心的访问地址，可以是域名或者IP
    domain: 192.xxx.xx.31
    # 注册中心的访问端口，Nacos 默认都是 8848
    port: 8848
    # Nacos 命名空间 ID
    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4
    # Nacos 服务分组
    nacosGroups:
    - DEFAULT_GROUP
```

通过[McpBridge](./mcp-bridge.md)资源配置了两个服务来源，分别取名 “production”和“uat”，需要注意的是 Higress 对接 Nacos 同时支持 HTTP 和 gRPC 两种协议，建议将 Nacos 升级到 2.x 版本，这样可以在上述配置的 type 中指定 “nacos2” 使用 gRPC 协议，从而更快速地感知到服务变化，并消耗更少的 Nacos 服务端资源。
基于 McpBridge 中的 registries 数组配置，Higress 可以轻松对接多个且不同类型的服务来源（Nacos/Zookeeper/Eureka/Consul/...），这里对于 Nacos 类型的服务来源，支持配置多个不同命名空间，从而实现不同命名空间的微服务可以共用一个网关，降低自建微服务网关的资源成本开销。


## 配置 Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
```

和常见的 Ingress 在 backend 中定义 service 不同，这里基于 Ingress 的 resource backend 将上面定义服务来源的 McpBridge 进行关联。并通过注解`higress.io/destination`指定路由最终要转发到的目标服务。

对于 Nacos 来源的服务，这里的目标服务格式为：“服务名称.服务分组.命名空间ID.nacos”，注意这里需要遵循 DNS 域名格式，因此服务分组中的下划线'_'被转换成了横杠'-'。
