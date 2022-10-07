(function(){"use strict";var t={8935:function(t,e,n){var r=n(144),i=n(998),o=n(9228),a=n(6570),s=n(4324),c=n(3059),l=n(3687),u=function(){var t=this,e=t._self._c;return e(i.Z,[e(o.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("h2",[t._v("QVVConverter")])]),e(l.Z),e(a.Z,{attrs:{href:"https://twitter.com/FiveZett",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("(ゴゼ)@FiveZett")]),e(s.Z,[t._v("mdi-open-in-new")])],1)],1),e(c.Z,{staticClass:"ma-6"},[e("HelloWorld")],1)],1)},d=[],f=n(266),p=n(2118),v=n(9223),h=n(1234),g=n(1713),m=n(6072),w=function(){var t=this,e=t._self._c;return e(p.Z,[e(g.Z,{staticClass:"text-center"},[e(f.Z,[e("h1",[t._v("QuickVoiceVideoConverter")]),e("h2",[t._v("画像ファイルと音声ファイルを選択するとTwitter投稿用の動画に変換して出力します。")]),e("h3",[t._v("動画フォーマットの仕様上1px画像が削られる場合があります。")])]),e(f.Z,{attrs:{cols:"12"}},[e(h.Z,{attrs:{disabled:t.isProsessing,counter:"","small-chips":"","show-size":"","truncate-length":"15",accept:"image/*"},on:{change:t.imageUpdate}}),e(h.Z,{attrs:{disabled:t.isProsessing,counter:"","small-chips":"","show-size":"","truncate-length":"15",accept:"audio/*"},on:{change:t.musicUpdate}})],1),e(f.Z,[e(a.Z,{staticClass:"pa-6",attrs:{disabled:t.isProsessing,color:"primary",width:"100%",height:"40px"},on:{click:t.convertFunc}},[t._v("Convert ")]),e(v.Z,{staticClass:"pa-6"}),e(m.Z,{attrs:{filled:"",name:"input-7-4",value:t.logText}}),e(a.Z,{attrs:{href:"https://github.com/FiveZett/quick_voicevideo_converter",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Repository Page")]),e(s.Z,[t._v("mdi-open-in-new")])],1)],1)],1)],1)},Z=[],b=n(5045);const _=b.createFFmpeg({log:!0});let y={},x={};var F={name:"HelloWorld",data:()=>({logText:"",isProsessing:!1}),methods:{musicUpdate(t){y=t},imageUpdate(t){x=t},async convertFunc(){this.isProsessing=!0,_.isLoaded()||await _.load(),_.setLogger((({message:t})=>{this.logText=t+"\n"+this.logText}));const t=await new Promise((t=>{const e=new FileReader;e.onload=()=>{const n=new Image;n.src=e.result,n.onload=()=>{const e=document.createElement("canvas");e.width=Math.max(2,n.naturalWidth-n.naturalWidth%2),e.height=Math.max(2,n.naturalHeight-n.naturalHeight%2),e.getContext("2d").drawImage(n,0,0);const r=e.toDataURL("image/png");t(r)}},e.readAsDataURL(x)}));_.FS("writeFile",y.name,await b.fetchFile(y)),_.FS("writeFile",x.name,await b.fetchFile(t));const e=Date.now()+".mp4";await _.run("-r","1","-i",x.name,"-i",y.name,"-pix_fmt","yuv420p",e);const n=_.FS("readFile",e),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([n.buffer],{type:"video/mp4"})),r.download=e,r.click(),this.isProsessing=!1}}},P=F,k=n(1001),O=(0,k.Z)(P,w,Z,!1,null,null,null),C=O.exports,T={name:"App",components:{HelloWorld:C},data:()=>({})},j=T,S=(0,k.Z)(j,u,d,!1,null,null,null),U=S.exports,L=n(8864);r.ZP.use(L.Z);var R=new L.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:R,render:t=>t(U)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkquick_voicevideo_converter"]=self["webpackChunkquick_voicevideo_converter"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8935)}));r=n.O(r)})();
//# sourceMappingURL=app.f6ea3664.js.map