import{W as x,c as S,p as n,V as d,$ as w}from"./index.1013dd05.js";import{T as c}from"./clsx.f76af8a1.js";import"./lodash.7222df35.js";import{c as j,a as N,r as P}from"./dom.3f43d172.js";import{g as k}from"./helper.48ca9b19.js";import"./index.1b6b9343.js";import{t as T}from"./marked.esm.01ee1597.js";function _(t,e){Object.keys(e).forEach(o=>{t.style[o]=e[o]})}function B(t){var f,m;let e={};if(!t||typeof window=="undefined")return;const{color:i,fontSize:o}=(f=window==null?void 0:window.getComputedStyle)==null?void 0:f.call(window,t),s=(m=window==null?void 0:window.navigator)==null?void 0:m.userAgent,a=/Safari/.test(s)&&!/Chrome/.test(s),l=/(?=.*iPhone)[?=.*MicroMessenger]/.test(s)&&!/Chrome/.test(s);if((a||l)&&(e={transformOrigin:"0px 0px",transform:`scale(${parseInt(o,10)/12})`}),i&&k()>11){const r=i.match(/[\d.]+/g),p=r?`rgba(${r[0]}, ${r[1]}, ${r[2]}, 0)`:"";_(t,{...e,background:`conic-gradient(from 90deg at 50% 50%,${p} 0deg, ${i} 360deg)`})}else _(t,{...e,background:""})}var L=`@keyframes t-fade-in{0%{opacity:0}to{opacity:1}}@keyframes t-fade-out{0%{opacity:1}to{opacity:0}}@keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon-loading{animation:t-spin 1s linear infinite}@keyframes t-zoom-out{0%{transform:scale(.2)}to{transform:scale(1)}}.t-loading{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;color:var(--td-brand-color);font-size:var(--td-comp-size-l)}.t-loading--lock{overflow:hidden}.t-loading.t-size-s{font-size:var(--td-comp-size-xxxs)}.t-loading.t-size-l{font-size:var(--td-comp-size-xxxl)}.t-loading__parent--relative{position:relative!important}.t-loading__fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;z-index:3500}.t-loading--center{display:inline-flex;align-items:center;vertical-align:middle;justify-content:center}.t-loading__content{position:absolute;left:48%;top:20%}.t-loading--inherit-color{color:inherit}.t-loading__parent{position:relative}.t-loading__overlay{background-color:var(--td-mask-disabled)}.t-loading--full{position:absolute;top:0;left:0;width:100%;height:100%}.t-loading--hidden{visibility:hidden}.t-loading--visible{visibility:visible}.t-loading__text{width:auto;display:inline-block;vertical-align:middle;font:var(--td-font-body-medium);margin-left:var(--td-comp-margin-xs)}.t-loading__gradient{display:inline-flex;justify-content:center;align-items:center;vertical-align:middle}.t-loading__gradient-conic{width:100%;height:100%;border-radius:var(--td-radius-circle);background:conic-gradient(from 90deg at 50% 50%,#fff 0deg,currentcolor 360deg);-webkit-mask:radial-gradient(transparent calc(50% - .5px),#fff 50%);mask:radial-gradient(transparent calc(50% - .5px),#fff 50%)}
`,z=L+T,D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,A=(t,e,i,o)=>{for(var s=o>1?void 0:o?I(e,i):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(o?l(e,i,s):l(s))||s);return o&&s&&D(e,i,s),s};let g=class extends x{constructor(){super(...arguments),this.conicRef=S(),this.useCircleAdapter=()=>{const t=this.conicRef.current;B(t)}}installed(){this.useCircleAdapter()}render(){const t=c("loading__gradient");return n("svg",{className:d(t,c("icon-loading")),viewBox:"0 0 12 12",version:"1.1",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg"},n("foreignObject",{x:"0",y:"0",width:"12",height:"12"},n("div",{class:c("loading__gradient-conic"),ref:this.conicRef})))}};g.css=z;g.isLightDOM=!0;g=A([w("t-loading-gradient")],g);var M=Object.defineProperty,R=Object.getOwnPropertyDescriptor,U=(t,e,i,o)=>{for(var s=o>1?void 0:o?R(e,i):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(s=(o?l(e,i,s):l(s))||s);return o&&s&&M(e,i,s),s};let h=class extends x{constructor(){super(...arguments),this.componentName=c("loading"),this.lockClass=`${this.componentName}--lock`,this.textClass=`${this.componentName}__text`,this.centerClass=`${this.componentName}--center`,this.inheritColorClass=`${this.componentName}--inherit-color`,this.fullClass=`${this.componentName}--full`,this.fullscreenClass=`${this.componentName}__fullscreen`,this.overlayClass=`${this.componentName}__overlay`,this.relativeClass=`${this.componentName}__parent`,this.flag=!1,this.setTimer=()=>{const{delay:t,loading:e}=this.props;t&&e?this.timer=setTimeout(()=>{this.showLoading=e,this.flag=!0,this.update()},t):(this.showLoading=e,this.flag=!0,this.update())},this.setBodyClass=()=>{const{loading:t,preventScrollThrough:e,fullscreen:i}=this.props;e&&i&&j&&t&&N(document.body,this.lockClass)},this.calcStyles=()=>{const{zIndex:t,size:e}=this.props,i={};return t!==void 0&&Object.assign(i,{zIndex:t}),["small","medium","large"].includes(e)||Object.assign(i,{fontSize:e}),this.props.style?{...i,...this.props.style}:i},this.commonContent=()=>{const{indicator:t,text:e}=this.props;let i=n("t-loading-gradient",null);return t&&typeof t!="boolean"&&(i=t),n(n.f,null,t?i:null,e?n("div",{className:this.textClass},e):null)}}beforeUpdate(){this.props.loading===!0&&this.flag===!1&&this.setTimer(),this.flag===!1||this.props.loading===!1?this.showLoading=this.props.delay?!1:this.props.loading:this.flag=!1,this.setBodyClass()}uninstall(){clearTimeout(this.timer),P(document.body,this.lockClass)}render(t){const{componentName:e,fullClass:i,centerClass:o,overlayClass:s,relativeClass:a,fullscreenClass:l,inheritColorClass:f,calcStyles:m,commonContent:r,showLoading:p}=this,{fullscreen:O,content:y,children:b,loading:C,showOverlay:$}=t,u=this.calcStyles(),v=d(o,{[c("size-s")]:t.size==="small",[c("size-l")]:t.size==="large",[c("size-m")]:t.size==="medium"},{[f]:t.inheritColor},t.class);return O?C?n("div",{class:d(e,l,o,s),style:u},n("div",{class:v},r())):null:y||b.length>0?n("div",{class:a},y||b,p?n("div",{class:d(e,v,i,{[s]:$}),style:u},r()):null):C?n("div",{class:d(e,v),style:u},r()):null}};h.css=z;h.defaultProps={delay:0,fullscreen:!1,indicator:!0,inheritColor:!1,loading:!0,preventScrollThrough:!0,showOverlay:!0,size:"medium"};h.propTypes={attach:[Object,String],children:Object,content:Object,delay:Number,fullscreen:Boolean,indicator:[Boolean,Object],inheritColor:Boolean,loading:Boolean,preventScrollThrough:Boolean,showOverlay:Boolean,size:String,text:Object,zIndex:Number};h=U([w("t-loading")],h);export{h as L};