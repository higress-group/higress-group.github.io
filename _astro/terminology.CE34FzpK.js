const e="latest/zh-cn/overview/terminology.md",s="docs",t="latest/zh-cn/overview/terminology",n=`
# Higress Terminology

## Ingress \u6CE8\u89E3(Annotation)

Ingress \u8D44\u6E90\u4E2D\u7684\u6CE8\u89E3(Annotation)\u5B57\u6BB5\uFF0C\u662F\u4E00\u4E2A kv \u5B57\u5178\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7533\u660E\u5F0F\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5404\u79CD\u8DEF\u7531\u7B56\u7565\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u662F\u4F7F\u7528\u6CE8\u89E3\u5B9E\u73B0\u5BF9\u8BE5 Ingress \u8DEF\u7531\u5F00\u542F\u8DE8\u57DF\u8BBF\u95EE\u8BB8\u53EF\uFF1A

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-example
  annotations:
    higress.io/enable-cors: "true"
spec:
  ingressClassName: nginx-example
  rules:
  - http:
      paths:
      - path: /test
        pathType: Prefix
        backend:
          service:
            name: test
            port:
              number: 80
\`\`\`

Higress \u652F\u6301\u7684\u5176\u4ED6\u6CE8\u89E3\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8BF7\u53C2\u8003[Ingress Annotation \u914D\u7F6E\u8BF4\u660E](../user/annotation.md)


## \u4E0B\u6E38(Downstream)

\u4E0B\u6E38\u6307 Higress \u63A5\u6536\u5230\u8BF7\u6C42\u7684\u6765\u6E90\uFF0C\u4E00\u822C\u662F\u5982\u6D4F\u89C8\u5668\u7B49\u5BA2\u6237\u7AEF

## \u4E0A\u6E38(Upstream)

\u4E0A\u6E38\u6307 Higress \u8F6C\u53D1\u8BF7\u6C42\u7684\u76EE\u6807\u540E\u7AEF\u670D\u52A1



`,r={title:"\u672F\u8BED\u8868",description:"Higress Terminology.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/terminology.md",rawData:void 0};export{o as _internal,n as body,s as collection,r as data,e as id,t as slug};
