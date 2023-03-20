---
title: Ingress Annotation 配置说明
keywords: [Ingress]
description: Higress Ingress Annotation 配置说明。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/annotation.md
---

# Ingress Annotaion 配置说明
标准的K8s Ingress资源只能处理简单场景下的HTTP(S)流量路由，无法处理流量切分，超时重试，Header控制和跨域等问题。因此，不同的Ingress Controller利用自定义的Ingress Annotation增强Ingress能力。常见的Nginx Ingress Controller引入了100多个Annotation对Ingress在流量治理和安全防护上进行了扩展实现。目前，Higress已经全面兼容了大部分Nginx Ingress Annotation，方便用户从Nginx Ingress无缝迁移至Higress，本文主要介绍Higress关于Ingress Annotation的配置说明。

## Ingress Annotation

### 特殊说明
#### Annotation Key 前缀
以下出现的Nginx Ingress Annotation都已被Higress支持，您可以根据使用习惯继续使用Nginx Ingress的Annotation前缀`nginx.ingress.kubernetes.io`，或者使用Higress Ingress的Annotation前缀`higress.io`，两者是等价的。

#### 作用域说明
- Ingress：作用域为Ingress的Annotation的作用范围仅限当前Ingress上定义的路由规则。
- 域名：作用域为域名的Annotation，其作用范围为所有Ingress上出现的相同Host。
- 服务：作用域为服务的Annotation，其作用范围为所有Ingress上出现的相同Service。

### 流量治理
#### 灰度发布
| 注解                                                   | 作用域     | 支持度 | 说明                                     |
|------------------------------------------------------|---------|-----|----------------------------------------|
| nginx.ingress.kubernetes.io/canary                   | Ingress | 兼容  | 开启或关闭灰度发布                              |
| nginx.ingress.kubernetes.io/canary-by-header         | Ingress | 兼容  | 基于Request Header Key 流量切分              |
| nginx.ingress.kubernetes.io/canary-by-header-value   | Ingress | 兼容  | 基于Request Header Value 流量切分，Value为精确匹配 |
| nginx.ingress.kubernetes.io/canary-by-header-pattern | Ingress | 兼容  | 基于Request Header Value 流量切分，Value为正则匹配 |
| nginx.ingress.kubernetes.io/canary-by-cookie         | Ingress | 兼容  | 基于Request Cookie Key 流量切分              |
| nginx.ingress.kubernetes.io/canary-weight            | Ingress | 兼容  | 基于权重 流量切分                              |
| nginx.ingress.kubernetes.io/canary-weight-total      | Ingress | 兼容  | 权重总和                                   |

#### Fallback（容灾）
| 注解                                             | 作用域     | 支持度 | 说明                                                                                                                |
|------------------------------------------------|---------|-----|-------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/default-backend    | Ingress | 兼容  | 容灾服务。当Ingress定义的服务没有可用节点时，请求会自动转发该容灾服务。                                                                           |
| nginx.ingress.kubernetes.io/custom-http-errors | Ingress | 兼容  | 该注解和`default-backend`一起工作。当后端服务返回指定HTTP响应码，原始请求会被再次转发至容灾服务。<br /> > 注意：转发至容灾服务时，请求的Path会被重写为/，该行为与ingress-nginx保持一致 |

#### 重写
| 注解                                         | 作用域     | 支持度 | 说明                                        |
|--------------------------------------------|---------|-----|-------------------------------------------|
| nginx.ingress.kubernetes.io/rewrite-target | Ingress | 兼容  | 将Ingress定义的原path重写为指定目标，支持Group Capture.  |
| nginx.ingress.kubernetes.io/upstream-vhost | Ingress | 兼容  | 匹配Ingress定义的路由的请求在转发给后端服务时，修改头部host值为指定值。 |

#### 重定向
| 注解                                                  | 作用域     | 支持度 | 说明                            |
|-----------------------------------------------------|---------|-----|-------------------------------|
| nginx.ingress.kubernetes.io/ssl-redirect            | Ingress | 兼容  | HTTP 重定向为HTTPS                |
| nginx.ingress.kubernetes.io/force-ssl-redirect      | Ingress | 兼容  | HTTP 重定向为HTTPS                |
| nginx.ingress.kubernetes.io/permanent-redirect      | Ingress | 兼容  | 永久重定向                         |
| nginx.ingress.kubernetes.io/permanent-redirect-code | Ingress | 兼容  | 永久重定向状态码                      |
| nginx.ingress.kubernetes.io/temporal-redirect       | Ingress | 兼容  | 临时重定向                         |
| nginx.ingress.kubernetes.io/app-root                | Ingress | 兼容  | 修改应用根路径，对于访问/的请求将会被重定向为设置的新路径 |

