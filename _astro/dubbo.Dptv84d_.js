import{c as d,__tla as l}from"./astro-component.B3fYMMDi.js";import{r,m as v,u as E,__tla as y}from"./constant.Cgp6cJPa.js";import{__tla as u}from"./astro/assets-service.DmDXK_Mj.js";let e,p,a,n,o,c,i,h=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h1 id="integrating-dubbo-services-with-higress">Integrating Dubbo Services with Higress</h1>
<p>Higress provides protocol transformation capabilities from HTTP to Dubbo, allowing users to expose Dubbo services as HTTP interfaces. This document demonstrates how to configure HTTP to Dubbo protocol conversion in Higress through an example.</p>
<h2 id="prerequisites">Prerequisites</h2>
<ol>
<li>Higress currently supports Dubbo framework version 2.x. For Dubbo 3.0, only the Dubbo protocol is supported (Triple protocol is not currently supported as it\u2019s based on gRPC and can be directly proxied without protocol conversion).</li>
</ol>
<h2 id="deploying-dubbo-services">Deploying Dubbo Services</h2>
<p>You can use either Nacos or Zookeeper as the registry to deploy a Dubbo service. For more details, refer to:</p>
<p><a href="https://dubbo.apache.org/en/overview/what/ecosystem/registry/nacos/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://dubbo.apache.org/en/overview/what/ecosystem/registry/nacos/</a></p>
<p><a href="https://dubbo.apache.org/en/overview/what/ecosystem/registry/zookeeper/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://dubbo.apache.org/en/overview/what/ecosystem/registry/zookeeper/</a></p>
<p>Assuming we have deployed a Dubbo service with the following interface <code dir="auto">com.alibaba.nacos.example.dubbo.service.DemoService</code>, with version <code dir="auto">1.0.0</code> and group <code dir="auto">dev</code>, we\u2019ll demonstrate how to configure protocol transformation for this service.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> com.alibaba.nacos.example.dubbo.service;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">interface</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">DemoService</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">String </span><span style="--0:#B392F0">sayName</span><span style="--0:#E1E4E8">(String </span><span style="--0:#FFAB70">name</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package com.alibaba.nacos.example.dubbo.service;\x7F\x7Fpublic interface DemoService {\x7F    String sayName(String name);\x7F}"><div></div></button></div></figure></div>
<h2 id="forwarding-requests-to-dubbo-service-via-ingress">Forwarding Requests to Dubbo Service via Ingress</h2>
<p>Higress can integrate with Nacos or Zookeeper as service sources through <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>. Using Nacos as an example (assuming Nacos IP is 192.xxx.xx.32), apply the following resource to configure McpBridge:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">192.xxx.xx.32</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos-service-resource</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: 192.xxx.xx.32\x7F    nacosGroups:\x7F    - DEFAULT_GROUP\x7F    name: nacos-service-resource\x7F    port: 8848\x7F    type: nacos2"><div></div></button></div></figure></div>
<p>With McpBridge, we can discover Dubbo services from Nacos and create routes for them.</p>
<p>Next, create the following Ingress to set up an HTTP route to the Dubbo service:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/rpc-destination-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/dubbo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos\x7F    higress.io/rpc-destination-name: httproute-http2rpc-demo\x7F  name: httproute-http2rpc-demo-ingress\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /dubbo\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>This configuration routes requests with the <code dir="auto">/dubbo</code> prefix to our Dubbo service.</p>
<h2 id="configuring-http-to-dubbo-protocol-conversion-with-http2rpc-crd">Configuring HTTP to Dubbo Protocol Conversion with Http2Rpc CRD</h2>
<p>To enable communication between HTTP and Dubbo protocols, we need to configure the protocol conversion rules using Higress\u2019s custom Http2Rpc CRD:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dubbo</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">com.alibaba.nacos.example.dubbo.service.DemoService</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">serviceMethod</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sayName</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">headersAttach</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpMethods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/dubbo/hello"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">params</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">paramKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">p</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">QUERY</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"java.lang.String"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: Http2Rpc\x7Fmetadata:\x7F  name: httproute-http2rpc-demo\x7F  namespace: higress-system\x7Fspec:\x7F  dubbo:\x7F    service: com.alibaba.nacos.example.dubbo.service.DemoService\x7F    version: 1.0.0\x7F    group: dev\x7F    methods:\x7F    - serviceMethod: sayName\x7F      headersAttach: &#x22;*&#x22;\x7F      httpMethods:\x7F      - &#x22;GET&#x22;\x7F      httpPath: &#x22;/dubbo/hello&#x22;\x7F      params:\x7F      - paramKey: p\x7F        paramSource: QUERY\x7F        paramType: &#x22;java.lang.String&#x22;"><div></div></button></div></figure></div>
<p>This configuration maps HTTP requests to <code dir="auto">/dubbo/hello</code> to the <code dir="auto">sayName</code> method of the Dubbo service <code dir="auto">com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev</code>, with the method parameter taken from the <code dir="auto">p</code> query parameter.</p>
<h2 id="verifying-the-request">Verifying the Request</h2>
<p>After applying the configurations, you can call the Dubbo service using curl:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"localhost/dubbo/hello?p=abc"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"result"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"Service [name :demoService , port : 20880] sayName(</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">abc</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">) : Hello,abc"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl &#x22;localhost/dubbo/hello?p=abc&#x22;\x7F{&#x22;result&#x22;:&#x22;Service [name :demoService , port : 20880] sayName(\\&#x22;abc\\&#x22;) : Hello,abc&#x22;}"><div></div></button></div></figure></div>
<h2 id="using-the-entire-request-body-as-method-parameter">Using the Entire Request Body as Method Parameter</h2>
<p>Http2Rpc supports serializing the entire request body as a Dubbo method parameter:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dubbo</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">com.alibaba.nacos.example.dubbo.service.DemoService</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">serviceMethod</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sayName</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">headersAttach</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpMethods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"POST"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/dubbo/hello"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paramFromEntireBody</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"java.lang.String"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: Http2Rpc\x7Fmetadata:\x7F  name: httproute-http2rpc-demo\x7F  namespace: higress-system\x7Fspec:\x7F  dubbo:\x7F    service: com.alibaba.nacos.example.dubbo.service.DemoService\x7F    version: 1.0.0\x7F    group: dev\x7F    methods:\x7F    - serviceMethod: sayName\x7F      headersAttach: &#x22;*&#x22;\x7F      httpMethods:\x7F      - &#x22;POST&#x22;\x7F      httpPath: &#x22;/dubbo/hello&#x22;\x7F      paramFromEntireBody:\x7F        paramType: &#x22;java.lang.String&#x22;"><div></div></button></div></figure></div>
<p>The <code dir="auto">paramFromEntireBody</code> field serializes the entire request body as the Dubbo method parameter. The parameter type is specified by <code dir="auto">paramFromEntireBody.paramType</code>. This is useful when the Dubbo method has a single parameter. If both <code dir="auto">paramFromEntireBody</code> and <code dir="auto">params</code> are specified, the <code dir="auto">params</code> field is ignored.</p>
<p>Test the configuration with:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"localhost/dubbo/hello"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'"abc"'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"result"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"Service [name :demoService , port : 20880] sayName(</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">abc</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">) : Hello,abc"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl &#x22;localhost/dubbo/hello&#x22; -X POST -d &#x27;&#x22;abc&#x22;&#x27;\x7F{&#x22;result&#x22;:&#x22;Service [name :demoService , port : 20880] sayName(\\&#x22;abc\\&#x22;) : Hello,abc&#x22;}"><div></div></button></div></figure></div>
<h2 id="configuration-reference">Configuration Reference</h2>
<p>For detailed Http2Rpc configuration options, refer to <a href="../dubbo-http2rpc/" referrerpolicy="unsafe-url">HTTP to Dubbo Configuration</a>.</p>`,n={title:"Higress Dubbo Integration",keywords:["Dubbo","discovery"],description:"Integrating Dubbo Services with Higress",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/dubbo.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/dubbo.md",i=void 0,c=function(){return`
# Integrating Dubbo Services with Higress

