---
title: 教程：如何在本地开发和调试 Higress Pilot
keywords: [higress,pilot]
description: 介绍如何在本地开发和调试 Higress 中的 Pilot 组件
author: CH3CHO
date: "2024-03-16"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/pilot-debug.md
category: "article"
---

## 背景说明

前面 SJC 在[这篇博客](/blog/e2e-debug)中介绍了如何在本地开发和调试 Higress Controller。而 Higress 控制面除了 Controller 之外还有一个组件，那就是 Pilot。本文就将介绍如何在本地开发和调试 Higress Pilot。

## 环境准备

### 步骤一：克隆代码仓库

Pilot 的代码目前是以 Istio 上游仓库 submodule 加补丁文件的形式存在于 Higress 的主仓库中的，所以直接克隆 Higress 的代码主仓库 https://github.com/alibaba/higress 即可。

### 步骤二：准备项目代码

Higress Pilot 是在 Istio Pilot 的基础上，基于 Higress 自身的功能需求进行了二次开发而构建而成的，所以我们这里需要下载上游代码仓库并应用现有的补丁。我们只需要执行下面这条命令：

```bash
make prebuild
```

**Windows 用户注意了！**

如果你是在 Windows 上进行开发，并且执行 `make` 命令有困难的话，不要怕，我们也有办法。因为整个 prebuild 其实也只做了两件事情。

第一件事情是初始化所有的上游子模块，只需要执行这样一条命令：

```bash
git submodule update --init
```

第二件事情是初始化开发目录。这一步骤执行的就是 `tools/hack/prebuild.sh`。大家可以直接在 Cygwin 或者 Git Bash 等类 Linux 终端下执行这个脚本文件。

如果在应用补丁的时候出现了和换行符有关的报错，那么可以编辑 `prebuild.sh`，给两处 `patch` 命令增加 `--binary` 参数即可。

![img.png](/img/blog/pilot-debug/patch-binary.png)

### 步骤三：安装 Higress

既然只是调试 pilot，那么其他组件还是要复用现有 Higress 集群里的。所以我们需要在本地配置一个 Higress 集群。大家可以参考这篇文档：[链接](/docs/latest/user/quickstart)。

## 开发与调试

### 本地开发

本地开发推荐使用 IDE JetBrains GoLand。我们直接在 GoLand 中打开 `external/istio` 目录，正常进行开发即可。

![img.png](/img/blog/pilot-debug/goland-project.png)

### 调试运行

**环境准备**

第一步：提取配置文件

在本地任意一个位置创建一个目录，然后在该目录下执行以下命令，生成配置文件：

```bash
kubectl get configmap higress-config -n higress-system -o=jsonpath='{.data.mesh}' > ./mesh
kubectl get configmap higress-config -n higress-system -o=jsonpath='{.data.meshNetworks}' > ./meshNetworks
```

第二步：转发 controller 端口

执行以下命令，将 controller 的 xDS 服务端口转发至本地：

```bash
kubectl port-forward deployment/higress-controller -n higress-system 15051
```

**代码调整**

如果要调试与 TLS 证书下发的相关功能，则需要在 `pilot/pkg/xds/ads.go` 的 `initConnection` 函数中添加代码，绕过证书下发过程的认证要求。代码修改方法请参考下方示例。

```go
	if features.EnableXDSIdentityCheck && con.Identities != nil {
		// TODO: allow locking down, rejecting unauthenticated requests.
		id, err := checkConnectionIdentity(con)
		if err != nil {
			log.Warnf("Unauthorized XDS: %v with identity %v: %v", con.PeerAddr, con.Identities, err)
			return status.Newf(codes.PermissionDenied, "authorization failed: %v", err).Err()
		}
		con.proxy.VerifiedIdentity = id
	}
    // Start - Auth bypassing for local debug
	con.proxy.VerifiedIdentity = &spiffe.Identity{
		TrustDomain:    "cluster.local",
		Namespace:      "higress-system",
		ServiceAccount: "higress-gateway",
	}
    // End - Auth bypassing for local debug
```

**运行配置**

配置一：环境变量

```bash
CUSTOM_CA_CERT_NAME=higress-ca-root-cert;
JWT_POLICY=none;
PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY=false;
PILOT_ENABLE_GATEWAY_API=true;
PILOT_ENABLE_GATEWAY_API_DEPLOYMENT_CONTROLLER=false;
PILOT_ENABLE_GATEWAY_API_STATUS=false;
PILOT_ENABLE_METADATA_EXCHANGE=false;
PILOT_SCOPE_GATEWAY_TO_NAMESPACE=true;
POD_NAME=higress-controller;
POD_NAMESPACE=higress-system;
REVISION=default;
VALIDATION_ENABLED=false
```

配置二：命令行参数

```bash
discovery --monitoringAddr=:15014 --log_output_level=default:info --domain cluster.local --keepaliveMaxServerConnectionAge 30m --meshConfig ${configDir}/mesh --networksConfig ${configDir}/meshNetworks
```

注意：其中的 `${configDir}` 为在**环境准备**一步创建的配置目录。

**启动调试**

在完成以上工作之后，我们就可以启动 Pilot 了。它的 main 函数定义在 `pilot/cmd/pilot-discovery/main.go` 文件中。

![img.png](/img/blog/pilot-debug/debug-run.png)

**网关对接**

如果想要验证 pilot 下发配置到 gateway 的功能，我们需要修改 gateway 的配置，使之连接到处于开发状态的 pilot 实例。

第一步：修改 `higress-config` ConfigMap

```bash
kubectl edit configmap higress-config -n higress-system
```

修改两个地方：
1. 将 `discoveryAddress` 修改为`本机IP:15010`；
    <br/>
    注意：此处的本机 IP 不可以使用 127.0.0.1 等 loopback IP。需要使用本机有线或无线网卡的 IP。
2. 在 `discoveryAddress` 下面添加一个新属性：`controlPlaneAuthPolicy: NONE`。

修改后配置示例：

![img.png](/img/blog/pilot-debug/higress-config-edited.png)

第二步：重启 Higress Gateway

```bash
kubectl rollout restart deployment higress-gateway -n higress-system
```

重启后我们可以在 pilot 的控制台输出中看到 gateway 连接上来的并获取配置的日志。

![img.png](/img/blog/pilot-debug/gateway-connected.png)

## 总结

本地调试和测试是开发过程中必不可少的环节。通过本文的介绍，希望大家可以更加方便的对 pilot 进行本地调试和e2e测试，提高开发效率。同时也希望能够有越来越多的开发者加入到 Higress 研发队伍中，为产品的升级迭代贡献一份力量。

[欢迎参与阿里开源贡献👏](https://github.com/alibaba/higress/issues/480)
