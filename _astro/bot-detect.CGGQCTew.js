import{c as i,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as y,m as E,u as c,__tla as F}from"./constant.CAV5GtKj.js";import{__tla as B}from"./astro/assets-service.tyfV9CK3.js";let a,l,e,n,o,r,t,b=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">bot-detect</code>\u63D2\u4EF6\u53EF\u4EE5\u7528\u4E8E\u8BC6\u522B\u5E76\u963B\u6B62\u4E92\u8054\u7F51\u722C\u866B\u5BF9\u7AD9\u70B9\u8D44\u6E90\u7684\u722C\u53D6</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u6388\u6743\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">310</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>allow</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u5339\u914D User-Agent \u8BF7\u6C42\u5934\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u547D\u4E2D\u65F6\u5C06\u5141\u8BB8\u5176\u8BBF\u95EE</td></tr><tr><td>deny</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u5339\u914D User-Agent \u8BF7\u6C42\u5934\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u547D\u4E2D\u65F6\u5C06\u5C4F\u853D\u8BF7\u6C42</td></tr><tr><td>blocked_code</td><td>number</td><td>\u9009\u586B</td><td>403</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td></tr><tr><td>blocked_message</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body</td></tr></tbody></table>
<p><code dir="auto">allow</code> \u548C <code dir="auto">deny</code> \u5B57\u6BB5\u53EF\u4EE5\u5747\u4E0D\u914D\u7F6E\uFF0C\u5219\u6267\u884C\u9ED8\u8BA4\u7684\u722C\u866B\u5224\u65AD\u903B\u8F91\uFF0C\u901A\u8FC7\u914D\u7F6E <code dir="auto">allow</code> \u5B57\u6BB5\u53EF\u4EE5\u5C06\u539F\u672C\u547D\u4E2D\u9ED8\u8BA4\u722C\u866B\u5224\u65AD\u903B\u8F91\u7684\u8BF7\u6C42\u653E\u884C\uFF0C\u901A\u8FC7\u914D\u7F6E <code dir="auto">deny</code> \u5B57\u6BB5\u53EF\u4EE5\u589E\u52A0\u989D\u5916\u7684\u722C\u866B\u5224\u65AD\u903B\u8F91\u3002</p>
<p>\u9ED8\u8BA4\u7684\u722C\u866B\u5224\u65AD\u6B63\u5219\u8868\u8FBE\u5F0F\u96C6\u5408\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">))[/ ](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots General matcher 'name 0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\/</span><span style="--0:#E1E4E8">[A-Za-z0-9</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">]+</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">) {</span><span style="--0:#B392F0">0,5}([A-Za-z0-9</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\-</span><span style="--0:#9ECBFF">_</span><span style="--0:#79B8FF">\\!\\[\\]</span><span style="--0:#9ECBFF">:]{0,50}</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:[Aa]rchiver</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ii]ndexer</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]craper</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc]rawl[a-z]{</span><span style="--0:#B392F0">0,50}</span><span style="--0:#E1E4E8">)) (</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots containing spider|scrape|bot(but not CUBOT)|Crawl</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">((</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z</span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">1</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">?|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8"> the </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[Ss][Pp][Ii][Dd][Ee][Rr]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Ss]crape</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Cc][Rr][Aa][Ww][Ll])[A</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">z0</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">]{</span><span style="--0:#79B8FF">0</span><span style="--0:#F97583">,</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">})(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">?:</span><span style="--0:#E1E4E8">[ </span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> v)(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">\\d</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8"># Bots Pattern '/name-0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">/((?:Ant-</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Bb]ot</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[A-z]+[Ss]pider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Axtaris</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">fetchurl</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Isara</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ShopSalad</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Tailsweep</span><span style="--0:#E1E4E8">)[ </span><span style="--0:#79B8FF">\\-</span><span style="--0:#E1E4E8">](</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">))</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">?</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Bots Pattern 'name/0.0'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">\\b(008</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Altresium</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Argus</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BaiduMobaider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BoardReader</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DNSGroup</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">DataparkSearch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">EDI</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Goodzer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Grub</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">INGRID</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Infohelfer</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LinkedInBot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">LOOQ</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Nutch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">OgScrper</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PathDefender</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Peew</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">PostPost</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Steeler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Twitterbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">VSE</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebCrunch</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">WebZIP</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Y!J-BR[A-Z]</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">YahooSeeker</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">envolk</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">sproose</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">wminer</span><span style="--0:#E1E4E8">)/(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">\\.</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">\\d+</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)(?:\\.(\\d+)|)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># More bots</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">CSimpleSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Cityreview</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Robot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlDaddy</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">CrawlFire</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Finderbots</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Index</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Job</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Roboter</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">KiwiStatus</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Lijit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">QuerySeekerSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">ScollSpider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Trends</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">USyd-NLP-Spider</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">SiteCat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Webbot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">BotName\\/\\$BotVersion</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">123metaspider-Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">1470\\.net</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">crawler</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">50\\.nu</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">8bo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Crawler</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Aboundex</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Accoona-[A-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#B392F0">-Agent</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AdsBot-Google(?:-[a-z]</span><span style="--0:#9ECBFF">{1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">altavista</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">AppEngine-Google</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archive.</span><span style="--0:#9ECBFF">{0,30}</span><span style="--0:#B392F0">\\.org_bot</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">archiver</span><span style="--0:#F97583">|</span><span style="--0:#B392F0">Ask</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Jeeves</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">[Bb]ai[Dd]u[Ss]pider(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#E1E4E8">)(</span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">:-[A-Za-z]{</span><span style="--0:#B392F0">1,30}</span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8">)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="(?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)\x7F    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)\x7F    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?\x7F    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)\x7F    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u653E\u884C\u539F\u672C\u547D\u4E2D\u722C\u866B\u89C4\u5219\u7684\u8BF7\u6C42">\u653E\u884C\u539F\u672C\u547D\u4E2D\u722C\u866B\u89C4\u5219\u7684\u8BF7\u6C42</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">".*Go-http-client.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- &#x22;.*Go-http-client.*&#x22;"><div></div></button></div></figure></div>
<p>\u82E5\u4E0D\u4F5C\u8BE5\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u7684 Golang \u7F51\u7EDC\u5E93\u8BF7\u6C42\u4F1A\u88AB\u89C6\u505A\u722C\u866B\uFF0C\u88AB\u7981\u6B62\u8BBF\u95EE</p>
<h3 id="\u589E\u52A0\u722C\u866B\u5224\u65AD">\u589E\u52A0\u722C\u866B\u5224\u65AD</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"spd-tools.*"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="deny:\x7F- &#x22;spd-tools.*&#x22;"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools/1.1'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'User-Agent: spd-tools'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;User-Agent: spd-tools/1.1&#x27;\x7Fcurl http://exmaple.com -H &#x27;User-Agent: spd-tools&#x27;"><div></div></button></div></figure></div>`,n={title:"Bot \u62E6\u622A",keywords:["higress","bot detect"],description:"Bot \u62E6\u622A\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/bot-detect.md",t=void 0,r=function(){return`

