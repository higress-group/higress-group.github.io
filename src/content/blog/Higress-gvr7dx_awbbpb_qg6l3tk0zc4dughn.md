---
title: "不增加 GPU，首 Token 延迟下降50%｜LLM 服务负载均衡的新实践"
description: "不增加 GPU，首 Token 延迟下降50%｜LLM 服务负载均衡的新实践"
date: "2025-08-04"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：钰诚

# 简介
传统的负载均衡算法主要设计用于通用的Web服务或微服务架构中，其目标是通过最小化响应时间、最大化吞吐量或保持服务器负载平衡来提高系统的整体效率，常见的负载均衡算法有轮询、随机、最小请求数、一致性哈希等。然而，在面对LLM服务时，这些传统方法往往暴露出以下几个关键缺陷：

1. **忽略任务复杂度差异**：LLM推理请求的复杂度差异极大。例如，一个长文本生成任务可能需要数十倍于短文本分类任务的计算资源。而传统负载均衡器无法感知这种差异，容易导致某些节点过载，而其他节点空闲，造成资源浪费和响应延迟。
2. **缺乏对GPU资源水位的感知**：在LLM推理服务中，计算瓶颈主要集中在GPU上，传统负载均衡器往往无法感知到这一细粒度的资源消耗情况，导致某些GPU节点因显存不足而拒绝请求或响应缓慢，而其他节点却处于空闲状态。
3. **缺乏对KV Cache的复用能力**：在并发请求处理中，如果多个请求具有相似的前缀，则它们的KV Cache可能存在重叠部分，可以通过共享或压缩的方式减少显存占用并提升生成速度。传统负载均衡策略并未考虑请求之间的语义相似性或KV Cache的可复用性，难以将具有潜在复用价值的请求分配到同一GPU实例上，从而错失优化机会。

针对LLM服务的特点，Higress AI网关以插件形式提供了面向LLM服务的负载均衡算法，包括全局最小请求数负载均衡、前缀匹配负载均衡以及GPU感知负载均衡，能够在不增加硬件成本的前提下，提升系统的吞吐能力、降低响应延迟，并实现更公平、高效的任务调度。

以前缀匹配负载均衡为例，压测工具使用 NVIDIA GenAI-Perf，设置每轮输入平均为200 token，输出平均为800 token，并发为20，每个会话包含5轮对话，共计60个会话，性能指标前后对比如下：

| 指标 | 无负载均衡 | 前缀匹配负载均衡 |
| --- | --- | --- |
| TTFT | 240ms | 120ms |
| 平均 RT | 14934.85ms | 14402.36ms |
| P99 RT | 35345.65ms | 30215.01ms |
| Token 吞吐 | 367.48 (token/s) | 418.96 (token/s) |
| Prefix Cache 命中率 | 40%+ | 80%+ |


# 技术选型
目前已经有很多优秀的开源项目，例如Envoy AI Gateway、AIBrix等，基于Envoy External Processing机制外接一个负载均衡器实现面向LLM的负载均衡，负载均衡器以sidecar或者k8s服务形式部署。

Higress AI网关以wasm插件形式提供了面向LLM服务的核心负载均衡能力，具有如下特点：

+ 免运维：以wasm形式提供负载均衡能力，不需要用户额外维护sidecar，只需要在higress控制台开启插件即可，部署运维成本大大降低。
+ 热插拔：即插即用，用户仅需要在控制台进行策略配置即可，开启插件时采用面向LLM服务的专属负载均衡策略，关掉插件后自动切换为服务基础的负载均衡策略（轮询、最小请求数、随机、一致性哈希）。
+ 易扩展：插件本身提供了多种负载均衡算法，并且在不断丰富完善中，采用go 1.24编写，代码开源，如果有特殊需求，用户可以基于现有插件进行定制。
+ 全局视野：借助Redis，网关的多个节点具有全局视野，负载均衡更加公平、高效。
+ 细粒度控制：插件可以在实例级、域名级、路由级、服务级等不同粒度进行生效，方便用户做细粒度的控制。

