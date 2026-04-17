---
title: "HiMarket OIDC/SSO 集成指南"
description: "HiMarket 身份认证集成详解：为开发者门户配置第三方登录"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "OIDC", "SSO", "OAuth2", "身份认证", "单点登录", "GitHub", "Google", "阿里云", "IDaaS"]
authors: "Higress Team"
---

# HiMarket OIDC/SSO 集成指南

本文档面向 HiMarket AI 开放平台的管理员，介绍如何为开发者门户配置第三方身份认证（SSO），实现统一登录。

## 目录
+ [概述](#概述)
+ [配置方式](#配置方式)
    - [配置入口](#配置入口)
    - [配置项说明](#配置项说明)
    - [身份映射](#身份映射)
    - [登录流程](#登录流程)
+ [常见 IdP 配置示例](#常见-idp-配置示例)
    - [GitHub OAuth](#github-oauth)
    - [Google](#google)
    - [阿里云账号](#阿里云账号)
    - [阿里云 IDaaS](#阿里云-idaas)
+ [故障排查](#故障排查)

---

## 概述

HiMarket 开发者门户支持以下两种身份认证方式：

| 认证方式 | 说明 | 适用场景 |
|---------|------|---------|
| 内置账号密码 | 开发者在门户注册用户名和密码，直接登录 | 默认方式，适合独立使用 |
| OIDC/OAuth2 | 通过第三方身份提供商进行登录 | 企业 SSO、GitHub/Google 社交登录等 |

+ **内置账号密码**：默认启用，开发者在门户自行注册和登录，无需额外配置
+ **OIDC/OAuth2**：开发者点击第三方登录按钮后跳转到对应平台完成认证，回调后自动创建或关联 HiMarket 开发者账号

两种方式可以同时启用，管理员可根据实际需求灵活组合。

---

## 配置方式

### 配置入口

在管理后台中为指定门户配置第三方登录：

**操作步骤：**

1. 登录 HiMarket 管理后台
2. 进入【Portal】菜单，选择目标门户
3. 点击门户卡片进入详情页
4. 切换到【Security】标签页
5. 在第三方登录区域点击【添加 OIDC Provider】

### 配置项说明

添加 Provider 时，需要填写以下配置信息：

#### 基本信息

| 配置项 | 必填 | 说明 |
|-------|------|------|
| 提供商标识 | 是 | 用于内部识别的唯一标识，如 `github`、`google` |
| 显示名称 | 是 | 在登录页面展示的按钮文字，如「GitHub 登录」，必须唯一 |
| 图标地址 | 否 | 登录按钮的图标，建议使用 SVG 或 PNG 格式 |
| 是否启用 | 否 | 是否启用该提供商，默认启用 |

#### 授权码配置

| 配置项 | 必填 | 说明 |
|-------|------|------|
| Client ID | 是 | 在第三方平台注册应用后获得的客户端 ID |
| Client Secret | 是 | 在第三方平台注册应用后获得的客户端密钥 |
| Scopes | 是 | 请求的权限范围，多个用空格分隔 |
| Issuer | 是 | 签发者标识，通常是平台的基础 URL |
| Authorization Endpoint | 是 | 授权端点 URL，用于发起登录跳转 |
| Token Endpoint | 是 | Token 端点 URL，用于用授权码换取访问令牌 |
| User Info Endpoint | 否 | 用户信息端点 URL，用于获取用户详细信息 |
| JWK Set URI | 否 | JWK Set 地址，用于验证 Token 签名（部分平台需要） |
| Redirect URI | 否 | 回调地址，留空则自动生成 |

**关于回调地址（Redirect URI）：**

如果留空，HiMarket 会自动根据当前请求地址生成回调 URL，格式为：`{开发者门户地址}/oidc/callback`

如果需要手动指定，例如：
+ 本地开发环境：`http://localhost:5173/oidc/callback`
+ 生产环境：`https://portal.your-domain.com/oidc/callback`

> 需要在第三方平台中将此地址添加到允许的回调 URL 列表中，否则登录时会报错。

### 身份映射

身份映射用于将第三方平台返回的用户信息字段对应到 HiMarket 开发者属性：

| 映射项 | 说明 | 常见值 |
|-------|------|-------|
| 用户 ID 字段 | 代表用户唯一标识的字段名 | `sub`、`id` |
| 用户名字段 | 代表用户名的字段名 | `login`、`name`、`preferred_username` |
| 邮箱字段 | 代表邮箱的字段名 | `email` |
| 头像字段 | 代表头像 URL 的字段名 | `avatar_url`、`picture` |

不同平台返回的字段名不同，请参考下方各平台的配置示例。

### 登录流程

配置完成后，开发者门户登录页面会显示第三方登录按钮。完整的登录流程如下：

1. **开发者点击登录按钮** — 浏览器跳转到第三方平台的授权页面
2. **在第三方平台完成认证** — 开发者登录并授权，平台将浏览器重定向回 HiMarket
3. **HiMarket 处理回调** — 自动完成授权码换取令牌、获取用户信息等操作
4. **自动创建或关联开发者账号** — 首次登录的用户会自动创建开发者账号；已有关联账号的用户直接登录

整个过程对开发者来说是无感的：点击登录按钮 → 在第三方平台完成授权 → 自动回到 HiMarket 门户并完成登录。

---

## 常见 IdP 配置示例

### GitHub OAuth

GitHub 是最常用的开发者社交登录方式。

**前置步骤：**

1. 登录 [GitHub](https://github.com)，进入 Settings → Developer settings → OAuth Apps
2. 点击 New OAuth App
3. 填写应用信息：
    - Application name：`HiMarket`
    - Homepage URL：你的 HiMarket 门户地址
    - Authorization callback URL：`https://portal.your-domain.com/oidc/callback`
4. 创建后记录 Client ID，并生成 Client Secret

**HiMarket 配置参考：**

基本信息：

| 配置项 | 填写内容 |
|-------|---------|
| 提供商标识 | `github` |
| 显示名称 | `GitHub 登录` |
| 图标地址 | `https://github.githubassets.com/favicons/favicon-dark.svg`（可选） |

授权码配置：

| 配置项 | 填写内容 |
|-------|---------|
| Client ID | GitHub OAuth App 的 Client ID |
| Client Secret | GitHub OAuth App 的 Client Secret |
| Scopes | `read:user user:email` |
| Issuer | `https://github.com` |
| Authorization Endpoint | `https://github.com/login/oauth/authorize` |
| Token Endpoint | `https://github.com/login/oauth/access_token` |
| User Info Endpoint | `https://api.github.com/user` |
| JWK Set URI | 留空 |
| Redirect URI | 留空（自动生成）或手动填写 |

身份映射：

| 映射项 | 填写内容 |
|-------|---------|
| 用户 ID 字段 | `id` |
| 用户名字段 | `login` |
| 邮箱字段 | `email` |
| 头像字段 | `avatar_url` |

---

### Google

Google 账号登录适用于面向全球开发者的场景。

**前置步骤：**

1. 登录 [Google Cloud Console](https://console.cloud.google.com)
2. 进入 APIs & Services → Credentials
3. 点击 Create Credentials → OAuth client ID
4. 选择 Application type 为 Web application
5. 在 Authorized redirect URIs 中添加：`https://portal.your-domain.com/oidc/callback`
6. 创建后记录 Client ID 和 Client Secret

**HiMarket 配置参考：**

基本信息：

| 配置项 | 填写内容 |
|-------|---------|
| 提供商标识 | `google` |
| 显示名称 | `Google 登录` |
| 图标地址 | Google Logo URL（可选） |

授权码配置：

| 配置项 | 填写内容 |
|-------|---------|
| Client ID | Google OAuth 的 Client ID |
| Client Secret | Google OAuth 的 Client Secret |
| Scopes | `openid profile email` |
| Issuer | `https://accounts.google.com` |
| Authorization Endpoint | `https://accounts.google.com/o/oauth2/v2/auth` |
| Token Endpoint | `https://oauth2.googleapis.com/token` |
| User Info Endpoint | `https://openidconnect.googleapis.com/v1/userinfo` |
| JWK Set URI | `https://www.googleapis.com/oauth2/v3/certs` |
| Redirect URI | 留空（自动生成）或手动填写 |

身份映射：

| 映射项 | 填写内容 |
|-------|---------|
| 用户 ID 字段 | `sub` |
| 用户名字段 | `name` |
| 邮箱字段 | `email` |
| 头像字段 | `picture` |

---

### 阿里云账号

使用阿里云账号登录，适用于阿里云生态内的企业用户。

**前置步骤：**

1. 登录 [阿里云 RAM 控制台](https://ram.console.aliyun.com)
2. 进入 OAuth 应用管理，创建 OAuth 应用
3. 配置回调地址为 HiMarket 的回调 URL
4. 记录 Client ID 和 Client Secret

**HiMarket 配置参考：**

基本信息：

| 配置项 | 填写内容 |
|-------|---------|
| 提供商标识 | `aliyun` |
| 显示名称 | `阿里云账号登录` |
| 图标地址 | 阿里云 Logo URL（可选） |

授权码配置：

| 配置项 | 填写内容 |
|-------|---------|
| Client ID | 阿里云 OAuth 应用的 Client ID |
| Client Secret | 阿里云 OAuth 应用的 Client Secret |
| Scopes | `openid profile` |
| Issuer | `https://oauth.aliyun.com` |
| Authorization Endpoint | `https://signin.aliyun.com/oauth2/v1/auth` |
| Token Endpoint | `https://oauth.aliyun.com/v1/token` |
| User Info Endpoint | `https://oauth.aliyun.com/v1/userinfo` |
| JWK Set URI | `https://oauth.aliyun.com/v1/keys` |
| Redirect URI | 留空（自动生成）或手动填写 |

身份映射：

| 映射项 | 填写内容 |
|-------|---------|
| 用户 ID 字段 | `sub` |
| 用户名字段 | `name` |
| 邮箱字段 | `email` |
| 头像字段 | `picture` |

---

### 阿里云 IDaaS

阿里云 IDaaS（Identity as a Service）是阿里云提供的企业级身份管理服务，适用于需要统一身份管理的企业。

**前置步骤：**

1. 登录 [阿里云 IDaaS 控制台](https://yundun.console.aliyun.com/?p=idaas)
2. 创建应用，选择 OIDC 协议
3. 配置回调地址为 HiMarket 的回调 URL
4. 记录 Client ID、Client Secret 和各端点地址

**HiMarket 配置参考：**

基本信息：

| 配置项 | 填写内容 |
|-------|---------|
| 提供商标识 | `aliyun-idaas` |
| 显示名称 | `企业 SSO 登录` |
| 图标地址 | 企业 Logo URL（可选） |

授权码配置：

| 配置项 | 填写内容 |
|-------|---------|
| Client ID | 在 IDaaS 控制台创建应用后获得 |
| Client Secret | 在 IDaaS 控制台创建应用后获得 |
| Scopes | `openid profile email` |
| Issuer | `https://{你的实例}.login.aliyunidaas.com` |
| Authorization Endpoint | `https://{你的实例}.login.aliyunidaas.com/oauth/authorize` |
| Token Endpoint | `https://{你的实例}.login.aliyunidaas.com/oauth/token` |
| User Info Endpoint | `https://{你的实例}.login.aliyunidaas.com/oauth/userinfo` |
| JWK Set URI | `https://{你的实例}.login.aliyunidaas.com/oauth/jwks` |
| Redirect URI | 留空（自动生成）或手动填写 |

身份映射：

| 映射项 | 填写内容 |
|-------|---------|
| 用户 ID 字段 | `sub` |
| 用户名字段 | `preferred_username` |
| 邮箱字段 | `email` |
| 头像字段 | `picture` |

**提示：** IDaaS 的各端点地址可以通过访问 Well-Known 发现端点获取：`https://{你的实例}.login.aliyunidaas.com/.well-known/openid-configuration`

---

## 故障排查

### 1. 点击登录按钮后无反应

**可能原因：**
+ Provider 未启用
+ 门户前端未正确加载 Provider 列表

**排查方法：**
+ 在管理后台检查配置是否已启用
+ 刷新门户页面重试

### 2. 跳转到第三方平台后报错 "invalid_client"

**可能原因：**
+ Client ID 或 Client Secret 配置错误
+ 第三方平台中的应用未启用或已过期

**排查方法：**
+ 核对 HiMarket 中配置的 Client ID 和 Client Secret 与第三方平台中的完全一致
+ 确认第三方平台中的应用状态为启用

### 3. 回调时报错 "redirect_uri_mismatch"

**可能原因：**
+ HiMarket 中配置的回调地址与第三方平台中注册的回调地址不一致

**排查方法：**
+ 确认两边的回调地址完全一致，包括协议（http/https）、域名、端口和路径
+ 如果 HiMarket 中 Redirect URI 留空，请确认第三方平台中填写的回调地址与门户实际访问地址一致

### 4. 登录成功但用户信息缺失

**可能原因：**
+ Scopes 配置不完整，未请求必要的权限范围
+ 身份映射中的字段名与平台实际返回的字段不匹配

**排查方法：**
+ 确认 Scopes 包含必要的权限（如 GitHub 需要 `read:user user:email`，Google 需要 `openid profile email`）
+ 查阅对应平台文档确认实际返回的用户信息字段名称，调整身份映射配置

### 日志排查

如果以上方法无法定位问题，可以查看 HiMarket 后端日志获取更详细的错误信息。日志中会记录认证过程的关键步骤，包括授权 URL 构建、Token 交换、用户信息获取等环节的详细信息。
