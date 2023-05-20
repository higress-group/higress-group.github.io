---
title: 通过Ingress Annotation实现高阶流量治理
keywords: [Ingress Annotation]
description: 在Higress上使用Ingress并借助Annotation实现高阶流量治理。
---

本篇文档介绍如何在Higress上使用Ingress并借助Annotation实现高阶流量治理。

## 前提条件
- [安装Higress](./quickstart.md)
- 已拥有一个Kubernetes集群，且配置了kubectl命令行工具

## 灰度发布
Higress提供复杂的路由处理能力，支持基于Header、Cookie以及权重的灰度发布功能。灰度发布功能可以通过设置注解来实现，为了启用灰度发布功能，需要设置注解`higress.io/canary: "true"`。通过不同注解可以实现不同的灰度发布功能。
> 说明：当多种方式同时配置时，灰度方式选择优先级为：基于Header > 基于Cookie > 基于权重（从高到低）。

### 基于Header灰度发布
- 只配置`higress.io/canary-by-header`：基于Request Header的名称进行流量切分。当请求包含该Header并其值为always时，请求流量会被分配到灰度服务入口；其他情况时，请求流量不会分配到灰度服务。
- 同时配置`higress.io/canary-by-header`和`higress.io/canary-by-header-value`：基于Request Header的名称和值进行流量切分。当请求中的header的名称和header的值与该配置匹配时，请求流量会被分配到灰度服务；其他情况时，请求流量不会分配到灰度服务。
> Higress灰度发布时支持多个版本服务（无上限）。

1. 请求Header为`higress：always`时将访问灰度服务demo-service-canary；其他情况将访问正式服务demo-service，配置如下：
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

2. 请求Header为`higress：v1`时将访问灰度服务demo-service-canary-v1；请求Header为`higress：v2`时将访问灰度服务demo-service-canary-v2；其他情况将访问正式服务demo-service，配置如下：
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

### 基于Cookie灰度发布
- higress.io/canary-by-cookie：基于Cookie的Key进行流量切分。当请求的Cookie中含有该Key且其值为always时，请求流量将被分配到灰度服务；其他情况时，请求流量将不会分配到灰度服务。
> 说明：基于Cookie的灰度发布不支持自定义设置Key对应的值，只能是always。

请求的Cookie为`demo=always`时将访问灰度服务demo-service-canary；其他情况将访问正式服务demo-service。配置如下：
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

### 基于权重灰度发布
- higress.io/canary-weight：设置请求到指定服务的百分比（值为0~100的整数）
- higress.io/canary-weight-totatl：设置权重总和，默认为100

配置灰度服务demo-service-canary-v1的权重为30%，配置灰度服务demo-service-canary-v2的权重为20%，配置正式服务demo-service的权重为50%。
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-weight: "30"
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
    higress.io/canary-by-weight: "20"
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

## 跨域
跨域资源共享CORS（Cross-Origin Resource Sharing）是指允许Web应用服务器进行跨域访问控制，从而实现跨域数据安全传输。
- higress.io/enable-cors："true" or "false"。开启或关闭跨域。
- higress.io/cors-allow-origin：允许的第三方站点，支持泛域名，逗号分隔；支持通配符*。默认值为*，即允许所有第三方站点。
- higress.io/cors-allow-methods：允许的请求方法，如GET、POST，逗号分隔；支持通配符*。默认值为GET, PUT, POST, DELETE, PATCH, OPTIONS。
- higress.io/cors-allow-headers：允许的请求头部，逗号分隔；支持通配符*。默认值为DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization。
- higress.io/cors-expose-headers：允许的响应头部，逗号分隔。
- higress.io/cors-allow-credentials："true" or "false"。是否允许携带凭证信息。默认允许。
- higress.io/cors-max-age：预检结果的最大缓存时间，单位为秒；默认值为1728000。


跨域请求被限制为只能来自example.com域的请求，并且HTTP方法只能是GET和POST，允许的请求头部为X-Foo-Bar，不允许携带凭证信息。
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

## Rewrite重写Path和Host
在请求转发给目标后端服务之前，重写可以修改原始请求的路径（Path）和主机域（Host)。
- higress.io/rewrite-target：重写Path，支持捕获组（Capture Group)。
- higress.io/upstream-vhost：重写Host。

### Rewrite重写Path
1. 将请求`example.com/test`在转发至后端服务之前，重写为`example.com/dev`
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

2. 将请求`example.com/v1/app`在转发至后端服务之前，去掉Path前缀/v1
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/$1"
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
            path: /v1/(app)
            pathType: Prefix
```

3. 将请求`example.com/v1/app`在转发至后端服务之前，将Path前缀/v1更改为/v2
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/v2/$1"
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
            path: /v1/(app)
            pathType: Prefix
```

