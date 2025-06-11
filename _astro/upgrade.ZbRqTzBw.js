const e="latest/en/ops/upgrade.md",s="docs",r="latest/en/ops/upgrade",i=`
# Version Upgrade

## Cloud-Native Deployment

### Version Upgrade Based on Helm

\`\`\`bash
# Example value for \${higress_version}: v2.0.3
kubectl apply -f https://github.com/alibaba/higress/releases/download/\${higress_version}/crd.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml
\`\`\`

Using --reuse-values is not recommended as it will inherit all values from the previous version.

## Standalone Deployment

\`\`\`bash
wget https://higress.io/standalone/get-higress.sh
chmod +x ./get-higress.sh
# Example value for \${higress_version}: v2.0.3
# \${higress_dir} is the installation directory for Higress standalone deployment
VERSION=\${higress_version} ./get-higress.sh "\${higress_dir}" -u
\`\`\`
`,a={title:"Version Upgrade",description:"Higress Version Upgrade.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Upgrade"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/upgrade.md",rawData:void 0};export{t as _internal,i as body,s as collection,a as data,e as id,r as slug};
