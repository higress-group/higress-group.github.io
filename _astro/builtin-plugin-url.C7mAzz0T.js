const s="latest/zh-cn/ops/how-tos/builtin-plugin-url.md",e="docs",i="latest/zh-cn/ops/how-tos/builtin-plugin-url",r=`
# \u4FEE\u6539\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740

## \u73AF\u5883\u8981\u6C42

Higress \u7248\u672C\u9700\u4E0D\u4F4E\u4E8E 2.1.0\u3002

## \u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5

\u8981\u6EE1\u8DB3\u8FD9\u4E00\u9700\u6C42\uFF0C\u53EA\u9700\u8981\u4E3A Higress Console \u5BB9\u5668\u6DFB\u52A0 \`HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN\` \u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u4E3A\u81EA\u5B9A\u4E49\u955C\u50CF\u5730\u5740\u7684\u683C\u5F0F\u6A21\u7248\u3002\u6A21\u7248\u53EF\u4EE5\u6309\u9700\u4F7F\u7528 \`\${name}\` \u548C \`\${version}\` \u4F5C\u4E3A\u63D2\u4EF6\u540D\u79F0\u548C\u955C\u50CF\u7248\u672C\u7684\u5360\u4F4D\u7B26\u3002

**\u4F8B 1\uFF1A**

\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/\${name}:\${version}
\`\`\`

Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A\`oci://hub.example.com/wasm-plugins/key-rate-limit:1.0.0\`

**\u4F8B 2\uFF1A**

\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.100:8080/wasm-plugins/\${name}.wasm
\`\`\`

Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A\`http://192.168.1.100:8080/wasm-plugins/key-rate-limit.wasm\`

### Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

#### 1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E

\`\`\`bash
helm get values higress -n higress-system > values.yaml
\`\`\`

#### 2. \u4FEE\u6539\u914D\u7F6E

\u6DFB\u52A0\u4EE5\u4E0B\u8282\u70B9\uFF1A

\`\`\`yaml
higress-console:
  podEnvs:
    HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN: your-custom-image-url-pattern
\`\`\`

#### 3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72

\`\`\`bash
# \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3
helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml
\`\`\`

### Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u76F4\u63A5\u4FEE\u6539 \`compose/env/console.env\` \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`$$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/$\${name}.wasm
\`\`\`

### Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e\` \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`\\$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/\\\${name}.wasm
\`\`\`

### \u6CE8\u610F\u4E8B\u9879

\u4EE5\u4E0A\u914D\u7F6E\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u7ECF\u4FDD\u5B58\u7684\u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u8FD9\u4E9B\u63D2\u4EF6\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\uFF0C\u53EF\u4EE5\u5728 Higress Console \u7684\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\u8FDB\u884C\u9488\u5BF9\u6027\u4FEE\u6539\u3002

![Edit a built-in plugin](/img/docs/ops/how-tos/builtin-plugin-url/edit-builtin-plugin-zh.png)

## \u5BF9\u63A5 Nacos 3.x \u6240\u751F\u6210\u7684 MCP Server \u63D2\u4EF6\u5730\u5740\u914D\u7F6E

\u5728\u5BF9\u63A5\u4E86 Nacos 3.x \u7684 MCP \u6CE8\u518C\u4E2D\u5FC3\u529F\u80FD\u540E\uFF0CHigress Controller \u4F1A\u81EA\u52A8\u4E3A\u542F\u52A8\u7684 MCP Server \u751F\u6210 mcp-server \u63D2\u4EF6\u7684\u914D\u7F6E\u3002\u800C\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\u9ED8\u8BA4\u6307\u5411 Higress \u516C\u5171\u63D2\u4EF6\u4ED3\u5E93\u3002\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\uFF0C\u5219\u9700\u8981\u4FEE\u6539 Higress Controller \u7684 \`MCP_SERVER_WASM_IMAGE_URL\` \u73AF\u5883\u53D8\u91CF\u3002

### Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

#### 1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E

\`\`\`bash
helm get values higress -n higress-system > values.yaml
\`\`\`

#### 2. \u4FEE\u6539\u914D\u7F6E

\u6DFB\u52A0\u4EE5\u4E0B\u8282\u70B9\uFF1A

\`\`\`yaml
higress-core:
  controller:
    env:
      MCP_SERVER_WASM_IMAGE_URL: your-mcp-server-image-url 
\`\`\`

#### 3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72

\`\`\`bash
# \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3
helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml
\`\`\`

### Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u76F4\u63A5\u4FEE\u6539 \`compose/env/controller.env\` \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`$$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
\`\`\`

### Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e\` \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`\\$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
-e MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
\`\`\`
`,o={title:"\u4FEE\u6539\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740",description:"\u4ECB\u7ECD\u5982\u4F55\u4FEE\u6539 Higress Console \u4E2D\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","plugin","repository","url"]},l={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/builtin-plugin-url.md",rawData:void 0};export{l as _internal,r as body,e as collection,o as data,s as id,i as slug};
