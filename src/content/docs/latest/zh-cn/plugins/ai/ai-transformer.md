---
title: AI 请求/响应转换
keywords: [higress, ai ,transformer]
description: 基于 AI 请求/响应转换插件，用户可以不用写代码，直接使用自然语言的方式对网关的请求/响应进行修改。
---

## 功能说明

通过配置 AI 请求/响应转换插件，用户可以不用写代码，直接使用自然语言的方式对网关的请求/响应进行修改。例如测试人员在测试 API 时，对待测 API 进行插件配置，将原始请求/响应作为 example，来生成进行边界条件测试的请求/响应。大模型很多时候会比人考虑的更全面，更容易测试出一些边界 case。


## 配置说明

| 名称                   | 数据类型 | 填写要求 | 默认值 | 描述                     |
|:---------------------| :-  | :-  |:----|:-----------------------|
| request.enable       | bool | 必填 | -   | 是否在request阶段开启转换       |
| request.prompt       | string | 必填 | -   | request阶段转换使用的prompt   |
| response.enable      | string | 必填 | -   | 是否在response阶段开启转换      |
| response.prompt      | string | 必填 | -   | response阶段转换使用的prompt  |
| provider.serviceName | string | 必填 | -   | DNS类型的服务名，目前仅支持通义千问    |
| provider.domain      | string | 必填 | -   | LLM服务域名                |
| provider.apiKey      | string | 必填 | -   | 阿里云dashscope服务的API Key |

## 配置示例

```yaml
request:
    enable: false
    prompt: "如果请求path是以/httpbin开头的，帮我去掉/httpbin前缀，其他的不要改。"
response: 
    enable: true
    prompt: "帮我修改以下HTTP应答信息，要求：1. content-type修改为application/json；2. body由xml转化为json；3. 移除content-length。"
provider: 
    serviceName: qwen
    domain: dashscope.aliyuncs.com
    apiKey: xxxxxxxxxxxxx
```

访问原始的 httbin 的 /xml 接口，结果为：
```
<?xml version='1.0' encoding='us-ascii'?>

<!--  A SAMPLE set of slides  -->

<slideshow 
    title="Sample Slide Show"
    date="Date of publication"
    author="Yours Truly"
    >

    <!-- TITLE SLIDE -->
    <slide type="all">
      <title>Wake up to WonderWidgets!</title>
    </slide>

    <!-- OVERVIEW -->
    <slide type="all">
        <title>Overview</title>
        <item>Why <em>WonderWidgets</em> are great</item>
        <item/>
        <item>Who <em>buys</em> WonderWidgets</item>
    </slide>

</slideshow>
```

使用以上配置，通过网关访问 httpbin 的 /xml 接口，结果为：
```
{
  "slideshow": {
    "title": "Sample Slide Show",
    "date": "Date of publication",
    "author": "Yours Truly",
    "slides": [
      {
        "type": "all",
        "title": "Wake up to WonderWidgets!"
      },
      {
        "type": "all",
        "title": "Overview",
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "",
          "Who <em>buys</em> WonderWidgets"
        ]
      }
    ]
  }
}
```