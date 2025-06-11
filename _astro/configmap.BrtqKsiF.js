const e="latest/en/user/configmap.md",t="docs",i="latest/en/user/configmap",n=`
## Common Global Configuration

Higress global configuration ConfigMap object higress-config adds a higress item, reference configuration as follows:

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

### Configuration Description

| Field | Type | Description | Default |
|------------|--------------------|--------------------------------------------------------------------|---------------------|
| addXRealIpHeader | boolean | Whether to add x-real-ip request header. If true, x-real-ip parameter will be added to the request header | false |
| disableXEnvoyHeaders | boolean | Whether to disable x-envoy prefix request headers (e.g., x-envoy-original-path) attached to forwarded requests. If true, they will be disabled | false |
| downstream | See downstream settings below | Downstream settings | See downstream default values below |
| upstream | See upstream settings below | Upstream settings | See upstream default values below |
| tracing | See tracing settings below | Tracing settings | See tracing default values below |
| gzip | See gzip settings below | Gzip settings | See gzip default values below |



#### Tracing Configuration

| Field | Type | Description | Default |
|------------|--------------------|------------------------------------|-------|
| enable | boolean | Whether to enable tracing functionality | false |
| sampling | float | Sampling rate, between 0.0 - 100.0 | 100.0 |
| timeout | int | Tracing middleware grpc connection timeout, in milliseconds | 500 |
| skywalking | See skywalking settings below | Skywalking configuration | Not set |
| zipkin | See zipkin settings below | Zipkin configuration | Not set |
| opentelemetry | See opentelemetry settings below | OpenTelemetry configuration | Not set |


##### Skywalking Configuration
| Field | Type | Description | Default |
|--------------|--------|------------------------|-----|
| service | string | Skywalking grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | Skywalking grpc service port | Empty |
| access_token | string | Skywalking grpc service access token | Empty |


##### Zipkin Configuration
| Field | Type | Description | Default |
|--------------|--------|-------------|-----|
| service | string | Zipkin service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | Zipkin service port | Empty |

##### OpenTelemetry Configuration
| Field | Type | Description | Default |
|--------------|--------|------------------------|-----|
| service | string | OpenTelemetry grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | OpenTelemetry grpc service port | Empty |


> Note:
> Skywalking, Zipkin, and OpenTelemetry cannot be set simultaneously; only one configuration can take effect

#### Gzip Configuration


| Field | Type | Description | Default |
|------------|----------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| enable | boolean | Whether to enable gzip functionality | false |
| minContentLength | int | Minimum byte length to enable compression output | 1024 |
| contentType | array | Content-type types for enabling compression output | text/html,application/json,text/css,<br/>application/javascript,application/xhtml+xml,<br/>image/svg+xml |
| disableOnEtagHeader | boolean | If true, gzip functionality will be disabled when the response contains an etag header | true |
| memoryLevel | int | Controls zlib memory usage from 1 to 9 | 5 |
| windowBits | int | Represents compression algorithm window size from 9 to 15 | 12 |
| chunkSize | int | Zlib buffer size | 4096 |
| compressionLevel | string | Zlib compression ratio | BEST_COMPRESSION |
| compressionStrategy | string | Zlib compression strategy | DEFAULT_STRATEGY |


For detailed explanation of gzip parameter configuration, refer to the envoy gzip compression documentation: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip


#### Downstream Configuration

| Field | Type | Description | Default |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits | int | Connection buffer size, in bytes | 32768 |
| http2 | See http2 settings below | HTTP/2 settings | See http2 default values below |
| idleTimeout | int | Connection idle timeout, in seconds, 0 means this configuration is disabled | 180 |
| maxRequestHeadersKb | int | Maximum request header size, in Kb, maximum is 8192Kb | 60 |

##### HTTP/2 Configuration

| Field | Type | Description | Default |
|------------|--------------------|--------------------------------------|---------------------|
| initialConnectionWindowSize | int | HTTP/2 connection window size, in bytes, range from 65535 to 2147483647 | 1048576 |
| initialStreamWindowSize | int | HTTP/2 stream window size, in bytes, range from 65535 to 2147483647 | 65535 |
| maxConcurrentStreams | int | HTTP/2 maximum concurrent streams, range from 1 to 2147483647 | 100 |


#### Upstream Configuration

| Field | Type | Description | Default |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits | int | Connection buffer size, in bytes | 1048576 |
| idleTimeout | int | Connection idle timeout (idle is defined as no pending requests; if there are requests being processed, it won't be considered idle), in seconds, 0 means this configuration is disabled | 10 |


## TLS Certificate Global Configuration

> Note: Currently only effective for Ingress mode, Gateway API is not yet supported


Higress TLS global configuration ConfigMap object higress-https, reference configuration as follows:

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

### Configuration Description
| Field | Type | Description | Default |
|--------------------------|---------|-------------------------------------------------------------------------------|----------------------|
| automaticHttps | boolean | Whether to enable certificate issuance through ACME Issuer | true |
| renewBeforeDays | int | How many days before certificate expiration to automatically renew, maximum value is 90 days | 30 |
| fallbackForInvalidSecret | boolean | If enabled, when the secretName configured in ingress TLS doesn't exist, it will match a secret based on the domain name in the credentialConfig configuration | false |
| acmeIssuer | array | ACME Issuer settings | See acmeIssuer below |
| credentialConfig | array | Credential configuration settings | See credentialConfig below |


### credentialConfig Configuration

| Field | Type | Description | Default |
|--------------|--------|-----------------------------------------------------------------------------------|----|
| tlsSecret | string | Certificate secret name | - |
| tlsIssuer | string | Corresponding ACME Issuer name, currently only supports letsencrypt. When tlsIssuer is not filled, domains can be a list or wildcard domain, used for global management of secret configurations for these domains; if set to letsencrypt, only one domain can be configured under domains, and it cannot be a wildcard domain, and tlsSecret cannot be an existing non-Higress created automatic certificate | - |
| domains | array | Domain configuration, can be wildcard domains | - |


### acmeIssuer Configuration

| Field | Type | Description | Default |
|--------------------------|--------|-------------------------------|---|
| name | string | ACME Issuer name, only supports letsencrypt | - |
| email | string | ACME Issuer email, used for notification of certificate changes and other events | - |

### How to Enable and Disable ACME Issuer Automatic Certificate Management

By default, ACME Issuer automatic certificate management is enabled during installation, and the system randomly generates an email address. The specific configuration parameters are as follows:

| **Parameter Name** | **Parameter Description** | **Default Value** |
|----------------------------------|-------------------------------------|--------|
|higress-core.controller.automaticHttps.enabled | Whether to enable ACME Issuer certificate issuance, only supports letsencrypt | true |
|higress-core.controller.automaticHttps.email | ACME Issuer email, if empty, the system randomly generates an email address | - |
`,s={title:"Global Configuration Description",description:"Global configuration description.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Ingress"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/configmap.md",rawData:void 0};export{a as _internal,n as body,t as collection,s as data,e as id,i as slug};
