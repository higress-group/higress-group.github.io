const e="latest/zh-cn/plugins/ai/api-provider/ai-proxy.md",t="docs",n="latest/zh-cn/plugins/ai/api-provider/ai-proxy",a=`
## \u529F\u80FD\u8BF4\u660E

\`AI \u4EE3\u7406\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E OpenAI API \u5951\u7EA6\u7684 AI \u4EE3\u7406\u529F\u80FD\u3002\u76EE\u524D\u652F\u6301 OpenAI\u3001Azure OpenAI\u3001\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09\u548C\u901A\u4E49\u5343\u95EE\u7B49 AI
\u670D\u52A1\u63D0\u4F9B\u5546\u3002

> **\u6CE8\u610F\uFF1A**

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/chat/completions\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u751F\u6587\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u751F\u6587\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u751F\u6587\u534F\u8BAE

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/embeddings\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u672C\u5411\u91CF\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`100\`


## \u914D\u7F6E\u5B57\u6BB5

### \u57FA\u672C\u914D\u7F6E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0               |
|------------|--------|------|-----|------------------|
| \`provider\` | object | \u5FC5\u586B   | -   | \u914D\u7F6E\u76EE\u6807 AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F |

\`provider\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0           | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                                                                                                                           |
| -------------- | --------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                  |
| \`type\`         | string          | \u5FC5\u586B     | -      | AI \u670D\u52A1\u63D0\u4F9B\u5546\u540D\u79F0                                                                                                                                                                                                                                              |
| \`apiTokens\`    | array of string | \u975E\u5FC5\u586B   | -      | \u7528\u4E8E\u5728\u8BBF\u95EE AI \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u591A\u4E2A token\uFF0C\u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42\u65F6\u968F\u673A\u8FDB\u884C\u9009\u62E9\u3002\u90E8\u5206\u670D\u52A1\u63D0\u4F9B\u5546\u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A token\u3002                                                                                                                                     |
| \`timeout\`      | number          | \u975E\u5FC5\u586B   | -      | \u8BBF\u95EE AI \u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A 120000\uFF0C\u5373 2 \u5206\u949F                                                                                                                                                                                                 |
| \`modelMapping\` | map of string   | \u975E\u5FC5\u586B   | -      | AI \u6A21\u578B\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u4E2D\u7684\u6A21\u578B\u540D\u79F0\u6620\u5C04\u4E3A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\u6A21\u578B\u540D\u79F0\u3002<br/>1. \u652F\u6301\u524D\u7F00\u5339\u914D\u3002\u4F8B\u5982\u7528 "gpt-3-*" \u5339\u914D\u6240\u6709\u540D\u79F0\u4EE5\u201Cgpt-3-\u201D\u5F00\u5934\u7684\u6A21\u578B\uFF1B<br/>2. \u652F\u6301\u4F7F\u7528 "*" \u4E3A\u952E\u6765\u914D\u7F6E\u901A\u7528\u515C\u5E95\u6620\u5C04\u5173\u7CFB\uFF1B<br/>3. \u5982\u679C\u6620\u5C04\u7684\u76EE\u6807\u540D\u79F0\u4E3A\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u5219\u8868\u793A\u4FDD\u7559\u539F\u6A21\u578B\u540D\u79F0\u3002 |
| \`protocol\`     | string          | \u975E\u5FC5\u586B   | -      | \u63D2\u4EF6\u5BF9\u5916\u63D0\u4F9B\u7684 API \u63A5\u53E3\u5951\u7EA6\u3002\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53D6\u503C\uFF1Aopenai\uFF08\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 OpenAI \u7684\u63A5\u53E3\u5951\u7EA6\uFF09\u3001original\uFF08\u4F7F\u7528\u76EE\u6807\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u539F\u59CB\u63A5\u53E3\u5951\u7EA6\uFF09                                                                                                                          |
| \`context\`      | object          | \u975E\u5FC5\u586B   | -      | \u914D\u7F6E AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u4FE1\u606F                                                                                                                                                                                                                                         |
| \`customSettings\` | array of customSetting | \u975E\u5FC5\u586B   | -      | \u4E3AAI\u8BF7\u6C42\u6307\u5B9A\u8986\u76D6\u6216\u8005\u586B\u5145\u53C2\u6570                                                                                                                                                                                                                                 |

\`context\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|---------------|--------|------|-----|----------------------------------|
| \`fileUrl\`     | string | \u5FC5\u586B   | -   | \u4FDD\u5B58 AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u7684\u6587\u4EF6 URL\u3002\u4EC5\u652F\u6301\u7EAF\u6587\u672C\u7C7B\u578B\u7684\u6587\u4EF6\u5185\u5BB9 |
| \`serviceName\` | string | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u5B8C\u6574\u540D\u79F0        |
| \`servicePort\` | number | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u8BBF\u95EE\u7AEF\u53E3        |


\`customSettings\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B              | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                         |
| ----------- | --------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| \`name\`      | string                | \u5FC5\u586B     | -      | \u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4F8B\u5982\`max_tokens\`                                                                                       |
| \`value\`     | string/int/float/bool | \u5FC5\u586B     | -      | \u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u503C\uFF0C\u4F8B\u59820                                                                                                    |
| \`mode\`      | string                | \u975E\u5FC5\u586B   | "auto" | \u53C2\u6570\u8BBE\u7F6E\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A"auto"\u6216\u8005"raw"\uFF0C\u5982\u679C\u4E3A"auto"\u5219\u4F1A\u81EA\u52A8\u6839\u636E\u534F\u8BAE\u5BF9\u53C2\u6570\u540D\u505A\u6539\u5199\uFF0C\u5982\u679C\u4E3A"raw"\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u5199\u548C\u9650\u5236\u68C0\u67E5 |
| \`overwrite\` | bool                  | \u975E\u5FC5\u586B   | true   | \u5982\u679C\u4E3Afalse\u5219\u53EA\u5728\u7528\u6237\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E2A\u53C2\u6570\u65F6\u586B\u5145\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u76F4\u63A5\u8986\u76D6\u7528\u6237\u539F\u6709\u7684\u53C2\u6570\u8BBE\u7F6E                                            |


custom-setting\u4F1A\u9075\u5FAA\u5982\u4E0B\u8868\u683C\uFF0C\u6839\u636E\`name\`\u548C\u534F\u8BAE\u6765\u66FF\u6362\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u7528\u6237\u9700\u8981\u586B\u5199\u8868\u683C\u4E2D\`settingName\`\u5217\u4E2D\u5B58\u5728\u7684\u503C\u3002\u4F8B\u5982\u7528\u6237\u5C06\`name\`\u8BBE\u7F6E\u4E3A\`max_tokens\`\uFF0C\u5728openai\u534F\u8BAE\u4E2D\u4F1A\u66FF\u6362\`max_tokens\`\uFF0C\u5728gemini\u4E2D\u4F1A\u66FF\u6362\`maxOutputTokens\`\u3002
\`none\`\u8868\u793A\u8BE5\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\u3002\u5982\u679C\`name\`\u4E0D\u5728\u6B64\u8868\u683C\u4E2D\u6216\u8005\u5BF9\u5E94\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\uFF0C\u540C\u65F6\u6CA1\u6709\u8BBE\u7F6Eraw\u6A21\u5F0F\uFF0C\u5219\u914D\u7F6E\u4E0D\u4F1A\u751F\u6548\u3002


| settingName | openai      | baidu             | spark       | qwen        | gemini          | hunyuan     | claude      | minimax            |
| ----------- | ----------- | ----------------- | ----------- | ----------- | --------------- | ----------- | ----------- | ------------------ |
| max_tokens  | max_tokens  | max_output_tokens | max_tokens  | max_tokens  | maxOutputTokens | none        | max_tokens  | tokens_to_generate |
| temperature | temperature | temperature       | temperature | temperature | temperature     | Temperature | temperature | temperature        |
| top_p       | top_p       | top_p             | none        | top_p       | topP            | TopP        | top_p       | top_p              |
| top_k       | none        | none              | top_k       | none        | topK            | none        | top_k       | none               |
| seed        | seed        | none              | none        | seed        | none            | none        | none        | none               |

\u5982\u679C\u542F\u7528\u4E86raw\u6A21\u5F0F\uFF0Ccustom-setting\u4F1A\u76F4\u63A5\u7528\u8F93\u5165\u7684\`name\`\u548C\`value\`\u53BB\u66F4\u6539\u8BF7\u6C42\u4E2D\u7684json\u5185\u5BB9\uFF0C\u800C\u4E0D\u5BF9\u53C2\u6570\u540D\u79F0\u505A\u4EFB\u4F55\u9650\u5236\u548C\u4FEE\u6539\u3002
\u5BF9\u4E8E\u5927\u591A\u6570\u534F\u8BAE\uFF0Ccustom-setting\u90FD\u4F1A\u5728json\u5185\u5BB9\u7684\u6839\u8DEF\u5F84\u4FEE\u6539\u6216\u8005\u586B\u5145\u53C2\u6570\u3002\u5BF9\u4E8E\`qwen\`\u534F\u8BAE\uFF0Cai-proxy\u4F1A\u5728json\u7684\`parameters\`\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002\u5BF9\u4E8E\`gemini\`\u534F\u8BAE\uFF0C\u5219\u4F1A\u5728\`generation_config\`\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002


### \u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E

#### OpenAI

OpenAI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`openai\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B:

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                          |
|-------------------|----------|----------|--------|-------------------------------------------------------------------------------|
| \`openaiCustomUrl\` | string   | \u975E\u5FC5\u586B   | -      | \u57FA\u4E8EOpenAI\u534F\u8BAE\u7684\u81EA\u5B9A\u4E49\u540E\u7AEFURL\uFF0C\u4F8B\u5982: www.example.com/myai/v1/chat/completions |
| \`responseJsonSchema\` | object | \u975E\u5FC5\u586B | - | \u9884\u5148\u5B9A\u4E49OpenAI\u54CD\u5E94\u9700\u6EE1\u8DB3\u7684Json Schema, \u6CE8\u610F\u76EE\u524D\u4EC5\u7279\u5B9A\u7684\u51E0\u79CD\u6A21\u578B\u652F\u6301\u8BE5\u7528\u6CD5|


#### Azure OpenAI

Azure OpenAI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`azure\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`azureServiceUrl\` | string | \u5FC5\u586B   | -   | Azure OpenAI \u670D\u52A1\u7684 URL\uFF0C\u987B\u5305\u542B \`api-version\` \u67E5\u8BE2\u53C2\u6570\u3002 |

**\u6CE8\u610F\uFF1A** Azure OpenAI \u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A API Token\u3002

#### \u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09

\u6708\u4E4B\u6697\u9762\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`moonshot\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                          |
|------------------|--------|------|-----|-------------------------------------------------------------|
| \`moonshotFileId\` | string | \u975E\u5FC5\u586B  | -   | \u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3\u6708\u4E4B\u6697\u9762\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E \`context\` \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002 |

#### \u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09

\u901A\u4E49\u5343\u95EE\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`qwen\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                 | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                               |
|--------------------|-----------------|------|-----|------------------------------------------------------------------|
| \`qwenEnableSearch\` | boolean         | \u975E\u5FC5\u586B  | -   | \u662F\u5426\u542F\u7528\u901A\u4E49\u5343\u95EE\u5185\u7F6E\u7684\u4E92\u8054\u7F51\u641C\u7D22\u529F\u80FD\u3002                          |
| \`qwenFileIds\`      | array of string | \u975E\u5FC5\u586B  | -   | \u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3Dashscope\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E \`context\` \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002 |

#### \u767E\u5DDD\u667A\u80FD (Baichuan AI)

\u767E\u5DDD\u667A\u80FD\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`baichuan\` \u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u96F6\u4E00\u4E07\u7269\uFF08Yi\uFF09

\u96F6\u4E00\u4E07\u7269\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`yi\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u667A\u8C31AI\uFF08Zhipu AI\uFF09

