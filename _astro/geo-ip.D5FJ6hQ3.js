import{c as r,__tla as d}from"./astro-component.CXlaF79K.js";import{r as c,m as u,u as g,__tla as h}from"./constant.Bp7Qm2H_.js";import{__tla as y}from"./astro/assets-service.DQopRnBr.js";let s,o,t,n,p,l,a,v=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">geo-ip</code> plugin allows querying geographical location information based on the user\u2019s IP address, and then passes this geographical information to subsequent plugins through request attributes and newly added request headers.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">440</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>ip_protocol</td><td>string</td><td>No</td><td>ipv4</td><td>Optional values: 1. ipv4: Only queries geographical location information for ipv4 user requests, passing it to subsequent plugins. Requests from ipv6 users will skip this plugin and be processed by later plugins. 2. ipv6: (To be implemented in the future) Only queries geographical location information for ipv6 users, passing it to subsequent plugins. Requests from ipv4 users will skip this plugin and be processed by later plugins. (Currently skips the plugin; requests are handled by subsequent plugins.)</td></tr><tr><td>ip_source_type</td><td>string</td><td>No</td><td>origin-source</td><td>Optional values: 1. Peer socket IP: <code dir="auto">origin-source</code>; 2. Retrieved via header: <code dir="auto">header</code></td></tr><tr><td>ip_header_name</td><td>string</td><td>No</td><td>x-forwarded-for</td><td>When <code dir="auto">ip_source_type</code> is <code dir="auto">header</code>, specify the custom IP source header.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ipv4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Real-Ip</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_protocol: ipv4\x7Fip_source_type: header\x7Fip_header_name: X-Real-Ip"><div></div></button></div></figure></div>
<h2 id="explanation-for-generating-geocidrtxt">Explanation for Generating geoCidr.txt</h2>
<p>The ip.merge.txt file included in the generateCidr directory is the global IP segment database from the ip2region project on GitHub. The ipRange2Cidr.go program converts IP segments into multiple CIDRs. The converted CIDRs and geographical location information are stored in the /data/geoCidr.txt file. The geo-ip plugin will read the geoCidr.txt file during the configuration stage when Higress starts and parse it into the radixtree data structure in memory for future queries of geographical location information corresponding to user IP addresses. The command to run the conversion program is as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">generateCidr/ipRange2Cidr.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go run generateCidr/ipRange2Cidr.go"><div></div></button></div></figure></div>
<h2 id="usage-of-properties">Usage of Properties</h2>
<p>In the geo-ip plugin, call proxywasm.SetProperty() to set country, city, province, and isp into request attributes so that subsequent plugins can use proxywasm.GetProperty() to obtain the geographical information corresponding to the user\u2019s IP for that request.</p>
<h2 id="expanding-the-ai-prompt-decorator-plugin-with-user-geolocation-information-based-on-geo-ip-plugin-capabilities">Expanding the AI Prompt Decorator Plugin with User Geolocation Information Based on Geo-IP Plugin Capabilities</h2>
<p>If you need to include user geolocation information before and after LLM requests, make sure both the geo-ip plugin and the AI prompt decorator plugin are enabled. Additionally, in the same request processing phase, the priority of the geo-ip plugin must be higher than that of the AI prompt decorator plugin. First, the geo-ip plugin will calculate the user\u2019s geolocation based on their IP address and then pass this information to subsequent plugins via request attributes. For example, in the default phase, the priority of the geo-ip plugin is set to 1000, while the priority of the ai-prompt-decorator plugin is set to 500.</p>
<p>Example configuration for the geo-ip plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ipProtocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ipv4"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ipProtocol: &#x22;ipv4&#x22;"><div></div></button></div></figure></div>
<p>Example configuration for the AI prompt decorator plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The current location of the user asking the question is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"After answering each question, try to ask a follow-up question"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;The current location of the user asking the question is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;After answering each question, try to ask a follow-up question&#x22;"><div></div></button></div></figure></div>
<p>Using the above configuration to send a request:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "What's</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">weather</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">like</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">today?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;What&#x27;s the weather like today?&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<p>After processing by the plugins, the actual request becomes:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "The current location of the user asking the question is, country: China, province: Beijing, city: Beijing"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "What's</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">weather</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">like</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">today?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "After</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">answering</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">each</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">question,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">try</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ask</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">follow-up</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">question"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;The current location of the user asking the question is, country: China, province: Beijing, city: Beijing&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;What&#x27;s the weather like today?&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;After answering each question, try to ask a follow-up question&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>`,n={title:"IP Geolocation",keywords:["higress","geo ip"],description:"IP Geolocation Plugin Configuration Reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-o11y/geo-ip.md",a=void 0,l=function(){return`## Function Description
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
`},o=function(){return e},p=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"explanation-for-generating-geocidrtxt",text:"Explanation for Generating geoCidr.txt"},{depth:2,slug:"usage-of-properties",text:"Usage of Properties"},{depth:2,slug:"expanding-the-ai-prompt-decorator-plugin-with-user-geolocation-information-based-on-geo-ip-plugin-capabilities",text:"Expanding the AI Prompt Decorator Plugin with User Geolocation Information Based on Geo-IP Plugin Capabilities"}]},s=r((E,f,F)=>{const{layout:x,...i}=n;return i.file=t,i.url=a,c`${u()}${g(e)}`})});export{s as Content,v as __tla,o as compiledContent,s as default,t as file,n as frontmatter,p as getHeadings,l as rawContent,a as url};
