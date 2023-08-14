---
title: 运维参数配置说明
keywords: [Higress]
description: Higress 参数配置。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configurations.md
---

# Higress参数配置


## Global参数
| 参数                                     | 参数说明                                                                                                                                                                                                                                                                                                                                        | 默认值             |
|----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| global.ingressClass	                   | IngressClass 参数用于筛选 Higress 控制器要监听的 Ingress 资源。在集群内部署了多个网关时，可以使用这一参数来区分每个网关的职责范围 。IngressClass 有一些特殊的取值：1. 如果设置为“nginx”，Higress Controller 将监听 Ingress 为 nginx 或为空的 Ingress 资源。2. 如果设为空，Higress Controller 将监听 K8s 集群内的全部 Ingress 资源。                                                                                                       | higress         |
| global.watchNamespace                  | 如果值不为空，Higress Controller 将只会监听指定命名空间下的资源。当基于 K8s 命名空间进行业务系统隔离时，若需要对每个命名空间部署一套独立的网关，可以通过这一参数来限制 Higress 监听指定命名空间内的 Ingress。                                                                                                                                                                                                                 | ""              |
| global.disableAlpnH2	                  | 	是否在 ALPN 中禁用 HTTP/2 协议                                                                                                                                                                                                                                                                                                                     | true            |
| global.enableStatus	                   | 若为true， Higress Controller 将会更新 Ingress 资源的 status 字段。为避免从 Nginx Ingress 迁移过程中，覆盖 Ingress 对象的 status 字段，可以将这一参数设置为false，这样 Higress 默认就不会将入口 IP 写入 Ingress 的 status 字段。                                                                                                                                                                       | true            |
| global.local	                          | 	如果要安装至本地 K8s 集群（如 Kind、Rancher Desktop 等），请设置为 true                                                                                                                                                                                                                                                                                        | false           |
| global.enableIstioAPI	                 | 	若为 true，Higress Controller 将同时监听 istio 资源                                                                                                                                                                                                                                                                                                  | false           |                                                                                                                                                                                                              | 	10m            |
| global.imagePullPolicy                 | 如果不希望使用默认行为，则可以指定镜像拉取策略。默认行为：最新的镜像将始终以 Always 方式拉取，否则将以 IfNotPresent 方式拉取。                                                                                                                                                                                                                                                                  | ""              |
| global.imagePullSecrets                | 为所有 ServiceAccount 配置 ImagePullSecrets，即在同一命名空间中列出的一组密钥，用于拉取任何引用此 ServiceAccount 的 pod 中的镜像。对于不使用 ServiceAccount 的组件（例如 grafana、servicegraph、tracing），ImagePullSecrets 将被添加到相应的 Deployment（StatefulSet）对象中。对于配置了私有 Docker Registry 的任何集群，都必须设置此项。                                                                                           | []              |
## meshConfig参数
| 参数                                | 参数说明                                                                     | 默认值                       |       
|-----------------------------------|--------------------------------------------------------------------------|---------------------------|
| higress-core.meshConfig.enablePrometheusMerge	 | 用于启用或禁用将 Prometheus 指标进行合并的选项。通过启用它，Istio 将能够将来自多个代理的指标进行聚合和展示。          | true |
| higress-core.meshConfig.rootNamespace          | 表示根命名空间。如果未指定，则默认为 "istio-system"。                                 | null                      |
| higress-core.meshConfig.trustDomain            | 表示信任域。默认为 "cluster.local"。信任域用于确定服务之间的安全通信，它将用于生成服务的证书和 JWT Token。 | cluster.local           |

