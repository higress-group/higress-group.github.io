const s="latest/zh-cn/plugins/custom.md",e="docs",a="latest/zh-cn/plugins/custom",t=`
## \u7F16\u8F91 Wasm \u6587\u4EF6

1. \u7528\u4E8E\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 Higress \u7684 Wasm \u63D2\u4EF6\u7684[SDK](https://github.com/alibaba/higress/tree/main/plugins/wasm-go)
2. [\u63D2\u4EF6\u5F00\u53D1\u793A\u4F8B](../user/wasm-go.md)

## \u6784\u5EFA Wasm \u955C\u50CF

\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u5148\u5728\u672C\u5730\u5C06 wasm \u6784\u5EFA\u51FA\u6765\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\u3002\u8FD9\u8981\u6C42\u4F60\u8981\u5148\u5728\u672C\u5730\u642D\u5EFA\u6784\u5EFA\u73AF\u5883\u3002

\u7F16\u8BD1\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A

- Go \u7248\u672C: >= 1.18\uFF08\u9700\u8981\u652F\u6301\u6CDB\u578B\u7279\u6027\uFF09

- TinyGo \u7248\u672C: >= 0.28.1\uFF08\u5EFA\u8BAE\u4F7F\u7528 0.28.1 \uFF09

\u4E0B\u9762\u662F\u672C\u5730\u6B65\u9AA4\u6784\u5EFA [request-block](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block) \u63D2\u4EF6\u7684\u4F8B\u5B50\u3002

### step1. \u7F16\u8BD1 wasm

\`\`\`bash
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`

### step2. \u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684 docker \u955C\u50CF

\u4F7F\u7528\u8FD9\u4EFD\u7B80\u5355\u7684 Dockerfile

\`\`\`Dockerfile
FROM scratch
COPY main.wasm plugin.wasm
\`\`\`

\`\`\`bash
docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .
docker push <your_registry_hub>/request-block:1.0.0
\`\`\`

## \u751F\u6548 Wasm \u63D2\u4EF6

### \u4F7F\u7528 Higress \u63A7\u5236\u53F0

\u5728\u63D2\u4EF6\u5E02\u573A\u4E2D\u521B\u5EFA\u70B9\u51FB\`\u521B\u5EFA\`\u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u5728\u955C\u50CF\u5730\u5740\u4E00\u680F\u4E2D\u586B\u5165\u4E0A\u9762\u6784\u5EFA\u51FA\u7684 Wasm \u955C\u50CF\u5730\u5740\u5373\u53EF\uFF1B

\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u63D2\u4EF6\u5361\u7247\u7684\u914D\u7F6E\u6309\u94AE\uFF0C\u586B\u5165\u63D2\u4EF6\u7684\u914D\u7F6E\uFF08\u5982\u679C\u6709\uFF09\uFF0C\u6253\u5F00\u5F00\u542F\u5F00\u5173\u5C31\u751F\u6548\u4E86\u3002

\u5982\u679C\u63D2\u4EF6\u903B\u8F91\u53D1\u751F\u4E86\u53D8\u66F4\uFF0C\u53EF\u4EE5\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF\uFF0C\u5E76\u4F7F\u7528\u4E0D\u540C\u7684\u955C\u50CF tag\uFF0C\u70B9\u63D2\u4EF6\u5361\u7247\u53F3\u4E0A\u65B9\u83DC\u5355\u4E2D\u7684\`\u7F16\u8F91\`\u6309\u94AE\uFF0C\u5C06 Wasm \u955C\u50CF\u5730\u5740\u4FEE\u6539\u4E3A\u65B0\u7248\u672C\u7684\u5730\u5740\u5373\u53EF\u3002

### \u4F7F\u7528 CRD

\u7F16\u5199 WasmPlugin \u8D44\u6E90\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
    block_urls:
    - "swagger.html"
  url: oci://<your_registry_hub>/request-block:1.0.0  # \u4E4B\u524D\u6784\u5EFA\u548C\u63A8\u9001\u7684 image \u5730\u5740
\`\`\`

\u4F7F\u7528 \`kubectl apply -f <your-wasm-plugin-yaml>\` \u4F7F\u8D44\u6E90\u751F\u6548\u3002
\u8D44\u6E90\u751F\u6548\u540E\uFF0C\u5982\u679C\u8BF7\u6C42url\u643A\u5E26 \`swagger.html\`, \u5219\u8FD9\u4E2A\u8BF7\u6C42\u5C31\u4F1A\u88AB\u62D2\u7EDD\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
curl <your_gateway_address>/api/user/swagger.html
\`\`\`

\`\`\`text
HTTP/1.1 403 Forbidden
date: Wed, 09 Nov 2022 12:12:32 GMT
server: istio-envoy
content-length: 0
\`\`\`
`,i={title:"\u81EA\u5B9A\u4E49\u63D2\u4EF6",description:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","custom","plugin"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/custom.md",rawData:void 0};export{o as _internal,t as body,e as collection,i as data,s as id,a as slug};
