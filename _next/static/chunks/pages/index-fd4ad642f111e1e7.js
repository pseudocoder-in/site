(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3678)}])},8968:function(e,t,r){"use strict";r.d(t,{w:function(){return m}});var a=r(7568),n=r(4051),i=r.n(n),l=r(7320),s=r(1720),o=r(7059),c=r.n(o),d=function(e){var t=e.title,r=void 0===t?"Subscribe to the newsletter":t,n=(0,s.useRef)(null),o=(0,s.useState)(!1),d=o[0],m=o[1],u=(0,s.useState)(""),p=u[0],g=u[1],h=(0,s.useState)(!1),y=h[0],f=h[1],x=function(){var e=(0,a.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/".concat(c().newsletter.provider),{body:JSON.stringify({email:n.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(!e.sent.error){e.next=11;break}return m(!0),g("Your e-mail address is invalid or you are already subscribed!"),e.abrupt("return");case 11:n.current.value="",m(!1),f(!0),g("Successfully! \ud83c\udf89 You are now subscribed.");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.BX)("div",{children:[(0,l.tZ)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:r}),(0,l.BX)("form",{className:"flex flex-col sm:flex-row",onSubmit:x,children:[(0,l.BX)("div",{children:[(0,l.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Email address"}),(0,l.tZ)("input",{autoComplete:"email",className:"w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black",id:"email-input",name:"email",placeholder:y?"You're subscribed !  \ud83c\udf89":"Enter your email",ref:n,required:!0,type:"email",disabled:y})]}),(0,l.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,l.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"Thank you!":"Sign up"})})]}),d&&(0,l.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:p})]})};t.Z=d;var m=function(e){var t=e.title;return(0,l.tZ)("div",{className:"flex items-center justify-center",children:(0,l.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,l.tZ)(d,{title:t})})})}},8590:function(e,t,r){"use strict";r.d(t,{$t:function(){return m},TQ:function(){return d},Uy:function(){return u}});var a=r(7320),n=r(9008),i=r.n(n),l=r(1163),s=r(7059),o=r.n(s),c=function(e){var t=e.title,r=e.description,n=e.ogType,s=e.ogImage,c=e.twImage,d=e.canonicalUrl,m=(0,l.useRouter)();return(0,a.BX)(i(),{children:[(0,a.tZ)("title",{children:t}),(0,a.tZ)("meta",{name:"robots",content:"follow, index"}),(0,a.tZ)("meta",{name:"description",content:r}),(0,a.tZ)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(m.asPath)}),(0,a.tZ)("meta",{property:"og:type",content:n}),(0,a.tZ)("meta",{property:"og:site_name",content:o().title}),(0,a.tZ)("meta",{property:"og:description",content:r}),(0,a.tZ)("meta",{property:"og:title",content:t}),"Array"===s.constructor.name?s.map((function(e){var t=e.url;return(0,a.tZ)("meta",{property:"og:image",content:t},t)})):(0,a.tZ)("meta",{property:"og:image",content:s},s),(0,a.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.tZ)("meta",{name:"twitter:site",content:o().twitter}),(0,a.tZ)("meta",{name:"twitter:title",content:t}),(0,a.tZ)("meta",{name:"twitter:description",content:r}),(0,a.tZ)("meta",{name:"twitter:image",content:c}),(0,a.tZ)("link",{rel:"canonical",href:d||"".concat(o().siteUrl).concat(m.asPath)})]})},d=function(e){var t=e.title,r=e.description,n=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,a.tZ)(c,{title:t,description:r,ogType:"website",ogImage:n,twImage:i})},m=function(e){var t=e.title,r=e.description,n=o().siteUrl+o().socialBanner,s=o().siteUrl+o().socialBanner,d=(0,l.useRouter)();return(0,a.BX)(a.HY,{children:[(0,a.tZ)(c,{title:t,description:r,ogType:"website",ogImage:n,twImage:s}),(0,a.tZ)(i(),{children:(0,a.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(o().siteUrl).concat(d.asPath,"/feed.xml")})})]})},u=function(e){var t=e.authorDetails,r=e.title,n=e.summary,s=e.date,d=e.lastmod,m=e.url,u=e.images,p=void 0===u?[]:u,g=e.canonicalUrl,h=((0,l.useRouter)(),new Date(s).toISOString()),y=new Date(d||s).toISOString(),f=(0===p.length?[o().socialBanner]:"string"===typeof p?[p]:p).map((function(e){return{"@type":"ImageObject",url:e.includes("http")?e:o().siteUrl+e}})),x={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":m},headline:r,image:f,datePublished:h,dateModified:y,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:o().author},publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:n},v=f[0].url;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(c,{title:r,description:n,ogType:"article",ogImage:f,twImage:v,canonicalUrl:g}),(0,a.BX)(i(),{children:[s&&(0,a.tZ)("meta",{property:"article:published_time",content:h}),d&&(0,a.tZ)("meta",{property:"article:modified_time",content:y}),(0,a.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(x,null,2)}})]})]})}},2917:function(e,t,r){"use strict";var a=r(7320),n=r(1664),i=r.n(n),l=r(7836);t.Z=function(e){var t=e.text;return(0,a.tZ)(i(),{href:"/tags/".concat((0,l.Z)(t)),children:(0,a.tZ)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},811:function(e,t,r){"use strict";var a=r(7059),n=r.n(a);t.Z=function(e){return new Date(e).toLocaleDateString(n().locale,{year:"numeric",month:"long",day:"numeric"})}},7836:function(e,t,r){"use strict";var a=r(9671);t.Z=function(e){return(0,a.slug)(e)}},3678:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u},default:function(){return p}});var a=r(7320),n=r(4373),i=r(8590),l=r(2917),s=r(7059),o=r.n(s),c=r(811),d=r(2811),m=r(8968),u=!0;function p(e){var t=e.posts;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(i.TQ,{title:o().title,description:o().description}),(0,a.BX)("div",{className:"mb-12 flex flex-col items-center gap-x-12 xl:flex-row",children:[(0,a.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,a.BX)("h3",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14",children:["Hi, I am a"," ",(0,a.BX)("span",{className:"text-orange-400",children:[(0,a.BX)(d.c,{type:"crossed-off",show:!0,color:"grey",strokeWidth:10,children:[" ","Pseudo"," "]}),"Coder"]})]}),(0,a.tZ)("p",{className:"text-lg leading-7 text-gray-500 dark:text-gray-400",children:o().description})]}),(0,a.BX)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.tZ)("div",{className:"py-12",children:(0,a.tZ)("div",{className:"my-2 grid items-start gap-8",children:(0,a.BX)("div",{className:"group relative",children:[(0,a.tZ)("div",{className:"animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"}),(0,a.tZ)(n.Z,{href:"/projects",children:(0,a.BX)("span",{className:"relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black",children:[(0,a.BX)("span",{className:"flex items-center space-x-5",children:[(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 -rotate-6 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})}),(0,a.tZ)("span",{className:"pr-6 text-gray-900 dark:text-gray-100",children:"What I built"})]}),(0,a.tZ)("span",{className:"pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100",children:"Projects\xa0\u2192"})]})})]})})}),(0,a.tZ)("div",{className:"gap-8",children:(0,a.BX)("div",{className:"group relative",children:[(0,a.tZ)("div",{className:"animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"}),(0,a.tZ)(n.Z,{href:"https://subhashjha.in/",children:(0,a.BX)("span",{className:"relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black",children:[(0,a.BX)("span",{className:"flex items-center space-x-5",children:[(0,a.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 -rotate-6 text-pink-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),(0,a.tZ)("span",{className:"pr-6 text-gray-900 dark:text-gray-100",children:"Read my story"})]}),(0,a.tZ)("span",{className:"pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100",children:"Website\xa0\u2192"})]})})]})})]})]}),(0,a.BX)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.tZ)("p",{className:"pt-12 text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-xl md:leading-14",children:"Latest Posts"}),(0,a.BX)("ul",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[!t.length&&"No posts found.",t.slice(0,5).map((function(e){var t=e.slug,r=e.date,i=e.title,s=e.summary,o=e.tags;return(0,a.tZ)("li",{className:"py-12",children:(0,a.tZ)("article",{children:(0,a.BX)("div",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,a.BX)("dl",{children:[(0,a.tZ)("dt",{className:"sr-only",children:"Published on"}),(0,a.tZ)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.tZ)("time",{dateTime:r,children:(0,c.Z)(r)})})]}),(0,a.BX)("div",{className:"space-y-5 xl:col-span-3",children:[(0,a.BX)("div",{className:"space-y-6",children:[(0,a.BX)("div",{children:[(0,a.tZ)("h2",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(t),className:"text-gray-900 dark:text-gray-100",children:i})}),(0,a.tZ)("div",{className:"flex flex-wrap",children:o.map((function(e){return(0,a.tZ)(l.Z,{text:e},e)}))})]}),(0,a.tZ)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:s})]}),(0,a.tZ)("div",{className:"text-base font-medium leading-6",children:(0,a.tZ)(n.Z,{href:"/blog/".concat(t),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":'Read "'.concat(i,'"'),children:"Read more \u2192"})})]})]})})},t)}))]})]}),t.length>5&&(0,a.tZ)("div",{className:"flex justify-end text-base font-medium leading-6",children:(0,a.tZ)(n.Z,{href:"/blog",className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400","aria-label":"all posts",children:"All Posts \u2192"})}),""!==o().newsletter.provider&&(0,a.tZ)("div",{className:"flex items-center justify-center pt-4",children:(0,a.tZ)(m.Z,{})})]})}}},function(e){e.O(0,[207,888,774,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);