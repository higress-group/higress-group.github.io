const e="latest/zh-cn/plugins/transformation/transformer.md",a="docs",r="latest/zh-cn/plugins/transformation/transformer",t=`

## \u529F\u80FD\u8BF4\u660E
\`transformer\` \u63D2\u4EF6\u53EF\u4EE5\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8FDB\u884C\u8F6C\u6362\uFF0C\u652F\u6301\u7684\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u5305\u62EC\u5220\u9664\u3001\u91CD\u547D\u540D\u3001\u66F4\u65B0\u3001\u6DFB\u52A0\u3001\u8FFD\u52A0\u3001\u6620\u5C04\u3001\u53BB\u91CD\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`410\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| ------ | ------ | ------ | ------ | -------- |
|  reqRules |  string  | \u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A |   -  |  \u8BF7\u6C42\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\u7684\u8F6C\u6362\u89C4\u5219  |
|  respRules |  string  | \u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A |   -  |  \u54CD\u5E94\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u54CD\u5E94\u5934\u3001\u54CD\u5E94\u4F53\u7684\u8F6C\u6362\u89C4\u5219  |

\`reqRules\`\u548C\`respRules\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| ------ | ------ | ------ | ------ | -------- |
| operate |  string  | \u5FC5\u586B\uFF0C\u53EF\u9009\u503C\u4E3A \`remove\`, \`rename\`, \`replace\`, \`add\`, \`append\`, \`map\`, \`dedupe\` |   -  |  \u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u7C7B\u578B\u6709\u5220\u9664 (remove)\u3001\u91CD\u547D\u540D (rename)\u3001\u66F4\u65B0 (replace)\u3001\u6DFB\u52A0 (add)\u3001\u8FFD\u52A0 (append)\u3001\u6620\u5C04 (map)\u3001\u53BB\u91CD (dedupe)\uFF0C\u5F53\u5B58\u5728\u591A\u9879\u4E0D\u540C\u7C7B\u578B\u7684\u8F6C\u6362\u89C4\u5219\u65F6\uFF0C\u6309\u7167\u4E0A\u8FF0\u64CD\u4F5C\u7C7B\u578B\u987A\u5E8F\u4F9D\u6B21\u6267\u884C  |
|  mapSource  | string  | \u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A\`headers\`, \`querys\`,\`body\` |  -  | \u4EC5\u5728operate\u4E3A\`map\`\u65F6\u6709\u6548\u3002\u6307\u5B9A\u6620\u5C04\u6765\u6E90\uFF0C\u82E5\u4E0D\u586B\u8BE5\u5B57\u6BB5\uFF0C\u5219\u9ED8\u8BA4\u6620\u5C04\u6765\u6E90\u4E3A\u81EA\u8EAB |
|  headers  |  array of object  | \u9009\u586B     |  -  | \u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u5934\u8F6C\u6362\u89C4\u5219 |
| querys |  array of object  | \u9009\u586B     |   -  | \u6307\u5B9A\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u89C4\u5219 |
| body | array of object | \u9009\u586B | - | \u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8F6C\u6362\u89C4\u5219\uFF0C\u8BF7\u6C42\u4F53\u8F6C\u6362\u5141\u8BB8 content-type \u4E3A \`application/json\`, \`application/x-www-form-urlencoded\`, \`multipart/form-data\`\uFF1B\u54CD\u5E94\u4F53\u8F6C\u6362\u4EC5\u5141\u8BB8 content-type \u4E3A \`application/json\` |

\`headers\`, \`querys\`, \`body\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                |
| ------ | ------ | ------ | -------- |---------------------------------------------------|
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`remove\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| oldKey | string | \u9009\u586B | - |\u5728operate\u4E3A\`rename\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| newKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`rename\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key | string | \u9009\u586B | - | \u5728operate\u4E3A\`replace\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| newValue |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`replace\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key | string | \u9009\u586B | - | \u5728operate\u4E3A\`add\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| value | string | \u9009\u586B | - | \u5728operate\u4E3A\`add\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`append\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| appendValue | string | \u9009\u586B | - | \u5728operate\u4E3A\`append\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| fromKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`map\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| toKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`map\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`dedupe\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| strategy |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`dedupe\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
|  value_type  |  string  | \u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A \`object\`, \`boolean\`, \`number\`, \`string\` |  string  | \u5F53\`content-type: application/json\`\u65F6\uFF0C\u8BE5\u5B57\u6BB5\u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u7684\u503C\u7C7B\u578B |
| host_pattern |  string  | \u9009\u586B     |   -  | \u6307\u5B9A\u8BF7\u6C42\u4E3B\u673A\u540D\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A \`replace\`, \`add\`, \`append\` \u65F6\u6709\u6548 |
| path_pattern | string | \u9009\u586B | - | \u6307\u5B9A\u8BF7\u6C42\u8DEF\u5F84\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A \`replace\`, \`add\`, \`append\` \u65F6\u6709\u6548 |

\u6CE8\u610F\uFF1A

* \`request transformer\` \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u8BF7\u6C42\u5934\u90E8\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\uFF08application/json, application/x-www-form-urlencoded, multipart/form-data\uFF09
* \`response transformer\` \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u54CD\u5E94\u5934\u90E8\u3001\u54CD\u5E94\u4F53\uFF08application/json\uFF09
* \u63D2\u4EF6\u652F\u6301\u53CC\u5411\u8F6C\u6362\u80FD\u529B\uFF0C\u5373\u5355\u4E2A\u63D2\u4EF6\u80FD\u591F\u5B8C\u6210\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u505A\u8F6C\u6362
* \u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u4E3A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7F16\u5199\u7684\u987A\u5E8F\uFF0C\u5982\uFF1Aremove \u2192 rename \u2192 replace \u2192 add \u2192 append \u2192 map \u2192 dedupe\u6216\u8005dedupe \u2192 map \u2192 append \u2192 add \u2192 replace \u2192 rename \u2192 remove\u7B49
* \u5F53\u8F6C\u6362\u5BF9\u8C61\u4E3A headers \u65F6\uFF0C\` key\` \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u5F53\u4E3A headers \u4E14\u4E3A \`rename\`, \`map\` \u64CD\u4F5C\u65F6\uFF0C\`value\` \u4E5F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF08\u56E0\u4E3A\u6B64\u65F6\u8BE5\u5B57\u6BB5\u5177\u6709 key \u542B\u4E49\uFF09\uFF1B\u800C querys \u548C body \u7684 \`key\`, \`value\` \u5B57\u6BB5\u5747\u533A\u5206\u5927\u5C0F\u5199
* \`value_type\` \u4EC5\u5BF9 content-type \u4E3A application/json \u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u6709\u6548
* \`host_pattern\` \u548C \`path_pathern\` \u652F\u6301 [RE2 \u8BED\u6CD5](https://pkg.go.dev/regexp/syntax)\uFF0C\u4EC5\u5BF9 \`replace\`, \`add\`, \`append\` \u64CD\u4F5C\u6709\u6548\uFF0C\u4E14\u5728\u4E00\u9879\u8F6C\u6362\u89C4\u5219\u4E2D\u4E24\u8005\u53EA\u80FD\u9009\u586B\u5176\u4E00\uFF0C\u82E5\u5747\u586B\u5199\uFF0C\u5219 \`host_pattern\` \u751F\u6548\uFF0C\u800C \`path_pattern\` \u5931\u6548



## \u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B

| \u64CD\u4F5C\u7C7B\u578B      | key \u5B57\u6BB5\u542B\u4E49 | value \u5B57\u6BB5\u542B\u4E49     | \u63CF\u8FF0                                                         |
| ------ | ------ | ------ | ------------------------------------------------------------ |
| \u5220\u9664 remove   | \u76EE\u6807 key     |\u65E0\u9700\u8BBE\u7F6E| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key\`\uFF0C\u5219\u5220\u9664\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C                 |
| \u91CD\u547D\u540D rename | \u76EE\u6807 oldKey |\u65B0\u7684 key \u540D\u79F0 newKey| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`oldKey:value\`\uFF0C\u5219\u5C06\u5176\u952E\u540D\u91CD\u547D\u540D\u4E3A \`newKey\`\uFF0C\u5F97\u5230 \`newKey:value\`\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u66F4\u65B0 replace  | \u76EE\u6807 key |\u65B0\u7684 value \u503C newValue| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u5C06\u5176 value \u66F4\u65B0\u4E3A \`newValue\`\uFF0C\u5F97\u5230 \`key:newValue\`\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u6DFB\u52A0 add      | \u6DFB\u52A0\u7684 key | \u6DFB\u52A0\u7684 value |\u82E5\u4E0D\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u6DFB\u52A0\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C               |
| \u8FFD\u52A0 append   | \u76EE\u6807 key |\u8FFD\u52A0\u7684 value\u503C appendValue| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u8FFD\u52A0 appendValue \u5F97\u5230 \`key:[value..., appendValue]\`\uFF1B\u5426\u5219\u76F8\u5F53\u4E8E\u6267\u884C add \u64CD\u4F5C\uFF0C\u5F97\u5230 \`key:appendValue\` |
| \u6620\u5C04 map      | \u6620\u5C04\u6765\u6E90 fromKey |\u6620\u5C04\u76EE\u6807 toKey| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`fromKey:fromValue\`\uFF0C\u5219\u5C06\u5176\u503C fromValue \u6620\u5C04\u7ED9 toKey \u7684\u503C\uFF0C\u5F97\u5230 \`toKey:fromValue\`\uFF0C\u540C\u65F6\u4FDD\u7559 \`fromKey:fromValue\`\uFF08\u6CE8\uFF1A\u82E5 toKey \u5DF2\u5B58\u5728\u5219\u5176\u503C\u4F1A\u88AB\u8986\u76D6\uFF09\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u53BB\u91CD dedupe   | \u76EE\u6807 key |\u6307\u5B9A\u53BB\u91CD\u7B56\u7565 strategy| \`strategy\` \u53EF\u9009\u503C\u4E3A\uFF1A<br>\`RETAIN_UNIQUE\`: \u6309\u987A\u5E8F\u4FDD\u7559\u6240\u6709\u552F\u4E00\u503C\uFF0C\u5982 \`k1:[v1,v2,v3,v3,v2,v1]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:[v1,v2,v3]\` <br>\`RETAIN_LAST\`: \u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u503C\uFF0C\u5982 \`k1:[v1,v2,v3]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:v3\` <br>\`RETAIN_FIRST\` (default): \u4FDD\u7559\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5982 \`k1:[v1,v2,v3]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:v1\`<br>\uFF08\u6CE8\uFF1A\u82E5\u53BB\u91CD\u540E\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20 v1 \u65F6\uFF0C\u952E\u503C\u5BF9\u53D8\u4E3A \`k1:v1\`, \u800C\u4E0D\u662F \`k1:[v1]\`\uFF09 |




## \u914D\u7F6E\u793A\u4F8B

### \u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u8DEF\u7531

\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
reqRules:
- operate: map
  headers:
  - fromKey: userId
    toKey: x-user-id
  mapSource: body
\`\`\`

\u6B64\u89C4\u5219\u5C06\u8BF7\u6C42body\u4E2D\u7684\`userId\`\u89E3\u6790\u51FA\u540E\uFF0C\u8BBE\u7F6E\u5230\u8BF7\u6C42Header\`x-user-id\`\u4E2D\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u57FA\u4E8EHigress\u8BF7\u6C42Header\u5339\u914D\u8DEF\u7531\u7684\u80FD\u529B\u6765\u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u7684\u8DEF\u7531\u4E86\u3002

\u6B64\u914D\u7F6E\u540C\u65F6\u652F\u6301\`application/json\`\u548C\`application/x-www-form-urlencoded\`\u4E24\u79CD\u7C7B\u578B\u7684\u8BF7\u6C42Body\u3002

\u4E3E\u4F8B\u6765\u8BF4\uFF1A

**\u5BF9\u4E8Eapplication/json\u7C7B\u578B\u7684body**

\`\`\`bash
curl localhost -d '{"userId":12, "userName":"johnlanni"}' -H 'content-type:application/json'
\`\`\`

\u5C06\u4ECEjson\u4E2D\u63D0\u53D6\u51FA\`userId\`\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230\`x-user-id\`\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:\`x-usr-id: 12\`\u3002

\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002


**\u5BF9\u4E8Eapplication/x-www-form-urlencoded\u7C7B\u578B\u7684body**

\`\`\`bash
curl localhost -d 'userId=12&userName=johnlanni'
\`\`\`

\u5C06\u4ECE\`k1=v1&k2=v2\`\u8FD9\u6837\u7684\u8868\u5355\u683C\u5F0F\u4E2D\u63D0\u53D6\u51FA\`userId\`\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230\`x-user-id\`\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:\`x-usr-id: 12\`\u3002

\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002

#### json path \u652F\u6301

\u53EF\u4EE5\u6839\u636E [GJSON Path \u8BED\u6CD5](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\uFF0C\u4ECE\u590D\u6742\u7684 json \u4E2D\u63D0\u53D6\u51FA\u5B57\u6BB5\u3002

\u6BD4\u8F83\u5E38\u7528\u7684\u64CD\u4F5C\u4E3E\u4F8B\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B json:

\`\`\`json
{
  "name": {"first": "Tom", "last": "Anderson"},
  "age":37,
  "children": ["Sara","Alex","Jack"],
  "fav.movie": "Deer Hunter",
  "friends": [
    {"first": "Dale", "last": "Murphy", "age": 44, "nets": ["ig", "fb", "tw"]},
    {"first": "Roger", "last": "Craig", "age": 68, "nets": ["fb", "tw"]},
    {"first": "Jane", "last": "Murphy", "age": 47, "nets": ["ig", "tw"]}
  ]
}
\`\`\`

\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u6837\u7684\u63D0\u53D6:

\`\`\`text
name.last              "Anderson"
name.first             "Tom"
age                    37
children               ["Sara","Alex","Jack"]
children.0             "Sara"
children.1             "Alex"
friends.1              {"first": "Roger", "last": "Craig", "age": 68}
friends.1.first        "Roger"
\`\`\`

\u73B0\u5728\u5982\u679C\u60F3\u4ECE\u4E0A\u9762\u8FD9\u4E2A json \u683C\u5F0F\u7684 body \u4E2D\u63D0\u53D6\u51FA friends \u4E2D\u7B2C\u4E8C\u9879\u7684 first \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header \`x-first-name\` \u4E2D\uFF0C\u540C\u65F6\u62BD\u53D6 last \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header \`x-last-name\` \u4E2D\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4EFD\u63D2\u4EF6\u914D\u7F6E:

\`\`\`yaml
reqRules:
- operate: map
  headers:
  - fromKey: friends.1.first
    toKey: x-first-name
  - fromKey: friends.1.last
    toKey: x-last-name
  mapSource: body
\`\`\`

### Request Transformer

#### \u8F6C\u6362\u8BF7\u6C42\u5934\u90E8

\`\`\`yaml
reqRules:
- operate: remove
  headers:
  - key: X-remove
- operate: rename
  headers:
  - oldKey: X-not-renamed
    newKey: X-renamed
- operate: replace
  headers:
  - key: X-replace
    newValue: replaced
- operate: add
  headers:
  - key: X-add-append
    value: host-$1
    host_pattern: ^(.*)\\.com$
- operate: append
  headers:
  - key: X-add-append
    appendValue: path-$1
    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$
- operate: map
  headers:
  - fromKey: X-add-append
    toKey: X-map
- operate: dedupe
  headers:
  - key: X-dedupe-first
    strategy: RETAIN_FIRST
  - key: X-dedupe-last
    strategy: RETAIN_LAST
  - key: X-dedupe-unique
    strategy: RETAIN_UNIQUE
\`\`\`

\u53D1\u9001\u8BF7\u6C42

\`\`\`bash
$ curl -v console.higress.io/get -H 'host: foo.bar.com' \\
-H 'X-remove: exist' -H 'X-not-renamed:test' -H 'X-replace:not-replaced' \\
-H 'X-dedupe-first:1' -H 'X-dedupe-first:2' -H 'X-dedupe-first:3' \\
-H 'X-dedupe-last:a' -H 'X-dedupe-last:b' -H 'X-dedupe-last:c' \\
-H 'X-dedupe-unique:1' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:3' \\
-H 'X-dedupe-unique:3' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:1'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  "args": {},
  "headers": {
    ...
    "X-Add-Append": "host-foo.bar,path-get",
    ...
    "X-Dedupe-First": "1",
    "X-Dedupe-Last": "c",
    "X-Dedupe-Unique": "1,2,3",
    ...
    "X-Map": "host-foo.bar,path-get",
    "X-Renamed": "test",
    "X-Replace": "replaced"
  },
  ...
}
\`\`\`

#### \u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570

\`\`\`yaml
reqRules:
- operate: remove
  querys:
  - key: k1
- operate: rename
  querys:
  - oldKey: k2
    newKey: k2-new
- operate: replace
  querys:
  - key: k2-new
    newValue: v2-new
- operate: add
  querys:
  - key: k3
    value: v31-$1
    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$
- operate: append
  querys:
  - key: k3
    appendValue: v32
- operate: map
  querys:
  - fromKey: k3
    toKey: k4
- operate: dedupe
  querys:
  - key: k4
    strategy: RETAIN_FIRST
\`\`\`

\u53D1\u9001\u8BF7\u6C42

\`\`\`bash
$ curl -v "console.higress.io/get?k1=v11&k1=v12&k2=v2"

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  "args": {
    "k2-new": "v2-new",
    "k3": [
      "v31-get",
      "v32"
    ],
    "k4": "v31-get"
  },
  ...
  "url": "http://foo.bar.com/get?k2-new=v2-new&k3=v31-get&k3=v32&k4=v31-get"
}
\`\`\`

#### \u8F6C\u6362\u8BF7\u6C42\u4F53

\`\`\`yaml
reqRules:
- operate: remove
  body:
  - key: a1
- operate: rename
  body: 
  - oldKey: a2
    newKey: a2-new
- operate: replace
  body:
  - key: a3
    newValue: t3-new
    value_type: string
- operate: add
  body:
  - key: a1-new
    value: t1-new
    value_type: string
- operate: append
  body:
  - key: a1-new
    appendValue: t1-$1-append
    value_type: string
    host_pattern: ^(.*)\\.com$
- operate: map
  body:
  - fromKey: a1-new
    toKey: a4
- operate: dedupe
  body:
  - key: a4
    strategy: RETAIN_FIRST
\`\`\`

\u53D1\u9001\u8BF7\u6C42\uFF1A

**1. Content-Type: application/json**

\`\`\`bash
$ curl -v -x POST console.higress.io/post -H 'host: foo.bar.com' \\
-H 'Content-Type: application/json' -d '{"a1":"t1","a2":"t2","a3":"t3"}'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "headers": {
    ...
    "Content-Type": "application/json",
    ...
  },
  "json": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  ...
}
\`\`\`

**2. Content-Type: application/x-www-form-urlencoded**

\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-d 'a1=t1&a2=t2&a3=t3'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "form": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  "headers": {
    ...
    "Content-Type": "application/x-www-form-urlencoded",
    ...
  },
  ...
}
\`\`\`

**3. Content-Type:  multipart/form-data**

\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-F a1=t1 -F a2=t2 -F a3=t3

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "form": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  "headers": {
    ...
    "Content-Type": "multipart/form-data; boundary=------------------------1118b3fab5afbc4e",
    ...
  },
  ...
}
\`\`\`

### Response Transformer

\u4E0E Request Transformer \u7C7B\u4F3C\uFF0C\u5728\u6B64\u4EC5\u8BF4\u660E\u8F6C\u6362 JSON \u5F62\u5F0F\u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A

#### key \u5D4C\u5957 \`.\`

1.\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6307\u5B9A\u7684 key \u4E2D\u542B\u6709 \`.\` \u8868\u793A\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A

\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo.bar
    value: value
\`\`\`

\`\`\`bash
$ curl -v console.higress.io/get

# httpbin \u54CD\u5E94\u7ED3\u679C
{
 ...
 "foo": {
  "bar": "value"
 },
 ...
}
\`\`\`

2.\u5F53\u4F7F\u7528 \`\\.\` \u5BF9 key \u4E2D\u7684 \`.\` \u8FDB\u884C\u8F6C\u4E49\u540E\uFF0C\u8868\u793A\u975E\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A

> \u5F53\u4F7F\u7528\u53CC\u5F15\u53F7\u62EC\u4F4F\u5B57\u7B26\u4E32\u65F6\u4F7F\u7528 \`\\\\.\` \u8FDB\u884C\u8F6C\u4E49

\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo\\.bar
    value: value
\`\`\`

\`\`\`bash
$ curl -v console.higress.io/get

# httpbin \u54CD\u5E94\u7ED3\u679C
{
 ...
 "foo.bar": "value",
 ...
}
\`\`\`

#### \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20 \`.index\`

\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u4E0B\u6807 \`array.index \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20\uFF0C\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\uFF1A

\`\`\`json
{
  "users": [
    {
      "123": { "name": "zhangsan", "age": 18 }
    },
    {
      "456": { "name": "lisi", "age": 19 }
    }
  ]
}
\`\`\`

1.\u79FB\u9664 \`user\` \u7B2C\u4E00\u4E2A\u5143\u7D20\uFF1A

\`\`\`yaml
reqRules:
- operate: remove
  body:
  - key: users.0
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "456": {
          "name": "lisi"
        }
      }
    ]
  },
  ...
}
\`\`\`

2.\u5C06 \`users\` \u7B2C\u4E00\u4E2A\u5143\u7D20\u7684 key \u4E3A \`123\` \u91CD\u547D\u540D\u4E3A \`msg\`:

\`\`\`yaml
reqRules:
- operate: rename
  body:
  - oldKey: users.0.123
    newKey: users.0.first
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'


# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "msg": {
          "name": "zhangsan"
        }
      },
      {
        "456": {
          "name": "lisi"
        }
      }
    ]
  },
  ...
}
\`\`\`

#### \u904D\u5386\u6570\u7EC4\u5143\u7D20 \`.#\`

\u53EF\u4EE5\u4F7F\u7528 \`array.#\` \u5BF9\u6570\u7EC4\u8FDB\u884C\u904D\u5386\u64CD\u4F5C\uFF1A

> \u2757\uFE0F\u8BE5\u64CD\u4F5C\u76EE\u524D\u53EA\u80FD\u7528\u5728 replace \u4E0A\uFF0C\u8BF7\u52FF\u5728\u5176\u4ED6\u8F6C\u6362\u4E2D\u5C1D\u8BD5\u8BE5\u64CD\u4F5C\uFF0C\u4EE5\u514D\u9020\u6210\u65E0\u6CD5\u9884\u77E5\u7684\u7ED3\u679C

\`\`\`json
{
  "users": [
    {
      "name": "zhangsan", 
      "age": 18
    },
    {
      "name": "lisi",
      "age": 19
    }
  ]
}
\`\`\`

\`\`\`yaml
reqRules:
- operate: replace
  body:
  - key: users.#.age
    newValue: 20
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"name":"zhangsan","age":18},{"name":"lisi","age":19}]}'


# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "age": "20",
        "name": "zhangsan"
      },
      {
        "age": "20",
        "name": "lisi"
      }
    ]
  },
  ...
}
\`\`\`
`,o={title:"\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362",description:"\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","transformer"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/transformer.md",rawData:void 0};export{n as _internal,t as body,a as collection,o as data,e as id,r as slug};
