---
title: Higress Terminology
keywords: [Higress]
description: Higress Terminology.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/overview/terminology.md
---

#Higress Terminology

## Ingress Annotation (Annotation)

The annotation (Annotation) field in the Ingress resource is a kv dictionary structure, which can implement various routing strategies in a declarative manner. As shown below, annotations are used to enable cross-domain access permission for the Ingress route:

```yaml
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
```

For other annotation configuration methods supported by Higress, please refer to [Ingress Annotation Configuration Instructions](../user/annotation.md)


## Downstream

Downstream refers to the source where Higress receives the request, usually a client such as a browser

## Upstream

Upstream refers to the target backend service that Higress forwards the request to
