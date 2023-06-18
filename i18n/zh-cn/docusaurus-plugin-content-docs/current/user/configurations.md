---
title: 运维参数配置说明
keywords: [Higress]
description: Higress 参数配置。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configurations.md
---

# Higress参数配置


## Global参数
| 参数                                            | 参数说明                                                                                                                                                                                                                                                                  | 默认值     |
|-----------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| global.ingressClass	                          | IngressClass 参数用于筛选 Higress 控制器要监听的 Ingress 资源。在集群内部署了多个网关时，可以使用这一参数来区分每个网关的职责范围 。IngressClass 有一些特殊的取值：1. 如果设置为“nginx”，Higress Controller 将监听 Ingress 为 nginx 或为空的 Ingress 资源。2. 如果设为空，Higress Controller 将监听 K8s 集群内的全部 Ingress 资源。                                 | higress |
| global.watchNamespace                         | 如果值不为空，Higress Controller 将只会监听指定命名空间下的资源。当基于 K8s 命名空间进行业务系统隔离时，若需要对每个命名空间部署一套独立的网关，可以通过这一参数来限制 Higress 监听指定命名空间内的 Ingress。                                                                                                                                           | ""      |
| global.disableAlpnH2	                         | 	是否在 ALPN 中禁用 HTTP/2 协议                                                                                                                                                                                                                                               | true    |
| global.enableStatus	                          | 若为true， Higress Controller 将会更新 Ingress 资源的 status 字段。    为避免从 Nginx Ingress 迁移过程中，覆盖 Ingress 对象的 status 字段，可以将这一参数设置为true，这样 Higress 默认就不会将入口 IP 写入 Ingress 的 status 字段。                                                                                             | true    |
| global.local	                                 | 	如果要安装至本地 K8s 集群（如 Kind、Rancher Desktop 等），请设置为 true                                                                                                                                                                                                                  | false   |
| global.enableIstioAPI	                        | 	若为true，Higress Controller 将同时监听 istio 资源                                                                                                                                                                                                                             | false   |
| global.istioNamespace	                        | istio 安装到的命名空间                                                                                                                                                                                                                                                        | istio-system |
| global.defaultPodDisruptionBudget.enabled	    | 启用 Pod Disruption Budget（PDB）控制，用于控制 Istio 控制平面组件的升级或恢复。由于当前 PodDisruptionBudget 的限制，这些值是不可更改的,minAvailable设置为1                                                                                                                                                       | false   |
| global.defaultResources.requests.cpu          | 应用于所有deployments的最小cpu请求，以便 Horizontal Pod Autoscaler 能够运行（如果已设置）。                                                                                                                                                                                                    | 	10m    |
| global.defaultResources.requests.memory       | 应用于所有deployments的最小memory请求，以便 Horizontal Pod Autoscaler 能够运行（如果已设置）。                                                                                                                                                                                                 | ""      |
| global.defaultResources.limits.cpu            | 应用于所有deployments最小cpu请求限制，以便 Horizontal Pod Autoscaler 能够运行（如果已设置）。                                                                                                                                                                                                   | ""      |
| global.defaultResources.limits.memory         | 应用于所有deployments最小memory请求限制，以便 Horizontal Pod Autoscaler 能够运行（如果已设置）。                                                                                                                                                                                                | ""      |
| global.imagePullPolicy                        | 如果不希望使用默认行为，则可以指定镜像拉取策略。默认行为：最新的镜像将始终以 Always 方式拉取，否则将以 IfNotPresent 方式拉取。                                                                                                                                                                                            | ""      |
| global.imagePullSecrets                       | 为所有ServiceAccount配置ImagePullSecrets，列出在同一命名空间中使用的密钥，以用于拉取任何引用此ServiceAccount的Pod中的镜像。对于不使用ServiceAccounts的组件（即grafana、servicegraph、tracing），ImagePullSecrets将添加到相应的Deployment（StatefulSet）对象中。对于配置了私有docker注册表的任何集群，都必须设置。                                            | []      |
| global.istiod.enableAnalysis                  | istiod.enableAnalysis 参数用于启用或禁用 Istio 内置的分析功能。当设置为 true 时，它会启用 Istio 的分析功能，该功能会分析网格配置中的常见配置错误，并生成改进配置的建议。当设置为 false 时，它会禁用分析功能。默认情况下，该参数的值为 false。                                                                                                                    | false   |
| global.logAsJson	                             | 将所有 Istio 组件的日志输出为 JSON 格式，可以通过在每个容器参数中添加 --log_as_json 参数来实现。                                                                                                                                                                                                        | false   |
| global.logging.level	                         | 以逗号分隔的形式，指定每个作用域（scope）的最低日志级别，格式为 <scope\>:<level\>,<scope\>:<level\>。控制平面根据组件不同有不同的作用域，但可以在所有组件中配置默认的日志级别。如果为空，则使用代码中配置的默认作用域和级别。                                                                                                                                   | default:info |
| global.omitSidecarInjectorConfigMap	          | 不省略Sidecar注入器的ConfigMap，即使用默认的配置。如果设置为true，则可以通过指定ConfigMap的名称来覆盖默认的配置。通常情况下，如果没有特殊需求，建议使用默认的配置。                                                                                                                                                                      | false   |
| global.oneNamespace	                          | 是否限制Controller管理的应用程序命名空间；如果未设置，则Controller将监视所有命名空间                                                                                                                                                                                                                  | false   |
| global.operatorManageWebhooks	                | 配置 Operator 是否管理 webhook 配置。当前 Istiod 的行为是管理自己的 webhook 配置。当该选项设置为 true 时，Istio Operator 代替 webhook 管理 webhook 配置。当该选项设置为 false 时，webhook 将管理自己的 webhook 配置。                                                                                                          | false   |
| global.priorityClassName                      | Kubernetes >=v1.11.0 将创建两个 PriorityClass，包括 system-cluster-critical 和 system-node-critical，最好进行配置以确保 Istio Pod 不会因为优先级低而被杀死。请参阅 https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#priorityclass 了解更多细节。                                      | ""      |
| global.proxy.autoInject	                      | 控制Sidecar注入器中的策略，这里设置为启用自动注入，即自动添加Sidecar容器到Pod中。如果设置为"disabled"，则需要手动在Pod中添加Sidecar容器。                                                                                                                                                                               | enabled |
| global.proxy.clusterDomain	                   | 集群域的默认值为 "cluster.local"                                                                                                                                                                                                                                              | "cluster.local" |
| global.proxy.componentLogLevel	               | 代理的每个组件日志级别，适用于网关和 sidecar。如果未设置组件级别，则将使用全局的 "logLevel"。                                                                                                                                                                                                              | "misc:error" |
| global.proxy.enableCoreDump	                  | 设置是否允许生成核心转储文件。如果设置，则新注入的 sidecar 将启用 core dumps。                                                                                                                                                                                                                     | false   |
| global.proxy.excludeInboundPorts              | 设置需要排除的入站端口列表。默认为空，表示不排除任何入站端口                                                                                                                                                                                                                                        | ""      |
| global.proxy.includeInboundPorts              | 设置需要包括的入站端口列表。默认为空，表示包括所有入站端口。                                                                                                                                                                                                                                        | "*"     |
| global.proxy.includeIPRanges                  | 设置需要包括的IP地址范围。默认为空，表示包括所有IP地址。                                                                                                                                                                                                                                        | "*"     |
| global.proxy.excludeIPRanges                  | 设置需要排除的IP地址范围。默认为空，表示不排除任何IP地址                                                                                                                                                                                                                                        | ""      |
| global.proxy.includeOutboundPorts             | 设置需要包括的出站端口列表,默认为空，表示包括所有出站端口。                                                                                                                                                                                                                                        | ""      |
| global.proxy.excludeOutboundPorts             | 设置需要排除的出站端口列表。默认为空，表示不排除任何出站端口。                                                                                                                                                                                                                                       | ""      |
| global.proxy.logLevel	                        | 设置代理的日志级别。这里默认设置为"warning"，表示记录警告级别及以上的日志。                                                                                                                                                                                                                            | warning |
| global.proxy.privileged	                      | 如果将"privileged"设置为true，那么Istio-proxy容器将拥有特权级别的securityContext                                                                                                                                                                                                         | false   |
| global.proxy.readinessFailureThreshold	       | 设置代理容器的就绪检查失败阈值。如果代理容器在就绪检查期间失败的次数超过此阈值，则认为该容器不可用。                                                                                                                                                                                                                    | 30      |
| global.proxy.readinessInitialDelaySeconds	    | 设置代理容器的就绪检查启动延迟时间。在此时间之后，就绪检查开始执行                                                                                                                                                                                                                                     | 1       |
| global.proxy.readinessPeriodSeconds	          | 设置代理容器的就绪检查执行间隔时间。在此时间间隔之后，就绪检查再次执行。                                                                                                                                                                                                                                  | 2       |
| global.proxy.resources.requests.cpu	          | sidecar的cpu请求                                                                                                                                                                                                                                                         | 100m    |
| global.proxy.resources.requests.memory	       | sidecar的memory请求                                                                                                                                                                                                                                                      | 128Mi   |
| global.proxy.resources.limits.cpu	            | sidecar的cpu请求限制                                                                                                                                                                                                                                                       | 2000m   |
| global.proxy.resources.limits.memory	         | sidecar的memory请求限制                                                                                                                                                                                                                                                    | 1024Mi  |
| global.proxy.statusPort	                      | Pilot 代理健康检查的默认端口。0 的值将禁用健康检查。                                                                                                                                                                                                                                        | 15020   |
| global.proxy.tracer	                          | 指定要使用的跟踪器（tracer），可选值为：zipkin、lightstep、datadog、stackdriver。如果在 GCP 之外使用 stackdriver 跟踪器，请将环境变量 GOOGLE_APPLICATION_CREDENTIALS 设置为 GCP 凭据文件的路径。                                                                                                                       | zipkin  |
| global.proxy.holdApplicationUntilProxyStarts	 | 控制是否在容器列表的最前面注入 sidecar，并阻塞其他容器的启动，直到代理准备就绪。                                                                                                                                                                                                                          | false   |
| global.remotePilotAddress                     | 配置远程 Pilot 和 Istiod 服务和端点。                                                                                                                                                                                                                                            | ""        |
| global.caAddress                              | 远程 Pilot 的地址                                                                                                                                                                                                                                                          |   ""      |
| global.externalIstiod	                        | 表示是否配置由外部 istiod 控制的远程集群数据平面。                                                                                                                                                                                                                                         | false   |
| global.configCluster	                         | 表示是否将远程集群配置为外部 istiod 的配置集群。                                                                                                                                                                                                                                          | false   |
| global.jwtPolicy	                             | 用于验证 JWT 的策略，可以设置为“third-party-jwt”或“first-party-jwt”                                                                                                                                                                                                                 | third-party-jwt |
| global.meshID                                 | 网格的 ID，应在网格相互交互的范围内是唯一的                                                                                                                                                                                                                                               | ""        |
| global.meshNetworks	                          | 要由 Split Horizon EDS 使用的网格网络                                                                                                                                                                                                                                          | ""        |
| global.mountMtlsCerts	                        | 表示是否使用用户指定的、以密文卷挂载的密钥和证书来为 Pilot 和工作负载提供 mTLS。                                                                                                                                                                                                                        | false   |
| global.multiCluster.enabled	                  | 表示是否通过各自的入口网关服务将两个 Kubernetes 集群连接起来，当每个集群中的 Pod 无法直接相互通信时。                                                                                                                                                                                                           | true    |
| global.useMCP	                                | 表示是否使用 Mesh Control Protocol (MCP) 配置 Istiod。                                                                                                                                                                                                                         | false   |
| global.caName                                 | 用于工作负载证书的 CA 名称。默认值为 ""，当 caName="" 时，CA 将由其他机制（例如环境变量 CA_PROVIDER）配置。                                                                                                                                                                                                | ""      |

