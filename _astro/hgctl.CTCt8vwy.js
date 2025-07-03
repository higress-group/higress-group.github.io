import{c,__tla as E}from"./astro-component.m4CCZO6J.js";import{r as d,m as r,u as y,__tla as v}from"./constant.B6p3iceL.js";import{__tla as F}from"./astro/assets-service.BhtN0nM5.js";let a,p,e,n,i,o,l,h=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{let s;s=`<h2 id="how-to-download-hgctl">How to Download hgctl</h2>
<p>Download the latest version of hgctl to your local machine using the curl command</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Ls</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | bash"><div></div></button></div></figure></div>
<h2 id="installation-profile-description">Installation Profile Description</h2>
<p>Higress currently supports three built-in predefined profiles: local-k8s, k8s, and local-docker.</p>
<ul>
<li>The local-k8s profile installs Higress to a local k8s cluster such as a kind cluster, mainly used for developing and testing Higress functionality. In addition to installing the Higress core components, it also installs observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI components.</li>
<li>The k8s profile installs Higress to a k8s cluster, by default only installing the Higress core components.</li>
<li>The local-docker profile installs Higress to a local docker environment.</li>
</ul>
<h3 id="1-view-default-profile-list-and-export-profiles">1. View Default Profile List and Export Profiles</h3>
<ul>
<li>View profile list</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">hgctl profile list</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">higress configuration profiles:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">k8s</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">local-docker</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">local-k8s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl profile list\x7F\x7Fhigress configuration profiles:\x7F    k8s\x7F    local-docker\x7F    local-k8s"><div></div></button></div></figure></div>
<ul>
<li>Export local-k8s profile to a local file local-k8s.yaml</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dump</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./local-k8s.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl profile dump local-k8s -o ./local-k8s.yaml"><div></div></button></div></figure></div>
<h3 id="2-description-of-the-three-built-in-profile-configurations">2. Description of the Three Built-in Profile Configurations</h3>
<p>Profile content includes seven major configuration items: global, console, gateway, controller, storage, values, and charts.</p>
<ol>
<li>local-k8s profile</li>
</ol>
<p>The specific content and description of the local-k8s profile are as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">profile</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># profile name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">install</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># installation mode k8s/local-k8s/local-docker</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClass</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># IngressClass used to filter Ingress resources monitored by Higress Controller.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enableIstioAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># If true, Higress Controller will also monitor istio resources</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enableGatewayAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># If true, activate gateway api</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># namespace where higress is installed</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Console pods</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">o11yEnabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># If true, will also install observability suite (Grafana + Prometheus)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Gateway pods</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">controller</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Controller pods</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Other custom helm values</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">values</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">charts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress helm chart repo address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># higress helm chart name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress helm chart version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">standalone</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress standalone installer address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">standalone</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># higress standalone installer name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># higress standalone installer version</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="profile: local-k8s # profile name\x7Fglobal:\x7F  install: local-k8s # installation mode k8s/local-k8s/local-docker\x7F  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.\x7F  enableIstioAPI: true  # If true, Higress Controller will also monitor istio resources\x7F  enableGatewayAPI: true # If true, activate gateway api\x7F  namespace: higress-system # namespace where higress is installed\x7F\x7Fconsole:\x7F  replicas: 1 # Number of Higress Console pods\x7F  o11yEnabled: true # If true, will also install observability suite (Grafana + Prometheus)\x7F\x7Fgateway:\x7F  replicas: 1 # Number of Higress Gateway pods\x7F\x7Fcontroller:\x7F  replicas: 1 # Number of Higress Controller pods\x7F\x7F# Other custom helm values\x7Fvalues:\x7F\x7Fcharts:\x7F  higress:\x7F    url: https://higress.io/helm-charts # higress helm chart repo address\x7F    name: higress  # higress helm chart name\x7F    version: latest # higress helm chart version\x7F  standalone:\x7F    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address\x7F    name: standalone  # higress standalone installer name\x7F    version: latest   # higress standalone installer version"><div></div></button></div></figure></div>
<ol start="2">
<li>k8s profile</li>
</ol>
<p>The main difference between the k8s profile and the local-k8s profile is that observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI are not activated by default. If these features are needed, these properties need to be set during installation.</p>
<p>The specific content and description of the k8s profile are as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">profile</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># profile name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">install</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k8s</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># installation mode k8s/local-k8s/local-docker</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClass</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># IngressClass used to filter Ingress resources monitored by Higress Controller.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enableIstioAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># If true, Higress Controller will also monitor istio resources</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enableGatewayAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># If true, activate gateway api</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># namespace where higress is installed</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Console pods</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">o11yEnabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># If true, will also install observability suite (Grafana + Prometheus)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Gateway pods</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">controller</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Number of Higress Controller pods</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Other custom helm values</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">values</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">charts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress helm chart repo address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># higress helm chart name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># higress helm chart version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">standalone</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress standalone installer address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">standalone</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># higress standalone installer name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># higress standalone installer version</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="profile: k8s # profile name\x7Fglobal:\x7F  install: k8s # installation mode k8s/local-k8s/local-docker\x7F  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.\x7F  enableIstioAPI: false  # If true, Higress Controller will also monitor istio resources\x7F  enableGatewayAPI: false # If true, activate gateway api\x7F  namespace: higress-system # namespace where higress is installed\x7F\x7Fconsole:\x7F  replicas: 1 # Number of Higress Console pods\x7F  o11yEnabled: false # If true, will also install observability suite (Grafana + Prometheus)\x7F\x7Fgateway:\x7F  replicas: 2 # Number of Higress Gateway pods\x7F\x7Fcontroller:\x7F  replicas: 1 # Number of Higress Controller pods\x7F\x7F# Other custom helm values\x7Fvalues:\x7F\x7Fcharts:\x7F  higress:\x7F    url: https://higress.io/helm-charts # higress helm chart repo address\x7F    name: higress     # higress helm chart name\x7F    version: latest   # higress helm chart version\x7F  standalone:\x7F    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address\x7F    name: standalone  # higress standalone installer name\x7F    version: latest   # higress standalone installer version"><div></div></button></div></figure></div>
<ol start="3">
<li>local-docker profile</li>
</ol>
<p>The specific content and description of the local-docker profile are as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">profile</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># profile name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">install</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># installation mode k8s/local-k8s/local-docker</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># console listening port</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">httpPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># gateway http listening port</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">httpsPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># gateway https listening port</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metricsPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15020</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># gateway metrics output listening port</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">controller</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Backend storage system settings, currently supporting file system and nacos</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">storage</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">file://\${INSTALLPACKAGEPATH}/conf</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Configuration service URL. If using a standalone deployed Nacos service (version not lower than 2.0.0), the URL format is: nacos://192.168.0.1:8848 - If saving configuration on the local disk, the URL format is: file://opt/higress/conf</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ns</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Nacos namespace ID used to save Higress configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">username</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># Username for accessing Nacos. Only used when Nacos has authentication enabled</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">password</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># User password for accessing Nacos. Only used when Nacos has authentication enabled</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dataEncKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Key used to encrypt sensitive configuration data. Length must be 32 characters. If not set, Higress will automatically generate a random key. If cluster deployment is needed, this item must be set</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">charts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress helm chart repo address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># higress helm chart name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># higress helm chart version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">standalone</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># higress standalone installer address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">standalone</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># higress standalone installer name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># higress standalone installer version</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="profile: local-docker # profile name\x7Fglobal:\x7F  install: local-docker # installation mode k8s/local-k8s/local-docker\x7F\x7Fconsole:\x7F  port: 8080 # console listening port\x7F\x7Fgateway:\x7F  httpPort: 80 # gateway http listening port\x7F  httpsPort: 443 # gateway https listening port\x7F  metricsPort: 15020 # gateway metrics output listening port\x7F\x7Fcontroller:\x7F\x7F# Backend storage system settings, currently supporting file system and nacos\x7Fstorage:\x7F  url: file://\${INSTALLPACKAGEPATH}/conf  # Configuration service URL. If using a standalone deployed Nacos service (version not lower than 2.0.0), the URL format is: nacos://192.168.0.1:8848 - If saving configuration on the local disk, the URL format is: file://opt/higress/conf\x7F  ns: higress-system # Nacos namespace ID used to save Higress configuration\x7F  username:  # Username for accessing Nacos. Only used when Nacos has authentication enabled\x7F  password:  # User password for accessing Nacos. Only used when Nacos has authentication enabled\x7F  dataEncKey: # Key used to encrypt sensitive configuration data. Length must be 32 characters. If not set, Higress will automatically generate a random key. If cluster deployment is needed, this item must be set\x7F\x7Fcharts:\x7F  higress:\x7F    url: https://higress.io/helm-charts # higress helm chart repo address\x7F    name: higress     # higress helm chart name\x7F    version: latest   # higress helm chart version\x7F  standalone:\x7F    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address\x7F    name: standalone  # higress standalone installer name\x7F    version: latest   # higress standalone installer version"><div></div></button></div></figure></div>
<p>The default configuration service URL file://\${INSTALLPACKAGEPATH}/conf saves in the local file system, where \${INSTALLPACKAGEPATH} is the conf directory created under the current installation\u2019s higress-standalone directory</p>
<h2 id="installation-command-hgctl-install">Installation Command: hgctl install</h2>
<p>The specific parameters of the hgctl install command are as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">command</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">generates</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">an</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">manifest</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">and</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">applies</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> [flags]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Examples:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Apply a default higress installation</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Install higress on local kubernetes cluster</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-k8s</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Install higress on local docker environment with specific gateway port</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpPort=</span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpsPort=</span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># To override profile setting</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-k8s</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableIstioAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.replicas=</span><span style="--0:#79B8FF">2</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF"># To override helm setting</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">hgctl install --set profile=local-k8s  --set values.global.proxy.resources.requsts.cpu=500m"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Flags:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-f,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--filename</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">strings</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">containing</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-h,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span><span style="--0:#E1E4E8">                </span><span style="--0:#9ECBFF">help</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CLI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">requests.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-d,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--manifests</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Specify</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">directory</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profiles</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                            </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">e.g.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">~/Downloads/higress/manifests</span><span style="--0:#E1E4E8">)</span><span style="--0:#79B8FF">.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-s,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">stringArray</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Override</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">an</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">value,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">e.g.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">override</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span><span style="--0:#E1E4E8"> (--set </span><span style="--0:#9ECBFF">gateway.replicas=</span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">), or override helm values (</span><span style="--0:#B392F0">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.global.proxy.resources.requsts.cpu=500m</span><span style="--0:#E1E4E8">).</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl install --help\x7FThe install command generates an higress install manifest and applies it to a cluster.\x7F\x7FUsage:\x7F  hgctl install [flags]\x7F\x7FExamples:\x7F  hgctl install\x7F  hgctl install --set profile=local-k8s\x7F  hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443\x7F  hgctl install --set profile=local-k8s  --set global.enableIstioAPI=true --set gateway.replicas=2&#x22;\x7F  hgctl install --set profile=local-k8s  --set values.global.proxy.resources.requsts.cpu=500m&#x22;\x7F\x7FFlags:\x7F      --context string      The name of the kubeconfig context to use.\x7F  -f, --filename strings    Path to file containing helm custom values\x7F  -h, --help                help for install\x7F      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.\x7F  -d, --manifests string    Specify a path to a directory of profiles\x7F                            (e.g. ~/Downloads/higress/manifests).\x7F  -s, --set stringArray     Override an higress profile value, e.g. override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m)."><div></div></button></div></figure></div>
<p>Installation parameter description:</p>
<ul>
<li>
<p>The core parameters of hgctl install are -s (\u2014set) and -f (\u2014filename).</p>
</li>
<li>
<p>The \u2014set parameter sets the value of profile configuration items, and -f passes the yaml file address of custom helm values.</p>
</li>
<li>
<p>Specify the installation profile source through -s profile=profile built-in profile name or profile yaml file address.</p>
</li>
<li>
<p>After successful installation, the current installation profile configuration will be written to ~/.hgctl/profiles/install.yaml in the current user\u2019s $HOME directory, and upgrades will be based on this profile. (This may change in future versions)</p>
</li>
</ul>
<h3 id="installation-examples">Installation Examples</h3>
<ol>
<li>Default installation</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Please</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">select</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configration</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">1.Install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubernetes</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">like</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">etc.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">2.Install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubernetes</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">3.Install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">environment</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Please</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">input</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">1,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">or</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">3</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">select,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">input</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">selection:</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl install\x7F\x7FPlease select higress install configration profile:\x7F\x7F1.Install higress to local kubernetes cluster like kind etc.\x7F\x7F2.Install higress to kubernetes cluster\x7F\x7F3.Install higress to local docker environment\x7F\x7FPlease input 1, 2 or 3 to select, input your selection:"><div></div></button></div></figure></div>
<p>The default installation does not specify a profile and will prompt you to select an installation profile.</p>
<ol start="2">
<li>Specify k8s profile installation, while activating IstioAPI, GatewayAPI, and customizing helm values for console and gateway resources configuration.</li>
</ol>
<p>Custom helm values.yaml as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">istioNamespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">istio-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">higress-console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">500m</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">memory</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">512Mi</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">higress-core</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2000m</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">memory</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2048Mi</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limits</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2000m</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">memory</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2048Mi</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global:\x7F  istioNamespace: istio-system\x7F\x7Fhigress-console:\x7F  resources:\x7F    requests:\x7F      cpu: 500m\x7F      memory: 512Mi\x7F\x7Fhigress-core:\x7F  gateway:\x7F    resources:\x7F    requests:\x7F      cpu: 2000m\x7F      memory: 2048Mi\x7F    limits:\x7F      cpu: 2000m\x7F      memory: 2048Mi"><div></div></button></div></figure></div>
<p>Helm custom configuration reference files as follows:</p>
<ul>
<li>global and higress-core configuration items: <a href="https://github.com/alibaba/higress/blob/main/helm/core/values.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/blob/main/helm/core/values.yaml</a></li>
<li>global and higress-console configuration items: <a href="https://github.com/higress-group/higress-console/blob/main/helm/values.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/higress-console/blob/main/helm/values.yaml</a></li>
</ul>
<p>Installation command as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=k8s</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableIstioAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableGatewayAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.replicas=</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl install --set profile=k8s  --set global.enableIstioAPI=true --set global.enableGatewayAPI=true --set gateway.replicas=1 -f ./values.yaml"><div></div></button></div></figure></div>
<ol start="3">
<li>Install in local docker environment, while specifying gateway http and https ports</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpPort=</span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.httpsPort=</span><span style="--0:#79B8FF">443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443"><div></div></button></div></figure></div>
<p>By default, the backend storage uses the file system to save configurations. If the backend storage uses nacos to save configurations, pass \u2014set storage.url=nacos://192.168.0.1:8848 during installation, setting the specific nacos service address.</p>
<p>After installation is complete, a higress-standalone directory is created in the current directory, with the following structure:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hgctl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-standalone</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmaps</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">endpoints</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http2rpcs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ingressclasses</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ingresses</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mcpbridges</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mutatingwebhookconfigurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">namespaces</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nodes</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">secrets</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">services</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">validatingwebhookconfigurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2514\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasmplugins</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get-higress.sh</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">\u2514\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CODEOWNERS</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">LICENSE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">README.md</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">VERSION</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">\u2514\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u251C\u2500\u2500 hgctl\x7F\u251C\u2500\u2500 higress-standalone\x7F\u2502  \u251C\u2500\u2500 conf\x7F\u2502  \u2502  \u251C\u2500\u2500 configmaps\x7F\u2502  \u2502  \u251C\u2500\u2500 endpoints\x7F\u2502  \u2502  \u251C\u2500\u2500 http2rpcs\x7F\u2502  \u2502  \u251C\u2500\u2500 ingressclasses\x7F\u2502  \u2502  \u251C\u2500\u2500 ingresses\x7F\u2502  \u2502  \u251C\u2500\u2500 mcpbridges\x7F\u2502  \u2502  \u251C\u2500\u2500 mutatingwebhookconfigurations\x7F\u2502  \u2502  \u251C\u2500\u2500 namespaces\x7F\u2502  \u2502  \u251C\u2500\u2500 nodes\x7F\u2502  \u2502  \u251C\u2500\u2500 pods\x7F\u2502  \u2502  \u251C\u2500\u2500 secrets\x7F\u2502  \u2502  \u251C\u2500\u2500 services\x7F\u2502  \u2502  \u251C\u2500\u2500 validatingwebhookconfigurations\x7F\u2502  \u2502  \u2514\u2500\u2500 wasmplugins\x7F\u2502  \u251C\u2500\u2500 get-higress.sh\x7F\u2502  \u2514\u2500\u2500 higress\x7F\u2502      \u251C\u2500\u2500 CODEOWNERS\x7F\u2502      \u251C\u2500\u2500 LICENSE\x7F\u2502      \u251C\u2500\u2500 README.md\x7F\u2502      \u251C\u2500\u2500 VERSION\x7F\u2502      \u251C\u2500\u2500 bin\x7F\u2502      \u2514\u2500\u2500 compose"><div></div></button></div></figure></div>
<p>The specific contents of directories and files are as follows:</p>
<ul>
<li>higress-standalone/conf: Configuration backend storage file directory</li>
<li>higress-standalone/higress: Higress installation file directory</li>
<li>higress-standalone/higress/compose: Higress docker compose configuration directory</li>
<li>higress-standalone/higress/bin: Management higress script directory</li>
<li>higress-standalone/higress/compose/.env: Higress configuration file generated after installation</li>
</ul>
<p>After successful installation, the current installation profile configuration will be written to: ~/.hgctl/profiles/install.yaml in the current user\u2019s $HOME directory, and upgrades will be based on this profile. (This may change in future versions)</p>
<h2 id="upgrade-command-hgctl-upgrade">Upgrade Command: hgctl upgrade</h2>
<p>Upgrade command parameters as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">command</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">an</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">alias</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">command</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">that</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">performs</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">additional</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade-related</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">checks.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> [flags]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Flags:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-f,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--filename</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">strings</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">containing</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-h,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span><span style="--0:#E1E4E8">                </span><span style="--0:#9ECBFF">help</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CLI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">requests.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-d,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--manifests</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Specify</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">directory</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profiles</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                            </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">e.g.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">~/Downloads/higress/manifests</span><span style="--0:#E1E4E8">)</span><span style="--0:#79B8FF">.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-s,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">stringArray</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Override</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">an</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">value,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">e.g.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">choose</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                            </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile=local-k8s</span><span style="--0:#E1E4E8">)</span><span style="--0:#B392F0">,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">or</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">override</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">profile</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span><span style="--0:#E1E4E8"> (--set </span><span style="--0:#9ECBFF">gateway.replicas=</span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">), or override helm values (</span><span style="--0:#B392F0">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.global.proxy.resources.requsts.cpu=500m</span><span style="--0:#E1E4E8">).</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl upgrade --help\x7F\x7FThe upgrade command is an alias for the install command that performs additional upgrade-related checks.\x7F\x7FUsage:\x7F  hgctl upgrade [flags]\x7F\x7FFlags:\x7F      --context string      The name of the kubeconfig context to use.\x7F  -f, --filename strings    Path to file containing helm custom values\x7F  -h, --help                help for upgrade\x7F      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.\x7F  -d, --manifests string    Specify a path to a directory of profiles\x7F                            (e.g. ~/Downloads/higress/manifests).\x7F  -s, --set stringArray     Override an higress profile value, e.g. to choose a profile\x7F                            (--set profile=local-k8s), or override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m)."><div></div></button></div></figure></div>
<p>The upgrade command parameters are consistent with the installation parameters, with the core parameters being -s (\u2014set) and -f (\u2014filename).</p>
<p>The main difference is that you cannot set the profile; the upgrade profile comes from the installation profile saved at: ~/.hgctl/profiles/install.yaml.</p>
<h2 id="dashboard-command-hgctl-dashboard">Dashboard Command: hgctl dashboard</h2>
<p>You can use the hgctl dashboard command to open the Higress Console management interface, Higress Controller Debug interface, Envoy management interface, Grafana, and Prometheus management interfaces</p>
<p>hgctl dashboard command parameters as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--help</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> [flags]</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> [command]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Aliases:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">dashboard,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dash,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">d</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Available</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Commands:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">console</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Console</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">controller</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Controller</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">debug</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">envoy</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">grafana</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Grafana</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">prometheus</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Prometheus</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Flags:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--browser</span><span style="--0:#E1E4E8">             </span><span style="--0:#9ECBFF">When</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--browser</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">supplied</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">as</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">false</span><span style="--0:#9ECBFF">,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">will</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">not</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">browser.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Default</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">which</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">means</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">will</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">always</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">browser</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">view</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard.</span><span style="--0:#E1E4E8"> (default </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-h,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span><span style="--0:#E1E4E8">                </span><span style="--0:#9ECBFF">help</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CLI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">requests.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-n,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">where</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">addon</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">running,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">not</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">would</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">be</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">used</span><span style="--0:#E1E4E8"> (default </span><span style="--0:#9ECBFF">"higress-system"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-p,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--port</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">int</span><span style="--0:#E1E4E8">            </span><span style="--0:#9ECBFF">Local</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">listen</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Use</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hgctl dashboard [command] --help"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">more</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">information</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">about</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">command.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl dashboard  --help\x7F\x7FUsage:\x7F  hgctl dashboard [flags]\x7F  hgctl dashboard [command]\x7F\x7FAliases:\x7F  dashboard, dash, d\x7F\x7FAvailable Commands:\x7F  console     Open Console web UI\x7F  controller  Open Controller debug web UI\x7F  envoy       Open Envoy admin web UI\x7F  grafana     Open Grafana web UI\x7F  prometheus  Open Prometheus web UI\x7F\x7FFlags:\x7F      --browser             When --browser is supplied as false, hgctl dashboard will not open the browser. Default is true which means hgctl dashboard will always open a browser to view the dashboard. (default true)\x7F      --context string      The name of the kubeconfig context to use.\x7F  -h, --help                help for dashboard\x7F      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.\x7F  -n, --namespace string    Namespace where the addon is running, if not specified, higress-system would be used (default &#x22;higress-system&#x22;)\x7F  -p, --port int            Local port to listen to\x7F\x7FUse &#x22;hgctl dashboard [command] --help&#x22; for more information about a command."><div></div></button></div></figure></div>
<h2 id="uninstall-command-hgctl-uninstall">Uninstall Command: hgctl uninstall</h2>
<p>hgctl uninstall command parameters as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">command</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstalls</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">or</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">environment</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span><span style="--0:#E1E4E8"> [flags]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Examples:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Uninstall higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstal</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Uninstall higress, istioAPI and GatewayAPI from a cluster</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--purge-resources</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Flags:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">The</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-h,</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--help</span><span style="--0:#E1E4E8">                </span><span style="--0:#9ECBFF">help</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">string</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">Path</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubeconfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">for</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CLI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">requests.</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">--purge-resources</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Delete</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">all</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">of</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">IstioAPI,GatewayAPI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl uninstall --help\x7F\x7FThe uninstall command uninstalls higress from a cluster or local environment\x7F\x7FUsage:\x7F  hgctl uninstall [flags]\x7F\x7FExamples:\x7F  hgctl uninstal\x7F  hgctl uninstall --purge-resources\x7F\x7F\x7FFlags:\x7F      --context string      The name of the kubeconfig context to use.\x7F  -h, --help                help for uninstall\x7F      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.\x7F      --purge-resources     Delete  all of IstioAPI,GatewayAPI resources"><div></div></button></div></figure></div>
<p>hgctl uninstall will not automatically uninstall IstioAPI and GatewayAPI components during uninstallation. If you want to uninstall IstioAPI and GatewayAPI components, add \u2014purge-resources during uninstallation.</p>
<h2 id="plugin-command-hgctl-plugin-command">Plugin Command: hgctl plugin command</h2>
<p>TBD</p>`,n={title:"hgctl Tool Usage Guide",keywords:["Ingress"],description:"hgctl Tool Usage Guide.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/hgctl.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/hgctl.md",l=void 0,o=function(){return`
## How to Download hgctl

Download the latest version of hgctl to your local machine using the curl command

\`\`\`shell
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | bash
\`\`\`

## Installation Profile Description

Higress currently supports three built-in predefined profiles: local-k8s, k8s, and local-docker.

* The local-k8s profile installs Higress to a local k8s cluster such as a kind cluster, mainly used for developing and testing Higress functionality. In addition to installing the Higress core components, it also installs observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI components.
* The k8s profile installs Higress to a k8s cluster, by default only installing the Higress core components.
* The local-docker profile installs Higress to a local docker environment.


### 1. View Default Profile List and Export Profiles

* View profile list

\`\`\`
hgctl profile list

higress configuration profiles:
    k8s
    local-docker
    local-k8s
\`\`\`

* Export local-k8s profile to a local file local-k8s.yaml

\`\`\`shell
hgctl profile dump local-k8s -o ./local-k8s.yaml
\`\`\`

### 2. Description of the Three Built-in Profile Configurations

Profile content includes seven major configuration items: global, console, gateway, controller, storage, values, and charts.


1. local-k8s profile

The specific content and description of the local-k8s profile are as follows:

\`\`\`yaml
profile: local-k8s # profile name
global:
  install: local-k8s # installation mode k8s/local-k8s/local-docker
  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.
  enableIstioAPI: true  # If true, Higress Controller will also monitor istio resources
  enableGatewayAPI: true # If true, activate gateway api
  namespace: higress-system # namespace where higress is installed

console:
  replicas: 1 # Number of Higress Console pods
  o11yEnabled: true # If true, will also install observability suite (Grafana + Prometheus)

gateway:
  replicas: 1 # Number of Higress Gateway pods

controller:
  replicas: 1 # Number of Higress Controller pods

# Other custom helm values
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress  # higress helm chart name
    version: latest # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
\`\`\`

2. k8s profile

The main difference between the k8s profile and the local-k8s profile is that observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI are not activated by default. If these features are needed, these properties need to be set during installation.

The specific content and description of the k8s profile are as follows:

\`\`\`yaml
profile: k8s # profile name
global:
  install: k8s # installation mode k8s/local-k8s/local-docker
  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.
  enableIstioAPI: false  # If true, Higress Controller will also monitor istio resources
  enableGatewayAPI: false # If true, activate gateway api
  namespace: higress-system # namespace where higress is installed

console:
  replicas: 1 # Number of Higress Console pods
  o11yEnabled: false # If true, will also install observability suite (Grafana + Prometheus)

gateway:
  replicas: 2 # Number of Higress Gateway pods

controller:
  replicas: 1 # Number of Higress Controller pods

# Other custom helm values
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress     # higress helm chart name
    version: latest   # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
\`\`\`


3. local-docker profile

The specific content and description of the local-docker profile are as follows:

\`\`\`yaml
profile: local-docker # profile name
global:
  install: local-docker # installation mode k8s/local-k8s/local-docker
  
console:
  port: 8080 # console listening port

gateway:
  httpPort: 80 # gateway http listening port
  httpsPort: 443 # gateway https listening port
  metricsPort: 15020 # gateway metrics output listening port

controller:

# Backend storage system settings, currently supporting file system and nacos
storage: 
  url: file://\${INSTALLPACKAGEPATH}/conf  # Configuration service URL. If using a standalone deployed Nacos service (version not lower than 2.0.0), the URL format is: nacos://192.168.0.1:8848 - If saving configuration on the local disk, the URL format is: file://opt/higress/conf
  ns: higress-system # Nacos namespace ID used to save Higress configuration
  username:  # Username for accessing Nacos. Only used when Nacos has authentication enabled
  password:  # User password for accessing Nacos. Only used when Nacos has authentication enabled
  dataEncKey: # Key used to encrypt sensitive configuration data. Length must be 32 characters. If not set, Higress will automatically generate a random key. If cluster deployment is needed, this item must be set

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress     # higress helm chart name
    version: latest   # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
\`\`\`

The default configuration service URL file://\${INSTALLPACKAGEPATH}/conf saves in the local file system, where \${INSTALLPACKAGEPATH} is the conf directory created under the current installation's higress-standalone directory

## Installation Command: hgctl install

The specific parameters of the hgctl install command are as follows:

\`\`\`shell
hgctl install --help
The install command generates an higress install manifest and applies it to a cluster.

Usage:
  hgctl install [flags]

Examples:
  # Apply a default higress installation
  hgctl install

  # Install higress on local kubernetes cluster 
  hgctl install --set profile=local-k8s 

  # Install higress on local docker environment with specific gateway port
  hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443

  # To override profile setting
  hgctl install --set profile=local-k8s  --set global.enableIstioAPI=true --set gateway.replicas=2"
  
  # To override helm setting
  hgctl install --set profile=local-k8s  --set values.global.proxy.resources.requsts.cpu=500m"
  
Flags:
      --context string      The name of the kubeconfig context to use.
  -f, --filename strings    Path to file containing helm custom values
  -h, --help                help for install
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -d, --manifests string    Specify a path to a directory of profiles
                            (e.g. ~/Downloads/higress/manifests).
  -s, --set stringArray     Override an higress profile value, e.g. override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m).

\`\`\`

Installation parameter description:

- The core parameters of hgctl install are -s (--set) and -f (--filename).

- The --set parameter sets the value of profile configuration items, and -f passes the yaml file address of custom helm values.

- Specify the installation profile source through -s profile=profile built-in profile name or profile yaml file address.

- After successful installation, the current installation profile configuration will be written to ~/.hgctl/profiles/install.yaml in the current user's $HOME directory, and upgrades will be based on this profile. (This may change in future versions)


### Installation Examples

1. Default installation

\`\`\`shell
hgctl install

Please select higress install configration profile:

1.Install higress to local kubernetes cluster like kind etc.

2.Install higress to kubernetes cluster

3.Install higress to local docker environment

Please input 1, 2 or 3 to select, input your selection:
\`\`\`
The default installation does not specify a profile and will prompt you to select an installation profile.


2. Specify k8s profile installation, while activating IstioAPI, GatewayAPI, and customizing helm values for console and gateway resources configuration.

Custom helm values.yaml as follows:

\`\`\`yaml
global:
  istioNamespace: istio-system
  
higress-console:
  resources:
    requests:
      cpu: 500m
      memory: 512Mi
      
higress-core:
  gateway:
    resources:
    requests:
      cpu: 2000m
      memory: 2048Mi
    limits:
      cpu: 2000m
      memory: 2048Mi
\`\`\`

Helm custom configuration reference files as follows:
- global and higress-core configuration items: https://github.com/alibaba/higress/blob/main/helm/core/values.yaml
- global and higress-console configuration items: https://github.com/higress-group/higress-console/blob/main/helm/values.yaml

Installation command as follows:

\`\`\`shell
hgctl install --set profile=k8s  --set global.enableIstioAPI=true --set global.enableGatewayAPI=true --set gateway.replicas=1 -f ./values.yaml

\`\`\`

3. Install in local docker environment, while specifying gateway http and https ports

\`\`\`shell
hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443
\`\`\`

By default, the backend storage uses the file system to save configurations. If the backend storage uses nacos to save configurations, pass --set storage.url=nacos://192.168.0.1:8848 during installation, setting the specific nacos service address.

After installation is complete, a higress-standalone directory is created in the current directory, with the following structure:

\`\`\`shell
\u251C\u2500\u2500 hgctl
\u251C\u2500\u2500 higress-standalone
\u2502  \u251C\u2500\u2500 conf
\u2502  \u2502  \u251C\u2500\u2500 configmaps
\u2502  \u2502  \u251C\u2500\u2500 endpoints
\u2502  \u2502  \u251C\u2500\u2500 http2rpcs
\u2502  \u2502  \u251C\u2500\u2500 ingressclasses
\u2502  \u2502  \u251C\u2500\u2500 ingresses
\u2502  \u2502  \u251C\u2500\u2500 mcpbridges
\u2502  \u2502  \u251C\u2500\u2500 mutatingwebhookconfigurations
\u2502  \u2502  \u251C\u2500\u2500 namespaces
\u2502  \u2502  \u251C\u2500\u2500 nodes
\u2502  \u2502  \u251C\u2500\u2500 pods
\u2502  \u2502  \u251C\u2500\u2500 secrets
\u2502  \u2502  \u251C\u2500\u2500 services
\u2502  \u2502  \u251C\u2500\u2500 validatingwebhookconfigurations
\u2502  \u2502  \u2514\u2500\u2500 wasmplugins
\u2502  \u251C\u2500\u2500 get-higress.sh
\u2502  \u2514\u2500\u2500 higress
\u2502      \u251C\u2500\u2500 CODEOWNERS
\u2502      \u251C\u2500\u2500 LICENSE
\u2502      \u251C\u2500\u2500 README.md
\u2502      \u251C\u2500\u2500 VERSION
\u2502      \u251C\u2500\u2500 bin
\u2502      \u2514\u2500\u2500 compose

\`\`\`


The specific contents of directories and files are as follows:

* higress-standalone/conf: Configuration backend storage file directory
* higress-standalone/higress: Higress installation file directory
* higress-standalone/higress/compose: Higress docker compose configuration directory
* higress-standalone/higress/bin: Management higress script directory
* higress-standalone/higress/compose/.env: Higress configuration file generated after installation


After successful installation, the current installation profile configuration will be written to: ~/.hgctl/profiles/install.yaml in the current user's $HOME directory, and upgrades will be based on this profile. (This may change in future versions)


## Upgrade Command: hgctl upgrade

Upgrade command parameters as follows:

\`\`\`shell
hgctl upgrade --help

The upgrade command is an alias for the install command that performs additional upgrade-related checks.

Usage:
  hgctl upgrade [flags]

Flags:
      --context string      The name of the kubeconfig context to use.
  -f, --filename strings    Path to file containing helm custom values
  -h, --help                help for upgrade
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -d, --manifests string    Specify a path to a directory of profiles
                            (e.g. ~/Downloads/higress/manifests).
  -s, --set stringArray     Override an higress profile value, e.g. to choose a profile
                            (--set profile=local-k8s), or override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m).
\`\`\`

The upgrade command parameters are consistent with the installation parameters, with the core parameters being -s (--set) and -f (--filename).

The main difference is that you cannot set the profile; the upgrade profile comes from the installation profile saved at: ~/.hgctl/profiles/install.yaml.

## Dashboard Command: hgctl dashboard

You can use the hgctl dashboard command to open the Higress Console management interface, Higress Controller Debug interface, Envoy management interface, Grafana, and Prometheus management interfaces

hgctl dashboard command parameters as follows:

\`\`\`shell
hgctl dashboard  --help

Usage:
  hgctl dashboard [flags]
  hgctl dashboard [command]

Aliases:
  dashboard, dash, d

Available Commands:
  console     Open Console web UI
  controller  Open Controller debug web UI
  envoy       Open Envoy admin web UI
  grafana     Open Grafana web UI
  prometheus  Open Prometheus web UI

Flags:
      --browser             When --browser is supplied as false, hgctl dashboard will not open the browser. Default is true which means hgctl dashboard will always open a browser to view the dashboard. (default true)
      --context string      The name of the kubeconfig context to use.
  -h, --help                help for dashboard
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -n, --namespace string    Namespace where the addon is running, if not specified, higress-system would be used (default "higress-system")
  -p, --port int            Local port to listen to

Use "hgctl dashboard [command] --help" for more information about a command.

\`\`\`

## Uninstall Command: hgctl uninstall

hgctl uninstall command parameters as follows:

\`\`\`shell
hgctl uninstall --help

The uninstall command uninstalls higress from a cluster or local environment

Usage:
  hgctl uninstall [flags]

Examples:
# Uninstall higress 
  hgctl uninstal
  
  # Uninstall higress, istioAPI and GatewayAPI from a cluster
  hgctl uninstall --purge-resources


Flags:
      --context string      The name of the kubeconfig context to use.
  -h, --help                help for uninstall
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
      --purge-resources     Delete  all of IstioAPI,GatewayAPI resources
\`\`\`

hgctl uninstall will not automatically uninstall IstioAPI and GatewayAPI components during uninstallation. If you want to uninstall IstioAPI and GatewayAPI components, add --purge-resources during uninstallation.


## Plugin Command: hgctl plugin command

TBD


`},p=function(){return s},i=function(){return[{depth:2,slug:"how-to-download-hgctl",text:"How to Download hgctl"},{depth:2,slug:"installation-profile-description",text:"Installation Profile Description"},{depth:3,slug:"1-view-default-profile-list-and-export-profiles",text:"1. View Default Profile List and Export Profiles"},{depth:3,slug:"2-description-of-the-three-built-in-profile-configurations",text:"2. Description of the Three Built-in Profile Configurations"},{depth:2,slug:"installation-command-hgctl-install",text:"Installation Command: hgctl install"},{depth:3,slug:"installation-examples",text:"Installation Examples"},{depth:2,slug:"upgrade-command-hgctl-upgrade",text:"Upgrade Command: hgctl upgrade"},{depth:2,slug:"dashboard-command-hgctl-dashboard",text:"Dashboard Command: hgctl dashboard"},{depth:2,slug:"uninstall-command-hgctl-uninstall",text:"Uninstall Command: hgctl uninstall"},{depth:2,slug:"plugin-command-hgctl-plugin-command",text:"Plugin Command: hgctl plugin command"}]},a=c((g,f,u)=>{const{layout:m,...t}=n;return t.file=e,t.url=l,d`${r()}${y(s)}`})});export{a as Content,h as __tla,p as compiledContent,a as default,e as file,n as frontmatter,i as getHeadings,o as rawContent,l as url};
