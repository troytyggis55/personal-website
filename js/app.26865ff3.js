(function(){"use strict";var e={4128:function(e,t,a){var n=a(9242),r=a(3396),o=a(4870),i=a(7139);const l={class:"inner"};var c=(0,r.aZ)({__name:"CardTemplate",props:{reactToHover:{type:Boolean,required:!1,default:!0}},setup(e){const t=e;return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["outer",{outerWithHover:t.reactToHover}])},[(0,r._)("div",l,[(0,r.WI)(e.$slots,"default")])],2))}}),s=a(89);const u=(0,s.Z)(c,[["__scopeId","data-v-1ae82c3b"]]);var d=u;const v=(0,r.uE)('<div class="details" data-v-1cb11e75><p data-v-1cb11e75>+47 94 05 05 56</p><a href="mailito: trygveabjo@gmail.com" data-v-1cb11e75><p data-v-1cb11e75>trygveabjo@gmail.com</p></a></div><div class="icons" data-v-1cb11e75><a href="https://github.com/troytyggis55" target="”_blank”" data-v-1cb11e75><img src="github-mark-white.svg" alt="Github Logo" data-v-1cb11e75></a><a href="https://www.linkedin.com/in/trygve-j%C3%B8rgensen-80b1b9259/" target="”_blank”" data-v-1cb11e75><img src="linkedin-round-svgrepo-com.svg" alt="LinkedIn Logo" data-v-1cb11e75></a></div>',2),f=[v];function p(e,t,a,n,o,i){return(0,r.wg)(),(0,r.iD)("footer",null,f)}var m={name:"CustomFooter"};const g=(0,s.Z)(m,[["render",p],["__scopeId","data-v-1cb11e75"]]);var b=g,_=a(852),w=a(2047),h=a.n(w);const y={class:"header"},k={class:"title"},C={class:"details"},W={key:0},S={key:1},O=["href"],T={key:2},D=["innerHTML"];var j=(0,r.aZ)({__name:"MarkdownRenderer",props:{source:{type:String,default:""}},setup(e){const t=e,a=new _.Z,n=(0,o.iH)(""),l=(0,o.iH)({title:"",date:"",repo:"",category:""});return(0,r.bv)((()=>{fetch(t.source).then((e=>e.text())).then((e=>{const{body:t,attributes:a}=h()(e);n.value=t,l.value={title:a.title??"",date:a.date??"",repo:a.repo??"",category:a.category??""}})).catch((e=>n.value="Could not load markdown file: "+e.toString()))})),(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",y,[(0,r._)("h2",k,(0,i.zw)(l.value.title),1),(0,r._)("div",C,[""!==l.value.date?((0,r.wg)(),(0,r.iD)("p",W,(0,i.zw)(new Date(l.value.date).toDateString()),1)):(0,r.kq)("",!0),""!==l.value.repo?((0,r.wg)(),(0,r.iD)("p",S,[(0,r._)("a",{href:l.value.repo,target:"_blank"},"Github",8,O)])):(0,r.kq)("",!0),""!==l.value.category?((0,r.wg)(),(0,r.iD)("p",T,(0,i.zw)(l.value.category),1)):(0,r.kq)("",!0)])]),(0,r._)("div",{class:"md",innerHTML:(0,o.SU)(a).render(n.value)},null,8,D)],64))}});const H=(0,s.Z)(j,[["__scopeId","data-v-87a8298e"]]);var P=H;const I={class:"menu"};var M=(0,r.aZ)({__name:"InfoNavBar",emits:["infoStateEmit"],setup(e,{emit:t}){const a=(0,o.iH)("academic"),n=t,l=e=>{a.value=e,n("infoStateEmit",e)};return(e,t)=>((0,r.wg)(),(0,r.iD)("nav",null,[(0,r._)("ul",I,[(0,r._)("li",null,[(0,r._)("a",{onClick:t[0]||(t[0]=e=>l("academic")),class:(0,i.C_)({selected:"academic"===a.value})}," Academic",2)]),(0,r._)("li",null,[(0,r._)("a",{onClick:t[1]||(t[1]=e=>l("personal")),class:(0,i.C_)({selected:"personal"===a.value})}," Personal",2)])])]))}});const Z=(0,s.Z)(M,[["__scopeId","data-v-50e6dc2b"]]);var x=Z;const q=(0,r._)("div",{class:"pageTitle"},[(0,r._)("h1",null,"Trygve Jørgensen"),(0,r._)("img",{src:"ProfilePic.jpg",alt:"Profile picture"})],-1),A={class:"gridCardContainer"},B={key:0,src:"CV.pdf#toolbar=0&view=fitH",class:"CVpdf",alt:"CV"},E={key:1,src:"CV.png",class:"CVpng",alt:"CV"},V=(0,r._)("h2",{style:{"text-align":"center","padding-top":"30px"}},"Projects and Experiences",-1),L={key:0,class:"infoContainer"},z={key:1,class:"infoContainer"};var F=(0,r.aZ)({__name:"App",setup(e){function t(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}(0,r.aZ)({name:"App",components:{CardTemplate:d,MarkdownRenderer:P,CustomFooter:b,InformationNavBar:x}});const a=(0,o.iH)(t()),i=(0,o.iH)("academic"),l=e=>{i.value=e};return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n.uT,{name:"title",appear:""},{default:(0,r.w5)((()=>[q])),_:1}),(0,r.Wm)(n.uT,{name:"grid",appear:""},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r._)("div",A,[(0,r.Wm)(d,{class:"aboutme"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"AboutMe.md"})])),_:1}),(0,r.Wm)(d,{class:"cv"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"CV.md"}),a.value?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("embed",B)),a.value?((0,r.wg)(),(0,r.iD)("img",E)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(d,{class:"skills"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"Skills.md"})])),_:1}),(0,r.Wm)(d,{class:"aboutthissite"},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"AboutThisSite.md"})])),_:1})]),V,(0,r.Wm)(x,{onInfoStateEmit:l}),"academic"===i.value?((0,r.wg)(),(0,r.iD)("div",L,[(0,r.Wm)(d,{class:"infoCard","react-to-hover":!1},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"Pathfinding.md"})])),_:1})])):(0,r.kq)("",!0),"personal"===i.value?((0,r.wg)(),(0,r.iD)("div",z,[(0,r.Wm)(d,{class:"infoCard","react-to-hover":!1},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"FluidSim.md"})])),_:1}),(0,r.Wm)(d,{class:"infoCard","react-to-hover":!1},{default:(0,r.w5)((()=>[(0,r.Wm)(P,{source:"Bezier.md"})])),_:1})])):(0,r.kq)("",!0),(0,r.Wm)(b)])])),_:1})],64))}});const G=F;var N=G;(0,n.ri)(N).mount("#app")}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],l=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(c)var u=c(a)}for(t&&t(n);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkpersonal_website"]=self["webpackChunkpersonal_website"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4128)}));n=a.O(n)})();
//# sourceMappingURL=app.26865ff3.js.map