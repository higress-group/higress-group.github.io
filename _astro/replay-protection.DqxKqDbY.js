import{c,__tla as l}from"./astro-component.B3fYMMDi.js";import{r as p,m as u,u as h,__tla as y}from"./constant.Cgp6cJPa.js";import{__tla as f}from"./astro/assets-service.DmDXK_Mj.js";let t,d,s,n,o,r,a,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="functional-description">Functional Description</h2>
<p>The replay prevention plugin prevents request replay attacks by verifying the one-time random number in the request. Each request needs to carry a unique nonce value. The server will record and verify the uniqueness of this value, thus preventing requests from being maliciously replayed.</p>
<p>Specifically, it includes the following functions:</p>
<ul>
<li><strong>Mandatory or Optional Nonce Verification</strong>: It can be configured to determine whether requests are required to carry a nonce value.</li>
<li><strong>Nonce Uniqueness Verification Based on Redis</strong>: The nonce value is stored and verified in Redis to ensure its uniqueness.</li>
<li><strong>Configurable Nonce Validity Period</strong>: It supports setting the validity period of the nonce, which will automatically expire after the period.</li>
<li><strong>Nonce Format and Length Verification</strong>: It supports verifying the format (Base64) and length of the nonce value.</li>
<li><strong>Custom Error Response</strong>: It supports configuring the status code and error message when a request is rejected.</li>
<li><strong>Customizable Nonce Request Header</strong>: The name of the request header carrying the nonce can be customized.</li>
</ul>
<h2 id="runtime-attributes">Runtime Attributes</h2>
<p>Plugin execution stage: <code dir="auto">Authentication Stage</code>
Plugin execution priority: <code dir="auto">800</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">force_nonce</code></td><td>bool</td><td>No</td><td>true</td><td>Whether requests are required to carry a nonce value.</td></tr><tr><td><code dir="auto">nonce_header</code></td><td>string</td><td>No</td><td><code dir="auto">X-Higress-Nonce</code></td><td>Specifies the name of the request header carrying the nonce value.</td></tr><tr><td><code dir="auto">nonce_ttl</code></td><td>int</td><td>No</td><td>900</td><td>The validity period of the nonce, in seconds.</td></tr><tr><td><code dir="auto">nonce_min_length</code></td><td>int</td><td>No</td><td>8</td><td>The minimum length of the nonce value.</td></tr><tr><td><code dir="auto">nonce_max_length</code></td><td>int</td><td>No</td><td>128</td><td>The maximum length of the nonce value.</td></tr><tr><td><code dir="auto">reject_code</code></td><td>int</td><td>No</td><td>429</td><td>The status code returned when a request is rejected.</td></tr><tr><td><code dir="auto">reject_msg</code></td><td>string</td><td>No</td><td><code dir="auto">Replay Attack Detected</code></td><td>The error message returned when a request is rejected.</td></tr><tr><td><code dir="auto">validate_base64</code></td><td>bool</td><td>No</td><td>false</td><td>Whether to verify the Base64 encoding format of the nonce.</td></tr><tr><td><code dir="auto">redis</code></td><td>Object</td><td>Yes</td><td>-</td><td>Redis-related configuration</td></tr></tbody></table>
<p>Description of each configuration field in <code dir="auto">redis</code></p>





























































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">service_name</code></td><td>string</td><td>Yes</td><td>-</td><td>The name of the Redis service, the complete FQDN name with the service type, such as my-redis.dns, redis.my-ns.svc.cluster.local.</td></tr><tr><td><code dir="auto">service_port</code></td><td>int</td><td>No</td><td>6379</td><td>The port of the Redis service.</td></tr><tr><td><code dir="auto">username</code></td><td>string</td><td>No</td><td>-</td><td>The username of Redis.</td></tr><tr><td><code dir="auto">password</code></td><td>string</td><td>No</td><td>-</td><td>The password of Redis.</td></tr><tr><td><code dir="auto">timeout</code></td><td>int</td><td>No</td><td>1000</td><td>The connection timeout time of Redis, in milliseconds.</td></tr><tr><td><code dir="auto">database</code></td><td>int</td><td>No</td><td>0</td><td>The ID of the database to be used. For example, if it is configured as 1, it corresponds to <code dir="auto">SELECT 1</code>.</td></tr><tr><td><code dir="auto">key_prefix</code></td><td>string</td><td>No</td><td><code dir="auto">replay-protection</code></td><td>The key prefix of Redis, used to distinguish different nonce keys.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<p>The following is a complete configuration example of the replay attack prevention plugin:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">force_nonce</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"X-Higress-Nonce"</span><span style="--0:#E1E4E8">    </span><span style="--0:#99A0A6"># Specifies the name of the nonce request header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_ttl</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">900</span><span style="--0:#E1E4E8">                    </span><span style="--0:#99A0A6"># The validity period of the nonce, set to 900 seconds</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_min_length</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8</span><span style="--0:#E1E4E8">               </span><span style="--0:#99A0A6"># The minimum length of the nonce</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_max_length</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">128</span><span style="--0:#E1E4E8">             </span><span style="--0:#99A0A6"># The maximum length of the nonce</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">validate_base64</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">             </span><span style="--0:#99A0A6"># Whether to enable Base64 format verification</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">reject_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">                  </span><span style="--0:#99A0A6"># The HTTP status code returned when a request is rejected</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">reject_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Replay Attack Detected"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># The error message content returned when a request is rejected</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span><span style="--0:#E1E4E8">       </span><span style="--0:#99A0A6"># The name of the Redis service</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8">                </span><span style="--0:#99A0A6"># The port used by the Redis service</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span><span style="--0:#E1E4E8">                   </span><span style="--0:#99A0A6"># The timeout time of Redis operations (unit: milliseconds)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replay-protection"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># The key prefix in Redis</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="force_nonce: true\x7Fnonce_header: &#x22;X-Higress-Nonce&#x22;    # Specifies the name of the nonce request header\x7Fnonce_ttl: 900                    # The validity period of the nonce, set to 900 seconds\x7Fnonce_min_length: 8               # The minimum length of the nonce\x7Fnonce_max_length: 128             # The maximum length of the nonce\x7Fvalidate_base64: true             # Whether to enable Base64 format verification\x7Freject_code: 429                  # The HTTP status code returned when a request is rejected\x7Freject_msg: &#x22;Replay Attack Detected&#x22;  # The error message content returned when a request is rejected\x7Fredis:\x7F  service_name: redis.static       # The name of the Redis service\x7F  service_port: 80                # The port used by the Redis service\x7F  timeout: 1000                   # The timeout time of Redis operations (unit: milliseconds)\x7F  key_prefix: &#x22;replay-protection&#x22; # The key prefix in Redis"><div></div></button></div></figure></div>
<h2 id="usage-instructions">Usage Instructions</h2>
<h3 id="request-header-requirements">Request Header Requirements</h3>