## Gateway参数
| 参数                                                             | 参数说明                                                                                      | 默认值                 |       
|----------------------------------------------------------------|:------------------------------------------------------------------------------------------|---------------------|
| higress-core.gateway.replicas	                                 | Higress Gateway 的 pod 数量。                                                                 | 2                   |
| higress-core.gateway.rbac.enabled	                             | 如果启用，则将创建 roles 以便从 Gateways 访问证书。但在使用 http://gateway-api.org/ 时，这不是必需的                   | true                |
| higress-core.gateway.serviceAccount.create	                    | 指定是否创建 ServiceAccount, 否则，使用默认值。                                                          | true                |
| higress-core.gateway.serviceAccount.annotations                | 指定需要添加到 ServiceAccount 上的注释。                                                              | {}                  |
| higress-core.gateway.serviceAccount.name                       | 指定要使用的 ServiceAccount 的名称。                                                                | ""                  |
| higress-core.gateway.env	                                      | 指定 Gateway 使用的环境变量。                                                                       | {}                  |
| higress-core.gateway.hostNetwork	                              | 指定是否使用宿主机网络。                                                                              | false               |
| higress-core.gateway.labels	                                   | 指定应用于所有 gateway 资源的标签。                                                                    | {}                  |
| higress-core.gateway.annotations	                              | 指定要应用于所有 gateway 资源的注释。                                                                   | {}                  |
| higress-core.gateway.podAnnotations.prometheus.io/port	        | 指定 Prometheus 监控的端口。                                                                      | 15020              |
| higress-core.gateway.podAnnotations.prometheus.io/scrape	      | 指示 Prometheus 是否应该监控该 Pod 。如果该值为"true"，则 Prometheus 将监控该 Pod ；如果该值为 "false" ，则不会监控该 Pod 。 |  true               |
| higress-core.gateway.podAnnotations.prometheus.io/path	        | 指定 Prometheus 监控该 Pod 时，需要访问的 URL 路径。在这里设置为"/stats/prometheus"。                           | /stats/prometheus |
| higress-core.gateway.podAnnotations.sidecar.istio.io/inject	   | 指定是否启用 Istio Sidecar 模式。                                                                  | false              |
| higress-core.gateway.service.type	                             | 指定 Service 的类型                                                                            | LoadBalancer      |
| higress-core.gateway.service.loadBalancerIP                    | 指定 LoadBalancer 的 IP 地址                                                                   | ""                  |
| higress-core.gateway.service.loadBalancerSourceRanges	         | 指定 LoadBalancer 允许的源 IP 范围。                                                               | []                  |
| higress-core.gateway.service.annotations	                      | 指定要应用到 Service 上的注释。                                                                      | {}                  |
| higress-core.gateway.service.externalTrafficPolicy             | 指定 Service 的外部流量策略。                                                                       |         ""           |
| higress-core.gateway.rollingMaxSurge                           | 指定滚动更新期间的最大扩容数量                                                                           | 100%              |
| higress-core.gateway.rollingMaxUnavailable                     | 指定滚动更新期间的最大不可用数量。                                                                         | 25%               |
| higress-core.gateway.resources.limits.cpu	                     | 指定 gateway 容器的CPU请求资源限制。                                                                  | 2000m               |
| higress-core.gateway.resources.limits.memory	                  | 指定 gateway 容器的内存请求资源限制。                                                                   | 2048Mi               |
| higress-core.gateway.resources.requests.cpu	                   | 指定 gateway 容器的CPU请求资源。                                                                    | 2000m                |
| higress-core.gateway.resources.requests.memory	                | 指定 gateway 容器的内存请求资源。                                                                     | 2048Mi               |
| higress-core.gateway.autoscale.enabled	                        | 指定是否启用 gateway Pod 自动缩放。                                                                  | false               |
| higress-core.gateway.autoscale.minReplicas	                    | 允许的最小副本数。                                                                                 | 1                   |
| higress-core.gateway.autoscale.maxReplicas	                    | 允许的最大副本数。                                                                                 | 5                   |
| higress-core.gateway.autoscale.targetCPUUtilizationPercentage	 | 表示 HPA 应该尝试将 Pod 的 CPU 利用率维持在什么水平。                                                        | 80                  |
| higress-core.gateway.nodeSelector                              | 节点选择器，用于确定 gatyway 容器将部署在哪些节点上。                                                           | {}                  |
| higress-core.gateway.tolerations                                                    | 容忍度，用于允许 gateway 容器调度到具有指定污点的节点。                                                          | []                  |
| higress-core.gateway.affinity                                                       | 亲和性，用于控制 gateway容器如何调度，使其与其他 Pod 或节点保持亲和或反亲和。                                             | {}                  |
| higress-core.gateway.networkGateway                                                 | 用于指定网络网关的名称或 IP 地址。                                                                       | ""                  |


