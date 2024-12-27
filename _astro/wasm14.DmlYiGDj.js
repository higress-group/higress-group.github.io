const e="ebook/en/wasm14.md",o="docs",s="ebook/en/wasm14",t=`
# Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6

\u672C\u7AE0\u5F00\u59CB\u8FDB\u5165 Wasm \u63D2\u4EF6\u5F00\u53D1\u7BC7\uFF0C\u4E3B\u8981\u4ECB\u7ECD Wasm \u63D2\u4EF6\u914D\u7F6E\u3001Higress WasmPlugin CRD \u4EE5\u53CA\u5982\u4F55\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002

## 1 \u6D4B\u8BD5\u73AF\u5883\u51C6\u5907

> Higress \u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u7F51\u5173\u5730\u5740\u662F 127.0.0.1\uFF0C\u7AEF\u53E3\u662F 80 \u548C 443\u3002

\u51C6\u5907 echo-server \u548C Ingress, \u5176 YAML \u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
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
\`\`\`

## 2 Wasm \u63D2\u4EF6\u914D\u7F6E

Higress WasmPlugin \u5728 Istio WasmPlugin \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u652F\u6301\u5168\u5C40\u3001\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u914D\u7F6E\u3002\u8FD9 4 \u4E2A\u914D\u7F6E\u4F18\u5148\u7EA7\u662F\uFF1A\u8DEF\u7531\u7EA7 > \u57DF\u540D\u7EA7 > \u670D\u52A1\u7EA7 > \u5168\u5C40\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u5339\u914D\u5230\u5177\u4F53\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u8BF7\u6C42\u624D\u4F1A\u5E94\u7528\u5168\u5C40\u914D\u7F6E\u3002

\u4E0B\u9762\u4EE5 Higress \u5B98\u65B9\u63D0\u4F9B\u7684 [custom-response](https://higress.io/zh-cn/docs/plugins/transformation/custom-response) \u63D2\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002custom-response \u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u5305\u62EC HTTP \u54CD\u5E94\u72B6\u6001\u7801\u3001HTTP \u54CD\u5E94\u5934\uFF0C\u4EE5\u53CA HTTP \u54CD\u5E94\u4F53\u3002custom-response \u63D2\u4EF6\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u6A21\u62DF\u54CD\u5E94\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u72B6\u6001\u7801\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002\u4F8B\u5982\uFF0C\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\uFF0C\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002

\u5E94\u7528 custom-response \u63D2\u4EF6\uFF0CYAML \u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: custom-response
  namespace: higress-system
spec:
  priority: 200
  # \u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E
  defaultConfig:
    headers:
      - key1=value1
    "body": "{\\"hello\\":\\"foo\\"}"
  matchRules:
    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
    - domain:
        - bar.com
      config:
        headers:
          - key2=value2
        "body": "{\\"hello\\":\\"bar\\"}"
    # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E
    - ingress:
        - higress-course/ingress-baz
      # higress-course \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A ingress-baz \u7684 ingress \u4F1A\u5E94\u7528\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
      config:
        headers:
          - key3=value3
        "body": "{\\"hello\\":\\"baz\\"}"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
\`\`\`

\u8BBF\u95EE foo.com\uFF0C\u7531\u4E8E\u8BF7\u6C42\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u57DF\u540D\u7EA7\u6216\u8DEF\u7531\u7EA7\u914D\u7F6E\uFF0C\u56E0\u6B64\u6700\u7EC8\u5E94\u7528\u4E86\u5168\u5C40\u914D\u7F6E\u3002

\`\`\`shell
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
\`\`\`

\u8BBF\u95EE bar.com\uFF0C\u8BF7\u6C42\u5339\u914D\u57DF\u540D\u7EA7\u914D\u7F6E\u3002

\`\`\`shell
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
\`\`\`

\u8BBF\u95EE baz.com\uFF0C\u8BF7\u6C42\u5339\u914D\u8DEF\u7531\u7EA7\u914D\u7F6E\u3002

\`\`\`shell
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
\`\`\`

\u6D4B\u8BD5\u5B8C\u6210\u540E\u5220\u9664 \`custom-response\` WasmPlugin\uFF0C\u907F\u514D\u5BF9\u540E\u7EED\u6D4B\u8BD5\u4EA7\u751F\u5F71\u54CD\u3002

\`\`\`shell
kubectl delete wasmplugin custom-response -n higress-system
\`\`\`

## 3 Higress WasmPlugin CRD 

Higress WasmPlugin CRD \u5728 [Istio WasmPlugin CRD](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/) \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u65B0\u589E \`defaultConfig\` \u548C \`matchRules\` \u5B57\u6BB5\uFF0C\u7528\u4E8E\u914D\u7F6E\u63D2\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\u548C\u8DEF\u7531\u7EA7\u3001\u57DF\u540D\u7EA7\u914D\u7F6E\u3002

\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

| \u5B57\u6BB5\u540D\u79F0             | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42 | \u63CF\u8FF0                                                                                                          |
|------------------|-----------------|----|-------------------------------------------------------------------------------------------------------------|
| \`pluginName\`     | string          | \u9009\u586B | \u63D2\u4EF6\u540D\u79F0                                                                                                        |
| \`phase\`          | string          | \u9009\u586B | \u63D2\u4EF6\u63D2\u5165\u63D2\u4EF6\u94FE\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F UNSPECIFIED_PHASE                                                                           |
| \`priority\`       | int             | \u9009\u586B | \u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5728\u76F8\u540C \`phase\` \u4E0B\uFF0C\u503C\u8D8A\u5927\u8D8A\u5148\u5904\u7406\u8BF7\u6C42\uFF0C\u4F46\u8D8A\u540E\u5904\u7406\u54CD\u5E94                                                               |
| \`imagePullPolicy\` | string          | \u9009\u586B | \u63D2\u4EF6\u955C\u50CF\u62C9\u53D6\u7B56\u7565\uFF0C\u53EF\u9009\u503C\u6709\uFF1A\`UNSPECIFIED_POLICY\`\uFF08\u9ED8\u8BA4\u503C\uFF09\u3001\`IfNotPresent\`\u3001\`Always\`                                             |
| \`imagePullSecret\` | string          | \u9009\u586B | \u7528\u4E8E\u62C9\u53D6 OCI \u955C\u50CF\u7684\u51ED\u636E\u3002\u4E0E WasmPlugin \u5728\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D\u7684Kubernetes Secret \u7684\u540D\u79F0                                                  |
| \`url\`            | string          | \u5FC5\u586B | Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 URL\uFF0C\u9ED8\u8BA4\u4E3A \`oci://\`\uFF0C\u5F15\u7528 OCI \u955C\u50CF\u3002\u540C\u65F6\u652F\u6301 \`file://\`\uFF0C\u7528\u4E8E\u5BB9\u5668\u672C\u5730\u7684 Wasm \u6587\u4EF6\uFF0C\u4EE5\u53CA \`http[s]://\`\uFF0C\u7528\u4E8E\u5F15\u7528\u8FDC\u7A0B\u6258\u7BA1\u7684 Wasm \u6587\u4EF6 |
| \`Sha256\`         | string          |  \u9009\u586B  | \u7528\u4E8E\u9A8C\u8BC1 Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 SHA256 \u6821\u9A8C\u548C                                                                            |
| \`defaultConfig\`  | object          | \u9009\u586B | \u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u4E8E\u6CA1\u6709\u5339\u914D\u5177\u4F53\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u7684\u8BF7\u6C42                                                                                |
| \`defaultConfigDisable\`| bool            |  \u9009\u586B  | \u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\u662F\u5426\u5931\u6548\uFF0C\u9ED8\u8BA4\u503C\u662F false                                                                                       |
| \`matchRules\`     | array of object | \u9009\u586B | \u5339\u914D\u57DF\u540D\u6216\u8DEF\u7531\u751F\u6548\u7684\u914D\u7F6E                                                                                                |

\`phase\` \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u5B57\u6BB5\u540D\u79F0               | \u63CF\u8FF0                                                                     |
|--------------------|------------------------------------------------------------------------|
| \`UNSPECIFIED_PHASE\` | \u5728\u63D2\u4EF6\u8FC7\u6EE4\u5668\u94FE\u7684\u672B\u7AEF\uFF0C\u5728\u8DEF\u7531\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u63D2\u4EF6\u7684 \`phase\`\uFF0C\u5219\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A \`UNSPECIFIED_PHASE\` |
| \`AUTHN\`            | \u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6                                                    |
| \`AUTHZ\`            | \u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6                                    |
| \`STATS\`            | \u5728 Istio \u7EDF\u8BA1\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6                                    |

\`matchRules\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A

| \u5B57\u6BB5\u540D\u79F0            | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42                                 | \u914D\u7F6E\u793A\u4F8B                           | \u63CF\u8FF0                                      |
|-----------------|-------|--------------------------------------|--------------------------------|-----------------------------------------|
| \`ingress\`       | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879 | ["default/foo", "default/bar"] | \u5339\u914D ingress \u8D44\u6E90\u5BF9\u8C61\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A: \`\u547D\u540D\u7A7A\u95F4/ingress\u540D\u79F0\` |
| \`domain\`        | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879| ["example.com", "*.test.com"]  | \u5339\u914D\u57DF\u540D\uFF0C\u652F\u6301\u6CDB\u57DF\u540D                              |
| \`service\`       | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879        | ["echo-server.higress-course.svc.cluster.local"]  | \u5339\u914D\u670D\u52A1\u540D\u79F0                                  |
| \`config\`        | \u5BF9\u8C61    | \u9009\u586B                                   | -                              | \u5339\u914D\u540E\u751F\u6548\u7684\u63D2\u4EF6\u914D\u7F6E                              |
| \`configDisable\` | bool  | \u9009\u586B                                   | false                          | \u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A false                      |


## 4 \u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1

\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u65E5\u5FD7\u63D2\u4EF6 \`easy-logger\`, \u8FD9\u4E2A\u63D2\u4EF6\u6839\u636E\u914D\u7F6E\u8BB0\u5F55\u8BF7\u6C42\u548C\u54CD\u5E94\u5230\u7F51\u5173\u65E5\u5FD7\u4E2D\u3002\u6574\u4E2A\u8FC7\u7A0B\u6D89\u53CA\u5230\u63D2\u4EF6\u5F00\u53D1\u73AF\u5883\u51C6\u5907\u3001\u5F00\u53D1\u548C\u6D4B\u8BD5\u3001\u90E8\u7F72\u548C\u9A8C\u8BC1\u3002

### 4.1 \u73AF\u5883\u51C6\u5907

\u73AF\u5883\u51C6\u5907\u5982\u4E0B\uFF1A

- Docker \u5B98\u65B9\u5B89\u88C5\u8FDE\u63A5\uFF1Ahttps://docs.docker.com/engine/install/
- Go \u7248\u672C: >= 1.19 (\u9700\u8981\u652F\u6301\u8303\u578B\u7279\u6027)\uFF0C\u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1Ahttps://go.dev/doc/install

\u5982\u679C\u9009\u62E9\u7528 TinyGo \u5728\u672C\u5730\u6784\u5EFA Wasm \u6587\u4EF6\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\uFF0C\u9700\u8981\u5B89\u88C5 TinyGo\uFF0C\u5176\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A

- TinyGo \u7248\u672C: >= 0.28.1 (\u5EFA\u8BAE\u7248\u672C 0.28.1) \u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1Ahttps://tinygo.org/getting-started/install/

### 4.2 \u5F00\u53D1\u548C\u6D4B\u8BD5

#### 4.2.1 \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55

1. \u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6 easy-logger\u3002

\`\`\`shell
mkdir easy-logger
\`\`\`
2. \u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521D\u59CB\u5316 Go \u5DE5\u7A0B\u3002

\`\`\`shell
go mod init easy-logger
\`\`\`

go.mod \u6587\u4EF6\u4E2D go \u7248\u672C\u9700\u8981\u8BBE\u7F6E\u4E3A 1.19\uFF0C\u7531\u4E8E\u5728 4.3.3 \u8282\u4E2D\u6211\u4EEC\u5C06\u4F7F\u7528 1.19 \u7248\u672C\u7684 wasm-go-builder \u955C\u50CF\u6765\u6784\u5EFA\u63D2\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u4FDD\u6301\u4E24\u8005\u7684 go \u7248\u672C\u4E00\u81F4\u3002

\`\`\`shell
module easy-logger

go 1.19
\`\`\`

3. \u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406

\`\`\`shell
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`

