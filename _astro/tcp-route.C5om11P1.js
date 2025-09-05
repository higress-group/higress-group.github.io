import{c as o,__tla as d}from"./astro-component.B3fYMMDi.js";import{r,m as y,u as E,__tla as v}from"./constant.Cgp6cJPa.js";import{__tla as g}from"./astro/assets-service.DmDXK_Mj.js";let e,p,a,t,l,c,n,h=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="prerequisites">Prerequisites</h2>
<ol>
<li>Higress is installed in the higress-system namespace in K8s, with the gateway\u2019s Service name being higress-gateway;</li>
<li>The goal is to configure a layer-4 route for the tcp-echo service in the default namespace, with the service listening on port 9000 and the gateway also listening on port 9000;</li>
<li>The route is configured using Gateway API CRD, which requires Higress to be configured to support Gateway API in advance. Reference documentation: <a href="../../../ops/deploy-by-helm/#supporting-gateway-api-crdoptional" referrerpolicy="unsafe-url">Document</a></li>
</ol>
<h2 id="configuration-steps">Configuration Steps</h2>
<h3 id="1-create-gatewayclass">1. Create GatewayClass</h3>
<ol>
<li>Create a <code dir="auto">gatewayclass.yaml</code> file with the following content:
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GatewayClass</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">controllerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress.io/gateway-controller"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: GatewayClass\x7Fmetadata:\x7F  name: higress-gateway\x7Fspec:\x7F  controllerName: &#x22;higress.io/gateway-controller&#x22;"><div></div></button></div></figure></div>
</li>
<li>Execute the command to apply the configuration to the K8s cluster:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gatewayclass.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gatewayclass.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="2-create-gateway">2. Create Gateway</h3>
<ol>
<li>Create a <code dir="auto">gateway.yaml</code> file with the following content:
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gatewayClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default-tcp</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowedRoutes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespaces</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">from</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">All</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">kinds</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: Gateway\x7Fmetadata:\x7F  name: higress-gateway\x7F  namespace: higress-system\x7Fspec:\x7F  gatewayClassName: higress-gateway\x7F  listeners:\x7F  - name: default-tcp\x7F    protocol: TCP\x7F    port: 9000\x7F    allowedRoutes:\x7F      namespaces:\x7F        from: All\x7F      kinds:\x7F      - kind: TCPRoute"><div></div></button></div></figure></div>
</li>
<li>Execute the command to apply the configuration to the K8s cluster:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gateway.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="3-modify-the-higress-gateway-service">3. Modify the <code dir="auto">higress-gateway</code> Service</h3>
<ol>
<li>Execute the command to enter the edit state of the <code dir="auto">higress-gateway</code> Service:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit service higress-gateway -n higress-system"><div></div></button></div></figure></div>
</li>
<li>Add a description for port <code dir="auto">9000</code> to the <code dir="auto">spec.ports</code> list. The configuration after the addition should look like this:
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># --- Configuration added here ---</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># -----------------------------</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="...\x7F  ports:\x7F  - name: http2\x7F    port: 80\x7F    protocol: TCP\x7F    targetPort: 80\x7F  - name: https\x7F    port: 443\x7F    protocol: TCP\x7F    targetPort: 443\x7F  # --- Configuration added here ---\x7F  - name: tcp\x7F    port: 9000\x7F    protocol: TCP\x7F    targetPort: 9000\x7F  # -----------------------------\x7F..."><div></div></button></div></figure></div>
</li>
<li>Save the edits and exit the editor.</li>
</ol>
<h3 id="4-create-tcproute">4. Create TCPRoute</h3>
<ol>
<li>Create a <code dir="auto">tcproute.yaml</code> file with the following content:
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1alpha2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">parentRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backendRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1alpha2\x7Fkind: TCPRoute\x7Fmetadata:\x7F  name: tcp-echo\x7F  namespace: default\x7Fspec:\x7F  parentRefs:\x7F  - name: higress-gateway\x7F    namespace: higress-system\x7F    port: 9000\x7F  rules:\x7F  - backendRefs:\x7F    - name: tcp-echo\x7F      port: 9000"><div></div></button></div></figure></div>
</li>
<li>Execute the command to apply the configuration to the K8s cluster:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tcproute.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f tcproute.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="5-configuration-verification">5. Configuration Verification</h3>
<p>Configuration complete. We can verify whether the route is working properly by using telnet to connect to port 9000 of the higress-gateway service or by other means.</p>`,t={title:"Configure a TCP Layer-4 Route",keywords:["ops","config","route","tcp"],description:"Introduce how to configure a TCP layer-4 route",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/tcp-route.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/tcp-route.md",n=void 0,c=function(){return`
# Configure a TCP Layer-4 Route

