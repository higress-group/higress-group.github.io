---
title: Higress 对接 Dubbo 服务
keywords: [Dubbo,discovery]
description: 实现 Dubbo 服务发现和路由
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md
---

# Higress 对接 Dubbo 服务

Higress提供了从HTTP协议到Dubbo协议进行转换的功能，用户通过配置协议转换，可以将一个Dubbo服务以HTTP接口暴露出来，从而用HTTP请求实现对Dubbo接口的调用。本文将通过一个示例来介绍如何用Higress配置HTTP到Dubbo的协议转换。

## 前提条件
1. Higress目前支持的Dubbo框架的版本为2.x。若您使用Dubbo3.0，要求使用dubbo协议（目前暂不支持Triple协议，Tiple协议底层基于gRPC，可以直接代理，无需做协议转化）。

## 部署Dubbo服务

您可以选用Naocs或者Zookeeper任意一种作为注册中心，部署一个Dubbo服务。具体可以参考以下文档：

https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/nacos/

https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/zookeeper/

假设我们现在已经部署了如下一个Dubbo服务，其服务名为com.alibaba.nacos.example.dubbo.service.DemoService，并指定了该服务的version为“1.0.0”，group为“dev”，下面我们将介绍如何为该服务配置协议转换。

```java
package com.alibaba.nacos.example.dubbo.service;

public interface DemoService {
    String sayName(String name);
}
```
     
## 通过Ingress转发请求到Dubbo服务
Higress可以通过[McpBridge](./mcp-bridge.md)来对接Nacos或者Zookeeper作为服务来源。这里我们以Nacos为例，假设Naocs的ip地址为192.xxx.xx.32，我们可以在K8s集群中apply以下资源来配置McpBridge
```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: 192.xxx.xx.32
    nacosGroups:
    - DEFAULT_GROUP
    name: nacos-service-resource
    port: 8848
    type: nacos2
```
通过McpBridge，我们可以直接从Nacos中发现Dubbo服务，并为其创建路由。

接下来我们创建如下Ingress，从而创建一条指向Dubbo服务的HTTP路由：
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos
    higress.io/rpc-destination-name: httproute-http2rpc-demo
  name: httproute-http2rpc-demo-ingress
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /dubbo
        pathType: Prefix
```
这样，path前缀为/dubbo的请求就会被路由到我们刚刚创建的Dubbo服务上。

## 通过Higress自定义的CRD-Http2Rpc配置HTTP到Dubbo的协议转换规则
经过上述步骤，我们已经通过Ingress将path前缀为/dubbo的请求路由到我们的Dubbo服务上。但光是这样是无法正常通信的，因为Dubbo服务使用的是定制的Dubbo协议，无法天然与HTTP协议进行兼容。因此接下来我们还要配置具体的HTTP到Dubbo的协议转换规则，从而实现用HTTP请求来调用Dubbo服务。

```yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "GET"
      httpPath: "/dubbo/hello"
      params:
      - paramKey: p
        paramSource: QUERY
        paramType: "java.lang.String"
```
在以上Http2Rpc中，我们配置了将path为/dubbo/hello的HTTP请求转发到Dubbo服务com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev中，并调用其sayName方法，而该方法的参数则通过HTTP url中的的query参数p来指定。

## 请求验证
通过以上配置，我们就可以执行以下curl命令来调用这个dubbo服务了：
```bash
$curl "localhost/dubbo/hello?p=abc" 
{"result":"Service [name :demoService , port : 20880] sayName(\"abc\") : Hello,abc"}
```

## 将整个请求body作为方法参数
Http2Rpc支持将整个请求body序列化为Dubbo方法的入参，如下所示：

```yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "POST"
      httpPath: "/dubbo/hello"
      paramFromEntireBody:
        paramType: "java.lang.String"
```
通过paramFromEntireBody字段，即可将整个请求body序列化为Dubbo方法的入参。参数的类型通过paramFromEntireBody.paramType字段来指定。该场景适用于Dubbo方法只有一个参数的情况，如果同时指定了paramFromEntireBody和params，params字段的内容将被忽略。

通过以上配置，我们可以执行以下命令来调用dubbo服务，注意请求的body必须符合json格式：
```bash
$curl "localhost/dubbo/hello" -X POST -d '"abc"' 
{"result":"Service [name :demoService , port : 20880] sayName(\"abc\") : Hello,abc"}
```


## 配置参考
Http2Rpc的相关配置项参考[HTTP转Dubbo配置说明](./dubbo-http2rpc.md)
