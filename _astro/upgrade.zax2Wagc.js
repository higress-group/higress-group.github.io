const s="latest/zh-cn/ops/upgrade.md",e="docs",r="latest/zh-cn/ops/upgrade",i=`
# \u7248\u672C\u5347\u7EA7

## \u4E91\u539F\u751F\u90E8\u7F72

### \u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7

\`\`\`bash
# \${higress_version} \u7684\u503C\u793A\u4F8B: v2.0.3
kubectl apply -f https://github.com/alibaba/higress/releases/download/\${higress_version}/crd.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress -n higress-system higress.io/higress -f values.yaml
\`\`\`

\u4E0D\u5EFA\u8BAE\u4F7F\u7528 --reuse-values\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u7EE7\u627F\u6240\u6709\u4E0A\u4E00\u4E2A\u7248\u672C\u7684 values\u3002

## \u72EC\u7ACB\u90E8\u7F72

\`\`\`bash
wget https://higress.io/standalone/get-higress.sh
chmod +x ./get-higress.sh
# \${higress_version} \u7684\u503C\u793A\u4F8B: v2.0.3
# \${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55
VERSION=\${higress_version} ./get-higress.sh "\${higress_dir}" -u
\`\`\`
`,a={title:"\u7248\u672C\u5347\u7EA7",description:"Higress \u7248\u672C\u5347\u7EA7.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Upgrade"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/upgrade.md",rawData:void 0};export{t as _internal,i as body,e as collection,a as data,s as id,r as slug};
