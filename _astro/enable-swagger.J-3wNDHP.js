const e="latest/en/ops/how-tos/enable-swagger.md",o="docs",s="latest/en/ops/how-tos/enable-swagger",t=`# Enable Swagger UI of Higress Console

## K8s Deployment

Add \`--set higress-console.swagger.enabled=true\` arguments to the helm install or upgrade command.

## Docker Compose Deployment

Add the following lines into \`compose/console.env\` file in the installation directory and restart Higress.

\`\`\`bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
\`\`\`

## all-in-one Image deployment

Add \`-e SPRINGDOC_API_DOCS_ENABLED=true -e SPRINGDOC_SWAGGER_UI_ENABLED=true\` arguments to the \`docker run\` command.

## Swagger UI URL

\`http://<higress-console-endpoint>/swagger-ui/index.html\``,n={title:"Enable Swagger UI of Console",description:"Introduce how to enable Swagger UI of Higress Console",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","console","swagger"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/enable-swagger.md",rawData:void 0};export{a as _internal,t as body,o as collection,n as data,e as id,s as slug};