支持的跟踪器的配置 配置Envoy将跟踪数据发送到LightStep。
默认情况下禁用:

| 参数                                                  | 参数说明                                                                                                                                                                                                                                  | 默认值             |
|-----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| global.tracer.datadog.address	                      |     用于将跟踪数据提交到Datadog代理的主机和端口。                                                                                                                                                                                                                                  | "$(HOST_IP):8126" |
| global.tracer.lightstep.address                     |     example: lightstep-satellite:443                                                                                                                                                                                                                                  | “”              |
| global.tracer.lightstep.accessToken                 |            example: abcdefg1234567                                                                                                                                                                                                                           | “”              |
| global.tracer.stackdriver.debug	                    |         启用将跟踪输出到标准输出(stdout)                                                                                                                                                                                                                                | false           |
| global.tracer.stackdriver.maxNumberOfMessageEvents	 |       每个跨度(span)的全局默认最大消息事件数。                                                                                                                                                                                                                                | 200             |
| global.tracer.stackdriver.maxNumberOfAnnotations	   |                   每个跨度(span)的全局默认最大注释事件数。                                                                                                                                                                                                                    | 200             |
| global.tracer.stackdriver.maxNumberOfAttributes	    |                    每个跨度(span)的全局默认最大属性数                                                                                                                                                                                                                   | 200             |
| global.tracer.zipkin.address                        |                 用于以Zipkin格式报告跟踪数据的主机和端口。如果未指定，将默认为同其他Istio组件在同一命名空间中的Zipkin服务（端口为9411）                                                                                                                                                                                                                      | “”              |

