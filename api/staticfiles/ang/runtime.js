(()=>{"use strict";var e,b={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=b,e=[],r.O=(n,t,o,l)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,l]=e[i],s=!0,f=0;f<t.length;f++)(!1&l||a>=l)&&Object.keys(r.O).every(v=>r.O[v](t[f]))?t.splice(f--,1):(s=!1,l<a&&(a=l));if(s){e.splice(i--,1);var d=o();void 0!==d&&(n=d)}}return n}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[t,o,l]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+".js",r.miniCssF=e=>"styles.css",r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="crypto-trader:";r.l=(t,o,l,i)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==l)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var u=f[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+l){a=u;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+l),a.src=r.tu(t)),e[t]=[o];var c=(m,v)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(v)),m)return m(v)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tu=n=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(n))})(),r.p="/static/ang/",(()=>{var e={666:0};r.f.j=(o,l)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)l.push(i[2]);else if(666!=o){var a=new Promise((u,c)=>i=e[o]=[u,c]);l.push(i[2]=a);var s=r.p+r.u(o),f=new Error;r.l(s,u=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var c=u&&("load"===u.type?"missing":u.type),p=u&&u.target&&u.target.src;f.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",f.name="ChunkLoadError",f.type=c,f.request=p,i[1](f)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,l)=>{var f,d,[i,a,s]=l,u=0;for(f in a)r.o(a,f)&&(r.m[f]=a[f]);if(s)var c=s(r);for(o&&o(l);u<i.length;u++)r.o(e,d=i[u])&&e[d]&&e[d][0](),e[i[u]]=0;return r.O(c)},t=self.webpackChunkcrypto_trader=self.webpackChunkcrypto_trader||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();