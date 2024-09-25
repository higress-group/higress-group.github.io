const e="latest/zh-cn/plugins/ai/api-dev/ai-agent.md",t="docs",a="latest/zh-cn/plugins/ai/api-dev/ai-agent",n=`
## \u529F\u80FD\u8BF4\u660E
\u4E00\u4E2A\u53EF\u5B9A\u5236\u5316\u7684 API AI Agent\uFF0C\u652F\u6301\u914D\u7F6E http method \u7C7B\u578B\u4E3A GET \u4E0E POST \u7684 API\uFF0C\u652F\u6301\u591A\u8F6E\u5BF9\u8BDD\uFF0C\u652F\u6301\u6D41\u5F0F\u4E0E\u975E\u6D41\u5F0F\u6A21\u5F0F\u3002
agent\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A
![ai-agent](https://img.alicdn.com/imgextra/i1/O1CN01PGSDW31WQfEPm173u_!!6000000002783-0-tps-2733-1473.jpg)


## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`200\`

## \u914D\u7F6E\u5B57\u6BB5

### \u57FA\u672C\u914D\u7F6E
| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                       |
|------------------|-----------|---------|--------|----------------------------|
| \`llm\`            | object    | \u5FC5\u586B    | -      | \u914D\u7F6E AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F     |
| \`apis\`           | object    | \u5FC5\u586B    | -      | \u914D\u7F6E\u5916\u90E8 API \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F |
| \`promptTemplate\` | object    | \u975E\u5FC5\u586B  | -      | \u914D\u7F6E Agent ReAct \u6A21\u677F\u7684\u4FE1\u606F  |

\`llm\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|--------------------|-----------|---------|--------|-----------------------------------|
| \`apiKey\`           | string    | \u5FC5\u586B    | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002|
| \`serviceName\`      | string    | \u5FC5\u586B    | -      | \u5927\u6A21\u578B\u670D\u52A1\u540D                        |
| \`servicePort\`      | int       | \u5FC5\u586B    | -      | \u5927\u6A21\u578B\u670D\u52A1\u7AEF\u53E3                      |
| \`domain\`           | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u57DF\u540D                 |
| \`path\`             | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8DEF\u5F84                 |
| \`model\`            | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u6A21\u578B\u540D               |
| \`maxIterations\`    | int       | \u5FC5\u586B    | 15     | \u7ED3\u675F\u6267\u884C\u5FAA\u73AF\u524D\u7684\u6700\u5927\u6B65\u6570             |
| \`maxExecutionTime\` | int       | \u5FC5\u586B    | 50000  | \u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2  |
| \`maxTokens\`        | int       | \u5FC5\u586B    | 1000   | \u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8F93\u51FAtoken\u9650\u5236      |

\`apis\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|-----------------|-----------|---------|--------|-----------------------------------|
| \`apiProvider\`   | object    | \u5FC5\u586B     | -     | \u5916\u90E8 API \u670D\u52A1\u4FE1\u606F                   |
| \`api\`           | string    | \u5FC5\u586B     | -     | \u5DE5\u5177\u7684 OpenAPI \u6587\u6863                 |

\`apiProvider\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                      |
|-------------------|-----------|---------|--------|------------------------------------------|
| \`apiKey\`          | object    | \u975E\u5FC5\u586B   | -     | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002    |
| \`maxExecutionTime\`| int       | \u975E\u5FC5\u586B   | 50000 | \u6BCF\u4E00\u6B21\u8BF7\u6C42API\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002          |
| \`serviceName\`     | string    | \u5FC5\u586B     | -     | \u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u540D                        |
| \`servicePort\`     | int       | \u5FC5\u586B     | -     | \u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u7AEF\u53E3                      |
| \`domain\`          | string    | \u5FC5\u586B     | -     | \u8BBF\u8BBF\u95EE\u5916\u90E8 API \u65F6\u57DF\u540D                      |

\`apiKey\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42    | \u9ED8\u8BA4\u503C  | \u63CF\u8FF0                                                                          |
|-------------------|---------|------------|--------|-----------------------------------------------------------------------------------------|
| \`in\`              | string  | \u975E\u5FC5\u586B     | none   | \u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u662F\u653E\u5728 header \u4E2D\u8FD8\u662F\u653E\u5728 query \u4E2D\uFF0C\u5982\u679CAPI\u6CA1\u6709\u4EE4\u724C\uFF0C\u586Bnone\u3002
| \`name\`            | string  | \u975E\u5FC5\u586B     | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u540D\u79F0\u3002 |
| \`value\`           | string  | \u975E\u5FC5\u586B     | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u503C\u3002   |

\`promptTemplate\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42   | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                        |
|-----------------|-----------|-----------|--------|--------------------------------------------|
| \`language\`      | string    | \u975E\u5FC5\u586B     | EN    | Agent ReAct \u6A21\u677F\u7684\u8BED\u8A00\u7C7B\u578B\uFF0C\u5305\u62EC CH \u548C EN \u4E24\u79CD|
| \`chTemplate\`    | object    | \u975E\u5FC5\u586B     | -     | Agent ReAct \u4E2D\u6587\u6A21\u677F                         |
| \`enTemplate\`    | object    | \u975E\u5FC5\u586B     | -     | Agent ReAct \u82F1\u6587\u6A21\u677F                         |

\`chTemplate\`\u548C\`enTemplate\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42   | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                         |
|-----------------|-----------|-----------|--------|---------------------------------------------|
| \`question\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 question \u90E8\u5206             |
| \`thought1\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 thought1 \u90E8\u5206             |
| \`observation\`   | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 observation \u90E8\u5206          |
| \`thought2\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 thought2 \u90E8\u5206             |

## \u7528\u6CD5\u793A\u4F8B

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
llm:
  apiKey: xxxxxxxxxxxxxxxxxx
  domain: dashscope.aliyuncs.com
  serviceName: dashscope.dns
  servicePort: 443
  path: /compatible-mode/v1/chat/completions
  model: qwen-max-0403
  maxIterations: 2
promptTemplate:
  language: CH
apis:
- apiProvider:
    domain: restapi.amap.com
    serviceName: geo.dns
    servicePort: 80
    apiKey: 
      in: query
      name: key
      value: xxxxxxxxxxxxxxx
  api: |
    openapi: 3.1.0
    info:
      title: \u9AD8\u5FB7\u5730\u56FE
      description: \u83B7\u53D6 POI \u7684\u76F8\u5173\u4FE1\u606F
      version: v1.0.0
    servers:
      - url: https://restapi.amap.com
    paths:
      /v5/place/text:
        get:
          description: \u6839\u636EPOI\u540D\u79F0\uFF0C\u83B7\u5F97POI\u7684\u7ECF\u7EAC\u5EA6\u5750\u6807
          operationId: get_location_coordinate
          parameters:
            - name: keywords
              in: query
              description: POI\u540D\u79F0\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587
              required: true
              schema:
                type: string
            - name: region
              in: query
              description: POI\u6240\u5728\u7684\u533A\u57DF\u540D\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587
              required: true
              schema:
                type: string
          deprecated: false
      /v5/place/around:
        get:
          description: \u641C\u7D22\u7ED9\u5B9A\u5750\u6807\u9644\u8FD1\u7684POI
          operationId: search_nearby_pois
          parameters:
            - name: keywords
              in: query
              description: \u76EE\u6807POI\u7684\u5173\u952E\u5B57
              required: true
              schema:
                type: string
            - name: location
              in: query
              description: \u4E2D\u5FC3\u70B9\u7684\u7ECF\u5EA6\u548C\u7EAC\u5EA6\uFF0C\u7528\u9017\u53F7\u9694\u5F00
              required: true
              schema:
                type: string
          deprecated: false
    components:
      schemas: {}
- apiProvider:
    domain: api.seniverse.com
    serviceName: seniverse.dns
    servicePort: 80
    apiKey: 
      in: query
      name: key
      value: xxxxxxxxxxxxxxx
  api: |
    openapi: 3.1.0
    info:
      title: \u5FC3\u77E5\u5929\u6C14
      description: \u83B7\u53D6 \u5929\u6C14\u9884\u529E\u76F8\u5173\u4FE1\u606F
      version: v1.0.0
    servers:
      - url: https://api.seniverse.com
    paths:
      /v3/weather/now.json:
        get:
          description: \u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u5B9E\u51B5
          operationId: get_weather_now
          parameters:
            - name: location
              in: query
              description: \u6240\u67E5\u8BE2\u7684\u57CE\u5E02
              required: true
              schema:
                type: string
            - name: language
              in: query
              description: \u8FD4\u56DE\u5929\u6C14\u67E5\u8BE2\u7ED3\u679C\u6240\u4F7F\u7528\u7684\u8BED\u8A00
              required: true
              schema:
                type: string
                default: zh-Hans 
                enum:
                  - zh-Hans 
                  - en 
                  - ja 
            - name: unit
              in: query
              description: \u8868\u793A\u6E29\u5EA6\u7684\u7684\u5355\u4F4D\uFF0C\u6709\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u4E24\u79CD
              required: true
              schema:
                type: string
                default: c 
                enum:
                  - c 
                  - f 
          deprecated: false
    components:
      schemas: {}
- apiProvider:
    apiKey:
      in: "header"
      name: "DeepL-Auth-Key"
      value: "73xxxxxxxxxxxxxxx:fx"
    domain: "api-free.deepl.com"
    serviceName: "deepl.dns"
    servicePort: 443
  api: |
    openapi: 3.1.0
    info:
      title: DeepL API Documentation
      description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.
      version: v1.0.0
    servers:
      - url: https://api-free.deepl.com/v2
    paths:
      /translate:
        post:
          summary: Request Translation
          operationId: translateText
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  type: object
                  required:
                    - text
                    - target_lang
                  properties:
                    text:
                      description: |
                        Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified
                        up to 50 times in a single request. Translations are returned in the same order as they are requested.
                      type: array
                      maxItems: 50
                      items:
                        type: string
                        example: Hello, World!
                    target_lang:
                      description: The language into which the text should be translated.
                      type: string
                      enum:
                        - BG
                        - CS
                        - DA
                        - DE
                        - EL
                        - EN-GB
                        - EN-US
                        - ES
                        - ET
                        - FI
                        - FR
                        - HU
                        - ID
                        - IT
                        - JA
                        - KO
                        - LT
                        - LV
                        - NB
                        - NL
                        - PL
                        - PT-BR
                        - PT-PT
                        - RO
                        - RU
                        - SK
                        - SL
                        - SV
                        - TR
                        - UK
                        - ZH
                        - ZH-HANS
                      example: DE
    components:
      schemas: {}
\`\`\`

\u672C\u793A\u4F8B\u914D\u7F6E\u4E86\u4E09\u4E2A\u670D\u52A1\uFF0C\u6F14\u793A\u4E86get\u4E0Epost\u4E24\u79CD\u7C7B\u578B\u7684\u5DE5\u5177\u3002\u5176\u4E2Dget\u7C7B\u578B\u7684\u5DE5\u5177\u5305\u62EC\u9AD8\u5FB7\u5730\u56FE\u4E0E\u5FC3\u77E5\u5929\u6C14\uFF0Cpost\u7C7B\u578B\u7684\u5DE5\u5177\u662Fdeepl\u7FFB\u8BD1\u3002\u4E09\u4E2A\u670D\u52A1\u90FD\u9700\u8981\u73B0\u5728Higress\u7684\u670D\u52A1\u4E2D\u4EE5DNS\u57DF\u540D\u7684\u65B9\u5F0F\u914D\u7F6E\u597D\uFF0C\u5E76\u786E\u4FDD\u5065\u5EB7\u3002
\u9AD8\u5FB7\u5730\u56FE\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5DE5\u5177\uFF0C\u5206\u522B\u662F\u83B7\u53D6\u6307\u5B9A\u5730\u70B9\u7684\u5750\u6807\uFF0C\u4EE5\u53CA\u641C\u7D22\u5750\u6807\u9644\u8FD1\u7684\u611F\u5174\u8DA3\u7684\u5730\u70B9\u3002\u6587\u6863\uFF1Ahttps://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch
\u5FC3\u77E5\u5929\u6C14\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5B9E\u65F6\u5929\u6C14\u60C5\u51B5\uFF0C\u652F\u6301\u4E2D\u6587\uFF0C\u82F1\u6587\uFF0C\u65E5\u8BED\u8FD4\u56DE\uFF0C\u4EE5\u53CA\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u7684\u8868\u793A\u3002\u6587\u6863\uFF1Ahttps://seniverse.yuque.com/hyper_data/api_v3/nyiu3t
deepl\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u7FFB\u8BD1\u7ED9\u5B9A\u7684\u53E5\u5B50\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u3002\u3002\u6587\u6863\uFF1Ahttps://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true


\u4EE5\u4E0B\u4E3A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u4E3A\u4E86\u6548\u679C\u7684\u7A33\u5B9A\u6027\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u5927\u6A21\u578B\u7248\u672C\u7684\u7A33\u5B9A\uFF0C\u672C\u4F8B\u5B50\u4E2D\u4F7F\u7528\u7684qwen-max-0403\uFF1A

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6211\u60F3\u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\u559D\u5496\u5561\uFF0C\u7ED9\u6211\u63A8\u8350\u51E0\u4E2A"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"139487e7-96a0-9b13-91b4-290fb79ac992","choices":[{"index":0,"message":{"role":"assistant","content":" \u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u5496\u5561\u5E97\uFF1A\\n1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u88571299\u53F7\u946B\u76DB\u5927\u53A62\u53F7\u697C\u5927\u5802\uFF1B\\n2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E0E\u9896\u79C0\u8DEF\u4EA4\u53C9\u53E3\u897F\u535760\u7C73\uFF1B\\n3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9896\u79C0\u8DEF1267\u53F7\uFF1B\\n4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E09\u5E86\u9F50\u76DB\u5E7F\u573A4\u53F7\u697C\u5E95\u5546\uFF1B\\n5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9AD8\u65B0\u533A\u65B0\u6CFA\u5927\u88571166\u53F7\u7F8E\u83B2\u5E7F\u573AL117\u53F7\uFF1B\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u9009\u9879\u3002\u5E0C\u671B\u8FD9\u4E9B\u5EFA\u8BAE\u5BF9\u60A8\u6709\u6240\u5E2E\u52A9\uFF01"},"finish_reason":"stop"}],"created":1723172296,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":886,"completion_tokens":50,"total_tokens":936}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" \u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u72B6\u51B5\u4E3A\u9634\u5929\uFF0C\u6E29\u5EA6\u4E3A31\u2103\u3002\u6B64\u4FE1\u606F\u6700\u540E\u66F4\u65B0\u4E8E2024\u5E748\u67089\u65E515\u65F612\u5206\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role": "user","content": "\u6D4E\u5357\u7684\u5929\u6C14\u5982\u4F55\uFF1F"},{ "role": "assistant","content": "\u76EE\u524D\uFF0C\u6D4E\u5357\u5E02\u7684\u5929\u6C14\u4E3A\u591A\u4E91\uFF0C\u6C14\u6E29\u4E3A24\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E521\u65F650\u520614\u79D2\u3002"},{"role": "user","content": "\u5317\u4EAC\u5462\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":"\u76EE\u524D\uFF0C\u5317\u4EAC\u5E02\u7684\u5929\u6C14\u4E3A\u6674\u6717\uFF0C\u6C14\u6E29\u4E3A19\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E522\u65F617\u520640\u79D2\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":999,"completion_tokens":76,"total_tokens":1075}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F\u7528\u534E\u6C0F\u5EA6\u8868\u793A\uFF0C\u7528\u65E5\u8BED\u56DE\u7B54"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" \u6D4E\u5357\u5E02\u306E\u73FE\u5728\u306E\u5929\u6C17\u306F\u96E8\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u5E2E\u6211\u7528\u5FB7\u8BED\u7FFB\u8BD1\u4EE5\u4E0B\u53E5\u5B50\uFF1A\u4E5D\u5934\u86C7\u4E07\u5C81!"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"65dcf12c-61ff-9e68-bffa-44fc9e6070d5","choices":[{"index":0,"message":{"role":"assistant","content":" \u201C\u4E5D\u5934\u86C7\u4E07\u5C81!\u201D\u7684\u5FB7\u8BED\u7FFB\u8BD1\u4E3A\u201CHoch lebe Hydra!\u201D\u3002"},"finish_reason":"stop"}],"created":1724043865,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":908,"completion_tokens":52,"total_tokens":960}}
\`\`\`
`,s={title:"AI Agent",description:"AI Agent\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI Agent"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-agent.md",rawData:void 0};export{o as _internal,n as body,t as collection,s as data,e as id,a as slug};