\u667A\u8C31AI\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`zhipuai\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### DeepSeek\uFF08DeepSeek\uFF09

DeepSeek\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`deepseek\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Groq

Groq \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`groq\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u6587\u5FC3\u4E00\u8A00\uFF08Baidu\uFF09

\u6587\u5FC3\u4E00\u8A00\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`baidu\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### 360\u667A\u8111

360\u667A\u8111\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`ai360\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Mistral

Mistral \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`mistral\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### MiniMax

MiniMax\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`minimax\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42                                                     | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                         |
| ---------------- | -------- | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| \`minimaxGroupId\` | string   | \u5F53\u4F7F\u7528\`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`\u56DB\u79CD\u6A21\u578B\u65F6\u5FC5\u586B | -      | \u5F53\u4F7F\u7528\`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`\u56DB\u79CD\u6A21\u578B\u65F6\u4F1A\u4F7F\u7528ChatCompletion Pro\uFF0C\u9700\u8981\u8BBE\u7F6EgroupID |

#### Anthropic Claude

Anthropic Claude \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`claude\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|-----------|--------|------|-----|----------------------------------|
| \`claudeVersion\` | string | \u53EF\u9009   | -   | Claude \u670D\u52A1\u7684 API \u7248\u672C\uFF0C\u9ED8\u8BA4\u4E3A 2023-06-01 |

#### Ollama

Ollama \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`ollama\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`ollamaServerHost\` | string | \u5FC5\u586B   | -   | Ollama \u670D\u52A1\u5668\u7684\u4E3B\u673A\u5730\u5740 |
| \`ollamaServerPort\` | number | \u5FC5\u586B   | -   | Ollama \u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u4E3A11434 |

#### \u6DF7\u5143

\u6DF7\u5143\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`hunyuan\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`hunyuanAuthId\` | string | \u5FC5\u586B   | -   | \u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684id |
| \`hunyuanAuthKey\` | string | \u5FC5\u586B   | -   | \u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684key |

#### \u9636\u8DC3\u661F\u8FB0 (Stepfun)

\u9636\u8DC3\u661F\u8FB0\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`stepfun\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Cloudflare Workers AI