4. \u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56

\`\`\`shell
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`

#### 4.2.2 \u7F16\u5199 main.go \u6587\u4EF6
\u9996\u5148\uFF0C\u6211\u4EEC\u7F16\u5199 easy-logger \u63D2\u4EF6\u7684\u57FA\u672C\u6846\u67B6\uFF0C\u6682\u65F6\u53EA\u8BFB\u53D6\u6211\u4EEC\u8BBE\u7F6E\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u4E0D\u5728\u8BF7\u6C42\u548C\u54CD\u5E94\u9636\u6BB5\u8FDB\u884C\u4EFB\u4F55\u5904\u7406\u3002

\`\`\`go
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"easy-logger",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type LoggerConfig struct {
	// \u662F\u5426\u6253\u5370\u8BF7\u6C42
	request bool
	// \u662F\u5426\u6253\u5370\u54CD\u5E94
	response bool
	// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *
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
\`\`\`

Higress \u63D2\u4EF6 SDK \u5F00\u53D1\u6D89\u53CA\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A

- wrapper.HttpContext\uFF1A\u8BF7\u6C42\u4E0A\u4E0B\u6587\u3002
- LoggerConfig\uFF1A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\u3002
- wrapper.Log\uFF1A\u63D2\u4EF6\u65E5\u5FD7\u5DE5\u5177\u3002
- wrapper.ProcessXXXX\uFF1A\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- proxywasm\uFF1A\u63D0\u4F9B\u63D2\u4EF6\u5DE5\u5177\u51FD\u6570\u5305\u3002

wrapper \u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u5305\u542B\u4EE5\u4E0B\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u8BBE\u7F6E\u4EE5\u4E0B\u94A9\u5B50\u51FD\u6570\uFF1A

- wrapper.ParseConfigBy(parseConfig)\uFF1A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\u3002
- wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\u3002
- wrapper.ProcessRequestBodyBy(onHttpRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53\u3002
- wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934\u3002
- wrapper.ProcessResponseBodyBy(onHttpResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53\u3002
- wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53\u3002
- wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53\u3002

\u5173\u4E8E Higress \u63D2\u4EF6 SDK \u5185\u5BB9\u4F1A\u5728\u540E\u7EED\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u5C55\u5F00\u3002

#### 4.3.3 \u672C\u5730\u6D4B\u8BD5

1. \u7B2C\u4E00\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\u3002\u7F51\u5173\u5728 10000 \u7AEF\u53E3\u76D1\u542C HTTP \u8BF7\u6C42\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230 echo-server \u670D\u52A1\u3002

\`\`\`yaml
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
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
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
\`\`\`

\u63D2\u4EF6\u901A\u8FC7\u672C\u5730\u6587\u4EF6\u7684\u65B9\u5F0F\u52A0\u8F7D\u5230 Envoy \u4E2D\uFF0C\u63D2\u4EF6\u914D\u7F6E\u7684\u5982\u4E0B\uFF1A

\`\`\`yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |-
      {
        "request": true,
        "response": true,
        "responseStatusCodes": "200,500,502,503"
      }
\`\`\`

2. \u7B2C\u4E8C\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
version: '3.9'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9 Wasm \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u65F6\u8BF7\u4F7F\u7528\u9ED8\u8BA4\u7684 info \u7EA7\u522B
    # \u5982\u679C\u9700\u8981\u5C06 Envoy \u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u4E3A debug\uFF0C\u5C06 --log-level \u53C2\u6570\u8BBE\u7F6E\u4E3A debug
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
\`\`\`
3. \u7B2C\u4E09\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Dockerfile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
ARG BUILDER=higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go1.19-tinygo0.28.1-oras1.0.0
FROM $BUILDER as builder

ARG GOPROXY
ENV GOPROXY=\${GOPROXY}

ARG EXTRA_TAGS=""
ENV EXTRA_TAGS=\${EXTRA_TAGS}

WORKDIR /workspace
COPY . .
RUN go mod tidy
RUN tinygo build -o /main.wasm -scheduler=none -gc=custom -tags="custommalloc nottinygc_finalizer $EXTRA_TAGS" -target=wasi ./main.go

FROM scratch as output
COPY --from=builder /main.wasm plugin.wasm
\`\`\`

4. \u7B2C\u56DB\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Makefile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`shell
PLUGIN_NAME ?= hello-world
BUILDER_REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
GO_VERSION ?= 1.19
TINYGO_VERSION ?= 0.28.1
ORAS_VERSION ?= 1.0.0
HIGRESS_VERSION ?= 1.4.1
USE_HIGRESS_TINYGO ?= true
BUILDER ?= \${BUILDER_REGISTRY}wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}
BUILD_TIME := $(shell date "+%Y%m%d-%H%M%S")
COMMIT_ID := $(shell git rev-parse --short HEAD 2>/dev/null)
IMAGE_TAG = $(if $(strip $(PLUGIN_VERSION)),\${PLUGIN_VERSION},\${BUILD_TIME}-\${COMMIT_ID})
IMG ?= \${REGISTRY}\${PLUGIN_NAME}:\${IMAGE_TAG}
GOPROXY := $(shell go env GOPROXY)
EXTRA_TAGS ?= proxy_wasm_version_0_2_100

