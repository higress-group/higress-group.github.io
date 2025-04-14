import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as E,m as v,u as y,__tla as r}from"./constant.n-J9LWvA.js";import{__tla as F}from"./astro/assets-service.BhtN0nM5.js";let a,i,n,e,t,d,p,g=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return r}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{let s;s=`<p>\u672C\u7AE0\u5F00\u59CB\u8FDB\u5165 Wasm \u63D2\u4EF6\u5F00\u53D1\u7BC7\uFF0C\u4E3B\u8981\u4ECB\u7ECD Wasm \u63D2\u4EF6\u914D\u7F6E\u3001Higress WasmPlugin CRD \u4EE5\u53CA\u5982\u4F55\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002</p>
<h2 id="1-\u6D4B\u8BD5\u73AF\u5883\u51C6\u5907">1 \u6D4B\u8BD5\u73AF\u5883\u51C6\u5907</h2>
<blockquote>
<p>Higress \u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u7F51\u5173\u5730\u5740\u662F 127.0.0.1\uFF0C\u7AEF\u53E3\u662F 80 \u548C 443\u3002</p>
</blockquote>
<p>\u51C6\u5907 echo-server \u548C Ingress, \u5176 YAML \u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Namespace</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POD_NAME</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NAMESPACE</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">10m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"foo.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bar.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-baz</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"baz.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: Namespace\x7Fmetadata:\x7F  name: higress-course\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: echo-server\x7F  namespace: higress-course\x7Fspec:\x7F  selector:\x7F    app: echo-server\x7F  ports:\x7F    - protocol: TCP\x7F      port: 8080\x7F      targetPort: 3000\x7F---\x7FapiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: echo-server\x7F  namespace: higress-course\x7F  labels:\x7F    app: echo-server\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: echo-server\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: echo-server\x7F    spec:\x7F      containers:\x7F        - name: echo-server\x7F          image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0\x7F          env:\x7F            - name: POD_NAME\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.name\x7F            - name: NAMESPACE\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.namespace\x7F          resources:\x7F            requests:\x7F              cpu: 10m\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: ingress-foo\x7F  namespace: higress-course\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: &#x22;foo.com&#x22;\x7F      http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: echo-server\x7F                port:\x7F                  number: 8080\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: ingress-bar\x7F  namespace: higress-course\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: &#x22;bar.com&#x22;\x7F      http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: echo-server\x7F                port:\x7F                  number: 8080\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: ingress-baz\x7F  namespace: higress-course\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: &#x22;baz.com&#x22;\x7F      http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: echo-server\x7F                port:\x7F                  number: 8080"><div></div></button></div></figure></div>
<h2 id="2-wasm-\u63D2\u4EF6\u914D\u7F6E">2 Wasm \u63D2\u4EF6\u914D\u7F6E</h2>
<p>Higress WasmPlugin \u5728 Istio WasmPlugin \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u652F\u6301\u5168\u5C40\u3001\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u914D\u7F6E\u3002\u8FD9 4 \u4E2A\u914D\u7F6E\u4F18\u5148\u7EA7\u662F\uFF1A\u8DEF\u7531\u7EA7 > \u57DF\u540D\u7EA7 > \u670D\u52A1\u7EA7 > \u5168\u5C40\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u5339\u914D\u5230\u5177\u4F53\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u8BF7\u6C42\u624D\u4F1A\u5E94\u7528\u5168\u5C40\u914D\u7F6E\u3002</p>
<p>\u4E0B\u9762\u4EE5 Higress \u5B98\u65B9\u63D0\u4F9B\u7684 <a href="https://higress.io/zh-cn/docs/plugins/transformation/custom-response" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">custom-response</a> \u63D2\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002custom-response \u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u5305\u62EC HTTP \u54CD\u5E94\u72B6\u6001\u7801\u3001HTTP \u54CD\u5E94\u5934\uFF0C\u4EE5\u53CA HTTP \u54CD\u5E94\u4F53\u3002custom-response \u63D2\u4EF6\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u6A21\u62DF\u54CD\u5E94\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u72B6\u6001\u7801\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002\u4F8B\u5982\uFF0C\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\uFF0C\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002</p>
<p>\u5E94\u7528 custom-response \u63D2\u4EF6\uFF0CYAML \u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">custom-response</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">key1=value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"body"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">key2=value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"body"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">bar</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-course/ingress-baz</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># higress-course \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A ingress-baz \u7684 ingress \u4F1A\u5E94\u7528\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">key3=value3</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"body"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">baz</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: custom-response\x7F  namespace: higress-system\x7Fspec:\x7F  priority: 200\x7F  # \u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E\x7F  defaultConfig:\x7F    headers:\x7F      - key1=value1\x7F    &#x22;body&#x22;: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;foo\\&#x22;}&#x22;\x7F  matchRules:\x7F    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E\x7F    - domain:\x7F        - bar.com\x7F      config:\x7F        headers:\x7F          - key2=value2\x7F        &#x22;body&#x22;: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;bar\\&#x22;}&#x22;\x7F    # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E\x7F    - ingress:\x7F        - higress-course/ingress-baz\x7F      # higress-course \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A ingress-baz \u7684 ingress \u4F1A\u5E94\u7528\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\x7F      config:\x7F        headers:\x7F          - key3=value3\x7F        &#x22;body&#x22;: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;baz\\&#x22;}&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE foo.com\uFF0C\u7531\u4E8E\u8BF7\u6C42\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u57DF\u540D\u7EA7\u6216\u8DEF\u7531\u7EA7\u914D\u7F6E\uFF0C\u56E0\u6B64\u6700\u7EC8\u5E94\u7528\u4E86\u5168\u5C40\u914D\u7F6E\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: foo.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Trying 127.0.0.1:80...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connected to 127.0.0.1 (</span><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8">) port 80 (#0)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Host: foo.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> User-Agent: curl/8.1.2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Accept: </span><span style="--0:#F97583">*</span><span style="--0:#E1E4E8">/</span><span style="--0:#F97583">*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> key1: value1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: application/json; charset</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 15</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Sun, 14 Jul 2024 02:45:51 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"hello"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"foo"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Host: foo.com&#x22;  http://127.0.0.1/\x7F\x7F* Trying 127.0.0.1:80...\x7F* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\x7F> GET / HTTP/1.1\x7F> Host: foo.com\x7F> User-Agent: curl/8.1.2\x7F> Accept: */*\x7F>\x7F< HTTP/1.1 200 OK\x7F< key1: value1\x7F< content-type: application/json; charset=utf-8\x7F< content-length: 15\x7F< date: Sun, 14 Jul 2024 02:45:51 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7F{&#x22;hello&#x22;:&#x22;foo&#x22;}"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE bar.com\uFF0C\u8BF7\u6C42\u5339\u914D\u57DF\u540D\u7EA7\u914D\u7F6E\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: bar.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Trying 127.0.0.1:80...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connected to 127.0.0.1 (</span><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8">) port 80 (#0)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Host: bar.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> User-Agent: curl/8.1.2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Accept: </span><span style="--0:#F97583">*</span><span style="--0:#E1E4E8">/</span><span style="--0:#F97583">*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> key2: value2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: application/json; charset</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 15</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Sun, 14 Jul 2024 02:47:51 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"hello"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"bar"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Host: bar.com&#x22;  http://127.0.0.1/\x7F\x7F* Trying 127.0.0.1:80...\x7F* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\x7F> GET / HTTP/1.1\x7F> Host: bar.com\x7F> User-Agent: curl/8.1.2\x7F> Accept: */*\x7F>\x7F< HTTP/1.1 200 OK\x7F< key2: value2\x7F< content-type: application/json; charset=utf-8\x7F< content-length: 15\x7F< date: Sun, 14 Jul 2024 02:47:51 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7F{&#x22;hello&#x22;:&#x22;bar&#x22;}"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE baz.com\uFF0C\u8BF7\u6C42\u5339\u914D\u8DEF\u7531\u7EA7\u914D\u7F6E\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: baz.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Trying 127.0.0.1:80...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connected to 127.0.0.1 (</span><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8">) port 80 (#0)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Host: baz.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> User-Agent: curl/8.1.2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Accept: </span><span style="--0:#F97583">*</span><span style="--0:#E1E4E8">/</span><span style="--0:#F97583">*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> key3: value3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: application/json; charset</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 15</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Sun, 14 Jul 2024 08:44:03 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"hello"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"baz"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Host: baz.com&#x22;  http://127.0.0.1/\x7F\x7F* Trying 127.0.0.1:80...\x7F* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)\x7F> GET / HTTP/1.1\x7F> Host: baz.com\x7F> User-Agent: curl/8.1.2\x7F> Accept: */*\x7F>\x7F< HTTP/1.1 200 OK\x7F< key3: value3\x7F< content-type: application/json; charset=utf-8\x7F< content-length: 15\x7F< date: Sun, 14 Jul 2024 08:44:03 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7F{&#x22;hello&#x22;:&#x22;baz&#x22;}"><div></div></button></div></figure></div>
<p>\u6D4B\u8BD5\u5B8C\u6210\u540E\u5220\u9664 <code dir="auto">custom-response</code> WasmPlugin\uFF0C\u907F\u514D\u5BF9\u540E\u7EED\u6D4B\u8BD5\u4EA7\u751F\u5F71\u54CD\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">delete</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasmplugin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">custom-response</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl delete wasmplugin custom-response -n higress-system"><div></div></button></div></figure></div>
<h2 id="3-higress-wasmplugin-crd">3 Higress WasmPlugin CRD</h2>
<p>Higress WasmPlugin CRD \u5728 <a href="https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Istio WasmPlugin CRD</a> \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u65B0\u589E <code dir="auto">defaultConfig</code> \u548C <code dir="auto">matchRules</code> \u5B57\u6BB5\uFF0C\u7528\u4E8E\u914D\u7F6E\u63D2\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\u548C\u8DEF\u7531\u7EA7\u3001\u57DF\u540D\u7EA7\u914D\u7F6E\u3002</p>
<p>\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>







































































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">pluginName</code></td><td>string</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u540D\u79F0</td></tr><tr><td><code dir="auto">phase</code></td><td>string</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u63D2\u5165\u63D2\u4EF6\u94FE\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F UNSPECIFIED_PHASE</td></tr><tr><td><code dir="auto">priority</code></td><td>int</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5728\u76F8\u540C <code dir="auto">phase</code> \u4E0B\uFF0C\u503C\u8D8A\u5927\u8D8A\u5148\u5904\u7406\u8BF7\u6C42\uFF0C\u4F46\u8D8A\u540E\u5904\u7406\u54CD\u5E94</td></tr><tr><td><code dir="auto">imagePullPolicy</code></td><td>string</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u955C\u50CF\u62C9\u53D6\u7B56\u7565\uFF0C\u53EF\u9009\u503C\u6709\uFF1A<code dir="auto">UNSPECIFIED_POLICY</code>\uFF08\u9ED8\u8BA4\u503C\uFF09\u3001<code dir="auto">IfNotPresent</code>\u3001<code dir="auto">Always</code></td></tr><tr><td><code dir="auto">imagePullSecret</code></td><td>string</td><td>\u9009\u586B</td><td>\u7528\u4E8E\u62C9\u53D6 OCI \u955C\u50CF\u7684\u51ED\u636E\u3002\u4E0E WasmPlugin \u5728\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D\u7684Kubernetes Secret \u7684\u540D\u79F0</td></tr><tr><td><code dir="auto">url</code></td><td>string</td><td>\u5FC5\u586B</td><td>Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 URL\uFF0C\u9ED8\u8BA4\u4E3A <code dir="auto">oci://</code>\uFF0C\u5F15\u7528 OCI \u955C\u50CF\u3002\u540C\u65F6\u652F\u6301 <code dir="auto">file://</code>\uFF0C\u7528\u4E8E\u5BB9\u5668\u672C\u5730\u7684 Wasm \u6587\u4EF6\uFF0C\u4EE5\u53CA <code dir="auto">http[s]://</code>\uFF0C\u7528\u4E8E\u5F15\u7528\u8FDC\u7A0B\u6258\u7BA1\u7684 Wasm \u6587\u4EF6</td></tr><tr><td><code dir="auto">Sha256</code></td><td>string</td><td>\u9009\u586B</td><td>\u7528\u4E8E\u9A8C\u8BC1 Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 SHA256 \u6821\u9A8C\u548C</td></tr><tr><td><code dir="auto">defaultConfig</code></td><td>object</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u4E8E\u6CA1\u6709\u5339\u914D\u5177\u4F53\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u7684\u8BF7\u6C42</td></tr><tr><td><code dir="auto">defaultConfigDisable</code></td><td>bool</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\u662F\u5426\u5931\u6548\uFF0C\u9ED8\u8BA4\u503C\u662F false</td></tr><tr><td><code dir="auto">matchRules</code></td><td>array of object</td><td>\u9009\u586B</td><td>\u5339\u914D\u57DF\u540D\u6216\u8DEF\u7531\u751F\u6548\u7684\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">phase</code> \u914D\u7F6E\u8BF4\u660E\uFF1A</p>

























<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">UNSPECIFIED_PHASE</code></td><td>\u5728\u63D2\u4EF6\u8FC7\u6EE4\u5668\u94FE\u7684\u672B\u7AEF\uFF0C\u5728\u8DEF\u7531\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u63D2\u4EF6\u7684 <code dir="auto">phase</code>\uFF0C\u5219\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A <code dir="auto">UNSPECIFIED_PHASE</code></td></tr><tr><td><code dir="auto">AUTHN</code></td><td>\u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6</td></tr><tr><td><code dir="auto">AUTHZ</code></td><td>\u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6</td></tr><tr><td><code dir="auto">STATS</code></td><td>\u5728 Istio \u7EDF\u8BA1\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6</td></tr></tbody></table>
<p><code dir="auto">matchRules</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A</p>















































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u914D\u7F6E\u793A\u4F8B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">ingress</code></td><td>\u5B57\u7B26\u4E32\u6570\u7EC4</td><td><code dir="auto">ingress</code>\u3001<code dir="auto">domain</code> \u548C <code dir="auto">service</code> \u4E2D\u5FC5\u586B\u4E00\u9879</td><td>[\u201Cdefault/foo\u201D, \u201Cdefault/bar\u201D]</td><td>\u5339\u914D ingress \u8D44\u6E90\u5BF9\u8C61\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A: <code dir="auto">\u547D\u540D\u7A7A\u95F4/ingress\u540D\u79F0</code></td></tr><tr><td><code dir="auto">domain</code></td><td>\u5B57\u7B26\u4E32\u6570\u7EC4</td><td><code dir="auto">ingress</code>\u3001<code dir="auto">domain</code> \u548C <code dir="auto">service</code> \u4E2D\u5FC5\u586B\u4E00\u9879</td><td>[\u201Cexample.com\u201D, \u201C*.test.com\u201D]</td><td>\u5339\u914D\u57DF\u540D\uFF0C\u652F\u6301\u6CDB\u57DF\u540D</td></tr><tr><td><code dir="auto">service</code></td><td>\u5B57\u7B26\u4E32\u6570\u7EC4</td><td><code dir="auto">ingress</code>\u3001<code dir="auto">domain</code> \u548C <code dir="auto">service</code> \u4E2D\u5FC5\u586B\u4E00\u9879</td><td>[\u201Cecho-server.higress-course.svc.cluster.local\u201D]</td><td>\u5339\u914D\u670D\u52A1\u540D\u79F0</td></tr><tr><td><code dir="auto">config</code></td><td>\u5BF9\u8C61</td><td>\u9009\u586B</td><td>-</td><td>\u5339\u914D\u540E\u751F\u6548\u7684\u63D2\u4EF6\u914D\u7F6E</td></tr><tr><td><code dir="auto">configDisable</code></td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A false</td></tr></tbody></table>
<h2 id="4-\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1">4 \u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1</h2>
<p>\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u65E5\u5FD7\u63D2\u4EF6 <code dir="auto">easy-logger</code>, \u8FD9\u4E2A\u63D2\u4EF6\u6839\u636E\u914D\u7F6E\u8BB0\u5F55\u8BF7\u6C42\u548C\u54CD\u5E94\u5230\u7F51\u5173\u65E5\u5FD7\u4E2D\u3002\u6574\u4E2A\u8FC7\u7A0B\u6D89\u53CA\u5230\u63D2\u4EF6\u5F00\u53D1\u73AF\u5883\u51C6\u5907\u3001\u5F00\u53D1\u548C\u6D4B\u8BD5\u3001\u90E8\u7F72\u548C\u9A8C\u8BC1\u3002</p>
<h3 id="41-\u73AF\u5883\u51C6\u5907">4.1 \u73AF\u5883\u51C6\u5907</h3>
<p>\u73AF\u5883\u51C6\u5907\u5982\u4E0B\uFF1A</p>
<ul>
<li>Docker \u5B98\u65B9\u5B89\u88C5\u8FDE\u63A5\uFF1A<a href="https://docs.docker.com/engine/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://docs.docker.com/engine/install/</a></li>
<li>Go \u7248\u672C: >= 1.19 (\u9700\u8981\u652F\u6301\u8303\u578B\u7279\u6027)\uFF0C\u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1A<a href="https://go.dev/doc/install" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/doc/install</a></li>
</ul>
<p>\u5982\u679C\u9009\u62E9\u7528 TinyGo \u5728\u672C\u5730\u6784\u5EFA Wasm \u6587\u4EF6\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\uFF0C\u9700\u8981\u5B89\u88C5 TinyGo\uFF0C\u5176\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A</p>
<ul>
<li>TinyGo \u7248\u672C: >= 0.28.1 (\u5EFA\u8BAE\u7248\u672C 0.28.1) \u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1A<a href="https://tinygo.org/getting-started/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://tinygo.org/getting-started/install/</a></li>
</ul>
<h3 id="42-\u5F00\u53D1\u548C\u6D4B\u8BD5">4.2 \u5F00\u53D1\u548C\u6D4B\u8BD5</h3>
<h4 id="421-\u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55">4.2.1 \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55</h4>
<ol>
<li>\u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6 easy-logger\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mkdir</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">easy-logger</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mkdir easy-logger"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521D\u59CB\u5316 Go \u5DE5\u7A0B\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">init</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">easy-logger</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod init easy-logger"><div></div></button></div></figure></div>
<p>go.mod \u6587\u4EF6\u4E2D go \u7248\u672C\u9700\u8981\u8BBE\u7F6E\u4E3A 1.19\uFF0C\u7531\u4E8E\u5728 4.3.3 \u8282\u4E2D\u6211\u4EEC\u5C06\u4F7F\u7528 1.19 \u7248\u672C\u7684 wasm-go-builder \u955C\u50CF\u6765\u6784\u5EFA\u63D2\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u4FDD\u6301\u4E24\u8005\u7684 go \u7248\u672C\u4E00\u81F4\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">module</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">easy-logger</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1.19</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="module easy-logger\x7F\x7Fgo 1.19"><div></div></button></div></figure></div>
<ol start="3">
<li>\u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">env</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-w</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=https://proxy.golang.com.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go env -w GOPROXY=https://proxy.golang.com.cn,direct"><div></div></button></div></figure></div>
<ol start="4">
<li>\u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/higress-group/proxy-wasm-go-sdk</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/alibaba/higress/plugins/wasm-go@main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/tidwall/gjson</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go get github.com/higress-group/proxy-wasm-go-sdk\x7Fgo get github.com/alibaba/higress/plugins/wasm-go@main\x7Fgo get github.com/tidwall/gjson"><div></div></button></div></figure></div>
<h4 id="422-\u7F16\u5199-maingo-\u6587\u4EF6">4.2.2 \u7F16\u5199 main.go \u6587\u4EF6</h4>
<p>\u9996\u5148\uFF0C\u6211\u4EEC\u7F16\u5199 easy-logger \u63D2\u4EF6\u7684\u57FA\u672C\u6846\u67B6\uFF0C\u6682\u65F6\u53EA\u8BFB\u53D6\u6211\u4EEC\u8BBE\u7F6E\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u4E0D\u5728\u8BF7\u6C42\u548C\u54CD\u5E94\u9636\u6BB5\u8FDB\u884C\u4EFB\u4F55\u5904\u7406\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u63D2\u4EF6\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"easy-logger"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestBodyBy</span><span style="--0:#E1E4E8">(onHttpRequestBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseHeadersBy</span><span style="--0:#E1E4E8">(onHttpResponseHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseBodyBy</span><span style="--0:#E1E4E8">(onHttpResponseBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u662F\u5426\u6253\u5370\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">request </span><span style="--0:#F97583">bool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u662F\u5426\u6253\u5370\u54CD\u5E94</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">response </span><span style="--0:#F97583">bool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">responseStatusCodes </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"parseConfig()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.request </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"request"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Bool</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.response </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"response"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Bool</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.responseStatusCodes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"responseStatusCodes"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.responseStatusCodes </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.responseStatusCodes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"parse config:</span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, config)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpRequestHeaders()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestBody</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpRequestBody()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseBody</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpResponseBody()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpResponseHeaders()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    // \u63D2\u4EF6\u540D\u79F0\x7F    &#x22;easy-logger&#x22;,\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53\x7F    wrapper.ProcessRequestBodyBy(onHttpRequestBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934\x7F    wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53\x7F    wrapper.ProcessResponseBodyBy(onHttpResponseBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53\x7F    //wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53\x7F    //wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),\x7F  )\x7F}\x7F\x7F// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\x7Ftype LoggerConfig struct {\x7F  // \u662F\u5426\u6253\u5370\u8BF7\u6C42\x7F  request bool\x7F  // \u662F\u5426\u6253\u5370\u54CD\u5E94\x7F  response bool\x7F  // \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *\x7F  responseStatusCodes string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {\x7F  log.Debugf(&#x22;parseConfig()&#x22;)\x7F  config.request = json.Get(&#x22;request&#x22;).Bool()\x7F  config.response = json.Get(&#x22;response&#x22;).Bool()\x7F  config.responseStatusCodes = json.Get(&#x22;responseStatusCodes&#x22;).String()\x7F  if config.responseStatusCodes == &#x22;&#x22; {\x7F    config.responseStatusCodes = &#x22;*&#x22;\x7F  }\x7F  log.Debugf(&#x22;parse config:%v&#x22;, config)\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpRequestHeaders()&#x22;)\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpRequestBody()&#x22;)\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpResponseBody()&#x22;)\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpResponseHeaders()&#x22;)\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<p>Higress \u63D2\u4EF6 SDK \u5F00\u53D1\u6D89\u53CA\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p>
<ul>
<li>wrapper.HttpContext\uFF1A\u8BF7\u6C42\u4E0A\u4E0B\u6587\u3002</li>
<li>LoggerConfig\uFF1A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\u3002</li>
<li>wrapper.Log\uFF1A\u63D2\u4EF6\u65E5\u5FD7\u5DE5\u5177\u3002</li>
<li>wrapper.ProcessXXXX\uFF1A\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002</li>
<li>proxywasm\uFF1A\u63D0\u4F9B\u63D2\u4EF6\u5DE5\u5177\u51FD\u6570\u5305\u3002</li>
</ul>
<p>wrapper \u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u5305\u542B\u4EE5\u4E0B\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u8BBE\u7F6E\u4EE5\u4E0B\u94A9\u5B50\u51FD\u6570\uFF1A</p>
<ul>
<li>wrapper.ParseConfigBy(parseConfig)\uFF1A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\u3002</li>
<li>wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\u3002</li>
<li>wrapper.ProcessRequestBodyBy(onHttpRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53\u3002</li>
<li>wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934\u3002</li>
<li>wrapper.ProcessResponseBodyBy(onHttpResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53\u3002</li>
<li>wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53\u3002</li>
<li>wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53\u3002</li>
</ul>
<p>\u5173\u4E8E Higress \u63D2\u4EF6 SDK \u5185\u5BB9\u4F1A\u5728\u540E\u7EED\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u5C55\u5F00\u3002</p>
<h4 id="433-\u672C\u5730\u6D4B\u8BD5">4.3.3 \u672C\u5730\u6D4B\u8BD5</h4>
<ol>
<li>\u7B2C\u4E00\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\u3002\u7F51\u5173\u5728 10000 \u7AEF\u53E3\u76D1\u542C HTTP \u8BF7\u6C42\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230 echo-server \u670D\u52A1\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9901</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">listener_0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">scheme_header_transformation</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">scheme_to_overwrite</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">stat_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress_http</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">route_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_route</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">virtual_hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">cluster</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.wasm.runtime.v8</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                                </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">"request": true,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">"response": true,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">"responseStatusCodes": "200,500,502,503"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.router.v3.Router</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">clusters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">connect_timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">30s</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LOGICAL_DNS</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dns_lookup_family</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">V4_ONLY</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lb_policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ROUND_ROBIN</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">load_assignment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">cluster_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">lb_endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="admin:\x7F  address:\x7F    socket_address:\x7F      protocol: TCP\x7F      address: 0.0.0.0\x7F      port_value: 9901\x7Fstatic_resources:\x7F  listeners:\x7F    - name: listener_0\x7F      address:\x7F        socket_address:\x7F          protocol: TCP\x7F          address: 0.0.0.0\x7F          port_value: 10000\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.filters.network.http_connection_manager\x7F              typed_config:\x7F                &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\x7F                scheme_header_transformation:\x7F                  scheme_to_overwrite: https\x7F                stat_prefix: ingress_http\x7F                route_config:\x7F                  name: local_route\x7F                  virtual_hosts:\x7F                    - name: local_service\x7F                      domains: [&#x22;*&#x22;]\x7F                      routes:\x7F                        - match:\x7F                            prefix: &#x22;/&#x22;\x7F                          route:\x7F                            cluster: echo-server\x7F                http_filters:\x7F                  - name: wasmdemo\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F                      value:\x7F                        config:\x7F                          name: wasmdemo\x7F                          vm_config:\x7F                            runtime: envoy.wasm.runtime.v8\x7F                            code:\x7F                              local:\x7F                                filename: /etc/envoy/plugin.wasm\x7F                          configuration:\x7F                            &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F                            value: |-\x7F                              {\x7F                                &#x22;request&#x22;: true,\x7F                                &#x22;response&#x22;: true,\x7F                                &#x22;responseStatusCodes&#x22;: &#x22;200,500,502,503&#x22;\x7F                              }\x7F                  - name: envoy.filters.http.router\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\x7F  clusters:\x7F    - name: echo-server\x7F      connect_timeout: 30s\x7F      type: LOGICAL_DNS\x7F      dns_lookup_family: V4_ONLY\x7F      lb_policy: ROUND_ROBIN\x7F      load_assignment:\x7F        cluster_name: echo-server\x7F        endpoints:\x7F          - lb_endpoints:\x7F              - endpoint:\x7F                  address:\x7F                    socket_address:\x7F                      address: echo-server\x7F                      port_value: 3000"><div></div></button></div></figure></div>
<p>\u63D2\u4EF6\u901A\u8FC7\u672C\u5730\u6587\u4EF6\u7684\u65B9\u5F0F\u52A0\u8F7D\u5230 Envoy \u4E2D\uFF0C\u63D2\u4EF6\u914D\u7F6E\u7684\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"request": true,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"response": true,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"responseStatusCodes": "200,500,502,503"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  configuration:\x7F    &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F    value: |-\x7F      {\x7F        &#x22;request&#x22;: true,\x7F        &#x22;response&#x22;: true,\x7F        &#x22;responseStatusCodes&#x22;: &#x22;200,500,502,503&#x22;\x7F      }"><div></div></button></div></figure></div>
<ol start="2">
<li>\u7B2C\u4E8C\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.9'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">envoy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">entrypoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/usr/local/bin/envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u610F\u8FD9\u91CC\u5BF9 Wasm \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u65F6\u8BF7\u4F7F\u7528\u9ED8\u8BA4\u7684 info \u7EA7\u522B</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5982\u679C\u9700\u8981\u5C06 Envoy \u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u4E3A debug\uFF0C\u5C06 --log-level \u53C2\u6570\u8BBE\u7F6E\u4E3A debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">command</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">-c /etc/envoy/envoy.yaml --log-level info --log-path /etc/envoy/envoy.log --component-log-level wasm:debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">depends_on</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"10000:10000"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"9901:9901"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.yaml:/etc/envoy/envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./build/plugin.wasm:/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.log:/etc/envoy/envoy.log</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">echo-server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"3000:3000"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">wasmtest</span><span style="--0:#E1E4E8">: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.9&#x27;\x7Fservices:\x7F  envoy:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1\x7F    entrypoint: /usr/local/bin/envoy\x7F    # \u6CE8\u610F\u8FD9\u91CC\u5BF9 Wasm \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u65F6\u8BF7\u4F7F\u7528\u9ED8\u8BA4\u7684 info \u7EA7\u522B\x7F    # \u5982\u679C\u9700\u8981\u5C06 Envoy \u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u4E3A debug\uFF0C\u5C06 --log-level \u53C2\u6570\u8BBE\u7F6E\u4E3A debug\x7F    command: -c /etc/envoy/envoy.yaml --log-level info --log-path /etc/envoy/envoy.log --component-log-level wasm:debug\x7F    depends_on:\x7F      - echo-server\x7F    networks:\x7F      - wasmtest\x7F    ports:\x7F      - &#x22;10000:10000&#x22;\x7F      - &#x22;9901:9901&#x22;\x7F    volumes:\x7F      - ./envoy.yaml:/etc/envoy/envoy.yaml\x7F      - ./build/plugin.wasm:/etc/envoy/plugin.wasm\x7F      - ./envoy.log:/etc/envoy/envoy.log\x7F  echo-server:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0\x7F    networks:\x7F      - wasmtest\x7F    ports:\x7F      - &#x22;3000:3000&#x22;\x7Fnetworks:\x7F  wasmtest: {}"><div></div></button></div></figure></div>
<ol start="3">
<li>\u7B2C\u4E09\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Dockerfile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">ARG BUILDER=higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go1.19-tinygo0.28.1-oras1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">FROM $BUILDER as builder</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">ARG GOPROXY</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">ENV GOPROXY=\${GOPROXY}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">ARG EXTRA_TAGS=""</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">ENV EXTRA_TAGS=\${EXTRA_TAGS}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">WORKDIR /workspace</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">COPY . .</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">RUN go mod tidy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">RUN tinygo build -o /main.wasm -scheduler=none -gc=custom -tags="custommalloc nottinygc_finalizer $EXTRA_TAGS" -target=wasi ./main.go</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">FROM scratch as output</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">COPY --from=builder /main.wasm plugin.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ARG BUILDER=higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go1.19-tinygo0.28.1-oras1.0.0\x7FFROM $BUILDER as builder\x7F\x7FARG GOPROXY\x7FENV GOPROXY=\${GOPROXY}\x7F\x7FARG EXTRA_TAGS=&#x22;&#x22;\x7FENV EXTRA_TAGS=\${EXTRA_TAGS}\x7F\x7FWORKDIR /workspace\x7FCOPY . .\x7FRUN go mod tidy\x7FRUN tinygo build -o /main.wasm -scheduler=none -gc=custom -tags=&#x22;custommalloc nottinygc_finalizer $EXTRA_TAGS&#x22; -target=wasi ./main.go\x7F\x7FFROM scratch as output\x7FCOPY --from=builder /main.wasm plugin.wasm"><div></div></button></div></figure></div>
<ol start="4">
<li>\u7B2C\u56DB\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Makefile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">PLUGIN_NAME</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hello-world</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">BUILDER_REGISTRY</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">REGISTRY</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">GO_VERSION</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1.19</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">TINYGO_VERSION</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0.28.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">ORAS_VERSION</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">HIGRESS_VERSION</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1.4.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">USE_HIGRESS_TINYGO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">BUILDER</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> \${BUILDER_REGISTRY}</span><span style="--0:#9ECBFF">wasm-go-builder:go</span><span style="--0:#E1E4E8">\${GO_VERSION}</span><span style="--0:#9ECBFF">-tinygo</span><span style="--0:#E1E4E8">\${TINYGO_VERSION}</span><span style="--0:#9ECBFF">-oras</span><span style="--0:#E1E4E8">\${ORAS_VERSION}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">BUILD_TIME</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:=</span><span style="--0:#E1E4E8"> $(</span><span style="--0:#B392F0">shell</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">date</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"+%Y%m%d-%H%M%S"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">COMMIT_ID</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:=</span><span style="--0:#E1E4E8"> $(</span><span style="--0:#B392F0">shell</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">rev-parse</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--short</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HEAD</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">2></span><span style="--0:#9ECBFF">/dev/null</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">IMAGE_TAG</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">=</span><span style="--0:#E1E4E8"> $(if $(</span><span style="--0:#B392F0">strip</span><span style="--0:#E1E4E8"> $(</span><span style="--0:#B392F0">PLUGIN_VERSION</span><span style="--0:#E1E4E8">)),\${PLUGIN_VERSION},\${BUILD_TIME}-\${COMMIT_ID})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">IMG</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> \${REGISTRY}\${PLUGIN_NAME}</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8">\${IMAGE_TAG}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">GOPROXY</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:=</span><span style="--0:#E1E4E8"> $(</span><span style="--0:#B392F0">shell</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">env</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">EXTRA_TAGS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">?=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">proxy_wasm_version_0_2_100</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">.DEFAULT:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">local-docker-build:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">DOCKER_BUILDKIT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">BUILDER=</span><span style="--0:#E1E4E8">\${BUILDER}  </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">GOPROXY</span><span style="--0:#E1E4E8">) </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                               </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">EXTRA_TAGS=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">EXTRA_TAGS</span><span style="--0:#E1E4E8">) </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">-t</span><span style="--0:#E1E4E8"> \${IMG} </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">--output</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#9ECBFF">.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"output wasm file: ./build/plugin.wasm"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">build-image:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">DOCKER_BUILDKIT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">BUILDER=</span><span style="--0:#E1E4E8">\${BUILDER}  </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">GOPROXY</span><span style="--0:#E1E4E8">) </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">--build-arg</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">EXTRA_TAGS=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">EXTRA_TAGS</span><span style="--0:#E1E4E8">) </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#79B8FF">-t</span><span style="--0:#E1E4E8"> \${IMG} </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#9ECBFF">.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"image:            \${</span><span style="--0:#E1E4E8">IMG</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">build-push:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build-image</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> \${IMG}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">local-build:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer $(EXTRA_TAGS)'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./build/plugin.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.go</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">@echo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"wasm: ./build/plugin.wasm"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">local-run:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">echo</span><span style="--0:#E1E4E8">  </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./envoy.log</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">down</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">up</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">local-all:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-build</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-run</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">local-docker-all:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-docker-build</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-run</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="PLUGIN_NAME ?= hello-world\x7FBUILDER_REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/\x7FREGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/\x7FGO_VERSION ?= 1.19\x7FTINYGO_VERSION ?= 0.28.1\x7FORAS_VERSION ?= 1.0.0\x7FHIGRESS_VERSION ?= 1.4.1\x7FUSE_HIGRESS_TINYGO ?= true\x7FBUILDER ?= \${BUILDER_REGISTRY}wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}\x7FBUILD_TIME := $(shell date &#x22;+%Y%m%d-%H%M%S&#x22;)\x7FCOMMIT_ID := $(shell git rev-parse --short HEAD 2>/dev/null)\x7FIMAGE_TAG = $(if $(strip $(PLUGIN_VERSION)),\${PLUGIN_VERSION},\${BUILD_TIME}-\${COMMIT_ID})\x7FIMG ?= \${REGISTRY}\${PLUGIN_NAME}:\${IMAGE_TAG}\x7FGOPROXY := $(shell go env GOPROXY)\x7FEXTRA_TAGS ?= proxy_wasm_version_0_2_100\x7F\x7F.DEFAULT:\x7Flocal-docker-build:\x7F  DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\\x7F                              --build-arg GOPROXY=$(GOPROXY) \\\x7F                               --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\\x7F                              -t \${IMG} \\\x7F                              --output build \\\x7F                              .\x7F  @echo &#x22;&#x22;\x7F  @echo &#x22;output wasm file: ./build/plugin.wasm&#x22;\x7F\x7Fbuild-image:\x7F  DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\\x7F                              --build-arg GOPROXY=$(GOPROXY) \\\x7F                              --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\\x7F                              -t \${IMG} \\\x7F                              .\x7F  @echo &#x22;&#x22;\x7F  @echo &#x22;image:            \${IMG}&#x22;\x7F\x7Fbuild-push: build-image\x7F  docker push \${IMG}\x7F\x7Flocal-build:\x7F  tinygo build -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer $(EXTRA_TAGS)&#x27; \\\x7F    -o ./build/plugin.wasm main.go\x7F  @echo &#x22;&#x22;\x7F  @echo &#x22;wasm: ./build/plugin.wasm&#x22;\x7F\x7Flocal-run:\x7F  echo  > ./envoy.log\x7F  docker compose down\x7F  docker compose up -d\x7F\x7Flocal-all: local-build local-run\x7Flocal-docker-all: local-docker-build local-run"><div></div></button></div></figure></div>
<p>\u8BF7\u5C06 Makefile \u6587\u4EF6\u4E2D\u955C\u50CF\u4ED3\u5E93\u5730\u5740 <code dir="auto">REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/</code> \u6362\u6210\u81EA\u5DF1\u7684\u955C\u50CF\u4ED3\u5E93\u5730\u5740\u3002</p>
<p>\u5176\u547D\u4EE4\u8BF4\u660E\u5982\u4E0B\uFF1A</p>
<ul>
<li><code dir="auto">make local-docker-build</code>: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002</li>
<li><code dir="auto">make local-build</code>: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002</li>
<li><code dir="auto">make local-run</code>: \u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u3002</li>
<li><code dir="auto">PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-image</code> \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\u3002</li>
<li><code dir="auto">PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push</code> \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\uFF0C\u540C\u65F6\u63A8\u9001\u5230\u955C\u50CF\u4ED3\u5E93\u3002</li>
<li><code dir="auto">make local-docker-all</code>: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002</li>
<li><code dir="auto">make local-all</code>: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002</li>
</ul>
<p>\u6CE8\u610F\u7528 TinyGo \u672C\u5730\u6784\u5EFA\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./build/plugin.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tinygo build -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100&#x27; -o ./build/plugin.wasm main.go"><div></div></button></div></figure></div>
<ol start="5">
<li>\u7B2C\u4E94\u6B65\uFF1A\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883</li>
</ol>
<p>\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">local-docker-all</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="make local-docker-all"><div></div></button></div></figure></div>
<p>\u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u540E\uFF0C\u63D2\u4EF6\u76EE\u5F55\u6574\u4F53\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tree</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Dockerfile</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Makefile</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2502\xA0\xA0</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">\u2514\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">plugin.wasm</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u6784\u5EFA\u751F\u6210\u7684 Wasm \u6587\u4EF6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">docker-compose.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.log</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Envoy \u65E5\u5FD7\u6587\u4EF6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go.mod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u251C\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go.sum</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">\u2514\u2500\u2500</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tree\x7F.\x7F\u251C\u2500\u2500 Dockerfile\x7F\u251C\u2500\u2500 Makefile\x7F\u251C\u2500\u2500 build\x7F\u2502\xA0\xA0 \u2514\u2500\u2500 plugin.wasm  # \u6784\u5EFA\u751F\u6210\u7684 Wasm \u6587\u4EF6\x7F\u251C\u2500\u2500 docker-compose.yaml\x7F\u251C\u2500\u2500 envoy.log  # Envoy \u65E5\u5FD7\u6587\u4EF6\x7F\u251C\u2500\u2500 envoy.yaml\x7F\u251C\u2500\u2500 go.mod\x7F\u251C\u2500\u2500 go.sum\x7F\u2514\u2500\u2500 main.go"><div></div></button></div></figure></div>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u901A\u8FC7\u7F51\u5173\u8BBF\u95EE echo-server\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:10000/hello</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-type: application/json"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host:foo.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"username":["unamexxxx"], "password":["pswdxxxx"]}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Trying 127.0.0.1:10000...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connected to 127.0.0.1 (</span><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8">) port 10000 (#0)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/hello</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Host:foo.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> User-Agent: curl/8.1.2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Accept: </span><span style="--0:#F97583">*</span><span style="--0:#E1E4E8">/</span><span style="--0:#F97583">*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Content-type: application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> Content-Length: 50</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-content-type-options: nosniff</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Sat, 20 Jul 2024 04:39:46 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 642</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> req-cost-time: 48</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> req-arrive-time: 1721450386098</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> resp-start-time: 1721450386146</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-envoy-upstream-service-time: 30</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"path"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"/hello",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo.com",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"method"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"POST",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"proto"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"HTTP/1.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Accept"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"*/*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Content-Length"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"50"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"application/json"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Original-Host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"foo.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Req-Start-Time"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"1721450386098"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"User-Agent"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"curl/8.1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Envoy-Expected-Rq-Timeout-Ms"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"15000"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Forwarded-Proto"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"https"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Request-Id"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"2f9ff093-7891-4c55-992b-874f7ba00d0e"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8"> </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"namespace"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"ingress"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"service"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"pod"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"body"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"password"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"pswdxxxx"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"username"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"unamexxxx"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8"> </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST -v http://127.0.0.1:10000/hello \\\x7F-H &#x22;Content-type: application/json&#x22;  -H &#x27;host:foo.com&#x27; \\\x7F-d &#x27;{&#x22;username&#x22;:[&#x22;unamexxxx&#x22;], &#x22;password&#x22;:[&#x22;pswdxxxx&#x22;]}&#x27;\x7F\x7F* Trying 127.0.0.1:10000...\x7F* Connected to 127.0.0.1 (127.0.0.1) port 10000 (#0)\x7F> POST /hello HTTP/1.1\x7F> Host:foo.com\x7F> User-Agent: curl/8.1.2\x7F> Accept: */*\x7F> Content-type: application/json\x7F> Content-Length: 50\x7F>\x7F< HTTP/1.1 200 OK\x7F< content-type: application/json\x7F< x-content-type-options: nosniff\x7F< date: Sat, 20 Jul 2024 04:39:46 GMT\x7F< content-length: 642\x7F< req-cost-time: 48\x7F< req-arrive-time: 1721450386098\x7F< resp-start-time: 1721450386146\x7F< x-envoy-upstream-service-time: 30\x7F< server: envoy\x7F<\x7F{\x7F &#x22;path&#x22;: &#x22;/hello&#x22;,\x7F &#x22;host&#x22;: &#x22;foo.com&#x22;,\x7F &#x22;method&#x22;: &#x22;POST&#x22;,\x7F &#x22;proto&#x22;: &#x22;HTTP/1.1&#x22;,\x7F &#x22;headers&#x22;: {\x7F  &#x22;Accept&#x22;: [\x7F   &#x22;*/*&#x22;\x7F  ],\x7F  &#x22;Content-Length&#x22;: [\x7F   &#x22;50&#x22;\x7F  ],\x7F  &#x22;Content-Type&#x22;: [\x7F   &#x22;application/json&#x22;\x7F  ],\x7F  &#x22;Original-Host&#x22;: [\x7F   &#x22;foo.com&#x22;\x7F  ],\x7F  &#x22;Req-Start-Time&#x22;: [\x7F   &#x22;1721450386098&#x22;\x7F  ],\x7F  &#x22;User-Agent&#x22;: [\x7F   &#x22;curl/8.1.2&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Expected-Rq-Timeout-Ms&#x22;: [\x7F   &#x22;15000&#x22;\x7F  ],\x7F  &#x22;X-Forwarded-Proto&#x22;: [\x7F   &#x22;https&#x22;\x7F  ],\x7F  &#x22;X-Request-Id&#x22;: [\x7F   &#x22;2f9ff093-7891-4c55-992b-874f7ba00d0e&#x22;\x7F  ]\x7F },\x7F &#x22;namespace&#x22;: &#x22;&#x22;,\x7F &#x22;ingress&#x22;: &#x22;&#x22;,\x7F &#x22;service&#x22;: &#x22;&#x22;,\x7F &#x22;pod&#x22;: &#x22;&#x22;,\x7F &#x22;body&#x22;: {\x7F  &#x22;password&#x22;: [\x7F   &#x22;pswdxxxx&#x22;\x7F  ],\x7F  &#x22;username&#x22;: [\x7F   &#x22;unamexxxx&#x22;\x7F  ]\x7F }\x7F* Connection #0 to host 127.0.0.1 left intact\x7F}"><div></div></button></div></figure></div>
<p>\u67E5\u770B\u63D2\u4EF6\u76EE\u5F55\u4E0B envoy.log \u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230 easy-logger \u63D2\u4EF6\u7684\u65E5\u5FD7\u8F93\u51FA\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:08:19.990][22][debug][wasm] [external/envoy/source/extensions/common/wasm/wasm.cc:146] Thread-Local Wasm created 10 now active</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parse config:&#x26;{</span><span style="--0:#B392F0">request:true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">response:</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">responseStatusCodes:200,500,502,503}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:08:19.993][1][warning][main] [external/envoy/source/server/server.cc:715] there is no configured limit to the number of allowed active connections. Set a limit via the runtime key overload.global_downstream_max_connections</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:39:46.114][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:39:46.116][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] </span><span style="--0:#B392F0">onHttpRequestBody</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] </span><span style="--0:#B392F0">onHttpResponseHeaders</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] </span><span style="--0:#B392F0">onHttpResponseBody</span><span style="--0:#E1E4E8">()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="[2024-07-20 04:08:19.990][22][debug][wasm] [external/envoy/source/extensions/common/wasm/wasm.cc:146] Thread-Local Wasm created 10 now active\x7F[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parseConfig()\x7F[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parse config:&#x26;{request:true response:true responseStatusCodes:200,500,502,503}\x7F[2024-07-20 04:08:19.993][1][warning][main] [external/envoy/source/server/server.cc:715] there is no configured limit to the number of allowed active connections. Set a limit via the runtime key overload.global_downstream_max_connections\x7F[2024-07-20 04:39:46.114][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestHeaders()\x7F[2024-07-20 04:39:46.116][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestBody()\x7F[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseHeaders()\x7F[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseBody()"><div></div></button></div></figure></div>
<p>\u5230\u8FD9\u91CC\u8868\u793A\u6574\u4F53\u5F00\u53D1\u548C\u6D4B\u8BD5\u73AF\u5883\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u4E0B\u9762\u5C31\u662F\u5B8C\u5584\u63D2\u4EF6\u529F\u80FD\uFF0C\u7136\u540E\u91CD\u65B0\u6D4B\u8BD5\u3002</p>
<h3 id="43-\u5B8C\u5584\u63D2\u4EF6\u529F\u80FD">4.3 \u5B8C\u5584\u63D2\u4EF6\u529F\u80FD</h3>
<p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u81EA\u5B9A\u4E49\u51FD\u6570\u6765\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\u3002\u901A\u8FC7\u8BBE\u7F6E\u63D2\u4EF6\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236\u662F\u5426\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\uFF0C\u5E76\u6839\u636E\u6307\u5B9A\u7684\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u5185\u5BB9\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">fmt</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strings</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/google/uuid</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u63D2\u4EF6\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"easy-logger"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestBodyBy</span><span style="--0:#E1E4E8">(onHttpRequestBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseHeadersBy</span><span style="--0:#E1E4E8">(onHttpResponseHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseBodyBy</span><span style="--0:#E1E4E8">(onHttpResponseBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u662F\u5426\u6253\u5370\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">request </span><span style="--0:#F97583">bool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u662F\u5426\u6253\u5370\u54CD\u5E94</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">response </span><span style="--0:#F97583">bool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">responseStatusCodes </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"parseConfig()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.request </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"request"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Bool</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.response </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"response"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Bool</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.responseStatusCodes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"responseStatusCodes"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.responseStatusCodes </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.responseStatusCodes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"parse config:</span><span style="--0:#79B8FF">%+v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, config)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpRequestHeaders()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestId </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> uuid.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId"</span><span style="--0:#E1E4E8">, requestId)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">!</span><span style="--0:#E1E4E8">config.request {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u83B7\u53D6\u5E76\u6253\u5370\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headers, _ </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> proxywasm.</span><span style="--0:#B392F0">GetHttpRequestHeaders</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> build </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">===========request headers===============</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, requestId))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, values </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> headers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, values[</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">], values[</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">]))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(build.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestBody</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpRequestBody()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u8BF7\u6C42\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.request {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> build </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">===========request body===============</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestId </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, requestId))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"body:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">(body)))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(build.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpResponseHeaders()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6DFB\u52A0\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"x-easy-logger"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"1.0.0"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">!</span><span style="--0:#E1E4E8">config.response {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u83B7\u53D6\u54CD\u5E94\u72B6\u6001\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">statusCode, _ </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> proxywasm.</span><span style="--0:#B392F0">GetHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">":status"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logResponseBody </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6839\u636E\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.responseStatusCodes </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">||</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">Contains</span><span style="--0:#E1E4E8">(config.responseStatusCodes, statusCode) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">logResponseBody </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5C06\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u4F53\u7684\u4FE1\u606F\u5B58\u50A8\u5728\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5728 onHttpResponseBody \u9636\u6BB5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5224\u65AD\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"logResponseBody"</span><span style="--0:#E1E4E8">, logResponseBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u83B7\u53D6\u54CD\u5E94\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headers, _ </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> proxywasm.</span><span style="--0:#B392F0">GetHttpResponseHeaders</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u54CD\u5E94\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> build </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">===========response headers===============</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestId </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, requestId))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, values </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> headers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, values[</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">], values[</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">]))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(build.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseBody</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">LoggerConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"onHttpResponseBody()"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u83B7\u53D6\u5728 onHttpRequestHeaders \u9636\u6BB5\u8BBE\u7F6E\u7684\u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logResponseBody, ok </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"logResponseBody"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">bool</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">!</span><span style="--0:#E1E4E8">ok {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u54CD\u5E94\u4F53</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> logResponseBody {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> build </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">===========response body===============</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestId </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestId:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, requestId))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">build.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"body:</span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">(body)))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(build.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;fmt&#x22;\x7F  &#x22;strings&#x22;\x7F\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/google/uuid&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    // \u63D2\u4EF6\u540D\u79F0\x7F    &#x22;easy-logger&#x22;,\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53\x7F    wrapper.ProcessRequestBodyBy(onHttpRequestBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934\x7F    wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53\x7F    wrapper.ProcessResponseBodyBy(onHttpResponseBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53\x7F    //wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53\x7F    //wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),\x7F  )\x7F}\x7F\x7F// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\x7Ftype LoggerConfig struct {\x7F  // \u662F\u5426\u6253\u5370\u8BF7\u6C42\x7F  request bool\x7F  // \u662F\u5426\u6253\u5370\u54CD\u5E94\x7F  response bool\x7F  // \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *\x7F  responseStatusCodes string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {\x7F  log.Debugf(&#x22;parseConfig()&#x22;)\x7F  config.request = json.Get(&#x22;request&#x22;).Bool()\x7F  config.response = json.Get(&#x22;response&#x22;).Bool()\x7F  config.responseStatusCodes = json.Get(&#x22;responseStatusCodes&#x22;).String()\x7F  if config.responseStatusCodes == &#x22;&#x22; {\x7F    config.responseStatusCodes = &#x22;*&#x22;\x7F  }\x7F  log.Debugf(&#x22;parse config:%+v&#x22;, config)\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpRequestHeaders()&#x22;)\x7F  requestId := uuid.New().String()\x7F  ctx.SetContext(&#x22;requestId&#x22;, requestId)\x7F  if !config.request {\x7F    return types.ActionContinue\x7F  }\x7F  // \u83B7\u53D6\u5E76\u6253\u5370\u8BF7\u6C42\u5934\x7F  headers, _ := proxywasm.GetHttpRequestHeaders()\x7F  var build strings.Builder\x7F  build.WriteString(&#x22;\\n===========request headers===============\\n&#x22;)\x7F  build.WriteString(fmt.Sprintf(&#x22;requestId:%s\\n&#x22;, requestId))\x7F  for _, values := range headers {\x7F    build.WriteString(fmt.Sprintf(&#x22;%s:%s\\n&#x22;, values[0], values[1]))\x7F  }\x7F  log.Infof(build.String())\x7F  // \u7EE7\u7EED\u5904\u7406\u8BF7\u6C42\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpRequestBody()&#x22;)\x7F  // \u6253\u5370\u8BF7\u6C42\u4F53\x7F  if config.request {\x7F    var build strings.Builder\x7F    build.WriteString(&#x22;\\n===========request body===============\\n&#x22;)\x7F    requestId := ctx.GetContext(&#x22;requestId&#x22;).(string)\x7F    build.WriteString(fmt.Sprintf(&#x22;requestId:%s\\n&#x22;, requestId))\x7F    build.WriteString(fmt.Sprintf(&#x22;body:%s\\n&#x22;, string(body)))\x7F    log.Infof(build.String())\x7F  }\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpResponseHeaders()&#x22;)\x7F  // \u6DFB\u52A0\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934\x7F  proxywasm.AddHttpResponseHeader(&#x22;x-easy-logger&#x22;, &#x22;1.0.0&#x22;)\x7F  if !config.response {\x7F    return types.ActionContinue\x7F  }\x7F  // \u83B7\u53D6\u54CD\u5E94\u72B6\u6001\u7801\x7F  statusCode, _ := proxywasm.GetHttpResponseHeader(&#x22;:status&#x22;)\x7F  logResponseBody := false\x7F  // \u6839\u636E\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53\x7F  if config.responseStatusCodes == &#x22;*&#x22; || strings.Contains(config.responseStatusCodes, statusCode) {\x7F    logResponseBody = true\x7F  }\x7F  // \u5C06\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u4F53\u7684\u4FE1\u606F\u5B58\u50A8\u5728\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5728 onHttpResponseBody \u9636\u6BB5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5224\u65AD\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53\x7F  ctx.SetContext(&#x22;logResponseBody&#x22;, logResponseBody)\x7F  // \u83B7\u53D6\u54CD\u5E94\u5934\x7F  headers, _ := proxywasm.GetHttpResponseHeaders()\x7F  // \u6253\u5370\u54CD\u5E94\u5934\x7F  var build strings.Builder\x7F  build.WriteString(&#x22;\\n===========response headers===============\\n&#x22;)\x7F  requestId := ctx.GetContext(&#x22;requestId&#x22;).(string)\x7F  build.WriteString(fmt.Sprintf(&#x22;requestId:%s\\n&#x22;, requestId))\x7F  for _, values := range headers {\x7F    build.WriteString(fmt.Sprintf(&#x22;%s:%s\\n&#x22;, values[0], values[1]))\x7F  }\x7F  log.Infof(build.String())\x7F  return types.ActionContinue\x7F}\x7F\x7Ffunc onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {\x7F  log.Debugf(&#x22;onHttpResponseBody()&#x22;)\x7F  // \u83B7\u53D6\u5728 onHttpRequestHeaders \u9636\u6BB5\u8BBE\u7F6E\u7684\u4E0A\u4E0B\u6587\x7F  logResponseBody, ok := ctx.GetContext(&#x22;logResponseBody&#x22;).(bool)\x7F  if !ok {\x7F    return types.ActionContinue\x7F  }\x7F  // \u6253\u5370\u54CD\u5E94\u4F53\x7F  if logResponseBody {\x7F    var build strings.Builder\x7F    build.WriteString(&#x22;\\n===========response body===============\\n&#x22;)\x7F    requestId := ctx.GetContext(&#x22;requestId&#x22;).(string)\x7F    build.WriteString(fmt.Sprintf(&#x22;requestId:%s\\n&#x22;, requestId))\x7F    build.WriteString(fmt.Sprintf(&#x22;body:%s\\n&#x22;, string(body)))\x7F    log.Infof(build.String())\x7F  }\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<h3 id="44-\u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1">4.4 \u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1</h3>
<ol>
<li>\u6784\u5EFA\u63D2\u4EF6\u955C\u50CF</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PLUGIN_NAME</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">easy-logger</span><span style="--0:#E1E4E8"> PLUGIN_VERSION</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">1.0.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build-push</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push"><div></div></button></div></figure></div>
<ol start="2">
<li>\u90E8\u7F72\u63D2\u4EF6</li>
</ol>
<p>easy-logger \u63D2\u4EF6\u90E8\u7F72 YAML \u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">easy-logger</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">300</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">request</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">response</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">responseStatusCodes</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"200,500,502,503"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/easy-logger:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: easy-logger\x7F  namespace: higress-system\x7Fspec:\x7F  priority: 300\x7F  matchRules:\x7F    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E\x7F    - domain:\x7F        - foo.com\x7F      config:\x7F        request: true\x7F        response: true\x7F        responseStatusCodes: &#x22;200,500,502,503&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/easy-logger:1.0.0"><div></div></button></div></figure></div>
<ol start="3">
<li>\u9A8C\u8BC1\u63D2\u4EF6</li>
</ol>
<ul>
<li>\u8BBE\u7F6E\u7F51\u5173\u63D2\u4EF6\u7684\u65E5\u5FD7\u7EA7\u522B\u4E3A debug\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pod></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">curl </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:15000/logging?wasm=debug</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec <higress-gateway pod> -n higress-system -- \\\x7Fcurl -X POST http://127.0.0.1:15000/logging?wasm=debug"><div></div></button></div></figure></div>
<ul>
<li>\u8BF7\u6C42\u8BBF\u95EE</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/hello</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host:foo.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"username":["unamexxxx"],"password":["pswdxxxx"]}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST -v http://127.0.0.1/hello \\\x7F-H &#x22;Content-type: application/json&#x22; -H &#x27;host:foo.com&#x27; \\\x7F-d &#x27;{&#x22;username&#x22;:[&#x22;unamexxxx&#x22;],&#x22;password&#x22;:[&#x22;pswdxxxx&#x22;]}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u67E5\u770B\u7F51\u5173\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u4E86\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u8BE6\u7EC6\u4FE1\u606F</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pod></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[Envoy (Epoch </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">)] [2024-07-20 04:56:55.251][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[Envoy (Epoch </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">)] [2024-07-20 04:56:55.252][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">===========request</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">headers===============</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">:authority:foo.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">:path:/hello</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">:method:POST</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">:scheme:http</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">user-agent:curl/8.1.2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">accept:*/*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">content-type:application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">content-length:50</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-forwarded-for:192.168.65.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-forwarded-proto:http</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-envoy-internal:true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-request-id:2ad88049-6ba3-4f3d-bc81-dc29fa48ffce</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-envoy-decorator-operation:echo-server.higress-course.svc.cluster.local:8080/*</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[Envoy (Epoch </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">)] [2024-07-20 04:56:55.254][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] </span><span style="--0:#B392F0">onHttpRequestBody</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[Envoy (Epoch </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">)] [2024-07-20 04:56:55.254][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">===========request</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">body===============</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">body:</span><span style="--0:#9ECBFF">{</span><span style="--0:#E1E4E8">"</span><span style="--0:#B392F0">username</span><span style="--0:#B392F0">":["</span><span style="--0:#B392F0">unamexxxx</span><span style="--0:#B392F0">"],"</span><span style="--0:#B392F0">password</span><span style="--0:#B392F0">":["</span><span style="--0:#B392F0">pswdxxxx</span><span style="--0:#B392F0">"]}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseHeaders()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">===========response headers===============</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">:status:200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">content-type:application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-content-type-options:nosniff</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">date:Sat, 20 Jul 2024 04:56:55 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">content-length:993</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">req-cost-time:8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">req-arrive-time:1721451415248</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">resp-start-time:1721451415256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-envoy-upstream-service-time:2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">x-easy-logger:1.0.0</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseBody()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">===========response body===============</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">body:{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">path</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">/hello</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">host</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">foo.com</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">method</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">POST</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">proto</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">HTTP/1.1</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">headers</span><span style="--0:#B392F0">": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">Accept</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">*/*</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">Content-Length</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">50</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">Content-Type</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">application/json</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">Original-Host</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">foo.com</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">Req-Start-Time</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">1721451415248</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">User-Agent</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">curl/8.1.2</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-B3-Sampled</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">0</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-B3-Spanid</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">f642c00a89551b07</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-B3-Traceid</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">dfab58b011681d29f642c00a89551b07</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Envoy-Attempt-Count</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">1</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Envoy-Decorator-Operation</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">echo-server.higress-course.svc.cluster.local:8080/*</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Envoy-Internal</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#79B8FF">true</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Forwarded-For</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">192.168.65.1</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Forwarded-Proto</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">http</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">X-Request-Id</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">2ad88049-6ba3-4f3d-bc81-dc29fa48ffce</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">namespace</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">higress-course</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">ingress</span><span style="--0:#B392F0">": "",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">service</span><span style="--0:#B392F0">": "",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">pod</span><span style="--0:#B392F0">": "</span><span style="--0:#B392F0">echo-server-6f4df5fcff-nksqz</span><span style="--0:#B392F0">",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">body</span><span style="--0:#B392F0">": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">password</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">pswdxxxx</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">username</span><span style="--0:#B392F0">": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">   </span></span><span style="--0:#B392F0">"</span><span style="--0:#B392F0">unamexxxx</span><span style="--0:#B392F0">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0">  </span></span><span style="--0:#B392F0">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#B392F0"> </span></span><span style="--0:#B392F0">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -f <higress-gateway pod> -n higress-system\x7F\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.251][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestHeaders()\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.252][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]\x7F===========request headers===============\x7FrequestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d\x7F:authority:foo.com\x7F:path:/hello\x7F:method:POST\x7F:scheme:http\x7Fuser-agent:curl/8.1.2\x7Faccept:*/*\x7Fcontent-type:application/json\x7Fcontent-length:50\x7Fx-forwarded-for:192.168.65.1\x7Fx-forwarded-proto:http\x7Fx-envoy-internal:true\x7Fx-request-id:2ad88049-6ba3-4f3d-bc81-dc29fa48ffce\x7Fx-envoy-decorator-operation:echo-server.higress-course.svc.cluster.local:8080/*\x7F\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestBody()\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]\x7F===========request body===============\x7FrequestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d\x7Fbody:{&#x22;username&#x22;:[&#x22;unamexxxx&#x22;],&#x22;password&#x22;:[&#x22;pswdxxxx&#x22;]}\x7F\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseHeaders()\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]\x7F===========response headers===============\x7FrequestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d\x7F:status:200\x7Fcontent-type:application/json\x7Fx-content-type-options:nosniff\x7Fdate:Sat, 20 Jul 2024 04:56:55 GMT\x7Fcontent-length:993\x7Freq-cost-time:8\x7Freq-arrive-time:1721451415248\x7Fresp-start-time:1721451415256\x7Fx-envoy-upstream-service-time:2\x7Fx-easy-logger:1.0.0\x7F\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseBody()\x7F[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger]\x7F===========response body===============\x7FrequestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d\x7Fbody:{\x7F &#x22;path&#x22;: &#x22;/hello&#x22;,\x7F &#x22;host&#x22;: &#x22;foo.com&#x22;,\x7F &#x22;method&#x22;: &#x22;POST&#x22;,\x7F &#x22;proto&#x22;: &#x22;HTTP/1.1&#x22;,\x7F &#x22;headers&#x22;: {\x7F  &#x22;Accept&#x22;: [\x7F   &#x22;*/*&#x22;\x7F  ],\x7F  &#x22;Content-Length&#x22;: [\x7F   &#x22;50&#x22;\x7F  ],\x7F  &#x22;Content-Type&#x22;: [\x7F   &#x22;application/json&#x22;\x7F  ],\x7F  &#x22;Original-Host&#x22;: [\x7F   &#x22;foo.com&#x22;\x7F  ],\x7F  &#x22;Req-Start-Time&#x22;: [\x7F   &#x22;1721451415248&#x22;\x7F  ],\x7F  &#x22;User-Agent&#x22;: [\x7F   &#x22;curl/8.1.2&#x22;\x7F  ],\x7F  &#x22;X-B3-Sampled&#x22;: [\x7F   &#x22;0&#x22;\x7F  ],\x7F  &#x22;X-B3-Spanid&#x22;: [\x7F   &#x22;f642c00a89551b07&#x22;\x7F  ],\x7F  &#x22;X-B3-Traceid&#x22;: [\x7F   &#x22;dfab58b011681d29f642c00a89551b07&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Attempt-Count&#x22;: [\x7F   &#x22;1&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Decorator-Operation&#x22;: [\x7F   &#x22;echo-server.higress-course.svc.cluster.local:8080/*&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Internal&#x22;: [\x7F   &#x22;true&#x22;\x7F  ],\x7F  &#x22;X-Forwarded-For&#x22;: [\x7F   &#x22;192.168.65.1&#x22;\x7F  ],\x7F  &#x22;X-Forwarded-Proto&#x22;: [\x7F   &#x22;http&#x22;\x7F  ],\x7F  &#x22;X-Request-Id&#x22;: [\x7F   &#x22;2ad88049-6ba3-4f3d-bc81-dc29fa48ffce&#x22;\x7F  ]\x7F },\x7F &#x22;namespace&#x22;: &#x22;higress-course&#x22;,\x7F &#x22;ingress&#x22;: &#x22;&#x22;,\x7F &#x22;service&#x22;: &#x22;&#x22;,\x7F &#x22;pod&#x22;: &#x22;echo-server-6f4df5fcff-nksqz&#x22;,\x7F &#x22;body&#x22;: {\x7F  &#x22;password&#x22;: [\x7F   &#x22;pswdxxxx&#x22;\x7F  ],\x7F  &#x22;username&#x22;: [\x7F   &#x22;unamexxxx&#x22;\x7F  ]\x7F }\x7F}"><div></div></button></div></figure></div>`,e={title:"Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6",keywords:["Higress"]},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/zh-cn/wasm14.md",p=void 0,d=function(){return`
# Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6

\u672C\u7AE0\u5F00\u59CB\u8FDB\u5165 Wasm \u63D2\u4EF6\u5F00\u53D1\u7BC7\uFF0C\u4E3B\u8981\u4ECB\u7ECD Wasm \u63D2\u4EF6\u914D\u7F6E\u3001Higress WasmPlugin CRD \u4EE5\u53CA\u5982\u4F55\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002

## 1 \u6D4B\u8BD5\u73AF\u5883\u51C6\u5907

> Higress \u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u7F51\u5173\u5730\u5740\u662F 127.0.0.1\uFF0C\u7AEF\u53E3\u662F 80 \u548C 443\u3002

\u51C6\u5907 echo-server \u548C Ingress, \u5176 YAML \u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: v1
kind: Namespace
metadata:
  name: higress-course
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server
  namespace: higress-course
spec:
  selector:
    app: echo-server
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
  namespace: higress-course
  labels:
    app: echo-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
        - name: echo-server
          image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          resources:
            requests:
              cpu: 10m
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-foo
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "foo.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-bar
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "bar.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-baz
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "baz.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
\`\`\`

## 2 Wasm \u63D2\u4EF6\u914D\u7F6E

Higress WasmPlugin \u5728 Istio WasmPlugin \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u652F\u6301\u5168\u5C40\u3001\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u914D\u7F6E\u3002\u8FD9 4 \u4E2A\u914D\u7F6E\u4F18\u5148\u7EA7\u662F\uFF1A\u8DEF\u7531\u7EA7 > \u57DF\u540D\u7EA7 > \u670D\u52A1\u7EA7 > \u5168\u5C40\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u5339\u914D\u5230\u5177\u4F53\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u7684\u8BF7\u6C42\u624D\u4F1A\u5E94\u7528\u5168\u5C40\u914D\u7F6E\u3002

\u4E0B\u9762\u4EE5 Higress \u5B98\u65B9\u63D0\u4F9B\u7684 [custom-response](https://higress.io/zh-cn/docs/plugins/transformation/custom-response) \u63D2\u4EF6\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002custom-response \u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u5305\u62EC HTTP \u54CD\u5E94\u72B6\u6001\u7801\u3001HTTP \u54CD\u5E94\u5934\uFF0C\u4EE5\u53CA HTTP \u54CD\u5E94\u4F53\u3002custom-response \u63D2\u4EF6\u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u6A21\u62DF\u54CD\u5E94\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E\u7279\u5B9A\u72B6\u6001\u7801\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002\u4F8B\u5982\uFF0C\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\uFF0C\u8FD4\u56DE\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002

\u5E94\u7528 custom-response \u63D2\u4EF6\uFF0CYAML \u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: custom-response
  namespace: higress-system
spec:
  priority: 200
  # \u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E
  defaultConfig:
    headers:
      - key1=value1
    "body": "{\\"hello\\":\\"foo\\"}"
  matchRules:
    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
    - domain:
        - bar.com
      config:
        headers:
          - key2=value2
        "body": "{\\"hello\\":\\"bar\\"}"
    # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E
    - ingress:
        - higress-course/ingress-baz
      # higress-course \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A ingress-baz \u7684 ingress \u4F1A\u5E94\u7528\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
      config:
        headers:
          - key3=value3
        "body": "{\\"hello\\":\\"baz\\"}"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/custom-response:1.0.0
\`\`\`

\u8BBF\u95EE foo.com\uFF0C\u7531\u4E8E\u8BF7\u6C42\u6CA1\u6709\u5339\u914D\u4EFB\u4F55\u57DF\u540D\u7EA7\u6216\u8DEF\u7531\u7EA7\u914D\u7F6E\uFF0C\u56E0\u6B64\u6700\u7EC8\u5E94\u7528\u4E86\u5168\u5C40\u914D\u7F6E\u3002

\`\`\`shell
curl -v -H "Host: foo.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key1: value1
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 02:45:51 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"foo"}
\`\`\`

\u8BBF\u95EE bar.com\uFF0C\u8BF7\u6C42\u5339\u914D\u57DF\u540D\u7EA7\u914D\u7F6E\u3002

\`\`\`shell
curl -v -H "Host: bar.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: bar.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key2: value2
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 02:47:51 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"bar"}
\`\`\`

\u8BBF\u95EE baz.com\uFF0C\u8BF7\u6C42\u5339\u914D\u8DEF\u7531\u7EA7\u914D\u7F6E\u3002

\`\`\`shell
curl -v -H "Host: baz.com"  http://127.0.0.1/

* Trying 127.0.0.1:80...
* Connected to 127.0.0.1 (127.0.0.1) port 80 (#0)
> GET / HTTP/1.1
> Host: baz.com
> User-Agent: curl/8.1.2
> Accept: */*
> 
< HTTP/1.1 200 OK
< key3: value3
< content-type: application/json; charset=utf-8
< content-length: 15
< date: Sun, 14 Jul 2024 08:44:03 GMT
< server: istio-envoy
< 
* Connection #0 to host 127.0.0.1 left intact
{"hello":"baz"}
\`\`\`

\u6D4B\u8BD5\u5B8C\u6210\u540E\u5220\u9664 \`custom-response\` WasmPlugin\uFF0C\u907F\u514D\u5BF9\u540E\u7EED\u6D4B\u8BD5\u4EA7\u751F\u5F71\u54CD\u3002

\`\`\`shell
kubectl delete wasmplugin custom-response -n higress-system
\`\`\`

## 3 Higress WasmPlugin CRD 

Higress WasmPlugin CRD \u5728 [Istio WasmPlugin CRD](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/) \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u65B0\u589E \`defaultConfig\` \u548C \`matchRules\` \u5B57\u6BB5\uFF0C\u7528\u4E8E\u914D\u7F6E\u63D2\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\u548C\u8DEF\u7531\u7EA7\u3001\u57DF\u540D\u7EA7\u914D\u7F6E\u3002

\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

| \u5B57\u6BB5\u540D\u79F0             | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42 | \u63CF\u8FF0                                                                                                          |
|------------------|-----------------|----|-------------------------------------------------------------------------------------------------------------|
| \`pluginName\`     | string          | \u9009\u586B | \u63D2\u4EF6\u540D\u79F0                                                                                                        |
| \`phase\`          | string          | \u9009\u586B | \u63D2\u4EF6\u63D2\u5165\u63D2\u4EF6\u94FE\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F UNSPECIFIED_PHASE                                                                           |
| \`priority\`       | int             | \u9009\u586B | \u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF0C\u9ED8\u8BA4\u4E3A 0\uFF0C\u5728\u76F8\u540C \`phase\` \u4E0B\uFF0C\u503C\u8D8A\u5927\u8D8A\u5148\u5904\u7406\u8BF7\u6C42\uFF0C\u4F46\u8D8A\u540E\u5904\u7406\u54CD\u5E94                                                               |
| \`imagePullPolicy\` | string          | \u9009\u586B | \u63D2\u4EF6\u955C\u50CF\u62C9\u53D6\u7B56\u7565\uFF0C\u53EF\u9009\u503C\u6709\uFF1A\`UNSPECIFIED_POLICY\`\uFF08\u9ED8\u8BA4\u503C\uFF09\u3001\`IfNotPresent\`\u3001\`Always\`                                             |
| \`imagePullSecret\` | string          | \u9009\u586B | \u7528\u4E8E\u62C9\u53D6 OCI \u955C\u50CF\u7684\u51ED\u636E\u3002\u4E0E WasmPlugin \u5728\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D\u7684Kubernetes Secret \u7684\u540D\u79F0                                                  |
| \`url\`            | string          | \u5FC5\u586B | Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 URL\uFF0C\u9ED8\u8BA4\u4E3A \`oci://\`\uFF0C\u5F15\u7528 OCI \u955C\u50CF\u3002\u540C\u65F6\u652F\u6301 \`file://\`\uFF0C\u7528\u4E8E\u5BB9\u5668\u672C\u5730\u7684 Wasm \u6587\u4EF6\uFF0C\u4EE5\u53CA \`http[s]://\`\uFF0C\u7528\u4E8E\u5F15\u7528\u8FDC\u7A0B\u6258\u7BA1\u7684 Wasm \u6587\u4EF6 |
| \`Sha256\`         | string          |  \u9009\u586B  | \u7528\u4E8E\u9A8C\u8BC1 Wasm \u6587\u4EF6\u6216 OCI \u5BB9\u5668\u7684 SHA256 \u6821\u9A8C\u548C                                                                            |
| \`defaultConfig\`  | object          | \u9009\u586B | \u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u4E8E\u6CA1\u6709\u5339\u914D\u5177\u4F53\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u7684\u8BF7\u6C42                                                                                |
| \`defaultConfigDisable\`| bool            |  \u9009\u586B  | \u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\u662F\u5426\u5931\u6548\uFF0C\u9ED8\u8BA4\u503C\u662F false                                                                                       |
| \`matchRules\`     | array of object | \u9009\u586B | \u5339\u914D\u57DF\u540D\u6216\u8DEF\u7531\u751F\u6548\u7684\u914D\u7F6E                                                                                                |

\`phase\` \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u5B57\u6BB5\u540D\u79F0               | \u63CF\u8FF0                                                                     |
|--------------------|------------------------------------------------------------------------|
| \`UNSPECIFIED_PHASE\` | \u5728\u63D2\u4EF6\u8FC7\u6EE4\u5668\u94FE\u7684\u672B\u7AEF\uFF0C\u5728\u8DEF\u7531\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u63D2\u4EF6\u7684 \`phase\`\uFF0C\u5219\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A \`UNSPECIFIED_PHASE\` |
| \`AUTHN\`            | \u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u524D\u63D2\u5165\u63D2\u4EF6                                                    |
| \`AUTHZ\`            | \u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u8BA4\u8BC1\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6                                    |
| \`STATS\`            | \u5728 Istio \u7EDF\u8BA1\u8FC7\u6EE4\u5668\u4E4B\u524D\u4E14\u5728 Istio \u6388\u6743\u8FC7\u6EE4\u5668\u4E4B\u540E\u63D2\u5165\u63D2\u4EF6                                    |

\`matchRules\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A

| \u5B57\u6BB5\u540D\u79F0            | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42                                 | \u914D\u7F6E\u793A\u4F8B                           | \u63CF\u8FF0                                      |
|-----------------|-------|--------------------------------------|--------------------------------|-----------------------------------------|
| \`ingress\`       | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879 | ["default/foo", "default/bar"] | \u5339\u914D ingress \u8D44\u6E90\u5BF9\u8C61\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A: \`\u547D\u540D\u7A7A\u95F4/ingress\u540D\u79F0\` |
| \`domain\`        | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879| ["example.com", "*.test.com"]  | \u5339\u914D\u57DF\u540D\uFF0C\u652F\u6301\u6CDB\u57DF\u540D                              |
| \`service\`       | \u5B57\u7B26\u4E32\u6570\u7EC4 | \`ingress\`\u3001\`domain\` \u548C \`service\` \u4E2D\u5FC5\u586B\u4E00\u9879        | ["echo-server.higress-course.svc.cluster.local"]  | \u5339\u914D\u670D\u52A1\u540D\u79F0                                  |
| \`config\`        | \u5BF9\u8C61    | \u9009\u586B                                   | -                              | \u5339\u914D\u540E\u751F\u6548\u7684\u63D2\u4EF6\u914D\u7F6E                              |
| \`configDisable\` | bool  | \u9009\u586B                                   | false                          | \u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A false                      |


## 4 \u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1

\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u65E5\u5FD7\u63D2\u4EF6 \`easy-logger\`, \u8FD9\u4E2A\u63D2\u4EF6\u6839\u636E\u914D\u7F6E\u8BB0\u5F55\u8BF7\u6C42\u548C\u54CD\u5E94\u5230\u7F51\u5173\u65E5\u5FD7\u4E2D\u3002\u6574\u4E2A\u8FC7\u7A0B\u6D89\u53CA\u5230\u63D2\u4EF6\u5F00\u53D1\u73AF\u5883\u51C6\u5907\u3001\u5F00\u53D1\u548C\u6D4B\u8BD5\u3001\u90E8\u7F72\u548C\u9A8C\u8BC1\u3002

### 4.1 \u73AF\u5883\u51C6\u5907

\u73AF\u5883\u51C6\u5907\u5982\u4E0B\uFF1A

- Docker \u5B98\u65B9\u5B89\u88C5\u8FDE\u63A5\uFF1Ahttps://docs.docker.com/engine/install/
- Go \u7248\u672C: >= 1.19 (\u9700\u8981\u652F\u6301\u8303\u578B\u7279\u6027)\uFF0C\u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1Ahttps://go.dev/doc/install

\u5982\u679C\u9009\u62E9\u7528 TinyGo \u5728\u672C\u5730\u6784\u5EFA Wasm \u6587\u4EF6\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\uFF0C\u9700\u8981\u5B89\u88C5 TinyGo\uFF0C\u5176\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A

- TinyGo \u7248\u672C: >= 0.28.1 (\u5EFA\u8BAE\u7248\u672C 0.28.1) \u5B98\u65B9\u5B89\u88C5\u94FE\u63A5\uFF1Ahttps://tinygo.org/getting-started/install/

### 4.2 \u5F00\u53D1\u548C\u6D4B\u8BD5

#### 4.2.1 \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55

1. \u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6 easy-logger\u3002

\`\`\`shell
mkdir easy-logger
\`\`\`
2. \u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521D\u59CB\u5316 Go \u5DE5\u7A0B\u3002

\`\`\`shell
go mod init easy-logger
\`\`\`

go.mod \u6587\u4EF6\u4E2D go \u7248\u672C\u9700\u8981\u8BBE\u7F6E\u4E3A 1.19\uFF0C\u7531\u4E8E\u5728 4.3.3 \u8282\u4E2D\u6211\u4EEC\u5C06\u4F7F\u7528 1.19 \u7248\u672C\u7684 wasm-go-builder \u955C\u50CF\u6765\u6784\u5EFA\u63D2\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u4FDD\u6301\u4E24\u8005\u7684 go \u7248\u672C\u4E00\u81F4\u3002

\`\`\`shell
module easy-logger

go 1.19
\`\`\`

3. \u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406

\`\`\`shell
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`

4. \u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56

\`\`\`shell
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`

#### 4.2.2 \u7F16\u5199 main.go \u6587\u4EF6
\u9996\u5148\uFF0C\u6211\u4EEC\u7F16\u5199 easy-logger \u63D2\u4EF6\u7684\u57FA\u672C\u6846\u67B6\uFF0C\u6682\u65F6\u53EA\u8BFB\u53D6\u6211\u4EEC\u8BBE\u7F6E\u7684\u914D\u7F6E\u53C2\u6570\uFF0C\u4E0D\u5728\u8BF7\u6C42\u548C\u54CD\u5E94\u9636\u6BB5\u8FDB\u884C\u4EFB\u4F55\u5904\u7406\u3002

\`\`\`go
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"easy-logger",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type LoggerConfig struct {
	// \u662F\u5426\u6253\u5370\u8BF7\u6C42
	request bool
	// \u662F\u5426\u6253\u5370\u54CD\u5E94
	response bool
	// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *
	responseStatusCodes string
}

func parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	config.request = json.Get("request").Bool()
	config.response = json.Get("response").Bool()
	config.responseStatusCodes = json.Get("responseStatusCodes").String()
	if config.responseStatusCodes == "" {
		config.responseStatusCodes = "*"
	}
	log.Debugf("parse config:%v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestHeaders()")
	return types.ActionContinue
}

func onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestBody()")
	return types.ActionContinue
}

func onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseBody()")
	return types.ActionContinue
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseHeaders()")
	return types.ActionContinue
}
\`\`\`

Higress \u63D2\u4EF6 SDK \u5F00\u53D1\u6D89\u53CA\u5230\u4EE5\u4E0B\u5185\u5BB9\uFF1A

- wrapper.HttpContext\uFF1A\u8BF7\u6C42\u4E0A\u4E0B\u6587\u3002
- LoggerConfig\uFF1A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\u3002
- wrapper.Log\uFF1A\u63D2\u4EF6\u65E5\u5FD7\u5DE5\u5177\u3002
- wrapper.ProcessXXXX\uFF1A\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- proxywasm\uFF1A\u63D0\u4F9B\u63D2\u4EF6\u5DE5\u5177\u51FD\u6570\u5305\u3002

wrapper \u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u5305\u542B\u4EE5\u4E0B\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\u9009\u62E9\u8BBE\u7F6E\u4EE5\u4E0B\u94A9\u5B50\u51FD\u6570\uFF1A

- wrapper.ParseConfigBy(parseConfig)\uFF1A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\u3002
- wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\u3002
- wrapper.ProcessRequestBodyBy(onHttpRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53\u3002
- wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934\u3002
- wrapper.ProcessResponseBodyBy(onHttpResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53\u3002
- wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53\u3002
- wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody)\uFF1A\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53\u3002

\u5173\u4E8E Higress \u63D2\u4EF6 SDK \u5185\u5BB9\u4F1A\u5728\u540E\u7EED\u7AE0\u8282\u4E2D\u8BE6\u7EC6\u5C55\u5F00\u3002

#### 4.3.3 \u672C\u5730\u6D4B\u8BD5

1. \u7B2C\u4E00\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\u3002\u7F51\u5173\u5728 10000 \u7AEF\u53E3\u76D1\u542C HTTP \u8BF7\u6C42\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230 echo-server \u670D\u52A1\u3002

\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: ["*"]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: echo-server
                http_filters:
                  - name: wasmdemo
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: wasmdemo
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: |-
                              {
                                "request": true,
                                "response": true,
                                "responseStatusCodes": "200,500,502,503"
                              }
                  - name: envoy.filters.http.router
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
  clusters:
    - name: echo-server
      connect_timeout: 30s
      type: LOGICAL_DNS
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: echo-server
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: echo-server
                      port_value: 3000
\`\`\`

\u63D2\u4EF6\u901A\u8FC7\u672C\u5730\u6587\u4EF6\u7684\u65B9\u5F0F\u52A0\u8F7D\u5230 Envoy \u4E2D\uFF0C\u63D2\u4EF6\u914D\u7F6E\u7684\u5982\u4E0B\uFF1A

\`\`\`yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |-
      {
        "request": true,
        "response": true,
        "responseStatusCodes": "200,500,502,503"
      }
\`\`\`

2. \u7B2C\u4E8C\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
version: '3.9'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9 Wasm \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u65F6\u8BF7\u4F7F\u7528\u9ED8\u8BA4\u7684 info \u7EA7\u522B
    # \u5982\u679C\u9700\u8981\u5C06 Envoy \u7684\u65E5\u5FD7\u7EA7\u522B\u8C03\u6574\u4E3A debug\uFF0C\u5C06 --log-level \u53C2\u6570\u8BBE\u7F6E\u4E3A debug
    command: -c /etc/envoy/envoy.yaml --log-level info --log-path /etc/envoy/envoy.log --component-log-level wasm:debug
    depends_on:
      - echo-server
    networks:
      - wasmtest
    ports:
      - "10000:10000"
      - "9901:9901"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./build/plugin.wasm:/etc/envoy/plugin.wasm
      - ./envoy.log:/etc/envoy/envoy.log
  echo-server:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
    networks:
      - wasmtest
    ports:
      - "3000:3000"
networks:
  wasmtest: {}
\`\`\`
3. \u7B2C\u4E09\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Dockerfile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
ARG BUILDER=higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/wasm-go-builder:go1.19-tinygo0.28.1-oras1.0.0
FROM $BUILDER as builder

ARG GOPROXY
ENV GOPROXY=\${GOPROXY}

ARG EXTRA_TAGS=""
ENV EXTRA_TAGS=\${EXTRA_TAGS}

WORKDIR /workspace
COPY . .
RUN go mod tidy
RUN tinygo build -o /main.wasm -scheduler=none -gc=custom -tags="custommalloc nottinygc_finalizer $EXTRA_TAGS" -target=wasi ./main.go

FROM scratch as output
COPY --from=builder /main.wasm plugin.wasm
\`\`\`

4. \u7B2C\u56DB\u6B65\uFF1A\u5728\u63D2\u4EF6\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 Makefile\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`shell
PLUGIN_NAME ?= hello-world
BUILDER_REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/
GO_VERSION ?= 1.19
TINYGO_VERSION ?= 0.28.1
ORAS_VERSION ?= 1.0.0
HIGRESS_VERSION ?= 1.4.1
USE_HIGRESS_TINYGO ?= true
BUILDER ?= \${BUILDER_REGISTRY}wasm-go-builder:go\${GO_VERSION}-tinygo\${TINYGO_VERSION}-oras\${ORAS_VERSION}
BUILD_TIME := $(shell date "+%Y%m%d-%H%M%S")
COMMIT_ID := $(shell git rev-parse --short HEAD 2>/dev/null)
IMAGE_TAG = $(if $(strip $(PLUGIN_VERSION)),\${PLUGIN_VERSION},\${BUILD_TIME}-\${COMMIT_ID})
IMG ?= \${REGISTRY}\${PLUGIN_NAME}:\${IMAGE_TAG}
GOPROXY := $(shell go env GOPROXY)
EXTRA_TAGS ?= proxy_wasm_version_0_2_100

.DEFAULT:
local-docker-build:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\
	                            --build-arg GOPROXY=$(GOPROXY) \\
	                             --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\
	                            -t \${IMG} \\
	                            --output build \\
	                            .
	@echo ""
	@echo "output wasm file: ./build/plugin.wasm"

build-image:
	DOCKER_BUILDKIT=1 docker build --build-arg BUILDER=\${BUILDER}  \\
	                            --build-arg GOPROXY=$(GOPROXY) \\
	                            --build-arg EXTRA_TAGS=$(EXTRA_TAGS) \\
	                            -t \${IMG} \\
	                            .
	@echo ""
	@echo "image:            \${IMG}"

build-push: build-image
	docker push \${IMG}

local-build:
	tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer $(EXTRA_TAGS)' \\
		-o ./build/plugin.wasm main.go
	@echo ""
	@echo "wasm: ./build/plugin.wasm"

local-run:
	echo  > ./envoy.log
	docker compose down
	docker compose up -d

local-all: local-build local-run
local-docker-all: local-docker-build local-run
\`\`\`

\u8BF7\u5C06 Makefile \u6587\u4EF6\u4E2D\u955C\u50CF\u4ED3\u5E93\u5730\u5740 \`REGISTRY ?= higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/\` \u6362\u6210\u81EA\u5DF1\u7684\u955C\u50CF\u4ED3\u5E93\u5730\u5740\u3002

\u5176\u547D\u4EE4\u8BF4\u660E\u5982\u4E0B\uFF1A
- \`make local-docker-build\`: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002
- \`make local-build\`: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\u3002
- \`make local-run\`: \u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u3002
- \`PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-image\` \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\u3002
- \`PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push\` \u6784\u5EFA easy-logger \u63D2\u4EF6\u955C\u50CF\uFF0C\u63D2\u4EF6\u7248\u672C\u4E3A 1.0.0\uFF0C\u540C\u65F6\u63A8\u9001\u5230\u955C\u50CF\u4ED3\u5E93\u3002
- \`make local-docker-all\`: \u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002
- \`make local-all\`: \u672C\u5730 TinyGo \u6784\u5EFA\u63D2\u4EF6\uFF0C\u751F\u6210\u63D2\u4EF6\u6587\u4EF6 ./build/plugin.wasm\uFF0C\u540C\u65F6\u542F\u52A8\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u3002

\u6CE8\u610F\u7528 TinyGo \u672C\u5730\u6784\u5EFA\u547D\u4EE4\u5982\u4E0B\uFF1A
\`\`\`shell
tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100' -o ./build/plugin.wasm main.go
\`\`\`

5. \u7B2C\u4E94\u6B65\uFF1A\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883

\u672C\u5730 Docker \u73AF\u5883\u6784\u5EFA\u548C\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A

\`\`\`shell
make local-docker-all
\`\`\`

\u672C\u5730\u542F\u52A8\u6D4B\u8BD5\u73AF\u5883\u540E\uFF0C\u63D2\u4EF6\u76EE\u5F55\u6574\u4F53\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A

\`\`\`shell
tree 
.
\u251C\u2500\u2500 Dockerfile
\u251C\u2500\u2500 Makefile
\u251C\u2500\u2500 build
\u2502\xA0\xA0 \u2514\u2500\u2500 plugin.wasm  # \u6784\u5EFA\u751F\u6210\u7684 Wasm \u6587\u4EF6
\u251C\u2500\u2500 docker-compose.yaml
\u251C\u2500\u2500 envoy.log  # Envoy \u65E5\u5FD7\u6587\u4EF6
\u251C\u2500\u2500 envoy.yaml
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u2514\u2500\u2500 main.go
\`\`\`

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u901A\u8FC7\u7F51\u5173\u8BBF\u95EE echo-server\u3002

\`\`\`shell
curl -X POST -v http://127.0.0.1:10000/hello \\
-H "Content-type: application/json"  -H 'host:foo.com' \\
-d '{"username":["unamexxxx"], "password":["pswdxxxx"]}'

* Trying 127.0.0.1:10000...
* Connected to 127.0.0.1 (127.0.0.1) port 10000 (#0)
> POST /hello HTTP/1.1
> Host:foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> Content-type: application/json
> Content-Length: 50
> 
< HTTP/1.1 200 OK
< content-type: application/json
< x-content-type-options: nosniff
< date: Sat, 20 Jul 2024 04:39:46 GMT
< content-length: 642
< req-cost-time: 48
< req-arrive-time: 1721450386098
< resp-start-time: 1721450386146
< x-envoy-upstream-service-time: 30
< server: envoy
< 
{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Content-Length": [
   "50"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1721450386098"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-Envoy-Expected-Rq-Timeout-Ms": [
   "15000"
  ],
  "X-Forwarded-Proto": [
   "https"
  ],
  "X-Request-Id": [
   "2f9ff093-7891-4c55-992b-874f7ba00d0e"
  ]
 },
 "namespace": "",
 "ingress": "",
 "service": "",
 "pod": "",
 "body": {
  "password": [
   "pswdxxxx"
  ],
  "username": [
   "unamexxxx"
  ]
 }
* Connection #0 to host 127.0.0.1 left intact
}
\`\`\`

\u67E5\u770B\u63D2\u4EF6\u76EE\u5F55\u4E0B envoy.log \u6587\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230 easy-logger \u63D2\u4EF6\u7684\u65E5\u5FD7\u8F93\u51FA\u3002

\`\`\`shell
[2024-07-20 04:08:19.990][22][debug][wasm] [external/envoy/source/extensions/common/wasm/wasm.cc:146] Thread-Local Wasm created 10 now active
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parseConfig()
[2024-07-20 04:08:19.993][22][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log: [easy-logger] parse config:&{request:true response:true responseStatusCodes:200,500,502,503}
[2024-07-20 04:08:19.993][1][warning][main] [external/envoy/source/server/server.cc:715] there is no configured limit to the number of allowed active connections. Set a limit via the runtime key overload.global_downstream_max_connections
[2024-07-20 04:39:46.114][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestHeaders()
[2024-07-20 04:39:46.116][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpRequestBody()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseHeaders()
[2024-07-20 04:39:46.147][29][debug][wasm] [external/envoy/source/extensions/common/wasm/context.cc:1308] wasm log wasmdemo: [easy-logger] onHttpResponseBody()
\`\`\`

\u5230\u8FD9\u91CC\u8868\u793A\u6574\u4F53\u5F00\u53D1\u548C\u6D4B\u8BD5\u73AF\u5883\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u4E0B\u9762\u5C31\u662F\u5B8C\u5584\u63D2\u4EF6\u529F\u80FD\uFF0C\u7136\u540E\u91CD\u65B0\u6D4B\u8BD5\u3002

### 4.3 \u5B8C\u5584\u63D2\u4EF6\u529F\u80FD

\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u81EA\u5B9A\u4E49\u51FD\u6570\u6765\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\u3002\u901A\u8FC7\u8BBE\u7F6E\u63D2\u4EF6\u53C2\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236\u662F\u5426\u6253\u5370\u8BF7\u6C42\u548C\u54CD\u5E94\u4FE1\u606F\uFF0C\u5E76\u6839\u636E\u6307\u5B9A\u7684\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u5185\u5BB9\u3002

\`\`\`go
package main

import (
	"fmt"
	"strings"

	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/google/uuid"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"easy-logger",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
		//wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
		//wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type LoggerConfig struct {
	// \u662F\u5426\u6253\u5370\u8BF7\u6C42
	request bool
	// \u662F\u5426\u6253\u5370\u54CD\u5E94
	response bool
	// \u6253\u5370\u54CD\u5E94\u72B6\u6001\u7801\uFF0C* \u8868\u793A\u6253\u5370\u6240\u6709\u72B6\u6001\u54CD\u5E94\uFF0C500,502,503 \u8868\u793A\u6253\u5370 HTTP 500\u3001502\u3001503 \u72B6\u6001\u54CD\u5E94\uFF0C\u9ED8\u8BA4\u662F *
	responseStatusCodes string
}

func parseConfig(json gjson.Result, config *LoggerConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	config.request = json.Get("request").Bool()
	config.response = json.Get("response").Bool()
	config.responseStatusCodes = json.Get("responseStatusCodes").String()
	if config.responseStatusCodes == "" {
		config.responseStatusCodes = "*"
	}
	log.Debugf("parse config:%+v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestHeaders()")
	requestId := uuid.New().String()
	ctx.SetContext("requestId", requestId)
	if !config.request {
		return types.ActionContinue
	}
	// \u83B7\u53D6\u5E76\u6253\u5370\u8BF7\u6C42\u5934
	headers, _ := proxywasm.GetHttpRequestHeaders()
	var build strings.Builder
	build.WriteString("\\n===========request headers===============\\n")
	build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\\n", values[0], values[1]))
	}
	log.Infof(build.String())
	// \u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	return types.ActionContinue
}

func onHttpRequestBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestBody()")
	// \u6253\u5370\u8BF7\u6C42\u4F53
	if config.request {
		var build strings.Builder
		build.WriteString("\\n===========request body===============\\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config LoggerConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseHeaders()")
	// \u6DFB\u52A0\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934
	proxywasm.AddHttpResponseHeader("x-easy-logger", "1.0.0")
	if !config.response {
		return types.ActionContinue
	}
	// \u83B7\u53D6\u54CD\u5E94\u72B6\u6001\u7801
	statusCode, _ := proxywasm.GetHttpResponseHeader(":status")
	logResponseBody := false
	// \u6839\u636E\u54CD\u5E94\u72B6\u6001\u7801\u51B3\u5B9A\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53
	if config.responseStatusCodes == "*" || strings.Contains(config.responseStatusCodes, statusCode) {
		logResponseBody = true
	}
	// \u5C06\u662F\u5426\u8BB0\u5F55\u54CD\u5E94\u4F53\u7684\u4FE1\u606F\u5B58\u50A8\u5728\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5728 onHttpResponseBody \u9636\u6BB5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5224\u65AD\u662F\u5426\u6253\u5370\u54CD\u5E94\u4F53
	ctx.SetContext("logResponseBody", logResponseBody)
	// \u83B7\u53D6\u54CD\u5E94\u5934
	headers, _ := proxywasm.GetHttpResponseHeaders()
	// \u6253\u5370\u54CD\u5E94\u5934
	var build strings.Builder
	build.WriteString("\\n===========response headers===============\\n")
	requestId := ctx.GetContext("requestId").(string)
	build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
	for _, values := range headers {
		build.WriteString(fmt.Sprintf("%s:%s\\n", values[0], values[1]))
	}
	log.Infof(build.String())
	return types.ActionContinue
}

func onHttpResponseBody(ctx wrapper.HttpContext, config LoggerConfig, body []byte, log wrapper.Log) types.Action {
	log.Debugf("onHttpResponseBody()")
	// \u83B7\u53D6\u5728 onHttpRequestHeaders \u9636\u6BB5\u8BBE\u7F6E\u7684\u4E0A\u4E0B\u6587
	logResponseBody, ok := ctx.GetContext("logResponseBody").(bool)
	if !ok {
		return types.ActionContinue
	}
	// \u6253\u5370\u54CD\u5E94\u4F53
	if logResponseBody {
		var build strings.Builder
		build.WriteString("\\n===========response body===============\\n")
		requestId := ctx.GetContext("requestId").(string)
		build.WriteString(fmt.Sprintf("requestId:%s\\n", requestId))
		build.WriteString(fmt.Sprintf("body:%s\\n", string(body)))
		log.Infof(build.String())
	}
	return types.ActionContinue
}
\`\`\`


### 4.4 \u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1

1. \u6784\u5EFA\u63D2\u4EF6\u955C\u50CF

\`\`\`shell
PLUGIN_NAME=easy-logger PLUGIN_VERSION=1.0.0 make build-push
\`\`\`

2. \u90E8\u7F72\u63D2\u4EF6

easy-logger \u63D2\u4EF6\u90E8\u7F72 YAML \u5982\u4E0B\uFF1A
\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: easy-logger
  namespace: higress-system
spec:
  priority: 300
  matchRules:
    # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
    - domain:
        - foo.com
      config:
        request: true
        response: true
        responseStatusCodes: "200,500,502,503"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/easy-logger:1.0.0
\`\`\`

3. \u9A8C\u8BC1\u63D2\u4EF6

- \u8BBE\u7F6E\u7F51\u5173\u63D2\u4EF6\u7684\u65E5\u5FD7\u7EA7\u522B\u4E3A debug\u3002

\`\`\`shell
kubectl exec <higress-gateway pod> -n higress-system -- \\
curl -X POST http://127.0.0.1:15000/logging?wasm=debug
\`\`\`

- \u8BF7\u6C42\u8BBF\u95EE

\`\`\`shell
curl -X POST -v http://127.0.0.1/hello \\
-H "Content-type: application/json" -H 'host:foo.com' \\
-d '{"username":["unamexxxx"],"password":["pswdxxxx"]}'
\`\`\`

- \u67E5\u770B\u7F51\u5173\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u770B\u5230\u8F93\u51FA\u4E86\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u8BE6\u7EC6\u4FE1\u606F

\`\`\`shell
kubectl logs -f <higress-gateway pod> -n higress-system

[Envoy (Epoch 0)] [2024-07-20 04:56:55.251][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestHeaders()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.252][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========request headers===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
:authority:foo.com
:path:/hello
:method:POST
:scheme:http
user-agent:curl/8.1.2
accept:*/*
content-type:application/json
content-length:50
x-forwarded-for:192.168.65.1
x-forwarded-proto:http
x-envoy-internal:true
x-request-id:2ad88049-6ba3-4f3d-bc81-dc29fa48ffce
x-envoy-decorator-operation:echo-server.higress-course.svc.cluster.local:8080/*

[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpRequestBody()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.254][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========request body===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
body:{"username":["unamexxxx"],"password":["pswdxxxx"]}

[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseHeaders()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.256][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========response headers===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
:status:200
content-type:application/json
x-content-type-options:nosniff
date:Sat, 20 Jul 2024 04:56:55 GMT
content-length:993
req-cost-time:8
req-arrive-time:1721451415248
resp-start-time:1721451415256
x-envoy-upstream-service-time:2
x-easy-logger:1.0.0

[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][debug][wasm] wasm log higress-system.easy-logger: [easy-logger] onHttpResponseBody()
[Envoy (Epoch 0)] [2024-07-20 04:56:55.257][39][info][wasm] wasm log higress-system.easy-logger: [easy-logger] 
===========response body===============
requestId:a791e8e6-8126-4a1d-92f0-a0333b706c1d
body:{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Content-Length": [
   "50"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1721451415248"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-B3-Sampled": [
   "0"
  ],
  "X-B3-Spanid": [
   "f642c00a89551b07"
  ],
  "X-B3-Traceid": [
   "dfab58b011681d29f642c00a89551b07"
  ],
  "X-Envoy-Attempt-Count": [
   "1"
  ],
  "X-Envoy-Decorator-Operation": [
   "echo-server.higress-course.svc.cluster.local:8080/*"
  ],
  "X-Envoy-Internal": [
   "true"
  ],
  "X-Forwarded-For": [
   "192.168.65.1"
  ],
  "X-Forwarded-Proto": [
   "http"
  ],
  "X-Request-Id": [
   "2ad88049-6ba3-4f3d-bc81-dc29fa48ffce"
  ]
 },
 "namespace": "higress-course",
 "ingress": "",
 "service": "",
 "pod": "echo-server-6f4df5fcff-nksqz",
 "body": {
  "password": [
   "pswdxxxx"
  ],
  "username": [
   "unamexxxx"
  ]
 }
}
\`\`\`







`},i=function(){return s},t=function(){return[{depth:2,slug:"1-\u6D4B\u8BD5\u73AF\u5883\u51C6\u5907",text:"1 \u6D4B\u8BD5\u73AF\u5883\u51C6\u5907"},{depth:2,slug:"2-wasm-\u63D2\u4EF6\u914D\u7F6E",text:"2 Wasm \u63D2\u4EF6\u914D\u7F6E"},{depth:2,slug:"3-higress-wasmplugin-crd",text:"3 Higress WasmPlugin CRD"},{depth:2,slug:"4-\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1",text:"4 \u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1"},{depth:3,slug:"41-\u73AF\u5883\u51C6\u5907",text:"4.1 \u73AF\u5883\u51C6\u5907"},{depth:3,slug:"42-\u5F00\u53D1\u548C\u6D4B\u8BD5",text:"4.2 \u5F00\u53D1\u548C\u6D4B\u8BD5"},{depth:4,slug:"421-\u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55",text:"4.2.1 \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55"},{depth:4,slug:"422-\u7F16\u5199-maingo-\u6587\u4EF6",text:"4.2.2 \u7F16\u5199 main.go \u6587\u4EF6"},{depth:4,slug:"433-\u672C\u5730\u6D4B\u8BD5",text:"4.3.3 \u672C\u5730\u6D4B\u8BD5"},{depth:3,slug:"43-\u5B8C\u5584\u63D2\u4EF6\u529F\u80FD",text:"4.3 \u5B8C\u5584\u63D2\u4EF6\u529F\u80FD"},{depth:3,slug:"44-\u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1",text:"4.4 \u90E8\u7F72\u63D2\u4EF6\u548C\u9A8C\u8BC1"}]},a=c((x,f,u)=>{const{layout:B,...l}=e;return l.file=n,l.url=p,E`${v()}${y(s)}`})});export{a as Content,g as __tla,i as compiledContent,a as default,n as file,e as frontmatter,t as getHeadings,d as rawContent,p as url};
