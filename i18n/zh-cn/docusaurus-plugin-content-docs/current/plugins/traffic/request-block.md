---
title: 请求屏蔽
keywords: [higress]
description: 请求屏蔽插件配置参考
---

## 功能说明

`request-block` 插件实现了基于 URL、请求头等特征屏蔽 HTTP 请求，可以用于防护部分站点资源不对外部暴露。

## 配置字段

| 名称 | 数据类型 | 填写要求 |  默认值 | 描述 |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | 选填，`block_urls`,`block_headers`,`block_bodies` 中至少必填一项     |   -  |  配置用于匹配需要屏蔽 URL 的字符串   |
|  block_exact_urls     |  array of string     | 选填，`block_urls`,`block_headers`,`block_bodies` 中至少必填一项     |   -  |  配置用于匹配需要精确屏蔽 URL 的字符串   |
|  block_regexp_urls     |  array of string     | 选填，`block_urls`,`block_headers`,`block_bodies` 中至少必填一项     |   -  |  配置用于匹配需要屏蔽 URL 的正则表达式  |
|  block_headers     |  array of string     | 选填，`block_urls`,`block_headers`,`block_bodies` 中至少必填一项     |   -  |  配置用于匹配需要屏蔽请求 Header 的字符串   |
|  block_bodies     |  array of string     | 选填，`block_urls`,`block_headers`,`block_bodies` 中至少必填一项     |   -  |  配置用于匹配需要屏蔽请求 Body 的字符串   |
|  blocked_code     |  number     | 选填     |   403  |  配置请求被屏蔽时返回的 HTTP 状态码   |
|  blocked_message     |  string     | 选填     |   -  |  配置请求被屏蔽时返回的 HTTP 应答 Body   |
|  case_sensitive     |  bool     | 选填     |   true  |  配置匹配时是否区分大小写，默认区分   |

## 配置示例

### 屏蔽请求 URL 路径

```yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
```

根据该配置，下列请求将被禁止访问：

```bash
curl http://example.com?foo=Bar
curl http://exmaple.com/Swagger.html
```

### 屏蔽请求 Header

```yaml
block_headers:
- example-key
- example-value
```

根据该配置，下列请求将被禁止访问：

```bash
curl http://example.com -H 'example-key: 123'
curl http://exmaple.com -H 'my-header: example-value'
```

### 屏蔽请求 Body

```yaml
block_bodies:
- "hello world"
case_sensitive: false
```

根据该配置，下列请求将被禁止访问：

```bash
curl http://example.com -d 'Hello World'
curl http://exmaple.com -d 'hello world'
```

### 对特定路由或域名开启

```yaml
# 使用 matchRules 字段进行细粒度规则配置
matchRules:
# 规则一：按 Ingress 名称匹配生效
- ingress:
  - default/foo
  - default/bar
  block_bodies: 
  - "hello world"
# 规则二：按域名匹配生效
- domain:
  - "*.example.com"
  - test.com
  block_urls: 
  - "swagger.html"
  block_bodies:
  - "hello world"
```

此例 `ingress` 中指定的 `default/foo` 和 `default/bar` 对应 default 命名空间下名为 foo 和 bar 的 Ingress，当匹配到这两个 Ingress 时，将使用此段配置；
此例 `domain` 中指定的 `*.example.com` 和 `test.com` 用于匹配请求的域名，当发现域名匹配时，将使用此段配置；
配置的匹配生效顺序，将按照 `matchRules` 下规则的排列顺序，匹配第一个规则后生效对应配置，后续规则将被忽略。

## 请求 Body 大小限制

当配置了 `block_bodies` 时，仅支持小于 32 MB 的请求 Body 进行匹配。若请求 Body 大于此限制，并且不存在匹配到的 `block_urls` 和 `block_headers` 项时，不会对该请求执行屏蔽操作。
当配置了 `block_bodies` 时，若请求 Body 超过全局配置 DownstreamConnectionBufferLimits，将返回 `413 Payload Too Large`。