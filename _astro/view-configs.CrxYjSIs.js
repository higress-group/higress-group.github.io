const e="latest/zh-cn/ops/how-tos/view-configs.md",s="docs",t="latest/zh-cn/ops/how-tos/view-configs",o=`# \u67E5\u770B\u8FD0\u884C\u65F6\u914D\u7F6E

## \u6982\u8FF0

\u58F0\u660E\uFF1A\u5982\u679C\u53EA\u662F\u60F3\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u4E0D\u7528\u770B\u8FD9\u4E00\u8282\u3002

Higress \u6709\u4E09\u4E2A\u7EC4\u4EF6\u4E0E\u8FD0\u884C\u65F6\u914D\u7F6E\u6709\u5173\uFF1A

- controller\uFF1A\u751F\u6210\u5168\u91CF\u914D\u7F6E
- pilot\uFF1A\u4ECE controller \u83B7\u53D6\u914D\u7F6E\uFF0C\u8FC7\u6EE4\u540E\u4E0B\u53D1\u7ED9 gateway
- gateway\uFF1A\u4ECE pilot \u83B7\u53D6\u914D\u7F6E\u5E76\u5728\u8DEF\u7531\u65F6\u751F\u6548

## \u83B7\u53D6\u914D\u7F6E\u4FE1\u606F

### K8s \u90E8\u7F72

#### \u51C6\u5907\u5DE5\u4F5C

\u83B7\u53D6 Higress \u5404\u4E2A Pod \u7684\u540D\u79F0\uFF1A

\`\`\`bash
kubectl get pods -n higress-system
\`\`\`

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway-7f9f949d64-hmmg8.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway-7f9f949d64-hmmg8.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-gateway-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Gateway Pod \u540D\u79F0\u3002
kubectl exec higress-gateway-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15000/config_dump
\`\`\`

### Docker Compose \u90E8\u7F72

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-controller-1 bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-gateway-1 bash
curl http://localhost:15000/config_dump
\`\`\`

### all-in-one \u955C\u50CF\u90E8\u7F72

#### \u51C6\u5907\u5DE5\u4F5C

\u786E\u8BA4 Higress all-in-one \u7684\u5BB9\u5668\u540D\u79F0\uFF1A

\`\`\`bash
docker ps
\`\`\`

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15000/config_dump
\`\`\``,c={title:"\u67E5\u770B\u8FD0\u884C\u65F6\u914D\u7F6E",description:"\u4ECB\u7ECD\u5982\u4F55\u67E5\u770B Higress \u7684\u8FD0\u884C\u65F6\u914D\u7F6E",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","runtime","config"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/view-configs.md",rawData:void 0};export{r as _internal,o as body,s as collection,c as data,e as id,t as slug};
