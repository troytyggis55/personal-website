(function(){"use strict";var e={6139:function(e,t,a){var n=a(9242),r=a(3396);const o={class:"outer"},i={class:"inner"};function l(e,t){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",i,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}var c=a(89);const u={},s=(0,c.Z)(u,[["render",l],["__scopeId","data-v-5e6b255e"]]);var d=s;const v=(0,r.uE)('<div class="details" data-v-eb237ce2><p data-v-eb237ce2>+47 94 05 05 56</p><a href="mailito: trygveabjo@gmail.com" data-v-eb237ce2><p data-v-eb237ce2>trygveabjo@gmail.com</p></a></div><div class="icons" data-v-eb237ce2><a href="https://github.com/troytyggis55" target="”_blank”" data-v-eb237ce2><img src="github-mark-white.svg" alt="Github Logo" data-v-eb237ce2></a></div>',2),f=[v];function p(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("footer",null,f)}var m={name:"CustomFooter"};const _=(0,c.Z)(m,[["render",p],["__scopeId","data-v-eb237ce2"]]);var b=_,g=a(7139),w=a(4870),h=a(852),y=a(2047),k=a.n(y);const W={class:"details"},j={key:0},O={key:1},C=["href"],D={key:2},T=["innerHTML"];var S=(0,r.aZ)({__name:"MarkdownRenderer",props:{source:{type:String,default:""}},setup(e){const t=e,a=new h.Z,n=(0,w.iH)(""),o=(0,w.iH)({date:"",repo:"",category:""});return(0,r.bv)((()=>{fetch(t.source).then((e=>e.text())).then((e=>{const{body:t,attributes:a}=k()(e);n.value=t,o.value={date:a.date??"",repo:a.repo??"",category:a.category??""}}))})),(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",W,[""!==o.value.date?((0,r.wg)(),(0,r.iD)("p",j,(0,g.zw)(o.value.date),1)):(0,r.kq)("",!0),""!==o.value.repo?((0,r.wg)(),(0,r.iD)("p",O,[(0,r.Uk)("Github: "),(0,r._)("a",{href:o.value.repo},(0,g.zw)(o.value.repo),9,C)])):(0,r.kq)("",!0),""!==o.value.category?((0,r.wg)(),(0,r.iD)("p",D,(0,g.zw)(o.value.category),1)):(0,r.kq)("",!0)]),(0,r._)("div",{innerHTML:(0,w.SU)(a).render(n.value)},null,8,T)],64))}});const H=(0,c.Z)(S,[["__scopeId","data-v-6f59eeb0"]]);var P=H;const Z=e=>((0,r.dD)("data-v-64072b4d"),e=e(),(0,r.Cn)(),e),x=Z((()=>(0,r._)("h2",{style:{"text-align":"center","padding-top":"30px"}},"Completed Projects",-1))),M={class:"menu"},I={class:"container",key:"academic"},q={class:"container",key:"personal"};var A=(0,r.aZ)({__name:"InformationNavBar",setup(e){const t=(0,w.iH)("academic");return(e,a)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[x,(0,r._)("nav",null,[(0,r._)("ul",M,[(0,r._)("li",null,[(0,r._)("a",{onClick:a[0]||(a[0]=e=>t.value="academic"),class:(0,g.C_)({selected:"academic"===t.value})},"Academic",2)]),(0,r._)("li",null,[(0,r._)("a",{onClick:a[1]||(a[1]=e=>t.value="personal"),class:(0,g.C_)({selected:"personal"===t.value})},"Personal",2)])])]),"academic"===t.value?((0,r.wg)(),(0,r.iD)("div",I,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"academic/Dijkstra.md"})])),_:1})])):(0,r.kq)("",!0),"personal"===t.value?((0,r.wg)(),(0,r.iD)("div",q,[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"personal/Bezier.md"})])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"personal/FluidSim.md"})])),_:1})])):(0,r.kq)("",!0)],64))}});const z=(0,c.Z)(A,[["__scopeId","data-v-64072b4d"]]);var F=z;const L=(0,r._)("div",{class:"page-title"},[(0,r._)("h1",null,"Trygve Jørgensen"),(0,r._)("img",{src:"ProfilePic.jpg",alt:"Profile picture"})],-1),Y={class:"card-container"},B=(0,r._)("embed",{src:"CV.pdf#toolbar=0&view=fitH"},null,-1);var E=(0,r.aZ)({__name:"App",setup(e){return(0,r.aZ)({name:"App",components:{CardTemplate:d,MarkdownRenderer:P}}),(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n.uT,{name:"title",appear:""},{default:(0,r.w5)((()=>[L])),_:1}),(0,r.Wm)(n.uT,{name:"grid",appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("div",Y,[(0,r.Wm)(d,{class:"aboutme"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"AboutMe.md"})])),_:1}),(0,r.Wm)(d,{class:"cv"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"CV.md"}),B])),_:1}),(0,r.Wm)(d,{class:"skills"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"Skills.md"})])),_:1}),(0,r.Wm)(d,{class:"aboutthissite"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"AboutThisSite.md"})])),_:1})]),(0,r.Wm)(F),(0,r.Wm)(b)])])),_:1})],64))}});const G=E;var R=G;(0,n.ri)(R).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],c=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var s=c(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6139)}));n=a.O(n)})();
//# sourceMappingURL=app.029b7937.js.map