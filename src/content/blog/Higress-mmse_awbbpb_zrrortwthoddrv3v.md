---
title: "DeepSeek Harness 全景可观测实践"
description: "DeepSeek Harness 全景可观测实践"
date: "2026-08-18"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：望陶，方羞，钟玟

AI 编码 Agent 真正跑起任务后，问题往往不再是“它有没有完成”，而是：这一轮为什么花了 47 秒？时间卡在模型还是工具？失败后重试了几次？Token 消耗来自主 Agent 还是 Subagent？

DeepSeek Harness（下文简称 DSH）已经保存了很完整的 Session 日志，但要回答耗时、调用关系和成本问题，还需要把事件组织成 Trace 和 Metrics，才能看清问题的全貌。

为了采集 DSH 全景可观测数据，阿里云可观测团队基于开源的 LoongSuite，为 DSH 提供了两条开源可观测路线：一条是可以从 DSH 插件市场独立安装的 `@loongsuite/dsh-plugin`，另一条是 LoongSuite Pilot 内置的 DSH 集成。它们都基于 OpenTelemetry GenAI 语义，数据可以进入用户自己选择的兼容后端，但部署形态和适用场景并不相同。

本文从实践角度出发，为 DeepSeek Harness 提供全景可观测的实践方案。

## 一、先认识 DeepSeek Harness
[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 是 DeepSeek 开源的编码 Agent 运行时。模型负责生成，而 Harness 负责维护会话、组织 ReAct 循环、执行工具调用、管理权限与沙箱，并在需要时派生 Subagent。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048337784-368176af-3dfc-47e5-8d7b-c17c95869630.png)

DSH 以 npm 包 `@deepseek-ai/dsh` 分发，命令行入口是 `dsh`。官方随包提供 Web 和 headless 两种 Profile 模板，也允许用户安装和组合自定义 Profile，例如第三方终端界面。Web 默认监听 `127.0.0.1:3080`。

它的插件体系建立在 Cordis 之上，配置由多层 patch 组合而成。用户层配置支持热更新，因此插件可以在不侵入 Agent 主循环的情况下，订阅原生生命周期并增加新的数据出口。

DSH 本身也保存 append-only 的 Session 事件流，其中包含 Turn、Step、工具调用、模型消息和流式增量；官方还提供了默认关闭的 OTLP Logs 插件。这些日志非常适合审计、回放和事实排查，但日志与 Trace、Metrics 解决的是两类不同问题。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048337789-e0dc5b49-fd2e-4339-8d34-d9ae980f247c.png)

## 二、为什么有日志，还需要 Trace
日志是一串按时间排列的事实，Trace 则是一棵带父子关系和时间区间的调用树。

只有日志时，我们可以知道“发生了什么”；有了 Trace，才更容易直接回答：

+ 一轮任务的总耗时分布在模型、工具和等待的哪些阶段；
+ 哪次工具调用失败，它属于哪一个推理步骤；
+ 同一个 Step 是否触发了模型重试；
+ 每次模型调用的 TTFT、输入 Token、输出 Token 和缓存 Token；
+ 主 Agent 与 Subagent 之间的执行和成本关系；
+ 多轮会话、多个模型乃至多个 Agent 的整体使用情况。

因此，Logs 与 Trace 不是二选一：日志保留完整事件账本，Trace 提供适合性能、错误和成本分析的结构化投影。

## 三、LoongSuite 的两条 DSH 可观测路线
先看两条路线实际经过的数据路径。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048383442-1bef6763-1211-4951-866b-abef78c7d851.png)

两条路线遵循同一套 OpenTelemetry GenAI 语义，但采集位置、数据路径和适用场景不同。

这里有一个容易混淆的地方：Pilot 中的 DSH 插件是 Pilot 采集链路的一部分，负责把 DSH 原生事件落到本地、交给 daemon 继续处理；它不是另一个面向插件市场、可以脱离 Pilot 单独安装和直发 OTLP 的插件。

