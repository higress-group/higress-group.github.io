const e="latest/en/plugins/ai/api-o11y/geo-ip.md",t="docs",o="latest/en/plugins/ai/api-o11y/geo-ip",i=`## Function Description
The \`geo-ip\` plugin allows querying geographical location information based on the user's IP address, and then passes this geographical information to subsequent plugins through request attributes and newly added request headers.

## Runtime Properties
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`440\`  

## Configuration Fields
| Name            | Data Type    | Requirement | Default Value      | Description  |
| --------        | -----------  | ----------- | ------------------ | ------------ |
|  ip_protocol    |  string      |  No         |   ipv4             |  Optional values: 1. ipv4: Only queries geographical location information for ipv4 user requests, passing it to subsequent plugins. Requests from ipv6 users will skip this plugin and be processed by later plugins. 2. ipv6: (To be implemented in the future) Only queries geographical location information for ipv6 users, passing it to subsequent plugins. Requests from ipv4 users will skip this plugin and be processed by later plugins. (Currently skips the plugin; requests are handled by subsequent plugins.) |
|  ip_source_type |  string      |  No         |   origin-source    |  Optional values: 1. Peer socket IP: \`origin-source\`; 2. Retrieved via header: \`header\`  |
|  ip_header_name |  string      |  No         |   x-forwarded-for  |  When \`ip_source_type\` is \`header\`, specify the custom IP source header.                      |

## Configuration Example
\`\`\`yaml
ip_protocol: ipv4
ip_source_type: header
ip_header_name: X-Real-Ip
\`\`\` 

## Explanation for Generating geoCidr.txt
The ip.merge.txt file included in the generateCidr directory is the global IP segment database from the ip2region project on GitHub. The ipRange2Cidr.go program converts IP segments into multiple CIDRs. The converted CIDRs and geographical location information are stored in the /data/geoCidr.txt file. The geo-ip plugin will read the geoCidr.txt file during the configuration stage when Higress starts and parse it into the radixtree data structure in memory for future queries of geographical location information corresponding to user IP addresses. The command to run the conversion program is as follows:
\`\`\`bash
go run generateCidr/ipRange2Cidr.go
\`\`\` 

## Usage of Properties
In the geo-ip plugin, call proxywasm.SetProperty() to set country, city, province, and isp into request attributes so that subsequent plugins can use proxywasm.GetProperty() to obtain the geographical information corresponding to the user's IP for that request.

## Expanding the AI Prompt Decorator Plugin with User Geolocation Information Based on Geo-IP Plugin Capabilities

If you need to include user geolocation information before and after LLM requests, make sure both the geo-ip plugin and the AI prompt decorator plugin are enabled. Additionally, in the same request processing phase, the priority of the geo-ip plugin must be higher than that of the AI prompt decorator plugin. First, the geo-ip plugin will calculate the user's geolocation based on their IP address and then pass this information to subsequent plugins via request attributes. For example, in the default phase, the priority of the geo-ip plugin is set to 1000, while the priority of the ai-prompt-decorator plugin is set to 500.

Example configuration for the geo-ip plugin:
\`\`\`yaml
ipProtocol: "ipv4"
\`\`\`

Example configuration for the AI prompt decorator plugin:
\`\`\`yaml
prepend:
- role: system
  content: "The current location of the user asking the question is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}"
append:
- role: user
  content: "After answering each question, try to ask a follow-up question"
\`\`\`

Using the above configuration to send a request:

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "What's the weather like today?"
    }
  ]
}'
\`\`\`

After processing by the plugins, the actual request becomes:

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "The current location of the user asking the question is, country: China, province: Beijing, city: Beijing"
    },
    {
      "role": "user",
      "content": "What's the weather like today?"
    },
    {
      "role": "user",
      "content": "After answering each question, try to ask a follow-up question"
    }
  ]
}'
\`\`\`
`,r={title:"IP Geolocation",description:"IP Geolocation Plugin Configuration Reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","geo ip"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-o11y/geo-ip.md",rawData:void 0};export{n as _internal,i as body,t as collection,r as data,e as id,o as slug};
