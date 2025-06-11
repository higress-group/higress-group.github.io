const e="latest/en/user/wasm-image-spec.md",i="docs",t="latest/en/user/wasm-image-spec",n=`
# Wasm Plugin Image Specification

## 1. Overview

This specification aims to define the content and build method for Higress Wasm Plugin images. When writing this document, the author referenced the [Wasm Image Specification](https://github.com/solo-io/wasm/blob/master/spec/spec-compat.md).

> Note: This specification uses the OCI image format, but it doesn't restrict plugins to only use OCI images. For custom plugin development, please refer to the simpler approach described in [Custom Plugins](../plugins/custom.md).
>
> OCI images are used to standardize general-purpose plugins across all platforms.

## 2. Image Structure

Each image must be built based on \`scratch\` using the [OCI format specification](https://github.com/opencontainers/image-spec), and may contain the following files:

- spec.yaml: Required. The plugin's metadata file. See Section 3 for its content format.
- README.md: Required. The plugin's usage documentation file. Use Markdown format. The language can be English or Chinese.
- README_{lang}.md: Optional. Translated version of the plugin's usage documentation. Use Markdown format. The \`lang\` value can be \`ZH\` or \`EN\`.
- icon.png: Optional. The plugin's icon file. You can also specify an icon URL in spec.yaml. If both exist, the system will use the internal icon file for display.
- plugin.wasm: Required. The plugin's binary file.

Each layer of the image can only contain one file.

Except for the layer containing plugin.wasm, other layers need to set the media type according to the file name:

- spec.yaml: application/vnd.module.wasm.spec.v1+yaml 
- README.md: application/vnd.module.wasm.doc.v1+markdown
- README_{lang}.md: application/vnd.module.wasm.doc.v1.{lang}+markdown
- icon.png: application/vnd.module.wasm.icon.v1+png

The plugin.wasm file must be placed in the last layer of the image, and this layer should use application/vnd.oci.image.layer.v1.tar+gzip as the media type.

## 3. Metadata File Format

This section uses the metadata information of the \`basic-auth\` plugin as an example to introduce the format of the metadata file \`spec.yaml\`.

\`\`\`yaml
apiVersion: 1.0.0  # The format version used by this file. Currently fixed at 1.0.0
info:
  category: auth # Plugin type. Options include: auth (authentication and authorization), security (security protection), protocol (protocol conversion), flow-control (traffic control), flow-monitor (traffic observation), custom (custom)
  name: basic-auth/v1  # Plugin name. This is the unique identifier of the plugin. It is recommended to append a version suffix like "/v1" to handle future incompatible upgrade scenarios
  title: Basic Auth # Display name, supports internationalization
  description: This plugin implements authentication and authorization functionality based on the HTTP Basic Auth standard. # Feature description, supports internationalization
  x-description-i18n: # Internationalization content for the description field above. All fields supporting internationalization can add internationalized content using the "x-{name}-i18n" method
    en-US: This plugin implements an authentication function based on HTTP Basic Auth standard.
  iconUrl: https://img.alicdn.com/imgextra/i1/O1CN01I7WjVs1K33EQjInid_!!6000000001107-2-tps-960-290.png # Optional, URL of the plugin's icon file.
  version: 1.0.0 # Version number
  contact: # Contact information
    name: Higress Team
    url: http://higress.cn/
    email: admin@higress.io
spec:
  phase: AUTHN # Execution phase. Please refer to https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#PluginPhase
  priority: 0 # Execution priority within the phase. Please refer to https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin
  configSchema: # Data model for plugin runtime configuration, currently only supports definition using the Schema format in OpenAPI 3.0.0 standard
    openAPIV3Schema: # For the data format of the following content, please refer to https://openapi.apifox.cn/#schema-%E5%AF%B9%E8%B1%A1. Some display fields support internationalization.
      type: object
      properties:
        consumers:
          type: array
          x-scope: GLOBAL # Configuration item scope. Options: GLOBAL (global configuration), RULE (rule-level configuration, i.e., configuration when associated with specific routes, domains, services, etc.), ANY (no scope restriction). Optional. Default value is ANY.
          title: Consumer List
          x-title-i18n:
            en-US: Consumer List
          description: List of service consumers, used for request authentication
          x-description-i18n:
            en-US: List of service consumers which will be used in request authentication
          items:
            type: object
            properties:
              name:
                type: string
                title: Name
                x-title-i18n:
                  en-US: Name
                description: The name of the consumer
                x-description-i18n:
                  en-US: The name of the consumer
                # Data validation scenarios refer to JSON Schema Validation Spec implementation
                # https://json-schema.org/draft/2020-12/json-schema-validation.html
                # Currently supports the following fields:
                # - maximum
                # - minimum
                # - maxLength
                # - minLength
                # - pattern
                # - maxItems
                # - minItems
                # - required
                minLength: 6 # Minimum length, for data validation
                maxLength: 256 # Maximum length, for data validation
                pattern: "^$" # Regular expression, for data validation
                example:
                  - consumer1
              credential:
                type: string
                title: Credential
                x-title-i18n:
                  en-US: Credential
                description: The access credential of the consumer
                x-description-i18n:
                  en-US: The credential of the consumer
                example:
                  - admin:123456
            required:
              - name
              - credential
        allow:
          type: array
          title: Allowed Consumers
          x-title-i18n:
            en-US: Allowed Consumers
          description: For requests matching the above conditions, the list of consumers allowed to access
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

## 4. Image Building Process

1. Start a build container in the Higress project directory

\`\`\`bash
GO_VERSION="1.19"
TINYGO_VERSION="0.28.1"
ORAS_VERSION="1.0.0"
PLUGIN_NAME="hello-world"
BUILDER_IMAGE="higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}"
docker run -v \${PWD}:/workspace -e PLUGIN_NAME=\${PLUGIN_NAME} -it --rm \${BUILDER_IMAGE} /bin/bash
\`\`\`

2. Build the Wasm file in the container

\`\`\`bash
cd /workspace/plugins/wasm-go/extensions/\${PLUGIN_NAME}
go mod tidy
tinygo build -o ./plugin.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`

3. Build and push the OCI image

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

### 5.1 Default Icons for Plugin Types

- Custom: https://img.alicdn.com/imgextra/i1/O1CN018iKKih1iVx287RltL_!!6000000004419-2-tps-42-42.png
- Authentication & Authorization: https://img.alicdn.com/imgextra/i4/O1CN01BPFGlT1pGZ2VDLgaH_!!6000000005333-2-tps-42-42.png
- Traffic Control: https://img.alicdn.com/imgextra/i3/O1CN01bAFa9k1t1gdQcVTH0_!!6000000005842-2-tps-42-42.png
- Traffic Observation: https://img.alicdn.com/imgextra/i4/O1CN01aet3s61MoLOEEhRIo_!!6000000001481-2-tps-42-42.png
- Security Protection: https://img.alicdn.com/imgextra/i1/O1CN01jKT9vC1O059vNaq5u_!!6000000001642-2-tps-42-42.png
- Protocol Transmission: https://img.alicdn.com/imgextra/i2/O1CN01xIywow1mVGuRUjbhe_!!6000000004959-2-tps-42-42.png
`,a={title:"Wasm Plugin Image Specification",description:"Wasm Plugin Image Specification",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["wasm","image","oci"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/wasm-image-spec.md",rawData:void 0};export{o as _internal,n as body,i as collection,a as data,e as id,t as slug};
