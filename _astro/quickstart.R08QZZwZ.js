import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as y,__tla as u}from"./constant.ByWDeEHI.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,o,p,t,v=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="environment-1-using-higress-in-k8s">Environment 1: Using Higress in K8s</h2>
<h3 id="stage-1-installation">Stage 1: Installation</h3>
<h4 id="scenario-1-using-in-a-standard-k8s-cluster">Scenario 1: Using in a Standard K8s Cluster</h4>
<p><strong>Helm Installation Command</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<p><strong>All Higress Docker images use their own dedicated repository, unaffected by Docker Hub access limitations in certain regions</strong></p>
<p>Obtain the LoadBalancer IP of Higress Gateway and record it. You can access the Higress Gateway through ports 80 and 443 of this IP.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">jsonpath='{.status.loadBalancer.ingress[0].ip}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system higress-gateway -o jsonpath=&#x27;{.status.loadBalancer.ingress[0].ip}&#x27;"><div></div></button></div></figure></div>
<p><strong>Note</strong></p>
<p>If you cannot obtain the LoadBalancer IP, it means your current K8s cluster does not support LoadBalancer type Services. Consider the following solutions:</p>
<ol>
<li>Use a cloud provider\u2019s K8s service, such as <a href="https://www.aliyun.com/product/kubernetes" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud ACK</a></li>
<li>Refer to the <a href="https://higress.io/docs/latest/user/configurations" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Operations Parameter Configuration</a> and enable <code dir="auto">higress-core.gateway.hostNetwork</code> to make Higress listen on the host machine ports, then use other software/hardware load balancers to forward traffic to specific machine IPs</li>
<li>(Not recommended for production) Use the open-source load balancing solution <a href="https://metallb.universe.tf/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MetalLB</a></li>
</ol>
<h4 id="scenario-2-using-in-a-local-k8s-environment">Scenario 2: Using in a Local K8s Environment</h4>
<p>The following steps apply to all scenarios where you start a K8s cluster locally for verification. If you already have a test cluster configured locally, you can skip directly to Step 3 to install Higress.</p>
<h5 id="step-1-install-kubectl--kind">Step 1: Install kubectl &#x26; kind</h5>
<p><strong>MacOS:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Intel Macs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Apple Silicon Macs (M1/M2)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl&#x22;\x7F[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl&#x22;\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<p><strong>Using PowerShell in Windows:</strong></p>
<p>Download <a href="https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl v1.27.1</a> and <a href="https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kind v0.18.0</a>.</p>
<p>If you have <code dir="auto">curl</code> installed locally, you can execute the following commands:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">LO </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">Lo </span><span style="--0:#79B8FF">kind-windows-amd64.exe</span><span style="--0:#E1E4E8"> https:</span><span style="--0:#F97583">//</span><span style="--0:#E1E4E8">kind.sigs.k8s.io</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">dl</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">v0.</span><span style="--0:#79B8FF">18.0</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">kind</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">windows</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">amd64</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl.exe -LO &#x22;https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe&#x22;\x7Fcurl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64"><div></div></button></div></figure></div>
<blockquote>
<p>Note: To find out the latest stable version of <code dir="auto">kubectl</code> (for example, for scripting), check the content at <a href="https://dl.k8s.io/release/stable.txt" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://dl.k8s.io/release/stable.txt</a>.</p>
</blockquote>
<p>Then rename the downloaded <code dir="auto">kind-windows-amd64</code> or <code dir="auto">kind-windows-amd64.exe</code> to <code dir="auto">kind.exe</code>, and move both <code dir="auto">kubectl.exe</code> and <code dir="auto">kind.exe</code> to a path included in your <code dir="auto">PATH</code> environment variable.</p>
<p><strong>Linux:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&#x22;\x7Fcurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<h5 id="step-2-create-and-activate-kind">Step 2: Create and Activate kind</h5>
<p>First, create a cluster configuration file: <code dir="auto">cluster.conf</code></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Cluster</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kind.x-k8s.io/v1alpha4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># networking:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># WARNING: It is _strongly_ recommended that you keep this the default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># (127.0.0.1) for security reasons. However it is possible to change this.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># apiServerAddress: "0.0.0.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># By default the API server listens on a random open port.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># You may choose a specific port but probably don't need to in most cases.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Using a random port makes it easier to spin up multiple clusters.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># apiServerPort: 6443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">control-plane</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kubeadmConfigPatches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">kind: InitConfiguration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">nodeRegistration:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">kubeletExtraArgs:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">node-labels: "ingress-ready=true"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">extraPortMappings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# cluster.conf\x7Fkind: Cluster\x7FapiVersion: kind.x-k8s.io/v1alpha4\x7F# networking:\x7F  # WARNING: It is _strongly_ recommended that you keep this the default\x7F  # (127.0.0.1) for security reasons. However it is possible to change this.\x7F  # apiServerAddress: &#x22;0.0.0.0&#x22;\x7F  # By default the API server listens on a random open port.\x7F  # You may choose a specific port but probably don&#x27;t need to in most cases.\x7F  # Using a random port makes it easier to spin up multiple clusters.\x7F  # apiServerPort: 6443\x7Fnodes:\x7F- role: control-plane\x7F  kubeadmConfigPatches:\x7F  - |\x7F    kind: InitConfiguration\x7F    nodeRegistration:\x7F      kubeletExtraArgs:\x7F        node-labels: &#x22;ingress-ready=true&#x22;\x7F  extraPortMappings:\x7F  - containerPort: 80\x7F    hostPort: 80\x7F    protocol: TCP\x7F  - containerPort: 443\x7F    hostPort: 443\x7F    protocol: TCP"><div></div></button></div></figure></div>
<p>For Mac &#x26; Linux systems, execute:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
<p>For Windows systems, execute:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind.exe create cluster --name higress --config=cluster.conf\x7Fkubectl.exe config use-context kind-higress"><div></div></button></div></figure></div>
<p><strong>Note</strong></p>
<p>The above configuration is to use the local (127.0.0.1) ports 80 and 443 for Higress access.</p>
<h5 id="step-3-install-higress">Step 3: Install Higress</h5>
<p>Local installation flag: <code dir="auto">--set global.local=true</code></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false"><div></div></button></div></figure></div>
<blockquote>
<p>If you want to enable the built-in observability suite, please refer to the <a href="../../ops/deploy-by-helm/" referrerpolicy="unsafe-url">Deployment</a> documentation.</p>
</blockquote>
<p>After installation, you can access the Higress Gateway in the local cluster through local ports 80 and 443.</p>
<p>Note: If you are using an existing local K8s cluster, you may need to execute the command below to map the ports from the K8s cluster, and then try accessing the local ports.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
<h3 id="stage-2-configuration">Stage 2: Configuration</h3>
<p>Assume that a service named foo has already been deployed in the default namespace, and we want to create a route corresponding to <a href="http://foo.bar.com/foo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://foo.bar.com/foo</a> pointing to this service.</p>
<p>If needed, you can use the YAML below to create the corresponding test service.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"-text=foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default port used by the image</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind: Pod\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F---\x7Fkind: Service\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  # Default port used by the image\x7F  - port: 5678"><div></div></button></div></figure></div>
<h4 id="method-1-configure-using-higress-console">Method 1: Configure Using Higress Console</h4>
<p>Use <a href="https://higress.io/en/docs/ops/hgctl" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">hgctl</a> to open the console:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl dashboard console"><div></div></button></div></figure></div>
<p>You need to initialize the administrator account on your first visit.</p>
<p><img src="/img/user/quickstart/en-us/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>After initialization, the interface will automatically redirect to the login page. Please use the username and password you just set to log in to the Higress Console.</p>
<p><img src="/img/user/quickstart/en-us/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click on \u201CDomain Management\u201D in the navigation bar on the left, then click the \u201CCreate Domain\u201D button on the right side of the page. Fill in the form according to the image below and click the \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click on \u201CRoute Management\u201D in the navigation bar on the left, then click the \u201CCreate Route\u201D button on the right side of the page. Fill in the form according to the image below and click the \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/route_management.png" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="method-2-configure-using-ingress-crd">Method 2: Configure Using Ingress CRD</h4>
<p>Use the YAML below to create the route configuration we need.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - pathType: Prefix\x7F        path: &#x22;/foo&#x22;\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678"><div></div></button></div></figure></div>
<h3 id="stage-3-request-validation">Stage 3: Request Validation</h3>
<p>Execute the following command to verify that the test route works properly:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output "foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://GatewayIP/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://GatewayIP/foo -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
<h2 id="environment-2-using-without-k8s">Environment 2: Using Without K8s</h2>
<h3 id="stage-1-installation-1">Stage 1: Installation</h3>
<p>If you are deploying in the cloud, the Enterprise Edition (no K8s required) is recommended for production environments. For development and testing, you can use the one-click deployment of the Community Edition below:</p>
<p><a href="https://computenest.console.aliyun.com/service/instance/create/default?type=user&#x26;ServiceName=Higress%E7%A4%BE%E5%8C%BA%E7%89%88" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><img src="https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg" alt="Deploy on AlibabaCloud ComputeNest" referrerpolicy="no-referrer"></a></p>
<p>For local development, you can use a minimalist deployment method, using local files for configuration storage:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Create a working directory</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mkdir</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">; </span><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Start higress, configuration files will be written to the working directory</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> \${PWD}</span><span style="--0:#9ECBFF">:/data</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8001:8001</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8080:8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8443:8443</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mkdir higress; cd higress\x7Fdocker run -d --rm --name higress-ai -v \${PWD}:/data \\\x7F        -p 8001:8001 -p 8080:8080 -p 8443:8443  \\\x7F        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest"><div></div></button></div></figure></div>
<p>The listening ports are explained as follows:</p>
<ul>
<li>Port 8001: Higress UI console entry</li>
<li>Port 8080: Gateway HTTP protocol entry</li>
<li>Port 8443: Gateway HTTPS protocol entry</li>
</ul>
<p>Alternatively, you can use the following method to connect to Nacos for configuration storage:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-c</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nacos://192.168.0.1:8848</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-username=nacos</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-password=nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos"><div></div></button></div></figure></div>
<p>Please replace <code dir="auto">192.168.0.1</code> with the actual IP of the Nacos server (if Nacos is deployed locally, do not use loopback addresses like <code dir="auto">localhost</code> or <code dir="auto">127.0.0.1</code>), and adjust the values of <code dir="auto">--nacos-username</code> and <code dir="auto">--nacos-password</code> as needed. If the Nacos service has not enabled authentication, you can remove these two parameters.</p>
<h3 id="stage-2-configuration-1">Stage 2: Configuration</h3>
<p>Access the Higress Console. You need to initialize the administrator account on your first visit.
<img src="/img/user/quickstart/en-us/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>After initialization, the interface will automatically redirect to the login page. Please use the username and password you just set to log in to the Higress Console.</p>
<p><img src="/img/user/quickstart/en-us/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click on \u201CService Sources\u201D in the navigation bar on the left, then click the \u201CCreate Service Source\u201D button on the right side of the page. Fill in the form according to the image below and click the \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/service_source_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click on \u201CDomain Management\u201D in the navigation bar on the left, then click the \u201CCreate Domain\u201D button on the right side of the page. Fill in the form according to the image below and click the \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click on \u201CRoute Management\u201D in the navigation bar on the left, then click the \u201CCreate Route\u201D button on the right side of the page. Fill in the form according to the image below and click the \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/route_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="stage-3-request-validation-1">Stage 3: Request Validation</h3>
<p>Execute the following command to verify that the test route works properly:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output a JSON object containing request data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/get?foo=bar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/get?foo=bar -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>`,n={title:"Quick Start",keywords:["Higress"],description:"Higress Quick Start.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/quickstart.md",toc_max_heading_level:4},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/quickstart.md",t=void 0,p=function(){return`
# Quick Start

