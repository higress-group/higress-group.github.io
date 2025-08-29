import{c as o,__tla as l}from"./astro-component.B3fYMMDi.js";import{r,m as v,u as y,__tla as g}from"./constant.B9AWHwfy.js";import{__tla as f}from"./astro/assets-service.DmDXK_Mj.js";let s,d,a,i,c,t,n,u=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="using-nacos-as-registry-center">Using Nacos as Registry Center</h2>
<p>For application configuration, please refer to <a href="https://nacos.io/en/docs/quick-start-spring-cloud/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos Spring Cloud Quick Start</a> for detailed instructions</p>
<h3 id="without-specifying-namespace">Without Specifying Namespace</h3>
<p>If no Nacos namespace is specified in <code dir="auto">application.properties</code>, for example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server.port=8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server.port=8080\x7Fspring.application.name=my-service\x7F\x7Fspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848"><div></div></button></div></figure></div>
<p>Then there\u2019s no need to specify a namespace in Higress\u2019s <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Define a service source named my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry type is Nacos 2.x, supporting gRPC protocol</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access address, can be domain name or IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access port, Nacos default is 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos service group</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # Define a service source named my-nacos\x7F  - name: my-nacos\x7F    # Registry type is Nacos 2.x, supporting gRPC protocol\x7F    type: nacos2\x7F    # Registry access address, can be domain name or IP\x7F    domain: 127.0.0.1\x7F    # Registry access port, Nacos default is 8848\x7F    port: 8848\x7F    # Nacos service group\x7F    nacosGroups:\x7F    - DEFAULT_GROUP"><div></div></button></div></figure></div>
<p>To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.DEFAULT-GROUP.public.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>Note that the annotation <code dir="auto">higress.io/destination</code> specifies the target service for the route.</p>
<p>For services from Nacos, the target service format is: \u201Cservice-name.service-group.namespace-id.nacos\u201D. Note that this needs to follow DNS domain format, so underscores \u2019_\u2019 in service groups are converted to hyphens \u2019-\u2018. When namespace is not specified, the default value here is \u201Cpublic\u201D.</p>
<h3 id="specifying-namespace-service-group-etc">Specifying Namespace, Service Group, etc.</h3>
<p>If Nacos namespace, service group, and other information are specified in <code dir="auto">application.properties</code>, for example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server.port=8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.group=custom-group</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server.port=8080\x7Fspring.application.name=my-service\x7F\x7Fspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\x7Fspring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358\x7Fspring.cloud.nacos.discovery.group=custom-group"><div></div></button></div></figure></div>
<p>Then Higress\u2019s McpBridge should be configured accordingly:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Define a service source named my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry type is Nacos 2.x, supporting gRPC protocol</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access address, can be domain name or IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access port, Nacos default is 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos namespace ID</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosNamespaceId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos service group</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">custom-group</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # Define a service source named my-nacos\x7F  - name: my-nacos\x7F    # Registry type is Nacos 2.x, supporting gRPC protocol\x7F    type: nacos2\x7F    # Registry access address, can be domain name or IP\x7F    domain: 127.0.0.1\x7F    # Registry access port, Nacos default is 8848\x7F    port: 8848\x7F    # Nacos namespace ID\x7F    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358\x7F    # Nacos service group\x7F    nacosGroups:\x7F    - custom-group"><div></div></button></div></figure></div>
<p>To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<h2 id="using-zookeeper-as-registry-center">Using ZooKeeper as Registry Center</h2>
<p>When using ZooKeeper as the registry center, note that you must configure <code dir="auto">spring.cloud.zookeeper.discovery.preferIpAddress=true</code>, otherwise the address registered in the registry center will be the hostname, not the IP.</p>
<h3 id="without-specifying-registration-root-path">Without Specifying Registration Root Path</h3>
<p>If the registration root path is not specified in <code dir="auto">application.properties</code>, for example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.connect-string=127.0.0.1:2181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.preferIpAddress=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.enabled=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.register=true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="spring.application.name=my-service\x7Fspring.cloud.zookeeper.connect-string=127.0.0.1:2181\x7Fspring.cloud.zookeeper.discovery.preferIpAddress=true\x7Fspring.cloud.zookeeper.discovery.enabled=true\x7Fspring.cloud.zookeeper.discovery.register=true"><div></div></button></div></figure></div>
<p>Then there\u2019s no need to specify zkServicePath in Higress\u2019s <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Define a service source named my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry type is ZooKeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access address, can be domain name or IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access port</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2181</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # Define a service source named my-zk\x7F  - name: my-zk\x7F    # Registry type is ZooKeeper\x7F    type: zookeeper\x7F    # Registry access address, can be domain name or IP\x7F    domain: 127.0.0.1\x7F    # Registry access port\x7F    port: 2181"><div></div></button></div></figure></div>
<p>To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.services.zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.services.zookeeper\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>Note that for services from ZooKeeper, the target service format is: \u201Cservice-name.service-registration-root-path.zookeeper\u201D. In SpringCloud, when the service registration root path is not specified, the default root path is \u201Cservices\u201D.</p>
<h3 id="specifying-registration-root-path">Specifying Registration Root Path</h3>
<p>If the registration root path is specified in <code dir="auto">application.properties</code>, for example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.connect-string=127.0.0.1:2181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.preferIpAddress=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.enabled=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.register=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.root=my-services-root</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="spring.application.name=my-service\x7Fspring.cloud.zookeeper.connect-string=127.0.0.1:2181\x7Fspring.cloud.zookeeper.discovery.preferIpAddress=true\x7Fspring.cloud.zookeeper.discovery.enabled=true\x7Fspring.cloud.zookeeper.discovery.register=true\x7Fspring.cloud.zookeeper.discovery.root=my-services-root"><div></div></button></div></figure></div>
<p>Then zkServicePath needs to be specified in Higress\u2019s <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Define a service source named my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry type is ZooKeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access address, can be domain name or IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Registry access port</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2181</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Corresponds to spring.cloud.zookeeper.discovery.root configuration field</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">zkServicePath</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">my-services-root</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # Define a service source named my-zk\x7F  - name: my-zk\x7F    # Registry type is ZooKeeper\x7F    type: zookeeper\x7F    # Registry access address, can be domain name or IP\x7F    domain: 127.0.0.1\x7F    # Registry access port\x7F    port: 2181\x7F    # Corresponds to spring.cloud.zookeeper.discovery.root configuration field\x7F    zkServicePath:\x7F    - my-services-root"><div></div></button></div></figure></div>
<p>To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.my-services-root.zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.my-services-root.zookeeper\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>Note that if spring.cloud.zookeeper.discovery.root contains underscores, they need to be replaced with hyphens, because the overall target service format must comply with DNS domain name standards.</p>`,i={title:"Implementing SpringCloud Service Discovery and Routing",keywords:["SpringCloud","discovery"],description:"Implementing SpringCloud Service Discovery and Routing.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/spring-cloud.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/spring-cloud.md",n=void 0,t=function(){return`
# Implementing SpringCloud Service Discovery and Routing

