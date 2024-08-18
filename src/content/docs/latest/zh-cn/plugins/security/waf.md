---
title: WAF 防护
keywords: [higress, waf]
description: 开源版 WAF 插件，支持基于 OWASP ModSecurity Core Rule Set (CRS) 的 WAF 规则配置。
---

## 功能说明

开源版 WAF 插件，支持基于 OWASP ModSecurity Core Rule Set (CRS) 的 WAF 规则配置。


> ⚠️**重要**
>
> 当前 WAF 插件会缓存请求 Body 和响应 Body，如果 Body 比全局配置中的 downstream.connectionBufferLimits 配置要大，会导致请求或响应异常
>
> downstream.connectionBufferLimits 也不建议配置过大，可能导致网络传输慢时，网关内存占用过高

## 配置字段

| 名称 | 数据类型 | 填写要求 |  默认值 | 描述                                                                                                                                              |
| -------- | -------- | -------- | -------- |-------------------------------------------------------------------------------------------------------------------------------------------------|
| useCRS | bool | 选填 | false | 是否开启 OWASP CRS，详情可参考 [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2)                                                      |
| secRules | array of string | 选填 | - | 用户自定义的waf防护规则，语法规则可参考 [SecLang 语法参考](https://coraza.io/docs/seclang/directives/) 和 [ModSecurity 中文手册](http://www.modsecurity.cn/chm/index.html) |

## 配置示例

### 观察模式（只会记录日志)

```yaml
useCRS: true
secRules: 
- "SecRuleEngine DetectionOnly"
```

### 防护模式

```yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
```

### 测试自定义规则

```yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
- "SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
```

根据该配置，以下请求将被禁止访问：

```bash
curl http://example.com/admin
```
