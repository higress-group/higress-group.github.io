---
title: MCP Server Plugin Configuration
description: MCP Server Plugin Configuration Reference
date: "2025-04-03"
category: "article"
keywords: [higress,mcp,ai]
authors: "Chengtan"
---

## Feature Description

The `mcp-server` plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol designed specifically for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:

1. Convert existing REST APIs into tools callable by AI assistants without writing any code
2. Leverage Higress gateway's unified authentication, authorization, rate limiting, and observability capabilities
3. Quickly build and deploy AI tools and services

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

By hosting MCP Servers with Higress, you can achieve:
- Unified authentication and authorization mechanisms, ensuring the security of AI tool calls
- Fine-grained rate limiting to prevent abuse and resource exhaustion
- Comprehensive audit logs recording all tool call behaviors
- Rich observability for monitoring the performance and health of tool calls
- Simplified deployment and management through Higress's plugin mechanism for quickly adding new MCP Servers

## Runtime Properties

Plugin execution phase: `Default Phase`
Plugin execution priority: `30`

## Configuration Fields

### Server Configuration

| Name         | Data Type   | Required | Default | Description                           |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| `server.name` | string     | Yes     | -      | Name of the MCP server. If using a pre-integrated MCP server (like quark-search), you only need to configure this field with the corresponding name and don't need to configure the tools field. For REST-to-MCP scenarios, this field can be any arbitrary value. |
| `server.type` | string     | No     | rest   | MCP server type. Options: `rest` (REST-to-MCP conversion), `mcp-proxy` (MCP proxy). Defaults to `rest` if not specified. |
| `server.config` | object     | No     | {}     | Server configuration, such as API keys      |
| `server.mcpServerURL` | string | Required when `server.type` is `mcp-proxy` | - | Backend MCP server URL. Only used for `mcp-proxy` type. |
| `server.timeout` | integer | No | 5000 | Request timeout in milliseconds for backend services. Applies to `mcp-proxy` type. |
| `server.passthroughAuthHeader` | boolean | No | false | Whether to pass through the Authorization header. When set to `true`, the client's `Authorization` header will be passed through to the backend even if no downstream security configuration (`defaultDownstreamSecurity` or tool-level `security`) is configured. Defaults to `false`, meaning the `Authorization` header will be removed when no explicit security configuration is defined, preventing client credentials from being incorrectly passed to the backend. This field is suitable for scenarios that require direct passthrough of original authentication information. |
| `server.securitySchemes` | array of object | No | - | Defines reusable security schemes that can be referenced by tools. See the Authentication and Security section for details. |
| `server.defaultDownstreamSecurity` | object | No | - | Server-level default client-to-gateway authentication configuration for all tools/list and tools/call requests. Can be overridden by tool-level `security` configuration. Supports `id` (reference to securitySchemes) and `passthrough` (passthrough flag) fields. |
| `server.defaultUpstreamSecurity` | object | No | - | Server-level default gateway-to-backend authentication configuration for all backend requests. Can be overridden by tool-level `requestTemplate.security` configuration. Supports `id` (reference to securitySchemes) and `credential` (override default credential) fields. |

### Allowed Tools Configuration

| Name         | Data Type        | Required | Default | Description                                   |
| ------------ | --------------- | -------- | ------ | --------------------------------------------- |
| `allowTools` | array of string | No       | -      | List of tools allowed to be called. If not specified, all tools are allowed |

#### Dynamic Tool Permission Control

In addition to statically defining `allowTools` in the configuration, tool access permissions can be dynamically controlled through the HTTP request header `x-envoy-allow-mcp-tools`. This allows upstream plugins (such as authentication and authorization plugins) to dynamically set the list of allowed tools based on user identity or other conditions.

**Header Format**:
```
x-envoy-allow-mcp-tools: tool1,tool2,tool3
```

**Permission Control Logic**:

1. **Configuration-level `allowTools`** (static): Base tool whitelist defined in the plugin configuration
2. **Header-level `x-envoy-allow-mcp-tools`** (dynamic): Tool whitelist read from request header
3. **Effective Permissions**: **Intersection** of tools specified in both configuration and header

**Header Value Semantics**:

| Header State | Behavior |
|------------|------|
| Header not present | No additional restriction, use `allowTools` from configuration |
| Header is empty string `""` | No additional restriction, use `allowTools` from configuration |
| Header is whitespace string `"  ,  ,  "` | Deny access to all tools (empty set) |
| Header has value `"tool1,tool2"` | Intersect with configured `allowTools` |

**Usage Scenarios**:

1. **Role-Based Access Control**
   ```yaml
   # Define all available tools in configuration
   allowTools:
   - get-user-info
   - update-user-info
   - delete-user-info
   - admin-operation
   ```
   
   Upstream authentication plugin can set different tool permissions based on user roles:
   - Regular users: `x-envoy-allow-mcp-tools: get-user-info`
   - Advanced users: `x-envoy-allow-mcp-tools: get-user-info,update-user-info`
   - Administrators: Don't set header (allow all configured tools)

2. **Multi-Tenant Scenario**
   ```yaml
   # Define tools available for tenants
   allowTools:
   - tenant-query-data
   - tenant-update-data
   - tenant-report
   ```
   
   Upstream plugin dynamically controls based on tenant subscription plan:
   - Basic plan: `x-envoy-allow-mcp-tools: tenant-query-data`
   - Professional plan: `x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data`
   - Enterprise plan: `x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data,tenant-report`

