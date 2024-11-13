---
title: 修改 Gateway 监听端口
keywords: [ops,config,route,tcp]
description: 介绍如何让 Gateway 监听非 80、443 端口
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/tcp-route.md
---

# 修改 Gateway 监听端口

让 Gateway 监听非 80、443 端口，需要在安装或者升级时候指定监听非 80、443 端口。比如调整 80 端口到 8080，443 端口到 8443。

## Kubernetes 安装

helm 参数 values.yaml 配置调整如下:

```yaml
higress-core:
  # Gateway 设置
  gateway:
    httpPort: 8080
    httpsPort: 8443
  service:
    ports:
    - name: http2
      port: 80
      protocol: TCP
      targetPort: 8080
    - name: https
      port: 443
      protocol: TCP
      targetPort: 8443
```

可以通过以下命令快速安装 Higress 修改监听端口：

```shell
  # 使用 Helm 在 Kubernetes 集群安装 Higress
  helm install higress higress.io/higress  -n higress-system  -f ./values.yaml --create-namespace
  # 使用 hgctl 在 Kubernetes 集群安装 Higress
  hgctl install --set profile=k8s -f ./values.yaml
```

## Docker 环境安装

可以通过以下命令快速安装 Higress 修改监听端口：

```shell
  # 使用 get-higress.sh 在 Docker 环境安装 Higress
  curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress --gateway-http-port=8080  --gateway-https-port=8443
  # 使用 hgctl 在 Docker 环境安装 Higress
  hgctl install --set profile=local-docker --set gateway.httpPort=8080 --set gateway.httpsPort=8443
```




