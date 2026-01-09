---
title: Advanced Traffic Management with Ingress Annotations
keywords: [Ingress Annotation]
description: Using Ingress with Annotations to implement advanced traffic management in Higress.
---

This document explains how to use Ingress with Annotations to implement advanced traffic management in Higress.

## Prerequisites
- [Install Higress](./quickstart.md)
- Have a Kubernetes cluster with kubectl command-line tool configured

## Canary Release
Higress provides complex routing capabilities, supporting canary release functionality based on Header, Cookie, and weight. Canary release can be implemented by setting annotations. To enable canary release, you need to set the annotation `higress.io/canary: "true"`. Different annotations can implement different canary release functionalities.
> Note: When multiple methods are configured simultaneously, the priority of canary selection is: Header-based > Cookie-based > Weight-based (from high to low).

### Header-based Canary Release
- Configure only `higress.io/canary-by-header`: Traffic splitting based on Request Header name. When the request contains this Header with a value of "always", the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
- Configure both `higress.io/canary-by-header` and `higress.io/canary-by-header-value`: Traffic splitting based on Request Header name and value. When the header name and value in the request match this configuration, the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
> Higress supports multiple version services for canary releases (no upper limit).

1. When the request Header is `higress: always`, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
  name: demo-canary
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact   
```
2. When the request Header is `higress: v1`, it will access the canary service demo-service-canary-v1; when the request Header is `higress: v2`, it will access the canary service demo-service-canary-v2; otherwise, it will access the production service demo-service. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v2"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

### Cookie-based Canary Release
- higress.io/canary-by-cookie: Traffic splitting based on Cookie Key. When the request's Cookie contains this Key with a value of "always", the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
> Note: Cookie-based canary release does not support custom setting of the Key's corresponding value; it can only be "always".

When the request Cookie is `demo=always`, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-cookie: "demo"
  name: demo-canary
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

### Weight-based Canary Release
- higress.io/canary-weight: Sets the percentage of requests to the specified service (value is an integer from 0 to 100)
- higress.io/canary-weight-total: Sets the total weight, default is 100

Configure the weight of canary service demo-service-canary-v1 as 30%, the weight of canary service demo-service-canary-v2 as 20%, and the weight of production service demo-service as 50%.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "30"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "20"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```

## Cross-Origin Resource Sharing (CORS)
Cross-Origin Resource Sharing (CORS) allows web application servers to control cross-origin access, enabling secure cross-origin data transmission.
- higress.io/enable-cors: "true" or "false". Enable or disable CORS.
- higress.io/cors-allow-origin: Allowed third-party sites, supports wildcard domains, comma-separated; supports wildcard *. Default value is *, allowing all third-party sites.
- higress.io/cors-allow-methods: Allowed request methods, such as GET, POST, comma-separated; supports wildcard *. Default value is GET, PUT, POST, DELETE, PATCH, OPTIONS.
- higress.io/cors-allow-headers: Allowed request headers, comma-separated; supports wildcard *. Default value is DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization.
- higress.io/cors-expose-headers: Response headers allowed to be exposed to the browser, comma-separated.
- higress.io/cors-allow-credentials: "true" or "false". Whether to allow credentials. Default is allowed.
- higress.io/cors-max-age: Maximum cache time for preflight results, in seconds; default value is 1728000.


Cross-origin requests are restricted to only come from the example.com domain, HTTP methods can only be GET and POST, allowed request header is X-Foo-Bar, and credentials are not allowed.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/enable-cors: "true"
    higress.io/cors-allow-origin: "example.com"
    higress.io/cors-allow-methods: "GET,POST"
    higress.io/cors-allow-headers: "X-Foo-Bar"
    higress.io/cors-allow-credentials: "false"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```
## Rewrite Path and Host
Rewriting can modify the original request's path and host domain before forwarding the request to the target backend service.
- higress.io/rewrite-target: Rewrite Path, supports Capture Group.
- higress.io/upstream-vhost: Rewrite Host.

### Rewrite Path
1. Rewrite the request `example.com/test` to `example.com/dev` before forwarding to the backend service
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/dev"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

2. Remove the path prefix /v1 from the request `example.com/v1/app` before forwarding to the backend service
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
```

