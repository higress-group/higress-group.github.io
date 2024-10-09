const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.Bma7TA7a.js","_astro/_commonjsHelpers.BosuxZz1.js","_astro/index.BFpCFCfM.js","_astro/bundle-mjs.CvwO_xnS.js","_astro/preact.module.DSP1G4xJ.js","_astro/hooks.module.Citze9Tm.js","_astro/tailwind.D7d5gN0n.css","_astro/style.reoAutvJ.css"])))=>i.map(i=>d[i]);
var ye=Object.defineProperty;var we=(u,l,f)=>l in u?ye(u,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):u[l]=f;var y=(u,l,f)=>we(u,typeof l!="symbol"?l+"":l,f);let g,q,k,_,F,z,D,L,H,G,B,V,J,S,w,Q,X,Y,K,Z,ee,be=(async()=>{let u,l,f,I,M,N,j,E,O;u="modulepreload",l=function(e){return"/"+e},f={},L=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),a=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));r=Promise.all(t.map(s=>{if(s=l(s),s in f)return;f[s]=!0;const o=s.endsWith(".css"),p=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":u,o||(c.as="script",c.crossOrigin=""),c.href=s,a&&c.setAttribute("nonce",a),document.head.appendChild(c),o)return new Promise(($,d)=>{c.addEventListener("load",$),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>e()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})},z={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},B={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(e,t,i,r)=>`Unable to render \`${e}\`.

${r>0?`There ${i?"are":"is"} ${r} renderer${i?"s":""} configured in your \`astro.config.mjs\` file,
but ${i?"none were":"it was not"} able to server-side render \`${e}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:e=>`Did you mean to enable the ${e} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`},J={name:"NoClientEntrypoint",title:"No client entrypoint specified in renderer.",message:(e,t,i)=>`\`${e}\` component has a \`client:${t}\` directive, but no client entrypoint was provided by \`${i}\`.`,hint:"See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."},V={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:e=>`Unable to render \`${e}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:e=>`Did you mean to pass \`client:only="${e}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},D={name:"NoMatchingImport",title:"No import found for component.",message:e=>`Could not render \`${e}\`. No matching import has been found for \`${e}\`.`,hint:"Please make sure the component is properly imported."},F={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},K={name:"ImageMissingAlt",title:'Image missing required "alt" property.',message:'Image missing "alt" property. "alt" text is required to describe important images on the page.',hint:'Use an empty string ("") for decorative images.'},Y={name:"InvalidImageService",title:"Error while loading image service.",message:"There was an error loading the configured image service. Please see the stack trace for more information."},I={name:"MissingImageDimension",title:"Missing image dimensions",message:(e,t)=>`Missing ${e==="both"?"width and height attributes":`${e} attribute`} for ${t}. When using remote images, both dimensions are required unless in order to avoid CLS.`,hint:"If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions."},_={name:"FailedToFetchRemoteImageDimensions",title:"Failed to retrieve remote image dimensions",message:e=>`Failed to get the dimensions for ${e}.`,hint:"Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder."},M={name:"UnsupportedImageFormat",title:"Unsupported image format",message:(e,t,i)=>`Received unsupported format \`${e}\` from \`${t}\`. Currently only ${i.join(", ")} are supported by our image services.`,hint:"Using an `img` tag directly instead of the `Image` component might be what you're looking for."},N={name:"UnsupportedImageConversion",title:"Unsupported image conversion",message:"Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported."},S={name:"ExpectedImage",title:"Expected src to be an image.",message:(e,t,i)=>`Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e}\` (type: \`${t}\`).

Full serialized options received: \`${i}\`.`,hint:"This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it."},k={name:"ExpectedImageOptions",title:"Expected image options.",message:e=>`Expected getImage() parameter to be an object. Received \`${e}\`.`},j={name:"IncompatibleDescriptorOptions",title:"Cannot set both `densities` and `widths`",message:"Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.",hint:"Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors."},E={name:"LocalImageUsedWrongly",title:"Local images must be imported.",message:e=>`\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e}\`.`,hint:"If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property."},H={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:e=>`\`Astro.glob(${e})\` can only be used in \`.astro\` files. \`import.meta.glob(${e})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"},G={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:e=>`\`Astro.glob(${e})\` did not return any matching files.`,hint:"Check the pattern for typos."},O={name:"MissingSharp",title:"Could not find Sharp.",message:"Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.",hint:"See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service."};function te(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function ie(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const i=te(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),r=[];for(let s=-2;s<=2;s++)i[t.line+s]&&r.push(t.line+s);let n=0;for(const s of r){let o=`> ${s}`;o.length>n&&(n=o.length)}let a="";for(const s of r){const o=s===t.line-1;a+=o?"> ":"  ",a+=`${s+1} | ${i[s]}
`,o&&(a+=`${Array.from({length:n}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return a}g=class extends Error{constructor(t,i){const{name:r,title:n,message:a,stack:s,location:o,hint:p,frame:c}=t;super(a,i);y(this,"loc");y(this,"title");y(this,"hint");y(this,"frame");y(this,"type","AstroError");this.title=n,this.name=r,a&&(this.message=a),this.stack=s||this.stack,this.loc=o,this.hint=p,this.frame=c}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,i){this.frame=ie(t,i)}static is(t){return t.type==="AstroError"}};function re(e){return e.endsWith("/")?e.slice(0,e.length-1):e}function ne(e){return e.startsWith("/")?e.substring(1):e}function se(e){return e.replace(/^\/|\/$/g,"")}function oe(e){return typeof e=="string"||e instanceof String}function ae(...e){return e.filter(oe).map((t,i)=>i===0?re(t):i===e.length-1?ne(t):se(t)).join("/")}function R(e){return/^(?:http|ftp|https|ws):?\/\//.test(e)||e.startsWith("data:")}let W,A;W=["jpeg","jpg","png","tiff","webp","gif","svg","avif"],A="webp",q=["src","width","height","format","quality"],w=function(e){return typeof e=="object"},X=function(e){return typeof e=="string"},Z=async function(e){var t;return typeof e=="object"&&"then"in e?(t=(await e).default)!=null?t:await e:e};function ce(e,t){return he(e,t.protocol)&&C(e,t.hostname,!0)&&me(e,t.port)&&le(e,t.pathname)}function me(e,t){return!t||t===e.port}function he(e,t){return!t||t===e.protocol.slice(0,-1)}function C(e,t,i){if(t){if(!i||!t.startsWith("*"))return t===e.hostname;if(t.startsWith("**.")){const r=t.slice(2);return r!==e.hostname&&e.hostname.endsWith(r)}else if(t.startsWith("*.")){const r=t.slice(1);return e.hostname.replace(r,"").split(".").filter(Boolean).length===1}}else return!0;return!1}function le(e,t,i){if(t)if(t.endsWith("*")){if(t.endsWith("/**")){const r=t.slice(0,-2);return r!==e.pathname&&e.pathname.startsWith(r)}else if(t.endsWith("/*")){const r=t.slice(0,-1);return e.pathname.replace(r,"").split("/").filter(Boolean).length===1}}else return t===e.pathname;else return!0;return!1}function de(e,{domains:t=[],remotePatterns:i=[]}){if(!R(e))return!1;const r=new URL(e);return t.some(n=>C(r,n))||i.some(n=>ce(r,n))}Q=function(e){return e?"transform"in e:!1};function ge(e){let t=parseInt(e);return Number.isNaN(t)?e:t}const b={propertiesToHash:q,validateOptions(e){if(!e.src||typeof e.src!="string"&&typeof e.src!="object")throw new g({...S,message:S.message(JSON.stringify(e.src),typeof e.src,JSON.stringify(e,(t,i)=>i===void 0?null:i))});if(w(e.src)){if(!W.includes(e.src.format))throw new g({...M,message:M.message(e.src.format,e.src.src,W)});if(e.widths&&e.densities)throw new g(j);if(e.src.format==="svg"&&(e.format="svg"),e.src.format==="svg"&&e.format!=="svg"||e.src.format!=="svg"&&e.format==="svg")throw new g(N)}else{if(e.src.startsWith("/@fs/")||!R(e.src)&&!e.src.startsWith("/"))throw new g({...E,message:E.message(e.src)});let t;if(!e.width&&!e.height?t="both":!e.width&&e.height?t="width":e.width&&!e.height&&(t="height"),t)throw new g({...I,message:I.message(t,e.src)})}return e.format||(e.format=A),e.width&&(e.width=Math.round(e.width)),e.height&&(e.height=Math.round(e.height)),e},getHTMLAttributes(e){var v,h;const{targetWidth:t,targetHeight:i}=P(e),{src:r,width:n,height:a,format:s,quality:o,densities:p,widths:c,formats:$,...d}=e;return{...d,width:t,height:i,loading:(v=d.loading)!=null?v:"lazy",decoding:(h=d.decoding)!=null?h:"async"}},getSrcSet(e){var v;const t=[],{targetWidth:i}=P(e),{widths:r,densities:n}=e,a=(v=e.format)!=null?v:A;let s=e.width,o=1/0;w(e.src)&&(s=e.src.width,o=s);const{width:p,height:c,...$}=e,d=[];if(n){const h=n.map(m=>typeof m=="number"?m:parseFloat(m)),U=h.sort().map(m=>Math.round(i*m));d.push(...U.map((m,pe)=>({maxTargetWidth:Math.min(m,o),descriptor:`${h[pe]}x`})))}else r&&d.push(...r.map(h=>({maxTargetWidth:Math.min(h,o),descriptor:`${h}w`})));for(const{maxTargetWidth:h,descriptor:U}of d){const m={...$};h!==s?m.width=h:e.width&&e.height&&(m.width=e.width,m.height=e.height),t.push({transform:m,descriptor:U,attributes:{type:`image/${a}`}})}return t},getURL(e,t){const i=new URLSearchParams;if(w(e.src))i.append("href",e.src.src);else if(de(e.src,t))i.append("href",e.src);else return e.src;return Object.entries({w:"width",h:"height",q:"quality",f:"format"}).forEach(([r,n])=>{e[n]&&i.append(r,e[n].toString())}),`${ae("/","/_image")}?${i}`},parseURL(e){const t=e.searchParams;return t.has("href")?{src:t.get("href"),width:t.has("w")?parseInt(t.get("w")):void 0,height:t.has("h")?parseInt(t.get("h")):void 0,format:t.get("f"),quality:t.get("q")}:void 0}};function P(e){let t=e.width,i=e.height;if(w(e.src)){const r=e.src.width/e.src.height;i&&!t?t=Math.round(i*r):t&&!i?i=Math.round(t/r):!t&&!i&&(t=e.src.width,i=e.src.height)}return{targetWidth:t,targetHeight:i}}let x;const T={low:25,mid:50,high:80,max:100};async function ue(){let e;try{e=(await L(async()=>{const{default:t}=await import("../index.Bma7TA7a.js").then(i=>i.i);return{default:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]))).default}catch{throw new g(O)}return e.cache(!1),e}var fe={validateOptions:b.validateOptions,getURL:b.getURL,parseURL:b.parseURL,getHTMLAttributes:b.getHTMLAttributes,getSrcSet:b.getSrcSet,async transform(e,t,i){x||(x=await ue());const r=t;if(r.format==="svg")return{data:e,format:"svg"};const n=x(e,{failOnError:!1,pages:-1,limitInputPixels:i.service.config.limitInputPixels});if(n.rotate(),r.height&&!r.width?n.resize({height:Math.round(r.height)}):r.width&&n.resize({width:Math.round(r.width)}),r.format){let o;if(r.quality){const p=ge(r.quality);typeof p=="number"?o=p:o=r.quality in T?T[r.quality]:void 0}n.toFormat(r.format,{quality:o})}const{data:a,info:s}=await n.toBuffer({resolveWithObject:!0});return{data:a,format:s.format}}};ee=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}))})();export{g as A,q as D,k as E,_ as F,F as I,z as M,D as N,L as _,be as __tla,H as a,G as b,B as c,V as d,J as e,S as f,w as g,Q as h,X as i,Y as j,K as k,Z as r,ee as s};
