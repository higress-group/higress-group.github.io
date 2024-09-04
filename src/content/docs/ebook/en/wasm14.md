---
title: Wasm 插件介绍和开发自定义插件
keywords: [Higress]
---

# Wasm 插件介绍和开发自定义插件

本章开始进入 Wasm 插件开发篇，主要介绍 Wasm 插件配置、Higress WasmPlugin CRD 以及如何开发自定义插件。

## 1 测试环境准备

> Higress 本地测试环境网关地址是 127.0.0.1，端口是 80 和 443。

准备 echo-server 和 Ingress, 其 YAML 配置如下：

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
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-bar
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "bar.com"
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
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-baz
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "baz.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
```

## 2 Wasm 插件配置

Higress WasmPlugin 在 Istio WasmPlugin 的基础上进行了扩展，支持全局、路由、域名、服务级别的配置。这 4 个配置优先级是：路由级 > 域名级 > 服务级 > 全局，对于没有匹配到具体路由、域名、服务级别的请求才会应用全局配置。

下面以 Higress 官方提供的 [custom-response](https://higress.io/zh-cn/docs/plugins/transformation/custom-response) 插件为例进行介绍。custom-response 插件支持配置自定义响应，包括 HTTP 响应状态码、HTTP 响应头，以及 HTTP 响应体。custom-response 插件不仅可以用于模拟响应，还可以根据特定状态码返回自定义响应。例如，在触发网关限流策略时，返回自定义响应。

应用 custom-response 插件，YAML 配置如下：

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: custom-response
  namespace: higress-system
spec:
  priority: 200
  # 配置会全局生效，但如果被下面规则匹配到，则会改为执行命中规则的配置
  defaultConfig:
    headers:
      - key1=value1
    "body": "{\"hello\":\"foo\"}"
  matchRules:
    # 域名级生效配置
    - domain:
        - bar.com
      config:
        headers:
          - key2=value2
        "body": "{\"hello\":\"bar\"}"
    # 路由级生效配置
    - ingress:
        - higress-course/ingress-baz
      # higress-course 命名空间下名为 ingress-baz 的 ingress 会应用下面这个配置
      config:
        headers:
          - key3=value3
        "body": "{\"hello\":\"baz\"}"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
```

访问 foo.com，由于请求没有匹配任何域名级或路由级配置，因此最终应用了全局配置。

```shell
curl -v -H "Host: foo.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key1: value1
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 02:45:51 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"foo"}
```

访问 bar.com，请求匹配域名级配置。

```shell
curl -v -H "Host: bar.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: bar.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key2: value2
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 02:47:51 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"bar"}
```

访问 baz.com，请求匹配路由级配置。

```shell
curl -v -H "Host: baz.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: baz.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key3: value3
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 08:44:03 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"baz"}
```

测试完成后删除 `custom-response` WasmPlugin，避免对后续测试产生影响。

```shell
kubectl delete wasmplugin custom-response -n higress-system
```

## 3 Higress WasmPlugin CRD 

Higress WasmPlugin CRD 在 [Istio WasmPlugin CRD](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/) 的基础上进行了扩展，新增 `defaultConfig` 和 `matchRules` 字段，用于配置插件的默认配置和路由级、域名级配置。

主要配置如下：

| 字段名称             | 数据类型            | 填写要求 | 描述                                                                                                          |
|------------------|-----------------|----|-------------------------------------------------------------------------------------------------------------|
| `pluginName`     | string          | 选填 | 插件名称                                                                                                        |
| `phase`          | string          | 选填 | 插件插入插件链中的位置，默认是 UNSPECIFIED_PHASE                                                                           |
| `priority`       | int             | 选填 | 插件执行优先级，默认为 0，在相同 `phase` 下，值越大越先处理请求，但越后处理响应                                                               |
| `imagePullPolicy` | string          | 选填 | 插件镜像拉取策略，可选值有：`UNSPECIFIED_POLICY`（默认值）、`IfNotPresent`、`Always`                                             |
| `imagePullSecret` | string          | 选填 | 用于拉取 OCI 镜像的凭据。与 WasmPlugin 在同一命名空间中的Kubernetes Secret 的名称                                                  |
| `url`            | string          | 必填 | Wasm 文件或 OCI 容器的 URL，默认为 `oci://`，引用 OCI 镜像。同时支持 `file://`，用于容器本地的 Wasm 文件，以及 `http[s]://`，用于引用远程托管的 Wasm 文件 |
| `Sha256`         | string          |  选填  | 用于验证 Wasm 文件或 OCI 容器的 SHA256 校验和                                                                            |
| `defaultConfig`  | object          | 选填 | 插件默认配置，全局生效于没有匹配具体域名和路由配置的请求                                                                                |
| `defaultConfigDisable`| bool            |  选填  | 插件默认配置是否失效，默认值是 false                                                                                       |
| `matchRules`     | array of object | 选填 | 匹配域名或路由生效的配置                                                                                                |

