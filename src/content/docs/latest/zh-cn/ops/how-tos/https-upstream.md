---
title: 配置路由指向 HTTPS 服务
keywords: [ops,config,route,upstream,https]
description: 介绍如何为使用 HTTPS 协议的后端服务配置路由
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/https-upstream.md
---

# 配置路由指向 HTTPS 服务


## 前置准备

1. Higress 安装在 K8s 内的 higress-system 命名空间下，监听的 HTTP 端口为 80。 为了测试方便，gateway 端口映射都本地 127.0.0.1:80;
2. 目标是为 default 命名空间下的 部署 https-httpbin 服务，服务监听的端口为 443；
3. https-httpbin 服务具体内容请参考 [github httpbin](https://github.com/2456868764/httpbin);

## 准备证书

1. 生成 CA（根证书）：
```shell
# 生成 CA 私钥
openssl genrsa -out ca.key 2048
# 生成 CA 根证书
openssl req -x509 -new -nodes -key ca.key -subj "/CN=MyCA" -days 3650 -out ca.crt
```

2. 生成服务端证书

```shell
# 生成服务端私钥
openssl genrsa -out server.key 2048

# 生成服务端证书签名请求（CSR）
openssl req -new -key server.key -subj "/CN=https-httpbin-v1.default.svc.cluster.local" -out server.csr

# 使用 CA 签署服务端证书
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 3650 -sha256
```

3. 生成 Gateway 证书

```shell
# 生成 Gateway 私钥
openssl genrsa -out gateway.key 2048

# 生成 Gateway 证书签名请求（CSR）
openssl req -new -key gateway.key -subj "/CN=gateway.higress-system.svc.cluster.local" -out gateway.csr

# 使用 CA 签署 Gateway 证书
openssl x509 -req -in gateway.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out gateway.crt -days 3650 -sha256
```

4. 导入 CA 证书、Gateway、服务端证书到 secret 中

```shell
kubectl create secret generic gateway-cert-cacert --from-file=cacert=ca.crt --namespace=default
kubectl create secret tls gateway-cert --key gateway.key --cert gateway.crt --namespace=default
kubectl create secret tls server-cert --key server.key --cert server.crt --namespace=default
```

## 准备后端 https-httpbin 服务

```yaml
apiVersion: v1
kind: Service
metadata:
  name: https-httpbin-v1
  namespace: default
spec:
  selector:
    app: https-httpbin-v1
  ports:
    - protocol: TCP
      port: 443
      targetPort: 443
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: https-httpbin-v1
  namespace: default
  labels:
    app: https-httpbin-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: https-httpbin-v1
  template:
    metadata:
      labels:
        app: https-httpbin-v1
    spec:
      containers:
        - name: https-httpbin-v1
          image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.2
          imagePullPolicy: Always
          ports:
            - containerPort: 443
          command:
            - /app/httpbin
            - --https-enable=true
            - --https-port=443
            - --mtls=true
            - --cert=/etc/cert/tls.crt
            - --key=/etc/cert/tls.key
            - --cacert=/etc/cacert/cacert
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          volumeMounts:
            - mountPath: "/etc/cert"
              name: server-cert
              readOnly: true
            - mountPath: "/etc/cacert"
              name: ca-cert
              readOnly: true
          resources:
            requests:
              cpu: 10m
      volumes:
        - name: server-cert
          secret:
            secretName: server-cert
        - name: ca-cert
          secret:
            secretName: gateway-cert-cacert
```

## 配置路由

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # backend protocol
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
    # gateway to backend mtls
    nginx.ingress.kubernetes.io/proxy-ssl-secret: "default/gateway-cert"
    # SNI for backend check
    nginx.ingress.kubernetes.io/proxy-ssl-name: "https-httpbin-v1.default.svc.cluster.local"
    nginx.ingress.kubernetes.io/proxy-ssl-server-name: "on"
  name: ingress-https-httpbin
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
                name: https-httpbin-v1
                port:
                  number: 443
```

Ingress Annotaion 配置:
- `nginx.ingress.kubernetes.io/backend-protocol` 指定后端服务使用的协议，默认为HTTP，支持HTTP、HTTP2、HTTPS、GRPC和GRPCS。
- `nginx.ingress.kubernetes.io/proxy-ssl-secret` 启用 mtls 需要指定 gateway 证书，格式为 `namespace/secret-name`。 这里需要注意的是需要同时创建一个 CA 证书的 secret, 名称为 proxy-ssl-secret 的名称加 `-cacert` 后缀，比如是 `gateway-cert-cacert`，否则会报错。
- `nginx.ingress.kubernetes.io/proxy-ssl-name` 后端校验 SNI 需要指定后端服务使用的域名。
- `nginx.ingress.kubernetes.io/proxy-ssl-server-name` 启用 SNI。


# 测试

```shell
curl -H "host: foo.com" http://127.0.0.1/ping

"pong"
```