# 负载均衡算法介绍
接下来，本文会介绍Higress AI网关提供的三种负载均衡算法：全局最小请求数负载均衡、前缀匹配负载均衡、GPU感知负载均衡。

## 全局最小请求数负载均衡
在分布式环境中，网关实例往往具有多个节点，传统的负载均衡策略是每个节点做局部的负载均衡，缺乏全局视野。在Higress AI网关中，我们借助Redis实现了全局最小请求数负载均衡算法，根据每个LLM Pod上正在处理的请求数进行负载均衡。

选取Pod的大致流程如下：

![](https://img.alicdn.com/imgextra/i2/O1CN01phvmh41ifZc0l2Uqk_!!6000000004440-2-tps-2008-1062.png)

在全局最小请求数负载均衡中我们重点关注了请求异常（例如后端服务不可访问、客户端断连、服务端断连等）情况下的处理，通过在HttpStreamDone阶段统一进行计数的变更可以保证异常中断的请求也能够得到计数的更新，避免因请求异常导致服务计数异常情况。

## 前缀匹配负载均衡
在多轮对话场景下，一次会话会涉及多次LLM的调用，多次调用时请求携带了相同的上下文信息，如果能够感知上下文信息并将同属一个会话的多次请求路由到相同的LLM Pod中，将能够充分利用LLM Pod的KV Cache，从而大幅提高请求的RT、Token吞吐等性能指标。

在Higress AI网关中，我们借助Redis实现了全局的前缀匹配负载均衡算法，能够充分适应分布式环境，在请求到达网关时，会根据当前的前缀树信息进行前缀匹配，如果能够匹配成功，则会路由至对应LLM Pod，如果匹配不到前缀，则会根据全局最小请求数负载均衡方法选出当前处理请求最小的LLM Pod。

选取Pod的大致流程如下：

![](https://img.alicdn.com/imgextra/i4/O1CN01RePgy91gLlFP64J4X_!!6000000004126-2-tps-1874-946.png)

接下来简单介绍如何在Redis中构建前缀树。

首先将LLM请求的messages以user为界限划分为不同的block，并通过哈希获得一个16进制字符串，如下图所示，messages被划分为两个block，并且计算了每个block的sha-1值：

![](https://img.alicdn.com/imgextra/i3/O1CN01EiqU9k1kdOxw92F5S_!!6000000004706-2-tps-1254-960.png)

假设有一个请求被划分成了n个block，在进行前缀匹配时：

1. 在redis中查询`sha-1(block 1)`是否存在
    1. 如果不存在，前缀匹配失败，采用全局最小请求数选择pod，pod选取结束，根据当前请求内容更新前缀树
    2. 如果存在，前缀匹配成功，记录当前的pod，转步骤2
2. 在redis中查询`sha-1(block 1) XOR sha-1(block 2)`是否存在
    1. 如果不存在，前缀匹配失败，步骤1中选出来的pod即为目标pod，根据当前请求内容更新前缀树，pod选取结束
    2. 如果存在，前缀匹配成功，转步骤3
3. 在redis中查询`sha-1(block 1) XOR sha-1(block 2) XOR ... XOR sha-1(block n)`是否存在
    1. 如果不存在，前缀匹配失败，步骤2中选出来的pod即为目标pod，根据当前请求内容更新前缀树，pod选取结束
    2. 如果存在，前缀匹配成功，pod选取结束

通过以上过程，能够将同一个会话的多次请求路由至同一个pod，从而提高KV Cache的复用。

## GPU感知负载均衡
一些LLM Server框架（如vllm、sglang等）自身会暴露一些监控指标，这些指标能够实时反应GPU负载信息，基于这些监控指标可以实现GPU感知的负载均衡算法，使流量调度更加适合LLM服务。

目前已经有一些开源项目基于envoy ext-proc机制实现了GPU感知的负载均衡算法，但ext-proc机制需要借助一个外部进程，部署与维护较为复杂，Higress AI网关实现了后台定期拉取metrics的机制（目前支持vllm），以热插拔的插件形式提供了GPU感知的负载均衡能力，并且场景不局限于k8s环境，任何Higress AI网关支持的服务来源均可使用此能力。

选取Pod的大致流程如下：

![](https://img.alicdn.com/imgextra/i1/O1CN01LvTpL81yWtxuMGeSk_!!6000000006587-2-tps-2344-1284.png)

目前基于metrics的负载均衡策略遵循了[gateway-api-inference-extension](https://github.com/kubernetes-sigs/gateway-api-inference-extension/tree/main)的pod选取算法，根据LoRA Adaotor亲和、队列长度、KV Cache使用率进行负载均衡，选取过程如下图所示：

![](https://img.alicdn.com/imgextra/i4/O1CN01lpuct61F6CA1i3fZ1_!!6000000000437-2-tps-1500-2945.png)

# 使用方法
以前缀匹配负载均衡为例：

1. 准备Redis资源：<font style="color:rgb(24, 24, 24);">登录</font>[<font style="color:rgb(19, 102, 236);">阿里云Redis控制台</font>](https://kvstore.console.aliyun.com/Redis/instance/cn-hangzhou)<font style="color:rgb(24, 24, 24);">，创建Redis实例，并设置连接密码。具体操作，请参见</font>[<font style="color:rgb(19, 102, 236);">Redis快速入门概览</font>](https://help.aliyun.com/zh/redis/getting-started/overview)<font style="color:rgb(24, 24, 24);">。</font>
2. <font style="color:rgb(24, 24, 24);">准备LLM服务：以ECS形式基于vllm框架部署llama3模型，共3个节点。</font>
3. 在网关配置服务：在网关实例中导入Redis服务以及LLM服务，其中redis为DNS类型服务，llama3为固定地址类型服务。

![](https://img.alicdn.com/imgextra/i4/O1CN01Y5ppbf1RoPn391UIJ_!!6000000002158-2-tps-3840-1984.png)

4. 在网关配置API：在网关中创建一个LLM API，后端服务指向llama3.

![](https://img.alicdn.com/imgextra/i1/O1CN01BoLYdQ1fipa92fKAq_!!6000000004041-2-tps-3584-1996.png)

5. 在网关配置插件：在插件市场找到ai-load-balancer插件进行安装，然后在LLM API粒度下给刚才创建的LLM API配置负载均衡策略。

![](https://img.alicdn.com/imgextra/i4/O1CN0153KcNs1pFeVU2AEPE_!!6000000005331-2-tps-3584-1996.png)

插件配置示例如下：

```yaml
lb_policy: prefix_cache
lb_config:
  serviceFQDN: redis.dns
  servicePort: 6379
  username: default
  password: xxxxxxxxxxxx
  redisKeyTTL: 60
```

# 附录：压测结果与vllm监控大盘
## 无负载均衡
GenAI-Perf统计结果如下：

![](https://img.alicdn.com/imgextra/i3/O1CN01lKGO4Q1qgxjuQFtYA_!!6000000005526-2-tps-1664-310.png)

vllm 监控如下：

![](https://img.alicdn.com/imgextra/i4/O1CN016qQTyl1JW50XtGzOC_!!6000000001035-2-tps-1378-793.png)

## 前缀匹配负载均衡
GenAI-Perf统计结果如下：

![](https://img.alicdn.com/imgextra/i2/O1CN01GIYflB1kF7yMLZRX7_!!6000000004653-2-tps-1662-299.png)

vllm 监控如下：

![](https://img.alicdn.com/imgextra/i3/O1CN01eR0MYk1frX6hxahYx_!!6000000004060-2-tps-1375-791.png)




