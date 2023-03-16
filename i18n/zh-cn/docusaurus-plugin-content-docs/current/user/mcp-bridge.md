---
title: Mcp Bridge 配置说明
keywords: [discovery]
description: Higress Mcp Bridge 配置说明。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/mcp-bridge.md
---

# Mcp Bridge 配置说明

## McpBridge 字段说明
| 字段 | 类型 | 说明 | 示例值 | 是否必填 |
| --- | --- | --- | --- | --- |
| registries | RegistryConfig 数组 | 支持配置多个不同注册中心的服务来源 | [] | 否 |

## RegistryConfig 字段说明
| 字段 | 类型 | 说明 | 示例值 | 是否必填 |
| --- | --- | --- | --- | --- |
| type | 字符串 | 注册中心类型，可选项：nacos,nacos2,zookeeper,consul,eureka | nacos2 | 是 |
| name | 字符串 | 自定义的服务来源名称 | my-nacos | 是 |
| domain | 字符串 | 注册中心地址，可以是ip或域名 | 192.168.1.2 | 是 |
| port | 整数 | 注册中心访问端口 | 8848 | 是 |
| consulNamespace | 字符串 | 使用consul时需要填写命名空间 | my-consul-namespace | 否 |
| zkServicesPath | 字符串数组 | 使用zk时,填写服务注册的根路径,默认监听 /dubbo 和 /services，前者为dubbo 服务默认根路径，后者为SpringCloud服务默认根路径 | ["/service-provider"] | 否 |
| nacosNamespaceId | 字符串 | nacos命名空间id | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | 否 |
| nacosGroups | 字符串数组 | nacos服务分组列表 | ["DEFAULT_GROUP"] | 否 |
| nacosAccessKey | 字符串 | nacos需要认证时填写的ak信息 | xxxx | 否 |
| nacosSecretKey | 字符串 | nacos需要认证时填写的sk信息 | xxxx | 否 |

