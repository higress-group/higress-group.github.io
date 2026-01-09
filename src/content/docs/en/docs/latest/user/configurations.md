---
title: Higress Configuration Parameters Guide
keywords: [Higress, Configuration, Parameters]
description: Comprehensive guide to Higress configuration parameters
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/configurations.md
---

# Higress Configuration Parameters Guide

The following operational parameters can be configured using the `--set` or `--values` flags with the Helm command, or through the `values` field in the `hgctl` profile file.

## Global Parameters
| Parameter | Description | Default   |
|-----------|-------------|-----------|
| `global.ingressClass` | The IngressClass parameter is used to filter which Ingress resources the Higress controller should watch. When multiple gateways are deployed in a cluster, this parameter can be used to distinguish the responsibilities of each gateway. Special values: 1. If set to "nginx", Higress Controller will watch Ingress resources with `ingress.class: nginx` or no ingress class. 2. If left empty, Higress Controller will watch all Ingress resources in the Kubernetes cluster. | `higress` |
| `global.watchNamespace` | If not empty, Higress Controller will only watch resources in the specified namespace. When isolating business systems by Kubernetes namespaces, you can deploy an independent gateway for each namespace by limiting Higress to watch only the specified namespace. | `""`      |
| `global.disableAlpnH2` | Whether to disable HTTP/2 protocol in ALPN | `false`   |
| `global.enableStatus` | If true, Higress Controller will update the status field of Ingress resources. To prevent overwriting the status field of Ingress objects during migration from Nginx Ingress, set this parameter to false. | `true`    |
| `global.local` | Set to true if installing to a local Kubernetes cluster (e.g., Kind, Rancher Desktop) | `false`   |
| `global.enableIstioAPI` | If true, Higress Controller will also watch Istio resources | `false`   |
| `global.enableGatewayAPI` | If true, Higress Controller will also watch Gateway API resources | `false`   |
| `global.imagePullPolicy` | If you don't want to use the default behavior, you can specify the image pull policy. Default behavior: The latest image will always be pulled with `Always` policy, otherwise it will be pulled with `IfNotPresent`. | `""`      |
| `global.imagePullSecrets` | Configure ImagePullSecrets for all ServiceAccounts, which is a list of secrets in the same namespace used to pull images for any pod that references this ServiceAccount. This must be set for any cluster configured with a private Docker Registry. | `[]`      |
| `global.defaultUpstreamConcurrencyThreshold` | Maximum concurrency between a single data plane instance and a backend service (calculated independently for each service). Note that excessive concurrency may lead to high memory usage in the gateway, so adjust the data plane memory limit accordingly. | `10000`   |
| `global.o11y.enabled` | If true, the observability suite (Grafana, Prometheus, Loki, PromTail, etc.) will be installed. | `false`   |
| `global.pvc.rwxSupported` | The RwxSupported parameter indicates whether read-write-many (RWX) volumes are supported. If set to true, it means shared volumes are supported, and multiple pods can mount the same PVC for read-write operations. If set to false, only one pod can mount the PVC for read-write operations. | `false`   |
| `global.onlyPushRouteCluster` | If `true`, for Kubernetes services, Higress Controller will only push services that are associated with routes. | `true`    |
| `global.priorityClassName` | PriorityClass name for Higress Controller and Higress Gateway Pods |           |

## meshConfig Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `higress-core.meshConfig.enablePrometheusMerge` | Option to enable or disable merging Prometheus metrics. When enabled, Istio can aggregate and display metrics from multiple proxies. | `true` |
| `higress-core.meshConfig.rootNamespace` | The root namespace. If not specified, it defaults to "istio-system". | `null` |
| `higress-core.meshConfig.trustDomain` | The trust domain. Defaults to "cluster.local". The trust domain is used for secure communication between services and for generating service certificates and JWT tokens. | `cluster.local` |

