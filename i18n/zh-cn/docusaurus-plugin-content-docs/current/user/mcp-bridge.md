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
| 字段                    | 类型 | 说明                                           | 示例值                                  | 是否必填 |
|-----------------------| --- |----------------------------------------------|--------------------------------------| --- |
| type                  | 字符串 | 注册中心类型，可选项：nacos,nacos2,zookeeper,consul,eureka | nacos2                               | 是 |
| name                  | 字符串 | 自定义的服务来源名称                                   | my-nacos                             | 是 |
| domain                | 字符串 | 注册中心地址，可以是ip或域名                              | 192.168.1.2                          | 是 |
| port                  | 整数 | 注册中心访问端口                                     | 8848                                 | 是 |
| zkServicesPath        | 字符串数组 | 使用zk时,填写服务注册的根路径,默认监听 /dubbo 和 /services，前者为dubbo 服务默认根路径，后者为SpringCloud服务默认根路径 | ["/service-provider"]                | 否 |
| nacosNamespaceId      | 字符串 | nacos命名空间id                                  | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | 否 |
| nacosGroups           | 字符串数组 | nacos服务分组列表                                  | ["DEFAULT_GROUP"]                    | 否 |
| nacosAccessKey        | 字符串 | nacos需要认证时填写的ak信息                            | xxxx                                 | 否 |
| nacosSecretKey        | 字符串 | nacos需要认证时填写的sk信息                            | xxxx | 否 |
| nacosRefreshInterval  | 整数 | nacos需要认证时填写的服务刷新间隔纳秒数                       | 30000000000（30秒）                     | 否 |
| consulDatacenter      | 字符串 | consul需要认证时填写的数据中心名称                         | dc1                                  | 否 |
| consulServiceTag      | 字符串 | consul需要认证时填写的服务标签过滤                         | higress                              | 否 |
| consulRefreshInterval | 整数 | consul需要认证时填写的服务刷新间隔纳秒数                      | 30000000000（30秒）                     | 否 |
| authSecretName        | 字符串 | 服务发现认证信息 Secret 名称, 具体看下面说明                  | higress-nacos-auth                      | 否 |

## authSecretName 字段说明

服务发现来源认证信息保存在 higress-system 命名空间下对应 Secret 下 ，现在支持 nacos 和 consul 服务发现。

nacos 认证信息包含用户名和密码， consul 认证信息包含认证 token， 具体 Secret 配置样例如下：

### nacos 认证

```yaml
apiVersion: v1
data:
  nacosPassword: aGlncmVzcw==
  nacosUsername: aGlncmVzcw==
kind: Secret
metadata:
  name: higress-nacos-auth
  namespace: higress-system
type: Opaque
```

### consul 认证 

```yaml
apiVersion: v1
data:
  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy
kind: Secret
metadata:
  name: higress-consul-auth
  namespace: higress-system
type: Opaque
```