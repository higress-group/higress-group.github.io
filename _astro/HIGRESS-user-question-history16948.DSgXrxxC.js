const e="HIGRESS-user-question-history16948.md",a="faq",s="higress-user-question-history16948",t=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress tcp\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u7684TCP\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4\u53EF\u4EE5\u8BE6\u7EC6\u89E3\u7B54\u5982\u4E0B\uFF1A

### 1. **\u524D\u7F6E\u51C6\u5907**
\u786E\u4FDD\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A
- **Higress\u5B89\u88C5**\uFF1A\u786E\u8BA4Higress\u5DF2\u88AB\u90E8\u7F72\u5728Kubernetes\u96C6\u7FA4\u7684\`higress-system\`\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u4E14\u5176Service\u540D\u79F0\u4E3A\`higress-gateway\`\u3002
- **\u670D\u52A1\u76EE\u6807**\uFF1A\u9700\u8981\u4E3A\`default\`\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\`tcp-echo\`\u670D\u52A1\u914D\u7F6E\u56DB\u5C42\u8DEF\u7531\uFF0C\u8BE5\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\u4E3A9000\uFF0C\u4E0E\u7F51\u5173\u76D1\u542C\u7AEF\u53E3\u4E00\u81F4\u3002
- **Gateway API\u652F\u6301**\uFF1AHigress\u9700\u9884\u5148\u914D\u7F6E\u4EE5\u652F\u6301Gateway API CRD\u3002[\u76F8\u5173\u6587\u6863](https://higress.io/docs/latest/ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-gateway-api-crd%E5%8F%AF%E9%80%89)

### 2. **\u914D\u7F6E\u6B65\u9AA4**

#### **\u521B\u5EFA GatewayClass**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`gatewayclass.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: higress-gateway
spec:
  controllerName: "higress.io/gateway-controller"
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f gatewayclass.yaml
\`\`\`

#### **\u521B\u5EFA Gateway**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`gateway.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: higress-gateway
  namespace: higress-system
spec:
  gatewayClassName: higress-gateway
  listeners:
  - name: default-tcp
    protocol: TCP
    port: 9000
    allowedRoutes:
      namespaces:
        from: All
      kinds:
      - kind: TCPRoute
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f gateway.yaml
\`\`\`

#### **\u4FEE\u6539 higress-gateway Service**
1. **\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F**\uFF1A\u4F7F\u7528\u547D\u4EE4\u8FDB\u5165Service\u7684\u7F16\u8F91\u72B6\u6001\uFF1A

\`\`\`shell
kubectl edit service higress-gateway -n higress-system
\`\`\`
2. **\u6DFB\u52A0\u7AEF\u53E3\u63CF\u8FF0**\uFF1A\u5728\`spec.ports\`\u90E8\u5206\u65B0\u589E9000\u7AEF\u53E3\u7684\u63CF\u8FF0\uFF0C\u4FDD\u5B58\u9000\u51FA\u3002

#### **\u521B\u5EFA TCPRoute**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`tcproute.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1alpha2
kind: TCPRoute
metadata:
  name: tcp-echo
  namespace: default
spec:
  parentRefs:
  - name: higress-gateway
    namespace: higress-system
    port: 9000
  rules:
  - backendRefs:
    - name: tcp-echo
      port: 9000
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f tcproute.yaml
\`\`\`

#### **\u914D\u7F6E\u9A8C\u8BC1**
- \u4F7F\u7528telnet\u6216\u7C7B\u4F3C\u5DE5\u5177\u5C1D\u8BD5\u8FDE\u63A5\`higress-gateway\`\u670D\u52A1\u76849000\u7AEF\u53E3\uFF0C\u4EE5\u9A8C\u8BC1TCP\u8DEF\u7531\u914D\u7F6E\u662F\u5426\u751F\u6548\u3002

### \u89E3\u91CA
\u4EE5\u4E0A\u6B65\u9AA4\u4F9D\u6B21\u5B8C\u6210\u4E86\u4ECE\u5B9A\u4E49\`GatewayClass\`\u4EE5\u6307\u5B9A\u63A7\u5236\u5668\uFF0C\u5230\u521B\u5EFA\`Gateway\`\u4EE5\u914D\u7F6E\u76D1\u542C\u5668\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u518D\u5230\u8C03\u6574\`Service\`\u4EE5\u66B4\u9732\u6240\u9700\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u521B\u5EFA\`TCPRoute\`\u6765\u5B9A\u4E49\u540E\u7AEF\u670D\u52A1\u7684\u6574\u4E2ATCP\u4EE3\u7406\u914D\u7F6E\u6D41\u7A0B\u3002\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8EKubernetes\u7684Gateway API\u8FDB\u884C\uFF0C\u786E\u4FDD\u4E86\u670D\u52A1\u7684\u9AD8\u53EF\u7528\u6027\u548C\u7075\u6D3B\u6027\u3002\u6700\u540E\u7684\u9A8C\u8BC1\u73AF\u8282\u662F\u4E3A\u4E86\u786E\u8BA4\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u670D\u52A1\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16955)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,r={title:"higress tcp\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u7684TCP\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4\u53EF\u4EE5\u8BE6\u7EC6\u89E3\u7B54\u5982\u4E0B\uFF1A### 1. **\u524D\u7F6E\u51C6\u5907**\u786E\u4FDD\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A- **Higress\u5B89\u88C5**\uFF1A\u786E\u8BA4Higress\u5DF2\u88AB\u90E8\u7F72\u5728Kubernetes\u96C6\u7FA4\u7684`higress-system`\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u4E14\u5176Service\u540D\u79F0\u4E3A`higress-gate",date:"2024-09-11",category:"expertConsultation"},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16948.md",rawData:void 0};export{o as _internal,t as body,a as collection,r as data,e as id,s as slug};
