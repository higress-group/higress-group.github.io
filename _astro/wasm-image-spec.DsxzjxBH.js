const e="latest/zh-cn/user/wasm-image-spec.md",i="docs",a="latest/zh-cn/user/wasm-image-spec",t=`
# Wasm \u63D2\u4EF6\u955C\u50CF\u89C4\u8303

## 1. \u6982\u8FF0

\u672C\u89C4\u8303\u65E8\u5728\u5B9A\u4E49\u5BF9 Higress Wasm Plugin \u955C\u50CF\u7684\u5185\u5BB9\u548C\u6784\u5EFA\u65B9\u5F0F\u3002\u5728\u7F16\u5199\u65F6\uFF0C\u7B14\u8005\u53C2\u8003\u4E86 [Wasm Image Specification](https://github.com/solo-io/wasm/blob/master/spec/spec-compat.md)\u3002

> \u6CE8\u610F\uFF1A\u672C\u89C4\u8303\u4F7F\u7528 OCI \u955C\u50CF\u683C\u5F0F\uFF0C\u5E76\u4E0D\u9650\u5B9A\u63D2\u4EF6\u53EA\u80FD\u4F7F\u7528 OCI \u955C\u50CF\uFF0C\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1\uFF0C\u8BF7\u53C2\u8003[\u81EA\u5B9A\u4E49\u63D2\u4EF6](../plugins/custom.md)\u91CC\u4ECB\u7ECD\u7684\u66F4\u7B80\u5355\u7684\u65B9\u5F0F\u3002
>
> OCI \u955C\u50CF\u662F\u7528\u6765\u89C4\u8303\u6240\u6709\u5E73\u53F0\u63A8\u51FA\u7684\u901A\u7528\u6807\u51C6\u63D2\u4EF6\u4F7F\u7528


## 2. \u955C\u50CF\u7ED3\u6784

\u6BCF\u4E2A\u955C\u50CF\u5FC5\u987B\u57FA\u4E8E \`scratch\` \u4F7F\u7528 [OCI \u683C\u5F0F\u89C4\u8303](https://github.com/opencontainers/image-spec)\u8FDB\u884C\u6784\u5EFA\uFF0C\u4E14\u53EF\u5305\u542B\u4EE5\u4E0B\u6587\u4EF6\uFF1A

- spec.yaml\uFF1A\u5FC5\u8981\u3002\u63D2\u4EF6\u7684\u5143\u6570\u636E\u6587\u4EF6\u3002\u5176\u5185\u5BB9\u683C\u5F0F\u8BF7\u89C1\u7B2C 3 \u8282\u3002
- README.md\uFF1A\u5FC5\u8981\u3002\u63D2\u4EF6\u7684\u7528\u6CD5\u8BF4\u660E\u6587\u4EF6\u3002\u4F7F\u7528 Markdown \u683C\u5F0F\u3002\u8BED\u8A00\u53EF\u4F7F\u7528\u82F1\u6587\u6216\u4E2D\u6587\u3002
- README_{lang}.md\uFF1A\u53EF\u9009\u3002\u63D2\u4EF6\u7528\u6CD5\u8BF4\u660E\u6587\u4EF6\u7684\u7FFB\u8BD1\u7248\u672C\u3002\u4F7F\u7528 Markdown \u683C\u5F0F\u3002\`lang\` \u7684\u53D6\u503C\u4E3A \`ZH\` \u6216 \`EN\`\u3002
- icon.png\uFF1A\u53EF\u9009\u3002\u63D2\u4EF6\u7684\u56FE\u6807\u6587\u4EF6\u3002\u4E5F\u53EF\u4EE5\u9009\u62E9\u5728 spec.yaml \u4E2D\u6307\u5B9A\u56FE\u6807 URL\u3002\u4E8C\u8005\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u4F7F\u7528\u5305\u5185\u90E8\u7684\u56FE\u6807\u6587\u4EF6\u7528\u4E8E\u5C55\u793A\u3002
- plugin.wasm\uFF1A\u5FC5\u8981\u3002\u63D2\u4EF6\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002

\u955C\u50CF\u7684\u6BCF\u4E00\u5C42\u53EA\u53EF\u5305\u542B\u4E00\u4E2A\u6587\u4EF6\u3002

\u9664 plugin.wasm \u6240\u5728\u5C42\u5916\uFF0C\u5176\u5B83\u5C42\u9700\u6839\u636E\u6587\u4EF6\u540D\u8BBE\u7F6E media type\uFF1A

- spec.yaml\uFF1Aapplication/vnd.module.wasm.spec.v1+yaml 
- README.md\uFF1Aapplication/vnd.module.wasm.doc.v1+markdown
- README_{lang}.md\uFF1Aapplication/vnd.module.wasm.doc.v1.{lang}+markdown
- icon.png\uFF1Aapplication/vnd.module.wasm.icon.v1+png

plugin.wasm \u6587\u4EF6\u5FC5\u987B\u653E\u7F6E\u4E8E\u955C\u50CF\u7684\u6700\u540E\u4E00\u5C42\uFF0C\u4E14\u8BE5\u5C42\u5E94\u4F7F\u7528 application/vnd.oci.image.layer.v1.tar+gzip \u4F5C\u4E3A media type\u3002

## 3. \u5143\u6570\u636E\u6587\u4EF6\u683C\u5F0F

\u672C\u8282\u4EE5 \`basic-auth\` \u63D2\u4EF6\u7684\u5143\u6570\u636E\u4FE1\u606F\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u5143\u6570\u636E\u6587\u4EF6 \`spec.yaml\` \u7684\u683C\u5F0F\u3002

\`\`\`yaml
apiVersion: 1.0.0  # \u672C\u6587\u4EF6\u6240\u4F7F\u7528\u7684\u683C\u5F0F\u7248\u672C\u3002\u76EE\u524D\u56FA\u5B9A\u4E3A 1.0.0
info:
  category: auth # \u63D2\u4EF6\u7C7B\u578B\u3002\u53EF\u9009\u503C\u6709\uFF1Aauth\uFF08\u8BA4\u8BC1\u9274\u6743\uFF09\u3001security\uFF08\u5B89\u5168\u9632\u62A4\uFF09\u3001protocol\uFF08\u534F\u8BAE\u8F6C\u6362\uFF09\u3001flow-control\uFF08\u6D41\u91CF\u63A7\u5236\uFF09\u3001flow-monitor\uFF08\u6D41\u91CF\u89C2\u6D4B\uFF09\u3001custom\uFF08\u81EA\u5B9A\u4E49\uFF09
  name: basic-auth/v1  # \u63D2\u4EF6\u540D\u79F0\u3002\u8FD9\u662F\u63D2\u4EF6\u7684\u552F\u4E00\u6807\u8BC6\u3002\u5EFA\u8BAE\u5728\u5C3E\u90E8\u8FFD\u52A0\u7C7B\u4F3C"/v1"\u7684\u7248\u672C\u53F7\uFF0C\u4EE5\u4FBF\u5E94\u5BF9\u540E\u7EED\u4E0D\u517C\u5BB9\u5347\u7EA7\u7684\u573A\u666F
  title: Basic Auth # \u663E\u793A\u540D\u79F0\uFF0C\u652F\u6301\u56FD\u9645\u5316
  description: \u672C\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002 # \u529F\u80FD\u63CF\u8FF0\uFF0C\u652F\u6301\u56FD\u9645\u5316
  x-description-i18n: # \u4E0A\u9762 description \u5B57\u6BB5\u7684\u56FD\u9645\u5316\u5185\u5BB9\u3002\u6240\u6709\u652F\u6301\u56FD\u9645\u5316\u7684\u5B57\u6BB5\u5747\u53EF\u4F7F\u7528"x-{name}-i18n"\u7684\u65B9\u5F0F\u6DFB\u52A0\u56FD\u9645\u5316\u5185\u5BB9
    en-US: This plugin implements an authentication function based on HTTP Basic Auth standard.
  iconUrl: https://img.alicdn.com/imgextra/i1/O1CN01I7WjVs1K33EQjInid_!!6000000001107-2-tps-960-290.png # \u53EF\u9009\uFF0C\u63D2\u4EF6\u7684\u56FE\u6807\u6587\u4EF6 URL\u3002
  version: 1.0.0 # \u7248\u672C\u53F7
  contact: # \u8054\u7CFB\u4FE1\u606F
    name: Higress Team
    url: http://higress.cn/
    email: admin@higress.io
spec:
  phase: AUTHN # \u8FD0\u884C\u9636\u6BB5\u3002\u53D6\u503C\u8BF7\u53C2\u8003 https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#PluginPhase
  priority: 0 # \u9636\u6BB5\u5185\u7684\u8FD0\u884C\u4F18\u5148\u7EA7\u3002\u53D6\u503C\u8BF7\u53C2\u8003 https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin
  configSchema: # \u63D2\u4EF6\u8FD0\u884C\u914D\u7F6E\u7684\u6570\u636E\u6A21\u578B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u4F7F\u7528 OpenAPI 3.0.0 \u6807\u51C6\u4E2D\u7684 Schema \u683C\u5F0F\u8FDB\u884C\u5B9A\u4E49
    openAPIV3Schema: # \u4EE5\u4E0B\u5185\u5BB9\u7684\u6570\u636E\u683C\u5F0F\u8BF7\u53C2\u8003 https://openapi.apifox.cn/#schema-%E5%AF%B9%E8%B1%A1 \u3002\u90E8\u5206\u663E\u793A\u7528\u5B57\u6BB5\u652F\u6301\u56FD\u9645\u5316\u3002
      type: object
      properties:
        consumers:
          type: array
          x-scope: GLOBAL # \u914D\u7F6E\u9879\u4F5C\u7528\u8303\u56F4\u3002\u53EF\u9009\u503C\uFF1AGLOBAL\uFF08\u5168\u5C40\u914D\u7F6E\uFF09\u3001INSTANCE\uFF08\u5B9E\u4F8B\u7EA7\u914D\u7F6E\uFF0C\u5373\u5728\u5173\u8054\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u65F6\u7684\u914D\u7F6E\uFF09\u3001ALL\uFF08\u5168\u5C40\u3001\u5B9E\u4F8B\u7686\u53EF\u914D\u7F6E\uFF09\u3002\u53EF\u7A7A\u3002\u7F3A\u7701\u503C\u4E3A INSTANCE\u3002
          title: \u8C03\u7528\u65B9\u5217\u8868
          x-title-i18n:
            en-US: Consumer List
          description: \u670D\u52A1\u8C03\u7528\u65B9\u5217\u8868\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1
          x-description-i18n:
            en-US: List of service consumers which will be used in request authentication
          items:
            type: object
            properties:
              name:
                type: string
                title: \u540D\u79F0
                x-title-i18n:
                  en-US: Name
                description: \u8BE5\u8C03\u7528\u65B9\u7684\u540D\u79F0
                x-description-i18n:
                  en-US: The name of the consumer
                # \u6570\u636E\u6821\u9A8C\u573A\u666F\u53C2\u7167 JSON Schema Validation Spec \u5B9E\u73B0
                # https://json-schema.org/draft/2020-12/json-schema-validation.html
                # \u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u5B57\u6BB5\uFF1A
                # - maximum
                # - minimum
                # - maxLength
                # - minLength
                # - pattern
                # - maxItems
                # - minItems
                # - required
                minLength: 6 # \u6700\u5C0F\u957F\u5EA6\uFF0C\u7528\u4E8E\u6570\u636E\u6821\u9A8C
                maxLength: 256 # \u6700\u5927\u957F\u5EA6\uFF0C\u7528\u4E8E\u6570\u636E\u6821\u9A8C
                pattern: "^$" # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u7528\u4E8E\u6570\u636E\u6821\u9A8C
                example:
                  - consumer1
              credential:
                type: string
                title: \u8BBF\u95EE\u51ED\u8BC1
                x-title-i18n:
                  en-US: Credential
                description: \u8BE5\u8C03\u7528\u65B9\u7684\u8BBF\u95EE\u51ED\u8BC1
                x-description-i18n:
                  en-US: The credential of the consumer
                example:
                  - admin:123456
            required:
              - name
              - credential
        allow:
          type: array
          title: \u6388\u6743\u8BBF\u95EE\u7684\u8C03\u7528\u65B9\u5217\u8868
          x-title-i18n:
            en-US: Allowed Consumers
          description: \u5BF9\u4E8E\u5339\u914D\u4E0A\u8FF0\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u5141\u8BB8\u8BBF\u95EE\u7684\u8C03\u7528\u65B9\u5217\u8868
          x-description-i18n:
            en-US: Consumers to be allowed for matched requests
          items:
            type: string
            example:
              - consumer1
      required:
        - allow
        - consumers
      example:
        consumers:
          - name: consumer1
            credential: admin:123456
          - name: consumer2
            credential: guest:abc
        allow:
          - consumer2
\`\`\`

## 4. \u955C\u50CF\u6784\u5EFA\u65B9\u5F0F

1. \u5728 Higress \u9879\u76EE\u76EE\u5F55\u5185\u542F\u52A8\u6784\u5EFA\u7528\u5BB9\u5668

\`\`\`bash
GO_VERSION="1.19"
TINYGO_VERSION="0.28.1"
ORAS_VERSION="1.0.0"
PLUGIN_NAME="hello-world"
BUILDER_IMAGE="higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}"
docker run -v \${PWD}:/workspace -e PLUGIN_NAME=\${PLUGIN_NAME} -it --rm \${BUILDER_IMAGE} /bin/bash
\`\`\`

2. \u5728\u5BB9\u5668\u4E2D\u6784\u5EFA Wasm \u6587\u4EF6

\`\`\`bash
cd /workspace/plugins/wasm-go/extensions/\${PLUGIN_NAME}
go mod tidy
tinygo build -o ./plugin.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`

