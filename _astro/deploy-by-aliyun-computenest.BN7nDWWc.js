const s="latest/zh-cn/ops/deploy-by-aliyun-computenest.md",e="docs",t="latest/zh-cn/ops/deploy-by-aliyun-computenest",o=`
# \u901A\u8FC7\u963F\u91CC\u4E91\u8BA1\u7B97\u5DE2\u5FEB\u901F\u90E8\u7F72

\u963F\u91CC\u4E91\u8BA1\u7B97\u5DE2\u662F\u4E00\u4E2A\u5F00\u653E\u7ED9\u670D\u52A1\u5546\u548C\u7528\u6237\u7684\u670D\u52A1\u7BA1\u7406PaaS\u5E73\u53F0\uFF0C\u63D0\u4F9B\u8F6F\u4EF6\u7684\u4EA4\u4ED8\u3001\u90E8\u7F72\u3001\u8FD0\u7EF4\u6D41\u7A0B\u6807\u51C6\u5316\u7B49\u80FD\u529B\uFF0C\u652F\u6301\u8F6F\u4EF6\u548C\u8D44\u6E90\u7684\u4E00\u4F53\u5316\u4EA4\u4ED8\uFF0C\u771F\u6B63\u5B9E\u73B0\u4E86\u8F6F\u4EF6\u7684\u5F00\u7BB1\u5373\u7528\u3002
\u901A\u8FC7\u963F\u91CC\u4E91\u8BA1\u7B97\u5DE2\uFF0C\u63D0\u4F9B\u4E86\u4E00\u952E\u90E8\u7F72Higress\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u652F\u6301\u53EF\u89C6\u5316\u914D\u7F6E\u53C2\u6570\uFF0C\u5FEB\u901F\u90E8\u7F72Higress\u3002

> **\u6CE8\u610F**
> \u672C\u5FEB\u901F\u90E8\u7F72\u65B9\u6848\u6682\u65F6\u57FA\u4E8EDocker Compose\u90E8\u7F72\u7684\uFF0C\u540E\u7EED\u5C06\u4F1A\u652F\u6301\u57FA\u4E8EHelm\u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72\u3002

## \u90E8\u7F72\u6B65\u9AA4
- \u70B9\u51FB\u90E8\u7F72\u94FE\u63A5\uFF0C\u8FDB\u5165\u90E8\u7F72\u9875\u9762\u3002

  [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress\u793E\u533A\u7248)

- \u90E8\u7F72\u9875\u9762\u4E2D\uFF0C\u6839\u636E\u754C\u9762\u63D0\u793A\uFF0C\u586B\u5199\u914D\u7F6E\u53C2\u6570\u5E76\u63D0\u4EA4\u8BA2\u5355\u3002
  \u9009\u62E9\u8D44\u6E90\u7C7B\u578B\u5E76\u914D\u7F6EECS\u5B9E\u4F8B\u5BC6\u7801.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img1.jpg)
  \u914D\u7F6ENacos\u670D\u52A1\uFF0C\u5982\u679C\u6CA1\u6709\u72EC\u7ACB\u90E8\u7F72\u7684Nacos\u670D\u52A1\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5185\u7F6E\u7684Nacos\u670D\u52A1\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img2.jpg)
  \u82E5\u6709\u72EC\u7ACB\u90E8\u7F72\u7684Nacos\u670D\u52A1\uFF0C\u8BBE\u7F6ENacos\u670D\u52A1\u7684Ip\u5730\u5740\uFF0C\u5982\u679CNacos\u5F00\u542F\u4E86\u9274\u6743\u8BA4\u8BC1\uFF0C\u5219\u9700\u8981\u586B\u5199\u7528\u6237\u540D\u548C\u5BC6\u7801
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img3.png)
  \u6700\u540E\u914D\u7F6E\u53EF\u7528\u533A\uFF0C\u53EF\u9009\u62E9\u65B0\u5EFAVPC\uFF0C\u4E5F\u53EF\u4F7F\u7528\u5DF2\u6709\u7684VPC.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img4.png)
- \u7B49\u5230\u670D\u52A1\u5B9E\u4F8B\u90E8\u7F72\u6210\u529F, \u8FDB\u5165\u670D\u52A1\u5B9E\u4F8B\u8BE6\u60C5\u9875\uFF0C\u83B7\u53D6Higress\u7684\u767B\u5F55\u4FE1\u606F\u3002
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img5.png)
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img6.png)



`,i={title:"\u901A\u8FC7\u963F\u91CC\u4E91\u8BA1\u7B97\u5DE2\u5FEB\u901F\u90E8\u7F72",description:"\u5982\u4F55\u4F7F\u7528\u963F\u91CC\u4E91\u8BA1\u7B97\u5DE2\u5B9E\u73B0Higress\u7684\u5FEB\u901F\u90E8\u7F72",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["deploy","docker compose","docker","ops","\u963F\u91CC\u4E91","\u8BA1\u7B97\u5DE2"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/deploy-by-aliyun-computenest.md",rawData:void 0};export{a as _internal,o as body,e as collection,i as data,s as id,t as slug};
