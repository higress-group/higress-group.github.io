import{c as p,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as y,__tla as h}from"./constant.C1QLXgsI.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,d,a,n,l,c,i,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>This document explains how to use Ingress with Annotations to implement advanced traffic management in Higress.</p>
<h2 id="prerequisites">Prerequisites</h2>
<ul>
<li><a href="../quickstart/" referrerpolicy="unsafe-url">Install Higress</a></li>
<li>Have a Kubernetes cluster with kubectl command-line tool configured</li>
</ul>
<h2 id="canary-release">Canary Release</h2>
<p>Higress provides complex routing capabilities, supporting canary release functionality based on Header, Cookie, and weight. Canary release can be implemented by setting annotations. To enable canary release, you need to set the annotation <code dir="auto">higress.io/canary: "true"</code>. Different annotations can implement different canary release functionalities.</p>
<blockquote>
<p>Note: When multiple methods are configured simultaneously, the priority of canary selection is: Header-based > Cookie-based > Weight-based (from high to low).</p>
</blockquote>
<h3 id="header-based-canary-release">Header-based Canary Release</h3>
<ul>
<li>Configure only <code dir="auto">higress.io/canary-by-header</code>: Traffic splitting based on Request Header name. When the request contains this Header with a value of \u201Calways\u201D, the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.</li>
<li>Configure both <code dir="auto">higress.io/canary-by-header</code> and <code dir="auto">higress.io/canary-by-header-value</code>: Traffic splitting based on Request Header name and value. When the header name and value in the request match this configuration, the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.</li>
</ul>
<blockquote>
<p>Higress supports multiple version services for canary releases (no upper limit).</p>
</blockquote>
<ol>
<li>When the request Header is <code dir="auto">higress: always</code>, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F  name: demo-canary\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>When the request Header is <code dir="auto">higress: v1</code>, it will access the canary service demo-service-canary-v1; when the request Header is <code dir="auto">higress: v2</code>, it will access the canary service demo-service-canary-v2; otherwise, it will access the production service demo-service. Configuration is as follows:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v1&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v2&#x22;\x7F  name: demo-canary-v2\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v2\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="cookie-based-canary-release">Cookie-based Canary Release</h3>
<ul>
<li>higress.io/canary-by-cookie: Traffic splitting based on Cookie Key. When the request\u2019s Cookie contains this Key with a value of \u201Calways\u201D, the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.</li>
</ul>
<blockquote>
<p>Note: Cookie-based canary release does not support custom setting of the Key\u2019s corresponding value; it can only be \u201Calways\u201D.</p>
</blockquote>
<p>When the request Cookie is <code dir="auto">demo=always</code>, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-cookie: "demo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-cookie: &#x22;demo&#x22;\x7F  name: demo-canary\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="weight-based-canary-release">Weight-based Canary Release</h3>
<ul>
<li>higress.io/canary-weight: Sets the percentage of requests to the specified service (value is an integer from 0 to 100)</li>
<li>higress.io/canary-weight-total: Sets the total weight, default is 100</li>
</ul>
<p>Configure the weight of canary service demo-service-canary-v1 as 30%, the weight of canary service demo-service-canary-v2 as 20%, and the weight of production service demo-service as 50%.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-weight: "30"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-weight: "20"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-weight: &#x22;30&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-weight: &#x22;20&#x22;\x7F  name: demo-canary-v2\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v2\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="cross-origin-resource-sharing-cors">Cross-Origin Resource Sharing (CORS)</h2>
<p>Cross-Origin Resource Sharing (CORS) allows web application servers to control cross-origin access, enabling secure cross-origin data transmission.</p>
<ul>
<li>higress.io/enable-cors: \u201Ctrue\u201D or \u201Cfalse\u201D. Enable or disable CORS.</li>
<li>higress.io/cors-allow-origin: Allowed third-party sites, supports wildcard domains, comma-separated; supports wildcard *. Default value is *, allowing all third-party sites.</li>
<li>higress.io/cors-allow-methods: Allowed request methods, such as GET, POST, comma-separated; supports wildcard *. Default value is GET, PUT, POST, DELETE, PATCH, OPTIONS.</li>
<li>higress.io/cors-allow-headers: Allowed request headers, comma-separated; supports wildcard *. Default value is DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization.</li>
<li>higress.io/cors-expose-headers: Response headers allowed to be exposed to the browser, comma-separated.</li>
<li>higress.io/cors-allow-credentials: \u201Ctrue\u201D or \u201Cfalse\u201D. Whether to allow credentials. Default is allowed.</li>
<li>higress.io/cors-max-age: Maximum cache time for preflight results, in seconds; default value is 1728000.</li>
</ul>
<p>Cross-origin requests are restricted to only come from the example.com domain, HTTP methods can only be GET and POST, allowed request header is X-Foo-Bar, and credentials are not allowed.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/enable-cors: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-origin: "example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-methods: "GET,POST"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-headers: "X-Foo-Bar"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-credentials: "false"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/enable-cors: &#x22;true&#x22;\x7F    higress.io/cors-allow-origin: &#x22;example.com&#x22;\x7F    higress.io/cors-allow-methods: &#x22;GET,POST&#x22;\x7F    higress.io/cors-allow-headers: &#x22;X-Foo-Bar&#x22;\x7F    higress.io/cors-allow-credentials: &#x22;false&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="rewrite-path-and-host">Rewrite Path and Host</h2>
<p>Rewriting can modify the original request\u2019s path and host domain before forwarding the request to the target backend service.</p>
<ul>
<li>higress.io/rewrite-target: Rewrite Path, supports Capture Group.</li>
<li>higress.io/upstream-vhost: Rewrite Host.</li>
</ul>
<h3 id="rewrite-path">Rewrite Path</h3>
<ol>
<li>Rewrite the request <code dir="auto">example.com/test</code> to <code dir="auto">example.com/dev</code> before forwarding to the backend service</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/dev"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/dev&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Remove the path prefix /v1 from the request <code dir="auto">example.com/v1/app</code> before forwarding to the backend service</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/$2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /v1(/|$)(.*)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: ImplementationSpecific</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/$2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /v1(/|$)(.*)\x7F            pathType: ImplementationSpecific"><div></div></button></div></figure></div>
<ol start="3">
<li>Change the path prefix /v1 to /v2 for the request <code dir="auto">example.com/v1/app</code> before forwarding to the backend service</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/v2/$2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /v1(/|$)(.*)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: ImplementationSpecific</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/v2/$2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /v1(/|$)(.*)\x7F            pathType: ImplementationSpecific"><div></div></button></div></figure></div>
<h3 id="rewrite-host">Rewrite Host</h3>
<p>Rewrite the request <code dir="auto">example.com/test</code> to <code dir="auto">test.com/test</code> before forwarding to the backend service</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-vhost: "test.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-vhost: &#x22;test.com&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="redirect">Redirect</h2>
<p>Redirects can change the original client request to a target request.</p>
<h3 id="configure-http-redirect-to-https">Configure HTTP Redirect to HTTPS</h3>
<ul>
<li>higress.io/ssl-redirect: HTTP redirect to HTTPS</li>
<li>higress.io/force-ssl-redirect: HTTP redirect to HTTPS</li>
</ul>
<blockquote>
<p>Note: Higress treats both annotations the same way, both forcibly redirect HTTP to HTTPS.</p>
</blockquote>
<p>Redirect the request <code dir="auto">http://example.com/test</code> to <code dir="auto">https://example.com/test</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/ssl-redirect: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/ssl-redirect: &#x22;true&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="permanent-redirect">Permanent Redirect</h3>
<ul>
<li>higress.io/permanent-redirect: Target URL for permanent redirect, must include scheme (http or https).</li>
<li>higress.io/permanent-redirect-code: HTTP status code for permanent redirect, default is 301.</li>
</ul>
<p>Permanently redirect the request <code dir="auto">http://example.com/test</code> to <code dir="auto">http://example.com/app</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/permanent-redirect: "http://example.com/app"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/permanent-redirect: &#x22;http://example.com/app&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="temporary-redirect">Temporary Redirect</h3>
<ul>
<li>higress.io/temporal-redirect: Target URL for temporary redirect, must include scheme (http or https).</li>
</ul>
<p>Temporarily redirect the request <code dir="auto">http://example.com/test</code> to <code dir="auto">http://example.com/app</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/temporal-redirect: "http://example.com/app"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/temporal-redirect: &#x22;http://example.com/app&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="header-control">Header Control</h2>
<p>With Header Control, you can add, modify, or remove request headers before forwarding requests to backend services, and add, modify, or remove response headers before sending responses back to clients.</p>
<h3 id="request-header-control">Request Header Control</h3>
<ul>
<li>higress.io/request-header-control-add: Add specified headers when forwarding requests to backend services. If the header exists, its value is appended to the original value. Syntax:
<ul>
<li>Single header: Key Value</li>
<li>Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line</li>
</ul>
</li>
<li>higress.io/request-header-control-update: Modify specified headers when forwarding requests to backend services. If the header exists, its value replaces the original value. Syntax:
<ul>
<li>Single header: Key Value</li>
<li>Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line</li>
</ul>
</li>
<li>higress.io/request-header-control-remove: Remove specified headers when forwarding requests to backend services. Syntax:
<ul>
<li>Single header: Key</li>
<li>Multiple headers: Comma-separated</li>
</ul>
</li>
</ul>
<ol>
<li>Add two headers to the request <code dir="auto">example.com/test</code>: <code dir="auto">foo: bar</code> and <code dir="auto">test: true</code>.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">foo bar</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">test true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/request-header-control-add: |\x7F      foo bar\x7F      test true\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Header control can be combined with canary release to color canary traffic. When the request header is <code dir="auto">higress: v1</code>, it will access the canary service demo-service-canary-v1 and add the header <code dir="auto">stage: gray</code>; otherwise, it will access the production service demo-service and add the header <code dir="auto">stage: production</code>. Configuration is as follows:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: "stage gray"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: "stage production"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v1&#x22;\x7F    higress.io/request-header-control-add: &#x22;stage gray&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/request-header-control-add: &#x22;stage production&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="response-header-control">Response Header Control</h3>
<ul>
<li>higress.io/response-header-control-add: Add specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value is appended to the original value. Syntax:
<ul>
<li>Single header: Key Value</li>
<li>Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line</li>
</ul>
</li>
<li>higress.io/response-header-control-update: Modify specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value replaces the original value. Syntax:
<ul>
<li>Single header: Key Value</li>
<li>Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line</li>
</ul>
</li>
<li>higress.io/response-header-control-remove: Remove specified headers after receiving responses from backend services and before forwarding responses to clients. Syntax:
<ul>
<li>Single header: Key</li>
<li>Multiple headers: Comma-separated</li>
</ul>
</li>
</ul>
<p>Remove the header <code dir="auto">req-cost-time</code> from the response to the request <code dir="auto">example.com/test</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/response-header-control-remove: "req-cost-time"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/response-header-control-remove: &#x22;req-cost-time&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="retry">Retry</h2>
<p>Higress provides route-level retry settings, which can automatically retry failed request calls. You can set retry conditions as needed, such as connection establishment failure, backend service unavailability, and responses with specific HTTP status codes.</p>
<ul>
<li>higress.io/proxy-next-upstream-tries: Maximum number of retry attempts. Default is 3.</li>
<li>higress.io/proxy-next-upstream-timeout: Request retry timeout in seconds. No timeout is configured by default.</li>
<li>higress.io/proxy-next-upstream: Request retry conditions, comma-separated; default value is \u201Cerror,timeout\u201D. Valid values are:
<ul>
<li>error: Connection establishment failure, request error 5xx.</li>
<li>timeout: Connection establishment timeout, request error 5xx.</li>
<li>invalid_header: Request error 5xx.</li>
<li>http_xxx: Retry for specific response status codes. For example, http_502, http_403.</li>
<li>non_idempotent: Retry for non-idempotent requests when errors occur. By default, Higress does not retry non-idempotent POST and PATCH requests when errors occur; configuring non_idempotent enables retries.</li>
<li>off: Turn off retries.</li>
</ul>
</li>
</ul>
<p>Set the maximum number of retries for the <code dir="auto">example/test</code> request to 2, retry timeout to 5s, retry only when the response status code is 502, and enable non-idempotent retries.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream-tries: "2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream-timeout: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream: "http_502,non_idempotent"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/proxy-next-upstream-tries: &#x22;2&#x22;\x7F    higress.io/proxy-next-upstream-timeout: &#x22;5&#x22;\x7F    higress.io/proxy-next-upstream: &#x22;http_502,non_idempotent&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="timeout">Timeout</h2>
<p>Higress provides route-level timeout settings. Unlike nginx ingress, it does not distinguish between connection/read-write timeouts, but instead configures the total interface processing delay. When not configured, there is no limit by default; for example, if the backend does not return a response, the gateway will wait indefinitely.</p>
<p>Set timeout to 5s:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/timeout: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/timeout: &#x22;5&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="single-instance-rate-limiting">Single-Instance Rate Limiting</h2>
<blockquote>
<p><strong>Tip</strong>
Higress Commercial Edition has global rate limiting capabilities. For details, see the global rate limiting section in the <a href="https://help.aliyun.com/zh/mse/user-guide/advanced-usage-of-mse-ingress?spm=a2c4g.11186623.0.0.2e3a3db3eYcspD#862f08d03d4d3" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Commercial Edition Documentation</a></p>
</blockquote>
<p>Supports single-instance rate limiting strategies at the route level, limiting the number of requests matching a certain route on each gateway replica to not exceed the threshold within the set time period. This rate limiting is at the single-instance level, meaning the configured threshold applies to flow control on each gateway instance.</p>
<ul>
<li>higress.io/route-limit-rpm: Maximum requests per minute for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.</li>
<li>higress.io/route-limit-rps: Maximum requests per second for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.</li>
<li>higress.io/route-limit-burst-multiplier: Multiplier for instantaneous maximum request count, default is 5.</li>
</ul>
<p>For example:</p>
<p>Limit the maximum number of requests for example.com/test to 100 per minute, with an instantaneous request count of 200. Configuration is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-rpm: "100"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-burst-multiplier: "2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: mse</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/route-limit-rpm: &#x22;100&#x22;\x7F    higress.io/route-limit-burst-multiplier: &#x22;2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: mse\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<p>Limit the maximum number of requests for example.com/test to 10 per second, with an instantaneous request count of 50. Configuration is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-rps: "10"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># Default is 5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># higress.io/route-limit-burst-multiplier: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: mse</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/route-limit-rps: &#x22;10&#x22;\x7F    # Default is 5\x7F    # higress.io/route-limit-burst-multiplier: &#x22;5&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: mse\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="configure-backend-service-protocol-https-or-grpc">Configure Backend Service Protocol: HTTPS or GRPC</h2>
<p>By default, Higress uses the HTTP protocol to forward requests to backend business containers. When your business container uses the HTTPS protocol, you can use the annotation <code dir="auto">higress.io/backend-protocol: "HTTPS"</code>; when your business container is a GRPC service, you can use the annotation <code dir="auto">higress.io/backend-protocol: "GRPC"</code>.</p>
<blockquote>
<p>Note: Compared to Nginx Ingress, one advantage is that if your backend service\u2019s K8s Service resource defines the Port Name as grpc or http2, you don\u2019t need to configure the annotation higress.io/backend-protocol: \u201CGRPC\u201D, as Higress will automatically use GRPC or HTTP2.</p>
</blockquote>
<ol>
<li>Forward the request <code dir="auto">example.com/test</code> to the backend service using the HTTPS protocol.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/backend-protocol: "HTTPS"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: &#x22;HTTPS&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Forward the request <code dir="auto">example/grpcbin.GRPCBin</code> to the backend service using the GRPC protocol.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/backend-protocol: "GRPC"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /grpcbin.GRPCBin</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: &#x22;GRPC&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /grpcbin.GRPCBin\x7F            pathType: Prefix"><div></div></button></div></figure></div>
<h2 id="configure-load-balancing-algorithm-for-backend-services">Configure Load Balancing Algorithm for Backend Services</h2>
<p>Load balancing determines how the gateway selects nodes when forwarding requests to backend services.</p>
<h3 id="common-load-balancing-algorithms">Common Load Balancing Algorithms</h3>
<ul>
<li>higress.io/load-balance: Common load balancing algorithm for backend services. Default is round_robin. Valid values are:
<ul>
<li>round_robin: Round-robin based load balancing.</li>
<li>least_conn: Least connection based load balancing.</li>
<li>random: Random based load balancing.</li>
</ul>
</li>
</ul>
<p>Set the load balancing algorithm for the backend service demo-service to least_conn.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/load-balance: "least_conn"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /order</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/load-balance: &#x22;least_conn&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /order\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="consistent-hash-based-load-balancing-algorithm">Consistent Hash-based Load Balancing Algorithm</h3>
<p>Consistent hash-based load balancing algorithms provide request affinity, where requests with the same characteristics are always routed to the same node. Higress supports using some Nginx variables, request headers, and request path parameters as Hash Keys.</p>
<ul>
<li>higress.io/upstream-hash-by: Consistent hash-based load balancing algorithm. Higress supports the following forms:
<ul>
<li>Supports configuring some nginx variables:
<ul>
<li>$request_uri: Request Path (including path parameters) as Hash Key</li>
<li>$host: Request Host as Hash Key</li>
<li>$remote_addr: Client IP of the request as Hash Key</li>
</ul>
</li>
<li>Consistent hash based on request header. Just configure as $http_headerName.</li>
<li>Consistent hash based on request path parameters. Just configure as $arg_varName.</li>
</ul>
</li>
</ul>
<ol>
<li>Use the client IP of the request as the Hash Key, so requests from the same client IP are always routed to the same node.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$remote_addr"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$remote_addr&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Use the request header x-stage as the Hash Key, so requests with the same x-stage header value are always routed to the same node.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$http_x-stage"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$http_x-stage&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="3">
<li>Use the request path parameter x-stage as the Hash Key, so requests with the same x-stage path parameter value are always routed to the same node.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$arg_x-stage"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$arg_x-stage&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="cookie-affinity-session-persistence">Cookie Affinity (Session Persistence)</h2>
<p>Requests with the same Cookie will always be routed to the same node by the gateway. If the first access carries a Cookie, Higress will generate a Cookie for the client in the first response to ensure that subsequent requests are always routed to the same node by the gateway.</p>
<ul>
<li>higress.io/affinity: Affinity type, currently only supports cookie, default is cookie.</li>
<li>higress.io/affinity-mode: Affinity mode, Higress currently only supports balanced mode, default is balanced mode.</li>
<li>higress.io/session-cookie-name: Configure the value of the specified Cookie as Hash Key, default is INGRESSCOOKIE</li>
<li>higress.io/session-cookie-path: Path value of the generated Cookie when the specified Cookie does not exist, default is /</li>
<li>higress.io/session-cookie-max-age: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.</li>
<li>higress.io/session-cookie-expires: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.</li>
</ul>
<blockquote>
<p>Note: Both max-age and expires can be used to specify cookie expiration time. When session-cookie-max-age and session-cookie-expires are configured simultaneously, Higress prioritizes session-cookie-max-age as the expiration time.</p>
</blockquote>
<ol>
<li>Enable Cookie affinity using Higress\u2019s default configuration, where the Cookie name is INGRESSCOOKIE, Path is /, and the Cookie\u2019s lifecycle is session level.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/affinity: "cookie"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/affinity: &#x22;cookie&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Enable Cookie affinity, where the Cookie name is test, Path is /, and the Cookie\u2019s expiration time is 10s.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/affinity: "cookie"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/session-cookie-name: "test"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/session-cookie-max-age: "10"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/affinity: &#x22;cookie&#x22;\x7F    higress.io/session-cookie-name: &#x22;test&#x22;\x7F    higress.io/session-cookie-max-age: &#x22;10&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="mutual-tls-authentication-between-gateway-and-client-mtls">Mutual TLS Authentication between Gateway and Client (MTLS)</h2>
<p>When HTTPS is enabled, the gateway and client are based on one-way TLS authentication by default. You can enable mutual TLS authentication through the following annotation, allowing the server to verify the client\u2019s legitimacy.</p>
<ul>
<li>higress.io/auth-tls-secret: CA certificate used by the gateway to verify the certificate provided by the client during MTLS handshake. This annotation is mainly used in scenarios where the gateway needs to verify the client\u2019s identity. The secret name format must be: (name of the secret containing the domain certificate)-cacert</li>
</ul>
<p>For example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># The requirement here is that it must be the domain's certificate secret name with the suffix -cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/auth-tls-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret-cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">tls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secretName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">tls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secretName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    # The requirement here is that it must be the domain&#x27;s certificate secret name with the suffix -cacert\x7F    higress.io/auth-tls-secret: tls-secret-cacert\x7F  name: bar\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: bar.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: bar-service\x7F            port:\x7F              number: 5678\x7F        path: /\x7F        pathType: Prefix\x7F  tls:\x7F  - hosts:\x7F    - bar.com\x7F    secretName: tls-secret\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678\x7F        path: /\x7F        pathType: Prefix\x7F  tls:\x7F  - hosts:\x7F    - foo.com\x7F    secretName: tls-secret"><div></div></button></div></figure></div>
<p>The content of the tls-secret-cacert secret must have a key called cacert, for example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cacert</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret-cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  cacert: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\x7Fkind: Secret\x7Fmetadata:\x7F  name: tls-secret-cacert\x7F  namespace: default\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h2 id="mutual-tls-authentication-between-gateway-and-backend-service-mtls">Mutual TLS Authentication between Gateway and Backend Service (MTLS)</h2>
<p>By default, Higress uses the HTTP protocol to forward requests to backend business containers. You can configure Higress to access backend services using the HTTPS protocol with the annotation <code dir="auto">higress.io/backend-protocol: "HTTPS"</code>, but this is one-way TLS, with only the certificate provided by the backend service. Another more secure mode is zero trust, where the gateway verifies the legitimacy of the backend service\u2019s certificate, and similarly, the backend service verifies the legitimacy of the certificate provided by the gateway. This is MTLS, mutual authentication between the gateway and backend service.</p>
<ul>
<li>higress.io/proxy-ssl-secret: Client certificate used by the gateway for backend service to authenticate the gateway, format is secretNamespace/secretName.</li>
<li>higress.io/proxy-ssl-name: SNI used during TLS handshake.</li>
<li>higress.io/proxy-ssl-server-name: on or off. Enable or disable SNI during TLS handshake.</li>
</ul>
<p>Mutual authentication between the gateway and backend service, where the secret name used by the gateway is gateway-cert, namespace is default.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-ssl-secret: "default/gateway-cert"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/proxy-ssl-secret: &#x22;default/gateway-cert&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="configure-tls-version-and-cipher-suites-between-client-and-gateway">Configure TLS Version and Cipher Suites between Client and Gateway</h2>
<p>Currently, Higress\u2019s default minimum TLS version is TLSv1.0, default maximum TLS version is TLSv1.3, and default cipher suites are:</p>
<p>ECDHE-ECDSA-AES128-GCM-SHA256</p>
<p>ECDHE-RSA-AES128-GCM-SHA256</p>
<p>ECDHE-ECDSA-AES128-SHA</p>
<p>ECDHE-RSA-AES128-SHA</p>
<p>AES128-GCM-SHA256</p>
<p>AES128-SHA</p>
<p>ECDHE-ECDSA-AES256-GCM-SHA384</p>
<p>ECDHE-RSA-AES256-GCM-SHA384</p>
<p>ECDHE-ECDSA-AES256-SHA</p>
<p>ECDHE-RSA-AES256-SHA</p>
<p>AES256-GCM-SHA384</p>
<p>AES256-SHA</p>
<p>You can set the minimum or maximum TLS version and cipher suites for specific domains through the following annotations.</p>
<ul>
<li>higress.io/tls-min-protocol-version: Specifies the minimum TLS version, default value is TLSv1.0. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3</li>
<li>higress.io/tls-max-protocol-version: Specifies the maximum TLS version, default value is TLSv1.3. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3</li>
<li>higress.io/ssl-cipher: Specifies TLS cipher suites, multiple can be specified separated by commas, only effective when TLSv1.0~1.2 is used during TLS handshake</li>
</ul>
<p>For example, for the domain example.com, set the minimum TLS version to TLSv1.2 and the maximum version to TLSv1.2. Configuration is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/tls-min-protocol-version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"TLSv1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/tls-max-protocol-version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"TLSv1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mse</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/tls-min-protocol-version: &#x22;TLSv1.2&#x22;\x7F    higress.io/tls-max-protocol-version: &#x22;TLSv1.2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: mse\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>`,n={title:"Advanced Traffic Management with Ingress Annotations",keywords:["Ingress Annotation"],description:"Using Ingress with Annotations to implement advanced traffic management in Higress."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/annotation-use-case.md",i=void 0,c=function(){return`
This document explains how to use Ingress with Annotations to implement advanced traffic management in Higress.

