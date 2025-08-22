const e="mcp-quick-start.md",s="ai",r="mcp-quick-start",t=`
# MCP Server \u5FEB\u901F\u5F00\u59CB

> **\u6CE8\u610F\uFF1A** \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002

Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 PostgreSQL \u6570\u636E\u5E93\u548C\u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002

## \u524D\u63D0\u6761\u4EF6

\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u60A8\u53EF\u4EE5\u53C2\u8003 [Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357](https://higress.cn/docs/latest/user/quickstart) \u5B8C\u6210\u90E8\u7F72\u3002\u5728\u5B89\u88C5 Higress \u65F6\uFF0C\u8BF7\u786E\u4FDD\u5728 Helm \u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF1A

\`\`\`bash
helm install higress -n higress-system [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis=true
\`\`\`

MCP Server \u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\uFF0C\u542F\u7528\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B Redis \u670D\u52A1\u7684\u5730\u5740\uFF1A

\`\`\`bash
kubectl get svc redis-stack-server -n higress-system -o wide
\`\`\`

\u5982\u679C Redis \u670D\u52A1\u542F\u52A8\u6B63\u5E38\uFF0C\u4F60\u4F1A\u5F97\u5230\u7C7B\u4F3C\u5982\u4E0B\u5F62\u5F0F\u7684\u8F93\u51FA\uFF1A

\`\`\`bash
NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE   SELECTOR
redis-stack-server   ClusterIP   192.168.51.87   <none>        6379/TCP   10s   app.kubernetes.io/instance=higress,app.kubernetes.io/name=redis-stack-server
\`\`\`

## \u914D\u7F6E MCP Server

### \u5168\u5C40\u53C2\u6570\u914D\u7F6E

\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A
![\u914D\u7F6E\u5168\u5C40\u53C2\u6570](https://img.alicdn.com/imgextra/i2/O1CN01CabBas1f1JxTqfEre_!!6000000003946-2-tps-3014-1594.png)

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
      enable: true          # \u542F\u7528 MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740
        username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09
        password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09
        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09
      match_list: []
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

#### \u914D\u7F6E REST API MCP Server \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528\u516C\u7F51\u670D\u52A1 \`randomuser.me\` \uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### \u914D\u7F6E Nacos \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90 (Optional)
> **\u6CE8\u610F\uFF1A**
> \u9700\u8981Nacos\u7248\u672C\u4E3A3.0\u53CA\u4EE5\u4E0A\uFF0CHigress\u7248\u672C\u57282.1.2\u53CA\u4EE5\u4E0A

\u521B\u5EFANacos3.x\u670D\u52A1\u6765\u6E90\u5E76\u5B8C\u5584\u76F8\u5173\u4FE1\u606F

![\u6DFB\u52A0Nacos3.x\u670D\u52A1\u6765\u6E90](https://img.alicdn.com/imgextra/i3/O1CN01FGvSE71HVVGHTp1Cu_!!6000000000763-2-tps-588-1039.png)

### \u914D\u7F6E MCP \u7BA1\u7406

\u8FDB\u5165 MCP \u7BA1\u7406\u754C\u9762\uFF1A

![MCP\u7BA1\u7406\u754C\u9762](https://img.alicdn.com/imgextra/i1/O1CN01xzeROD1GX30611tEy_!!6000000000631-2-tps-3008-1586.png)

\u521B\u5EFA MCP \u670D\u52A1\uFF1A

![\u521B\u5EFAMCP\u670D\u52A1](https://img.alicdn.com/imgextra/i1/O1CN01PYboEy1QbIq1xt1F3_!!6000000001994-2-tps-3012-1590.png)


> **\u6CE8\u610F\uFF1A**

> 1. \u5BF9\u4E8E DB \u7C7B\u578B\u7684 MCP \u670D\u52A1\u9700\u8981\u989D\u5916\u914D\u7F6E\uFF1A

![DB\u7C7B\u578BMCP\u670D\u52A1](https://img.alicdn.com/imgextra/i2/O1CN01AUuAh61fATsVvAjm8_!!6000000003966-2-tps-1156-1016.png)

> 2. \u5BF9\u4E8E OpenAPI \u7C7B\u578B\u7684 MCP \u670D\u52A1\uFF0C\u9700\u8981\u5728\u521B\u5EFA\u540E\u7F16\u8F91\u5DE5\u5177\u89C4\u8303\uFF0C\u53EF\u4EE5\u4F7F\u7528 OpenAPI/Swagger \u89C4\u8303\u6216\u76F4\u63A5\u4F7F\u7528 MCP \u5DE5\u5177\uFF0C\u8FD9\u91CC\u4EE5 MCP \u4E3A\u4F8B\uFF1A

![\u7F16\u8F91\u5DE5\u5177](https://img.alicdn.com/imgextra/i1/O1CN016AMQp71rUsuibww0U_!!6000000005635-2-tps-3008-900.png)

![Yaml\u7F16\u8F91](https://img.alicdn.com/imgextra/i1/O1CN01ln5gRK20KebmUicsi_!!6000000006831-2-tps-3018-1588.png)

\`\`\`bash
server:
  name: "random-user-server"
tools:
- description: "Get random user information"
  name: "get-user"
  requestTemplate:
    method: "GET"
    url: "https://randomuser.me/api/"
  responseTemplate:
    body: |-
      # User Information
      {{- with (index .results 0) }}
      - **Name**: {{.name.first}} {{.name.last}}
      - **Email**: {{.email}}
      - **Location**: {{.location.city}}, {{.location.country}}
      - **Phone**: {{.phone}}
      {{- end }}
\`\`\`


## \u4F7F\u7528 MCP Server

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 Streamable HTTP/SSE \u8FDE\u63A5\uFF0C\u53C2\u8003 MCP \u670D\u52A1\u4E2D\u7684\u8FDE\u63A5\u4FE1\u606F\uFF1A

![\u8FDE\u63A5\u4FE1\u606F](https://img.alicdn.com/imgextra/i2/O1CN01wmYl3u1FkV17tAUAW_!!6000000000525-2-tps-3018-1590.png)

\u4EE5 Cursor \u4E3A\u4F8B\uFF0C\u8FDB\u5165 Cursor Settings - Tools & Integrations - Add Custom MCP\uFF0C\u586B\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A

\`\`\`yaml
{
  "mcpServers": {
    "user": {
      "url": "http://<higress-gateway-ip>/mcp-servers/user/sse"
    }
  }
}
\`\`\`

Cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![Cursor\u914D\u7F6E\u5B8C\u6210](https://img.alicdn.com/imgextra/i2/O1CN01k5hHbI1IQIORhlyQQ_!!6000000000887-2-tps-1868-1038.png)


\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002

> \u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
>
> \u60A8\u53EF\u4EE5\u4F7F\u7528 [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) \u5DE5\u5177\uFF0C\u5B9E\u73B0 OpenAPI \u89C4\u8303\u6587\u6863\u5230 MCP Server \u914D\u7F6E\u7684\u81EA\u52A8\u8F6C\u6362`,i={title:"MCP Server \u5FEB\u901F\u5F00\u59CB",description:"Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server",keywords:["MCP Server"],date:"2025-04-03",category:"article"},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start.md",rawData:void 0};export{a as _internal,t as body,s as collection,i as data,e as id,r as slug};
