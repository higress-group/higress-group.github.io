---
title: Higress助力AI大模型企业级应用落地
keywords: [Higress,wasm,AI plugin]
description: 介绍Higress如何通过AI proxy plugin对接AI大模型并实现网关级API管理
author: 赵伟基(兆维)
date: 2023-07-12
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/ai_plugin.md
---

以ChatGPT为代表的AIGC技术为企业生产带来了巨大的变化，并在企业应用开发领域占据一席之地。AI大模型凭借其强大的学习能力，可以帮助人们完成各种复杂的任务，例如帮助开发人员编写与调试代码、研究人员快速了解科研领域、营销人员撰写产品描述、设计人员设计新作品等等。许多企业探索如何降低AI大模型的使用成本。通过网关进行AI大模型的API管理成为了很常规的需求。

# Higress如何降低AI大模型使用成本？

以OpenAI为例，OpenAI的API调用并不是基于请求量或者订阅时间来计费，而是基于每个请求的使用量来计费。对于AI大模型来说，模型输入与输出的token数可以比较好的衡量当前模型进行推理任务的复杂度。因此基于token作为请求使用量进行计费是OpenAPI的标准计费策略。对于不同的模型token的计费标准也不同，越复杂的模型会生成越好的结果，但也会带来更高的计费。OpenAI通过为用户分发API密钥来完成用户的鉴权与收费等功能。

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1688523788955-ef30f3fa-9916-48cf-baf7-dcdc9d733a8a.png#clientId=u000cf9ed-697b-4&from=paste&height=260&id=VzJLA&originHeight=1436&originWidth=3392&originalType=binary&ratio=2&rotation=0&showTitle=false&size=3514703&status=done&style=none&taskId=uf85155a3-3c08-4964-a503-f0274c5869f&title=&width=615)

对于组织来说，为每位成员申请AI大模型的访问权限（API Key）显然是不现实的。分散的API密钥将不利于组织进行API的用量计算、管理与付费，从而增加AI大模型的使用成本。其次，对于组织来说，AI模型的选型、使用频率和成员使用权限、以及向AI大模型暴露哪些数据都是在管理中需要着重关注的功能。

