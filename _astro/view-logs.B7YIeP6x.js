const e="latest/en/ops/how-tos/view-logs.md",o="docs",t="latest/en/ops/how-tos/view-logs",s=`# Viewing Logs

## Viewing Component Logs

### Kubernetes Deployment

Use the \`kubectl logs\` command to view logs. For example:

\`\`\`bash
kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd
\`\`\`

Note that the \`higress-controller\` pod contains two containers: \`higress-core\` and \`discovery\`, which correspond to the \`controller\` and \`pilot\` components respectively. Use the \`-c\` parameter to specify the container name when viewing logs. For example:

\`\`\`bash
kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery
\`\`\`

### Docker Compose Deployment

In the installation directory, execute \`./bin/logs.sh component-name\` to view logs for the specified component.

Common component names include:

- apiserver
- controller
- pilot
- gateway
- console

### All-in-One Container Deployment

In all-in-one mode, all Higress log files are stored in the \`/var/log/higress\` directory inside the container. Use \`docker exec\` to access the container and view the files directly:

\`\`\`bash
docker exec -it higress-ai-gateway bash

cd /var/log/higress
ls -l
cat gateway.log
\`\`\`

## Viewing Access Logs

### With Built-in Monitoring Suite Enabled

If you have enabled Higress's built-in monitoring suite, you can view request logs directly in the Higress Console:

1. Navigate to the Monitoring Dashboard in Higress Console
2. Click the "four small squares" icon in the top-left corner of the monitoring area
3. Click "Higress Access Logs" to access the access logs dashboard

### Without Built-in Monitoring Suite

When the built-in monitoring suite is not enabled, access logs are recorded together with runtime logs. Refer to the runtime logs viewing methods above.

## Adjusting Log Levels

Currently, the main component that may require log level adjustments is the gateway. To temporarily adjust log levels:

1. Open a bash terminal in the gateway container:
   - K8s deployment: \`kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash\`
   - Docker Compose: \`docker exec -it higress-gateway-1 bash\`
   - All-in-one container: \`docker exec -it higress-ai-gateway bash\`

2. Execute the command: \`curl localhost:15000/logging?module=log_level -X POST\`

Common module names include:

- \`golang\`: MCP Server module
- \`wasm\`: Wasm plugin module

Available log levels:

- \`trace\`
- \`debug\`
- \`info\`
- \`warning\` or \`warn\` (default)
- \`error\`
- \`critical\`
- \`off\`

Note: Log level changes will be reset when the gateway restarts.`,i={title:"Viewing Logs",description:"Learn how to view and manage logs for Higress components",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","logging","log","monitoring","debug"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/view-logs.md",rawData:void 0};export{n as _internal,s as body,o as collection,i as data,e as id,t as slug};
