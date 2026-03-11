---
title: "HiClaw Star 激增，全网征集实践教程"
description: "HiClaw Star 激增，全网征集实践教程"
date: "2026-03-10"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸、澄潭、计缘

![](https://img.alicdn.com/imgextra/i2/O1CN017IDGN01yWRcFYtDLU_!!6000000006586-2-tps-1382-880.png)

HiClaw 上周开源后，Star 迅速飙涨，同时，多样化的安装环境和多层次的使用场景也带来了大量的咨询。在此，感谢各位开发者提供的建议，我们迅速整理了 FAQ，并已发布到 GitHub，方便大家检索。同时，我们新增两个自动化服务工具：



1、有问题，提 issue：每天10点和18点，HiClaw GitHub 会有一只龙虾，对所有 issue 进行答复。

2、有问题，艾特机器人：推荐加入钉群(167365014834)，钉群服务机器人已经上线，提供自助答疑服务。

![](https://img.alicdn.com/imgextra/i4/O1CN01dk5Jfw1g19TH3fGkH_!!6000000004081-2-tps-396-793.png)

# 一、项目选型
_**1、HiClaw 和其他 xxClaw 有哪些不同？**_

HiClaw 并不和其他 xxClaw 对标，HiClaw 是一个多 Agent 协作系统。

+ 每个 Claw 支持用户自定义，可以是 OpenClaw，也可以是 Copaw、NanoClaw、ZeroClaw 或是企业自建的 Agent，目前预装的是 OpenClaw。
+ 引入了 Manger Claw 的角色，不用真人去管理每个干活的 Worker Claw，节省管理成本。
+ 使用 Element IM 客户端+Tuwunel IM 服务器（均基于 Matrix 实时通信协议），通信协议和原生的不同，节省钉钉、飞书 IM 的接入和企业内的审批成本，方便用户快速体验在 IM 的交互环境中体验模型服务的“爽感”，同时支持以 OpenClaw 原生的方式接入 IM。
+ 引入 MinIO 共享文件系统，用于 Agent 之间的信息共享，真人之间的协作，共同记忆也是基于共享文件系统。
+ 引入 Higress AI Gateway，入口和各类凭证风险降低了，减少了用户对原生龙虾在安全上的顾虑。

![](https://img.alicdn.com/imgextra/i1/O1CN01lTePRC20tv9JPC5yz_!!6000000006908-2-tps-957-795.png)



_**2、HiClaw 能用百炼 Coding Plan 么？每个龙虾支持使用不同的模型服务么？**_

HiClaw 配置过程中，模型服务接入的默认选型是百炼 Coding Plan。每个 Worker 龙虾的模型服务，可以通过 Manager 龙虾来进行分配，也可以在 Higress 控制台进行配置。

![](https://img.alicdn.com/imgextra/i1/O1CN01p7w0mz1TAEJcJ3cfk_!!6000000002341-2-tps-896-534.png)



_**3、能用于企业内的数字员工么？即企业里每个员工一套 Claw 系统，使用本地存储或者集中存储。**_

可以的，但是部署方式需要企业自行解决；后续会和阿里云的云产品，例如函数计算 FC 合作，推出云端的企业级部署方案。



_**4、我不想用 Element IM 客户端，直接接钉钉或飞书，可以吗？**_

可以的，<font style="color:rgb(0, 0, 0);">安装目录下有 hiclaw-manager，可以手动配 openclaw.json，跟 OpenClaw 的接入方式是一样的。</font>

<font style="color:rgb(0, 0, 0);"></font>

_**<font style="color:rgb(0, 0, 0);">5、Manager 和 Workers 之间，Worker 和 Worker 之间，环境是隔离的吗？</font>**_

<font style="color:rgb(0, 0, 0);">是的，HiClaw Manager 和 Workers 均各自运行在完全隔离的容器里，不持有任何真实凭证，这样做的好处是：</font>

+ <font style="color:rgb(0, 0, 0);">Skills 隔离，避免混用。</font>
+ <font style="color:rgb(0, 0, 0);">Memory 隔离，避免记忆混淆。</font>
+ <font style="color:rgb(0, 0, 0);">放心 Worker 放心地从上万个公开技能库里按需获取能力，Skills 能延展 HiClaw 的使用场景。</font>

<font style="color:rgb(0, 0, 0);"></font>

_**<font style="color:rgb(0, 0, 0);">6、我已经安装并在使用 OpenClaw，有平滑迁移方案么？</font>**_

<font style="color:rgb(0, 0, 0);">因为 HiClaw 的定位并不是对标或替换 OpenClaw，是不冲突的，不存在迁移方案。此外，用户安装 HiClaw 后，基于 HiClaw 的 Manager + Workers 的协作网络，可以将原有的 OpenClaw 作为 Worker 纳管进来。</font>

<font style="color:rgb(0, 0, 0);"></font>

_**<font style="color:rgb(0, 0, 0);">7、OpenClaw 上安装的 Skills，以及插件，HiClaw 是否支持？</font>**_

<font style="color:rgb(0, 0, 0);">插件和 Skills 都支持，进入 Manager 容器执行 OpenClaw 的插件和 Skills 配置命令就可以。</font><font style="color:rgba(0, 0, 0, 0.9);">但要暴露端口给宿主机的，考虑安全原因，暂不支持。</font>



_**<font style="color:rgb(0, 0, 0);">8、安装 HiClaw，有哪些环境要求？</font>**_

+ <font style="color:rgb(0, 0, 0);">支持 Mac、Window 和 Linux 环境，其中，Window 环境要求是 PowerShell 7+。（推荐使用 Mac）</font>
+ <font style="color:rgb(0, 0, 0);">下载并安装 Docker Desktop（Windows/macOS）或 Docker Engine（Linux）或 Podman Desktop（替代方案）。</font>
+ <font style="color:rgb(0, 0, 0);">最低 2C GB 内存。如果希望部署较多 Worker 体验更强大的 Agent Teams 能力，建议 4C8GB 内存。OpenClaw 内存占用较高，Docker Desktop 用户可在 Settings → Resources 中调整。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01BHjGeG1GaiDFqxg0J_!!6000000000639-2-tps-2352-804.png)

# 二、项目实操
_1_**、如何查看当前 HiClaw 版本？**

执行以下命令查看已安装的版本：

```bash
docker exec hiclaw-manager cat /opt/hiclaw/agent/.builtin-version
```



重新执行安装脚本，即可原地升级，数据和配置会保留。默认升级到最新版本。

```bash
HICLAW_VERSION=0.2.0 bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```



_**2、Windows 下执行安装脚本，出现闪退？**_

如果在 Windows 下执行 PowerShell 安装脚本后窗口立即关闭，请先确认是否已安装 Docker Desktop。如果已安装，请确认 Docker Desktop 是否已启动并完全加载，脚本需要连接 Docker 守护进程，Docker Desktop 未运行时会直接失败退出。



_**3、Manager Agent 启动超时或失败？**_

安装完成后如果 Manager Agent 迟迟没有响应，进容器查看日志：

```bash
docker exec -it hiclaw-manager cat /var/log/hiclaw/manager-agent.log
```

****

**情况一：日志中有进程退出记录**

可能是 Docker VM 分配的内存不足。建议将内存调整到 4GB 以上：Docker Desktop → Settings → Resources → Memory。调整后重新执行安装命令。

****

**情况二：日志中没有进程退出，但某些组件起不来**

可能是配置脏数据导致的。建议到原安装目录重新执行安装命令，选择**删除重装**：

```bash
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

安装脚本检测到已有安装时会询问处理方式，选择删除后重装即可清除脏数据。



**情况三：Mac M 系列芯片 + 低版本 Docker**

如果你使用的是搭载 Apple M 系列芯片（M1/M2/M3/M4）的 Mac，且 Docker Desktop 版本低于 4.39.0，Manager Agent 可能无法正常启动。

解决方案：升级 Docker Desktop 到 4.39.0 或更高版本。如果你使用的是 Podman，则不受此问题影响。

<font style="color:rgb(240, 246, 252);background-color:rgb(13, 17, 23);"></font>

_**4、局域网其他电脑如何访问 Web 端？**_

**访问 Element Web**

在局域网其他电脑的浏览器中输入：

```plain
http://<局域网IP>:18088
```

浏览器可能会提示"不安全"或"不支持"，忽略提示直接点 Continue 进入即可。

****

**修改 Matrix Server 地址**

默认配置的 Matrix Server 域名解析到 `localhost`，在其他电脑上无法连通。登录 Element Web 时，需要将 Matrix Server 地址改为：

```plain
http://<局域网IP>:18080
```

例如局域网 IP 是 `192.168.1.100`，则填写 `http://192.168.1.100:18080`。



_**5、本地访问 Matrix 服务器不通**_

![](https://img.alicdn.com/imgextra/i2/O1CN01C6g3V31FUTCOKkOJ8_!!6000000000490-2-tps-1820-984.png)官方教程提供的房间是走本地 `127.0.0.1`，这是本地回环网卡。`*-local.hiclaw.io` 域名默认解析到 `127.0.0.1`，开启代理后请求会被转发到代理服务器，无法到达本地服务。



请检查浏览器或系统是否开启了代理。关闭代理，或将 `*-local.hiclaw.io` / `127.0.0.1` 加入代理的绕过列表即可。



_**6、如何主动指挥 Worker**_

创建 Worker 后，Manager 会自动将你和 Worker 拉入同一个群聊房间。在群聊中，必须 **@ Worker** 才能让它响应，没有 @ 的消息会被忽略。在 Element 等客户端中，输入 `@` 后再输入 Worker 昵称的首字母，才会出现补全列表，选择对应用户即可。



也可以点击 Worker 的头像，进入私聊。私聊中不需要 @，每条消息都会触发 Worker 响应。但注意：私聊对 Manager 不可见，Manager 不会感知到这部分对话内容。



_**7、如何切换 Manager 的模型**_

**让 Manager 切换（推荐）**

OpenClaw 需要在配置中设置模型的上下文窗口大小（`contextWindow`）。HiClaw 默认使用 qwen3.5-plus 的 1M token 窗口。如果切换到窗口更小的模型但没有更新这个设置，当对话接近窗口上限时，OpenClaw 不知道何时压缩上下文，可能导致 session 无法使用。



为此，HiClaw 给 Manager 配备了模型切换技能，会根据模型名自动修改 OpenClaw 配置中的 `contextWindow` 和 `maxTokens`。



切换步骤

在 Higress 控制台配置好模型供应商后，直接告诉 Manager 模型名即可："切换到 `claude-3-5-sonnet`"Manager 会使用模型切换技能完成配置更新。



如果切换没有成功？可能是 Manager 没有自动调用模型切换技能。可以主动告诉它："用模型切换技能帮我切换到 `claude-3-5-sonnet`"。



**让 Higress AI 控制台切换**

单供应商情况

在 Higress 控制台，将 `default-ai-route` 这个路由配置到你的模型供应商。然后直接告诉 Manager 你想使用的具体模型名（例如 `qwen3.5-plus`）。Manager 会先用该模型名发起一次联通测试，测试通过后自动完成切换。



多供应商情况

在 Higress 控制台，创建多条 AI 路由，每条路由配置不同的模型名匹配规则（前缀或正则），分别指向对应的供应商。之后的流程与单供应商完全一致——告诉 Manager 模型名，它会自动完成测试和切换。

参考：[Higress AI 快速开始 — 控制台配置</font>](https://higress.ai/docs/ai/quick-start#%E6%8E%A7%E5%88%B6%E5%8F%B0%E9%85%8D%E7%BD%AE)



_**8、如何切换 Worker 的模型**_

流程与切换 Manager 模型类似，两种情况都由 Manager 代为操作。



**创建时指定**：在让 Manager 创建 Worker 时直接说明模型，例如"帮我创建一个名为 alice 的 Worker，使用 `qwen3.5-plus`"。



**创建后修改**：随时告诉 Manager 切换某个 Worker 的模型，例如"把 alice 的模型切换为 `claude-3-5-sonnet`"，Manager 会自动更新该 Worker 的配置。



切换前请确保 Higress 的 `default-ai-route` 已配置好目标模型名到对应供应商的路由。



_**9、HiClaw 支持发送和接收文件吗？**_

**接收你发送的文件**：支持。在 Element Web 中点击附件按钮上传文件，Manager 或 Worker 会收到 Matrix 媒体消息并可以读取其内容。



**向你发送文件**：支持。当你要求 Manager（或 Worker）发送文件时——例如任务产物、生成的报告或它能访问的任意文件——它会将文件上传到 Matrix 媒体服务器，并以可下载附件的形式发送到房间中，你在 Element Web 里点击即可下载。



_**10、为什么 Manager/Worker 一直显示"输入中"？**_

这是正常现象，说明底层的 OpenClaw Agent 引擎正在执行任务。HiClaw 设定的单次任务超时时间为 30 分钟，Agent 最长会持续执行 30 分钟。



如果想查看 Agent 的执行细节，可以进入 Manager 或 Worker 容器，查看 session 日志：

```bash
# Manager
docker exec -it hiclaw-manager ls .openclaw/agents/main/sessions/

# Worker（将 <worker-name> 替换为实际容器名）
docker exec -it <worker-name> ls .openclaw/agents/main/sessions/
```



该目录下的 `.jsonl` 文件由 OpenClaw 实时写入，记录了完整的 Agent 执行过程，包括 LLM 调用、工具使用、推理步骤等。



后续，我们将上线 Team 看板，用于查看日志和对话。



_**11、在房间里和 Manager 聊天没有响应或返回错误状态码**_

如果 Manager 没有响应，或者返回了 404、503 等状态码，查看 Higress AI 网关日志：

```bash
docker exec -it hiclaw-manager cat /var/log/hiclaw/higress-gateway.log
```



在日志中搜索对应的状态码，常见原因：

+ **503**：容器内网络环境问题，导致外网 LLM 服务不可达。
+ **404**：模型名称填写有误。



要判断是后端服务出错还是 Higress 自身配置问题，查看日志中的 `upstream_host` 字段：如果该字段有值，说明请求已到达后端，异常状态码是由上游服务返回的；如果为空，说明 Higress 本身无法路由该请求。



_**12、HTTP 401: invalid access token or token expired**_

检查 HiClaw 安装过程中，<font style="color:#000000;">API 联通性是否通过。未通过如下：</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01ZOfXTc1sQ8Sv17V9m_!!6000000005760-2-tps-2332-204.png)



若出现以上情况，需要检查模型 API，我们这里以百炼 Coding Plan 为例：

![](https://img.alicdn.com/imgextra/i2/O1CN01xbDuSm1jpwElt5xdI_!!6000000004598-2-tps-2244-424.png)

通过的效果如下，通过后不会再报 401。

![](https://img.alicdn.com/imgextra/i4/O1CN01bxfHWc1H8bWPLMthu_!!6000000000713-2-tps-812-105.png)





_**13、Manager/Worker 不回复消息怎么办**_

_**如果给 Manager 或 Worker 发送消息后没有回复，可以按以下步骤排查：**_



1. 检查是否正在工作

_**如果一直不回复，且没有显示"输入中"，绝大多数原因是 Agent 正在工作。**_

_OpenClaw 限制"输入中"状态最多持续 2 分钟，工作超过 2 分钟就不会再显示"输入中"了。_

_如何确认消息已入队列：_

_发送消息后，查看消息右边是否有一个 m 小图标_  
_这个图标表示 Manager 已读_  
_出现这个图标就说明消息已入队列，会在当前任务执行完后继续处理该消息_



> IM异步协作的方式是OpenClaw的精髓所在，不用一直盯着它干活，带着耳机，听到滴滴的声音，说明他干完活跟你汇报了，去看一眼就好
>



2. 检查聊天环境

**私聊 vs 群聊**_**：**_

+ _**如果是**_**私聊**_**（只有你和一个 Agent），每条消息都会触发 Agent 响应**_
+ _**如果是 2 人以上的房间（群聊），必须 @ Agent才能让它响应，没有 @ 的消息会被忽略**_



3. 检查 Session 状态

_**可能是 OpenClaw session 卡住了。进入 Manager 或 Worker 容器，使用 OpenClaw TUI 查看：**_

```bash
# Manager
docker exec -it hiclaw-manager openclaw tui

# Worker（将 <worker-name> 替换为实际容器名）
docker exec -it <worker-name> openclaw tui
```

_**进入 TUI 后：**_

1. _**输入 _` /sessions `_ 查看所有 session**_
2. _**切换到对应聊天记录的 session**_
3. _**尝试对话，观察是否有报错**_

_**如果 session 确实卡住了，可以尝试用`/reset` 重置 session，看是否恢复正常。**_



4. 检查模型配置

_**可能是模型的上下文窗口大小配置不正确，导致窗口耗尽前没有及时压缩。请参考 _[_如何切换 Manager 的模型_](https://aliyuque.antfin.com/aliwaregrowth/gk57gu/uo4esekhgt3t4cle#如何切换-manager-的模型)_** 和 _[_**如何切换 Worker 的模型**_](https://aliyuque.antfin.com/aliwaregrowth/gk57gu/uo4esekhgt3t4cle#如何切换-worker-的模型)_ **进行正确配置。**_



_**14、如何对接飞书/钉钉/企业微信/Discord/Telegram**_

HiClaw Manager 基于 OpenClaw 构建，原生支持多种消息渠道。要对接其他渠道：



**方法一：直接修改配置**

Manager 的工作目录是宿主机上的 `~/hiclaw-manager`，里面的 `openclaw.json` 可以直接编辑。参照 [OpenClaw 渠道文档](https://docs.openclaw.ai) 中各平台的配置格式进行配置。



修改后重启 Manager 容器使配置生效：

```bash
docker restart hiclaw-manager
```

****

**方法二：让 Manager 学习你现有的 OpenClaw 配置**

如果你已经在其他地方使用 OpenClaw 接入了其他渠道，可以让 Manager 读取你现有的配置：

+ **告诉 Manager 文件位置**：在 Element Web 中告诉 Manager 你的 OpenClaw 配置文件路径（例如 "我的 OpenClaw 配置在 `/home/user/my-openclaw.json`"），Manager 会直接读取。
+ **通过附件发送**：在 Element Web 或其他 Matrix 客户端中，把配置文件作为附件上传发送给 Manager，Manager 会接收并读取。



然后让 Manager 帮你在它的配置里添加相同的渠道。

# 三、近期的 Roadmap
### 1、轻量级 Worker 运行时
目前 Worker 基于 OpenClaw 运行，内存占用较高（约 500MB+）。我们计划支持更轻量的 Agent 运行时：

+ **CoPaw（最新代码已支持）**：AgentScope 团队开发的轻量 Agent 运行时，支持本地模型（llama.cpp/MLX/Ollama）和多渠道接入，内存占用比 OpenClaw 更低
+ **ZeroClaw**：基于 Rust 的超轻量运行时，3.4MB 二进制，冷启动 <10ms，专为边缘和资源受限环境设计
+ **NanoClaw**：极简 OpenClaw 替代品，<4000 行代码，基于容器隔离，使用 Anthropic Agents SDK



目标：将单 Worker 内存占用从 ~500MB 降至 <100MB，在相同硬件上支持更多 Worker。

### 2、Team 管理中心
开箱即用的可视化控制台，用于观察和管控整个 Agent Team：

+ **实时观测**：每个 Agent 的工作过程细节可视化（对话、工具调用、思考过程）
+ **主动打断**：发现问题时可随时打断指定 Agent 的工作，接管或调整方向
+ **任务时间线**：谁在什么时候做了什么，完整历史记录
+ **资源监控**：每个 Worker 的 CPU/内存使用情况



目标：让 Agent Teams 像人类团队一样透明可控——没有黑盒。

### 3、通用 MCP 服务支持
目前 Worker 通过 Higress MCP 网关 + mcporter 访问 GitHub，只需使用 Higress 签发的 token，真实的 GitHub PAT 永远不会暴露给 Worker。这个安全的模式可以扩展到任意 MCP 服务：

+ **预置 MCP 连接器**：GitHub、Slack、Notion、Linear 等常用服务
+ **自定义 MCP 集成**：接入自己的 MCP 服务，由 Higress 统一管理认证
+ **细粒度权限控制**：Manager 可按 Worker 授予/撤销 MCP 服务访问权限



目标：任何支持 MCP 协议的工具都能安全地暴露给 Worker，凭证零泄露。



# 四、征集实践教程
由于多样化的安装环境和多层次的使用场景，带来了大量的咨询。特此征集文字类和视频类的教程。



安装和部署环境，可任选：

+ <font style="color:rgb(0, 0, 0);">Mac、Window 或 Linux 环境</font>
+ <font style="color:rgb(0, 0, 0);">Docker Desktop、Docker Engine（Linux）或 Podman Desktop</font>
+ <font style="color:rgb(0, 0, 0);">本地 PC 部署、本地盒子部署、云端部署</font>
+ <font style="color:rgb(0, 0, 0);">本地访问、公网访问</font>



应用场景，可任选，不限于以下场景：项目协作、社交媒体托管、软件开发、内容创作、项目管理、研究和学习、情感陪护等。



教程入选后，您将获得：

+ 社区 Contributor 身份和纪念品
+ 流量推广，包括线上媒体和 HiClaw 线下沙龙的受邀分享嘉宾
+ 推荐给 DataWhale 和极客时间等主流 AI 媒体



联系方式：微信（max_0928）或钉钉（如下）

![](https://img.alicdn.com/imgextra/i1/O1CN01n11OrE1wRHvRJCV3z_!!6000000006304-2-tps-517-525.png)




