---
title: "基于 AI 网关的 LLM 高可用最佳实践"
description: "基于 AI 网关的 LLM 高可用最佳实践"
date: "2025-09-05"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

>  作者：桂楚，阿里云AI网关实习工程师
>

随着LLM服务广泛部署，服务的可用性和流量治理面临新的可靠性要求。由于LLM服务参数量级限制，其服务部署和重启时间较长，如果服务因为过载而故障，则重启时间达到分钟级，对服务可用性影响极大。阿里云AI网关提供了多来源LLM服务的代理功能，不仅可以通过简单易用的配置对LLM服务进行代理，同时提供了丰富的LLM服务入口流量治理功能，提高LLM服务的可观测性和可用性。对于自部署的LLM服务，传统网关的检测和过载保护机制往往滞后，阿里云AI网关提供了一系列如被动健康检测、首包超时和fallback等高可用机制，通过合理配置，能够实现对LLM服务的过载状态实时检测和及时保护。

## 一、问题场景
用户流量具有突发性和不确定性特点，若用户流量激增产生流量尖峰，会对LLM服务产生的可用性造成较大影响，例如，LLM服务同时处理大量请求造成生成响应时间过长，造成用户体验降低，甚至因为LLM服务显存受限，在同时处理大量请求时，会因为显存被打满而挂掉。

这里**模型类别**选择 DeepSeek-R1-Distill-Qwen-7B，**资源类型**选择   
ml.gu7i.c8m30.1-gu30，具有24G显存。


