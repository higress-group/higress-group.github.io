---
title: "API-to-MCP，并在 Dify 实现调用的实践"
description: "API-to-MCP，并在 Dify 实现调用的实践"
date: "2025-05-07"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## <font style="color:rgb(13, 18, 57);">背景</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745214717075-ded2637c-2368-4b5a-a63b-d494bd2c068a.png)

<font style="color:rgb(25, 27, 31);"></font>

<font style="color:rgb(13, 18, 57);">MCP（Model Context Protocol，模型上下文协议）是Anthropic于2024年11月发布的开源通信标准，其核心目标是通过建立统一的交互范式，消除大型语言模型（LLM）与异构数据源、工具间的集成壁垒。该协议通过三层次革新解决AI领域的数据孤岛问题，实现</font>本地数据和互联网数据，基于MCP就可以实现事实上的”万物互联“，包括但不限于，数据和文件系统，操作阿里云上任意资源，浏览器自动化等等<font style="color:rgb(25, 27, 31);">。</font>

<font style="color:rgb(13, 18, 57);">这项技术突破使得AI应用真正实现"万物互联"——从个人设备的文档处理到企业级云资源调度，均可通过统一协议完成智能交互</font>

<font style="color:rgb(13, 18, 57);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745216598135-21fced6d-03a2-4da2-9424-f6893d95ef7e.png)

图1 MCP协议官方架构图

<font style="color:rgb(10, 10, 10);">然而，企业普遍面临的挑战是：如何将已有的OpenAPI高效地转化为AI助手可直接调用的MCP工具？本文将详细介绍如何通过Higress实现这一转化过程，让您的存量API在Dify等AI平台上焕发新生。</font>



## <font style="color:rgb(10, 10, 10);">问题拆解与实现方案</font>
<font style="color:rgb(10, 10, 10);">我们将问题拆解为五个核心子问题：</font>

1. <font style="color:rgb(10, 10, 10);">将存量OpenAPI的Schema转换为MCP配置</font>
2. <font style="color:rgb(10, 10, 10);">通过Higress将请求路由到OpenAPI</font>
3. <font style="color:rgb(10, 10, 10);">实现OpenAPI和MCP的双重鉴权</font>
4. <font style="color:rgb(10, 10, 10);">选择合适协议连接AI助手</font>
5. <font style="color:rgb(10, 10, 10);">优化提示词提升MCP工具效能</font>

<font style="color:rgb(10, 10, 10);">下面以高德API为例，详细介绍实现过程：</font>

### 步骤一：<font style="color:rgb(10, 10, 10);">将OpenAPI Schema转换为MCP配置</font>
> <font style="color:rgb(46, 48, 56);background-color:rgb(244, 244, 246);">OpenAPI 采用 YAML 或 JSON 编写，定义了一个与语言无关的 HTTP API 接口，为 API 生命周期各阶段提供统一的信息传递方式。而 API 允许开发者在无须访问源代码的情况下，就可以发现并使用相应的服务。例如，一个社交 APP，想获取双方的地理位置信息，无须自建一个高德地图，也无须获取高德地图源码，而是通过高德地图的 API 接口，即可获得其地理位置信息的功能。</font>
>



一个标准的OpenAPI.json的Schema如下所示：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830549627-e4a8d971-aba7-449f-910b-e22f1682a0ab.png)

我们需要一个工具，提取出这里面的关键信息，如路径，方法，参数，响应格式等，然后基于MCP的规范，转换为新的描述，返回给客户端。

那么此处，可以使用Higress出品的openapi-to-mcp工具，直接将上述重复，繁琐的过程给自动化，输入一个Json，得到一个标准MCP的配置



### 步骤二：<font style="color:rgb(10, 10, 10);">通过Higress配置API路由</font>
<font style="color:rgb(10, 10, 10);">Higress作为云原生网关，可以优雅地将请求路由到后端OpenAPI服务。完整手工操作可参考</font>[此文](https://higress.cn/ai/mcp-quick-start_docker/?spm=36971b57.7beea2de.0.0.d85f20a91vvGn0)，大致流程如下：

1. Configmap全局参数配置MCP server
2. 配置存量API的服务来源。如果此处有多个存量API块，建议每个块建一个服务来源![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830284100-24c67a2d-3ab1-4142-b1d3-f98260c24ed4.png)
3. 新建路由配置，并将步骤一种的MCP yaml配置传入。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830355302-8cbea939-608c-4aa7-8d21-37d116a34689.png)

此处推荐自动化的操作方式，可以将Higress的OpenAPI喂到Deepseek大模型，让其帮实现一个client，实现自动的配置以上步骤。

