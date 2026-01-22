---
title: 基于 Docker Compose 进行独立部署
keywords: [deploy,docker compose,docker,ops]
description: 如何使用 Docker Compose 实现 Higress 的独立部署
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/deploy-by-docker-compose.md
---

# 基于 Docker Compose 进行独立部署

Docker Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过它，我们可以使用 YAML 文件来脱离 K8s 集群来实现 Higress 网关的独立部署。

> **注意**
> 
> Standalone 模式没有大规模生产使用过，目前主要用于本地部署测试的场景，如果生产部署更建议[云原生模式](/zh-cn/docs/ops/deploy-by-helm)部署

## 安装 Higress

基于 Docker Compose 部署时，Higress 网关由如下几个服务组成：
- apiserver：基础设施服务。负责模拟 K8s 的 API Server；
- controller：控制面服务一号。负责配置收集整合所有的配置数据和服务列表；
- pilot：控制面服务一号。负责下发网关路由数据；
- gateway：数据面服务。负责承载实际的网关请求；
- console：Higress 网关控制台

### 安装命令

```shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]
```

### 安装参数

|**参数名**                                                     |**参数说明**                                                                                                         |**默认值**           |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|--------------|
|DESTINATION                                             |目标安装目录                                                                                                       |./higress     |
|-a<br/>--auto-run                                          |配置完成后自动启动 Higress 网关                                                                                         |无             |
|-c CONFIG_URL<br/>--config-url CONFIG_URL                  |配置服务的 URL。<br/>- 若使用独立部署的 Nacos 服务（版本不低于 2.0.0），URL 格式为：nacos://192.168.0.1:8848<br/>- 若在本地磁盘上保存配置，URL 格式为：file:///opt/higress/conf|无             |
|--use-builtin-nacos                                     |使用内置的 Nacos 服务。不建议用于生产环境。如果设置本参数，则无需设置`-c`参数                                                                 |无             |
|--nacos-ns=NACOS_NAMESPACE                              |用于保存 Higress 配置的 Nacos 命名空间 ID                                                                               |higress-system|
|--nacos-username=NACOS_USERNAME                         |用于访问 Nacos 的用户名。仅用于 Nacos 启动了认证的情况下                                                                          |无             |
|--nacos-password=NACOS_PASSWORD                         |用于访问 Nacos 的用户密码。仅用于 Nacos 启动了认证的情况下                                                                         |无             |
|-k KEY<br/>--data-enc-key=KEY                              |用于加密敏感配置数据的密钥。长度必须为 32 个字符。若未设置，Higress 将自动生成一个随机的密钥。若需集群部署，此项必须设置                                           |随机字符串         |
|--nacos-port=NACOS_PORT                                 |内置 NACOS 服务在服务器本地监听的端口                                                                                       |8848          |
|--gateway-http-port=GATEWAY_HTTP_PORT                   |Higress Gateway 在服务器本地监听的 HTTP 端口                                                                            |80            |
|--gateway-https-port=GATEWAY_HTTPS_PORT                 |Higress Gateway 在服务器本地监听的 HTTPS 端口                                                                           |443           |
|--gateway-metrics-port=GATEWAY_METRIC_PORT              |Higress Gateway 在服务器本地监听的用于暴露运行指标端口                                                                          |15020         |
|--console-port=CONSOLE_PORT                             |Higress Console 在服务器本地监听的端口                                                                                  |8080          |
|-r<br/>--rerun                                             |在 Higress 已配置完成后重新执行配置流程                                                                                     |无             |
|-h<br/>--help                                              |显示帮助信息                                                                                                       |无             |
