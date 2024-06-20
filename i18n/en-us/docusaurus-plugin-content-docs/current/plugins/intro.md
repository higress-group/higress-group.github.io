---
title: Introduction to the use of Wasm plugins
keywords: [higress,wasm]
description: Introduction to the Higress Wasm plugin
---

## Configure through the Higress console

The Higress console provides 3 entries for plug-in configuration:

1. Global configuration: plug-in market -> select plug-in to configure
2. Domain-level configuration: domain name management->select domain name->click policy->select plug-in to configure
3. Routing-level configuration: Routing configuration->select routing->click policy->select plug-in to configure

The effective priority of these three configurations is: route level > domain name level > global

That is, the global configuration will only take effect for requests that do not match a specific route or domain name

For general plugins, including custom plugins, the routing/domain name level configuration fields are exactly the same as the global configuration fields;

For authentication plug-ins (Key authentication, HMAC authentication, Basic authentication, JWT authentication, etc.), it is different. The global configuration only configures the Consumer credential and whether to enable global authentication, and configures the allowed access through the `allow` field at the routing/domain name level. Consumer list, for details, please refer to [Configuration Instructions](./authentication/key-auth.md) of Key Authentication

## Configuration via Higress WasmPlugin CRD

The Higress WasmPlugin CRD extends the Istio [WasmPlugin](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin) CRD, adding the following configuration fields:

| Field Name | Data Type | Filling Requirements | Description |
| ------- | ------- | -------- | --- |
| `defaultConfig` | object | Optional | The default configuration of the plugin, which takes effect globally for requests that do not match specific domain names and routing configurations |
| `matchRules` | array of object | optional | configurations that match domain names or routes to take effect |

Description of configuration fields for each item in `matchRules`:

| Field Name | Data Type | Filling Requirements | Configuration Example |Description |
| ------- | ------- | -------- | --- |--- |
| `ingress` | array of string | one of `ingress` and `domain` is required | ["default/foo","default/bar"] | Matching ingress resource object, the matching format is: `namespace/ingress name` |
| `domain` | array of string | one of `ingress` and `domain` is required | ["example.com","*.test.com"] | match domain name, support generic domain name |
| `config` | object | optional | - | plug-in configuration that takes effect after matching |

Take the [Request Blocking](./traffic/request-block.md) plugin as an example, if you want the following configuration of the plugin to take effect globally (please refer to the [Request Blocking](./traffic/request-block.md) document for configuration field descriptions):

```yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
```

Then the corresponding WasmPlugin needs to be configured as follows:

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - swagger.html
     - foo=bar
     case_sensitive: false
   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
```

The following requests will be blocked immediately after configuration:

```bash
curl http://example.com?foo=Bar
curl http://exmaple.com/foo/Swagger.html
```

If you want to apply the following configuration to the Ingress named foo under the default namespace (matching requests whose path prefix is `/foo`):

```yaml
block_headers:
- example-key
- example-value
```

Then the corresponding WasmPlugin needs to be configured as follows:

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - swagger.html
     - foo=bar
     case_sensitive: false
   matchRules:
    # Route-level effective configuration
   - ingress:
     - default/foo
      # The ingress named foo under the default namespace will execute the following configuration
     config:
       block_headers:
       - example-key
       - example-value
   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
```

After configuration, the following request will not match a specific ingress, so it still hits the global default configuration and is denied access:

```bash
curl http://example.com?foo=Bar
```

Since the following request matches the Ingress of foo, the routing-level configuration is not affected by the default configuration and will not be denied access:

```bash
curl http://exmaple.com/foo/Swagger.html
```

Because the route-level configuration blocks requests with `example-key` characters in the request header, the following request will be denied access:

```bash
curl http://exmaple.com/foo -H 'exmaple-key: 123'
```

When there are multiple rules in `matchRules`, they will be matched according to the order of the rules. It is recommended to place the ingress matching configuration before the domain matching, which is also the practice of the Higress console

### Official plugin mirror address

| Plugin name | Mirror address |
| ------- | ------- |
| Key authentication | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-auth:1.0.0 |
| Basic authentication | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/basic-auth:1.0.0 |
| HMAC authentication | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/hmac-auth:1.0.0 |
| JWT authentication | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jwt-auth:1.0.0 |
| Bot detection | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/bot-detect:1.0.0 |
| Custom Response | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0 |
| request block | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0 |
| Key-based rate limit | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-rate-limit:1.0.0 |
| WAF Protection | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/waf:1.0.0 |

## Wasm plugin principle introduction

### What is Wasm
// TODO...

### Plug-in effective process
// TODO...

### Plug-in execution sequence arrangement
// TODO...

### How does the Wasm plugin achieve lossless traffic when changing
// TODO...