.DEFAULT:
local-docker-build:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\
	                            --build-arg GOPROXY=$(GOPROXY) \\
	                             --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\
	                            -t \${IMG} \\
	                            --output build \\
	                            .
	@echo ""
	@echo "output wasm file: ./build/plugin.wasm"

build-image:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\
	                            --build-arg GOPROXY=$(GOPROXY) \\
	                            --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\
	                            -t \${IMG} \\
	                            .
	@echo ""
	@echo "image:            \${IMG}"

build-push: build-image
	docker push \${IMG}

local-build:
	tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer $(EXTRA_TAGS)' \\
		-o ./build/plugin.wasm main.go
	@echo ""
	@echo "wasm: ./build/plugin.wasm"

local-run:
	echo  > ./envoy.log
	docker compose down
	docker compose up -d

local-all: local-build local-run
local-docker-all: local-docker-build local-run
\`\`\`

\u8BF7\u5C06 Makefile \u6587\u4EF6\u4E2D\u955C\u50CF\u4ED3\u5E93\u5730\u5740 \`REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/\` \u6362\u6210\u81EA\u5DF1\u7684\u955C\u50CF\u4ED3\u5E93\u5730\u5740\u3002

\u5176\u547D\u4EE4\u8BF4\u660E\u5982\u4E0B\uFF1A
- \`make local-docker-build\`: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002
- \`make local-build\`: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002
- \`make local-run\`: \u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u3002
- \`PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-image\` \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\u3002
- \`PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push\` \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\uFF0C\u540C\u65F6\u63A8\u9001\u5230\u955C\u50CF\u4ED3\u5E93\u3002
- \`make local-docker-all\`: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002
- \`make local-all\`: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002

\u6CE8\u610F\u7528 TinyGo \u672C\u5730\u6784\u5EFA\u547D\u4EE4\u5982\u4E0B\uFF1A
\`\`\`shell
tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100' -o ./build/plugin.wasm main.go
\`\`\`

5. \u7B2C\u4E94\u6B65\uFF1A\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883

\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A

\`\`\`shell
make local-docker-all
\`\`\`

\u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u540E\uFF0C\u63D2\u4EF6\u76EE\u5F55\u6574\u4F53\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A

\`\`\`shell
tree 
.
\u251C\u2500\u2500 Dockerfile
\u251C\u2500\u2500 Makefile
\u251C\u2500\u2500 build
\u2502\xA0\xA0 \u2514\u2500\u2500 plugin.wasm  # \u6784\u5EFA\u751F\u6210\u7684 Wasm \u6587\u4EF6
\u251C\u2500\u2500 docker-compose.yaml
\u251C\u2500\u2500 envoy.log  # Envoy \u65E5\u5FD7\u6587\u4EF6
\u251C\u2500\u2500 envoy.yaml
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u2514\u2500\u2500 main.go
\`\`\`

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u901A\u8FC7\u7F51\u5173\u8BBF\u95EE echo-server\u3002

\`\`\`shell
curl -X POST -v http://127.0.0.1:10000/hello \\
-H "Content-type: application/json"  -H 'host:foo.com' \\
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
\`\`\`

\u67E5\u770B\u63D2\u4EF6\u76EE\u5F55\u4E0B envoy.log \u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230 easy-logger \u63D2\u4EF6\u7684\u65E5\u5FD7\u8F93\u51FA\u3002

\`\`\`shell
[2024-07-20 04:08:19.990][22][debug][wasm] [external/envoy/source/extensions/common/wasm/wasm.cc:146] Thread-Local Wasm created 10 now active
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parseConfig()
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parse config:&{request:true response:true responseStatusCodes:200,500,502,503}
[2024-07-20 04:08:19.993][1][warning][main] [external/envoy/source/server/server.cc:715] there is no configured limit to the number of allowed active connections. Set a limit via the runtime key overload.global_downstream_max_connections
[2024-07-20 04:39:46.114][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestHeaders()
[2024-07-20 04:39:46.116][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestBody()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseHeaders()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseBody()
\`\`\`

\u5230\u8FD9\u91CC\u8868\u793A\u6574\u4F53\u5F00\u53D1\u548C\u6D4B\u8BD5\u73AF\u5883\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u4E0B\u9762\u5C31\u662F\u5B8C\u5584\u63D2\u4EF6\u529F\u80FD\uFF0C\u7136\u540E\u91CD\u65B0\u6D4B\u8BD5\u3002

### 4.3 \u5B8C\u5584\u63D2\u4EF6\u529F\u80FD

\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u81EA\u5B9A\u4E49\u51FD\u6570\u6765\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\u3002\u901A\u8FC7\u8BBE\u7F6E\u63D2\u4EF6\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236\u662F\u5426\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\uFF0C\u5E76\u6839\u636E\u6307\u5B9A\u7684\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u5185\u5BB9\u3002

\`\`\`go
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
		// \u63D2\u4EF6\u540D\u79F0
		"easy-logger",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type LoggerConfig struct {
	// \u662F\u5426\u6253\u5370\u8BF7\u6C42
	request bool
	// \u662F\u5426\u6253\u5370\u54CD\u5E94
	response bool
	// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *
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
	// \u83B7\u53D6\u5E76\u6253\u5370\u8BF7\u6C42\u5934
	headers, _ := proxywasm.GetHttpRequestHeaders()
	var build strings.Builder
	build.WriteString("\\n===========request headers===============\\n")
	build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\\n", values[0], values[1]))
	}
	log.Infof(build.String())
	// \u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	return types.ActionContinue
}

func onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestBody()")
	// \u6253\u5370\u8BF7\u6C42\u4F53
	if config.request {
		var build strings.Builder
		build.WriteString("\\n===========request body===============\\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseHeaders()")
	// \u6DFB\u52A0\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934
	proxywasm.AddHttpResponseHeader("x-easy-logger", "1.0.0")
	if !config.response {
		return types.ActionContinue
	}
	// \u83B7\u53D6\u54CD\u5E94\u72B6\u6001\u7801
	statusCode, _ := proxywasm.GetHttpResponseHeader(":status")
	logResponseBody := false
	// \u6839\u636E\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53
	if config.responseStatusCodes == "*" || strings.Contains(config.responseStatusCodes, statusCode) {
		logResponseBody = true
	}
	// \u5C06\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u4F53\u7684\u4FE1\u606F\u5B58\u50A8\u5728\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5728 onHttpResponseBody \u9636\u6BB5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5224\u65AD\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53
	ctx.SetContext("logResponseBody", logResponseBody)
	// \u83B7\u53D6\u54CD\u5E94\u5934
	headers, _ := proxywasm.GetHttpResponseHeaders()
	// \u6253\u5370\u54CD\u5E94\u5934
	var build strings.Builder
	build.WriteString("\\n===========response headers===============\\n")
	requestId := ctx.GetContext("requestId").(string)
	build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\\n", values[0], values[1]))
	}
	log.Infof(build.String())
	return types.ActionContinue
}

func onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseBody()")
	// \u83B7\u53D6\u5728 onHttpRequestHeaders \u9636\u6BB5\u8BBE\u7F6E\u7684\u4E0A\u4E0B\u6587
	logResponseBody, ok := ctx.GetContext("logResponseBody").(bool)
	if !ok {
		return types.ActionContinue
	}
	// \u6253\u5370\u54CD\u5E94\u4F53
	if logResponseBody {
		var build strings.Builder
		build.WriteString("\\n===========response body===============\\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}
\`\`\`


### 4.4 \u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1

1. \u6784\u5EFA\u63D2\u4EF6\u955C\u50CF

\`\`\`shell
PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push
\`\`\`

2. \u90E8\u7F72\u63D2\u4EF6

easy-logger \u63D2\u4EF6\u90E8\u7F72 YAML \u5982\u4E0B\uFF1A
\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: easy-logger
  namespace: higress-system
spec:
  priority: 300
  matchRules:
    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
    - domain:
        - foo.com
      config:
        request: true
        response: true
        responseStatusCodes: "200,500,502,503"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/easy-logger:1.0.0
\`\`\`

3. \u9A8C\u8BC1\u63D2\u4EF6

- \u8BBE\u7F6E\u7F51\u5173\u63D2\u4EF6\u7684\u65E5\u5FD7\u7EA7\u522B\u4E3A debug\u3002

\`\`\`shell
kubectl exec <higress-gateway pod> -n higress-system -- \\
curl -X POST http://127.0.0.1:15000/logging?wasm=debug
\`\`\`

- \u8BF7\u6C42\u8BBF\u95EE

\`\`\`shell
curl -X POST -v http://127.0.0.1/hello \\
-H "Content-type: application/json" -H 'host:foo.com' \\
-d '{"username":["unamexxxx"],"password":["pswdxxxx"]}'
\`\`\`

- \u67E5\u770B\u7F51\u5173\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u4E86\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u8BE6\u7EC6\u4FE1\u606F

\`\`\`shell
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
\`\`\`







`,r={title:"Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/en/wasm14.md",rawData:void 0};export{n as _internal,t as body,o as collection,r as data,e as id,s as slug};
