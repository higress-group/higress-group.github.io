---
title: AI 提示词修饰
keywords: [higress, ai]
description: AI 提示词修饰插件用于对 Prompt 进行调整，支持在用户输入的 Prompt 前后添加额外的 Prompt。
---

## 功能说明

AI 提示词修饰插件用于对 Prompt 进行调整，支持在用户输入的 Prompt 前后添加额外的 Prompt，用户可以使用 Higress AI 网关来统一处理应用逻辑中需要操控 Prompt 的地方，让所有 LLM API 流量都经过 Higress 进行处理，自动完成 Prompt 的统一操控。

# 配置说明

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `prepend` | array of message object | optional | - | 在初始输入之前插入的语句 |
| `append` | array of message object | optional | - | 在初始输入之后插入的语句 |

message object 配置说明：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `role` | string | 必填 | - | 角色 |
| `content` | string | 必填 | - | 消息 |

# 示例

配置示例如下：

```yaml
prepend:
- role: system
  content: "请使用英语回答问题"
append:
- role: user
  content: "每次回答完问题，尝试进行反问"
```

使用以上配置发起请求：

```bash
curl http://localhost/test \
-H "content-type: application/json" \
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "你是谁？"
    }
  ]
}
```

经过插件处理后，实际请求为：

```bash
curl http://localhost/test \
-H "content-type: application/json" \
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "请使用英语回答问题"
    },
    {
      "role": "user",
      "content": "你是谁？"
    },
    {
      "role": "user",
      "content": "每次回答完问题，尝试进行反问"
    }
  ]
}
```
