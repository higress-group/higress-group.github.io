---
title: AI 提示词修饰
keywords: [higress, ai]
description: AI提示词修饰插件配置参考
---

## 功能说明

AI 提示词修饰插件用于对 Prompt 进行调整，支持在用户输入的 Prompt 前后添加额外的 Prompt，用户可以使用 Higress AI 网关来统一处理应用逻辑中需要操控 Prompt 的地方，让所有 LLM API 流量都经过 Higress 进行处理，自动完成 Prompt 的统一操控。

## 配置说明

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `decorators` | array of object | 必填 | - | 修饰设置 |

template object 配置说明：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `name` | string | 必填 | - | 修饰名称 |
| `decorator.prepend` | array of message object | 必填 | - | 在初始输入之前插入的语句 |
| `decorator.append` | array of message object | 必填 | - | 在初始输入之后插入的语句 |

message object 配置说明：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
|----------------|-----------------|------|-----|----------------------------------|
| `role` | string | 必填 | - | 角色 |
| `content` | string | 必填 | - | 消息 |

# 示例

配置示例如下：

```yaml
decorators:
- name: "hangzhou-guide"
  decorator:
    prepend:
    - role: system
      content: "You will always respond in the Chinese language."
    - role: user
      content: "Assume you are from Hangzhou."
    append:
    - role: user
      content: "Don't introduce Hangzhou's food."
```

使用以上配置发起请求：

```bash
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please introduce your home."
    }
  ]
}
```

响应如下：

```
{
  "id": "chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab",
  "object": "chat.completion",
  "created": 1717071182,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "杭州是一个美丽的城市，有着悠久的历史和富有特色的文化。这里风景优美，有西湖、雷峰塔等著名景点，吸引着许多游客前来观光。杭州人民热情好客，城市宁静安逸，是一个适合居住和旅游的地方。"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 49,
    "completion_tokens": 117,
    "total_tokens": 166
  },
  "system_fingerprint": null
}
```
