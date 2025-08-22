const e="mcp-with-sse.md",s="ai",t="mcp-with-sse",r=`
## \u6982\u8FF0

\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u5C06\u4E00\u4E2A\u73B0\u5B58\u4F7F\u7528 SSE Transport \u7684 MCP Server \u901A\u8FC7 Higress \u66B4\u9732\u7ED9 MCP Client \u8BBF\u95EE\u7684\u5B8C\u6574\u8FC7\u7A0B\u3002\u6574\u4E2A\u6D41\u7A0B\u5C06\u57FA\u4E8E\u4E00\u4E2A\u6D4B\u8BD5\u7528\u7684\u7B80\u5355\u540E\u7AEF\u670D\u52A1\u5B9E\u73B0\u8FDB\u884C\u3002\u6240\u6709\u7684\u914D\u7F6E\u5185\u5BB9\u4E5F\u5747\u4EE5\u6B64\u670D\u52A1\u6240\u63D0\u4F9B\u7684\u529F\u80FD\u4E3A\u6A21\u7248\u7F16\u5199\u3002\u5EFA\u8BAE\u5927\u5BB6\u5148\u4E25\u683C\u6309\u7167\u672C\u6587\u7684\u6B65\u9AA4\u914D\u7F6E\u5B8C\u6210\u540E\u518D\u5C1D\u8BD5\u81EA\u884C\u8C03\u6574\u914D\u7F6E\u5BF9\u63A5\u5176\u4ED6\u670D\u52A1\u3002

## \u73AF\u5883\u51C6\u5907

### 1. \u90E8\u7F72 Higress

\u5728\u672C\u5730\u4F7F\u7528 all-in-one \u955C\u50CF\u65B9\u5F0F\u542F\u52A8 Higress\uFF1A

\`\`\`bash
# \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55
mkdir higress; cd higress
# \u5F3A\u5236\u62C9\u53D6\u6700\u65B0\u7684 all-in-one \u955C\u50CF
docker pull higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
# \u542F\u52A8 higress\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5199\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B
docker run -d --rm --name higress-ai -v \${PWD}:/data -e O11Y=on \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
\`\`\`

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE Higress Console\uFF0C\u786E\u8BA4\u5E95\u90E8\u663E\u793A\u7684\u7248\u672C\u53F7\u4E0D\u4F4E\u4E8E 2.1.4\u3002

### 2. \u542F\u52A8\u540E\u7AEF\u670D\u52A1

1. \u6D4B\u8BD5\u670D\u52A1\u4F7F\u7528 NodeJS \u7F16\u5199\u3002\u6240\u4EE5\u8BF7\u5927\u5BB6\u5148\u8BBF\u95EE NodeJS \u5B98\u7F51\uFF08[https://nodejs.org](https://nodejs.org/en)\uFF09\u4E0B\u8F7D\u5E76\u5B89\u88C5 NodeJS \u8FD0\u884C\u73AF\u5883
2. \u4E0B\u8F7D[\u6D4B\u8BD5\u670D\u52A1\u538B\u7F29\u5305](/files/McpSampleServer.zip)
3. \u89E3\u538B\u81F3\u4EFB\u610F\u76EE\u5F55
4. \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u6D4B\u8BD5\u670D\u52A1
    \`\`\`bash
    npm install
    npm start
    \`\`\`
5. \u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE [http://localhost:3000/](http://localhost:3000)\u3002\u82E5\u80FD\u591F\u663E\u793A\u201CHello world!\u201D\uFF0C\u5219\u4EE3\u8868\u670D\u52A1\u542F\u52A8\u6210\u529F\u3002

## \u914D\u7F6E\u6D41\u7A0B

\u4EE5\u4E0B\u6240\u6709\u914D\u7F6E\u90FD\u5C06\u5728 Higress Console \u4E2D\u8FDB\u884C\u3002\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 Higress Console\uFF08[http://localhost:8001/](http://localhost:8001/)\uFF09

### \u670D\u52A1\u6765\u6E90\u914D\u7F6E

1. \u70B9\u51FB\u5DE6\u4FA7\u7684\u201C\u670D\u52A1\u6765\u6E90\u201D
2. \u70B9\u51FB\u201C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u201D\u6309\u94AE
3. \u53C2\u8003\u4E0B\u56FE\u586B\u5199\u670D\u52A1\u6765\u6E90\u4FE1\u606F<br/>
    ![new-service-source](/img/ai/mcp-with-sse/zh/new-service-source.png)
4. \u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE
5. \u70B9\u51FB\u5DE6\u4FA7\u7684\u201C\u670D\u52A1\u5217\u8868\u201D\uFF0C\u786E\u8BA4\u5217\u8868\u4E2D\u51FA\u73B0\u4E86\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684 MCP Server<br/>
    ![service-list](/img/ai/mcp-with-sse/zh/service-list.png)

### \u8DEF\u7531\u914D\u7F6E

1. \u70B9\u51FB\u5DE6\u4FA7\u7684\u201C\u8DEF\u7531\u914D\u7F6E\u201D
2. \u70B9\u51FB\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE
3. \u53C2\u8003\u4E0B\u56FE\u586B\u5199\u8DEF\u7531\u4FE1\u606F<br/>
    ![new-route](/img/ai/mcp-with-sse/zh/new-route.png)
4. \u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE
5. \u70B9\u51FB\u65B0\u521B\u5EFA\u7684\u8DEF\u7531\u53F3\u4FA7\u7684\u201C\u7B56\u7565\u201D\u94FE\u63A5
6. \u70B9\u51FB\u201C\u91CD\u5199\u201D\u7B56\u7565\u4E0B\u65B9\u7684\u914D\u7F6E\u6309\u94AE
7. \u6309\u4E0B\u56FE\u586B\u5165\u914D\u7F6E<br/>
    ![route-rewrite](/img/ai/mcp-with-sse/zh/route-rewrite.png)
8. \u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u6309\u94AE

### MCP Server Filter \u914D\u7F6E

1. \u70B9\u51FB\u5DE6\u4FA7\u7684\u201C\u7CFB\u7EDF\u8BBE\u7F6E\u201D
2. \u4FEE\u6539 \`higress\` \u914D\u7F6E\u9879\u4E2D\u7684 \`mcpServer\` \u914D\u7F6E
    1.  \u5C06 \`enable\` \u6539\u4E3A \`true\`
    2.  \u79FB\u9664 \`redis\` \u914D\u7F6E\u9879
    3.  \u5728 \`match_list\` \u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5143\u7D20\uFF1A
        \`\`\`yaml
        - match_rule_domain: "*"
          match_rule_path: /mcp/sample
          match_rule_type: prefix
          upstream_type: sse
          enable_path_rewrite: true
          path_rewrite_prefix: /mcp
        \`\`\`
    4.  \u4FEE\u6539\u540E\u7684\u914D\u7F6E\u5982\u4E0B\u56FE\u6240\u793A<br/>
        ![higress-config](/img/ai/mcp-with-sse/zh/higress-config.png)
    5.  \u70B9\u51FB\u201C\u63D0\u4EA4\u201D\u6309\u94AE
    6.  \u63D0\u4EA4\u4E4B\u540E\u5982\u679C\u9875\u9762\u6CA1\u6709\u4EFB\u4F55\u63D0\u793A\u7684\u8BDD\uFF0C\u53EF\u4EE5\u5237\u65B0\u9875\u9762\uFF0C\u786E\u8BA4\u914D\u7F6E\u4E3A\u66F4\u65B0\u540E\u7684\u5185\u5BB9\u5373\u53EF

## \u6D4B\u8BD5\u9A8C\u8BC1

1. \u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 \`http://localhost:8080/mcp/sample/sse\`
2. \u6B63\u5E38\u60C5\u51B5\u4E0B\u9875\u9762\u663E\u793A\u5982\u4E0B\u56FE\u6240\u793A<br/>
    ![request-sse](/img/ai/mcp-with-sse/zh/request-sse.png)
3. \u7528 curl \u547D\u4EE4\u9A8C\u8BC1\u83B7\u53D6\u5DE5\u5177\u5217\u8868
    \`\`\`bash
    # sessionId \u9700\u8981\u4F7F\u7528\u6D4F\u89C8\u5668\u4E2D\u8FD4\u56DE\u7684\u503C
    curl http://localhost:8080/mcp/sample/new/messages?sessionId=62d5e258-f1d6-43e8-81a1-f7a2ae36abfb \\
    -H 'Content-Type: application/json' \\
    -d '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tools/list"
    }'
    \`\`\`
4. \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7EC8\u7AEF\u4E2D\u4F1A\u8F93\u51FA\u201CAccepted\u201D\u5B57\u6837\uFF0C\u800C\u4E4B\u524D\u7684\u6D4F\u89C8\u5668\u9875\u9762\u4E0A\u5219\u4F1A\u63A8\u9001\u5DE5\u5177\u5217\u8868\u4FE1\u606F<br/>
    ![request-tools-list-1](/img/ai/mcp-with-sse/zh/request-tools-list-1.png)
    ![request-tools-list-2](/img/ai/mcp-with-sse/zh/request-tools-list-2.png)
5. \u7528 curl \u547D\u4EE4\u9A8C\u8BC1\u5DE5\u5177\u8C03\u7528
    \`\`\`bash
    curl http://localhost:8080/mcp/sample/new/messages?sessionId=62d5e258-f1d6-43e8-81a1-f7a2ae36abfb \\
    -H 'Content-Type: application/json' \\
    -d '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "tools/call",
        "params": {
            "name": "add",
            "arguments": {
                "a": 1,
                "b": 2
            }
        }
    }'
    \`\`\`
6. \u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7EC8\u7AEF\u4E2D\u4F1A\u8F93\u51FA\u201CAccepted\u201D\u5B57\u6837\uFF0C\u800C\u4E4B\u524D\u7684\u6D4F\u89C8\u5668\u9875\u9762\u4E0A\u5219\u4F1A\u63A8\u9001\u8C03\u7528\u7ED3\u679C<br/>
    ![request-tools-call-1](/img/ai/mcp-with-sse/zh/request-tools-call-1.png)
    ![request-tools-call-2](/img/ai/mcp-with-sse/zh/request-tools-call-2.png)

### \u5DE5\u5177\u9A8C\u8BC1

\u5728\u5B8C\u6210\u7B80\u5355\u9A8C\u8BC1\u4E4B\u540E\uFF0C\u5927\u5BB6\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E2A MCP Server \u914D\u7F6E\u5230\u652F\u6301 MCP Client \u7684\u5DE5\u5177\uFF08\u5982 DeepChat\u3001Cherry Studio \u7B49\uFF09\u4E2D\u8FDB\u884C\u9A8C\u8BC1\u4E86\u3002\u5DE5\u5177\u7684 URL \u4E3A \`http://localhost:8080/mcp/sample/sse\`\u3002
`,i={title:"MCP Server \u5FEB\u901F\u5F00\u59CB\uFF08\u5BF9\u63A5\u73B0\u5B58 SSE Server\uFF09",description:"Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u652F\u6301\u5BF9\u63A5\u73B0\u5B58\u4F7F\u7528 SSE Transport \u7684 MCP Server\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\u3002",keywords:["MCP Server","SSE"],date:"2025-06-28",category:"article"},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-with-sse.md",rawData:void 0};export{o as _internal,r as body,s as collection,i as data,e as id,t as slug};
