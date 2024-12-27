---
title: Wasm 生效原理
keywords: [Higress]
---


# Wasm 生效原理

这一章主要介绍 Wasm 的生效原理包括全局/路由/域名/服务级别生效原理、Wasm插件的 phase & priority、以及 Wasm 插件分发的原理。

## 1 测试插件链结构

这里以 custom-response、transformer、key-auth、easy-logger 四个插件组成插件链为例，介绍 Wasm插件的生效原理。其插件链如下图:

![img](https://img.alicdn.com/imgextra/i2/O1CN01sSmytv1DfnczmUj0j_!!6000000000244-2-tps-1830-460.png)


## 2 全局/路由/域名/服务级生效原理

以插件 custom-response 为例，其插件配置如下：
```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: custom-response
  namespace: higress-system
spec:
  priority: 200
  phase: AUTHN
  # 配置会全局生效，但如果被下面规则匹配到，则会改为执行命中规则的配置
  defaultConfig:
    headers:
      - key1=value1
    "body": "{\"hello\":\"foo\"}"
  matchRules:
    # 域名级生效配置
    - domain:
        - foo.com
      config:
        headers:
          - key2=value2
        "body": "{\"hello\":\"foo\"}"
    - ingress:
        - higress-course/ingress-bar
      # higress-course 命名空间下名为 ingress-bar 的 ingress 会应用下面这个配置
      config:
        headers:
          - key3=value3
        "body": "{\"hello\":\"bar\"}"
    - service:
        - echo-server.higress-course.svc.cluster.local
      config:
        headers:
          - key4=value4
        "body": "{\"hello\":\"echo server\"}"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
  imagePullPolicy: Always
```

Higress Controller 控制面会把 Higress WasmPlugin 配置转换成 Istio WasmPlugin 配置，同时通过 MCP over Xds 同步到 Istio Discovery， 然后下发到 Envoy 。
这里可以通过 Higress Controller Debug 接口查看转换后的 Istio WasmPlugin 配置：

```shell
kubectl exec <higress-controller-pod> -c higress-core -n higress-system -- curl http://127.0.0.1:8888/debug/configz
```
以下是 custom-response 插件转换成 Istio WasmPlugin YAML 配置如下：
```yaml
kind: WasmPlugin
apiVersion: extensions.istio.io/v1alpha1
metadata:
  name: custom-response
  namespace: higress-system
spec:
  imagePullPolicy: Always
  phase: AUTHN
  pluginConfig:
    _rules_:
      - _match_domain_:
          - foo.com
        body: '{"hello":"foo"}'
        headers:
          - key2=value2
      - _match_route_:
          - higress-course/ingress-bar
        body: '{"hello":"bar"}'
        headers:
          - key3=value3
      - _match_service_:
          - echo-server.higress-course.svc.cluster.local
        body: '{"hello":"echo server"}'
        headers:
          - key4=value4
    body: '{"hello":"foo"}'
    headers:
      - key1=value1
  priority: 200
  selector:
    matchLabels:
      higress: higress-system-higress-gateway
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
```
发现在 pluginConfig 中增加了 `_rules_` 规则列表，规则中可以指定匹配方式，并填写对应生效的配置:
- `_match_domain_`：匹配域名生效，填写域名即可，支持通配符。
- `_match_route_`：匹配 Ingress 生效，匹配格式为：Ingress 所在命名空间 + "/" + Ingress 名称。
- `_match_service_`：匹配服务生效，填写服务即可，支持通配符。

Higress Controller 控制面转换代码逻辑在 `pkg/ingress/config/ingress_config.go` 文件的 `convertIstioWasmPlugin` func 中实现，其实现代码逻辑比较简单。
```go
func (m *IngressConfig) convertIstioWasmPlugin(obj *higressext.WasmPlugin) (*extensions.WasmPlugin, error) {
	...
}
```

同时在第`十六章 Higress 插件 Go SDK 与处理流程`中介绍 `CommonPluginCtx` 插件上下文在插件启动时候解析全局/路由/域名/服务级配置，其代码逻辑在 `plugins/wasm-go/pkg/matcher/rule_matcher.go` 文件的 `ParseRuleConfig` func 中实现。

```go
func (m *RuleMatcher[PluginConfig]) ParseRuleConfig(config gjson.Result,
	parsePluginConfig func(gjson.Result, *PluginConfig) error,
	parseOverrideConfig func(gjson.Result, PluginConfig, *PluginConfig) error) error {
	...
}
```
另外在插件 `OnHttpRequestHeaders` 阶段根据当前请求的 `:authority`、`route_name`、`cluster_name` 获取对应的域名、路由、服务级和全局插件配置。其代码逻辑在 `plugins/wasm-go/pkg/matcher/rule_matcher.go` 文件的 `GetMatchConfig` func 中实现。
```go
func (m RuleMatcher[PluginConfig]) GetMatchConfig() (*PluginConfig, error) {
	host, err := proxywasm.GetHttpRequestHeader(":authority")
	...
	routeName, err := proxywasm.GetProperty([]string{"route_name"})
	...
	serviceName, err := proxywasm.GetProperty([]string{"cluster_name"})
	...
}
```
这里代码逻辑相对比较简单，这里就不再赘述了，有兴趣同学可以直接看源代码。

## 3 Wasm插件的 phase 和 priority

Wasm 插件 phase 有 `UNSPECIFIED_PHASE`、`AUTHN`、`AUTHZ`、`STATS` 四个值，分别对应插件过滤器链的末端、Istio 认证过滤器之前、Istio 授权过滤器之前且在 Istio 认证过滤器之后、Istio 统计过滤器之前且在 Istio 授权过滤器之后。
同时在相同 phase 情况下，priority 值越大，插件在插件链位置越靠前。 关于认证和授权相关内容可以参考 [Istio 安全](https://istio.io/latest/zh/docs/concepts/security/)官方文档。其插件链结构如下图：

![img](https://img.alicdn.com/imgextra/i4/O1CN017aWyas29NFISP7P4o_!!6000000008055-2-tps-1274-1114.png)

可以通过导出 Envoy 配置查看插件链结构：

```shell
kubectl exec <higress-gateway-pod> -n higress-system -- curl http://127.0.0.1:15000/config_dump
```
其 Enovy 插件链结构 YAML 格式如下：
```yaml
name: envoy.filters.network.http_connection_manager
typed_config:
  "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
  stat_prefix: outbound_0.0.0.0_80
  http_filters:
    - name: envoy.filters.http.cors
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors
    - name: higress-system.custom-response
      config_discovery:
        config_source:
          ads: {}
          initial_fetch_timeout: 0s
          resource_api_version: V3
        default_config:
          "@type": type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
        apply_default_config_without_warming: true
        type_urls:
          - type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
          - type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
    - name: higress-system.wasm-transformer
      config_discovery:
        config_source:
          ads: {}
          initial_fetch_timeout: 0s
          resource_api_version: V3
        default_config:
          "@type": type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
        apply_default_config_without_warming: true
        type_urls:
          - type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
          - type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
    - name: envoy.filters.http.rbac
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.http.rbac.v3.RBAC
    - name: envoy.filters.http.local_ratelimit
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.http.local_ratelimit.v3.LocalRateLimit
        stat_prefix: http_local_rate_limiter
    - name: higress-system.wasm-keyauth
      config_discovery:
        config_source:
          ads: {}
          initial_fetch_timeout: 0s
          resource_api_version: V3
        default_config:
          "@type": type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
        apply_default_config_without_warming: true
        type_urls:
          - type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
          - type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
    - name: higress-system.easy-logger
      config_discovery:
        config_source:
          ads: {}
          initial_fetch_timeout: 0s
          resource_api_version: V3
        default_config:
          "@type": type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
        apply_default_config_without_warming: true
        type_urls:
          - type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
          - type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
    - name: envoy.filters.http.fault
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.http.fault.v3.HTTPFault
    - name: envoy.filters.http.router
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
```

## 4 Wasm 插件分发的原理

Wasm 插件是通过 OCI 实现了 wasm 文件更新，直接热加载，不会导致任何连接中断，业务流量完全无损。其插件分发流程如下图：

![img](https://img.alicdn.com/imgextra/i4/O1CN01rx9nle1TI0uWQqI3Q_!!6000000002358-0-tps-1498-1058.jpg)

OCI 分发流程如下：

1. 当 Higress WasmPlugin 资源更新时，Higress Core 监听到这个变化，同时把 Higress WasmPlugin 转成 Istio WasmPlugin。
2. Higress Core 将转成 Istio WasmPlugin 通过 MCP Over Xds 推送给 Discovery。
3. Discovery 通过 Pilot Agent 的 ADS 连接，通过 LDS 协议下发给 Plot Agent。
4. Pilot Agent 将 LDS 响应直接代理转发给 Envoy。
5. Envoy 根据 Listener 里插件配置，通过 ECDS (Extension Config Discovery Service) 订阅插件配置。
6. Pilot Agent 代理 ECDS 协议请求到 Discovery, 同时拦截 ECDS 协议响应。
7. Pilot Agent 根据 ECDS 响应里插件 OCI 配置，从 Registry Hub 下载镜像。
8. Pilot Agent 把镜像里插件 Wasm 文件解压到本地，同时修改 ECDS 响应里插件地址到本地 Wasm 文件路径，然后把 ECDS 协议响应返回给 Envoy。
9. Envoy 根据 ECDS 协议响应，加载本地 Wasm 文件。

注意第 5 步没有直接下发插件配置。而是下发 config_discovery 配置。下面是 Envoy 导出 `custom-response` 插件配置。

```yaml
- name: higress-system.custom-response
  config_discovery:
    config_source:
      ads: {}
      initial_fetch_timeout: 0s
      resource_api_version: V3
    default_config:
      "@type": type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
    apply_default_config_without_warming: true
    type_urls:
      - type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
      - type.googleapis.com/envoy.extensions.filters.http.composite.v3.Composite
```
关于 ECDS 配置，可以参考 [Envoy ECDS](https://www.envoyproxy.io/docs/envoy/latest/api-v3/service/extension/v3/config_discovery.proto)。


## 参考
- [1][Higress 实战：30 行代码写一个 Wasm Go插件](https://mp.weixin.qq.com/s/daYa4MSo3XelpjnIFuxhKw)