3. Change the path prefix /v1 to /v2 for the request `example.com/v1/app` before forwarding to the backend service
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/v2/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
```

### Rewrite Host
Rewrite the request `example.com/test` to `test.com/test` before forwarding to the backend service
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Redirect
Redirects can change the original client request to a target request.
### Configure HTTP Redirect to HTTPS
- higress.io/ssl-redirect: HTTP redirect to HTTPS
- higress.io/force-ssl-redirect: HTTP redirect to HTTPS
> Note: Higress treats both annotations the same way, both forcibly redirect HTTP to HTTPS.

Redirect the request `http://example.com/test` to `https://example.com/test`.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/ssl-redirect: "true"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

### Permanent Redirect
- higress.io/permanent-redirect: Target URL for permanent redirect, must include scheme (http or https).
- higress.io/permanent-redirect-code: HTTP status code for permanent redirect, default is 301.

Permanently redirect the request `http://example.com/test` to `http://example.com/app`.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/permanent-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

### Temporary Redirect
- higress.io/temporal-redirect: Target URL for temporary redirect, must include scheme (http or https).
  
Temporarily redirect the request `http://example.com/test` to `http://example.com/app`.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/temporal-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Header Control
With Header Control, you can add, modify, or remove request headers before forwarding requests to backend services, and add, modify, or remove response headers before sending responses back to clients.
### Request Header Control
- higress.io/request-header-control-add: Add specified headers when forwarding requests to backend services. If the header exists, its value is appended to the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/request-header-control-update: Modify specified headers when forwarding requests to backend services. If the header exists, its value replaces the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/request-header-control-remove: Remove specified headers when forwarding requests to backend services. Syntax:
  - Single header: Key
  - Multiple headers: Comma-separated

1. Add two headers to the request `example.com/test`: `foo: bar` and `test: true`.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: |
      foo bar
      test true
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

2. Header control can be combined with canary release to color canary traffic. When the request header is `higress: v1`, it will access the canary service demo-service-canary-v1 and add the header `stage: gray`; otherwise, it will access the production service demo-service and add the header `stage: production`. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
    higress.io/request-header-control-add: "stage gray"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: "stage production"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
```
### Response Header Control
- higress.io/response-header-control-add: Add specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value is appended to the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/response-header-control-update: Modify specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value replaces the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/response-header-control-remove: Remove specified headers after receiving responses from backend services and before forwarding responses to clients. Syntax:
  - Single header: Key
  - Multiple headers: Comma-separated

Remove the header `req-cost-time` from the response to the request `example.com/test`.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/response-header-control-remove: "req-cost-time"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Retry
Higress provides route-level retry settings, which can automatically retry failed request calls. You can set retry conditions as needed, such as connection establishment failure, backend service unavailability, and responses with specific HTTP status codes.
- higress.io/proxy-next-upstream-tries: Maximum number of retry attempts. Default is 3.
- higress.io/proxy-next-upstream-timeout: Request retry timeout in seconds. No timeout is configured by default.
- higress.io/proxy-next-upstream: Request retry conditions, comma-separated; default value is "error,timeout". Valid values are:
  - error: Connection establishment failure, request error 5xx.
  - timeout: Connection establishment timeout, request error 5xx.
  - invalid_header: Request error 5xx.
  - http_xxx: Retry for specific response status codes. For example, http_502, http_403.
  - non_idempotent: Retry for non-idempotent requests when errors occur. By default, Higress does not retry non-idempotent POST and PATCH requests when errors occur; configuring non_idempotent enables retries.
  - off: Turn off retries.

Set the maximum number of retries for the `example/test` request to 2, retry timeout to 5s, retry only when the response status code is 502, and enable non-idempotent retries.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-next-upstream-tries: "2"
    higress.io/proxy-next-upstream-timeout: "5"
    higress.io/proxy-next-upstream: "http_502,non_idempotent"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Timeout
Higress provides route-level timeout settings. Unlike nginx ingress, it does not distinguish between connection/read-write timeouts, but instead configures the total interface processing delay. When not configured, there is no limit by default; for example, if the backend does not return a response, the gateway will wait indefinitely.

Set timeout to 5s:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/timeout: "5"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Single-Instance Rate Limiting

> **Tip**
> Higress Commercial Edition has global rate limiting capabilities. For details, see the global rate limiting section in the [Commercial Edition Documentation](https://help.aliyun.com/zh/mse/user-guide/advanced-usage-of-mse-ingress?spm=higress-website.topbar.0.0.0)

Supports single-instance rate limiting strategies at the route level, limiting the number of requests matching a certain route on each gateway replica to not exceed the threshold within the set time period. This rate limiting is at the single-instance level, meaning the configured threshold applies to flow control on each gateway instance.

- higress.io/route-limit-rpm: Maximum requests per minute for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.
- higress.io/route-limit-rps: Maximum requests per second for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.
- higress.io/route-limit-burst-multiplier: Multiplier for instantaneous maximum request count, default is 5.

For example:

Limit the maximum number of requests for example.com/test to 100 per minute, with an instantaneous request count of 200. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rpm: "100"
    higress.io/route-limit-burst-multiplier: "2"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

Limit the maximum number of requests for example.com/test to 10 per second, with an instantaneous request count of 50. Configuration is as follows:
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rps: "10"
    # Default is 5
    # higress.io/route-limit-burst-multiplier: "5"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Configure Backend Service Protocol: HTTPS or GRPC
By default, Higress uses the HTTP protocol to forward requests to backend business containers. When your business container uses the HTTPS protocol, you can use the annotation `higress.io/backend-protocol: "HTTPS"`; when your business container is a GRPC service, you can use the annotation `higress.io/backend-protocol: "GRPC"`.
> Note: Compared to Nginx Ingress, one advantage is that if your backend service's K8s Service resource defines the Port Name as grpc or http2, you don't need to configure the annotation higress.io/backend-protocol: "GRPC", as Higress will automatically use GRPC or HTTP2.

1. Forward the request `example.com/test` to the backend service using the HTTPS protocol.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "HTTPS"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /
            pathType: Exact
```

