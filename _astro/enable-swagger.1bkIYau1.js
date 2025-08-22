const e="latest/zh-cn/ops/how-tos/enable-swagger.md",s="docs",o="latest/zh-cn/ops/how-tos/enable-swagger",t=`# \u542F\u7528 Console \u5185\u7684 Swagger UI

## K8s \u90E8\u7F72

\u5728 helm \u5B89\u88C5\u6216\u5347\u7EA7\u547D\u4EE4\u4E2D\u6DFB\u52A0 \`--set higress-console.swagger.enabled=true\` \u53C2\u6570\u5373\u53EF\u3002

## Docker Compose \u90E8\u7F72

\u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF0C\u5728 \`compose/console.env\` \u6587\u4EF6\u5185\u6DFB\u52A0\u4EE5\u4E0B\u4E24\u884C\u5185\u5BB9\uFF0C\u5E76\u91CD\u542F Higress \u5373\u53EF\uFF1A

\`\`\`bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
\`\`\`

## all-in-one \u955C\u50CF\u90E8\u7F72

\u5728 \`docker run\` \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e O11Y=on\` \u53C2\u6570\u5373\u53EF\u3002
`,a={title:"\u542F\u7528 Console \u5185\u7684 Swagger UI",description:"\u4ECB\u7ECD\u5982\u4F55\u542F\u7528 Higress Console \u5185\u7684 Swagger UI",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","console","swagger"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/enable-swagger.md",rawData:void 0};export{r as _internal,t as body,s as collection,a as data,e as id,o as slug};
