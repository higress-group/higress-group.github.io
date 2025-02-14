---
title: 配置路由指向 gRPC 服务
keywords: [ops,config,route,upstream,grpc]
description: 介绍如何为使用 gRPC 协议的后端服务配置路由
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md
---

# 路由指向 gRPC 服务

## 前置准备

1. Higress 安装在 K8s 内的 higress-system 命名空间下，监听的 HTTP 端口为 80。 为了测试方便，gateway 端口映射都本地 127.0.0.1:80;
2. 目标是为 default 命名空间下的 部署 grpc-httpbin 服务，服务监听的端口为 9091；
3. grpc-httpbin 服务具体内容请参考 [github httpbin](https://github.com/2456868764/httpbin);
4. grpcurl 工具请参考 [github grpcurl](https://github.com/fullstorydev/grpcurl);

## 准备后端 grpc-httpbin 服务

```yaml
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
```

## 配置路由

```yaml
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
```

`nginx.ingress.kubernetes.io/backend-protocol` Ingress Annotaion 配置指定后端服务使用的协议，默认为HTTP，支持HTTP、HTTP2、HTTPS、GRPC和GRPCS。

## grpcurl 调用测试

1. 列出后端服务列表

```shell
grpcurl -plaintext -authority foo.com  127.0.0.1:80  list

grpc.reflection.v1.ServerReflection
grpc.reflection.v1alpha.ServerReflection
order.OrderManagement
```
2. 调用 sayHello 方法

```shell
grpcurl -plaintext -authority foo.com -d '{"name": "jun"}' 127.0.0.1:80  order.OrderManagement/sayHello

"Hello jun"
```





