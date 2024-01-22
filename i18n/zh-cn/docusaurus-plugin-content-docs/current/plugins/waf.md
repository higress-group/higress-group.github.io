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
| secRules | array of string | 选填 | - | 用户自定义的waf防护规则，语法规则可参考[SecLang语法参考](https://coraza.io/docs/seclang/directives/) 和 [ModSecurity中文手册](http://www.modsecurity.cn/chm/index.html) |

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