## Prerequisites
- [Install Higress](./quickstart.md)
- Have a Kubernetes cluster with kubectl command-line tool configured

## Canary Release
Higress provides complex routing capabilities, supporting canary release functionality based on Header, Cookie, and weight. Canary release can be implemented by setting annotations. To enable canary release, you need to set the annotation \`higress.io/canary: "true"\`. Different annotations can implement different canary release functionalities.
> Note: When multiple methods are configured simultaneously, the priority of canary selection is: Header-based > Cookie-based > Weight-based (from high to low).

### Header-based Canary Release
- Configure only \`higress.io/canary-by-header\`: Traffic splitting based on Request Header name. When the request contains this Header with a value of "always", the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
- Configure both \`higress.io/canary-by-header\` and \`higress.io/canary-by-header-value\`: Traffic splitting based on Request Header name and value. When the header name and value in the request match this configuration, the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
> Higress supports multiple version services for canary releases (no upper limit).

1. When the request Header is \`higress: always\`, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
  name: demo-canary
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact   
\`\`\`
2. When the request Header is \`higress: v1\`, it will access the canary service demo-service-canary-v1; when the request Header is \`higress: v2\`, it will access the canary service demo-service-canary-v2; otherwise, it will access the production service demo-service. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v2"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

### Cookie-based Canary Release
- higress.io/canary-by-cookie: Traffic splitting based on Cookie Key. When the request's Cookie contains this Key with a value of "always", the traffic will be routed to the canary service; otherwise, the traffic will not be routed to the canary service.
> Note: Cookie-based canary release does not support custom setting of the Key's corresponding value; it can only be "always".

When the request Cookie is \`demo=always\`, it will access the canary service demo-service-canary; otherwise, it will access the production service demo-service. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-cookie: "demo"
  name: demo-canary
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

### Weight-based Canary Release
- higress.io/canary-weight: Sets the percentage of requests to the specified service (value is an integer from 0 to 100)
- higress.io/canary-weight-total: Sets the total weight, default is 100

Configure the weight of canary service demo-service-canary-v1 as 30%, the weight of canary service demo-service-canary-v2 as 20%, and the weight of production service demo-service as 50%.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "30"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "20"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

## Cross-Origin Resource Sharing (CORS)
Cross-Origin Resource Sharing (CORS) allows web application servers to control cross-origin access, enabling secure cross-origin data transmission.
- higress.io/enable-cors: "true" or "false". Enable or disable CORS.
- higress.io/cors-allow-origin: Allowed third-party sites, supports wildcard domains, comma-separated; supports wildcard *. Default value is *, allowing all third-party sites.
- higress.io/cors-allow-methods: Allowed request methods, such as GET, POST, comma-separated; supports wildcard *. Default value is GET, PUT, POST, DELETE, PATCH, OPTIONS.
- higress.io/cors-allow-headers: Allowed request headers, comma-separated; supports wildcard *. Default value is DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization.
- higress.io/cors-expose-headers: Response headers allowed to be exposed to the browser, comma-separated.
- higress.io/cors-allow-credentials: "true" or "false". Whether to allow credentials. Default is allowed.
- higress.io/cors-max-age: Maximum cache time for preflight results, in seconds; default value is 1728000.


Cross-origin requests are restricted to only come from the example.com domain, HTTP methods can only be GET and POST, allowed request header is X-Foo-Bar, and credentials are not allowed.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/enable-cors: "true"
    higress.io/cors-allow-origin: "example.com"
    higress.io/cors-allow-methods: "GET,POST"
    higress.io/cors-allow-headers: "X-Foo-Bar"
    higress.io/cors-allow-credentials: "false"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`
