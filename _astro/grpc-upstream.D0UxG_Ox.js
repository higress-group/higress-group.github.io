import{c as d,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as E,__tla as y}from"./constant.B6p3iceL.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,i,a,n,l,c,p,g=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h1 id="route-to-grpc-service">Route to gRPC Service</h1>
<h2 id="prerequisites">Prerequisites</h2>
<ol>
<li>Higress is installed in the higress-system namespace in K8s, with HTTP port listening on 80. For testing convenience, the gateway port is mapped to local 127.0.0.1:80;</li>
<li>The goal is to deploy the grpc-httpbin service in the default namespace, with the service listening on port 9091;</li>
<li>For details about the grpc-httpbin service, please refer to <a href="https://github.com/2456868764/httpbin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github httpbin</a>;</li>
<li>For the grpcurl tool, please refer to <a href="https://github.com/fullstorydev/grpcurl" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github grpcurl</a>;</li>
</ol>
<h2 id="prepare-the-backend-grpc-httpbin-service">Prepare the Backend grpc-httpbin Service</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POD_NAME</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NAMESPACE</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">10m</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: grpc-httpbin-v1\x7F  namespace: default\x7Fspec:\x7F  selector:\x7F    app: grpc-httpbin-v1\x7F  ports:\x7F    - protocol: TCP\x7F      port: 9091\x7F      targetPort: 9091\x7F---\x7FapiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: grpc-httpbin-v1\x7F  namespace: default\x7F  labels:\x7F    app: grpc-httpbin-v1\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: grpc-httpbin-v1\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: grpc-httpbin-v1\x7F    spec:\x7F      containers:\x7F      - name: grpc-httpbin-v1\x7F        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1\x7F        env:\x7F        - name: POD_NAME\x7F          valueFrom:\x7F            fieldRef:\x7F              fieldPath: metadata.name\x7F        - name: NAMESPACE\x7F          valueFrom:\x7F            fieldRef:\x7F              fieldPath: metadata.namespace\x7F        resources:\x7F          requests:\x7F            cpu: 10m"><div></div></button></div></figure></div>
<h2 id="configure-the-route">Configure the Route</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nginx.ingress.kubernetes.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GRPC"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-grpc-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    nginx.ingress.kubernetes.io/backend-protocol: &#x22;GRPC&#x22;\x7F  name: ingress-grpc-httpbin\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: foo.com\x7F      http:\x7F        paths:\x7F          - path: /\x7F            pathType: Prefix\x7F            backend:\x7F              service:\x7F                name: grpc-httpbin-v1\x7F                port:\x7F                  number: 9091"><div></div></button></div></figure></div>
<p>The <code dir="auto">nginx.ingress.kubernetes.io/backend-protocol</code> Ingress Annotation specifies the protocol used by the backend service. The default is HTTP, and it supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS.</p>
<h2 id="testing-with-grpcurl">Testing with grpcurl</h2>
<ol>
<li>List the backend services</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpcurl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-plaintext</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-authority</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">foo.com</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">127.0.0.1:80</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">list</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpc.reflection.v1.ServerReflection</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpc.reflection.v1alpha.ServerReflection</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">order.OrderManagement</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grpcurl -plaintext -authority foo.com  127.0.0.1:80  list\x7F\x7Fgrpc.reflection.v1.ServerReflection\x7Fgrpc.reflection.v1alpha.ServerReflection\x7Forder.OrderManagement"><div></div></button></div></figure></div>
<ol start="2">
<li>Call the sayHello method</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpcurl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-plaintext</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-authority</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">foo.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"name": "jun"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">127.0.0.1:80</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">order.OrderManagement/sayHello</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">"Hello jun"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grpcurl -plaintext -authority foo.com -d &#x27;{&#x22;name&#x22;: &#x22;jun&#x22;}&#x27; 127.0.0.1:80  order.OrderManagement/sayHello\x7F\x7F&#x22;Hello jun&#x22;"><div></div></button></div></figure></div>`,n={title:"Configure a Route to gRPC Service",keywords:["ops","config","route","upstream","grpc"],description:"Introduce how to configure a route for backend services using the gRPC protocol",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/grpc-upstream.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/grpc-upstream.md",p=void 0,c=function(){return`
# Route to gRPC Service

## Prerequisites

1. Higress is installed in the higress-system namespace in K8s, with HTTP port listening on 80. For testing convenience, the gateway port is mapped to local 127.0.0.1:80;
2. The goal is to deploy the grpc-httpbin service in the default namespace, with the service listening on port 9091;
3. For details about the grpc-httpbin service, please refer to [github httpbin](https://github.com/2456868764/httpbin);
4. For the grpcurl tool, please refer to [github grpcurl](https://github.com/fullstorydev/grpcurl);

## Prepare the Backend grpc-httpbin Service

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: grpc-httpbin-v1
  namespace: default
spec:
  selector:
    app: grpc-httpbin-v1
  ports:
    - protocol: TCP
      port: 9091
      targetPort: 9091
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grpc-httpbin-v1
  namespace: default
  labels:
    app: grpc-httpbin-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: grpc-httpbin-v1
  template:
    metadata:
      labels:
        app: grpc-httpbin-v1
    spec:
      containers:
      - name: grpc-httpbin-v1
        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1
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
\`\`\`

## Configure the Route

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
  name: ingress-grpc-httpbin
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - host: foo.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: grpc-httpbin-v1
                port:
                  number: 9091
\`\`\`

The \`nginx.ingress.kubernetes.io/backend-protocol\` Ingress Annotation specifies the protocol used by the backend service. The default is HTTP, and it supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS.

## Testing with grpcurl

1. List the backend services

\`\`\`shell
grpcurl -plaintext -authority foo.com  127.0.0.1:80  list

grpc.reflection.v1.ServerReflection
grpc.reflection.v1alpha.ServerReflection
order.OrderManagement
\`\`\`

2. Call the sayHello method

\`\`\`shell
grpcurl -plaintext -authority foo.com -d '{"name": "jun"}' 127.0.0.1:80  order.OrderManagement/sayHello

"Hello jun"
\`\`\``},i=function(){return s},l=function(){return[{depth:1,slug:"route-to-grpc-service",text:"Route to gRPC Service"},{depth:2,slug:"prerequisites",text:"Prerequisites"},{depth:2,slug:"prepare-the-backend-grpc-httpbin-service",text:"Prepare the Backend grpc-httpbin Service"},{depth:2,slug:"configure-the-route",text:"Configure the Route"},{depth:2,slug:"testing-with-grpcurl",text:"Testing with grpcurl"}]},e=d((f,u,m)=>{const{layout:b,...t}=n;return t.file=a,t.url=p,r`${v()}${E(s)}`})});export{e as Content,g as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,c as rawContent,p as url};
