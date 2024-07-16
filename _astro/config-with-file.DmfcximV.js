const s="config-with-file.md",e="blog",o="config-with-file",i=`## \u524D\u7F6E\u51C6\u5907

### \u5B89\u88C5 Docker Compose

\u8BF7\u53C2\u8003 Docker \u5B98\u65B9\u6587\u6863\u6765\u5B89\u88C5 Docker Engine\uFF0C\u5176\u4E2D\u5DF2\u7ECF\u5185\u7F6E\u4E86 Docker Compose \u7EC4\u4EF6\uFF1Ahttps://docs.docker.com/engine/install/

### \u73AF\u5883\u9A8C\u8BC1

1. \u542F\u52A8\u7EC8\u7AEF\uFF1B
3. \u6267\u884C \`docker compose version\` \u547D\u4EE4\uFF0C\u786E\u8BA4\u53EF\u4EE5\u6B63\u5E38\u8F93\u51FA Docker Compose \u7684\u7248\u672C\u3002
   \`\`\`
   Docker Compose version v2.20.2
   \`\`\`

## \u5B89\u88C5 Higrees

### \u786E\u5B9A\u914D\u7F6E\u76EE\u5F55

\u7531\u4E8E\u8FD9\u6B21\u6211\u4EEC\u51C6\u5907\u4F7F\u7528\u6587\u4EF6\u6765\u7BA1\u7406 Higress \u7684\u914D\u7F6E\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u786E\u5B9A\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4EE5 \`~/higress/conf\` \u76EE\u5F55\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002

### \u6267\u884C\u5B89\u88C5

\u542F\u52A8\u7EC8\u7AEF\uFF0C\u5E76\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c file://~/higress/conf -p <\u4F60\u7684\u5BC6\u7801> -a
\`\`\`

\u8BF7\u8010\u5FC3\u7B49\u5F85\u5B89\u88C5\u8FC7\u7A0B\u6267\u884C\u5B8C\u6BD5\u3002Higress \u7684\u6267\u884C\u6587\u4EF6\u5C06\u88AB\u5B89\u88C5\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 \`higress\` \u5B50\u76EE\u5F55\u5185\u3002\u914D\u7F6E\u6570\u636E\u5219\u5C06\u88AB\u5199\u5165 \`~/higress/conf\` \u76EE\u5F55\u5185\u3002

\u5728\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u542F\u52A8 Higress\u3002\u5F53\u7EC8\u7AEF\u8F93\u51FA\u5982\u4E0B\u4FE1\u606F\u65F6\uFF0C\u5219\u8BF4\u660E Higress \u5DF2\u5B89\u88C5\u5B8C\u6210\u5E76\u6210\u529F\u542F\u52A8\u3002

\`\`\`shell
Higress is now started. You can check out its status by executing /home/ch3cho/higress/bin/status.sh

Higress Gateway is listening on:
  http://0.0.0.0:80
  https://0.0.0.0:443
Visit Higress Console: http://localhost:8080/
\`\`\`

### Higress \u8DEF\u7531\u914D\u7F6E

\u4E3A\u4E86\u7740\u91CD\u8BF4\u660E\u57FA\u4E8E\u6587\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u5C06\u4E0D\u518D\u5C55\u5F00\u4ECB\u7ECD\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u6765\u8FDB\u884C\u914D\u7F6E\u7684\u5177\u4F53\u6B65\u9AA4\u3002\u5982\u6709\u9700\u8981\uFF0C\u5927\u5BB6\u53EF\u4EE5\u67E5\u9605\u5176\u4ED6\u6587\u6863\u3002

#### \u521B\u5EFA\u670D\u52A1\u6765\u6E90

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/mcpbridges/default.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: httpbin.org
    name: httpbin
    port: 80
    type: dns
\`\`\`

#### \u521B\u5EFA\u57DF\u540D\u914D\u7F6E

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/configmaps/domain-foo.bar.com.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: domain-foo.bar.com
  namespace: higress-system
data:
  domain: foo.bar.com
  enableHttps: "off"
\`\`\`

#### \u521B\u5EFA\u670D\u52A1\u8DEF\u7531

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/ingresses/route-foo-bar.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/ignore-path-case: "false"
  name: route-foo-bar
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

### \u8BF7\u6C42\u9A8C\u8BC1

\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`shell
curl http://localhost/get?foo=bar -H 'Host: foo.bar.com'
\`\`\`

\u8BF7\u6C42\u5E94\u8FD4\u56DE\u4E00\u6BB5\u5305\u542B\u8BF7\u6C42\u4FE1\u606F\u7684 JSON \u6570\u636E\uFF1A
\`\`\`json
{
  "args": {
    "foo": "bar"
  },
  "headers": {
    "Accept": "*/*",
    "Host": "foo.bar.com",
    "Original-Host": "foo.bar.com",
    "Req-Start-Time": "1693049173053",
    "User-Agent": "curl/8.1.2",
    "X-Amzn-Trace-Id": "Root=1-11111111-111111111111111111111111",
    "X-B3-Sampled": "0",
    "X-B3-Spanid": "2222222222222222",
    "X-B3-Traceid": "33333333333333333333333333333333",
    "X-Envoy-Attempt-Count": "1",
    "X-Envoy-Decorator-Operation": "httpbin.dns:80/*",
    "X-Envoy-Internal": "true"
  },
  "origin": "192.168.16.1, 123.123.123.123",
  "url": "http://foo.bar.com/get?foo=bar"
}
\`\`\`

## \u5DF2\u77E5\u95EE\u9898

\u5728 Windows \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u76F4\u63A5\u4FEE\u6539\u6302\u8F7D\u5230 Docker \u5BB9\u5668\u4E2D\u7684\u672C\u5730\u6587\u4EF6\u540E\uFF0C\u5BB9\u5668\u5185\u7684\u8FDB\u7A0B\u65E0\u6CD5\u6536\u5230\u901A\u77E5\uFF08\u8BE6\u60C5\u8BF7\u67E5\u770B [fsnotify/fsnotify #292](https://github.com/fsnotify/fsnotify/issues/292)\uFF09\u3002\u5982\u679C\u8981\u4F7F\u7528\u6587\u4EF6\u6765\u4FDD\u5B58\u914D\u7F6E\u6570\u636E\u7684\u8BDD\uFF0C\u5728\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\uFF0CHigress \u65E0\u6CD5\u7ACB\u5373\u52A0\u8F7D\u5230\u65B0\u7684\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u5728 Windows \u4E0A\u72EC\u7ACB\u90E8\u7F72 Higress \u7F51\u5173\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7 Higress Console \u6765\u7BA1\u7406\u914D\u7F6E\u4FE1\u606F\uFF0C\u6216\u4F7F\u7528 Nacos \u4FDD\u5B58\u7F51\u5173\u914D\u7F6E\u3002

## \u53C2\u8003\u6587\u6863

\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u4E0E Higress \u7684\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\u53EF\u67E5\u9605\u4EE5\u4E0B\u6587\u6863\uFF1A
- [\u5FEB\u901F\u5F00\u59CB](../docs/user/quickstart)
- [\u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72](../docs/ops/deploy-by-helm)
- [\u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72](../docs/ops/deploy-by-docker-compose)
`,t={title:"\u57FA\u4E8E\u6587\u4EF6\u914D\u7F6E\u5B9E\u73B0 Higress \u6781\u7B80\u72EC\u7ACB\u90E8\u7F72",description:"\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u6587\u4EF6\u6765\u7BA1\u7406 Higress \u914D\u7F6E\u4FE1\u606F\u5E76\u5B9E\u73B0\u72EC\u7ACB\u90E8\u7F72",keywords:["higress","file","config"],date:"2023-08-25",author:"CH3CHO",category:"article"},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/config-with-file.md",rawData:void 0};export{r as _internal,i as body,e as collection,t as data,s as id,o as slug};
