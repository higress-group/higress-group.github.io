---
title: Higress 0.7.0 版本发布：GA 进入倒计时
keywords: [higress]
description: Higress 0.7.0 版本介绍
author: 澄潭
date: 2023-03-20
---

## 进展概要

1. Higress 控制台正式 release，涵盖 Higress 的服务/路由/域名/证书管理能力，并提供开箱即用的可观测功能
2. 安装/升级 Higress 时支持自动安装对应版本的 Higress Console，避免版本不适配的问题
3. 支持开启 Istio API，实现更多复杂的功能，并且也可以用于平滑替换 Istio Ingress Gateway


## 版本特性

### Higress 控制台

现在通过 helm 命令安装 Higress 时将自动安装对应版本的 Higress Console, 这里通过 `higress-console.domain` 参数，可以指定控制台的域名。

```bash
# 已经添加过 repo 的，请执行 helm repo update
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io
```

![image](/img/user/quickstart/zh-cn/console-credentials.png)

注意：安装完成后会输出一段文本，其中包含获取控制台登录信息的命令。请执行该命令并记录用户名和密码。

![image](/img/user/quickstart/zh-cn/login.png)

正式环境部署时，建议控制台开启强制 HTTPS 访问，具体操作方式是，在 higress-system 命名空间下先创建好 TLS 证书和私钥对应的 secret，例如：

```yaml
apiVersion: v1
kind: Secret
type: kubernetes.io/tls
data:
  tls.crt: -----BEGIN CERTIFICATE-----...
  tls.key: -----BEGIN RSA PRIVATE KEY-----...
metadata:
  name: my-tls-secret
  namespace: higress-system
```

然后通过下面 helm 命令开启强制 HTTPS 访问

```bash
helm upgrade higress -n higress-system higress.io/higress --set higress-console.tlsSecretName=my-tls-secret
```

如果希望启用 Higress 自带的 Prometheus&Grafana，可以通过下面 helm 命令进行安装：

```bash
helm upgrade higress -n higress-system higress.io/higress --set higress-console.o11y.enabled=true
```

这样 Higress 控制台就可以看到自带的可观测大盘了：

![image](https://img.alicdn.com/imgextra/i3/O1CN01bUCXjy275GLq7ralt_!!6000000007745-0-tps-3532-2022.jpg)

当然，你也可以对接已有的 Prometheus&Grafana，使用这份 Higress 官方提供的 Dashboard 配置即可：https://higress.io/grafana/dashboard.json

可以登陆 Higress 控制台 Demo 试用现有所有功能: http://demo.higress.io

### 开启 Istio API

通过开启 Istio API，可以实现使用 Higress 平滑替换 Istio Ingress Gateway，具体 helm 命令如下：

```bash
helm upgrade higress -n higress-system higress.io/higress --set global.enableIstioAPI=true
```

基于 Istio API，可以实现目前 Higress 还未提供相应 Ingress 注解的能力，例如基于 Istio EnvoyFilter 来实现 HTTP to Dubbo 的协议转换配置方式：

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: EnvoyFilter
metadata:
  name: http-dubbo-transcoder
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
```

上述配置比较复杂，原因是为了方便 Envoy 数据面程序逻辑处理而设计的 Schema。目前 Higress 社区已经在设计更方便 Ingress 配置使用的 CRD，后续也会在 Higress 控制台上提供对应的配置功能。


## GA 版本规划

Higress 预计将在3月底/4月初发布首个 GA 版本, 这个版本的主要规划如下：

1. 实现 HTTP to Dubbo 协议转换的控制面配置简化
2. Higress 控制台提供 Wasm 插件能力，支持配置自定义插件
3. 推出第一版 Higress Admin API，可以被其他平台/工具集成
4. 全面完善 Higress 官网文档，覆盖 Higress 全部功能的详细说明


## Higress 社区

欢迎认领 Higress Issue 任务：https://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22

完成一定数量的 Issues 就可以成为 Higress Committer，也有机会获得开源社区的礼物和荣誉🏆

欢迎加入 Higress 社区群，及时了解更多 Higress 动向：

![](https://img.alicdn.com/imgextra/i4/O1CN01xutJV11aSGvdgBHpC_!!6000000003328-0-tps-720-405.jpg)
