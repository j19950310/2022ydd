import{v as P}from"./directives.b3f2068f.js";import{k as _,r as E,m as I,a as N,p as R,u as r,q as T,s as B,v as C,x as D,o as d,c,b as m,t as y,n as F,y as b,F as M,d as $,w as j,z as L}from"./index.38677c25.js";var O;const v=typeof window<"u",k=e=>typeof e=="function",W=e=>typeof e=="string";v&&((O=window==null?void 0:window.navigator)==null?void 0:O.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function U(e){return typeof e=="function"?e():r(e)}function q(e){return T()?(B(e),!0):!1}function z(e){return typeof e=="function"?_(e):E(e)}function A(e,o=!0){I()?N(e):o?e():R(e)}function G(e){var o;const t=U(e);return(o=t==null?void 0:t.$el)!=null?o:t}const H=v?window:void 0,V=v?window.document:void 0;v&&window.navigator;v&&window.location;function K(e,o=!1){const t=E(),n=()=>t.value=Boolean(e());return n(),A(n,o),t}const w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h="__vueuse_ssr_handlers__";w[h]=w[h]||{};w[h];var x=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,X=(e,o)=>{var t={};for(var n in e)J.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&x)for(var n of x(e))o.indexOf(n)<0&&Q.call(e,n)&&(t[n]=e[n]);return t};function Y(e,o,t={}){const n=t,{window:s=H}=n,f=X(n,["window"]);let l;const a=K(()=>s&&"MutationObserver"in s),p=()=>{l&&(l.disconnect(),l=void 0)},u=C(()=>G(e),g=>{p(),a.value&&s&&g&&(l=new MutationObserver(o),l.observe(g,f))},{immediate:!0}),i=()=>{p(),u()};return q(i),{isSupported:a,stop:i}}var S;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(S||(S={}));function Z(e=null,o={}){var t,n;const{document:s=V,observe:f=!1,titleTemplate:l="%s"}=o,a=z((t=e!=null?e:s==null?void 0:s.title)!=null?t:null),p=e&&k(e);function u(i){return k(l)?l(i):r(l).replace("%s",i)}return C(a,(i,g)=>{W(i)&&i!==g&&s&&(s.title=u(i))},{immediate:!0}),f&&s&&!p&&Y((n=s.head)==null?void 0:n.querySelector("title"),()=>{s&&s.title!==a.value&&(a.value=u(s.title))},{childList:!0}),a}const ee={class:"page-slug"},te={class:"page-slug__head"},ne={class:"page-slug__head-wrap"},oe={class:"page-slug__head-date"},se=["textContent"],ae={key:1,class:"page-slug__block-img"},ue={__name:"_slug",setup(e){const o=D(),t=_(()=>o.matched[0].meta.posts?o.matched[0].meta.posts.find(a=>a.slug===o.params.slug):null),n=_(()=>t.value&&t.value.title),s=_(()=>t.value?L.find(a=>a.key===t.value.tag):""),f=_(()=>t.value&&t.value.date),l=_(()=>t.value&&t.value.content);return Z(n),N(()=>{}),(a,p)=>(d(),c("div",ee,[m("div",te,[m("h1",null,y(r(n)),1),m("div",ne,[r(s)?(d(),c("div",{key:0,class:"page-slug__head-tag",style:F({backgroundColor:r(s).color})},y(r(s).name),5)):b("",!0),m("div",oe,y(r(f)),1)])]),(d(!0),c(M,null,$(r(l),(u,i)=>(d(),c("div",{class:"page-slug__block",key:"block_"+i},[u.type==="text"?(d(),c("div",{key:0,class:"page-slug__block-text",textContent:y(u.text)},null,8,se)):u.type==="img"?j((d(),c("div",ae,null,512)),[[r(P),u.img]]):b("",!0)]))),128))]))}};export{ue as default};
