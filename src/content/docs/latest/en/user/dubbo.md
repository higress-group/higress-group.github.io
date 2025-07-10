---
title: Higress Dubbo Integration
keywords: [Dubbo, discovery]
description: Integrating Dubbo Services with Higress
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/dubbo.md
---

# Integrating Dubbo Services with Higress

Higress provides protocol transformation capabilities from HTTP to Dubbo, allowing users to expose Dubbo services as HTTP interfaces. This document demonstrates how to configure HTTP to Dubbo protocol conversion in Higress through an example.

## Prerequisites
1. Higress currently supports Dubbo framework version 2.x. For Dubbo 3.0, only the Dubbo protocol is supported (Triple protocol is not currently supported as it's based on gRPC and can be directly proxied without protocol conversion).

## Deploying Dubbo Services

You can use either Nacos or Zookeeper as the registry to deploy a Dubbo service. For more details, refer to:

https://dubbo.apache.org/en/overview/what/ecosystem/registry/nacos/

https://dubbo.apache.org/en/overview/what/ecosystem/registry/zookeeper/

Assuming we have deployed a Dubbo service with the following interface `com.alibaba.nacos.example.dubbo.service.DemoService`, with version `1.0.0` and group `dev`, we'll demonstrate how to configure protocol transformation for this service.

```java
package com.alibaba.nacos.example.dubbo.service;

public interface DemoService {
    String sayName(String name);
}
```

## Forwarding Requests to Dubbo Service via Ingress

Higress can integrate with Nacos or Zookeeper as service sources through [McpBridge](./mcp-bridge.md). Using Nacos as an example (assuming Nacos IP is 192.xxx.xx.32), apply the following resource to configure McpBridge:

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: 192.xxx.xx.32
    nacosGroups:
    - DEFAULT_GROUP
    name: nacos-service-resource
    port: 8848
    type: nacos2
```

With McpBridge, we can discover Dubbo services from Nacos and create routes for them.

Next, create the following Ingress to set up an HTTP route to the Dubbo service:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos
    higress.io/rpc-destination-name: httproute-http2rpc-demo
  name: httproute-http2rpc-demo-ingress
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /dubbo
        pathType: Prefix
```

This configuration routes requests with the `/dubbo` prefix to our Dubbo service.

## Configuring HTTP to Dubbo Protocol Conversion with Http2Rpc CRD

To enable communication between HTTP and Dubbo protocols, we need to configure the protocol conversion rules using Higress's custom Http2Rpc CRD:

```yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "GET"
      httpPath: "/dubbo/hello"
      params:
      - paramKey: p
        paramSource: QUERY
        paramType: "java.lang.String"
```

This configuration maps HTTP requests to `/dubbo/hello` to the `sayName` method of the Dubbo service `com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev`, with the method parameter taken from the `p` query parameter.

## Verifying the Request

After applying the configurations, you can call the Dubbo service using curl:

```bash
$ curl "localhost/dubbo/hello?p=abc" 
{"result":"Service [name :demoService , port : 20880] sayName(\"abc\") : Hello,abc"}
```

## Using the Entire Request Body as Method Parameter

Http2Rpc supports serializing the entire request body as a Dubbo method parameter:

```yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "POST"
      httpPath: "/dubbo/hello"
      paramFromEntireBody:
        paramType: "java.lang.String"
```

The `paramFromEntireBody` field serializes the entire request body as the Dubbo method parameter. The parameter type is specified by `paramFromEntireBody.paramType`. This is useful when the Dubbo method has a single parameter. If both `paramFromEntireBody` and `params` are specified, the `params` field is ignored.

Test the configuration with:

```bash
$ curl "localhost/dubbo/hello" -X POST -d '"abc"' 
{"result":"Service [name :demoService , port : 20880] sayName(\"abc\") : Hello,abc"}
```

## Configuration Reference

For detailed Http2Rpc configuration options, refer to [HTTP to Dubbo Configuration](./dubbo-http2rpc.md).