|  | **LoongSuite Pilot** | **dsh-plugin** |
| --- | :--- | :--- |
| 运行形态 | DSH 注入插件 + 本地 daemon 进程 | DSH 进程内的独立 Cordis 插件 |
| 覆盖范围 | 统一观测约 20 种主流 Agent 集成 | 只观测 DSH |
| Trace 生成位置 | daemon 将原生事件归一化后生成 | 在 DSH 进程内直接生成 |
| 数据出口 | 本地 JSONL、HTTP、SLS、OTLP Trace | OTLP Trace 与 Metric |
| 本地存储 | 默认保留本地数据并提供 Dashboard | 不要求本地事件落盘 |
| 正文策略 | 应显式配置输出策略；原生源日志仍需按敏感数据保护 | Span 正文默认关闭 |
| 适合场景 | 一台机器混用多个 Agent，需要统一账本、审计和团队视图 | 只使用 DSH，已有 OTLP 后端，希望最轻量接入 |
| 仓库 | [alibaba/loongsuite-pilot](https://github.com/alibaba/loongsuite-pilot) | [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) |


### 应该怎么选
+ 同时使用 Claude Code、Codex、Cursor、Qoder、OpenClaw、DSH 等多个 Agent，或者需要本地 Dashboard、长期日志和统一成本视图：优先选择 Pilot。
+ 只使用 DSH，并且已有 Jaeger、Tempo、SigNoz、Langfuse 或 OpenTelemetry Collector：优先选择独立插件，链路最短。
+ 两条路线在技术上可以共存，但如果同时向同一个后端、同一个服务名发送 DSH Trace，会形成两份语义相近的链路。除非是在做对照验证，否则建议只让其中一条路线负责 DSH Trace。

## 四、路线 A：独立插件，两分钟直发 OTLP
[@loongsuite/dsh-plugin](https://www.npmjs.com/package/@loongsuite/dsh-plugin) 已发布正式版 `0.1.0`，并已被 [DSH 社区插件市场](https://awesome-dsh-plugin.com/p/loongsuite/dsh-plugin/)收录。当前版本支持 DSH `>=0.1.0-rc.6 <0.2.0`，要求 Node.js `>=22.19.0`。

DSH 插件按 Profile 安装。观测 Web Profile：

```plain
dsh plugin --profile web add @loongsuite/dsh-plugin
```

如果还要观测 headless 任务，需要再安装到对应 Profile：

```plain
dsh plugin --profile headless add @loongsuite/dsh-plugin
```

最小配置只需要标准 OTLP 地址和服务名：

```plain
export OTEL_SERVICE_NAME=dsh-agent
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318
dsh --profile web
```

公共 endpoint 会自动补成 `/v1/traces` 和 `/v1/metrics`。如果后端只接收 Trace，可以关闭 Metric 导出：

```plain
OTEL_METRICS_EXPORTER=none dsh --profile web
```

插件直接监听 DSH 的 Session、Turn、Step、`llm/stream` 和 Tool 生命周期，在进程内构建 `ENTRY → AGENT → STEP → LLM / TOOL` 调用树。每次真实模型调用都对应独立的 LLM Span，因此同一 Step 中的失败与重试不会被合并。

### 接入 Langfuse
Langfuse 接收 OTLP Trace，但不接收 OTLP Metric。可以在 `$DSH_HOME/profiles/<profile>/cordis.patch.yml` 中显式填写完整 Trace 地址：

```plain
- id: loongsuite-observability
  config:
    traceEndpoint: https://cloud.langfuse.com/api/public/otel/v1/traces
    serviceName: dsh-agent
    headers:
      Authorization: "Basic <Base64(public_key:secret_key)>"
      x-langfuse-ingestion-version: "4"
    captureContent: false
    exportMetrics: false
```

自建 Langfuse 时替换域名即可。鉴权值是 `public_key:secret_key` 的 Base64 结果，不要把真实密钥提交到仓库。

### 接入云监控 2.0
云监控 2.0 - 接入中心 - 应用监控&链路追踪 - OpenTelemetry

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048337909-9f94a510-fbca-450f-bf5b-79de5b6b3c2c.png)

点击获取 LicenseKey， 填入应用名，选择公网，HTTP

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048337767-98c6d4a5-3d38-4167-bbe2-d45e4887e93f.png)

然后配置：

```plain
- id: loongsuite-observability
  config:
    endpoint: https://<project>.<region>.log.aliyuncs.com/apm/trace/opentelemetry
    serviceName: dsh-agent
    headers:
      x-arms-license-key: <License Key>
      x-arms-project: <ARMS Project>
      x-cms-workspace: <云监控工作空间>
    resourceAttributes:
      acs.arms.service.feature: genai_app
    captureContent: false
    exportMetrics: true
```