2. Forward the request `example/grpcbin.GRPCBin` to the backend service using the GRPC protocol.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "GRPC"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /grpcbin.GRPCBin
            pathType: Prefix
```

## Configure Load Balancing Algorithm for Backend Services
Load balancing determines how the gateway selects nodes when forwarding requests to backend services.
### Common Load Balancing Algorithms
- higress.io/load-balance: Common load balancing algorithm for backend services. Default is round_robin. Valid values are:
  - round_robin: Round-robin based load balancing.
  - least_conn: Least connection based load balancing.
  - random: Random based load balancing.

Set the load balancing algorithm for the backend service demo-service to least_conn.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/load-balance: "least_conn"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /order
            pathType: Exact
```

### Consistent Hash-based Load Balancing Algorithm
Consistent hash-based load balancing algorithms provide request affinity, where requests with the same characteristics are always routed to the same node. Higress supports using some Nginx variables, request headers, and request path parameters as Hash Keys.
- higress.io/upstream-hash-by: Consistent hash-based load balancing algorithm. Higress supports the following forms:
  - Supports configuring some nginx variables:
    - $request_uri: Request Path (including path parameters) as Hash Key
    - $host: Request Host as Hash Key
    - $remote_addr: Client IP of the request as Hash Key
  - Consistent hash based on request header. Just configure as $http_headerName.
  - Consistent hash based on request path parameters. Just configure as $arg_varName.

1. Use the client IP of the request as the Hash Key, so requests from the same client IP are always routed to the same node.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$remote_addr"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

2. Use the request header x-stage as the Hash Key, so requests with the same x-stage header value are always routed to the same node.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$http_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

3. Use the request path parameter x-stage as the Hash Key, so requests with the same x-stage path parameter value are always routed to the same node.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$arg_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Cookie Affinity (Session Persistence)
Requests with the same Cookie will always be routed to the same node by the gateway. If the first access carries a Cookie, Higress will generate a Cookie for the client in the first response to ensure that subsequent requests are always routed to the same node by the gateway.
- higress.io/affinity: Affinity type, currently only supports cookie, default is cookie.
- higress.io/affinity-mode: Affinity mode, Higress currently only supports balanced mode, default is balanced mode.
- higress.io/session-cookie-name: Configure the value of the specified Cookie as Hash Key, default is INGRESSCOOKIE
- higress.io/session-cookie-path: Path value of the generated Cookie when the specified Cookie does not exist, default is /
- higress.io/session-cookie-max-age: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.
- higress.io/session-cookie-expires: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.
> Note: Both max-age and expires can be used to specify cookie expiration time. When session-cookie-max-age and session-cookie-expires are configured simultaneously, Higress prioritizes session-cookie-max-age as the expiration time.

