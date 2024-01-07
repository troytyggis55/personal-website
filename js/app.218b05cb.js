(function(){"use strict";var e={7338:function(e,t,a){var n=a(9242),r=a(3396),o=a(4870);const i={class:"outer"},l={class:"inner"};function c(e,t){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",l,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}var s=a(89);const u={},d=(0,s.Z)(u,[["render",c],["__scopeId","data-v-5e6b255e"]]);var v=d;const f=(0,r.uE)('<div class="details" data-v-eb237ce2><p data-v-eb237ce2>+47 94 05 05 56</p><a href="mailito: trygveabjo@gmail.com" data-v-eb237ce2><p data-v-eb237ce2>trygveabjo@gmail.com</p></a></div><div class="icons" data-v-eb237ce2><a href="https://github.com/troytyggis55" target="”_blank”" data-v-eb237ce2><img src="github-mark-white.svg" alt="Github Logo" data-v-eb237ce2></a></div>',2),p=[f];function m(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("footer",null,p)}var g={name:"CustomFooter"};const _=(0,s.Z)(g,[["render",m],["__scopeId","data-v-eb237ce2"]]);var b=_,w=a(7139),h=a(852),y=a(2047),k=a.n(y);const W={class:"header"},C={class:"title"},D={class:"details"},O={key:0},P={key:1},j=["href"],S={key:2},T=["innerHTML"];var H=(0,r.aZ)({__name:"MarkdownRenderer",props:{source:{type:String,default:""}},setup(e){const t=e,a=new h.Z,n=(0,o.iH)(""),i=(0,o.iH)({title:"",date:"",repo:"",category:""});return(0,r.bv)((()=>{fetch(t.source).then((e=>e.text())).then((e=>{const{body:t,attributes:a}=k()(e);n.value=t,i.value={title:a.title??"",date:a.date??"",repo:a.repo??"",category:a.category??""}}))})),(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",W,[(0,r._)("h2",C,(0,w.zw)(i.value.title),1),(0,r._)("div",D,[""!==i.value.date?((0,r.wg)(),(0,r.iD)("p",O,(0,w.zw)(new Date(i.value.date).toDateString()),1)):(0,r.kq)("",!0),""!==i.value.repo?((0,r.wg)(),(0,r.iD)("p",P,[(0,r._)("a",{href:i.value.repo,target:"_blank"},"Github",8,j)])):(0,r.kq)("",!0),""!==i.value.category?((0,r.wg)(),(0,r.iD)("p",S,(0,w.zw)(i.value.category),1)):(0,r.kq)("",!0)])]),(0,r._)("div",{class:"md",innerHTML:(0,o.SU)(a).render(n.value)},null,8,T)],64))}});const I=(0,s.Z)(H,[["__scopeId","data-v-1b887072"]]);var M=I;const Z=e=>((0,r.dD)("data-v-07284e8a"),e=e(),(0,r.Cn)(),e),x=Z((()=>(0,r._)("h2",{style:{"text-align":"center","padding-top":"30px"}},"Completed Projects",-1))),q={class:"menu"},A={class:"container",key:"academic"},V={class:"container",key:"personal"};var B=(0,r.aZ)({__name:"InformationNavBar",setup(e){const t=(0,o.iH)("academic");return(e,a)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[x,(0,r._)("nav",null,[(0,r._)("ul",q,[(0,r._)("li",null,[(0,r._)("a",{onClick:a[0]||(a[0]=e=>t.value="academic"),class:(0,w.C_)({selected:"academic"===t.value})},"Academic",2)]),(0,r._)("li",null,[(0,r._)("a",{onClick:a[1]||(a[1]=e=>t.value="personal"),class:(0,w.C_)({selected:"personal"===t.value})},"Personal",2)])])]),"academic"===t.value?((0,r.wg)(),(0,r.iD)("div",A,[(0,r.WI)(e.$slots,"academic")])):(0,r.kq)("",!0),"personal"===t.value?((0,r.wg)(),(0,r.iD)("div",V,[(0,r.WI)(e.$slots,"personal")])):(0,r.kq)("",!0)],64))}});const z=(0,s.Z)(B,[["__scopeId","data-v-07284e8a"]]);var F=z;const E=(0,r._)("div",{class:"page-title"},[(0,r._)("h1",null,"Trygve Jørgensen"),(0,r._)("img",{src:"ProfilePic.jpg",alt:"Profile picture"})],-1),L={class:"card-container"},Y={key:0,src:"CV.pdf#toolbar=0&view=fitH",class:"CVpdf",alt:"CV"},$={key:1,src:"CV.png",class:"CVpng",alt:"CV"};var G=(0,r.aZ)({__name:"App",setup(e){function t(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}(0,r.aZ)({name:"App",components:{CardTemplate:v,MarkdownRenderer:M,InformationNavBar:F,CustomFooter:b}});const a=(0,o.iH)(t());return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n.uT,{name:"title",appear:""},{default:(0,r.w5)((()=>[E])),_:1}),(0,r.Wm)(n.uT,{name:"grid",appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("div",L,[(0,r.Wm)(v,{class:"aboutme"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"AboutMe.md"})])),_:1}),(0,r.Wm)(v,{class:"cv"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"CV.md"}),a.value?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("embed",Y)),a.value?((0,r.wg)(),(0,r.iD)("img",$)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(v,{class:"skills"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"Skills.md"})])),_:1}),(0,r.Wm)(v,{class:"aboutthissite"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"AboutThisSite.md"})])),_:1})]),(0,r.Wm)(F,null,{academic:(0,r.w5)((()=>[(0,r.Wm)(v,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"/Pathfinding.md"})])),_:1})])),personal:(0,r.w5)((()=>[(0,r.Wm)(v,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"FluidSim.md"})])),_:1}),(0,r.Wm)(v,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(M,{source:"Bezier.md"})])),_:1})])),_:1}),(0,r.Wm)(b)])])),_:1})],64))}});const N=G;var R=N;(0,n.ri)(R).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var u=c(a)}for(t&&t(n);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7338)}));n=a.O(n)})();
//# sourceMappingURL=app.218b05cb.js.map