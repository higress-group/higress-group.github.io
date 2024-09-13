const s="latest/zh-cn/ops/upgrade.md",e="docs",r="latest/zh-cn/ops/upgrade",a=`
# \u7248\u672C\u5347\u7EA7

## \u4E91\u539F\u751F\u90E8\u7F72

### \u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7

\`\`\`bash
# \${higress_version} \u7684\u503C\u793A\u4F8B: v1.1.0
kubectl apply -f https://raw.githubusercontent.com/alibaba/higress/\${higress_version}/helm/core/crds/customresourcedefinitions.gen.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress -n higress-system higress.io/higress -f values.yaml
\`\`\`

\u4E0D\u5EFA\u8BAE\u4F7F\u7528 --reuse-values\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u7EE7\u627F\u6240\u6709\u4E0A\u4E00\u4E2A\u7248\u672C\u7684 values\u3002

## \u72EC\u7ACB\u90E8\u7F72

\`\`\`bash
# \${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "\${higress_dir}" -u
\`\`\`
`,i={title:"\u7248\u672C\u5347\u7EA7",description:"Higress \u7248\u672C\u5347\u7EA7.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Upgrade"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/upgrade.md",rawData:void 0};export{t as _internal,a as body,e as collection,i as data,s as id,r as slug};
