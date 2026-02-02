const e="latest/zh-cn/plugins/authentication/hmac-auth-apisix.md",a="docs",t="latest/zh-cn/plugins/authentication/hmac-auth-apisix",s=`
## \u529F\u80FD\u8BF4\u660E

\`hmac-auth-apisix\` \u63D2\u4EF6\u517C\u5BB9 Apache APISIX \u7684 HMAC \u8BA4\u8BC1\u673A\u5236\uFF0C\u901A\u8FC7 HMAC \u7B97\u6CD5\u4E3A HTTP \u8BF7\u6C42\u751F\u6210\u9632\u7BE1\u6539\u7684\u6570\u5B57\u7B7E\u540D\uFF0C\u5B9E\u73B0\u8BF7\u6C42\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u6743\u9650\u63A7\u5236\u3002\u8BE5\u63D2\u4EF6\u5B8C\u5168\u517C\u5BB9 Apache APISIX HMAC \u8BA4\u8BC1\u63D2\u4EF6\u7684\u914D\u7F6E\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u7B7E\u540D\u751F\u6210\u65B9\u6CD5\u53EF\u53C2\u8003 [Apache APISIX HMAC \u8BA4\u8BC1\u6587\u6863](https://apisix.apache.org/docs/apisix/plugins/hmac-auth/)

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`330\`

## \u914D\u7F6E\u5B57\u6BB5

**\u6CE8\u610F\uFF1A**

- \u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0

### \u8BA4\u8BC1\u914D\u7F6E

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                   | \u9ED8\u8BA4\u503C                                      | \u63CF\u8FF0                                                         |
| ----------------------- | --------------- | -------------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| \`global_auth\`           | bool            | \u9009\u586B\uFF08**\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**\uFF09 | -                                           | \u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF1B\u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09 |
| \`consumers\`             | array of object | \u5FC5\u586B                       | -                                           | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                         |
| \`allowed_algorithms\`    | array of string | \u9009\u586B                       | ["hmac-sha1", "hmac-sha256", "hmac-sha512"] | \u5141\u8BB8\u7684 HMAC \u7B97\u6CD5\u5217\u8868\u3002\u6709\u6548\u503C\u4E3A "hmac-sha1"\u3001"hmac-sha256" \u548C "hmac-sha512" \u7684\u7EC4\u5408 |
| \`clock_skew\`            | number          | \u9009\u586B                       | 300                                         | \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u65F6\u95F4\u6233\u4E0E Higress \u670D\u52A1\u5668\u5F53\u524D\u65F6\u95F4\u4E4B\u95F4\u5141\u8BB8\u7684\u6700\u5927\u65F6\u95F4\u5DEE\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u8FD9\u6709\u52A9\u4E8E\u89E3\u51B3\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u65F6\u95F4\u540C\u6B65\u5DEE\u5F02\uFF0C\u5E76\u9632\u6B62\u91CD\u653E\u653B\u51FB\u3002\u65F6\u95F4\u6233\u5C06\u6839\u636E Date \u5934\u4E2D\u7684\u65F6\u95F4\uFF08\u5FC5\u987B\u4E3A GMT \u683C\u5F0F\uFF09\u8FDB\u884C\u8BA1\u7B97\u3002\u5982\u679C\u914D\u7F6E\u4E3A0\uFF0C\u4F1A\u8DF3\u8FC7\u8BE5\u6821\u9A8C |
| \`signed_headers\`        | array of string | \u9009\u586B                       | -                                           | \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684 HMAC \u7B7E\u540D\u4E2D\u5E94\u5305\u542B\u7684 HMAC \u7B7E\u540D\u5934\u5217\u8868             |
| \`validate_request_body\` | boolean         | \u9009\u586B                       | false                                       | \u5982\u679C\u4E3A true\uFF0C\u5219\u9A8C\u8BC1\u8BF7\u6C42\u6B63\u6587\u7684\u5B8C\u6574\u6027\uFF0C\u4EE5\u786E\u4FDD\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u88AB\u7BE1\u6539\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u63D2\u4EF6\u4F1A\u521B\u5EFA\u4E00\u4E2A SHA-256 \u7684 base64 \u7F16\u7801 digest\uFF0C\u5E76\u5C06\u5176\u4E0E \`Digest\` \u5934\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C \`Digest\` \u5934\u4E22\u5931\u6216 digest \u4E0D\u5339\u914D\uFF0C\u9A8C\u8BC1\u5C06\u5931\u8D25 |
| \`hide_credentials\`      | boolean         | \u9009\u586B                       | false                                       | \u5982\u679C\u4E3A true\uFF0C\u5219\u4E0D\u4F1A\u5C06\u6388\u6743\u8BF7\u6C42\u5934\u4F20\u9012\u7ED9\u4E0A\u6E38\u670D\u52A1                |
| \`anonymous_consumer\`    | string          | \u9009\u586B                       | -                                           | \u533F\u540D\u6D88\u8D39\u8005\u540D\u79F0\u3002\u5982\u679C\u5DF2\u914D\u7F6E\uFF0C\u5219\u5141\u8BB8\u533F\u540D\u7528\u6237\u7ED5\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1       |


\`consumers\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C       | \u63CF\u8FF0                                           |
| ------------ | -------- | -------- | ------------ | ---------------------------------------------- |
| \`access_key\` | string   | \u5FC5\u586B     | -            | \u6D88\u8D39\u8005\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6\u76F8\u5173\u914D\u7F6E\uFF0C\u4F8B\u5982\u5BC6\u94A5 |
| \`secret_key\` | string   | \u5FC5\u586B     | -            | \u7528\u4E8E\u751F\u6210 HMAC \u7684\u5BC6\u94A5                           |
| \`name\`       | string   | \u9009\u586B     | \`access_key\` | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0                         |

### \u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09

| \u540D\u79F0    | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                         |
| ------- | --------------- | ------------------------ | ------ | ------------------------------------------------------------ |
| \`allow\` | array of string | \u9009\u586B(**\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**) | -      | \u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236 |

## \u914D\u7F6E\u793A\u4F8B

### \u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743

\u4EE5\u4E0B\u914D\u7F6E\u7528\u4E8E\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Hmac Auth \u8BA4\u8BC1\u548C\u9274\u6743\u3002**\u6CE8\u610F\uFF1Aaccess_key \u5B57\u6BB5\u4E0D\u53EF\u91CD\u590D**

#### \u793A\u4F8B1\uFF1A\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E

**\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E**\uFF1A
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

**\u8DEF\u7531\u7EA7\u914D\u7F6E**\uFF08\u9002\u7528\u4E8E route-a \u548C route-b\uFF09\uFF1A
\`\`\`yaml
allow: 
- consumer1  # \u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE
\`\`\`

**\u57DF\u540D\u7EA7\u914D\u7F6E**\uFF08\u9002\u7528\u4E8E \`*.example.com\` \u548C \`test.com\`\uFF09\uFF1A
\`\`\`yaml
allow:
- consumer2  # \u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE
\`\`\`

**\u914D\u7F6E\u8BF4\u660E**\uFF1A

- \u8DEF\u7531\u540D\u79F0\uFF08\u5982 route-a\u3001route-b\uFF09\u5BF9\u5E94\u7F51\u5173\u8DEF\u7531\u521B\u5EFA\u65F6\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE
- \u57DF\u540D\u5339\u914D\uFF08\u5982 \`*.example.com\`\u3001\`test.com\`\uFF09\u7528\u4E8E\u8FC7\u6EE4\u8BF7\u6C42\u57DF\u540D\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE
- \u672A\u5728allow\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005\u5C06\u88AB\u62D2\u7EDD\u8BBF\u95EE

**\u751F\u6210\u7B7E\u540D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B Go \u4EE3\u7801\u7247\u6BB5\u6216\u5176\u4ED6\u6280\u672F\u6808**\uFF1A

\`\`\`go
package main

import (
	"crypto/hmac"
	"crypto/sha1"
	"crypto/sha256"
	"crypto/sha512"
	"encoding/base64"
	"fmt"
	"hash"
	"strings"
	"time"
)

// SignedHeader \u5B9A\u4E49\u7B7E\u540D\u5934\u7684\u7ED3\u6784
type SignedHeader struct {
	Name  string
	Value string
}

func main() {
	// \u914D\u7F6E\u53C2\u6570
	keyID := "consumer1-key"                            // key id
	secretKey := "2bda943c-ba2b-11ec-ba07-00163e1250b5" // secret key
	requestMethod := "POST"                             // HTTP method
	requestPath := "/foo"                               // Route URI
	algorithm := "hmac-sha256"                          // algorithm
	validateRequestBody := false                        // \u662F\u5426\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u8BBE\u7F6E\u4E3Atrue\u65F6\u4F1A\u6DFB\u52A0Digest\u5934\u90E8

	// \u5982\u679C\u914D\u7F6E\u4E86 signed_headers\uFF0C\u5219\u9700\u8981\u6309\u7167\u987A\u5E8F\u6DFB\u52A0
	signedHeaders := []SignedHeader{
		//{Name: "x-custom-header-a", Value: "test1"},
		//{Name: "x-custom-header-b", Value: "test2"},
	}

	body := []byte("{}") // request body

	// \u83B7\u53D6\u5F53\u524D GMT \u65F6\u95F4
	gmtTime := time.Now().UTC().Format("Mon, 02 Jan 2006 15:04:05 GMT")

	// \u52A8\u6001\u6784\u9020\u7B7E\u540D\u5B57\u7B26\u4E32\uFF08\u6709\u5E8F\uFF09
	signingStringBuilder := strings.Builder{}
	signingStringBuilder.WriteString(fmt.Sprintf("%s\\n%s %s\\ndate: %s\\n",
		keyID,
		requestMethod,
		requestPath,
		gmtTime))

	// \u6309\u7167signedHeaders\u4E2D\u7684\u987A\u5E8F\u6DFB\u52A0header
	for _, header := range signedHeaders {
		signingStringBuilder.WriteString(fmt.Sprintf("%s: %s\\n", header.Name, header.Value))
	}

	signingString := signingStringBuilder.String()

	// \u521B\u5EFA\u7B7E\u540D
	signature, err := generateHmacSignature(secretKey, algorithm, signingString)
	if err != nil {
		fmt.Printf("Error generating signature: %v\\n", err)
		return
	}

	// \u52A8\u6001\u6784\u5EFAheaders\u5B57\u6BB5\u5185\u5BB9
	headersField := "@request-target date"
	for _, header := range signedHeaders {
		headersField += " " + header.Name
	}

	// \u6784\u9020\u8BF7\u6C42\u5934\u90E8
	headers := map[string]string{
		"Date": gmtTime,
		"Authorization": fmt.Sprintf(\`Signature keyId="%s",algorithm="%s",headers="%s",signature="%s"\`,
			keyID,
			algorithm,
			headersField,
			signature,
		),
	}

	// \u5982\u679C\u9700\u8981\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u5219\u6DFB\u52A0Digest\u5934\u90E8
	if validateRequestBody {
		headers["Digest"] = calculateBodyDigest(body)
	}

	// \u6DFB\u52A0\u7B7E\u540D\u7684\u8BF7\u6C42\u5934
	for _, header := range signedHeaders {
		formattedHeaderName := formatHeaderName(header.Name)
		headers[formattedHeaderName] = header.Value
	}

	// \u6253\u5370\u7B7E\u540D\u5B57\u7B26\u4E32
	fmt.Printf("signingString: %s\\n", signingString)
	// \u6253\u5370\u8BF7\u6C42\u5934
	fmt.Println("Headers:")
	for key, value := range headers {
		fmt.Printf("%s: %s\\n", key, value)
	}
}

// generateHmacSignature \u751F\u6210HMAC\u7B7E\u540D
func generateHmacSignature(secretKey, algorithm, message string) (string, error) {
	var mac hash.Hash

	switch algorithm {
	case "hmac-sha1":
		mac = hmac.New(sha1.New, []byte(secretKey))
	case "hmac-sha256":
		mac = hmac.New(sha256.New, []byte(secretKey))
	case "hmac-sha512":
		mac = hmac.New(sha512.New, []byte(secretKey))
	default:
		return "", fmt.Errorf("unsupported algorithm: %s", algorithm)
	}

	mac.Write([]byte(message))
	signature := mac.Sum(nil)
	return base64.StdEncoding.EncodeToString(signature), nil
}

// calculateBodyDigest \u8BA1\u7B97body\u7684\u6458\u8981
func calculateBodyDigest(body []byte) string {
	hash := sha256.Sum256(body)
	encodedDigest := base64.StdEncoding.EncodeToString(hash[:])
	return "SHA-256=" + encodedDigest
}

// formatHeaderName \u5C06header name\u8F6C\u6362\u4E3A\u6807\u51C6HTTP\u5934\u683C\u5F0F
func formatHeaderName(headerName string) string {
	parts := strings.Split(headerName, "-")
	for i, part := range parts {
		if len(part) > 0 {
			parts[i] = strings.ToUpper(part[:1]) + strings.ToLower(part[1:])
		}
	}
	return strings.Join(parts, "-")
}
\`\`\`

**\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B**\uFF1A

1. **\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94
- \u9644\u52A0\u4FE1\u606F\uFF1A\u8BA4\u8BC1\u901A\u8FC7\u540E\u4F1A\u81EA\u52A8\u6DFB\u52A0\u8BF7\u6C42\u5934 \`X-Mse-Consumer: consumer1\` \u4F20\u9012\u7ED9\u540E\u7AEF

2. **\u8BF7\u6C42\u65B9\u6CD5\u4FEE\u6539\u5BFC\u81F4\u9A8C\u7B7E\u5931\u8D25**
\`\`\`shell
curl -X PUT 'http://localhost:8082/foo' \\  # \u6B64\u5904\u5C06POST\u6539\u4E3APUT
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Invalid signature"}\`

3. **\u4E0D\u5728\u5141\u8BB8\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer2-key",algorithm="hmac-sha256",headers="@request-target date",signature="dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE="' \\
-H 'Date:Fri, 12 Sep 2025 23:59:01 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: consumer 'consumer2' is not allowed"}\`

4. **\u65F6\u95F4\u6233\u8FC7\u671F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\  # \u8FC7\u671F\u7684\u65F6\u95F4\u6233
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Clock skew exceeded"}\`

#### \u793A\u4F8B2\uFF1A\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E

**\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E**\uFF1A
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
signed_headers:  # \u9700\u8981\u7EB3\u5165\u7B7E\u540D\u7684\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934
- X-Custom-Header-A
- X-Custom-Header-B
validate_request_body: true  # \u542F\u7528\u8BF7\u6C42\u4F53\u7B7E\u540D\u6821\u9A8C
\`\`\`

**\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B**\uFF1A

1. **\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\  # \u8BF7\u6C42\u4F53\u6458\u8981
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`