## Gateway Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `higress-core.gateway.replicas` | Number of Higress Gateway pods. | `2` |
| `higress-core.gateway.rbac.enabled` | If enabled, creates roles to access certificates from Gateways. Not required when using http://gateway-api.org/. | `true` |
| `higress-core.gateway.serviceAccount.create` | Specifies whether to create a ServiceAccount. | `true` |
| `higress-core.gateway.serviceAccount.annotations` | Annotations to add to the ServiceAccount. | `{}` |
| `higress-core.gateway.serviceAccount.name` | The name of the ServiceAccount to use. | `""` |
| `higress-core.gateway.env` | Environment variables for the Gateway. | `{}` |
| `higress-core.gateway.httpPort` | HTTP port that Higress Gateway will listen on. | `80` |
| `higress-core.gateway.httpsPort` | HTTPS port that Higress Gateway will listen on. | `443` |
| `higress-core.gateway.hostNetwork` | Whether to use the host's network. | `false` |
| `higress-core.gateway.labels` | Labels to apply to all Gateway resources. | `{}` |
| `higress-core.gateway.annotations` | Annotations to apply to all Gateway resources. | `{}` |
| `higress-core.gateway.podAnnotations.prometheus.io/port` | Port for Prometheus monitoring. | `15020` |
| `higress-core.gateway.podAnnotations.prometheus.io/scrape` | Whether Prometheus should monitor this Pod. If set to "true", Prometheus will monitor the Pod. | `true` |
| `higress-core.gateway.podAnnotations.prometheus.io/path` | The URL path that Prometheus should use to monitor this Pod. | `/stats/prometheus` |
| `higress-core.gateway.service.type` | Type of the Service. | `LoadBalancer` |
| `higress-core.gateway.service.loadBalancerIP` | IP address of the LoadBalancer. | `""` |
| `higress-core.gateway.service.loadBalancerSourceRanges` | Allowed source IP ranges for the LoadBalancer. | `[]` |
| `higress-core.gateway.service.annotations` | Annotations to apply to the Service. | `{}` |
| `higress-core.gateway.service.externalTrafficPolicy` | External traffic policy for the Service. | `""` |
| `higress-core.gateway.rollingMaxSurge` | Maximum number of pods that can be created over the desired number of pods during a rolling update. | `100%` |
| `higress-core.gateway.rollingMaxUnavailable` | Maximum number of unavailable pods during a rolling update. | `25%` |
| `higress-core.gateway.resources.limits.cpu` | CPU limit for the gateway container. | `2000m` |
| `higress-core.gateway.resources.limits.memory` | Memory limit for the gateway container. | `2048Mi` |
| `higress-core.gateway.resources.requests.cpu` | CPU request for the gateway container. | `2000m` |
| `higress-core.gateway.resources.requests.memory` | Memory request for the gateway container. | `2048Mi` |
| `higress-core.gateway.autoscaling.enabled` | Whether to enable autoscaling for gateway Pods. | `false` |
| `higress-core.gateway.autoscaling.minReplicas` | Minimum number of replicas. | `1` |
| `higress-core.gateway.autoscaling.maxReplicas` | Maximum number of replicas. | `5` |
| `higress-core.gateway.autoscaling.targetCPUUtilizationPercentage` | Target CPU utilization percentage for the HPA to maintain. | `80` |
| `higress-core.gateway.nodeSelector` | Node selector for determining which nodes the gateway container will be deployed on. | `{}` |
| `higress-core.gateway.tolerations` | Tolerations to allow the gateway container to be scheduled on nodes with specified taints. | `[]` |
| `higress-core.gateway.affinity` | Affinity for controlling how the gateway container is scheduled in relation to other Pods or nodes. | `{}` |
| `higress-core.gateway.networkGateway` | Name or IP address of the network gateway. | `""` |