3. \u6784\u5EFA\u5E76\u63A8\u9001 OCI \u955C\u50CF

\`\`\`bash
tar czvf plugin.tar.gz plugin.wasm
IMAGE_REGISTRY_SERVICE=docker.io
IMAGE_REPOSITORY="\${IMAGE_REGISTRY_SERVICE}/plugins/\${PLUGIN_NAME}"
IMAGE_TAG="v0.0.1"
oras login \${IMAGE_REGISTRY_SERVICE}
oras push \${IMAGE_REPOSITORY}:\${IMAGE_TAG} \\
    ./spec.yaml:application/vnd.module.wasm.spec.v1+yaml  \\
    ./README.md:application/vnd.module.wasm.doc.v1+markdown \\
    ./README_EN.md:application/vnd.module.wasm.doc.v1.en+markdown \\
    ./plugin.tar.gz:application/vnd.oci.image.layer.v1.tar+gzip
\`\`\`

## 5. \u9644\u5F55

### 5.1 \u5404\u63D2\u4EF6\u7C7B\u578B\u7684\u7F3A\u7701\u56FE\u6807

- \u81EA\u5B9A\u4E49\uFF1Ahttps://img.alicdn.com/imgextra/i1/O1CN018iKKih1iVx287RltL_!!6000000004419-2-tps-42-42.png
- \u8BA4\u8BC1\u9274\u6743\uFF1Ahttps://img.alicdn.com/imgextra/i4/O1CN01BPFGlT1pGZ2VDLgaH_!!6000000005333-2-tps-42-42.png
- \u6D41\u91CF\u7BA1\u63A7\uFF1Ahttps://img.alicdn.com/imgextra/i3/O1CN01bAFa9k1t1gdQcVTH0_!!6000000005842-2-tps-42-42.png
- \u6D41\u91CF\u89C2\u6D4B\uFF1Ahttps://img.alicdn.com/imgextra/i4/O1CN01aet3s61MoLOEEhRIo_!!6000000001481-2-tps-42-42.png
- \u5B89\u5168\u9632\u62A4\uFF1Ahttps://img.alicdn.com/imgextra/i1/O1CN01jKT9vC1O059vNaq5u_!!6000000001642-2-tps-42-42.png
- \u4F20\u8F93\u534F\u8BAE\uFF1Ahttps://img.alicdn.com/imgextra/i2/O1CN01xIywow1mVGuRUjbhe_!!6000000004959-2-tps-42-42.png
`,n={title:"Wasm \u63D2\u4EF6\u955C\u50CF\u89C4\u8303",description:"Wasm \u63D2\u4EF6\u955C\u50CF\u89C4\u8303",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["wasm","image","oci"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/wasm-image-spec.md",rawData:void 0};export{s as _internal,t as body,i as collection,n as data,e as id,a as slug};
