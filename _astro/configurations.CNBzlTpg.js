import{c,__tla as g}from"./astro-component.CwRucF1h.js";import{r as n,m as h,u,__tla as p}from"./constant.B1AWh3JM.js";import{__tla as y}from"./astro/assets-service.Dd3mQuiC.js";let e,l,r,s,a,i,o,P=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let t;t=`<h1 id="higress\u53C2\u6570\u914D\u7F6E">Higress\u53C2\u6570\u914D\u7F6E</h1>
<p>\u4EE5\u4E0B\u8FD0\u7EF4\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 helm \u547D\u4EE4\u7684 \u2014set \u6216\u8005 \u2014values \u65B9\u5F0F\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 hgctl \u7684 profile \u6587\u4EF6\u4E2D\u7684 values \u5B57\u6BB5\u6765\u5B9E\u73B0\u63A7\u5236</p>
<h2 id="global\u53C2\u6570">Global\u53C2\u6570</h2>
















































































<table><thead><tr><th>\u53C2\u6570</th><th align="left">\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>global.ingressClass</td><td align="left">IngressClass \u53C2\u6570\u7528\u4E8E\u7B5B\u9009 Higress \u63A7\u5236\u5668\u8981\u76D1\u542C\u7684 Ingress \u8D44\u6E90\u3002\u5728\u96C6\u7FA4\u5185\u90E8\u7F72\u4E86\u591A\u4E2A\u7F51\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E00\u53C2\u6570\u6765\u533A\u5206\u6BCF\u4E2A\u7F51\u5173\u7684\u804C\u8D23\u8303\u56F4 \u3002IngressClass \u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u53D6\u503C\uFF1A1. \u5982\u679C\u8BBE\u7F6E\u4E3A\u201Cnginx\u201D\uFF0CHigress Controller \u5C06\u76D1\u542C Ingress \u4E3A nginx \u6216\u4E3A\u7A7A\u7684 Ingress \u8D44\u6E90\u30022. \u5982\u679C\u8BBE\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u76D1\u542C K8s \u96C6\u7FA4\u5185\u7684\u5168\u90E8 Ingress \u8D44\u6E90\u3002</td><td>higress</td></tr><tr><td>global.watchNamespace</td><td align="left">\u5982\u679C\u503C\u4E0D\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u53EA\u4F1A\u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u8D44\u6E90\u3002\u5F53\u57FA\u4E8E K8s \u547D\u540D\u7A7A\u95F4\u8FDB\u884C\u4E1A\u52A1\u7CFB\u7EDF\u9694\u79BB\u65F6\uFF0C\u82E5\u9700\u8981\u5BF9\u6BCF\u4E2A\u547D\u540D\u7A7A\u95F4\u90E8\u7F72\u4E00\u5957\u72EC\u7ACB\u7684\u7F51\u5173\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E00\u53C2\u6570\u6765\u9650\u5236 Higress \u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u5185\u7684 Ingress\u3002</td><td>""</td></tr><tr><td>global.disableAlpnH2</td><td align="left">\u662F\u5426\u5728 ALPN \u4E2D\u7981\u7528 HTTP/2 \u534F\u8BAE</td><td>false</td></tr><tr><td>global.enableStatus</td><td align="left">\u82E5\u4E3Atrue\uFF0C Higress Controller \u5C06\u4F1A\u66F4\u65B0 Ingress \u8D44\u6E90\u7684 status \u5B57\u6BB5\u3002\u4E3A\u907F\u514D\u4ECE Nginx Ingress \u8FC1\u79FB\u8FC7\u7A0B\u4E2D\uFF0C\u8986\u76D6 Ingress \u5BF9\u8C61\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E00\u53C2\u6570\u8BBE\u7F6E\u4E3Afalse\uFF0C\u8FD9\u6837 Higress \u9ED8\u8BA4\u5C31\u4E0D\u4F1A\u5C06\u5165\u53E3 IP \u5199\u5165 Ingress \u7684 status \u5B57\u6BB5\u3002</td><td>true</td></tr><tr><td>global.local</td><td align="left">\u5982\u679C\u8981\u5B89\u88C5\u81F3\u672C\u5730 K8s \u96C6\u7FA4\uFF08\u5982 Kind\u3001Rancher Desktop \u7B49\uFF09\uFF0C\u8BF7\u8BBE\u7F6E\u4E3A true</td><td>false</td></tr><tr><td>global.enableIstioAPI</td><td align="left">\u82E5\u4E3A true\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C istio \u8D44\u6E90</td><td>false</td></tr><tr><td>global.enableGatewayAPI</td><td align="left">\u82E5\u4E3A true\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C Gateway API \u8D44\u6E90</td><td>false</td></tr><tr><td>global.imagePullPolicy</td><td align="left">\u5982\u679C\u4E0D\u5E0C\u671B\u4F7F\u7528\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A\u955C\u50CF\u62C9\u53D6\u7B56\u7565\u3002\u9ED8\u8BA4\u884C\u4E3A\uFF1A\u6700\u65B0\u7684\u955C\u50CF\u5C06\u59CB\u7EC8\u4EE5 Always \u65B9\u5F0F\u62C9\u53D6\uFF0C\u5426\u5219\u5C06\u4EE5 IfNotPresent \u65B9\u5F0F\u62C9\u53D6\u3002</td><td>""</td></tr><tr><td>global.imagePullSecrets</td><td align="left">\u4E3A\u6240\u6709 ServiceAccount \u914D\u7F6E ImagePullSecrets\uFF0C\u5373\u5728\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D\u5217\u51FA\u7684\u4E00\u7EC4\u5BC6\u94A5\uFF0C\u7528\u4E8E\u62C9\u53D6\u4EFB\u4F55\u5F15\u7528\u6B64 ServiceAccount \u7684 pod \u4E2D\u7684\u955C\u50CF\u3002\u5BF9\u4E8E\u4E0D\u4F7F\u7528 ServiceAccount \u7684\u7EC4\u4EF6\uFF08\u4F8B\u5982 grafana\u3001servicegraph\u3001tracing\uFF09\uFF0CImagePullSecrets \u5C06\u88AB\u6DFB\u52A0\u5230\u76F8\u5E94\u7684 Deployment\uFF08StatefulSet\uFF09\u5BF9\u8C61\u4E2D\u3002\u5BF9\u4E8E\u914D\u7F6E\u4E86\u79C1\u6709 Docker Registry \u7684\u4EFB\u4F55\u96C6\u7FA4\uFF0C\u90FD\u5FC5\u987B\u8BBE\u7F6E\u6B64\u9879\u3002</td><td>[]</td></tr><tr><td>global.defaultUpstreamConcurrencyThreshold</td><td align="left">\u5355\u4E2A\u6570\u636E\u9762\u5B9E\u4F8B\u548C\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u7684\u6700\u5927\u5E76\u53D1\uFF08\u4E0D\u540C\u670D\u52A1\u72EC\u7ACB\u8BA1\u7B97\uFF09\uFF0C\u6CE8\u610F\u8FC7\u591A\u5E76\u53D1\u53EF\u80FD\u5BFC\u81F4\u7F51\u5173\u5185\u5B58\u8FC7\u9AD8\uFF0C\u8BF7\u76F8\u5E94\u8C03\u9AD8\u6570\u636E\u9762\u5185\u5B58\u9650\u5236</td><td>10000</td></tr><tr><td>global.o11y.enabled</td><td align="left">\u82E5\u4E3A true\uFF0C\u5C06\u540C\u65F6\u5B89\u88C5\u53EF\u89C2\u6D4B\u6027\u5957\u4EF6\uFF08Grafana\u3001Promethues\u3001Loki\u3001PromTail \u7B49\uFF09\u3002</td><td>false</td></tr><tr><td>global.pvc.rwxSupported</td><td align="left">RwxSupported \u53C2\u6570\u7528\u4E8E\u6307\u793A\u662F\u5426\u652F\u6301\u8BFB\u5199\u591A\u4E2A Pod\uFF0C\u5373\u662F\u5426\u652F\u6301\u5171\u4EAB\u5377\u3002\u5982\u679C\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u660E\u652F\u6301\u5171\u4EAB\u5377\uFF0C\u591A\u4E2A Pod \u53EF\u4EE5\u540C\u65F6\u6302\u8F7D\u8BE5 PVC\uFF0C\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5219\u8868\u660E\u4E0D\u652F\u6301\u5171\u4EAB\u5377\uFF0C\u53EA\u6709\u4E00\u4E2A Pod \u53EF\u4EE5\u6302\u8F7D\u8BE5 PVC \u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002</td><td>true</td></tr><tr><td>global.onlyPushRouteCluster</td><td align="left">\u82E5\u4E3A<code dir="auto">true</code>\uFF0CHigress Controller \u5C06\u4F1A\u53EA\u63A8\u9001\u88AB\u8DEF\u7531\u5173\u8054\u7684\u670D\u52A1</td><td>true</td></tr><tr><td>global.priorityClassName</td><td align="left">Higress Controller \u548C Higress Gateway Pod \u7684 PriorityClass \u540D\u79F0</td><td></td></tr></tbody></table>
<h2 id="meshconfig\u53C2\u6570">meshConfig\u53C2\u6570</h2>

























<table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-core.meshConfig.enablePrometheusMerge</td><td>\u7528\u4E8E\u542F\u7528\u6216\u7981\u7528\u5C06 Prometheus \u6307\u6807\u8FDB\u884C\u5408\u5E76\u7684\u9009\u9879\u3002\u901A\u8FC7\u542F\u7528\u5B83\uFF0CIstio \u5C06\u80FD\u591F\u5C06\u6765\u81EA\u591A\u4E2A\u4EE3\u7406\u7684\u6307\u6807\u8FDB\u884C\u805A\u5408\u548C\u5C55\u793A\u3002</td><td>true</td></tr><tr><td>higress-core.meshConfig.rootNamespace</td><td>\u8868\u793A\u6839\u547D\u540D\u7A7A\u95F4\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A \u201Cistio-system\u201D\u3002</td><td>null</td></tr><tr><td>higress-core.meshConfig.trustDomain</td><td>\u8868\u793A\u4FE1\u4EFB\u57DF\u3002\u9ED8\u8BA4\u4E3A \u201Ccluster.local\u201D\u3002\u4FE1\u4EFB\u57DF\u7528\u4E8E\u786E\u5B9A\u670D\u52A1\u4E4B\u95F4\u7684\u5B89\u5168\u901A\u4FE1\uFF0C\u5B83\u5C06\u7528\u4E8E\u751F\u6210\u670D\u52A1\u7684\u8BC1\u4E66\u548C JWT Token\u3002</td><td>cluster.local</td></tr></tbody></table>
<h2 id="gateway\u53C2\u6570">Gateway\u53C2\u6570</h2>





































































































































































<table><thead><tr><th>\u53C2\u6570</th><th align="left">\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-core.gateway.replicas</td><td align="left">Higress Gateway \u7684 pod \u6570\u91CF\u3002</td><td>2</td></tr><tr><td>higress-core.gateway.rbac.enabled</td><td align="left">\u5982\u679C\u542F\u7528\uFF0C\u5219\u5C06\u521B\u5EFA roles \u4EE5\u4FBF\u4ECE Gateways \u8BBF\u95EE\u8BC1\u4E66\u3002\u4F46\u5728\u4F7F\u7528 <a href="http://gateway-api.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://gateway-api.org/</a> \u65F6\uFF0C\u8FD9\u4E0D\u662F\u5FC5\u9700\u7684</td><td>true</td></tr><tr><td>higress-core.gateway.serviceAccount.create</td><td align="left">\u6307\u5B9A\u662F\u5426\u521B\u5EFA ServiceAccount, \u5426\u5219\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002</td><td>true</td></tr><tr><td>higress-core.gateway.serviceAccount.annotations</td><td align="left">\u6307\u5B9A\u9700\u8981\u6DFB\u52A0\u5230 ServiceAccount \u4E0A\u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.serviceAccount.name</td><td align="left">\u6307\u5B9A\u8981\u4F7F\u7528\u7684 ServiceAccount \u7684\u540D\u79F0\u3002</td><td>""</td></tr><tr><td>higress-core.gateway.env</td><td align="left">\u6307\u5B9A Gateway \u4F7F\u7528\u7684\u73AF\u5883\u53D8\u91CF\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.hostNetwork</td><td align="left">\u6307\u5B9A\u662F\u5426\u4F7F\u7528\u5BBF\u4E3B\u673A\u7F51\u7EDC\u3002</td><td>false</td></tr><tr><td>higress-core.gateway.labels</td><td align="left">\u6307\u5B9A\u5E94\u7528\u4E8E\u6240\u6709 gateway \u8D44\u6E90\u7684\u6807\u7B7E\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.annotations</td><td align="left">\u6307\u5B9A\u8981\u5E94\u7528\u4E8E\u6240\u6709 gateway \u8D44\u6E90\u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.podAnnotations.prometheus.io/port</td><td align="left">\u6307\u5B9A Prometheus \u76D1\u63A7\u7684\u7AEF\u53E3\u3002</td><td>15020</td></tr><tr><td>higress-core.gateway.podAnnotations.prometheus.io/scrape</td><td align="left">\u6307\u793A Prometheus \u662F\u5426\u5E94\u8BE5\u76D1\u63A7\u8BE5 Pod \u3002\u5982\u679C\u8BE5\u503C\u4E3A\u201Dtrue\u201D\uFF0C\u5219 Prometheus \u5C06\u76D1\u63A7\u8BE5 Pod \uFF1B\u5982\u679C\u8BE5\u503C\u4E3A \u201Cfalse\u201D \uFF0C\u5219\u4E0D\u4F1A\u76D1\u63A7\u8BE5 Pod \u3002</td><td>true</td></tr><tr><td>higress-core.gateway.podAnnotations.prometheus.io/path</td><td align="left">\u6307\u5B9A Prometheus \u76D1\u63A7\u8BE5 Pod \u65F6\uFF0C\u9700\u8981\u8BBF\u95EE\u7684 URL \u8DEF\u5F84\u3002\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4E3A\u201D/stats/prometheus\u201D\u3002</td><td>/stats/prometheus</td></tr><tr><td>higress-core.gateway.service.type</td><td align="left">\u6307\u5B9A Service \u7684\u7C7B\u578B</td><td>LoadBalancer</td></tr><tr><td>higress-core.gateway.service.loadBalancerIP</td><td align="left">\u6307\u5B9A LoadBalancer \u7684 IP \u5730\u5740</td><td>""</td></tr><tr><td>higress-core.gateway.service.loadBalancerSourceRanges</td><td align="left">\u6307\u5B9A LoadBalancer \u5141\u8BB8\u7684\u6E90 IP \u8303\u56F4\u3002</td><td>[]</td></tr><tr><td>higress-core.gateway.service.annotations</td><td align="left">\u6307\u5B9A\u8981\u5E94\u7528\u5230 Service \u4E0A\u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.service.externalTrafficPolicy</td><td align="left">\u6307\u5B9A Service \u7684\u5916\u90E8\u6D41\u91CF\u7B56\u7565\u3002</td><td>""</td></tr><tr><td>higress-core.gateway.rollingMaxSurge</td><td align="left">\u6307\u5B9A\u6EDA\u52A8\u66F4\u65B0\u671F\u95F4\u7684\u6700\u5927\u6269\u5BB9\u6570\u91CF</td><td>100%</td></tr><tr><td>higress-core.gateway.rollingMaxUnavailable</td><td align="left">\u6307\u5B9A\u6EDA\u52A8\u66F4\u65B0\u671F\u95F4\u7684\u6700\u5927\u4E0D\u53EF\u7528\u6570\u91CF\u3002</td><td>25%</td></tr><tr><td>higress-core.gateway.resources.limits.cpu</td><td align="left">\u6307\u5B9A gateway \u5BB9\u5668\u7684CPU\u8BF7\u6C42\u8D44\u6E90\u9650\u5236\u3002</td><td>2000m</td></tr><tr><td>higress-core.gateway.resources.limits.memory</td><td align="left">\u6307\u5B9A gateway \u5BB9\u5668\u7684\u5185\u5B58\u8BF7\u6C42\u8D44\u6E90\u9650\u5236\u3002</td><td>2048Mi</td></tr><tr><td>higress-core.gateway.resources.requests.cpu</td><td align="left">\u6307\u5B9A gateway \u5BB9\u5668\u7684CPU\u8BF7\u6C42\u8D44\u6E90\u3002</td><td>2000m</td></tr><tr><td>higress-core.gateway.resources.requests.memory</td><td align="left">\u6307\u5B9A gateway \u5BB9\u5668\u7684\u5185\u5B58\u8BF7\u6C42\u8D44\u6E90\u3002</td><td>2048Mi</td></tr><tr><td>higress-core.gateway.autoscaling.enabled</td><td align="left">\u6307\u5B9A\u662F\u5426\u542F\u7528 gateway Pod \u81EA\u52A8\u7F29\u653E\u3002</td><td>false</td></tr><tr><td>higress-core.gateway.autoscaling.minReplicas</td><td align="left">\u5141\u8BB8\u7684\u6700\u5C0F\u526F\u672C\u6570\u3002</td><td>1</td></tr><tr><td>higress-core.gateway.autoscaling.maxReplicas</td><td align="left">\u5141\u8BB8\u7684\u6700\u5927\u526F\u672C\u6570\u3002</td><td>5</td></tr><tr><td>higress-core.gateway.autoscaling.targetCPUUtilizationPercentage</td><td align="left">\u8868\u793A HPA \u5E94\u8BE5\u5C1D\u8BD5\u5C06 Pod \u7684 CPU \u5229\u7528\u7387\u7EF4\u6301\u5728\u4EC0\u4E48\u6C34\u5E73\u3002</td><td>80</td></tr><tr><td>higress-core.gateway.nodeSelector</td><td align="left">\u8282\u70B9\u9009\u62E9\u5668\uFF0C\u7528\u4E8E\u786E\u5B9A gatyway \u5BB9\u5668\u5C06\u90E8\u7F72\u5728\u54EA\u4E9B\u8282\u70B9\u4E0A\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.tolerations</td><td align="left">\u5BB9\u5FCD\u5EA6\uFF0C\u7528\u4E8E\u5141\u8BB8 gateway \u5BB9\u5668\u8C03\u5EA6\u5230\u5177\u6709\u6307\u5B9A\u6C61\u70B9\u7684\u8282\u70B9\u3002</td><td>[]</td></tr><tr><td>higress-core.gateway.affinity</td><td align="left">\u4EB2\u548C\u6027\uFF0C\u7528\u4E8E\u63A7\u5236 gateway\u5BB9\u5668\u5982\u4F55\u8C03\u5EA6\uFF0C\u4F7F\u5176\u4E0E\u5176\u4ED6 Pod \u6216\u8282\u70B9\u4FDD\u6301\u4EB2\u548C\u6216\u53CD\u4EB2\u548C\u3002</td><td>{}</td></tr><tr><td>higress-core.gateway.networkGateway</td><td align="left">\u7528\u4E8E\u6307\u5B9A\u7F51\u7EDC\u7F51\u5173\u7684\u540D\u79F0\u6216 IP \u5730\u5740\u3002</td><td>""</td></tr></tbody></table>
<h2 id="controller\u53C2\u6570">Controller\u53C2\u6570</h2>






















































































































































<table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-core.controller.replicas</td><td>Higress Controller \u7684 pod \u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-core.controller.env</td><td>\u6307\u5B9A\u5BB9\u5668\u6240\u9700\u7684\u4EFB\u4F55\u73AF\u5883\u53D8\u91CF\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.labels</td><td>\u6307\u5B9A\u90E8\u7F72 controller \u5BB9\u5668\u7684\u6807\u7B7E</td><td>{}</td></tr><tr><td>higress-core.controller.probe.httpGet.path</td><td>\u5BB9\u5668\u7684\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F7F\u7528 HTTP GET \u8BF7\u6C42\u68C0\u67E5\u5BB9\u5668\u7684 /ready \u8DEF\u5F84</td><td>/ready</td></tr><tr><td>higress-core.controller.probe.httpGet.port</td><td>\u6307\u5B9A\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\u7AEF\u53E3\u3002</td><td>8888</td></tr><tr><td>higress-core.controller.probe.initialDelaySeconds</td><td>\u6307\u5B9A\u5BB9\u5668\u542F\u52A8\u540E\u9996\u6B21\u8FDB\u884C\u5065\u5EB7\u68C0\u67E5\u7684\u5EF6\u8FDF\u65F6\u95F4\u3002</td><td>1</td></tr><tr><td>higress-core.controller.probe.periodSeconds</td><td>\u6307\u5B9A\u8FDB\u884C\u5065\u5EB7\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\u3002</td><td>3</td></tr><tr><td>higress-core.controller.probe.timeoutSeconds</td><td>\u6307\u5B9A\u7B49\u5F85\u5065\u5EB7\u68C0\u67E5\u54CD\u5E94\u7684\u8D85\u65F6\u65F6\u95F4</td><td>5</td></tr><tr><td>higress-core.controller.imagePullSecrets</td><td>\u6307\u5B9A\u7528\u4E8E\u62C9\u53D6\u5BB9\u5668\u955C\u50CF\u7684\u5BC6\u94A5\u4FE1\u606F</td><td>[]</td></tr><tr><td>higress-core.controller.rbac.create</td><td>\u5B9A\u4E49\u662F\u5426\u5E94\u8BE5\u521B\u5EFA\u4E0E\u6B64\u90E8\u7F72\u76F8\u5173\u7684 RBAC \u89C4\u5219\u3002</td><td>true</td></tr><tr><td>higress-core.controller.serviceAccount.create</td><td>\u6307\u5B9A\u662F\u5426\u5E94\u8BE5\u521B\u5EFA serviceAccount \u3002</td><td>true</td></tr><tr><td>higress-core.controller.serviceAccount.annotations</td><td>\u6307\u5B9A\u8981\u6DFB\u52A0\u5230 serviceAccount \u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.serviceAccount.name</td><td>\u6307\u5B9A\u8981\u4F7F\u7528\u7684 serviceAccount \u7684\u540D\u79F0\uFF0C\u5982\u679C\u672A\u8BBE\u7F6E\u4E14 create \u4E3A true \uFF0C\u5219\u4F7F\u7528 fullname \u6A21\u677F\u751F\u6210\u540D\u79F0\u3002</td><td>""</td></tr><tr><td>higress-core.controller.podAnnotations</td><td>\u6307\u5B9A\u8981\u6DFB\u52A0\u5230 controller \u5BB9\u5668\u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.podSecurityContext</td><td>\u6307\u5B9A Pod \u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.service.type</td><td>\u6307\u5B9A Service \u7684\u7C7B\u578B\u4E3A ClusterIP\u3002</td><td>ClusterIP</td></tr><tr><td>higress-core.controller.securityContext</td><td>\u6307\u5B9A controller \u5BB9\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.resources.requests.cpu</td><td>\u5206\u914D\u7ED9 controller \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002</td><td>500m</td></tr><tr><td>higress-core.controller.resources.requests.memory</td><td>\u5206\u914D\u7ED9 controller \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002</td><td>2048Mi</td></tr><tr><td>higress-core.controller.resources.limits.cpu</td><td>\u5206\u914D\u7ED9 controller \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u9650\u5236\u3002</td><td>1000m</td></tr><tr><td>higress-core.controller.resources.limits.memory</td><td>\u5206\u914D\u7ED9 controller \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u9650\u5236\u3002</td><td>2048Mi</td></tr><tr><td>higress-core.controller.nodeSelector</td><td>\u7528\u4E8E\u6307\u5B9A Pod \u8C03\u5EA6\u5230\u7279\u5B9A\u8282\u70B9\u7684\u6807\u7B7E\u9009\u62E9\u5668</td><td>{}</td></tr><tr><td>higress-core.controller.tolerations</td><td>\u7528\u4E8E\u6307\u5B9A Pod \u7684\u5BB9\u5FCD\u6027\uFF0C\u5373\u5BB9\u5FCD\u67D0\u4E9B\u8282\u70B9\u4E0A\u7684\u7279\u5B9A\u6C61\u70B9\u3002</td><td>[]</td></tr><tr><td>higress-core.controller.affinity</td><td>\u7528\u4E8E\u6307\u5B9A Pod \u7684\u4EB2\u548C\u6027\uFF0C\u5373\u5C06 Pod \u8C03\u5EA6\u5230\u7279\u5B9A\u8282\u70B9\u6216\u8282\u70B9\u7EC4\u3002</td><td>{}</td></tr><tr><td>higress-core.controller.autoscaling.enabled</td><td>\u6307\u5B9A\u662F\u5426\u542F\u7528 Pod \u7684\u81EA\u52A8\u7F29\u653E\u3002</td><td>false</td></tr><tr><td>higress-core.controller.autoscaling.minReplicas</td><td>\u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u7684\u6700\u5C0F Pod \u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-core.autoscaling.maxReplicas</td><td>\u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u7684\u6700\u5927 Pod \u6570\u91CF\u3002</td><td>5</td></tr><tr><td>higress-core.autoscaling.targetCPUUtilizationPercentage</td><td>\u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u8C03\u6574 Pod \u6570\u91CF\u7684\u76EE\u6807 CPU \u5229\u7528\u7387\u767E\u5206\u6BD4\u3002</td><td>80</td></tr></tbody></table>
<h2 id="pilot\u53C2\u6570">Pilot\u53C2\u6570</h2>












































































































































<table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-core.pilot.autoscaleEnabled</td><td>\u662F\u5426\u542F\u7528 Pilot \u7684\u81EA\u52A8\u4F38\u7F29\u3002</td><td>false</td></tr><tr><td>higress-core.pilot.autoscaleMin</td><td>\u81EA\u52A8\u4F38\u7F29\u65F6\u6700\u5C0F\u7684\u526F\u672C\u6570\u3002</td><td>1</td></tr><tr><td>higress-core.pilot.autoscaleMax</td><td>\u81EA\u52A8\u4F38\u7F29\u65F6\u6700\u5927\u7684\u526F\u672C\u6570\u3002</td><td>5</td></tr><tr><td>higress-core.pilot.replicaCount</td><td>Pilot \u7684 pod \u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-core.pilot.rollingMaxSurge</td><td>\u5728\u8FDB\u884C\u6EDA\u52A8\u66F4\u65B0\u65F6\uFF0C\u5141\u8BB8\u540C\u65F6\u589E\u52A0\u7684 Pod \u6570\u91CF\u7684\u6700\u5927\u6BD4\u4F8B\u3002</td><td>100%</td></tr><tr><td>higress-core.pilot.rollingMaxUnavailable</td><td>\u5728\u8FDB\u884C\u6EDA\u52A8\u66F4\u65B0\u65F6\uFF0C\u5141\u8BB8\u540C\u65F6\u4E0D\u53EF\u7528\u7684 Pod \u6570\u91CF\u7684\u6700\u5927\u6BD4\u4F8B\u3002</td><td>25%</td></tr><tr><td>higress-core.pilot.traceSampling</td><td>\u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\u91C7\u6837\u7387\uFF0C\u8FD9\u91CC\u662F1.0\uFF08\u5373100%\uFF09\u3002</td><td>1</td></tr><tr><td>higress-core.pilot.resources.requests.cpu</td><td>\u5206\u914D\u7ED9 pilot \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002</td><td>500m</td></tr><tr><td>higress-core.pilot.resources.requests.memory</td><td>\u5206\u914D\u7ED9 pilot \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002</td><td>2048Mi</td></tr><tr><td>higress-core.pilot.env.PILOT_SCOPE_GATEWAY_TO_NAMESPACE</td><td>\u5982\u679C\u8BBE\u7F6E\u4E3A true \uFF0C\u5219\u4F7F\u7F51\u5173\u53EA\u80FD\u8BBF\u95EE\u5176\u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u7684\u670D\u52A1\u3002</td><td>true</td></tr><tr><td>higress-core.pilot.env.PILOT_ENABLE_METADATA_EXCHANGE</td><td>\u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u4E0E Envoy \u4E4B\u95F4\u7684\u5143\u6570\u636E\u4EA4\u6362\u3002</td><td>false</td></tr><tr><td>higress-core.pilot.env.PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY</td><td>\u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u8DE8\u96C6\u7FA4\u5DE5\u4F5C\u8D1F\u8F7D\u5165\u53E3\u3002</td><td>false</td></tr><tr><td>higress-core.pilot.env.VALIDATION_ENABLED</td><td>\u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u5BF9\u914D\u7F6E\u6587\u4EF6\u7684\u9A8C\u8BC1\u3002</td><td>false</td></tr><tr><td>higress-core.pilot.cpu.targetAverageUtilization</td><td>\u6307\u5B9A Pod \u5E94\u8BE5\u5C1D\u8BD5\u8FBE\u5230\u7684 CPU \u5229\u7528\u7387\u767E\u5206\u6BD4\uFF0C\u4EE5\u4FBF\u89E6\u53D1\u81EA\u52A8\u7F29\u653E\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A80\uFF0C\u5219\u5F53 Pod \u7684 CPU \u5229\u7528\u7387\u8FBE\u523080\uFF05\u65F6\uFF0C\u5C06\u542F\u52A8\u66F4\u591A\u7684 Pod \u4EE5\u5904\u7406\u66F4\u591A\u7684\u8D1F\u8F7D\u3002</td><td>80</td></tr><tr><td>higress-core.pilot.enableProtocolSniffingForOutbound</td><td>\u662F\u5426\u5728\u51FA\u7AD9\u6D41\u91CF\u4E0A\u542F\u7528\u534F\u8BAE\u55C5\u63A2\uFF0C\u8FD9\u91CC\u662F true \u3002</td><td>true</td></tr><tr><td>higress-core.pilot.enableProtocolSniffingForInbound</td><td>\u662F\u5426\u5728\u5165\u7AD9\u6D41\u91CF\u4E0A\u542F\u7528\u534F\u8BAE\u55C5\u63A2\uFF0C\u8FD9\u91CC\u662F true \u3002</td><td>true</td></tr><tr><td>higress-core.pilot.nodeSelector</td><td>\u6307\u5B9A\u5E94\u8BE5\u90E8\u7F72\u6B64\u5E94\u7528\u7A0B\u5E8F\u7684\u8282\u70B9\u6807\u7B7E\u3002</td><td>{}</td></tr><tr><td>higress-core.pilot.podAnnotations</td><td>\u6307\u5B9A\u8981\u6DFB\u52A0\u5230 Pod \u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.pilot.serviceAnnotations</td><td>\u6307\u5B9A\u8981\u6DFB\u52A0\u5230 Service \u7684\u6CE8\u91CA\u3002</td><td>{}</td></tr><tr><td>higress-core.pilot.jwksResolverExtraRootCA</td><td>\u63D0\u4F9B PEM \u683C\u5F0F\u7684\u6839\u8BC1\u4E66\uFF0C\u4EE5\u4FBF\u5728\u89E3\u6790 JWKS URI \u65F6\u7531 pilot \u4FE1\u4EFB\u3002</td><td>""</td></tr><tr><td>higress-core.pilot.configSource.subscribedResources</td><td>\u6307\u5B9A\u914D\u7F6E\u6E90\u7684\u6765\u6E90\uFF0C\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684 MCP \u3002\u6307\u5B9A\u8BA2\u9605\u7684 Kubernetes \u8D44\u6E90\u5217\u8868\u3002</td><td>[]</td></tr><tr><td>higress-core.pilot.plugins</td><td>\u6307\u5B9A\u8981\u542F\u7528\u7684\u63D2\u4EF6\u5217\u8868\u3002</td><td>[]</td></tr><tr><td>higress-core.pilot.keepaliveMaxServerConnectionAge</td><td>\u9650\u5236 gateway \u4E0E controller \u8FDE\u63A5\u7684\u6700\u957F\u65F6\u95F4\u3002</td><td>30m</td></tr><tr><td>higress-core.pilot.deploymentLabels</td><td>\u4E3A\u90E8\u7F72\u6DFB\u52A0\u989D\u5916\u7684\u6807\u7B7E\u3002</td><td>{}</td></tr><tr><td>higress-core.pilot.configMap</td><td>\u5B89\u88C5\u7531values.yaml\u751F\u6210\u7684 mesh config \uFF0C\u5982\u679C\u4E3A false \uFF0C\u5219 Pilot \u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u6216\u7528\u6237\u63D0\u4F9B\u7684\u503C\uFF0C\u5982\u679C\u4E3A false \uFF0C\u5219 Pilot \u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u6216\u7528\u6237\u63D0\u4F9B\u7684\u503C</td><td>true</td></tr><tr><td>higress-core.pilot.podLabels</td><td>\u4E3A Pod \u6DFB\u52A0\u989D\u5916\u7684\u6807\u7B7E\uFF0C\u4EE5\u7528\u4E8E\u76D1\u63A7\u548C\u65E5\u5FD7\u8BB0\u5F55\u914D\u7F6E\u3002</td><td>{}</td></tr></tbody></table>
<h2 id="skywalking-\u53C2\u6570">skywalking \u53C2\u6570</h2>

























<table><thead><tr><th>\u53C2\u6570</th><th>\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-core.skywalking.enabled</td><td>\u662F\u5426\u542F\u7528 SkyWalking</td><td>false</td></tr><tr><td>higress-core.skywalking.service.address</td><td>SkyWalking \u670D\u52A1\u5730\u5740\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C</td><td>~</td></tr><tr><td>higress-core.skywalking.service.port</td><td>SkyWalking \u670D\u52A1\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A 11800</td><td>11800</td></tr></tbody></table>
<h2 id="\u63A7\u5236\u53F0\u53C2\u6570">\u63A7\u5236\u53F0\u53C2\u6570</h2>































































































<table><thead><tr><th>\u53C2\u6570</th><th align="left">\u53C2\u6570\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>higress-console.replicaCount</td><td align="left">Higress Console \u7684 pod \u6570\u91CF</td><td>1</td></tr><tr><td>higress-console.dnsPolicy</td><td align="left">\u6307\u5B9A DNS \u7B56\u7565\uFF0C\u8FD9\u91CC\u4E3A ClusterFirst \u3002</td><td>ClusterFirst</td></tr><tr><td>higress-console.restartPolicy</td><td align="left">\u6307\u5B9A\u91CD\u542F\u7B56\u7565\uFF0C\u8FD9\u91CC\u6307\u5B9A\u4E3A Always \u3002</td><td>Always</td></tr><tr><td>higress-console.service.type</td><td align="left">\u6307\u5B9A\u63A7\u5236\u53F0 service \u7C7B\u578B\u3002</td><td>ClusterIP</td></tr><tr><td>higress-console.resources.requests.cpu</td><td align="left">\u5206\u914D\u7ED9 console \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002</td><td>250m</td></tr><tr><td>higress-console.resources.requests.memory</td><td align="left">\u5206\u914D\u7ED9 console \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002</td><td>512Mi</td></tr><tr><td>higress-console.web.login.prompt</td><td align="left">\u767B\u5F55\u9875\u9762\u4E0A\u663E\u793A\u7684\u63D0\u793A\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002</td><td>""</td></tr><tr><td>higress-console.certmanager.enabled</td><td align="left">\u6307\u5B9A\u662F\u5426\u542F\u7528\u8BC1\u4E66\u7BA1\u7406\u5668\u3002</td><td>false</td></tr><tr><td>higress-console.certmanager.replicas</td><td align="left">Certmanage pod \u7684\u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-console.o11y.grafana.replicas</td><td align="left">Grafana pod \u7684\u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-console.o11y.grafana.storage</td><td align="left">\u5206\u914D\u7ED9 Grafana \u7684\u5B58\u50A8\u7C7B\u5927\u5C0F\u3002</td><td>1Gi</td></tr><tr><td>higress-console.o11y.grafana.pvc.storageClassName</td><td align="left">Grafana \u7684\u5B58\u50A8\u7C7B\u540D\u79F0\u3002</td><td>""</td></tr><tr><td>higress-console.o11y.prometheus.replicas</td><td align="left">Prometheus pod \u7684\u6570\u91CF\u3002</td><td>1</td></tr><tr><td>higress-console.o11y.prometheus.storage</td><td align="left">\u5206\u914D\u7ED9 prometheus \u7684\u5B58\u50A8\u7C7B\u5927\u5C0F\u3002</td><td>1Gi</td></tr><tr><td>higress-console.o11y.prometheus.pvc.storageClassName</td><td align="left">Prometheus \u7684\u5B58\u50A8\u7C7B\u540D\u79F0\u3002</td><td>""</td></tr><tr><td>higress-console.o11y.prometheus.resources.limits.cpu</td><td align="left">\u5206\u914D\u7ED9 prometheus \u7684 CPU \u8D44\u6E90\u9650\u5236\u3002</td><td>500m</td></tr><tr><td>higress-console.o11y.prometheus.resources.limits.memory</td><td align="left">\u5206\u914D\u7ED9 prometheus \u7684\u5185\u5B58\u8D44\u6E90\u9650\u5236\u3002</td><td>2Gi</td></tr></tbody></table>`,s={title:"\u8FD0\u7EF4\u53C2\u6570\u914D\u7F6E\u8BF4\u660E",keywords:["Higress"],description:"Higress \u53C2\u6570\u914D\u7F6E\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configurations.md"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/configurations.md",o=void 0,i=function(){return`
# Higress\u53C2\u6570\u914D\u7F6E

\u4EE5\u4E0B\u8FD0\u7EF4\u53C2\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 helm \u547D\u4EE4\u7684 --set \u6216\u8005 --values \u65B9\u5F0F\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 hgctl \u7684 profile \u6587\u4EF6\u4E2D\u7684 values \u5B57\u6BB5\u6765\u5B9E\u73B0\u63A7\u5236

## Global\u53C2\u6570
| \u53C2\u6570                                 | \u53C2\u6570\u8BF4\u660E                                                                                                                                                                                                                                              | \u9ED8\u8BA4\u503C         |
|------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| global.ingressClass	               | IngressClass \u53C2\u6570\u7528\u4E8E\u7B5B\u9009 Higress \u63A7\u5236\u5668\u8981\u76D1\u542C\u7684 Ingress \u8D44\u6E90\u3002\u5728\u96C6\u7FA4\u5185\u90E8\u7F72\u4E86\u591A\u4E2A\u7F51\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E00\u53C2\u6570\u6765\u533A\u5206\u6BCF\u4E2A\u7F51\u5173\u7684\u804C\u8D23\u8303\u56F4 \u3002IngressClass \u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u53D6\u503C\uFF1A1. \u5982\u679C\u8BBE\u7F6E\u4E3A\u201Cnginx\u201D\uFF0CHigress Controller \u5C06\u76D1\u542C Ingress \u4E3A nginx \u6216\u4E3A\u7A7A\u7684 Ingress \u8D44\u6E90\u30022. \u5982\u679C\u8BBE\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u76D1\u542C K8s \u96C6\u7FA4\u5185\u7684\u5168\u90E8 Ingress \u8D44\u6E90\u3002             | higress     |
| global.watchNamespace              | \u5982\u679C\u503C\u4E0D\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u53EA\u4F1A\u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u8D44\u6E90\u3002\u5F53\u57FA\u4E8E K8s \u547D\u540D\u7A7A\u95F4\u8FDB\u884C\u4E1A\u52A1\u7CFB\u7EDF\u9694\u79BB\u65F6\uFF0C\u82E5\u9700\u8981\u5BF9\u6BCF\u4E2A\u547D\u540D\u7A7A\u95F4\u90E8\u7F72\u4E00\u5957\u72EC\u7ACB\u7684\u7F51\u5173\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E00\u53C2\u6570\u6765\u9650\u5236 Higress \u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u5185\u7684 Ingress\u3002                                                                                                                       | ""          |
| global.disableAlpnH2	              | 	\u662F\u5426\u5728 ALPN \u4E2D\u7981\u7528 HTTP/2 \u534F\u8BAE                                                                                                                                                                                                                           | false        |
| global.enableStatus	               | \u82E5\u4E3Atrue\uFF0C Higress Controller \u5C06\u4F1A\u66F4\u65B0 Ingress \u8D44\u6E90\u7684 status \u5B57\u6BB5\u3002\u4E3A\u907F\u514D\u4ECE Nginx Ingress \u8FC1\u79FB\u8FC7\u7A0B\u4E2D\uFF0C\u8986\u76D6 Ingress \u5BF9\u8C61\u7684 status \u5B57\u6BB5\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E00\u53C2\u6570\u8BBE\u7F6E\u4E3Afalse\uFF0C\u8FD9\u6837 Higress \u9ED8\u8BA4\u5C31\u4E0D\u4F1A\u5C06\u5165\u53E3 IP \u5199\u5165 Ingress \u7684 status \u5B57\u6BB5\u3002                                                                            | true        |
| global.local	                      | 	\u5982\u679C\u8981\u5B89\u88C5\u81F3\u672C\u5730 K8s \u96C6\u7FA4\uFF08\u5982 Kind\u3001Rancher Desktop \u7B49\uFF09\uFF0C\u8BF7\u8BBE\u7F6E\u4E3A true                                                                                                                                                                                              | false       |
| global.enableIstioAPI	             | 	\u82E5\u4E3A true\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C istio \u8D44\u6E90                                                                                                                                                                                                        | false       |
| global.enableGatewayAPI	             | 	\u82E5\u4E3A true\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C Gateway API \u8D44\u6E90                                                                                                                                                                                                  | false       |                          
| global.imagePullPolicy             | \u5982\u679C\u4E0D\u5E0C\u671B\u4F7F\u7528\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5219\u53EF\u4EE5\u6307\u5B9A\u955C\u50CF\u62C9\u53D6\u7B56\u7565\u3002\u9ED8\u8BA4\u884C\u4E3A\uFF1A\u6700\u65B0\u7684\u955C\u50CF\u5C06\u59CB\u7EC8\u4EE5 Always \u65B9\u5F0F\u62C9\u53D6\uFF0C\u5426\u5219\u5C06\u4EE5 IfNotPresent \u65B9\u5F0F\u62C9\u53D6\u3002                                                                                                                                                                        | ""          |
| global.imagePullSecrets            | \u4E3A\u6240\u6709 ServiceAccount \u914D\u7F6E ImagePullSecrets\uFF0C\u5373\u5728\u540C\u4E00\u547D\u540D\u7A7A\u95F4\u4E2D\u5217\u51FA\u7684\u4E00\u7EC4\u5BC6\u94A5\uFF0C\u7528\u4E8E\u62C9\u53D6\u4EFB\u4F55\u5F15\u7528\u6B64 ServiceAccount \u7684 pod \u4E2D\u7684\u955C\u50CF\u3002\u5BF9\u4E8E\u4E0D\u4F7F\u7528 ServiceAccount \u7684\u7EC4\u4EF6\uFF08\u4F8B\u5982 grafana\u3001servicegraph\u3001tracing\uFF09\uFF0CImagePullSecrets \u5C06\u88AB\u6DFB\u52A0\u5230\u76F8\u5E94\u7684 Deployment\uFF08StatefulSet\uFF09\u5BF9\u8C61\u4E2D\u3002\u5BF9\u4E8E\u914D\u7F6E\u4E86\u79C1\u6709 Docker Registry \u7684\u4EFB\u4F55\u96C6\u7FA4\uFF0C\u90FD\u5FC5\u987B\u8BBE\u7F6E\u6B64\u9879\u3002 | []          |
| global.defaultUpstreamConcurrencyThreshold            | \u5355\u4E2A\u6570\u636E\u9762\u5B9E\u4F8B\u548C\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u7684\u6700\u5927\u5E76\u53D1\uFF08\u4E0D\u540C\u670D\u52A1\u72EC\u7ACB\u8BA1\u7B97\uFF09\uFF0C\u6CE8\u610F\u8FC7\u591A\u5E76\u53D1\u53EF\u80FD\u5BFC\u81F4\u7F51\u5173\u5185\u5B58\u8FC7\u9AD8\uFF0C\u8BF7\u76F8\u5E94\u8C03\u9AD8\u6570\u636E\u9762\u5185\u5B58\u9650\u5236                                                                                                                                                                                       | 10000    |
| global.o11y.enabled	                        | \u82E5\u4E3A true\uFF0C\u5C06\u540C\u65F6\u5B89\u88C5\u53EF\u89C2\u6D4B\u6027\u5957\u4EF6\uFF08Grafana\u3001Promethues\u3001Loki\u3001PromTail \u7B49\uFF09\u3002                                                                                                                                                                                          | false        |
| global.pvc.rwxSupported	                    | RwxSupported \u53C2\u6570\u7528\u4E8E\u6307\u793A\u662F\u5426\u652F\u6301\u8BFB\u5199\u591A\u4E2A Pod\uFF0C\u5373\u662F\u5426\u652F\u6301\u5171\u4EAB\u5377\u3002\u5982\u679C\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u8868\u660E\u652F\u6301\u5171\u4EAB\u5377\uFF0C\u591A\u4E2A Pod \u53EF\u4EE5\u540C\u65F6\u6302\u8F7D\u8BE5 PVC\uFF0C\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0C\u5219\u8868\u660E\u4E0D\u652F\u6301\u5171\u4EAB\u5377\uFF0C\u53EA\u6709\u4E00\u4E2A Pod \u53EF\u4EE5\u6302\u8F7D\u8BE5 PVC \u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002                                                                                                        | true         |
| global.onlyPushRouteCluster | \u82E5\u4E3A\`true\`\uFF0CHigress Controller \u5C06\u4F1A\u53EA\u63A8\u9001\u88AB\u8DEF\u7531\u5173\u8054\u7684\u670D\u52A1                                                                                                                                                                                                         | true |
| global.priorityClassName | Higress Controller \u548C Higress Gateway Pod \u7684 PriorityClass \u540D\u79F0                                                                                                                                                                                       |  |

## meshConfig\u53C2\u6570
| \u53C2\u6570                                | \u53C2\u6570\u8BF4\u660E                                                                     | \u9ED8\u8BA4\u503C                       |       
|-----------------------------------|--------------------------------------------------------------------------|---------------------------|
| higress-core.meshConfig.enablePrometheusMerge	 | \u7528\u4E8E\u542F\u7528\u6216\u7981\u7528\u5C06 Prometheus \u6307\u6807\u8FDB\u884C\u5408\u5E76\u7684\u9009\u9879\u3002\u901A\u8FC7\u542F\u7528\u5B83\uFF0CIstio \u5C06\u80FD\u591F\u5C06\u6765\u81EA\u591A\u4E2A\u4EE3\u7406\u7684\u6307\u6807\u8FDB\u884C\u805A\u5408\u548C\u5C55\u793A\u3002          | true |
| higress-core.meshConfig.rootNamespace          | \u8868\u793A\u6839\u547D\u540D\u7A7A\u95F4\u3002\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u4E3A "istio-system"\u3002                                 | null                      |
| higress-core.meshConfig.trustDomain            | \u8868\u793A\u4FE1\u4EFB\u57DF\u3002\u9ED8\u8BA4\u4E3A "cluster.local"\u3002\u4FE1\u4EFB\u57DF\u7528\u4E8E\u786E\u5B9A\u670D\u52A1\u4E4B\u95F4\u7684\u5B89\u5168\u901A\u4FE1\uFF0C\u5B83\u5C06\u7528\u4E8E\u751F\u6210\u670D\u52A1\u7684\u8BC1\u4E66\u548C JWT Token\u3002 | cluster.local           |

## Gateway\u53C2\u6570
| \u53C2\u6570                                                             | \u53C2\u6570\u8BF4\u660E                                                                                      | \u9ED8\u8BA4\u503C                 |       
|----------------------------------------------------------------|:------------------------------------------------------------------------------------------|---------------------|
| higress-core.gateway.replicas	                                 | Higress Gateway \u7684 pod \u6570\u91CF\u3002                                                                 | 2                   |
| higress-core.gateway.rbac.enabled	                             | \u5982\u679C\u542F\u7528\uFF0C\u5219\u5C06\u521B\u5EFA roles \u4EE5\u4FBF\u4ECE Gateways \u8BBF\u95EE\u8BC1\u4E66\u3002\u4F46\u5728\u4F7F\u7528 http://gateway-api.org/ \u65F6\uFF0C\u8FD9\u4E0D\u662F\u5FC5\u9700\u7684                   | true                |
| higress-core.gateway.serviceAccount.create	                    | \u6307\u5B9A\u662F\u5426\u521B\u5EFA ServiceAccount, \u5426\u5219\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C\u3002                                                          | true                |
| higress-core.gateway.serviceAccount.annotations                | \u6307\u5B9A\u9700\u8981\u6DFB\u52A0\u5230 ServiceAccount \u4E0A\u7684\u6CE8\u91CA\u3002                                                              | {}                  |
| higress-core.gateway.serviceAccount.name                       | \u6307\u5B9A\u8981\u4F7F\u7528\u7684 ServiceAccount \u7684\u540D\u79F0\u3002                                                                | ""                  |
| higress-core.gateway.env	                                      | \u6307\u5B9A Gateway \u4F7F\u7528\u7684\u73AF\u5883\u53D8\u91CF\u3002                                                                       | {}                  |
| higress-core.gateway.hostNetwork	                              | \u6307\u5B9A\u662F\u5426\u4F7F\u7528\u5BBF\u4E3B\u673A\u7F51\u7EDC\u3002                                                                              | false               |
| higress-core.gateway.labels	                                   | \u6307\u5B9A\u5E94\u7528\u4E8E\u6240\u6709 gateway \u8D44\u6E90\u7684\u6807\u7B7E\u3002                                                                    | {}                  |
| higress-core.gateway.annotations	                              | \u6307\u5B9A\u8981\u5E94\u7528\u4E8E\u6240\u6709 gateway \u8D44\u6E90\u7684\u6CE8\u91CA\u3002                                                                   | {}                  |
| higress-core.gateway.podAnnotations.prometheus.io/port	        | \u6307\u5B9A Prometheus \u76D1\u63A7\u7684\u7AEF\u53E3\u3002                                                                      | 15020              |
| higress-core.gateway.podAnnotations.prometheus.io/scrape	      | \u6307\u793A Prometheus \u662F\u5426\u5E94\u8BE5\u76D1\u63A7\u8BE5 Pod \u3002\u5982\u679C\u8BE5\u503C\u4E3A"true"\uFF0C\u5219 Prometheus \u5C06\u76D1\u63A7\u8BE5 Pod \uFF1B\u5982\u679C\u8BE5\u503C\u4E3A "false" \uFF0C\u5219\u4E0D\u4F1A\u76D1\u63A7\u8BE5 Pod \u3002 |  true               |
| higress-core.gateway.podAnnotations.prometheus.io/path	        | \u6307\u5B9A Prometheus \u76D1\u63A7\u8BE5 Pod \u65F6\uFF0C\u9700\u8981\u8BBF\u95EE\u7684 URL \u8DEF\u5F84\u3002\u5728\u8FD9\u91CC\u8BBE\u7F6E\u4E3A"/stats/prometheus"\u3002                           | /stats/prometheus |
| higress-core.gateway.service.type	                             | \u6307\u5B9A Service \u7684\u7C7B\u578B                                                                            | LoadBalancer      |
| higress-core.gateway.service.loadBalancerIP                    | \u6307\u5B9A LoadBalancer \u7684 IP \u5730\u5740                                                                   | ""                  |
| higress-core.gateway.service.loadBalancerSourceRanges	         | \u6307\u5B9A LoadBalancer \u5141\u8BB8\u7684\u6E90 IP \u8303\u56F4\u3002                                                               | []                  |
| higress-core.gateway.service.annotations	                      | \u6307\u5B9A\u8981\u5E94\u7528\u5230 Service \u4E0A\u7684\u6CE8\u91CA\u3002                                                                      | {}                  |
| higress-core.gateway.service.externalTrafficPolicy             | \u6307\u5B9A Service \u7684\u5916\u90E8\u6D41\u91CF\u7B56\u7565\u3002                                                                       |         ""           |
| higress-core.gateway.rollingMaxSurge                           | \u6307\u5B9A\u6EDA\u52A8\u66F4\u65B0\u671F\u95F4\u7684\u6700\u5927\u6269\u5BB9\u6570\u91CF                                                                           | 100%              |
| higress-core.gateway.rollingMaxUnavailable                     | \u6307\u5B9A\u6EDA\u52A8\u66F4\u65B0\u671F\u95F4\u7684\u6700\u5927\u4E0D\u53EF\u7528\u6570\u91CF\u3002                                                                         | 25%               |
| higress-core.gateway.resources.limits.cpu	                     | \u6307\u5B9A gateway \u5BB9\u5668\u7684CPU\u8BF7\u6C42\u8D44\u6E90\u9650\u5236\u3002                                                                  | 2000m               |
| higress-core.gateway.resources.limits.memory	                  | \u6307\u5B9A gateway \u5BB9\u5668\u7684\u5185\u5B58\u8BF7\u6C42\u8D44\u6E90\u9650\u5236\u3002                                                                   | 2048Mi               |
| higress-core.gateway.resources.requests.cpu	                   | \u6307\u5B9A gateway \u5BB9\u5668\u7684CPU\u8BF7\u6C42\u8D44\u6E90\u3002                                                                    | 2000m                |
| higress-core.gateway.resources.requests.memory	                | \u6307\u5B9A gateway \u5BB9\u5668\u7684\u5185\u5B58\u8BF7\u6C42\u8D44\u6E90\u3002                                                                     | 2048Mi               |
| higress-core.gateway.autoscaling.enabled	                        | \u6307\u5B9A\u662F\u5426\u542F\u7528 gateway Pod \u81EA\u52A8\u7F29\u653E\u3002                                                                  | false               |
| higress-core.gateway.autoscaling.minReplicas	                    | \u5141\u8BB8\u7684\u6700\u5C0F\u526F\u672C\u6570\u3002                                                                                 | 1                   |
| higress-core.gateway.autoscaling.maxReplicas	                    | \u5141\u8BB8\u7684\u6700\u5927\u526F\u672C\u6570\u3002                                                                                 | 5                   |
| higress-core.gateway.autoscaling.targetCPUUtilizationPercentage	 | \u8868\u793A HPA \u5E94\u8BE5\u5C1D\u8BD5\u5C06 Pod \u7684 CPU \u5229\u7528\u7387\u7EF4\u6301\u5728\u4EC0\u4E48\u6C34\u5E73\u3002                                                        | 80                  |
| higress-core.gateway.nodeSelector                              | \u8282\u70B9\u9009\u62E9\u5668\uFF0C\u7528\u4E8E\u786E\u5B9A gatyway \u5BB9\u5668\u5C06\u90E8\u7F72\u5728\u54EA\u4E9B\u8282\u70B9\u4E0A\u3002                                                           | {}                  |
| higress-core.gateway.tolerations                                                    | \u5BB9\u5FCD\u5EA6\uFF0C\u7528\u4E8E\u5141\u8BB8 gateway \u5BB9\u5668\u8C03\u5EA6\u5230\u5177\u6709\u6307\u5B9A\u6C61\u70B9\u7684\u8282\u70B9\u3002                                                          | []                  |
| higress-core.gateway.affinity                                                       | \u4EB2\u548C\u6027\uFF0C\u7528\u4E8E\u63A7\u5236 gateway\u5BB9\u5668\u5982\u4F55\u8C03\u5EA6\uFF0C\u4F7F\u5176\u4E0E\u5176\u4ED6 Pod \u6216\u8282\u70B9\u4FDD\u6301\u4EB2\u548C\u6216\u53CD\u4EB2\u548C\u3002                                             | {}                  |
| higress-core.gateway.networkGateway                                                 | \u7528\u4E8E\u6307\u5B9A\u7F51\u7EDC\u7F51\u5173\u7684\u540D\u79F0\u6216 IP \u5730\u5740\u3002                                                                       | ""                  |


## Controller\u53C2\u6570
| \u53C2\u6570                                                     | \u53C2\u6570\u8BF4\u660E                                                                 | \u9ED8\u8BA4\u503C       |       
|--------------------------------------------------------|----------------------------------------------------------------------|-----------|
| higress-core.controller.replicas	                      | Higress Controller \u7684 pod \u6570\u91CF\u3002                                         | 1         |
| higress-core.controller.env	                           | \u6307\u5B9A\u5BB9\u5668\u6240\u9700\u7684\u4EFB\u4F55\u73AF\u5883\u53D8\u91CF\u3002                                                       | {}        |
| higress-core.controller.labels	                        | \u6307\u5B9A\u90E8\u7F72 controller \u5BB9\u5668\u7684\u6807\u7B7E                                                | {}        |
| higress-core.controller.probe.httpGet.path	            | \u5BB9\u5668\u7684\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F7F\u7528 HTTP GET \u8BF7\u6C42\u68C0\u67E5\u5BB9\u5668\u7684 /ready \u8DEF\u5F84                            | /ready    |
| higress-core.controller.probe.httpGet.port	            | \u6307\u5B9A\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\u7AEF\u53E3\u3002                                                          | 8888      |
| higress-core.controller.probe.initialDelaySeconds	     | \u6307\u5B9A\u5BB9\u5668\u542F\u52A8\u540E\u9996\u6B21\u8FDB\u884C\u5065\u5EB7\u68C0\u67E5\u7684\u5EF6\u8FDF\u65F6\u95F4\u3002                                                | 1         |
| higress-core.controller.probe.periodSeconds	           | \u6307\u5B9A\u8FDB\u884C\u5065\u5EB7\u68C0\u67E5\u7684\u65F6\u95F4\u95F4\u9694\u3002                                                       | 3         |
| higress-core.controller.probe.timeoutSeconds	          | \u6307\u5B9A\u7B49\u5F85\u5065\u5EB7\u68C0\u67E5\u54CD\u5E94\u7684\u8D85\u65F6\u65F6\u95F4                                                      | 5         |
| higress-core.controller.imagePullSecrets	              | \u6307\u5B9A\u7528\u4E8E\u62C9\u53D6\u5BB9\u5668\u955C\u50CF\u7684\u5BC6\u94A5\u4FE1\u606F                                                      | []        |
| higress-core.controller.rbac.create	                   | \u5B9A\u4E49\u662F\u5426\u5E94\u8BE5\u521B\u5EFA\u4E0E\u6B64\u90E8\u7F72\u76F8\u5173\u7684 RBAC \u89C4\u5219\u3002                                             | true      |
| higress-core.controller.serviceAccount.create	         | \u6307\u5B9A\u662F\u5426\u5E94\u8BE5\u521B\u5EFA serviceAccount \u3002                                            | true      |
| higress-core.controller.serviceAccount.annotations	    | \u6307\u5B9A\u8981\u6DFB\u52A0\u5230 serviceAccount \u7684\u6CE8\u91CA\u3002                                           | {}        |
| higress-core.controller.serviceAccount.name	           | \u6307\u5B9A\u8981\u4F7F\u7528\u7684 serviceAccount \u7684\u540D\u79F0\uFF0C\u5982\u679C\u672A\u8BBE\u7F6E\u4E14 create \u4E3A true \uFF0C\u5219\u4F7F\u7528 fullname \u6A21\u677F\u751F\u6210\u540D\u79F0\u3002 | ""        |
| higress-core.controller.podAnnotations	                | \u6307\u5B9A\u8981\u6DFB\u52A0\u5230 controller \u5BB9\u5668\u7684\u6CE8\u91CA\u3002                                             | {}        |
| higress-core.controller.podSecurityContext	            | \u6307\u5B9A Pod \u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002                                                       | {}        |
| higress-core.controller.service.type	                  | \u6307\u5B9A Service \u7684\u7C7B\u578B\u4E3A ClusterIP\u3002                                           | ClusterIP |
| higress-core.controller.securityContext	               | \u6307\u5B9A controller \u5BB9\u5668\u7684\u5B89\u5168\u4E0A\u4E0B\u6587\u3002                                              | {}        |
| higress-core.controller.resources.requests.cpu	        | \u5206\u914D\u7ED9 controller \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002                                           | 500m      |
| higress-core.controller.resources.requests.memory      | \u5206\u914D\u7ED9 controller \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002                                              | 	2048Mi   |
| higress-core.controller.resources.limits.cpu	          | \u5206\u914D\u7ED9 controller \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u9650\u5236\u3002                                         | 1000m     |
| higress-core.controller.resources.limits.memory	       | \u5206\u914D\u7ED9 controller \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u9650\u5236\u3002                                            | 2048Mi    |
| higress-core.controller.nodeSelector	                  | \u7528\u4E8E\u6307\u5B9A Pod \u8C03\u5EA6\u5230\u7279\u5B9A\u8282\u70B9\u7684\u6807\u7B7E\u9009\u62E9\u5668                                               | {}        |
| higress-core.controller.tolerations	                   | \u7528\u4E8E\u6307\u5B9A Pod \u7684\u5BB9\u5FCD\u6027\uFF0C\u5373\u5BB9\u5FCD\u67D0\u4E9B\u8282\u70B9\u4E0A\u7684\u7279\u5B9A\u6C61\u70B9\u3002                                         | []        |
| higress-core.controller.affinity	                      | \u7528\u4E8E\u6307\u5B9A Pod \u7684\u4EB2\u548C\u6027\uFF0C\u5373\u5C06 Pod \u8C03\u5EA6\u5230\u7279\u5B9A\u8282\u70B9\u6216\u8282\u70B9\u7EC4\u3002                                    | {}        |
| higress-core.controller.autoscaling.enabled	           | \u6307\u5B9A\u662F\u5426\u542F\u7528 Pod \u7684\u81EA\u52A8\u7F29\u653E\u3002                                                    | false     |
| higress-core.controller.autoscaling.minReplicas	       | \u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u7684\u6700\u5C0F Pod \u6570\u91CF\u3002                                                    | 1         |
| higress-core.autoscaling.maxReplicas	                    | \u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u7684\u6700\u5927 Pod \u6570\u91CF\u3002                                                    | 5         |
| higress-core.autoscaling.targetCPUUtilizationPercentage	 | \u6307\u5B9A\u81EA\u52A8\u7F29\u653E\u8C03\u6574 Pod \u6570\u91CF\u7684\u76EE\u6807 CPU \u5229\u7528\u7387\u767E\u5206\u6BD4\u3002                                       | 80        |

## Pilot\u53C2\u6570
| \u53C2\u6570                                                                | \u53C2\u6570\u8BF4\u660E                                                                                                           | \u9ED8\u8BA4\u503C    |       
|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------|
| higress-core.pilot.autoscaleEnabled	                              | \u662F\u5426\u542F\u7528 Pilot \u7684\u81EA\u52A8\u4F38\u7F29\u3002                                                                                              | false  |
| higress-core.pilot.autoscaleMin	                                  | \u81EA\u52A8\u4F38\u7F29\u65F6\u6700\u5C0F\u7684\u526F\u672C\u6570\u3002                                                                                                   | 1      |
| higress-core.pilot.autoscaleMax	                                  | \u81EA\u52A8\u4F38\u7F29\u65F6\u6700\u5927\u7684\u526F\u672C\u6570\u3002                                                                                                   | 5      |
| higress-core.pilot.replicaCount	                                  | Pilot \u7684 pod \u6570\u91CF\u3002                                                                                                | 1      |
| higress-core.pilot.rollingMaxSurge	                               | \u5728\u8FDB\u884C\u6EDA\u52A8\u66F4\u65B0\u65F6\uFF0C\u5141\u8BB8\u540C\u65F6\u589E\u52A0\u7684 Pod \u6570\u91CF\u7684\u6700\u5927\u6BD4\u4F8B\u3002                                                                                  | 100%   |
| higress-core.pilot.rollingMaxUnavailable	                         | \u5728\u8FDB\u884C\u6EDA\u52A8\u66F4\u65B0\u65F6\uFF0C\u5141\u8BB8\u540C\u65F6\u4E0D\u53EF\u7528\u7684 Pod \u6570\u91CF\u7684\u6700\u5927\u6BD4\u4F8B\u3002                                                                                 | 25%    |
| higress-core.pilot.traceSampling	                                 | \u6307\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u8DDF\u8E2A\u91C7\u6837\u7387\uFF0C\u8FD9\u91CC\u662F1.0\uFF08\u5373100%\uFF09\u3002                                                                                    | 1      |
| higress-core.pilot.resources.requests.cpu	                        | \u5206\u914D\u7ED9 pilot \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002                                                                                          | 500m   |
| higress-core.pilot.resources.requests.memory                      | \u5206\u914D\u7ED9 pilot \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002                                                                                             | 2048Mi |
| higress-core.pilot.env.PILOT_SCOPE_GATEWAY_TO_NAMESPACE	          | \u5982\u679C\u8BBE\u7F6E\u4E3A true \uFF0C\u5219\u4F7F\u7F51\u5173\u53EA\u80FD\u8BBF\u95EE\u5176\u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u7684\u670D\u52A1\u3002                                                                              | true   |
| higress-core.pilot.env.PILOT_ENABLE_METADATA_EXCHANGE	            | \u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u4E0E Envoy \u4E4B\u95F4\u7684\u5143\u6570\u636E\u4EA4\u6362\u3002                                                                              | false  |
| higress-core.pilot.env.PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY	 | \u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u8DE8\u96C6\u7FA4\u5DE5\u4F5C\u8D1F\u8F7D\u5165\u53E3\u3002                                                                                     | false  |
| higress-core.pilot.env.VALIDATION_ENABLED	                        | \u5982\u679C\u8BBE\u7F6E\u4E3A false \uFF0C\u5219\u7981\u7528\u5BF9\u914D\u7F6E\u6587\u4EF6\u7684\u9A8C\u8BC1\u3002                                                                                      | false  |
| higress-core.pilot.cpu.targetAverageUtilization	                  | \u6307\u5B9A Pod \u5E94\u8BE5\u5C1D\u8BD5\u8FBE\u5230\u7684 CPU \u5229\u7528\u7387\u767E\u5206\u6BD4\uFF0C\u4EE5\u4FBF\u89E6\u53D1\u81EA\u52A8\u7F29\u653E\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E3A80\uFF0C\u5219\u5F53 Pod \u7684 CPU \u5229\u7528\u7387\u8FBE\u523080\uFF05\u65F6\uFF0C\u5C06\u542F\u52A8\u66F4\u591A\u7684 Pod \u4EE5\u5904\u7406\u66F4\u591A\u7684\u8D1F\u8F7D\u3002                      | 80     |
| higress-core.pilot.enableProtocolSniffingForOutbound	             | \u662F\u5426\u5728\u51FA\u7AD9\u6D41\u91CF\u4E0A\u542F\u7528\u534F\u8BAE\u55C5\u63A2\uFF0C\u8FD9\u91CC\u662F true \u3002                                                                                      | true   |
| higress-core.pilot.enableProtocolSniffingForInbound	              | \u662F\u5426\u5728\u5165\u7AD9\u6D41\u91CF\u4E0A\u542F\u7528\u534F\u8BAE\u55C5\u63A2\uFF0C\u8FD9\u91CC\u662F true \u3002                                                                                      | true   |
| higress-core.pilot.nodeSelector	                                  | \u6307\u5B9A\u5E94\u8BE5\u90E8\u7F72\u6B64\u5E94\u7528\u7A0B\u5E8F\u7684\u8282\u70B9\u6807\u7B7E\u3002                                                                                              | {}     |
| higress-core.pilot.podAnnotations	                                | \u6307\u5B9A\u8981\u6DFB\u52A0\u5230 Pod \u7684\u6CE8\u91CA\u3002                                                                                                | {}     |
| higress-core.pilot.serviceAnnotations	                            | \u6307\u5B9A\u8981\u6DFB\u52A0\u5230 Service \u7684\u6CE8\u91CA\u3002                                                                                            | {}     |
| higress-core.pilot.jwksResolverExtraRootCA	                       | \u63D0\u4F9B PEM \u683C\u5F0F\u7684\u6839\u8BC1\u4E66\uFF0C\u4EE5\u4FBF\u5728\u89E3\u6790 JWKS URI \u65F6\u7531 pilot \u4FE1\u4EFB\u3002                                                                      | ""    |
| higress-core.pilot.configSource.subscribedResources	              | \u6307\u5B9A\u914D\u7F6E\u6E90\u7684\u6765\u6E90\uFF0C\u5982\u679C\u672A\u6307\u5B9A\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684 MCP \u3002\u6307\u5B9A\u8BA2\u9605\u7684 Kubernetes \u8D44\u6E90\u5217\u8868\u3002                                                              | []     |
| higress-core.pilot.plugins	                                       | \u6307\u5B9A\u8981\u542F\u7528\u7684\u63D2\u4EF6\u5217\u8868\u3002                                                                                                    | []     |
| higress-core.pilot.keepaliveMaxServerConnectionAge	               | \u9650\u5236 gateway \u4E0E controller \u8FDE\u63A5\u7684\u6700\u957F\u65F6\u95F4\u3002                                                                                    | 30m    |
| higress-core.pilot.deploymentLabels	                              | \u4E3A\u90E8\u7F72\u6DFB\u52A0\u989D\u5916\u7684\u6807\u7B7E\u3002                                                                                                    | {}     |
| higress-core.pilot.configMap	                                     | \u5B89\u88C5\u7531values.yaml\u751F\u6210\u7684 mesh config \uFF0C\u5982\u679C\u4E3A false \uFF0C\u5219 Pilot \u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u6216\u7528\u6237\u63D0\u4F9B\u7684\u503C\uFF0C\u5982\u679C\u4E3A false \uFF0C\u5219 Pilot \u5C06\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF08\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF09\u6216\u7528\u6237\u63D0\u4F9B\u7684\u503C | true   |
| higress-core.pilot.podLabels	                                     | \u4E3A Pod \u6DFB\u52A0\u989D\u5916\u7684\u6807\u7B7E\uFF0C\u4EE5\u7528\u4E8E\u76D1\u63A7\u548C\u65E5\u5FD7\u8BB0\u5F55\u914D\u7F6E\u3002                                                                                    | {}     |



## skywalking \u53C2\u6570
| \u53C2\u6570                                      | \u53C2\u6570\u8BF4\u660E                         | \u9ED8\u8BA4\u503C       |   
|-----------------------------------------|------------------------------|-----------|                                       
| higress-core.skywalking.enabled	        | \u662F\u5426\u542F\u7528 SkyWalking              | false     |
| higress-core.skywalking.service.address | 	SkyWalking \u670D\u52A1\u5730\u5740\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C | ~         |
| higress-core.skywalking.service.port	   | SkyWalking \u670D\u52A1\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A 11800    | 11800 |


## \u63A7\u5236\u53F0\u53C2\u6570
| \u53C2\u6570                                       | \u53C2\u6570\u8BF4\u660E                                                                                                                                       | \u9ED8\u8BA4\u503C              |
|------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|------------------|    
| higress-console.replicaCount	                            | Higress Console \u7684 pod \u6570\u91CF                                                                                                                   | 1                |
| higress-console.dnsPolicy	                               | \u6307\u5B9A DNS \u7B56\u7565\uFF0C\u8FD9\u91CC\u4E3A ClusterFirst \u3002                                                                                                               | ClusterFirst     |
| higress-console.restartPolicy                            | \u6307\u5B9A\u91CD\u542F\u7B56\u7565\uFF0C\u8FD9\u91CC\u6307\u5B9A\u4E3A Always \u3002                                                                                                                      | 	Always          |
| higress-console.service.type	                            | \u6307\u5B9A\u63A7\u5236\u53F0 service \u7C7B\u578B\u3002                                                                                                                          | ClusterIP        |
| higress-console.resources.requests.cpu	                  | \u5206\u914D\u7ED9 console \u7684 CPU \u8D44\u6E90\u8BF7\u6C42\u3002                                                                                                                    | 250m             |
| higress-console.resources.requests.memory                | \u5206\u914D\u7ED9 console \u7684\u5185\u5B58\u8D44\u6E90\u8BF7\u6C42\u3002                                                                                                                       | 	512Mi           |
| higress-console.web.login.prompt                         | \u767B\u5F55\u9875\u9762\u4E0A\u663E\u793A\u7684\u63D0\u793A\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u3002                                                                                                                         | ""               |
| higress-console.certmanager.enabled	                     | \u6307\u5B9A\u662F\u5426\u542F\u7528\u8BC1\u4E66\u7BA1\u7406\u5668\u3002                                                                                                                               | false            |
| higress-console.certmanager.replicas	                    | Certmanage pod \u7684\u6570\u91CF\u3002                                                                                                                        | 1                |
| higress-console.o11y.grafana.replicas	                   | Grafana pod \u7684\u6570\u91CF\u3002                                                                                                                           | 1                |
| higress-console.o11y.grafana.storage	                    | \u5206\u914D\u7ED9 Grafana \u7684\u5B58\u50A8\u7C7B\u5927\u5C0F\u3002                                                                                                                        | 1Gi              |
| higress-console.o11y.grafana.pvc.storageClassName        | Grafana \u7684\u5B58\u50A8\u7C7B\u540D\u79F0\u3002                                                                                                                            | ""               |
| higress-console.o11y.prometheus.replicas	                | Prometheus pod \u7684\u6570\u91CF\u3002                                                                                                                        | 1                |
| higress-console.o11y.prometheus.storage	                 | \u5206\u914D\u7ED9 prometheus \u7684\u5B58\u50A8\u7C7B\u5927\u5C0F\u3002                                                                                                                     | 1Gi              |
| higress-console.o11y.prometheus.pvc.storageClassName     | Prometheus \u7684\u5B58\u50A8\u7C7B\u540D\u79F0\u3002                                                                                                                         |  ""                |
| higress-console.o11y.prometheus.resources.limits.cpu	    | \u5206\u914D\u7ED9 prometheus \u7684 CPU \u8D44\u6E90\u9650\u5236\u3002                                                                                                                 | 500m             |
| higress-console.o11y.prometheus.resources.limits.memory	 | \u5206\u914D\u7ED9 prometheus \u7684\u5185\u5B58\u8D44\u6E90\u9650\u5236\u3002                                                                                                                    | 2Gi              |
`},l=function(){return t},a=function(){return[{depth:1,slug:"higress\u53C2\u6570\u914D\u7F6E",text:"Higress\u53C2\u6570\u914D\u7F6E"},{depth:2,slug:"global\u53C2\u6570",text:"Global\u53C2\u6570"},{depth:2,slug:"meshconfig\u53C2\u6570",text:"meshConfig\u53C2\u6570"},{depth:2,slug:"gateway\u53C2\u6570",text:"Gateway\u53C2\u6570"},{depth:2,slug:"controller\u53C2\u6570",text:"Controller\u53C2\u6570"},{depth:2,slug:"pilot\u53C2\u6570",text:"Pilot\u53C2\u6570"},{depth:2,slug:"skywalking-\u53C2\u6570",text:"skywalking \u53C2\u6570"},{depth:2,slug:"\u63A7\u5236\u53F0\u53C2\u6570",text:"\u63A7\u5236\u53F0\u53C2\u6570"}]},e=c((m,f,w)=>{const{layout:b,...d}=s;return d.file=r,d.url=o,n`${h()}${u(t)}`})});export{e as Content,P as __tla,l as compiledContent,e as default,r as file,s as frontmatter,a as getHeadings,i as rawContent,o as url};