Higress基于丰富的插件能力，提供了认证鉴权、请求过滤、流量控制、用量监测和安全防护等功能，能够帮助组织与AI大模型的API交互变得更加安全、可靠和可观察：基于Higress提供的认证鉴权能力，组织可以实现通过统一的API密钥进行AI模型的调用量管理和付费，并为团队成员授予不同的AI模型访问权限；基于Higress提供的流量控制能力，组织能为不同的模型与用户设置差异化的访问速率限制，有效降低AI模型的使用成本；基于Higress提供的请求拦截能力，组织能够有效过滤含敏感信息的访问请求，防护部分内部站点资源不对外暴露，从而有效保障内部数据安全；基于[商业版Higress](https://www.alibabacloud.com/product/microservices-engine?spm=higress-website.topbar.0.0.0)提供的开箱即用的指标查询和日志记录的能力，组织能够完成对不同用户的AI模型调用的用量观测与分析，从而制定更加合理的AI模型使用策略。

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1689038215219-60cd5f3d-06b2-4d3a-b3d5-4ea0b4ac4416.png#clientId=u42d13cdd-0432-4&from=paste&height=1535&id=u649578c1&originHeight=1688&originWidth=2962&originalType=binary&ratio=1.100000023841858&rotation=0&showTitle=false&size=3942008&status=done&style=none&taskId=u2fd25f83-bbd6-417f-8d03-3dcd71285be&title=&width=2692.727214363982)                           
 
# Higress对接OpenAI大语言模型实战

下面我们将以Higress对接OpenAI大语言模型为例，介绍Higress如何无缝对接AI大模型。整体方案如图所示，我们基于WASM拓展了Higress插件，实现了对OpenAI语言模型的请求代理转发。基于Higress提供的Key-Auth认证插件的能力，我们实现统一API-Key下的多租户认证。基于Higress提供的Request-Block请求过滤的能力，我们将实现含敏感信息的请求拦截，保障用户数据安全。

![](https://intranetproxy.alipay.com/skylark/lark/0/2023/jpeg/103456511/1689043915532-1c902ce8-9d12-4b5b-8577-5f9b8711b272.jpeg)

## 前提条件：
1. 安装Higress，参考[Higress安装部署文档](https://higress.io/zh-cn/docs/ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-istio-crd%E5%8F%AF%E9%80%89)。
2. 准备Go语言开发WASM插件的开发环境，参考[使用 GO 语言开发 WASM 插件](https://higress.io/zh-cn/docs/user/wasm-go)。

## 基于WASM的AI Proxy Plugin 
下文将给出基于Higress与WASM实现的AI大模型API代理插件方案。Higress支持基于WASM实现对外扩展的能力。WASM插件提供的多语言生态和热插拔机制为插件的实现和部署提供了便利。Higress同时支持在插件中请求外部服务，为AI代理插件的实现提供了高效的解决路径。

### 实现示例：
我们给出OpenAI-API的代理插件的实现示例，详情请参考[AI proxy plugin](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/chatgpt-proxy)。下列代码实现了插件相关配置完成之后，基于HTTP自动将请求代理转发到OPENAI-API，并接收来自OPENAI-API的响应，从而完成AI模型的调用，具体实现步骤如下：

1. 通过RouteCluster方法指定具体的OPENAI-API的host，确认用户请求转发的具体路径，并新建用于请求代理转发的HTTP Client。

```go
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	chatgptUri := json.Get("chatgptUri").String()
	var chatgptHost string
	if chatgptUri == "" {
		config.ChatgptPath = "/v1/completions"
		chatgptHost = "api.openai.com"
	} //请求默认转发到OPEN AI API
    ...
	config.client = wrapper.NewClusterClient(wrapper.RouteCluster{
		Host: chatgptHost,
	}) //通过RouteCluster方法确认请求转发的具体host
	 ...
}
```

2. 对用户请求进行OPENAI-API的格式封装，通过HTTP Client进行请求转发与响应接受，并将响应转发给用户。
   
```go
//OPENAI API接收的请求体模版，详见：https://platform.openai.com/docs/api-reference/chat
const bodyTemplate string = `
{
"model":"%s",
"prompt":"%s",
"temperature":0.9,
"max_tokens": 150,
"top_p": 1,
"frequency_penalty": 0.0,
"presence_penalty": 0.6,
"stop": ["%s", "%s"]
}
`
func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
    ...
    //根据用户的请求内容进行OPENAI API请求体封装 
	body := fmt.Sprintf(bodyTemplate, config.Model, prompt[0], config.HumanId, config.AIId)
	//通过HTTP Client进行转发
    err = config.client.Post(config.ChatgptPath, [][2]string{
		{"Content-Type", "application/json"},
		{"Authorization", "Bearer " + config.ApiKey},
	}, []byte(body),
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			var headers [][2]string
			for key, value := range responseHeaders {
				headers = append(headers, [2]string{key, value[0]})
			}
            //接收来自于OPENAI API的响应并转发给用户
			proxywasm.SendHttpResponse(uint32(statusCode), headers, responseBody, -1)
		}, 10000)
    ...
}
```

在Higress中启用自定义的AI-Proxy-Wasm插件流程如下：
![](https://intranetproxy.alipay.com/skylark/lark/0/2023/jpeg/103456511/1689066540405-04e8e089-82a1-4607-b7f1-18b80c3a317e.jpeg)

本示例提供已经编译好的AI-proxy-plugin-wasm文件并完成对应docker镜像的构建和推送，推荐配置如下所示：

| 名称 | 推荐配置 |
| --- | --- |
| 镜像地址 | oci://registry.cn-hangzhou.aliyuncs.com/zwj_test/chatgpt-proxy:1.0.0 |
| 插件执行阶段 | 鉴权阶段 |
| 插件执行优先级 | 1 |

### 插件配置说明：

插件配置简单，支持全局/域名级/路由级的代理转发。推荐进行路由级配置：选中对应的**路由配置**-选中**对应路由**-**策略**-**启用插件**。配置字段包括：

| 名称 | 数据类型 | 填写要求 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| model | string | 选填 | text-davinci-003 | 调用的模型名称 |
| apiKey | string | 必填 | - | OPENAI API密钥，详情可参考 |
| promptParam | string | 选填 | prompt | prompt的来源字段名称，URL参数 |
| chatgptUri | string | 选填 | api.openai.com/v1/completions | 调用AI模型服务的URL路径，默认值为OPENAI的API调用路径 |

示例配置如下：

```yaml
apiKey: "xxxxxxxxxxxxxxxxxx"
model: "curie"
promptParam: "text"
```

根据该配置，网关代理到OpenAI API下的curie模型，用户通过text关键字在url中输入文本。

```shell
curl "http://{GatewayIP}/?text=Say,hello"
```

得到OpenAI API的响应：
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1688630702128-6060fad6-4e47-4223-bc02-d9a240db9263.png#clientId=u743d3343-6ab1-4&from=paste&height=137&id=FIkxG&originHeight=520&originWidth=3170&originalType=binary&ratio=1.100000023841858&rotation=0&showTitle=false&size=1213836&status=done&style=none&taskId=u38ba4744-5835-4092-8291-ddfede62f55&title=&width=833.178955078125)

## 基于Key Auth的多租户认证

不同于为每位成员颁发AI-API密钥的形式，企业可以基于Higress网关提供的认证鉴权能力，依靠内部授权（如Key Auth等）来管理成员对AI模型对访问权限，从而限制成员可以使用的服务和模型，并依靠统一的AI-API密钥进行请求代理转发实现对API用量的统一管理。接下来以key_auth为例介绍基于Higress的多租户认证能力。

Key Auth插件实现了基于网关内API Key进行认证和鉴权的功能，支持从HTTP请求的URL参数或者请求头解析API Key，同时验证该API是否有权限访问。通过在**Higress控制台**-**插件市场**-**Key Auth**进行**全局配置**和**路由级配置**，即可实现Higress网关的多租户认证。

![](https://intranetproxy.alipay.com/skylark/lark/0/2023/jpeg/103456511/1688549517078-f311510f-9b99-4b84-ae28-720d67240014.jpeg)
                                                
```yaml
consumers:
- credential: "xxxxxx"
  name: "consumer1"
- credential: "yyyyyy"
  name: "consumer2"
global_auth: false
in_header: true
keys:
- "apikey"
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2023/jpeg/103456511/1688556699515-539c5f34-fdce-48ce-8845-c84f6f724180.jpeg)
                                                 
```yaml
allow: [consumer1]
```

以上配置定义了指向AI模型服务的消费者组consumers，并且只有consumer1具备访问当前路由下AI模型服务的权限。

```yaml
curl "http://{GatewayIP}/?text=Say,hello"
#请求未提供 API Key，返回401

curl "http://{GatewayIP}/?text=Say,hello" -H "apikey:zzzzzz"
#请求提供的 API Key 未在消费者组内，无权访问，返回401

curl  "http://{GatewayIP}/?text=Say,hello" -H "apikey:yyyyyy"
#根据请求提供的 API Key匹配到的调用者无AI模型服务的访问权限，返回403

curl "http://{GatewayIP}/?text=Say,hello" -H "apikey:xxxxxx"
#请求合法且有AI模型服务访问权限，请求将被代理到AI模型，正常得到OpenAI API的响应
```

Higress除了提供网关级多租户认证外，提供限流等能力。Key Rate Limit插件可以根据用户在消费组中的成员资格对用户应用速率进行限制，从而限制关键应用程序对高成本AI大模型服务的消耗。基于多租户认证插件与限流等功能插件能力，Higress可以完全控制AI大模型API的访问权限、访问数量与调用成本。

## 基于Request Block保障数据安全

对于AI大模型尤其是语言模型来说，要得到良好的返回往往需要用户提供足够的提示（prompt）作为模型输入。这也意味着组织和个人可能会在提供提示的过程中面临数据泄漏的风险。因此如何在使用AI模型的过程中保障数据安全也是API调用方面临重要问题。保护数据安全涉及到对AI模型的API调用渠道进行严格的控制。一种方式是使用特定的经批准的模型与其发布的API。另一种方式是对含敏感信息的用户请求进行拦截。这可以通过在网关级别设置特定的请求拦截来实现。Higress基于Request Block插件提供请求拦截能力，既能防止未经授权的模型访问用户信息，又能防止含敏感信息的用户请求暴露到外网。

Request Block插件基于URL、请求头等特征屏蔽HTTP请求，可以用于防护站点资源不对外暴露。 通过在**Higress控制台**-**插件市场-Request Block**进行屏蔽字段配置，即可防止含敏感字段的请求对外发送。

![](https://intranetproxy.alipay.com/skylark/lark/0/2023/jpeg/103456511/1688556780361-079f53e0-fed9-42a6-9a1c-0679867ddf3d.jpeg)
                                
```yaml
blocked_code: 404
block_urls:
- password
- pw
case_sensitive: false
```

以上配置定义了当前路由下基于URL的屏蔽字段，其中含敏感信息（如password、pw）的请求将被屏蔽。

```yaml
curl "http://{GatewayIP}/?text=Mypassword=xxxxxx" -H "apikey:xxxxxx"
curl "http://{GatewayIP}/?text=pw=xxxxxx" -H "apikey:xxxxxx"
#上述请求将被禁止访问，返回404
```
## 基于商业版Higress的用量观测与分析

对于组织来说，对各用户进行AI模型调用的用量观测和分析有助于了解其使用情况与产生的成本。对于个人用户，了解自己的调用量和开销也是必要的。因此，在网关层进行调用的观测和分析对于AI大模型的API管理是必要的能力。[商业版Higress](https://www.alibabacloud.com/product/microservices-engine?spm=higress-website.topbar.0.0.0)与各种指标与日志系统进行了深度集成，提供了开箱即用的用量观测分析报告构建机制，可以实时查看各种API的使用情况，并根据各类参数进行过滤，从而更好的了解API使用情况。

以观察各用户对OPENAI-Curie模型的调用量为例，用户可通过**MSE管理控制台**-**云原生网关**-**网关实例**-**参数配置-日志格式调整**中设置区分用户的可观测性参数请求头：x-mse-consumer，将其列入观测列表。之后进入**观测分析-日志中心**中设置使用统计图表功能即可完成对API的用量观测和分析。如下图所示，用户consumer1与用户consumer2的对OPENAI-Curie模型的调用量以饼状图形式呈现。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1688712645619-08deaa3b-6dfd-4031-a3bc-e9b04667eb39.png#clientId=u734a6afc-f143-4&from=paste&height=393&id=u3c0d04ae&originHeight=864&originWidth=2362&originalType=binary&ratio=2.200000047683716&rotation=0&showTitle=false&size=1411179&status=done&style=none&taskId=ud21c6766-85c4-47c4-80a6-211b485d5e1&title=&width=1073.6363403659227)
  
# 彩蛋：Higress控制台样例的聊天机器人

Higress团队在[Higress控制台样例](http://demo.higress.io)上部署了基于GPT模型的彩蛋聊天机器人，如果在使用Higress过程中有问题欢迎向它提问！

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1688712896260-42e9422a-4513-444a-b8c4-e568be5be65c.png#clientId=u59a57f82-6837-4&from=paste&height=941&id=u38892676&originHeight=2070&originWidth=3448&originalType=binary&ratio=2.200000047683716&rotation=0&showTitle=false&size=5830845&status=done&style=none&taskId=u0585d704-b301-403e-914e-7719bfad60a&title=&width=1567.2726933030065)
                           
                           
# 加入 Higress 社区

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/103456511/1689069508071-2696d03f-6475-4e02-b21e-28470a0ab043.png#clientId=u62629834-a034-4&from=paste&height=992&id=u175a0073&originHeight=1091&originWidth=1685&originalType=binary&ratio=1.100000023841858&rotation=0&showTitle=false&size=526822&status=done&style=none&taskId=ue1a4bf99-3cab-4046-9115-5b744c7d1c2&title=&width=1531.8181486169176)

如果您觉得Higress对您有帮助，欢迎前往[github: Higress](https://github.com/alibaba/higress)为我们star一下！

