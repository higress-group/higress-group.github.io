---
title: 查看日志
keywords: [ops,logging,log]
description: 介绍如何查看 Higress 的运行日志
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/view-logs.md
---
# 查看日志

## 查看组件日志

### K8s 部署

直接使用 `kubectl logs` 命令即可。例如：

```bash
kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd
```

注意，`higress-controller` pod 里有两个容器，`higress-core` 和 `discovery`，分别对应 `controller` 和 `pilot` 两个组件。查看日志的时候可以使用 `-c` 参数来执行要查看日志的容器名称。例如：

```bash
kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery
```

### Docker Compose 部署

在安装目录下执行 `./bin/logs.sh 组件名称` 即可查看对应组件的日志。

常用的组件名称如下：

- apiserver
- controller
- pilot
- gateway
- console

### all-in-one 镜像部署

all-in-one 模式下，Higress 所有的日志文件均保存在容器内的 `/var/log/higress` 目录下。使用 `docker exec` 命令进入到容器内直接查看文件内容即可。 

```bash
docker exec -it higress-ai-gateway bash

cd /var/log/higress
ls -l
cat gateway.log
```

## 查看访问日志

### 已开启内置监控套件

如果开启了 Higress 内置的监控套件，那么你可以在 Higress Console 上直接查看请求日志：

1. 进入 Higress Console 的监控面板页面
2. 点击右侧监控区域最左边的“四个小方格”图标
3. 点击右侧的“Higress Access Logs”即可进入访问日志看板页面

### 未开启内置监控套件

这种情况下，访问日志会与运行日志一同记录。参考运行日志的查看方法即可。

## 调整日志等级

目前需要调整日志等级的主要是 gateway 组件。临时调整日志等级的具体方式为：

1. 打开 gateway 所在容器的 `bash` 终端
    - K8s 部署：`kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash`
    - Docker Compose 部署：`docker exec -it higress-gateway-1 bash`
    - all-in-one 镜像部署：`docker exec -it higress-ai-gateway bash`
2. 执行命令：`curl localhost:15000/logging?模块名=日志等级 -X POST`

常用模块名称有：

- golang：MCP Server 模块
- wasm：Wasm 插件模块

日志等级包括：

- trace
- debug
- info
- warning/warn（默认值）
- error
- critical
- off

调整后的日志等级在 gateway 重启后将会自动失效。