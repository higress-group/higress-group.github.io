---
title: Token 认证
keywords: [ higress,ai,proxy,rag ]
description: Token 认证插件配置参考
---

## 功能说明

`simple-jwt-auth` 插件基于 wasm-go 实现了 Token 解析认证功能，可以判断 Token 是否有效，如果 Token 有效则继续访问后端微服务，Token 无效或不存在直接拒绝并返回 401。

## 配置字段

|  名称 |  数据类型 | 填写要求  | 描述                       |
| ------------ | ------------ | ------------ |--------------------------|
|  token_secret_key | string  | 必填  | 配置 Token 解析使用的 SecretKey |
|  token_headers | string  | 必填  | 配置获取 Token 请求头名称         |

## 配置示例

```yaml
token_secret_key: Dav7kfq3iA8S!JUj8&CUkdnQe72E@Cw6
token_headers: token
```

此例 `token_secret_key` 中指定的是认证服务生成 Token 的 SecretKey，`token_headers` 是携带 Token 访问的请求头名称。