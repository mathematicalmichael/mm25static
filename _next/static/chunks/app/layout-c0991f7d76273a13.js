(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2904:function(e,t,n){Promise.resolve().then(n.t.bind(n,7960,23)),Promise.resolve().then(n.bind(n,9734)),Promise.resolve().then(n.bind(n,2798)),Promise.resolve().then(n.bind(n,8291))},9734:function(e,t,n){"use strict";n.d(t,{DynamicFavicon:function(){return o}});var r=n(2265);let o=()=>((0,r.useEffect)(()=>{let e=()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");if(!t)return;t.clearRect(0,0,64,64),t.beginPath(),t.arc(32,32,28,0,2*Math.PI),t.fillStyle="red",t.fill();let n=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Denver"})).getDate();t.font="bold 30px Helvetica",t.fillStyle="white",t.textAlign="center",t.textBaseline="middle",t.fillText(n.toString(),32,32);let r=e.toDataURL("image/png"),o=document.querySelector("link[rel~='icon']");if(o)o.href=r;else{let e=document.createElement("link");e.rel="icon",e.href=r,document.head.appendChild(e)}};e();let t=new Date(new Date().toLocaleString("en-US",{timeZone:"America/Denver"})),n=new Date(t);n.setDate(n.getDate()+1),n.setHours(0,0,0,0);let r=setTimeout(()=>{e(),setInterval(e,864e5)},n.getTime()-t.getTime());return()=>clearTimeout(r)},[]),null)},2798:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return a}});var r=n(7437),o=n(5922);function a(e){let{children:t}=e;return(0,r.jsx)(o.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:t})}},7960:function(){},8291:function(e,t,n){"use strict";n.d(t,{Analytics:function(){return s}});var r=n(2265),o=()=>{window.va||(window.va=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)})};function a(){return"undefined"!=typeof window}function i(){return"production"}function l(){return"development"===((a()?window.vam:i())||"production")}function s(e){return(0,r.useEffect)(()=>{var t;e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,r.useEffect)(()=>{!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};if(!a())return;(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";if("auto"===e){window.vam=i();return}window.vam=e})(t.mode),o(),t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend));let n=t.scriptSrc||(l()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector('script[src*="'.concat(n,'"]')))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(t.framework?"/".concat(t.framework):""),r.dataset.sdkv="1.4.1",t.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),t.endpoint&&(r.dataset.endpoint=t.endpoint),t.dsn&&(r.dataset.dsn=t.dsn),r.onerror=()=>{let e=l()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log("[Vercel Web Analytics] Failed to load script from ".concat(n,". ").concat(e))},l()&&!1===t.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function(e){var t;let{route:n,path:r}=e;null==(t=window.va)||t.call(window,"pageview",{route:n,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}},5922:function(e,t,n){"use strict";n.d(t,{F:function(){return d},f:function(){return u}});var r=n(2265),o=(e,t,n,r,o,a,i,l)=>{let s=document.documentElement,c=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&a?o.map(e=>a[e]||e):o;n?(s.classList.remove(...r),s.classList.add(t)):s.setAttribute(e,t)}),l&&c.includes(t)&&(s.style.colorScheme=t)}if(r)d(r);else try{let e=localStorage.getItem(t)||n,r=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(r)}catch(e){}},a=["light","dark"],i="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=r.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=r.useContext(s))?e:c},u=e=>r.useContext(s)?r.createElement(r.Fragment,null,e.children):r.createElement(f,{...e}),m=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:d=m,defaultTheme:u=o?"system":"light",attribute:f="data-theme",value:b,children:y,nonce:g,scriptProps:S}=e,[k,T]=r.useState(()=>w(c,u)),[E,C]=r.useState(()=>w(c)),A=b?Object.values(b):d,D=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=p());let r=b?b[t]:t,i=n?v(g):null,s=document.documentElement,c=e=>{"class"===e?(s.classList.remove(...A),r&&s.classList.add(r)):e.startsWith("data-")&&(r?s.setAttribute(e,r):s.removeAttribute(e))};if(Array.isArray(f)?f.forEach(c):c(f),l){let e=a.includes(u)?u:null,n=a.includes(t)?t:e;s.style.colorScheme=n}null==i||i()},[g]),L=r.useCallback(e=>{let t="function"==typeof e?e(k):e;T(t);try{localStorage.setItem(c,t)}catch(e){}},[k]),P=r.useCallback(e=>{C(p(e)),"system"===k&&o&&!t&&D("system")},[k,t]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?T(e.newValue):L(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),r.useEffect(()=>{D(null!=t?t:k)},[t,k]);let x=r.useMemo(()=>({theme:k,setTheme:L,forcedTheme:t,resolvedTheme:"system"===k?E:k,themes:o?[...d,"system"]:d,systemTheme:o?E:void 0}),[k,L,t,E,o,d]);return r.createElement(s.Provider,{value:x},r.createElement(h,{forcedTheme:t,storageKey:c,attribute:f,enableSystem:o,enableColorScheme:l,defaultTheme:u,value:b,themes:d,nonce:g,scriptProps:S}),y)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:c,themes:d,nonce:u,scriptProps:m}=e,f=JSON.stringify([a,n,s,t,d,c,i,l]).slice(1,-1);return r.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(o.toString(),")(").concat(f,")")}})}),w=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}},function(e){e.O(0,[587,971,117,744],function(){return e(e.s=2904)}),_N_E=e.O()}]);