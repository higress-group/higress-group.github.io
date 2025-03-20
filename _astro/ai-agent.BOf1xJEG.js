import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r,m as v,u as E,__tla as y}from"./constant.TIcaNJPW.js";import{__tla as F}from"./astro/assets-service.DQopRnBr.js";let e,p,a,n,l,d,t,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return F}catch{}})()]).then(async()=>{let s;s=`<h2 id="functional-description">Functional Description</h2>
<p>A customizable API AI Agent that supports configuring HTTP method types as GET and POST APIs. Supports multiple dialogue rounds, streaming and non-streaming modes.<br>
The agent flow chart is as follows:<br>
<img src="https://github.com/user-attachments/assets/b0761a0c-1afa-496c-a98e-bb9f38b340f8" alt="ai-agent" referrerpolicy="no-referrer"></p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code>
Plugin execution priority: <code dir="auto">200</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="basic-configuration">Basic Configuration</h3>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">llm</code></td><td>object</td><td>Required</td><td>-</td><td>Configuration information for AI service provider</td></tr><tr><td><code dir="auto">apis</code></td><td>object</td><td>Required</td><td>-</td><td>Configuration information for external API service provider</td></tr><tr><td><code dir="auto">promptTemplate</code></td><td>object</td><td>Optional</td><td>-</td><td>Configuration information for Agent ReAct template</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">llm</code> are as follows:</p>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">apiKey</code></td><td>string</td><td>Required</td><td>-</td><td>Token for authentication when accessing large model services.</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the large model service</td></tr><tr><td><code dir="auto">servicePort</code></td><td>int</td><td>Required</td><td>-</td><td>Port of the large model service</td></tr><tr><td><code dir="auto">domain</code></td><td>string</td><td>Required</td><td>-</td><td>Domain for accessing the large model service</td></tr><tr><td><code dir="auto">path</code></td><td>string</td><td>Required</td><td>-</td><td>Path for accessing the large model service</td></tr><tr><td><code dir="auto">model</code></td><td>string</td><td>Required</td><td>-</td><td>Model name for accessing the large model service</td></tr><tr><td><code dir="auto">maxIterations</code></td><td>int</td><td>Required</td><td>15</td><td>Maximum steps before ending the execution loop</td></tr><tr><td><code dir="auto">maxExecutionTime</code></td><td>int</td><td>Required</td><td>50000</td><td>Timeout for each request to the large model, in milliseconds</td></tr><tr><td><code dir="auto">maxTokens</code></td><td>int</td><td>Required</td><td>1000</td><td>Token limit for each request to the large model</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">apis</code> are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">apiProvider</code></td><td>object</td><td>Required</td><td>-</td><td>Information about the external API service</td></tr><tr><td><code dir="auto">api</code></td><td>string</td><td>Required</td><td>-</td><td>OpenAPI documentation of the tool</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">apiProvider</code> are as follows:</p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">apiKey</code></td><td>object</td><td>Optional</td><td>-</td><td>Token for authentication when accessing external API services.</td></tr><tr><td><code dir="auto">maxExecutionTime</code></td><td>int</td><td>Optional</td><td>50000</td><td>Timeout for each request to the API, in milliseconds</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the external API service</td></tr><tr><td><code dir="auto">servicePort</code></td><td>int</td><td>Required</td><td>-</td><td>Port of the external API service</td></tr><tr><td><code dir="auto">domain</code></td><td>string</td><td>Required</td><td>-</td><td>Domain for accessing the external API</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">apiKey</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">in</code></td><td>string</td><td>Optional</td><td>none</td><td>Whether the authentication token for accessing the external API service is in the header or in the query; If the API does not have a token, fill in none.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Optional</td><td>-</td><td>The name of the token for authentication when accessing the external API service.</td></tr><tr><td><code dir="auto">value</code></td><td>string</td><td>Optional</td><td>-</td><td>The value of the token for authentication when accessing the external API service.</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">promptTemplate</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">language</code></td><td>string</td><td>Optional</td><td>EN</td><td>Language type of the Agent ReAct template, including CH and EN.</td></tr><tr><td><code dir="auto">chTemplate</code></td><td>object</td><td>Optional</td><td>-</td><td>Agent ReAct Chinese template</td></tr><tr><td><code dir="auto">enTemplate</code></td><td>object</td><td>Optional</td><td>-</td><td>Agent ReAct English template</td></tr></tbody></table>
<p>The configuration fields for <code dir="auto">chTemplate</code> and <code dir="auto">enTemplate</code> are as follows:</p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">question</code></td><td>string</td><td>Optional</td><td>-</td><td>The question part of the Agent ReAct template</td></tr><tr><td><code dir="auto">thought1</code></td><td>string</td><td>Optional</td><td>-</td><td>The thought1 part of the Agent ReAct template</td></tr><tr><td><code dir="auto">observation</code></td><td>string</td><td>Optional</td><td>-</td><td>The observation part of the Agent ReAct template</td></tr><tr><td><code dir="auto">thought2</code></td><td>string</td><td>Optional</td><td>-</td><td>The thought2 part of the Agent ReAct template</td></tr></tbody></table>
<h2 id="usage-example">Usage Example</h2>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">llm</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/compatible-mode/v1/chat/completions</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max-0403</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">maxIterations</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">promptTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">language</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">CH</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">restapi.amap.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">geo.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: Amap</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: Get related information of POI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://restapi.amap.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v5/place/text:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: Get latitude and longitude coordinates based on POI name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: get_location_coordinate</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: keywords</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: POI name, must be in Chinese</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: region</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: The name of the region where the POI is located, must be in Chinese</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v5/place/around:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: Search for POI near the given coordinates</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: search_nearby_pois</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: keywords</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: Keywords for the target POI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: location</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: Latitude and longitude of the center point, separated by a comma</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.seniverse.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">seniverse.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: XZWeather</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: Get weather related information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://api.seniverse.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v3/weather/now.json:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: Get weather conditions for a specified city</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: get_weather_now</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: location</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: The city to query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: language</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: Language used for the weather query results</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">default: zh-Hans</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- zh-Hans</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- en</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- ja</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: unit</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: Units of temperature, available in Celsius and Fahrenheit</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">default: c</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- c</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- f</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"header"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"DeepL-Auth-Key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"73xxxxxxxxxxxxxxx:fx"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api-free.deepl.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"deepl.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: DeepL API Documentation</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://api-free.deepl.com/v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/translate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">post:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">summary: Request Translation</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: translateText</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">requestBody:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">content:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">application/json:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">type: object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">required:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">- text</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">- target_lang</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">properties:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">text:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">description: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">Text to be translated. Only UTF-8-encoded plain text is supported.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">The parameter may be specified up to 50 times in a single request.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">Translations are returned in the same order as they are requested.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">type: array</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">maxItems: 50</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">items:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">example: Hello, World!</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">target_lang:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">description: The language into which the text should be translated.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- BG</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- CS</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- DA</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- DE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EN-GB</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EN-US</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ES</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- FI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- FR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- HU</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ID</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- IT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- JA</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- KO</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- LT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- LV</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- NB</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- NL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PT-BR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PT-PT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- RO</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- RU</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SV</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- TR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- UK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ZH</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ZH-HANS</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">example: DE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="llm:\x7F  apiKey: xxxxxxxxxxxxxxxxxx\x7F  domain: dashscope.aliyuncs.com\x7F  serviceName: dashscope.dns\x7F  servicePort: 443\x7F  path: /compatible-mode/v1/chat/completions\x7F  model: qwen-max-0403\x7F  maxIterations: 2\x7FpromptTemplate:\x7F  language: CH\x7Fapis:\x7F- apiProvider:\x7F    domain: restapi.amap.com\x7F    serviceName: geo.dns\x7F    servicePort: 80\x7F    apiKey:\x7F      in: query\x7F      name: key\x7F      value: xxxxxxxxxxxxxxx\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: Amap\x7F      description: Get related information of POI\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://restapi.amap.com\x7F    paths:\x7F      /v5/place/text:\x7F        get:\x7F          description: Get latitude and longitude coordinates based on POI name\x7F          operationId: get_location_coordinate\x7F          parameters:\x7F            - name: keywords\x7F              in: query\x7F              description: POI name, must be in Chinese\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: region\x7F              in: query\x7F              description: The name of the region where the POI is located, must be in Chinese\x7F              required: true\x7F              schema:\x7F                type: string\x7F          deprecated: false\x7F      /v5/place/around:\x7F        get:\x7F          description: Search for POI near the given coordinates\x7F          operationId: search_nearby_pois\x7F          parameters:\x7F            - name: keywords\x7F              in: query\x7F              description: Keywords for the target POI\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: location\x7F              in: query\x7F              description: Latitude and longitude of the center point, separated by a comma\x7F              required: true\x7F              schema:\x7F                type: string\x7F          deprecated: false\x7F    components:\x7F      schemas: {}\x7F- apiProvider:\x7F    domain: api.seniverse.com\x7F    serviceName: seniverse.dns\x7F    servicePort: 80\x7F    apiKey:\x7F      in: query\x7F      name: key\x7F      value: xxxxxxxxxxxxxxx\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: XZWeather\x7F      description: Get weather related information\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://api.seniverse.com\x7F    paths:\x7F      /v3/weather/now.json:\x7F        get:\x7F          description: Get weather conditions for a specified city\x7F          operationId: get_weather_now\x7F          parameters:\x7F            - name: location\x7F              in: query\x7F              description: The city to query\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: language\x7F              in: query\x7F              description: Language used for the weather query results\x7F              required: true\x7F              schema:\x7F                type: string\x7F                default: zh-Hans\x7F                enum:\x7F                  - zh-Hans\x7F                  - en\x7F                  - ja\x7F            - name: unit\x7F              in: query\x7F              description: Units of temperature, available in Celsius and Fahrenheit\x7F              required: true\x7F              schema:\x7F                type: string\x7F                default: c\x7F                enum:\x7F                  - c\x7F                  - f\x7F          deprecated: false\x7F    components:\x7F      schemas: {}\x7F- apiProvider:\x7F    apiKey:\x7F      in: &#x22;header&#x22;\x7F      name: &#x22;DeepL-Auth-Key&#x22;\x7F      value: &#x22;73xxxxxxxxxxxxxxx:fx&#x22;\x7F    domain: &#x22;api-free.deepl.com&#x22;\x7F    serviceName: &#x22;deepl.dns&#x22;\x7F    servicePort: 443\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: DeepL API Documentation\x7F      description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://api-free.deepl.com/v2\x7F    paths:\x7F      /translate:\x7F        post:\x7F          summary: Request Translation\x7F          operationId: translateText\x7F          requestBody:\x7F            required: true\x7F            content:\x7F              application/json:\x7F                schema:\x7F                  type: object\x7F                  required:\x7F                    - text\x7F                    - target_lang\x7F                  properties:\x7F                    text:\x7F                      description: |\x7F                        Text to be translated. Only UTF-8-encoded plain text is supported.\x7F                        The parameter may be specified up to 50 times in a single request.\x7F                        Translations are returned in the same order as they are requested.\x7F                      type: array\x7F                      maxItems: 50\x7F                      items:\x7F                        type: string\x7F                        example: Hello, World!\x7F                    target_lang:\x7F                      description: The language into which the text should be translated.\x7F                      type: string\x7F                      enum:\x7F                        - BG\x7F                        - CS\x7F                        - DA\x7F                        - DE\x7F                        - EL\x7F                        - EN-GB\x7F                        - EN-US\x7F                        - ES\x7F                        - ET\x7F                        - FI\x7F                        - FR\x7F                        - HU\x7F                        - ID\x7F                        - IT\x7F                        - JA\x7F                        - KO\x7F                        - LT\x7F                        - LV\x7F                        - NB\x7F                        - NL\x7F                        - PL\x7F                        - PT-BR\x7F                        - PT-PT\x7F                        - RO\x7F                        - RU\x7F                        - SK\x7F                        - SL\x7F                        - SV\x7F                        - TR\x7F                        - UK\x7F                        - ZH\x7F                        - ZH-HANS\x7F                      example: DE\x7F    components:\x7F      schemas: {}"><div></div></button></div></figure></div>
<p>This example configures three services demonstrating both GET and POST types of tools. The GET type tools include Amap and XZWeather, while the POST type tool is the DeepL translation. All three services need to be properly configured in the Higress service with DNS domain names and should be healthy.<br>
Amap provides two tools, one for obtaining the coordinates of a specified location and the other for searching for points of interest near the coordinates. Document: <a href="https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch</a><br>
XZWeather provides one tool to get real-time weather conditions for a specified city, supporting results in Chinese, English, and Japanese, as well as representations in Celsius and Fahrenheit. Document: <a href="https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t</a><br>
DeepL provides one tool for translating given sentences, supporting multiple languages. Document: <a href="https://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true</a></p>
<p>Below are test cases. For stability, it is recommended to maintain a stable version of the large model. The example used here is qwen-max-0403:<br>
<strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;replace with gateway public IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"I want to have coffee near the Xinshi Building in Jinan, please recommend a few."}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<replace with gateway public IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;I want to have coffee near the Xinshi Building in Jinan, please recommend a few.&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"139487e7-96a0-9b13-91b4-290fb79ac992"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" Near the Xinshi Building in Jinan, you can choose from the following coffee shops:</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97), located in the lobby of Xinshi Building, No. 1299 Xinluo Avenue;</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located 60 meters southwest of the intersection of Xinluo Avenue and Yingxiu Road;</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located at No. 1267 Yingxiu Road;</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97), located in the commercial space of Building 4, Sanqing Qisheng Plaza, Xinluo Avenue;</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97), located at L117, Meilian Plaza, No. 1166 Xinluo Avenue, High-tech Zone; and a few other options. I hope these suggestions help!"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723172296</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">886</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">936</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;139487e7-96a0-9b13-91b4-290fb79ac992&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; Near the Xinshi Building in Jinan, you can choose from the following coffee shops:\\n1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97), located in the lobby of Xinshi Building, No. 1299 Xinluo Avenue;\\n2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located 60 meters southwest of the intersection of Xinluo Avenue and Yingxiu Road;\\n3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located at No. 1267 Yingxiu Road;\\n4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97), located in the commercial space of Building 4, Sanqing Qisheng Plaza, Xinluo Avenue;\\n5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97), located at L117, Meilian Plaza, No. 1166 Xinluo Avenue, High-tech Zone; and a few other options. I hope these suggestions help!&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723172296,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:886,&#x22;completion_tokens&#x22;:50,&#x22;total_tokens&#x22;:936}}"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;replace with gateway public IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan?"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<replace with gateway public IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;What is the current weather in Jinan?&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time)."</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">890</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">56</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">946</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time).&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:890,&#x22;completion_tokens&#x22;:56,&#x22;total_tokens&#x22;:946}}"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;replace with gateway public IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan?"},{"role":"assistant","content":" The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time)."},{"role":"user","content":"BeiJing?"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<replace with gateway public IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;What is the current weather in Jinan?&#x22;},{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time).&#x22;},{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;BeiJing?&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" The current weather condition in Beijing is overcast, with a temperature of 19\xB0C. This information was last updated on Sep 12, 2024, at 22:17 (Beijing time)."</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">999</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">76</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1075</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; The current weather condition in Beijing is overcast, with a temperature of 19\xB0C. This information was last updated on Sep 12, 2024, at 22:17 (Beijing time).&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:999,&#x22;completion_tokens&#x22;:76,&#x22;total_tokens&#x22;:1075}}"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;replace with gateway public IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan? Please indicate in Fahrenheit and respond in Japanese."}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<replace with gateway public IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;What is the current weather in Jinan? Please indicate in Fahrenheit and respond in Japanese.&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" \u73FE\u5728\u306E\u6D4E\u5357\u306E\u5929\u6C17\u306F\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">890</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">56</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">946</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; \u73FE\u5728\u306E\u6D4E\u5357\u306E\u5929\u6C17\u306F\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:890,&#x22;completion_tokens&#x22;:56,&#x22;total_tokens&#x22;:946}}"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;replace with gateway public IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"Help me translate the following sentence into German: \\"Hail Hydra!\\""}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<replace with gateway public IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;Help me translate the following sentence into German: \\&#x22;Hail Hydra!\\&#x22;&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"65dcf12c-61ff-9e68-bffa-44fc9e6070d5"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" The German translation of </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">Hail Hydra!</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> is </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">Hoch lebe Hydra!</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">."</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1724043865</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">908</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">52</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">960</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;65dcf12c-61ff-9e68-bffa-44fc9e6070d5&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; The German translation of \\&#x22;Hail Hydra!\\&#x22; is \\&#x22;Hoch lebe Hydra!\\&#x22;.&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1724043865,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:908,&#x22;completion_tokens&#x22;:52,&#x22;total_tokens&#x22;:960}}"><div></div></button></div></figure></div>`,n={title:"AI Agent",keywords:["AI Gateway","AI Agent"],description:"AI Agent plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-dev/ai-agent.md",t=void 0,d=function(){return`## Functional Description
A customizable API AI Agent that supports configuring HTTP method types as GET and POST APIs. Supports multiple dialogue rounds, streaming and non-streaming modes.  
The agent flow chart is as follows:  
![ai-agent](https://github.com/user-attachments/assets/b0761a0c-1afa-496c-a98e-bb9f38b340f8)  

## Runtime Properties
Plugin execution phase: \`Default Phase\`
Plugin execution priority: \`200\`

## Configuration Fields

### Basic Configuration
| Name             | Data Type | Requirement | Default Value | Description                      |
|------------------|-----------|-------------|---------------|----------------------------------|
| \`llm\`            | object    | Required    | -             | Configuration information for AI service provider  |
| \`apis\`           | object    | Required    | -             | Configuration information for external API service provider  |
| \`promptTemplate\` | object    | Optional    | -             | Configuration information for Agent ReAct template  |

The configuration fields for \`llm\` are as follows:  
| Name               | Data Type | Requirement | Default Value | Description                         |
|--------------------|-----------|-------------|---------------|-------------------------------------|
| \`apiKey\`           | string    | Required    | -             | Token for authentication when accessing large model services.  |
| \`serviceName\`      | string    | Required    | -             | Name of the large model service                      |
| \`servicePort\`      | int       | Required    | -             | Port of the large model service                   |
| \`domain\`           | string    | Required    | -             | Domain for accessing the large model service       |
| \`path\`             | string    | Required    | -             | Path for accessing the large model service         |
| \`model\`            | string    | Required    | -             | Model name for accessing the large model service     |
| \`maxIterations\`    | int       | Required    | 15            | Maximum steps before ending the execution loop         |
| \`maxExecutionTime\` | int       | Required    | 50000         | Timeout for each request to the large model, in milliseconds |
| \`maxTokens\`        | int       | Required    | 1000          | Token limit for each request to the large model       |

The configuration fields for \`apis\` are as follows:  
| Name            | Data Type | Requirement | Default Value | Description                         |
|-----------------|-----------|-------------|---------------|-------------------------------------|
| \`apiProvider\`   | object    | Required    | -             | Information about the external API service  |
| \`api\`           | string    | Required    | -             | OpenAPI documentation of the tool   |

The configuration fields for \`apiProvider\` are as follows:  
| Name              | Data Type | Requirement | Default Value | Description                                      |
|-------------------|-----------|-------------|---------------|--------------------------------------------------|
| \`apiKey\`          | object    | Optional    | -             | Token for authentication when accessing external API services.  |
| \`maxExecutionTime\`| int       | Optional    | 50000         | Timeout for each request to the API, in milliseconds|
| \`serviceName\`     | string    | Required    | -             | Name of the external API service                    |
| \`servicePort\`     | int       | Required    | -             | Port of the external API service                    |
| \`domain\`          | string    | Required    | -             | Domain for accessing the external API               |

The configuration fields for \`apiKey\` are as follows:  
| Name              | Data Type | Requirement | Default Value | Description                                                                          |
|-------------------|-----------|-------------|---------------|-------------------------------------------------------------------------------------|
| \`in\`              | string    | Optional    | none          | Whether the authentication token for accessing the external API service is in the header or in the query; If the API does not have a token, fill in none.   |
| \`name\`            | string    | Optional    | -             | The name of the token for authentication when accessing the external API service. |
| \`value\`           | string    | Optional    | -             | The value of the token for authentication when accessing the external API service.  |

The configuration fields for \`promptTemplate\` are as follows:  
| Name            | Data Type | Requirement | Default Value | Description                                        |
|-----------------|-----------|-------------|---------------|----------------------------------------------------|
| \`language\`      | string    | Optional    | EN            | Language type of the Agent ReAct template, including CH and EN. |
| \`chTemplate\`    | object    | Optional    | -             | Agent ReAct Chinese template                      |
| \`enTemplate\`    | object    | Optional    | -             | Agent ReAct English template                       |

The configuration fields for \`chTemplate\` and \`enTemplate\` are as follows:  
| Name            | Data Type | Requirement | Default Value | Description                                       |
|-----------------|-----------|-------------|---------------|---------------------------------------------------|
| \`question\`      | string    | Optional    | -             | The question part of the Agent ReAct template       |
| \`thought1\`      | string    | Optional    | -             | The thought1 part of the Agent ReAct template       |
| \`observation\`   | string    | Optional    | -             | The observation part of the Agent ReAct template     |
| \`thought2\`      | string    | Optional    | -             | The thought2 part of the Agent ReAct template       |

## Usage Example
**Configuration Information**  
\`\`\`yaml  
llm:  
  apiKey: xxxxxxxxxxxxxxxxxx  
  domain: dashscope.aliyuncs.com  
  serviceName: dashscope.dns  
  servicePort: 443  
  path: /compatible-mode/v1/chat/completions  
  model: qwen-max-0403  
  maxIterations: 2  
promptTemplate:  
  language: CH  
apis:  
- apiProvider:  
    domain: restapi.amap.com  
    serviceName: geo.dns  
    servicePort: 80  
    apiKey:  
      in: query  
      name: key  
      value: xxxxxxxxxxxxxxx  
  api: |  
    openapi: 3.1.0  
    info:  
      title: Amap  
      description: Get related information of POI  
      version: v1.0.0  
    servers:  
      - url: https://restapi.amap.com  
    paths:  
      /v5/place/text:  
        get:  
          description: Get latitude and longitude coordinates based on POI name  
          operationId: get_location_coordinate  
          parameters:  
            - name: keywords  
              in: query  
              description: POI name, must be in Chinese  
              required: true  
              schema:  
                type: string  
            - name: region  
              in: query  
              description: The name of the region where the POI is located, must be in Chinese  
              required: true  
              schema:  
                type: string  
          deprecated: false  
      /v5/place/around:  
        get:  
          description: Search for POI near the given coordinates  
          operationId: search_nearby_pois  
          parameters:  
            - name: keywords  
              in: query  
              description: Keywords for the target POI  
              required: true  
              schema:  
                type: string  
            - name: location  
              in: query  
              description: Latitude and longitude of the center point, separated by a comma  
              required: true  
              schema:  
                type: string  
          deprecated: false  
    components:  
      schemas: {}  
- apiProvider:  
    domain: api.seniverse.com  
    serviceName: seniverse.dns  
    servicePort: 80  
    apiKey:  
      in: query  
      name: key  
      value: xxxxxxxxxxxxxxx  
  api: |  
    openapi: 3.1.0  
    info:  
      title: XZWeather  
      description: Get weather related information  
      version: v1.0.0  
    servers:  
      - url: https://api.seniverse.com  
    paths:  
      /v3/weather/now.json:  
        get:  
          description: Get weather conditions for a specified city  
          operationId: get_weather_now  
          parameters:  
            - name: location  
              in: query  
              description: The city to query  
              required: true  
              schema:  
                type: string  
            - name: language  
              in: query  
              description: Language used for the weather query results  
              required: true  
              schema:  
                type: string  
                default: zh-Hans  
                enum:  
                  - zh-Hans  
                  - en  
                  - ja  
            - name: unit  
              in: query  
              description: Units of temperature, available in Celsius and Fahrenheit  
              required: true  
              schema:  
                type: string  
                default: c  
                enum:  
                  - c  
                  - f  
          deprecated: false  
    components:  
      schemas: {}  
- apiProvider:  
    apiKey:  
      in: "header"  
      name: "DeepL-Auth-Key"  
      value: "73xxxxxxxxxxxxxxx:fx"  
    domain: "api-free.deepl.com"  
    serviceName: "deepl.dns"  
    servicePort: 443  
  api: |  
    openapi: 3.1.0  
    info:  
      title: DeepL API Documentation  
      description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.  
      version: v1.0.0  
    servers:  
      - url: https://api-free.deepl.com/v2  
    paths:  
      /translate:  
        post:  
          summary: Request Translation  
          operationId: translateText  
          requestBody:  
            required: true  
            content:  
              application/json:  
                schema:  
                  type: object  
                  required:  
                    - text  
                    - target_lang  
                  properties:  
                    text:  
                      description: |  
                        Text to be translated. Only UTF-8-encoded plain text is supported. 
                        The parameter may be specified up to 50 times in a single request. 
                        Translations are returned in the same order as they are requested.  
                      type: array  
                      maxItems: 50  
                      items:  
                        type: string  
                        example: Hello, World!  
                    target_lang:  
                      description: The language into which the text should be translated.  
                      type: string  
                      enum:  
                        - BG  
                        - CS  
                        - DA  
                        - DE  
                        - EL  
                        - EN-GB  
                        - EN-US  
                        - ES  
                        - ET  
                        - FI  
                        - FR  
                        - HU  
                        - ID  
                        - IT  
                        - JA  
                        - KO  
                        - LT  
                        - LV  
                        - NB  
                        - NL  
                        - PL  
                        - PT-BR  
                        - PT-PT  
                        - RO  
                        - RU  
                        - SK  
                        - SL  
                        - SV  
                        - TR  
                        - UK  
                        - ZH  
                        - ZH-HANS  
                      example: DE  
    components:  
      schemas: {}  
\`\`\`  
This example configures three services demonstrating both GET and POST types of tools. The GET type tools include Amap and XZWeather, while the POST type tool is the DeepL translation. All three services need to be properly configured in the Higress service with DNS domain names and should be healthy.  
Amap provides two tools, one for obtaining the coordinates of a specified location and the other for searching for points of interest near the coordinates. Document: https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch  
XZWeather provides one tool to get real-time weather conditions for a specified city, supporting results in Chinese, English, and Japanese, as well as representations in Celsius and Fahrenheit. Document: https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t  
DeepL provides one tool for translating given sentences, supporting multiple languages. Document: https://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true  

Below are test cases. For stability, it is recommended to maintain a stable version of the large model. The example used here is qwen-max-0403:  
**Request Example**  
\`\`\`shell  
curl 'http://<replace with gateway public IP>/api/openai/v1/chat/completions' \\  
-H 'Accept: application/json, text/event-stream' \\  
-H 'Content-Type: application/json' \\  
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"I want to have coffee near the Xinshi Building in Jinan, please recommend a few."}],"presence_penalty":0,"temperature":0,"top_p":0}'  
\`\`\`  
**Response Example**  
\`\`\`json  
{"id":"139487e7-96a0-9b13-91b4-290fb79ac992","choices":[{"index":0,"message":{"role":"assistant","content":" Near the Xinshi Building in Jinan, you can choose from the following coffee shops:\\n1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97), located in the lobby of Xinshi Building, No. 1299 Xinluo Avenue;\\n2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located 60 meters southwest of the intersection of Xinluo Avenue and Yingxiu Road;\\n3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97), located at No. 1267 Yingxiu Road;\\n4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97), located in the commercial space of Building 4, Sanqing Qisheng Plaza, Xinluo Avenue;\\n5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97), located at L117, Meilian Plaza, No. 1166 Xinluo Avenue, High-tech Zone; and a few other options. I hope these suggestions help!"},"finish_reason":"stop"}],"created":1723172296,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":886,"completion_tokens":50,"total_tokens":936}}  
\`\`\`  
**Request Example**  
\`\`\`shell  
curl 'http://<replace with gateway public IP>/api/openai/v1/chat/completions' \\  
-H 'Accept: application/json, text/event-stream' \\  
-H 'Content-Type: application/json' \\  
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan?"}],"presence_penalty":0,"temperature":0,"top_p":0}'  
\`\`\`  
**Response Example**  
\`\`\`json  
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time)."},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}  
\`\`\`  
**Request Example**  
\`\`\`shell  
curl 'http://<replace with gateway public IP>/api/openai/v1/chat/completions' \\  
-H 'Accept: application/json, text/event-stream' \\  
-H 'Content-Type: application/json' \\  
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan?"},{"role":"assistant","content":" The current weather condition in Jinan is overcast, with a temperature of 31\xB0C. This information was last updated on August 9, 2024, at 15:12 (Beijing time)."},{"role":"user","content":"BeiJing?"}],"presence_penalty":0,"temperature":0,"top_p":0}'  
\`\`\`  
**Response Example**  
\`\`\`json  
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" The current weather condition in Beijing is overcast, with a temperature of 19\xB0C. This information was last updated on Sep 12, 2024, at 22:17 (Beijing time)."},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":999,"completion_tokens":76,"total_tokens":1075}}  
\`\`\`  
**Request Example**  
\`\`\`shell  
curl 'http://<replace with gateway public IP>/api/openai/v1/chat/completions' \\  
-H 'Accept: application/json, text/event-stream' \\  
-H 'Content-Type: application/json' \\  
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"What is the current weather in Jinan? Please indicate in Fahrenheit and respond in Japanese."}],"presence_penalty":0,"temperature":0,"top_p":0}'  
\`\`\`  
**Response Example**  
\`\`\`json  
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" \u73FE\u5728\u306E\u6D4E\u5357\u306E\u5929\u6C17\u306F\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}  
\`\`\`  
**Request Example**  
\`\`\`shell  
curl 'http://<replace with gateway public IP>/api/openai/v1/chat/completions' \\  
-H 'Accept: application/json, text/event-stream' \\  
-H 'Content-Type: application/json' \\  
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"Help me translate the following sentence into German: \\"Hail Hydra!\\""}],"presence_penalty":0,"temperature":0,"top_p":0}'  
\`\`\`  
**Response Example**  
\`\`\`json  
{"id":"65dcf12c-61ff-9e68-bffa-44fc9e6070d5","choices":[{"index":0,"message":{"role":"assistant","content":" The German translation of \\"Hail Hydra!\\" is \\"Hoch lebe Hydra!\\"."},"finish_reason":"stop"}],"created":1724043865,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":908,"completion_tokens":52,"total_tokens":960}}  
\`\`\`  

`},p=function(){return s},l=function(){return[{depth:2,slug:"functional-description",text:"Functional Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"basic-configuration",text:"Basic Configuration"},{depth:2,slug:"usage-example",text:"Usage Example"}]},e=c((u,m,h)=>{const{layout:f,...i}=n;return i.file=a,i.url=t,r`${v()}${E(s)}`})});export{e as Content,x as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
