var l=Object.defineProperty;var u=(i,t,e)=>t in i?l(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var r=(i,t,e)=>u(i,typeof t!="symbol"?t+"":t,e);import{__tla as m}from"./hoisted.RO3iSSZ8.js";import{__tla as p}from"./MenuContainer.astro_astro_type_script_index_0_lang.AQa33h_S.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as h}from"./astro/assets-service.BSoMdJpH.js";import{__tla as g}from"./constant.g30B-mQw.js";import"./index.CTbVEFV3.js";Promise.all([(()=>{try{return m}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{document.addEventListener("DOMContentLoaded",()=>{function e(){const n=document.querySelector(".media-container");window.innerWidth<=768?n.innerHTML=`
          <div id="background-image" class="image-background" 
               style="background-image: url('https://img.alicdn.com/imgextra/i1/O1CN01U3PG171Wiz4B85TGK_!!6000000002823-0-tps-2388-1168.jpg');"></div>
        `:n.innerHTML=`
          <video
            id="background-video"
            autoplay
            muted
            loop
            class="video-background"
            poster="https://img.alicdn.com/imgextra/i1/O1CN01U3PG171Wiz4B85TGK_!!6000000002823-0-tps-2388-1168.jpg"
          >
            <source
              src="https://cloud.video.taobao.com/vod/play/V3VEOGxHS3IxSU5wWkFYeTFuZU4wdHJ2eXloK1g1aXlXV0pvNU0zVjhmYTZQZWw1SnpKVVVCTlh4OVFON0V5UUVMUDduY1RJak82VE1sdXdHTjNOaHc9PQ"
              type="video/mp4"
            />
          </video>
        `}e(),window.addEventListener("resize",e)});class i extends HTMLElement{constructor(){super()}}customElements.define("use-companies",i);class t extends HTMLElement{constructor(){super();r(this,"cardSolution",null);r(this,"currentInputid");r(this,"flag");this.currentInputid="c0",this.flag=!0}connectedCallback(){var a=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(c){a.selectedLabel(c)})}selectedLabel(a){var c=this,d=a.target.closest("[input-id]"),o=d?d.getAttribute("input-id"):null;if(this.flag&&o&&o!==this.currentInputid){this.currentInputid=o,this.flag=!1,setTimeout(function(){c.flag=!0},200);var s=this.querySelector("input[type=radio]#"+o);s&&!s.checked&&(s.checked=!0)}}}customElements.define("card-solution",t)});
