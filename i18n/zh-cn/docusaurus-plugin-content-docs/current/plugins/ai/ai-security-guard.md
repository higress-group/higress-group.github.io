---
title: AI 内容审核
keywords: [ higress, ai]
description: AI 内容审核插件配置参考
---

## 功能说明 

大模型通常是通过学习互联网上广泛可用的数据来训练的，它们有可能在过程中学习到并复现有害内容或不良言论，因此，当大模型未经过适当的过滤和监控就生成回应时，它们可能产生包含有害语言、误导信息、歧视性言论甚至是违反法律法规的内容。正是因为这种潜在的风险，大模型中的内容安全就显得异常重要。
在 Higress 中，通过简单的配置即可对接[阿里云内容安全](https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.28415.0.0.1dab1f55pipQr9)，为大模型问答的合规性保驾护航，内容安全提供了多种检测范围，用户可以在控制台进行配置：

![](/img/plugins/ai/ai-security-guard/security-content-rules.png)

## 配置说明
| Name | Type | Requirement | Default | Description |
| :-: | :-:  | :-:  | :-: | :-: |
| serviceSource | string | requried | - | 服务来源，填dns |
| serviceName | string | requried | - | 服务名 |
| servicePort | string | requried | - | 服务端口 |
| domain | string | requried | - | 阿里云内容安全endpoint |
| ak | string | requried | - | 阿里云AK |
| sk | string | requried | - | 阿里云SK |


## 配置示例

```yaml
serviceSource: "dns"
serviceName: "safecheck"
servicePort: 443
domain: "green-cip.cn-shanghai.aliyuncs.com"
ak: "XXXXXXXXX"
sk: "XXXXXXXXXXXXXXX"
```

配置后，如果请求/响应中包含了非法内容，被内容安全拦截后，网关会返回内容安全建议的回答：

![](/img/plugins/ai/ai-security-guard/security-response.png)