3. **Temporary Permission Restriction**
   
   In special circumstances (e.g., system maintenance), upstream plugins can temporarily restrict access to certain tools:
   ```
   x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2
   ```

**Upstream Plugin Integration Guide**:

For upstream plugins (such as authentication and authorization plugins) that need to dynamically set tool permissions, **you must use `proxywasm.ReplaceHttpRequestHeader`** to set the `x-envoy-allow-mcp-tools` header:

```go
// Correct way: Use ReplaceHttpRequestHeader
// This will override any value that users might have passed in, ensuring security
proxywasm.ReplaceHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")

// ❌ Wrong way: Use AddHttpRequestHeader
// This may retain user-provided values, creating a security vulnerability
proxywasm.AddHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")
```

Using `ReplaceHttpRequestHeader` ensures:
1. **Security**: Users cannot bypass permission controls by directly passing the `x-envoy-allow-mcp-tools` header in their requests
2. **Reliability**: The permission configuration set by the upstream plugin always takes effect and won't be overridden by user input
3. **Predictability**: The MCP Server plugin always receives the permission value set by the upstream plugin

**Notes**:
- Header value uses comma to separate multiple tool names
- Whitespace before and after tool names is automatically trimmed
- When configured `allowTools` is an empty array, all tool access is denied regardless of header settings
- The MCP Server plugin automatically removes the `x-envoy-allow-mcp-tools` header and doesn't pass it to backend services

### REST-to-MCP Tool Configuration

| Name                          | Data Type        | Required | Default | Description                           |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| `tools`                       | array of object | No     | []     | List of REST-to-MCP tool configurations       |
| `tools[].name`                | string          | Yes     | -      | Tool name                       |
| `tools[].description`         | string          | Yes     | -      | Tool functionality description                   |
| `tools[].args`                | array of object | Yes     | []     | Tool parameter definitions                   |
| `tools[].args[].name`         | string          | Yes     | -      | Parameter name                       |
| `tools[].args[].description`  | string          | Yes     | -      | Parameter description                       |
| `tools[].args[].type`         | string          | No     | string | Parameter type (string, number, integer, boolean, array, object) |
| `tools[].args[].required`     | boolean         | No     | false  | Whether the parameter is required                   |
| `tools[].args[].default`      | any             | No     | -      | Parameter default value                     |
| `tools[].args[].enum`         | array           | No     | -      | List of allowed values for the parameter               |
| `tools[].args[].items`        | object          | No     | -      | Schema for array items (when type is array)  |
| `tools[].args[].properties`   | object          | No     | -      | Schema for object properties (when type is object)|
| `tools[].args[].position`     | string          | No     | -      | Position of the parameter in the request (query, path, header, cookie, body) |
| `tools[].requestTemplate`     | object          | Yes     | -      | HTTP request template                  |
| `tools[].requestTemplate.url` | string          | Yes     | -      | Request URL template                  |
| `tools[].requestTemplate.method` | string       | Yes     | -      | HTTP method (GET/POST, etc.)          |
| `tools[].requestTemplate.headers` | array of object | No | [] | Request header templates                     |
| `tools[].requestTemplate.headers[].key` | string | Yes   | -      | Request header name                     |
| `tools[].requestTemplate.headers[].value` | string | Yes | -      | Request header value template                   |
| `tools[].requestTemplate.body` | string         | No     | -      | Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody) |
| `tools[].requestTemplate.argsToJsonBody` | boolean | No  | false  | When true, arguments will be used directly as the JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody) |
| `tools[].requestTemplate.argsToUrlParam` | boolean | No  | false  | When true, arguments will be added to the URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody) |
| `tools[].requestTemplate.argsToFormBody` | boolean | No  | false  | When true, arguments will be encoded as application/x-www-form-urlencoded in the request body (mutually exclusive with body, argsToJsonBody, argsToUrlParam) |
| `tools[].responseTemplate`    | object          | Yes     | -      | HTTP response transformation template              |
| `tools[].responseTemplate.body` | string        | No      | -      | Response body transformation template (mutually exclusive with prependBody and appendBody) |
| `tools[].responseTemplate.prependBody` | string | No      | -      | Text to insert before the response body (mutually exclusive with body) |
| `tools[].responseTemplate.appendBody` | string  | No      | -      | Text to insert after the response body (mutually exclusive with body) |
| `tools[].security`                    | object  | No     | -      | Tool-level security configuration, defining authentication between MCP Client and MCP Server, with support for credential passthrough. |
| `tools[].security.id`                 | string  | Required when `tools[].security` is configured | -      | References a security scheme ID defined in `server.securitySchemes`. |
| `tools[].security.passthrough`        | boolean | No     | false  | Enables transparent authentication. If `true`, credentials extracted from the MCP Client request will be used for the authentication scheme defined in `requestTemplate.security`. |
| `tools[].requestTemplate.security`    | object  | No     | -      | Security configuration for the HTTP request template, defining authentication between MCP Server and REST API. |
| `tools[].requestTemplate.security.id` | string  | Required when `tools[].requestTemplate.security` is configured | - | References a security scheme ID defined in `server.securitySchemes`. |
| `tools[].requestTemplate.security.credential` | string | No | - | Overrides the default credential defined in `server.securitySchemes`. If `tools[].security.passthrough` is enabled, this field will be ignored, and the passthrough credential will be used instead. |
| `tools[].errorResponseTemplate`       | string  | No     | -      | Error Response Template when HTTP Response Status >=300 \\|\\| <200 |