## Rewrite Path and Host
Rewriting can modify the original request's path and host domain before forwarding the request to the target backend service.
- higress.io/rewrite-target: Rewrite Path, supports Capture Group.
- higress.io/upstream-vhost: Rewrite Host.

### Rewrite Path
1. Rewrite the request \`example.com/test\` to \`example.com/dev\` before forwarding to the backend service
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/dev"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. Remove the path prefix /v1 from the request \`example.com/v1/app\` before forwarding to the backend service
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
\`\`\`

3. Change the path prefix /v1 to /v2 for the request \`example.com/v1/app\` before forwarding to the backend service
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/v2/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
\`\`\`

### Rewrite Host
Rewrite the request \`example.com/test\` to \`test.com/test\` before forwarding to the backend service
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Redirect
Redirects can change the original client request to a target request.
### Configure HTTP Redirect to HTTPS
- higress.io/ssl-redirect: HTTP redirect to HTTPS
- higress.io/force-ssl-redirect: HTTP redirect to HTTPS
> Note: Higress treats both annotations the same way, both forcibly redirect HTTP to HTTPS.

Redirect the request \`http://example.com/test\` to \`https://example.com/test\`.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/ssl-redirect: "true"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

### Permanent Redirect
- higress.io/permanent-redirect: Target URL for permanent redirect, must include scheme (http or https).
- higress.io/permanent-redirect-code: HTTP status code for permanent redirect, default is 301.

Permanently redirect the request \`http://example.com/test\` to \`http://example.com/app\`.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/permanent-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

### Temporary Redirect
- higress.io/temporal-redirect: Target URL for temporary redirect, must include scheme (http or https).
  
Temporarily redirect the request \`http://example.com/test\` to \`http://example.com/app\`.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/temporal-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Header Control
With Header Control, you can add, modify, or remove request headers before forwarding requests to backend services, and add, modify, or remove response headers before sending responses back to clients.
### Request Header Control
- higress.io/request-header-control-add: Add specified headers when forwarding requests to backend services. If the header exists, its value is appended to the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/request-header-control-update: Modify specified headers when forwarding requests to backend services. If the header exists, its value replaces the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/request-header-control-remove: Remove specified headers when forwarding requests to backend services. Syntax:
  - Single header: Key
  - Multiple headers: Comma-separated

1. Add two headers to the request \`example.com/test\`: \`foo: bar\` and \`test: true\`.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: |
      foo bar
      test true
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. Header control can be combined with canary release to color canary traffic. When the request header is \`higress: v1\`, it will access the canary service demo-service-canary-v1 and add the header \`stage: gray\`; otherwise, it will access the production service demo-service and add the header \`stage: production\`. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
    higress.io/request-header-control-add: "stage gray"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: "stage production"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`
