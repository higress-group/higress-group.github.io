---
title: 配置 TCP 四层路由
keywords: [ops,config,route,tcp]
description: 介绍如何配置 TCP 四层路由
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/tcp-route.md
---

# 配置 TCP 四层路由

## 前置准备

1. Higress 安装在 K8s 内的 higress-system 命名空间下，网关的 Service 名称为 higress-gateway；
2. 目标是为 default 命名空间下的 tcp-echo 服务配置一个四层路由，服务监听的端口为 9000，网关监听的端口也为 9000；
3. 路由使用 Gateway API CRD 进行配置，需要提前配置 Higress 使其支持监听 Gateway API。参考文档：[文档](../../ops/deploy-by-helm.md#支持-gateway-api-crd可选)

## 配置步骤

### 1. 创建 GatewayClass

1. 创建 `gatewayclass.yaml` 文件，并写入以下内容：
    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: GatewayClass
    metadata:
      name: higress-gateway
    spec:
      controllerName: "higress.io/gateway-controller"
    ```
2. 执行命令，将以上配置写入 K8s 集群：
    ```bash
    kubectl apply -f gatewayclass.yaml
    ```

### 2. 创建 Gateway

1. 创建 `gateway.yaml` 文件，并写入以下内容：
    ```yaml
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
    ```
2. 执行命令，将以上配置写入 K8s 集群：
    ```bash
    kubectl apply -f gateway.yaml
    ```

### 3. 修改 `higress-gateway` Service

1. 执行命令，进度 `higress-gateway` Service 的编辑状态：
    ```bash
    kubectl edit service higress-gateway -n higress-system
    ```
2. 在 `spec.ports` 列表中增加对 `9000` 的端口的描述信息。增加后的配置如下所示：
    ```yaml
    ...
      ports:
      - name: http2
        port: 80
        protocol: TCP
        targetPort: 80
      - name: https
        port: 443
        protocol: TCP
        targetPort: 443
      # --- 此处为增加的配置 ---
      - name: tcp
        port: 9000
        protocol: TCP
        targetPort: 9000
      # ----------------------
    ...
    ```
3. 保存编辑内容并退出编辑器。

### 4. 创建 TCPRoute

1. 创建 `tcproute.yaml` 文件，并写入以下内容：
    ```yaml
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
    ```
2. 执行命令，将以上配置写入 K8s 集群：
    ```bash
    kubectl apply -f tcproute.yaml
    ```

### 5. 配置验证

配置完成。我们可以通过 telnet higress-gateway service 的 9000 端口等方式验证路由是否能够正常工作。