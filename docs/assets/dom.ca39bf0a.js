import{r}from"./index.01b533f1.js";const p=function(s,n,e,t){const c=(e-n)/2;let o=s/(t/2);return o<1?c*o*o*o+n:(o-=2,c*(o*o*o+2)+n)},w=!!(typeof window!="undefined"&&window.document&&window.document.createElement),N=(s,n)=>{if(!w)return;const e=n||document.documentElement;return getComputedStyle(e).getPropertyValue(s)};function u(s){return s&&s===s.window}function L(s,n){if(typeof window=="undefined"||!s)return 0;const e=n?"scrollLeft":"scrollTop";let t=0;return u(s)?t=s[n?"pageXOffset":"pageYOffset"]:s instanceof Document?t=s.documentElement[e]:s&&(t=s[e]),t}const g=(s,n)=>{const{container:e=window,duration:t=450,easing:c=p}=n,o=L(e),i=Date.now();return new Promise(d=>{const l=()=>{const f=Date.now()-i,a=c(Math.min(f,t),o,s,t);u(e)?e.scrollTo(window.pageXOffset,a):e instanceof HTMLDocument||e.constructor.name==="HTMLDocument"?e.documentElement.scrollTop=a:e.scrollTop=a,f<t?r(l):r(d)};r(l)})},E=function(s,n){if(!s)return;let e=s.className;const t=(n||"").split(" ");for(let c=0,o=t.length;c<o;c++){const i=t[c];!i||(s.classList?s.classList.add(i):m(s,i)||(e+=` ${i}`))}s.classList||(s.className=e)},T=s=>(s||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""),D=function(s,n){if(!s||!n)return;const e=n.split(" ");let t=` ${s.className} `;for(let c=0,o=e.length;c<o;c++){const i=e[c];!i||(s.classList?s.classList.remove(i):m(s,i)&&(t=t.replace(` ${i} `," ")))}s.classList||(s.className=T(t))};function m(s,n){if(!s||!n)return!1;if(n.indexOf(" ")!==-1)throw new Error("className should not contain space.");return s.classList?s.classList.contains(n):` ${s.className} `.indexOf(` ${n} `)>-1}export{E as a,w as c,N as g,D as r,g as s};
