---
title: 基于文件配置实现 Higress 极简独立部署
keywords: [higress,file,config]
description: 介绍如何使用文件来管理 Higress 配置信息并实现独立部署
author: CH3CHO
date: "2023-08-25"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/config-with-file.md
category: "article"
---
## 前置准备

### 安装 Docker Compose

请参考 Docker 官方文档来安装 Docker Engine，其中已经内置了 Docker Compose 组件：https://docs.docker.com/engine/install/

### 环境验证

1. 启动终端；
3. 执行 `docker compose version` 命令，确认可以正常输出 Docker Compose 的版本。
   ```
   Docker Compose version v2.20.2
   ```

## 安装 Higrees

### 确定配置目录

由于这次我们准备使用文件来管理 Higress 的配置数据，所以需要先确定保存配置文件的目录。下面我们将以 `~/higress/conf` 目录为例进行介绍。

### 执行安装

启动终端，并执行以下命令：

```
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c file://~/higress/conf -p <你的密码> -a
```

请耐心等待安装过程执行完毕。Higress 的执行文件将被安装在当前目录下的 `higress` 子目录内。配置数据则将被写入 `~/higress/conf` 目录内。

在安装完成后，脚本会自动启动 Higress。当终端输出如下信息时，则说明 Higress 已安装完成并成功启动。

```shell
Higress is now started. You can check out its status by executing /home/ch3cho/higress/bin/status.sh

Higress Gateway is listening on:
  http://0.0.0.0:80
  https://0.0.0.0:443
Visit Higress Console: http://localhost:8080/
```

### Higress 路由配置

为了着重说明基于文件的路由配置方式，这里将不再展开介绍使用 Higress 控制台来进行配置的具体步骤。如有需要，大家可以查阅其他文档。

#### 创建服务来源

使用文本编辑器将以下内容写入 `~/higress/conf/mcpbridges/default.yaml` 文件中：

```yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: httpbin.org
    name: httpbin
    port: 80
    type: dns
```

#### 创建域名配置

使用文本编辑器将以下内容写入 `~/higress/conf/configmaps/domain-foo.bar.com.yaml` 文件中：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: domain-foo.bar.com
  namespace: higress-system
data:
  domain: foo.bar.com
  enableHttps: "off"
```

#### 创建服务路由

使用文本编辑器将以下内容写入 `~/higress/conf/ingresses/route-foo-bar.yaml` 文件中：

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/ignore-path-case: "false"
  name: route-foo-bar
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
```

### 请求验证

在终端中执行以下命令：

```shell
curl http://localhost/get?foo=bar -H 'Host: foo.bar.com'
```

请求应返回一段包含请求信息的 JSON 数据：
```json
{
  "args": {
    "foo": "bar"
  },
  "headers": {
    "Accept": "*/*",
    "Host": "foo.bar.com",
    "Original-Host": "foo.bar.com",
    "Req-Start-Time": "1693049173053",
    "User-Agent": "curl/8.1.2",
    "X-Amzn-Trace-Id": "Root=1-11111111-111111111111111111111111",
    "X-B3-Sampled": "0",
    "X-B3-Spanid": "2222222222222222",
    "X-B3-Traceid": "33333333333333333333333333333333",
    "X-Envoy-Attempt-Count": "1",
    "X-Envoy-Decorator-Operation": "httpbin.dns:80/*",
    "X-Envoy-Internal": "true"
  },
  "origin": "192.168.16.1, 123.123.123.123",
  "url": "http://foo.bar.com/get?foo=bar"
}
```

## 已知问题

在 Windows 操作系统中，直接修改挂载到 Docker 容器中的本地文件后，容器内的进程无法收到通知（详情请查看 [fsnotify/fsnotify #292](https://github.com/fsnotify/fsnotify/issues/292)）。如果要使用文件来保存配置数据的话，在直接修改配置文件后，Higress 无法立即加载到新的配置。如果需要在 Windows 上独立部署 Higress 网关，可以考虑通过 Higress Console 来管理配置信息，或使用 Nacos 保存网关配置。

## 参考文档

更多相关信息与 Higress 的其他部署方式可查阅以下文档：
- [快速开始](../docs/user/quickstart)
- [使用 Helm 进行云原生部署](../docs/ops/deploy-by-helm)
- [基于 Docker Compose 进行独立部署](../docs/ops/deploy-by-docker-compose)