## meshConfig参数
| 参数                                | 参数说明 | 默认值                       |       
|-----------------------------------|------|---------------------------|
| higress-core.meshConfig.enablePrometheusMerge	 |  表示是否启用 Prometheus 的指标合并功能。    | true |
| higress-core.meshConfig.rootNamespace          |一个字符串，表示根命名空间。如果未指定，则默认为 "istio-system"。 | null                      |
| higress-core.meshConfig.trustDomain            | 一个字符串，表示信任域。默认为 "cluster.local"。信任域用于确定服务之间的安全通信，它将用于生成服务的证书和 JWT Token。| cluster.local           |

## Gateway参数
| 参数                                                             | 参数说明                                                                                                  | 默认值                 |       
|----------------------------------------------------------------|:------------------------------------------------------------------------------------------------------|---------------------|
| higress-core.gateway.replicas	                                 | Higress Gateway 的 pod 数量                                                                              | 2                   |
| higress-core.gateway.rbac.enabled	                             | 如果设置了，则将创建一个服务账户                                                                                      | true                |
| higress-core.gateway.serviceAccount.create	                    | 如果启用，则将创建角色以便从 Gateways 访问证书。但在使用 http://gateway-api.org/ 时，这不是必需的。                                   | true                |
| higress-core.gateway.serviceAccount.annotations                | 要添加到serviceAccount的注释（Annotations）。                                                                   | {}                  |
| higress-core.gateway.serviceAccount.name                       | 要使用的serviceAccount的名称。如果未设置，则使用发布名称。                                                                  | ""                  |
| higress-core.gateway.env	                                      | Pod 环境变量                                                                                              | {}                  |
| higress-core.gateway.hostNetwork	                              | 是否使用宿主机网络                                                                                             | false               |
| higress-core.gateway.labels	                                   | 应用于所有gateway资源的标签                                                                                     | {}                  |
| higress-core.gateway.annotations	                              | 要应用于所有资源的注释（Annotations）。                                                                             | {}                  |
| higress-core.gateway.podAnnotations.prometheus.io/port	        | 暴露的端口号为 15020，用于 Prometheus 监控。                                                                       | 15020              |
| higress-core.gateway.podAnnotations.prometheus.io/scrape	      | 指示Prometheus是否应该监控该Pod。如果该值为"true"，则Prometheus将监控该Pod；如果该值为"false"，则不会监控该Pod。                         |  true               |
| higress-core.gateway.podAnnotations.prometheus.io/path	        | 指定Prometheus监控该Pod时，需要访问的URL路径。在这里设置为"/stats/prometheus"。                                             | /stats/prometheus |
| higress-core.gateway.podAnnotations.sidecar.istio.io/inject	   | 示是否启用Istio的Sidecar注入功能。如果该值为"true"，则Istio会自动在该Pod中注入一个Sidecar容器；如果该值为"false"，则不会注入Sidecar容器。          | false              |
| higress-core.gateway.service.type	                             | 在Kubernetes中定义Service时可以设置的服务类型。如果将服务类型设置为“None”，则将完全禁用该服务。                                           | LoadBalancer      |
| higress-core.gateway.service.loadBalancerIP                    | 指定负载均衡器的IP地址。如果不指定，则由Kubernetes自动分配IP地址。                                                              | ""                  |
| higress-core.gateway.service.loadBalancerSourceRanges	         | 可以访问负载均衡器的IP地址范围。这可以用于安全限制，只允许特定IP范围的客户端访问Service。                                                    | []                  |
| higress-core.gateway.service.annotations	                      | Service的注释信息                                                                                          | {}                  |
| higress-core.gateway.service.externalTrafficPolicy             | 指定流量处理策略。如果设置为"Cluster"，则表示将流量路由到同一集群中的后端Pod；如果设置为"Local"，则表示将流量路由到最接近的后端Pod。如果不设置该字段，则默认为"Cluster"策略。                                                       |         ""           |
| higress-core.gateway.rollingMaxSurge                           | 滚动更新时允许的最大超出副本数百分比                                                                                    | 100%              |
| higress-core.gateway.rollingMaxUnavailable                     | 滚动更新时允许的最大不可用副本数百分比                                                                                   | 25%               |
| higress-core.gateway.resources.limits.cpu	                     | CPU 限制                                                                                                | 1000m               |
| higress-core.gateway.resources.limits.memory	                  | 内存限制                                                                                                  | 512Mi               |
| higress-core.gateway.resources.requests.cpu	                   | CPU 请求                                                                                                | 100m                |
| higress-core.gateway.resources.requests.memory	                | 内存请求                                                                                                  | 128Mi               |
| higress-core.gateway.autoscale.enabled	                        | 是否启用自动伸缩                                                                                              | false               |
| higress-core.gateway.autoscale.minReplicas	                    | 允许的最小副本数                                                                                              | 1                   |
| higress-core.gateway.autoscale.maxReplicas	                    | 允许的最大副本数                                                                                              | 5                   |
| higress-core.gateway.autoscale.targetCPUUtilizationPercentage	 | 触发伸缩的目标 CPU 利用率百分比                                                                                    | 80                  |
| higress-core.gateway.nodeSelector                              | 节点选择器，用于确定 Pod 将部署在哪些节点上                                                                              | {}                  |
| tolerations                                                    | 容忍度，用于允许 Pod 调度到具有指定污点的节点                                                                             | []                  |
| affinity                                                       | 亲和性，用于控制 Pod 如何调度，使其与其他 Pod 或节点保持亲和或反亲和                                                               | {}                  |
| networkGateway                                                 | 用于指定网络网关的名称或 IP 地址。                                                                                   | ""                  |