## Authentication and Security

The MCP Server plugin supports flexible authentication configurations to ensure secure communication with backend REST APIs or MCP servers. The plugin supports two server types with authentication configuration:

- **REST-to-MCP Server (`rest` type)**: Converts client requests to REST API calls
- **MCP Proxy Server (`mcp-proxy` type)**: Proxies client requests to backend MCP servers

Both types support a **two-tier authentication mechanism**:
1. **Client-to-Gateway Authentication**: Validates the identity of clients calling the MCP Server
2. **Gateway-to-Backend Authentication**: Authentication method used by MCP Server when calling backend services

### Defining Security Schemes (`server.securitySchemes`)

You can define a set of reusable security schemes at the server level. These schemes can later be referenced by tools to configure how the MCP Server authenticates requests to backend REST APIs.

**Configuration Fields (`server.securitySchemes[]`)**:

| Name                | Data Type | Required | Description                                                                 |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| `id`                | string   | Yes     | Unique identifier for the security scheme, to be referenced in tool configurations. |
| `type`              | string   | Yes     | Authentication type, supporting `http` (for Basic and Bearer auth) and `apiKey`. |
| `scheme`            | string   | No     | When `type` is `http`, specifies the specific scheme, such as `basic` or `bearer`. |
| `in`                | string   | No     | When `type` is `apiKey`, specifies the location of the API key, such as `header` or `query`. |
| `name`              | string   | No     | When `type` is `apiKey`, specifies the header name or query parameter name. |
| `defaultCredential` | string   | No     | Default credential for this scheme. For Basic Auth, this can be "user:password"; for Bearer Token, the token itself; for API Key, the key itself. |

**Example (`server.securitySchemes`)**:

```yaml
server:
  name: my-api-server
  securitySchemes:
  - id: MyBasicAuth
    type: http
    scheme: basic
    defaultCredential: "admin:secretpassword" # Default username and password
  - id: MyBearerToken
    type: http
    scheme: bearer
    defaultCredential: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." # Default Bearer Token
  - id: MyApiKeyInHeader
    type: apiKey
    in: header
    name: X-Custom-API-Key # API Key in a header named X-Custom-API-Key
    defaultCredential: "abcdef123456" # Default API Key
  - id: MyApiKeyInQuery
    type: apiKey
    in: query
    name: "api_token" # API Key in a query parameter named api_token
    defaultCredential: "uvwxyz789012"
```

### Applying Security Schemes in Tools

After defining `server.securitySchemes`, you can reference these schemes in each tool's `requestTemplate.security` by their `id` to specify the authentication method used by the MCP Server when calling the backend REST API.

- **`tools[].requestTemplate.security.id`**: References the `id` of a security scheme defined in `server.securitySchemes`.
- **`tools[].requestTemplate.security.credential`**: Optional. If provided, it will override the `defaultCredential` in the referenced scheme. This allows you to use different credentials for specific tools, even if they share the same authentication mechanism.

**Example**:

```yaml
tools:
- name: get-user-details
  # ... other tool configuration ...
  requestTemplate:
    url: "https://api.example.com/users/{{.args.userId}}"
    method: GET
    security:
      id: MyBearerToken # Use the MyBearerToken scheme defined above
      # credential: "override_token_for_this_tool" # Optional: Override the default token for this tool
# ...
- name: update-inventory
  # ... other tool configuration ...
  requestTemplate:
    url: "https://api.example.com/inventory/{{.args.itemId}}"
    method: POST
    security:
      id: MyApiKeyInHeader # Use the MyApiKeyInHeader scheme
      # This tool will use the defaultCredential defined in MyApiKeyInHeader
```

### Passthrough Authentication

The passthrough authentication feature allows credentials provided by the MCP Client (e.g., an AI assistant) when calling the MCP Server to be passed through to the authentication process when the MCP Server calls the backend REST API.

**Configuration**:

1.  **Ensure relevant security schemes are defined in `server.securitySchemes`**. This includes schemes for both client-to-MCP Server and MCP Server-to-backend REST API authentication.
2.  **Configure tool-level authentication (`tools[].security`)**:
    In tools where credential passthrough is needed, configure the `security` field:
    - `id`: References a security scheme defined in `server.securitySchemes` that is used for **MCP Client to MCP Server** authentication. The plugin will extract credentials from the client request based on this scheme and clean the original credential from the request.
    - `passthrough: true`: Enables passthrough authentication.

3.  **Configure request template authentication (`tools[].requestTemplate.security`)**:
    In the tool's `requestTemplate`, configure the `security` field:
    - `id`: References a security scheme defined in `server.securitySchemes` that is used for **MCP Server to backend REST API** authentication.
    - When `tools[].security.passthrough` is `true`, the credential extracted from the client will be applied to the backend REST API call according to this `requestTemplate.security` scheme.

**Example**:

Suppose the MCP Client uses a Bearer Token to call the MCP Server, and the MCP Server needs to use an API Key to call the backend REST API.

