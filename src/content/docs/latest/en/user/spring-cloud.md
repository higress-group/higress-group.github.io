---
title: Implementing SpringCloud Service Discovery and Routing
keywords: [SpringCloud,discovery]
description: Implementing SpringCloud Service Discovery and Routing.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/spring-cloud.md
---

# Implementing SpringCloud Service Discovery and Routing

## Using Nacos as Registry Center

For application configuration, please refer to [Nacos Spring Cloud Quick Start](https://nacos.io/en/docs/quick-start-spring-cloud/) for detailed instructions

### Without Specifying Namespace

If no Nacos namespace is specified in `application.properties`, for example:

```text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
```

Then there's no need to specify a namespace in Higress's [McpBridge](./mcp-bridge.md):

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-nacos
  - name: my-nacos
    # Registry type is Nacos 2.x, supporting gRPC protocol
    type: nacos2
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos service group
    nacosGroups:
    - DEFAULT_GROUP
```

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
```

Note that the annotation `higress.io/destination` specifies the target service for the route.

For services from Nacos, the target service format is: "service-name.service-group.namespace-id.nacos". Note that this needs to follow DNS domain format, so underscores '_' in service groups are converted to hyphens '-'. When namespace is not specified, the default value here is "public".

### Specifying Namespace, Service Group, etc.

If Nacos namespace, service group, and other information are specified in `application.properties`, for example:

```text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
spring.cloud.nacos.discovery.group=custom-group
```

Then Higress's McpBridge should be configured accordingly:

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-nacos
  - name: my-nacos
    # Registry type is Nacos 2.x, supporting gRPC protocol
    type: nacos2
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos namespace ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos service group
    nacosGroups:
    - custom-group
```

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
```


## Using ZooKeeper as Registry Center

When using ZooKeeper as the registry center, note that you must configure `spring.cloud.zookeeper.discovery.preferIpAddress=true`, otherwise the address registered in the registry center will be the hostname, not the IP.

### Without Specifying Registration Root Path

If the registration root path is not specified in `application.properties`, for example:

```text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
```

Then there's no need to specify zkServicePath in Higress's [McpBridge](./mcp-bridge.md):

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-zk
  - name: my-zk
    # Registry type is ZooKeeper
    type: zookeeper
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port
    port: 2181
```

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.services.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
```
Note that for services from ZooKeeper, the target service format is: "service-name.service-registration-root-path.zookeeper". In SpringCloud, when the service registration root path is not specified, the default root path is "services".

### Specifying Registration Root Path

If the registration root path is specified in `application.properties`, for example:

```text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
spring.cloud.zookeeper.discovery.root=my-services-root
```

Then zkServicePath needs to be specified in Higress's [McpBridge](./mcp-bridge.md):

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named my-zk
  - name: my-zk
    # Registry type is ZooKeeper
    type: zookeeper
    # Registry access address, can be domain name or IP
    domain: 127.0.0.1
    # Registry access port
    port: 2181
    # Corresponds to spring.cloud.zookeeper.discovery.root configuration field
    zkServicePath:
    - my-services-root
```

To configure Ingress to forward to this service (assuming all routes with /api prefix are forwarded to this service), you need the following configuration:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.my-services-root.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
```

Note that if spring.cloud.zookeeper.discovery.root contains underscores, they need to be replaced with hyphens, because the overall target service format must comply with DNS domain name standards.