const e="latest/en/user/annotation.md",n="docs",t="latest/en/user/annotation",s=`
# Nginx Ingress Annotation Compatibility Guide
Standard K8s Ingress resources can only handle HTTP(S) traffic routing in simple scenarios and cannot address issues such as traffic splitting, timeout retries, header control, and cross-origin requests. Therefore, different Ingress Controllers use custom Ingress Annotations to enhance Ingress capabilities. The common Nginx Ingress Controller has introduced more than 100 annotations to extend Ingress functionality in traffic management and security protection. Currently, Higress has comprehensively supported most Nginx Ingress Annotations, making it easy for users to migrate seamlessly from Nginx Ingress to Higress. This article mainly introduces Higress's Ingress Annotation configuration guide.

## Ingress Annotation

### Special Notes
#### Annotation Key Prefix
All Nginx Ingress Annotations mentioned below are supported by Higress. You can continue to use the Nginx Ingress Annotation prefix \`nginx.ingress.kubernetes.io\` according to your usage habits, or use the Higress Ingress Annotation prefix \`higress.io\`. Both are equivalent.

#### Scope Description
- Ingress: Annotations with Ingress scope are limited to the routing rules defined on the current Ingress.
- Domain: Annotations with domain scope apply to all occurrences of the same Host across all Ingresses.
- Service: Annotations with service scope apply to all occurrences of the same Service across all Ingresses.

### Traffic Management
#### Canary Release
| Annotation                                           | Scope   | Support | Description                                                 |
|------------------------------------------------------|---------|---------|-------------------------------------------------------------|
| nginx.ingress.kubernetes.io/canary                   | Ingress | Compatible | Enable or disable canary release                           |
| nginx.ingress.kubernetes.io/canary-by-header         | Ingress | Compatible | Traffic splitting based on Request Header Key              |
| nginx.ingress.kubernetes.io/canary-by-header-value   | Ingress | Compatible | Traffic splitting based on Request Header Value, exact match |
| nginx.ingress.kubernetes.io/canary-by-header-pattern | Ingress | Compatible | Traffic splitting based on Request Header Value, regex match |
| nginx.ingress.kubernetes.io/canary-by-cookie         | Ingress | Compatible | Traffic splitting based on Request Cookie Key              |
| nginx.ingress.kubernetes.io/canary-weight            | Ingress | Compatible | Traffic splitting based on weight                          |
| nginx.ingress.kubernetes.io/canary-weight-total      | Ingress | Compatible | Total weight                                              |

#### Fallback (Disaster Recovery)
| Annotation                                       | Scope   | Support | Description                                                                                                                                                                                                                  |
|--------------------------------------------------|---------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/default-backend    | Ingress | Compatible | Fallback service. When the service defined in Ingress has no available nodes, requests will be automatically forwarded to this fallback service.                                                                                |
| nginx.ingress.kubernetes.io/custom-http-errors | Ingress | Compatible | This annotation works with \`default-backend\`. When the backend service returns the specified HTTP response code, the original request will be forwarded to the fallback service again.<br /> > Note: When forwarding to the fallback service, the request path will be rewritten to /, which is consistent with ingress-nginx behavior |

#### Rewrite
| Annotation                                   | Scope   | Support | Description                                                                                                     |
|----------------------------------------------|---------|---------|------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/rewrite-target | Ingress | Compatible | Rewrites the original path defined in Ingress to the specified target, supports Group Capture.                  |
| nginx.ingress.kubernetes.io/upstream-vhost | Ingress | Compatible | Modifies the host header value to the specified value when forwarding requests matching Ingress-defined routes. |

#### Redirect
| Annotation                                            | Scope   | Support | Description                                                                          |
|-------------------------------------------------------|---------|---------|--------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/ssl-redirect            | Ingress | Compatible | HTTP redirect to HTTPS                                                              |
| nginx.ingress.kubernetes.io/force-ssl-redirect      | Ingress | Compatible | HTTP redirect to HTTPS                                                              |
| nginx.ingress.kubernetes.io/permanent-redirect      | Ingress | Compatible | Permanent redirect                                                                  |
| nginx.ingress.kubernetes.io/permanent-redirect-code | Ingress | Compatible | Permanent redirect status code                                                      |
| nginx.ingress.kubernetes.io/temporal-redirect       | Ingress | Compatible | Temporary redirect                                                                  |
| nginx.ingress.kubernetes.io/app-root                | Ingress | Compatible | Modify the application root path, requests to / will be redirected to the new path |

#### Cross-Origin Resource Sharing (CORS)
| Annotation                                           | Scope   | Support | Description                                                  |
|------------------------------------------------------|---------|---------|--------------------------------------------------------------|
| nginx.ingress.kubernetes.io/enable-cors            | Ingress | Compatible | Enable or disable CORS                                      |
| nginx.ingress.kubernetes.io/cors-allow-origin      | Ingress | Compatible | Allowed third-party sites                                   |
| nginx.ingress.kubernetes.io/cors-allow-methods     | Ingress | Compatible | Allowed request methods, such as GET, POST, PUT, etc.       |
| nginx.ingress.kubernetes.io/cors-allow-headers     | Ingress | Compatible | Allowed request headers                                     |
| nginx.ingress.kubernetes.io/cors-expose-headers    | Ingress | Compatible | Response headers allowed to be exposed to the browser       |
| nginx.ingress.kubernetes.io/cors-allow-credentials | Ingress | Compatible | Whether to allow credentials                                |
| nginx.ingress.kubernetes.io/cors-max-age           | Ingress | Compatible | Maximum cache time for preflight results                    |

#### Timeout

| Annotation                | Scope   | Support        | Description                                                                                                     |
|---------------------------|---------|---------------|-----------------------------------------------------------------------------------------------------------------|
| higress.io/timeout     | Ingress | Higress Extension | Request timeout in seconds. No timeout is configured by default. Timeout settings apply at the application layer, not the transport layer TCP. |

#### Single-Instance Rate Limiting

| Annotation                                | Scope   | Support        | Description                                                                                                     |
|-------------------------------------------|---------|---------------|-----------------------------------------------------------------------------------------------------------------|
| higress.io/route-limit-rpm              | Ingress | Higress Extension | Maximum requests per minute for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier. |
| higress.io/route-limit-rps              | Ingress | Higress Extension | Maximum requests per second for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier. |
| higress.io/route-limit-burst-multiplier | Ingress | Higress Extension | Multiplier for instantaneous maximum request count, default is 5. |

#### Retry
| Annotation                                                | Scope   | Support | Description                                                                                                                                                                    |
|-----------------------------------------------------------|---------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/proxy-next-upstream-tries   | Ingress | Compatible | Maximum number of retry attempts. Default is 3.                                                                                                                               |
| nginx.ingress.kubernetes.io/proxy-next-upstream-timeout | Ingress | Compatible | Request retry timeout in seconds. No timeout is configured by default.                                                                                                         |
| nginx.ingress.kubernetes.io/proxy-next-upstream         | Ingress | Compatible | Request retry conditions, refer to [http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream) |

#### Backend Service Protocol
| Annotation                                     | Scope   | Support                                  | Description                                                                                                           |
|------------------------------------------------|---------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/backend-protocol | Service | Partially compatible. AJP and FCGI not supported | Specifies the protocol used by the backend service, default is HTTP, supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS |

#### Load Balancing
| Annotation                                     | Scope   | Support                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|------------------------------------------------|---------|--------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/load-balance     | Service | Partially compatible. \`ewma\` algorithm not supported | Common load balancing algorithm for backend services. Default is round_robin. <br />Valid values are:<br />- round_robin: Round-robin based load balancing.<br />- least_conn: Least connection based load balancing.<br />- random: Random based load balancing.<br /> > Note: Higress does not support the ewma algorithm, if configured as ewma, it will fall back to the round_robin algorithm.                                                                                                                 |
| nginx.ingress.kubernetes.io/upstream-hash-by | Service | Partially compatible. Combination of Nginx variables and constants not supported yet | Consistent hash based load balancing algorithm, Higress supports the following forms:<br />1. Higress supports configuring some nginx variables:<br />- $request_uri: Request Path (including path parameters) as Hash Key <br />- $host: Request Host as Hash Key<br />- $remote_addr: Client IP of the request as Hash Key.<br />2. Consistent hash based on request header. Just configure as $http_headerName.<br />3. Consistent hash based on request path parameters. Just configure as $arg_varName |

#### Cookie Affinity
| Annotation                                           | Scope   | Support                                       | Description                                                                                                 |
|------------------------------------------------------|---------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/affinity               | Service | Compatible                                    | Affinity type, currently only supports cookie, default is cookie.                                           |
| nginx.ingress.kubernetes.io/affinity-mode          | Service | Partially compatible. \`persistent\` mode not supported | Affinity mode, cloud-native gateway currently only supports balanced mode, default is balanced mode.        |
| nginx.ingress.kubernetes.io/session-cookie-name    | Service | Compatible                                    | Configure the value of the specified Cookie as Hash Key                                                     |
| nginx.ingress.kubernetes.io/session-cookie-path    | Service | Compatible                                    | Path value of the generated Cookie when the specified Cookie does not exist, default is /                   |
| nginx.ingress.kubernetes.io/session-cookie-max-age | Service | Compatible                                    | Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level. |
| nginx.ingress.kubernetes.io/session-cookie-expires | Service | Compatible                                    | Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level. |

#### IP Access Control
| Annotation                                                                                                                                                                  | Scope   | Support | Description                                                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|---------|-------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/[whitelist-source-range](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range) | Ingress | Compatible | IP whitelist on the specified route, supports IP addresses or CIDR address blocks, separated by commas. |

### Security Protection
#### Encryption between Client and Gateway
| Annotation                                    | Scope   | Support                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------------------------------------------|---------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/ssl-cipher      | Domain | Compatible                                                                             | Specifies the TLS cipher suite, multiple can be specified, separated by commas, only effective when TLSv1.0-1.2 is used during TLS handshake.<br />Default cipher suites are:<br />- ECDHE-ECDSA-AES128-GCM-SHA256<br />- ECDHE-RSA-AES128-GCM-SHA256<br />- ECDHE-ECDSA-AES128-SHA<br />- ECDHE-RSA-AES128-SHA<br />- AES128-GCM-SHA256<br />- AES128-SHA<br />- ECDHE-ECDSA-AES256-GCM-SHA384<br />- ECDHE-RSA-AES256-GCM-SHA384<br />- ECDHE-ECDSA-AES256-SHA<br />- ECDHE-RSA-AES256-SHA<br />- AES256-GCM-SHA384<br />- AES256-SHA |
| nginx.ingress.kubernetes.io/auth-tls-secret | Domain | Partially compatible. Secret name format must be: (name of the secret containing the domain certificate)-cacert | CA certificate used by the gateway to verify the certificate provided by the client during MTLS handshake. This annotation is mainly used in scenarios where the gateway needs to verify the client's identity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Encryption between Gateway and Backend Service
| Annotation                                          | Scope   | Support | Description                                                                                                 |
|-----------------------------------------------------|---------|---------|-------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/proxy-ssl-secret      | Service | Compatible | Client certificate used by the gateway for backend service to authenticate the gateway                      |
| nginx.ingress.kubernetes.io/proxy-ssl-name        | Service | Compatible | SNI used during TLS handshake                                                                              |
| nginx.ingress.kubernetes.io/proxy-ssl-server-name | Service | Compatible | Enable or disable SNI during TLS handshake                                                                 |

#### Security Authentication

##### Basic

> This annotation's functionality has been replaced by the [Basic auth plugin](https://higress.cn/docs/latest/plugins/authentication/basic-auth/) and is no longer supported after version 2.0.0

| Annotation                                     | Scope   | Support                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|------------------------------------------------|---------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/auth-type        | Ingress | Partially compatible. Only Basic is supported. | Authentication type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| nginx.ingress.kubernetes.io/auth-secret      | Ingress | Compatible                               | Secret name, format supports &lt;namespace&gt;/&lt;name&gt;, containing usernames and passwords that are granted access to the routes defined on this Ingress.                                                                                                                                                                                                                                                                                                                                                     |
| nginx.ingress.kubernetes.io/auth-secret-type | Ingress | Compatible                               | Secret content format.<br />- auth-file: data key is auth; value is username and password, multiple accounts separated by newlines<br />- auth-map: data key is username; value is password |
| nginx.ingress.kubernetes.io/auth-realm       | Ingress | Compatible                               | Protection realm. The same protection realm shares usernames and passwords.                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Notes
For more information about the Nginx Ingress Annotations mentioned above, please refer to the official documentation ([https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations)).
`,i={title:"Nginx Ingress Annotation Compatibility Guide",description:"Higress Ingress Annotation configuration guide.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Ingress"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/annotation.md",rawData:void 0};export{r as _internal,s as body,n as collection,i as data,e as id,t as slug};
