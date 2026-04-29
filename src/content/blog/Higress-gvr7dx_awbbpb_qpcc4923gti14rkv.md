---
title: "HiClaw 发布 v1.1.0，提供 Kubernetes 集群部署实现，支持 Hermes Worker 运行时"
description: "HiClaw 发布 v1.1.0，提供 Kubernetes 集群部署实现，支持 Hermes Worker 运行时"
date: "2026-04-29"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

HiClaw v1.1.0 新增了 11 项功能，修复了 18 个 Bug，特别感谢 xcaspar, johnlanni, vincent067,cr72589,max-wc,Jingze,YuFeng,luoxiner,googs1025等9位贡献者。

![](https://img.alicdn.com/imgextra/i1/O1CN01RRNCVq1cImG8lkhty_!!6000000003578-2-tps-748-118.png)

### 一、新增功能
#### Kubernetes 原生架构
HiClaw 可运行在 Kubernetes 原生控制平面之上。`hiclaw-controller` 取代了旧版单容器模式，采用标准的 Controller-Reconciler 架构：内嵌轻量级 kube-apiserver + kine 存储 CRD 数据，Controller 将 Worker/Team/Manager/Human CR 协调为容器、Matrix 房间和网关路由。在 Embedded 模式下（`hiclaw-controller` 容器 + 独立 `hiclaw-manager` 容器），无需外部 Kubernetes 集群。对于企业级部署，同一 Controller 可通过官方 Helm Chart（`helm/hiclaw/`）运行在真正的 Kubernetes 集群中，支持 Leader Election 高可用、RBAC、PVC 持久化存储以及 Pod 模板叠加。

#### Hermes Worker 运行时
HiClaw 支持将 `hermes-agent` 作为一等公民的 Worker 运行时，用于自主编程任务。Hermes Worker 具备完整的自主编程 Agent 能力：终端沙箱执行、多文件代码生成、调试、视觉分析以及原生 `mautrix` Matrix 集成 — 全部运行在隔离容器中。与处理对话和工具调用的 agent（Node.js）和 QwenPaw（Python）运行时不同，Hermes 是一个自主编程 Agent，可以独立规划、执行和迭代复杂的软件任务。安装器提供三种运行时的交互式选择，Worker 可原地切换运行时：`hiclaw update worker --runtime hermes`（容器重建，Matrix 账号、房间、凭据和 MinIO 数据保留）。同时支持多 Agent 协作 — Hermes Worker 可以与 agent 和 QwenPaw Worker 一起参与团队项目，支持跨运行时 `m.mentions` 消息投递和无人值守的 YOLO 模式自主执行。

#### 企业级 Kubernetes 部署（Helm Chart）
HiClaw 提供生产级 Helm Chart，用于在 Kubernetes 集群上部署 HiClaw。Chart 将 Tuwunel（Matrix 服务器）、MinIO（对象存储）、Element Web（IM 客户端）和 hiclaw-controller 部署为独立的 Deployment/StatefulSet，配备完整的 Service、RBAC 和 Secret 资源。关键企业特性：

+ Leader Election（高可用）：Controller 支持多副本部署，基于 Lease 的 Leader Election 确保同一时间只有一个实例执行协调，故障时自动切换。
+ Agent Pod 模板：通过 ConfigMap 叠加向 Agent Pod 注入集群特定配置（nodeSelector、tolerations、imagePullSecrets、annotations、sysctls），无需修改 Controller 代码。
+ 多租户支持：可插拔凭证提供者 Sidecar（`hiclaw-credential-provider`）对接网关和存储后端。CRD 中的 per-worker `accessEntries` 限定对象存储路径，支持租户隔离。
+ CRD 化资源管理：`kubectl` / `hiclaw` CLI 可互换操作 — Worker、Team、Human、Manager 均为标准 CRD，支持短名称（`wk`、`tm`、`hm`、`mgr`），`kubectl get workers` 可直接使用。

#### 可插拔网关与存储 Provider
Controller 现在通过 Provider 接口委托网关（Higress）和存储（MinIO/OSS）操作，新增 `hiclaw-credential-provider` Sidecar 负责 STS Token 签发、密钥轮转和 per-worker 访问策略执行。可对接阿里云 OSS、AWS S3 或任意 S3 兼容后端，无需修改 Controller 代码。

#### 多容器架构
Manager 镜像不再打包 Higress、Tuwunel、MinIO 和 Element Web。基础设施服务专属于 `hiclaw-embedded` 镜像（Controller 容器），Manager 是轻量级的纯 Agent 容器（减小约 1.7 GB）。这实现了独立扩缩容、重启隔离和清晰的职责分离。

#### OpenClaw 2026.4.x 升级 & 镜像瘦身 1.7 GB
内置 OpenClaw 引擎升级至 `hiclaw-2026.4.14`，带来 Matrix 私有网络安全修复、结构化 Matrix 调试日志（`HICLAW_MATRIX_DEBUG=1`）以及网关 Control UI 端口统一。`openclaw-base` 基础镜像从 `higress/all-in-one`（~1.79 GB）重置为 `higress/ubuntu:24.04`（~103 MB），所有下游镜像（manager、worker、copaw-worker、hermes-worker）缩减约 1.7 GB。关键兼容性修复包括：设置 `gateway.bind = "lan"` 以支持跨容器访问、`autoJoin = "always"` 确保 Matrix 房间可靠加入、`dangerouslyAllowPrivateNetwork = true` 适配内嵌 homeserver 的 FQDN-over-loopback 方案。

#### 省时迁移
从 v1.0.9 升级时，会自动将 `workers-registry.json` 数据迁移为 CRD 资源。Worker 的运行时、模型、技能、MCP Server 和团队成员关系全部保留。Controller 在首次启动时检测旧版状态并创建对应的 Worker/Team CR。

#### Controller 容器内置 HiClaw CLI，支持免认证直连资源管理
预装 CLI 并自动认证在 Controller 容器内。管理员可通过 `docker exec -it hiclaw-controller hiclaw get workers` 直接查询或管理资源，无需通过 Manager Agent。支持 `create`、`get`、`update`、`delete`、`apply`、`worker wake/sleep/status`、`status`、`version` 等命令。

#### Worker CRD 支持 spec.state 生命周期管理
Worker CRD 现在支持 `spec.state: running | stopped`。设置 `state: stopped`（或 `hiclaw worker sleep`）优雅停止容器并保留所有状态；设置 `state: running`（或 `hiclaw worker wake`）重新启动。Manager 使用此机制实现空闲自动休眠和按需唤醒。

#### 首次启动欢迎提示
全新安装后自动向管理员私信发送欢迎/引导提示，即使在 Embedded 模式下也能正常工作。Controller 在发送前同时验证 Matrix 房间成员身份和 LLM 认证就绪状态（端到端探测），确保 Manager 不会收到无法回复的消息。安装脚本会等待欢迎消息发送完成，提供流畅的首次使用体验。

#### 安装器改进
交互式 Hermes 运行时选择、密钥输入脱敏显示、版本选择、卸载子命令（`hiclaw-install.sh uninstall`）、embedded 镜像缺失时快速失败（不再静默回退到已失效的旧架构路径）。

### 二、Bug 修复
+ 修复 Controller 每 5 分钟协调周期轮转 Matrix 访问令牌和网关密钥，导致 Agent 网关重启和在途消息丢失。令牌现在跨协调周期持久化复用。
+ 修复 YOLO 模式未能跨 Controller→Manager 边界传播（Embedded 模式），导致多 Worker 项目创建卡在等待不可达的管理员确认。
+ 修复 `hiclaw create worker` / `hiclaw apply worker` 忽略管理员安装时设定的默认模型（`HICLAW_DEFAULT_MODEL`），所有新建 Worker 静默使用 `qwen3.5-plus`。
+ 修复 `HICLAW_DEFAULT_WORKER_RUNTIME` 实际不生效 — CRD schema 层级默认值导致 API Server 在 Controller 看到空值之前就填充了 `spec.runtime=openclaw`。移除 CRD 默认值并引入正确的环境变量回退解析。
+ 修复 CoPaw Manager 创建 Worker 后 DM 回复阻塞超过 5 分钟。CoPaw 现在使用 `--no-wait` + 心跳延迟处理实现可靠的确认回复。
+ 修复 Hermes Worker 未加入 Matrix 房间 — Controller 现在在创建房间后执行服务端 `JoinRoom`，不再依赖运行时的自动接受邀请行为。
+ 修复 `hiclaw apply worker --zip` 忽略 `manifest.json` 中的 Worker 运行时，始终默认为 `openclaw`。
+ 修复 Controller 重启时 AI 路由 `allowedConsumers` 被清空，导致 Manager/Worker 临时收到 403 错误。
+ 修复协调过程中 `AGENTS.md` / `SOUL.md` / `HEARTBEAT.md` 的旧版本被 mirror 重新推送，覆盖正确合并的版本。这些文件现已排除在 mirror 之外，由各自的权威写入者管理。
+ 修复 Higress WASM 插件服务未启动，导致 LLM 请求返回后端 404。
+ 修复 openclaw 2026.4.x 升级后 OpenClaw Control UI 在 18888 端口不可访问（端口统一、绑定地址和浏览器认证变更）。
+ 修复 `openclaw` Matrix 通道在 `groupAllowFrom` 更新与消息发送并发时的重启竞态（如 Worker 创建过程中）。
+ 修复 openclaw 2026.4.x 中 `matrix.autoJoin` 默认为 `"off"`，导致 Agent 永远停留在 `invite` 状态不处理房间事件。
+ 修复 `uninstall` 未删除 `hiclaw-controller` 容器，导致 Docker 卷被占用、旧状态跨重装保留。
+ 修复 v1.0.9→CR 迁移时团队 Worker 丢失运行时信息，不论原始运行时均静默重启为 `openclaw`。
+ 修复 Hermes Worker 多 Agent 协作：跨运行时消息的出站 `m.mentions.user_ids`、容器内自主执行的 `HERMES_YOLO_MODE=1`、抑制噪音的 `MATRIX_HOME_CHANNEL=disabled`。
+ 修复 Manager `openclaw.json` 使用 `userId=@default` 而非 `userId=@manager`，静默丢弃所有管理员 DM 消息。
+ 修复 Manager 镜像体积：将 `openclaw-base` 从 `higress/all-in-one:2.2.1`（~1.79 GB）重新基于 `higress/ubuntu:24.04`（~103 MB），所有下游镜像缩小约 1.7 GB。