`phase` 配置说明：

| 字段名称               | 描述                                                                     |
|--------------------|------------------------------------------------------------------------|
| `UNSPECIFIED_PHASE` | 在插件过滤器链的末端，在路由器之前插入插件，如果没有指定插件的 `phase`，则默认设置为 `UNSPECIFIED_PHASE` |
| `AUTHN`            | 在 Istio 认证过滤器之前插入插件                                                    |
| `AUTHZ`            | 在 Istio 授权过滤器之前且在 Istio 认证过滤器之后插入插件                                    |
| `STATS`            | 在 Istio 统计过滤器之前且在 Istio 授权过滤器之后插入插件                                    |

`matchRules` 中每一项的配置字段说明：

| 字段名称            | 数据类型  | 填写要求                                 | 配置示例                           | 描述                                      |
|-----------------|-------|--------------------------------------|--------------------------------|-----------------------------------------|
| `ingress`       | 字符串数组 | `ingress`、`domain` 和 `service` 中必填一项 | ["default/foo", "default/bar"] | 匹配 ingress 资源对象，匹配格式为: `命名空间/ingress名称` |
| `domain`        | 字符串数组 | `ingress`、`domain` 和 `service` 中必填一项| ["example.com", "*.test.com"]  | 匹配域名，支持泛域名                              |
| `service`       | 字符串数组 | `ingress`、`domain` 和 `service` 中必填一项        | ["echo-server.higress-course.svc.cluster.local"]  | 匹配服务名称                                  |
| `config`        | 对象    | 选填                                   | -                              | 匹配后生效的插件配置                              |
| `configDisable` | bool  | 选填                                   | false                          | 配置是否生效，默认设置为 false                      |


## 4 自定义插件开发

开发一个简单日志插件 `easy-logger`, 这个插件根据配置记录请求和响应到网关日志中。整个过程涉及到插件开发环境准备、开发和测试、部署和验证。

### 4.1 环境准备

环境准备如下：

- Docker 官方安装连接：https://docs.docker.com/engine/install/
- Go 版本: >= 1.19 (需要支持范型特性)，官方安装链接：https://go.dev/doc/install

如果选择用 TinyGo 在本地构建 Wasm 文件，再拷贝到 Docker 镜像中，需要安装 TinyGo，其环境要求如下：

- TinyGo 版本: >= 0.28.1 (建议版本 0.28.1) 官方安装链接：https://tinygo.org/getting-started/install/

### 4.2 开发和测试

#### 4.2.1 初始化工程目录

1. 新建一个工程目录文件 easy-logger。

```shell
mkdir easy-logger
```
2. 在所建目录下执行以下命令，初始化 Go 工程。

```shell
go mod init easy-logger
```

go.mod 文件中 go 版本需要设置为 1.19，由于在 4.3.3 节中我们将使用 1.19 版本的 wasm-go-builder 镜像来构建插件，因此需要保持两者的 go 版本一致。

```shell
module easy-logger

go 1.19
```

3. 国内环境可能需要设置下载依赖包的代理

```shell
go env -w GOPROXY=https://proxy.golang.com.cn,direct
```

4. 下载构建插件的依赖

```shell
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
```

#### 4.2.2 编写 main.go 文件
首先，我们编写 easy-logger 插件的基本框架，暂时只读取我们设置的配置参数，不在请求和响应阶段进行任何处理。

