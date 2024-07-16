const e="latest/zh-cn/plugins/traffic/request-validation.md",a="docs",t="latest/zh-cn/plugins/traffic/request-validation",r=`
## \u529F\u80FD\u8BF4\u660E

\`request-validation\` \u63D2\u4EF6\u7528\u4E8E\u63D0\u524D\u9A8C\u8BC1\u5411\u4E0A\u6E38\u670D\u52A1\u8F6C\u53D1\u7684\u8BF7\u6C42\u3002\u8BE5\u63D2\u4EF6\u4F7F\u7528 \`JSON Schema\` \u673A\u5236\u8FDB\u884C\u6570\u636E\u9A8C\u8BC1\uFF0C\u53EF\u4EE5\u9A8C\u8BC1\u8BF7\u6C42\u7684 Body \u4EE5\u53CA Header \u7684\u6570\u636E\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |
| -------- | -------- | -------- |-----|------------------------------|
|header_schema|object|\u9009\u586B| -   | \u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42 Header \u7684JSON Schema |
|body_schema|object|\u9009\u586B| -   | \u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42 Body \u7684 JSON Schema  |
|rejected_code|number|\u9009\u586B| 403 | \u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801         |
|rejected_msg|string|\u9009\u586B| - | \u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body     |
|enable_swagger|bool|\u9009\u586B| false | \u914D\u7F6E\u662F\u5426\u5F00\u542F Swagger \u6587\u6863\u9A8C\u8BC1          |
|enable_oas3|bool|\u9009\u586B| false | \u914D\u7F6E\u662F\u5426\u5F00\u542F OAS3 \u6587\u6863\u9A8C\u8BC1             |

**\u6821\u9A8C\u89C4\u5219\u5BF9 Header \u548C Body \u662F\u4E00\u6837\u7684\uFF0C\u4E0B\u9762\u4EE5 Body \u4E3A\u4F8B\u8BF4\u660E\u3002**

## \u914D\u7F6E\u793A\u4F8B

### \u679A\u4E3E\uFF08Enum\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - enum_payload
  properties:
    enum_payload:
      type: string
      enum:
        - "enum_string_1"
        - "enum_string_2"
      default: "enum_string_1"
\`\`\`

### \u5E03\u5C14\uFF08Boolean\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
      default: true
\`\`\`

### \u6570\u5B57\u8303\u56F4\uFF08Number or Integer\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - integer_payload
  properties:
    integer_payload:
      type: integer
      minimum: 1
      maximum: 10
\`\`\`

### \u5B57\u7B26\u4E32\u957F\u5EA6\uFF08String\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - string_payload
  properties:
    string_payload:
      type: string
      minLength: 1
      maxLength: 10
\`\`\`

### \u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regex\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - regex_payload
  properties:
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
\`\`\`

### \u6570\u7EC4\uFF08Array\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - array_payload
  properties:
    array_payload:
      type: array
      minItems: 1
      items:
        type: integer
        minimum: 1
        maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
\`\`\`

### \u591A\u5B57\u6BB5\u7EC4\u5408\uFF08Combined\uFF09\u9A8C\u8BC1

\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
    - array_payload
    - regex_payload
  properties:
    boolean_payload:
      type: boolean
    array_payload:
      type: array
      minItems: 1
      items:
          type: integer
          minimum: 1
          maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
\`\`\`

### \u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F

\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
rejected_code: 403
rejected_msg: "\u8BF7\u6C42\u88AB\u62D2\u7EDD"
\`\`\`
`,o={title:"\u8BF7\u6C42\u6821\u9A8C",description:"\u8BF7\u6C42\u6821\u9A8C\u63D2\u4EF6\u7528\u4E8E\u63D0\u524D\u9A8C\u8BC1\u5411\u4E0A\u6E38\u670D\u52A1\u8F6C\u53D1\u7684\u8BF7\u6C42\u3002\u8BE5\u63D2\u4EF6\u4F7F\u7528 `JSON Schema` \u673A\u5236\u8FDB\u884C\u6570\u636E\u9A8C\u8BC1\uFF0C\u53EF\u4EE5\u9A8C\u8BC1\u8BF7\u6C42\u7684 Body \u4EE5\u53CA Header \u7684\u6570\u636E\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/request-validation.md",rawData:void 0};export{i as _internal,r as body,a as collection,o as data,e as id,t as slug};