```yaml
server:
  name: product-api-server
  securitySchemes:
  - id: ClientSideBearer # Client uses Bearer Token
    type: http
    scheme: bearer
  - id: BackendApiKey    # Backend API uses X-API-Key
    type: apiKey
    in: header
    name: X-API-Key
    # defaultCredential: "optional_default_backend_key"

tools:
- name: get-product-securely
  description: "Get product information (secure passthrough)"
  security: # Client -> MCP Server authentication configuration
    id: ClientSideBearer # MCP Server expects clients to use this scheme and will extract this type of credential
    passthrough: true   # Enable passthrough
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    security: # MCP Server -> backend REST API authentication configuration
      id: BackendApiKey # Backend API requires this scheme. The passthrough credential will be applied according to this scheme.
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
```

**Workflow**:

1.  The MCP Client sends a request to the MCP Server's `get-product-securely` tool, with an `Authorization` header containing `Bearer <client_token>`.
2.  The MCP Server identifies that the client is using a Bearer Token based on `tools[].security` (id: `ClientSideBearer`). It extracts `<client_token>` from the request and removes the original `Authorization` header.
3.  Because `passthrough: true` is set, the extracted `<client_token>` is marked for passthrough.
4.  The MCP Server prepares to call the backend REST API. It looks at `requestTemplate.security` (id: `BackendApiKey`).
5.  Since passthrough is enabled, the MCP Server uses the previously extracted `<client_token>` as the credential value, applying it according to the `BackendApiKey` scheme (i.e., as an HTTP header named `X-API-Key`).
6.  The backend REST API receives the request with the `X-API-Key` header containing the value `<client_token>`.

**Notes**:
- When `tools[].security.passthrough` is `true`, the `requestTemplate.security.credential` field is ignored, and the passthrough credential takes precedence.
- The passthrough credential value is applied directly to the authentication scheme specified by `requestTemplate.security`. Ensure that the credential format is compatible with the target authentication scheme. The `extractAndRemoveIncomingCredential` function attempts to extract the core credential part (e.g., the Bearer token value, the base64-encoded part of Basic auth).

### Server-Level Default Authentication Configuration

To simplify configuration and ensure consistency, the MCP Server plugin supports setting default authentication configurations at the server level. These default configurations apply to all tools and non-tool-specific interfaces (such as `tools/list`).

#### `server.defaultDownstreamSecurity`

Defines the default client-to-gateway authentication configuration. This configuration applies to:
- All tools that don't have an explicit `security` field configured
- `tools/list` requests (for retrieving tool lists)
- Other non-tool-specific MCP protocol interfaces

**Configuration Fields**:
- `id`: References a security scheme ID defined in `server.securitySchemes`
- `passthrough`: Whether to enable passthrough authentication (optional, defaults to false)

#### `server.defaultUpstreamSecurity`

Defines the default gateway-to-backend authentication configuration. This configuration applies to:
- All tools that don't have an explicit `requestTemplate.security` field configured
- `tools/list` and other requests that need to access backend services

**Configuration Fields**:
- `id`: References a security scheme ID defined in `server.securitySchemes`
- `credential`: Override the default credential (optional)

#### Priority Rules

Authentication configuration priority from highest to lowest:
1. Tool-level configuration (`tools[].security` and `tools[].requestTemplate.security`)
2. Server-level default configuration (`server.defaultDownstreamSecurity` and `server.defaultUpstreamSecurity`)
3. Default credentials in security schemes (`server.securitySchemes[].defaultCredential`)

#### Use Cases

Server-level default authentication is particularly useful for:
- **Unified Authentication Strategy**: All tools use the same authentication method
- **MCP Proxy Servers**: Need to provide authentication for `tools/list` and other non-tool-specific requests
- **Simplified Configuration**: Reduce repetitive configuration of the same authentication information for each tool

## Parameter Type Support

REST-to-MCP tools support various parameter types, allowing you to define tool parameters more precisely:

- **string**: String type (default)
- **number**: Number type (floating point)
- **integer**: Integer type
- **boolean**: Boolean type (true/false)
- **array**: Array type, using the `items` field to define the schema for array elements
- **object**: Object type, using the `properties` field to define the schema for object properties

Example:

```yaml
args:
- name: query
  description: "Search keyword"
  type: string
  required: true
- name: limit
  description: "Number of results to return"
  type: integer
  default: 10
- name: filters
  description: "Filter conditions"
  type: object
  properties:
    category:
      type: string
      enum: ["food", "hotel", "attraction"]
    price:
      type: integer
      minimum: 0
- name: coordinates
  description: "List of coordinate points"
  type: array
  items:
    type: object
    properties:
      lat:
        type: number
      lng:
        type: number
```

## Parameter Position Control

REST-to-MCP tools support precise control of each parameter's position in the request through the `position` field. This allows you to build API requests more flexibly, for example, using path parameters, query parameters, and request body parameters simultaneously.

### Supported Position Types

- **query**: Parameter will be added to the URL as a query parameter
- **path**: Parameter will replace a path placeholder in the URL, such as `{petId}` in `/pet/{petId}`
- **header**: Parameter will be added to the request as an HTTP header
- **cookie**: Parameter will be added to the request as a Cookie
- **body**: Parameter will be added to the request body (automatically formatted as JSON or form based on content type)