## Environment 1: Using Higress in K8s

### Stage 1: Installation

#### Scenario 1: Using in a Standard K8s Cluster

**Helm Installation Command**

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

**All Higress Docker images use their own dedicated repository, unaffected by Docker Hub access limitations in certain regions**

Obtain the LoadBalancer IP of Higress Gateway and record it. You can access the Higress Gateway through ports 80 and 443 of this IP.
\`\`\`bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
\`\`\`

**Note**

If you cannot obtain the LoadBalancer IP, it means your current K8s cluster does not support LoadBalancer type Services. Consider the following solutions:

1. Use a cloud provider's K8s service, such as [Alibaba Cloud ACK](https://www.aliyun.com/product/kubernetes)
2. Refer to the [Operations Parameter Configuration](https://higress.io/docs/latest/user/configurations) and enable \`higress-core.gateway.hostNetwork\` to make Higress listen on the host machine ports, then use other software/hardware load balancers to forward traffic to specific machine IPs
3. (Not recommended for production) Use the open-source load balancing solution [MetalLB](https://metallb.universe.tf/)

#### Scenario 2: Using in a Local K8s Environment

The following steps apply to all scenarios where you start a K8s cluster locally for verification. If you already have a test cluster configured locally, you can skip directly to Step 3 to install Higress.

##### Step 1: Install kubectl & kind

**MacOS:**
\`\`\`bash
# for Intel Macs
[ $(uname -m) = x86_64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
# for Apple Silicon Macs (M1/M2)
[ $(uname -m) = arm64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

**Using PowerShell in Windows:**

Download [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) and [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64).

If you have \`curl\` installed locally, you can execute the following commands:
\`\`\`powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
\`\`\`
> Note: To find out the latest stable version of \`kubectl\` (for example, for scripting), check the content at https://dl.k8s.io/release/stable.txt.

Then rename the downloaded \`kind-windows-amd64\` or \`kind-windows-amd64.exe\` to \`kind.exe\`, and move both \`kubectl.exe\` and \`kind.exe\` to a path included in your \`PATH\` environment variable.

**Linux:**

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

##### Step 2: Create and Activate kind

First, create a cluster configuration file: \`cluster.conf\`

\`\`\`yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
# networking:
  # WARNING: It is _strongly_ recommended that you keep this the default
  # (127.0.0.1) for security reasons. However it is possible to change this.
  # apiServerAddress: "0.0.0.0"
  # By default the API server listens on a random open port.
  # You may choose a specific port but probably don't need to in most cases.
  # Using a random port makes it easier to spin up multiple clusters.
  # apiServerPort: 6443
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
\`\`\`
For Mac & Linux systems, execute:
\`\`\`bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
\`\`\`
For Windows systems, execute:
\`\`\`bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
\`\`\`

**Note**

The above configuration is to use the local (127.0.0.1) ports 80 and 443 for Higress access.

##### Step 3: Install Higress

Local installation flag: \`--set global.local=true\`

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
\`\`\`

> If you want to enable the built-in observability suite, please refer to the [Deployment](../ops/deploy-by-helm.md) documentation.

After installation, you can access the Higress Gateway in the local cluster through local ports 80 and 443.

Note: If you are using an existing local K8s cluster, you may need to execute the command below to map the ports from the K8s cluster, and then try accessing the local ports.

\`\`\`bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
\`\`\`

### Stage 2: Configuration

Assume that a service named foo has already been deployed in the default namespace, and we want to create a route corresponding to http://foo.bar.com/foo pointing to this service.

If needed, you can use the YAML below to create the corresponding test service.
\`\`\`yaml
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"
---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678
\`\`\`

#### Method 1: Configure Using Higress Console

Use [hgctl](https://higress.io/en/docs/ops/hgctl) to open the console:

\`\`\`bash
hgctl dashboard console
\`\`\`

You need to initialize the administrator account on your first visit.

![image](/img/user/quickstart/en-us/init.png)

After initialization, the interface will automatically redirect to the login page. Please use the username and password you just set to log in to the Higress Console.

![image](/img/user/quickstart/en-us/login.png)

Click on "Domain Management" in the navigation bar on the left, then click the "Create Domain" button on the right side of the page. Fill in the form according to the image below and click the "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click on "Route Management" in the navigation bar on the left, then click the "Create Route" button on the right side of the page. Fill in the form according to the image below and click the "Confirm" button.

![image](/img/user/quickstart/en-us/route_management.png)

#### Method 2: Configure Using Ingress CRD

Use the YAML below to create the route configuration we need.
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - pathType: Prefix
        path: "/foo"
        backend:
          service:
            name: foo-service
            port:
              number: 5678
\`\`\`

### Stage 3: Request Validation

Execute the following command to verify that the test route works properly:

\`\`\`bash
# should output "foo"
curl http://GatewayIP/foo -H 'host: foo.bar.com'
\`\`\`


## Environment 2: Using Without K8s

### Stage 1: Installation

If you are deploying in the cloud, the Enterprise Edition (no K8s required) is recommended for production environments. For development and testing, you can use the one-click deployment of the Community Edition below:

[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress\u793E\u533A\u7248)

For local development, you can use a minimalist deployment method, using local files for configuration storage:

\`\`\`bash
# Create a working directory
mkdir higress; cd higress
# Start higress, configuration files will be written to the working directory
docker run -d --rm --name higress-ai -v \${PWD}:/data \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest

\`\`\`
The listening ports are explained as follows:

- Port 8001: Higress UI console entry
- Port 8080: Gateway HTTP protocol entry
- Port 8443: Gateway HTTPS protocol entry

Alternatively, you can use the following method to connect to Nacos for configuration storage:

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
\`\`\`

Please replace \`192.168.0.1\` with the actual IP of the Nacos server (if Nacos is deployed locally, do not use loopback addresses like \`localhost\` or \`127.0.0.1\`), and adjust the values of \`--nacos-username\` and \`--nacos-password\` as needed. If the Nacos service has not enabled authentication, you can remove these two parameters.


### Stage 2: Configuration

Access the Higress Console. You need to initialize the administrator account on your first visit.
![image](/img/user/quickstart/en-us/init.png)

After initialization, the interface will automatically redirect to the login page. Please use the username and password you just set to log in to the Higress Console.

![image](/img/user/quickstart/en-us/login.png)

Click on "Service Sources" in the navigation bar on the left, then click the "Create Service Source" button on the right side of the page. Fill in the form according to the image below and click the "Confirm" button.

![image](/img/user/quickstart/en-us/service_source_management_standalone.png)

Click on "Domain Management" in the navigation bar on the left, then click the "Create Domain" button on the right side of the page. Fill in the form according to the image below and click the "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click on "Route Management" in the navigation bar on the left, then click the "Create Route" button on the right side of the page. Fill in the form according to the image below and click the "Confirm" button.

![image](/img/user/quickstart/en-us/route_management_standalone.png)

### Stage 3: Request Validation

Execute the following command to verify that the test route works properly:

\`\`\`bash
# should output a JSON object containing request data
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
\`\`\`
`},l=function(){return s},o=function(){return[{depth:2,slug:"environment-1-using-higress-in-k8s",text:"Environment 1: Using Higress in K8s"},{depth:3,slug:"stage-1-installation",text:"Stage 1: Installation"},{depth:4,slug:"scenario-1-using-in-a-standard-k8s-cluster",text:"Scenario 1: Using in a Standard K8s Cluster"},{depth:4,slug:"scenario-2-using-in-a-local-k8s-environment",text:"Scenario 2: Using in a Local K8s Environment"},{depth:5,slug:"step-1-install-kubectl--kind",text:"Step 1: Install kubectl & kind"},{depth:5,slug:"step-2-create-and-activate-kind",text:"Step 2: Create and Activate kind"},{depth:5,slug:"step-3-install-higress",text:"Step 3: Install Higress"},{depth:3,slug:"stage-2-configuration",text:"Stage 2: Configuration"},{depth:4,slug:"method-1-configure-using-higress-console",text:"Method 1: Configure Using Higress Console"},{depth:4,slug:"method-2-configure-using-ingress-crd",text:"Method 2: Configure Using Ingress CRD"},{depth:3,slug:"stage-3-request-validation",text:"Stage 3: Request Validation"},{depth:2,slug:"environment-2-using-without-k8s",text:"Environment 2: Using Without K8s"},{depth:3,slug:"stage-1-installation-1",text:"Stage 1: Installation"},{depth:3,slug:"stage-2-configuration-1",text:"Stage 2: Configuration"},{depth:3,slug:"stage-3-request-validation-1",text:"Stage 3: Request Validation"}]},e=c((g,m,f)=>{const{layout:F,...i}=n;return i.file=a,i.url=t,r`${E()}${y(s)}`})});export{e as Content,v as __tla,l as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,p as rawContent,t as url};
