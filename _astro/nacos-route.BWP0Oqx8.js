import{c as t,__tla as o}from"./astro-component.BNo6A4i3.js";import{r as v,m as E,u as r,__tla as x}from"./constant.2GjXjVkh.js";import{__tla as y}from"./astro/assets-service.lesyujvn.js";let a,c,n,e,d,l,i,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u914D\u7F6E\u670D\u52A1\u6765\u6E90">\u914D\u7F6E\u670D\u52A1\u6765\u6E90</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cproduction\u201D \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">production</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">192.xxx.xx.32</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u547D\u540D\u7A7A\u95F4 ID</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosNamespaceId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u670D\u52A1\u5206\u7EC4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cuat\u201D \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">uat</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 1.x\uFF0C\u53EA\u652F\u6301 HTTP \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">192.xxx.xx.31</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u547D\u540D\u7A7A\u95F4 ID</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosNamespaceId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u670D\u52A1\u5206\u7EC4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cproduction\u201D \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: production\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE\x7F    type: nacos2\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 192.xxx.xx.32\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848\x7F    port: 8848\x7F    # Nacos \u547D\u540D\u7A7A\u95F4 ID\x7F    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358\x7F    # Nacos \u670D\u52A1\u5206\u7EC4\x7F    nacosGroups:\x7F    - DEFAULT_GROUP\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cuat\u201D \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: uat\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 1.x\uFF0C\u53EA\u652F\u6301 HTTP \u534F\u8BAE\x7F    type: nacos\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 192.xxx.xx.31\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848\x7F    port: 8848\x7F    # Nacos \u547D\u540D\u7A7A\u95F4 ID\x7F    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4\x7F    # Nacos \u670D\u52A1\u5206\u7EC4\x7F    nacosGroups:\x7F    - DEFAULT_GROUP"><div></div></button></div></figure></div>
<p>\u901A\u8FC7<a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>\u8D44\u6E90\u914D\u7F6E\u4E86\u4E24\u4E2A\u670D\u52A1\u6765\u6E90\uFF0C\u5206\u522B\u53D6\u540D \u201Cproduction\u201D\u548C\u201Cuat\u201D\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F Higress \u5BF9\u63A5 Nacos \u540C\u65F6\u652F\u6301 HTTP \u548C gRPC \u4E24\u79CD\u534F\u8BAE\uFF0C\u5EFA\u8BAE\u5C06 Nacos \u5347\u7EA7\u5230 2.x \u7248\u672C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u4E0A\u8FF0\u914D\u7F6E\u7684 type \u4E2D\u6307\u5B9A \u201Cnacos2\u201D \u4F7F\u7528 gRPC \u534F\u8BAE\uFF0C\u4ECE\u800C\u66F4\u5FEB\u901F\u5730\u611F\u77E5\u5230\u670D\u52A1\u53D8\u5316\uFF0C\u5E76\u6D88\u8017\u66F4\u5C11\u7684 Nacos \u670D\u52A1\u7AEF\u8D44\u6E90\u3002
\u57FA\u4E8E McpBridge \u4E2D\u7684 registries \u6570\u7EC4\u914D\u7F6E\uFF0CHigress \u53EF\u4EE5\u8F7B\u677E\u5BF9\u63A5\u591A\u4E2A\u4E14\u4E0D\u540C\u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF08Nacos/Zookeeper/Eureka/Consul/\u2026\uFF09\uFF0C\u8FD9\u91CC\u5BF9\u4E8E Nacos \u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u7684\u5FAE\u670D\u52A1\u53EF\u4EE5\u5171\u7528\u4E00\u4E2A\u7F51\u5173\uFF0C\u964D\u4F4E\u81EA\u5EFA\u5FAE\u670D\u52A1\u7F51\u5173\u7684\u8D44\u6E90\u6210\u672C\u5F00\u9500\u3002</p>
<h2 id="\u914D\u7F6E-ingress">\u914D\u7F6E Ingress</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u548C\u5E38\u89C1\u7684 Ingress \u5728 backend \u4E2D\u5B9A\u4E49 service \u4E0D\u540C\uFF0C\u8FD9\u91CC\u57FA\u4E8E Ingress \u7684 resource backend \u5C06\u4E0A\u9762\u5B9A\u4E49\u670D\u52A1\u6765\u6E90\u7684 McpBridge \u8FDB\u884C\u5173\u8054\u3002\u5E76\u901A\u8FC7\u6CE8\u89E3<code dir="auto">higress.io/destination</code>\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002</p>
<p>\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF\u2019_\u2018\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760\u2019-\u2018\u3002</p>`,e={title:"\u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1",keywords:["ingress","higress nacos"],description:"\u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/nacos-route.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/nacos-route.md",i=void 0,l=function(){return`
# \u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1