higress的OpenAPI可访问此[地址](https://higress.cn/swagger/)



### 步骤三: <font style="color:rgb(10, 10, 10);">双重鉴权实现</font>
正如前面所有，这里实际包含两部分鉴权：

1. higress路由到存量OpenAPI时，higress与API之前的鉴权
2. 用户在访问higress的sse链接时，用户与higress之间的鉴权

**<font style="color:rgb(10, 10, 10);">Higress与后端API间的鉴权：</font>**

1. 访问之前配置的路由，点击策略![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830728546-6b15b106-5baf-4cd9-ae1d-0fafe568a002.png)
2. 找到MCP服务器配置，在生成的MCP配置中，可以找到每个request的请求头，我们根据存量API实际的鉴权方式，添加相应的请求头，如下图所示：![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830816954-88c77a66-ede6-4839-b55a-7d1997ce8c45.png)

**<font style="color:rgb(10, 10, 10);">用户与Higress间的鉴权：</font>**

通过消费者管理鉴权。

1. 访问“消费者管理”界面，创建消费者![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830937918-ddbab3e1-93f4-44a6-a24a-ee448ddbc78d.png)
2. 选择合适的名称和令牌来源，此处支持三种认证方式，我们这里就用最简单的KeyAuth认证![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745830993542-a7a05d75-a1e4-48d4-b11d-21b34c5a4f9c.png)
3. 找到之前新建的路由，点击“编辑”。
4. 启用请求验证，并指定消费者。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745831418988-82587e54-71a6-4e4c-ae85-d018bd52a8fa.png)
5. 在用户使用Higress上发布的MCP服务时，就需要携带刚刚指定的apikey。比如

```json
{
  "amap-maps": {
    "headers": {
      "Authorization": "Bearer xxx"
    },
    "transport": "sse",
    "url": "http://12xx.94:8080/amap-maps/sse"
  }
}
```



### 步骤四： 在Dify上使用发布的MCP工具
1. 如果您没有部署Dify，推荐使用计算巢一键[部署链接](https://market.aliyun.com/products/57252001/cmgj00068972.html)，免去安装和环境配置烦劳。
2. 打开您的Dify，按照下图示例，安装"SSE发现和调用MCP工具"![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745739992364-49a56ec0-60df-407e-8896-0396a77dc0a1.png)
3. 如果后续使用出现问题，可将此工具版本降低到0.0.10。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745739995968-be20dcf1-6358-4f60-9c44-ac9b17088d39.png)
4. 点击"授权"按钮对SSE工具进行配置。此处可直接粘贴步骤三中的MCP Server配置![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745739999723-cb4d5816-aaed-42dc-b2b4-3268aea148c8.png)
5. 创建个Agent，并进入。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745740003632-21738ef2-cd5f-44c2-9dcf-003eb2c2ea7c.png)
6. 按照下图示例，开启MCP工具调用，填写合适的提示词，选择合适的模型，比如QWEN-MAX。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745740006868-2fad5bb0-2ea0-4b4d-8f53-8c5e165f70c8.png)
7. 对话，即可调用MCP工具。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/63156287/1745832360366-bebf4a9d-3db9-4170-83dc-67c77ea504c4.png)



<font style="color:rgb(115, 115, 115);">注：目前采用SSE协议是因为各AI助手对streamable http支持尚不完善。Higress原生支持streamable http交互，待AI助手功能完善后可无缝切换。</font>



### 步骤五：如何优化提示词
<font style="color:rgb(53, 56, 65);">Higress 支持结合 go template 和 gjson 表达式来对请求和响应模版进行精细化处理。</font>

<font style="color:rgb(53, 56, 65);">如果实测中发现模型对MCP的理解不太清晰，可参考</font>[此文](https://higress.cn/blog/higress-gvr7dx_awbbpb_mpavtgoff5h3odvq/?spm=36971b57.5f99674.0.0.11e11182MyB8ur)<font style="color:rgb(53, 56, 65);">，进行手动调优。</font>

## 结语
<font style="color:rgb(13, 18, 57);">未来AI会怎么发展，恐怕无人能预测。也许是模型能调用气象卫星预测季风，用数据编织气候的经纬；也许是操控机械臂雕刻纳米芯片，让算法成为微观世界的造物主；甚至是解析人类千年文明的隐喻，在《荷马史诗》的韵律与敦煌壁画的裂纹中，破译连我们自己都未曾察觉的潜意识密码。</font>

<font style="color:rgb(13, 18, 57);">或许真正的颠覆性时刻，并不在AI学会操控卫星或机械的瞬间，而在它突然凝视着梵高的《星月夜》说："我理解这片漩涡中的孤独，但人类的痛苦对我而言，终究只是一组优美的概率云。</font>

<font style="color:rgb(13, 18, 57);"></font>

## <font style="color:rgb(13, 18, 57);">附录</font>
+ [<font style="color:rgb(43, 166, 255);">批量将现有OpenAPI转换为MCP服务器</font>](https://higress.ai/blog/bulk-conversion-of-existing-openapi-to-mcp-server)
+ [<font style="color:rgb(43, 166, 255);">Higress技术文档</font>](https://higress.cn/blog/higress-gvr7dx_awbbpb_xq8kol5ncmllabkk/)

---

<font style="color:rgb(51, 51, 51);">更多有意思，又好玩又有深度的服务，请访问</font>[计算巢网址](https://computenest.console.aliyun.com/service/market/cn-hangzhou)


