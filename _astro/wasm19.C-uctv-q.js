const e="ebook/zh-cn/wasm19.md",s="docs",o="ebook/zh-cn/wasm19",t=`

# Wasm \u751F\u6548\u539F\u7406

\u8FD9\u4E00\u7AE0\u4E3B\u8981\u4ECB\u7ECD Wasm \u7684\u751F\u6548\u539F\u7406\u5305\u62EC\u5168\u5C40/\u8DEF\u7531/\u57DF\u540D/\u670D\u52A1\u7EA7\u522B\u751F\u6548\u539F\u7406\u3001Wasm\u63D2\u4EF6\u7684 phase & priority\u3001\u4EE5\u53CA Wasm \u63D2\u4EF6\u5206\u53D1\u7684\u539F\u7406\u3002

## 1 \u6D4B\u8BD5\u63D2\u4EF6\u94FE\u7ED3\u6784

\u8FD9\u91CC\u4EE5 custom-response\u3001transformer\u3001key-auth\u3001easy-logger \u56DB\u4E2A\u63D2\u4EF6\u7EC4\u6210\u63D2\u4EF6\u94FE\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD Wasm\u63D2\u4EF6\u7684\u751F\u6548\u539F\u7406\u3002\u5176\u63D2\u4EF6\u94FE\u5982\u4E0B\u56FE:

![img](https://img.alicdn.com/imgextra/i2/O1CN01sSmytv1DfnczmUj0j_!!6000000000244-2-tps-1830-460.png)


## 2 \u5168\u5C40/\u8DEF\u7531/\u57DF\u540D/\u670D\u52A1\u7EA7\u751F\u6548\u539F\u7406

\u4EE5\u63D2\u4EF6 custom-response \u4E3A\u4F8B\uFF0C\u5176\u63D2\u4EF6\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: custom-response
  namespace: higress-system
spec:
  priority: 200
  phase: AUTHN
  # \u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E
  defaultConfig:
    headers:
      - key1=value1
    "body": "{\\"hello\\":\\"foo\\"}"
  matchRules:
    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
    - domain:
        - foo.com
      config:
        headers:
          - key2=value2
        "body": "{\\"hello\\":\\"foo\\"}"
    - ingress:
        - higress-course/ingress-bar
      # higress-course \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A ingress-bar \u7684 ingress \u4F1A\u5E94\u7528\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
      config:
        headers:
          - key3=value3
        "body": "{\\"hello\\":\\"bar\\"}"
    - service:
        - echo-server.higress-course.svc.cluster.local
      config:
        headers:
          - key4=value4
        "body": "{\\"hello\\":\\"echo server\\"}"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
  imagePullPolicy: Always
\`\`\`

Higress Controller \u63A7\u5236\u9762\u4F1A\u628A Higress WasmPlugin \u914D\u7F6E\u8F6C\u6362\u6210 Istio WasmPlugin \u914D\u7F6E\uFF0C\u540C\u65F6\u901A\u8FC7 MCP over Xds \u540C\u6B65\u5230 Istio Discovery\uFF0C \u7136\u540E\u4E0B\u53D1\u5230 Envoy \u3002
\u8FD9\u91CC\u53EF\u4EE5\u901A\u8FC7 Higress Controller Debug \u63A5\u53E3\u67E5\u770B\u8F6C\u6362\u540E\u7684 Istio WasmPlugin \u914D\u7F6E\uFF1A

\`\`\`shell
kubectl exec <higress-controller-pod> -c higress-core -n higress-system -- curl http://127.0.0.1:8888/debug/configz
\`\`\`
\u4EE5\u4E0B\u662F custom-response \u63D2\u4EF6\u8F6C\u6362\u6210 Istio WasmPlugin YAML \u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`yaml
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
\`\`\`
\u53D1\u73B0\u5728 pluginConfig \u4E2D\u589E\u52A0\u4E86 \`_rules_\` \u89C4\u5219\u5217\u8868\uFF0C\u89C4\u5219\u4E2D\u53EF\u4EE5\u6307\u5B9A\u5339\u914D\u65B9\u5F0F\uFF0C\u5E76\u586B\u5199\u5BF9\u5E94\u751F\u6548\u7684\u914D\u7F6E:
- \`_match_domain_\`\uFF1A\u5339\u914D\u57DF\u540D\u751F\u6548\uFF0C\u586B\u5199\u57DF\u540D\u5373\u53EF\uFF0C\u652F\u6301\u901A\u914D\u7B26\u3002
- \`_match_route_\`\uFF1A\u5339\u914D Ingress \u751F\u6548\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A\uFF1AIngress \u6240\u5728\u547D\u540D\u7A7A\u95F4 + "/" + Ingress \u540D\u79F0\u3002
- \`_match_service_\`\uFF1A\u5339\u914D\u670D\u52A1\u751F\u6548\uFF0C\u586B\u5199\u670D\u52A1\u5373\u53EF\uFF0C\u652F\u6301\u901A\u914D\u7B26\u3002

Higress Controller \u63A7\u5236\u9762\u8F6C\u6362\u4EE3\u7801\u903B\u8F91\u5728 \`pkg/ingress/config/ingress_config.go\` \u6587\u4EF6\u7684 \`convertIstioWasmPlugin\` func \u4E2D\u5B9E\u73B0\uFF0C\u5176\u5B9E\u73B0\u4EE3\u7801\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\u3002
\`\`\`golang
func (m *IngressConfig) convertIstioWasmPlugin(obj *higressext.WasmPlugin) (*extensions.WasmPlugin, error) {
	...
}
\`\`\`

\u540C\u65F6\u5728\u7B2C\`\u5341\u516D\u7AE0 Higress \u63D2\u4EF6 Go SDK \u4E0E\u5904\u7406\u6D41\u7A0B\`\u4E2D\u4ECB\u7ECD \`CommonPluginCtx\` \u63D2\u4EF6\u4E0A\u4E0B\u6587\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u5019\u89E3\u6790\u5168\u5C40/\u8DEF\u7531/\u57DF\u540D/\u670D\u52A1\u7EA7\u914D\u7F6E\uFF0C\u5176\u4EE3\u7801\u903B\u8F91\u5728 \`plugins/wasm-go/pkg/matcher/rule_matcher.go\` \u6587\u4EF6\u7684 \`ParseRuleConfig\` func \u4E2D\u5B9E\u73B0\u3002

\`\`\`golang
func (m *RuleMatcher[PluginConfig]) ParseRuleConfig(config gjson.Result,
	parsePluginConfig func(gjson.Result, *PluginConfig) error,
	parseOverrideConfig func(gjson.Result, PluginConfig, *PluginConfig) error) error {
	...
}
\`\`\`
\u53E6\u5916\u5728\u63D2\u4EF6 \`OnHttpRequestHeaders\` \u9636\u6BB5\u6839\u636E\u5F53\u524D\u8BF7\u6C42\u7684 \`:authority\`\u3001\`route_name\`\u3001\`cluster_name\` \u83B7\u53D6\u5BF9\u5E94\u7684\u57DF\u540D\u3001\u8DEF\u7531\u3001\u670D\u52A1\u7EA7\u548C\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u3002\u5176\u4EE3\u7801\u903B\u8F91\u5728 \`plugins/wasm-go/pkg/matcher/rule_matcher.go\` \u6587\u4EF6\u7684 \`GetMatchConfig\` func \u4E2D\u5B9E\u73B0\u3002
\`\`\`golang
func (m RuleMatcher[PluginConfig]) GetMatchConfig() (*PluginConfig, error) {
	host, err := proxywasm.GetHttpRequestHeader(":authority")
	...
	routeName, err := proxywasm.GetProperty([]string{"route_name"})
	...
	serviceName, err := proxywasm.GetProperty([]string{"cluster_name"})
	...
}
\`\`\`
\u8FD9\u91CC\u4EE3\u7801\u903B\u8F91\u76F8\u5BF9\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u4E86\uFF0C\u6709\u5174\u8DA3\u540C\u5B66\u53EF\u4EE5\u76F4\u63A5\u770B\u6E90\u4EE3\u7801\u3002

## 3 Wasm\u63D2\u4EF6\u7684 phase \u548C priority

Wasm \u63D2\u4EF6 phase \u6709 \`UNSPECIFIED_PHASE\`\u3001\`AUTHN\`\u3001\`AUTHZ\`\u3001\`STATS\` \u56DB\u4E2A\u503C\uFF0C\u5206\u522B\u5BF9\u5E94\u63D2\u4EF6\u8FC7\u6EE4\u5668\u94FE\u7684\u672B\u7AEF\u3001Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u524D\u3001Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u540E\u3001Istio \u7EDF\u8BA1\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u540E\u3002
\u540C\u65F6\u5728\u76F8\u540C phase \u60C5\u51B5\u4E0B\uFF0Cpriority \u503C\u8D8A\u5927\uFF0C\u63D2\u4EF6\u5728\u63D2\u4EF6\u94FE\u4F4D\u7F6E\u8D8A\u9760\u524D\u3002 \u5173\u4E8E\u8BA4\u8BC1\u548C\u6388\u6743\u76F8\u5173\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 [Istio \u5B89\u5168](https://istio.io/latest/zh/docs/concepts/security/)\u5B98\u65B9\u6587\u6863\u3002\u5176\u63D2\u4EF6\u94FE\u7ED3\u6784\u5982\u4E0B\u56FE\uFF1A

![img](https://img.alicdn.com/imgextra/i4/O1CN017aWyas29NFISP7P4o_!!6000000008055-2-tps-1274-1114.png)

\u53EF\u4EE5\u901A\u8FC7\u5BFC\u51FA Envoy \u914D\u7F6E\u67E5\u770B\u63D2\u4EF6\u94FE\u7ED3\u6784\uFF1A

\`\`\`shell
kubectl exec <higress-gateway-pod> -n higress-system -- curl http://127.0.0.1:15000/config_dump
\`\`\`
\u5176 Enovy \u63D2\u4EF6\u94FE\u7ED3\u6784 YAML \u683C\u5F0F\u5982\u4E0B\uFF1A
\`\`\`yaml
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
\`\`\`

## 4 Wasm \u63D2\u4EF6\u5206\u53D1\u7684\u539F\u7406

Wasm \u63D2\u4EF6\u662F\u901A\u8FC7 OCI \u5B9E\u73B0\u4E86 wasm \u6587\u4EF6\u66F4\u65B0\uFF0C\u76F4\u63A5\u70ED\u52A0\u8F7D\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4EFB\u4F55\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u4E1A\u52A1\u6D41\u91CF\u5B8C\u5168\u65E0\u635F\u3002\u5176\u63D2\u4EF6\u5206\u53D1\u6D41\u7A0B\u5982\u4E0B\u56FE\uFF1A

![img](https://img.alicdn.com/imgextra/i4/O1CN01rx9nle1TI0uWQqI3Q_!!6000000002358-0-tps-1498-1058.jpg)

OCI \u5206\u53D1\u6D41\u7A0B\u5982\u4E0B\uFF1A

1. \u5F53 Higress WasmPlugin \u8D44\u6E90\u66F4\u65B0\u65F6\uFF0CHigress Core \u76D1\u542C\u5230\u8FD9\u4E2A\u53D8\u5316\uFF0C\u540C\u65F6\u628A Higress WasmPlugin \u8F6C\u6210 Istio WasmPlugin\u3002
2. Higress Core \u5C06\u8F6C\u6210 Istio WasmPlugin \u901A\u8FC7 MCP Over Xds \u63A8\u9001\u7ED9 Discovery\u3002
3. Discovery \u901A\u8FC7 Pilot Agent \u7684 ADS \u8FDE\u63A5\uFF0C\u901A\u8FC7 LDS \u534F\u8BAE\u4E0B\u53D1\u7ED9 Plot Agent\u3002
4. Pilot Agent \u5C06 LDS \u54CD\u5E94\u76F4\u63A5\u4EE3\u7406\u8F6C\u53D1\u7ED9 Envoy\u3002
5. Envoy \u6839\u636E Listener \u91CC\u63D2\u4EF6\u914D\u7F6E\uFF0C\u901A\u8FC7 ECDS (Extension Config Discovery Service) \u8BA2\u9605\u63D2\u4EF6\u914D\u7F6E\u3002
6. Pilot Agent \u4EE3\u7406 ECDS \u534F\u8BAE\u8BF7\u6C42\u5230 Discovery, \u540C\u65F6\u62E6\u622A ECDS \u534F\u8BAE\u54CD\u5E94\u3002
7. Pilot Agent \u6839\u636E ECDS \u54CD\u5E94\u91CC\u63D2\u4EF6 OCI \u914D\u7F6E\uFF0C\u4ECE Registry Hub \u4E0B\u8F7D\u955C\u50CF\u3002
8. Pilot Agent \u628A\u955C\u50CF\u91CC\u63D2\u4EF6 Wasm \u6587\u4EF6\u89E3\u538B\u5230\u672C\u5730\uFF0C\u540C\u65F6\u4FEE\u6539 ECDS \u54CD\u5E94\u91CC\u63D2\u4EF6\u5730\u5740\u5230\u672C\u5730 Wasm \u6587\u4EF6\u8DEF\u5F84\uFF0C\u7136\u540E\u628A ECDS \u534F\u8BAE\u54CD\u5E94\u8FD4\u56DE\u7ED9 Envoy\u3002
9. Envoy \u6839\u636E ECDS \u534F\u8BAE\u54CD\u5E94\uFF0C\u52A0\u8F7D\u672C\u5730 Wasm \u6587\u4EF6\u3002

\u6CE8\u610F\u7B2C 5 \u6B65\u6CA1\u6709\u76F4\u63A5\u4E0B\u53D1\u63D2\u4EF6\u914D\u7F6E\u3002\u800C\u662F\u4E0B\u53D1 config_discovery \u914D\u7F6E\u3002\u4E0B\u9762\u662F Envoy \u5BFC\u51FA \`custom-response\` \u63D2\u4EF6\u914D\u7F6E\u3002

\`\`\`yaml
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
\`\`\`
\u5173\u4E8E ECDS \u914D\u7F6E\uFF0C\u53EF\u4EE5\u53C2\u8003 [Envoy ECDS](https://www.envoyproxy.io/docs/envoy/latest/api-v3/service/extension/v3/config_discovery.proto)\u3002


## \u53C2\u8003
- [1][Higress \u5B9E\u6218\uFF1A30 \u884C\u4EE3\u7801\u5199\u4E00\u4E2A Wasm Go\u63D2\u4EF6](https://mp.weixin.qq.com/s/daYa4MSo3XelpjnIFuxhKw)

`,i={title:"Wasm \u751F\u6548\u539F\u7406",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/zh-cn/wasm19.md",rawData:void 0};export{n as _internal,t as body,s as collection,i as data,e as id,o as slug};