## Controller参数
| 参数                                                     | 参数说明                                                                 | 默认值       |       
|--------------------------------------------------------|----------------------------------------------------------------------|-----------|
| higress-core.controller.replicas	                      | Higress Controller 的 pod 数量。                                         | 1         |
| higress-core.controller.env	                           | 指定容器所需的任何环境变量。                                                       | {}        |
| higress-core.controller.labels	                        | 指定部署 controller 容器的标签                                                | {}        |
| higress-core.controller.probe.httpGet.path	            | 容器的健康检查配置信息，使用 HTTP GET 请求检查容器的 /ready 路径                            | /ready    |
| higress-core.controller.probe.httpGet.port	            | 指定健康检查配置端口。                                                          | 8888      |
| higress-core.controller.probe.initialDelaySeconds	     | 指定容器启动后首次进行健康检查的延迟时间。                                                | 1         |
| higress-core.controller.probe.periodSeconds	           | 指定进行健康检查的时间间隔。                                                       | 3         |
| higress-core.controller.probe.timeoutSeconds	          | 指定等待健康检查响应的超时时间                                                      | 5         |
| higress-core.controller.imagePullSecrets	              | 指定用于拉取容器镜像的密钥信息                                                      | []        |
| higress-core.controller.rbac.create	                   | 定义是否应该创建与此部署相关的 RBAC 规则。                                             | true      |
| higress-core.controller.serviceAccount.create	         | 指定是否应该创建 serviceAccount 。                                            | true      |
| higress-core.controller.serviceAccount.annotations	    | 指定要添加到 serviceAccount 的注释。                                           | {}        |
| higress-core.controller.serviceAccount.name	           | 指定要使用的 serviceAccount 的名称，如果未设置且 create 为 true ，则使用 fullname 模板生成名称。 | ""        |
| higress-core.controller.podAnnotations	                | 指定要添加到 controller 容器的注释。                                             | {}        |
| higress-core.controller.podSecurityContext	            | 指定 Pod 的安全上下文。                                                       | {}        |
| higress-core.controller.service.type	                  | 指定 Service 的类型为 ClusterIP。                                           | ClusterIP |
| higress-core.controller.securityContext	               | 指定 controller 容器的安全上下文。                                              | {}        |
| higress-core.controller.resources.requests.cpu	        | 分配给 controller 的 CPU 资源请求。                                           | 500m      |
| higress-core.controller.resources.requests.memory      | 分配给 controller 的内存资源请求。                                              | 	2048Mi   |
| higress-core.controller.resources.limits.cpu	          | 分配给 controller 的 CPU 资源请求限制。                                         | 1000m     |
| higress-core.controller.resources.limits.memory	       | 分配给 controller 的内存资源请求限制。                                            | 2048Mi    |
| higress-core.controller.nodeSelector	                  | 用于指定 Pod 调度到特定节点的标签选择器                                               | {}        |
| higress-core.controller.tolerations	                   | 用于指定 Pod 的容忍性，即容忍某些节点上的特定污点。                                         | []        |
| higress-core.controller.affinity	                      | 用于指定 Pod 的亲和性，即将 Pod 调度到特定节点或节点组。                                    | {}        |
| higress-core.controller.autoscaling.enabled	           | 指定是否启用 Pod 的自动缩放。                                                    | false     |
| higress-core.controller.autoscaling.minReplicas	       | 指定自动缩放的最小 Pod 数量。                                                    | 1         |
| higress-core.autoscaling.maxReplicas	                    | 指定自动缩放的最大 Pod 数量。                                                    | 5         |
| higress-core.autoscaling.targetCPUUtilizationPercentage	 | 指定自动缩放调整 Pod 数量的目标 CPU 利用率百分比。                                       | 80        |