### Usage Example

```yaml
args:
- name: petId
  description: "Pet ID"
  type: string
  required: true
  position: path
- name: token
  description: "Authentication token"
  type: string
  required: true
  position: header
- name: sessionId
  description: "Session ID"
  type: string
  position: cookie
- name: limit
  description: "Number of results to return"
  type: integer
  default: 10
  position: query
- name: tags
  description: "List of tags"
  type: array
  position: body
```

In the example above:
- `petId` will replace the `{petId}` placeholder in the URL
- `token` will be added as an HTTP header to the request
- `sessionId` will be added as a Cookie to the request
- `limit` will be added as a query parameter to the URL
- `tags` will be added to the request body

### Relationship with Bulk Parameter Processing Options

When using `position` to specify parameter locations, these parameters will be processed according to their specified positions and will not be affected by bulk parameter processing options (`argsToJsonBody`, `argsToUrlParam`, `argsToFormBody`). Only parameters without a specified `position` will be affected by these bulk options.

For example, if you use both `position` and `argsToJsonBody`:
- Parameters with `position: query` will be added to the URL query string
- Parameters with `position: header` will be added as HTTP headers
- Parameters with `position: path` will replace placeholders in the URL
- Parameters with `position: cookie` will be added as Cookies
- Parameters with `position: body` will be added to the JSON request body
- Parameters without a specified `position` will be added to the JSON request body via `argsToJsonBody`

Additionally, if a `body` is explicitly specified in the `requestTemplate`, all parameters with `position: body` will be ignored to avoid conflicts.

## Request Parameter Passing Methods

In addition to precisely controlling each parameter's position using `position`, REST-to-MCP tools also support four bulk parameter processing methods, which are **mutually exclusive** - only one can be used:

1. **body**: Manually construct the request body using a template. This is the most flexible approach, allowing you complete control over the request body format.
   ```yaml
   requestTemplate:
     body: |
       {
         "query": "{{.args.query}}",
         "filters": {{toJson .args.filters}},
         "options": {
           "limit": {{.args.limit}}
         }
       }
   ```

2. **argsToJsonBody**: When set to `true`, parameters without a specified `position` will be sent directly as a JSON object in the request body, and the `Content-Type: application/json; charset=utf-8` header will be automatically added.
   ```yaml
   requestTemplate:
     argsToJsonBody: true
   ```

3. **argsToUrlParam**: When set to `true`, parameters without a specified `position` will be added to the URL as query parameters.
   ```yaml
   requestTemplate:
     argsToUrlParam: true
   ```

4. **argsToFormBody**: When set to `true`, parameters without a specified `position` will be encoded as `application/x-www-form-urlencoded` in the request body, and the appropriate Content-Type header will be automatically added.
   ```yaml
   requestTemplate:
     argsToFormBody: true
   ```

These options simplify the configuration of common API call patterns without having to manually construct request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured simultaneously, the system will return an error and refuse to load the tool configuration.

## Template Syntax

