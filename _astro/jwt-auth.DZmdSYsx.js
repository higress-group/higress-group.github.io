const e="latest/zh-cn/plugins/authentication/jwt-auth.md",t="docs",s="latest/zh-cn/plugins/authentication/jwt-auth",o=`
## \u529F\u80FD\u8BF4\u660E

\`jwt-auth\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E JWT(JSON Web Tokens) \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie \u5B57\u6BB5\u89E3\u6790 JWT\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 Token \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002

## \u914D\u7F6E\u5B57\u6BB5

### \u5168\u5C40\u914D\u7F6E

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                               |
| ----------- | --------------- | ------------------------------------------- | ------ |----------------------------------------------------------------------------------|
| \`consumers\` | array of object | \u5FC5\u586B                                        | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                                                               |
| \`global_auth\` | bool | \u9009\u586B     | -      | \u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09 |

\`consumers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B          | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C                                            | \u63CF\u8FF0                                                                                               |
| ----------------------- | ----------------- | -------- | ------------------------------------------------- |--------------------------------------------------------------------------------------------------|
| \`name\`                  | string            | \u5FC5\u586B     | -                                                 | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0                                                                                 |
| \`jwks\`                  | string            | \u5FC5\u586B     | -                                                 | https://www.rfc-editor.org/rfc/rfc7517 \u6307\u5B9A\u7684 json \u683C\u5F0F\u5B57\u7B26\u4E32\uFF0C\u662F\u7531\u9A8C\u8BC1 JWT \u4E2D\u7B7E\u540D\u7684\u516C\u94A5\uFF08\u6216\u5BF9\u79F0\u5BC6\u94A5\uFF09\u7EC4\u6210\u7684 Json Web Key Set |
| \`issuer\`                | string            | \u5FC5\u586B     | -                                                 | JWT \u7684\u7B7E\u53D1\u8005\uFF0C\u9700\u8981\u548C payload \u4E2D\u7684 iss \u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4                                                               |
| \`claims_to_headers\`     | array of object   | \u9009\u586B     | -                                                 | \u62BD\u53D6 JWT \u7684 payload \u4E2D\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u5230\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u8F6C\u53D1\u7ED9\u540E\u7AEF                                                           |
| \`from_headers\`          | array of object   | \u9009\u586B     | [{"name":"Authorization","value_prefix":"Bearer "}] | \u4ECE\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u62BD\u53D6 JWT                                                                                   |
| \`from_params\`           | array of string   | \u9009\u586B     | access_token                                      | \u4ECE\u6307\u5B9A\u7684 URL \u53C2\u6570\u4E2D\u62BD\u53D6 JWT                                                                               |
| \`from_cookies\`          | array of string   | \u9009\u586B     | -                                                 | \u4ECE\u6307\u5B9A\u7684 cookie \u4E2D\u62BD\u53D6 JWT                                                                              |
| \`clock_skew_seconds\`    | number            | \u9009\u586B     | 60                                                | \u6821\u9A8C JWT \u7684 exp \u548C iat \u5B57\u6BB5\u65F6\u5141\u8BB8\u7684\u65F6\u949F\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3A\u79D2                                                              |
| \`keep_token\`            | bool              | \u9009\u586B     | true                                              | \u8F6C\u53D1\u7ED9\u540E\u7AEF\u65F6\u662F\u5426\u4FDD\u7559 JWT                                                                                   |

**\u6CE8\u610F\uFF1A** 
- \u53EA\u6709\u5F53\`from_headers\`,\`from_params\`,\`from_cookies\`\u5747\u672A\u914D\u7F6E\u65F6\uFF0C\u624D\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C

\`from_headers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42| \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                  |
| ---------------- | --------------- | ------- | ------ |-------------------------------------|
| \`name\`           | string          | \u5FC5\u586B    | -      | \u62BD\u53D6 JWT \u7684\u8BF7\u6C42 header                   |
| \`value_prefix\`   | string          | \u5FC5\u586B    | -      | \u5BF9\u8BF7\u6C42 header \u7684 value \u53BB\u9664\u6B64\u524D\u7F00\uFF0C\u5269\u4F59\u90E8\u5206\u4F5C\u4E3A JWT |

\`claims_to_headers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42| \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                  |
| ---------------- | --------------- | ------- | ------ |-------------------------------------|
| \`claim\`          | string          | \u5FC5\u586B    | -      | JWT payload \u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8981\u6C42\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u65E0\u7B26\u53F7\u6574\u6570\u7C7B\u578B |
| \`header\`         | string          | \u5FC5\u586B    | -      | \u4ECEpayload \u53D6\u51FA\u5B57\u6BB5\u7684\u503C\u8BBE\u7F6E\u5230\u8FD9\u4E2A\u8BF7\u6C42\u5934\u4E2D\uFF0C\u8F6C\u53D1\u7ED9\u540E\u7AEF      |
| \`override\`       | bool            | \u9009\u586B    | true   | true \u65F6\uFF0C\u5B58\u5728\u540C\u540D\u8BF7\u6C42\u5934\u4F1A\u8FDB\u884C\u8986\u76D6\uFF1Bfalse \u65F6\uFF0C\u8FFD\u52A0\u540C\u540D\u8BF7\u6C42\u5934 |

### \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E


| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                          | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                              |
| ---------------- | --------------- | ------------------------------------------------- | ------ |---------------------------------|
| \`allow\`          | array of string | \u5FC5\u586B                                              | -      | \u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer \u540D\u79F0 |

**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A\`X-Mse-Consumer\`\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Jwt Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F\u5982\u679C\u4E00\u4E2A JWT \u80FD\u5339\u914D\u591A\u4E2A \`jwks\`\uFF0C\u5219\u6309\u7167\u914D\u7F6E\u987A\u5E8F\u547D\u4E2D\u7B2C\u4E00\u4E2A\u5339\u914D\u7684 \`consumer\`\u3002

**\u5168\u5C40\u914D\u7F6E**

\`\`\`yaml
consumers:
- name: consumer1
  issuer: abcd
  jwks: |
    {
      "keys": [
        {
          "kty": "oct",
          "kid": "123",
          "k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",
          "alg": "HS256"
        }
      ]
    }
- name: consumer2
  issuer: abc
  jwks: |
    {
      "keys": [
        {
          "kty": "RSA",
          "e": "AQAB",
          "use": "sig",
          "kid": "123",
          "alg": "RS256",
          "n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"
        }
      ]
    }
global_auth: false
\`\`\`

**\u8DEF\u7531\u7EA7\u914D\u7F6E**

\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`yaml
allow: 
- consumer1
\`\`\`

\u5BF9 *.exmaple.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`yaml
allow:
- consumer2
\`\`\`

\u6BCF\u6761\u5339\u914D\u89C4\u5219\u4E0B\u7684 \`allow\` \u5B57\u6BB5\u7528\u4E8E\u6307\u5B9A\u8BE5\u5339\u914D\u6761\u4EF6\u4E0B\u5141\u8BB8\u8BBF\u95EE\u7684\u8C03\u7528\u8005\u5217\u8868\uFF1B

\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684 \`route-a\` \u548C \`route-b\` \u5373\u5728\u63A7\u5236\u53F0\u521B\u5EFA\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer1\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF1B

\u6B64\u4F8B\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer2\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

\u8BA4\u8BC1\u6210\u529F\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5176\u503C\u4E3A\u8C03\u7528\u65B9\u7684\u540D\u79F0\uFF0C\u4F8B\u5982 \`consumer-1\`\u3002

**\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE**

\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230 route-a \u8FD9\u6761\u8DEF\u7531\u3002

\u5C06 JWT \u8BBE\u7F6E\u5728 URL \u53C2\u6570\u4E2D\u3002

\`\`\`bash
curl  'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`
\u5C06 JWT \u8BBE\u7F6E\u5728 HTTP \u8BF7\u6C42\u5934\u4E2D\u3002

