import{c,__tla as d}from"./astro-component.fC12J6m8.js";import{r,m as E,u as y,__tla as u}from"./constant.Bw1hgsrb.js";import{__tla as v}from"./astro/assets-service.CogLqxaq.js";let e,l,a,n,p,o,t,g=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="environment-1-use-in-k8s">Environment 1: Use in K8s</h2>
<h3 id="stage-1-installation">Stage 1: Installation</h3>
<h4 id="scenario-1-use-in-a-standard-k8s-cluster">Scenario 1: Use in a Standard K8s Cluster</h4>
<p><strong>Helm Installation Command</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<p>Obtain the LoadBalancer IP of Higress Gateway and write it down. You can use it and port 80 and 443 to access Higress Gateway.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">jsonpath='{.status.loadBalancer.ingress[0].ip}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system higress-gateway -o jsonpath=&#x27;{.status.loadBalancer.ingress[0].ip}&#x27;"><div></div></button></div></figure></div>
<h4 id="scenario-2-use-in-local-environment">Scenario 2: Use in Local Environment</h4>
<p>The following groups can be applied to all local K8s clusters. If there is already a test cluster running on your PC, you can go to Step 3 directly and install Higress.</p>
<h5 id="step-1-install-kubectl--kind">Step 1: Install kubectl &#x26; kind</h5>
<p><strong>MacOS:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Intel Macs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Apple Silicon Macs (M1/M2)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl&#x22;\x7F[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl&#x22;\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<p><strong>Use PowerShell in Windows:</strong></p>
<p>Download <a href="https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl v1.27.1</a> and <a href="https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kind v0.18.0</a>.</p>
<p>Or if you have <code dir="auto">curl</code> installed, use the following commands:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">LO </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">Lo </span><span style="--0:#79B8FF">kind-windows-amd64.exe</span><span style="--0:#E1E4E8"> https:</span><span style="--0:#F97583">//</span><span style="--0:#E1E4E8">kind.sigs.k8s.io</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">dl</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">v0.</span><span style="--0:#79B8FF">18.0</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">kind</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">windows</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">amd64</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl.exe -LO &#x22;https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe&#x22;\x7Fcurl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64"><div></div></button></div></figure></div>
<blockquote>
<p>Note: To find out the latest stable version of <code dir="auto">kubectl</code> (for example, for scripting), take a look at <a href="https://dl.k8s.io/release/stable.txt" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://dl.k8s.io/release/stable.txt</a>.</p>
</blockquote>
<p>Then rename downloaded <code dir="auto">kind-windows-amd64</code> or <code dir="auto">kind-windows-amd64.exe</code> to <code dir="auto">kind.exe</code>. And move both exe files to a file location on your system PATH.</p>
<p><strong>Linux:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&#x22;\x7Fcurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<h5 id="step-2-create-and-activate-kind">Step 2: Create and Activate kind</h5>
<p>First, create a cluster config file: <code dir="auto">cluster.conf</code></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Cluster</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kind.x-k8s.io/v1alpha4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">control-plane</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kubeadmConfigPatches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">kind: InitConfiguration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">nodeRegistration:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">kubeletExtraArgs:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">node-labels: "ingress-ready=true"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">extraPortMappings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# cluster.conf\x7Fkind: Cluster\x7FapiVersion: kind.x-k8s.io/v1alpha4\x7Fnodes:\x7F- role: control-plane\x7F  kubeadmConfigPatches:\x7F  - |\x7F    kind: InitConfiguration\x7F    nodeRegistration:\x7F      kubeletExtraArgs:\x7F        node-labels: &#x22;ingress-ready=true&#x22;\x7F  extraPortMappings:\x7F  - containerPort: 80\x7F    hostPort: 80\x7F    protocol: TCP\x7F  - containerPort: 443\x7F    hostPort: 443\x7F    protocol: TCP"><div></div></button></div></figure></div>
<p>Commands for Mac &#x26; Linux:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
<p>Commands for Windows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind.exe create cluster --name higress --config=cluster.conf\x7Fkubectl.exe config use-context kind-higress"><div></div></button></div></figure></div>
<p><strong>Note</strong></p>
<p>currently, the namespace <code dir="auto">higress-system</code> has a svc which type is <code dir="auto">LoadBalancer</code>, it can not get IP in cluster by default.
we can use official support to enable this function,please refer to <code dir="auto">https://kind.sigs.k8s.io/docs/user/loadbalancer/</code></p>
<h5 id="step-3-install-higress">Step 3: Install Higress</h5>
<p>when you install <code dir="auto">higress</code> in local environment, you should use <code dir="auto">--set global.local=true</code>.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false"><div></div></button></div></figure></div>
<blockquote>
<p>If you\u2019d like to enable the built-in o11y suite, please refer to the <a href="../../ops/deploy-by-helm" referrerpolicy="unsafe-url">Deploy by Helm</a> document.</p>
</blockquote>
<p>After installation, you can access Higress Gateway in the local cluster via port 80 and 443.</p>
<p>Note: If you are using a pre-existed local K8s cluster, you may need to use the command below to forward ports out of the cluster, and try the local ports later.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
<h3 id="stage-2-configuration">Stage 2: Configuration</h3>
<p>Assuming that there is already a service named \u201Cfoo\u201D deployed in the default namespace, we\u2019d like to create a route, forwarding <a href="http://foo.bar.com/foo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://foo.bar.com/foo</a> requests to this service.</p>
<p>You can use the following YAML to create this test service if needed.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"-text=foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default port used by the image</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind: Pod\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F---\x7Fkind: Service\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  # Default port used by the image\x7F  - port: 5678"><div></div></button></div></figure></div>
<h4 id="method-1-use-higress-console">Method 1: Use Higress Console</h4>
<p>Use <a href="https://higress.cn/en/docs/latest/ops/hgctl/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">hgctl</a> to open Higress Console.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl dashboard console"><div></div></button></div></figure></div>
<p>For the first time, you will need to configure the admin credentials.</p>
<p><img src="/img/user/quickstart/en-us/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>After configuration, log into Higress Console using the credential just configured.</p>
<p><img src="/img/user/quickstart/en-us/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click \u201CDomain Management\u201D on the navigation bar left. Click \u201CCreate Domain\u201D button. Then fill the form according to the image below and click \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click \u201CRoute Management\u201D on the navigation bar left. Click \u201CCreate Route\u201D button. Then fill the form according to the image below and click \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/route_management.png" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="method-2-use-ingress-crd">Method 2: Use Ingress CRD</h4>
<p>Use the YAML below to create the test route we need.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - pathType: Prefix\x7F        path: &#x22;/foo&#x22;\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678"><div></div></button></div></figure></div>
<h3 id="stage-3-validate">Stage 3: Validate</h3>
<p>Use the following command to check whether the test route works properly:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output "foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://GatewayIP/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: foo.bar.com"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://GatewayIP/foo -H &#x22;Host: foo.bar.com&#x22;"><div></div></button></div></figure></div>
<h2 id="environment-2-use-in-docker-compose-without-k8s">Environment 2: Use in Docker Compose without K8s</h2>
<h3 id="stage-1-installation-1">Stage 1: Installation</h3>
<p><strong>Installation Command 1: Use a separated-deployed Nacos service</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-c</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nacos://192.168.0.1:8848</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-username=nacos</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-password=nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos"><div></div></button></div></figure></div>
<p>Please replace <code dir="auto">192.168.0.1</code> with the actual IP address of Nacos service (if Nacos is deployed locally, please use a non-loopback address such as <code dir="auto">localhost</code> or <code dir="auto">127.0.0.1</code>), and update the value of <code dir="auto">--nacos-username</code> and <code dir="auto">--nacos-password</code> based on actual configurations. If authentication isn\u2019t enabled in Nacos, you can remove these two arguments.</p>
<p><strong>Installation Command 2: Use the Higress Built-In Nacos</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--use-builtin-nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a --use-builtin-nacos"><div></div></button></div></figure></div>
<p>Note: On Windows, you can use Unix-like shells such as Cygwin, Git Bash to execute the command above.</p>
<p><strong>One-click deployment\uFF1A</strong>
We provide a one-click deployment to Alibaba Cloud solution, more convenient operation</p>
<p><a href="https://computenest.console.aliyun.com/service/instance/create/default?type=user&#x26;ServiceName=Higress%E7%A4%BE%E5%8C%BA%E7%89%88" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><img src="https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest-en.svg" alt="Deploy on AlibabaCloud ComputeNest" referrerpolicy="no-referrer"></a></p>
<h3 id="stage-2-configuration-1">Stage 2: Configuration</h3>
<p>Open <code dir="auto">http://127.0.0.1:8080</code> in browser. For the first time, you will need to configure the admin credentials.</p>
<p><img src="/img/user/quickstart/en-us/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>After configuration, log into Higress Console using the credential just configured.</p>
<p><img src="/img/user/quickstart/en-us/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click \u201CService Sources\u201D on the navigation bar left. Click \u201CCreate Service Source\u201D button. Then fill the form according to the image below and click \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/service_source_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click \u201CDomain Management\u201D on the navigation bar left. Click \u201CCreate Domain\u201D button. Then fill the form according to the image below and click \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Click \u201CRoute Management\u201D on the navigation bar left. Click \u201CCreate Route\u201D button. Then fill the form according to the image below and click \u201CConfirm\u201D button.</p>
<p><img src="/img/user/quickstart/en-us/route_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="stage-3-validate-1">Stage 3: Validate</h3>
<p>Use the following command to check whether the test route works properly:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output a JSON object containing request data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/get?foo=bar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/get?foo=bar -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>`,n={title:"Quick Start",keywords:["Higress"],description:"Quick Start.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md",toc_max_heading_level:4},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/quickstart.md",t=void 0,o=function(){return`
# Quick Start