The REST-to-MCP feature uses the [GJSON Template](https://github.com/higress-group/gjson_template) library for template rendering, which combines Go's template syntax with GJSON's powerful path syntax:

### Request Templates

Used to construct HTTP request URLs, headers, and bodies:
- Access configuration values: `.config.fieldName`
- Access tool parameters: `.args.paramName`

### Response Templates

Used to transform HTTP responses into formats suitable for AI consumption:
- Access JSON response fields using GJSON path syntax
- Use template functions like `add`, `upper`, `lower`, etc.
- Use control structures like `if`, `range`, etc.

GJSON Template includes all [Sprig](https://github.com/Masterminds/sprig) functions, providing 70+ template functions for string manipulation, mathematical operations, date formatting, and more, making it functionally equivalent to Helm's template capabilities.

Commonly used Sprig functions include:

- **String manipulation**: `trim`, `upper`, `lower`, `replace`, `plural`, `nospace`
- **Math operations**: `add`, `sub`, `mul`, `div`, `max`, `min`
- **Date formatting**: `now`, `date`, `dateInZone`, `dateModify`
- **List operations**: `list`, `first`, `last`, `uniq`, `sortAlpha`
- **Dictionary operations**: `dict`, `get`, `set`, `hasKey`, `pluck`
- **Flow control**: `ternary`, `default`, `empty`, `coalesce`
- **Type conversion**: `toString`, `toJson`, `toPrettyJson`, `toRawJson`
- **Encoding/decoding**: `b64enc`, `b64dec`, `urlquery`, `urlqueryescape`
- **UUID generation**: `uuidv4`

For a complete reference of all available functions, see the [Helm function documentation](https://helm.sh/docs/chart_template_guide/function_list/), as GJSON Template includes the same function set.

### GJSON Path Syntax

GJSON provides powerful JSON querying capabilities:

- **Dot notation**: `address.city`
- **Array indexing**: `users.0.name`
- **Array iteration**: `users.#.name`
- **Array filtering**: `users.#(age>=30)#.name`
- **Modifiers**: `users.@reverse.#.name`
- **Multipath**: `{name:users.0.name,count:users.#}`
- **Escape characters**: `path.with\.dot`

For more complex queries, you can use the `gjson` function:

```
<!-- Using the gjson function for complex queries -->
Active users: {{gjson "users.#(active==true)#.name"}}

<!-- Array filtering with multiple conditions -->
Active developers over 30: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- Using modifiers -->
User names (reversed): {{gjson "users.@reverse.#.name"}}

<!-- Iterating over filtered results -->
Admins:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
```

For a complete reference of GJSON path syntax, see the [GJSON documentation](https://github.com/tidwall/gjson#path-syntax).

## Configuration Examples

### Using Built-in MCP Server Example: Configuring quark-search

```yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
```

This configuration uses Higress's built-in quark-search MCP server. In this case, you only need to specify the server name and necessary configuration (such as API key), without configuring the tools field, as the tools are already predefined in the server.

### MCP Proxy Server Example: Proxying to Backend MCP Server

```yaml
server:
  name: my-mcpserver-proxy
  type: mcp-proxy
  mcpServerURL: "http://backend-mcp.example.com/mcp"
  timeout: 5000
  defaultDownstreamSecurity: # Client-to-gateway default authentication
    id: ClientApiKey
  defaultUpstreamSecurity: # Gateway-to-backend default authentication
    id: BackendApiKey
  securitySchemes:
  - id: ClientApiKey
    type: apiKey
    in: header
    name: X-Client-API-Key
  - id: BackendApiKey
    type: apiKey
    in: header
    name: X-Backend-API-Key
    defaultCredential: "backend-secret-key"

tools:
- name: get-secure-product
  description: "Get secure product information"
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    security: # Tool-level gateway-to-backend authentication, overrides default
      id: BackendApiKey
      credential: "special-key-for-this-tool"
```

This configuration creates an MCP proxy server that:
1. Proxies client MCP requests to `http://backend-mcp.example.com/mcp`
2. Uses server-level default authentication configuration for `tools/list` and other general requests
3. Tool-level authentication configuration can override default settings
4. Supports passthrough authentication and credential overrides

### Advanced MCP Proxy Server Example: Passthrough Authentication

```yaml
server:
  name: my-secure-proxy
  type: mcp-proxy
  mcpServerURL: "https://api.backend-mcp.com/v1/mcp"
  timeout: 10000
  defaultDownstreamSecurity: # Default requires client to provide Bearer Token
    id: ClientBearer
    passthrough: true # Enable passthrough authentication
  defaultUpstreamSecurity: # Default uses passthrough credentials for backend
    id: BackendBearer
  securitySchemes:
  - id: ClientBearer # Client uses Bearer Token
    type: http
    scheme: bearer
  - id: BackendBearer # Backend also uses Bearer Token
    type: http
    scheme: bearer
  - id: AdminApiKey # Admin tools use special API Key
    type: apiKey
    in: header
    name: X-Admin-Key
    defaultCredential: "admin-secret-key"

tools:
- name: get-user-data
  description: "Get user data (using passthrough authentication)"
  args:
  - name: user_id
    description: "User ID"
    type: string
    required: true
  # This tool uses default passthrough authentication, client Bearer Token will be passed to backend

- name: admin-operation
  description: "Perform admin operation (using special authentication)"
  security: # Tool-level client authentication: still requires client Bearer Token
    id: ClientBearer
    passthrough: false # Don't passthrough client credentials
  args:
  - name: operation
    description: "Operation type"
    type: string
    required: true
  requestTemplate:
    security: # Tool-level backend authentication: use admin API Key
      id: AdminApiKey
```

This advanced configuration demonstrates:
1. **Passthrough Authentication**: `get-user-data` tool passes client Bearer Token to backend
2. **Mixed Authentication**: `admin-operation` tool requires client authentication but uses different backend authentication
3. **Server-Level Default Configuration**: Provides unified authentication strategy for all `tools/list` requests
4. **Flexible Authentication Schemes**: Supports both HTTP Bearer Token and API Key authentication methods

### Basic Example: Converting AMap API

```yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "Convert structured address information to latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates."
  args:
  - name: address
    description: "The structured address to parse"
    type: string
    required: true
  - name: city
    description: "The city to search in"
    type: string
    required: false
  - name: output
    description: "Output format"
    type: string
    enum: ["json", "xml"]
    default: "json"
  requestTemplate:
    url: "https://restapi.amap.com/v3/geocode/geo"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Geocoding Information
      {{- range $index, $geo := .geocodes }}
      ## Location {{add $index 1}}

      - **Country**: {{ $geo.country }}
      - **Province**: {{ $geo.province }}
      - **City**: {{ $geo.city }}
      - **City Code**: {{ $geo.citycode }}
      - **District**: {{ $geo.district }}
      - **Street**: {{ $geo.street }}
      - **Number**: {{ $geo.number }}
      - **Administrative Code**: {{ $geo.adcode }}
      - **Coordinates**: {{ $geo.location }}
      - **Level**: {{ $geo.level }}
      {{- end }}
```

This configuration converts AMap's geocoding API into a tool callable by AI. When the AI calls this tool:

1. It builds an API request using the provided address and city parameters
2. Calls the AMap API
3. Transforms the JSON response into an easy-to-read Markdown format
4. Returns the formatted result to the AI assistant

### Advanced Example: Complex Response Processing with Conditional Logic

```yaml
server:
  name: weather-api-server
  config:
    apiKey: your-weather-api-key
tools:
- name: get-weather
  description: "Get weather forecast information for a specified city"
  args:
  - name: city
    description: "City name"
    type: string
    required: true
  - name: days
    description: "Number of days (1-7)"
    type: integer
    required: false
    default: 3
  - name: include_hourly
    description: "Whether to include hourly forecasts"
    type: boolean
    default: true
  requestTemplate:
    url: "https://api.weatherapi.com/v1/forecast.json"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # {{.location.name}}, {{.location.country}} Weather Forecast

      **Current Temperature**: {{.current.temp_c}}°C
      **Feels Like**: {{.current.feelslike_c}}°C
      **Conditions**: {{.current.condition.text}}
      **Humidity**: {{.current.humidity}}%
      **Wind Speed**: {{.current.wind_kph}} km/h

      ## Future Forecast
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}**High Temperature Alert!**{{end}}
      {{if lt $day.day.mintemp_c 0}}**Low Temperature Alert!**{{end}}
      
      - **Max Temperature**: {{$day.day.maxtemp_c}}°C
      - **Min Temperature**: {{$day.day.mintemp_c}}°C
      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%
      - **Conditions**: {{$day.day.condition.text}}
      
      #### Hourly Forecast
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}°C, {{$hour.condition.text}}
      {{end}}
      {{end}}
```

This example demonstrates:
- Using conditional statements (`if`) for temperature alerts
- Using date formatting functions (`dateFormat`)
- Using array slicing (`slice`) to select specific weather times
- Nested loops to iterate through multiple days and time periods of weather data

### Using PrependBody and AppendBody: OpenAPI Conversion

When you want to preserve the original API response but add additional context information, the `prependBody` and `appendBody` fields are very useful. This is particularly valuable when converting OpenAPI/Swagger specifications to MCP tools, as you can keep the original JSON response while providing explanations of field meanings for the AI assistant.

```yaml
server:
  name: product-api-server
  config:
    apiKey: your-api-key-here
tools:
- name: get-product
  description: "Get detailed product information"
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
    headers:
    - key: Authorization
      value: "Bearer {{.config.apiKey}}"
  responseTemplate:
    prependBody: |
      # Product Information
      
      Below is the detailed product information returned in JSON format. Field descriptions:
      
      - **id**: Unique product identifier
      - **name**: Product name
      - **description**: Product description
      - **price**: Product price (USD)
      - **category**: Product category
      - **inventory**: Inventory information
        - **quantity**: Current stock quantity
        - **warehouse**: Warehouse location
      - **ratings**: List of user ratings
        - **score**: Rating (1-5)
        - **comment**: Review content
      
      Original JSON response:
      
    appendBody: |
      
      You can use this information to understand the product's details, pricing, inventory status, and user reviews.
```

This example demonstrates:
- Using `prependBody` to add field descriptions before the original JSON response
- Using `appendBody` to add usage suggestions at the end of the response
- Preserving the original JSON response, allowing the AI assistant to directly access all data

### Example of Customizing Error Responses Using errorResponseTemplate

The errorResponseTemplate is used to customize the response transformation template when the HTTP response status code is >= 300 or < 200. It supports accessing header key-value pairs in map structure via _headers, so that values from the header can be referenced in the errorResponseTemplate to customize the error response result.

```yaml
server:
  config:
    appCode: ""
  name: "Bank Card 2nd, 3rd, and 4th Element Verification"
tools:
- args:
  - description: "Bank card number"
    name: "cardno"
    position: "query"
    required: true
    type: "string"
  - description: "Name (Note: apply UrlEncode encoding)"
    name: "name"
    position: "query"
    required: false
    type: "string"
  - description: "Registered mobile number"
    name: "mobile"
    position: "query"
    required: false
    type: "string"
  - description: "ID card number"
    name: "idcard"
    position: "query"
    required: false
    type: "string"
  description: "Verify whether card number, name, mobile number, and ID card number match"
  errorResponseTemplate: |-
    statusCode: {{gjson "_headers.\\:status"}}
    errorCode: {{gjson "_headers.x-ca-error-code"}}
    data: {{.data.value}}
  name: "Bank Card 2nd, 3rd, and 4th Element Validation"
  requestTemplate:
    argsToFormBody: false
    argsToJsonBody: false
    argsToUrlParam: true
    method: "GET"
    url: "https://ckid.market.alicloudapi.com/lundear/verifyBank"
  responseTemplate:
    appendBody: |2-
        - Below are descriptions of the returned parameters
        - Parameter Name: code, Parameter Type: integer, Description: Response status code
        - Parameter Name: desc, Parameter Type: string, Description: Description message
        - Parameter Name: data, Parameter Type: object, Description: No description
        - Parameter Name: data.bankId, Parameter Type: string, Description: Bank code
        - Parameter Name: data.bankName, Parameter Type: string, Description: Bank name
        - Parameter Name: data.abbr, Parameter Type: string, Description: Bank abbreviation
        - Parameter Name: data.cardName, Parameter Type: string, Description: Card name
        - Parameter Name: data.cardType, Parameter Type: string, Description: Card type
        - Parameter Name: data.cardBin, Parameter Type: string, Description: Card BIN
        - Parameter Name: data.binLen, Parameter Type: integer, Description: Length of card BIN
        - Parameter Name: data.area, Parameter Type: string, Description: Region where the card belongs
        - Parameter Name: data.bankPhone, Parameter Type: string, Description: Bank phone number
        - Parameter Name: data.bankUrl, Parameter Type: string, Description: Bank website URL
        - Parameter Name: data.bankLogo, Parameter Type: string, Description: Bank logo URL
```
This example demonstrates:
- {{gjson "_headers.\\:status"}} -> Get HTTP status code
- {{gjson "_headers.x-ca-error-code"}} -> Get value of header key "x-ca-error-code"
- {{.data.value}} -> Access original responseBody content (e.g., JSON field "data.value")

## AI Prompt for Template Generation

When working with AI assistants to generate templates for REST-to-MCP configuration, you can use the following prompt:

```
Please help me create an MCP server configuration for Higress. Supports two types:
1. **REST-to-MCP Server**: Converts REST APIs to MCP tools
2. **MCP Proxy Server**: Proxies to backend MCP servers

## Configuration Format

### REST-to-MCP Server Configuration

```yaml
server:
  name: rest-api-server
  type: rest  # Optional, defaults to rest
  config:
    apiKey: your-api-key-here
  # Server-level default authentication (optional)
  defaultDownstreamSecurity:
    id: ClientAuth
  defaultUpstreamSecurity:
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-API-Key
    defaultCredential: your-backend-api-key
tools:
- name: tool-name
  description: "Detailed description of what this tool does"
  security: # Tool-level client authentication (optional, overrides server default)
    id: ClientAuth
    passthrough: true  # Enable passthrough authentication
  args:
  - name: arg1
    description: "Description of argument 1"
    type: string  # Optional types: string, number, integer, boolean, array, object
    required: true
    position: path  # Optional positions: query, path, header, cookie, body
  - name: arg2
    description: "Description of argument 2"
    type: integer
    required: false
    default: 10
    position: query
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    security: # Tool-level backend authentication (optional, overrides server default)
      id: BackendAuth
      credential: "specific-tool-credential"  # Optional, override default credential
    # The following four options are mutually exclusive, only one can be used
    argsToUrlParam: true  # Add arguments to URL query parameters
    # OR other options...
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Result
      {{- range $index, $item := .items }}
      ## Item {{add $index 1}}
      - **Name**: {{ $item.name }}
      - **Value**: {{ $item.value }}
      {{- end }}
```

### MCP Proxy Server Configuration

```yaml
server:
  name: mcp-proxy-server
  type: mcp-proxy
  mcpServerURL: "http://backend-mcp.example.com/mcp"  # Backend MCP server URL
  timeout: 5000  # Timeout in milliseconds
  # Server-level default authentication (recommended)
  defaultDownstreamSecurity:  # Client-to-gateway authentication
    id: ClientAuth
    passthrough: true  # Enable passthrough authentication
  defaultUpstreamSecurity:   # Gateway-to-backend authentication
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-Backend-Key
    defaultCredential: "backend-service-key"

# For MCP proxy, tools configuration is optional
# If tools are configured, only listed tools are available
# If tools are not configured, all backend MCP server tools are proxied
tools:
- name: specific-tool
  description: "Specific tool configuration (optional)"
  security: # Override default client authentication
    id: ClientAuth
    passthrough: false  # Don't passthrough
  args:
  - name: param1
    description: "Parameter description"
    type: string
    required: true
  requestTemplate:
    security: # Override default backend authentication
      id: BackendAuth
      credential: "specific-tool-backend-credential"
```

## Template Syntax

The templates use GJSON Template syntax (https://github.com/higress-group/gjson_template), which combines Go templates with GJSON path syntax for JSON processing. The template engine supports:

1. Basic dot notation for accessing fields: {{.fieldName}}
2. The gjson function for complex queries: {{gjson "users.#(active==true)#.name"}}
3. All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.
4. Control structures: {{if}}, {{range}}, {{with}}, etc.
5. Variable assignment: {{$var := .value}}

For complex JSON responses, consider using GJSON's powerful filtering and querying capabilities to extract and format the most relevant information.

## My Requirements

Please choose your requirement type:

### If you want to convert REST API to MCP tools
Please describe your REST API:
- API endpoint URLs
- Authentication methods (API Key, Bearer Token, etc.)
- Parameters and response formats
- Or paste Swagger/OpenAPI specifications

### If you want to proxy to an existing MCP server
Please provide:
- Backend MCP server URL
- Authentication requirements (client authentication, backend authentication)
- Whether passthrough authentication is needed (pass client credentials to backend)
- Specific tool configuration requirements

[Describe your specific requirements here]
```

## Generation Requirements

Please generate a complete configuration based on the above information, including:

### For REST-to-MCP Server:
1. Descriptive name and appropriate server configuration
2. Define all necessary parameters with clear descriptions and appropriate types, required/default values
3. Choose appropriate parameter passing methods (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)
4. Create responseTemplate that transforms API responses into formats suitable for AI consumption
5. Configure appropriate security schemes and authentication configuration

### For MCP Proxy Server:
1. Configure backend MCP server URL and timeout
2. Set server-level default authentication configuration
3. Configure passthrough authentication as needed
4. Configure tool-specific authentication overrides if required
5. Ensure complete authentication chain from client-to-gateway and gateway-to-backend