## Pilot参数
| 参数                                                                | 参数说明                                                                                                           | 默认值    |       
|-------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------|
| higress-core.pilot.autoscaleEnabled	                              | 是否启用 Pilot 的自动伸缩。                                                                                              | false  |
| higress-core.pilot.autoscaleMin	                                  | 自动伸缩时最小的副本数。                                                                                                   | 1      |
| higress-core.pilot.autoscaleMax	                                  | 自动伸缩时最大的副本数。                                                                                                   | 5      |
| higress-core.pilot.replicaCount	                                  | Pilot 的 pod 数量。                                                                                                | 1      |
| higress-core.pilot.rollingMaxSurge	                               | 在进行滚动更新时，允许同时增加的 Pod 数量的最大比例。                                                                                  | 100%   |
| higress-core.pilot.rollingMaxUnavailable	                         | 在进行滚动更新时，允许同时不可用的 Pod 数量的最大比例。                                                                                 | 25%    |
| higress-core.pilot.traceSampling	                                 | 指定应用程序的跟踪采样率，这里是1.0（即100%）。                                                                                    | 1      |
| higress-core.pilot.resources.requests.cpu	                        | 分配给 pilot 的 CPU 资源请求。                                                                                          | 500m   |
| higress-core.pilot.resources.requests.memory                      | 分配给 pilot 的内存资源请求。                                                                                             | 2048Mi |
| higress-core.pilot.env.PILOT_SCOPE_GATEWAY_TO_NAMESPACE	          | 如果设置为 true ，则使网关只能访问其所在的命名空间中的服务。                                                                              | true   |
| higress-core.pilot.env.PILOT_ENABLE_METADATA_EXCHANGE	            | 如果设置为 false ，则禁用与 Envoy 之间的元数据交换。                                                                              | false  |
| higress-core.pilot.env.PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY	 | 如果设置为 false ，则禁用跨集群工作负载入口。                                                                                     | false  |
| higress-core.pilot.env.VALIDATION_ENABLED	                        | 如果设置为 false ，则禁用对配置文件的验证。                                                                                      | false  |
| higress-core.pilot.cpu.targetAverageUtilization	                  | 指定 Pod 应该尝试达到的 CPU 利用率百分比，以便触发自动缩放。例如，如果设置为80，则当 Pod 的 CPU 利用率达到80％时，将启动更多的 Pod 以处理更多的负载。                      | 80     |
| higress-core.pilot.enableProtocolSniffingForOutbound	             | 是否在出站流量上启用协议嗅探，这里是 true 。                                                                                      | true   |
| higress-core.pilot.enableProtocolSniffingForInbound	              | 是否在入站流量上启用协议嗅探，这里是 true 。                                                                                      | true   |
| higress-core.pilot.nodeSelector	                                  | 指定应该部署此应用程序的节点标签。                                                                                              | {}     |
| higress-core.pilot.podAnnotations	                                | 指定要添加到 Pod 的注释。                                                                                                | {}     |
| higress-core.pilot.serviceAnnotations	                            | 指定要添加到 Service 的注释。                                                                                            | {}     |
| higress-core.pilot.jwksResolverExtraRootCA	                       | 提供 PEM 格式的根证书，以便在解析 JWKS URI 时由 pilot 信任。                                                                      | ""    |
| higress-core.pilot.configSource.subscribedResources	              | 指定配置源的来源，如果未指定，则使用默认的 MCP 。指定订阅的 Kubernetes 资源列表。                                                              | []     |
| higress-core.pilot.plugins	                                       | 指定要启用的插件列表。                                                                                                    | []     |
| higress-core.pilot.keepaliveMaxServerConnectionAge	               | 限制 sidecar 与 pilot 连接的最长时间。                                                                                    | 30m    |
| higress-core.pilot.deploymentLabels	                              | 为部署添加额外的标签。                                                                                                    | {}     |
| higress-core.pilot.configMap	                                     | 安装由values.yaml生成的 mesh config ，如果为 false ，则 Pilot 将使用默认值（默认情况下）或用户提供的值，如果为 false ，则 Pilot 将使用默认值（默认情况下）或用户提供的值 | true   |
| higress-core.pilot.podLabels	                                     | 为 Pod 添加额外的标签，以用于监控和日志记录配置。                                                                                    | {}     |



