---
title: AI 提示词模板
keywords: [higress, ai]
description: AI 提示词模版插件用于快速构建固定格式的 Prompt，对于特定应用需要限制问题格式的场景会比较有帮助，可以在网关上配置 Prompt 模版，并基于大模型的能力来提供对应的 API。
---

## 功能说明

AI 提示词模版插件用于快速构建固定格式的 Prompt，对于特定应用需要限制问题格式的场景会比较有帮助，可以在网关上配置 Prompt 模版，并基于大模型的能力来提供对应的 API。

## 配置说明

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `templates` | array of object | 必填 | - | 模板设置 |

template object 配置说明：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `name` | string | 必填 | - | 模板名称 |
| `template.model` | string | 必填 | - | 模型名称 |
| `template.messages` | array of object | 必填 | - | 大模型输入 |

message object 配置说明：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `role` | string | 必填 | - | 角色 |
| `content` | string | 必填 | - | 消息 |

配置示例如下：

```yaml
templates:
- name: "developer-chat"
  template:
    model: gpt-3.5-turbo
    messages:
    - role: system
      content: "You are a {{program}} expert, in {{language}} programming language."
    - role: user
      content: "Write me a {{program}} program."
```

使用以上配置的请求body示例：

```json
{
  "template": "developer-chat",
  "properties": {
    "program": "quick sort",
    "language": "python"
  }
}
```