\`\`\`bash
curl  http://xxx.hello.com/test -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684 header \u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A \`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0\u3002

**\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE**

\u8BF7\u6C42\u672A\u63D0\u4F9B JWT\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684 JWT \u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002

\`\`\`bash
## consumer1 \u4E0D\u5728 *.example.com \u7684 allow \u5217\u8868\u91CC
curl  'http://xxx.example.com/test' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

### \u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F               | \u539F\u56E0\u8BF4\u660E                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Jwt missing            | \u8BF7\u6C42\u5934\u672A\u63D0\u4F9BJWT                                                                  |
| 401         | Jwt expired            | JWT\u5DF2\u7ECF\u8FC7\u671F                                                                      |
| 401         | Jwt verification fails | JWT payload\u6821\u9A8C\u5931\u8D25\uFF0C\u5982iss\u4E0D\u5339\u914D                                                 |
| 403         | Access Denied          | \u65E0\u6743\u9650\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531                                                               |

## \u673A\u5236\u8BF4\u660E

### 1 \u57FA\u4E8E token \u7684\u8BA4\u8BC1

#### 1.1 \u7B80\u4ECB

\u5F88\u591A\u5BF9\u5916\u5F00\u653E\u7684 API \u9700\u8981\u8BC6\u522B\u8BF7\u6C42\u8005\u7684\u8EAB\u4EFD\uFF0C\u5E76\u636E\u6B64\u5224\u65AD\u6240\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u53EF\u4EE5\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u8005\u3002token \u5C31\u662F\u4E00\u79CD\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u673A\u5236\uFF0C\u57FA\u4E8E\u8FD9\u79CD\u673A\u5236\uFF0C\u5E94\u7528\u4E0D\u9700\u8981\u5728\u670D\u52A1\u7AEF\u4FDD\u7559\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u6216\u8005\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u53EF\u5B9E\u73B0\u65E0\u72B6\u6001\u3001\u5206\u5E03\u5F0F\u7684 Web \u5E94\u7528\u6388\u6743\uFF0C\u4E3A\u5E94\u7528\u7684\u6269\u5C55\u63D0\u4F9B\u4E86\u4FBF\u5229\u3002

#### 1.2 \u6D41\u7A0B\u63CF\u8FF0

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135822.png)

\u4E0A\u56FE\u662F\u7F51\u5173\u5229\u7528 JWT \u5B9E\u73B0\u8BA4\u8BC1\u7684\u6574\u4E2A\u4E1A\u52A1\u6D41\u7A0B\u65F6\u5E8F\u56FE\uFF0C\u4E0B\u9762\u6211\u4EEC\u7528\u6587\u5B57\u6765\u8BE6\u7EC6\u63CF\u8FF0\u56FE\u4E2D\u6807\u6CE8\u7684\u6B65\u9AA4\uFF1A

1. \u5BA2\u6237\u7AEF\u5411 API \u7F51\u5173\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E00\u822C\u4F1A\u643A\u5E26\u7EC8\u7AEF\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1B

2. \u7F51\u5173\u5C06\u8BF7\u6C42\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B

3. \u540E\u7AEF\u670D\u52A1\u8BFB\u53D6\u8BF7\u6C42\u4E2D\u7684\u9A8C\u8BC1\u4FE1\u606F\uFF08\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF09\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u4F7F\u7528\u79C1\u94A5\u751F\u6210\u6807\u51C6\u7684 token\uFF0C\u8FD4\u56DE\u7ED9\u7F51\u5173\uFF1B

4. \u7F51\u5173\u5C06\u643A\u5E26 token \u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u8FD9\u4E2A token \u7F13\u5B58\u5230\u672C\u5730\uFF1B

5. \u5BA2\u6237\u7AEF\u5411 API \u7F51\u5173\u53D1\u9001\u4E1A\u52A1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26 token\uFF1B

6. \u7F51\u5173\u4F7F\u7528\u7528\u6237\u8BBE\u5B9A\u7684\u516C\u94A5\u5BF9\u8BF7\u6C42\u4E2D\u7684 token \u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C06\u8BF7\u6C42\u900F\u4F20\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B

7. \u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u540E\u5E94\u7B54\uFF1B

8. \u7F51\u5173\u5C06\u4E1A\u52A1\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002

\u5728\u8FD9\u4E2A\u6574\u4E2A\u8FC7\u7A0B\u4E2D, \u7F51\u5173\u5229\u7528 token \u8BA4\u8BC1\u673A\u5236\uFF0C\u5B9E\u73B0\u4E86\u7528\u6237\u4F7F\u7528\u81EA\u5DF1\u7684\u7528\u6237\u4F53\u7CFB\u5BF9\u81EA\u5DF1API\u8FDB\u884C\u6388\u6743\u7684\u80FD\u529B\u3002\u4E0B\u9762\u6211\u4EEC\u5C31\u8981\u4ECB\u7ECD\u7F51\u5173\u5B9E\u73B0 token \u8BA4\u8BC1\u6240\u4F7F\u7528\u7684\u7ED3\u6784\u5316\u4EE4\u724C Json Web Token(JWT)\u3002

#### 1.3 JWT

##### 1.3.1 \u7B80\u4ECB

Json Web Toke\uFF08JWT\uFF09\uFF0C\u662F\u4E3A\u4E86\u5728\u7F51\u7EDC\u5E94\u7528\u73AF\u5883\u95F4\u4F20\u9012\u58F0\u660E\u800C\u6267\u884C\u7684\u4E00\u79CD\u57FA\u4E8E JSON \u7684\u5F00\u653E\u6807\u51C6 RFC7519\u3002JWT \u4E00\u822C\u53EF\u4EE5\u7528\u4F5C\u72EC\u7ACB\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C\uFF0C\u53EF\u4EE5\u5305\u542B\u7528\u6237\u6807\u8BC6\u3001\u7528\u6237\u89D2\u8272\u548C\u6743\u9650\u7B49\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u4E8E\u4ECE\u8D44\u6E90\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E5F\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u5176\u5B83\u4E1A\u52A1\u903B\u8F91\u6240\u5FC5\u987B\u7684\u58F0\u660E\u4FE1\u606F\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u5206\u5E03\u5F0F\u7AD9\u70B9\u7684\u767B\u5F55\u573A\u666F\u3002

##### 1.3.2 JWT\u7684\u6784\u6210

\`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\`

\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u6240\u793A\uFF0CJWT \u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7531\u4E09\u90E8\u5206\u6784\u6210\uFF1A

- Header\uFF08\u5934\u90E8\uFF09
- Payload\uFF08\u6570\u636E\uFF09
- Signature\uFF08\u7B7E\u540D\uFF09

**Header**

JWT \u7684\u5934\u90E8\u627F\u8F7D\u4E24\u4E2A\u4FE1\u606F\uFF1A

- \u58F0\u660E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662F JWT
- \u58F0\u660E\u52A0\u5BC6\u7684\u7B97\u6CD5

\u7F51\u5173\u652F\u6301\u7684\u52A0\u5BC6\u7B97\u6CD5\u5982\u4E0B\uFF1A

\`\`\`text
ES256, ES384, ES512,
HS256, HS384, HS512,
RS256, RS384, RS512,
PS256, PS384, PS512,
EdDSA
\`\`\`

\u5B8C\u6574\u7684\u5934\u90E8\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u7684 JSON\uFF1A

\`\`\`js
{
  'typ': 'JWT',
  'alg': 'HS256'
}
\`\`\`

\u7136\u540E\u5C06\u5934\u90E8\u8FDB\u884C Base64 \u7F16\u7801\uFF08\u8BE5\u7F16\u7801\u662F\u53EF\u4EE5\u5BF9\u79F0\u89E3\u7801\u7684\uFF09\uFF0C\u6784\u6210\u4E86\u7B2C\u4E00\u90E8\u5206\u3002

\`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\`

**Payload**

\u8F7D\u8377\u5C31\u662F\u5B58\u653E\u6709\u6548\u4FE1\u606F\u7684\u5730\u65B9\u3002\u5B9A\u4E49\u7EC6\u8282\u5982\u4E0B\uFF1A

\`\`\`text
iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32
sub: Subject Identifier\uFF0Ciss \u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728 iss \u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A 255 \u4E2A ASCII \u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199
aud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4
exp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684 token \u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F 1970 \u5E74 1 \u6708 1 \u65E5\u4EE5\u6765\u7684\u79D2\u6570
iat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F 1970 \u5E74 1 \u6708 1 \u65E5\u4EE5\u6765\u7684\u79D2\u6570
jti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002
\`\`\`

\u4E5F\u53EF\u4EE5\u65B0\u589E\u7528\u6237\u7CFB\u7EDF\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6DFB\u52A0\u4E86 name \u7528\u6237\u6635\u79F0\uFF1A

\`\`\`js
{
  "sub": "1234567890",
  "name": "John Doe"
}
\`\`\`

\u7136\u540E\u5C06\u5176\u8FDB\u884C Base64 \u7F16\u7801\uFF0C\u5F97\u5230JWT\u7684\u7B2C\u4E8C\u90E8\u5206\uFF1A

\`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE\`

**Signature**

\u8FD9\u4E2A\u90E8\u5206\u9700\u8981 Base64 \u7F16\u7801\u540E\u7684 Header \u548C Base64 \u7F16\u7801\u540E\u7684 Payload \u4F7F\u7528 . \u8FDE\u63A5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7 Header \u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u52A0\u5BC6\uFF08$secret \u8868\u793A\u7528\u6237\u7684\u79C1\u94A5\uFF09\uFF0C\u7136\u540E\u5C31\u6784\u6210\u4E86 jwt \u7684\u7B2C\u4E09\u90E8\u5206\u3002

\`\`\`js
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
\`\`\`

\u5C06\u8FD9\u4E09\u90E8\u5206\u7528 . \u8FDE\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\uFF0C\u5C31\u6784\u6210\u4E86 1.3.2 \u8282\u6700\u5F00\u59CB\u7684 JWT \u793A\u4F8B\u3002


##### 1.3.3 \u65F6\u6548

\u7F51\u5173\u4F1A\u9A8C\u8BC1 token \u4E2D\u7684 exp \u5B57\u6BB5\uFF0C\u4E00\u65E6\u8FD9\u4E2A\u5B57\u6BB5\u8FC7\u671F\u4E86\uFF0C\u7F51\u5173\u4F1A\u8BA4\u4E3A\u8FD9\u4E2A token \u65E0\u6548\u800C\u5C06\u8BF7\u6C42\u76F4\u63A5\u6253\u56DE\u3002\u8FC7\u671F\u65F6\u95F4\u8FD9\u4E2A\u503C\u5FC5\u987B\u8BBE\u7F6E\u3002

##### 1.3.4 JWT \u7684\u51E0\u4E2A\u7279\u70B9

1. JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u80FD\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002
2. JWT \u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u8BA4\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4EA4\u6362\u4FE1\u606F\u3002\u6709\u6548\u4F7F\u7528 JWT\uFF0C\u53EF\u4EE5\u964D\u4F4E\u670D\u52A1\u5668\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u6B21\u6570\u3002
3. JWT \u7684\u6700\u5927\u7F3A\u70B9\u662F\uFF0C\u7531\u4E8E\u670D\u52A1\u5668\u4E0D\u4FDD\u5B58 session \u72B6\u6001\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5E9F\u6B62\u67D0\u4E2A token\uFF0C\u6216\u8005\u66F4\u6539 token \u7684\u6743\u9650\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6 JWT \u7B7E\u53D1\u4E86\uFF0C\u5728\u5230\u671F\u4E4B\u524D\u5C31\u4F1A\u59CB\u7EC8\u6709\u6548\uFF0C\u9664\u975E\u670D\u52A1\u5668\u90E8\u7F72\u989D\u5916\u7684\u903B\u8F91\u3002
4. JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002
5. \u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528HTTPS \u534F\u8BAE\u4F20\u8F93\u3002

### 2 \u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528 JWT \u63D2\u4EF6\u4FDD\u62A4 API

#### 2.1 \u751F\u6210\u4E00\u5BF9 JWK\uFF08JSON Web \u5BC6\u94A5\uFF09

**\u65B9\u6CD5\u4E00\u3001\u5728\u7EBF\u751F\u6210\uFF1A**

\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u4E2A\u7AD9\u70B9https://mkjwk.org \u751F\u6210\u7528\u4E8E token \u751F\u6210\u4E0E\u9A8C\u8BC1\u7684\u79C1\u94A5\u4E0E\u516C\u94A5\uFF0C \u79C1\u94A5\u7528\u4E8E\u6388\u6743\u670D\u52A1\u7B7E\u53D1 JWT\uFF0C\u516C\u94A5\u914D\u7F6E\u5230 JWT \u63D2\u4EF6\u4E2D\u7528\u4E8E\u7F51\u5173\u5BF9\u8BF7\u6C42\u9A8C\u7B7E\uFF0C\u6CE8\u610F\u7F51\u5173\u4F7F\u7528\u7684 jwks \u683C\u5F0F\u914D\u7F6E\uFF0C\u4E0B\u56FE\u4E2DPublic Key\u9700\u8981\u653E\u5230keys\u7ED3\u6784\u4F53\u4E2D\uFF0C\u5982\uFF1A\`{"keys":[{"kty":"RSA","e":"AQAB",...}]}\`

![img](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png)

**\u65B9\u6CD5\u4E8C\u3001\u672C\u5730\u751F\u6210\uFF1A**

\u672C\u6587\u5E94\u7528 Java \u793A\u4F8B\u8BF4\u660E\uFF0C\u5176\u4ED6\u8BED\u8A00\u7528\u6237\u4E5F\u53EF\u4EE5\u627E\u5230\u76F8\u5173\u7684\u5DE5\u5177\u751F\u6210\u5BC6\u94A5\u5BF9\u3002 \u65B0\u5EFA\u4E00\u4E2A Maven \u9879\u76EE\uFF0C\u52A0\u5165\u5982\u4E0B\u4F9D\u8D56\uFF1A

\`\`\`xml
<dependency>
     <groupId>org.bitbucket.b_c</groupId>
     <artifactId>jose4j</artifactId>
     <version>0.7.0</version>
</dependency>
\`\`\`

\u4F7F\u7528\u5982\u4E0B\u7684\u4EE3\u7801\u751F\u6210\u4E00\u5BF9RSA\u5BC6\u94A5\uFF1A

\`\`\`java
RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);
final String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);
final String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);
\`\`\`

#### 2.2 \u4F7F\u7528 JWK \u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1 token \u7684\u8BA4\u8BC1\u670D\u52A1

\u9700\u8981\u4F7F\u7528 2.1 \u8282\u4E2D\u5728\u7EBF\u751F\u6210\u7684 Keypair JSON \u5B57\u7B26\u4E32\uFF08\u4E09\u4E2A\u65B9\u6846\u5185\u7684\u7B2C\u4E00\u4E2A\uFF09\u6216\u8005\u672C\u5730\u751F\u6210\u7684 privateKeyString JSON \u5B57\u7B26\u4E32\u4F5C\u4E3A\u79C1\u94A5\u6765\u9881\u53D1 token\uFF0C\u7528\u4E8E\u6388\u6743\u53EF\u4FE1\u7684\u7528\u6237\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684 API\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u3002 \u5411\u5BA2\u6237\u9881\u53D1token\u7684\u5F62\u5F0F\u7531\u7528\u6237\u6839\u636E\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u51B3\u5B9A\uFF0C\u53EF\u4EE5\u5C06\u9881\u53D1token\u7684\u529F\u80FD\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\uFF0C\u914D\u7F6E\u6210\u666E\u901A API \u540E\u7531\u8BBF\u95EE\u8005\u901A\u8FC7\u7528\u6237\u540D\u5BC6\u7801\u83B7\u5F97\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u672C\u5730\u73AF\u5883\u751F\u6210 token \u540E\uFF0C\u76F4\u63A5\u62F7\u8D1D\u7ED9\u6307\u5B9A\u7528\u6237\u4F7F\u7528\u3002

\`\`\`java
import java.security.PrivateKey; 
import org.jose4j.json.JsonUtil;
import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jwk.RsaJwkGenerator;
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.NumericDate;
import org.jose4j.lang.JoseException;
public class GenerateJwtDemo {
    public static void main(String[] args) throws JoseException  {
        String keyId = "uniq_key";
          //\u4F7F\u7528\u672C\u6587 2.1 \u8282\u751F\u6210\u7684 Keypair
        String privateKeyJson = "{\\n"
            + "  \\"kty\\": \\"RSA\\",\\n"
            + "  \\"d\\": "
            +
            "\\"O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\",\\n"
            + "  \\"e\\": \\"AQAB\\",\\n"
            + "  \\"alg\\": \\"RS256\\",\\n"
            + "  \\"n\\": \\"vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe"
            +
            "--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\"\\n"
            + "}";
        JwtClaims claims = new JwtClaims();
        claims.setGeneratedJwtId();
        claims.setIssuedAtToNow();
        //\u8FC7\u671F\u65F6\u95F4\u4E00\u5B9A\u8981\u8BBE\u7F6E
        NumericDate date = NumericDate.now();
        date.addSeconds(120*60);
        claims.setExpirationTime(date);
        claims.setNotBeforeMinutesInThePast(1);
        claims.setSubject("YOUR_SUBJECT");
        claims.setAudience("YOUR_AUDIENCE");
        //\u6DFB\u52A0\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u6240\u6709\u503C\u8BF7\u90FD\u4F7F\u7528String\u7C7B\u578B
        claims.setClaim("userId", "1213234");
        claims.setClaim("email", "userEmail@youapp.com");
        JsonWebSignature jws = new JsonWebSignature();
        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);
        jws.setKeyIdHeaderValue(keyId);
        jws.setPayload(claims.toJson());
        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();
     
        jws.setKey(privateKey);
        String jwtResult = jws.getCompactSerialization();
        System.out.println("Generate Json Web token , result is " + jwtResult);
    }
}
\`\`\`
`,a={title:"JWT \u8BA4\u8BC1",description:"JWT \u8BA4\u8BC1\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E JWT(JSON Web Tokens) \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie \u5B57\u6BB5\u89E3\u6790 JWT\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 Token \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","auth"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/jwt-auth.md",rawData:void 0};export{i as _internal,o as body,t as collection,a as data,e as id,s as slug};