### Rewrite重写Host
将请求`example.com/test`在转发至后端服务之前，重写为`test.com/test`
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

## 重定向
通过重定向可以将原始客户端请求更改为目标请求。
### 配置HTTP重定向至HTTPS
- higress.io/ssl-redirect：HTTP重定向到HTTPS
- higress.io/force-ssl-redirect: HTTP重定向到HTTPS
> 说明：Higress对于以上两个注解不区分对待，都是强制将HTTP重定向到HTTPS。

将请求`http://example.com/test`重定向为`https://example.com/test`。
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

### 永久重定向
- higress.io/permanent-redirect：永久重定向的目标url，必须包含scheme（http or https)。
- higress.io/permanent-redirect-code：永久重定向的HTTP状态码，默认为301。

将请求`http://example.com/test`永久重定向为`http://example.com/app`。
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

### 临时重定向
- higress.io/temporal-redirect：临时重定向的目标url，必须包含scheme（http or https)。
  
将请求`http://example.com/test`临时重定向为`http://example.com/app`。
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

## Header控制
通过Header控制，您可以在转发请求到后端服务之前对请求Header进行增删改，在收到响应转发给客户端时对响应Header进行增删改。
### 请求Header控制
- higress.io/request-header-control-add：请求在转发给后端服务时，添加指定Header。若该Header存在，则其值拼接在原有值后面。语法如下：
  - 单个Header：Key Value
  - 多个Header：使用yaml特殊符号 |，每对Key Value单独处于一行
- higress.io/request-header-control-update：请求在转发给后端服务时，修改指定Header。若该header存在，则其值覆盖原有值。语法如下：
  - 单个Header：Key Value
  - 多个Header：使用yaml特殊符号 |，每对Key Value单独处于一行
- higress.io/request-header-control-remove：请求在转发给后端服务时，删除指定Header。语法如下：
  - 单个Header：Key
  - 多个Header：逗号分隔

1. 对于请求`example.com/test`添加两个Header，`foo: bar`和`test: true`。
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

2. Header控制可以结合灰度发布，对灰度流量进行染色。请求Header为`higress：v1`时将访问灰度服务demo-service-canary-v1，并添加Header，`stage: gray`；其他情况将访问正式服务demo-service，并添加Header，`stage: production`。配置如下：
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

### 响应Header控制
- higress.io/response-header-control-add：请求在收到后端服务响应之后并且转发响应给客户端之前，添加指定Header。若该Header存在，则其值拼接在原有值后面。语法如下：
  - 单个Header：Key Value
  - 多个Header：使用yaml特殊符号 |，每对Key Value单独处于一行
- higress.io/response-header-control-update：请求在收到后端服务响应之后并且转发响应给客户端之前，修改指定Header。若该header存在，则其值覆盖原有值。语法如下：
  - 单个Header：Key Value
  - 多个Header：使用yaml特殊符号 |，每对Key Value单独处于一行
- higress.io/response-header-control-remove：请求在收到后端服务响应之后并且转发响应给客户端之前，删除指定Header。语法如下：
  - 单个Header：Key
  - 多个Header：逗号分隔

对于请求`example.com/test`的响应删除`Header：req-cost-time`。
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

## 重试
Higress提供路由级别的重试设置，可以为出错的请求调用自动进行重试。您可以按需设置重试条件，例如建立连接失败，或者后端服务不可用以及对指定HTTP状态码的响应等进行请求重试。
- higress.io/proxy-next-upstream-tries：请求的最大重试次数。默认3次。
- higress.io/proxy-next-upstream-timeout：请求重试的超时时间，单位秒。默认未配置超时时间。
- higress.io/proxy-next-upstream：请求重试条件，逗号分隔；默认值为"error,timeout"。合法值如下：
  - error：建立连接失败，请求出错5xx。
  - timeout：建立连接超时，请求出错5xx。
  - invalid_header：请求出错5xx。
  - http_xxx：针对具体响应状态码的情况进行重试。例如http_502，http_403。
  - non_idempotent：对于非幂等请求出错时进行重试。默认情况下，Higress针对非幂等POST、PATCH请求出错时不会进行重试，配置non_idempotent可以开启重试。
  - off：关闭重试。

设置`example/test`请求的最大重试次数为2，重试超时时间为5s，只有在响应状态码为502才重试，并且开启非幂等重试。
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

## 配置后端服务协议：HTTPS或GRPC
Higress默认使用HTTP协议转发请求到后端业务容器。当您的业务容器为HTTPS协议时，可以通过使用注解`higress.io/backend-protocol: "HTTPS"`；当您的业务容器为GRPC服务时，可以通过使用注解`higress.io/backend-protocol: "GRPC"`。
> 说明：相比Nginx Ingress的优势，如果您的后端服务所属的K8s Service资源中关于Port Name的定义为grpc或http2，您无需配置注解higress.io/backend-protocol: "GRPC"，Higress会自动使用GRPC或者HTTP2。

