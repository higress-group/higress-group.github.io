const e="latest/zh-cn/plugins/ai/api-consumer/ai-token-ratelimit.md",i="docs",s="latest/zh-cn/plugins/ai/api-consumer/ai-token-ratelimit",r=`

## \u529F\u80FD\u8BF4\u660E

\`ai-token-ratelimit\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0token\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001consumer \u540D\u79F0\u3001cookie\u4E2D key \u540D\u79F0

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`600\`

## \u914D\u7F6E\u8BF4\u660E

| \u914D\u7F6E\u9879                  | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                                        |
| ----------------------- | ------ | ---- | ------ |---------------------------------------------------------------------------|
| rule_name               | string | \u662F | - | \u9650\u6D41\u89C4\u5219\u540D\u79F0\uFF0C\u6839\u636E\u9650\u6D41\u89C4\u5219\u540D\u79F0+\u9650\u6D41\u7C7B\u578B+\u9650\u6D41key\u540D\u79F0+\u9650\u6D41key\u5BF9\u5E94\u7684\u5B9E\u9645\u503C\u6765\u62FC\u88C5redis key                      |
| rule_items | array of object | \u662F   | -                 | \u9650\u6D41\u89C4\u5219\u9879\uFF0C\u6309\u7167rule_items\u4E0B\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2Arule_item\u540E\u547D\u4E2D\u9650\u6D41\u89C4\u5219\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565                   |
| rejected_code           | int | \u5426 | 429 | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684HTTP\u72B6\u6001\u7801                                                         |
| rejected_msg            | string | \u5426 | Too many requests | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53                                                             |
| redis                   | object          | \u662F                                                           | -                 | redis\u76F8\u5173\u914D\u7F6E                                                                 |

\`rule_items\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879                | \u7C7B\u578B            | \u5FC5\u586B                       | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                         |
| --------------------- | --------------- | -------------------------- | ------ | ------------------------------------------------------------ |
| limit_by_header       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0                       |
| limit_by_param        | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0                          |
| limit_by_consumer     | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C                   |
| limit_by_cookie       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0                     |
| limit_by_per_header   | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A HTTP \u8BF7\u6C42\u5934\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u5934\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_param    | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A URL \u53C2\u6570\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u53C2\u6570\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_consumer | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A consumer\uFF0C\u5E76\u5BF9\u6BCF\u4E2A consumer \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_cookie   | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A Cookie\uFF0C\u5E76\u5BF9\u6BCF\u4E2A Cookie \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_ip       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A IP\uFF0C\u5E76\u5BF9\u6BCF\u4E2A IP \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 IP \u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u4EE5\`from-header-\u5BF9\u5E94\u7684header\u540D\`\uFF0C\u793A\u4F8B\uFF1A\`from-header-x-forwarded-for\`\uFF0C\u76F4\u63A5\u83B7\u53D6\u5BF9\u7AEFsocket ip\uFF0C\u914D\u7F6E\u4E3A\`from-remote-addr\` |
| limit_keys            | array of object | \u662F                         | -      | \u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570                                     |

\`limit_keys\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879           | \u7C7B\u578B   | \u5FC5\u586B                                                         | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                         |
| ---------------- | ------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| key              | string | \u662F                                                           | -      | \u5339\u914D\u7684\u952E\u503C\uFF0C\`limit_by_per_header\`,\`limit_by_per_param\`,\`limit_by_per_consumer\`,\`limit_by_per_cookie\` \u7C7B\u578B\u652F\u6301\u914D\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u4EE5regexp:\u5F00\u5934\u540E\u9762\u8DDF\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u6216\u8005*\uFF08\u4EE3\u8868\u6240\u6709\uFF09\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u793A\u4F8B\uFF1A\`regexp:^d.*\`\uFF08\u4EE5d\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF09\uFF1B\`limit_by_per_ip\`\u652F\u6301\u914D\u7F6E IP \u5730\u5740\u6216 IP \u6BB5 |
| token_per_second | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42token\u6570                                             |
| token_per_minute | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42token\u6570                                           |
| token_per_hour   | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42token\u6570                                           |
| token_per_day    | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42token\u6570                                             |

\`redis\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879       | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C                                                     | \u8BF4\u660E                        |
| ------------ | ------ | ---- | ---------------------------------------------------------- | --------------------------- |
| service_name | string | \u5FC5\u586B | -                                                          | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local     |
| service_port | int    | \u5426   | \u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379 | \u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3     |
| username     | string | \u5426   | -                                                          | redis\u7528\u6237\u540D                 |
| password     | string | \u5426   | -                                                          | redis\u5BC6\u7801                   |
| timeout      | int    | \u5426   | 1000                                                       | redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |

## \u914D\u7F6E\u793A\u4F8B

### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_param: apikey
    limit_keys:
      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5
        token_per_minute: 10
      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5
        token_per_hour: 100
  - limit_by_per_param: apikey
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
       	token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_header: x-ca-key
    limit_keys:
    	- key: 102234
        token_per_minute: 10
      - key: 308239
        token_per_hour: 10
  - limit_by_per_header: x-ca-key
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000            
redis:
  service_name: redis.static
\`\`\`

### \u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEFIP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_per_ip: from-header-x-forwarded-for
    limit_keys:
      # \u7CBE\u786Eip
      - key: 1.1.1.1
        token_per_day: 10
      # ip\u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2Aip\u6BB5\u7684ip\uFF0C\u6BCF\u4E2Aip 100qpd
      - key: 1.1.1.0/24
        token_per_day: 100
      # \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2Aip 1000qpd
      - key: 0.0.0.0/0
        token_per_day: 1000
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522Bconsumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_consumer: ''
    limit_keys:
      - key: consumer1
        token_per_second: 10
      - key: consumer2
        token_per_hour: 100
  - limit_by_per_consumer: ''
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000     
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_cookie: key1
    limit_keys:
      - key: value1
        token_per_minute: 10
      - key: value2
        token_per_hour: 100
  - limit_by_per_cookie: key1
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000 
rejected_code: 200
rejected_msg: '{"code":-1,"msg":"Too many requests"}'
redis:
  service_name: redis.static
\`\`\`

## \u5B8C\u6574\u793A\u4F8B

AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 Redis \u8BB0\u5F55\u5269\u4F59\u53EF\u7528\u7684 token \u6570\uFF0C\u56E0\u6B64\u9996\u5148\u9700\u8981\u90E8\u7F72 Redis \u670D\u52A1\u3002
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  labels:
    app: redis
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis
        ports:
        - containerPort: 6379
---
apiVersion: v1
kind: Service
metadata:
  name: redis
  labels:
    app: redis
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
---
\`\`\`

\u5728\u672C\u4F8B\u4E2D\uFF0C\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u4F5C\u4E3A AI \u670D\u52A1\u63D0\u4F9B\u5546\u3002\u53E6\u5916\u8FD8\u9700\u8981\u8BBE\u7F6E AI \u7EDF\u8BA1\u63D2\u4EF6\uFF0C\u56E0\u4E3A AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 AI \u7EDF\u8BA1\u63D2\u4EF6\u8BA1\u7B97\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u7684 token \u6570\uFF0C\u4EE5\u4E0B\u914D\u7F6E\u9650\u5236\u6BCF\u5206\u949F\u7684 input \u548C output token \u603B\u6570\u4E3A 200 \u4E2A\u3002

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: qwen
        apiTokens:
        - "<YOUR_API_TOKEN>"
        modelMapping:
          'gpt-3': "qwen-turbo"
          'gpt-35-turbo': "qwen-plus"
          'gpt-4-turbo': "qwen-max"
          '*': "qwen-turbo"
    ingress:
    - qwen
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:v1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 100
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-statistics
  namespace: higress-system
spec:
  defaultConfig:
    enable: true
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-statistics:v1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 200
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-token-ratelimit
  namespace: higress-system
spec:
  defaultConfig:
    rule_name: default_limit_by_param_apikey
    rule_items:
    - limit_by_param: apikey
      limit_keys:
      - key: 123456
        token_per_minute: 200
    redis:
      # \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u6570\u636E\u9762\u7684\u538B\u529B\uFF0CHigress \u7684 global.onlyPushRouteCluster \u914D\u7F6E\u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A true\uFF0C\u610F\u5473\u7740\u4E0D\u4F1A\u81EA\u52A8\u53D1\u73B0 Kubernetes Service
      # \u5982\u679C\u9700\u8981\u4F7F\u7528 Kubernetes Service \u4F5C\u4E3A\u670D\u52A1\u53D1\u73B0\uFF0C\u53EF\u4EE5\u5C06 global.onlyPushRouteCluster \u53C2\u6570\u8BBE\u7F6E\u4E3A false\uFF0C
      # \u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06 service_name \u8BBE\u7F6E\u4E3A Kubernetes Service, \u800C\u65E0\u987B\u4E3A Redis \u521B\u5EFA McpBridge \u4EE5\u53CA Ingress \u8DEF\u7531
      # service_name: redis.default.svc.cluster.local
      service_name: redis.dns
      service_port: 6379
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:v1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 600
\`\`\`
\u6CE8\u610F\uFF0CAI Token \u9650\u6D41\u63D2\u4EF6\u4E2D\u7684 Redis \u914D\u7F6E\u9879 \`service_name\` \u6765\u81EA McpBridge \u4E2D\u914D\u7F6E\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u53E6\u5916\u6211\u4EEC\u8FD8\u9700\u8981\u5728 McpBridge \u4E2D\u914D\u7F6E\u901A\u4E49\u5343\u95EE\u670D\u52A1\u7684\u8BBF\u95EE\u5730\u5740\u3002

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: dashscope.aliyuncs.com
    name: qwen
    port: 443
    type: dns
  - domain: redis.default.svc.cluster.local # Kubernetes Service
    name: redis
    type: dns
    port: 6379
\`\`\`

\u5206\u522B\u521B\u5EFA\u4E24\u6761\u8DEF\u7531\u89C4\u5219\u3002

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: qwen.dns
    higress.io/proxy-ssl-name: dashscope.aliyuncs.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: qwen
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: qwen-test.com
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
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: redis.dns
    higress.io/ignore-path-case: "false"
  labels:
    higress.io/resource-definer: higress
  name: redis
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

\u89E6\u53D1\u9650\u6D41\u6548\u679C\u5982\u4E0B\uFF1A

\`\`\`bash
curl "http://qwen-test.com:18000/v1/chat/completions?apikey=123456" -H "Content-Type: application/json"  -d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "stream": false
}'
{"id":"88cfa80f-545d-93b4-8ff3-3f5245ca33ba","choices":[{"index":0,"message":{"role":"assistant","content":"\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"},"finish_reason":"stop"}],"created":1719909825,"model":"qwen-turbo","object":"chat.completion","usage":{"prompt_tokens":13,"completion_tokens":33,"total_tokens":46}}
curl "http://qwen-test.com:18000/v1/chat/completions?apikey=123456" -H "Content-Type: application/json"  -d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "stream": false
}'
Too many requests  # \u9650\u6D41\u6210\u529F
\`\`\`
`,t={title:"AI Token\u9650\u6D41",description:"AI Token\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI token\u9650\u6D41"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-token-ratelimit.md",rawData:void 0};export{a as _internal,r as body,i as collection,t as data,e as id,s as slug};
