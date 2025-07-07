const o="Higress-gvr7dx_awbbpb_mfm8mgpsfrkay78a.md",t="blog",n="higress-gvr7dx_awbbpb_mfm8mgpsfrkay78a",l=`
\u4F5C\u8005\uFF1A\u68A7\u540C

# **<font style="color:#000000;">\u66F4\u65B0</font>**
[MCP\xA0Specification](https://spec.modelcontextprotocol.io/specification/2025-03-26/)<font style="color:#000000;">\u57282025-03-26\u53D1\u5E03\u4E86\u6700\u65B0\u7684\u7248\u672C\uFF0C\u672C\u6587\u5BF9\u4E3B\u8981\u7684\u6539\u52A8\u8FDB\u884C\u8BE6\u7EC6\u4ECB\u7ECD\u548C\u89E3\u91CA</font>

<font style="color:#000000;">2025-03-26 \u7248\u672C\u4E0E 2024-11-05 \u7248\u672C\u7684\u4E3B\u8981\u66F4\u65B0\u5BF9\u6BD4\u8868\u683C\uFF1A</font>

| **<font style="color:#000000;">\u7C7B\u522B</font>** | **<font style="color:#000000;">2024-11-05 \u7248\u672C</font>** | **<font style="color:#000000;">2025-03-26 \u7248\u672C</font>** | **<font style="color:#000000;">\u66F4\u65B0\u610F\u4E49\u4E0E\u5F71\u54CD</font>** |
| :--- | :--- | :--- | :--- |
| **<font style="color:#000000;">\u6388\u6743\u673A\u5236</font>** | <font style="color:#000000;">\u57FA\u4E8E OAuth 2.0\uFF0C\u652F\u6301\u9690\u5F0F\u6388\u6743\u6D41\u548C\u57FA\u672C\u6743\u9650\u63A7\u5236</font> | **<font style="color:#000000;">\u5347\u7EA7\u81F3 OAuth 2.1</font>**<font style="color:#000000;">\uFF0C\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\u6D41\uFF0C\u5F3A\u5236 PKCE \u548C HTTPS</font> | <font style="color:#000000;">\u5B89\u5168\u6027\u63D0\u5347\uFF0C\u51CF\u5C11 Token \u6CC4\u9732\u98CE\u9669\uFF0C\u9002\u5E94\u516C\u5171\u5BA2\u6237\u7AEF\uFF08\u5982\u79FB\u52A8\u7AEF\u3001\u672C\u5730\u5E94\u7528\uFF09\u573A\u666F\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F20\u8F93\u534F\u8BAE</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F7F\u7528 HTTP + SSE\uFF08\u53CC\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u5355\u5411\u6D41\u5F0F\u901A\u4FE1</font> | **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u66FF\u6362\u4E3A Streamable HTTP</font>**<font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u5355\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u53CC\u5411\u901A\u4FE1\u4E0E\u65AD\u7EBF\u6062\u590D</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u7B80\u5316\u90E8\u7F72\u590D\u6742\u5EA6\uFF0C\u652F\u6301\u7075\u6D3B\u901A\u4FE1\u6A21\u5F0F\uFF08\u4E00\u6B21\u6027\u54CD\u5E94\u6216\u6D41\u5F0F\u63A8\u9001\uFF09\uFF0C\u4F18\u5316\u7F51\u7EDC\u7A33\u5B9A\u6027\u3002</font> |
| **<font style="color:#000000;">JSON-RPC \u6279\u5904\u7406</font>** | <font style="color:#000000;">\u672A\u5F3A\u5236\u652F\u6301\uFF0C\u90E8\u5206\u5B9E\u73B0\u53EF\u9009</font> | **<font style="color:#000000;">\u534F\u8BAE\u5C42\u9762\u5F3A\u5236\u652F\u6301\u6279\u5904\u7406</font>**<font style="color:#000000;">\uFF08Batching\uFF09\uFF0C\u8981\u6C42 MUST \u5B9E\u73B0</font> | <font style="color:#000000;">\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\uFF0C\u652F\u6301\u5E76\u884C\u4EFB\u52A1\u5904\u7406\uFF0C\u63D0\u5347\u6279\u91CF\u64CD\u4F5C\u6548\u7387\uFF08\u5982\u539F\u5B50\u4E8B\u52A1\uFF09\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u5DE5\u5177\u5143\u6570\u636E</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4EC5\u6709 </font><font style="color:#000000;background-color:#f7f7f7;">inputSchema</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u548C </font><font style="color:#000000;background-color:#f7f7f7;">description</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u63CF\u8FF0</font> | **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E Tool Annotations</font>**<font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u64CD\u4F5C\u7C7B\u3001\u5C55\u793A\u7C7B\u5143\u6570\u636E\uFF09</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u663E\u5F0F\u6807\u8BB0\u5DE5\u5177\u98CE\u9669\uFF08\u5982 </font><font style="color:#000000;background-color:#f7f7f7;">destructive</font><font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF09\u3001\u652F\u6301\u81EA\u52A8\u6743\u9650\u7BA1\u63A7\u4E0E\u524D\u7AEF UI \u9002\u914D\uFF0C\u63D0\u5347\u5B89\u5168\u5408\u89C4\u6027\u3002</font> |
| **<font style="color:#000000;">\u8FDB\u5EA6\u901A\u77E5</font>** | <font style="color:#000000;">\u4EC5\u652F\u6301\u767E\u5206\u6BD4\u6216\u6570\u503C\u8FDB\u5EA6</font> | <font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;"> \u5B57\u6BB5\uFF0C\u652F\u6301\u52A8\u6001\u72B6\u6001\u63CF\u8FF0</font> | <font style="color:#000000;">\u63D0\u5347\u7528\u6237\u4EA4\u4E92\u4F53\u9A8C\uFF08\u5982\u663E\u793A\u201C\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u5269\u4F59 50%\u201D\uFF09\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u591A\u6A21\u6001\u652F\u6301</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u652F\u6301\u6587\u672C\u3001\u56FE\u50CF</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E\u97F3\u9891\u6570\u636E\u6D41\u652F\u6301</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u6269\u5C55\u8BED\u97F3\u52A9\u624B\u3001\u5B9E\u65F6\u97F3\u9891\u5904\u7406\u7B49\u573A\u666F\u80FD\u529B\u3002</font> |
| **<font style="color:#000000;">\u53C2\u6570\u8865\u5168</font>** | <font style="color:#000000;">\u672A\u660E\u786E\u652F\u6301</font> | <font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;"> \u80FD\u529B\u58F0\u660E\uFF0C\u652F\u6301\u53C2\u6570\u81EA\u52A8\u8865\u5168\u5EFA\u8BAE</font> | <font style="color:#000000;">\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\uFF0C\u51CF\u5C11\u624B\u52A8\u8F93\u5165\u9519\u8BEF\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F1A\u8BDD\u7BA1\u7406</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u672A\u660E\u786E\u4F1A\u8BDD\u6807\u8BC6</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F15\u5165 </font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Session-Id</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u5934\u90E8\uFF0C\u652F\u6301\u65AD\u7EBF\u91CD\u8FDE\u4E0E\u72B6\u6001\u6062\u590D</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u589E\u5F3A\u957F\u65F6\u4EFB\u52A1\uFF08\u5982\u8BED\u97F3\u4EA4\u4E92\uFF09\u7684\u53EF\u9760\u6027\uFF0C\u964D\u4F4E\u7F51\u7EDC\u6CE2\u52A8\u5F71\u54CD\u3002</font> |
| **<font style="color:#000000;">\u5B89\u5168\u8981\u6C42</font>** | <font style="color:#000000;">\u4F9D\u8D56 OAuth 2.0 \u7684\u63A8\u8350\u5B9E\u8DF5</font> | **<font style="color:#000000;">\u5F3A\u5236 HTTPS</font>**<font style="color:#000000;">\u3001Token \u7ED1\u5B9A\u4E0E\u5B58\u50A8\u52A0\u5BC6\uFF0C\u652F\u6301\u77ED\u671F Token \u8F6E\u6362</font> | <font style="color:#000000;">\u51CF\u5C11\u4E2D\u95F4\u4EBA\u653B\u51FB\u98CE\u9669\uFF0C\u7F29\u5C0F Token \u6CC4\u9732\u540E\u7684\u6709\u6548\u7A97\u53E3\u3002</font> |


---

### <font style="color:#000000;">\u5173\u952E\u5DEE\u5F02\u603B\u7ED3\uFF1A</font>
1. <font style="color:#000000;">\u5B89\u5168\u6027</font>
    - <font style="color:#000000;">OAuth 2.1 \u5F3A\u5236 PKCE \u548C HTTPS\uFF0C\u6D88\u9664\u9690\u5F0F\u6D41\u98CE\u9669\uFF0C\u66F4\u9002\u5E94 AI \u5DE5\u5177\u7684\u9AD8\u6743\u9650\u573A\u666F\u3002</font>
2. <font style="color:#000000;">\u901A\u4FE1\u6548\u7387</font>
    - <font style="color:#000000;">Streamable HTTP \u5355\u7AEF\u70B9\u8BBE\u8BA1\u7B80\u5316\u67B6\u6784\uFF0CJSON-RPC \u6279\u5904\u7406\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\u3002</font>
3. <font style="color:#000000;">\u5DE5\u5177\u53EF\u63A7\u6027</font>
    - <font style="color:#000000;">Tool Annotations \u663E\u5F0F\u6807\u8BB0\u98CE\u9669\u884C\u4E3A\uFF08\u5982\u5220\u9664\u64CD\u4F5C\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u5316\u6743\u9650\u7BA1\u7406\u548C\u524D\u7AEF\u9002\u914D\u3002</font>
4. <font style="color:#000000;">\u591A\u6A21\u6001\u6269\u5C55</font>
    - <font style="color:#000000;">\u65B0\u589E\u97F3\u9891\u6D41\u652F\u6301\uFF0C\u8865\u5168\u8BED\u97F3\u4EA4\u4E92\u80FD\u529B\uFF0C\u5B8C\u5584\u591A\u6A21\u6001\u751F\u6001\u3002</font>
5. <font style="color:#000000;">\u5F00\u53D1\u53CB\u597D\u6027</font>
    - <font style="color:#000000;">\u53C2\u6570\u8865\u5168\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\uFF09\u548C\u8FDB\u5EA6\u6D88\u606F\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\uFF09\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\u4E0E\u7528\u6237\u4F53\u9A8C\u3002</font>

---

# **<font style="color:#000000;">1. \u66F4\u5B89\u5168\u7684OAuth 2.1</font>**
## **<font style="color:#000000;">1.1 </font>**<font style="color:#000000;">\u4ECEOAuth 2.0\u52302.1\u7684\u672C\u8D28\u8DE8\u8D8A</font>
### **<font style="color:#000000;">1.1.1 \u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB</font>**
<font style="color:#000000;">\u65E7\u7248OAuth 2.0\u957F\u671F\u5B58\u5728\u4E09\u5927\u81F4\u547D\u9690\u60A3\uFF1A</font>

| **<font style="color:#000000;">\u98CE\u9669\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5177\u4F53\u6F0F\u6D1E</font>** | **<font style="color:#000000;">OAuth 2.1\u4FEE\u590D\u65B9\u6848</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u6388\u6743\u7801\u6CC4\u9732</font> | <font style="color:#000000;">\u9690\u5F0F\u6388\u6743\u6D41\u901A\u8FC7URL\u7247\u6BB5\u4F20\u9012Token</font> | <font style="color:#000000;">\u5B8C\u5168\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\uFF08Implicit Flow\uFF09</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4E2D\u95F4\u4EBA\u653B\u51FB</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u516C\u5171\u5BA2\u6237\u7AEF\u672A\u52A0\u5BC6\u4F20\u8F93\u6388\u6743\u7801</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528PKCE\uFF08Proof Key for Code Exchange\uFF09</font> |
| <font style="color:#000000;">\u91CD\u5B9A\u5411\u52AB\u6301</font> | <font style="color:#000000;">\u5F00\u653E\u91CD\u5B9A\u5411\u6F0F\u6D1E\u5BFC\u81F4\u9493\u9C7C\u653B\u51FB</font> | <font style="color:#000000;">\u4E25\u683C\u9A8C\u8BC1\u91CD\u5B9A\u5411URI\u767D\u540D\u5355</font> |


<font style="color:#000000;">\u5728AI\u5DE5\u5177\u573A\u666F\u4E2D\uFF0C\u8FD9\u4E9B\u6F0F\u6D1E\u53EF\u80FD\u9020\u6210\u707E\u96BE\u6027\u540E\u679C\u3002\u4F8B\u5982\u901A\u8FC7\u622A\u83B7\u672A\u52A0\u5BC6\u7684\u6388\u6743\u7801\uFF0C\u653B\u51FB\u8005\u53EF\u4F2A\u9020"\u6570\u636E\u5E93\u6E05\u7406\u5DE5\u5177"\u7684\u5408\u6CD5\u8C03\u7528\u8BF7\u6C42\u3002</font>

### **<font style="color:#000000;">1.1.2 PKCE\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316</font>**
<font style="color:#000000;">PKCE\u901A\u8FC7\u5BC6\u7801\u5B66\u6311\u6218\u54CD\u5E94\u673A\u5236\uFF0C\u5F7B\u5E95\u675C\u7EDD\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1A</font>

\`\`\`plain
# \u5BA2\u6237\u7AEF\u751F\u6210PKCE\u53C2\u6570\u793A\u4F8B  
import hashlib, base64, os  

code_verifier = base64.urlsafe_b64encode(os.urandom(32)).decode('utf-8').rstrip('=')  
code_challenge = hashlib.sha256(code_verifier.encode()).digest()  
code_challenge = base64.urlsafe_b64encode(code_challenge).decode('utf-8').rstrip('=')
\`\`\`

### **<font style="color:#000000;">1.1.3 </font>**<font style="color:#000000;">\u6D41\u7A0B\u5BF9\u6BD4</font>
<font style="color:#000000;">\u4F20\u7EDFOAuth 2.0\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u88F8\u6388\u6743\u7801  OAuth 2.1 + PKCE\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801 + code_challenge  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u52A0\u5BC6\u6388\u6743\u7801  \u5BA2\u6237\u7AEF \u2192 \u4EE4\u724C\u7AEF\u70B9\uFF1Acode_verifier + \u6388\u6743\u7801 </font>

## **<font style="color:#000000;">1.2 \u534F\u8BAE\u673A\u5236\uFF1A\u4E3AAI\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB</font>**
### **<font style="color:#000000;">1.2.1 \u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\uFF08DCR\uFF09</font>**
<font style="color:#000000;">\u9488\u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u788E\u7247\u5316\u7279\u70B9\uFF0CMCP\u5F3A\u5236\u8981\u6C42\u652F\u6301RFC7591\u52A8\u6001\u6CE8\u518C\u534F\u8BAE\uFF1A</font>

![](/img/1751872809049.png)

<font style="color:#000000;">\u8BE5\u673A\u5236\u4F7F\u5F97\uFF1A</font>

+ <font style="color:#000000;">\u65B0\u5DE5\u5177\u65E0\u9700\u9884\u6CE8\u518C\u5373\u53EF\u63A5\u5165\u4EFB\u610FMCP\u670D\u52A1</font>
+ <font style="color:#000000;">\u4E34\u65F6\u6027AI Agent\u53EF\u81EA\u52A8\u83B7\u53D6\u751F\u5B58\u671F\u5339\u914D\u7684\u51ED\u8BC1</font>
+ <font style="color:#000000;">\u652F\u6301\u51ED\u8BC1\u81EA\u52A8\u8F6E\u6362\uFF08\u5982\u6BCF24\u5C0F\u65F6\u66F4\u6362client_secret\uFF09</font>

### **<font style="color:#000000;">1.2.2 \u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE</font>**
<font style="color:#000000;">\u901A\u8FC7\u6807\u51C6\u5316\u53D1\u73B0\u7AEF\u70B9\u5B9E\u73B0\u534F\u8BAE\u81EA\u63CF\u8FF0\uFF1A</font>

\`\`\`plain
GET /.well-known/oauth-authorization-server HTTP/1.1  
Host: api.example.com  
MCP-Protocol-Version: 2025-03-26  

HTTP/1.1 200 OK  
{  
  "issuer": "https://api.example.com",  
  "authorization_endpoint": "https://auth.example.com/authorize",  
  "token_endpoint": "https://auth.example.com/token",  
  "capabilities": ["PKCE", "TOKEN_ROTATION"]  
}
\`\`\`

<font style="color:#000000;">\u53D1\u73B0\u5931\u8D25\u65F6\uFF0C\u5BA2\u6237\u7AEF\u81EA\u52A8\u56DE\u9000\u5230\u9884\u8BBE\u7AEF\u70B9\u8DEF\u5F84\uFF0C\u4FDD\u969C\u517C\u5BB9\u6027\u3002</font>

## **<font style="color:#000000;">1.3 \u5B9E\u73B0\u89C4\u8303\uFF1AMCP\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B</font>**
### **<font style="color:#000000;">1.3.1 HTTPS\u5168\u94FE\u8DEF\u5F3A\u5236</font>**
+ <font style="color:#000000;">\u6240\u6709\u6388\u6743\u7AEF\u70B9\u5FC5\u987B\u90E8\u7F72TLS 1.3+</font>
+ <font style="color:#000000;">\u6DF7\u5408HTTP\u5185\u5BB9\uFF08\u5982\u56FE\u50CF\uFF09\u9700\u901A\u8FC7\u52A0\u5BC6\u901A\u9053\u4EE3\u7406</font>

### **<font style="color:#000000;">1.3.2 \u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7</font>**
| **<font style="color:#000000;">\u4EE4\u724C\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5EFA\u8BAE\u751F\u5B58\u671F</font>** | **<font style="color:#000000;">\u5237\u65B0\u89C4\u5219</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">Access Token</font> | <font style="color:#000000;">\u226415\u5206\u949F</font> | <font style="color:#000000;">\u5355\u6B21\u4F7F\u7528\u540E\u7ACB\u5373\u5931\u6548</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">Refresh Token</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u226424\u5C0F\u65F6</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u6BCF\u6B21\u5237\u65B0\u751F\u6210\u65B0\u4EE4\u724C</font> |


### **<font style="color:#000000;">1.3.3 \u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8</font>**
+ <font style="color:#000000;">\u7981\u6B62\u660E\u6587\u5B58\u50A8\uFF1A\u91C7\u7528\u64CD\u4F5C\u7CFB\u7EDF\u5B89\u5168\u5B58\u50A8\u533A\u6216HSM\u52A0\u5BC6</font>
+ <font style="color:#000000;">\u79FB\u52A8\u7AEF\u4F7F\u7528Android Keystore/iOS Keychain</font>

### **<font style="color:#000000;">1.3.4 \u4F1A\u8BDD\u7ED1\u5B9A</font>**
\`\`\`plain
// \u4EE4\u724C\u5143\u6570\u636E\u793A\u4F8B  
{  
  "token": "eyJhbGciOi...",  
  "binding": {  
    "client_id": "mcp-client-xyz",  
    "ip_range": "192.168.1.0/24",  
    "device_fingerprint": "SHA3-256(\u786C\u4EF6\u7279\u5F81)"  
  }  
}
\`\`\`

### **<font style="color:#000000;">1.3.5 \u5BA1\u8BA1\u65E5\u5FD7</font>**
+ <font style="color:#000000;">\u8BB0\u5F55\u6240\u6709\u4EE4\u724C\u9881\u53D1/\u64A4\u9500\u4E8B\u4EF6</font>
+ <font style="color:#000000;">\u9AD8\u98CE\u9669\u64CD\u4F5C\uFF08\u5982\u5220\u9664\u7C7B\u5DE5\u5177\u8C03\u7528\uFF09\u9700\u5173\u8054\u539F\u59CB\u6388\u6743\u4F1A\u8BDD</font>

### **<font style="color:#000000;">1.3.6 \u9632\u5FA1\u6027\u7F16\u7A0B</font>**
\`\`\`plain
// \u5B89\u5168\u7684\u4EE4\u724C\u9A8C\u8BC1\u4F2A\u4EE3\u7801  
public boolean verifyToken(String token) {  
    try {  
        JWT jwt = decode(token);  
        if (jwt.isExpired()) throw new TokenExpiredException();  
        if (!jwt.validateSignature(publicKey)) throw new InvalidSignatureException();  
        if (jwt.getClaim("scope").contains("destructive")) {  
            requireMfa(); // \u9AD8\u5371\u64CD\u4F5C\u89E6\u53D1\u591A\u56E0\u7D20\u8BA4\u8BC1  
        }  
        return true;  
    } catch (JWTException e) {  
        auditLog.logSecurityEvent("INVALID_TOKEN", token);  
        return false;  
    }  
}
\`\`\`

## **<font style="color:#000000;">1.4 \u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD</font>**
### **<font style="color:#000000;">1.4.1 \u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0</font>**
<font style="color:#000000;">\u901A</font><font style="color:rgb(44, 44, 54);">\u901A\u8FC7 </font>\`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">ToolAnnotations</font>**\`<font style="color:rgb(44, 44, 54);"> \u63A5\u53E3\u5B9A\u4E49\u7684\u5143\u6570\u636E\uFF08\u89C1\u4EE3\u7801\u5757\uFF09\uFF0C\u5F00\u53D1\u8005\u53EF\u5411\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5DE5\u5177\u884C\u4E3A\u7684</font>**<font style="color:rgb(17, 24, 39);">\u975E\u5F3A\u5236\u6027\u63D0\u793A </font>**<font style="color:rgb(44, 44, 54);">\u3002\u8FD9\u4E9B\u6807\u6CE8\u5BF9\u5DE5\u5177\u94FE\u751F\u6001\u4EA7\u751F\u4EE5\u4E0B\u5F71\u54CD\uFF1A</font>

1. **<font style="color:rgb(17, 24, 39);">\u4EA4\u4E92\u900F\u660E\u5EA6\u63D0\u5347</font>**
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">title</font>**\`<font style="color:rgb(44, 44, 54);"> \u63D0\u4F9B\u8BED\u4E49\u5316\u547D\u540D</font>
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">readOnlyHint/destructiveHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u6807\u660E\u64CD\u4F5C\u662F\u5426\u5177\u5907\u7834\u574F\u6027</font>
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">openWorldHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u533A\u5206\u5185\u5916\u90E8\u4F5C\u7528\u57DF\uFF08\u5982\u641C\u7D22\u5F15\u64CE vs \u5185\u5B58\u8BBF\u95EE\uFF09  
</font><font style="color:rgb(44, 44, 54);">\u524D\u7AEF\u53EF\u901A\u8FC7\u8FD9\u4E9B\u6807\u6CE8\u52A8\u6001\u6E32\u67D3\u64CD\u4F5C\u786E\u8BA4\u5F39\u7A97\u6216\u98CE\u9669\u8B66\u793A\u56FE\u6807\u3002</font>
2. **<font style="color:rgb(17, 24, 39);">\u8C03\u7528\u7B56\u7565\u4F18\u5316</font>**
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">idempotentHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u5141\u8BB8\u5BA2\u6237\u7AEF\u81EA\u52A8\u91CD\u8BD5\u5E42\u7B49\u8BF7\u6C42\uFF08\u5982\u67E5\u8BE2\u64CD\u4F5C\uFF09</font>
    - <font style="color:rgb(44, 44, 54);">\u975E\u5E42\u7B49\u5199\u64CD\u4F5C\uFF08\u5982\u6587\u4EF6\u5220\u9664\uFF09\u5219\u5F3A\u5236\u4EBA\u5DE5\u4E8C\u6B21\u786E\u8BA4</font>

**<font style="color:rgb(17, 24, 39);">\u751F\u6001\u517C\u5BB9\u6027\u4FDD\u969C</font>**<font style="color:rgb(44, 44, 54);">  
</font><font style="color:rgb(44, 44, 54);">\u6240\u6709\u6807\u6CE8\u4EC5\u4F5C\u4E3A</font>**<font style="color:rgb(17, 24, 39);">\u884C\u4E3A\u5EFA\u8BAE </font>**<font style="color:rgb(44, 44, 54);">\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u5F97\u636E\u6B64\u66FF\u4EE3\u5B89\u5168\u63A7\u5236\u3002\u4F8B\u5982\uFF1A</font>

\`\`\`typescript
if (tool.annotations.destructiveHint) {  
  showDestructiveWarningDialog(); // \u524D\u7AEF\u63D0\u793A  
}  
await enforceRBACPolicy(); // \u771F\u5B9E\u6743\u9650\u7531RBAC\u5F15\u64CE\u6821\u9A8C  
\`\`\`

## **<font style="color:#000000;">1.5 \u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357</font>**
### **<font style="color:#000000;">1.5.1 \u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4</font>**
| **<font style="color:#000000;">\u529F\u80FD\u9879</font>** | **<font style="color:#000000;">2024-11-05\u7248\u672C</font>** | **<font style="color:#000000;">2025-03-26\u7248\u672C</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u6388\u6743\u7AEF\u70B9\u53D1\u73B0</font> | <font style="color:#000000;">\u624B\u52A8\u914D\u7F6E</font> | <font style="color:#000000;">\u81EA\u52A8\u53D1\u73B0 + \u56DE\u9000\u673A\u5236</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">PKCE\u652F\u6301</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u53EF\u9009</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528</font> |
| <font style="color:#000000;">\u4EE4\u724C\u5B58\u50A8</font> | <font style="color:#000000;">\u5141\u8BB8\u5185\u5B58\u7F13\u5B58</font> | <font style="color:#000000;">\u5FC5\u987B\u4F7F\u7528\u5B89\u5168\u5B58\u50A8</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u9519\u8BEF\u5904\u7406</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u57FA\u7840HTTP\u72B6\u6001\u7801</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u7EC6\u5316OAuth\u9519\u8BEF\u4EE3\u7801\uFF08\u5982invalid_scope\uFF09</font> |


### **<font style="color:#000000;">1.5.2 \u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B</font>**
<font style="color:#000000;">\u65E7\u7248\u4EE3\u7801\u7247\u6BB5\uFF1A</font>

\`\`\`plain
// OAuth 2.0\u9690\u5F0F\u6D41  
const token = getTokenFromURLFragment();  
callMCPService(token);
\`\`\`

<font style="color:#000000;">\u65B0\u7248\u5B89\u5168\u5B9E\u73B0\uFF1A</font>

\`\`\`plain
// OAuth 2.1 PKCE\u6D41  
const { verifier, challenge } = generatePKCE();  
startAuthFlow(challenge);  

// \u56DE\u8C03\u5904\u7406  
function handleCallback(code) {  
    fetchToken(code, verifier).then(token => {  
        secureStorage.save('mcp_token', token);  
        callMCPService(token);  
    });  
}
\`\`\`

# **<font style="color:#000000;">2. Streamable HTTP\uFF1A\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7</font>**
### <font style="color:#000000;">2.1. \u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF</font>
### **<font style="color:#000000;">2.1.1 \u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9</font>**
<font style="color:#000000;">2024-11-05\u7248\u672C\u91C7\u7528\u7684HTTP+SSE\u53CC\u901A\u9053\u65B9\u6848\u5B58\u5728\u4E09\u5927\u7ED3\u6784\u6027\u7F3A\u9677\uFF1A</font>

| **<font style="color:#000000;">\u95EE\u9898\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5177\u4F53\u8868\u73B0</font>** | **<font style="color:#000000;">\u6280\u672F\u540E\u679C</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u8FDE\u63A5\u7BA1\u7406\u590D\u6742</font> | <font style="color:#000000;">\u9700\u7EF4\u62A4POST\u8BF7\u6C42\u7AEF\u4E0ESSE\u4E8B\u4EF6\u6D41\u53CC\u901A\u9053</font> | <font style="color:#000000;">\u5BA2\u6237\u7AEF\u9700\u5B9E\u73B0\u53CC\u91CD\u8FDE\u63A5\u4FDD\u6D3B\u673A\u5236</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u65AD\u7EBF\u6062\u590D\u56F0\u96BE</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">SSE\u6D41\u4E2D\u65AD\u540E\u9700\u91CD\u65B0\u5EFA\u7ACB\u5B8C\u6574\u4F1A\u8BDD</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u957F\u4EFB\u52A1\u573A\u666F\u53EF\u80FD\u4E22\u5931\u4E0A\u4E0B\u6587\u6570\u636E</font> |
| <font style="color:#000000;">\u534F\u8BAE\u5197\u4F59</font> | <font style="color:#000000;">\u7B80\u5355\u8BF7\u6C42\u88AB\u8FEB\u4F7F\u7528\u6D41\u5F0F\u4F20\u8F93</font> | <font style="color:#000000;">\u989D\u591630%\u7684\u7F51\u7EDC\u8D44\u6E90\u6D88\u8017\uFF08\u57FA\u4E8EMCP\u5DE5\u4F5C\u7EC4\u57FA\u51C6\u6D4B\u8BD5\uFF09</font> |


<font style="color:#000000;">\u5178\u578B\u6848\u4F8B\uFF1A\u5F53AI\u52A9\u624B\u540C\u65F6\u6267\u884C"\u8BED\u97F3\u8F6C\u6587\u5B57+\u5B9E\u65F6\u7FFB\u8BD1"\u65F6\uFF0C\u65E7\u65B9\u6848\u9700\u8981\u5EFA\u7ACB4\u4E2A\u72EC\u7ACB\u8FDE\u63A5\uFF082\u5DE5\u5177\xD72\u534F\u8BAE\uFF09\uFF0C\u5BFC\u81F4\u79FB\u52A8\u7AEF\u5E73\u5747\u5EF6\u8FDF\u589E\u52A0400ms\u3002</font>

### **<font style="color:#000000;">2.1.2 Streamable HTTP\u6838\u5FC3\u6280\u672F\u89E3\u6790</font>**
<font style="color:#000000;">\u65B0\u534F\u8BAE\u901A\u8FC7\u4E09\u5927\u521B\u65B0\u5B9E\u73B0\u901A\u4FE1\u8303\u5F0F\u8F6C\u6362\uFF1A</font>

![](/img/1751872812364.png)

#### **<font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u5F81</font>**
1. <font style="color:#000000;">\u667A\u80FD\u534F\u8BAE\u534F\u5546</font>
    - <font style="color:#000000;">\u5BA2\u6237\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Accept</font><font style="color:#000000;">\u5934\u58F0\u660E\u80FD\u529B\uFF1A</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u52A8\u6001\u9009\u62E9\u4F20\u8F93\u6A21\u5F0F\uFF08\u5B9E\u9A8C\u6570\u636E\u663E\u793A\u534F\u5546\u8017\u65F6<5ms\uFF09</font>
2. <font style="color:#000000;">\u53CC\u5411\u901A\u4FE1\u96A7\u9053</font>
    - <font style="color:#000000;">\u5728SSE\u6D41\u5F00\u542F\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u53EF\u901A\u8FC7\u9644\u52A0HTTP POST\u53D1\u9001\u65B0\u8BF7\u6C42</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Request-Id</font><font style="color:#000000;">\u5934\u90E8\u5B9E\u73B0\u591A\u8DEF\u590D\u7528</font>
3. <font style="color:#000000;">\u65AD\u70B9\u7EED\u4F20\u673A\u5236</font>
    - <font style="color:#000000;">\u91CD\u8FDE\u65F6\u643A\u5E26</font><font style="color:#000000;background-color:#f7f7f7;">Last-Event-ID</font><font style="color:#000000;">\u5934\u90E8\uFF1A</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u53EF\u9009\u62E9\uFF1A</font>
        * <font style="color:#000000;">\u4ECE\u6307\u5B9AID\u91CD\u653E\u4E8B\u4EF6\uFF08\u9700\u5B9E\u73B0\u4E8B\u4EF6\u65E5\u5FD7\uFF09</font>
        * <font style="color:#000000;">\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0\uFF08\u63A8\u8350\u7528\u4E8E\u5B9E\u65F6\u76D1\u63A7\u573A\u666F\uFF09</font>

### **<font style="color:#000000;">2.1.3 \u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C</font>**
#### <font style="color:#000000;">\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5</font>
<font style="color:#000000;">\u57FA\u4E8EMCP\u5B98\u65B9\u6D4B\u8BD5\u5E73\u53F0\u7684\u6570\u636E\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);">\u6307\u6807</font>** | **<font style="color:rgb(0, 0, 0);">\u65E7\u534F\u8BAE(HTTP+SSE)</font>** | **<font style="color:rgb(0, 0, 0);">Streamable HTTP</font>** | **<font style="color:rgb(0, 0, 0);">\u63D0\u5347\u5E45\u5EA6</font>** |
| :--- | :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u8FDE\u63A5\u5EFA\u7ACB\u8017\u65F6</font> | <font style="color:rgb(0, 0, 0);">320ms \xB150ms</font> | <font style="color:rgb(0, 0, 0);">180ms \xB120ms</font> | <font style="color:rgb(0, 0, 0);">43.75%</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6570\u636E\u4F20\u8F93\u5197\u4F59\u5EA6</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">18%</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">5%</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">72.2%</font> |
| <font style="color:rgb(0, 0, 0);">\u65AD\u7EBF\u6062\u590D\u6210\u529F\u7387</font> | <font style="color:rgb(0, 0, 0);">68%</font> | <font style="color:rgb(0, 0, 0);">93%</font> | <font style="color:rgb(0, 0, 0);">36.8%</font> |


# **<font style="color:#000000;">3. JSON-RPC\u6279\u5904\u7406\uFF1A\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301</font>**
## **<font style="color:#000000;">3.1 \u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406</font>**
### **<font style="color:#000000;">3.1.1 \u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42</font>**
<font style="color:#000000;">\u65B0\u7248\u89C4\u8303\u7B2C4.2\u6761\u660E\u786E\u89C4\u5B9A\uFF1A</font>

<font style="color:rgb(139, 139, 139);">\u6240\u6709MCP\u5B9E\u73B0\u5FC5\u987B\u652F\u6301JSON-RPC 2.0\u6279\u5904\u7406\u89C4\u8303\u3002\u5BF9\u4E8E\u5305\u542B\u901A\u77E5\uFF08notification\uFF09\u7684\u6279\u5904\u7406\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u5E94\u5728\u5B8C\u6210\u5904\u7406\u540E\u8FD4\u56DEHTTP 202 Accepted\u72B6\u6001\u7801\u3002</font>

<font style="color:#000000;">\u5408\u6CD5\u8BF7\u6C42\u793A\u4F8B\uFF1A</font>

\`\`\`plain
json[  
    {"jsonrpc":"2.0","id":1,"method":"text_analyze","params":{"text":"Hello"}},  
    {"jsonrpc":"2.0","id":2,"method":"image_tag","params":{"url":"img.jpg"}},  
    {"jsonrpc":"2.0","method":"log_event"}  // \u65E0ID\u7684\u901A\u77E5\u7C7B\u578B  
]
\`\`\`

<font style="color:#000000;">\u54CD\u5E94\u5904\u7406\u89C4\u5219\uFF1A</font>

+ <font style="color:#000000;">\u6210\u529F\u6279\u5904\u7406\u8FD4\u56DEHTTP 200 + \u54CD\u5E94\u6570\u7EC4</font>
+ <font style="color:#000000;">\u539F\u5B50\u6027\u4FDD\u8BC1\uFF1A\u652F\u6301</font><font style="color:#000000;background-color:#f7f7f7;">atomic</font><font style="color:#000000;">\u6807\u8BB0\u5B9E\u73B0\u5168\u6210\u529F\u6216\u5168\u56DE\u6EDA</font>

## **<font style="color:#000000;">3.2 \u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790</font>**
### **<font style="color:#000000;">3.2.1 \u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4</font>**
<font style="color:#000000;">\u5047\u8BBE\u5904\u7406100\u4E2A\u72EC\u7ACB\u8BF7\u6C42\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);">\u6307\u6807</font>** | **<font style="color:rgb(0, 0, 0);">\u5355\u8BF7\u6C42\u6A21\u5F0F</font>** | **<font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u6A21\u5F0F</font>** | **<font style="color:rgb(0, 0, 0);">\u4F18\u5316\u6BD4\u4F8B</font>** |
| :--- | :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">TCP\u63E1\u624B\u6B21\u6570</font> | <font style="color:rgb(0, 0, 0);">100</font> | <font style="color:rgb(0, 0, 0);">1</font> | <font style="color:rgb(0, 0, 0);">99%</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u603B\u5934\u90E8\u5927\u5C0F</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~150KB</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~2KB</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">98.7%</font> |
| <font style="color:rgb(0, 0, 0);">\u603B\u8017\u65F6\uFF083G\u7F51\u7EDC\uFF09</font> | <font style="color:rgb(0, 0, 0);">12.3s</font> | <font style="color:rgb(0, 0, 0);">1.8s</font> | <font style="color:rgb(0, 0, 0);">85.4%</font> |


### **<font style="color:#000000;">3.2.2 \u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406</font>**
\`\`\`plain
// Go\u8BED\u8A00\u5B9E\u73B0\u6279\u5904\u7406\u5E76\u884C\u6267\u884C  
func HandleBatch(ctx context.Context, batch []RPCRequest) []RPCResponse {  
    var wg sync.WaitGroup  
    resChan := make(chan RPCResponse, len(batch))  

    for _, req := range batch {  
        wg.Add(1)  
        go func(r RPCRequest) {  
            defer wg.Done()  
            result := processSingle(r)  
            resChan <- result  
        }(req)  
    }  

    wg.Wait()  
    close(resChan)  

    var responses []RPCResponse  
    for res := range resChan {  
        responses = append(responses, res)  
    }  
    return responses  
}
\`\`\`

<font style="color:#000000;">\u6CE8\u610F\u4E8B\u9879\uFF1A</font>

+ <font style="color:#000000;">\u63A7\u5236\u5E76\u53D1\u7C92\u5EA6\uFF08\u5EFA\u8BAE\u6BCF\u4E2A\u6279\u5904\u7406\u4E0D\u8D85\u8FC750\u4E2A\u8BF7\u6C42\uFF09</font>
+ <font style="color:#000000;">\u5B9E\u73B0\u8BF7\u6C42\u4F18\u5148\u7EA7\u6807\u8BB0\uFF08priority\u5B57\u6BB5\uFF09</font>
+ <font style="color:#000000;">\u652F\u6301\u8D85\u65F6\u7194\u65AD\u673A\u5236</font>

# **<font style="color:#000000;">4. \u5DE5\u5177\u5143\u6570\u636E\uFF1A\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316</font>**
## **<font style="color:#000000;">4.1 Tool Annotations\u67B6\u6784\u89E3\u6790</font>**
### **<font style="color:#000000;">4.1.1 \u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB</font>**
\`\`\`plain
tools:
  - name: database_backup  
    annotations:  
      # \u6807\u51C6\u884C\u4E3A\u63D0\u793A (\u9075\u5FAA ToolAnnotations \u63A5\u53E3\u5B9A\u4E49)
      title: "Database Backup"                 # \u8BED\u4E49\u5316\u6807\u9898
      readOnlyHint: false                      # \u975E\u53EA\u8BFB\u64CD\u4F5C
      destructiveHint: false                   # \u975E\u7834\u574F\u6027\u64CD\u4F5C
      idempotentHint: true                     # \u5E42\u7B49\u64CD\u4F5C\uFF08\u91CD\u590D\u6267\u884C\u65E0\u526F\u4F5C\u7528\uFF09
      openWorldHint: false                     # \u4F5C\u7528\u57DF\u5C01\u95ED\uFF08\u4EC5\u9650\u672C\u5730\u6570\u636E\u5E93\uFF09
\`\`\`

### **<font style="color:#000000;">4.1.2 \u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B</font>**
![](/img/1751872815815.png)

## **<font style="color:#000000;">4.2 \u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5</font>**
### **<font style="color:#000000;">4.2.1 \u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236</font>**
<font style="color:#000000;">\u5F53\u68C0\u6D4B\u5230</font><font style="color:#000000;background-color:#f7f7f7;">destructiveHint: true</font><font style="color:#000000;">\u65F6\uFF1A</font>

1. <font style="color:#000000;">\u524D\u7AEF\u81EA\u52A8\u63D2\u5165\u4E8C\u6B21\u786E\u8BA4</font>
2. <font style="color:#000000;">\u670D\u52A1\u7AEF\u8BB0\u5F55\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7</font>
3. <font style="color:#000000;">\u5F3A\u5236\u89E6\u53D1MFA\u591A\u56E0\u7D20\u8BA4\u8BC1\uFF08\u5982\u679C\u914D\u7F6E\uFF09</font>

<font style="color:#000000;">\u5BA1\u8BA1\u65E5\u5FD7\u793A\u4F8B\uFF1A</font>

\`\`\`plain
json{  
  "action": "data_purge",  
  "user": "ai_agent_123",  
  "riskLevel": "critical",  
  "annotations": {"destructiveHint": true},  
  "timestamp": "2025-03-27T08:15:30Z",  
  "mfaUsed": true  
}
\`\`\`

### **<font style="color:#000000;">4.2.2 \u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210</font>**
<font style="color:#000000;">\u57FA\u4E8E\u5143\u6570\u636E\u7684\u7B56\u7565\u5F15\u64CE\uFF1A</font>

\`\`\`plain
def generate_policy(tool):  
    policy = {  
        "effect": "allow" if tool.requiredScopes else "deny",  
        "conditions": []  
    }  

    if tool.annotations.get('destructiveHint'):  
        policy['conditions'].append({  
            "type": "mfa",  
            "required": True  
        })  

    return policy
\`\`\`

# **<font style="color:#000000;">5. \u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\uFF1A\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316</font>**
## **<font style="color:#000000;">5.1 \u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236</font>**
<font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\u5B57\u6BB5\u652F\u6301\u7ED3\u6784\u5316\u72B6\u6001\u63CF\u8FF0\uFF1A</font>

\`\`\`plain
{
  "type": "ProgressNotification",
  "progress": 65,
  "message": {
    "phase": "\u6570\u636E\u6E05\u6D17",
    "detail": "\u5DF2\u5904\u7406 12000/20000 \u6761\u8BB0\u5F55",
    "next_step": "\u5373\u5C06\u5F00\u59CB\u7279\u5F81\u63D0\u53D6"
  }
}
\`\`\`

<font style="color:#000000;">\u5E94\u7528\u4EF7\u503C\uFF1A</font>

+ <font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\uFF1A\u7CBE\u51C6\u5B9A\u4F4D\u4EFB\u52A1\u5361\u70B9\uFF08\u5982"\u5361\u5728\u56FE\u50CF\u9884\u5904\u7406\u9636\u6BB5"\uFF09</font>
+ <font style="color:#000000;">\u7528\u6237\u754C\u9762\uFF1A\u652F\u6301\u591A\u8BED\u8A00\u52A8\u6001\u63D0\u793A\uFF08"\u5269\u4F59\u65F6\u95F4\uFF1A\u7EA62\u5206\u949F"\uFF09</font>
+ <font style="color:#000000;">\u5BA1\u8BA1\u8FFD\u6EAF\uFF1A\u5B8C\u6574\u8BB0\u5F55\u4EFB\u52A1\u751F\u547D\u5468\u671F\u72B6\u6001</font>

# **<font style="color:#000000;">6.\u591A\u6A21\u6001\u6269\u5C55\uFF1A\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730</font>**
## **<font style="color:#000000;">6.1 \u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848</font>**
<font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">audio/*</font><font style="color:#000000;">\u5185\u5BB9\u7C7B\u578B\u652F\u6301\uFF1A</font>

\`\`\`plain
httpPOST /voice-process  
Content-Type: audio/webm  
Transfer-Encoding: chunked  

<\u97F3\u9891\u4E8C\u8FDB\u5236\u6D41>
\`\`\`

<font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u6027\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u529F\u80FD</font>** | **<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u53C2\u6570</font>** |
| :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u7F16\u7801\u683C\u5F0F</font> | <font style="color:rgb(0, 0, 0);">WebM/MP3/WAV</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0F\u4F20\u8F93</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u652F\u6301\u5206\u7247\u4E0A\u4F20\u4E0E\u5B9E\u65F6\u8F6C\u5F55</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u5143\u6570\u636E\u7ED1\u5B9A</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u901A\u8FC7X-Audio-Metadata\u5934\u4F20\u9012\u91C7\u6837\u7387\u7B49\u53C2\u6570</font> |


<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u573A\u666F\u6848\u4F8B\uFF1A\u667A\u80FD\u5BA2\u670D\u7CFB\u7EDF\u53EF\u540C\u65F6\u63A5\u6536\u7528\u6237\u8BED\u97F3\u6D41\u5E76\u5B9E\u65F6\u8FD4\u56DE\u6587\u5B57\u54CD\u5E94</font>

# **<font style="color:#000000;">7. \u53C2\u6570\u8865\u5168\uFF1A\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7</font>**
## **<font style="color:#000000;">7.1. \u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B</font>**
1. <font style="color:#000000;">\u5BA2\u6237\u7AEF\u53D1\u73B0\u670D\u52A1\u7AEF\u58F0\u660E</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\u80FD\u529B</font>
2. <font style="color:#000000;">\u7528\u6237\u8F93\u5165\u65F6\u89E6\u53D1\u8865\u5168\u8BF7\u6C42\uFF1A</font>

\`\`\`plain
GET /completions?prefix=dat  
\u54CD\u5E94\uFF1A["date_format", "data_source", "dataset"]
\`\`\`

1. <font style="color:#000000;">\u52A8\u6001\u751F\u6210\u53C2\u6570\u5EFA\u8BAE\u5217\u8868 \u8BBE\u8BA1\u4F18\u52BF\uFF1A</font>
+ <font style="color:#000000;">\u964D\u4F4E90%\u7684\u53C2\u6570\u8F93\u5165\u9519\u8BEF\u7387\uFF08MCP\u5DE5\u4F5C\u7EC4\u7EDF\u8BA1\uFF09</font>
+ <font style="color:#000000;">\u652F\u6301\u57FA\u4E8E\u4E0A\u4E0B\u6587\u7684\u667A\u80FD\u63A8\u8350\uFF08\u5982\u4F18\u5148\u63A8\u8350\u5F53\u524D\u5DE5\u5177\u5E38\u7528\u53C2\u6570\uFF09</font>

# **<font style="color:#000000;">8. \u4F1A\u8BDD\u7BA1\u7406\uFF1A\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C</font>**
## **<font style="color:#000000;">8.1 \u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406</font>**
<font style="color:#000000;">\u6838\u5FC3\u6807\u8BC6\uFF1A</font>

\`\`\`plain
Mcp-Session-Id: sess_XYZ123 (UUIDv7\u683C\u5F0F)
\`\`\`

<font style="color:#000000;">\u65AD\u7EBF\u6062\u590D\u6D41\u7A0B\uFF1A</font>

\`\`\`plain
1. \u5BA2\u6237\u7AEF\u7F13\u5B58\u6700\u540E\u63A5\u6536\u7684Event-ID\uFF08\u5982159\uFF09  
2. \u91CD\u8FDE\u65F6\u643A\u5E26\uFF1A  
   Last-Event-ID: 159  
   Mcp-Session-Id: sess_XYZ123  
3. \u670D\u52A1\u7AEF\u4ECE\u65AD\u70B9\u7EED\u4F20\u6216\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0
\`\`\`

# **<font style="color:#000000;">9. \u603B\u7ED3 - </font>**<font style="color:#000000;">\u6784\u5EFA\u4E0B\u4E00\u4EE3AI\u534F\u4F5C\u8303\u5F0F</font>
## **<font style="color:#000000;">9.1 \u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD</font>**
<font style="color:#000000;">\u6280\u672F\u9002\u914D\u6311\u6218</font>

+ <font style="color:#000000;">\u5F3A\u5236\u5B9E\u73B0OAuth 2.1\u4E0EPKCE\u6D41\u7A0B\uFF0C\u79FB\u52A8\u7AEF\u9700\u96C6\u6210\u7CFB\u7EDF\u7EA7\u5B89\u5168\u5B58\u50A8\uFF08\u5982iOS Secure Enclave\uFF09</font>
+ <font style="color:#000000;">\u524D\u7AEF\u6846\u67B6\u9700\u6DF1\u5EA6\u89E3\u6790Tool Annotations\uFF0C\u5B9E\u73B0\u52A8\u6001UI\u751F\u6210\uFF08\u5982\u81EA\u52A8\u6E32\u67D3\u9AD8\u5371\u64CD\u4F5C\u8B66\u793A\u56FE\u6807\uFF09</font>
+ <font style="color:#000000;">\u97F3\u9891\u6D41\u5904\u7406\u9700\u652F\u6301Web Audio API\u4E0E\u5206\u7247\u4F20\u8F93\u903B\u8F91</font>

<font style="color:#000000;">\u4F53\u9A8C\u5347\u7EA7\u673A\u9047</font>

+ <font style="color:#000000;">\u53C2\u6570\u8865\u5168\u529F\u80FD\u964D\u4F4E\u5F00\u53D1\u8005\u5DE5\u5177\u5B66\u4E60\u66F2\u7EBF\uFF08\u5B9E\u6D4B\u63D0\u534738%\u7684API\u8C03\u7528\u6548\u7387\uFF09</font>
+ <font style="color:#000000;">\u667A\u80FD\u8FDB\u5EA6\u6D88\u606F\u652F\u6301\u751F\u6210\u5BCC\u5A92\u4F53\u72B6\u6001\u5361\u7247\uFF08\u5982\u56FE\u8868+\u6587\u5B57\u6DF7\u5408\u5448\u73B0\uFF09</font>

## **<font style="color:#000000;">9.2 \u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD</font>**
<font style="color:#000000;">\u67B6\u6784\u6539\u9020\u9700\u6C42</font>

| **<font style="color:rgb(0, 0, 0);">\u6539\u9020\u9879</font>** | **<font style="color:rgb(0, 0, 0);">\u5B9E\u65BD\u6210\u672C</font>** | **<font style="color:rgb(0, 0, 0);">\u6536\u76CA\u7B49\u7EA7</font>** |
| :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406</font> | <font style="color:rgb(0, 0, 0);">\u9AD8</font> | <font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2605\u2606</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0FHTTP\u7F51\u5173(\u5982Higress)</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u4F4E</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u2605\u2605\u2605\u2605\u2605</font> |
| <font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u539F\u5B50\u4E8B\u52A1</font> | <font style="color:rgb(0, 0, 0);">\u4E2D</font> | <font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2606\u2606</font> |


## **<font style="color:#000000;">9.3 \u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784</font>**
<font style="color:#000000;">SDK\u5173\u952E\u5347\u7EA7\u70B9\uFF1A</font>

\`\`\`plain
# \u65B0\u4E00\u4EE3SDK\u4F2A\u4EE3\u7801\u793A\u4F8B  
class MCPClient:  
    def __init__(self):  
        self.session = ResilientSession()  # \u81EA\u52A8\u91CD\u8FDE+\u65AD\u70B9\u7EED\u4F20  
        self.annotator = ToolAnnotationParser()  # \u5143\u6570\u636E\u89E3\u6790\u5F15\u64CE  
        self.auditor = SecurityAuditHook()  # \u5B89\u5168\u5BA1\u8BA1\u94A9\u5B50  

    def call_tool(self, tool_name):  
        if self.annotator.risk_level(tool_name) == 'critical':  
            self.auditor.log_operation(tool_name)  # \u81EA\u52A8\u89E6\u53D1\u5BA1\u8BA1
\`\`\`

<font style="color:#000000;">\u5DE5\u5177\u94FE\u5347\u7EA7\u5E26\u6765\uFF1A</font>

+ <font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\u65F6\u95F4\u51CF\u5C1157%\uFF08IDE\u63D2\u4EF6\u96C6\u6210\u81EA\u52A8\u8865\u5168\u4E0E\u534F\u8BAE\u6821\u9A8C\uFF09</font>
+ <font style="color:#000000;">\u5B89\u5168\u6F0F\u6D1E\u7387\u4E0B\u964D82%\uFF08\u901A\u8FC7\u6CE8\u89E3\u9A71\u52A8\u7684\u6743\u9650\u6821\u9A8C\uFF09</font>

## **9.4 \u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027**
Higress\u5DF2\u7387\u5148\u652F\u6301Streamable HTTP\u4F20\u8F93\u683C\u5F0F\uFF0C\u5E76\u4E14\u5BF9MCP 2025-03-26\u7248\u672C\u7684\u591A\u9879\u7279\u6027\u90FD\u4FDD\u6301\u9AD8\u4F18\u5148\u7EA7\u8DDF\u7D27\uFF0C\u5982Mcp-Session-Id\u5934\u7684\u4F1A\u8BDD\u7BA1\u7406\uFF0C\u5E76\u652F\u6301\u6279\u91CF\u8BF7\u6C42\u3001\u54CD\u5E94\u548C\u901A\u77E5\uFF0C\u4EE5\u53CA SSE \u6D41\u7684\u53EF\u6062\u590D\u6027\u7B49\u3002

\u8BE6\u89C1 [\u300AAPI \u5373 MCP\uFF5CHigress \u53D1\u5E03 MCP Marketplace\uFF0C\u52A0\u901F\u5B58\u91CF API \u8DE8\u5165 MCP \u65F6\u4EE3\u300B](https://higress.cn/blog/higress-gvr7dx_awbbpb_igk8hdx9xt83ptqg/?spm=36971b57.2385fb13.0.0.78b8285fzhuGKT)

\u5546\u4E1A\u5316\u4EA7\u54C1\u4FA7\uFF0C[\u4E91\u539F\u751FAPI\u7F51\u5173](https://www.aliyun.com/product/apigateway)\u4E5F\u4F1A\u5728\u7A0D\u665A\u7684\u65F6\u5019\u5BF9\u9F50\u5F00\u6E90\u4FA7Higress\u7684\u5404\u9879\u80FD\u529B\uFF0C\u63D0\u4F9B\u4F01\u4E1A\u7EA7\u7684\u5404\u9879MCP\u7279\u6027\uFF0C\u6B22\u8FCE\u54A8\u8BE2\u548C\u5173\u6CE8\u3002
`,r={title:"MCP \u6700\u65B0\u7248\u672C 9 \u5927\u5DEE\u5F02\u89E3\u8BFB\uFF1A\u6388\u6743\u673A\u5236\u3001\u4F20\u8F93\u534F\u8BAE\u3001\u6279\u5904\u7406\u3001\u5DE5\u5177\u5143\u6570\u636E...",description:"MCP \u6700\u65B0\u7248\u672C 9 \u5927\u5DEE\u5F02\u89E3\u8BFB\uFF1A\u6388\u6743\u673A\u5236\u3001\u4F20\u8F93\u534F\u8BAE\u3001\u6279\u5904\u7406\u3001\u5DE5\u5177\u5143\u6570\u636E...",keywords:["Higress"],date:"2025-05-09",category:"article"},f={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_mfm8mgpsfrkay78a.md",rawData:void 0};export{f as _internal,l as body,t as collection,r as data,o as id,n as slug};
