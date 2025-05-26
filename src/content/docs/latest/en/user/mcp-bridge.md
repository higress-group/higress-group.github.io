---
title: Mcp Bridge Configuration Guide
keywords: [discovery]
description: Higress Mcp Bridge Configuration Guide.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/mcp-bridge.md
---

# Mcp Bridge Configuration Guide

> **Note**

> Currently, only the mcpbridge resource named `default` in the higress installation namespace is monitored
>
> When using the Higress UI console, the corresponding entry for this configuration is located in the **Service Sources** menu item


## McpBridge Field Description
| Field      | Type | Description                | Example   | Required              |
|------------| --- |----------------------------|-----------|----------------------|
| registries | RegistryConfig Array | Support configuring service sources from multiple different registry centers | []        | No                   |
| name       | String | McpBridge name             | default   | Yes, currently this value can only be default |

## RegistryConfig Field Description
| Field                 | Type | Description                                           | Example Value                           | Required |
|-----------------------| --- |-------------------------------------------------------|----------------------------------------| --- |
| type                  | String | Service discovery type, options: nacos,nacos2,nacos3,zookeeper,consul,eureka,static,dns | nacos2                               | Yes |
| name                  | String | Custom service source name                           | my-nacos                             | Yes |
| domain                | String | Service discovery address, generally the registry center address; when the type is static or dns, this field is used to directly configure the backend address | 192.168.1.2                          | Yes |
| port                  | Integer | Registry center access port                          | 8848                                 | Yes |
| protocol              | String | Service protocol, only effective for static/dns types, supports HTTP/HTTPS/GRPC/GRPCS, default value is HTTP | HTTPS                                | No |
| sni                   | String | When protocol is HTTPS or GRPCS, used to set the SNI used during TLS handshake | www.example.com                      | No |
| zkServicesPath        | String Array | When using zk, fill in the root path of service registration, by default monitors /dubbo and /services, the former is the default root path for dubbo services, the latter is the default root path for SpringCloud services | ["/service-provider"]                | No |
| nacosNamespaceId      | String | Nacos namespace id                                   | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | No |
| nacosGroups           | String Array | Nacos service group list                            | ["DEFAULT_GROUP"]                    | No |
| nacosAccessKey        | String | Nacos access key information when authentication is required | xxxx                                 | No |
| nacosSecretKey        | String | Nacos secret key information when authentication is required | xxxx | No |
| nacosRefreshInterval  | Integer | Service refresh interval in nanoseconds when Nacos authentication is required | 30000000000 (30 seconds)              | No |
| mcpServerExportDomains| String Array | Domains to expose when enabling mcp server, exposes on all domains if not filled | ["example.com","a.test.com"]         | No |
| mcpServerBaseUrl      | String | URL or URL prefix to expose when enabling mcp server (e.g., when using nacos to aggregate multiple mcp servers) | /mcp-server                         | No |
| enableMCPServer       | Boolean | Whether to enable MCPServer (currently only supports nacos3 type service sources) | true                                | No |
| consulDatacenter      | String | Data center name when Consul authentication is required | dc1                                  | No |
| consulServiceTag      | String | Service tag filter when Consul authentication is required | higress                              | No |
| consulRefreshInterval | Integer | Service refresh interval in nanoseconds when Consul authentication is required | 30000000000 (30 seconds)              | No |
| authSecretName        | String | Service discovery authentication information Secret name, see details below | higress-nacos-auth                   | No |

## authSecretName Field Description

Service discovery source authentication information is stored in the corresponding Secret under the higress-system namespace. Currently, nacos and consul service discovery are supported.

Nacos authentication information includes username and password, consul authentication information includes authentication token. Specific Secret configuration examples are as follows:

### Nacos Authentication

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

### Consul Authentication 

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


## Support for Configuring Static Service Discovery Methods

### Discover Services via Fixed IP

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: "1.1.1.1:80,2.2.2.2:80"
    name: test
    port: 80
    type: static
```

### Discover Services via DNS Domain Name

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: www.alibaba.com
    name: alibaba
    port: 443
    protocol: HTTPS
    type: dns
```