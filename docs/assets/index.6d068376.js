var V=Object.defineProperty;var Z=(t,r,u)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[r]=u;var b=(t,r,u)=>(Z(t,typeof r!="symbol"?r+"":r,u),u);import{D as L,W as A,V as c,p as e,$ as P,c as O}from"./index.1013dd05.js";import"./index.4aa3870c.js";import{t as G,p as Y}from"./marked.esm.01ee1597.js";import{T as q}from"./clsx.f76af8a1.js";import"./lodash.7222df35.js";import"./index.1b6b9343.js";import"./check.535a80c5.js";import"./close.ade88252.js";import{i as J}from"./style.d07ab3f3.js";import"./error-circle-filled.7e447e26.js";import"./close-circle-filled.8833db62.js";import"./space.1c898208.js";const K=t=>{if(typeof t=="string")return t;if(Array.isArray(t))return t[0]&&t[0][0]==="#"&&t.unshift("90deg"),`linear-gradient( ${t.join(",")} )`;const{from:r,to:u,direction:i="to right",...s}=t;let o=Object.keys(s);if(o.length){o=o.sort((l,a)=>parseFloat(l.substr(0,l.length-1))-parseFloat(a.substr(0,a.length-1)));const n=o.map(l=>`${s[l]} ${l}`);return`linear-gradient(${i}, ${n.join(",")})`}return`linear-gradient(${i}, ${r}, ${u})`};var Q=`.t-progress{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none}.t-progress__inner{position:relative;height:100%;background:var(--td-brand-color);border-radius:var(--td-radius-round);transition:all .2s cubic-bezier(.38,0,.24,1)}.t-progress__info{margin-left:var(--td-comp-margin-s);color:var(--td-text-color-primary);white-space:nowrap;display:inline-flex}.t-progress__icon{font-size:calc(var(--td-font-size-body-medium) + 2px)}.t-progress__bar{width:100%;height:var(--td-size-3);overflow:hidden;background:var(--td-bg-color-component);border-radius:var(--td-radius-round)}.t-progress--thin{display:flex;justify-content:space-between;align-items:center}.t-progress--plump{height:var(--td-comp-size-xxs);border-radius:calc(var(--td-comp-size-xxs) / 2);display:flex;align-items:center}.t-progress--plump .t-progress__info{font-size:var(--td-font-size-body-small)}.t-progress--over-ten .t-progress__info{position:absolute;top:50%;z-index:10;right:var(--td-comp-margin-s);color:var(--td-text-color-anti);transform:translateY(-50%)}.t-progress--under-ten .t-progress__info,.t-progress--under-ten .t-progress__inner{display:inline-block}.t-progress--under-ten .t-progress__info{vertical-align:top}.t-progress--circle{position:relative}.t-progress--circle .t-progress__info{position:absolute;display:block;top:50%;left:50%;width:100%;margin:0;font-size:inherit;font-weight:600;line-height:1;text-align:center;transform:translate(-50%,-50%)}.t-progress--circle .t-progress__circle-outer{stroke:var(--td-bg-color-component)}.t-progress--circle .t-progress__circle-inner{stroke:var(--td-brand-color);transition:all .2s cubic-bezier(.38,0,.24,1)}.t-progress--circle .t-progress__icon{font-size:2.4em}.t-progress--status--active .t-progress__inner:before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:"";animation:progress-active-animation 2s cubic-bezier(.23,.99,.86,.2) infinite;background:var(--td-text-color-anti);opacity:.2}.t-progress--status--success .t-progress__inner{background:var(--td-success-color)}.t-progress--status--success .t-progress__circle-inner{stroke:var(--td-success-color)}.t-progress--status--success .t-progress__icon{color:var(--td-success-color)}.t-progress--status--warning .t-progress__inner{background:var(--td-warning-color)}.t-progress--status--warning .t-progress__circle-inner{stroke:var(--td-warning-color)}.t-progress--status--warning .t-progress__icon{color:var(--td-warning-color)}.t-progress--status--error .t-progress__inner{background:var(--td-error-color)}.t-progress--status--error .t-progress__circle-inner{stroke:var(--td-error-color)}.t-progress--status--error .t-progress__icon{color:var(--td-error-color)}@keyframes progress-active-animation{0%{width:0;opacity:.1}35%{width:50%;opacity:.4}to{width:100%;opacity:0}}
`,X=Q+G,E=`.t-progress__icon{font-size:calc(var(--td-font-size-body-medium) + 2px)}.t-progress-circle .t-progress__icon{font-size:2.4em}.t-progress--status--success .t-progress__icon{color:var(--td-success-color)}.t-progress--status--warning .t-progress__icon{color:var(--td-warning-color)}.t-progress--status--error .t-progress__icon{color:var(--td-error-color)}
`;class C extends A{render(r){const u=c("t-icon",r.class,{["t-size-s"]:r.size==="small",["t-size-m"]:r.size==="medium",["t-size-l"]:r.size==="large"}),i=r.size==="small"||r.size==="medium"||r.size==="large",s={...r.style,fontSize:r.size};return e("svg",{class:u,width:i?"24":r.size,height:i?"24":r.size,style:s,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{d:"M13 2L13 16.5H11L11 2L13 2ZM11 19H13.0039V21.0039H11V19Z",fill:"black"}))}}b(C,"css",J),b(C,"defaultProps",{size:"1em",style:{fill:"#000"}}),b(C,"propTypes",{size:[String,Number],style:Object,class:String});L("t-icon-error",C);var ee=Object.defineProperty,re=Object.getOwnPropertyDescriptor,te=(t,r,u,i)=>{for(var s=i>1?void 0:i?re(r,u):r,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(r,u,s):n(s))||s);return i&&s&&ee(r,u,s),s};let f=class extends A{constructor(){super(...arguments),this.componentName=q("progress"),this.iconMap={success:e("t-icon-check-circle-filled",{class:c(`${this.componentName}--status--success`,`${this.componentName}__icon`),css:E}),error:e("t-icon-close-circle-filled",{class:c(`${this.componentName}--status--warning`,`${this.componentName}__icon`),css:E}),warning:e("t-icon-error-circle-filled",{class:c(`${this.componentName}--status--error`,`${this.componentName}__icon`),css:E})}}install(){}render(t){const{componentName:r}=this;let{iconMap:u}=this;const{theme:i,percentage:s,label:o,color:n="",trackColor:l,strokeWidth:a,size:v,class:k}=t;let{status:p}=t;!p&&s>=100&&(p="success");let h;const y=`${r}--status--${p}`,$=()=>{if(!o)return"";let m;return typeof o=="boolean"?(m=e("div",{class:`${r}__info`},`${s}%`),["success","error","warning"].includes(p)&&(m=e("div",{class:`${r}__info`},u[p]))):m=e("div",{class:`${r}__info`},o),m};if(i==="circle"){u={success:e("t-icon-check",{class:c(`${r}--status--success`,`${r}--circle`,`${r}__icon`),css:E}),error:e("t-icon-close",{class:c(`${r}--status--error`,`${r}--circle`,`${r}__icon`),css:E}),warning:e("t-icon-error",{class:c(`${r}--status--warning`,`${r}--circle`,`${r}__icon`),css:E})};const m=()=>{let F=112;if(!v)return F;switch(v){default:F=Number(v);break;case"small":F=72;break;case"medium":F=112;break;case"large":F=160;break}return F},g=(()=>!a&&v==="small"?4:typeof a!="number"||Number.isNaN(a)?6:a)(),d=m(),B=d/2,I=B-g,x=Math.PI*2*B,T=s/100,R=`${x*T}  ${x*(1-T)}`,W=I*.27,H={width:d,height:d,fontSize:4+W},U={stroke:n,strokeLinecap:g<30?"round":"buff"},_=B+g/2;return h=e("div",{class:c(`${r}--circle`,{[`${y}`]:p}),style:H},$(),e("svg",{width:d,height:d,viewBox:`0 0 ${d+g} ${d+g}`},e("circle",{cx:_,cy:_,r:B,"stroke-width":g,stroke:l||"var(--td-bg-color-component)",fill:"none"}),s>0&&e("circle",{cx:_,cy:_,r:B,"stroke-width":g,fill:"none",transform:`matrix(0,-1,1,0,0,${d+g})`,"stroke-dasharray":R,class:`${r}__circle-inner`,style:U}))),e("div",{class:c(k)},h)}const w=()=>{if(a)return typeof a=="string"?a:`${a}px`},N={height:w(),backgroundColor:l,borderRadius:w()},S={width:`${s}%`,background:K(n),borderRadius:w()};return i==="plump"?h=e("div",{class:c(`${r}__bar`,`${r}--plump`,{[`${y}`]:p,[`${r}--over-ten`]:s>10,[`${r}--under-ten`]:s<=10}),style:N},s>10?e("div",{class:`${r}__inner`,style:S},o&&e("div",{class:`${r}__info`,style:{color:"#fff"}},`${s}%`)):e(e.f,null,e("div",{class:`${r}__inner`,style:S}),$())):h=e("div",{class:c(`${r}--thin`,{[`${y}`]:p})},e("div",{class:`${r}__bar`,style:N},e("div",{class:`${r}__inner`,style:S})),$()),e("div",{class:c(k),style:t.style},h)}};f.css=X;f.defaultProps={label:!0,percentage:0,size:"medium",theme:"line"};f.propTypes={color:[String,Array,Object],label:Object,percentage:Number,size:[String,Number],status:String,strokeWidth:[String,Number],theme:String,trackColor:String};f=te([P("t-progress")],f);var se=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,ie=(t,r,u,i)=>{for(var s=i>1?void 0:i?ue(r,u):r,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(r,u,s):n(s))||s);return i&&s&&se(r,u,s),s};const z={textAlign:"center"};let j=class extends A{constructor(){super(...arguments),this.percent=0}install(){this.timer=setInterval(()=>{this.percent=this.percent%100+10,this.update()},1e3)}uninstall(){clearInterval(this.timer)}render(){const{percent:t}=this;return e("t-space",{direction:"vertical",size:"large"},e("t-space",{style:z},e("t-space",{direction:"vertical"},e("div",null,"\u9ED8\u8BA4\u6837\u5F0F"),e("t-progress",{theme:"circle",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u4E0D\u663E\u793A\u6570\u5B57"),e("t-progress",{theme:"circle",label:!1,percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),e("t-progress",{theme:"circle",label:e("div",null,"75 day"),percentage:t}))),e("t-space",{style:z},e("t-space",{direction:"vertical"},e("div",null,"\u8FDB\u5EA6\u5B8C\u6210"),e("t-progress",{theme:"circle",status:"success",percentage:100})),e("t-space",{direction:"vertical"},e("div",null,"\u8FDB\u5EA6\u53D1\u751F\u9519\u8BEF"),e("t-progress",{theme:"circle",status:"error",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u8FDB\u5EA6\u88AB\u4E2D\u65AD"),e("t-progress",{theme:"circle",status:"warning",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u81EA\u5B9A\u4E49\u989C\u8272"),e("t-progress",{theme:"circle",status:"error",color:"#00f",trackColor:"#0f0",percentage:t}))),e("t-space",{align:"center",style:z},e("t-space",{direction:"vertical"},e("div",null,"\u5C0F\u5C3A\u5BF8"),e("t-progress",{theme:"circle",size:"small",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u9ED8\u8BA4\u5C3A\u5BF8"),e("t-progress",{theme:"circle",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u5927\u5C3A\u5BF8"),e("t-progress",{theme:"circle",size:"large",percentage:t})),e("t-space",{direction:"vertical"},e("div",null,"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"),e("t-progress",{theme:"circle",percentage:t,strokeWidth:50}))))}};j=ie([P("progress-circle")],j);var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,ce=(t,r,u,i)=>{for(var s=i>1?void 0:i?ne(r,u):r,o=t.length-1,n;o>=0;o--)(n=t[o])&&(s=(i?n(r,u,s):n(s))||s);return i&&s&&oe(r,u,s),s};let M=class extends A{constructor(){super(...arguments),this.percent=0}install(){this.timer=setInterval(()=>{this.percent=this.percent%100+10,this.update()},1e3)}uninstall(){clearInterval(this.timer)}render(){const{percent:t}=this;return e("t-space",{direction:"vertical",style:{width:"100%"}},e("h3",null,"\u9ED8\u8BA4\u5728\u7EBF\u5F62\u5916\u5C55\u793A\u8FDB\u5EA6\u548C\u72B6\u6001"),e("div",null,"\u9ED8\u8BA4\u6837\u5F0F"),e("t-progress",{percentage:t}),e("div",null,"\u8FDB\u5EA6\u88AB\u4E2D\u65AD"),e("t-progress",{status:"warning",percentage:t}),e("div",null,"\u8FDB\u5EA6\u72B6\u6001\u53D1\u751F\u91CD\u5927\u9519\u8BEF"),e("t-progress",{status:"error",percentage:t}),e("div",null,"\u8FDB\u5EA6\u6B63\u5E38\u66F4\u65B0"),e("t-progress",{status:"active",percentage:t}),e("div",null,"\u4E0D\u663E\u793A\u6570\u5B57"),e("t-progress",{label:!1,percentage:t}),e("div",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),e("t-progress",{label:e("div",null,"\u81EA\u5B9A\u4E49\u6587\u672C"),percentage:t}),e("div",null,"\u81EA\u5B9A\u4E49\u989C\u8272\u4E0E\u9AD8\u5EA6"),e("t-progress",{strokeWidth:30,color:"#00f",trackColor:"#0f0",percentage:t}),e("div",null,"\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272"),e("t-progress",{color:["#f00","#0ff","#f0f"],percentage:t}),e("t-progress",{color:{"0%":"#f00","100%":"#0ff"},trackColor:"#0f0",percentage:t}),e("t-progress",{strokeWidth:30,color:{direction:"to right",from:"#f00",to:"#0ff"},percentage:t}),e("h3",null,"\u53EF\u4EE5\u5728\u7EBF\u5F62\u5185\u5C55\u793A\u8FDB\u5EA6\u4FE1\u606F"),e("t-space",{direction:"vertical",style:{width:"100%"}},e("div",null,"\u9ED8\u8BA4\u6837\u5F0F"),e("t-progress",{theme:"plump",percentage:"30"}),e("div",null,"\u8FDB\u5EA60-10%\u65F6\u6570\u5B57\u6570\u5B57\u4F4D\u7F6E\u51FA\u73B0\u5728\u76EE\u524D\u8FDB\u5EA6\u7684\u53F3\u8FB9\u533A\u57DF"),e("t-progress",{theme:"plump",percentage:"5"})))}};M=ce([P("progress-line")],M);var D;const ae=Y("\n## API\n### Progress Props\n\n\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20\n-- | -- | -- | -- | --\nclassName | String | - | \u7C7B\u540D | N\nstyle | Object | - | \u6837\u5F0F\uFF0CTS \u7C7B\u578B\uFF1A`React.CSSProperties` | N\ncolor | String / Object / Array | '' | \u8FDB\u5EA6\u6761\u989C\u8272\u3002\u793A\u4F8B\uFF1A'#ED7B2F' \u6216 'orange' \u6216 `['#f00', '#0ff', '#f0f']` \u6216 `{ '0%': '#f00', '100%': '#0ff' }` \u6216  `{ from: '#000', to: '#000' }` \u7B49\u3002TS \u7C7B\u578B\uFF1A`string \\| Array<string> \\| Record<string, string>` | N\nlabel | TNode | true | \u8FDB\u5EA6\u767E\u5206\u6BD4\uFF0C\u53EF\u81EA\u5B9A\u4E49\u3002TS \u7C7B\u578B\uFF1A`string | boolean | TNode`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\npercentage | Number | 0 | \u8FDB\u5EA6\u6761\u767E\u5206\u6BD4 | N\nsize | String / Number | 'medium' | \u8FDB\u5EA6\u6761\u5C3A\u5BF8\uFF0C\u793A\u4F8B\uFF1Asmall/medium/large/240\u3002small \u503C\u4E3A 72\uFF1B medium \u503C\u4E3A 112\uFF1Blarge \u503C\u4E3A 160 | N\nstatus | String | - | \u8FDB\u5EA6\u6761\u72B6\u6001\u3002\u53EF\u9009\u9879\uFF1Asuccess/error/warning/active\u3002TS \u7C7B\u578B\uFF1A`StatusEnum` `type StatusEnum = 'success' \\| 'error' \\| 'warning' \\| 'active'`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/progress/type.ts) | N\nstrokeWidth | String / Number | - | \u8FDB\u5EA6\u6761\u7EBF\u5BBD\u3002\u5BBD\u5EA6\u6570\u503C\u4E0D\u80FD\u8D85\u8FC7 size \u7684\u4E00\u534A\uFF0C\u5426\u5219\u4E0D\u80FD\u8F93\u51FA\u73AF\u5F62\u8FDB\u5EA6 | N\ntheme | String | line | \u8FDB\u5EA6\u6761\u98CE\u683C\u3002\u503C\u4E3A line\uFF0C\u6807\u7B7E\uFF08label\uFF09\u663E\u793A\u5728\u8FDB\u5EA6\u6761\u53F3\u4FA7\uFF1B\u503C\u4E3A plump\uFF0C\u6807\u7B7E\uFF08label\uFF09\u663E\u793A\u5728\u8FDB\u5EA6\u6761\u91CC\u9762\uFF1B\u503C\u4E3A circle\uFF0C\u6807\u7B7E\uFF08label\uFF09\u663E\u793A\u5728\u8FDB\u5EA6\u6761\u6B63\u4E2D\u95F4\u3002\u53EF\u9009\u9879\uFF1Aline/plump/circle\u3002TS \u7C7B\u578B\uFF1A`ThemeEnum` `type ThemeEnum = 'line' \\| 'plump' \\| 'circle'`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/progress/type.ts) | N\ntrackColor | String | '' | \u8FDB\u5EA6\u6761\u672A\u5B8C\u6210\u90E8\u5206\u989C\u8272 | N");L("page-progress",(D=class extends A{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=O(),this.tdDocTabs=O(),this.updateTab=t=>{this.updateProps({tab:t})}}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:r})=>{this.updateTab(r)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"\u7EBF\u5F62\u8FDB\u5EA6\u6761"},"\u7EBF\u5F62\u8FDB\u5EA6\u6761 ",e("a",{href:"#\u7EBF\u5F62\u8FDB\u5EA6\u6761",class:"header-anchor"})),e("p",null,"\u4EE5\u7EBF\u5F62\u8868\u793A\u8FDB\u5EA6\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u9009\u62E9\u6027\u5730\u914D\u6709\u6587\u5B57\u6216\u56FE\u6807\u8865\u5145\u663E\u793A\u8FDB\u5EA6\u548C\u72B6\u6001\u3002\u591A\u7528\u4E8E\u4FE1\u606F\u91CF\u8F83\u4E3A\u4E30\u5BCC\u7684\u60C5\u51B5\u3002"),e("demo-wrapper",null,e("progress-line",null)),e("h3",{id:"\u73AF\u5F62\u8FDB\u5EA6\u6761"},"\u73AF\u5F62\u8FDB\u5EA6\u6761 ",e("a",{href:"#\u73AF\u5F62\u8FDB\u5EA6\u6761",class:"header-anchor"})),e("p",null,"\u4EE5\u7EBF\u5F62\u8868\u793A\u8FDB\u5EA6\u7684\u7EC4\u4EF6\uFF0C\u73AF\u5185\u53EF\u9009\u62E9\u6027\u5730\u914D\u6709\u6587\u5B57\u6216\u56FE\u6807\u8865\u5145\u663E\u793A\u8FDB\u5EA6\u548C\u72B6\u6001\u3002\u591A\u7528\u4E8E\u9700\u8981\u5F3A\u8C03\u8FDB\u5EA6\u767E\u5206\u6BD4\u7684\u60C5\u51B5\u3002"),e("demo-wrapper",null,e("progress-circle",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:ae}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},D.defaultProps={tab:"demo"},D.propTypes={tab:String},D));