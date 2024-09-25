const e="latest/zh-cn/plugins/security/bot-detect.md",o="docs",t="latest/zh-cn/plugins/security/bot-detect",r=`

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
`,a={title:"Bot \u62E6\u622A",description:"Bot \u62E6\u622A\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","bot detect"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/bot-detect.md",rawData:void 0};export{i as _internal,r as body,o as collection,a as data,e as id,t as slug};
