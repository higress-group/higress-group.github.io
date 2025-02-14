---
title: HTTP 调用
keywords: [Higress]
---

# HTTP 调用

这章主要介绍如何使用 Higress 插件 Go SDK 实现 HTTP 调用。

## 1 Envoy 集群（Cluster）名称和服务发现来源

Higress 插件的 Go SDK 在进行 HTTP 和 Redis 调用时，是通过指定的集群名称来识别并连接到相应的 Envoy 集群。 此外，Higress 利用 [McpBridge](https://higress.cn/docs/latest/user/mcp-bridge/) 支持多种服务发现机制，包括静态配置（static）、DNS、Kubernetes 服务、Eureka、Consul、Nacos、以及 Zookeeper 等。
每种服务发现机制对应的集群名称生成规则都有所不同，这些规则在 cluster_wrapper.go 代码文件中有所体现。
为了包装不同的服务发现机制，Higress 插件 Go SDK 定义了 Cluster 接口，该接口包含两个方法：ClusterName 和 HostName。
```go
type Cluster interface {
    // 返回 Envoy 集群名称
    ClusterName() string
    // 返回 Hostname, 在 HTTP 调用服务时候，用于设置 Http host 请求头
    HostName() string
}
```

### 1.1 静态配置（static）
```go
type StaticIpCluster struct {
	ServiceName string
	Port        int64
	Host        string
}
```
- 集群名称规则为：`outbound|<port>||<service_name>.static`。
- HostName 规则为：默认为  <service_name>。

### 1.2 DNS 配置（dns）
```go
type DnsCluster struct {
	ServiceName string
	Domain      string
	Port        int64
}

```
- 集群名称规则为：`outbound|<Port>||<ServiceName>.dns`。
- HostName 规则为：如果设置 Host，返回 Host，否则返回<Domain>。

### 1.3 Kubernetes 服务（kubernetes）
```go

type K8sCluster struct {
	ServiceName string
	Namespace   string
	Port        int64
	Version     string
	Host        string
}
```
- 集群名称规则为：`outbound|<Port>|<Version>|<ServiceName>.<Namespace>.svc.cluster.local`。
- HostName 规则为：如果设置 Host，返回 Host，否则返回 <ServiceName>.<Namespace>.svc.cluster.local。

### 1.4 Nacos
```go

type NacosCluster struct {
	ServiceName string
	// use DEFAULT-GROUP by default
	Group       string
	NamespaceID string
	Port        int64
	// set true if use edas/sae registry
	IsExtRegistry bool
	Version       string
	Host          string
}
```
- 集群名称规则为：`outbound|<Port>|<Version>|<ServiceName>.<Group>.<NamespaceID>.nacos`。
- HostName 规则为：如果设置 Host，返回 Host，否则返回 <service_name>。

### 1.5 Consul
```go
type ConsulCluster struct {
	ServiceName string
	Datacenter  string
	Port        int64
	Host        string
}
```
- 集群名称规则为：`outbound|<Port>||<ServiceName>.<Datacenter>.consul`。
- HostName 规则为：如果设置 Host，返回 Host，否则返回 <ServiceName>。

### 1.6 FQDN

```go

type FQDNCluster struct {
	FQDN string
	Host string
	Port int64
}
```
- 集群名称规则为：`outbound|<Port>||<FQDN>`。
- HostName 规则为：如果设置 Host，返回 Host，否则返回 `<FQDN>`。

## 2 HTTP 调用
http_wrapper.go 部分核心代码如下：
```go
// 回调函数
type ResponseCallback func(statusCode int, responseHeaders http.Header, responseBody []byte)

// HTTP 调用接口
type HttpClient interface {
	Get(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Head(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Options(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Post(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Put(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Patch(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Delete(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Connect(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Trace(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Call(method, path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
}

// 实现 httpClient 接口
type ClusterClient[C Cluster] struct {
	cluster C
}
```
ClusterClient Get、Head、Options、Post、PUT、Patch、Delete、Connect、Trace、Call 方法最后调用 HttpCall 方法，其核心代码如下：

```go
func HttpCall(cluster Cluster, method, path string, headers [][2]string, body []byte,
	callback ResponseCallback, timeoutMillisecond ...uint32) error {
	
	// 删除 :method, :path, :authority 
	for i := len(headers) - 1; i >= 0; i-- {
		key := headers[i][0]
		if key == ":method" || key == ":path" || key == ":authority" {
			headers = append(headers[:i], headers[i+1:]...)
		}
	}
	// 设置 timeout
	var timeout uint32 = 500
	if len(timeoutMillisecond) > 0 {
		timeout = timeoutMillisecond[0]
	}
	// 重新设置 :method, :path, :authority 
	headers = append(headers, [2]string{":method", method}, [2]string{":path", path}, [2]string{":authority", cluster.HostName()})
	requestID := uuid.New().String()
	// 调用 HTTP 请求
	_, err := proxywasm.DispatchHttpCall(cluster.ClusterName(), headers, body, nil, timeout, func(numHeaders, bodySize, numTrailers int) {
		// 获取 HTTP 响应 body 和 headers
		respBody, err := proxywasm.GetHttpCallResponseBody(0, bodySize)
		...
		respHeaders, err := proxywasm.GetHttpCallResponseHeaders()
		...
		code := http.StatusBadGateway
		var normalResponse bool
		headers := make(http.Header)
		for _, h := range respHeaders {
			if h[0] == ":status" {
				code, err = strconv.Atoi(h[1])
				..
			}
			headers.Add(h[0], h[1])
		}
		...
		// 调用自定义插件回调函数
		callback(code, headers, respBody)
	})
    ...
	return err
}
```

## 3 easy-jwt 插件开发

在实际业务场景中，可能需要独立认证授权服务，来完成每个请求的认证和授权，现在开发一个简单的 easy-jwt 插件来演示如何在 Wasm 插件进行 HTTP 调用。
其插件核心流程如下图：
![img](https://img.alicdn.com/imgextra/i1/O1CN01DPi2w6244OvEejP1q_!!6000000007337-0-tps-1488-682.jpg)

Token Server 提供 2 个接口：
- /api/token/auth: 认证令牌接口
- /api/token/create: 生成令牌接口

### 3.1 插件部分核心代码

```go
package main
...

const (
	AuthUIDHeader = "x-auth-user"
)

func main() {
	wrapper.SetCtx(
		// 插件名称
		"easy-jwt",
		// 设置自定义函数解析插件配置
		wrapper.ParseConfigBy(parseConfig),
		// 设置自定义函数处理请求头
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// 自定义插件配置
type JwtConfig struct {
	// HTTP Client
	client wrapper.HttpClient
	// 令牌服务器的完全限定域名
	tokenServerFQDN string
	// 令牌服务器的端口
	tokenServerPort int
	// HTTP请求头中包含令牌的字段名称
	tokenFromHeaderName string
	// 令牌前缀，如Bearer
	tokenFromHeaderPrefix string
	// 插件将忽略令牌验证 UR L列表
	ignoreUrls []string
	// 匿名令牌，用于未认证的请求
	anonymousToken string
	// 匿名用户ID
	anonymousUID int
	// 当令牌验证失败时返回的 HTTP 状态码
	responseErrorStatusCode uint32
	// 返回的错误信息格式
	responseErrorBody string
}

func parseConfig(json gjson.Result, config *JwtConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	// 解析插件配置
	config.tokenServerFQDN = json.Get("tokenServerFQDN").String()
	config.tokenServerPort = int(json.Get("tokenServerPort").Int())
	config.tokenFromHeaderName = json.Get("tokenFromHeaderName").String()
	config.tokenFromHeaderPrefix = json.Get("tokenFromHeaderPrefix").String()
	config.anonymousUID = int(json.Get("anonymousUID").Int())
	config.anonymousToken = json.Get("anonymousToken").String()
	config.responseErrorBody = json.Get("responseErrorBoy").String()
	config.responseErrorStatusCode = uint32(json.Get("responseErrorStatusCode").Int())
	config.responseErrorBody = json.Get("responseErrorBody").String()
	config.ignoreUrls = make([]string, 0)
	for _, item := range json.Get("ignoreUrls").Array() {
		config.ignoreUrls = append(config.ignoreUrls, item.String())
	}
	// 设置 HTTP Client
	config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{
		FQDN: json.Get("tokenServerFQDN").String(),
		Port: json.Get("tokenServerPort").Int(),
	})
	log.Debugf("parseConfig result:%+v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config JwtConfig, log wrapper.Log) types.Action {
	// 首先检查请求的路径是否在 ignoreUrls 列表中，如果是，则添加匿名用户ID到请求头并继续处理请求
	rawPath := ctx.Path()
	path, _ := url.Parse(rawPath)
	for _, url := range config.ignoreUrls {
		if isPathMatch(path.Path, url) {
			proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))
			return types.ActionContinue
		}
	}
	// 如果请求头中包含令牌，插件将尝试从请求头中提取令牌
	token, err := extractTokenFromHeader(ctx, config)
	if err != nil {
		log.Debugf("extractTokenFromHeader() error: %v", err)
		body := fmt.Sprintf(config.responseErrorBody, err.Error())
		proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
		return types.ActionContinue
	}
	// 如果是匿名令牌，则添加匿名用户ID到请求头并继续处理请求
	if len(config.anonymousToken) > 0 && config.anonymousToken == token {
		proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))
		return types.ActionContinue
	}

	authRequest, _ := json.Marshal(map[string]string{"token": token})
	log.Debugf("call token-server with auth request:%s", string(authRequest))
	// 插件将使用配置的HTTP客户端向令牌服务器发送POST请求，以验证令牌的有效性
	err2 := config.client.Post(
		"/api/token/auth",
		[][2]string{{"content-type", "application/json"}},
		authRequest,
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			defer func() {
				// 保证恢复请求
				_ = proxywasm.ResumeHttpRequest()
			}()

			log.Debugf("auth response status:%d, response:%s", statusCode, string(responseBody))
			var jsonData gjson.Result
			jsonData = gjson.ParseBytes(responseBody)
			if statusCode != 200 {
				// 如果响应状态码不是200，表示验证失败，插件将直接发送错误响应给客户端。
				message := jsonData.Get("message").String()
				body := fmt.Sprintf(config.responseErrorBody, message)
				proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
			} else {
				// 如果验证成功，插件将从响应中提取用户ID，并将其添加到后续请求头中
				uid := jsonData.Get("uid").Int()
				proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", uid))
			}
		},
		2000,
	)

	if err2 != nil {
		// 如果连接失败，则直接发送错误响应给客户端。
		log.Debugf("call token server error:%v", err2)
		body := fmt.Sprintf(config.responseErrorBody, err2.Error())
		proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
		return types.ActionContinue
	}
	// 暂停请求处理，直到调用 proxywasm.ResumeHttpRequest() 恢复请求
	return types.ActionPause
}

func extractTokenFromHeader(ctx wrapper.HttpContext, config JwtConfig) (string, error) {
	...
}

func isPathMatch(path string, url string) bool {
	...
}
```

核心流程如下：
- 初始化插件
- 解析配置
- onHttpRequestHeaders 处理
  - 检查请求路径是否在 ignoreUrls 列表中
    - 是：添加匿名 UID 到请求头，继续处理请求
    - 否：继续
  - 从请求头中提取令牌，检查令牌是否存在
    - 存在：继续
    - 不存在：返回错误，发送响应
  - 验证令牌
    - 如果令牌是匿名令牌，添加匿名 UID 到请求头，继续处理请求
    - 如果令牌不是匿名令牌，调用认证服务 /api/token/auth 接口验证令牌
      - 如果验证成功，从响应中提取 UID，添加到请求头中，继续处理请求
      - 如果验证失败，返回错误，发送响应

### 3.2 部署和验证

1. 部署 YAML 如下：
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: higress-course
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server
  namespace: higress-course
spec:
  selector:
    app: echo-server
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
  namespace: higress-course
  labels:
    app: echo-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
        - name: echo-server
          image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          resources:
            requests:
              cpu: 10m
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server
  namespace: higress-course
spec:
  selector:
    app: echo-server
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: token-server
  namespace: higress-course
  labels:
    app: token-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: token-server
  template:
    metadata:
      labels:
        app: token-server
    spec:
      containers:
        - name: token-server
          image: registry.cn-hangzhou.aliyuncs.com/2456868764/token-server:1.0.0
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          resources:
            requests:
              cpu: 10m
---
apiVersion: v1
kind: Service
metadata:
  name: token-server
  namespace: higress-course
spec:
  selector:
    app: token-server
  ports:
    - protocol: TCP
      port: 9090
      targetPort: 9090
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-foo
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "foo.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
---
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    - name: token-server
      domain: token-server.higress-course.svc.cluster.local
      port: 9090
      type: dns
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: easy-jwt
  namespace: higress-system
spec:
  priority: 200
  matchRules:
    - ingress:
      - higress-course/ingress-foo
      config:
        tokenServerFQDN: "token-server.dns"
        tokenServerPort: 9090
        tokenFromHeaderName: "Authorization"
        tokenFromHeaderPrefix: "Bearer "
        anonymousToken: "AnonymousToken"
        anonymousUID: 0
        responseErrorStatusCode: 401
        responseErrorBody: "{\"message\":\"%s\"}"
  url: oci://registry.cn-hangzhou.aliyuncs.com/2456868764/easy-jwt:1.0.0
```
2. 获取令牌

获取 uid 为 100 的用户的访问令牌，其命令如下，其中 `<token-server-pod>` 是 token-server pod 名称。
```shell
kubectl exec <token-server-pod> -n higress-course -- curl -X POST http://127.0.0.1:9090/api/token/create -d '{"uid":100}' -H "content-type:application/json"

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"}%   
```

3. 请求验证

```shell
curl  http://127.0.0.1/hello -X POST -d "{}" -H "host:foo.com"  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY" -H "content-type:application/json"

{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Authorization": [
   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"
  ],
  "Content-Length": [
   "2"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1722850461721"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-Auth-User": [
   "100"
  ],
  "X-B3-Sampled": [
   "0"
  ],
  "X-B3-Spanid": [
   "642eab8e332d6500"
  ],
  "X-B3-Traceid": [
   "d9b9e94203603997642eab8e332d6500"
  ],
  "X-Envoy-Attempt-Count": [
   "1"
  ],
  "X-Envoy-Decorator-Operation": [
   "echo-server.higress-course.svc.cluster.local:8080/*"
  ],
  "X-Envoy-Internal": [
   "true"
  ],
  "X-Forwarded-For": [
   "192.168.65.1"
  ],
  "X-Forwarded-Proto": [
   "http"
  ],
  "X-Request-Id": [
   "47ff21bc-c3d5-4932-8bfb-361d268d319d"
  ]
 },
 "namespace": "higress-course",
 "ingress": "",
 "service": "",
 "pod": "echo-server-6f4df5fcff-nksqz",
 "body": {}
}                                   
```
可以看到请求头中包含了 `X-Auth-User` 同时值为 100 。

## 4 ext-auth 插件

Higress 官方提供 [ext-auth](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/ext-auth) 插件，其功能更加丰富。 ext-auth 插件实现了向外部授权服务发送鉴权请求，以检查客户端请求是否得到授权。该插件实现时参考了 Envoy 原生的 [ext_authz filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter)，实现了原生 filter 中对接 HTTP 服务的部分能力。

## 5 Envoy Cluster 不存在问题

在默认情况下，Higress 控制面只下发和路由关联的服务到 Envoy Cluster 中，因此有可能在实际开发过程中，发现对应调用 HTTP 服务在 Envoy Cluster 中不存在。
有 3 种方案去解决：
- helm 参数 global.onlyPushRouteCluster, 默认值为 true, 只推送路由关联的 Cluster 到 Envoy Cluster 中。修改为 false 即可。
- 创建一个新路由关联到对应的调用的 HTTP 服务。
- 通过 McpBridge 配置，添加调用的 HTTP 服务。

上面 easy-jwt 插件中调用 token-server 服务，是通过 McpBridge 配置，添加 dns 类型服务，其配置如下：

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    - name: token-server
      domain: token-server.higress-course.svc.cluster.local
      port: 9090
      type: dns
```

## 6 HTTP 回调链问题

在实际开发过程中，可能会遇到 HTTP 回调链的情况，比如在 onHttpRequestHeader 处理阶段，需要调用两个 HTTP 服务，这个时候在 onHttpRequestHeader 阶段中，要先调用第一个 HTTP 服务，在第一个 HTTP 服务的响应回调函数中，再发起第二个 HTTP 服务的调用。
以此类推。这种情况 Redis 调用也是一样处理。 关于回调链可以参考 Higress 官方提供 [ai-agent](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-agent/main.go#L169) 插件功能。

## 参考
- [1][Mcp Bridge 配置说明](https://higress.cn/docs/latest/user/mcp-bridge/)