```golang
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// 插件名称
		"easy-logger",
		// 设置自定义函数解析插件配置
		wrapper.ParseConfigBy(parseConfig),
		// 设置自定义函数处理请求头
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// 设置自定义函数处理请求体
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// 设置自定义函数处理响应头
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// 设置自定义函数处理响应体
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// 设置自定义函数处理流式请求体
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// 设置自定义函数处理流式响应体
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// 自定义插件配置
type LoggerConfig struct {
	// 是否打印请求
	request bool
	// 是否打印响应
	response bool
	// 打印响应状态码，* 表示打印所有状态响应，500,502,503 表示打印 HTTP 500、502、503 状态响应，默认是 *
	responseStatusCodes string
}

func parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	config.request = json.Get("request").Bool()
	config.response = json.Get("response").Bool()
	config.responseStatusCodes = json.Get("responseStatusCodes").String()
	if config.responseStatusCodes == "" {
		config.responseStatusCodes = "*"
	}
	log.Debugf("parse config:%v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestHeaders()")
	return types.ActionContinue
}

func onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestBody()")
	return types.ActionContinue
}

func onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseBody()")
	return types.ActionContinue
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseHeaders()")
	return types.ActionContinue
}
```

Higress 插件 SDK 开发涉及到以下内容：

- wrapper.HttpContext：请求上下文。
- LoggerConfig：自定义插件配置。
- wrapper.Log：插件日志工具。
- wrapper.ProcessXXXX：插件回调钩子函数。
- proxywasm：提供插件工具函数包。

wrapper 插件回调钩子函数包含以下函数，可以根据实际业务需求选择设置以下钩子函数：

- wrapper.ParseConfigBy(parseConfig)：解析插件配置。
- wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders)：设置自定义函数处理请求头。
- wrapper.ProcessRequestBodyBy(onHttpRequestBody)：设置自定义函数处理请求体。
- wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders)：设置自定义函数处理响应头。
- wrapper.ProcessResponseBodyBy(onHttpResponseBody)：设置自定义函数处理响应体。
- wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody)：设置自定义函数处理流式请求体。
- wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody)：设置自定义函数处理流式响应体。

关于 Higress 插件 SDK 内容会在后续章节中详细展开。

#### 4.3.3 本地测试

1. 第一步：在插件目录下创建文件 envoy.yaml，内容如下。网关在 10000 端口监听 HTTP 请求，将请求转发到 echo-server 服务。

```yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: ["*"]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: echo-server
                http_filters:
                  - name: wasmdemo
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: wasmdemo
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: |-
                              {
                                "request": true,
                                "response": true,
                                "responseStatusCodes": "200,500,502,503"
                              }
                  - name: envoy.filters.http.router
  clusters:
    - name: echo-server
      connect_timeout: 30s
      type: LOGICAL_DNS
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: echo-server
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: echo-server
                      port_value: 3000
```

插件通过本地文件的方式加载到 Envoy 中，插件配置的如下：

```yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |-
      {
        "request": true,
        "response": true,
        "responseStatusCodes": "200,500,502,503"
      }
```

2. 第二步：在插件目录下创建文件 docker-compose.yaml，内容如下：

```yaml
version: '3.9'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1
    entrypoint: /usr/local/bin/envoy
    # 注意这里对 Wasm 开启了 debug 级别日志，在生产环境部署时请使用默认的 info 级别
    # 如果需要将 Envoy 的日志级别调整为 debug，将 --log-level 参数设置为 debug
    command: -c /etc/envoy/envoy.yaml --log-level info --log-path /etc/envoy/envoy.log --component-log-level wasm:debug
    depends_on:
      - echo-server
    networks:
      - wasmtest
    ports:
      - "10000:10000"
      - "9901:9901"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./build/plugin.wasm:/etc/envoy/plugin.wasm
      - ./envoy.log:/etc/envoy/envoy.log
  echo-server:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
    networks:
      - wasmtest
    ports:
      - "3000:3000"
networks:
  wasmtest: {}
```
3. 第三步：在插件目录下创建文件 Dockerfile，内容如下：

