---
title: Configure a TCP Layer-4 Route
keywords: [ops,config,route,tcp]
description: Introduce how to configure a TCP layer-4 route
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/tcp-route.md
---

# Configure a TCP Layer-4 Route

## Prerequisites

1. Higress is installed in the higress-system namespace in K8s, with the gateway's Service name being higress-gateway;
2. The goal is to configure a layer-4 route for the tcp-echo service in the default namespace, with the service listening on port 9000 and the gateway also listening on port 9000;
3. The route is configured using Gateway API CRD, which requires Higress to be configured to support Gateway API in advance. Reference documentation: [Document](../../ops/deploy-by-helm.md#supporting-gateway-api-crdoptional)

## Configuration Steps

### 1. Create GatewayClass

1. Create a `gatewayclass.yaml` file with the following content:
    ```yaml
    apiVersion: gateway.networking.k8s.io/v1
    kind: GatewayClass
    metadata:
      name: higress-gateway
    spec:
      controllerName: "higress.io/gateway-controller"
    ```
2. Execute the command to apply the configuration to the K8s cluster:
    ```bash
    kubectl apply -f gatewayclass.yaml
    ```

### 2. Create Gateway

1. Create a `gateway.yaml` file with the following content:
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
2. Execute the command to apply the configuration to the K8s cluster:
    ```bash
    kubectl apply -f gateway.yaml
    ```

### 3. Modify the `higress-gateway` Service

1. Execute the command to enter the edit state of the `higress-gateway` Service:
    ```bash
    kubectl edit service higress-gateway -n higress-system
    ```
2. Add a description for port `9000` to the `spec.ports` list. The configuration after the addition should look like this:
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
      # --- Configuration added here ---
      - name: tcp
        port: 9000
        protocol: TCP
        targetPort: 9000
      # -----------------------------
    ...
    ```
3. Save the edits and exit the editor.

### 4. Create TCPRoute

1. Create a `tcproute.yaml` file with the following content:
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
2. Execute the command to apply the configuration to the K8s cluster:
    ```bash
    kubectl apply -f tcproute.yaml
    ```

### 5. Configuration Verification

Configuration complete. We can verify whether the route is working properly by using telnet to connect to port 9000 of the higress-gateway service or by other means.