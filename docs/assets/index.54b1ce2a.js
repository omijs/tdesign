var S=Object.defineProperty;var j=(l,t,a)=>t in l?S(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var c=(l,t,a)=>(j(l,typeof t!="symbol"?t+"":t,a),a);import{$ as o,W as i,p as u,D as E,V as m,c as C}from"./index.79a2e431.js";import"./index.ed35924c.js";import"./button.d4c0131e.js";import"./space.81e99772.js";import"./add.bfb317b9.js";import{i as g}from"./style.d07ab3f3.js";import"./discount.12948369.js";import{p as T}from"./marked.esm.01ee1597.js";import"./clsx.f76af8a1.js";import"./lodash.966b3234.js";import"./index.01b533f1.js";import"./parseTNode.6312bff6.js";import"./loading.67f1284a.js";import"./dom.ca39bf0a.js";import"./helper.a6745112.js";var N=Object.defineProperty,H=Object.getOwnPropertyDescriptor,M=(l,t,a,n)=>{for(var e=n>1?void 0:n?H(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&N(t,a,e),e};let v=class extends i{render(l,t){return console.log(l),u(u.f,null,u("h2",null,"\u57FA\u7840\u9009\u9879"),u("label",null,u("input",{type:"checkbox",onChange:a=>{const n=a.target;l.rootEl.block=n.checked,l.rootEl.update()}}),"block"),u("label",null,u("input",{type:"checkbox",onChange:a=>{const n=a.target;l.rootEl.loading=n.checked,l.rootEl.update()}}),"loading"),u("label",null,u("input",{type:"checkbox",onChange:a=>{const n=a.target;l.rootEl.disabled=n.checked,l.rootEl.update()}}),"disabled"),u("label",null,u("input",{id:"loading",type:"checkbox",onChange:a=>{const n=a.target;l.rootEl.ghost=n.checked,l.rootEl.update()}}),"ghost"))}};v=M([o("t-button-base")],v);var V=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,q=(l,t,a,n)=>{for(var e=n>1?void 0:n?Z(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&V(t,a,e),e};let B=class extends i{render(l,t){return u(u.f,null,u("h2",null,"\u6309\u94AE\u989C\u8272"),u("label",null,u("input",{name:"theme",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.theme="default"),l.rootEl.update()}})," default"),u("label",null,u("input",{name:"theme",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.theme="primary"),l.rootEl.update()}})," primary"),u("label",null,u("input",{name:"theme",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.theme="danger"),l.rootEl.update()}})," danger"),u("label",null,u("input",{name:"theme",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.theme="warning"),l.rootEl.update()}})," warning"),u("label",null,u("input",{name:"theme",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.theme="success"),l.rootEl.update()}})," success"))}};B=q([o("t-button-color")],B);var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,J=(l,t,a,n)=>{for(var e=n>1?void 0:n?W(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&G(t,a,e),e};let f=class extends i{render(l,t){return u(u.f,null,u("h2",null,"\u6309\u94AE\u98CE\u683C"),u("label",null,u("input",{name:"variant",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.variant="base"),l.rootEl.update()}})," \u57FA\u672C\u6309\u94AE"),u("label",null,u("input",{name:"variant",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.variant="outline"),l.rootEl.update()}})," \u586B\u5145\u6309\u94AE"),u("label",null,u("input",{name:"variant",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.variant="dashed"),l.rootEl.update()}})," \u865A\u7EBF\u6309\u94AE"),u("label",null,u("input",{name:"variant",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.variant="text"),l.rootEl.update()}})," \u6587\u672C\u6309\u94AE"))}};f=J([o("t-button-variant")],f);var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,R=(l,t,a,n)=>{for(var e=n>1?void 0:n?Q(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&K(t,a,e),e};let p=class extends i{render(l,t){return u(u.f,null,u("h2",null,"\u4E0D\u540C\u5927\u5C0F"),u("label",null,u("input",{name:"size",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.size="small"),l.rootEl.update()}})," \u5C0F\u6309\u94AE"),u("label",null,u("input",{name:"size",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.size="medium"),l.rootEl.update()}})," \u4E2D\u6309\u94AE"),u("label",null,u("input",{name:"size",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.size="large"),l.rootEl.update()}})," \u5927\u6309\u94AE"))}};p=R([o("t-button-size")],p);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,U=(l,t,a,n)=>{for(var e=n>1?void 0:n?Y(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&X(t,a,e),e};let D=class extends i{render(l,t){return u(u.f,null,u("h2",null,"\u4E0D\u540C\u5F62\u72B6\u6309\u94AE"),u("label",null,u("input",{name:"shape",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.shape="rectangle"),l.rootEl.update()}})," \u6B63\u5E38"),u("label",null,u("input",{name:"shape",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.shape="square"),l.rootEl.update()}})," \u65B9\u5F62"),u("label",null,u("input",{name:"shape",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.shape="round"),l.rootEl.update()}})," \u692D\u5706"),u("label",null,u("input",{name:"shape",type:"radio",onChange:a=>{a.target.checked&&(l.rootEl.shape="circle"),l.rootEl.update()}})," \u5706\u5F62"))}};D=U([o("t-button-shape")],D);var I=Object.defineProperty,k=Object.getOwnPropertyDescriptor,uu=(l,t,a,n)=>{for(var e=n>1?void 0:n?k(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&I(t,a,e),e};let z=class extends i{render(){return u("t-space",null,u("t-button",{theme:"default",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{theme:"default",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{theme:"default",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{theme:"default",variant:"text"},"\u6587\u5B57\u6309\u94AE"))}};z=uu([o("button-base")],z);var tu=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,au=(l,t,a,n)=>{for(var e=n>1?void 0:n?eu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&tu(t,a,e),e};let _=class extends i{render(){return u("t-space",{direction:"vertical",style:{width:"100%"}},u("t-button",{block:!0,variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{block:!0,variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{block:!0,variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{block:!0,variant:"text"},"\u6587\u5B57\u6309\u94AE"))}};_=au([o("button-block")],_);var nu=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,ru=(l,t,a,n)=>{for(var e=n>1?void 0:n?lu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&nu(t,a,e),e};let w=class extends i{render(){return u("t-space",{size:24},u("t-button",{tag:"div"},"div"),u("t-button",{tag:"a"},"a"),u("t-button",{href:"#"},"a:href"))}};w=ru([o("button-custom-element")],w);var su=Object.defineProperty,iu=Object.getOwnPropertyDescriptor,ou=(l,t,a,n)=>{for(var e=n>1?void 0:n?iu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&su(t,a,e),e};let y=class extends i{render(){return u("t-space",{direction:"vertical"},u("t-space",null,u("t-button",{variant:"outline",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"dashed",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"text",ghost:!0},"\u5E7D\u7075\u6309\u94AE")),u("t-space",null,u("t-button",{variant:"outline",theme:"primary",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"dashed",theme:"primary",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"text",theme:"primary",ghost:!0},"\u5E7D\u7075\u6309\u94AE")),u("t-space",null,u("t-button",{variant:"outline",theme:"success",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"dashed",theme:"success",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"text",theme:"success",ghost:!0},"\u5E7D\u7075\u6309\u94AE")),u("t-space",null,u("t-button",{variant:"outline",theme:"warning",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"dashed",theme:"warning",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"text",theme:"warning",ghost:!0},"\u5E7D\u7075\u6309\u94AE")),u("t-space",null,u("t-button",{variant:"outline",theme:"danger",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"dashed",theme:"danger",ghost:!0},"\u5E7D\u7075\u6309\u94AE"),u("t-button",{variant:"text",theme:"danger",ghost:!0},"\u5E7D\u7075\u6309\u94AE")))}};y=ou([o("button-ghost")],y);class d extends i{render(t){const a=m("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),n=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:a,width:n?"24":t.size,height:n?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M15.0962 5.90381C12.5578 3.3654 8.44221 3.3654 5.90381 5.90381C3.3654 8.44221 3.3654 12.5578 5.90381 15.0962C8.44221 17.6346 12.5578 17.6346 15.0962 15.0962C17.6346 12.5578 17.6346 8.44221 15.0962 5.90381ZM4.48959 4.48959C7.80905 1.17014 13.191 1.17014 16.5104 4.48959C19.5906 7.56983 19.8126 12.4259 17.1764 15.7621L22.5208 21.1066L21.1066 22.5208L15.7621 17.1764C12.4259 19.8126 7.56983 19.5906 4.48959 16.5104C1.17014 13.191 1.17014 7.80905 4.48959 4.48959Z",fill:"black"}))}}c(d,"css",g),c(d,"defaultProps",{size:"1em",style:{fill:"#000"}}),c(d,"propTypes",{size:[String,Number],style:Object,class:String});E("t-icon-search",d);class b extends i{render(t){const a=m("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),n=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:a,width:n?"24":t.size,height:n?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M4.59837 6.28287C5.1802 2.71919 8.27221 0 12 0C15.7278 0 18.8198 2.71919 19.4016 6.28287C22.0637 7.09632 24 9.57116 24 12.5C24 15.0274 22.5573 17.2161 20.4552 18.2907L19.5648 18.7459L18.6544 16.9651L19.5448 16.5099C21.0044 15.7638 22 14.2473 22 12.5C22 10.2915 20.408 8.45275 18.3089 8.07232L17.538 7.93262L17.4891 7.15072C17.3095 4.27638 14.9202 2 12 2C9.0798 2 6.69051 4.27638 6.51088 7.15072L6.46201 7.93262L5.69115 8.07232C3.59195 8.45275 2 10.2915 2 12.5C2 14.2473 2.99564 15.7638 4.45517 16.5099L5.34557 16.9651L4.43523 18.7459L3.54483 18.2907C1.44268 17.2161 0 15.0274 0 12.5C0 9.57116 1.93625 7.09632 4.59837 6.28287ZM12 9.58579L17.4142 15L16 16.4142L13 13.4142L13 23H11L11 13.4142L8 16.4142L6.58579 15L12 9.58579Z",fill:"black"}))}}c(b,"css",g),c(b,"defaultProps",{size:"1em",style:{fill:"#000"}}),c(b,"propTypes",{size:[String,Number],style:Object,class:String});E("t-icon-cloud-upload",b);class A extends i{render(t){const a=m("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),n=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:a,width:n?"24":t.size,height:n?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M4.59837 6.28287C5.1802 2.71919 8.27221 0 12 0C15.7278 0 18.8198 2.71919 19.4016 6.28287C22.0637 7.09632 24 9.57116 24 12.5C24 15.0274 22.5573 17.2161 20.4552 18.2907L19.5648 18.7459L18.6544 16.9651L19.5448 16.5099C21.0044 15.7638 22 14.2473 22 12.5C22 10.2915 20.408 8.45275 18.3089 8.07232L17.538 7.93262L17.4891 7.15072C17.3095 4.27638 14.9202 2 12 2C9.0798 2 6.69051 4.27638 6.51088 7.15072L6.46201 7.93262L5.69115 8.07232C3.59195 8.45275 2 10.2915 2 12.5C2 14.2473 2.99564 15.7638 4.45517 16.5099L5.34557 16.9651L4.43523 18.7459L3.54483 18.2907C1.44268 17.2161 0 15.0274 0 12.5C0 9.57116 1.93625 7.09632 4.59837 6.28287ZM13 10L13 19.5858L16 16.5858L17.4142 18L12 23.4142L6.58579 18L8 16.5858L11 19.5858L11 10H13Z",fill:"black"}))}}c(A,"css",g),c(A,"defaultProps",{size:"1em",style:{fill:"#000"}}),c(A,"propTypes",{size:[String,Number],style:Object,class:String});E("t-icon-cloud-download",A);var cu=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,hu=(l,t,a,n)=>{for(var e=n>1?void 0:n?Eu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&cu(t,a,e),e};let P=class extends i{render(){return u("t-space",null,u("t-button",{icon:u("t-icon-add",null)},"\u65B0\u5EFA"),u("t-button",{variant:"outline",icon:u("t-icon-cloud-upload",null)},"\u4E0A\u4F20\u6587\u4EF6"),u("t-button",{shape:"circle",icon:u("t-icon-discount",null)}),u("t-button",{shape:"circle",icon:u("t-icon-cloud-download",null)}),u("t-button",{theme:"default",variant:"outline",icon:u("t-icon-search",null)},"Function Icon"))}};P=hu([o("button-icon")],P);class F extends i{render(t){const a=m("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),n=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:a,width:n?"24":t.size,height:n?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M6 4V1.5H8V4H16V1.5H18V4H22V22H2V4H6ZM4 6V9H20V6H4ZM20 11H4V20H20V11Z",fill:"black"}))}}c(F,"css",g),c(F,"defaultProps",{size:"1em",style:{fill:"#000"}}),c(F,"propTypes",{size:[String,Number],style:Object,class:String});E("t-icon-calendar",F);var du=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,Au=(l,t,a,n)=>{for(var e=n>1?void 0:n?bu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&du(t,a,e),e};let x=class extends i{render(){return u("t-space",{direction:"vertical"},u("t-space",null,u("t-button",{shape:"rectangle",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{shape:"square",variant:"base"},u("t-icon-calendar",null)),u("t-button",{shape:"round",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{shape:"circle",variant:"base"},u("t-icon-calendar",null))),u("t-space",null,u("t-button",{shape:"rectangle",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{shape:"square",variant:"outline"},u("t-icon-calendar",null)),u("t-button",{shape:"round",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{shape:"circle",variant:"outline"},u("t-icon-calendar",null))),u("t-space",null,u("t-button",{shape:"rectangle",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{shape:"square",variant:"dashed"},u("t-icon-calendar",null)),u("t-button",{shape:"round",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{shape:"circle",variant:"dashed"},u("t-icon-calendar",null))),u("t-space",null,u("t-button",{shape:"rectangle",variant:"text"},"\u6587\u5B57\u6309\u94AE"),u("t-button",{shape:"square",variant:"text"},u("t-icon-calendar",null)),u("t-button",{shape:"round",variant:"text"},"\u6587\u5B57\u6309\u94AE"),u("t-button",{shape:"circle",variant:"text"},u("t-icon-calendar",null))))}};x=Au([o("button-shape")],x);var Fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,gu=(l,t,a,n)=>{for(var e=n>1?void 0:n?mu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&Fu(t,a,e),e};let O=class extends i{render(){return u("t-space",{direction:"vertical"},u("t-space",null,u("t-button",{size:"small",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{size:"small",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{size:"small",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{size:"small",variant:"text"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{size:"medium",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{size:"medium",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{size:"medium",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{size:"medium",variant:"text"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{size:"large",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{size:"large",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{size:"large",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{size:"large",variant:"text"},"\u6587\u5B57\u6309\u94AE")))}};O=gu([o("button-size")],O);var Cu=Object.defineProperty,vu=Object.getOwnPropertyDescriptor,Bu=(l,t,a,n)=>{for(var e=n>1?void 0:n?vu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&Cu(t,a,e),e};let $=class extends i{render(){return u("t-space",null,u("t-button",{disabled:!0},"\u586B\u5145\u6309\u94AE"),u("t-button",{loading:!0},"\u52A0\u8F7D\u4E2D"))}};$=Bu([o("button-status")],$);var fu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Du=(l,t,a,n)=>{for(var e=n>1?void 0:n?pu(t,a):t,r=l.length-1,s;r>=0;r--)(s=l[r])&&(e=(n?s(t,a,e):s(e))||e);return n&&e&&fu(t,a,e),e};let L=class extends i{render(){return u("t-space",{direction:"vertical"},u("t-space",null,u("t-button",{theme:"default"},"\u586B\u5145\u6309\u94AE"),u("t-button",{variant:"outline",theme:"default"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{variant:"dashed",theme:"default"},"\u865A\u6846\u6309\u94AE"),u("t-button",{variant:"text",theme:"default"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{theme:"primary",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{theme:"primary",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{theme:"primary",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{theme:"primary",variant:"text"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{theme:"danger",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{theme:"danger",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{theme:"danger",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{theme:"danger",variant:"text"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{theme:"warning",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{theme:"warning",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{theme:"warning",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{theme:"warning",variant:"text"},"\u6587\u5B57\u6309\u94AE")),u("t-space",null,u("t-button",{theme:"success",variant:"base"},"\u586B\u5145\u6309\u94AE"),u("t-button",{theme:"success",variant:"outline"},"\u63CF\u8FB9\u6309\u94AE"),u("t-button",{theme:"success",variant:"dashed"},"\u865A\u6846\u6309\u94AE"),u("t-button",{theme:"success",variant:"text"},"\u6587\u5B57\u6309\u94AE")))}};L=Du([o("button-theme")],L);var h;const zu=T(`
:: BASE_DOC ::

## API
### Link Props

\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20
-- | -- | -- | -- | --
block | boolean | - | \u662F\u5426\u8BA9button\u663E\u793A\u6210\u5757\u72B6\uFF0C\u53EF\u4EE5\u7406\u89E3\u6210fullwidth\u5C31\u597D\u4E86 | N
disable | boolean | - | \u662F\u5426\u7981\u7528 | N
ghost | Boolean | - | \u5F00\u542F\u5E7D\u7075\u6309\u94AE | N
loading | Boolean | \u662F\u5426loading | N
href | String | - | \u8DF3\u8F6C\u94FE\u63A5 | N
icon | TElement | - | \u524D\u7F6E\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A\`TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
theme | String | default | \u7EC4\u4EF6\u98CE\u683C\uFF0C\u4F9D\u6B21\u4E3A\u9ED8\u8BA4\u8272\u3001\u54C1\u724C\u8272\u3001\u5371\u9669\u8272\u3001\u8B66\u544A\u8272\u3001\u6210\u529F\u8272\u3002\u53EF\u9009\u9879\uFF1Adefault/primary/danger/warning/success | N
size | String | medium | \u5C3A\u5BF8\u3002\u53EF\u9009\u9879\uFF1Asmall/medium/large\u3002TS \u7C7B\u578B\uFF1A\`SizeEnum\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffix | TElement | - | \u540E\u7F6E\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A\`TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
tag | String | - | \u8DF3\u8F6C\u65B9\u5F0F\uFF0C\u5982\uFF1A\u5F53\u524D\u9875\u9762\u6253\u5F00\u3001\u65B0\u9875\u9762\u6253\u5F00\u7B49\uFF0C\u540C HTML \u5C5E\u6027 target \u542B\u4E49\u76F8\u540C 'button'|'a'|'div' | N
type | 'submit','reset','button' | 'button' | \u5728button tag \u7C7B\u578B\u4E0B\u6709\u6548\uFF0C\u4E0Ehtml button type \u6548\u679C\u4E00\u81F4 | N
onClick | Function |  | TS \u7C7B\u578B\uFF1A\`(e: MouseEvent) => void\`<br/>\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u7981\u7528\u72B6\u6001\u4E0D\u4F1A\u89E6\u53D1\u70B9\u51FB\u4E8B\u4EF6 | N

`);E("page-button",(h=class extends i{constructor(){super(...arguments),this.block=!1,this.loading=!1,this.disabled=!1,this.ghost=!1,this.tab=["demo","api","design"],this.tdDocHeader=C(),this.tdDocTabs=C(),this.updateTab=l=>{this.updateProps({tab:l})}}isShow(l){return this.props.tab===l?{display:"block"}:{display:"none"}}installed(){const l=this.tdDocTabs.current;l.onchange=({detail:t})=>{this.updateTab(t)}}render(l,t){return u(u.f,null,u("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),u("div",{style:this.isShow("demo"),name:"DEMO"},u("div",{style:"display:flex;"},u("div",{style:"width:500px;margin:auto;text-align:center;"},u("t-button",{block:this.block,loading:this.loading,disabled:this.disabled,ghost:this.ghost,theme:this.theme,variant:this.variant,size:this.size,shape:this.shape},"Button")),u("div",null,u("t-button-base",{rootEl:this}),u("t-button-color",{rootEl:this}),u("t-button-variant",{rootEl:this}),u("t-button-size",{rootEl:this}),u("t-button-shape",{rootEl:this}))),u("h3",{id:"\u57FA\u7840\u6309\u94AE"},"\u57FA\u7840\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u57FA\u7840\u6309\u94AE"})),u("p",null,"\u57FA\u7840\u6309\u94AE\u5305\u62EC\u586B\u5145\u6309\u94AE\u3001\u63CF\u8FB9\u6309\u94AE\u3001\u865A\u6846\u6309\u94AE\u3001\u548C\u6587\u5B57\u6309\u94AE\u3002"),u("h4",{id:"\u586B\u5145\u6309\u94AE"},"\u586B\u5145\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u586B\u5145\u6309\u94AE"})),u("p",null,"\u4E00\u822C\u7528\u4E8E\u4E3B\u6309\u94AE\uFF0C\u662F\u7528\u6237\u5728\u6574\u4E2A\u9875\u9762\u9700\u8981\u5173\u6CE8\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u64CD\u4F5C\uFF0C\u5F15\u5BFC\u7528\u6237\u5173\u6CE8\u5E76\u64CD\u4F5C\u3002"),u("h4",{id:"\u63CF\u8FB9\u6309\u94AE"},"\u63CF\u8FB9\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u63CF\u8FB9\u6309\u94AE"})),u("p",null,"\u63CF\u8FB9\u6309\u94AE\u5E38\u89C1\u767D\u5E95\u52A0\u6587\u5B57\u7684\u5F62\u5F0F\uFF0C\u5728\u89C6\u89C9\u5F3A\u8C03\u7A0B\u5EA6\u4E0A\u5F31\u4E8E\u586B\u5145\u6309\u94AE\uFF0C\u901A\u5E38\u4E0E\u586B\u5145\u6309\u94AE\u642D\u914D\u6210\u7EC4\u4F7F\u7528\u3002"),u("h4",{id:"\u865A\u6846\u6309\u94AE"},"\u865A\u6846\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u865A\u6846\u6309\u94AE"})),u("p",null,"\u6309\u94AE\u8FB9\u6846\u7EBF\u4E3A\u865A\u7EBF\uFF0C\u5E38\u7528\u4E8E\u8868\u5355\u4E2D\u7684\u6DFB\u52A0\u914D\u7F6E\u9879\u3002"),u("h4",{id:"\u6587\u5B57\u6309\u94AE"},"\u6587\u5B57\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u6587\u5B57\u6309\u94AE"})),u("p",null,"\u76F4\u63A5\u4F7F\u7528\u6587\u5B57\u4F5C\u4E3A\u6309\u94AE\u3002\u662F\u89C6\u89C9\u5438\u5F15\u529B\u6700\u5F31\u7684\u4E00\u4E2A\u6309\u94AE\uFF0C\u901A\u5E38\u51FA\u73B0\u5728\u8868\u683C\u64CD\u4F5C\u680F\u3001\u6807\u9898\u548C\u5B57\u6BB5\u65C1\u7B49\u3002"),u("demo-wrapper",null,u("button-base",null)),u("h3",{id:"\u56FE\u6807\u6309\u94AE"},"\u56FE\u6807\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u56FE\u6807\u6309\u94AE"})),u("p",null,"\u56FE\u6807\u6309\u94AE\u7531\u56FE\u6807+\u6587\u5B57\u6216\u56FE\u6807\u6784\u6210\u3002\u901A\u8FC7\u56FE\u6807\u53EF\u589E\u5F3A\u8BC6\u522B\u6027\uFF0C\u4EE5\u4FBF\u76F4\u89C2\u7406\u89E3\u3002"),u("demo-wrapper",null,u("button-icon",null)),u("h3",{id:"\u5E7D\u7075\u6309\u94AE"},"\u5E7D\u7075\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u5E7D\u7075\u6309\u94AE"})),u("p",null,"\u5E7D\u7075\u6309\u94AE\u5C06\u6309\u94AE\u7684\u5185\u5BB9\u53CD\u8272\uFF0C\u80CC\u666F\u53D8\u4E3A\u900F\u660E\uFF0C\u4E00\u822C\u662F\u5E95\u8272\u900F\u660E\u3002\u5E38\u7528\u4E8E\u6709\u8272\u80CC\u666F\u4E0A\uFF0C\u4F8B\u5982 banner \u56FE\u7B49\u3002"),u("demo-wrapper",{style:{backgroundColor:"#000"}},u("button-ghost",null)),u("h3",{id:"block-\u6309\u94AE"},"Block \u6309\u94AE ",u("a",{class:"header-anchor",href:"#block-\u6309\u94AE"})),u("p",null,"Block \u6309\u94AE\u5728\u5BBD\u5EA6\u4E0A\u5145\u6EE1\u5176\u6240\u5728\u7684\u7236\u5BB9\u5668\uFF08\u65E0 padding \u548C margin \u503C\uFF09\u3002\u8BE5\u6309\u94AE\u5E38\u89C1\u4E8E\u79FB\u52A8\u7AEF\u548C\u4E00\u4E9B\u8868\u5355\u573A\u666F\u4E2D\u3002"),u("demo-wrapper",null,u("button-block",null)),u("h3",{id:"\u4E0D\u540C\u989C\u8272\u4E3B\u9898\u6309\u94AE"},"\u4E0D\u540C\u989C\u8272\u4E3B\u9898\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u989C\u8272\u4E3B\u9898\u6309\u94AE"})),u("p",null,"\u63D0\u4F9B\u6D45\u7070\u8272\u3001\u84DD\u8272\u3001\u7EA2\u8272\u3001\u9EC4\u8272\u548C\u7EFF\u8272\u4E3A\u4E3B\u9898\u7684\u6309\u94AE\u3002"),u("demo-wrapper",null,u("button-theme",null)),u("h3",{id:"\u4E0D\u540C\u72B6\u6001\u7684\u6309\u94AE"},"\u4E0D\u540C\u72B6\u6001\u7684\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u72B6\u6001\u7684\u6309\u94AE"})),u("p",null,"\u63D0\u4F9B\u52A0\u8F7D\u3001\u7981\u7528\u4E24\u79CD\u72B6\u6001\u3002"),u("demo-wrapper",null,u("button-status",null)),u("h3",{id:"\u4E0D\u540C\u5C3A\u5BF8\u7684\u6309\u94AE"},"\u4E0D\u540C\u5C3A\u5BF8\u7684\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u6309\u94AE"})),u("p",null,"\u63D0\u4F9B\u5927\u3001\u4E2D\uFF08\u9ED8\u8BA4\uFF09\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002"),u("demo-wrapper",null,u("button-size",null)),u("h3",{id:"\u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE"},"\u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u5F62\u72B6\u7684\u6309\u94AE"})),u("p",null,"\u63D0\u4F9B\u957F\u65B9\u5F62\u3001\u6B63\u65B9\u5F62\u3001\u5706\u89D2\u957F\u65B9\u5F62\u3001\u5706\u5F62\u56DB\u79CD\u5F62\u72B6\u3002"),u("demo-wrapper",null,u("button-shape",null)),u("h3",{id:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5143\u7D20"},"\u81EA\u5B9A\u4E49\u6E32\u67D3\u5143\u7D20 ",u("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6E32\u67D3\u5143\u7D20"})),u("p",null,"\u652F\u6301\u81EA\u5B9A\u4E49\u6E32\u67D3\u5143\u7D20\uFF0C\u652F\u6301 ",u("td-code",{text:"div/a/button"})),u("demo-wrapper",null,u("button-custom-element",null))),u("div",{style:this.isShow("api"),name:"API"},u("div",{style:"margin-bottom:76px",unsafeHTML:{html:zu}})),u("div",{style:this.isShow("design"),name:"DESIGN"}))}},h.defaultProps={tab:"demo"},h.propTypes={tab:String},h));
