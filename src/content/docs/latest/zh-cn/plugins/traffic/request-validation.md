---
title: 请求校验
keywords: [higress]
description: 请求校验插件用于提前验证向上游服务转发的请求。该插件使用 `JSON Schema` 机制进行数据验证，可以验证请求的 Body 以及 Header 的数据。
---

## 功能说明

`request-validation` 插件用于提前验证向上游服务转发的请求。该插件使用 `JSON Schema` 机制进行数据验证，可以验证请求的 Body 以及 Header 的数据。

## 配置字段

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述                           |
| -------- | -------- | -------- |-----|------------------------------|
|header_schema|object|选填| -   | 配置用于验证请求 Header 的JSON Schema |
|body_schema|object|选填| -   | 配置用于验证请求 Body 的 JSON Schema  |
|rejected_code|number|选填| 403 | 配置请求被拒绝时返回的 HTTP 状态码         |
|rejected_msg|string|选填| - | 配置请求被拒绝时返回的 HTTP 应答 Body     |
|enable_swagger|bool|选填| false | 配置是否开启 Swagger 文档验证          |
|enable_oas3|bool|选填| false | 配置是否开启 OAS3 文档验证             |

**校验规则对 Header 和 Body 是一样的，下面以 Body 为例说明。**

## 配置示例

### 枚举（Enum）验证

```yaml
body_schema:
  type: object
  required:
    - enum_payload
  properties:
    enum_payload:
      type: string
      enum:
        - "enum_string_1"
        - "enum_string_2"
      default: "enum_string_1"
```

### 布尔（Boolean）验证

```yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
      default: true
```

### 数字范围（Number or Integer）验证

```yaml
body_schema:
  type: object
  required:
    - integer_payload
  properties:
    integer_payload:
      type: integer
      minimum: 1
      maximum: 10
```

### 字符串长度（String）验证

```yaml
body_schema:
  type: object
  required:
    - string_payload
  properties:
    string_payload:
      type: string
      minLength: 1
      maxLength: 10
```

### 正则表达式（Regex）验证

```yaml
body_schema:
  type: object
  required:
    - regex_payload
  properties:
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
```

### 数组（Array）验证

```yaml
body_schema:
  type: object
  required:
    - array_payload
  properties:
    array_payload:
      type: array
      minItems: 1
      items:
        type: integer
        minimum: 1
        maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
```

### 多字段组合（Combined）验证

```yaml
body_schema:
  type: object
  required:
    - boolean_payload
    - array_payload
    - regex_payload
  properties:
    boolean_payload:
      type: boolean
    array_payload:
      type: array
      minItems: 1
      items:
          type: integer
          minimum: 1
          maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
```

### 自定义拒绝信息

```yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
rejected_code: 403
rejected_msg: "请求被拒绝"
```