## Prerequisites

1. Higress is installed in the higress-system namespace in K8s, with the gateway's Service name being higress-gateway;
2. The goal is to configure a layer-4 route for the tcp-echo service in the default namespace, with the service listening on port 9000 and the gateway also listening on port 9000;
3. The route is configured using Gateway API CRD, which requires Higress to be configured to support Gateway API in advance. Reference documentation: [Document](../../ops/deploy-by-helm.md#supporting-gateway-api-crdoptional)

## Configuration Steps

### 1. Create GatewayClass

1. Create a \`gatewayclass.yaml\` file with the following content:
    \`\`\`yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: GatewayClass
    metadata:
      name: higress-gateway
    spec:
      controllerName: "higress.io/gateway-controller"
    \`\`\`
2. Execute the command to apply the configuration to the K8s cluster:
    \`\`\`bash
    kubectl apply -f gatewayclass.yaml
    \`\`\`

### 2. Create Gateway

1. Create a \`gateway.yaml\` file with the following content:
    \`\`\`yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: Gateway
    metadata:
      name: higress-gateway
      namespace: higress-system
    spec:
      gatewayClassName: higress-gateway
      listeners:
      - name: default-tcp
        protocol: TCP
        port: 9000
        allowedRoutes:
          namespaces:
            from: All
          kinds:
          - kind: TCPRoute
    \`\`\`
2. Execute the command to apply the configuration to the K8s cluster:
    \`\`\`bash
    kubectl apply -f gateway.yaml
    \`\`\`

### 3. Modify the \`higress-gateway\` Service

1. Execute the command to enter the edit state of the \`higress-gateway\` Service:
    \`\`\`bash
    kubectl edit service higress-gateway -n higress-system
    \`\`\`
2. Add a description for port \`9000\` to the \`spec.ports\` list. The configuration after the addition should look like this:
    \`\`\`yaml
    ...
      ports:
      - name: http2
        port: 80
        protocol: TCP
        targetPort: 80
      - name: https
        port: 443
        protocol: TCP
        targetPort: 443
      # --- Configuration added here ---
      - name: tcp
        port: 9000
        protocol: TCP
        targetPort: 9000
      # -----------------------------
    ...
    \`\`\`
3. Save the edits and exit the editor.

### 4. Create TCPRoute

1. Create a \`tcproute.yaml\` file with the following content:
    \`\`\`yaml
    apiVersion: gateway.networking.k8s.io/v1alpha2
    kind: TCPRoute
    metadata:
      name: tcp-echo
      namespace: default
    spec:
      parentRefs:
      - name: higress-gateway
        namespace: higress-system
        port: 9000
      rules:
      - backendRefs:
        - name: tcp-echo
          port: 9000
    \`\`\`
2. Execute the command to apply the configuration to the K8s cluster:
    \`\`\`bash
    kubectl apply -f tcproute.yaml
    \`\`\`

### 5. Configuration Verification

Configuration complete. We can verify whether the route is working properly by using telnet to connect to port 9000 of the higress-gateway service or by other means.`},p=function(){return s},l=function(){return[{depth:2,slug:"prerequisites",text:"Prerequisites"},{depth:2,slug:"configuration-steps",text:"Configuration Steps"},{depth:3,slug:"1-create-gatewayclass",text:"1. Create GatewayClass"},{depth:3,slug:"2-create-gateway",text:"2. Create Gateway"},{depth:3,slug:"3-modify-the-higress-gateway-service",text:"3. Modify the higress-gateway Service"},{depth:3,slug:"4-create-tcproute",text:"4. Create TCPRoute"},{depth:3,slug:"5-configuration-verification",text:"5. Configuration Verification"}]},e=o((f,u,m)=>{const{layout:w,...i}=t;return i.file=a,i.url=n,r`${y()}${E(s)}`})});export{e as Content,h as __tla,p as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,c as rawContent,n as url};
