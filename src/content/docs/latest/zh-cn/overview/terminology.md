---
title: 术语表
keywords: [Higress]
description: Higress Terminology.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/terminology.md
---

# Higress Terminology

## Ingress 注解(Annotation)

Ingress 资源中的注解(Annotation)字段，是一个 kv 字典结构，可以通过申明式的方式来实现各种路由策略，如下所示，是使用注解实现对该 Ingress 路由开启跨域访问许可：

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

Higress 支持的其他注解配置方式，请参考[Ingress Annotation 配置说明](../user/annotation.md)


## 下游(Downstream)

下游指 Higress 接收到请求的来源，一般是如浏览器等客户端

## 上游(Upstream)

上游指 Higress 转发请求的目标后端服务



