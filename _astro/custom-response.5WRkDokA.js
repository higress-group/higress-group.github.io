const e="latest/en/plugins/transformation/custom-response.md",s="docs",t="latest/en/plugins/transformation/custom-response",r=`## Function Description\r
The \`custom-response\` plugin supports the configuration of custom responses, including custom HTTP response status codes, HTTP response headers, and HTTP response bodies. It can be used for Mock responses or for providing custom responses based on specific status codes, such as implementing custom responses when triggering the gateway rate-limiting policy.\r
\r
## Running Attributes\r
Plugin Execution Phase: \`Authentication Phase\`\r
\r
Plugin Execution Priority: \`910\`\r
\r
## Configuration Fields\r
| Name | Data Type | Requirements | Default Value | Description |\r
| -------- | -------- | -------- | -------- | -------- |\r
|  status_code    |  number     |  Optional      |   200  |  Custom HTTP response status code   |\r
|  headers     |  array of string      |  Optional     |   -  |  Custom HTTP response headers, keys and values separated by \`=\`   |\r
|  body      |  string    |  Optional     |   -   |  Custom HTTP response body  |\r
|  enable_on_status   |  array of number    |   Optional     |  -  | Match original status codes to generate custom responses; if not specified, the original status code is not checked   |\r
\r
## Configuration Example\r
### Mock Response Scenario\r
\`\`\`yaml\r
status_code: 200\r
headers:\r
- Content-Type=application/json\r
- Hello=World\r
body: "{\\"hello\\":\\"world\\"}"\r
\`\`\`\r
With this configuration, the request will return the following custom response:\r
\`\`\`text\r
HTTP/1.1 200 OK\r
Content-Type: application/json\r
Hello: World\r
Content-Length: 17\r
{"hello":"world"}\r
\`\`\`\r
### Custom Response on Rate Limiting\r
\`\`\`yaml\r
enable_on_status:\r
- 429\r
status_code: 302\r
headers:\r
- Location=https://example.com\r
\`\`\`\r
When the gateway rate limiting is triggered, it generally returns the \`429\` status code, and the request will return the following custom response:\r
\`\`\`text\r
HTTP/1.1 302 Found\r
Location: https://example.com\r
\`\`\`\r
This achieves the goal of redirecting users who have been rate-limited to another page based on the browser's 302 redirect mechanism, which could be a static page on a CDN.\r
\r
If you wish to return other responses normally when rate limiting is triggered, just refer to the Mock response scenario to configure the relevant fields accordingly.\r
`,o={title:"Custom Response",description:"Custom response plugin configuration reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","custom response"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/custom-response.md",rawData:void 0};export{n as _internal,r as body,s as collection,o as data,e as id,t as slug};
