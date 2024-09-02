const e="latest/zh-cn/dev/code.md",o="docs",t="latest/zh-cn/dev/code",i=`
# \u6E90\u7801\u9605\u8BFB\u6307\u5F15

\u5982\u679C\u60A8\u60F3\u7ED9 Higress \u8D21\u732E\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003[\u53C2\u4E0E\u8D21\u732E](../developers/guide_dev.md)

\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E

- cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801

- pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801

- pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801

- registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801

- envoy: \u4F9D\u8D56\u7684 envoy \u4ED3\u5E93 commit

- istio: \u4F9D\u8D56\u7684 istio \u4ED3\u5E93 commit

- plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801

- script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C

- docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C

\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u6267\u884C\`make prebuild\`\uFF0C\u5C06\u4EA7\u751F \`external\` \u76EE\u5F55\uFF0C\u8FD9\u662F\u5C06\u7528\u5230\u7684 envoy \u548C istio \u4F9D\u8D56

\u5982\u679C\u8981\u4FEE\u6539 envoy \u548C istio \u4EE3\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 external \u76EE\u5F55\u4E0B\u4FEE\u6539\uFF0C\u5E76\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u518D\u6267\u884C prebuild\uFF0C\u4E4B\u540E\u5BF9\u6BD4\u751F\u6210\u8865\u4E01\u6587\u4EF6\uFF0C\u4F8B\u5982:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > envoy.patch
\`\`\`

\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5C06\u5BF9\u5E94\u7684\u8865\u4E01\u6587\u4EF6\uFF0Cpatch \u5230 envoy \u6216 istio \u7684\u4ED3\u5E93\u91CC\u8FDB\u884C\u63D0\u4EA4.

\u9996\u5148 fork higress \u7684 [envoy](https://github.com/higress-group/envoy) \u6216 [istio](https://github.com/higress-group/istio) \u4ED3\u5E93\uFF0C\u63A5\u7740\u63A8\u9001\u4F60\u7684\u6539\u52A8\uFF0C\u5E76\u63D0\u4EA4 PR\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
git clone https://github.com/<your-fork>/envoy.git
cd envoy
git checkout -b <Your branch name>
patch -p1 < envoy.patch
git add -u
git commit -m <Your change info>
git push origin <Your branch name>
\`\`\`
`,s={title:"\u6E90\u7801\u9605\u8BFB\u6307\u5F15",description:"Higress \u6E90\u7801\u9605\u8BFB\u6307\u5F15.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","coding"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/code.md",rawData:void 0};export{r as _internal,i as body,o as collection,s as data,e as id,t as slug};