Higress provides protocol transformation capabilities from HTTP to Dubbo, allowing users to expose Dubbo services as HTTP interfaces. This document demonstrates how to configure HTTP to Dubbo protocol conversion in Higress through an example.

## Prerequisites
1. Higress currently supports Dubbo framework version 2.x. For Dubbo 3.0, only the Dubbo protocol is supported (Triple protocol is not currently supported as it's based on gRPC and can be directly proxied without protocol conversion).

## Deploying Dubbo Services

You can use either Nacos or Zookeeper as the registry to deploy a Dubbo service. For more details, refer to:

https://dubbo.apache.org/en/overview/what/ecosystem/registry/nacos/

https://dubbo.apache.org/en/overview/what/ecosystem/registry/zookeeper/

Assuming we have deployed a Dubbo service with the following interface \`com.alibaba.nacos.example.dubbo.service.DemoService\`, with version \`1.0.0\` and group \`dev\`, we'll demonstrate how to configure protocol transformation for this service.

\`\`\`java
package com.alibaba.nacos.example.dubbo.service;

public interface DemoService {
    String sayName(String name);
}
\`\`\`

## Forwarding Requests to Dubbo Service via Ingress

Higress can integrate with Nacos or Zookeeper as service sources through [McpBridge](./mcp-bridge.md). Using Nacos as an example (assuming Nacos IP is 192.xxx.xx.32), apply the following resource to configure McpBridge:

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: 192.xxx.xx.32
    nacosGroups:
    - DEFAULT_GROUP
    name: nacos-service-resource
    port: 8848
    type: nacos2
\`\`\`

With McpBridge, we can discover Dubbo services from Nacos and create routes for them.

Next, create the following Ingress to set up an HTTP route to the Dubbo service:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos
    higress.io/rpc-destination-name: httproute-http2rpc-demo
  name: httproute-http2rpc-demo-ingress
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /dubbo
        pathType: Prefix
\`\`\`

This configuration routes requests with the \`/dubbo\` prefix to our Dubbo service.

## Configuring HTTP to Dubbo Protocol Conversion with Http2Rpc CRD

To enable communication between HTTP and Dubbo protocols, we need to configure the protocol conversion rules using Higress's custom Http2Rpc CRD:

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "GET"
      httpPath: "/dubbo/hello"
      params:
      - paramKey: p
        paramSource: QUERY
        paramType: "java.lang.String"
\`\`\`

This configuration maps HTTP requests to \`/dubbo/hello\` to the \`sayName\` method of the Dubbo service \`com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev\`, with the method parameter taken from the \`p\` query parameter.

## Verifying the Request

After applying the configurations, you can call the Dubbo service using curl:

\`\`\`bash
$ curl "localhost/dubbo/hello?p=abc" 
{"result":"Service [name :demoService , port : 20880] sayName(\\"abc\\") : Hello,abc"}
\`\`\`

## Using the Entire Request Body as Method Parameter

Http2Rpc supports serializing the entire request body as a Dubbo method parameter:

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "POST"
      httpPath: "/dubbo/hello"
      paramFromEntireBody:
        paramType: "java.lang.String"
\`\`\`

The \`paramFromEntireBody\` field serializes the entire request body as the Dubbo method parameter. The parameter type is specified by \`paramFromEntireBody.paramType\`. This is useful when the Dubbo method has a single parameter. If both \`paramFromEntireBody\` and \`params\` are specified, the \`params\` field is ignored.

Test the configuration with:

\`\`\`bash
$ curl "localhost/dubbo/hello" -X POST -d '"abc"' 
{"result":"Service [name :demoService , port : 20880] sayName(\\"abc\\") : Hello,abc"}
\`\`\`

## Configuration Reference

For detailed Http2Rpc configuration options, refer to [HTTP to Dubbo Configuration](./dubbo-http2rpc.md).`},p=function(){return s},o=function(){return[{depth:1,slug:"integrating-dubbo-services-with-higress",text:"Integrating Dubbo Services with Higress"},{depth:2,slug:"prerequisites",text:"Prerequisites"},{depth:2,slug:"deploying-dubbo-services",text:"Deploying Dubbo Services"},{depth:2,slug:"forwarding-requests-to-dubbo-service-via-ingress",text:"Forwarding Requests to Dubbo Service via Ingress"},{depth:2,slug:"configuring-http-to-dubbo-protocol-conversion-with-http2rpc-crd",text:"Configuring HTTP to Dubbo Protocol Conversion with Http2Rpc CRD"},{depth:2,slug:"verifying-the-request",text:"Verifying the Request"},{depth:2,slug:"using-the-entire-request-body-as-method-parameter",text:"Using the Entire Request Body as Method Parameter"},{depth:2,slug:"configuration-reference",text:"Configuration Reference"}]},e=d((b,m,g)=>{const{layout:f,...t}=n;return t.file=a,t.url=i,r`${v()}${E(s)}`})});export{e as Content,h as __tla,p as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,c as rawContent,i as url};
