import{c as o,__tla as d}from"./astro-component.m4CCZO6J.js";import{r,m as v,u,__tla as E}from"./constant.BwWfJoOA.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,p,c,i,h=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<p>Gateways play a crucial role in system architecture as they serve as the entry point connecting different networks, applications, and services. Web Application Firewall (WAF) is an essential security capability in the gateway domain, designed to identify and protect against malicious traffic patterns for websites or applications. By filtering and cleaning traffic, it ensures only normal, secure traffic reaches the server, preventing performance issues and security breaches caused by malicious intrusions, thereby safeguarding business and data security.</p>
<h2 id="introduction-to-relevant-knowledge">Introduction to Relevant Knowledge</h2>
<h3 id="modsecurity">ModSecurity</h3>
<p><a href="https://github.com/SpiderLabs/ModSecurity" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ModSecurity</a> is an open-source, cross-platform Web Application Firewall (WAF) engine and one of the most widely used open-source WAF products. Its primary function is to analyze and filter incoming HTTP requests to detect and block potential attacks, including:</p>
<ul>
<li>SQL Injection (SQLi): Prevents SQL injection attacks</li>
<li>Cross-Site Scripting (XSS): Blocks cross-site scripting attacks</li>
<li>Local File Inclusion (LFI): Prevents attacks exploiting local file inclusion vulnerabilities</li>
<li>Remote File Inclusion (RFI): Prevents attacks exploiting remote file inclusion vulnerabilities</li>
<li>Remote Code Execution (RCE): Prevents attacks exploiting remote command execution vulnerabilities</li>
<li>PHP Code Injection: Blocks PHP code injection</li>
<li>HTTP Protocol Violations: Prevents malicious access that violates HTTP protocols</li>
<li>HTTPoxy: Prevents attacks exploiting remote proxy infection vulnerabilities</li>
<li>Shellshock: Prevents attacks exploiting Shellshock vulnerabilities</li>
</ul>
<p>ModSecurity implements these features through a rule-based engine that defines patterns and behaviors to match and process.</p>
<h3 id="security-rule-language">Security Rule Language</h3>
<p>ModSecurity Rule Language (also known as SecLang) is a domain-specific language based on regular expressions and pattern matching, used to describe and detect security events and attacks in web applications.</p>
<p>SecLang supports the following basic concepts and syntax structures:</p>
<ul>
<li>Transactions and Rules: Rules in SecLang are organized in transactions, which contain one or more rules. Rules define patterns to match and actions to take upon a match.</li>
<li>Actions: Rules can include various actions such as logging, blocking requests, setting variables, and modifying requests.</li>
<li>Conditions: Rules can use conditional statements to specify actions that should only be executed when certain conditions are met. Conditions can be based on various aspects of the request, such as request method, URI, headers, body, and IP address.</li>
<li>Variables: SecLang supports built-in and user-defined variables for storing and manipulating request and response data. Variables can be used in rule matching, condition evaluation, and action execution.</li>
<li>Operators: SecLang provides various operators for pattern matching, comparison, and logical operations, which are used to build rule conditions and actions.</li>
</ul>
<p>SecLang allows users to write custom rules to specify how potential security issues in HTTP requests and responses should be detected and handled. Rules can define behaviors such as blocking malicious requests, filtering specific data, and intercepting attack types like SQL injection and cross-site scripting (XSS). By using SecLang, users can leverage ModSecurity\u2019s powerful features to protect web applications from various security threats. For more information on SecLang syntax, refer to the <a href="https://coraza.io/docs/seclang/directives/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SecLang Syntax Reference</a>.</p>
<h3 id="owasp-core-rule-set">OWASP Core Rule Set</h3>
<p><a href="https://coreruleset.org/docs/deployment/engine_integration_options/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">OWASP CRS</a> (OWASP ModSecurity Core Rule Set) is a set of ModSecurity rules developed and maintained by the OWASP (Open Web Application Security Project) community. It provides predefined rules to protect web applications from a wide range of security threats and attacks. These rules can be modified to meet the specific security requirements of different web applications.</p>
<h2 id="waf-plugin-protection-principle">WAF Plugin Protection Principle</h2>
<p>The WAF plugin is implemented based on the Higress Wasm Go SDK and <a href="https://coraza.io/docs/tutorials/introduction/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Coraza</a>, following the <a href="https://malware.expert/modsecurity/processing-phases-modsecurity/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Phase specification</a> defined by ModSecurity:</p>
<ul>
<li>Phase 1: Request headers</li>
<li>Phase 2: Request body</li>
<li>Phase 3: Response headers</li>
<li>Phase 4: Response body</li>
<li>Phase 5: Logging</li>
</ul>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b" alt="image" referrerpolicy="no-referrer"></p>
<p>The plugin includes OWASP CRS to provide basic protection features, supports custom protection rules, and offers route/domain-level granular protection.</p>
<h2 id="usage-example">Usage Example</h2>
<p>First, prepare a K8s cluster and install Higress. Refer to the <a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Deployment Guide</a>.</p>
<h3 id="deploy-services-and-create-ingress">Deploy Services and Create Ingress</h3>
<p>Apply the following resources in your K8s cluster to deploy the backend service and ingress:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kennethreitz/httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">IfNotPresent</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-backend</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClusterIP</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"-text=foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default port used by the image</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: httpbin-deployment\x7F  labels:\x7F    app: httpbin-deployment\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: httpbin-deployment\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: httpbin-deployment\x7F    spec:\x7F      containers:\x7F      - image: kennethreitz/httpbin\x7F        imagePullPolicy: IfNotPresent\x7F        name: httpbin-backend\x7F        ports:\x7F        - name: http\x7F          containerPort: 80\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: httpbin-service\x7F  namespace: default\x7F  labels:\x7F    app: httpbin-service\x7Fspec:\x7F  ports:\x7F    - port: 8080\x7F      name: http\x7F      protocol: TCP\x7F      targetPort: 80\x7F  selector:\x7F    app: httpbin-deployment\x7F  type: ClusterIP\x7F---\x7Fkind: Pod\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F---\x7Fkind: Service\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  # Default port used by the image\x7F  - port: 5678\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: httpbin-ingress\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: httpbin-service\x7F                port:\x7F                  number: 8080\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: echo-ingress\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/foo&#x22;\x7F            backend:\x7F              service:\x7F                name: foo-service\x7F                port:\x7F                  number: 5678"><div></div></button></div></figure></div>
<p>Access the two routes (<code dir="auto">/user-agent</code> routes to <code dir="auto">httpbin-service</code>, and <code dir="auto">/foo</code> routes to <code dir="auto">foo-service</code>):</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="install-waf-plugin">Install WAF Plugin</h3>
<p>Apply the following resources in your K8s cluster to deploy the WAF plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">waf-go</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/echo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecAction </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:102,phase:1,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: waf-go\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    useCRS: true\x7F    secRules:\x7F    - &#x22;SecRuleEngine On&#x22;\x7F    - &#x22;SecDebugLogLevel 3&#x22;\x7F    - &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;\x7F  matchRules:\x7F  - ingress:\x7F    - default/echo-ingress\x7F    config:\x7F      secRules:\x7F      - &#x22;SecRuleEngine On&#x22;\x7F      - &#x22;SecDebugLogLevel 3&#x22;\x7F      - &#x22;SecAction \\&#x22;id:102,phase:1,deny\\&#x22;&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1"><div></div></button></div></figure></div>
<p>The above configuration has the following meanings:</p>
<ul>
<li><code dir="auto">defaultConfig</code> contains global protection rules:
<ul>
<li><code dir="auto">useCRS=true</code> indicates that the OWASP CRS security rule set is loaded</li>
<li><code dir="auto">secRules</code> contains three user-defined protection rules.</li>
</ul>
</li>
<li><code dir="auto">matchRules</code> contains route-level protection rules (domain-level is similar), refer to the <a href="https://higress.io/zh-cn/docs/plugins/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Plugin Documentation</a>:
<ul>
<li><code dir="auto">ingress</code> specifies the routes to which the protection rules apply. Here, the route is set to <code dir="auto">echo-ingress</code> in the <code dir="auto">default</code> namespace.</li>
<li><code dir="auto">config</code> contains route-level protection rules with the same structure as <code dir="auto">defaultConfig</code>. In this example, the OWASP CRS rule set is not loaded, and all requests are blocked.</li>
</ul>
</li>
</ul>
<h3 id="request-blocking-example">Request Blocking Example</h3>
<h4 id="custom-rule-protection-test">Custom Rule Protection Test</h4>
<p>Test the following custom rule we defined in the global protection rules:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">SecRule REQUEST_URI "@streq /admin" "id:101,phase:1,t:lowercase,deny"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="SecRule REQUEST_URI &#x22;@streq /admin&#x22; &#x22;id:101,phase:1,t:lowercase,deny&#x22;"><div></div></button></div></figure></div>
<p>This rule blocks all requests to the <code dir="auto">/admin</code> path. When you try to access this path, the request will be blocked by the WAF.</p>
<h2 id="overall-protection-capability-evaluation">Overall Protection Capability Evaluation</h2>
<p><a href="https://github.com/wallarm/gotestwaf" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GoTestWAF</a> is an API and OWASP attack simulation tool that supports various API protocols including REST, GraphQL, gRPC, WebSockets, SOAP, and XMLRPC. It is designed to evaluate web application security solutions such as API security proxies, Web Application Firewalls (WAF), IPS, API gateways, and more.</p>
<p>The tool helps in assessing the effectiveness of your WAF configuration by simulating various attack vectors and measuring the protection level provided by your security setup.</p>`,n={title:"Best Practices for Enabling WAF Protection",keywords:["waf","security","web application firewall"],description:"Learn how to enable and configure WAF protection in Higress",type:"docs"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/waf.md",i=void 0,c=function(){return`
# Best Practices for Enabling WAF Protection

