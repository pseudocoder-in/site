(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(1720);const a=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:s},u=e=>(0,r.useContext)(l)?r.default.createElement(r.Fragment,null,e.children):r.default.createElement(d,e),d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:c=["light","dark"],defaultTheme:u=(n?"system":"light"),attribute:d="data-theme",value:v,children:g,nonce:y})=>{const[b,w]=(0,r.useState)((()=>p(s,u))),[x,_]=(0,r.useState)((()=>p(s))),O=v?Object.values(v):c,Z=(0,r.useCallback)((e=>{let r=e;if(!r)return;"system"===e&&n&&(r=m());const o=v?v[r]:r,l=t?h():null,s=document.documentElement;if("class"===d?(s.classList.remove(...O),o&&s.classList.add(o)):o?s.setAttribute(d,o):s.removeAttribute(d),i){const e=a.includes(u)?u:null,t=a.includes(r)?r:e;s.style.colorScheme=t}null==l||l()}),[]),C=(0,r.useCallback)((e=>{w(e);try{localStorage.setItem(s,e)}catch(e){}}),[e]),E=(0,r.useCallback)((t=>{const r=m(t);_(r),"system"===b&&n&&!e&&Z("system")}),[b,e]);return(0,r.useEffect)((()=>{const e=window.matchMedia(o);return e.addListener(E),E(e),()=>e.removeListener(E)}),[E]),(0,r.useEffect)((()=>{const e=e=>{e.key===s&&C(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[C]),(0,r.useEffect)((()=>{Z(null!=e?e:b)}),[e,b]),r.default.createElement(l.Provider,{value:{theme:b,setTheme:C,forcedTheme:e,resolvedTheme:"system"===b?x:b,themes:n?[...c,"system"]:c,systemTheme:n?x:void 0}},r.default.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:s,themes:c,defaultTheme:u,attribute:d,value:v,children:g,attrs:O,nonce:y}),g)},f=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:c,attrs:u,nonce:d})=>{const f="system"===s,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?a.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(e,t=!1,r=!0)=>{const o=c?c[e]:e,i=t?e+"|| ''":`'${o}'`;let s="";return l&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${i})`:"null":o&&(s+=`d[s](n,${i})`),s},v=e?`!function(){${p}${m(e)}}()`:i?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}${f?"":"else{"+m(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}else{${m(s,!1,!1)};}${h}}catch(t){}}();`;return r.default.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})}),(()=>!0)),p=(e,t)=>{if(i)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},m=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8455)}])},4373:function(e,t,n){"use strict";var r=n(1799),a=n(9534),o=n(7320),i=n(1664),l=n.n(i);t.Z=function(e){var t=e.href,n=(0,a.Z)(e,["href"]),i=t&&t.startsWith("/"),s=t&&t.startsWith("#");return i?(0,o.tZ)(l(),{href:t,children:(0,o.tZ)("a",(0,r.Z)({},n))}):s?(0,o.tZ)("a",(0,r.Z)({href:t},n)):(0,o.tZ)("a",(0,r.Z)({target:"_blank",rel:"noopener noreferrer",href:t},n))}},9072:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},4642:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o=n(7320),i=n(1720);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var h;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",c({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),u||(u=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),f||(f=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",m({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},7059:function(e,t,n){"use strict";var r=n(3454),a={title:"Pseudo Coder",author:"Pseudo Coder",headerTitle:"Pseudo Coder",description:"I write code and make the magic happen. Welcome to my world of code and stuff. ",language:"en-us",theme:"system",siteUrl:"https://pseudocoder.in",siteRepo:"https://github.com/pseudocoder-in/site",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"pseudocoder.in@gmail.com",github:"https://github.com/pseudocoder-in",twitter:"https://twitter.com/pseudocoder_in",youtube:"https://www.youtube.com/channel/UCU0kFqOd7BmBBYPu-d4uhmA",linkedin:"https://www.linkedin.com/in/scjha/",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"",posthogAnalyticsId:""},newsletter:{provider:""},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(1720))&&a.__esModule?a:{default:a},i=n(6273),l=n(2725),s=n(3462),c=n(1018),u=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof o.default.useTransition,h={};function m(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(a?"%"+a:"")]=!0}}var v=o.default.forwardRef((function(e,t){var n,a=e.href,v=e.as,g=e.children,y=e.prefetch,b=e.passHref,w=e.replace,x=e.soft,_=e.shallow,O=e.scroll,Z=e.locale,C=e.onClick,E=e.onMouseEnter,k=e.legacyBehavior,j=void 0===k?!0!==Boolean(!1):k,T=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=g,!j||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var M=!1!==y,N=r(p?o.default.useTransition():[],2)[1],S=o.default.useContext(s.RouterContext),P=o.default.useContext(c.AppRouterContext);P&&(S=P);var B,L=o.default.useMemo((function(){var e=r(i.resolveHref(S,a,!0),2),t=e[0],n=e[1];return{href:t,as:v?i.resolveHref(S,v):n||t}}),[S,a,v]),z=L.href,I=L.as,A=o.default.useRef(z),R=o.default.useRef(I);j&&(B=o.default.Children.only(n));var $=j?B&&"object"===typeof B&&B.ref:t,H=r(u.useIntersection({rootMargin:"200px"}),3),U=H[0],X=H[1],D=H[2],Y=o.default.useCallback((function(e){R.current===I&&A.current===z||(D(),R.current=I,A.current=z),U(e),$&&("function"===typeof $?$(e):"object"===typeof $&&($.current=e))}),[I,$,z,D,U]);o.default.useEffect((function(){var e=X&&M&&i.isLocalURL(z),t="undefined"!==typeof Z?Z:S&&S.locale,n=h[z+"%"+I+(t?"%"+t:"")];e&&!n&&m(S,z,I,{locale:t})}),[I,z,X,Z,M,S]);var V={ref:Y,onClick:function(e){j||"function"!==typeof C||C(e),j&&B.props&&"function"===typeof B.props.onClick&&B.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,l,s,c,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?a?"softReplace":"softPush":a?"replace":"push"](n):t[a?"replace":"push"](n,r,{shallow:l,locale:c,scroll:s})};u?u(d):d()}}(e,S,z,I,w,x,_,O,Z,P?N:void 0)},onMouseEnter:function(e){j||"function"!==typeof E||E(e),j&&B.props&&"function"===typeof B.props.onMouseEnter&&B.props.onMouseEnter(e),i.isLocalURL(z)&&m(S,z,I,{priority:!0})}};if(!j||b||"a"===B.type&&!("href"in B.props)){var F="undefined"!==typeof Z?Z:S&&S.locale,q=S&&S.isLocaleDomain&&d.getDomainLocale(I,F,S.locales,S.domainLocales);V.href=q||f.addBasePath(l.addLocale(I,F,S&&S.defaultLocale))}return j?o.default.cloneElement(B,V):o.default.createElement("a",Object.assign({},T,V),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!i,u=a.useRef(),d=r(a.useState(!1),2),f=d[0],p=d[1],h=r(a.useState(null),2),m=h[0],v=h[1];a.useEffect((function(){if(i){if(u.current&&(u.current(),u.current=void 0),c||f)return;return m&&m.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:a},s.push(n),l.set(n,t),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,c,n,t,f]);var g=a.useCallback((function(){p(!1)}),[]);return[v,f,g]};var a=n(1720),o=n(9311),i="function"===typeof IntersectionObserver;var l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,a=(r=n(1720))&&r.__esModule?r:{default:r};var o=a.default.createContext(null);t.AppRouterContext=o;var i=a.default.createContext(null);t.AppTreeContext=i;var l=a.default.createContext(null);t.FullAppTreeContext=l},8455:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r,a=n(1799),o=n(7320),i=(n(7762),n(6870),n(4315),n(1330),n(2010)),l=n(9008),s=n.n(l),c=n(7059),u=n.n(c),d=n(4298),f=n.n(d),p=function(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)(f(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(u().analytics.googleAnalyticsId)}),(0,o.tZ)(f(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(u().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},h=function(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)(f(),{strategy:"lazyOnload","data-domain":u().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,o.tZ)(f(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},m=function(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)(f(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,o.tZ)(f(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},v=function(){return(0,o.tZ)(o.HY,{children:(0,o.tZ)(f(),{async:!0,defer:!0,"data-website-id":u().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},g=function(){return(0,o.tZ)(o.HY,{children:(0,o.tZ)(f(),{strategy:"lazyOnload",id:"posthog-script",children:'\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init(\''.concat(u().analytics.posthogAnalyticsId,"',{api_host:'https://app.posthog.com'})\n        ")})})},y=function(){return(0,o.BX)(o.HY,{children:[u().analytics.plausibleDataDomain&&(0,o.tZ)(h,{}),u().analytics.simpleAnalytics&&(0,o.tZ)(m,{}),u().analytics.umamiWebsiteId&&(0,o.tZ)(v,{}),u().analytics.googleAnalyticsId&&(0,o.tZ)(p,{}),u().analytics.posthogAnalyticsId&&(0,o.tZ)(g,{})]})},b=[{href:"/",title:"Home"},{href:"/blog",title:"Blog"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],w=n(1720);function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var _=function(e){return w.createElement("svg",x({"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 266 328",width:53.87,height:43.61},e),r||(r=w.createElement("defs",null,w.createElement("linearGradient",{id:"logo_svg__a",x1:237.26,y1:344.59,x2:28.74,y2:-16.59,gradientUnits:"userSpaceOnUse"},w.createElement("stop",{offset:0,stopColor:"#70d8ff"}),w.createElement("stop",{offset:.14,stopColor:"#53abd0",stopOpacity:.95}),w.createElement("stop",{offset:.28,stopColor:"#3a83a6",stopOpacity:.9}),w.createElement("stop",{offset:.43,stopColor:"#256284",stopOpacity:.87}),w.createElement("stop",{offset:.58,stopColor:"#154869",stopOpacity:.84}),w.createElement("stop",{offset:.72,stopColor:"#093556",stopOpacity:.82}),w.createElement("stop",{offset:.86,stopColor:"#022a4a",stopOpacity:.8}),w.createElement("stop",{offset:1,stopColor:"#002747",stopOpacity:.8})))),w.createElement("path",{style:{fill:"url(#logo_svg__a)"},d:"M248.74 0H0v328h68V56h142v80H81v192h185v-56H137v-80h129V0h-17.26z"}))},O=n(4373),Z=n(9072),C=n(4642);function E(){return(0,o.tZ)("footer",{children:(0,o.BX)("div",{className:"mt-16 flex flex-col items-center",children:[(0,o.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,o.tZ)(C.Z,{kind:"mail",href:"mailto:".concat(u().email),size:"6"}),(0,o.tZ)(C.Z,{kind:"github",href:u().github,size:"6"}),(0,o.tZ)(C.Z,{kind:"facebook",href:u().facebook,size:"6"}),(0,o.tZ)(C.Z,{kind:"youtube",href:u().youtube,size:"6"}),(0,o.tZ)(C.Z,{kind:"linkedin",href:u().linkedin,size:"6"}),(0,o.tZ)(C.Z,{kind:"twitter",href:u().twitter,size:"6"})]}),(0,o.BX)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,o.tZ)("div",{children:u().author}),(0,o.tZ)("div",{children:" \u2022 "}),(0,o.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,o.tZ)("div",{children:" \u2022 "}),(0,o.tZ)(O.Z,{href:"/",children:u().title})]}),(0,o.tZ)("div",{className:"mb-8 text-sm text-gray-500 dark:text-gray-400",children:(0,o.tZ)(O.Z,{href:"https://subhashjha.in",children:"@subhashjha.in"})})]})})}var k=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,o.BX)("div",{className:"sm:hidden",children:[(0,o.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:r,children:(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,o.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,o.BX)("div",{className:"fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,o.tZ)("div",{className:"flex justify-end",children:(0,o.tZ)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:r,children:(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,o.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,o.tZ)("nav",{className:"fixed mt-8 h-full",children:b.map((function(e){return(0,o.tZ)("div",{className:"px-12 py-4",children:(0,o.tZ)(O.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},j=function(){var e=(0,w.useState)(!1),t=e[0],n=e[1],r=(0,i.F)(),a=r.theme,l=r.setTheme,s=r.resolvedTheme;return(0,w.useEffect)((function(){return n(!0)}),[]),(0,o.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return l("dark"===a||"dark"===s?"light":"dark")},children:(0,o.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==s?(0,o.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,o.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},T=function(e){var t=e.children;return(0,o.tZ)(Z.Z,{children:(0,o.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,o.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,o.tZ)("div",{children:(0,o.tZ)(O.Z,{href:"/","aria-label":u().headerTitle,children:(0,o.BX)("div",{className:"flex items-center justify-between",children:[(0,o.tZ)("div",{className:"mr-3",children:(0,o.tZ)(_,{})}),"string"===typeof u().headerTitle?(0,o.tZ)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:u().headerTitle}):u().headerTitle]})})}),(0,o.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,o.tZ)("div",{className:"hidden sm:block",children:b.map((function(e){return(0,o.tZ)(O.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,o.tZ)(j,{}),(0,o.tZ)(k,{})]})]}),(0,o.tZ)("main",{className:"mb-auto",children:t}),(0,o.tZ)(E,{})]})})},M=(n(1163),n(3454));M.env.SOCKET;function N(e){var t=e.Component,n=e.pageProps;return(0,o.BX)(i.f,{attribute:"class",defaultTheme:u().theme,children:[(0,o.tZ)(s(),{children:(0,o.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,o.tZ)(y,{}),(0,o.tZ)(T,{children:(0,o.tZ)(t,(0,a.Z)({},n))})]})}},1330:function(){},4315:function(){},6870:function(){},7762:function(){},7663:function(e){!function(){var t={308:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,s=[],c=!1,u=-1;function d(){c&&l&&(c=!1,l.length?s=l.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=i(d);c=!0;for(var t=s.length;t;){for(l=s,s=[];++u<t;)l&&l[u].run();u=-1,t=s.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(308);e.exports=a}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){e.exports=n(699)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return o},jsxDEV:function(){return o},jsxs:function(){return o}});var r=n(6400),a=0;function o(e,t,n,o,i){var l,s,c={};for(s in t)"ref"==s?l=t[s]:c[s]=t[s];var u={type:e,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--a,__source:i,__self:o};if("function"==typeof e&&(l=e.defaultProps))for(s in l)void 0===c[s]&&(c[s]=l[s]);return r.YM.vnode&&r.YM.vnode(u),u}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return a}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});n(1720);var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);