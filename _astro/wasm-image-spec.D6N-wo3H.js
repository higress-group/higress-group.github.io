const e="latest/en/user/wasm-image-spec.md",i="docs",a="latest/en/user/wasm-image-spec",t=`
# Wasm Plugin Image Specification

## 1. Overview

This document defines the structure and building method of Higress Wasm Plugin images. When preparing, we referred to [Wasm Image Specification](https://github.com/solo-io/wasm/blob/master/spec/spec-compat.md).

## 2. Image Structure

Each image needs to be build in [OCI Image Specification](https://github.com/opencontainers/image-spec) based on \`scratch\`, and shall only contain following files:

- spec.yaml: Required. Metadata file of the plugin. Please refer to section 3 below for its format.
- README.md: Required. Readme file describing the usage of the plugin. Markdown format. Written in English or Chinese.
- README_{lang}.md: Optional. Readme file describing the usage of the plugin. Markdown format. \`lang\` can be \`ZH\` or \`EN\`.
- icon.png: Optional. Icon file of the plugin. A URL of the plugin icon can also be specified in spec.yaml. If both the file and the URL are configured, the file will be used for display.
- plugin.wasm: Required. The binary file of the plugin.

Each layer of the image can only contain a single file.

Except the layer containing plugin.wasm, the media type of other layers shall be set according to the file inside:

- spec.yaml: application/vnd.module.wasm.spec.v1+yaml 
- README.md: application/vnd.module.wasm.doc.v1+markdown
- README_{lang}.md: application/vnd.module.wasm.doc.v1.{lang}+markdown
- icon.png: application/vnd.module.wasm.icon.v1+png

plugin.wasm must be placed in the last layer of the image, with the media type of application/vnd.oci.image.layer.v1.tar+gzip.

## 3. Metadata File Format

The format of metadata file, \`spec.yaml\`, is as following, using the metadata of \`basic-auth\` plugin as an example:

\`\`\`yaml
apiVersion: 1.0.0  # The schema version of the content below. Always use to 1.0.0 for now.
info:
  category: auth # Plugin category. Options: auth (authentication and authorization), security (security protection), protocol (protocol transformation), flow-control, flow-monitor,custom
  name: basic-auth/v1  # Plugin name, which is the unique identifier of the plugin. It is recommended to add a version suffix, such as "/v1", just in case an incompatible upgrade in the future.
  title: Basic Auth # Display name. I18n supported.
  description: \u672C\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002 # Plugin description. I18n supported.
  x-description-i18n: # I18n content of the description field above. Translated contents can be added using "x-{name}-i18n" fields for all i18n-supported fields.
    en-US: This plugin implements an authentication function based on HTTP Basic Auth standard.
  iconUrl: https://img.alicdn.com/imgextra/i1/O1CN01I7WjVs1K33EQjInid_!!6000000001107-2-tps-960-290.png # Optional. URL of plugin icon file.
  version: 1.0.0 # Plugin version
  contact: # Plugin contact
    name: Higress Team
    url: http://higress.io/
    email: admin@higress.io
spec:
  phase: AUTHN # Execution phase. Please refer to https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#PluginPhase
  priority: 0 # Execution priority within the given phase. Please refer to https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin
  configSchema: # Schema of the plugin's runtime configurations, which shall be defined with the Schema object in OpenAPI 3.0.0 standard.
    openAPIV3Schema: # Please refer to https://openapi.apifox.cn/#schema-%E5%AF%B9%E8%B1%A1 for the data structure. Some fields which can be used for display support i18n.
      type: object
      properties:
        consumers:
          type: array
          scope: GLOBAL # Field effective scope. Options: GLOBAL (global configuration), INSTANCE (instance-level configuration, which can be set associated to routes or domains.), ALL (Available as both global and instance-level configurations). Optional. Default value is INSTANCE.
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
                # Data validation shall be implemented according JSON Schema Validation Spec
                # https://json-schema.org/draft/2020-12/json-schema-validation.html
                # Following values are supported:
                # - maximum
                # - minimum
                # - maxLength
                # - minLength
                # - pattern
                # - maxItems
                # - minItems
                # - required
                minLength: 6 # Minimum length for data validation
                maxLength: 256 # Maximum length for data validation
                pattern: "^$" # Regular experssion for data validation
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

## 4. How to Build an Image
1. Start the builder container from the Higress root folder

\`\`\`bash
GO_VERSION="1.19"
TINYGO_VERSION="0.25.0"
ORAS_VERSION="1.0.0"
PLUGIN_NAME="hello-world"
BUILDER_IMAGE="higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}"
docker run -v \${PWD}:/workspace -e PLUGIN_NAME=\${PLUGIN_NAME} -it --rm  /bin/bash
\`\`\`

2. Build Wasm file inside the container

\`\`\`bash
cd /workspace/plugins/wasm-go/extensions/\${PLUGIN_NAME}
go mod tidy
tinygo build -o ./plugin.wasm -scheduler=none -target=wasi ./main.go
\`\`\`

3. Build and push an OCI image

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

## 5. Appendix

### 5.1 Default Icon for Each Plugin Category

- Custom: https://img.alicdn.com/imgextra/i1/O1CN018iKKih1iVx287RltL_!!6000000004419-2-tps-42-42.png
- Authentication and Authorization: https://img.alicdn.com/imgextra/i4/O1CN01BPFGlT1pGZ2VDLgaH_!!6000000005333-2-tps-42-42.png
- Flow Control: https://img.alicdn.com/imgextra/i3/O1CN01bAFa9k1t1gdQcVTH0_!!6000000005842-2-tps-42-42.png
- Flow Monitor: https://img.alicdn.com/imgextra/i4/O1CN01aet3s61MoLOEEhRIo_!!6000000001481-2-tps-42-42.png
- Security Protection: https://img.alicdn.com/imgextra/i1/O1CN01jKT9vC1O059vNaq5u_!!6000000001642-2-tps-42-42.png
- Protocol Transformation: https://img.alicdn.com/imgextra/i2/O1CN01xIywow1mVGuRUjbhe_!!6000000004959-2-tps-42-42.png`,n={title:"Wasm Plugin Image Specification",description:"Wasm Plugin Image Specification",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["wasm","image","oci"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/wasm-image-spec.md",rawData:void 0};export{o as _internal,t as body,i as collection,n as data,e as id,a as slug};
