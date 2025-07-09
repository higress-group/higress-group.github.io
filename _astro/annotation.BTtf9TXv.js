import{c as l,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as u,m as g,u as h,__tla as p}from"./constant.DSwpUafx.js";import{__tla as b}from"./astro/assets-service.BhtN0nM5.js";let t,o,n,i,a,d,s,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let e;e=`<p>Standard K8s Ingress resources can only handle HTTP(S) traffic routing in simple scenarios and cannot address issues such as traffic splitting, timeout retries, header control, and cross-origin requests. Therefore, different Ingress Controllers use custom Ingress Annotations to enhance Ingress capabilities. The common Nginx Ingress Controller has introduced more than 100 annotations to extend Ingress functionality in traffic management and security protection. Currently, Higress has comprehensively supported most Nginx Ingress Annotations, making it easy for users to migrate seamlessly from Nginx Ingress to Higress. This article mainly introduces Higress\u2019s Ingress Annotation configuration guide.</p>
<h2 id="ingress-annotation">Ingress Annotation</h2>
<h3 id="special-notes">Special Notes</h3>
<h4 id="annotation-key-prefix">Annotation Key Prefix</h4>
<p>All Nginx Ingress Annotations mentioned below are supported by Higress. You can continue to use the Nginx Ingress Annotation prefix <code dir="auto">nginx.ingress.kubernetes.io</code> according to your usage habits, or use the Higress Ingress Annotation prefix <code dir="auto">higress.io</code>. Both are equivalent.</p>
<h4 id="scope-description">Scope Description</h4>
<ul>
<li>Ingress: Annotations with Ingress scope are limited to the routing rules defined on the current Ingress.</li>
<li>Domain: Annotations with domain scope apply to all occurrences of the same Host across all Ingresses.</li>
<li>Service: Annotations with service scope apply to all occurrences of the same Service across all Ingresses.</li>
</ul>
<h3 id="traffic-management">Traffic Management</h3>
<h4 id="canary-release">Canary Release</h4>





















































<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/canary</td><td>Ingress</td><td>Compatible</td><td>Enable or disable canary release</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header</td><td>Ingress</td><td>Compatible</td><td>Traffic splitting based on Request Header Key</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header-value</td><td>Ingress</td><td>Compatible</td><td>Traffic splitting based on Request Header Value, exact match</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header-pattern</td><td>Ingress</td><td>Compatible</td><td>Traffic splitting based on Request Header Value, regex match</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-cookie</td><td>Ingress</td><td>Compatible</td><td>Traffic splitting based on Request Cookie Key</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-weight</td><td>Ingress</td><td>Compatible</td><td>Traffic splitting based on weight</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-weight-total</td><td>Ingress</td><td>Compatible</td><td>Total weight</td></tr></tbody></table>
<h4 id="fallback-disaster-recovery">Fallback (Disaster Recovery)</h4>























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/default-backend</td><td>Ingress</td><td>Compatible</td><td>Fallback service. When the service defined in Ingress has no available nodes, requests will be automatically forwarded to this fallback service.</td></tr><tr><td>nginx.ingress.kubernetes.io/custom-http-errors</td><td>Ingress</td><td>Compatible</td><td>This annotation works with <code dir="auto">default-backend</code>. When the backend service returns the specified HTTP response code, the original request will be forwarded to the fallback service again.<br> > Note: When forwarding to the fallback service, the request path will be rewritten to /, which is consistent with ingress-nginx behavior</td></tr></tbody></table>
<h4 id="rewrite">Rewrite</h4>























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/rewrite-target</td><td>Ingress</td><td>Compatible</td><td>Rewrites the original path defined in Ingress to the specified target, supports Group Capture.</td></tr><tr><td>nginx.ingress.kubernetes.io/upstream-vhost</td><td>Ingress</td><td>Compatible</td><td>Modifies the host header value to the specified value when forwarding requests matching Ingress-defined routes.</td></tr></tbody></table>
<h4 id="redirect">Redirect</h4>















































<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/ssl-redirect</td><td>Ingress</td><td>Compatible</td><td>HTTP redirect to HTTPS</td></tr><tr><td>nginx.ingress.kubernetes.io/force-ssl-redirect</td><td>Ingress</td><td>Compatible</td><td>HTTP redirect to HTTPS</td></tr><tr><td>nginx.ingress.kubernetes.io/permanent-redirect</td><td>Ingress</td><td>Compatible</td><td>Permanent redirect</td></tr><tr><td>nginx.ingress.kubernetes.io/permanent-redirect-code</td><td>Ingress</td><td>Compatible</td><td>Permanent redirect status code</td></tr><tr><td>nginx.ingress.kubernetes.io/temporal-redirect</td><td>Ingress</td><td>Compatible</td><td>Temporary redirect</td></tr><tr><td>nginx.ingress.kubernetes.io/app-root</td><td>Ingress</td><td>Compatible</td><td>Modify the application root path, requests to / will be redirected to the new path</td></tr></tbody></table>
<h4 id="cross-origin-resource-sharing-cors">Cross-Origin Resource Sharing (CORS)</h4>





















































<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/enable-cors</td><td>Ingress</td><td>Compatible</td><td>Enable or disable CORS</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-origin</td><td>Ingress</td><td>Compatible</td><td>Allowed third-party sites</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-methods</td><td>Ingress</td><td>Compatible</td><td>Allowed request methods, such as GET, POST, PUT, etc.</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-headers</td><td>Ingress</td><td>Compatible</td><td>Allowed request headers</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-expose-headers</td><td>Ingress</td><td>Compatible</td><td>Response headers allowed to be exposed to the browser</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-credentials</td><td>Ingress</td><td>Compatible</td><td>Whether to allow credentials</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-max-age</td><td>Ingress</td><td>Compatible</td><td>Maximum cache time for preflight results</td></tr></tbody></table>
<h4 id="timeout">Timeout</h4>

















<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>higress.io/timeout</td><td>Ingress</td><td>Higress Extension</td><td>Request timeout in seconds. No timeout is configured by default. Timeout settings apply at the application layer, not the transport layer TCP.</td></tr></tbody></table>
<h4 id="single-instance-rate-limiting">Single-Instance Rate Limiting</h4>





























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>higress.io/route-limit-rpm</td><td>Ingress</td><td>Higress Extension</td><td>Maximum requests per minute for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.</td></tr><tr><td>higress.io/route-limit-rps</td><td>Ingress</td><td>Higress Extension</td><td>Maximum requests per second for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.</td></tr><tr><td>higress.io/route-limit-burst-multiplier</td><td>Ingress</td><td>Higress Extension</td><td>Multiplier for instantaneous maximum request count, default is 5.</td></tr></tbody></table>
<h4 id="retry">Retry</h4>





























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream-tries</td><td>Ingress</td><td>Compatible</td><td>Maximum number of retry attempts. Default is 3.</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream-timeout</td><td>Ingress</td><td>Compatible</td><td>Request retry timeout in seconds. No timeout is configured by default.</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream</td><td>Ingress</td><td>Compatible</td><td>Request retry conditions, refer to <a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream</a></td></tr></tbody></table>
<h4 id="backend-service-protocol">Backend Service Protocol</h4>

















<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/backend-protocol</td><td>Service</td><td>Partially compatible. AJP and FCGI not supported</td><td>Specifies the protocol used by the backend service, default is HTTP, supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS</td></tr></tbody></table>
<h4 id="load-balancing">Load Balancing</h4>























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/load-balance</td><td>Service</td><td>Partially compatible. <code dir="auto">ewma</code> algorithm not supported</td><td>Common load balancing algorithm for backend services. Default is round_robin. <br>Valid values are:<br>- round_robin: Round-robin based load balancing.<br>- least_conn: Least connection based load balancing.<br>- random: Random based load balancing.<br> > Note: Higress does not support the ewma algorithm, if configured as ewma, it will fall back to the round_robin algorithm.</td></tr><tr><td>nginx.ingress.kubernetes.io/upstream-hash-by</td><td>Service</td><td>Partially compatible. Combination of Nginx variables and constants not supported yet</td><td>Consistent hash based load balancing algorithm, Higress supports the following forms:<br>1. Higress supports configuring some nginx variables:<br>- $request_uri: Request Path (including path parameters) as Hash Key <br>- $host: Request Host as Hash Key<br>- $remote_addr: Client IP of the request as Hash Key.<br>2. Consistent hash based on request header. Just configure as $http_headerName.<br>3. Consistent hash based on request path parameters. Just configure as $arg_varName</td></tr></tbody></table>
<h4 id="cookie-affinity">Cookie Affinity</h4>















































<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/affinity</td><td>Service</td><td>Compatible</td><td>Affinity type, currently only supports cookie, default is cookie.</td></tr><tr><td>nginx.ingress.kubernetes.io/affinity-mode</td><td>Service</td><td>Partially compatible. <code dir="auto">persistent</code> mode not supported</td><td>Affinity mode, cloud-native gateway currently only supports balanced mode, default is balanced mode.</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-name</td><td>Service</td><td>Compatible</td><td>Configure the value of the specified Cookie as Hash Key</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-path</td><td>Service</td><td>Compatible</td><td>Path value of the generated Cookie when the specified Cookie does not exist, default is /</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-max-age</td><td>Service</td><td>Compatible</td><td>Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-expires</td><td>Service</td><td>Compatible</td><td>Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.</td></tr></tbody></table>
<h4 id="ip-access-control">IP Access Control</h4>

















<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/<a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">whitelist-source-range</a></td><td>Ingress</td><td>Compatible</td><td>IP whitelist on the specified route, supports IP addresses or CIDR address blocks, separated by commas.</td></tr></tbody></table>
<h3 id="security-protection">Security Protection</h3>
<h4 id="encryption-between-client-and-gateway">Encryption between Client and Gateway</h4>























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/ssl-cipher</td><td>Domain</td><td>Compatible</td><td>Specifies the TLS cipher suite, multiple can be specified, separated by commas, only effective when TLSv1.0-1.2 is used during TLS handshake.<br>Default cipher suites are:<br>- ECDHE-ECDSA-AES128-GCM-SHA256<br>- ECDHE-RSA-AES128-GCM-SHA256<br>- ECDHE-ECDSA-AES128-SHA<br>- ECDHE-RSA-AES128-SHA<br>- AES128-GCM-SHA256<br>- AES128-SHA<br>- ECDHE-ECDSA-AES256-GCM-SHA384<br>- ECDHE-RSA-AES256-GCM-SHA384<br>- ECDHE-ECDSA-AES256-SHA<br>- ECDHE-RSA-AES256-SHA<br>- AES256-GCM-SHA384<br>- AES256-SHA</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-tls-secret</td><td>Domain</td><td>Partially compatible. Secret name format must be: (name of the secret containing the domain certificate)-cacert</td><td>CA certificate used by the gateway to verify the certificate provided by the client during MTLS handshake. This annotation is mainly used in scenarios where the gateway needs to verify the client\u2019s identity.</td></tr></tbody></table>
<h4 id="encryption-between-gateway-and-backend-service">Encryption between Gateway and Backend Service</h4>





























<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-secret</td><td>Service</td><td>Compatible</td><td>Client certificate used by the gateway for backend service to authenticate the gateway</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-name</td><td>Service</td><td>Compatible</td><td>SNI used during TLS handshake</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-server-name</td><td>Service</td><td>Compatible</td><td>Enable or disable SNI during TLS handshake</td></tr></tbody></table>
<h4 id="security-authentication">Security Authentication</h4>
<h5 id="basic">Basic</h5>
<blockquote>
<p>This annotation\u2019s functionality has been replaced by the <a href="https://higress.cn/docs/latest/plugins/authentication/basic-auth/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Basic auth plugin</a> and is no longer supported after version 2.0.0</p>
</blockquote>



































<table><thead><tr><th>Annotation</th><th>Scope</th><th>Support</th><th>Description</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/auth-type</td><td>Ingress</td><td>Partially compatible. Only Basic is supported.</td><td>Authentication type</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-secret</td><td>Ingress</td><td>Compatible</td><td>Secret name, format supports &#x3C;namespace>/&#x3C;name>, containing usernames and passwords that are granted access to the routes defined on this Ingress.</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-secret-type</td><td>Ingress</td><td>Compatible</td><td>Secret content format.<br>- auth-file: data key is auth; value is username and password, multiple accounts separated by newlines<br>- auth-map: data key is username; value is password</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-realm</td><td>Ingress</td><td>Compatible</td><td>Protection realm. The same protection realm shares usernames and passwords.</td></tr></tbody></table>
<h2 id="notes">Notes</h2>
<p>For more information about the Nginx Ingress Annotations mentioned above, please refer to the official documentation (<a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations</a>).</p>`,i={title:"Nginx Ingress Annotation Compatibility Guide",keywords:["Ingress"],description:"Higress Ingress Annotation configuration guide.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/annotation.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/annotation.md",s=void 0,d=function(){return`
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
`},o=function(){return e},a=function(){return[{depth:2,slug:"ingress-annotation",text:"Ingress Annotation"},{depth:3,slug:"special-notes",text:"Special Notes"},{depth:4,slug:"annotation-key-prefix",text:"Annotation Key Prefix"},{depth:4,slug:"scope-description",text:"Scope Description"},{depth:3,slug:"traffic-management",text:"Traffic Management"},{depth:4,slug:"canary-release",text:"Canary Release"},{depth:4,slug:"fallback-disaster-recovery",text:"Fallback (Disaster Recovery)"},{depth:4,slug:"rewrite",text:"Rewrite"},{depth:4,slug:"redirect",text:"Redirect"},{depth:4,slug:"cross-origin-resource-sharing-cors",text:"Cross-Origin Resource Sharing (CORS)"},{depth:4,slug:"timeout",text:"Timeout"},{depth:4,slug:"single-instance-rate-limiting",text:"Single-Instance Rate Limiting"},{depth:4,slug:"retry",text:"Retry"},{depth:4,slug:"backend-service-protocol",text:"Backend Service Protocol"},{depth:4,slug:"load-balancing",text:"Load Balancing"},{depth:4,slug:"cookie-affinity",text:"Cookie Affinity"},{depth:4,slug:"ip-access-control",text:"IP Access Control"},{depth:3,slug:"security-protection",text:"Security Protection"},{depth:4,slug:"encryption-between-client-and-gateway",text:"Encryption between Client and Gateway"},{depth:4,slug:"encryption-between-gateway-and-backend-service",text:"Encryption between Gateway and Backend Service"},{depth:4,slug:"security-authentication",text:"Security Authentication"},{depth:5,slug:"basic",text:"Basic"},{depth:2,slug:"notes",text:"Notes"}]},t=l((f,y,x)=>{const{layout:S,...r}=i;return r.file=n,r.url=s,u`${g()}${h(e)}`})});export{t as Content,m as __tla,o as compiledContent,t as default,n as file,i as frontmatter,a as getHeadings,d as rawContent,s as url};
