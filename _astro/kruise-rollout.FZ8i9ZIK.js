import{c as p,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as c,m as v,u,__tla as h}from"./constant.ZI3O5-xu.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,n,l,r,i,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<p>In the rapid development of business, ensuring zero-downtime deployments during feature iterations has always been a key concern for developers. Typically, when releasing new features, we adopt a canary release approach to validate the new version with a small portion of traffic before rolling it out completely once it meets expectations. This is known as \u201Cprogressive delivery.\u201D The term originated from large, complex industrial projects that aimed to break down complex projects into phases, reducing delivery costs and time through continuous small iterations. With the evolution of cloud-native architectures, progressive delivery has been widely adopted in internet applications. Developers integrate progressive delivery frameworks through GitOps and CI/CD pipelines, enabling feature releases to be executed in batches. Techniques like A/B testing and canary releases allow fine-grained control over traffic policies for each batch, ensuring application deployment stability.</p>
<h2 id="what-is-kruise-rollout">What is Kruise Rollout?</h2>
<p>Kruise Rollout is an open-source cloud-native application automation management suite developed by Alibaba Cloud under the OpenKruise project, focusing on the field of progressive delivery. It supports canary releases, blue-green deployments, and A/B testing with traffic and instance-based canary releases. The release process can be automated in batches and paused based on Prometheus metrics. It provides a non-intrusive integration approach and is compatible with various existing workloads (Deployment, CloneSet, DaemonSet).</p>
<p>You might wonder, doesn\u2019t Kubernetes\u2019 native Deployment already have release strategies? Why do we need Kruise Rollout?</p>
<p>First, Kubernetes\u2019 native Deployment\u2019s release strategy doesn\u2019t fully align with the concept of progressive delivery\u2014it\u2019s essentially a rolling update. Although Deployment provides parameters like <code dir="auto">maxUnavailable</code> and <code dir="auto">maxSurge</code> for updates, it only supports a one-time streaming release. Users cannot control batching or implement fine-grained traffic policies. For example:</p>
<ul>
<li>Users cannot strictly control the traffic ratio between old and new versions; it can only be based on the actual Pod count ratio and the client\u2019s load balancing strategy.</li>
<li>Users cannot implement A/B testing strategies, such as restricting access to new versions for internal employees only.</li>
<li>If issues arise with the new version, users must perform another rolling update to roll back to the old version, which is slow and introduces instability due to frequent changes.</li>
</ul>
<p>Additionally, Kubernetes only provides the Deployment controller for application delivery and abstractions like Ingress and Service for traffic management. However, it doesn\u2019t offer an out-of-the-box progressive delivery solution that combines these components.</p>
<p>To address these limitations, Alibaba Cloud has developed Kruise Rollout, a non-intrusive, extensible, and user-friendly progressive delivery framework based on years of experience in containerization and cloud-native technologies.</p>
<h2 id="how-higress--kruise-rollout-work-together">How Higress &#x26; Kruise Rollout Work Together</h2>
<p>Let\u2019s briefly explain how Higress and Kruise Rollout work together during an application release:</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01LN9dRY1iiJiG17N36_!!6000000004446-2-tps-1080-500.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Assume there\u2019s a Deployment application A in the cluster exposed externally via the Higress gateway. Now, application A needs to release new features.</p>
<ol>
<li>The user adds a progressive delivery strategy (Rollout CRD resource) to the cluster, describing the delivery strategy for the target workload, such as batches, traffic control for each batch, and associated Service and Ingress resources.</li>
<li>The user updates the container image of the target Deployment to the new version.</li>
<li>Kruise Rollout hooks into the Deployment\u2019s rolling update process and pauses it by modifying the Deployment\u2019s <code dir="auto">Paused</code> field.</li>
<li>The first batch of the release is executed. Based on the delivery strategy in the Rollout CRD, the number of new version Pods is controlled, and a canary Ingress resource is generated for the main Ingress resource. Traffic policies like traffic weight ratios or request header-based routing are configured. Higress detects the Ingress resource changes and dynamically updates routing rules to direct traffic matching the canary rules to the new version.</li>
<li>The user monitors application metrics (e.g., via Prometheus) to verify the new version\u2019s performance:
<ul>
<li>If the new version meets expectations, the next batch is triggered, repeating step 4.</li>
<li>If issues are detected, a rollback is triggered. The newly released Pods are taken down, and the Ingress resource\u2019s canary rules are removed. Higress updates the routing rules to ensure traffic is only directed to the old version.</li>
</ul>
</li>
</ol>
<p>The entire Rollout process automatically integrates Deployment, Service, and Ingress resources, abstracting away the underlying resource changes from the user. This approach works collaboratively with existing workload capabilities, reusing workload features while ensuring zero intrusion when Rollout is not in use.</p>
<h2 id="hands-on-guide">Hands-on Guide</h2>
<h3 id="prerequisites">Prerequisites</h3>
<ol>
<li>Install Higress. Refer to <a href="../../ops/deploy-by-helm/" referrerpolicy="unsafe-url">Installation Guide</a>.</li>
<li>Install Kruise Rollout:
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kruise-rollout</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">openkruise/kruise-rollout</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--version</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">0.3.0-rc.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0"><div></div></button></div></figure></div>
</li>
<li>Install the kubectl-kruise CLI tool. Refer to <a href="https://github.com/openkruise/kruise-tools/blob/main/README.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Install kubectl-kruise</a>.</li>
</ol>
<h3 id="canary-release">Canary Release</h3>
<h4 id="what-is-a-canary-release">What is a Canary Release?</h4>
<p>A canary release involves directing a small portion of traffic to the new version, requiring only a minimal number of machines to deploy the new version. After validating the new version\u2019s performance, traffic is gradually shifted from the old version to the new one based on configured weight ratios. During this process, the new version can be scaled up while the old version is scaled down to optimize resource utilization.</p>
<p>For example, consider a service currently running version v1, with a new version v2 ready for deployment. To ensure a smooth transition, a canary release is used to gradually shift traffic from the old version to the new one.</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01iHCuzf220cEiziyVK_!!6000000007058-2-tps-750-602.png" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="implementing-canary-release-with-higress--kruise-rollout">Implementing Canary Release with Higress &#x26; Kruise Rollout</h4>
<p>Assume there\u2019s a service <code dir="auto">demo</code> in the cluster exposed via the Higress gateway.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">main</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">kubernetes.io/ingress.class</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nginx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  replicas: 5\x7F  selector:\x7F    matchLabels:\x7F      app: demo\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: demo\x7F    spec:\x7F      containers:\x7F      - name: main\x7F        image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v1\x7F        imagePullPolicy: Always\x7F        ports:\x7F        - containerPort: 8080\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ports:\x7F  - port: 80\x7F    targetPort: 8080\x7F    protocol: TCP\x7F    name: http\x7F  selector:\x7F    app: demo\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7F  annotations:\x7F    kubernetes.io/ingress.class: nginx\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: demo\x7F            port:\x7F              number: 80\x7F        path: /version\x7F        pathType: Exact"><div></div></button></div></figure></div>
<p>Now, the <code dir="auto">demo</code> service needs to release a new version. Before updating the container image, we define a canary release strategy for the <code dir="auto">demo</code> service to achieve progressive delivery.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rollouts.kruise.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Rollout</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rollouts-demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">objectRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">workloadRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">canary</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">steps</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pause</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">30</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pause</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">trafficRoutings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">classType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: rollouts.kruise.io/v1alpha1\x7Fkind: Rollout\x7Fmetadata:\x7F  name: rollouts-demo\x7Fspec:\x7F  objectRef:\x7F    workloadRef:\x7F      apiVersion: apps/v1\x7F      kind: Deployment\x7F      name: demo\x7F  strategy:\x7F    canary:\x7F      steps:\x7F      - weight: 10\x7F        pause: {}\x7F        replicas: 1\x7F      - weight: 30\x7F        pause: {}\x7F        replicas: 2\x7F      trafficRoutings:\x7F      - service: demo\x7F        ingress:\x7F          classType: higress\x7F          name: demo"><div></div></button></div></figure></div>
<ul>
<li><code dir="auto">workloadRef</code>: References the target workload (Deployment in this case) for the Rollout. Other supported workloads include CloneSet and DaemonSet.</li>
<li><code dir="auto">canary.steps</code>: Defines the Rollout process in 3 batches:
<ol>
<li>First batch: Deploys 1 new Pod and routes 10% of traffic to it, then pauses for manual confirmation.</li>
<li>Second batch: Deploys 2 new Pods and routes 30% of traffic to them, then pauses for manual confirmation.</li>
<li>Final batch: Full rollout (implicit, no need to define).</li>
</ol>
</li>
<li><code dir="auto">trafficRoutings</code>: Specifies the resources that need traffic rule updates. Kruise Rollout automatically updates these resources to reflect the target traffic rules.</li>
</ul>
<p>Update the <code dir="auto">demo</code> Deployment\u2019s image to <code dir="auto">registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2</code> and observe the resource changes.</p>
<p>Check the Rollout status. You\u2019ll see the first batch is complete and paused, awaiting manual confirmation to proceed.
<img src="https://img.alicdn.com/imgextra/i3/O1CN0181SARr1GOLC66FHHS_!!6000000000612-2-tps-2878-148.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Check the Pod status. You\u2019ll notice only one new version Pod is running, and the Deployment hasn\u2019t fully rolled out.
<img src="https://img.alicdn.com/imgextra/i3/O1CN01213qEY1wMhdwdrwgF_!!6000000006294-2-tps-1302-374.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Test the traffic. You\u2019ll observe that 10% of the traffic is directed to the new version.
<img src="https://img.alicdn.com/imgextra/i2/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Proceed with the second batch. Check the Pod status again. You\u2019ll now see two new version Pods.
<img src="https://img.alicdn.com/imgextra/i4/O1CN01jWKV7e1QT3QaWGyVf_!!6000000001976-2-tps-1500-534.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Test the traffic. Observe the traffic distribution ratio.
<img src="https://img.alicdn.com/imgextra/i1/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
<img src="https://img.alicdn.com/imgextra/i3/O1CN01fdKoHN1tYf8bS3eWb_!!6000000005914-2-tps-1500-165.png" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="ab-testing">A/B Testing</h3>
<h4 id="what-is-ab-testing">What is A/B Testing?</h4>
<p>Unlike weight-based canary releases, A/B testing routes traffic to the new version based on request metadata, such as HTTP headers or cookies. This is a content-based routing strategy for canary releases. For example:</p>
<ul>
<li><strong>HTTP Header-based</strong>: Route requests with <code dir="auto">User-Agent: Android</code> (from Android devices) to the new version, while other systems continue to use the old version.</li>
<li><strong>Cookie-based</strong>: Cookies often contain business-specific user information. For instance, route regular users to the new version while keeping VIP users on the old version.</li>
</ul>
<p>For example, consider a service currently running version v1, with a new version v2 ready for deployment. The goal is to allow Android users to try the new features while keeping other users on the old version.</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01VHlM3Y1Rx72X2wEfy_!!6000000002177-2-tps-1500-328.png" alt="image" referrerpolicy="no-referrer"></p>
<p>By monitoring metrics like success rates and response times (RT) for both versions, once the new version performs as expected, all traffic can be switched to v2. Finally, to save resources, the old version v1 can be gradually phased out.</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01Zq9Jnc1Dj0DQjNf0M_!!6000000000251-2-tps-1500-325.png" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="implementing-ab-testing-with-higress--kruise-rollout">Implementing A/B Testing with Higress &#x26; Kruise Rollout</h4>
<p>Using the same <code dir="auto">demo</code> service example, the initial image is v1. Now, the <code dir="auto">demo</code> service needs to release a new version. Before updating the container image, we define an A/B testing strategy for the <code dir="auto">demo</code> service.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rollouts.kruise.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Rollout</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rollouts-header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">objectRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">workloadRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">canary</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">steps</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">matches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user-agent</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">android</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pause</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">trafficRoutings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">classType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: rollouts.kruise.io/v1alpha1\x7Fkind: Rollout\x7Fmetadata:\x7F  name: rollouts-header\x7Fspec:\x7F  objectRef:\x7F    workloadRef:\x7F      apiVersion: apps/v1\x7F      kind: Deployment\x7F      name: demo\x7F  strategy:\x7F    canary:\x7F      steps:\x7F      - matches:\x7F        - headers:\x7F          - name: user-agent\x7F            value: android\x7F        pause: {}\x7F        replicas: 1\x7F      trafficRoutings:\x7F      - service: demo\x7F        ingress:\x7F          classType: higress\x7F          name: demo"><div></div></button></div></figure></div>
<p>The <code dir="auto">canary.steps</code> defines the Rollout process in 2 batches:</p>
<ol>
<li>First batch: Deploys 1 new Pod and routes traffic with the HTTP Header <code dir="auto">user-agent: android</code> to the new version, then pauses for manual confirmation.</li>
<li>Final batch: Full rollout (implicit, no need to define).</li>
</ol>
<p>Update the <code dir="auto">demo</code> Deployment\u2019s image to <code dir="auto">registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2</code> and observe the resource changes.</p>
<p>Check the Rollout status. You\u2019ll see the first batch is complete and paused, awaiting manual confirmation to proceed.
<img src="https://img.alicdn.com/imgextra/i3/O1CN01HzzMtN1dVQUKu9MUa_!!6000000003741-2-tps-2630-138.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Check the Pod status. You\u2019ll notice only one new version Pod is running, and the Deployment hasn\u2019t fully rolled out.
<img src="https://img.alicdn.com/imgextra/i4/O1CN01Oz1CW51zwpjdv29GL_!!6000000006779-2-tps-1290-372.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Test the traffic. Verify that Android traffic is routed to the new version, while non-Android traffic goes to the old version.
<img src="https://img.alicdn.com/imgextra/i3/O1CN01uPe4Hg1gSAW2YhEzb_!!6000000004140-2-tps-1144-240.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
<img src="https://img.alicdn.com/imgextra/i3/O1CN01EBOKzb1J0TPAj46dd_!!6000000000966-2-tps-1256-252.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="conclusion">Conclusion</h2>
<p>Compared to traditional manual approaches, Higress &#x26; Kruise Rollout provides a non-intrusive, automated operations experience that makes application releases as smooth as silk. Developers no longer need to worry about adjusting Deployment, Ingress, or Service resources during the release process. They only need to declare and manage the Rollout strategy. The native Deployment rolling update is automatically transformed into a progressive delivery process, making application releases batchable, canary-capable, and rollback-friendly. This not only accelerates business iteration but also enhances the stability and efficiency of application deployments.</p>`,n={title:"Canary Release with OpenKruise Rollout",keywords:["rollout","gray","canary","A/B testing"],description:"Implement canary releases and A/B testing with OpenKruise Rollout and Higress",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/kruise-rollout.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/kruise-rollout.md",i=void 0,r=function(){return`
# Canary Release with OpenKruise Rollout

