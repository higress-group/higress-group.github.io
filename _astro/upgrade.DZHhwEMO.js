const e="latest/en/ops/upgrade.md",s="docs",a="latest/en/ops/upgrade",i=`
# Upgrade

## Cloud-Native Deployment

### Upgrade via Helm

\`\`\`bash
# Sample value of \${higress_version} : v1.1.0
kubectl apply -f https://github.com/alibaba/higress/releases/download/\${higress_version}/customresourcedefinitions.gen.yaml
helm repo update
helm upgrade higress -n higress-system higress.io/higress
\`\`\`

## Standalone Deployment

\`\`\`bash
# \${higress_dir} is the path of Higress' installation directory
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "\${higress_dir}" -u
\`\`\`
`,r={title:"Upgrade",description:"Higress Upgrade.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/upgrade.md",rawData:void 0};export{t as _internal,i as body,s as collection,r as data,e as id,a as slug};