| 值 | 用途 | 从哪里取 |
| :--- | :--- | :--- |
| OTLP 接入地址 | `endpoint` | 云监控控制台的接入点，形如 `https://<project>.<region>.log.aliyuncs.com/apm/trace/opentelemetry` |
| licenseKey | `x-arms-license-key` | 云监控控制台 → 接入中心 点击获取 |
| project | `x-arms-project` | 就是上面 URL 主机名的**第一段**（`proj-xtrace-xxxxx-<region>`） |
| workspace | `x-cms-workspace` | 形如 `default-cms-<主账号ID>-<region>` |


这里填写不带 Signal 路径的 OTLP 基地址。插件会自动生成 Trace 上报地址 /v1/traces 和 Metric 上报地址 /v1/metrics。云监控 2.0 支持通过 HTTP/Protobuf 接收 Trace 和 Metric，因此这里保持 exportMetrics: true。

### 常用配置项
| 配置项 | 默认值 | 作用 |
| :--- | :--- | :--- |
| `enabled` | `true` | 不卸载插件、直接停止采集 |
| `endpoint` | 未设置 | OTLP/HTTP 基地址，自动补 signal 路径 |
| `traceEndpoint` / <br/>`metricEndpoint` | 未设置 | 完整的单 signal 地址，优先级高于 `endpoint` |
| `headers` | `{}` | 两个导出器共用的请求头 |
| `serviceName` | `OTEL_SERVICE_NAME` 或 `deepseek-harness` | OpenTelemetry `service.name` |
| `resourceAttributes` | `{}` | 额外的 Resource 属性 |
| `captureContent` | `false` | 是否上报提示词、回复、工具参数与结果 |
| `contentMaxChars` | `128000` | 单个正文属性的字符上限 |
| `exportMetrics` | `true` | 是否上报耗时与 token 指标 |
| `debug` | `false` | 通过 DSH logger 输出插件生命周期诊断 |


