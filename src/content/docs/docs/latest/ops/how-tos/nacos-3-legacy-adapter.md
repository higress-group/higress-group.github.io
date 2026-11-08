---
title: Nacos 3 兼容（legacy adapter）
keywords: [ops,nacos,mcp,legacy,adapter,troubleshooting]
description: 使用 Nacos 官方 nacos-api-legacy-adapter 恢复 v1/v2 HTTP API，解决 Higress MCP 动态发现请求 /nacos/v1/cs/configs 返回 404 的问题
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/ai/src/content/docs/docs/latest/ops/how-tos/nacos-3-legacy-adapter.md
---

# Nacos 3 兼容（legacy adapter）

> **说明**：本文记录的是 Nacos 侧的临时兼容方案，不是 Higress 的代码修复。Nacos 3 已移除 v1/v2 HTTP API，而 Higress 2.2.5 内置的 `nacos-sdk-go v2.3.5` 仍使用这些 API。官方 `nacos-api-legacy-adapter` 可以重新提供兼容端点；在 Higress 原生支持 Nacos 3 API 之前，可作为过渡方案。相关进展见 [higress-group/higress#5217](https://github.com/higress-group/higress/issues/5217)。

## 问题现象

典型组合为 Higress 2.2.5 + Nacos 3.2.4：

- Nacos 3.2.0 起，v1/v2 HTTP API 已从主发行包移除。在 Nacos 3.2.4 上，Higress 请求 `GET /nacos/v1/cs/configs` 会返回 HTTP 404。
- Higress Controller 的 `discovery` 容器日志出现 `McpServer` 相关错误，例如 `List mcp server configs ... error` 或 `Get mcp server ... error`。
- Higress Console 中基于 Nacos 3 的 MCP Server 动态发现无法工作：新注册或更新的 MCP Server 不会出现在列表中，相关路由也不会更新。
- 静态配置的 MCP Server 不受这条 Nacos 配置读取链路影响；问题只出现在依赖 Nacos 动态发现的部分。

如果日志中是 401/403，应优先检查 Nacos 鉴权；本文针对的是 HTTP 404。

## 根因

Nacos 3 的服务端已切换到 v3 API，但 Higress 2.2.5 使用的 `nacos-sdk-go v2.3.5` 仍通过 v1 HTTP API 读取 MCP 配置。`/nacos/v1/cs/configs` 在 Nacos 3 中不存在，因此 SDK 的配置查询和监听都会失败。

[`nacos-api-legacy-adapter`](https://github.com/nacos-group/nacos-api-legacy-adapter) 是 Nacos 官方的可插拔兼容层：JAR 出现在 Nacos 运行期 classpath 时，它会自动注册 v1/v2 控制器，重新提供旧版 HTTP 端点。它不修改 Higress，也不改变 Nacos v3 API。

## 解决方案

### 1. 获取 adapter JAR

Nacos 3.2.x 可以直接使用官方 `3.2.0.2` release 中的 `nacos-api-legacy-adapter-3.2.0.jar`：

```bash
curl -fL -o /tmp/nacos-api-legacy-adapter-3.2.0.jar \
  https://github.com/nacos-group/nacos-api-legacy-adapter/releases/download/3.2.0.2/nacos-api-legacy-adapter-3.2.0.jar

sha256sum /tmp/nacos-api-legacy-adapter-3.2.0.jar
# 2779587cbb96698c122c03115ab8265ae6bd9221634fad2dde198384e678fa89
```

该 release 的 POM 声明 `nacos.version` 为 `[3.2.0, 4.0.0)`，可用于 Nacos 3.2.x。其他 3.x 版本请按 [adapter README](https://github.com/nacos-group/nacos-api-legacy-adapter/blob/main/README_CN.md) 使用与目标 Nacos 版本对齐的依赖重新构建，并在预发环境验证；不要混用不同版本的 adapter。

### 2. 部署 adapter

adapter 必须出现在 Nacos Server 进程的运行期 classpath 中。不同部署方式的放置位置如下：

| 部署方式 | 做法 |
| --- | --- |
| 压缩包 / 虚拟机 | 将 JAR 放入 `${nacos.home}/plugins/`。Nacos 3.2.4 的 `startup.sh` 默认把 `${BASE_DIR}/plugins` 加入 `-Dloader.path`。 |
| 官方 Docker 镜像 | 将 JAR 所在目录挂载到容器内，并通过 `NACOS_EXT_PLUGIN_DIRS` 把该目录加入 `loader.path`。例如挂载到 `/home/nacos/ext-plugins`，设置 `NACOS_EXT_PLUGIN_DIRS=/home/nacos/ext-plugins`。 |
| Kubernetes | 使用自定义镜像把 JAR 复制到 `/home/nacos/plugins/`，或用 volume 将该 JAR 挂载到 `${nacos.home}/plugins/`；Helm values 以所用 chart 为准。 |

例如，在现有 Nacos Docker 启动参数中追加：

```bash
-e NACOS_EXT_PLUGIN_DIRS=/home/nacos/ext-plugins \
-v /opt/nacos/plugins:/home/nacos/ext-plugins \
```

部署时注意：

- 集群部署需要在**每个 Nacos 节点**安装同一个 JAR，然后逐个滚动重启；否则请求落到未安装的节点时仍会返回 404。
- 确认 JAR 对 Nacos 运行用户可读。
- adapter 不会新增监听端口，它复用 Nacos Server 现有的 HTTP 端口（默认 `8848`）和 context path（默认 `/nacos`）。

### 3. 检查 Nacos 配置和网络

adapter 恢复的 OPEN_API 端点受 `nacos.core.api.compatibility.client.enabled` 控制，该值默认为 `true`。如果部署中显式设置成了 `false`，需要改回：

```properties
nacos.core.api.compatibility.client.enabled=true
```

> `nacos.core.api.compatibility.enabled` 不会恢复 v1/v2 HTTP API。Nacos 官方文档明确说明它不能替代 legacy adapter，不要把这个开关当作本问题的修复方案。

网络方面：

- Higress 的 Nacos 服务来源应指向 Nacos Server 的 HTTP 端口 `8848`，而不是 Console 的 `8080` 端口。
- 确认 Higress Controller 到 Nacos `8848` 的网络策略、防火墙和 DNS 均正常。
- 如果 Nacos 开启了鉴权，需在 Higress 的 Nacos 服务来源中继续提供有效凭据（用户名/密码或 `authSecretName`），adapter 仍受 Nacos 鉴权保护。

### 4. 验证

先验证 adapter 是否加载。`/v1/ns/operator/metrics` 是 adapter 提供的 OPEN_API 端点：

```bash
curl -i 'http://<nacos-host>:8848/nacos/v1/ns/operator/metrics'
```

期望返回 HTTP 200，响应体至少包含类似 `{"status":"UP"}` 的内容。如果返回 404，说明 adapter 没有加载；如果返回 410，检查 `nacos.core.api.compatibility.client.enabled` 是否被设为 `false`。

再验证 Higress 实际使用的配置读取接口。将 `dataId`、`group` 和 `tenant` 替换为你的 MCP Server 配置：

```bash
curl -i 'http://<nacos-host>:8848/nacos/v1/cs/configs?dataId=<mcp-server-id>-mcp-versions.json&group=mcp-server-versions&tenant=public'
```

可能的结果：

- HTTP 200：adapter 正常，且配置存在。
- HTTP 404 且响应体为 `config data not exist`：路由已恢复，但 `dataId`/`group`/`tenant` 不匹配。
- HTTP 404 且没有 Nacos 业务错误体：adapter 仍未加载，或请求没有到达 Nacos。

最后检查 Higress Controller 日志：

```bash
kubectl logs -n higress-system <higress-controller-pod> -c discovery --tail=200
```

修复后应能看到类似 `Get mcp server(id: ...) version config success` 的日志，并且不再持续出现 `/nacos/v1/cs/configs` 的 404。等待一个刷新周期后，Nacos 中的 MCP Server 应能在 Higress Console 中被发现。

## 限制与升级路径

- **这是过渡方案，不是代码修复。** adapter 只恢复旧版 HTTP API，Higress 仍然使用旧的 Nacos SDK 调用方式。
- adapter 官方 README 明确说明该模块仅用于临时兼容，不保证未来 Nacos 版本继续支持。升级 Nacos 后需要重新验证，必要时重新构建 adapter。
- adapter 不恢复 Nacos 3.3 已移除的数据迁移逻辑，也不等同于回退到 Nacos 2.x；历史数据迁移仍需按 Nacos 升级文档单独处理。
- 恢复 v1/v2 端点会增加旧 API 表面。生产环境应保持 Nacos 鉴权，并限制 Nacos HTTP 端口的网络访问。
- 升级路径：当 Higress 发布原生支持 Nacos 3 API 的版本后，移除 adapter JAR 并重启 Nacos，然后按正常流程升级 Higress。请关注 [higress-group/higress#5217](https://github.com/higress-group/higress/issues/5217) 的进展。
- 如果无法接受 adapter，另一种选择是继续使用 Nacos 2.x，直到 Higress 完成原生兼容。

## 相关链接

- [Nacos legacy adapter 仓库（中文 README）](https://github.com/nacos-group/nacos-api-legacy-adapter/blob/main/README_CN.md)
- [Nacos legacy adapter 3.2.0.2 release](https://github.com/nacos-group/nacos-api-legacy-adapter/releases/tag/3.2.0.2)
- [Nacos 升级手册：客户端兼容性](https://nacos.io/docs/latest/manual/admin/upgrading/)
- [Nacos 兼容与废弃说明](https://nacos.io/docs/latest/manual/admin/compatibility-and-deprecation/)
- [Nacos 系统参数：兼容与迁移参数](https://nacos.io/docs/latest/manual/admin/system-configurations/)
- [Nacos Docker：NACOS_EXT_PLUGIN_DIRS](https://github.com/nacos-group/nacos-docker/blob/v3.2.4/README.md)
- [Higress McpBridge 配置说明](/docs/latest/user/mcp-bridge/)
- [Higress issue #5217](https://github.com/higress-group/higress/issues/5217)