```yaml
ARG BUILDER=higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go1.19-tinygo0.28.1-oras1.0.0
FROM $BUILDER as builder

ARG GOPROXY
ENV GOPROXY=${GOPROXY}

ARG EXTRA_TAGS=""
ENV EXTRA_TAGS=${EXTRA_TAGS}

WORKDIR /workspace
COPY . .
RUN go mod tidy
RUN tinygo build -o /main.wasm -scheduler=none -gc=custom -tags="custommalloc nottinygc_finalizer $EXTRA_TAGS" -target=wasi ./main.go

FROM scratch as output
COPY --from=builder /main.wasm plugin.wasm
```

4. 第四步：在插件目录下创建文件 Makefile，内容如下：

```shell
PLUGIN_NAME ?= hello-world
BUILDER_REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
GO_VERSION ?= 1.19
TINYGO_VERSION ?= 0.28.1
ORAS_VERSION ?= 1.0.0
HIGRESS_VERSION ?= 1.4.1
USE_HIGRESS_TINYGO ?= true
BUILDER ?= ${BUILDER_REGISTRY}wasm-go-builder:go${GO_VERSION}-tinygo${TINYGO_VERSION}-oras${ORAS_VERSION}
BUILD_TIME := $(shell date "+%Y%m%d-%H%M%S")
COMMIT_ID := $(shell git rev-parse --short HEAD 2>/dev/null)
IMAGE_TAG = $(if $(strip $(PLUGIN_VERSION)),${PLUGIN_VERSION},${BUILD_TIME}-${COMMIT_ID})
IMG ?= ${REGISTRY}${PLUGIN_NAME}:${IMAGE_TAG}
GOPROXY := $(shell go env GOPROXY)
EXTRA_TAGS ?= proxy_wasm_version_0_2_100

.DEFAULT:
local-docker-build:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=${BUILDER}  \
	                            --build-arg GOPROXY=$(GOPROXY) \
	                             --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \
	                            -t ${IMG} \
	                            --output build \
	                            .
	@echo ""
	@echo "output wasm file: ./build/plugin.wasm"

build-image:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=${BUILDER}  \
	                            --build-arg GOPROXY=$(GOPROXY) \
	                            --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \
	                            -t ${IMG} \
	                            .
	@echo ""
	@echo "image:            ${IMG}"

build-push: build-image
	docker push ${IMG}

local-build:
	tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer $(EXTRA_TAGS)' \
		-o ./build/plugin.wasm main.go
	@echo ""
	@echo "wasm: ./build/plugin.wasm"

local-run:
	echo  > ./envoy.log
	docker compose down
	docker compose up -d

local-all: local-build local-run
local-docker-all: local-docker-build local-run
```

请将 Makefile 文件中镜像仓库地址 `REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/` 换成自己的镜像仓库地址。

其命令说明如下：
- `make local-docker-build`: 本地 Docker 环境构建插件，生成插件文件 ./build/plugin.wasm。
- `make local-build`: 本地 TinyGo 构建插件，生成插件文件 ./build/plugin.wasm。
- `make local-run`: 本地启动测试环境。
- `PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-image` 构建 easy-logger 插件镜像，插件版本为 1.0.0。
- `PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push` 构建 easy-logger 插件镜像，插件版本为 1.0.0，同时推送到镜像仓库。
- `make local-docker-all`: 本地 Docker 环境构建插件，生成插件文件 build/plugin.wasm，同时启动本地测试环境。
- `make local-all`: 本地 TinyGo 构建插件，生成插件文件 ./build/plugin.wasm，同时启动本地测试环境。

注意用 TinyGo 本地构建命令如下：
```shell
tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100' -o ./build/plugin.wasm main.go
```

5. 第五步：本地 Docker 环境构建和启动测试环境

本地 Docker 环境构建和启动测试环境，命令如下：

```shell
make local-docker-all
```

本地启动测试环境后，插件目录整体文件结构如下：

```shell
tree 
.
├── Dockerfile
├── Makefile
├── build
│   └── plugin.wasm  # 构建生成的 Wasm 文件
├── docker-compose.yaml
├── envoy.log  # Envoy 日志文件
├── envoy.yaml
├── go.mod
├── go.sum
└── main.go
```

执行以下命令通过网关访问 echo-server。