## Controller参数
| 参数                                                     | 参数说明                                                                 | 默认值       |       
|--------------------------------------------------------|----------------------------------------------------------------------|-----------|
| higress-core.controller.replicas	                      | 指定controller 的副本数为 1                                                 | 1         |
| higress-core.controller.env	                           | 容器的环境变量                                                              | {}        |
| higress-core.controller.labels	                        | Deployment 的标签                                                       | {}        |
| higress-core.controller.probe.httpGet.path	            | 容器的健康检查配置信息，使用 HTTP GET 请求检查容器的 /ready 路径                            | /ready    |
| higress-core.controller.probe.httpGet.port	            |健康检查配置 端口                                                                   | 8888      |
| higress-core.controller.probe.initialDelaySeconds	     | 容器启动后多少秒开始进行健康检查                                                     | 1         |
| higress-core.controller.probe.periodSeconds	           | 表示健康检查的间隔时间                                                          | 3         |
| higress-core.controller.probe.timeoutSeconds	          | 表示健康检查的超时时间                                                          | 5         |
| higress-core.controller.imagePullSecrets	              | 用于拉取容器镜像的密钥信息                                                        | []        |
| higress-core.controller.rbac.create	                   | 包含一个名为 create 的布尔值字段，指定是否创建 RBAC 角色和绑定                               | true      |
| higress-core.controller.serviceAccount.create	         | 指定是否创建一个新的 ServiceAccount                                            | true      |
| higress-core.controller.serviceAccount.annotations	    | 包含一个键值对，用于为 ServiceAccount 设置注释。                                     | {}        |
| higress-core.controller.serviceAccount.name	           | 指定Service Account的名称。如果不设置该字段，则会根据fullname模板生成一个名称。如果设置该字段，则使用指定的名称。 | ""        |
| higress-core.controller.podAnnotations	                | 用于为 controller 中的 Pod 指定注释                                           | {}        |
| higress-core.controller.podSecurityContext	            | 用于为 Pod 指定安全上下文                                                      | {}        |
| higress-core.controller.service.type	                  | 指定 Service 的类型为 ClusterIP                                            | ClusterIP |
| higress-core.controller.securityContext	               | 用于为 Pod 指定安全上下文                                                      | {}        |
| higress-core.controller.resources.requests.cpu	        | 用于指定 Pod 的cpu请求                                                      | 500m      |
| higress-core.controller.resources.requests.memory      | 用于指定 Pod 的memory请求                                                   | 	2048Mi   |
| higress-core.controller.resources.limits.cpu	          | 用于指定 Pod 的cpu限制                                                      | 1000m     |
| higress-core.controller.resources.limits.memory	       | 用于指定 Pod 的memory限制                                                   | 2048Mi    |
| higress-core.controller.nodeSelector	                  | 用于指定 Pod 调度到特定节点的标签选择器                                               | {}        |
| higress-core.controller.tolerations	                   | 用于指定 Pod 的容忍性，即容忍某些节点上的特定污点。                                         | []        |
| higress-core.controller.affinity	                      | 用于指定 Pod 的亲和性，即将 Pod 调度到特定节点或节点组。                                    | {}        |
| higress-core.controller.autoscaling.enabled	           | 用于配置水平自动扩展（HPA）                                                      | false     |
| higress-core.controller.autoscaling.minReplicas	       | 指定 HPA 允许的最小 Pod 数量                                                  | 1         |
| controller.autoscaling.maxReplicas	                    | 指定 HPA 允许的最大 Pod 数量                                                  | 5         |
| controller.autoscaling.targetCPUUtilizationPercentage	 | 指定定 HPA 触发自动扩展的 CPU 利用率阈值。                                           | 80        |

