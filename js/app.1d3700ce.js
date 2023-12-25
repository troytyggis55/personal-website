(function(){"use strict";var e={9668:function(e,n,r){var t=r(9242),o=r(3396),i=r(7139),u=(0,o.aZ)({__name:"DynamicTitle",props:{msg:String,level:{type:Number,default:1}},setup(e){return(n,r)=>((0,o.wg)(),(0,o.j4)((0,o.LL)("h"+e.level),null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.msg),1)])),_:1}))}});const a=u;var l=a;function c(e,n){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var s=r(89);const f={},p=(0,s.Z)(f,[["render",c],["__scopeId","data-v-335f8adb"]]);var d=p;const v=(0,o._)("p",null,"This is my footer",-1),m=[v];function g(e,n,r,t,i,u){return(0,o.wg)(),(0,o.iD)("footer",null,m)}var b={name:"CustomFooter"};const w=(0,s.Z)(b,[["render",g]]);var y=w,_=r(4870),h=r(852);const O=["innerHTML"];var T=(0,o.aZ)({__name:"MarkdownRenderer",props:{source:{type:String,default:""}},setup(e){const n=e,r=new h.Z,t=(0,_.iH)("");return(0,o.bv)((()=>{fetch(n.source).then((e=>e.text())).then((e=>{t.value=e}))})),(e,n)=>((0,o.wg)(),(0,o.iD)("div",{innerHTML:(0,_.SU)(r).render(t.value)},null,8,O))}});const j=T;var k=j;const M={class:"page-title"},S=["src"],W={class:"g-container"};var x=(0,o.aZ)({__name:"App",setup(e){return(0,o.aZ)({name:"App",components:{DynamicTitle:l,CardTemplate:d,MarkdownRenderer:k}}),(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",M,[(0,o.Wm)(l,{msg:"Trygve Jørgensen",level:"1"}),(0,o._)("img",{src:r(6994),alt:"Profile picture"},null,8,S)]),(0,o._)("div",W,[(0,o.Wm)(d,{style:{"grid-area":"1 / 1 / 1 / 1"}},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{source:"OmMeg.md"})])),_:1}),(0,o.Wm)(d,{style:{"grid-area":"2 / 1 / 3 / 1"}}),(0,o.Wm)(d,{style:{"grid-area":"1 / 2 / 3 / 2"}},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{msg:"CV",level:"3"})])),_:1})]),(0,o.Wm)(y)],64))}});const P=x;var Z=P;(0,t.ri)(Z).mount("#app")},6994:function(e,n,r){e.exports=r.p+"img/ProfilePic.c7b8a9c9.jpg"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,l=0;l<t.length;l++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,o,i]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/personal-website/"}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,u=t[0],a=t[1],l=t[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var s=l(r)}for(n&&n(t);c<u.length;c++)i=u[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},t=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(9668)}));t=r.O(t)})();
//# sourceMappingURL=app.1d3700ce.js.map