![](https://img.alicdn.com/imgextra/i4/O1CN01J81c6h1VfUXpe0j6T_!!6000000002680-2-tps-1866-1318.png)


![](https://img.alicdn.com/imgextra/i3/O1CN01DTJcrj1x8L7KSx8nW_!!6000000006398-2-tps-3192-786.png)


查看部署的LLM服务GPU占用率，已经达到99%。


![](https://img.alicdn.com/imgextra/i1/O1CN01SGkqZ81atkxX9b0lR_!!6000000003388-54-tps-1524-510.apng)

用户请求激增时，可以看到首包RT随者请求数而增加，说明LLM服务的负载压力也在逐渐增加。


![](https://img.alicdn.com/imgextra/i1/O1CN01huloiu1VbMyphzR5H_!!6000000002671-2-tps-2532-1034.png)

在没有开启相关LLM高可用能力情况下，用户并发流量最终超出LLM服务可承受能力而挂掉，重启时间在3分钟左右，此时间段内都无法提供服务。


![](https://img.alicdn.com/imgextra/i2/O1CN01a1MCBg1HzjQWtx92r_!!6000000000829-54-tps-1794-208.apng)


## 二、阿里云 AI 网关 LLM 服务高可用保障
### Fallback机制
基于Fallback机制，实现当主用LLM服务不可用时兜底到备用LLM服务，是AI网关上做LLM服务高可用方案最基础的方式。下面以一个AI网关客户中**最常见的用例**举例：当在阿里云上**自建LLM模型不可用**时基于AI网关的Fallback机制**兜底到阿里云百炼**。

在阿里云**AI网关**新建自己的网关实例，进入**服务**选项卡，点击**创建服务**按钮，服务来源选择**AI服务**，**大模型供应商**选择**PAI-EAS**，然后AI网关能够自动识别已创建的PAI-EAS服务，通过选择**工作空间**和指定的**EAS服务**，LLM API-KEY会自动从PAI获取，点击确定后服务创建成功。


![](https://img.alicdn.com/imgextra/i1/O1CN016AnNY428PhuStKOHt_!!6000000007925-2-tps-1734-1184.png)



然后选择**LLM API**选项卡，点击**创建LLM API**按钮，**LLM服务-服务列表**选中刚刚创建的服务，填写基本信息，并开启**fallback**，选择**百炼**作为fallback备用服务，点击确定后LLM API创建成功。


![](https://img.alicdn.com/imgextra/i2/O1CN01LB15PU1V2YsYWqZfR_!!6000000002595-54-tps-1822-790.apng)



点击LLM API操作选项中**调试**，可以在AI网关上快速开启对话，响应正常从AI网关到达后端PAI-EAS服务，并返回响应。


![](https://img.alicdn.com/imgextra/i2/O1CN0122wXjp1mQEp0i2xJE_!!6000000004948-2-tps-1886-490.png)  


然后在PAI-EAS中选择**中止流量**，可以模拟后端服务异常情况。


![](https://img.alicdn.com/imgextra/i2/O1CN01vCXiwp1w3vgfvvYKj_!!6000000006253-2-tps-3066-202.png)


此时用户发送对话请求，由于PAI-EAS上部署的主服务不可用，请求自动fallback到备用服务百炼，返回响应中说明处理模型为qwen，保障了服务可用性。


![](https://img.alicdn.com/imgextra/i4/O1CN01gjN6Y41hmc5nbBXtv_!!6000000004320-2-tps-1950-520.png)


### 被动健康检测和首包超时
对于自建LLM的场景来说，在流量突增场景下，因为资源不足，GPU瞬间打满的情况，仅使用LLM服务的fallback机制做事后防护是不够的。这种场景一方面可以使用AI网关的并发和限流防护，另一方面可以结合被动健康监测和首包超时机制，进行事前防护。

服务响应时间能够反映大模型此时负载情况，即通过首包超时配置，能够在首包响应时间过长时候让用户请求快速失败快速重试，同时保障用户体验；而当请求失败率过高时候，会触发被动健康检查及时移除后端服务节点，对LLM服务进行过载保护；当服务节点被全部移除，则可以将请求fallback到备用服务实现服务持续可用。

下面的用例展示了在用户流量突增场景下，阿里云AI网关保障了LLM服务的可用性。

首先在刚刚创建的**服务**选择**健康检查配置**，选择**开启**被动健康检查，然后将**失败率阈值**配置为50，表示服务节点请求失败率达到50%会被标记为故障节点并移除，**检测间隔时间**配置为1s，表示每1s计算一次请求失败率<font style="color:rgb(13, 18, 57);">，</font>**<font style="color:rgb(13, 18, 57);">基础弹出时间</font>**<font style="color:rgb(13, 18, 57);">配置为30s，表示节点被移除的基础时间为30s。</font>



![](https://img.alicdn.com/imgextra/i2/O1CN01SqyxQn1CLMR7LfMY8_!!6000000000064-54-tps-1240-630.apng)


<font style="color:rgb(13, 18, 57);">在刚刚创建的</font>**<font style="color:rgb(13, 18, 57);">Model API</font>**<font style="color:rgb(13, 18, 57);">点击编辑，在</font>**<font style="color:rgb(13, 18, 57);">大模型服务</font>**<font style="color:rgb(13, 18, 57);">配置最下面配置</font>**<font style="color:rgb(13, 18, 57);">首包超时</font>**<font style="color:rgb(13, 18, 57);">时间为200ms，表示首包时间超过200ms时会触发超时，并返回请求失败。</font>


![](https://img.alicdn.com/imgextra/i3/O1CN01c9gHOq1w30taMwjct_!!6000000006251-54-tps-1822-790.apng)


<font style="color:rgb(13, 18, 57);">具体配置和含义见下表。</font>

| 配置名 | 配置值 | 字段含义 |
| --- | --- | --- |
| 失败率阈值 | 50 | <font style="color:rgb(13, 18, 57);">当某节点失败请求占比达到此阈值，系统将触发该节点的弹出机制。</font> |
| 检测间隔时间 | 1s | <font style="color:rgb(13, 18, 57);">每隔指定时间（如 30 秒）计算节点的请求失败率。</font> |
| 基础间隔时间 | 30s | <font style="color:rgb(13, 18, 57);">节点被弹出后的初始隔离时长（如 30 秒）。隔离时间计算公式：k * base_ejection_time（k 初始值为1），每次弹出会延长隔离时间（k 加一），若连续检测正常则逐步缩短隔离时间（k 减一）。</font> |
| 首包超时 | 200ms | <font style="color:rgb(13, 18, 57);">首个数据包响应时间超过指定时间触发超时，请求失败。</font> |


开启被动健康检测和首包超时相关后，在流量激增时候，可以发现由于LLM过载导致首包时间过长，用户请求大量失败，失败率超过被动健康检查阈值，最后主服务节点（PAI-EAS）由于过载被移除，此时请求被全部转发到备用服务（通义千问）进行处理，在一段时间后，主服务恢复健康重新加入提供服务，在此过程中，首包RT在持续增长后达到高峰，之后主服务过载而处于不健康状态，在主服务重新提供正常服务后，首包RT下降并维持稳定，主服务持续存活。


![](https://img.alicdn.com/imgextra/i1/O1CN01lTqzW822cAzwwUqt0_!!6000000007140-54-tps-1172-674.apng)


## 三、与其他 AI 网关 LLM 高可用能力对比
| 高可用机制 | higress(商业版) | kong(商业版) | envoy ai gateway | litellm | 备注 |
| --- | --- | --- | --- | --- | --- |
| SSE响应的首包超时 | ✅ | ❌ | ❌ | ✅ | higress对流式响应支持首包超时，且相比于litellm优势在于能够根据首包超时触发被动健康检测，进行过载保护。 |
| fallback | ✅ | ✅ | ✅ | ✅ | higress支持根据首包超时、错误响应码、健康检查失败等进行fallback，比其他网关机制更灵活。 |
| 健康检测 | 主动：✅<br/>被动：✅ | 主动：✅<br/>被动：✅ | 主动：❌<br/>被动：❌ | 主动：✅<br/>被动：❌ | higress同时支持主被动健康检查，<font style="color:rgb(34, 34, 34);">两者同时开启时需要同时检查通过，提供更强检查机制。</font> |
| 限流 | ✅ | ✅ | ✅ | ✅ | higress支持更精细化的基于消费者/模型名的限流 |
| 开箱即用的监控告警 | ✅ | ❌ | ❌ | ❌ | higress支持开箱即用的监控告警，<font style="color:rgb(13, 18, 57);">其他网关通过prometheus等方式透出监控指标，需要自己配置监控告警。</font> |