## Pilot参数
| 参数                                                                | 参数说明                      | 默认值    |       
|-------------------------------------------------------------------|---------------------------|--------|
| higress-core.pilot.autoscaleEnabled	                              | 是否启用自动伸缩                  | false  |
| higress-core.pilot.autoscaleMin	                                  | 自动伸缩时最小的副本数               | 1      |
| higress-core.pilot.autoscaleMax	                                  | 自动伸缩时最大的副本数               | 5      |
| higress-core.pilot.replicaCount	                                  | 非自动缩放情况下的副本数。             | 1      |
| higress-core.pilot.rollingMaxSurge	                               | 在进行滚动更新时，允许同时增加的Pod数量的最大比例。 | 100%   |
| higress-core.pilot.rollingMaxUnavailable	                         | 在进行滚动更新时，允许同时不可用的Pod数量的最大比例。     | 25%    |
| higress-core.pilot.traceSampling	                                 | 控制链路跟踪采样的百分比              | 1      |
| higress-core.pilot.resources.requests.cpu	                        | 容器请求的 CPU 资源              | 500m   |
| higress-core.pilot.resources.requests.memory                      | 容器请求的内存资源                 | 2048Mi |
| higress-core.pilot.env.PILOT_SCOPE_GATEWAY_TO_NAMESPACE	          |  如果设置为"true"，则网关的范围将是整个命名空间；否则网关的范围将是整个集群            | true   |
| higress-core.pilot.env.PILOT_ENABLE_METADATA_EXCHANGE	            | 如果设置为"true"，则启用与Envoy代理之间的元数据交换；否则禁止元数据交换。                 | false  |
| higress-core.pilot.env.PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY	 | 如果设置为"true"，则允许在不同集群之间使用跨集群工作负载入口（Cross Cluster Workload Entry）；否则禁止使用跨集群工作负载入口。               | false  |
| higress-core.pilot.env.VALIDATION_ENABLED	                        |        如果设置为"true"，则启用Istio的配置验证功能；否则禁用配置验证功能                   | false  |
| higress-core.pilot.cpu.targetAverageUtilization	                  |CPU 利用率的目标平均值                           | 80     |
| higress-core.pilot.enableProtocolSniffingForOutbound	             |是否启用对出站流量的协议嗅探                           | true   |
| higress-core.pilot.enableProtocolSniffingForInbound	              |是否启用对入站流量的协议嗅探                           | true   |
| higress-core.pilot.nodeSelector	                                  |  节点选择器，用于将Pod调度到符合条件的节点上。| {}     |
| higress-core.pilot.podAnnotations	                                |    Pod的注释，用于存储一些元数据信息                       | {}     |
| higress-core.pilot.serviceAnnotations	                            |                     Service的注释，用于存储一些元数据信息。      | {}     |
| higress-core.pilot.jwksResolverExtraRootCA	                       |      用于提供PEM格式的根证书，以便Pilot在解析JWKS URI时信任该证书。                     | ""    |
| higress-core.pilot.configSource.subscribedResources	              |订阅的 Kubernetes 资源列表                           | []     |
| higress-core.pilot.plugins	                                       |启用的插件列表                           | []     |
| higress-core.pilot.keepaliveMaxServerConnectionAge	               |限制Sidecar连接到Pilot的最长寿命。这可以平衡Pilot实例之间的负载，但会增加系统开销。                          | 30m    |
| higress-core.pilot.deploymentLabels	                              |Deployment 标签                           | {}     |
| higress-core.pilot.configMap	                                     |是否安装Mesh Config Map。如果为false，则Pilot将使用默认值或用户提供的值                           | true   |
| higress-core.pilot.podLabels	                                     |应用于 pod 级别的附加标签，用于监视和日志记录配置。                           | {}     |
                     


