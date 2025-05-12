---
title: 查看运行时配置
keywords: [ops,runtime,config]
description: 介绍如何查看 Higress 的运行时配置
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/view-configs.md
---
# 查看运行时配置

## 概述

声明：如果只是想获取配置信息，可以不用看这一节。

Higress 有三个组件与运行时配置有关：

- controller：生成全量配置
- pilot：从 controller 获取配置，过滤后下发给 gateway
- gateway：从 pilot 获取配置并在路由时生效

## 获取配置信息

### K8s 部署

#### 准备工作

获取 Higress 各个 Pod 的名称：

```bash
kubectl get pods -n higress-system
```

#### 获取 controller 生成的配置

```bash
# higress-controller-xxxx-yyyy 即前面获取到的 Higress Controller Pod 名称。
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:8888/debug/configz # 输出紧凑 JSON
curl http://localhost:8888/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 获取到的配置

```bash
# higress-controller-xxxx-yyyy 即前面获取到的 Higress Controller Pod 名称。
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/configz # 输出紧凑 JSON
curl http://localhost:15014/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 推送出去的配置

```bash
# higress-controller-xxxx-yyyy 即前面获取到的 Higress Controller Pod 名称。
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/connections
# 上面这一步会输出一段 JSON
# 类似 {"totalClients":1,"clients":[{"connectionId":"higress-gateway-7f9f949d64-hmmg8.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# 请记录下面其中某个 connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway-7f9f949d64-hmmg8.higress-system-1 # 请替换 proxyID 取值为前面记录的 connectionId
```

#### 获取 gateway 获取到的配置

```bash
# higress-gateway-xxxx-yyyy 即前面获取到的 Higress Gateway Pod 名称。
kubectl exec higress-gateway-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15000/config_dump
```

### Docker Compose 部署

#### 获取 controller 生成的配置

```bash
docker exec -it higress-controller-1 bash
curl http://localhost:8888/debug/configz # 输出紧凑 JSON
curl http://localhost:8888/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 获取到的配置

```bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/configz # 输出紧凑 JSON
curl http://localhost:15014/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 推送出去的配置

```bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/connections
# 上面这一步会输出一段 JSON
# 类似 {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# 请记录下面其中某个 connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # 请替换 proxyID 取值为前面记录的 connectionId
```

#### 获取 gateway 获取到的配置

```bash
docker exec -it higress-gateway-1 bash
curl http://localhost:15000/config_dump
```

### all-in-one 镜像部署

#### 准备工作

确认 Higress all-in-one 的容器名称：

```bash
docker ps
```

#### 获取 controller 生成的配置

```bash
# higress-container-name 替换成前面获取到的 Higress 容器名称或者 ID
docker exec -it higress-container-name bash
curl http://localhost:8888/debug/configz # 输出紧凑 JSON
curl http://localhost:8888/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 获取到的配置

```bash
# higress-container-name 替换成前面获取到的 Higress 容器名称或者 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/configz # 输出紧凑 JSON
curl http://localhost:15014/debug/configz?pretty # 输出格式化了的 JSON
```

#### 获取 pilot 推送出去的配置

```bash
# higress-container-name 替换成前面获取到的 Higress 容器名称或者 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/connections
# 上面这一步会输出一段 JSON
# 类似 {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# 请记录下面其中某个 connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # 请替换 proxyID 取值为前面记录的 connectionId
```

#### 获取 gateway 获取到的配置

```bash
# higress-container-name 替换成前面获取到的 Higress 容器名称或者 ID
docker exec -it higress-container-name bash
curl http://localhost:15000/config_dump
```