<table><thead><tr><th>Request Header Name</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">X-Higress-Nonce</code></td><td>Determined by the <code dir="auto">force_nonce</code> configuration</td><td>The randomly generated nonce value carried in the request, which needs to conform to the Base64 format.</td></tr></tbody></table>
<blockquote>
<p><strong>Note</strong>: The name of the request header can be customized through the <code dir="auto">nonce_header</code> configuration. The default value is <code dir="auto">X-Higress-Nonce</code>.</p>
</blockquote>
<h3 id="usage-example">Usage Example</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Generate nonce</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">nonce</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">openssl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">rand</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-base64</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">32</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Send request</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'https://api.example.com/path'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"X-Higress-Nonce: </span><span style="--0:#E1E4E8">$nonce</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key": "value"}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="nonce=$(openssl rand -base64 32)\x7Fcurl -X POST &#x27;https://api.example.com/path&#x27; \\\x7F  -H &#x22;X-Higress-Nonce: $nonce&#x22; \\\x7F  -d &#x27;{&#x22;key&#x22;: &#x22;value&#x22;}&#x27;"><div></div></button></div></figure></div>
<h2 id="return-results">Return Results</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Replay Attack Detected"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;code&#x22;: 429,\x7F  &#x22;message&#x22;: &#x22;Replay Attack Detected&#x22;\x7F}"><div></div></button></div></figure></div>
<h2 id="error-response-examples">Error Response Examples</h2>






























<table><thead><tr><th>Error Scenario</th><th>Status Code</th><th>Error Message</th></tr></thead><tbody><tr><td>Missing nonce request header</td><td>400</td><td><code dir="auto">Missing Required Header</code></td></tr><tr><td>Nonce length does not meet the requirements</td><td>400</td><td><code dir="auto">Invalid Nonce</code></td></tr><tr><td>Nonce format does not conform to Base64</td><td>400</td><td><code dir="auto">Invalid Nonce</code></td></tr><tr><td>Nonce has been used (replay attack)</td><td>429</td><td><code dir="auto">Replay Attack Detected</code></td></tr></tbody></table>`,n={title:"Replay Attack Prevention",keywords:["higress","replay-protection"],description:"Configuration reference for the replay attack prevention plugin"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/replay-protection.md",a=void 0,r=function(){return`
## Functional Description

The replay prevention plugin prevents request replay attacks by verifying the one-time random number in the request. Each request needs to carry a unique nonce value. The server will record and verify the uniqueness of this value, thus preventing requests from being maliciously replayed.

Specifically, it includes the following functions:

- **Mandatory or Optional Nonce Verification**: It can be configured to determine whether requests are required to carry a nonce value.
- **Nonce Uniqueness Verification Based on Redis**: The nonce value is stored and verified in Redis to ensure its uniqueness.
- **Configurable Nonce Validity Period**: It supports setting the validity period of the nonce, which will automatically expire after the period.
- **Nonce Format and Length Verification**: It supports verifying the format (Base64) and length of the nonce value.
- **Custom Error Response**: It supports configuring the status code and error message when a request is rejected.
- **Customizable Nonce Request Header**: The name of the request header carrying the nonce can be customized.

## Runtime Attributes