```shell
curl -X POST -v http://127.0.0.1:10000/hello \
-H "Content-type: application/json"  -H 'host:foo.com' \
-d '{"username":["unamexxxx"], "password":["pswdxxxx"]}'

* Trying 127.0.0.1:10000...
* Connected to 127.0.0.1 (127.0.0.1) port 10000 (#0)
> POST /hello HTTP/1.1
> Host:foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> Content-type: application/json
> Content-Length: 50
> 
< HTTP/1.1 200 OK
< content-type: application/json
< x-content-type-options: nosniff
< date: Sat, 20 Jul 2024 04:39:46 GMT
< content-length: 642
< req-cost-time: 48
< req-arrive-time: 1721450386098
< resp-start-time: 1721450386146
< x-envoy-upstream-service-time: 30
< server: envoy
< 
{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Content-Length": [
   "50"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1721450386098"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-Envoy-Expected-Rq-Timeout-Ms": [
   "15000"
  ],
  "X-Forwarded-Proto": [
   "https"
  ],
  "X-Request-Id": [
   "2f9ff093-7891-4c55-992b-874f7ba00d0e"
  ]
 },
 "namespace": "",
 "ingress": "",
 "service": "",
 "pod": "",
 "body": {
  "password": [
   "pswdxxxx"
  ],
  "username": [
   "unamexxxx"
  ]
 }
* Connection #0 to host 127.0.0.1 left intact
}
```

查看插件目录下 envoy.log 文件，可以看到 easy-logger 插件的日志输出。

```shell
[2024-07-20 04:08:19.990][22][debug][wasm] [external/envoy/source/extensions/common/wasm/wasm.cc:146] Thread-Local Wasm created 10 now active
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parseConfig()
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parse config:&{request:true response:true responseStatusCodes:200,500,502,503}
[2024-07-20 04:08:19.993][1][warning][main] [external/envoy/source/server/server.cc:715] there is no configured limit to the number of allowed active connections. Set a limit via the runtime key overload.global_downstream_max_connections
[2024-07-20 04:39:46.114][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestHeaders()
[2024-07-20 04:39:46.116][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestBody()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseHeaders()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseBody()
```

到这里表示整体开发和测试环境已经完成，下面就是完善插件功能，然后重新测试。

### 4.3 完善插件功能

接下来，我们将通过自定义函数来处理请求和响应信息。通过设置插件参数，我们可以控制是否打印请求和响应信息，并根据指定的响应状态码决定是否记录响应内容。

```golang
package main

import (
	"fmt"
	"strings"

	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/google/uuid"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// 插件名称
		"easy-logger",
		// 设置自定义函数解析插件配置
		wrapper.ParseConfigBy(parseConfig),
		// 设置自定义函数处理请求头
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// 设置自定义函数处理请求体
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// 设置自定义函数处理响应头
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// 设置自定义函数处理响应体
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// 设置自定义函数处理流式请求体
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// 设置自定义函数处理流式响应体
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// 自定义插件配置
type LoggerConfig struct {
	// 是否打印请求
	request bool
	// 是否打印响应
	response bool
	// 打印响应状态码，* 表示打印所有状态响应，500,502,503 表示打印 HTTP 500、502、503 状态响应，默认是 *
	responseStatusCodes string
}

func parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	config.request = json.Get("request").Bool()
	config.response = json.Get("response").Bool()
	config.responseStatusCodes = json.Get("responseStatusCodes").String()
	if config.responseStatusCodes == "" {
		config.responseStatusCodes = "*"
	}
	log.Debugf("parse config:%+v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestHeaders()")
	requestId := uuid.New().String()
	ctx.SetContext("requestId", requestId)
	if !config.request {
		return types.ActionContinue
	}
	// 获取并打印请求头
	headers, _ := proxywasm.GetHttpRequestHeaders()
	var build strings.Builder
	build.WriteString("\n===========request headers===============\n")
	build.WriteString(fmt.Sprintf("requestId:%s\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\n", values[0], values[1]))
	}
	log.Infof(build.String())
	// 继续处理请求
	return types.ActionContinue
}

func onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestBody()")
	// 打印请求体
	if config.request {
		var build strings.Builder
		build.WriteString("\n===========request body===============\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseHeaders()")
	// 添加自定义响应头
	proxywasm.AddHttpResponseHeader("x-easy-logger", "1.0.0")
	if !config.response {
		return types.ActionContinue
	}
	// 获取响应状态码
	statusCode, _ := proxywasm.GetHttpResponseHeader(":status")
	logResponseBody := false
	// 根据响应状态码决定是否打印响应体
	if config.responseStatusCodes == "*" || strings.Contains(config.responseStatusCodes, statusCode) {
		logResponseBody = true
	}
	// 将是否记录响应体的信息存储在上下文中，在 onHttpResponseBody 阶段获取上下文判断是否打印响应体
	ctx.SetContext("logResponseBody", logResponseBody)
	// 获取响应头
	headers, _ := proxywasm.GetHttpResponseHeaders()
	// 打印响应头
	var build strings.Builder
	build.WriteString("\n===========response headers===============\n")
	requestId := ctx.GetContext("requestId").(string)
	build.WriteString(fmt.Sprintf("requestId:%s\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\n", values[0], values[1]))
	}
	log.Infof(build.String())
	return types.ActionContinue
}

func onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseBody()")
	// 获取在 onHttpRequestHeaders 阶段设置的上下文
	logResponseBody, ok := ctx.GetContext("logResponseBody").(bool)
	if !ok {
		return types.ActionContinue
	}
	// 打印响应体
	if logResponseBody {
		var build strings.Builder
		build.WriteString("\n===========response body===============\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}
```


