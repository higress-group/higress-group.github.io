---
title: "GeoIP 结合 Prompt 赋能 LLM：基
于 AI 网关实现个性化与精确化问答"
description: "GeoIP 结合 Prompt 赋能 LLM：基
于 AI 网关实现个性化与精确化问答"
date: "2024-08-28"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

**一、前言**<br />**什么是 Prompt Engingering**<br />提示工程（Prompt Engingering），也被称为上下文提示（In-Context Prompting），指的是通过结构化文本等方式来完善提示词，引导LLM输出我们期望的结果。通过提示词工程可以在不更新模型权重的情况下，让LLM完成不同类型的任务。面对同样一个问题，为LLM设置不同的提示词，能够得到不同的回答结果。我们可以通过对Prompt的优化提升LLM的回答精度。<br />例如：<br />![](/img/1728551152236.png)<br />**点击图片可查看完整电子表格**<br />**什么是 AI Gateway**<br />AI Gateway的定义是AI Native的API Gateway，是基于API Gateway的能⼒来满⾜AI Native的需求。例如：<br />• 将传统的QPS限流扩展到Token限流<br />• 将传统的负载均衡/重试/fallback能力延伸，支持对接多个大模型厂商API，提高整体稳定性<br />• 扩展可观测能力，支持不同模型之间效果的对比A/B Test，以及对话上下⽂链路Tracing等<br />Higress (https://github.com/alibaba/higress) 是阿⾥云开源的⼀款AI Gateway，为开发者提供了一站式的 AI 插件集和增强后端模型调度处理能力，使得 AI 与网关的集成更加便捷和高效。官方提供了丰富的插件库，涵盖 AI、流量管理、安全防护等常用功能，满足90%以上的业务场景需求。此外还支持 Wasm 插件扩展，支持多语言编写 Wasm 插件，插件更新采用热插拔机制对流量无损。<br />本文主要基于 Higress 的 Wasm 插件机制，使用 Go 进行插件的整体开发和能力增强。具体可以参考：https://higress.cn/docs/latest/plugins/custom/

**二、Geo-IP插件与AI 提示词修饰插件的结合与使用**<br />**插件参数配置**<br />**配置Geo-IP插件**<br />启用Geo-IP插件（目前仅支持IPv4），并配置：

| Bash<br />ipProtocal: "ipv4" |
| --- |

**配置AI提示词修饰插件**<br />启用AI提示词修饰插件，在配置的 content 中通过变量，注入地理位置信息：

| Bash<br />prepend:<br />- content: "提问用户当前的地理位置信息是，国家：${geo-country}，省份：${geo-province}, 城市：${geo-city}"<br />  role: "system"<br />append:<br />- content: "每次回答完问题，尝试进行反问"<br />  role: "user" |
| --- |

**插件效果**<br />示例请求⼀：

| Bash<br />curl 'http://<这里换成网关公网IP>/api/openai/v1/chat/completions' \\<br />-H 'Accept: application/json, text/event-stream' \\<br />-H 'Content-Type: application/json' \\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"附近有什么旅游景点？"}]<br /> }' |
| --- |

示例响应一：

| Bash<br />{..."content": "附近热门的旅游景点有故宫、天安门广场、恭王府等。您对哪个景点更感兴趣呢？"...} |
| --- |


示例请求二：

| Bash<br />curl 'http://<这里换成网关公网IP>/api/openai/v1/chat/completions' \\<br />-H 'Accept: application/json, text/event-stream' \\<br />-H 'Content-Type: application/json' \\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"怎么去香港?"}]<br /> }' |
| --- |

示例响应二：

| Bash<br />{..."content": "从您所在的位置（北京市）前往香港，您可以选择乘坐飞机、火车或者长途汽车等多种交通方式。\\n\\n1. **飞机**：从北京首都国际机场出发，有多家航空公司提供直飞香港的服务。\\n2. **高铁**：北京西站有直达香港西九龙站的高速列车。\\n3. **长途汽车**：虽然不是主流方式，但也有部分长途汽车线路连接两地。\\n\\n您计划什么时候出发呢？不同的出行日期可能会有不同的票务情况和价格。"...} |
| --- |


示例请求三：

| Bash<br />curl 'http://<这里换成网关公网IP>/api/openai/v1/chat/completions' \\<br />-H 'Accept: application/json, text/event-stream' \\<br />-H 'Content-Type: application/json' \\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"特色小吃有哪些?"}]<br /> }' |
| --- |

示例响应三：

