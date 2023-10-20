(()=>{var n={897:function(n){!function(t){"use strict";var r={t:function(n){return function(n){return n.map((function(n){return t=n.toString(16),r=2,t.length>r?t:Array(r-t.length+1).join("0")+t;var t,r})).join("")}(n)},i:function(n){if(n.length%2==1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===n.indexOf("0x")&&(n=n.slice(2)),n.match(/../g).map((function(n){return parseInt(n,16)}))}};n.exports?n.exports=r:t.o=r}(this)},496:function(n){!function(t){"use strict";var r={u:function(n){return n.map((function(n){return String.fromCharCode(n)})).join("")},h:function(n){return n.split("").map((function(n){return n.charCodeAt(0)}))}};r.l={u:function(n){return decodeURIComponent(escape(r.u(n)))},h:function(n){return r.h(unescape(encodeURIComponent(n)))}},n.exports?n.exports=r:t.v=r}(this)},165:function(n,t,r){!function(t){"use strict";var i={};n.exports?(i.t=r(897).t,i.v=r(496),n.exports=c):(i.t=t.o.t,i.v=t.v,t.g=c);var e=[];!function(){function n(n){for(var t=Math.sqrt(n),r=2;r<=t;r++)if(!(n%r))return!1;return!0}function t(n){return 4294967296*(n-(0|n))|0}for(var r=2,i=0;i<64;)n(r)&&(e[i]=t(Math.pow(r,1/3)),i++),r++}();var u=[],o=function(n,t,r){for(var i=n[0],o=n[1],c=n[2],a=n[3],f=n[4],s=n[5],l=n[6],h=n[7],v=0;v<64;v++){if(v<16)u[v]=0|t[r+v];else{var d=u[v-15],b=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,m=u[v-2],p=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;u[v]=b+u[v-7]+p+u[v-16]}var y=i&o^i&c^o&c,w=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),g=h+((f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25))+(f&s^~f&l)+e[v]+u[v];h=l,l=s,s=f,f=a+g|0,a=c,c=o,o=i,i=g+(w+y)|0}n[0]=n[0]+i|0,n[1]=n[1]+o|0,n[2]=n[2]+c|0,n[3]=n[3]+a|0,n[4]=n[4]+f|0,n[5]=n[5]+s|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0};function c(n,t){n.constructor===String&&(n=i.v.l.h(n));var r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e=function(n){for(var t=[],r=0,i=0;r<n.length;r++,i+=8)t[i>>>5]|=n[r]<<24-i%32;return t}(n),u=8*n.length;e[u>>5]|=128<<24-u%32,e[15+(u+64>>9<<4)]=u;for(var c=0;c<e.length;c+=16)o(r,e,c);var a=function(n){for(var t=[],r=0;r<32*n.length;r+=8)t.push(n[r>>>5]>>>24-r%32&255);return t}(r);return t&&t._?a:t&&t.O?i.v.u(a):i.t(a)}c.x2=function(n,t){return c(c(n,{_:!0}),t)}}(this)}},t={};function r(i){var e=t[i];if(void 0!==e)return e.exports;var u=t[i]={exports:{}};return n[i].call(u.exports,u,u.exports,r),u.exports}r.n=n=>{var t=n&&n.T?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var i in t)r.S(t,i)&&!r.S(n,i)&&Object.defineProperty(n,i,{j:!0,get:t[i]})},r.S=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";var n,t,i=function(n){this.jr=n},e=function(){function n(n){this.jr=n}return n.prototype.sc=function(n,t){return this.initEvent(n,t)},n.prototype.send=function(n,t){this.jr.send(n,t)},n}(),u=function(){return u=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n},u.apply(this,arguments)},o=function(){function n(n){this.As=null,this.Ps=null,this.data=this.fe(n)}return n.prototype.Es=function(){return this.Ns},n.prototype.an=function(n){switch(n){case 0:return this.Ms;case 1:return this.Ws}return null},n.prototype.Ds=function(){return this.Ps},n.prototype.getData=function(n){var t=u(u({St:this.Ns,U:null},this.Ls),this.data);switch(n){case 0:t.U=this.Ms;break;case 1:t.U=this.Ws,t=u(u({},t),this.As)}return t},n.prototype.Vs=function(n){this.Ls=n},n}();!function(n){n[n.SCRIPT=0]="SCRIPT",n[n.STYLE=1]="STYLE",n[n.HEAD=2]="HEAD",n[n.IFRAME=3]="IFRAME",n[n.OBJECT=4]="OBJECT"}(n||(n={})),function(n){n.IMG=" ",n.BR="\n"}(t||(t={}));var c,a=function(){function n(n,t){this.Tr=n,this.Sr=t}return Object.defineProperty(n.prototype,"x",{get:function(){return this.Tr},j:!1,on:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.Sr},j:!1,on:!0}),n}(),f=(function(){function n(n,t){this.rn=n,this.en=t}n.prototype.toString=function(){return"".concat(this.rn,"x").concat(this.en)},Object.defineProperty(n.prototype,"width",{get:function(){return this.rn},j:!1,on:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this.en},j:!1,on:!0})}(),window.navigator.userAgent,function(n,t){return"[".concat(n).concat(t?"=".concat(t):"","]")}),s=function(n,t){try{return t&&t instanceof Element&&(t.querySelectorAll,1)?t.querySelectorAll(n):document.querySelectorAll(n)}catch(n){return[]}},l=function(r,i){if(!r||r.nodeName in n);else if(r.nodeType===Node.TEXT_NODE)i.push(String(r.nodeValue).replace(/(\r\n|\r|\n)/g,""));else if(r.nodeName in t)i.push(t[r.nodeName]);else for(var e=r.firstChild;e;)l(e,i),e=e.nextSibling},h=function(n){var t,r=[];return l(n,r)," "!==(t=(t=r.join("")).replace(/ +/g," "))&&(t=t.replace(/^\s*/,"")),t},v=function(n,t){return n&&n.getAttribute(t)||""},d=(c=function(n,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},c(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}c(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),b=function(){return b=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n},b.apply(this,arguments)},m=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.Ns="media",t.Ms="pvm",t.Ws="page_view",t}return d(t,n),t.prototype.fe=function(n){var t,r,i,e,u,o=n.data,c=b({},o);return o.url||(c.url=(t=f("rel","canonical"),r=s(t),(i=r[0]&&v(r[0],"href"))||(i=location.origin+document.location.pathname),i)),o.title||(c.title=(e=s("title"),u="",0!==e.length&&(u=h(e[0])),u)),{Tt:c,referrer:document.referrer||""}},t}(o),p=function(){},y=function(n){return"string"==typeof n},w=function(n){var t=typeof n;return"object"===t&&null!==n||"function"===t},g=function(n){return Array.isArray(n)};var j=function(n){try{return JSON.parse(n)}catch(n){}return null},O=r(165),_=r.n(O),E=function(n){var t=0,r=n?function(n){var t=n.getBoundingClientRect(),r=document.body,i=document.documentElement,e=window.scrollY||i.scrollTop||r.scrollTop,u=window.scrollX||i.scrollLeft||r.scrollLeft,o=i.clientTop||r.clientTop||0,c=i.clientLeft||r.clientLeft||0;return new a(t.left+u-c,t.top+e-o)}(n):null;return r&&r.y&&(t=parseInt("".concat(r.y),10)),t},S=function(n){var t=h(n);return t?t.length:0},T=function(n){var t=h(n);return t?t.split(" ").length:0},A=function(n){var t=n&&s("img",n);return t?t.length:0},x=function(n){return{height:(t=n,t?t.offsetHeight:0),start:E(n),symbols:S(n),N:T(n),images:A(n)};var t},k=function(n){var t=n.reduce((function(n,t){return n?t.position>n.position?t:n:t}),null);return t&&t.name||""},C=function(n){return y(n)?_()(n):""},I=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),B=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.al="manual",t}return I(t,n),t.prototype.collect=function(n){var t={I:this.al,title:n.title||null,type:n.type||null,itemId:n.itemId||null,url:n.url||null,description:n.description||null,k:n.themes||null,A:{published:n.datePublished||null,P:n.dateModified||null},M:null,sizes:null},r=n.author;return r&&w(r)&&(t.M={name:r.name||null,id:y(r.id)&&C(r.id)||y(r.name)&&C(r.name)||null,url:r.url||null}),n.itemId?t.itemId=C(n.itemId.toString()):n.url&&n.title&&(t.itemId=C(n.url+n.title)),n.articleContainer instanceof HTMLElement&&(t.sizes=x(n.articleContainer)),t},t}(p),P=["BlogPosting","NewsArticle","Article","WebPage","News"],M=["BreadcrumbList"],L=function(n){var t={};if(!n)return t;for(var r in n)t[r]=n[r];return t},N=function(n,t){return"__proto__"===t?null:n&&void 0!==t?n[t]:null},R=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(n.length<1||!w(n[0]))return null;if(n.length<2)return n[0];var r=n[0];return n.forEach((function(n){w(n)&&null!==n&&!g(n)&&Object.keys(n).forEach((function(t){var i=N(r,t),e=N(n,t);e!==r&&(w(e)&&null!==e?g(e)?r[t]=U(e):!w(i)||null===i||g(i)?r[t]=L(e):r[t]=R(i,e):r[t]=e)}))})),r},H=function(n,t){return function(n,t,r){return Array.prototype.indexOf.call(n,t,r)}(n,t)>=0},z=function(n,t,r){var i=function(n,t,r){for(var i=n.length,e=y(n)?n.split(""):n,u=i-1;u>=0;u--)if(u in e&&t.call(r,e[u],u,n))return u;return-1}(n,t,r);return i<0?null:y(n)?n.charAt(i):n[i]};var D,F,J,U=function(n){var t=[];return n.forEach((function(n,r){w(n)&&null!==n?Array.isArray(n)?t[r]=U(n):t[r]=L(n):t[r]=n})),t},V=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),W=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.al="micro",t}return V(t,n),t.prototype.collect=function(){if(this.fl=t.ll(P),!this.fl)return null;var n={I:this.al,type:t.hl(this.fl),itemId:v(this.fl,"data-id"),M:null,A:null};R(n,this.vl()),R(n,this.dl()),R(n,t.bl(this.fl));var r=t.ll(M);return r&&(n.k=t.ml(r)),n.itemId?n.itemId=C(n.itemId.toString()):n.itemId=C(n.url+n.title),n},t.hl=function(n){var t=n&&n.getAttribute("itemtype");return t&&t.split("schema.org/")[1]||""},t.ml=function(n){var t=f("itemprop","itemListElement"),r=function(n){if(n instanceof Set){var t=[];return n.forEach((function(n){return t.push(n)})),t}return Array.prototype.slice.call(n)}(s(t,n)).map((function(n){var t=s(f("itemprop","name"),n)[0],r=s(f("itemprop","position"),n)[0];return t&&r?{name:t.innerText,position:parseInt(v(r,"content"),10)}:null}));return k(r.filter((function(n){return n})))},t.ll=function(n){var r=f("itemscope"),i=s(r);return z(i,(function(r){var i=t.hl(r);return r.children.length&&H(n,i)}))},t.bl=function(n,t){var r=f("itemprop"),i=s(r,n);if(0===i.length)return{};var e={M:{},A:{}};return i.forEach((function(n){switch(v(n,"itemprop")){case"identifier":if(e.itemId)return;var r=v(n,"content");r.length>2&&(e.itemId=r);break;case"headline":e.title=h(n);break;case"datePublished":if(!e.A)break;e.A.published=v(n,"content")||v(n,"datetime");break;case"dateModified":if(!e.A)break;e.A.P=v(n,"content")||v(n,"datetime");break;case"genre":e.k=v(n,"content");break;case"description":case"abstract":e.description=h(n)||v(n,"content");break;case"articleBody":e.sizes=x(n);break;case"author":if(!e.M||!e.M.name)break;e.M.name=v(n,"content"),e.M.id=C(e.M.name);break;case"name":e.M&&"author"===t&&(e.M.name=v(n,"content"),e.M.id=C(e.M.name));break;case"url":e.M&&"author"===t&&(e.M.url=v(n,"href"))}})),e},t.prototype.dl=function(){var n=f("itemscope"),r=s(n,this.fl);if(0===r.length)return{};var i={};return r.forEach((function(n){if("author"===n.getAttribute("itemprop"))!function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r,i=n[0]||{},e=n.length,u=1;if("object"!=typeof i)return{};for(;u<e;){var o=n[u];if("object"==typeof o){r=Object.keys(o);for(var c=0;c<r.length;c++){var a=r[c];i[a]=o[a]}}u++}}(i,t.bl(n,"author"))})),i},t.prototype.vl=function(){var n=f("rel"),t=s(n,this.fl);if(0===t.length)return{};var r={};return t.forEach((function(n){if("canonical"===n.getAttribute("rel"))r.url=v(n,"canonical")})),r},t}(p),Y=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),q=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.al="ld",t}return Y(t,n),t.prototype.collect=function(){var n,r,i,e,u,o,c,a,f,s,l;if(this.fl=t.ll(P),this.pl=j(this.fl&&this.fl.innerText),!this.pl)return null;var h={I:this.al,type:null===(n=N(this.pl,"@type"))||void 0===n?void 0:n.toString(),title:null===(r=N(this.pl,"name")||N(this.pl,"headline")||document.title)||void 0===r?void 0:r.toString(),description:null===(i=N(this.pl,"description"))||void 0===i?void 0:i.toString(),A:{published:null===(e=N(this.pl,"datePublished"))||void 0===e?void 0:e.toString(),P:null===(u=N(this.pl,"dateModified"))||void 0===u?void 0:u.toString()},sizes:this.yl(),k:null===(o=N(this.pl,"articleSection"))||void 0===o?void 0:o.toString(),M:null};if(!h.k){var v=t.ll(M);v&&(h.k=t.ml(v))}var d=N(this.pl,"image");d&&d.length&&h.sizes&&(h.sizes.images=d.length);var b=N(this.pl,"author");if(b){var m=null===(c=N(b,"name"))||void 0===c?void 0:c.toString();m&&(h.M={name:m,url:null===(a=N(b,"url"))||void 0===a?void 0:a.toString(),id:C(m)})}var p=N(this.pl,"mainEntityOfPage");h.url=null===(f=p?N(p,"@id"):N(this.pl,"url"))||void 0===f?void 0:f.toString();var y=N(this.pl,"identifier"),w=null===(s=N(y,"propertyID"))||void 0===s?void 0:s.toString();return"mediaId"!==w&&"Article id"!==w||(h.itemId=null===(l=N(y,"value"))||void 0===l?void 0:l.toString()),h.itemId?h.itemId=C(h.itemId.toString()):h.itemId=C(h.url+h.title),h},t.ml=function(n){var t=j(n.innerText)||{},r=N(t,"itemListElement");return g(r)?k(r):""},t.ll=function(n){var t=f('type="application/ld+json"'),r=s(t);return z(r,(function(t){var r=t.innerText;return!!z(n,(function(n){return!!~r.indexOf(n)}))}))},t.prototype.wl=function(n){var t=N(this.pl,n);return t?N(t,"@id"):null},t.prototype.gl=function(){var n,t=document.body,r=null===(n=this.wl("mainEntityOfPage")||this.wl("mainEntity")||N(this.pl,"@id"))||void 0===n?void 0:n.toString(),i=r&&r.split("#")[1];return i&&(t=document.getElementById(i)),t},t.prototype.yl=function(){var n;return n=this.fl&&function(n,t){for(var r=n;r;){if(r.matches(t))return r;r=r.parentElement}return null}(this.fl,"body")?this.fl.parentNode:this.gl(),x(n)},t}(p),G=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),K=function(n){function t(t,r){var i,e=n.call(this,t)||this;return e.jl={},e.Ol=((i={}).manual=new B,i.micro=new W,i.ld=new q,i),e.media=r,e}return G(t,n),t.prototype.Bu=function(){return this.jl},t.prototype.track=function(n,r){var i=this.initEvent(n,r);if(i){var e;e=this.jl,Object.keys(e).length||this._l(i);var u=n.getSettings();this.media.El(u.ue),t.Sl(u.ue,i),this.send(i,{fs:n,ac:t.Tl(r.data)})}},t.prototype.initEvent=function(n,t){var r=this.fe(t.data);return r?new m({data:r}):null},t.Tl=function(n){return n&&w(n)},t.Sl=function(n,t){var r,i=t.getData().Tt;i.itemId&&(i.itemId="".concat(n,"_").concat(i.itemId)),(null===(r=i.M)||void 0===r?void 0:r.id)&&(i.M.id="".concat(n,"_").concat(i.M.id))},t.prototype.fe=function(n){var r=this.Ol,i=r.micro,e=r.manual,u=r.ld;return t.Tl(n)?e.collect(n):i.collect()||u.collect()},t.prototype._l=function(n){var t=n.getData();this.jl.itemId=t.Tt.itemId,this.jl.url=t.Tt.url,this.jl.sizes=t.Tt.sizes},t}(e),Q=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),X=function(n){function t(t,r){var i=n.call(this,t)||this;return i.se={Al:{xo:null}},i.media=r,i.se.Al.xo=new K(t,i.media),i}return Q(t,n),t.prototype.Bu=function(){var n=this.se.Al;return n.xo?n.xo.Bu():null},t.prototype.nh=function(n,t){var r=this.se.Al;r.xo&&r.xo.track(n,t)},t}(i),Z=function(n){this.jr=n,this.ko=n.Cs()},$="module_init",nn=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),tn=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.xl=new Set,t.Sa=new X(t.jr,t),t}return nn(t,n),t.prototype.ys=function(){return this.Sa},t.prototype.El=function(n){this.xl.add(n)},t.prototype.af=function(n){this.xl.delete(n)},t.prototype.th=function(n){var t=n.getSettings().ue;return this.xl.has(t)},t}(Z);D="media",F=tn,(J=window._top100?window._top100.getListeners():null)&&J.publish($,D,F)})()})();