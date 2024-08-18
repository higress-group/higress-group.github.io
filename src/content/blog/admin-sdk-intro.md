---
title: 如何使用 Higress Admin SDK 进行配置管理
keywords: [Higress,SDK,Config]
description: 介绍如何使用 Higress Admin SDK 来管理 Higress 的服务来源、服务路由等各项配置。
author: CH3CHO
date: "2024-02-08"
category: "article"
---

# 1. 背景

Higress 一个遵循开源 Ingress/Gateway API 标准，提供流量调度、服务治理、安全防护三合一的高集成、易使用、易扩展、热更新的下一代云原生网关。而配置管理网关的运维工作中扮演者重要的角色。如何让配置管理自动化，尤其是与其他的运维系统进行对接，就成为了一个非常迫切的需求。本文将介绍如何使用 Higress Admin SDK 来管理 Higress 系统内的各类配置。希望能够对存在此类需求的朋友有所帮助。

# 2. Higress Admin SDK

Higress Admin SDK 脱胎于 Higress Console。起初，它是作为 Higress Console 的一部分，为前端界面提供实际的功能支持。后来考虑到对接外部系统等需求，我们将配置管理的部分剥离出来，形成一个独立的逻辑组件，便于各个系统进行对接。目前支持服务来源管理、服务管理、路由管理、域名管理、证书管理、插件管理等功能。

Higress Admin SDK 现在只提供 Java 版本，且要求 JDK 版本不低于 17。

# 3. 开发实操

## 3.1 环境准备

这里我们以本地基于 Kind 搭建的 K8s 集群作为实验环境。所以首先，请大家参考这篇[文档](https://higress.io/zh-cn/docs/user/quickstart#%E5%9C%BA%E6%99%AF%E4%BA%8C%E5%9C%A8%E6%9C%AC%E5%9C%B0-k8s%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8)在本地完成 K8s 集群的搭建和 Higress 的安装。

然后，我们需要创建一个测试用的 K8s 服务。大家可以将下方的 YAML 保存为 `test.yaml`，然后执行 `kubectl apply -f test.yaml` 命令在 K8s 中创建对应的资源。

```yaml
kind: Pod
apiVersion: v1
metadata:
  name: higress-demo-app
  namespace: default
  labels:
    app: higress-demo
spec:
  containers:
  - name: higress-demo-app
    image: mendhak/http-https-echo:29
---
kind: Service
apiVersion: v1
metadata:
  name: higress-demo-service
  namespace: default
spec:
  selector:
    app: higress-demo
  ports:
  - port: 8080
```

## 3.2 代码编写

这里的目标是创建一个路由，使 `http://www.test.com/` 这个 URL 指向我们刚刚创建的 `higress-demo-service`。

### 第一步：配置依赖

根据项目所使用的构建工具来添加 Higress Admin SDK 依赖：

```xml
<dependency>
    <groupId>io.higress.api</groupId>
    <artifactId>higress-admin-sdk</artifactId>
    <version>0.0.2</version>
</dependency>
```

```
implementation 'io.higress.api:higress-admin-sdk:0.0.2'
```

### 第二步：创建 Higress SDK 实例

```java
String kubeConfigFile = Paths.get(System.getProperty("user.home"), "/.kube/config").toString();
HigressServiceConfig config = HigressServiceConfig.builder().withKubeConfigPath(kubeConfigFile).build();
HigressServiceProvider provider = HigressServiceProvider.create(config);
```

这里我们使用的是 K8s 集群外的配置方式，所以需要设置 kubeConfig 文件的路径，以便 SDK 操作 K8s 内的各类资源。

### 第二步：创建域名

这里我们使用 SDK 中的 `DomainService` 来创建一个 `www.test.com` 域名，并将该域名设置为只开放 HTTP 访问。

```java
Domain domain = Domain.builder().name("www.test.com").enableHttps(Domain.EnableHttps.OFF).build();
provider.domainService().add(domain);
```

### 第三步：创建路由

这里我们使用 SDK 中的 `DomainService` 来创建一个名为 `higress-demo` 的路由。路由绑定 `www.test.com` 域名，匹配所有以 `/` 开头的请求，并将请求转发至 `higress-demo-service.default.svc.cluster.local` 服务的 8080 端口。

```java
Route route = Route.builder()
        .name("higress-demo")
        .domains(Collections.singletonList("www.test.com"))
        .path(RoutePredicate.builder()
                .matchType(RoutePredicateTypeEnum.PRE.name())
                .matchValue("/")
                .build())
        .services(Collections.singletonList(
                UpstreamService.builder()
                        .name("higress-demo-service.default.svc.cluster.local:8080")
                        .build()
        )).build();
provider.routeService().add(route);
```

## 3.3 测试验证

执行编写好的代码：确认一切正常。然后在 Shell 中执行以下命令，检查请求路由情况。

```bash
curl -svk http://localhost/ -H "Host: www.test.com"
```

能够以 JSON 格式返回请求的详细信息就说明路由配置已经可以正常工作。

```json
{
  "path": "/",
  "headers": {
    "host": "www.test.com",
    "user-agent": "curl/8.4.0",
    "accept": "*/*",
    "x-forwarded-for": "10.42.0.230",
    "x-forwarded-proto": "http",
    "x-envoy-internal": "true",
    "x-request-id": "4a3db96b-c46c-4c8a-a60f-a513f258736d",
    "x-envoy-decorator-operation": "higress-demo-service.default.svc.cluster.local:8080/*",
    "x-envoy-attempt-count": "1",
    "x-b3-traceid": "a426d189c027371957f008c2cb2e9e8f",
    "x-b3-spanid": "57f008c2cb2e9e8f",
    "x-b3-sampled": "0",
    "req-start-time": "1707363093608",
    "original-host": "www.test.com"
  },
  "method": "GET",
  "body": "",
  "fresh": false,
  "hostname": "www.test.com",
  "ip": "10.42.0.230",
  "ips": [
    "10.42.0.230"
  ],
  "protocol": "http",
  "query": {},
  "subdomains": [
    "www"
  ],
  "xhr": false,
  "os": {
    "hostname": "higress-demo-app"
  },
  "connection": {}
}
```

## 4. 总结

目前 Higress Admin SDK 支持的功能还比较简单。未来社区也会在进一步着力增强 Higress 的治理侧功能，SDK 的能力也会不断完善。大家对 SDK 和 Console 有任何疑问和建议，都欢迎在 [GitHub](https://github.com/higress-group/higress-console) 上提出。感谢大家的支持！

以上实操过程的项目代码可以在这里下载：[下载链接](/file/20240208_higress-admin-sdk-demo.zip)