const e="latest/zh-cn/plugins/ai/ai-proxy.md",t="docs",o="latest/zh-cn/plugins/ai/ai-proxy",n=`
## \u529F\u80FD\u8BF4\u660E

\`AI \u4EE3\u7406\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E OpenAI API \u5951\u7EA6\u7684 AI \u4EE3\u7406\u529F\u80FD\u3002\u76EE\u524D\u652F\u6301 OpenAI\u3001Azure OpenAI\u3001\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09\u548C\u901A\u4E49\u5343\u95EE\u7B49 AI
\u670D\u52A1\u63D0\u4F9B\u5546\u3002

> **\u6CE8\u610F\uFF1A**

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/chat/completions\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u751F\u6587\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u751F\u6587\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u751F\u6587\u534F\u8BAE

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/embeddings\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u672C\u5411\u91CF\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE


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

\`context\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|---------------|--------|------|-----|----------------------------------|
| \`fileUrl\`     | string | \u5FC5\u586B   | -   | \u4FDD\u5B58 AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u7684\u6587\u4EF6 URL\u3002\u4EC5\u652F\u6301\u7EAF\u6587\u672C\u7C7B\u578B\u7684\u6587\u4EF6\u5185\u5BB9 |
| \`serviceName\` | string | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u5B8C\u6574\u540D\u79F0        |
| \`servicePort\` | number | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u8BBF\u95EE\u7AEF\u53E3        |

### \u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E

#### OpenAI

OpenAI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`openai\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B:

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                          |
|-------------------|----------|----------|--------|-------------------------------------------------------------------------------|
| \`openaiCustomUrl\` | string   | \u975E\u5FC5\u586B   | -      | \u57FA\u4E8EOpenAI\u534F\u8BAE\u7684\u81EA\u5B9A\u4E49\u540E\u7AEFURL\uFF0C\u4F8B\u5982: www.example.com/myai/v1/chat/completions |


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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "choices": [
    {
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      },
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u4E2AAI\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u4F60\u7684\u95EE\u9898\u548C\u63D0\u4F9B\u5E2E\u52A9\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u5230\u4F60\u7684\u5417\uFF1F",
        "role": "assistant"
      }
    }
  ],
  "created": 1714807624,
  "id": "chatcmpl-abcdefg1234567890",
  "model": "gpt-35-turbo-16k",
  "object": "chat.completion",
  "prompt_filter_results": [
    {
      "prompt_index": 0,
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 40,
    "prompt_tokens": 15,
    "total_tokens": 55
  }
}
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
    'text-embedding-v1': 'text-embedding-v1'
    '*': "qwen-turbo"
\`\`\`

**AI \u5BF9\u8BDD\u8BF7\u6C42\u793A\u4F8B**

URL: http://your-domain/v1/chat/completions

\u8BF7\u6C42\u4F53\uFF1A

\`\`\`json
{
  "model": "text-embedding-v1",
  "input": "Hello"
}
\`\`\`

\u54CD\u5E94\u4F53\u793A\u4F8B\uFF1A

\`\`\`json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -1.0437825918197632,
        5.208984375,
        3.0483806133270264,
        -1.7897135019302368,
        -2.0107421875,
        ...,
        0.8125,
        -1.1759847402572632,
        0.8174641728401184,
        1.0432943105697632,
        -0.5885213017463684
      ]
    }
  ],
  "model": "text-embedding-v1",
  "usage": {
    "prompt_tokens": 1,
    "total_tokens": 1
  }
}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

URL: http://your-domain/v1/embeddings

\u793A\u4F8B\u8BF7\u6C42\u5185\u5BB9\uFF1A

\`\`\`json
{
    "model": "text-embedding-v1",
    "input": [
        "Hello world!"
    ]
}
\`\`\`

\u793A\u4F8B\u54CD\u5E94\u5185\u5BB9\uFF1A

\`\`\`json
{
  "id": "c2518bd3-0f46-97d1-be34-bb5777cb3108",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1715175072,
  "model": "qwen-turbo",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 33,
    "total_tokens": 57
  }
}
\`\`\`

### \u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F

\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u540C\u65F6\u914D\u7F6E\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-turbo"
  context:
    - fileUrl: "http://file.default.svc.cluster.local/ai/context.txt",
      serviceName: "file.dns",
      servicePort: 80
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "cmpl-77861a17681f4987ab8270dbf8001936",
  "object": "chat.completion",
  "created": 9756990,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u8FD9\u4EFD\u6587\u6848\u662F\u4E00\u4EFD\u5173\u4E8E..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20181,
    "completion_tokens": 439,
    "total_tokens": 20620
  }
}
\`\`\`

### \u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587

\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u901A\u4E49\u5343\u95EE\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-long" # \u901A\u4E49\u5343\u95EE\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587\u53EA\u80FD\u5728 qwen-long \u6A21\u578B\u4E0B\u4F7F\u7528
  qwenFileIds:
  - "file-fe-xxx"
  - "file-fe-yyy"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "output": {
    "choices": [
      {
        "finish_reason": "stop",
        "message": {
          "role": "assistant",
          "content": "\u60A8\u4E0A\u4F20\u4E86\u4E24\u4E2A\u6587\u4EF6\uFF0C\`context.txt\` \u548C \`context_2.txt\`\uFF0C\u5B83\u4EEC\u4F3C\u4E4E\u90FD\u5305\u542B\u4E86\u5173\u4E8Exxxx"
        }
      }
    ]
  },
  "usage": {
    "total_tokens": 2023,
    "output_tokens": 530,
    "input_tokens": 1493
  },
  "request_id": "187e99ba-5b64-9ffe-8f69-01dafbaf6ed7"
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "cmpl-e5ca873642ca4f5d8b178c1742f9a8e8",
  "object": "chat.completion",
  "created": 1872961,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u6587\u6848\u5185\u5BB9\u662F\u5173\u4E8E\u4E00\u4E2A\u540D\u4E3A\u201Cxxxx\u201D\u7684\u652F\u4ED8\u5E73\u53F0..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 11,
    "completion_tokens": 498,
    "total_tokens": 509
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102",
  "object": "chat.completion",
  "created": 1715917967,
  "model": "llama3-8b-8192",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u{1F60A} Ni Hao! (That's \\"hello\\" in Chinese!)\\n\\nI am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I'm happy to chat with you in Chinese or help with any questions or topics you'd like to discuss! \u{1F60A}"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 16,
    "prompt_time": 0.005,
    "completion_tokens": 89,
    "completion_time": 0.104,
    "total_tokens": 105,
    "total_time": 0.109
  },
  "system_fingerprint": "fp_dadc9d6142",
  "x_groq": {
    "id": "req_01hy2awmcxfpwbq56qh6svm7qz"
  }
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "msg_01Jt3GzyjuzymnxmZERJguLK",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u60A8\u597D,\u6211\u662F\u4E00\u4E2A\u7531\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8Anthropic\u5F00\u53D1\u7684\u804A\u5929\u52A9\u624B\u3002\u6211\u7684\u540D\u5B57\u53EBClaude,\u662F\u4E00\u4E2A\u806A\u660E\u53CB\u5584\u3001\u77E5\u8BC6\u6E0A\u535A\u7684\u5BF9\u8BDD\u7CFB\u7EDF\u3002\u5F88\u9AD8\u5174\u8BA4\u8BC6\u60A8!\u6211\u53EF\u4EE5\u5C31\u5404\u79CD\u8BDD\u9898\u4E0E\u60A8\u804A\u5929,\u56DE\u7B54\u95EE\u9898,\u63D0\u4F9B\u5EFA\u8BAE\u548C\u5E2E\u52A9\u3002\u6211\u4F1A\u5C3D\u6700\u5927\u52AA\u529B\u7ED9\u60A8\u6709\u5E2E\u52A9\u7684\u56DE\u590D\u3002\u5E0C\u671B\u6211\u4EEC\u80FD\u6709\u4E2A\u6109\u5FEB\u7684\u4EA4\u6D41!"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1717385918,
  "model": "claude-3-opus-20240229",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 16,
    "completion_tokens": 126,
    "total_tokens": 142
  }
}
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

**\u8BF7\u6C42\u793A\u4F8B**
\u8BF7\u6C42\u811A\u672C\uFF1A
\`\`\`sh

curl --location 'http://<your higress domain>/v1/chat/completions' \\
--header 'Content-Type:  application/json' \\
--data '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "system",
      "content": "\u4F60\u662F\u4E00\u4E2A\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
    },
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "temperature": 0.3,
  "stream": false
}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "fd140c3e-0b69-4b19-849b-d354d32a6162",
    "choices": [
        {
            "index": 0,
            "delta": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\u3002"
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717493117,
    "model": "hunyuan-lite",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 15,
        "completion_tokens": 9,
        "total_tokens": 24
    }
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "as-e90yfg1pk1",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF0C\u6211\u662F\u6587\u5FC3\u4E00\u8A00\uFF0C\u82F1\u6587\u540D\u662FERNIE Bot\u3002\u6211\u80FD\u591F\u4E0E\u4EBA\u5BF9\u8BDD\u4E92\u52A8\uFF0C\u56DE\u7B54\u95EE\u9898\uFF0C\u534F\u52A9\u521B\u4F5C\uFF0C\u9AD8\u6548\u4FBF\u6377\u5730\u5E2E\u52A9\u4EBA\u4EEC\u83B7\u53D6\u4FE1\u606F\u3001\u77E5\u8BC6\u548C\u7075\u611F\u3002"
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717251488,
    "model": "ERNIE-4.0",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 33,
        "total_tokens": 37
    }
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "02b2251f8c6c09d68c1743f07c72afd7",
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "message": {
                "content": "\u4F60\u597D\uFF01\u6211\u662FMM\u667A\u80FD\u52A9\u7406\uFF0C\u4E00\u6B3E\u7531MiniMax\u81EA\u7814\u7684\u5927\u578B\u8BED\u8A00\u6A21\u578B\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u89E3\u7B54\u95EE\u9898\uFF0C\u63D0\u4F9B\u4FE1\u606F\uFF0C\u8FDB\u884C\u5BF9\u8BDD\u7B49\u3002\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F",
                "role": "assistant"
            }
        }
    ],
    "created": 1717760544,
    "model": "abab6.5s-chat",
    "object": "chat.completion",
    "usage": {
        "total_tokens": 106
    },
    "input_sensitive": false,
    "output_sensitive": false,
    "input_sensitive_type": 0,
    "output_sensitive_type": 0,
    "base_resp": {
        "status_code": 0,
        "status_msg": ""
    }
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3.5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Who are you?"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "id-1720367803430",
  "object": "chat.completion",
  "created": 1720367803,
  "model": "@cf/meta/llama-3-8b-instruct",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture.\\n\\nI'm a large language model, which means I've been trained on a massive dataset of text from the internet and can generate human-like responses. I can understand natural language and respond accordingly, making me suitable for tasks such as:\\n\\n* Answering questions on various topics\\n* Generating text based on a given prompt\\n* Translating text from one language to another\\n* Summarizing long pieces of text\\n* Creating chatbot dialogues\\n\\nI'm constantly learning and improving, so the more conversations I have with users like you, the better I'll become."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ]
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
        },
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "cha000c23c6@dx190ef0b4b96b8f2532",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u64C5\u957F\u7F16\u7A0B\u548C\u89E3\u51B3\u6280\u672F\u95EE\u9898\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"
            }
        }
    ],
    "created": 1721997415,
    "model": "generalv3.5",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 10,
        "completion_tokens": 19,
        "total_tokens": 29
    }
}
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

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-3.5",
    "messages": [
        {
            "role": "user",
            "content": "Who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities."
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1722756984,
    "model": "gemini-pro",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 29,
        "total_tokens": 34
    }
}
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

## \u5B8C\u6574\u914D\u7F6E\u793A\u4F8B

### Kubernetes \u793A\u4F8B

\u4EE5\u4E0B\u4EE5\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1\u4E3A\u4F8B\uFF0C\u5C55\u793A\u5B8C\u6574\u7684\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\u3002

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy-groq
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: groq
        apiTokens: 
          - "YOUR_API_TOKEN"
    ingress:
    - groq
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: groq.dns
    higress.io/proxy-ssl-name: api.groq.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: groq
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: <YOUR-DOMAIN> 
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
---
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: api.groq.com
    name: groq
    port: 443
    type: dns
\`\`\`

\u8BBF\u95EE\u793A\u4F8B\uFF1A

\`\`\`bash
curl "http://<YOUR-DOMAIN>/v1/chat/completions" -H "Content-Type: application/json" -d '{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}'
\`\`\`

### Docker-Compose \u793A\u4F8B

\`docker-compose.yml\` \u914D\u7F6E\u6587\u4EF6\uFF1A

\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20
    entrypoint: /usr/local/bin/envoy
    # \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\u65B9\u4FBF\u8C03\u8BD5
    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug
    networks:
      - higress-net
    ports:
      - "10000:10000"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./plugin.wasm:/etc/envoy/plugin.wasm
networks:
  higress-net: {}
\`\`\`

\`envoy.yaml\` \u914D\u7F6E\u6587\u4EF6\uFF1A

\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                # Output envoy logs to stdout
                access_log:
                  - name: envoy.access_loggers.stdout
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog
                # Modify as required
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: [ "*" ]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: claude
                            timeout: 300s
                http_filters:
                  - name: claude
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: claude
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: | # \u63D2\u4EF6\u914D\u7F6E
                              {
                                "provider": {
                                  "type": "claude",                                
                                  "apiTokens": [
                                    "YOUR_API_TOKEN"
                                  ]                  
                                }
                              }
                  - name: envoy.filters.http.router
  clusters:
    - name: claude
      connect_timeout: 30s
      type: LOGICAL_DNS
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: claude
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: api.anthropic.com # API \u670D\u52A1\u5730\u5740
                      port_value: 443
      transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext
          "sni": "api.anthropic.com"
\`\`\`

\u8BBF\u95EE\u793A\u4F8B\uFF1A

\`\`\`bash
curl "http://localhost:10000/v1/chat/completions"  -H "Content-Type: application/json"  -d '{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}'
\`\`\`
`,s={title:"AI \u4EE3\u7406",description:"AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI\u4EE3\u7406"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-proxy.md",rawData:void 0};export{a as _internal,n as body,t as collection,s as data,e as id,o as slug};
