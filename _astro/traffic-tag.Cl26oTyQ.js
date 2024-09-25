const n="latest/zh-cn/plugins/traffic/traffic-tag.md",e="docs",a="latest/zh-cn/plugins/traffic/traffic-tag",t="\n\n## \u529F\u80FD\u8BF4\u660E\n\n`traffic-tag` \u63D2\u4EF6\u5141\u8BB8\u6839\u636E\u6743\u91CD\u6216\u7279\u5B9A\u8BF7\u6C42\u5185\u5BB9\u901A\u8FC7\u6DFB\u52A0\u7279\u5B9A\u8BF7\u6C42\u5934\u7684\u65B9\u5F0F\u5BF9\u8BF7\u6C42\u6D41\u91CF\u8FDB\u884C\u67D3\u8272\u3002\u5B83\u652F\u6301\u590D\u6742\u7684\u903B\u8F91\u6765\u786E\u5B9A\u5982\u4F55\u6839\u636E\u7528\u6237\u5B9A\u4E49\u7684\u6807\u51C6\u67D3\u8272\u6D41\u91CF\u3002\n\n## \u8FD0\u884C\u5C5E\u6027\n\n\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A`\u9ED8\u8BA4\u9636\u6BB5`\n\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A`400`\n\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n\u6B64\u90E8\u5206\u63D0\u4F9B\u4E86\u914D\u7F6E\u5B57\u6BB5\u7684\u8BE6\u7EC6\u63CF\u8FF0\u3002\n\n| \u5B57\u6BB5\u540D\u79F0        | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|----------------|----------|-------|---------|-------------------------------------------------------------|\n| `conditionGroups` | array of object  | -     | \u5426      | \u5B9A\u4E49\u57FA\u4E8E\u5185\u5BB9\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1**\u6761\u4EF6\u7EC4\u914D\u7F6E**\u3002             |\n| `weightGroups`    | array of object  | -     | \u5426      | \u5B9A\u4E49\u57FA\u4E8E\u6743\u91CD\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1**\u6743\u91CD\u7EC4\u914D\u7F6E**\u3002             |\n| `defaultTagKey`   | string   | -     | \u5426      | \u9ED8\u8BA4\u7684\u6807\u8BB0\u952E\u540D\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86**defaultTagVal**\u65F6\u751F\u6548      |\n| `defaultTagVal` | string   | -     | \u5426      | \u9ED8\u8BA4\u7684\u6807\u8BB0\u503C\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86**defaultTagKey**\u65F6\u751F\u6548      |\n\n### \u6761\u4EF6\u7EC4\u914D\u7F6E\n`conditionGroups` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0      | \u7C7B\u578B   | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|--------------|--------|-------|---------|-------------------------------------------------------------|\n| `headerName` | string | -     | \u662F      | \u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002                                  |\n| `headerValue`| string | -     | \u662F      | HTTP \u5934\u7684\u503C\u3002                                                |\n| `logic`      | string | -     | \u662F      | \u6761\u4EF6\u7EC4\u4E2D\u7684\u903B\u8F91\u5173\u7CFB\uFF0C\u652F\u6301 `and`\u3001`or`\uFF0C\u5FC5\u987B\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3002         |\n| `conditions` | array of object  | -     | \u662F      | \u63CF\u8FF0\u5177\u4F53\u7684\u6807\u8BB0\u6761\u4EF6\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u5982\u4E0B\u3002                    |\n---\n\n`conditions` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0        | \u7C7B\u578B   | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|----------------|--------|-------|---------|-------------------------------------------------------------|\n| `conditionType`| string | -     | \u662F      | \u6761\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301 `header`\u3001`parameter`\u3001`cookie`\u3002                 |\n| `key`          | string | -     | \u662F      | \u6761\u4EF6\u7684\u5173\u952E\u5B57\u3002                                               |\n| `operator`     | string | -     | \u662F      | \u64CD\u4F5C\u7B26\uFF0C\u652F\u6301 `equal`\u3001`not_equal`\u3001`prefix`\u3001`in`\u3001`not_in`\u3001`regex`\u3001`percentage`\u3002  |\n| `value`        | array of string  | -     | \u662F      | \u6761\u4EF6\u7684\u503C\uFF0C**\u4EC5\u5F53**\u64CD\u4F5C\u7B26\u4E3A `in` \u548C `not_in` \u65F6\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u503C\u3002 |\n\n> **\u8BF4\u660E\uFF1A\u5F53 `operator` \u4E3A `regex` \u65F6\uFF0C\u4F7F\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5F15\u64CE\u662F [RE2](https://github.com/google/re2)\u3002\u8BE6\u60C5\u8BF7\u53C2\u9605 [RE2 \u5B98\u65B9\u6587\u6863](https://github.com/google/re2/wiki/Syntax)\u3002\n\n### \u6743\u91CD\u7EC4\u914D\u7F6E\n\n`weightGroups` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0      | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|--------------|----------|-------|---------|-------------------------------------------------------------|\n| `headerName` | string   | -     | \u662F      | \u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002                                  |\n| `headerValue`| string   | -     | \u662F      | HTTP \u5934\u7684\u503C\u3002                                                |\n| `weight`     | integer  | -     | \u662F      | \u6D41\u91CF\u6743\u91CD\u767E\u5206\u6BD4\u3002                                             |                                           \n\n### \u64CD\u4F5C\u7B26\u8BF4\u660E\n| \u64CD\u4F5C\u7B26      | \u63CF\u8FF0                                      |\n|-------------|------------------------------------------|\n| `equal`        | \u7CBE\u786E\u5339\u914D\uFF0C\u503C\u9700\u8981\u5B8C\u5168\u76F8\u7B49                  |\n| `not_equal`        | \u4E0D\u7B49\u5339\u914D\uFF0C\u503C\u4E0D\u76F8\u7B49\u65F6\u6EE1\u8DB3\u6761\u4EF6              |\n| `prefix`    | \u524D\u7F00\u5339\u914D\uFF0C\u6307\u5B9A\u503C\u662F\u5B9E\u9645\u503C\u7684\u524D\u7F00\u65F6\u6EE1\u8DB3\u6761\u4EF6  |\n| `in`        | \u5305\u542B\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u9700\u8981\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D        |\n| `not_in`    | \u6392\u9664\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u4E0D\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D\u65F6\u6EE1\u8DB3\u6761\u4EF6|\n| `regex`     | \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u89C4\u5219\u5339\u914D    |\n| `percentage`| \u767E\u5206\u6BD4\u5339\u914D\uFF0C\u539F\u7406\uFF1A`hash(get(key)) % 100 < value` \u6210\u7ACB\u65F6\u6EE1\u8DB3\u6761\u4EF6|\n\n> **\u63D0\u793A\uFF1A\u5173\u4E8E`percentage`\u548C`weight`\u7684\u533A\u522B**\n>\n> - **`percentage`\u64CD\u4F5C\u7B26**\uFF1A\u7528\u4E8E\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u57FA\u4E8E\u6307\u5B9A\u7684\u767E\u5206\u6BD4\u548C\u6307\u5B9A\u7684\u952E\u503C\u5BF9\u6765\u5224\u65AD\u662F\u5426\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\u3002\u5BF9\u4E8E\u4E00\u4E2A\u76F8\u540C\u7684\u952E\u503C\u5BF9\uFF0C\u591A\u6B21\u5339\u914D\u7684\u7ED3\u679C\u662F\u5E42\u7B49\u7684\uFF0C\u5373\u8FD9\u4E00\u6B21\u547D\u4E2D\u6761\u4EF6\uFF0C\u4E0B\u4E00\u6B21\u4E5F\u4F1A\u547D\u4E2D\u3002\n> - **`weight`\u5B57\u6BB5**\uFF1A\u7528\u4E8E\u5B9A\u4E49\u4E0D\u540C\u5904\u7406\u8DEF\u5F84\u7684\u6D41\u91CF\u6743\u91CD\u3002\u5728\u57FA\u4E8E\u6743\u91CD\u7684\u6D41\u91CF\u6807\u8BB0\u4E2D\uFF0C`weight`\u786E\u5B9A\u4E86\u67D0\u4E2A\u8DEF\u5F84\u5E94\u63A5\u6536\u7684\u6D41\u91CF\u6BD4\u4F8B\u3002\u4E0E`percentage`\u4E0D\u540C\u7684\u662F\uFF0C\u7531\u4E8E\u6CA1\u6709\u6307\u5B9A\u56FA\u5B9A\u7684\u5BF9\u6BD4\u4F9D\u636E\u800C\u662F\u57FA\u4E8E\u968F\u673A\u6743\u91CD\u5206\u5E03\uFF0C\u540C\u4E00\u4E2A\u8BF7\u6C42\u7684\u591A\u6B21\u5339\u914D\u53EF\u80FD\u5339\u914D\u591A\u4E2A\u7ED3\u679C\u3002\n>\n> \u4F7F\u7528`percentage`\u8FDB\u884C\u6761\u4EF6\u5339\u914D\u65F6\uFF0C\u5224\u65AD\u6BCF\u4E2A\u8BF7\u6C42\u662F\u5426\u6EE1\u8DB3\u7279\u5B9A\u767E\u5206\u6BD4\u6761\u4EF6\uFF1B\u800C`weight`\u5219\u662F\u9759\u6001\u968F\u673A\u5206\u914D\u6574\u4F53\u6D41\u91CF\u7684\u6BD4\u4F8B\u3002\n\n## \u914D\u7F6E\u793A\u4F8B\n\n**\u4F8B1: \u57FA\u4E8E\u5185\u5BB9\u7684\u5339\u914D**\n\n\u6309\u7167\u4E0B\u4F8B\u7684\u914D\u7F6E\uFF0C\u6EE1\u8DB3\u8BF7\u6C42\u5934`role` \u7684\u503C\u662F`user`\u3001`viwer`\u3001`editor`\u5176\u4E2D\u4E4B\u4E00\u4E14\u5B58\u5728\u67E5\u8BE2\u53C2\u6570`foo=bar`\u7684\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: gray`\u3002\u7531\u4E8E\u914D\u7F6E\u4E86`defaultTagKey`\u548C`defaultTagVal`\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\uFF0C\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: base`\u3002\n\n```yaml\ndefaultTagKey: x-mse-tag\ndefaultTagVal: base\nconditionGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    logic: and\n    conditions:\n      - conditionType: header\n        key: role\n        operator: in\n        value:\n          - user\n          - viewer\n          - editor\n      - conditionType: parameter\n        key: foo\n        operator: equal\n        value:\n        - bar\n```\n**\u4F8B\u5B502: \u57FA\u4E8E\u6743\u91CD\u7684\u5339\u914D**\n\n\u6309\u7167\u4E0B\u5217\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u670930%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: gray`\uFF0C30%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: blue`\uFF0C40%\u51E0\u7387\u4E0D\u6DFB\u52A0\u8BF7\u6C42\u5934\u3002\n\n```yaml\n# \u6743\u91CD\u603B\u548C\u4E3A100\uFF0C\u4E0B\u4F8B\u4E2D\u672A\u914D\u7F6E\u768440\u6743\u91CD\u5C06\u4E0D\u6DFB\u52A0header\nweightGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    weight: 30\n  - headerName: x-mse-tag\n    headerValue: blue\n    weight: 30\n```\n",r={title:"\u6D41\u91CF\u67D3\u8272",description:"\u6D41\u91CF\u67D3\u8272\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","traffic tag"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/traffic-tag.md",rawData:void 0};export{i as _internal,t as body,e as collection,r as data,n as id,a as slug};