Plugin execution stage: \`Authentication Stage\`
Plugin execution priority: \`800\`

## Configuration Fields

| Name                | Data Type | Required | Default Value          | Description                              |
|----------------------|--------|------|-----------------|---------------------------------|
| \`force_nonce\`        | bool   | No   | true      | Whether requests are required to carry a nonce value.       |
| \`nonce_header\`       | string | No   | \`X-Higress-Nonce\`   | Specifies the name of the request header carrying the nonce value.       |
| \`nonce_ttl\`          | int    | No   | 900        | The validity period of the nonce, in seconds.    |
| \`nonce_min_length\`   | int    | No   | 8            | The minimum length of the nonce value.               |
| \`nonce_max_length\`   | int    | No   | 128        | The maximum length of the nonce value.               |
| \`reject_code\`        | int    | No   | 429        | The status code returned when a request is rejected.             |
| \`reject_msg\`         | string | No   | \`Replay Attack Detected\` | The error message returned when a request is rejected.           |
| \`validate_base64\`    | bool    | No   | false | Whether to verify the Base64 encoding format of the nonce. |
| \`redis\` | Object | Yes   | -              | Redis-related configuration |

Description of each configuration field in \`redis\`

| Name           | Data Type | Required | Default Value                 | Description|
| -------------- | -------- | ---- |---------------------| --------------------------------------- |
| \`service_name\` | string   | Yes   | -                   | The name of the Redis service, the complete FQDN name with the service type, such as my-redis.dns, redis.my-ns.svc.cluster.local. |
| \`service_port\` | int      | No   | 6379                | The port of the Redis service. |
| \`username\`     | string   | No   | -                   | The username of Redis. |
| \`password\`     | string   | No   | -                   | The password of Redis. |
| \`timeout\`      | int      | No   | 1000                | The connection timeout time of Redis, in milliseconds. |
| \`database\`     | int      | No   | 0                   | The ID of the database to be used. For example, if it is configured as 1, it corresponds to \`SELECT 1\`. |
| \`key_prefix\`   | string   | No   | \`replay-protection\` | The key prefix of Redis, used to distinguish different nonce keys. |

## Configuration Example

The following is a complete configuration example of the replay attack prevention plugin:

\`\`\`yaml
force_nonce: true
nonce_header: "X-Higress-Nonce"    # Specifies the name of the nonce request header
nonce_ttl: 900                    # The validity period of the nonce, set to 900 seconds
nonce_min_length: 8               # The minimum length of the nonce
nonce_max_length: 128             # The maximum length of the nonce
validate_base64: true             # Whether to enable Base64 format verification
reject_code: 429                  # The HTTP status code returned when a request is rejected
reject_msg: "Replay Attack Detected"  # The error message content returned when a request is rejected
redis:
  service_name: redis.static       # The name of the Redis service
  service_port: 80                # The port used by the Redis service
  timeout: 1000                   # The timeout time of Redis operations (unit: milliseconds)
  key_prefix: "replay-protection" # The key prefix in Redis
\`\`\`

## Usage Instructions

### Request Header Requirements

| Request Header Name       | Required         | Description                                       |
|-----------------|----------------|------------------------------------------|
| \`X-Higress-Nonce\`  | Determined by the \`force_nonce\` configuration | The randomly generated nonce value carried in the request, which needs to conform to the Base64 format. |

> **Note**: The name of the request header can be customized through the \`nonce_header\` configuration. The default value is \`X-Higress-Nonce\`.

### Usage Example

\`\`\`bash
# Generate nonce
nonce=$(openssl rand -base64 32)

# Send request
curl -X POST 'https://api.example.com/path' \\
  -H "X-Higress-Nonce: $nonce" \\
  -d '{"key": "value"}'
\`\`\`

## Return Results

\`\`\`json
{
  "code": 429,
  "message": "Replay Attack Detected"
}
\`\`\`

## Error Response Examples

| Error Scenario                 | Status Code | Error Message               |
|------------------------|-------|--------------------|
| Missing nonce request header         | 400 | \`Missing Required Header\` |
| Nonce length does not meet the requirements      | 400 | \`Invalid Nonce\` |
| Nonce format does not conform to Base64 | 400 | \`Invalid Nonce\` |
| Nonce has been used (replay attack) | 429 | \`Replay Attack Detected\` |
`},d=function(){return e},o=function(){return[{depth:2,slug:"functional-description",text:"Functional Description"},{depth:2,slug:"runtime-attributes",text:"Runtime Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"usage-instructions",text:"Usage Instructions"},{depth:3,slug:"request-header-requirements",text:"Request Header Requirements"},{depth:3,slug:"usage-example",text:"Usage Example"},{depth:2,slug:"return-results",text:"Return Results"},{depth:2,slug:"error-response-examples",text:"Error Response Examples"}]},t=c((v,g,E)=>{const{layout:x,...i}=n;return i.file=s,i.url=a,p`${u()}${h(e)}`})});export{t as Content,m as __tla,d as compiledContent,t as default,s as file,n as frontmatter,o as getHeadings,r as rawContent,a as url};
