const e="latest/zh-cn/user/configmap.md",t="docs",i="latest/zh-cn/user/configmap",s=`
## \u901A\u7528\u5168\u5C40\u914D\u7F6E

Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config \u589E\u52A0 higress \u9879\uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A 

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
       service: skywalking-oap-server.op-system.svc.cluster.local
       port: 11800
    gzip:
      enable: false
      minContentLength: 1024
      contentType:
        - text/html
        - application/json
        - text/css
        - application/javascript
        - application/xhtml+xml
        - image/svg+xml
      disableOnEtagHeader: true
      memoryLevel: 5
      windowBits: 12
      chunkSize: 4096
      compressionLevel: BEST_COMPRESSION
      compressionStrategy: DEFAULT_STRATEGY
    addXRealIpHeader: false
    disableXEnvoyHeaders: false
    downstream:
      connectionBufferLimits: 32768
      http2:
        initialConnectionWindowSize: 1048576
        initialStreamWindowSize: 65535
        maxConcurrentStreams: 100
      idleTimeout: 180
      maxRequestHeadersKb: 60
    upstream:
      connectionBufferLimits: 1048576
      idleTimeout: 10
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

### \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                                                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------------------------------------------------------|---------------------|
| addXRealIpHeader     | boolean            | \u662F\u5426\u6DFB\u52A0 x-real-ip \u8BF7\u6C42\u5934\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u4E3A\u8BF7\u6C42\u5934\u6DFB\u52A0 x-real-ip \u53C2\u6570                      | false               |
| disableXEnvoyHeaders | boolean            | \u662F\u5426\u5173\u95ED\u9644\u52A0\u5728\u8F6C\u53D1\u8BF7\u6C42\u4E2D\u7684 x-envoy \u524D\u7F00\u8BF7\u6C42\u5934\uFF08\u4F8B\u5982 x-envoy-original-path\uFF09\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u5173\u95ED | false               |
| downstream    | \u53C2\u8003\u4E0B\u9762 downstream \u8BBE\u7F6E | downstream \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 downstream \u9ED8\u8BA4\u503C |
| upstream    | \u53C2\u8003\u4E0B\u9762 upstream \u8BBE\u7F6E | upstream \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 upstream \u9ED8\u8BA4\u503C |
| tracing    | \u53C2\u8003\u4E0B\u9762 tracing \u8BBE\u7F6E | tracing \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 tracing \u9ED8\u8BA4\u503C |
| gzip    | \u53C2\u8003\u4E0B\u9762 gzip \u8BBE\u7F6E | gzip \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 gzip \u9ED8\u8BA4\u503C |



#### Tracing \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                 | \u9ED8\u8BA4    |
|------------|--------------------|------------------------------------|-------|
| enable     | boolean            | \u662F\u5426\u5F00\u542F tracing \u529F\u80FD                    | false |
| sampling   | float              | \u91C7\u6837\u7387\uFF0C0.0 - 100.0 \u4E4B\u95F4                 | 100.0 |
| timeout    | int                | \u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6 grpc \u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2       | 500   |
| skywalking | \u53C2\u8003\u4E0B\u9762 skywalking \u8BBE\u7F6E | skywalking \u914D\u7F6E                      | \u672A\u8BBE\u7F6E   |
| zipkin     | \u53C2\u8003\u4E0B\u9762 zipkin \u8BBE\u7F6E     | zipkin \u914D\u7F6E                          | \u672A\u8BBE\u7F6E   |
| opentelemetry     | \u53C2\u8003\u4E0B\u9762 opentelemetry \u8BBE\u7F6E     | opentelemetry \u914D\u7F6E                          | \u672A\u8BBE\u7F6E   |


##### skywalking \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                     | \u9ED8\u8BA4  |
|--------------|--------|------------------------|-----|
| service      | string | Skywalking grpc \u670D\u52A1\u5730\u5740   | \u7A7A   |
| port         | string | Skywalking grpc \u670D\u52A1\u7AEF\u53E3   | \u7A7A   |
| access_token | string | Skywalking grpc \u670D\u52A1\u8BBF\u95EE\u51ED\u8BC1 | \u7A7A   |


##### zipkin \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E          | \u9ED8\u8BA4  |
|--------------|--------|-------------|-----|
| service      | string | zipkin \u670D\u52A1\u5730\u5740 | \u7A7A   |
| port         | string | zipkin \u670D\u52A1\u7AEF\u53E3 | \u7A7A   |

##### opentelemetry \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                     | \u9ED8\u8BA4  |
|--------------|--------|------------------------|-----|
| service      | string | opentelemetry grpc \u670D\u52A1\u5730\u5740   | \u7A7A   |
| port         | string | opentelemetry grpc \u670D\u52A1\u7AEF\u53E3   | \u7A7A   |


> \u6CE8\u610F\uFF1A
> skywalking\uFF0Czipkin\uFF0Copentelemetry \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6E\uFF0C\u53EA\u6709\u4E00\u4E2A\u914D\u7F6E\u80FD\u751F\u6548

#### Gzip \u914D\u7F6E\u8BF4\u660E


| \u5B57\u6BB5         | \u7C7B\u578B             | \u8BF4\u660E                                             | \u9ED8\u8BA4                                                                                                       |
|------------|----------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| enable     | boolean        | \u662F\u5426\u5F00\u542F gzip \u529F\u80FD                                   | false                                                                                                    |
| minContentLength | int            | \u542F\u7528\u538B\u7F29\u8F93\u51FA\u6700\u5C11\u5B57\u8282\u957F\u5EA6                                   | 1024                                                                                                     |
| contentType    | array          | \u542F\u7528\u538B\u7F29\u8F93\u51FAcontent-type\u7C7B\u578B                           | text/html,application/json,text/css,<br/>application/javascript,application/xhtml+xml,<br/>image/svg+xml |
| disableOnEtagHeader | boolean        | \u5982\u679C\u662Ftrue\u65F6, \u5F53 response \u5305\u542B etag header\u65F6\u4F1A\u5173\u95ED gzip\u529F\u80FD | true                                                                                                     |
| memoryLevel     | int            | \u4ECE 1 \u5230 9 \u63A7\u5236 zlib\u7528\u5230\u5185\u5B58.                           | 5                                                                                                        |
| windowBits     | int            | \u4ECE 9 \u5230 15 \u8868\u793A\u538B\u7F29\u7B97\u6CD5\u7A97\u53E3\u5927\u5C0F.                           | 12                                                                                                       |
| chunkSize      | int            | zlib buffer\u5927\u5C0F                                  | 4096                                                                                                     |
|  compressionLevel       | string         | zlib \u538B\u7F29\u6BD4\u7387                                      | BEST_COMPRESSION                                                                                         |
|  compressionStrategy    | string         | zlib \u538B\u7F29\u7B56\u7565                                      | DEFAULT_STRATEGY                                                                                         |


\u5173\u4E8E gzip \u53C2\u6570\u914D\u7F6E\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003 envoy gzip\u538B\u7F29\u6587\u6863\uFF1A https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip


#### Downstream \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | \u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282          | 32768               |
| http2     | \u53C2\u8003\u4E0B\u9762 http2 \u8BBE\u7F6E | http2 \u8BBE\u7F6E              | \u53C2\u8003\u4E0B\u9762 http2 \u9ED8\u8BA4\u503C |
| idleTimeout    | int            | \u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E | 180               |
| maxRequestHeadersKb    | int            | \u6700\u5927\u8BF7\u6C42\u5934\u5927\u5C0F\uFF0C\u5355\u4F4DKb\uFF0C\u6700\u5927\u4E3A8192Kb  | 60               |

##### http2 \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                   | \u9ED8\u8BA4                  |
|------------|--------------------|--------------------------------------|---------------------|
| initialConnectionWindowSize     | int            | http2 \u8FDE\u63A5\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647          | 1048576               |
| initialStreamWindowSize     | int            | http2 \u6D41\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647 | 65535               |
| maxConcurrentStreams    | int            | http2 \u6700\u5927\u5E76\u53D1\u6D41\u6570\u91CF\uFF0C\u8303\u56F4\u4E3A1\uFF5E2147483647        | 100               |


#### Upstream \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | \u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282          | 1048576               |
| idleTimeout    | int            | \u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4(\u7A7A\u95F2\u5B9A\u4E49\u662F\u6CA1\u6709\u672A\u5904\u7406\u5B8C\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u6709\u8BF7\u6C42\u5728\u5904\u7406\u4E2D\uFF0C\u4E0D\u4F1A\u5224\u5B9A\u4E3Aidle)\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E | 10               |


## TLS \u8BC1\u4E66\u5168\u5C40\u914D\u7F6E

> \u6CE8\u610F\uFF1A\u5F53\u524D\u4EC5\u5BF9Ingress\u6A21\u5F0F\u751F\u6548\uFF0CGateway API\u6682\u4E0D\u652F\u6301


Higress TLS \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-https \uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A 

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-https
  namespace: higress-system
data:
  cert: |
    automaticHttps: true
    renewBeforeDays: 30
    fallbackForInvalidSecret: true
    acmeIssuer:
    - name: letsencrypt
      email: test@example.com
    credentialConfig:
    - tlsIssuer: letsencrypt
      domains:
      - foo.com
      tlsSecret: foo-com-secret
\`\`\`

### \u914D\u7F6E\u8BF4\u660E
| \u5B57\u6BB5                       | \u7C7B\u578B      | \u8BF4\u660E                                                                            | \u9ED8\u8BA4                    |
|--------------------------|---------|-------------------------------------------------------------------------------|-----------------------|
| name                     | boolean | \u662F\u5426\u542F\u52A8\u901A\u8FC7 ACME Issuer \u6765\u7B7E\u53D1\u8BC1\u4E66                                                      | true                  |
| renewBeforeDays          | int     | \u8BC1\u4E66\u8FC7\u671F\u524D\u591A\u5C11\u5929\u81EA\u52A8Renew\uFF0C \u6700\u5927\u503C\u4E3A90\u5929                                                      | 30                    |
| fallbackForInvalidSecret | boolean | \u5982\u679C\u5F00\u542F\uFF0C\u5F53 ingress TLS \u91CC\u914D\u7F6E secretName \u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u5728 credentialConfig \u914D\u7F6E\u91CC\u6839\u636E\u57DF\u540D\u5339\u914D secret | false                 |
| acmeIssuer               | array   | acmeIssuer \u8BBE\u7F6E                                                                 | \u53C2\u8003\u4E0B\u9762 acmeIssuer       |
| credentialConfig         | array   | credentialConfig \u8BBE\u7F6E                                                           | \u53C2\u8003\u4E0B\u9762 credentialConfig |


### credentialConfig \u914D\u7F6E

| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                                                                                | \u9ED8\u8BA4 |
|--------------|--------|-----------------------------------------------------------------------------------|----|
| tlsSecret    | string | \u8BC1\u4E66 secret \u540D\u79F0                                                                      | -  |
| tlsIssuer    | string | \u5BF9\u5E94 ACME Issuer \u540D\u79F0\uFF0C\u73B0\u5728\u53EA\u652F\u6301 letsencrypt\u3002\u4E0D\u586B tlsIssuer \u65F6\uFF0Cdomains\u53EF\u4EE5\u586B\u5217\u8868\u6216\u6CDB\u57DF\u540D\uFF0C\u7528\u4E8E\u5168\u5C40\u7BA1\u7406\u8FD9\u4E9B\u57DF\u540D\u7684secret\u914D\u7F6E\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E3A letsencrypt\uFF0C domains \u4E0B\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u57DF\u540D\uFF0C\u800C\u4E14\u4E0D\u80FD\u662F\u6CDB\u57DF\u540D\uFF0C\u5E76\u4E14 tlsSecret \u4E0D\u80FD\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\u975E Higress \u521B\u5EFA\u7684\u81EA\u52A8\u8BC1\u4E66 | -  |
| domains      | array  | \u57DF\u540D\u914D\u7F6E\uFF0C\u53EF\u4EE5\u662F\u6CDB\u57DF\u540D                                                                       | -  |


### acmeIssuer \u914D\u7F6E

| \u5B57\u6BB5                       | \u7C7B\u578B     | \u8BF4\u660E                            | \u9ED8\u8BA4 |
|--------------------------|--------|-------------------------------|---|
| name                     | string | ACME Issuer \u540D\u79F0\uFF0C\u53EA\u652F\u6301 letsencrypt | - |
| email                    | string | ACME Issuer \u90AE\u7BB1\uFF0C\u7528\u4E8E\u901A\u77E5\u8BC1\u4E66\u53D8\u66F4\u7B49\u4E8B\u4EF6                | - |

### \u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66

\u5B89\u88C5\u65F6\u9ED8\u8BA4\u542F\u52A8 ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66\u548C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u5982\u4E0B\uFF1A

| **\u53C2\u6570\u540D**                          | **\u53C2\u6570\u8BF4\u660E**                            | **\u9ED8\u8BA4\u503C** |
|----------------------------------|-------------------------------------|---------|
|higress-core.controller.automaticHttps.enabled | \u662F\u5426\u5F00\u542FACME Issuer\u7B7E\u53D1\u8BC1\u4E66\uFF0C\u53EA\u652F\u6301 letsencrypt | true   |
|higress-core.controller.automaticHttps.email   | ACME Issuer \u90AE\u7BB1\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740        | -       |


`,n={title:"\u5168\u5C40\u914D\u7F6E\u8BF4\u660E",description:"\u5168\u5C40\u914D\u7F6E\u8BF4\u660E\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Ingress"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/configmap.md",rawData:void 0};export{a as _internal,s as body,t as collection,n as data,e as id,i as slug};