1. Enable Cookie affinity using Higress's default configuration, where the Cookie name is INGRESSCOOKIE, Path is /, and the Cookie's lifecycle is session level.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

2. Enable Cookie affinity, where the Cookie name is test, Path is /, and the Cookie's expiration time is 10s.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
    higress.io/session-cookie-name: "test"
    higress.io/session-cookie-max-age: "10"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Mutual TLS Authentication between Gateway and Client (MTLS)

When HTTPS is enabled, the gateway and client are based on one-way TLS authentication by default. You can enable mutual TLS authentication through the following annotation, allowing the server to verify the client's legitimacy.

- higress.io/auth-tls-secret: CA certificate used by the gateway to verify the certificate provided by the client during MTLS handshake. This annotation is mainly used in scenarios where the gateway needs to verify the client's identity. The secret name format must be: (name of the secret containing the domain certificate)-cacert

For example:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # The requirement here is that it must be the domain's certificate secret name with the suffix -cacert
    higress.io/auth-tls-secret: tls-secret-cacert
  name: bar
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: bar.com
    http:
      paths:
      - backend:
          service:
            name: bar-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - bar.com
    secretName: tls-secret
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: foo.com
    http:
      paths:
      - backend:
          service:
            name: foo-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - foo.com
    secretName: tls-secret
```

The content of the tls-secret-cacert secret must have a key called cacert, for example:
```yaml
apiVersion: v1
data:
  cacert: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
kind: Secret
metadata:
  name: tls-secret-cacert
  namespace: default
type: Opaque
```

## Mutual TLS Authentication between Gateway and Backend Service (MTLS)
By default, Higress uses the HTTP protocol to forward requests to backend business containers. You can configure Higress to access backend services using the HTTPS protocol with the annotation `higress.io/backend-protocol: "HTTPS"`, but this is one-way TLS, with only the certificate provided by the backend service. Another more secure mode is zero trust, where the gateway verifies the legitimacy of the backend service's certificate, and similarly, the backend service verifies the legitimacy of the certificate provided by the gateway. This is MTLS, mutual authentication between the gateway and backend service.

- higress.io/proxy-ssl-secret: Client certificate used by the gateway for backend service to authenticate the gateway, format is secretNamespace/secretName.
- higress.io/proxy-ssl-name: SNI used during TLS handshake.
- higress.io/proxy-ssl-server-name: on or off. Enable or disable SNI during TLS handshake.

Mutual authentication between the gateway and backend service, where the secret name used by the gateway is gateway-cert, namespace is default.
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-ssl-secret: "default/gateway-cert"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```

## Configure TLS Version and Cipher Suites between Client and Gateway

Currently, Higress's default minimum TLS version is TLSv1.0, default maximum TLS version is TLSv1.3, and default cipher suites are:

ECDHE-ECDSA-AES128-GCM-SHA256

ECDHE-RSA-AES128-GCM-SHA256

ECDHE-ECDSA-AES128-SHA

ECDHE-RSA-AES128-SHA

AES128-GCM-SHA256

AES128-SHA

ECDHE-ECDSA-AES256-GCM-SHA384

ECDHE-RSA-AES256-GCM-SHA384

ECDHE-ECDSA-AES256-SHA

ECDHE-RSA-AES256-SHA

AES256-GCM-SHA384

AES256-SHA

You can set the minimum or maximum TLS version and cipher suites for specific domains through the following annotations.

- higress.io/tls-min-protocol-version: Specifies the minimum TLS version, default value is TLSv1.0. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3
- higress.io/tls-max-protocol-version: Specifies the maximum TLS version, default value is TLSv1.3. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3
- higress.io/ssl-cipher: Specifies TLS cipher suites, multiple can be specified separated by commas, only effective when TLSv1.0~1.2 is used during TLS handshake

For example, for the domain example.com, set the minimum TLS version to TLSv1.2 and the maximum version to TLSv1.2. Configuration is as follows:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/tls-min-protocol-version: "TLSv1.2"
    higress.io/tls-max-protocol-version: "TLSv1.2"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
```