## skywalking 参数
| 参数                                      | 参数说明 | 默认值       |   
|-----------------------------------------|------|-----------|                                       
| higress-core.skywalking.enabled	        |是否启用 SkyWalking      | false     |
| higress-core.skywalking.service.address |	SkyWalking 服务地址，如果不指定则使用默认值      | ~         |
| higress-core.skywalking.service.port	   |SkyWalking 服务端口，默认为 11800      | 11800 |


## 控制台参数
| 参数                                       | 参数说明                                                                      | 默认值              |
|------------------------------------------|:--------------------------------------------------------------------------|------------------|    
| higress-console.replicaCount	                            | Higress Console 的 pod 数量                                                  | 1                |
| higress-console.dnsPolicy	                               | 表示要用于Kubernetes Pod的DNS策略的字符串值                                            | ClusterFirst     |
| higress-console.restartPolicy                            | 表示要用于Kubernetes Pod的重启策略的字符串值                                             | 	Always          |
| higress-console.service.type	                            |    控制台service类型                                                                       | ClusterIP        |
| higress-console.domain	                                  | 对外用于访问 Higress Console 的域名                                                | console.higress.io |
| higress-console.resources.requests.cpu	                  | CPU 请求量                                                                   | 250m             |
| higress-console.resources.requests.memory                | 内存请求量                                                                     | 	512Mi           |
| higress-console.web.login.prompt                         | 登录页面上显示的提示信息默认为空                                                          | ""               |
| higress-console.admin.username	                          | 用户名                                                                       | admin            |
| higress-console.admin.displayName                        | 显示的用户名                                                                    | 	Admin           |
| higress-console.admin.password.length	                   | 安装时自动为 admin 账号生成的随机密码的长度。仅在 higress-console.admin.password.value 值为空时生效。 | 8                |
| higress-console.admin.password.value                     | 若值不为空，则 admin 账号的密码将被配置为指定值                                               | ""                 |
| higress-console.certmanager.enabled	                     | 证书管理器设置是否启用，默认为否                                                          | false            |
| higress-console.certmanager.replicas	                    | 副本数量                                                                      | 1                |
| higress-console.o11y.enabled	                            | 若为 true，将同时安装可观测性套件（Grafana + Promethues）                                 | false            |
| higress-console.o11y.grafana.replicas	                   | Grafana 设置副本数量                                                            | 1                |
| higress-console.o11y.grafana.storage	                    | 申请的存储大小                                                                   | 1Gi              |
| higress-console.o11y.grafana.pvc.storageClassName        | 存储类名称，默认为空                                                                | ""               |
| higress-console.o11y.prometheus.replicas	                | 副本数量                                                                      | 1                |
| higress-console.o11y.prometheus.storage	                 | 申请的存储大小                                                                   | 1Gi              |
| higress-console.o11y.prometheus.pvc.storageClassName     | 存储类名称，默认为空                                                                |  ""                |
| higress-console.o11y.prometheus.resources.limits.cpu	    | CPU 限制量                                                                   | 500m             |
| higress-console.o11y.prometheus.resources.limits.memory	 | 内存限制量                                                                     | 2Gi              |
| higress-console.pvc.rwxSupported	                        | 标识目标 K8s 集群是否支持 PersistentVolumeClaim 的 ReadWriteMany 操作方式。               | true             |