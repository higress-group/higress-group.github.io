---
title: 实现 Dubbo 服务发现和路由
keywords: [Dubbo,discovery]
description: 实现 Dubbo 服务发现和路由
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md
---

# 实现 Dubbo 服务发现和路由

Higress提供了从HTTP协议到Dubbo协议进行转换的功能，用户通过配置协议转换，可以将一个Dubbo服务以HTTP接口暴露出来，从而用HTTP请求实现对Dubbo接口的调用。本文将通过示例来介绍如何用Higress配置HTTP到Dubbo的协议转换。

## 前提条件
Higress目前支持的Dubbo框架的版本为2.x。若您使用Dubbo3.0，要求使用dubbo协议（目前暂不支持Triple协议）。

---

假设我们有如下一个Dubbo服务，并指定了该服务的version为“1.0.0”，group为“dev”，下面我们将介绍如何为该服务配置协议转换。

```java
package com.alibaba.nacos.example.dubbo.service;

public interface DemoService {
    String sayName(String name);
}
```

## 为Dubbo服务配置路由
### 方法一：通过Dubbo服务的Ip和port实现Dubbo服务发现和路由
1. 创建以下ServiceEntry资源，其中指定了Dubbo服务的Ip与端口号：
```yaml
apiVersion: networking.istio.io/v1beta1
kind: ServiceEntry
metadata:
  name: dubbo
  namespace: higress-system
spec:
  endpoints:
  # 此处更换为自己dubbo服务的ip
  - address: xxx.xxx.xxx.xxx
    ports:
      http: 20880
  hosts:
  - dubbo.static
  location: MESH_EXTERNAL
  ports:
  - name: http
    number: 20880
    protocol: HTTP
  resolution: STATIC
```
2. 创建以下VirtualService资源，为Dubbo服务创建一条名为test的路由
```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: global
  namespace: higress-system
spec:
  gateways:
  - higress-system/global
  hosts:
  - '*'
  http:
  - match:
    - ignoreUriCase: false
      uri:
        prefix: /dubbo
    name: test
    route:
    - destination:
        host: dubbo.static
        port:
          number: 20880
```
### 方法二：通过对接Nacos/Zookeeper注册中心实现Dubbo服务发现和路由
TBD
## 通过EnvoyFilter配置HTTP到Dubbo协议转换规则
在为Dubbo服务创建了路由之后，需要配置具体的协议转换规则。Higress通过Envoy的HTTP Filter实现从HTTP协议到Dubbo协议的转换，本示例通过创建如下EnvoyFilter资源来对协议转换规则进行配置。
```yaml
apiVersion: networking.istio.io/v1alpha3
kind: EnvoyFilter
metadata:
  name: http-dubbo-transcoder-test
  namespace: higress-system
spec:
  configPatches:
  - applyTo: HTTP_FILTER
    match:
      context: GATEWAY
      listener:
        filterChain:
          filter:
            name: envoy.filters.network.http_connection_manager
            subFilter:
              name: envoy.filters.http.router
    patch:
      operation: INSERT_BEFORE
      value:
        name: envoy.filters.http.http_dubbo_transcoder
        typed_config:
          '@type': type.googleapis.com/udpa.type.v1.TypedStruct
          type_url: type.googleapis.com/envoy.extensions.filters.http.http_dubbo_transcoder.v3.HttpDubboTranscoder
  - applyTo: HTTP_ROUTE
    match:
      context: GATEWAY
      routeConfiguration:
        vhost:
          route:
            name: test
    patch:
      operation: MERGE
      value:
        route:
          upgrade_configs:
          - connect_config:
              allow_post: true
            upgrade_type: CONNECT
        typed_per_filter_config:
          envoy.filters.http.http_dubbo_transcoder:
            '@type': type.googleapis.com/udpa.type.v1.TypedStruct
            type_url: type.googleapis.com/envoy.extensions.filters.http.http_dubbo_transcoder.v3.HttpDubboTranscoder
            value:
              request_validation_options:
                reject_unknown_method: true
                reject_unknown_query_parameters: true
              services_mapping:
              - group: dev
                method_mapping:
                - name: sayName
                  parameter_mapping:
                  - extract_key: p
                    extract_key_spec: ALL_QUERY_PARAMETER
                    mapping_type: java.lang.String
                  passthrough_setting:
                    passthrough_all_headers: true
                  path_matcher:
                    match_http_method_spec: ALL_GET
                    match_pattern: /dubbo/hello
                name: com.alibaba.nacos.example.dubbo.service.DemoService
                version: 1.0.0
              url_unescape_spec: ALL_CHARACTERS_EXCEPT_RESERVED
  - applyTo: CLUSTER
    match:
      cluster:
        service: dubbo.static
      context: GATEWAY
    patch:
      operation: MERGE
      value:
        upstream_config:
          name: envoy.upstreams.http.dubbo_tcp
          typed_config:
            '@type': type.googleapis.com/udpa.type.v1.TypedStruct
            type_url: type.googleapis.com/envoy.extensions.upstreams.http.dubbo_tcp.v3.DubboTcpConnectionPoolProto
```
## 通过HTTP请求调用Dubbo服务
完成以上配置后，通过curl命令调用sayName方法进行验证：
```bash
curl "localhost/dubbo/hello?p=higress" 
{"result":"Service [name :demoService , port : 20880] sayName(\"higress\") : Hello,higress"}
```
## Filter配置参考
### HttpDubboTranscoder
| 字段                       | 类型                        | 说明                     | 值                                                                                                 |
| -------------------------- | --------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| url_unescape_spec          | enum                        | URL unescaping policy    | 可选值：<br /> - ALL_CHARACTERS_EXCEPT_RESERVED<br />- ALL_CHARACTERS_EXCEPT_SLASH<br />- ALL_CHARACTERS |
| request_validation_options | RequestValidateOptions      | 请求验证选项             |                                                                                                    |
| services_mapping           | list of DubboServiceMapping | 每一项对应了一条映射规则 |                                                                                                    |
### HttpDubboTranscoder.RequestValidateOptions
| 字段                            | 类型 | 说明                                               |
| ------------------------------- | ---- | -------------------------------------------------- |
| reject_unknown_query_parameters | bool | 对于无法成功映射query parameters的请求是否直接拒绝 |
| reject_unknown_method           | bool | 对于无法映射为dubbo服务的请求是否直接拒绝          |
### HttpDubboTranscoder.DubboServiceMapping
| 字段           | 类型                       | 说明                                            | 值                                                          |
| -------------- | -------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| name           | string                     | dubbo服务名                                     | 例如："com.alibaba.nacos.example.dubbo.service.DemoService" |
| version        | string                     | dubbo服务的版本                                 | 例如："1.0.0"                                               |
| group          | string                     | dubbo服务的分组                                 | 例如："dev"                                                 |
| method_mapping | list of DubboMethodMapping | 每一项对应了指定dubbo服务中的某个方法的映射规则 |                                                             |
### HttpDubboTranscoder.DubboMethodMapping
| 字段                | 类型                    | 说明                       | 值            |
| ------------------- | ----------------------- | -------------------------- | ------------- |
| name                | string                  | 方法名                     | 例："sayName" |
| path_matcher        | PathMatcher             | 方法匹配规则               |               |
| parameter_mapping   | lis of ParameterMapping | 每一项对应一个参数映射规则 |               |
| passthrough_setting | PassthroughSetting      | 指定Header透传规则         |               |
### HttpDubboTranscoder.DubboMethodMapping.PathMatcher
| 字段                   | 类型   | 说明                                 | 值                                                                             |
| ---------------------- | ------ | ------------------------------------ | ------------------------------------------------------------------------------ |
| match_pattern          | string | 方法的匹配路径｜例如："/dubbo/hello" |
| match_http_method_spec | enum   | 方法匹配的HTTP Method                | 可选值：<br />-ALL_GET<br />- ALL_POST<br />- ALL_PUT<br />- ALL_DELETE<br />- ALL_PATCH |
### HttpDubboTranscoder.DubboMethodMapping.ParameterMapping
| 字段             | 类型   | 说明                    | 值                                                                            |
| ---------------- | ------ | ----------------------- | ----------------------------------------------------------------------------- |
| extract_key_spec | enum   | 参数提取位置            | 可选值：<br />- ALL_QUERY_PARAMETER<br />- ALL_HEADER<br />- ALL_PATH<br />- ALL_BODY |
| extract_key      | string | 参数提取的key           | 例：my_param                                                                  |
| mapping_type     | string | 参数在dubbo服务中的类型 | 例："java.lang.String"                                                        |
### HttpDubboTranscoder.DubboMethodMapping.PassthroughSetting
配置HTTP Header透传规则，被透传的Header会被放在Dubbo调用的attachment中传给dubbo服务

注：Header的透传规则，此项配置为one of类型，下面两个字段选其一
| 字段                    | 类型           | 说明                                          |
| ----------------------- | -------------- | --------------------------------------------- |
| passthrough_all_headers | bool           | 透传所有Header                                |
| passthrough_headers     | list of string | 透传指定Header，每一项指定了Header中的一个key |