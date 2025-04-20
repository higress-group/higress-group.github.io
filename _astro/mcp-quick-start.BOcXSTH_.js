import{c,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as v,__tla as g}from"./constant.DElp19y6.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,r,a,n,o,p,i,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<blockquote>
<p><strong>Note:</strong> The MCP Server functionality described in this document requires Higress 2.1.0 or higher.</p>
</blockquote>
<p>Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details. Database integration is a built-in capability of the gateway, while any external REST API can be transformed into an MCP Server through simple configuration. This guide will demonstrate the configuration process using PostgreSQL database and a simple REST API as examples.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before using MCP Server, you need to deploy Higress first. You can refer to the <a href="https://higress.cn/en/docs/latest/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Quick Start Guide</a> for deployment instructions. When installing Higress, make sure to add the following parameter to your Helm command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> [...other </span><span style="--0:#9ECBFF">parameters...]</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableRedis=</span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system [...other parameters...] --set global.enableRedis=true"><div></div></button></div></figure></div>
<p>MCP Server requires Redis service for data caching. After enabling it, you can check the Redis service address using the following command:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">redis-stack-server</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wide</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc redis-stack-server -n higress-system -o wide"><div></div></button></div></figure></div>
<h2 id="configuring-mcp-server">Configuring MCP Server</h2>
<h3 id="configmap-global-parameter-configuration">ConfigMap Global Parameter Configuration</h3>
<p>Configure MCP Server-related global parameters in the ConfigMap:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit configmap higress-config -n higress-system"><div></div></button></div></figure></div>
<p>Configure Redis connection information and MCP Server routing rules:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">mcpServer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sse_path_suffix: /sse  # Path suffix for SSE connections</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true          # Enable MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">redis:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis service address</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">username: "" # Redis username (optional)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">password: "" # Redis password (optional)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">db: 0 # Redis database (optional)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">match_list:          # MCP Server Session Persistence Routing Rules (When the following paths are matched, they will be recognized as an MCP session, and session persistence will be maintained through mechanisms such as SSE)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- match_rule_domain: "*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_path: /postgres</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_type: "prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- match_rule_domain: "*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_path: /user</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_type: "prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">servers: []</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    mcpServer:\x7F      sse_path_suffix: /sse  # Path suffix for SSE connections\x7F      enable: true          # Enable MCP Server\x7F      redis:\x7F        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis service address\x7F        username: &#x22;&#x22; # Redis username (optional)\x7F        password: &#x22;&#x22; # Redis password (optional)\x7F        db: 0 # Redis database (optional)\x7F      match_list:          # MCP Server Session Persistence Routing Rules (When the following paths are matched, they will be recognized as an MCP session, and session persistence will be maintained through mechanisms such as SSE)\x7F        - match_rule_domain: &#x22;*&#x22;\x7F          match_rule_path: /postgres\x7F          match_rule_type: &#x22;prefix&#x22;\x7F        - match_rule_domain: &#x22;*&#x22;\x7F          match_rule_path: /user\x7F          match_rule_type: &#x22;prefix&#x22;\x7F      servers: []\x7F...\x7F\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<blockquote>
<p><strong>Note:</strong> Database-type MCP Servers are configured in the Config Map, while REST API type configurations are done in the Higress console.</p>
</blockquote>
<h3 id="configuring-database-mcp-server">Configuring Database MCP Server</h3>
<p>Configure Database MCP Server in the Config Map:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">servers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">postgres</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># MCP Server name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/postgres</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># Access path, must match the configuration in match_list</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">database</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># Type is database</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dsn</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your postgres database connect dsn"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Database connection string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dbType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">                        </span><span style="--0:#99A0A6"># Database types, currently supported: postgres/mysql/clickhouse/sqlite</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="servers:\x7F  - name: postgres      # MCP Server name\x7F    path: /postgres     # Access path, must match the configuration in match_list\x7F    type: database      # Type is database\x7F    config:\x7F      dsn: &#x22;your postgres database connect dsn&#x22; # Database connection string\x7F      dbType: &#x22;postgres&#x22;                        # Database types, currently supported: postgres/mysql/clickhouse/sqlite"><div></div></button></div></figure></div>
<p>For database connection string format, please refer to the <a href="https://gorm.io/docs/connecting_to_the_database.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">gorm documentation</a>.</p>
<h3 id="configuring-nacos-mcp-registry-in-config-map">Configuring Nacos MCP Registry in Config Map</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">servers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos-mcp-registry</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos-mcp-registry</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/registry</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">serverAddr</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"nacos server address"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"nacos namespace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">serviceMatcher</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">your-service-group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"service-match-pattern"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="servers:\x7F  - name: nacos-mcp-registry\x7F    type: nacos-mcp-registry\x7F    path: /registry\x7F    config:\x7F      serverAddr: &#x22;nacos server address&#x22;\x7F      namespace: &#x22;nacos namespace&#x22;\x7F      serviceMatcher:\x7F        your-service-group: &#x22;service-match-pattern&#x22;"><div></div></button></div></figure></div>
<p>Notes:
The Nacos MCP Registry only exposes services that match the serviceMatcher AND have an mcp-tools configuration file as MCP services. Ensure that the service group and configuration file group are in the same namespace and group. The serverAddr is the Nacos address without needing to specify the port, as the default is 8848.</p>
<ul>
<li>The key of serviceMatcher represents the service group.</li>
<li>The value is a regular expression used to match the service names.</li>
<li>To match all services, use .*.</li>
</ul>
<h3 id="configuring-rest-api-mcp-server">Configuring REST API MCP Server</h3>
<p>Any REST API can be quickly transformed into an MCP Server through the following steps:</p>
<h4 id="1-add-service-source">1. Add Service Source</h4>
<p>Add the target REST API\u2019s service source in the Higress console. This example uses <code dir="auto">randomuser.me</code> as the service source:</p>
<p><img src="https://github.com/user-attachments/assets/fcd06141-8970-4e9b-8061-f472ba6fa07a" alt="Add Service Source" referrerpolicy="no-referrer"></p>
<h4 id="2-configure-route">2. Configure Route</h4>
<p>Add a route in the Higress console and point it to the corresponding service source:</p>
<p><img src="https://github.com/user-attachments/assets/639426c3-3c74-4268-b12f-c0173c1620ab" alt="Configure Route" referrerpolicy="no-referrer"></p>
<h4 id="3-configure-mcp-server-plugin">3. Configure MCP Server Plugin</h4>
<p><strong>Recommendation: You can use the <a href="https://github.com/higress-group/openapi-to-mcpserver" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">OpenAPI to MCP</a> tool to automatically convert API documentation into MCP Server plugin configurations.</strong></p>
<p>Click the <em>Strategy</em> button in the action of the route.</p>
<p>Add and configure the MCP Server plugin for the created route:</p>
<p><img src="https://github.com/user-attachments/assets/935dab27-c2f2-46c3-9f5c-702b642ae512" alt="Configure MCP Server Plugin" referrerpolicy="no-referrer"></p>
<p>Plugin configuration example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"random-user-server"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get random user information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"get-user"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://randomuser.me/api/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># User Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- with (index .results 0) }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Name**: {{.name.first}} {{.name.last}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Email**: {{.email}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Location**: {{.location.city}}, {{.location.country}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Phone**: {{.phone}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;random-user-server&#x22;\x7Ftools:\x7F- description: &#x22;Get random user information&#x22;\x7F  name: &#x22;get-user&#x22;\x7F  requestTemplate:\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://randomuser.me/api/&#x22;\x7F  responseTemplate:\x7F    body: |-\x7F      # User Information\x7F      {{- with (index .results 0) }}\x7F      - **Name**: {{.name.first}} {{.name.last}}\x7F      - **Email**: {{.email}}\x7F      - **Location**: {{.location.city}}, {{.location.country}}\x7F      - **Phone**: {{.phone}}\x7F      {{- end }}"><div></div></button></div></figure></div>
<p>For more detailed information about configuring REST API to MCP Server, please refer to the <a href="../../ai/mcp-server/" referrerpolicy="unsafe-url">MCP Server Plugin Configuration Reference</a>.</p>
<blockquote>
<p><strong>Note:</strong> For the 2025-03-26 <a href="https://spec.modelcontextprotocol.io/specification/2025-03-26/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MCP streamable HTTP</a> protocol, ConfigMap configuration is not required.</p>
</blockquote>
<h2 id="using-mcp-server">Using MCP Server</h2>
<p>Configure the MCP Server SSE connection in your AI Agent. Taking cursor as an example:</p>
<ul>
<li>For database-type MCP Server: use the path + sse_path_suffix configured in ConfigMap</li>
<li>For REST API type MCP Server: use the route path + sse_path_suffix configured in the console</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">"mcpServers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/postgres/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"rest-api"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/user/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;mcpServers&#x22;: {\x7F  &#x22;postgres&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/postgres/sse&#x22;\x7F  },\x7F  &#x22;rest-api&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/user/sse&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>Cursor configuration complete:</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg" alt="Cursor Configuration Complete" referrerpolicy="no-referrer"></p>
<p>Through MCP Server, you can quickly add various data source support for AI Agents, improving development efficiency. Any REST API can be transformed into an MCP Server through simple configuration, without writing additional code.</p>
<blockquote>
<p>If you encounter any issues while using MCP Server, please leave your information in <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or would like to provide feedback, welcome to Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,n={title:"MCP Server Quick Start",description:"Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details.",date:"2025-04-03",category:"article",keywords:["MCP Server"],authors:"Jingze"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-quick-start.md",i=void 0,p=function(){return`
# MCP Server Quick Start

> **Note:** The MCP Server functionality described in this document requires Higress 2.1.0 or higher.

Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details. Database integration is a built-in capability of the gateway, while any external REST API can be transformed into an MCP Server through simple configuration. This guide will demonstrate the configuration process using PostgreSQL database and a simple REST API as examples.

## Prerequisites

Before using MCP Server, you need to deploy Higress first. You can refer to the [Higress Quick Start Guide](https://higress.cn/en/docs/latest/user/quickstart) for deployment instructions. When installing Higress, make sure to add the following parameter to your Helm command:

\`\`\`bash
helm install higress -n higress-system [...other parameters...] --set global.enableRedis=true
\`\`\`

MCP Server requires Redis service for data caching. After enabling it, you can check the Redis service address using the following command:

\`\`\`bash
kubectl get svc redis-stack-server -n higress-system -o wide
\`\`\`

## Configuring MCP Server

### ConfigMap Global Parameter Configuration

Configure MCP Server-related global parameters in the ConfigMap:

\`\`\`bash
kubectl edit configmap higress-config -n higress-system
\`\`\`

Configure Redis connection information and MCP Server routing rules:

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # Path suffix for SSE connections
      enable: true          # Enable MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis service address
        username: "" # Redis username (optional)
        password: "" # Redis password (optional)
        db: 0 # Redis database (optional)
      match_list:          # MCP Server Session Persistence Routing Rules (When the following paths are matched, they will be recognized as an MCP session, and session persistence will be maintained through mechanisms such as SSE)
        - match_rule_domain: "*"
          match_rule_path: /postgres
          match_rule_type: "prefix"
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

> **Note:** Database-type MCP Servers are configured in the Config Map, while REST API type configurations are done in the Higress console.

### Configuring Database MCP Server

Configure Database MCP Server in the Config Map:

\`\`\`yaml
servers:
  - name: postgres      # MCP Server name
    path: /postgres     # Access path, must match the configuration in match_list
    type: database      # Type is database
    config:
      dsn: "your postgres database connect dsn" # Database connection string
      dbType: "postgres"                        # Database types, currently supported: postgres/mysql/clickhouse/sqlite
\`\`\`

For database connection string format, please refer to the [gorm documentation](https://gorm.io/docs/connecting_to_the_database.html).

### Configuring Nacos MCP Registry in Config Map
\`\`\`yaml
servers:
  - name: nacos-mcp-registry
    type: nacos-mcp-registry
    path: /registry
    config:
      serverAddr: "nacos server address"
      namespace: "nacos namespace"
      serviceMatcher:
        your-service-group: "service-match-pattern"
\`\`\`
Notes:
The Nacos MCP Registry only exposes services that match the serviceMatcher AND have an mcp-tools configuration file as MCP services. Ensure that the service group and configuration file group are in the same namespace and group. The serverAddr is the Nacos address without needing to specify the port, as the default is 8848.

+ The key of serviceMatcher represents the service group.
+ The value is a regular expression used to match the service names.
+ To match all services, use .*.

### Configuring REST API MCP Server

Any REST API can be quickly transformed into an MCP Server through the following steps:

#### 1. Add Service Source

Add the target REST API's service source in the Higress console. This example uses \`randomuser.me\` as the service source:

![Add Service Source](https://github.com/user-attachments/assets/fcd06141-8970-4e9b-8061-f472ba6fa07a)

#### 2. Configure Route

Add a route in the Higress console and point it to the corresponding service source:

![Configure Route](https://github.com/user-attachments/assets/639426c3-3c74-4268-b12f-c0173c1620ab)

#### 3. Configure MCP Server Plugin

**Recommendation: You can use the [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) tool to automatically convert API documentation into MCP Server plugin configurations.**

Click the *Strategy* button in the action of the route.

Add and configure the MCP Server plugin for the created route:

![Configure MCP Server Plugin](https://github.com/user-attachments/assets/935dab27-c2f2-46c3-9f5c-702b642ae512)

Plugin configuration example:

\`\`\`yaml
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

For more detailed information about configuring REST API to MCP Server, please refer to the [MCP Server Plugin Configuration Reference](../ai/mcp-server.md).

> **Note:** For the 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) protocol, ConfigMap configuration is not required.

## Using MCP Server

Configure the MCP Server SSE connection in your AI Agent. Taking cursor as an example:

* For database-type MCP Server: use the path + sse_path_suffix configured in ConfigMap
* For REST API type MCP Server: use the route path + sse_path_suffix configured in the console

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
}
\`\`\`

Cursor configuration complete:

![Cursor Configuration Complete](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)

Through MCP Server, you can quickly add various data source support for AI Agents, improving development efficiency. Any REST API can be transformed into an MCP Server through simple configuration, without writing additional code.

> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).
> 
> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/).
`},r=function(){return s},o=function(){return[{depth:2,slug:"prerequisites",text:"Prerequisites"},{depth:2,slug:"configuring-mcp-server",text:"Configuring MCP Server"},{depth:3,slug:"configmap-global-parameter-configuration",text:"ConfigMap Global Parameter Configuration"},{depth:3,slug:"configuring-database-mcp-server",text:"Configuring Database MCP Server"},{depth:3,slug:"configuring-nacos-mcp-registry-in-config-map",text:"Configuring Nacos MCP Registry in Config Map"},{depth:3,slug:"configuring-rest-api-mcp-server",text:"Configuring REST API MCP Server"},{depth:4,slug:"1-add-service-source",text:"1. Add Service Source"},{depth:4,slug:"2-configure-route",text:"2. Configure Route"},{depth:4,slug:"3-configure-mcp-server-plugin",text:"3. Configure MCP Server Plugin"},{depth:2,slug:"using-mcp-server",text:"Using MCP Server"}]},e=c((f,E,m)=>{const{layout:C,...t}=n;return t.file=a,t.url=i,d`${u()}${v(s)}`})});export{e as Content,y as __tla,r as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,p as rawContent,i as url};
