import{c as o,__tla as p}from"./astro-component.B3fYMMDi.js";import{r as l,m as v,u,__tla as y}from"./constant.B9AWHwfy.js";import{__tla as h}from"./astro/assets-service.DmDXK_Mj.js";let s,d,t,a,r,c,n,g=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<blockquote>
<p><strong>Note</strong></p>
</blockquote>
<blockquote>
<p>Currently, only the mcpbridge resource named <code dir="auto">default</code> in the higress installation namespace is monitored</p>
<p>When using the Higress UI console, the corresponding entry for this configuration is located in the <strong>Service Sources</strong> menu item</p>
</blockquote>
<h2 id="mcpbridge-field-description">McpBridge Field Description</h2>


























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th><th>Required</th></tr></thead><tbody><tr><td>registries</td><td>RegistryConfig Array</td><td>Support configuring service sources from multiple different registry centers</td><td>[]</td><td>No</td></tr><tr><td>name</td><td>String</td><td>McpBridge name</td><td>default</td><td>Yes, currently this value can only be default</td></tr></tbody></table>
<h2 id="registryconfig-field-description">RegistryConfig Field Description</h2>

















































































































































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example Value</th><th>Required</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Service discovery type, options: nacos,nacos2,nacos3,zookeeper,consul,eureka,static,dns</td><td>nacos2</td><td>Yes</td></tr><tr><td>name</td><td>String</td><td>Custom service source name</td><td>my-nacos</td><td>Yes</td></tr><tr><td>domain</td><td>String</td><td>Service discovery address, generally the registry center address; when the type is static or dns, this field is used to directly configure the backend address</td><td>192.168.1.2</td><td>Yes</td></tr><tr><td>port</td><td>Integer</td><td>Registry center access port</td><td>8848</td><td>Yes</td></tr><tr><td>protocol</td><td>String</td><td>Service protocol, only effective for static/dns types, supports HTTP/HTTPS/GRPC/GRPCS, default value is HTTP</td><td>HTTPS</td><td>No</td></tr><tr><td>sni</td><td>String</td><td>When protocol is HTTPS or GRPCS, used to set the SNI used during TLS handshake</td><td><a href="http://www.example.com" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">www.example.com</a></td><td>No</td></tr><tr><td>zkServicesPath</td><td>String Array</td><td>When using zk, fill in the root path of service registration, by default monitors /dubbo and /services, the former is the default root path for dubbo services, the latter is the default root path for SpringCloud services</td><td>[\u201C/service-provider\u201D]</td><td>No</td></tr><tr><td>nacosNamespaceId</td><td>String</td><td>Nacos namespace id</td><td>d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</td><td>No</td></tr><tr><td>nacosGroups</td><td>String Array</td><td>Nacos service group list</td><td>[\u201CDEFAULT_GROUP\u201D]</td><td>No</td></tr><tr><td>nacosAccessKey</td><td>String</td><td>Nacos access key information when authentication is required</td><td>xxxx</td><td>No</td></tr><tr><td>nacosSecretKey</td><td>String</td><td>Nacos secret key information when authentication is required</td><td>xxxx</td><td>No</td></tr><tr><td>nacosRefreshInterval</td><td>Integer</td><td>Service refresh interval in nanoseconds when Nacos authentication is required</td><td>30000000000 (30 seconds)</td><td>No</td></tr><tr><td>mcpServerExportDomains</td><td>String Array</td><td>Domains to expose when enabling mcp server, exposes on all domains if not filled</td><td>[\u201Cexample.com\u201D,\u201Ca.test.com\u201D]</td><td>No</td></tr><tr><td>mcpServerBaseUrl</td><td>String</td><td>URL or URL prefix to expose when enabling mcp server (e.g., when using nacos to aggregate multiple mcp servers)</td><td>/mcp-server</td><td>No</td></tr><tr><td>enableMCPServer</td><td>Boolean</td><td>Whether to enable MCPServer (currently only supports nacos3 type service sources)</td><td>true</td><td>No</td></tr><tr><td>consulDatacenter</td><td>String</td><td>Data center name when Consul authentication is required</td><td>dc1</td><td>No</td></tr><tr><td>consulServiceTag</td><td>String</td><td>Service tag filter when Consul authentication is required</td><td>higress</td><td>No</td></tr><tr><td>consulRefreshInterval</td><td>Integer</td><td>Service refresh interval in nanoseconds when Consul authentication is required</td><td>30000000000 (30 seconds)</td><td>No</td></tr><tr><td>authSecretName</td><td>String</td><td>Service discovery authentication information Secret name, see details below</td><td>higress-nacos-auth</td><td>No</td></tr></tbody></table>
<h2 id="authsecretname-field-description">authSecretName Field Description</h2>
<p>Service discovery source authentication information is stored in the corresponding Secret under the higress-system namespace. Currently, nacos and consul service discovery are supported.</p>
<p>Nacos authentication information includes username and password, consul authentication information includes authentication token. Specific Secret configuration examples are as follows:</p>
<h3 id="nacos-authentication">Nacos Authentication</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">nacosPassword</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aGlncmVzcw==</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">nacosUsername</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aGlncmVzcw==</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-nacos-auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  nacosPassword: aGlncmVzcw==\x7F  nacosUsername: aGlncmVzcw==\x7Fkind: Secret\x7Fmetadata:\x7F  name: higress-nacos-auth\x7F  namespace: higress-system\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h3 id="consul-authentication">Consul Authentication</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">consulToken</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-consul-auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy\x7Fkind: Secret\x7Fmetadata:\x7F  name: higress-consul-auth\x7F  namespace: higress-system\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h2 id="support-for-configuring-static-service-discovery-methods">Support for Configuring Static Service Discovery Methods</h2>
<h3 id="discover-services-via-fixed-ip">Discover Services via Fixed IP</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1.1.1.1:80,2.2.2.2:80"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">test</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: &#x22;1.1.1.1:80,2.2.2.2:80&#x22;\x7F    name: test\x7F    port: 80\x7F    type: static"><div></div></button></div></figure></div>
<h3 id="discover-services-via-dns-domain-name">Discover Services via DNS Domain Name</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">www.alibaba.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">alibaba</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: www.alibaba.com\x7F    name: alibaba\x7F    port: 443\x7F    protocol: HTTPS\x7F    type: dns"><div></div></button></div></figure></div>`,a={title:"Mcp Bridge Configuration Guide",keywords:["discovery"],description:"Higress Mcp Bridge Configuration Guide.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/mcp-bridge.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/mcp-bridge.md",n=void 0,c=function(){return`
# Mcp Bridge Configuration Guide