Gateways play a crucial role in system architecture as they serve as the entry point connecting different networks, applications, and services. Web Application Firewall (WAF) is an essential security capability in the gateway domain, designed to identify and protect against malicious traffic patterns for websites or applications. By filtering and cleaning traffic, it ensures only normal, secure traffic reaches the server, preventing performance issues and security breaches caused by malicious intrusions, thereby safeguarding business and data security.

## Introduction to Relevant Knowledge

### ModSecurity
[ModSecurity](https://github.com/SpiderLabs/ModSecurity) is an open-source, cross-platform Web Application Firewall (WAF) engine and one of the most widely used open-source WAF products. Its primary function is to analyze and filter incoming HTTP requests to detect and block potential attacks, including:
- SQL Injection (SQLi): Prevents SQL injection attacks
- Cross-Site Scripting (XSS): Blocks cross-site scripting attacks
- Local File Inclusion (LFI): Prevents attacks exploiting local file inclusion vulnerabilities
- Remote File Inclusion (RFI): Prevents attacks exploiting remote file inclusion vulnerabilities
- Remote Code Execution (RCE): Prevents attacks exploiting remote command execution vulnerabilities
- PHP Code Injection: Blocks PHP code injection
- HTTP Protocol Violations: Prevents malicious access that violates HTTP protocols
- HTTPoxy: Prevents attacks exploiting remote proxy infection vulnerabilities
- Shellshock: Prevents attacks exploiting Shellshock vulnerabilities

ModSecurity implements these features through a rule-based engine that defines patterns and behaviors to match and process.

### Security Rule Language
ModSecurity Rule Language (also known as SecLang) is a domain-specific language based on regular expressions and pattern matching, used to describe and detect security events and attacks in web applications.

SecLang supports the following basic concepts and syntax structures:
- Transactions and Rules: Rules in SecLang are organized in transactions, which contain one or more rules. Rules define patterns to match and actions to take upon a match.
- Actions: Rules can include various actions such as logging, blocking requests, setting variables, and modifying requests.
- Conditions: Rules can use conditional statements to specify actions that should only be executed when certain conditions are met. Conditions can be based on various aspects of the request, such as request method, URI, headers, body, and IP address.
- Variables: SecLang supports built-in and user-defined variables for storing and manipulating request and response data. Variables can be used in rule matching, condition evaluation, and action execution.
- Operators: SecLang provides various operators for pattern matching, comparison, and logical operations, which are used to build rule conditions and actions.

SecLang allows users to write custom rules to specify how potential security issues in HTTP requests and responses should be detected and handled. Rules can define behaviors such as blocking malicious requests, filtering specific data, and intercepting attack types like SQL injection and cross-site scripting (XSS). By using SecLang, users can leverage ModSecurity's powerful features to protect web applications from various security threats. For more information on SecLang syntax, refer to the [SecLang Syntax Reference](https://coraza.io/docs/seclang/directives/).

### OWASP Core Rule Set
[OWASP CRS](https://coreruleset.org/docs/deployment/engine_integration_options/) (OWASP ModSecurity Core Rule Set) is a set of ModSecurity rules developed and maintained by the OWASP (Open Web Application Security Project) community. It provides predefined rules to protect web applications from a wide range of security threats and attacks. These rules can be modified to meet the specific security requirements of different web applications.

## WAF Plugin Protection Principle
The WAF plugin is implemented based on the Higress Wasm Go SDK and [Coraza](https://coraza.io/docs/tutorials/introduction/), following the [Phase specification](https://malware.expert/modsecurity/processing-phases-modsecurity/) defined by ModSecurity:
- Phase 1: Request headers
- Phase 2: Request body
- Phase 3: Response headers
- Phase 4: Response body
- Phase 5: Logging

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b)

The plugin includes OWASP CRS to provide basic protection features, supports custom protection rules, and offers route/domain-level granular protection.

## Usage Example
First, prepare a K8s cluster and install Higress. Refer to the [Higress Deployment Guide](https://higress.cn/docs/latest/ops/deploy-by-helm/).

### Deploy Services and Create Ingress
Apply the following resources in your K8s cluster to deploy the backend service and ingress:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpbin-deployment
  labels:
    app: httpbin-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: httpbin-deployment
  template:
    metadata:
      labels:
        app: httpbin-deployment
    spec:
      containers:
      - image: kennethreitz/httpbin
        imagePullPolicy: IfNotPresent
        name: httpbin-backend
        ports:
        - name: http
          containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: httpbin-service
  namespace: default
  labels:
    app: httpbin-service
spec:
  ports:
    - port: 8080
      name: http
      protocol: TCP
      targetPort: 80
  selector:
    app: httpbin-deployment
  type: ClusterIP
---
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
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: httpbin-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: httpbin-service
                port:
                  number: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: echo-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/foo"
            backend:
              service:
                name: foo-service
                port:
                  number: 5678
\`\`\`

Access the two routes (\`/user-agent\` routes to \`httpbin-service\`, and \`/foo\` routes to \`foo-service\`):

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24)

### Install WAF Plugin
Apply the following resources in your K8s cluster to deploy the WAF plugin:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: waf-go
  namespace: higress-system
spec:
  defaultConfig:
    useCRS: true
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
  matchRules:
  - ingress:
    - default/echo-ingress
    config:
      secRules:
      - "SecRuleEngine On"
      - "SecDebugLogLevel 3"
      - "SecAction \\"id:102,phase:1,deny\\""
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1
\`\`\`

The above configuration has the following meanings:
- \`defaultConfig\` contains global protection rules:
  - \`useCRS=true\` indicates that the OWASP CRS security rule set is loaded
  - \`secRules\` contains three user-defined protection rules.
- \`matchRules\` contains route-level protection rules (domain-level is similar), refer to the [Higress Plugin Documentation](https://higress.io/zh-cn/docs/plugins/intro):
  - \`ingress\` specifies the routes to which the protection rules apply. Here, the route is set to \`echo-ingress\` in the \`default\` namespace.
  - \`config\` contains route-level protection rules with the same structure as \`defaultConfig\`. In this example, the OWASP CRS rule set is not loaded, and all requests are blocked.

### Request Blocking Example
#### Custom Rule Protection Test
Test the following custom rule we defined in the global protection rules:

\`\`\`yaml
SecRule REQUEST_URI "@streq /admin" "id:101,phase:1,t:lowercase,deny"
\`\`\`

This rule blocks all requests to the \`/admin\` path. When you try to access this path, the request will be blocked by the WAF.

## Overall Protection Capability Evaluation
[GoTestWAF](https://github.com/wallarm/gotestwaf) is an API and OWASP attack simulation tool that supports various API protocols including REST, GraphQL, gRPC, WebSockets, SOAP, and XMLRPC. It is designed to evaluate web application security solutions such as API security proxies, Web Application Firewalls (WAF), IPS, API gateways, and more.

The tool helps in assessing the effectiveness of your WAF configuration by simulating various attack vectors and measuring the protection level provided by your security setup.`},l=function(){return s},p=function(){return[{depth:2,slug:"introduction-to-relevant-knowledge",text:"Introduction to Relevant Knowledge"},{depth:3,slug:"modsecurity",text:"ModSecurity"},{depth:3,slug:"security-rule-language",text:"Security Rule Language"},{depth:3,slug:"owasp-core-rule-set",text:"OWASP Core Rule Set"},{depth:2,slug:"waf-plugin-protection-principle",text:"WAF Plugin Protection Principle"},{depth:2,slug:"usage-example",text:"Usage Example"},{depth:3,slug:"deploy-services-and-create-ingress",text:"Deploy Services and Create Ingress"},{depth:3,slug:"install-waf-plugin",text:"Install WAF Plugin"},{depth:3,slug:"request-blocking-example",text:"Request Blocking Example"},{depth:4,slug:"custom-rule-protection-test",text:"Custom Rule Protection Test"},{depth:2,slug:"overall-protection-capability-evaluation",text:"Overall Protection Capability Evaluation"}]},e=o((g,f,m)=>{const{layout:b,...t}=n;return t.file=a,t.url=i,r`${v()}${u(s)}`})});export{e as Content,h as __tla,l as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,c as rawContent,i as url};