#### 跨域
| 注解                                                 | 作用域     | 支持度 | 说明                     |
|----------------------------------------------------|---------|-----|------------------------|
| nginx.ingress.kubernetes.io/enable-cors            | Ingress | 兼容  | 开启或关闭跨域                |
| nginx.ingress.kubernetes.io/cors-allow-origin      | Ingress | 兼容  | 允许的第三方站点               |
| nginx.ingress.kubernetes.io/cors-allow-methods     | Ingress | 兼容  | 允许的请求方法，如GET、POST、PUT等 |
| nginx.ingress.kubernetes.io/cors-allow-headers     | Ingress | 兼容  | 允许的请求Header            |
| nginx.ingress.kubernetes.io/cors-expose-headers    | Ingress | 兼容  | 允许的暴露给浏览器的响应Header     |
| nginx.ingress.kubernetes.io/cors-allow-credentials | Ingress | 兼容  | 是否允许携带凭证信息             |
| nginx.ingress.kubernetes.io/cors-max-age           | Ingress | 兼容  | 预检结果的最大缓存时间            |

#### 重试
| 注解                                                      | 作用域     | 支持度 | 说明                                                                                                                                                                    |
|---------------------------------------------------------|---------|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/proxy-next-upstream-tries   | Ingress | 兼容  | 请求的最大重试次数。默认3次。                                                                                                                                                       |
| nginx.ingress.kubernetes.io/proxy-next-upstream-timeout | Ingress | 兼容  | 请求重试的超时时间，单位秒。默认未配置超时时间。                                                                                                                                              |
| nginx.ingress.kubernetes.io/proxy-next-upstream         | Ingress | 兼容  | 请求重试条件，参考[http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream) |


#### 后端服务使用的协议
| 注解                                           | 作用域 | 支持度              | 说明                                                |
|----------------------------------------------|-----|------------------|---------------------------------------------------|
| nginx.ingress.kubernetes.io/backend-protocol | 服务  | 部分兼容。不支持AJP和FCGI | 指定后端服务使用的协议，默认为HTTP，支持HTTP、HTTP2、HTTPS、GRPC和GRPCS |


#### 负载均衡
| 注解                                           | 作用域 | 支持度                        | 说明                                                                                                                                                                                                                                                                      |
|----------------------------------------------|-----|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/load-balance     | 服务  | 部分兼容。不支持`ewma`算法           | 后端服务的普通负载均衡算法。默认为round_robin。 <br />合法值如下：<br />- round_robin：基于轮询的负载均衡。<br />- least_conn：基于最小请求数的负载均衡。<br />- random：基于随机的负载均衡。<br /> > 注意：Higress不支持ewma算法，若配置为ewma算法，会回退到round_robin算法。                                                                                       |
| nginx.ingress.kubernetes.io/upstream-hash-by | 服务  | 部分兼容。暂不支持Nginx变量、常量的组合使用方式 | 基于一致Hash的负载均衡算法，Higress支持以下几种形式：<br />1. Higress支持配置部分nginx变量：<br />- $request_uri：请求的Path（包括路径参数）作为Hash Key <br />- $host：请求的Host作为Hash Key<br />- $remote_addr：请求的客户端IP作为Hash Key。<br />2. 基于请求header的一致性Hash。您只需配置为$http_headerName。<br />3. 基于请求路径参数的一致性Hash。您只需配置为$arg_varName |