Cloudflare Workers AI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`cloudflare\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                         |
|-------------------|--------|------|-----|----------------------------------------------------------------------------------------------------------------------------|
| \`cloudflareAccountId\` | string | \u5FC5\u586B   | -   | [Cloudflare Account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id) |

#### \u661F\u706B (Spark)

\u661F\u706B\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`spark\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

\u8BAF\u98DE\u661F\u706B\u8BA4\u77E5\u5927\u6A21\u578B\u7684\`apiTokens\`\u5B57\u6BB5\u503C\u4E3A\`APIKey:APISecret\`\u3002\u5373\u586B\u5165\u81EA\u5DF1\u7684APIKey\u4E0EAPISecret\uFF0C\u5E76\u4EE5\`:\`\u5206\u9694\u3002

#### Gemini

Gemini \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`gemini\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                  | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                              |
| --------------------- | -------- | -------- |-----|-------------------------------------------------------------------------------------------------|
| \`geminiSafetySetting\` | map of string   | \u975E\u5FC5\u586B     | -   | Gemini AI\u5185\u5BB9\u8FC7\u6EE4\u548C\u5B89\u5168\u7EA7\u522B\u8BBE\u5B9A\u3002\u53C2\u8003[Safety settings](https://ai.google.dev/gemini-api/docs/safety-settings) |

#### DeepL

DeepL \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`deepl\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                         |
| ------------ | -------- | -------- | ------ | ---------------------------- |
| \`targetLang\` | string   | \u5FC5\u586B     | -      | DeepL \u7FFB\u8BD1\u670D\u52A1\u9700\u8981\u7684\u76EE\u6807\u8BED\u79CD |

#### Cohere

Cohere \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`cohere\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

