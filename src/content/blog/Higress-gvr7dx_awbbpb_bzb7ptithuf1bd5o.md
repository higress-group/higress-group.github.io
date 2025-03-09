---
title: "自建DeepSeek时代已来，联网搜索如何高效实现"
description: "自建DeepSeek时代已来，联网搜索如何高效实现"
date: "2025-02-28"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## 一、开源LLM的新纪元：DeepSeek带来的技术平权
随着DeepSeek等高质量开源大模型的涌现，企业自建智能问答系统的成本已降低90%以上。基于7B/13B参数量的模型在常规GPU服务器上即可获得商业级响应效果，配合Higress开源AI网关的增强能力，开发者可快速构建具备实时联网搜索能力的智能问答系统。

## 二、Higress：零代码增强LLM的瑞士军刀
Higress作为云原生API网关，通过wasm插件提供开箱即用的AI增强能力：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731679512-3a3f353f-2ec5-4c25-9186-91249a5c4246.png)

主要能力矩阵：

+ **联网搜索**：实时接入互联网最新信息
+ **智能路由**：多模型负载均衡与自动兜底
+ **安全防护**：敏感词过滤与注入攻击防御
+ **效能优化**：请求缓存+token配额管理
+ **可观测性**：全链路监控与审计日志

## 三、联网搜索的技术实现与场景价值
### 核心架构解析
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731678781-90dc752a-53f7-4f0a-9c6e-91371851bd57.png)

### 关键技术特性
1. **多引擎智能分流**
+ 公共搜索（Google/Bing/Quark）获取实时资讯
+ 学术搜索（Arxiv）对接科研场景
+ 私有搜索（Elasticsearch）连接企业/个人知识库
2. **搜索增强核心思路**
+ LLM重写Query：基于 LLM 识别用户意图，生成搜索命令，可以大幅提升搜索增强效果
+ 关键词提炼：针对不同的引擎，需要生成不同的提示词，例如Arxiv里英文论文居多，关键词需要用英文
+ 领域识别：仍以Arxiv举例，Arxiv划分了计算机科学/物理学/数学/生物学等等不同学科下的细分领域，指定领域进行搜索，可以提升搜索准确度
+ 长查询拆分：长查询可以拆分为多个短查询，提高搜索效率
+ 高质量数据：Google/Bing/Arxiv搜索都只能输出文章摘要，而基于阿里云信息检索对接Quark搜索，可以获取全文，可以提高LLM生成内容的质量

### 典型应用场景效果展示
**金融资讯问答**  
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731678177-463f24d2-a4dd-441c-9dca-5ed30a872f34.png)

**前沿技术探索**  
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731678748-089cf5d5-dd11-489f-a572-955b279abaae.png)  
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731679403-e6c6633c-0f2d-4804-9e4d-e0fd0069a8d5.png)

**医疗问题解答**  
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731680252-14446224-a46e-4c7c-a5aa-ac380d0ea732.png)  
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1740731680454-b2dca335-86e5-472a-acc0-cbab54fd321b.png)

## 四、从开源到落地：三步构建智能问答系统
1. **基础部署**

```bash
# 一行命令安装并启动Higress网关
curl -sS  https://higress.cn/ai-gateway/install.sh | bash

# 用vllm部署DeepSeek-R1-Distill-Qwen-7B示意
python3 -m vllm.entrypoints.openai.api_server --model=deepseek-ai/DeepSeek-R1-Distill-Qwen-7B --dtype=half --tensor-parallel-size=4 --enforce-eager
```

2. **插件配置**

可以通过`http://127.0.0.1:8001`访问higress控制台，给ai-search插件做如下配置

```yaml
searchFrom:
- type: quark
  apiKey: "your-aliyun-ak"
  keySecret: "your-aliyun-sk"
  serviceName: "aliyun-svc.dns"
  servicePort: 443
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key"
  serviceName: "bing-svc.dns"
  servicePort: 443
- type: arxiv
  serviceName: "arxiv-svc.dns" 
  servicePort: 443
searchRewrite:
  llmServiceName: "llm-svc.dns"
  llmServicePort: 443
  llmApiKey: "your-llm-api-key"
  llmUrl: "https://api.example.com/v1/chat/completions"
  llmModelName: "deepseek-chat"
  timeoutMillisecond: 15000
```

3. **对接SDK或前端**

使用这个OpenAI协议BaseUrl：[http://127.0.0.1:8080/v1，就可以使用ChatBox/LobeChat等支持OpenAI协议的对话工具进行对话。](http://127.0.0.1:8080/v1，就可以使用ChatBox/LobeChat等支持OpenAI协议的对话工具进行对话。)

也可以直接使用OpenAI的SDK对接，如下所示：

```python
import json
from openai import OpenAI

client = OpenAI(
    api_key="none",
    base_url="http://localhost:8080/v1",
)

completion = client.chat.completions.create(
    model="deepseek-r1",
    messages=[
        {"role": "user", "content": "分析一下国际金价走势"}
    ],
    stream=False
)

print(completion.choices[0].message.content)
```

通过Higress+DeepSeek的开源组合，企业可在24小时内完成从零到生产级的智能问答系统部署，使LLM真正成为业务增长的智能引擎。