1. 请求`example/test`转发至后端服务使用HTTPS协议。
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

2. 请求`example/test`转发至后端服务使用GRPC协议。
第一种做法：通过注解。
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
            path: /test
            pathType: Exact
```

第二种做法：通过Service Port Name
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
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
---
apiVersion: v1
kind: Service
metadata:
  name: demo-service
spec:
  ports:
    - name: grpc
      port: 80
      protocol: TCP
  selector:
    app: demo-service
```

## 配置后端服务的负载均衡算法
负载均衡决定着网关在转发请求至后端服务时如何选择节点。
### 普通负载均衡算法
- higress.io/load-balance：后端服务的普通负载均衡算法。默认为round_robin。合法值如下：
  - round_robin：基于轮询的负载均衡。
  - least_conn：基于最小请求数的负载均衡。
  - random：基于随机的负载均衡。

设置后端服务demo-service的负载均衡算法为least_conn。
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

### 基于一致性Hash的负载均衡算法
基于一致性Hash的负载均衡算法具备请求亲和性，具有相同特征的请求会始终负载到相同节点上。Higress支持基于部分Nginx 变量、请求Header和请求路径参数作为Hash Key。
- higress.io/upstream-hash-by：基于一致Hash的负载均衡算法。Higress支持以下几种形式：
  - 支持配置部分nginx变量：
    - $request_uri：请求的Path（包括路径参数）作为Hash Key
    - $host：请求的Host作为Hash Key
    - $remote_addr：请求的客户端IP作为Hash Key
  - 基于请求header的一致性Hash。您只需配置为$http_headerName。
  - 基于请求路径参数的一致性Hash。您只需配置为$arg_varName。

1. 基于请求的客户端IP作为Hash Key，同一个客户端IP的请求始终负载到同一个节点。
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

2. 基于请求Header x-stage作为Hash key，带有x-stage头部的请求且值相同的请求始终负载到同一个节点。
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

3. 基于请求路径参数 x-stage作为Hash key，带有路径参数x-stage的请求且值相同的请求始终负载到同一个节点。
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

## Cookie亲和性 （会话保持）
具备相同的Cookie的请求会被网关始终负载到同一个节点，并且如果第一次访问携带Cookie，Higress会在第一次响应时为客户端生成一个Cookie，用来保证后续的请求被网关始终负载到相同节点。
- higress.io/affinity：亲和性种类，目前只支持cookie，默认为cookie。
- higress.io/affinity-mode：亲和性模式，Higress目前只支持balanced模式，默认为balanced模式。
- higress.io/session-cookie-name：配置指定Cookie的值作为Hash Key，默认为INGRESSCOOKIE
- higress.io/session-cookie-path：当指定Cookie不存在，生成的Cookie的Path值，默认为/
- higress.io/session-cookie-max-age：当指定Cookie不存在，生成的Cookie的过期时间，单位为秒，默认为Session会话级别。
- higress.io/session-cookie-expires：当指定Cookie不存在，生成的Cookie的过期时间，单位为秒，默认为Session会话级别。
> 说明：max-age和expires都可以用来指定cookie过期时间。当session-cookie-max-age和session-cookie-expires同时配置时，Higress优先选取session-cookie-max-age作为过期时间。

1. 开启Cookie亲和性，利用Higress的默认配置，即Cookie的名字为INGRESSCOOKIE，Path为/，Cookie的生命周期为Session会话级别。
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

2. 开启Cookie亲和性，Cookie的名字为test，Path为/，Cookie的过期时间为10s。
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

## 网关与后端服务双向认证（MTLS)
默认情况下，Higress默认使用HTTP协议转发请求到后端业务容器。你可以通过使用注解`higress.io/backend-protocol: "HTTPS"`配置Higress访问后端服务使用HTTPS协议，但这是单向TLS，也就是说只有Higress会验证后端服务提供的证书，且一般后端服务使用的证书需要是权威CA签发的。另一种更安全的模式是零信任，网关会验证后端服务的证书是否合法，同样后端服务也会验证网关提供的证书是否合法，这就是MTLS，网关与后端服务进行双向认证。
- higress.io/proxy-ssl-secret：网关使用的客户端证书，用于后端服务对网关进行身份认证，格式为 secretNamespace/secretName。
- higress.io/proxy-ssl-name：TLS握手期间使用的SNI。
- higress.io/proxy-ssl-server-name：on or off。开启或关闭TLS握手期间使用SNI。

网关与后端服务进行双向认证，网关使用的secret name为gateway-cert，命名空为default。
```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-ssl-secret: "default/ateway-cert"
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