## skywalking 参数
| 参数                                      | 参数说明                         | 默认值       |   
|-----------------------------------------|------------------------------|-----------|                                       
| higress-core.skywalking.enabled	        | 是否启用 SkyWalking              | false     |
| higress-core.skywalking.service.address | 	SkyWalking 服务地址，如果不指定则使用默认值 | ~         |
| higress-core.skywalking.service.port	   | SkyWalking 服务端口，默认为 11800    | 11800 |


## 控制台参数
| 参数                                       | 参数说明                                                                                                                                       | 默认值              |
|------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|------------------|    
| higress-console.replicaCount	                            | Higress Console 的 pod 数量                                                                                                                   | 1                |
| higress-console.dnsPolicy	                               | 指定 DNS 策略，这里为 ClusterFirst 。                                                                                                               | ClusterFirst     |
| higress-console.restartPolicy                            | 指定重启策略，这里指定为 Always 。                                                                                                                      | 	Always          |
| higress-console.service.type	                            | 指定控制台 service 类型。                                                                                                                          | ClusterIP        |
| higress-console.domain	                                  | 对外用于访问 Higress Console 的域名。                                                                                                                | console.higress.io |
| higress-console.resources.requests.cpu	                  | 分配给 console 的 CPU 资源请求。                                                                                                                    | 250m             |
| higress-console.resources.requests.memory                | 分配给 console 的内存资源请求。                                                                                                                       | 	512Mi           |
| higress-console.web.login.prompt                         | 登录页面上显示的提示信息，默认为空。                                                                                                                         | ""               |
| higress-console.admin.username	                          | 指定的用户名。                                                                                                                                    | admin            |
| higress-console.admin.displayName                        | 显示的用户名。                                                                                                                                    | 	Admin           |
| higress-console.admin.password.length	                   | 安装时自动为 admin 账号生成的随机密码的长度。仅在 higress-console.admin.password.value 值为空时生效。                                                                  | 8                |
| higress-console.admin.password.value                     | 若值不为空，则 admin 账号的密码将被配置为指定值。                                                                                                               | ""                 |
| higress-console.certmanager.enabled	                     | 指定是否启用证书管理器。                                                                                                                               | false            |
| higress-console.certmanager.replicas	                    | Certmanage pod 的数量。                                                                                                                        | 1                |
| higress-console.o11y.enabled	                            | 若为 true，将同时安装可观测性套件（Grafana + Promethues）。                                                                                                 | false            |
| higress-console.o11y.grafana.replicas	                   | Grafana pod 的数量。                                                                                                                           | 1                |
| higress-console.o11y.grafana.storage	                    | 分配给 Grafana 的存储类大小。                                                                                                                        | 1Gi              |
| higress-console.o11y.grafana.pvc.storageClassName        | Grafana 的存储类名称。                                                                                                                            | ""               |
| higress-console.o11y.prometheus.replicas	                | Prometheus pod 的数量。                                                                                                                        | 1                |
| higress-console.o11y.prometheus.storage	                 | 分配给 prometheus 的存储类大小。                                                                                                                     | 1Gi              |
| higress-console.o11y.prometheus.pvc.storageClassName     | Prometheus 的存储类名称。                                                                                                                         |  ""                |
| higress-console.o11y.prometheus.resources.limits.cpu	    | 分配给 prometheus 的 CPU 资源限制。                                                                                                                 | 500m             |
| higress-console.o11y.prometheus.resources.limits.memory	 | 分配给 prometheus 的内存资源限制。                                                                                                                    | 2Gi              |
| higress-console.pvc.rwxSupported	                        | RwxSupported 参数用于指示是否支持读写多个 Pod，即是否支持共享卷。如果该参数设置为 true，则表明支持共享卷，多个 Pod 可以同时挂载该 PVC，进行读写操作。如果设置为 false，则表明不支持共享卷，只有一个 Pod 可以挂载该 PVC 进行读写操作。 | true             |
