/*! For license information please see c8858931.48a403b2.js.LICENSE.txt */
(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[5707],{1262:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var n=s(7294),i=s(2389);function r(e){let{children:t,fallback:s}=e;return(0,i.Z)()?n.createElement(n.Fragment,null,t?.()):s??null}},5138:(e,t,s)=>{"use strict";s.d(t,{$Q:()=>d,N$:()=>m,zx:()=>l,JO:()=>c,iR:()=>u});var n=s(7294),i=s(4184),r=s.n(i),a=s(1876);const o={type:"primary",link:"",target:"_self"},l=function(e){return void 0===e&&(e=o),n.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,a.Rg)(e.link,e.language)},e.children||null)},c=e=>{const{type:t}=e;return n.createElement("i",{className:r()({"docsite-icon":!0,[`docsite-icon-${t}`]:!0})})},m=e=>n.createElement("div",{className:r()({bone:!0,[`bone-${e.type}`]:!0})}),d=e=>{const{text:t,img:s}=e,i=r()({bar:!0});return n.createElement("div",{className:i},n.createElement("div",{className:"bar-body"},n.createElement("img",{src:(0,a.Rg)(s),className:"front-img"}),n.createElement("span",null,t),n.createElement("img",{src:(0,a.Rg)(s),className:"back-img"})))};var h=s(3935);class g extends n.Component{constructor(e){super(e),this.getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,s=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:h.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&s&&(e=Math.floor(t/s)),e||1},this.getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:s}=this.state,i=n.Children.count(t),r=Math.ceil(i/s);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e},this.changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})},this.renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,i=[],r=n.Children.count(e),a=Math.ceil(r/s);for(let n=0;n<a;n++)i.push(Array.from(e).slice(n*s,(n+1)*s));return n.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},i.map(((e,t)=>n.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,i)=>n.createElement("div",{className:"slider-item",key:i},n.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*s+i}`]=e}}))))))))},this.renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:s}=this.state,i=n.Children.count(e),a=Math.ceil(i/s),o=[];for(let l=0;l<a;l++)o.push(n.createElement("span",{key:l,className:r()({"slider-control-item":!0,"slider-control-item-active":l===t}),onClick:this.changeScreen.bind(this,l)}));return n.createElement("div",{className:"slider-control"},o)},this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,a.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}render(){return n.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const u=g;class p extends n.Component{constructor(e){super(e),this.changePage=e=>{this.setState({page:e})},this.renderSliderList=()=>{const{children:e,pageSize:t}=this.props,{page:s,pageWidth:n}=this.state,i=[],r=React.Children.count(e),a=Math.ceil(r/t);for(let o=0;o<a;o++)i.push(Array.from(e).slice(o*t,(o+1)*t));return React.createElement("div",{className:"slider-list",style:{transform:`translateX(-${s*n}px)`,transition:"transform 500ms ease",width:a*n}},i.map(((e,t)=>React.createElement("div",{className:"slider-page",style:{width:n},key:t},e.map(((e,t)=>React.createElement("div",{className:"slider-item",key:t},e)))))))},this.renderControl=()=>{const{children:e,pageSize:t}=this.props,{page:s}=this.state,n=React.Children.count(e),i=Math.ceil(n/t);return React.createElement("div",{className:"slider-control"},React.createElement("img",{className:classnames({"slider-control-prev":!0,"slider-control-prev-hidden":0===s}),src:getLink("/img/system/prev.png"),onClick:this.changePage.bind(this,s-1)}),React.createElement("img",{className:classnames({"slider-control-next":!0,"slider-control-next-hidden":s===i-1}),src:getLink("/img/system/next.png"),onClick:this.changePage.bind(this,s+1)}))},this.container=null,this.state={page:0,pageWidth:0}}componentDidMount(){const e=this.container.getBoundingClientRect().width;this.setState({pageWidth:e}),this.throttleAdjust=throttle((()=>{this.setState({pageWidth:this.container.getBoundingClientRect().width})}),200),window.addEventListener("resize",this.throttleAdjust)}componentWillUnmount(){window.removeEventListener("resize",this.throttleAdjust)}render(){return React.createElement("div",{className:"page-slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}var f=s(5999);(0,f.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),(0,f.I)({id:"homepage.footerVersionContent",message:"\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u4e91\u539f\u751f\u7f51\u5173\u89e3\u51b3\u65b9\u6848."}),(0,f.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),(0,f.I)({id:"homepage.footerDocListText1",message:"Higress \u662f\u4ec0\u4e48\uff1f"}),(0,f.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),(0,f.I)({id:"homepage.footerDocListText3",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),(0,f.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),(0,f.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),(0,f.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"})},8726:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(7294),i=s(5999),r=s(5138),a=s(1876),o=s(1262);const l={brandLogoUrl:"https://img.alicdn.com/imgextra/i1/O1CN01bmdCFQ1Zupzs0XIKc_!!6000000003255-55-tps-288-86.svg",briefIntroduction:(0,i.I)({id:"homepage.briefIntroduction",message:"\u4e00\u4e2a\u9075\u5faa\u5f00\u6e90Ingress/Gateway API\u6807\u51c6\uff0c\u63d0\u4f9b\u6d41\u91cf\u8c03\u5ea6\u3001\u670d\u52a1\u6cbb\u7406\u3001\u5b89\u5168\u9632\u62a4\u4e09\u5408\u4e00\u7684\u9ad8\u96c6\u6210\u3001\u6613\u4f7f\u7528\u3001\u6613\u6269\u5c55\u3001\u70ed\u66f4\u65b0\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\u3002"}),buttons:[{text:(0,i.I)({id:"homepage.quickstartButton",message:"\u5feb\u901f\u5165\u95e8"}),link:"/docs/user/quickstart",type:"primary"},{text:"GitHub",link:"https://github.com/alibaba/higress",type:"normal",target:"_blank"}],versionNote:{text:"Release Note of 1.3.0",link:"https://github.com/alibaba/higress/releases/tag/v1.3.0"},releaseDate:"Released on Nov 3, 2023"},c=e=>{let{language:t}=e;const[s,i]=n.useState({starCount:"",forkCount:""}),{starCount:c,forkCount:m}=s;return n.useEffect((()=>{fetch("//api.github.com/repos/alibaba/higress").then((e=>e.json())).then((e=>{i({starCount:`${e.stargazers_count}`,forkCount:`${e.forks_count}`})}))}),[]),n.createElement(o.Z,null,(()=>n.createElement("section",{className:"top-section"},n.createElement("div",{className:"top-body"},n.createElement("div",{className:"vertical-middle"},n.createElement("div",{className:"product-name"},n.createElement("img",{src:(0,a.Rg)(l.brandLogoUrl)})),n.createElement("p",{className:"product-desc"},l.briefIntroduction),n.createElement("div",{className:"button-area"},l.buttons.map((e=>n.createElement(r.zx,{type:e.type,key:e.text,link:e.link,target:e.target,language:t},e.text)))),n.createElement("div",{className:"github-buttons"},n.createElement("a",{href:"https://github.com/alibaba/higress",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"star"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),n.createElement("span",{className:"type"},"Star"),n.createElement("span",{className:"line"}),n.createElement("span",{className:"count"},c))),n.createElement("a",{href:"https://github.com/alibaba/higress/fork",target:"_blank",rel:"noopener noreferrer"},n.createElement("div",{className:"fork"},n.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),n.createElement("span",{className:"type"},"Fork"),n.createElement("span",{className:"line"}),n.createElement("span",{className:"count"},m)))),n.createElement("div",{className:"version-note"},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(0,a.Rg)(l.versionNote.link)},l.versionNote.text)))))))}},1876:(e,t,s)=>{"use strict";s.d(t,{P2:()=>n,Rg:()=>i});const n=(e,t)=>{let s=null;return function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];const a=this;clearTimeout(s),s=setTimeout((()=>{e.apply(a,i)}),t)}},i=(e,t)=>{if(`${e}`.length>1&&/^\/[^/]/.test(`${e}`)){if(!t){const e=window.location.pathname;if("/"!==e){const s=e.indexOf("/",1),n=e.substring(1,s);t=-1!==n.indexOf("-")?n:null}t=t||"default"}return`${window?.rootPath||""}/${"default"===t?"zh-cn":t}${e}`}return e}},4184:(e,t)=>{var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var a=i.apply(null,s);a&&e.push(a)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var o in s)n.call(s,o)&&s[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(t,[]))||(e.exports=s)}()}}]);