var u=Object.defineProperty;var h=(l,o,c)=>o in l?u(l,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[o]=c;var a=(l,o,c)=>h(l,typeof o!="symbol"?o+"":o,c);import{__tla as m}from"./hoisted.XstDD23q.js";import{__tla as p}from"./MenuContainer.astro_astro_type_script_index_0_lang.DsoXJkKM.js";import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{__tla as g}from"./astro/assets-service.tyfV9CK3.js";import{__tla as y}from"./constant.BM2MCpQA.js";import"./index.CTbVEFV3.js";Promise.all([(()=>{try{return m}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{document.addEventListener("DOMContentLoaded",()=>{function r(){const e=document.querySelector(".media-container");window.innerWidth<=768?e.innerHTML=`
          <div id="background-image" class="image-background"
               style="background-image: url('https://img.alicdn.com/imgextra/i1/O1CN01U3PG171Wiz4B85TGK_!!6000000002823-0-tps-2388-1168.jpg');"></div>
        `:e.innerHTML=`
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
        `}r(),window.addEventListener("resize",r)});class l extends HTMLElement{constructor(){super()}}customElements.define("use-companies",l);class o extends HTMLElement{constructor(){super();a(this,"cardSolution",null);a(this,"currentInputid");a(this,"flag");this.currentInputid="c0",this.flag=!0}connectedCallback(){var i=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(t){i.selectedLabel(t)})}selectedLabel(i){var t=this,s=i.target.closest("[input-id]"),n=s?s.getAttribute("input-id"):null;if(this.flag&&n&&n!==this.currentInputid){this.currentInputid=n,this.flag=!1,setTimeout(function(){t.flag=!0},200);var d=this.querySelector("input[type=radio]#"+n);d&&!d.checked&&(d.checked=!0)}}}customElements.define("card-solution",o),document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".lazy-video");if("IntersectionObserver"in window){let e=new IntersectionObserver((i,t)=>{i.forEach(s=>{if(s.isIntersecting){const n=s.target;n.src=n.getAttribute("data-src"),n.load(),n.classList.remove("lazy-video"),e.unobserve(n)}})});r.forEach(i=>{e.observe(i)})}else r.forEach(e=>{e.src=e.getAttribute("data-src"),e.load()})});class c extends HTMLElement{constructor(){super(),this.currentId="i0",this.flagState=!0}toggleFullScreen(e){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}connectedCallback(){var e=this;this.cardSolution=this.querySelector(".media-container"),this.videoPlayButtons=this.querySelector(".video-play-bt");const i=this.querySelectorAll("video");e.setInitialCheckedState(),this.cardSolution&&this.cardSolution.addEventListener("click",function(t){e.selectedLabel(t)}),i.forEach(t=>{t.addEventListener("play",s=>this.onPlay(s)),t.addEventListener("pause",s=>this.onPause(s))}),this.cardSolution.addEventListener("click",t=>{t.target.closest(".video-play-bt")?(t.stopPropagation(),this.toggleVideoPlay(t)):t.target.tagName==="LABEL"&&this.selectedLabel(t)}),this.cardSolution.addEventListener("click",t=>{if(t.target.closest(".fullscreen-btn")){t.stopPropagation();const s=t.target.closest("[video-id]").getAttribute("video-id"),n=this.querySelector(`#${s}`);n&&this.toggleFullScreen(n)}})}setInitialCheckedState(){let e=this.querySelector("input[type=radio]#i0");e&&(e.checked=!0)}toggleVideoPlay(e){const i=e.target.closest("[video-id]").getAttribute("video-id"),t=this.querySelector(`#${i}`);t&&(t.paused?(this.pauseOtherVideos(i),t.play(),this.onPlay(e)):(t.pause(),this.onPause(e)))}pauseOtherVideos(e){this.querySelectorAll("video").forEach(i=>{i.id!==e&&(i.pause(),this.onPause({target:i}))})}onPlay(e){const i=e.target.id,t=this.querySelector(`[video-id='${i}'] .play-icon`),s=this.querySelector(`[video-id='${i}'] .pause-icon`);t&&s&&(t.style.display="none",s.style.display="inline")}onPause(e){const i=e.target.id,t=this.querySelector(`[video-id='${i}'] .play-icon`),s=this.querySelector(`[video-id='${i}'] .pause-icon`);t&&s&&(t.style.display="inline",s.style.display="none")}selectedLabel(e){var i=this,t=e.target.getAttribute("input-id");if(this.flagState&&t&&t!==this.currentId){this.currentId=t,this.flagState=!1,setTimeout(function(){i.flagState=!0},200);var s=this.querySelector("input[type=radio]#"+t);s&&!s.checked&&(s.checked=!0)}}}customElements.define("card-player",c)});