- \u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94

2. **\u7F3A\u5C11\u7B7E\u540D\u5934**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-B:test2' \\  # \u7F3A\u5C11X-Custom-Header-A
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`

- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: expected header "X-Custom-Header-A" missing in signing"}\`

3. **\u8BF7\u6C42\u4F53\u88AB\u7BE1\u6539**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA="' \\
-H 'Date:Sat, 13 Sep 2025 00:09:40 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{"key":"value"}'  # \u7BE1\u6539\u540E\u7684\u8BF7\u6C42\u4F53
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Invalid digest"}\`

### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5728\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F Hmac Auth \u8BA4\u8BC1\uFF0C**\u6240\u6709\u8BF7\u6C42\u5FC5\u987B\u7ECF\u8FC7\u8BA4\u8BC1\u624D\u80FD\u8BBF\u95EE**\uFF1A

\`\`\`yaml
global_auth: true  # \u5F00\u542F\u5168\u5C40\u8BA4\u8BC1
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

**\u8BF4\u660E**\uFF1A\u5F53 \`global_auth: true\` \u65F6\uFF0C\u6240\u6709\u8BBF\u95EE\u7F51\u5173\u7684\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u6709\u6548\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42\u5C06\u88AB\u76F4\u63A5\u62D2\u7EDD`,r={title:"APISIX HMAC \u8BA4\u8BC1",description:"APISIX HMAC \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","hmac auth","apisix"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/hmac-auth-apisix.md",rawData:void 0};export{n as _internal,s as body,a as collection,r as data,e as id,t as slug};