### Response Header Control
- higress.io/response-header-control-add: Add specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value is appended to the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/response-header-control-update: Modify specified headers after receiving responses from backend services and before forwarding responses to clients. If the header exists, its value replaces the original value. Syntax:
  - Single header: Key Value
  - Multiple headers: Use YAML special symbol |, each Key Value pair on a separate line
- higress.io/response-header-control-remove: Remove specified headers after receiving responses from backend services and before forwarding responses to clients. Syntax:
  - Single header: Key
  - Multiple headers: Comma-separated

Remove the header \`req-cost-time\` from the response to the request \`example.com/test\`.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/response-header-control-remove: "req-cost-time"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Retry
Higress provides route-level retry settings, which can automatically retry failed request calls. You can set retry conditions as needed, such as connection establishment failure, backend service unavailability, and responses with specific HTTP status codes.
- higress.io/proxy-next-upstream-tries: Maximum number of retry attempts. Default is 3.
- higress.io/proxy-next-upstream-timeout: Request retry timeout in seconds. No timeout is configured by default.
- higress.io/proxy-next-upstream: Request retry conditions, comma-separated; default value is "error,timeout". Valid values are:
  - error: Connection establishment failure, request error 5xx.
  - timeout: Connection establishment timeout, request error 5xx.
  - invalid_header: Request error 5xx.
  - http_xxx: Retry for specific response status codes. For example, http_502, http_403.
  - non_idempotent: Retry for non-idempotent requests when errors occur. By default, Higress does not retry non-idempotent POST and PATCH requests when errors occur; configuring non_idempotent enables retries.
  - off: Turn off retries.

Set the maximum number of retries for the \`example/test\` request to 2, retry timeout to 5s, retry only when the response status code is 502, and enable non-idempotent retries.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-next-upstream-tries: "2"
    higress.io/proxy-next-upstream-timeout: "5"
    higress.io/proxy-next-upstream: "http_502,non_idempotent"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Timeout
Higress provides route-level timeout settings. Unlike nginx ingress, it does not distinguish between connection/read-write timeouts, but instead configures the total interface processing delay. When not configured, there is no limit by default; for example, if the backend does not return a response, the gateway will wait indefinitely.

Set timeout to 5s:

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/timeout: "5"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Single-Instance Rate Limiting

> **Tip**
> Higress Commercial Edition has global rate limiting capabilities. For details, see the global rate limiting section in the [Commercial Edition Documentation](https://help.aliyun.com/zh/mse/user-guide/advanced-usage-of-mse-ingress?spm=a2c4g.11186623.0.0.2e3a3db3eYcspD#862f08d03d4d3)

Supports single-instance rate limiting strategies at the route level, limiting the number of requests matching a certain route on each gateway replica to not exceed the threshold within the set time period. This rate limiting is at the single-instance level, meaning the configured threshold applies to flow control on each gateway instance.

- higress.io/route-limit-rpm: Maximum requests per minute for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.
- higress.io/route-limit-rps: Maximum requests per second for routes defined in this Ingress on each gateway instance. The instantaneous maximum request count is this value multiplied by limit-burst-multiplier.
- higress.io/route-limit-burst-multiplier: Multiplier for instantaneous maximum request count, default is 5.

For example:

Limit the maximum number of requests for example.com/test to 100 per minute, with an instantaneous request count of 200. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rpm: "100"
    higress.io/route-limit-burst-multiplier: "2"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

Limit the maximum number of requests for example.com/test to 10 per second, with an instantaneous request count of 50. Configuration is as follows:
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rps: "10"
    # Default is 5
    # higress.io/route-limit-burst-multiplier: "5"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Configure Backend Service Protocol: HTTPS or GRPC
By default, Higress uses the HTTP protocol to forward requests to backend business containers. When your business container uses the HTTPS protocol, you can use the annotation \`higress.io/backend-protocol: "HTTPS"\`; when your business container is a GRPC service, you can use the annotation \`higress.io/backend-protocol: "GRPC"\`.
> Note: Compared to Nginx Ingress, one advantage is that if your backend service's K8s Service resource defines the Port Name as grpc or http2, you don't need to configure the annotation higress.io/backend-protocol: "GRPC", as Higress will automatically use GRPC or HTTP2.

1. Forward the request \`example.com/test\` to the backend service using the HTTPS protocol.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "HTTPS"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /
            pathType: Exact
\`\`\`

2. Forward the request \`example/grpcbin.GRPCBin\` to the backend service using the GRPC protocol.

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "GRPC"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /grpcbin.GRPCBin
            pathType: Prefix
\`\`\`

## Configure Load Balancing Algorithm for Backend Services
Load balancing determines how the gateway selects nodes when forwarding requests to backend services.
### Common Load Balancing Algorithms
- higress.io/load-balance: Common load balancing algorithm for backend services. Default is round_robin. Valid values are:
  - round_robin: Round-robin based load balancing.
  - least_conn: Least connection based load balancing.
  - random: Random based load balancing.

Set the load balancing algorithm for the backend service demo-service to least_conn.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/load-balance: "least_conn"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /order
            pathType: Exact
\`\`\`

### Consistent Hash-based Load Balancing Algorithm
Consistent hash-based load balancing algorithms provide request affinity, where requests with the same characteristics are always routed to the same node. Higress supports using some Nginx variables, request headers, and request path parameters as Hash Keys.
- higress.io/upstream-hash-by: Consistent hash-based load balancing algorithm. Higress supports the following forms:
  - Supports configuring some nginx variables:
    - $request_uri: Request Path (including path parameters) as Hash Key
    - $host: Request Host as Hash Key
    - $remote_addr: Client IP of the request as Hash Key
  - Consistent hash based on request header. Just configure as $http_headerName.
  - Consistent hash based on request path parameters. Just configure as $arg_varName.

1. Use the client IP of the request as the Hash Key, so requests from the same client IP are always routed to the same node.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$remote_addr"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. Use the request header x-stage as the Hash Key, so requests with the same x-stage header value are always routed to the same node.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$http_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

3. Use the request path parameter x-stage as the Hash Key, so requests with the same x-stage path parameter value are always routed to the same node.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$arg_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Cookie Affinity (Session Persistence)
Requests with the same Cookie will always be routed to the same node by the gateway. If the first access carries a Cookie, Higress will generate a Cookie for the client in the first response to ensure that subsequent requests are always routed to the same node by the gateway.
- higress.io/affinity: Affinity type, currently only supports cookie, default is cookie.
- higress.io/affinity-mode: Affinity mode, Higress currently only supports balanced mode, default is balanced mode.
- higress.io/session-cookie-name: Configure the value of the specified Cookie as Hash Key, default is INGRESSCOOKIE
- higress.io/session-cookie-path: Path value of the generated Cookie when the specified Cookie does not exist, default is /
- higress.io/session-cookie-max-age: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.
- higress.io/session-cookie-expires: Expiration time of the generated Cookie when the specified Cookie does not exist, in seconds, default is session level.
> Note: Both max-age and expires can be used to specify cookie expiration time. When session-cookie-max-age and session-cookie-expires are configured simultaneously, Higress prioritizes session-cookie-max-age as the expiration time.

1. Enable Cookie affinity using Higress's default configuration, where the Cookie name is INGRESSCOOKIE, Path is /, and the Cookie's lifecycle is session level.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. Enable Cookie affinity, where the Cookie name is test, Path is /, and the Cookie's expiration time is 10s.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
    higress.io/session-cookie-name: "test"
    higress.io/session-cookie-max-age: "10"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Mutual TLS Authentication between Gateway and Client (MTLS)

When HTTPS is enabled, the gateway and client are based on one-way TLS authentication by default. You can enable mutual TLS authentication through the following annotation, allowing the server to verify the client's legitimacy.

- higress.io/auth-tls-secret: CA certificate used by the gateway to verify the certificate provided by the client during MTLS handshake. This annotation is mainly used in scenarios where the gateway needs to verify the client's identity. The secret name format must be: (name of the secret containing the domain certificate)-cacert

For example:
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # The requirement here is that it must be the domain's certificate secret name with the suffix -cacert
    higress.io/auth-tls-secret: tls-secret-cacert
  name: bar
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: bar.com
    http:
      paths:
      - backend:
          service:
            name: bar-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - bar.com
    secretName: tls-secret
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: foo.com
    http:
      paths:
      - backend:
          service:
            name: foo-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - foo.com
    secretName: tls-secret
\`\`\`

The content of the tls-secret-cacert secret must have a key called cacert, for example:
\`\`\`yaml
apiVersion: v1
data:
  cacert: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
kind: Secret
metadata:
  name: tls-secret-cacert
  namespace: default
type: Opaque
\`\`\`

## Mutual TLS Authentication between Gateway and Backend Service (MTLS)
By default, Higress uses the HTTP protocol to forward requests to backend business containers. You can configure Higress to access backend services using the HTTPS protocol with the annotation \`higress.io/backend-protocol: "HTTPS"\`, but this is one-way TLS, with only the certificate provided by the backend service. Another more secure mode is zero trust, where the gateway verifies the legitimacy of the backend service's certificate, and similarly, the backend service verifies the legitimacy of the certificate provided by the gateway. This is MTLS, mutual authentication between the gateway and backend service.

- higress.io/proxy-ssl-secret: Client certificate used by the gateway for backend service to authenticate the gateway, format is secretNamespace/secretName.
- higress.io/proxy-ssl-name: SNI used during TLS handshake.
- higress.io/proxy-ssl-server-name: on or off. Enable or disable SNI during TLS handshake.

Mutual authentication between the gateway and backend service, where the secret name used by the gateway is gateway-cert, namespace is default.
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-ssl-secret: "default/gateway-cert"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Configure TLS Version and Cipher Suites between Client and Gateway

Currently, Higress's default minimum TLS version is TLSv1.0, default maximum TLS version is TLSv1.3, and default cipher suites are:

ECDHE-ECDSA-AES128-GCM-SHA256

ECDHE-RSA-AES128-GCM-SHA256

ECDHE-ECDSA-AES128-SHA

ECDHE-RSA-AES128-SHA

AES128-GCM-SHA256

AES128-SHA

ECDHE-ECDSA-AES256-GCM-SHA384

ECDHE-RSA-AES256-GCM-SHA384

ECDHE-ECDSA-AES256-SHA

ECDHE-RSA-AES256-SHA

AES256-GCM-SHA384

AES256-SHA

You can set the minimum or maximum TLS version and cipher suites for specific domains through the following annotations.

- higress.io/tls-min-protocol-version: Specifies the minimum TLS version, default value is TLSv1.0. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3
- higress.io/tls-max-protocol-version: Specifies the maximum TLS version, default value is TLSv1.3. Valid values are: TLSv1.0/TLSv1.1/TLSv1.2/TLSv1.3
- higress.io/ssl-cipher: Specifies TLS cipher suites, multiple can be specified separated by commas, only effective when TLSv1.0~1.2 is used during TLS handshake

For example, for the domain example.com, set the minimum TLS version to TLSv1.2 and the maximum version to TLSv1.2. Configuration is as follows:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/tls-min-protocol-version: "TLSv1.2"
    higress.io/tls-max-protocol-version: "TLSv1.2"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`