## \u7528\u6CD5\u793A\u4F8B

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1

\u4F7F\u7528\u6700\u57FA\u672C\u7684 Azure OpenAI \u670D\u52A1\uFF0C\u4E0D\u914D\u7F6E\u4EFB\u4F55\u4E0A\u4E0B\u6587\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: azure
  apiTokens:
    - "YOUR_AZURE_OPENAI_API_TOKEN"
  azureServiceUrl: "https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview",
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1

\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u5E76\u914D\u7F6E\u4ECE OpenAI \u5927\u6A21\u578B\u5230\u901A\u4E49\u5343\u95EE\u7684\u6A21\u578B\u6620\u5C04\u5173\u7CFB\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    'gpt-3': "qwen-turbo"
    'gpt-35-turbo': "qwen-plus"
    'gpt-4-turbo': "qwen-max"
    'gpt-4-*': "qwen-max"
    'gpt-4o': "qwen-vl-plus"
    'text-embedding-v1': 'text-embedding-v1'
    '*': "qwen-turbo"
\`\`\`

### \u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528
**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_DASHSCOPE_API_TOKEN"
  protocol: original
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: doubao
  apiTokens:
    - YOUR_DOUBAO_API_KEY
  modelMapping:
    '*': YOUR_DOUBAO_ENDPOINT
  timeout: 1200000
\`\`\`

### \u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587

\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u6708\u4E4B\u6697\u9762\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  moonshotFileId: "YOUR_MOONSHOT_FILE_ID",
  modelMapping:
    '*': "moonshot-v1-32k"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  version: "2023-06-01"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: "hunyuan"
  hunyuanAuthKey: "<YOUR AUTH KEY>"
  apiTokens:
    - ""
  hunyuanAuthId: "<YOUR AUTH ID>"
  timeout: 1200000
  modelMapping:
    "*": "hunyuan-lite"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: baidu
  apiTokens:
    - "YOUR_BAIDU_API_TOKEN"
  modelMapping:
    'gpt-3': "ERNIE-4.0"
    '*': "ERNIE-4.0"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: minimax
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-3": "abab6.5g-chat"
    "gpt-4": "abab6.5-chat"
    "*": "abab6.5g-chat"
  minimaxGroupId: "YOUR_MINIMAX_GROUP_ID"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: ai360
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-4o": "360gpt-turbo-responsibility-8k"
    "gpt-4": "360gpt2-pro"
    "gpt-3.5": "360gpt-turbo"
    "text-embedding-3-small": "embedding_s1_v1.2"
    "*": "360gpt-pro"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: cloudflare
  apiTokens:
    - "YOUR_WORKERS_AI_API_TOKEN"
  cloudflareAccountId: "YOUR_CLOUDFLARE_ACCOUNT_ID"
  modelMapping:
    "*": "@cf/meta/llama-3-8b-instruct"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: spark
  apiTokens:
    - "APIKey:APISecret"
  modelMapping:
    "gpt-4o": "generalv3.5"
    "gpt-4": "generalv3"
    "*": "general"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: gemini
  apiTokens:
    - "YOUR_GEMINI_API_TOKEN"
  modelMapping:
    "*": "gemini-pro"
  geminiSafetySetting:
    "HARM_CATEGORY_SEXUALLY_EXPLICIT" :"BLOCK_NONE"
    "HARM_CATEGORY_HATE_SPEECH" :"BLOCK_NONE"
    "HARM_CATEGORY_HARASSMENT" :"BLOCK_NONE"
    "HARM_CATEGORY_DANGEROUS_CONTENT" :"BLOCK_NONE"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: deepl
  apiTokens:
    - "YOUR_DEEPL_API_TOKEN"
  targetLang: "ZH"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**
\u6B64\u5904 \`model\` \u8868\u793A DeepL \u7684\u670D\u52A1\u7C7B\u578B\uFF0C\u53EA\u80FD\u586B \`Free\` \u6216 \`Pro\`\u3002\`content\` \u4E2D\u8BBE\u7F6E\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\uFF1B\u5728 \`role: system\` \u7684 \`content\` \u4E2D\u53EF\u4EE5\u5305\u542B\u53EF\u80FD\u5F71\u54CD\u7FFB\u8BD1\u4F46\u672C\u8EAB\u4E0D\u4F1A\u88AB\u7FFB\u8BD1\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982\u7FFB\u8BD1\u4EA7\u54C1\u540D\u79F0\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4EA7\u54C1\u63CF\u8FF0\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F20\u9012\uFF0C\u8FD9\u79CD\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u53EF\u80FD\u4F1A\u63D0\u9AD8\u7FFB\u8BD1\u7684\u8D28\u91CF\u3002

\`\`\`json
{
  "model": "Free",
  "messages": [
    {
      "role": "system",
      "content": "money"
    },
    {
      "content": "sit by the bank"
    },
    {
      "content": "a bank in China"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**
\`\`\`json
{
  "choices": [
    {
      "index": 0,
      "message": { "name": "EN", "role": "assistant", "content": "\u5750\u5E84" }
    },
    {
      "index": 1,
      "message": { "name": "EN", "role": "assistant", "content": "\u4E2D\u56FD\u94F6\u884C" }
    }
  ],
  "created": 1722747752,
  "model": "Free",
  "object": "chat.completion",
  "usage": {}
}
\`\`\`

`,o={title:"AI \u4EE3\u7406",description:"AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI\u4EE3\u7406"]},p={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-proxy.md",rawData:void 0};export{p as _internal,a as body,t as collection,o as data,e as id,n as slug};