## \u914D\u7F6E\u670D\u52A1\u6765\u6E90

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cproduction\u201D \u7684\u670D\u52A1\u6765\u6E90
  - name: production
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 192.xxx.xx.32
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cuat\u201D \u7684\u670D\u52A1\u6765\u6E90
  - name: uat
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 1.x\uFF0C\u53EA\u652F\u6301 HTTP \u534F\u8BAE
    type: nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 192.xxx.xx.31
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

\u901A\u8FC7[McpBridge](./mcp-bridge.md)\u8D44\u6E90\u914D\u7F6E\u4E86\u4E24\u4E2A\u670D\u52A1\u6765\u6E90\uFF0C\u5206\u522B\u53D6\u540D \u201Cproduction\u201D\u548C\u201Cuat\u201D\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F Higress \u5BF9\u63A5 Nacos \u540C\u65F6\u652F\u6301 HTTP \u548C gRPC \u4E24\u79CD\u534F\u8BAE\uFF0C\u5EFA\u8BAE\u5C06 Nacos \u5347\u7EA7\u5230 2.x \u7248\u672C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u4E0A\u8FF0\u914D\u7F6E\u7684 type \u4E2D\u6307\u5B9A \u201Cnacos2\u201D \u4F7F\u7528 gRPC \u534F\u8BAE\uFF0C\u4ECE\u800C\u66F4\u5FEB\u901F\u5730\u611F\u77E5\u5230\u670D\u52A1\u53D8\u5316\uFF0C\u5E76\u6D88\u8017\u66F4\u5C11\u7684 Nacos \u670D\u52A1\u7AEF\u8D44\u6E90\u3002
\u57FA\u4E8E McpBridge \u4E2D\u7684 registries \u6570\u7EC4\u914D\u7F6E\uFF0CHigress \u53EF\u4EE5\u8F7B\u677E\u5BF9\u63A5\u591A\u4E2A\u4E14\u4E0D\u540C\u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF08Nacos/Zookeeper/Eureka/Consul/...\uFF09\uFF0C\u8FD9\u91CC\u5BF9\u4E8E Nacos \u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u7684\u5FAE\u670D\u52A1\u53EF\u4EE5\u5171\u7528\u4E00\u4E2A\u7F51\u5173\uFF0C\u964D\u4F4E\u81EA\u5EFA\u5FAE\u670D\u52A1\u7F51\u5173\u7684\u8D44\u6E90\u6210\u672C\u5F00\u9500\u3002


## \u914D\u7F6E Ingress

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

\u548C\u5E38\u89C1\u7684 Ingress \u5728 backend \u4E2D\u5B9A\u4E49 service \u4E0D\u540C\uFF0C\u8FD9\u91CC\u57FA\u4E8E Ingress \u7684 resource backend \u5C06\u4E0A\u9762\u5B9A\u4E49\u670D\u52A1\u6765\u6E90\u7684 McpBridge \u8FDB\u884C\u5173\u8054\u3002\u5E76\u901A\u8FC7\u6CE8\u89E3\`higress.io/destination\`\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002

\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF'_'\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760'-'\u3002
`},c=function(){return s},d=function(){return[{depth:2,slug:"\u914D\u7F6E\u670D\u52A1\u6765\u6E90",text:"\u914D\u7F6E\u670D\u52A1\u6765\u6E90"},{depth:2,slug:"\u914D\u7F6E-ingress",text:"\u914D\u7F6E Ingress"}]},a=t((u,g,m)=>{const{layout:F,...p}=e;return p.file=n,p.url=i,v`${E()}${r(s)}`})});export{a as Content,f as __tla,c as compiledContent,a as default,n as file,e as frontmatter,d as getHeadings,l as rawContent,i as url};
