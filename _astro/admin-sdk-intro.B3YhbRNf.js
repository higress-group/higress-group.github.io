const r="admin-sdk-intro.md",e="blog",s="admin-sdk-intro",i=`\r
# 1. \u80CC\u666F\r
\r
Higress \u4E00\u4E2A\u9075\u5FAA\u5F00\u6E90 Ingress/Gateway API \u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\u3002\u800C\u914D\u7F6E\u7BA1\u7406\u7F51\u5173\u7684\u8FD0\u7EF4\u5DE5\u4F5C\u4E2D\u626E\u6F14\u8005\u91CD\u8981\u7684\u89D2\u8272\u3002\u5982\u4F55\u8BA9\u914D\u7F6E\u7BA1\u7406\u81EA\u52A8\u5316\uFF0C\u5C24\u5176\u662F\u4E0E\u5176\u4ED6\u7684\u8FD0\u7EF4\u7CFB\u7EDF\u8FDB\u884C\u5BF9\u63A5\uFF0C\u5C31\u6210\u4E3A\u4E86\u4E00\u4E2A\u975E\u5E38\u8FEB\u5207\u7684\u9700\u6C42\u3002\u672C\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Higress Admin SDK \u6765\u7BA1\u7406 Higress \u7CFB\u7EDF\u5185\u7684\u5404\u7C7B\u914D\u7F6E\u3002\u5E0C\u671B\u80FD\u591F\u5BF9\u5B58\u5728\u6B64\u7C7B\u9700\u6C42\u7684\u670B\u53CB\u6709\u6240\u5E2E\u52A9\u3002\r
\r
# 2. Higress Admin SDK\r
\r
Higress Admin SDK \u8131\u80CE\u4E8E Higress Console\u3002\u8D77\u521D\uFF0C\u5B83\u662F\u4F5C\u4E3A Higress Console \u7684\u4E00\u90E8\u5206\uFF0C\u4E3A\u524D\u7AEF\u754C\u9762\u63D0\u4F9B\u5B9E\u9645\u7684\u529F\u80FD\u652F\u6301\u3002\u540E\u6765\u8003\u8651\u5230\u5BF9\u63A5\u5916\u90E8\u7CFB\u7EDF\u7B49\u9700\u6C42\uFF0C\u6211\u4EEC\u5C06\u914D\u7F6E\u7BA1\u7406\u7684\u90E8\u5206\u5265\u79BB\u51FA\u6765\uFF0C\u5F62\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684\u903B\u8F91\u7EC4\u4EF6\uFF0C\u4FBF\u4E8E\u5404\u4E2A\u7CFB\u7EDF\u8FDB\u884C\u5BF9\u63A5\u3002\u76EE\u524D\u652F\u6301\u670D\u52A1\u6765\u6E90\u7BA1\u7406\u3001\u670D\u52A1\u7BA1\u7406\u3001\u8DEF\u7531\u7BA1\u7406\u3001\u57DF\u540D\u7BA1\u7406\u3001\u8BC1\u4E66\u7BA1\u7406\u3001\u63D2\u4EF6\u7BA1\u7406\u7B49\u529F\u80FD\u3002\r
\r
Higress Admin SDK \u73B0\u5728\u53EA\u63D0\u4F9B Java \u7248\u672C\uFF0C\u4E14\u8981\u6C42 JDK \u7248\u672C\u4E0D\u4F4E\u4E8E 17\u3002\r
\r
# 3. \u5F00\u53D1\u5B9E\u64CD\r
\r
## 3.1 \u73AF\u5883\u51C6\u5907\r
\r
\u8FD9\u91CC\u6211\u4EEC\u4EE5\u672C\u5730\u57FA\u4E8E Kind \u642D\u5EFA\u7684 K8s \u96C6\u7FA4\u4F5C\u4E3A\u5B9E\u9A8C\u73AF\u5883\u3002\u6240\u4EE5\u9996\u5148\uFF0C\u8BF7\u5927\u5BB6\u53C2\u8003\u8FD9\u7BC7[\u6587\u6863](https://higress.io/zh-cn/docs/user/quickstart#%E5%9C%BA%E6%99%AF%E4%BA%8C%E5%9C%A8%E6%9C%AC%E5%9C%B0-k8s%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8)\u5728\u672C\u5730\u5B8C\u6210 K8s \u96C6\u7FA4\u7684\u642D\u5EFA\u548C Higress \u7684\u5B89\u88C5\u3002\r
\r
\u7136\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u7528\u7684 K8s \u670D\u52A1\u3002\u5927\u5BB6\u53EF\u4EE5\u5C06\u4E0B\u65B9\u7684 YAML \u4FDD\u5B58\u4E3A \`test.yaml\`\uFF0C\u7136\u540E\u6267\u884C \`kubectl apply -f test.yaml\` \u547D\u4EE4\u5728 K8s \u4E2D\u521B\u5EFA\u5BF9\u5E94\u7684\u8D44\u6E90\u3002\r
\r
\`\`\`yaml\r
kind: Pod\r
apiVersion: v1\r
metadata:\r
  name: higress-demo-app\r
  namespace: default\r
  labels:\r
    app: higress-demo\r
spec:\r
  containers:\r
  - name: higress-demo-app\r
    image: mendhak/http-https-echo:29\r
---\r
kind: Service\r
apiVersion: v1\r
metadata:\r
  name: higress-demo-service\r
  namespace: default\r
spec:\r
  selector:\r
    app: higress-demo\r
  ports:\r
  - port: 8080\r
\`\`\`\r
\r
## 3.2 \u4EE3\u7801\u7F16\u5199\r
\r
\u8FD9\u91CC\u7684\u76EE\u6807\u662F\u521B\u5EFA\u4E00\u4E2A\u8DEF\u7531\uFF0C\u4F7F \`http://www.test.com/\` \u8FD9\u4E2A URL \u6307\u5411\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684 \`higress-demo-service\`\u3002\r
\r
### \u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6E\u4F9D\u8D56\r
\r
\u6839\u636E\u9879\u76EE\u6240\u4F7F\u7528\u7684\u6784\u5EFA\u5DE5\u5177\u6765\u6DFB\u52A0 Higress Admin SDK \u4F9D\u8D56\uFF1A\r
\r
\`\`\`xml\r
<dependency>\r
    <groupId>io.higress.api</groupId>\r
    <artifactId>higress-admin-sdk</artifactId>\r
    <version>0.0.2</version>\r
</dependency>\r
\`\`\`\r
\r
\`\`\`gradle\r
implementation 'io.higress.api:higress-admin-sdk:0.0.2'\r
\`\`\`\r
\r
### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA Higress SDK \u5B9E\u4F8B\r
\r
\`\`\`java\r
String kubeConfigFile = Paths.get(System.getProperty("user.home"), "/.kube/config").toString();\r
HigressServiceConfig config = HigressServiceConfig.builder().withKubeConfigPath(kubeConfigFile).build();\r
HigressServiceProvider provider = HigressServiceProvider.create(config);\r
\`\`\`\r
\r
\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u7684\u662F K8s \u96C6\u7FA4\u5916\u7684\u914D\u7F6E\u65B9\u5F0F\uFF0C\u6240\u4EE5\u9700\u8981\u8BBE\u7F6E kubeConfig \u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u4EE5\u4FBF SDK \u64CD\u4F5C K8s \u5185\u7684\u5404\u7C7B\u8D44\u6E90\u3002\r
\r
### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u57DF\u540D\r
\r
\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 SDK \u4E2D\u7684 \`DomainService\` \u6765\u521B\u5EFA\u4E00\u4E2A \`www.test.com\` \u57DF\u540D\uFF0C\u5E76\u5C06\u8BE5\u57DF\u540D\u8BBE\u7F6E\u4E3A\u53EA\u5F00\u653E HTTP \u8BBF\u95EE\u3002\r
\r
\`\`\`java\r
Domain domain = Domain.builder().name("www.test.com").enableHttps(Domain.EnableHttps.OFF).build();\r
provider.domainService().add(domain);\r
\`\`\`\r
\r
### \u7B2C\u4E09\u6B65\uFF1A\u521B\u5EFA\u8DEF\u7531\r
\r
\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 SDK \u4E2D\u7684 \`DomainService\` \u6765\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A \`higress-demo\` \u7684\u8DEF\u7531\u3002\u8DEF\u7531\u7ED1\u5B9A \`www.test.com\` \u57DF\u540D\uFF0C\u5339\u914D\u6240\u6709\u4EE5 \`/\` \u5F00\u5934\u7684\u8BF7\u6C42\uFF0C\u5E76\u5C06\u8BF7\u6C42\u8F6C\u53D1\u81F3 \`higress-demo-service.default.svc.cluster.local\` \u670D\u52A1\u7684 8080 \u7AEF\u53E3\u3002\r
\r
\`\`\`java\r
Route route = Route.builder()\r
        .name("higress-demo")\r
        .domains(Collections.singletonList("www.test.com"))\r
        .path(RoutePredicate.builder()\r
                .matchType(RoutePredicateTypeEnum.PRE.name())\r
                .matchValue("/")\r
                .build())\r
        .services(Collections.singletonList(\r
                UpstreamService.builder()\r
                        .name("higress-demo-service.default.svc.cluster.local:8080")\r
                        .build()\r
        )).build();\r
provider.routeService().add(route);\r
\`\`\`\r
\r
## 3.3 \u6D4B\u8BD5\u9A8C\u8BC1\r
\r
\u6267\u884C\u7F16\u5199\u597D\u7684\u4EE3\u7801\uFF1A\u786E\u8BA4\u4E00\u5207\u6B63\u5E38\u3002\u7136\u540E\u5728 Shell \u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u68C0\u67E5\u8BF7\u6C42\u8DEF\u7531\u60C5\u51B5\u3002\r
\r
\`\`\`bash\r
curl -svk http://localhost/ -H "Host: www.test.com"\r
\`\`\`\r
\r
\u80FD\u591F\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u8BF7\u6C42\u7684\u8BE6\u7EC6\u4FE1\u606F\u5C31\u8BF4\u660E\u8DEF\u7531\u914D\u7F6E\u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\u3002\r
\r
\`\`\`json\r
{\r
  "path": "/",\r
  "headers": {\r
    "host": "www.test.com",\r
    "user-agent": "curl/8.4.0",\r
    "accept": "*/*",\r
    "x-forwarded-for": "10.42.0.230",\r
    "x-forwarded-proto": "http",\r
    "x-envoy-internal": "true",\r
    "x-request-id": "4a3db96b-c46c-4c8a-a60f-a513f258736d",\r
    "x-envoy-decorator-operation": "higress-demo-service.default.svc.cluster.local:8080/*",\r
    "x-envoy-attempt-count": "1",\r
    "x-b3-traceid": "a426d189c027371957f008c2cb2e9e8f",\r
    "x-b3-spanid": "57f008c2cb2e9e8f",\r
    "x-b3-sampled": "0",\r
    "req-start-time": "1707363093608",\r
    "original-host": "www.test.com"\r
  },\r
  "method": "GET",\r
  "body": "",\r
  "fresh": false,\r
  "hostname": "www.test.com",\r
  "ip": "10.42.0.230",\r
  "ips": [\r
    "10.42.0.230"\r
  ],\r
  "protocol": "http",\r
  "query": {},\r
  "subdomains": [\r
    "www"\r
  ],\r
  "xhr": false,\r
  "os": {\r
    "hostname": "higress-demo-app"\r
  },\r
  "connection": {}\r
}\r
\`\`\`\r
\r
## 4. \u603B\u7ED3\r
\r
\u76EE\u524D Higress Admin SDK \u652F\u6301\u7684\u529F\u80FD\u8FD8\u6BD4\u8F83\u7B80\u5355\u3002\u672A\u6765\u793E\u533A\u4E5F\u4F1A\u5728\u8FDB\u4E00\u6B65\u7740\u529B\u589E\u5F3A Higress \u7684\u6CBB\u7406\u4FA7\u529F\u80FD\uFF0CSDK \u7684\u80FD\u529B\u4E5F\u4F1A\u4E0D\u65AD\u5B8C\u5584\u3002\u5927\u5BB6\u5BF9 SDK \u548C Console \u6709\u4EFB\u4F55\u7591\u95EE\u548C\u5EFA\u8BAE\uFF0C\u90FD\u6B22\u8FCE\u5728 [GitHub](https://github.com/higress-group/higress-console) \u4E0A\u63D0\u51FA\u3002\u611F\u8C22\u5927\u5BB6\u7684\u652F\u6301\uFF01\r
\r
\u4EE5\u4E0A\u5B9E\u64CD\u8FC7\u7A0B\u7684\u9879\u76EE\u4EE3\u7801\u53EF\u4EE5\u5728\u8FD9\u91CC\u4E0B\u8F7D\uFF1A[\u4E0B\u8F7D\u94FE\u63A5](/file/20240208_higress-admin-sdk-demo.zip)`,t={title:"\u5982\u4F55\u4F7F\u7528 Higress Admin SDK \u8FDB\u884C\u914D\u7F6E\u7BA1\u7406",description:"\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Higress Admin SDK \u6765\u7BA1\u7406 Higress \u7684\u670D\u52A1\u6765\u6E90\u3001\u670D\u52A1\u8DEF\u7531\u7B49\u5404\u9879\u914D\u7F6E\u3002",keywords:["Higress","SDK","Config"],date:"2024-02-08",author:"CH3CHO",category:"article"},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/admin-sdk-intro.md",rawData:void 0};export{o as _internal,i as body,e as collection,t as data,r as id,s as slug};