想先在本地验证，可以使用仓库中的 [Jaeger Quickstart](https://github.com/loongsuite/dsh-plugin/tree/main/examples/quickstart)，不注册任何云服务就能看到第一条 DSH Trace。

### **DSH 原生日志上报**
DSH 原生提供 session-telemetry-otel 插件，将日志以原生 OTel 的方式上报到任意 OTel 的后端，如果想要上报原生 session 日志，可以通过修改 `~/.dsh/cordis.patch.yml` 实现动态开启。

```plain
- id: session-telemetry-otel
  config:
    mode: FEEDBACK_ONLY
    shutdownTimeoutMillis: 5000
    exporter:
      url: 'https://<project>.<region>.log.aliyuncs.com/apm/trace/opentelemetry/v1/logs'
      compression: gzip
      timeoutMillis: 3000
      headers:
        x-arms-license-key: '<License Key>'
        x-arms-project: '<ARMS Project>'
        x-cms-workspace: '<云监控工作空间>'
    processor:
      scheduledDelayMillis: 10000
      maxQueueSize: 2048
      # Equal to maxQueueSize so the shutdown drain is a single batch.
      maxExportBatchSize: 2048
      exportTimeoutMillis: 4000
```

| `mode` | 行为 |
| :--- | :--- |
| `**FULL**` | 每条投影后的记录（含生命周期 ops 记录）立即交给 OTel SDK 上报。**只有这个模式**接受直接调用 `ctx.sessionTelemetry.emit()` |
| `**FEEDBACK_ONLY**` | 平时不上报。每次 `feedback/record` 事件触发时，回放 + 投影 + 脱敏"规范会话日志的后缀"并上报。之后的记录要等下一次 feedback，否则一直留在本地 |
| `**DISABLED**` | **默认值**。不构造 coordinator / provider / processor / exporter，任何记录都不出进程。收到 `feedback/record` 只打一条日志说 telemetry 已禁用、该反馈仅留本地 |


注意：DSH 默认关闭原生日志上报。示例使用 `mode: FEEDBACK_ONLY`：平时不上报，只有在触发 feedback/record 时，才会回放并上报对应的日志后缀；如果改为 mode: FULL，则会持续上报完整 Session 事件，其中可能包含用户输入、模型输出和工具参数等敏感信息。请仅在确认数据安全边界后启用，并妥善保护接入凭证。

## 五、路线 B：用 Pilot 统一观察多个 Agent
[LoongSuite Pilot](https://github.com/alibaba/loongsuite-pilot) 是运行在本机的统一 Agent 可观测采集器。它会发现已经安装的 Agent，为不同产品部署对应的 Hook、插件或数据读取器，再把不同格式归一成统一的 GenAI 事件。

安装后即使不配置远端后端也能使用：Pilot 默认把归一化事件写入本地 JSONL，并提供本地 Dashboard，用于查看多 Agent 的 Token、会话、模型、工具和仓库活跃度。

```plain
curl -fsSL https://loongcollector-community-edition.oss-cn-shanghai.aliyuncs.com/loongsuite-pilot/installer.sh \
  -o /tmp/loongsuite-pilot-installer.sh
bash /tmp/loongsuite-pilot-installer.sh install

loongsuite-pilot status
loongsuite-pilot info
```

Pilot 检测到 DSH 后，会向 `$DSH_HOME/cordis.patch.yml`（默认是 `~/.dsh/cordis.patch.yml`）加入带有归属标记的配置块，加载 Pilot 自带的 DSH 采集插件。这个操作是可逆的，禁用或卸载时只会清理 Pilot 自己管理的部分。

首次启用或重新安装后，需要启动一个新的 DSH 进程。随后，插件把每个 Session 的原生事件写到 Pilot 数据目录，daemon 再完成归一化和输出。

这条链路的价值不只是获得 DSH Trace，而是让 DSH 与其他 Agent 进入同一套查询、成本和审计体系。

### 接入 Langfuse
编辑 `~/.loongsuite-pilot/config.json`：

```plain
{
  "collectTrace": true,
  "serviceName": "team-agents",
  "agents": {
    "dsh": {
      "enabled": true,
      "captureMessageContent": false
    }
  },
  "otlpTrace": {
    "endpoint": "https://cloud.langfuse.com/api/public/otel",
    "headers": {
      "Authorization": "Basic <AUTH_STRING>",
      "x-langfuse-ingestion-version": "4"
    },
    "captureMessageContent": false
  }
}
```

Pilot 会在 endpoint 后自动补 `/v1/traces`。这里同时关闭 Agent 归一化内容和 Trace 正文，适合先用结构、耗时与 Token 数据完成接入验证。

### 接入云监控 2.0
Pilot 提供了 ARMS/CMS 简写配置，会自动构造所需 Header 和 Resource 属性：

```plain
{
  "collectTrace": true,
  "serviceName": "team-agents",
  "agents": {
    "dsh": {
      "enabled": true,
      "captureMessageContent": false
    }
  },
  "cms": {
    "licenseKey": "<License Key>",
    "endpoint": "https://<你的接入点>/v1/traces",
    "workspace": "<云监控工作空间>"
  }
}
```

`otlpTrace` 与 `cms` 可以同时配置，把同一批 Trace 发送到多个后端。

Trace 之外，Pilot 还能把归一化事件作为**日志**发到阿里云 SLS，用于集中检索、大盘、告警和长期存储，以及后续的安全审计。安装时就能带上：

```plain
bash /tmp/loongsuite-pilot-installer.sh install \
  --sls-endpoint "https://cn-hangzhou.log.aliyuncs.com" \
  --sls-project "my-project" \
  --sls-logstore "my-logstore" \
  --sls-api-key "<API Key>"
```

也支持 AK 模式和 WebTracking 模式，详见仓库的 `docs/sls-output.md`。

## 六、配完之后能看到什么
### 在 Langfuse 里
一轮对话就是一棵完整的调用链

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048341222-9b6ffc54-7a6c-4538-9811-e2395d506ec4.png)

能直接读出来的信息：

+ **时间去哪了**：17.42 秒里,第 3、4 步各占 5 秒多，而单次 LLM 调用最长 4.38 秒；
+ **每次模型调用的 TTFT 和 token**：`gen_ai.response.time_to_first_token`、`input_tokens` / `output_tokens` / `cache_read.input_tokens` 都在 span 属性里；
+ **失败与回退**：`web_search` 连续两次 ERROR，模型改用 `bash` 完成任务——错误状态收敛在对应的 TOOL span 上，不用去日志里找；
+ **重试可见**：每一次真实 LLM 调用都是独立 span，同一个 STEP 下能看到多次尝试；
+ **会话维度**：`gen_ai.session.id` 和 `gen_ai.turn.id` 让 Langfuse 的 Sessions 视图能把一个会话的多轮串起来。

### 在云监控 2.0 里
![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/169256735/1787048351718-b04686bf-1c75-4f56-bcb1-5524f42854d8.png)

除此之外，同样的调用链瀑布图，还多了几个 AI 应用专用视图：

+ **链路追踪**：调用树、链路图、时序线、推理轨迹、链路分析多个视角；
+ **会话分析**：按 session 聚合，看一个会话跨多轮的完整轨迹；
+ **模型分析 / 工具分析**：按模型看 p95 延迟、token 与成本，按工具看调用次数、耗时和失败率；
+ **Agent 列表**：一台机器（或一个团队）上有哪些 agent 在跑、各自的量级；
+ **智能分析**：自动分析 agent 轨迹，定位异常步骤、失败原因和性能瓶颈。

如果用 Pilot 采多个 agent，这些视图就是跨 agent 的统一账本；只装插件的话，就是 DSH 单个 agent 的深度视图。

## 七、隐私边界
两条路线都支持关闭正文采集，但默认行为和数据路径不同，不能简单概括成“都不采集正文”。

### 独立插件
+ 默认不把提示词、回复、工具定义、参数和结果写入 Span；
+ 显式配置 `captureContent: false` 可以覆盖进程环境变量，适合强制关闭正文的 Profile；
+ 插件使用私有 TracerProvider 和 MeterProvider，不替换应用的全局 OpenTelemetry Provider；
+ 导出失败会被隔离，不会改变 Agent 的模型调用和工具执行行为。

### LoongSuite Pilot
+ 建议在敏感环境显式设置 `agents.dsh.captureMessageContent: false` 和 `otlpTrace.captureMessageContent: false`；
+ `captureMessageContent` 控制的是归一化输出和 Trace，不会删除 Pilot 为完成转换而保存的 DSH 原生源日志；
+ 源日志包含原生消息与工具数据，应按敏感数据保护。Pilot 会在落盘前过滤名称类似 Token、Secret、Password、Credential、Cookie 和 API Key 的字段，并在 POSIX 系统上把目录和文件权限限制为 `0700` / `0600`；
+ 如果组织不允许任何本地原始内容落盘，应选择独立插件，并保持 `captureContent: false`。

无论选择哪条路线，开启正文前都应确认其中是否可能包含源码、凭据或个人数据，并评估后端的访问控制与留存策略。

## **除了观测还能做什么**
有了这些观测数据之后，可以进一步对 DeepSeek Harness 的过程进行安全审计，行为评估分析，以及针对 DeepSeek Harness 进行进一步优化，这些将在后续的文章中介绍。

## 八、总结
如果只记住一句话：`@loongsuite/dsh-plugin` 解决“怎样最轻量、最原生地看清 DeepSeek Harness”；LoongSuite Pilot 解决“怎样把 DSH 和机器上的其他 Agent 放进同一套可观测体系”。

今天这篇先完成全景观测的介绍和路线选择，后续我们会继续拆开 `@loongsuite/dsh-plugin@0.1.0`：它如何从 DSH 原生生命周期构建 `ENTRY → AGENT → STEP → LLM / TOOL`，如何保留模型重试、处理缓存 Token 与 TTFT，以及如何在默认不采集正文的前提下把 Trace 和 Metric 发送到任意兼容 OTLP 的后端。

## 相关链接
+ [@loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin)：独立安装、进程内直发 OTLP；
+ [DSH 插件市场页面](https://awesome-dsh-plugin.com/p/loongsuite/dsh-plugin/)：通过市场发现和安装；
+ [LoongSuite Pilot](https://github.com/alibaba/loongsuite-pilot)：多 Agent 统一采集、本地 Dashboard 与多种数据出口；
+ [OpenTelemetry GenAI 语义约定](https://github.com/open-telemetry/semantic-conventions-genai)：开放的数据模型与后端生态。