## Controller Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `higress-core.controller.replicas` | Number of Higress Controller pods. | `1` |
| `higress-core.controller.env` | Environment variables for the container. | `{}` |
| `higress-core.controller.labels` | Labels for the controller container deployment. | `{}` |
| `higress-core.controller.probe.httpGet.path` | Health check configuration for the container, using HTTP GET request to check the `/ready` path. | `/ready` |
| `higress-core.controller.probe.httpGet.port` | Port for the health check configuration. | `8888` |
| `higress-core.controller.probe.initialDelaySeconds` | Delay in seconds before the first health check is performed after container startup. | `1` |
| `higress-core.controller.probe.periodSeconds` | Interval in seconds between health checks. | `3` |
| `higress-core.controller.probe.timeoutSeconds` | Timeout in seconds for the health check response. | `5` |
| `higress-core.controller.imagePullSecrets` | Secrets for pulling container images. | `[]` |
| `higress-core.controller.rbac.create` | Whether to create RBAC rules associated with this deployment. | `true` |
| `higress-core.controller.serviceAccount.create` | Whether to create a ServiceAccount. | `true` |
| `higress-core.controller.serviceAccount.annotations` | Annotations to add to the ServiceAccount. | `{}` |
| `higress-core.controller.serviceAccount.name` | Name of the ServiceAccount to use. If not set and create is true, the name is generated using the fullname template. | `""` |
| `higress-core.controller.podAnnotations` | Annotations to add to the controller container. | `{}` |
| `higress-core.controller.podSecurityContext` | Security context for the Pod. | `{}` |
| `higress-core.controller.service.type` | Type of the Service. | `ClusterIP` |
| `higress-core.controller.securityContext` | Security context for the controller container. | `{}` |
| `higress-core.controller.resources.requests.cpu` | CPU resource request for the controller. | `500m` |
| `higress-core.controller.resources.requests.memory` | Memory resource request for the controller. | `2048Mi` |
| `higress-core.controller.resources.limits.cpu` | CPU resource limit for the controller. | `1000m` |
| `higress-core.controller.resources.limits.memory` | Memory resource limit for the controller. | `2048Mi` |
| `higress-core.controller.nodeSelector` | Node selector for specifying which nodes the Pod should be scheduled on. | `{}` |
| `higress-core.controller.tolerations` | Tolerations for the Pod, allowing it to tolerate specific taints on nodes. | `[]` |
| `higress-core.controller.affinity` | Affinity for the Pod, specifying how it should be scheduled in relation to nodes or groups of nodes. | `{}` |
| `higress-core.controller.autoscaling.enabled` | Whether to enable autoscaling for the Pod. | `false` |
| `higress-core.controller.autoscaling.minReplicas` | Minimum number of Pods for autoscaling. | `1` |
| `higress-core.autoscaling.maxReplicas` | Maximum number of Pods for autoscaling. | `5` |
| `higress-core.autoscaling.targetCPUUtilizationPercentage` | Target CPU utilization percentage for autoscaling. | `80` |

## Pilot Parameters
| Parameter | Description | Default |
|-----------|-------------|---------|
| `pilot.enabled` | Whether to enable Pilot. | `true` |
| `pilot.replicaCount` | Number of Pilot replicas. | `1` |
| `pilot.image.repository` | Pilot container image repository. | `docker.io/istio/pilot` |
| `pilot.image.tag` | Pilot container image tag. | `1.15.0` |
| `pilot.image.pullPolicy` | Image pull policy for the Pilot container. | `IfNotPresent` |
| `pilot.traceSampling` | Percentage of requests that should be traced. | `1.0` |
| `pilot.resources.requests.cpu` | CPU request for the Pilot container. | `500m` |
| `pilot.resources.requests.memory` | Memory request for the Pilot container. | `2048Mi` |
| `pilot.resources.limits.cpu` | CPU limit for the Pilot container. | `1000m` |
| `pilot.resources.limits.memory` | Memory limit for the Pilot container. | `4096Mi` |

## Additional Notes

- For detailed configuration examples and advanced usage, refer to the [official Higress documentation](https://higress.io/docs).
- When modifying these parameters, ensure that your Kubernetes cluster has sufficient resources to accommodate the requested configurations.
- For production environments, it's recommended to set appropriate resource requests and limits based on your workload requirements.
- Always test configuration changes in a staging environment before applying them to production.
