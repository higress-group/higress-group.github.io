import{l as S}from"./preact.module.DSP1G4xJ.js";var a,u,H,A,v=0,F=[],o=S,b=o.__b,q=o.__r,T=o.diffed,U=o.__c,k=o.unmount,x=o.__;function l(_,n){o.__h&&o.__h(u,_,v||n),v=0;var t=u.__H||(u.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function j(_){return v=1,C(V,_)}function C(_,n,t){var r=l(a++,2);if(r.t=_,!r.__c&&(r.__=[t?t(n):V(void 0,n),function(i){var e=r.__N?r.__N[0]:r.__[0],f=r.t(e,i);e!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=u,!u.u)){var h=function(i,e,f){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(c){return!!c.__c});if(m.every(function(c){return!c.__N}))return!s||s.call(this,i,e,f);var y=!1;return m.forEach(function(c){if(c.__N){var W=c.__[0];c.__=c.__N,c.__N=void 0,W!==c.__[0]&&(y=!0)}}),!(!y&&r.__c.props===i)&&(!s||s.call(this,i,e,f))};u.u=!0;var s=u.shouldComponentUpdate,g=u.componentWillUpdate;u.componentWillUpdate=function(i,e,f){if(this.__e){var m=s;s=void 0,h(i,e,f),s=m}g&&g.call(this,i,e,f)},u.shouldComponentUpdate=h}return r.__N||r.__}function w(_,n){var t=l(a++,3);!o.__s&&E(t.__H,n)&&(t.__=_,t.i=n,u.__H.__h.push(t))}function D(_,n){var t=l(a++,4);!o.__s&&E(t.__H,n)&&(t.__=_,t.i=n,u.__h.push(t))}function z(_){return v=5,d(function(){return{current:_}},[])}function G(_,n,t){v=6,D(function(){return typeof _=="function"?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},t==null?t:t.concat(_))}function d(_,n){var t=l(a++,7);return E(t.__H,n)&&(t.__=_(),t.__H=n,t.__h=_),t.__}function I(_,n){return v=8,d(function(){return _},n)}function J(_){var n=u.context[_.__c],t=l(a++,9);return t.c=_,n?(t.__==null&&(t.__=!0,n.sub(u)),n.props.value):_.__}function K(_,n){o.useDebugValue&&o.useDebugValue(n?n(_):_)}function L(){var _=l(a++,11);if(!_.__){for(var n=u.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);_.__="P"+t[0]+"-"+t[1]++}return _.__}function M(){for(var _;_=F.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(p),_.__H.__h.forEach(N),_.__H.__h=[]}catch(n){_.__H.__h=[],o.__e(n,_.__v)}}o.__b=function(_){u=null,b&&b(_)},o.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),x&&x(_,n)},o.__r=function(_){q&&q(_),a=0;var n=(u=_.__c).__H;n&&(H===u?(n.__h=[],u.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(n.__h.forEach(p),n.__h.forEach(N),n.__h=[],a=0)),H=u},o.diffed=function(_){T&&T(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(F.push(n)!==1&&A===o.requestAnimationFrame||((A=o.requestAnimationFrame)||$)(M)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),H=u=null},o.__c=function(_,n){n.some(function(t){try{t.__h.forEach(p),t.__h=t.__h.filter(function(r){return!r.__||N(r)})}catch(r){n.some(function(h){h.__h&&(h.__h=[])}),n=[],o.__e(r,t.__v)}}),U&&U(_,n)},o.unmount=function(_){k&&k(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{p(r)}catch(h){n=h}}),t.__H=void 0,n&&o.__e(n,t.__v))};var P=typeof requestAnimationFrame=="function";function $(_){var n,t=function(){clearTimeout(r),P&&cancelAnimationFrame(n),setTimeout(_)},r=setTimeout(t,100);P&&(n=requestAnimationFrame(t))}function p(_){var n=u,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),u=n}function N(_){var n=u;_.__c=_.__(),u=n}function E(_,n){return!_||_.length!==n.length||n.some(function(t,r){return t!==_[r]})}function V(_,n){return typeof n=="function"?n(_):n}export{z as A,G as F,K as P,d as T,D as _,L as g,j as h,C as p,I as q,J as x,w as y};