In the rapid development of business, ensuring zero-downtime deployments during feature iterations has always been a key concern for developers. Typically, when releasing new features, we adopt a canary release approach to validate the new version with a small portion of traffic before rolling it out completely once it meets expectations. This is known as "progressive delivery." The term originated from large, complex industrial projects that aimed to break down complex projects into phases, reducing delivery costs and time through continuous small iterations. With the evolution of cloud-native architectures, progressive delivery has been widely adopted in internet applications. Developers integrate progressive delivery frameworks through GitOps and CI/CD pipelines, enabling feature releases to be executed in batches. Techniques like A/B testing and canary releases allow fine-grained control over traffic policies for each batch, ensuring application deployment stability.

## What is Kruise Rollout?

Kruise Rollout is an open-source cloud-native application automation management suite developed by Alibaba Cloud under the OpenKruise project, focusing on the field of progressive delivery. It supports canary releases, blue-green deployments, and A/B testing with traffic and instance-based canary releases. The release process can be automated in batches and paused based on Prometheus metrics. It provides a non-intrusive integration approach and is compatible with various existing workloads (Deployment, CloneSet, DaemonSet).

You might wonder, doesn't Kubernetes' native Deployment already have release strategies? Why do we need Kruise Rollout?

First, Kubernetes' native Deployment's release strategy doesn't fully align with the concept of progressive delivery\u2014it's essentially a rolling update. Although Deployment provides parameters like \`maxUnavailable\` and \`maxSurge\` for updates, it only supports a one-time streaming release. Users cannot control batching or implement fine-grained traffic policies. For example:
- Users cannot strictly control the traffic ratio between old and new versions; it can only be based on the actual Pod count ratio and the client's load balancing strategy.
- Users cannot implement A/B testing strategies, such as restricting access to new versions for internal employees only.
- If issues arise with the new version, users must perform another rolling update to roll back to the old version, which is slow and introduces instability due to frequent changes.

Additionally, Kubernetes only provides the Deployment controller for application delivery and abstractions like Ingress and Service for traffic management. However, it doesn't offer an out-of-the-box progressive delivery solution that combines these components.

To address these limitations, Alibaba Cloud has developed Kruise Rollout, a non-intrusive, extensible, and user-friendly progressive delivery framework based on years of experience in containerization and cloud-native technologies.

## How Higress & Kruise Rollout Work Together

Let's briefly explain how Higress and Kruise Rollout work together during an application release:

![image](https://img.alicdn.com/imgextra/i2/O1CN01LN9dRY1iiJiG17N36_!!6000000004446-2-tps-1080-500.png)

Assume there's a Deployment application A in the cluster exposed externally via the Higress gateway. Now, application A needs to release new features.

1. The user adds a progressive delivery strategy (Rollout CRD resource) to the cluster, describing the delivery strategy for the target workload, such as batches, traffic control for each batch, and associated Service and Ingress resources.
2. The user updates the container image of the target Deployment to the new version.
3. Kruise Rollout hooks into the Deployment's rolling update process and pauses it by modifying the Deployment's \`Paused\` field.
4. The first batch of the release is executed. Based on the delivery strategy in the Rollout CRD, the number of new version Pods is controlled, and a canary Ingress resource is generated for the main Ingress resource. Traffic policies like traffic weight ratios or request header-based routing are configured. Higress detects the Ingress resource changes and dynamically updates routing rules to direct traffic matching the canary rules to the new version.
5. The user monitors application metrics (e.g., via Prometheus) to verify the new version's performance:
   - If the new version meets expectations, the next batch is triggered, repeating step 4.
   - If issues are detected, a rollback is triggered. The newly released Pods are taken down, and the Ingress resource's canary rules are removed. Higress updates the routing rules to ensure traffic is only directed to the old version.

The entire Rollout process automatically integrates Deployment, Service, and Ingress resources, abstracting away the underlying resource changes from the user. This approach works collaboratively with existing workload capabilities, reusing workload features while ensuring zero intrusion when Rollout is not in use.

## Hands-on Guide

### Prerequisites
1. Install Higress. Refer to [Installation Guide](../ops/deploy-by-helm.md).
2. Install Kruise Rollout:
   \`\`\`bash
   helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0
   \`\`\`
3. Install the kubectl-kruise CLI tool. Refer to [Install kubectl-kruise](https://github.com/openkruise/kruise-tools/blob/main/README.md).

### Canary Release

#### What is a Canary Release?

A canary release involves directing a small portion of traffic to the new version, requiring only a minimal number of machines to deploy the new version. After validating the new version's performance, traffic is gradually shifted from the old version to the new one based on configured weight ratios. During this process, the new version can be scaled up while the old version is scaled down to optimize resource utilization.

For example, consider a service currently running version v1, with a new version v2 ready for deployment. To ensure a smooth transition, a canary release is used to gradually shift traffic from the old version to the new one.

![image](https://img.alicdn.com/imgextra/i2/O1CN01iHCuzf220cEiziyVK_!!6000000007058-2-tps-750-602.png)

#### Implementing Canary Release with Higress & Kruise Rollout

Assume there's a service \`demo\` in the cluster exposed via the Higress gateway.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
spec:
  replicas: 5
  selector:
    matchLabels:
      app: demo
  template:
    metadata:
      labels:
        app: demo
    spec:
      containers:
      - name: main
        image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v1
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: demo
spec:
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
    name: http
  selector:
    app: demo
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          service:
            name: demo
            port:
              number: 80
        path: /version
        pathType: Exact
\`\`\`

Now, the \`demo\` service needs to release a new version. Before updating the container image, we define a canary release strategy for the \`demo\` service to achieve progressive delivery.

\`\`\`yaml
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-demo
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - weight: 10
        pause: {}
        replicas: 1
      - weight: 30
        pause: {}
        replicas: 2
      trafficRoutings:
      - service: demo
        ingress:
          classType: higress
          name: demo
\`\`\`

- \`workloadRef\`: References the target workload (Deployment in this case) for the Rollout. Other supported workloads include CloneSet and DaemonSet.
- \`canary.steps\`: Defines the Rollout process in 3 batches:
  1. First batch: Deploys 1 new Pod and routes 10% of traffic to it, then pauses for manual confirmation.
  2. Second batch: Deploys 2 new Pods and routes 30% of traffic to them, then pauses for manual confirmation.
  3. Final batch: Full rollout (implicit, no need to define).
- \`trafficRoutings\`: Specifies the resources that need traffic rule updates. Kruise Rollout automatically updates these resources to reflect the target traffic rules.

Update the \`demo\` Deployment's image to \`registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2\` and observe the resource changes.

Check the Rollout status. You'll see the first batch is complete and paused, awaiting manual confirmation to proceed.
![image](https://img.alicdn.com/imgextra/i3/O1CN0181SARr1GOLC66FHHS_!!6000000000612-2-tps-2878-148.png)

Check the Pod status. You'll notice only one new version Pod is running, and the Deployment hasn't fully rolled out.
![image](https://img.alicdn.com/imgextra/i3/O1CN01213qEY1wMhdwdrwgF_!!6000000006294-2-tps-1302-374.png)

Test the traffic. You'll observe that 10% of the traffic is directed to the new version.
![image](https://img.alicdn.com/imgextra/i2/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png)

Proceed with the second batch. Check the Pod status again. You'll now see two new version Pods.
![image](https://img.alicdn.com/imgextra/i4/O1CN01jWKV7e1QT3QaWGyVf_!!6000000001976-2-tps-1500-534.png)

Test the traffic. Observe the traffic distribution ratio.
![image](https://img.alicdn.com/imgextra/i1/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png)

Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01fdKoHN1tYf8bS3eWb_!!6000000005914-2-tps-1500-165.png)

### A/B Testing

#### What is A/B Testing?

Unlike weight-based canary releases, A/B testing routes traffic to the new version based on request metadata, such as HTTP headers or cookies. This is a content-based routing strategy for canary releases. For example:
- **HTTP Header-based**: Route requests with \`User-Agent: Android\` (from Android devices) to the new version, while other systems continue to use the old version.
- **Cookie-based**: Cookies often contain business-specific user information. For instance, route regular users to the new version while keeping VIP users on the old version.

For example, consider a service currently running version v1, with a new version v2 ready for deployment. The goal is to allow Android users to try the new features while keeping other users on the old version.

![image](https://img.alicdn.com/imgextra/i1/O1CN01VHlM3Y1Rx72X2wEfy_!!6000000002177-2-tps-1500-328.png)

By monitoring metrics like success rates and response times (RT) for both versions, once the new version performs as expected, all traffic can be switched to v2. Finally, to save resources, the old version v1 can be gradually phased out.

![image](https://img.alicdn.com/imgextra/i3/O1CN01Zq9Jnc1Dj0DQjNf0M_!!6000000000251-2-tps-1500-325.png)

#### Implementing A/B Testing with Higress & Kruise Rollout

Using the same \`demo\` service example, the initial image is v1. Now, the \`demo\` service needs to release a new version. Before updating the container image, we define an A/B testing strategy for the \`demo\` service.

\`\`\`yaml
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-header
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - matches:
        - headers:
          - name: user-agent
            value: android
        pause: {}
        replicas: 1
      trafficRoutings:
      - service: demo
        ingress:
          classType: higress
          name: demo
\`\`\`

The \`canary.steps\` defines the Rollout process in 2 batches:
1. First batch: Deploys 1 new Pod and routes traffic with the HTTP Header \`user-agent: android\` to the new version, then pauses for manual confirmation.
2. Final batch: Full rollout (implicit, no need to define).

Update the \`demo\` Deployment's image to \`registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2\` and observe the resource changes.

Check the Rollout status. You'll see the first batch is complete and paused, awaiting manual confirmation to proceed.
![image](https://img.alicdn.com/imgextra/i3/O1CN01HzzMtN1dVQUKu9MUa_!!6000000003741-2-tps-2630-138.png)

Check the Pod status. You'll notice only one new version Pod is running, and the Deployment hasn't fully rolled out.
![image](https://img.alicdn.com/imgextra/i4/O1CN01Oz1CW51zwpjdv29GL_!!6000000006779-2-tps-1290-372.png)

Test the traffic. Verify that Android traffic is routed to the new version, while non-Android traffic goes to the old version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01uPe4Hg1gSAW2YhEzb_!!6000000004140-2-tps-1144-240.png)

Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01EBOKzb1J0TPAj46dd_!!6000000000966-2-tps-1256-252.png)

## Conclusion

Compared to traditional manual approaches, Higress & Kruise Rollout provides a non-intrusive, automated operations experience that makes application releases as smooth as silk. Developers no longer need to worry about adjusting Deployment, Ingress, or Service resources during the release process. They only need to declare and manage the Rollout strategy. The native Deployment rolling update is automatically transformed into a progressive delivery process, making application releases batchable, canary-capable, and rollback-friendly. This not only accelerates business iteration but also enhances the stability and efficiency of application deployments.`},o=function(){return e},l=function(){return[{depth:2,slug:"what-is-kruise-rollout",text:"What is Kruise Rollout?"},{depth:2,slug:"how-higress--kruise-rollout-work-together",text:"How Higress & Kruise Rollout Work Together"},{depth:2,slug:"hands-on-guide",text:"Hands-on Guide"},{depth:3,slug:"prerequisites",text:"Prerequisites"},{depth:3,slug:"canary-release",text:"Canary Release"},{depth:4,slug:"what-is-a-canary-release",text:"What is a Canary Release?"},{depth:4,slug:"implementing-canary-release-with-higress--kruise-rollout",text:"Implementing Canary Release with Higress & Kruise Rollout"},{depth:3,slug:"ab-testing",text:"A/B Testing"},{depth:4,slug:"what-is-ab-testing",text:"What is A/B Testing?"},{depth:4,slug:"implementing-ab-testing-with-higress--kruise-rollout",text:"Implementing A/B Testing with Higress & Kruise Rollout"},{depth:2,slug:"conclusion",text:"Conclusion"}]},s=p((g,E,f)=>{const{layout:w,...t}=n;return t.file=a,t.url=i,c`${v()}${u(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,a as file,n as frontmatter,l as getHeadings,r as rawContent,i as url};