| Bash<br />{..."content": "我可以帮您大概介绍一下北京的一些特色小吃：\\n\\n1. **豆汁儿配焦圈**：北京的传统小吃之一，豆汁儿口感独特，搭配焦圈食用。\\n2. **炸酱面**：北京非常有名的面条吃法，面条通常拌上特制的炸酱以及各种蔬菜丝。\\n3. **卤煮火烧**：以猪内脏和豆腐干为主要原料，炖煮而成，汤味醇厚，是老北京的传统食品。\\n4. **炒肝**：一种类似卤煮的小吃，但是主要用猪肝和大肠，加上蒜泥等调味品。\\n5. **艾窝窝**：糯米制成的甜食，外皮软糯，里面包裹着红豆沙或其他甜馅。\\n6. **糖葫芦**：串起来的山楂果，表面裹上一层糖浆，酸甜可口，很受欢迎。\\n\\n您对哪一种小吃比较感兴趣呢？或者您想了解更多有关这些小吃的信息吗？"...} |
| --- |

**三、实现原理**<br />1. Geo-IP插件基于用户 IP 获取用户相关的地理位置信息，如：国家、省份、城市等<br />2. 基于 Higress 的 Property 机制实现跨插件间的数据传递，将Geo-IP插件获取的地理位置信息传递给AI提示词修饰插件<br />3. AI提示词插件基于用户配置的提示词模板、用户输入，以及地理位置信息，生成增强后的用户请求发送给 LLM<br />**Geo-IP 插件实现**<br />用户IP的获取：<br />当请求进入onHttpRequestHeader( ) 函数时，如果用户是直接连接Higress，就取 remote_address 作为用户IP。如果用户通过代理服务访问Higress，请求里包含请求头X-forwarded-for，就解析XFF头取第一个IP地址作为原始用户IP。

离线IP地址定位库内存优化：<br />Geo IP 插件内置离线IP地址定位库，数据来源：https://gitee.com/lionsoul/ip2region。由于默认提供的文件格式为：起始IP地址|结束IP地址|国家|区域|省份|城市|ISP，直接对数据进行存储存在较大的内存开销。因此首先对原始数据进行处理，将原始数据拆分为多个：IP地址/子网掩码|国家|区域|省份|城市|ISP 的格式。然后基于加工后的数据格式，可以通过基数树（Radix Tree）的数据结构在内存中进行存储，最终在降低内存占用的同时，保证了IP地址的查找效率。

地理位置信息的传递：<br />起初希望通过 setContext 进行信息的传递。后来在和 Higress Maintainer 的沟通中了解到 Context 没有办法跨插件传递信息。需要通过 setProperty 设置到 metadata 中，其他插件通过 getProperty获取。在此感谢 johnlanni 的热心解答和帮助。

**AI 提示词修饰插件增强实现**<br />用户配置：

| Bash<br />prepend:<br />- role: system<br />  content: "提问用户当前的地理位置信息是，国家：${geo-country}，省份：${geo-province}, 城市：${geo-city}" |
| --- |

使用以上配置发起请求：

| Bash<br />curl http://localhost/test \\<br />-H "content-type: application/json" \\<br />-d '{<br />  "model":"gpt-3.5-turbo",<br />  "messages": [<br />    {<br />      "role": "user",<br />      "content":"明天天气怎么样"<br />    }<br />  ]<br />}' |
| --- |

经过插件处理后，实际请求为：

| Bash<br />curl http://localhost/test \\<br />-H "content-type: application/json" \\<br />-d '{<br />  "model": "gpt-3.5-turbo",<br />  "messages": [<br />    {<br />      "role": "system",<br />      "content": "提问用户当前的地理位置信息是，国家：中国，省份：浙江, 城市：杭州"<br />    },<br />    {<br />      "role": "user",<br />      "content": "明天天气怎么样"<br />    }<br />  ]<br />}' |
| --- |

在设置提示词时，一般将提示词设置为 user 或 system 类型<br />• user：user角色，代表当前用户。当用户向 LLM 提问或与其交互时，输入的内容都标记为 user。<br />• system：system角色，代表系统级的消息或通知。用于存放提问的相关背景信息或一些预置规则。比如，我们在一个“写小红书文案”的场景中与 LLM 对话。那么“写小红书文案”这个场景中就会提前预置一些规则（比如字数要求、emoji图像等等）。这些规则就是system。<br />**四、总结**<br />本⽂对 Prompt 的使用方式进行了简单介绍，让大家了解到 Prompt 对于 LLM 的重要性。并尝试在Prompt中结合用户 Geo IP 信息，实现 LLM 的个性化回复，提升问答的准确度。希望对你有帮助！<br />插件的实现已经提交PR给Higress开源社区，可以到这里查看完整的代码实现： <br />Geo-IP插件实现：[https://github.com/alibaba/higress/pull/1172](https://github.com/alibaba/higress/pull/1172)<br />AI提示词修饰插件增强实现：<br />https://github.com/alibaba/higress/pull/1228

也欢迎⼤家提出宝贵建议，可以直接在上⾯PR中评论，或者在Higress社区交流群（钉钉群号： 30735012403）⾥⼀起沟通。