## \u529F\u80FD\u8BF4\u660E

\`bot-detect\`\u63D2\u4EF6\u53EF\u4EE5\u7528\u4E8E\u8BC6\u522B\u5E76\u963B\u6B62\u4E92\u8054\u7F51\u722C\u866B\u5BF9\u7AD9\u70B9\u8D44\u6E90\u7684\u722C\u53D6

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u6388\u6743\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`310\`


## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  allow     |  array of string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u5339\u914D User-Agent \u8BF7\u6C42\u5934\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u547D\u4E2D\u65F6\u5C06\u5141\u8BB8\u5176\u8BBF\u95EE   |
|  deny     |  array of string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u5339\u914D User-Agent \u8BF7\u6C42\u5934\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u547D\u4E2D\u65F6\u5C06\u5C4F\u853D\u8BF7\u6C42   |
|  blocked_code     |  number     | \u9009\u586B     |   403  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801   |
|  blocked_message     |  string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body   |

\`allow\` \u548C \`deny\` \u5B57\u6BB5\u53EF\u4EE5\u5747\u4E0D\u914D\u7F6E\uFF0C\u5219\u6267\u884C\u9ED8\u8BA4\u7684\u722C\u866B\u5224\u65AD\u903B\u8F91\uFF0C\u901A\u8FC7\u914D\u7F6E \`allow\` \u5B57\u6BB5\u53EF\u4EE5\u5C06\u539F\u672C\u547D\u4E2D\u9ED8\u8BA4\u722C\u866B\u5224\u65AD\u903B\u8F91\u7684\u8BF7\u6C42\u653E\u884C\uFF0C\u901A\u8FC7\u914D\u7F6E \`deny\` \u5B57\u6BB5\u53EF\u4EE5\u589E\u52A0\u989D\u5916\u7684\u722C\u866B\u5224\u65AD\u903B\u8F91\u3002

\u9ED8\u8BA4\u7684\u722C\u866B\u5224\u65AD\u6B63\u5219\u8868\u8FBE\u5F0F\u96C6\u5408\u5982\u4E0B\uFF1A

\`\`\`bash
# Bots General matcher 'name/0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50}))[/ ](\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots General matcher 'name 0.0'
    (?:\\/[A-Za-z0-9\\.]+|) {0,5}([A-Za-z0-9 \\-_\\!\\[\\]:]{0,50}(?:[Aa]rchiver|[Ii]ndexer|[Ss]craper|[Bb]ot|[Ss]pider|[Cc]rawl[a-z]{0,50})) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)
# Bots containing spider|scrape|bot(but not CUBOT)|Crawl
    ((?:[A-z0-9]{1,50}|[A-z\\-]{1,50} ?|)(?: the |)(?:[Ss][Pp][Ii][Dd][Ee][Rr]|[Ss]crape|[Cc][Rr][Aa][Ww][Ll])[A-z0-9]{0,50})(?:(?:[ /]| v)(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)|)
# Bots Pattern '/name-0.0'
    /((?:Ant-)?Nutch|[A-z]+[Bb]ot|[A-z]+[Ss]pider|Axtaris|fetchurl|Isara|ShopSalad|Tailsweep)[ \\-](\\d+)(?:\\.(\\d+)(?:\\.(\\d+))?)?
# Bots Pattern 'name/0.0'
    \\b(008|Altresium|Argus|BaiduMobaider|BoardReader|DNSGroup|DataparkSearch|EDI|Goodzer|Grub|INGRID|Infohelfer|LinkedInBot|LOOQ|Nutch|OgScrper|PathDefender|Peew|PostPost|Steeler|Twitterbot|VSE|WebCrunch|WebZIP|Y!J-BR[A-Z]|YahooSeeker|envolk|sproose|wminer)/(\\d+)(?:\\.(\\d+)|)(?:\\.(\\d+)|)
# More bots
    (CSimpleSpider|Cityreview Robot|CrawlDaddy|CrawlFire|Finderbots|Index crawler|Job Roboter|KiwiStatus Spider|Lijit Crawler|QuerySeekerSpider|ScollSpider|Trends Crawler|USyd-NLP-Spider|SiteCat Webbot|BotName\\/\\$BotVersion|123metaspider-Bot|1470\\.net crawler|50\\.nu|8bo Crawler Bot|Aboundex|Accoona-[A-z]{1,30}-Agent|AdsBot-Google(?:-[a-z]{1,30}|)|altavista|AppEngine-Google|archive.{0,30}\\.org_bot|archiver|Ask Jeeves|[Bb]ai[Dd]u[Ss]pider(?:-[A-Za-z]{1,30})(?:-[A-Za-z]{1,30}|)|bingbot|BingPreview|blitzbot|BlogBridge|Bloglovin|BoardReader Blog Indexer|BoardReader Favicon Fetcher|boitho.com-dc|BotSeer|BUbiNG|\\b\\w{0,30}favicon\\w{0,30}\\b|\\bYeti(?:-[a-z]{1,30}|)|Catchpoint(?: bot|)|[Cc]harlotte|Checklinks|clumboot|Comodo HTTP\\(S\\) Crawler|Comodo-Webinspector-Crawler|ConveraCrawler|CRAWL-E|CrawlConvera|Daumoa(?:-feedfetcher|)|Feed Seeker Bot|Feedbin|findlinks|Flamingo_SearchEngine|FollowSite Bot|furlbot|Genieo|gigabot|GomezAgent|gonzo1|(?:[a-zA-Z]{1,30}-|)Googlebot(?:-[a-zA-Z]{1,30}|)|Google SketchUp|grub-client|gsa-crawler|heritrix|HiddenMarket|holmes|HooWWWer|htdig|ia_archiver|ICC-Crawler|Icarus6j|ichiro(?:/mobile|)|IconSurf|IlTrovatore(?:-Setaccio|)|InfuzApp|Innovazion Crawler|InternetArchive|IP2[a-z]{1,30}Bot|jbot\\b|KaloogaBot|Kraken|Kurzor|larbin|LEIA|LesnikBot|Linguee Bot|LinkAider|LinkedInBot|Lite Bot|Llaut|lycos|Mail\\.RU_Bot|masscan|masidani_bot|Mediapartners-Google|Microsoft .{0,30} Bot|mogimogi|mozDex|MJ12bot|msnbot(?:-media {0,2}|)|msrbot|Mtps Feed Aggregation System|netresearch|Netvibes|NewsGator[^/]{0,30}|^NING|Nutch[^/]{0,30}|Nymesis|ObjectsSearch|OgScrper|Orbiter|OOZBOT|PagePeeker|PagesInventory|PaxleFramework|Peeplo Screenshot Bot|PlantyNet_WebRobot|Pompos|Qwantify|Read%20Later|Reaper|RedCarpet|Retreiver|Riddler|Rival IQ|scooter|Scrapy|Scrubby|searchsight|seekbot|semanticdiscovery|SemrushBot|Simpy|SimplePie|SEOstats|SimpleRSS|SiteCon|Slackbot-LinkExpanding|Slack-ImgProxy|Slurp|snappy|Speedy Spider|Squrl Java|Stringer|TheUsefulbot|ThumbShotsBot|Thumbshots\\.ru|Tiny Tiny RSS|Twitterbot|WhatsApp|URL2PNG|Vagabondo|VoilaBot|^vortex|Votay bot|^voyager|WASALive.Bot|Web-sniffer|WebThumb|WeSEE:[A-z]{1,30}|WhatWeb|WIRE|WordPress|Wotbox|www\\.almaden\\.ibm\\.com|Xenu(?:.s|) Link Sleuth|Xerka [A-z]{1,30}Bot|yacy(?:bot|)|YahooSeeker|Yahoo! Slurp|Yandex\\w{1,30}|YodaoBot(?:-[A-z]{1,30}|)|YottaaMonitor|Yowedo|^Zao|^Zao-Crawler|ZeBot_www\\.ze\\.bz|ZooShot|ZyBorg)(?:[ /]v?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)|)|)|)
\`\`\`

## \u914D\u7F6E\u793A\u4F8B

### \u653E\u884C\u539F\u672C\u547D\u4E2D\u722C\u866B\u89C4\u5219\u7684\u8BF7\u6C42
\`\`\`yaml
allow:
- ".*Go-http-client.*"
\`\`\`

\u82E5\u4E0D\u4F5C\u8BE5\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u7684 Golang \u7F51\u7EDC\u5E93\u8BF7\u6C42\u4F1A\u88AB\u89C6\u505A\u722C\u866B\uFF0C\u88AB\u7981\u6B62\u8BBF\u95EE


### \u589E\u52A0\u722C\u866B\u5224\u65AD
\`\`\`yaml
deny:
- "spd-tools.*"
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com -H 'User-Agent: spd-tools/1.1'
curl http://exmaple.com -H 'User-Agent: spd-tools'
\`\`\`
`},l=function(){return s},o=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u653E\u884C\u539F\u672C\u547D\u4E2D\u722C\u866B\u89C4\u5219\u7684\u8BF7\u6C42",text:"\u653E\u884C\u539F\u672C\u547D\u4E2D\u722C\u866B\u89C4\u5219\u7684\u8BF7\u6C42"},{depth:3,slug:"\u589E\u52A0\u722C\u866B\u5224\u65AD",text:"\u589E\u52A0\u722C\u866B\u5224\u65AD"}]},a=i((h,S,v)=>{const{layout:g,...p}=n;return p.file=e,p.url=t,y`${E()}${c(s)}`})});export{a as Content,b as __tla,l as compiledContent,a as default,e as file,n as frontmatter,o as getHeadings,r as rawContent,t as url};
