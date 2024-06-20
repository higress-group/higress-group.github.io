---
title: Wasm 插件使用简介
keywords: [higress,wasm]
description: Higress Wasm 插件简介
---

## 通过 Higress 控制台进行配置

Higress 控制台提供了 3 个入口进行插件配置:

1. 全局配置：插件市场->选择插件进行配置
2. 域名级配置：域名管理->选择域名->点击策略->选择插件进行配置
3. 路由级配置: 路由配置->选择路由->点击策略->选择插件进行配置

这三个配置的生效优先级是: 路由级 > 域名级 > 全局

即对于没有匹配到具体路由或域名的请求才会生效全局配置

对于一般的插件，包括自定义插件在内，路由/域名级的配置字段和全局配置字段是完全一样的；

对于认证类插件(Key 认证，HMAC 认证，Basic 认证，JWT 认证等)则不同，全局配置仅做 Consumer 凭证配置，以及是否开启全局认证，而在路由/域名级通过 `allow` 字段配置允许访问的 Consumer 列表，详情可以查看 [Key 认证的配置说明](./authentication/key-auth.md)。

## 通过 Higress WasmPlugin CRD 进行配置

Higress WasmPlugin CRD 在 Istio [WasmPlugin](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin) CRD 的基础上进行了扩展，新增以下配置字段：

| 字段名称 | 数据类型 | 填写要求 | 描述 |
| -------  | -------  | -------- | ---  |
| `defaultConfig` | object | 选填 | 插件默认配置，全局生效于没有匹配具体域名和路由配置的请求 |
| `matchRules` | array of object | 选填 | 匹配域名或路由生效的配置 |

`matchRules` 中每一项的配置字段说明：

| 字段名称 | 数据类型 | 填写要求                       | 配置示例 |描述 |
| -------  | -------  |----------------------------| --- |---  |
| `ingress` | array of string | `ingress` 和 `domain` 中必填一项 | ["default/foo","default/bar"] | 匹配 ingress 资源对象，匹配格式为: `命名空间/ingress名称` |
| `domain` | array of string | `ingress` 和 `domain` 中必填一项 | ["example.com","*.test.com"] | 匹配域名，支持泛域名 |
| `config` | object | 选填                         | - | 匹配后生效的插件配置 |

以[请求屏蔽](./traffic/request-block.md)插件举例说明，如果希望全局生效插件的如下配置（请查看[请求屏蔽](./traffic/request-block.md)文档了解配置字段说明）：

```yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
```

则对应的 WasmPlugin 需要配置如下：

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

配置后下列请求将立即被禁止访问:

```bash
curl http://example.com?foo=Bar
curl http://example.com/foo/Swagger.html
```

如果希望对 default 命名空间下名称为 foo 的 Ingress (匹配 path 前缀为 `/foo` 的请求)生效如下配置:

```yaml
block_headers:
- example-key
- example-value
```

则对应的 WasmPlugin 需要配置如下：

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
   # 路由级生效配置
  - ingress:
    - default/foo
     # default 命名空间下名为 foo 的 ingress 会执行下面这个配置
    config:
      block_headers:
      - example-key
      - example-value
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
```

配置后，下面请求不会匹配到具体的 ingress，因此仍然命中全局默认配置，被拒绝访问：

```bash
curl http://example.com?foo=Bar
```

下面请求由于匹配到 foo 这个 Ingress，因此走路由级的配置，不受默认配置影响，不会被拒绝访问:

```bash
curl http://exmaple.com/foo/Swagger.html
```

因为路由级配置屏蔽了请求 Header 中出现 `example-key` 字符的请求，所以下面这个请求会被拒绝访问:

```bash
curl http://exmaple.com/foo -H 'exmaple-key: 123'
```

当 `matchRules` 中存在多个规则时，按规则排列顺序优先匹配，建议将 ingress 匹配配置放在 domain 匹配之前，这也是 Higress 控制台的做法。

### 官方插件镜像地址

| 插件名称 | 镜像地址 |
| -------  | -------  | 
| Key 认证 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-auth:1.0.0 |
| Basic 认证 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/basic-auth:1.0.0 |
| HMAC 认证 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/hmac-auth:1.0.0 |
| JWT 认证 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jwt-auth:1.0.0 |
| 机器人拦截 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/bot-detect:1.0.0 |
| 自定义应答 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0 |
| 请求屏蔽 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0 |
| 基于 Key 限流 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/key-rate-limit:1.0.0 |
| WAF 防护 | higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/waf:1.0.0  |

## Wasm 插件原理介绍

### 什么是 Wasm 
// TODO...

### 插件生效流程
// TODO...

### 插件执行顺序编排
// TODO...

### Wasm 插件如何做到变更时流量无损
// TODO...
