---
title: "HiMarket OIDC/SSO Integration Guide"
description: "HiMarket identity authentication integration: configuring third-party login for the developer portal"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "OIDC", "SSO", "OAuth2", "Authentication", "Single Sign-On", "GitHub", "Google", "Alibaba Cloud", "IDaaS"]
authors: "Higress Team"
---

# HiMarket OIDC/SSO Integration Guide

This document is intended for HiMarket AI Open Platform administrators, covering how to configure third-party identity authentication (SSO) for the developer portal to enable unified login.

## Table of Contents
+ [Overview](#overview)
+ [Configuration](#configuration)
    - [Configuration Entry](#configuration-entry)
    - [Configuration Reference](#configuration-reference)
    - [Identity Mapping](#identity-mapping)
    - [Login Flow](#login-flow)
+ [Common IdP Configuration Examples](#common-idp-configuration-examples)
    - [GitHub OAuth](#github-oauth)
    - [Google](#google)
    - [Alibaba Cloud Account](#alibaba-cloud-account)
    - [Alibaba Cloud IDaaS](#alibaba-cloud-idaas)
+ [Troubleshooting](#troubleshooting)

---

## Overview

The HiMarket developer portal supports two authentication methods:

| Method | Description | Use Case |
|--------|-------------|----------|
| Built-in Username/Password | Developers register and log in with username and password | Default method, suitable for standalone use |
| OIDC/OAuth2 | Log in via a third-party identity provider | Enterprise SSO, GitHub/Google social login, etc. |

+ **Built-in Username/Password**: Enabled by default. Developers register and log in directly on the portal with no additional configuration required.
+ **OIDC/OAuth2**: Developers click a third-party login button, get redirected to the corresponding platform for authentication, and are automatically provisioned or linked to a HiMarket developer account upon callback.

Both methods can be enabled simultaneously. Administrators can combine them flexibly based on actual requirements.

---

## Configuration

### Configuration Entry

Configure third-party login for a specific portal in the admin console:

**Steps:**

1. Log in to the HiMarket admin console
2. Navigate to the **Portal** menu and select the target portal
3. Click the portal card to enter the detail page
4. Switch to the **Security** tab
5. Click **Add OIDC Provider** in the third-party login section

### Configuration Reference

When adding a Provider, fill in the following configuration fields:

#### Basic Information

| Field | Required | Description |
|-------|----------|-------------|
| Provider Identifier | Yes | A unique identifier for internal use, e.g., `github`, `google` |
| Display Name | Yes | Button text shown on the login page, e.g., "GitHub Login". Must be unique |
| Logo URL | No | Icon for the login button. SVG or PNG format recommended |
| Enabled | No | Whether this provider is enabled. Enabled by default |

#### Authorization Code Configuration

| Field | Required | Description |
|-------|----------|-------------|
| Client ID | Yes | The client ID obtained after registering an application on the third-party platform |
| Client Secret | Yes | The client secret obtained after registering an application on the third-party platform |
| Scopes | Yes | Requested permission scopes, space-separated |
| Issuer | Yes | Issuer identifier, usually the platform's base URL |
| Authorization Endpoint | Yes | Authorization endpoint URL, used to initiate the login redirect |
| Token Endpoint | Yes | Token endpoint URL, used to exchange the authorization code for an access token |
| User Info Endpoint | No | User info endpoint URL, used to retrieve user details |
| JWK Set URI | No | JWK Set URL, used to verify token signatures (required by some platforms) |
| Redirect URI | No | Callback URL. Leave empty for auto-generation |

**About the Redirect URI:**

If left empty, HiMarket will automatically generate the callback URL based on the current request address, in the format: `{developer portal URL}/oidc/callback`

If you need to specify it manually, for example:
+ Local development: `http://localhost:5173/oidc/callback`
+ Production: `https://portal.your-domain.com/oidc/callback`

> This URL must be added to the allowed redirect URIs on the third-party platform, otherwise login will fail.

### Identity Mapping

Identity mapping maps user info fields returned by the third-party platform to HiMarket developer attributes:

| Mapping Field | Description | Common Values |
|---------------|-------------|---------------|
| User ID Field | Field name representing the unique user identifier | `sub`, `id` |
| Username Field | Field name representing the username | `login`, `name`, `preferred_username` |
| Email Field | Field name representing the email | `email` |
| Avatar Field | Field name representing the avatar URL | `avatar_url`, `picture` |

Different platforms return different field names. Please refer to the configuration examples below for each platform.

### Login Flow

Once configured, the developer portal login page will display third-party login buttons. The complete login flow is as follows:

1. **Developer clicks the login button** — The browser redirects to the third-party platform's authorization page
2. **Authentication on the third-party platform** — The developer logs in and authorizes, then the platform redirects the browser back to HiMarket
3. **HiMarket handles the callback** — Automatically exchanges the authorization code for tokens and retrieves user information
4. **Automatic developer account creation or linking** — First-time users get a developer account created automatically; returning users are logged in directly

The entire process is seamless for developers: click the login button → authorize on the third-party platform → automatically return to the HiMarket portal, logged in.

---

## Common IdP Configuration Examples

### GitHub OAuth

GitHub is the most commonly used social login for developers.

**Prerequisites:**

1. Log in to [GitHub](https://github.com), go to Settings → Developer settings → OAuth Apps
2. Click New OAuth App
3. Fill in the application information:
    - Application name: `HiMarket`
    - Homepage URL: Your HiMarket portal URL
    - Authorization callback URL: `https://portal.your-domain.com/oidc/callback`
4. After creation, note down the Client ID and generate a Client Secret

**HiMarket Configuration Reference:**

Basic information:

| Field | Value |
|-------|-------|
| Provider Identifier | `github` |
| Display Name | `GitHub Login` |
| Logo URL | `https://github.githubassets.com/favicons/favicon-dark.svg` (optional) |

Authorization code configuration:

| Field | Value |
|-------|-------|
| Client ID | GitHub OAuth App Client ID |
| Client Secret | GitHub OAuth App Client Secret |
| Scopes | `read:user user:email` |
| Issuer | `https://github.com` |
| Authorization Endpoint | `https://github.com/login/oauth/authorize` |
| Token Endpoint | `https://github.com/login/oauth/access_token` |
| User Info Endpoint | `https://api.github.com/user` |
| JWK Set URI | Leave empty |
| Redirect URI | Leave empty (auto-generated) or fill in manually |

Identity mapping:

| Mapping Field | Value |
|---------------|-------|
| User ID Field | `id` |
| Username Field | `login` |
| Email Field | `email` |
| Avatar Field | `avatar_url` |

---

### Google

Google account login is suitable for scenarios targeting global developers.

**Prerequisites:**

1. Log in to [Google Cloud Console](https://console.cloud.google.com)
2. Go to APIs & Services → Credentials
3. Click Create Credentials → OAuth client ID
4. Select Application type as Web application
5. Add to Authorized redirect URIs: `https://portal.your-domain.com/oidc/callback`
6. After creation, note down the Client ID and Client Secret

**HiMarket Configuration Reference:**

Basic information:

| Field | Value |
|-------|-------|
| Provider Identifier | `google` |
| Display Name | `Google Login` |
| Logo URL | Google Logo URL (optional) |

Authorization code configuration:

| Field | Value |
|-------|-------|
| Client ID | Google OAuth Client ID |
| Client Secret | Google OAuth Client Secret |
| Scopes | `openid profile email` |
| Issuer | `https://accounts.google.com` |
| Authorization Endpoint | `https://accounts.google.com/o/oauth2/v2/auth` |
| Token Endpoint | `https://oauth2.googleapis.com/token` |
| User Info Endpoint | `https://openidconnect.googleapis.com/v1/userinfo` |
| JWK Set URI | `https://www.googleapis.com/oauth2/v3/certs` |
| Redirect URI | Leave empty (auto-generated) or fill in manually |

Identity mapping:

| Mapping Field | Value |
|---------------|-------|
| User ID Field | `sub` |
| Username Field | `name` |
| Email Field | `email` |
| Avatar Field | `picture` |

---

### Alibaba Cloud Account

Use Alibaba Cloud account login, suitable for enterprise users within the Alibaba Cloud ecosystem.

**Prerequisites:**

1. Log in to the [Alibaba Cloud RAM Console](https://ram.console.aliyun.com)
2. Go to OAuth Application Management and create an OAuth application
3. Configure the callback URL to the HiMarket callback URL
4. Note down the Client ID and Client Secret

**HiMarket Configuration Reference:**

Basic information:

| Field | Value |
|-------|-------|
| Provider Identifier | `aliyun` |
| Display Name | `Alibaba Cloud Login` |
| Logo URL | Alibaba Cloud Logo URL (optional) |

Authorization code configuration:

| Field | Value |
|-------|-------|
| Client ID | Alibaba Cloud OAuth App Client ID |
| Client Secret | Alibaba Cloud OAuth App Client Secret |
| Scopes | `openid profile` |
| Issuer | `https://oauth.aliyun.com` |
| Authorization Endpoint | `https://signin.aliyun.com/oauth2/v1/auth` |
| Token Endpoint | `https://oauth.aliyun.com/v1/token` |
| User Info Endpoint | `https://oauth.aliyun.com/v1/userinfo` |
| JWK Set URI | `https://oauth.aliyun.com/v1/keys` |
| Redirect URI | Leave empty (auto-generated) or fill in manually |

Identity mapping:

| Mapping Field | Value |
|---------------|-------|
| User ID Field | `sub` |
| Username Field | `name` |
| Email Field | `email` |
| Avatar Field | `picture` |

---

### Alibaba Cloud IDaaS

Alibaba Cloud IDaaS (Identity as a Service) is an enterprise-grade identity management service provided by Alibaba Cloud, suitable for enterprises requiring unified identity management.

**Prerequisites:**

1. Log in to the [Alibaba Cloud IDaaS Console](https://yundun.console.aliyun.com/?p=idaas)
2. Create an application and select the OIDC protocol
3. Configure the redirect URI to the HiMarket callback URL
4. Note down the Client ID, Client Secret, and endpoint URLs

**HiMarket Configuration Reference:**

Basic information:

| Field | Value |
|-------|-------|
| Provider Identifier | `aliyun-idaas` |
| Display Name | `Enterprise SSO Login` |
| Logo URL | Enterprise Logo URL (optional) |

Authorization code configuration:

| Field | Value |
|-------|-------|
| Client ID | Obtained after creating an application in the IDaaS console |
| Client Secret | Obtained after creating an application in the IDaaS console |
| Scopes | `openid profile email` |
| Issuer | `https://{your-instance}.login.aliyunidaas.com` |
| Authorization Endpoint | `https://{your-instance}.login.aliyunidaas.com/oauth/authorize` |
| Token Endpoint | `https://{your-instance}.login.aliyunidaas.com/oauth/token` |
| User Info Endpoint | `https://{your-instance}.login.aliyunidaas.com/oauth/userinfo` |
| JWK Set URI | `https://{your-instance}.login.aliyunidaas.com/oauth/jwks` |
| Redirect URI | Leave empty (auto-generated) or fill in manually |

Identity mapping:

| Mapping Field | Value |
|---------------|-------|
| User ID Field | `sub` |
| Username Field | `preferred_username` |
| Email Field | `email` |
| Avatar Field | `picture` |

**Tip:** IDaaS endpoint URLs can be discovered by visiting the Well-Known discovery endpoint: `https://{your-instance}.login.aliyunidaas.com/.well-known/openid-configuration`

---

## Troubleshooting

### 1. Nothing happens when clicking the login button

**Possible causes:**
+ The provider is not enabled
+ The portal frontend failed to load the provider list

**What to check:**
+ Verify the configuration is enabled in the admin console
+ Refresh the portal page and try again

### 2. "invalid_client" error after redirecting to the third-party platform

**Possible causes:**
+ Client ID or Client Secret is misconfigured
+ The application on the third-party platform is disabled or expired

**What to check:**
+ Verify that the Client ID and Client Secret in HiMarket exactly match those on the third-party platform
+ Confirm the application status is enabled on the third-party platform

### 3. "redirect_uri_mismatch" error on callback

**Possible causes:**
+ The callback URL configured in HiMarket does not match the registered callback URL on the third-party platform

**What to check:**
+ Ensure the callback URLs match exactly on both sides, including protocol (http/https), domain, port, and path
+ If the Redirect URI is left empty in HiMarket, ensure the callback URL registered on the third-party platform matches the portal's actual access URL

### 4. Login succeeds but user information is missing

**Possible causes:**
+ Scopes is incomplete and missing required permission scopes
+ Field names in the identity mapping do not match the fields actually returned by the platform

**What to check:**
+ Ensure Scopes includes the necessary permissions (e.g., GitHub requires `read:user user:email`, Google requires `openid profile email`)
+ Consult the platform's documentation to confirm the actual user info field names returned, and adjust the identity mapping configuration

### Log Analysis

If the above methods do not resolve the issue, check the HiMarket backend logs for more detailed error information. The logs record key steps in the authentication process, including authorization URL construction, token exchange, and user info retrieval.
