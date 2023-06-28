---
title: WAF 防护
keywords: [higress,waf]
description: WAF 防护插件配置参考
---

## 功能说明
开源版 WAF 插件，支持基于 OWASP ModSecurity Core Rule Set (CRS) 的 WAF 规则配置

## 运行属性

插件执行阶段：`授权阶段`
插件执行优先级：`330`

## 配置字段
| 名称 | 数据类型 | 填写要求 |  默认值 | 描述 |
| -------- | -------- | -------- | -------- | -------- |
| useCRS | bool | 选填 | false | 是否开启OWASP CRS，详情可参考[coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2) |
| secRules | array of string | 选填 | - | 用户自定义的waf防护规则，语法规则可参考[SecLang语法参考](https://coraza.io/docs/seclang/directives/) |

## 配置示例

**观察模式（只会记录日志)**

```yaml
defaultConfig:
  useCRS: true
  secRules: 
  - "SecRuleEngine DetectionOnly"
```

**防护模式**

```yaml
defaultConfig:
  useCRS: true
  secRules: 
  - "SecRuleEngine On"
  - "SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
```

根据该配置，以下请求将被禁止访问：
```bash
curl http://example.com/admin
```

## 对特定路由或域名开启
```yaml
defaultConfig:
  useCRS: true
  secRules: 
  - "SecDebugLogLevel 3"
  - "SecRuleEngine On"
  - "SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
  - "SecRule REQUEST_BODY \"@rx maliciouspayload\" \"id:102,phase:2,t:lowercase,deny\""
matchRules:
- ingress:
  - default/echo-ingress
  config:
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecAction \"id:102,phase:1,deny\""
```

此例 `matchRules` 中指定了名为 `default/echo-ingress` 的路由的防护配置，当发现路由匹配时，将使用 `matchRules` 中 `config` 下的配置；其他请求则使用 `defaultConfig` 下的配置。