## Environment 1: Use in K8s

### Stage 1: Installation

#### Scenario 1: Use in a Standard K8s Cluster

**Helm Installation Command**

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

Obtain the LoadBalancer IP of Higress Gateway and write it down. You can use it and port 80 and 443 to access Higress Gateway.
\`\`\`bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
\`\`\`

#### Scenario 2: Use in Local Environment

The following groups can be applied to all local K8s clusters. If there is already a test cluster running on your PC, you can go to Step 3 directly and install Higress.

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

**Use PowerShell in Windows:**

Download [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) and [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64).

Or if you have \`curl\` installed, use the following commands:
\`\`\`powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
\`\`\`
> Note: To find out the latest stable version of \`kubectl\` (for example, for scripting), take a look at https://dl.k8s.io/release/stable.txt.

Then rename downloaded \`kind-windows-amd64\` or \`kind-windows-amd64.exe\` to \`kind.exe\`. And move both exe files to a file location on your system PATH.

**Linux:**

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

##### Step 2: Create and Activate kind

First, create a cluster config file: \`cluster.conf\`

\`\`\`yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
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
Commands for Mac & Linux:
\`\`\`bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
\`\`\`
Commands for Windows:
\`\`\`bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
\`\`\`

**Note**

currently, the namespace \`higress-system\` has a svc which type is \`LoadBalancer\`, it can not get IP in cluster by default.
we can use official support to enable this function,please refer to \`https://kind.sigs.k8s.io/docs/user/loadbalancer/\`


##### Step 3: Install Higress
when you install \`higress\` in local environment, you should use \`--set global.local=true\`.

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
\`\`\`

> If you'd like to enable the built-in o11y suite, please refer to the [Deploy by Helm](../ops/deploy-by-helm) document.

After installation, you can access Higress Gateway in the local cluster via port 80 and 443.

Note: If you are using a pre-existed local K8s cluster, you may need to use the command below to forward ports out of the cluster, and try the local ports later.

\`\`\`bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
\`\`\`

### Stage 2: Configuration

Assuming that there is already a service named "foo" deployed in the default namespace, we'd like to create a route, forwarding http://foo.bar.com/foo requests to this service.

You can use the following YAML to create this test service if needed.
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

#### Method 1: Use Higress Console

Use [hgctl](https://higress.cn/en/docs/latest/ops/hgctl/) to open Higress Console.

\`\`\`bash
hgctl dashboard console
\`\`\`

For the first time, you will need to configure the admin credentials.

![image](/img/user/quickstart/en-us/init.png)

After configuration, log into Higress Console using the credential just configured.

![image](/img/user/quickstart/en-us/login.png)

Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/route_management.png)

#### Method 2: Use Ingress CRD

Use the YAML below to create the test route we need.
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

### Stage 3: Validate

Use the following command to check whether the test route works properly:

\`\`\`bash
# should output "foo"
curl http://GatewayIP/foo -H "Host: foo.bar.com"
\`\`\`

## Environment 2: Use in Docker Compose without K8s

### Stage 1: Installation

**Installation Command 1: Use a separated-deployed Nacos service**

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
\`\`\`

Please replace \`192.168.0.1\` with the actual IP address of Nacos service (if Nacos is deployed locally, please use a non-loopback address such as \`localhost\` or \`127.0.0.1\`), and update the value of \`--nacos-username\` and \`--nacos-password\` based on actual configurations. If authentication isn't enabled in Nacos, you can remove these two arguments.

**Installation Command 2: Use the Higress Built-In Nacos**

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a --use-builtin-nacos
\`\`\`

Note: On Windows, you can use Unix-like shells such as Cygwin, Git Bash to execute the command above.

**One-click deployment\uFF1A**
We provide a one-click deployment to Alibaba Cloud solution, more convenient operation 

[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest-en.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress\u793E\u533A\u7248)

### Stage 2: Configuration

Open \`http://127.0.0.1:8080\` in browser. For the first time, you will need to configure the admin credentials.

![image](/img/user/quickstart/en-us/init.png)

After configuration, log into Higress Console using the credential just configured.

![image](/img/user/quickstart/en-us/login.png)

Click "Service Sources" on the navigation bar left. Click "Create Service Source" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/service_source_management_standalone.png)

Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/route_management_standalone.png)

### Stage 3: Validate

Use the following command to check whether the test route works properly:

\`\`\`bash
# should output a JSON object containing request data 
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
\`\`\`
`},l=function(){return s},p=function(){return[{depth:2,slug:"environment-1-use-in-k8s",text:"Environment 1: Use in K8s"},{depth:3,slug:"stage-1-installation",text:"Stage 1: Installation"},{depth:4,slug:"scenario-1-use-in-a-standard-k8s-cluster",text:"Scenario 1: Use in a Standard K8s Cluster"},{depth:4,slug:"scenario-2-use-in-local-environment",text:"Scenario 2: Use in Local Environment"},{depth:5,slug:"step-1-install-kubectl--kind",text:"Step 1: Install kubectl & kind"},{depth:5,slug:"step-2-create-and-activate-kind",text:"Step 2: Create and Activate kind"},{depth:5,slug:"step-3-install-higress",text:"Step 3: Install Higress"},{depth:3,slug:"stage-2-configuration",text:"Stage 2: Configuration"},{depth:4,slug:"method-1-use-higress-console",text:"Method 1: Use Higress Console"},{depth:4,slug:"method-2-use-ingress-crd",text:"Method 2: Use Ingress CRD"},{depth:3,slug:"stage-3-validate",text:"Stage 3: Validate"},{depth:2,slug:"environment-2-use-in-docker-compose-without-k8s",text:"Environment 2: Use in Docker Compose without K8s"},{depth:3,slug:"stage-1-installation-1",text:"Stage 1: Installation"},{depth:3,slug:"stage-2-configuration-1",text:"Stage 2: Configuration"},{depth:3,slug:"stage-3-validate-1",text:"Stage 3: Validate"}]},e=c((h,m,f)=>{const{layout:F,...i}=n;return i.file=a,i.url=t,r`${E()}${y(s)}`})});export{e as Content,g as __tla,l as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,o as rawContent,t as url};