## Using Nacos as Registry Center

For application configuration, please refer to [Nacos Spring Cloud Quick Start](https://nacos.io/en/docs/quick-start-spring-cloud/) for detailed instructions

### Without Specifying Namespace

If no Nacos namespace is specified in \`application.properties\`, for example:

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
\`\`\`

Then there's no need to specify a namespace in Higress's [McpBridge](./mcp-bridge.md):

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-nacos
  - name: my-nacos
    # Registry type is Nacos 2.x, supporting gRPC protocol
    type: nacos2
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos service group
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`

Note that the annotation \`higress.io/destination\` specifies the target service for the route.

For services from Nacos, the target service format is: "service-name.service-group.namespace-id.nacos". Note that this needs to follow DNS domain format, so underscores '_' in service groups are converted to hyphens '-'. When namespace is not specified, the default value here is "public".

### Specifying Namespace, Service Group, etc.

If Nacos namespace, service group, and other information are specified in \`application.properties\`, for example:

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
spring.cloud.nacos.discovery.group=custom-group
\`\`\`

Then Higress's McpBridge should be configured accordingly:

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-nacos
  - name: my-nacos
    # Registry type is Nacos 2.x, supporting gRPC protocol
    type: nacos2
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos namespace ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos service group
    nacosGroups:
    - custom-group
\`\`\`

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`


## Using ZooKeeper as Registry Center

When using ZooKeeper as the registry center, note that you must configure \`spring.cloud.zookeeper.discovery.preferIpAddress=true\`, otherwise the address registered in the registry center will be the hostname, not the IP.

### Without Specifying Registration Root Path

If the registration root path is not specified in \`application.properties\`, for example:

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
\`\`\`

Then there's no need to specify zkServicePath in Higress's [McpBridge](./mcp-bridge.md):

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-zk
  - name: my-zk
    # Registry type is ZooKeeper
    type: zookeeper
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port
    port: 2181
\`\`\`

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.services.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`
Note that for services from ZooKeeper, the target service format is: "service-name.service-registration-root-path.zookeeper". In SpringCloud, when the service registration root path is not specified, the default root path is "services".

### Specifying Registration Root Path

If the registration root path is specified in \`application.properties\`, for example:

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
spring.cloud.zookeeper.discovery.root=my-services-root
\`\`\`

Then zkServicePath needs to be specified in Higress's [McpBridge](./mcp-bridge.md):

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-zk
  - name: my-zk
    # Registry type is ZooKeeper
    type: zookeeper
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port
    port: 2181
    # Corresponds to spring.cloud.zookeeper.discovery.root configuration field
    zkServicePath:
    - my-services-root
\`\`\`

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.my-services-root.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`

Note that if spring.cloud.zookeeper.discovery.root contains underscores, they need to be replaced with hyphens, because the overall target service format must comply with DNS domain name standards.`},d=function(){return e},c=function(){return[{depth:2,slug:"using-nacos-as-registry-center",text:"Using Nacos as Registry Center"},{depth:3,slug:"without-specifying-namespace",text:"Without Specifying Namespace"},{depth:3,slug:"specifying-namespace-service-group-etc",text:"Specifying Namespace, Service Group, etc."},{depth:2,slug:"using-zookeeper-as-registry-center",text:"Using ZooKeeper as Registry Center"},{depth:3,slug:"without-specifying-registration-root-path",text:"Without Specifying Registration Root Path"},{depth:3,slug:"specifying-registration-root-path",text:"Specifying Registration Root Path"}]},s=o((m,x,h)=>{const{layout:E,...p}=i;return p.file=a,p.url=n,r`${v()}${y(e)}`})});export{s as Content,u as __tla,d as compiledContent,s as default,a as file,i as frontmatter,c as getHeadings,t as rawContent,n as url};