> **Note**

> Currently, only the mcpbridge resource named \`default\` in the higress installation namespace is monitored
>
> When using the Higress UI console, the corresponding entry for this configuration is located in the **Service Sources** menu item


## McpBridge Field Description
| Field      | Type | Description                | Example   | Required              |
|------------| --- |----------------------------|-----------|----------------------|
| registries | RegistryConfig Array | Support configuring service sources from multiple different registry centers | []        | No                   |
| name       | String | McpBridge name             | default   | Yes, currently this value can only be default |

## RegistryConfig Field Description
| Field                 | Type | Description                                           | Example Value                           | Required |
|-----------------------| --- |-------------------------------------------------------|----------------------------------------| --- |
| type                  | String | Service discovery type, options: nacos,nacos2,nacos3,zookeeper,consul,eureka,static,dns | nacos2                               | Yes |
| name                  | String | Custom service source name                           | my-nacos                             | Yes |
| domain                | String | Service discovery address, generally the registry center address; when the type is static or dns, this field is used to directly configure the backend address | 192.168.1.2                          | Yes |
| port                  | Integer | Registry center access port                          | 8848                                 | Yes |
| protocol              | String | Service protocol, only effective for static/dns types, supports HTTP/HTTPS/GRPC/GRPCS, default value is HTTP | HTTPS                                | No |
| sni                   | String | When protocol is HTTPS or GRPCS, used to set the SNI used during TLS handshake | www.example.com                      | No |
| zkServicesPath        | String Array | When using zk, fill in the root path of service registration, by default monitors /dubbo and /services, the former is the default root path for dubbo services, the latter is the default root path for SpringCloud services | ["/service-provider"]                | No |
| nacosNamespaceId      | String | Nacos namespace id                                   | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | No |
| nacosGroups           | String Array | Nacos service group list                            | ["DEFAULT_GROUP"]                    | No |
| nacosAccessKey        | String | Nacos access key information when authentication is required | xxxx                                 | No |
| nacosSecretKey        | String | Nacos secret key information when authentication is required | xxxx | No |
| nacosRefreshInterval  | Integer | Service refresh interval in nanoseconds when Nacos authentication is required | 30000000000 (30 seconds)              | No |
| mcpServerExportDomains| String Array | Domains to expose when enabling mcp server, exposes on all domains if not filled | ["example.com","a.test.com"]         | No |
| mcpServerBaseUrl      | String | URL or URL prefix to expose when enabling mcp server (e.g., when using nacos to aggregate multiple mcp servers) | /mcp-server                         | No |
| enableMCPServer       | Boolean | Whether to enable MCPServer (currently only supports nacos3 type service sources) | true                                | No |
| consulDatacenter      | String | Data center name when Consul authentication is required | dc1                                  | No |
| consulServiceTag      | String | Service tag filter when Consul authentication is required | higress                              | No |
| consulRefreshInterval | Integer | Service refresh interval in nanoseconds when Consul authentication is required | 30000000000 (30 seconds)              | No |
| authSecretName        | String | Service discovery authentication information Secret name, see details below | higress-nacos-auth                   | No |

## authSecretName Field Description

Service discovery source authentication information is stored in the corresponding Secret under the higress-system namespace. Currently, nacos and consul service discovery are supported.

Nacos authentication information includes username and password, consul authentication information includes authentication token. Specific Secret configuration examples are as follows:

### Nacos Authentication

\`\`\`yaml
apiVersion: v1
data:
  nacosPassword: aGlncmVzcw==
  nacosUsername: aGlncmVzcw==
kind: Secret
metadata:
  name: higress-nacos-auth
  namespace: higress-system
type: Opaque
\`\`\`

### Consul Authentication 

\`\`\`yaml
apiVersion: v1
data:
  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy
kind: Secret
metadata:
  name: higress-consul-auth
  namespace: higress-system
type: Opaque
\`\`\`


## Support for Configuring Static Service Discovery Methods

### Discover Services via Fixed IP

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: "1.1.1.1:80,2.2.2.2:80"
    name: test
    port: 80
    type: static
\`\`\`

### Discover Services via DNS Domain Name

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: www.alibaba.com
    name: alibaba
    port: 443
    protocol: HTTPS
    type: dns
\`\`\``},d=function(){return e},r=function(){return[{depth:2,slug:"mcpbridge-field-description",text:"McpBridge Field Description"},{depth:2,slug:"registryconfig-field-description",text:"RegistryConfig Field Description"},{depth:2,slug:"authsecretname-field-description",text:"authSecretName Field Description"},{depth:3,slug:"nacos-authentication",text:"Nacos Authentication"},{depth:3,slug:"consul-authentication",text:"Consul Authentication"},{depth:2,slug:"support-for-configuring-static-service-discovery-methods",text:"Support for Configuring Static Service Discovery Methods"},{depth:3,slug:"discover-services-via-fixed-ip",text:"Discover Services via Fixed IP"},{depth:3,slug:"discover-services-via-dns-domain-name",text:"Discover Services via DNS Domain Name"}]},s=o((m,E,f)=>{const{layout:S,...i}=a;return i.file=t,i.url=n,l`${v()}${u(e)}`})});export{s as Content,g as __tla,d as compiledContent,s as default,t as file,a as frontmatter,r as getHeadings,c as rawContent,n as url};
