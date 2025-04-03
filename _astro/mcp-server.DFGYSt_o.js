const e="en/mcp-server.md",t="ai",r="en/mcp-server",o=`# MCP Server Plugin Configuration

## Feature Overview

The \`mcp-server\` plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol specifically designed for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:

1. Transform existing REST APIs into AI-callable tools without writing code
2. Leverage Higress gateway's unified authentication, authorization, rate limiting, and observability capabilities
3. Quickly build and deploy AI tools and services

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

By hosting MCP Server through Higress, you can achieve:
- Unified authentication and authorization mechanisms to ensure AI tool call security
- Fine-grained rate limiting to prevent abuse and resource exhaustion
- Complete audit logs to record all tool call behaviors
- Rich observability to monitor tool call performance and health status
- Simplified deployment and management through Higress plugin mechanism to quickly add new MCP Servers

## Runtime Properties

Plugin execution phase: \`Default Phase\`
Plugin execution priority: \`30\`

## Configuration Fields

### Server Configuration

| Name | Data Type | Required | Default | Description |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| \`server.name\` | string | Required | - | Name of the MCP Server. For built-in MCP Servers (like quark-search), only this field needs to be configured with the corresponding name, no tools field configuration needed. For REST-to-MCP scenarios, this field can be any value. |
| \`server.config\` | object | Optional | {} | MCP Server configuration, such as API keys |
| \`server.allowTools\` | array of string | Optional | - | List of allowed tools. If not specified, all tools are allowed |

### REST-to-MCP Tool Configuration

| Name | Data Type | Required | Default | Description |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| \`tools\` | array of object | Optional | [] | REST-to-MCP tool configuration list |
| \`tools[].name\` | string | Required | - | Tool name |
| \`tools[].description\` | string | Required | - | Tool function description |
| \`tools[].args\` | array of object | Required | [] | Tool parameter definitions |
| \`tools[].args[].name\` | string | Required | - | Parameter name |
| \`tools[].args[].description\` | string | Required | - | Parameter description |
| \`tools[].args[].type\` | string | Optional | string | Parameter type (string, number, integer, boolean, array, object) |
| \`tools[].args[].required\` | boolean | Optional | false | Whether the parameter is required |
| \`tools[].args[].default\` | any | Optional | - | Parameter default value |
| \`tools[].args[].enum\` | array | Optional | - | List of allowed parameter values |
| \`tools[].args[].items\` | object | Optional | - | Array item schema (when type is array) |
| \`tools[].args[].properties\` | object | Optional | - | Object property schema (when type is object) |
| \`tools[].requestTemplate\` | object | Required | - | HTTP request template |
| \`tools[].requestTemplate.url\` | string | Required | - | Request URL template |
| \`tools[].requestTemplate.method\` | string | Required | - | HTTP method (GET/POST etc.) |
| \`tools[].requestTemplate.headers\` | array of object | Optional | [] | Request header templates |
| \`tools[].requestTemplate.headers[].key\` | string | Required | - | Request header name |
| \`tools[].requestTemplate.headers[].value\` | string | Required | - | Request header value template |
| \`tools[].requestTemplate.body\` | string | Optional | - | Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToJsonBody\` | boolean | Optional | false | When true, parameters will be used directly as JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToUrlParam\` | boolean | Optional | false | When true, parameters will be added to URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody) |
| \`tools[].requestTemplate.argsToFormBody\` | boolean | Optional | false | When true, parameters will be encoded in request body in application/x-www-form-urlencoded format (mutually exclusive with body, argsToJsonBody, argsToUrlParam) |
| \`tools[].responseTemplate\` | object | Required | - | HTTP response transformation template |
| \`tools[].responseTemplate.body\` | string | Required | - | Response body transformation template |

## Parameter Type Support

REST-to-MCP tools support various parameter types to define tool parameters more precisely:

- **string**: String type (default)
- **number**: Number type (floating point)
- **integer**: Integer type
- **boolean**: Boolean type (true/false)
- **array**: Array type, use \`items\` field to define array element schema
- **object**: Object type, use \`properties\` field to define object property schema

Example:

\`\`\`yaml
args:
- name: query
  description: "Search keywords"
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
\`\`\`

## Request Parameter Passing Methods

REST-to-MCP tools support four different request parameter passing methods. These options are **mutually exclusive**, and only one can be chosen:

1. **body**: Manually construct request body using templates. This is the most flexible way, allowing complete control over request body format.
   \`\`\`yaml
   requestTemplate:
     body: |
       {
         "query": "{{.args.query}}",
         "filters": {{toJson .args.filters}},
         "options": {
           "limit": {{.args.limit}}
         }
       }
   \`\`\`

2. **argsToJsonBody**: When set to \`true\`, tool parameters will be sent directly as a JSON object in the request body, and \`Content-Type: application/json; charset=utf-8\` header will be added automatically.
   \`\`\`yaml
   requestTemplate:
     argsToJsonBody: true
   \`\`\`

3. **argsToUrlParam**: When set to \`true\`, tool parameters will be added to the URL as query parameters.
   \`\`\`yaml
   requestTemplate:
     argsToUrlParam: true
   \`\`\`

4. **argsToFormBody**: When set to \`true\`, tool parameters will be encoded in the request body in \`application/x-www-form-urlencoded\` format, and the corresponding Content-Type header will be added automatically.
   \`\`\`yaml
   requestTemplate:
     argsToFormBody: true
   \`\`\`

These options simplify the configuration of common API call patterns without manually constructing request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured, the system will reject loading the tool configuration with an error.

## Template Syntax

REST-to-MCP functionality uses the [GJSON Template](https://github.com/higress-group/gjson_template) library for template rendering, which combines Go template syntax with GJSON's powerful path syntax:

### Request Templates

Used to construct HTTP request URLs, headers, and bodies:
- Access configuration values: \`.config.fieldName\`
- Access tool parameters: \`.args.paramName\`

### Response Templates

Used to transform HTTP responses into AI-consumable format:
- Use GJSON path syntax to access JSON response fields
- Use template functions like \`add\`, \`upper\`, \`lower\`, etc.
- Use control structures like \`if\`, \`range\`, etc.

GJSON Template includes all [Sprig](https://github.com/Masterminds/sprig) functions, providing 70+ template functions for string operations, mathematical calculations, date formatting, etc., equivalent to Helm's template capabilities.

Commonly used Sprig functions include:

- **String Operations**: \`trim\`, \`upper\`, \`lower\`, \`replace\`, \`plural\`, \`nospace\`
- **Math Operations**: \`add\`, \`sub\`, \`mul\`, \`div\`, \`max\`, \`min\`
- **Date Formatting**: \`now\`, \`date\`, \`dateInZone\`, \`dateModify\`
- **List Operations**: \`list\`, \`first\`, \`last\`, \`uniq\`, \`sortAlpha\`
- **Dictionary Operations**: \`dict\`, \`get\`, \`set\`, \`hasKey\`, \`pluck\`
- **Flow Control**: \`ternary\`, \`default\`, \`empty\`, \`coalesce\`
- **Type Conversion**: \`toString\`, \`toJson\`, \`toPrettyJson\`, \`toRawJson\`
- **Encoding/Decoding**: \`b64enc\`, \`b64dec\`, \`urlquery\`, \`urlqueryescape\`
- **UUID Generation**: \`uuidv4\`

For a complete reference of all available functions, please refer to the [Helm Function Documentation](https://helm.sh/docs/chart_template_guide/function_list/), as GJSON Template includes the same function set.

### GJSON Path Syntax

GJSON provides powerful JSON querying capabilities:

- **Dot Notation**: \`address.city\`
- **Array Indexing**: \`users.0.name\`
- **Array Iteration**: \`users.#.name\`
- **Array Filtering**: \`users.#(age>=30)#.name\`
- **Modifiers**: \`users.@reverse.#.name\`
- **Multiple Paths**: \`{name:users.0.name,count:users.#}\`
- **Escape Characters**: \`path.with\\.dot\`

For more complex queries, use the \`gjson\` function:

\`\`\`
<!-- Using gjson function for complex queries -->
Active Users: {{gjson "users.#(active==true)#.name"}}

<!-- Array filtering with multiple conditions -->
Active developers over 30: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- Using modifiers -->
Usernames (reversed): {{gjson "users.@reverse.#.name"}}

<!-- Iterating over filtered results -->
Administrators:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
\`\`\`

For complete GJSON path syntax reference, see [GJSON Documentation](https://github.com/tidwall/gjson#path-syntax).

## Configuration Examples

### Using Built-in MCP Server Example: Configuring quark-search

\`\`\`yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
\`\`\`

This configuration uses Higress's built-in quark-search MCP Server. In this case, only the Server name and necessary configuration (such as API key) need to be specified, no tools field configuration is needed as the tools are predefined in the MCP Server.

### Basic Configuration Example: Converting AMap API

\`\`\`yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "Convert detailed structured addresses into latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates"
  args:
  - name: address
    description: "Structured address information to be parsed"
    type: string
    required: true
  - name: city
    description: "Specify the query city"
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
      - **Street Number**: {{ $geo.number }}
      - **Administrative Code**: {{ $geo.adcode }}
      - **Coordinates**: {{ $geo.location }}
      - **Level**: {{ $geo.level }}
      {{- end }}
\`\`\`

This configuration converts AMap's geocoding API into an AI-callable tool. When AI calls this tool:

1. Builds API request using provided address and city parameters
2. Calls AMap API
3. Transforms JSON response into easy-to-read Markdown format
4. Returns formatted results to AI assistant

### Advanced Configuration Example: Complex Response Processing with Conditional Logic

\`\`\`yaml
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
    description: "Whether to include hourly forecast"
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

      **Current Temperature**: {{.current.temp_c}}\xB0C
      **Feels Like**: {{.current.feelslike_c}}\xB0C
      **Weather Condition**: {{.current.condition.text}}
      **Humidity**: {{.current.humidity}}%
      **Wind Speed**: {{.current.wind_kph}} km/h

      ## Future Forecast
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Warning!**{{end}}
      {{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Warning!**{{end}}
      
      - **Maximum Temperature**: {{$day.day.maxtemp_c}}\xB0C
      - **Minimum Temperature**: {{$day.day.mintemp_c}}\xB0C
      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%
      - **Weather Condition**: {{$day.day.condition.text}}
      
      #### Hourly Forecast
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}
      {{end}}
      {{end}}
\`\`\`

This example demonstrates:
- Using conditional statements (\`if\`) for temperature warnings
- Using date formatting functions (\`dateFormat\`)
- Using array slicing (\`slice\`) to select specific time weather
- Nested loops to iterate through multiple days and time periods of weather data

## AI Prompt Template for Generation

When working with AI assistants to generate REST-to-MCP configurations, you can use the following prompt:

\`\`\`
Please help me create a Higress REST-to-MCP configuration to convert a REST API into an MCP tool.

## Configuration Format

The configuration should follow this format:

\`\`\`yaml
server:
  name: rest-api-server
  config:
    apiKey: your-api-key
tools:
- name: tool-name
  description: "Detailed description of this tool's functionality"
  args:
  - name: arg1
    description: "Description of parameter 1"
    type: string  # Available types: string, number, integer, boolean, array, object
    required: true
  - name: arg2
    description: "Description of parameter 2"
    type: integer
    required: false
    default: 10
  - name: arg3
    description: "Description of parameter 3"
    type: array
    items:
      type: string
  - name: arg4
    description: "Description of parameter 4"
    type: object
    properties:
      subfield1:
        type: string
      subfield2:
        type: number
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    # The following four options are mutually exclusive, choose only one
    argsToUrlParam: true  # Add parameters to URL query parameters
    # or
    # argsToJsonBody: true  # Send parameters as JSON object in request body
    # or
    # argsToFormBody: true  # Send parameters form-encoded in request body
    # or
    # body: |  # Manually construct request body
    #   {
    #     "param1": "{{.args.arg1}}",
    #     "param2": {{.args.arg2}},
    #     "complex": {{toJson .args.arg4}}
    #   }
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Results
      {{- range $index, $item := .items }}
      ## Item {{add $index 1}}
      - **Name**: {{ $item.name }}
      - **Value**: {{ $item.value }}
      {{- end }}
\`\`\`

## Template Syntax

Templates use GJSON Template syntax (https://github.com/higress-group/gjson_template), which combines Go templates and GJSON path syntax for JSON processing. The template engine supports:

1. Basic dot notation for accessing fields: {{.fieldName}}
2. gjson function for complex queries: {{gjson "users.#(active==true)#.name"}}
3. All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.
4. Control structures: {{if}}, {{range}}, {{with}}, etc.
5. Variable assignment: {{$var := .value}}

For complex JSON responses, consider using GJSON's powerful filtering and querying capabilities to extract and format the most relevant information.

## My API Information

The REST API I want to convert is:

[Describe your API here, including endpoints, parameters, and response format, or paste Swagger/OpenAPI specification]
\`\`\`

Please generate a complete configuration based on the above information, including:
1. Descriptive name and appropriate server configuration
2. Define all necessary parameters with clear descriptions and appropriate types, required/default values
3. Choose suitable parameter passing method (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)
4. Create responseTemplate that transforms API response into AI-consumable readable format

> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).
> 
> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/). `,a={title:"MCP Server Plugin Configuration",description:"MCP Server Plugin Configuration Reference",keywords:["higress","mcp","ai"],date:"2025-04-03",category:"article"},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-server.md",rawData:void 0};export{i as _internal,o as body,t as collection,a as data,e as id,r as slug};