`},d=function(){return e},l=function(){return[{depth:2,slug:"prerequisites",text:"Prerequisites"},{depth:2,slug:"canary-release",text:"Canary Release"},{depth:3,slug:"header-based-canary-release",text:"Header-based Canary Release"},{depth:3,slug:"cookie-based-canary-release",text:"Cookie-based Canary Release"},{depth:3,slug:"weight-based-canary-release",text:"Weight-based Canary Release"},{depth:2,slug:"cross-origin-resource-sharing-cors",text:"Cross-Origin Resource Sharing (CORS)"},{depth:2,slug:"rewrite-path-and-host",text:"Rewrite Path and Host"},{depth:3,slug:"rewrite-path",text:"Rewrite Path"},{depth:3,slug:"rewrite-host",text:"Rewrite Host"},{depth:2,slug:"redirect",text:"Redirect"},{depth:3,slug:"configure-http-redirect-to-https",text:"Configure HTTP Redirect to HTTPS"},{depth:3,slug:"permanent-redirect",text:"Permanent Redirect"},{depth:3,slug:"temporary-redirect",text:"Temporary Redirect"},{depth:2,slug:"header-control",text:"Header Control"},{depth:3,slug:"request-header-control",text:"Request Header Control"},{depth:3,slug:"response-header-control",text:"Response Header Control"},{depth:2,slug:"retry",text:"Retry"},{depth:2,slug:"timeout",text:"Timeout"},{depth:2,slug:"single-instance-rate-limiting",text:"Single-Instance Rate Limiting"},{depth:2,slug:"configure-backend-service-protocol-https-or-grpc",text:"Configure Backend Service Protocol: HTTPS or GRPC"},{depth:2,slug:"configure-load-balancing-algorithm-for-backend-services",text:"Configure Load Balancing Algorithm for Backend Services"},{depth:3,slug:"common-load-balancing-algorithms",text:"Common Load Balancing Algorithms"},{depth:3,slug:"consistent-hash-based-load-balancing-algorithm",text:"Consistent Hash-based Load Balancing Algorithm"},{depth:2,slug:"cookie-affinity-session-persistence",text:"Cookie Affinity (Session Persistence)"},{depth:2,slug:"mutual-tls-authentication-between-gateway-and-client-mtls",text:"Mutual TLS Authentication between Gateway and Client (MTLS)"},{depth:2,slug:"mutual-tls-authentication-between-gateway-and-backend-service-mtls",text:"Mutual TLS Authentication between Gateway and Backend Service (MTLS)"},{depth:2,slug:"configure-tls-version-and-cipher-suites-between-client-and-gateway",text:"Configure TLS Version and Cipher Suites between Client and Gateway"}]},s=p((f,g,x)=>{const{layout:b,...t}=n;return t.file=a,t.url=i,r`${v()}${y(e)}`})});export{s as Content,u as __tla,d as compiledContent,s as default,a as file,n as frontmatter,l as getHeadings,c as rawContent,i as url};
