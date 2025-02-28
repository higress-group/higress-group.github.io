import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r,m as u,u as v,__tla as y}from"./constant.Bwt2chHC.js";import{__tla as E}from"./astro/assets-service.DQopRnBr.js";let s,p,t,a,d,l,i,F=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>This plugin implements <code dir="auto">OPA</code> policy control.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">225</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>





























































<table><thead><tr><th>Field</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>policy</td><td>string</td><td>Required</td><td>-</td><td>OPA Policy</td></tr><tr><td>timeout</td><td>string</td><td>Required</td><td>-</td><td>Timeout setting for access</td></tr><tr><td>serviceSource</td><td>string</td><td>Required</td><td>-</td><td>k8s, nacos, ip, route</td></tr><tr><td>host</td><td>string</td><td>Optional</td><td>-</td><td>Service host (required if serviceSource is <code dir="auto">ip</code>)</td></tr><tr><td>serviceName</td><td>string</td><td>Optional</td><td>-</td><td>Service name (required if serviceSource is <code dir="auto">k8s,nacos,ip</code>)</td></tr><tr><td>servicePort</td><td>string</td><td>Optional</td><td>-</td><td>Service port (required if serviceSource is <code dir="auto">k8s,nacos,ip</code>)</td></tr><tr><td>namespace</td><td>string</td><td>Optional</td><td>-</td><td>Namespace (required if serviceSource is <code dir="auto">k8s,nacos</code>)</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k8s</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">opa</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-backend</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">5s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceSource: k8s\x7FserviceName: opa\x7FservicePort: 8181\x7Fnamespace: higress-backend\x7Fpolicy: example1\x7Ftimeout: 5s"><div></div></button></div></figure></div>
<h2 id="opa-service-installation-reference">OPA Service Installation Reference</h2>
<h3 id="start-opa-service">Start OPA Service</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">opa</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8181:8181</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">openpolicyagent/opa:0.35.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s"><div></div></button></div></figure></div>
<h3 id="create-opa-policy">Create OPA Policy</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PUT</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'127.0.0.1:8181/v1/policies/example1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: text/plain'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'package example1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">import input.request</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">default allow = false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">allow {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF"># HTTP method must GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">request.method == "GET"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X PUT &#x27;127.0.0.1:8181/v1/policies/example1&#x27; \\\x7F  -H &#x27;Content-Type: text/plain&#x27; \\\x7F  -d &#x27;package example1\x7Fimport input.request\x7Fdefault allow = false\x7Fallow {\x7F    request.method == &#x22;GET&#x22;\x7F}&#x27;"><div></div></button></div></figure></div>
<h3 id="query-policy">Query Policy</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'127.0.0.1:8181/v1/data/example1/allow'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"input":{"request":{"method":"GET"}}}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;127.0.0.1:8181/v1/data/example1/allow&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{&#x22;input&#x22;:{&#x22;request&#x22;:{&#x22;method&#x22;:&#x22;GET&#x22;}}}&#x27;"><div></div></button></div></figure></div>`,a={title:"OPA",keywords:["higress","opa"],description:"OPA policy control plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/opa.md",i=void 0,l=function(){return`## Function Description
This plugin implements \`OPA\` policy control.

## Running Attributes
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`225\`

## Configuration Fields
| Field            | Data Type   | Required | Default Value | Description                                   |
|------------------|-------------|----------|---------------|-----------------------------------------------|
| policy           | string      | Required | -             | OPA Policy                                    |
| timeout          | string      | Required | -             | Timeout setting for access                    |
| serviceSource    | string      | Required | -             | k8s, nacos, ip, route                         |
| host             | string      | Optional | -             | Service host (required if serviceSource is \`ip\`) |
| serviceName      | string      | Optional | -             | Service name (required if serviceSource is \`k8s,nacos,ip\`) |
| servicePort      | string      | Optional | -             | Service port (required if serviceSource is \`k8s,nacos,ip\`) |
| namespace        | string      | Optional | -             | Namespace (required if serviceSource is \`k8s,nacos\`) |

## Configuration Example
\`\`\`yaml
serviceSource: k8s
serviceName: opa
servicePort: 8181
namespace: higress-backend
policy: example1
timeout: 5s
\`\`\`

## OPA Service Installation Reference
### Start OPA Service
\`\`\`shell
docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s
\`\`\`

### Create OPA Policy
\`\`\`shell
curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\
  -H 'Content-Type: text/plain' \\
  -d 'package example1
import input.request
default allow = false
allow {
    # HTTP method must GET
    request.method == "GET"
}'
\`\`\`

### Query Policy
\`\`\`shell
curl -X POST '127.0.0.1:8181/v1/data/example1/allow' \\
  -H 'Content-Type: application/json' \\
  -d '{"input":{"request":{"method":"GET"}}}'
\`\`\`
`},p=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"opa-service-installation-reference",text:"OPA Service Installation Reference"},{depth:3,slug:"start-opa-service",text:"Start OPA Service"},{depth:3,slug:"create-opa-policy",text:"Create OPA Policy"},{depth:3,slug:"query-policy",text:"Query Policy"}]},s=c((f,g,m)=>{const{layout:h,...n}=a;return n.file=t,n.url=i,r`${u()}${v(e)}`})});export{s as Content,F as __tla,p as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,l as rawContent,i as url};