### 4.4 部署插件和验证

1. 构建插件镜像

```shell
PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push
```

2. 部署插件

easy-logger 插件部署 YAML 如下：
```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: easy-logger
  namespace: higress-system
spec:
  priority: 300
  matchRules:
    # 域名级生效配置
    - domain:
        - foo.com
      config:
        request: true
        response: true
        responseStatusCodes: "200,500,502,503"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/easy-logger:1.0.0
```

3. 验证插件

- 设置网关插件的日志级别为 debug。

```shell
kubectl exec <higress-gateway pod> -n higress-system -- \
curl -X POST http://127.0.0.1:15000/logging?wasm=debug
```

- 请求访问

```shell
curl -X POST -v http://127.0.0.1/hello \
-H "Content-type: application/json" -H 'host:foo.com' \
-d '{"username":["unamexxxx"],"password":["pswdxxxx"]}'
```

- 查看网关的日志，可以看到输出了请求和响应的详细信息

```shell
kubectl logs -f <higress-gateway pod> -n higress-system

[Envoy (Epoch 0)] [2024-07-20 04:56:55.251][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestHeaders()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.252][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========request headers===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
:authority:foo.com
:path:/hello
:method:POST
:scheme:http
user-agent:curl/8.1.2
accept:*/*
content-type:application/json
content-length:50
x-forwarded-for:192.168.65.1
x-forwarded-proto:http
x-envoy-internal:true
x-request-id:2ad88049-6ba3-4f3d-bc81-dc29fa48ffce
x-envoy-decorator-operation:echo-server.higress-course.svc.cluster.local:8080/*

[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestBody()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========request body===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
body:{"username":["unamexxxx"],"password":["pswdxxxx"]}

[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseHeaders()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========response headers===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
:status:200
content-type:application/json
x-content-type-options:nosniff
date:Sat, 20 Jul 2024 04:56:55 GMT
content-length:993
req-cost-time:8
req-arrive-time:1721451415248
resp-start-time:1721451415256
x-envoy-upstream-service-time:2
x-easy-logger:1.0.0

[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseBody()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========response body===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
body:{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Content-Length": [
   "50"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1721451415248"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-B3-Sampled": [
   "0"
  ],
  "X-B3-Spanid": [
   "f642c00a89551b07"
  ],
  "X-B3-Traceid": [
   "dfab58b011681d29f642c00a89551b07"
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
   "2ad88049-6ba3-4f3d-bc81-dc29fa48ffce"
  ]
 },
 "namespace": "higress-course",
 "ingress": "",
 "service": "",
 "pod": "echo-server-6f4df5fcff-nksqz",
 "body": {
  "password": [
   "pswdxxxx"
  ],
  "username": [
   "unamexxxx"
  ]
 }
}
```







