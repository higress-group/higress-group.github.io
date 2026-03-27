---
title: "OpenClaw 接入 GLM5/MiniMax M2.5 简易教程，来了"
description: "OpenClaw 接入 GLM5/MiniMax M2.5 简易教程，来了"
date: "2026-02-13"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---



最近 AI 圈热闹得有点过分。

2 月 11 日，智谱发布 GLM-5：744B 总参数、激活仅 44B 的 MoE 架构，202K 上下文窗口，Coding 与 Agent 能力达到开源 SOTA，官方定位是"Opus 4.6 与 GPT-5.3 的国产开源平替"。

一天后，MiniMax 发布 M2.5：SWE-Bench Verified 跑到 80.2%，Multi-SWE-Bench 51.3% 拿下第一，成本却只有 Opus 的 1/10——100 TPS 连续工作一小时只需 1 美金。官方说这是"第一个不需要考虑使用成本可以无限使用的前沿模型"。

国产大模型卷到这个程度，作为用户本该是好事。但实际上，我却有点焦虑。

## OpenClaw 的"模型支持困境"

我想在 OpenClaw 中尝试这些新模型，结果报错：

```
Error: Unknown model: zai/glm-5
```

查阅后发现，OpenClaw 的各个 provider 默认模型基本都是硬编码的。社区已经有人提了相关 issue，但维护者忙于应对各种 issue 和 PR，迟迟没有支持。

问题来了：

- GLM-5 不支持
- MiniMax M2.5 不支持
- 如果 Qwen/DeepSeek 发新模型，大概率还是不支持

**新模型出来后，无法通过配置支持，必须等官方发版升级**——这就是痛点所在。

而现在的模型迭代速度是什么节奏？MiniMax 在 108 天内连发 M2、M2.1、M2.5 三个版本，平均一个多月一次。智谱、DeepSeek、Qwen 也差不多。如果每次都要等 OpenClaw 官方跟进，黄花菜都凉了。

## Higress：用 AI 网关解决模型接入难题

对比之下，Higress 的设计思路完全不同：**模型配置与网关解耦，新增模型无需升级，热更新即时生效**。

### 核心优势

1. **热更新支持**：新增模型/供应商后，配置热加载，无需重启网关
2. **任意模型支持**：只要是 OpenAI 兼容 API，就能接入
3. **预配置常用供应商**：插件内置了智谱、MiniMax、Kimi、DeepSeek、Qwen 等

### 一句话完成配置

通过 Higress 的 OpenClaw Integration Skill，整个接入过程只需要跟 OpenClaw 说一句话：

```
帮我下载并安装这个技能：https://higress.cn/skills/higress-openclaw-integration.zip
然后使用这个技能帮我配置 Higress AI Gateway
```

OpenClaw 会自动：
1. 下载并安装 Higress Integration Skill
2. 部署 Higress AI Gateway
3. 配置你指定的模型供应商和 API Key
4. 安装并启用 OpenClaw 插件

配置完成后，想用什么模型就用什么模型：

```yaml
# 使用 GLM-5
model: "higress/glm-5"

# 或者 MiniMax M2.5
model: "higress/minimax-m25"

# 或者使用自动路由（根据消息内容智能选择）
model: "higress/auto"
```

## 后续新增模型？一句话搞定

假设下周 DeepSeek 又发了 V4，或者 Qwen 推出了 QwQ-Max-2，你只需要说：

```
帮我添加 DeepSeek 的 API Key：sk-xxx
```

或者：

```
帮我把默认模型切换到 deepseek-v4
```

**不需要重启 OpenClaw Gateway，不需要升级任何组件，配置热加载立即生效。**

这就是 Higress 作为 AI 网关的核心价值：**把模型接入变成对话问题，而不是开发问题**。

## 为什么这两个模型值得关注？

### GLM-5：开源界的"系统架构师"

GLM-5 采用 MoE 架构，744B 总参数中每次只激活 44B，配合 DeepSeek 稀疏注意力机制，在保持能力的同时大幅降低部署成本。官方表示，GLM-5 擅长"复杂系统工程与长程 Agent"，在真实编程场景的体感逼近 Claude Opus 4.5。

### MiniMax M2.5：Agent 时代的性价比之王

M2.5 主打"为真实世界生产力而生"，在编程场景展现出"像架构师一样思考和构建"的能力——动手写代码前，会主动拆解功能、结构和 UI 设计。支持 Go、C、C++、TypeScript、Rust、Python 等 10+ 语言，覆盖 Web、Android、iOS、Windows、Mac 全平台。

最关键的是成本：50 TPS 版本的输出价格是 Opus/Gemini 3 Pro/GPT-5 的 1/10~1/20。官方算了一笔账：1 万美金可以让 4 个 Agent 连续工作一年。

## 自动路由：让 AI 自己选择最合适的模型

这两个模型定位不同——GLM-5 架构能力强，M2.5 性价比高。Higress 的自动路由可以根据任务类型智能调度：

```
帮我配置自动路由规则：
- 遇到"深入思考"、"复杂问题"、"架构设计"时用 glm-5
- 遇到"简单"、"快速"、"翻译"时用 minimax-m25-lite
- 日常代码任务用 minimax-m25（便宜又能打）
```

使用时只需要指定 `higress/auto`，系统会根据消息内容自动选择最合适的模型进行推理。

## 总结

| 对比项 | OpenClaw 原生 | OpenClaw + Higress |
|--------|--------------|-------------------|
| 新模型支持 | 需要发版升级 | 一句话对话配置 |
| 模型切换 | 修改配置重启 | IM 对话即可 |
| 供应商管理 | 硬编码 | 对话添加，热更新 |
| 维护成本 | 等官方更新 | 自主可控，即时响应 |

国产大模型的竞争越来越激烈，新模型层出不穷。把模型接入变成一个"发版问题"，本身就是反模式。Higress 的设计理念是：**让 AI 应用的架构，跟上 AI 模型的进化速度**。

如果你也是 OpenClaw 用户，正在为模型支持问题头疼，不妨试试 [Higress OpenClaw Integration Skill](https://github.com/alibaba/higress/tree/main/.claude/skills/higress-openclaw-integration)，也许能解决你的燃眉之急。

**温馨提示** ：如果你当前使用的模型能力较弱，无法自动完成配置，可以查看上面链接中的 Skill 说明文档，按照步骤手动配置 Higress AI Gateway。

---

*P.S. 写这篇文章的时候，MiniMax M2.5 刚发布一天，而我已经通过 Higress 用上了。等 OpenClaw 官方支持？下一个新模型可能都发布了。*