#### Cookie亲和性
| 注解                                                 | 作用  | 支持度                     | 说明                                               |
|----------------------------------------------------|-----|-------------------------|--------------------------------------------------|
| nginx.ingress.kubernetes.io/affinity               | 服务  | 兼容                      | 亲和性种类，目前只支持cookie，默认为cookie。                     |
| nginx.ingress.kubernetes.io/affinity-mode          | 服务  | 部分兼容。暂不支持`persistent`模式 | 亲和性模式，云原生网关目前只支持balanced模式，默认为balanced模式。        |
| nginx.ingress.kubernetes.io/session-cookie-name    | 服务  | 兼容                      | 配置指定Cookie的值作为Hash Key                           |
| nginx.ingress.kubernetes.io/session                |     |                         |                                                  |
| -cookie-path                                       | 服务  | 兼容                      | 当指定Cookie不存在，生成的Cookie的Path值，默认为/                |
| nginx.ingress.kubernetes.io/session-cookie-max-age | 服务  | 兼容                      | 当指定Cookie不存在，生成的Cookie的过期时间，单位为秒，默认为Session会话级别。 |
| nginx.ingress.kubernetes.io/session-cookie-expires | 服务  | 兼容                      | 当指定Cookie不存在，生成的Cookie的过期时间，单位为秒，默认为Session会话级别。 |


#### IP访问控制
| 注解                                                                                                                                                                  | 作用域     | 支持度 | 说明                                |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----|-----------------------------------|
| nginx.ingress.kubernetes.io/[whitelist-source-range](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range) | Ingress | 兼容  | 指定路由上的IP白名单，支持IP地址或CIDR地址块，以逗号分隔。 |

### 安全防护
#### 客户端与网关之前的通信加密
| 注解                                          | 作用域 | 支持度                                           | 说明                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|-----|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/ssl-cipher      | 域名  | 兼容                                            | 指定tls的加密套件，可以指定多个，英文逗号分隔，仅当tls握手时采用TLSv1.0-1.2生效。<br />默认加密套件如下：<br />- ECDHE-ECDSA-AES128-GCM-SHA256<br />- ECDHE-RSA-AES128-GCM-SHA256<br />- ECDHE-ECDSA-AES128-SHA<br />- ECDHE-RSA-AES128-SHA<br />- AES128-GCM-SHA256<br />- AES128-SHA<br />- ECDHE-ECDSA-AES256-GCM-SHA384<br />- ECDHE-RSA-AES256-GCM-SHA384<br />- ECDHE-ECDSA-AES256-SHA<br />- ECDHE-RSA-AES256-SHA<br />- AES256-GCM-SHA384<br />- AES256-SHA |
| nginx.ingress.kubernetes.io/auth-tls-secret | 域名  | 部分兼容。secret名字格式必须是：(该域名证书所在的secret的名字)-cacert | 网关使用的CA证书，用于验证MTLS握手期间，客户端提供的证书。该注解主要应用于网关需要验证客户端身份的场景。                                                                                                                                                                                                                                                                                                                                          |


#### 网关与后端服务之间通信加密
| 注解                                                | 作用域 | 支持度 | 说明                         |
|---------------------------------------------------|-----|-----|----------------------------|
| nginx.ingress.kubernetes.io/proxy-ssl-secret      | 服务  | 兼容  | 网关使用的客户端证书，用于后端服务对网关进行身份认证 |
| nginx.ingress.kubernetes.io/proxy-ssl-name        | 服务  | 兼容  | TLS握手期间使用的SNI              |
| nginx.ingress.kubernetes.io/proxy-ssl-server-name | 服务  | 兼容  | 开启或关闭TLS握手期间使用SNI          |

#### 安全认证
##### Basic
| 注解                                           | 作用域     | 支持度             | 说明                                                                                                |
|----------------------------------------------|---------|-----------------|---------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/auth-type        | Ingress | 部分兼容。暂只支持Basic。 | 认证类型                                                                                              |
| nginx.ingress.kubernetes.io/auth-secret      | Ingress | 兼容              | Secret名字，格式支持&lt;namespace&gt;/&lt;name&gt;，包含被授予能够访问该Ingress上定义的路由的访问权限的用户名和密码。                              |
| nginx.ingress.kubernetes.io/auth-secret-type | Ingress | 兼容              | Secret内容格式。<br />- auth-file：data的key为auth；value为用户名和密码，多帐号回车分隔<br />- auth-map：data的key为用户名；value为密码 |
| nginx.ingress.kubernetes.io/auth-realm       | Ingress | 兼容              | 保护域。相同的保护域共享用户名和密码。                                                                               |


## 备注
关于以上提到的Nginx Ingress Annotation的更多信息，请参阅官方文档（[https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations)）。
