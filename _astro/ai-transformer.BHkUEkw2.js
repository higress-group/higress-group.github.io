const e="latest/zh-cn/plugins/ai/ai-transformer.md",t="docs",i="latest/zh-cn/plugins/ai/ai-transformer",s=`
## \u529F\u80FD\u8BF4\u660E

\u901A\u8FC7\u914D\u7F6E AI \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u4E0D\u7528\u5199\u4EE3\u7801\uFF0C\u76F4\u63A5\u4F7F\u7528\u81EA\u7136\u8BED\u8A00\u7684\u65B9\u5F0F\u5BF9\u7F51\u5173\u7684\u8BF7\u6C42/\u54CD\u5E94\u8FDB\u884C\u4FEE\u6539\u3002\u4F8B\u5982\u6D4B\u8BD5\u4EBA\u5458\u5728\u6D4B\u8BD5 API \u65F6\uFF0C\u5BF9\u5F85\u6D4B API \u8FDB\u884C\u63D2\u4EF6\u914D\u7F6E\uFF0C\u5C06\u539F\u59CB\u8BF7\u6C42/\u54CD\u5E94\u4F5C\u4E3A example\uFF0C\u6765\u751F\u6210\u8FDB\u884C\u8FB9\u754C\u6761\u4EF6\u6D4B\u8BD5\u7684\u8BF7\u6C42/\u54CD\u5E94\u3002\u5927\u6A21\u578B\u5F88\u591A\u65F6\u5019\u4F1A\u6BD4\u4EBA\u8003\u8651\u7684\u66F4\u5168\u9762\uFF0C\u66F4\u5BB9\u6613\u6D4B\u8BD5\u51FA\u4E00\u4E9B\u8FB9\u754C case\u3002


## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0                   | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                     |
|:---------------------| :-  | :-  |:----|:-----------------------|
| request.enable       | bool | \u5FC5\u586B | -   | \u662F\u5426\u5728request\u9636\u6BB5\u5F00\u542F\u8F6C\u6362       |
| request.prompt       | string | \u5FC5\u586B | -   | request\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt   |
| response.enable      | string | \u5FC5\u586B | -   | \u662F\u5426\u5728response\u9636\u6BB5\u5F00\u542F\u8F6C\u6362      |
| response.prompt      | string | \u5FC5\u586B | -   | response\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt  |
| provider.serviceName | string | \u5FC5\u586B | -   | DNS\u7C7B\u578B\u7684\u670D\u52A1\u540D\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u901A\u4E49\u5343\u95EE    |
| provider.domain      | string | \u5FC5\u586B | -   | LLM\u670D\u52A1\u57DF\u540D                |
| provider.apiKey      | string | \u5FC5\u586B | -   | \u963F\u91CC\u4E91dashscope\u670D\u52A1\u7684API Key |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
request:
    enable: false
    prompt: "\u5982\u679C\u8BF7\u6C42path\u662F\u4EE5/httpbin\u5F00\u5934\u7684\uFF0C\u5E2E\u6211\u53BB\u6389/httpbin\u524D\u7F00\uFF0C\u5176\u4ED6\u7684\u4E0D\u8981\u6539\u3002"
response: 
    enable: true
    prompt: "\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0BHTTP\u5E94\u7B54\u4FE1\u606F\uFF0C\u8981\u6C42\uFF1A1. content-type\u4FEE\u6539\u4E3Aapplication/json\uFF1B2. body\u7531xml\u8F6C\u5316\u4E3Ajson\uFF1B3. \u79FB\u9664content-length\u3002"
provider: 
    serviceName: qwen
    domain: dashscope.aliyuncs.com
    apiKey: xxxxxxxxxxxxx
\`\`\`

\u8BBF\u95EE\u539F\u59CB\u7684 httbin \u7684 /xml \u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
\`\`\`
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
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u901A\u8FC7\u7F51\u5173\u8BBF\u95EE httpbin \u7684 /xml \u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
\`\`\`
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
\`\`\``,r={title:"AI \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362",description:"\u57FA\u4E8E AI \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u4E0D\u7528\u5199\u4EE3\u7801\uFF0C\u76F4\u63A5\u4F7F\u7528\u81EA\u7136\u8BED\u8A00\u7684\u65B9\u5F0F\u5BF9\u7F51\u5173\u7684\u8BF7\u6C42/\u54CD\u5E94\u8FDB\u884C\u4FEE\u6539\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai","transformer"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-transformer.md",rawData:void 0};export{o as _internal,s as body,t as collection,r as data,e as id,i as slug};