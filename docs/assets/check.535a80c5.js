var n=Object.defineProperty;var z=(s,e,i)=>e in s?n(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i;var t=(s,e,i)=>(z(s,typeof e!="symbol"?e+"":e,i),i);import{D as g,W as f,V as d,p as c}from"./index.1013dd05.js";import{i as y}from"./style.d07ab3f3.js";class l extends f{render(e){const i=d("t-icon",e.class,{["t-size-s"]:e.size==="small",["t-size-m"]:e.size==="medium",["t-size-l"]:e.size==="large"}),a=e.size==="small"||e.size==="medium"||e.size==="large",m={...e.style,fontSize:e.size};return c("svg",{class:i,width:a?"24":e.size,height:a?"24":e.size,style:m,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M20.9852 7.37845L10.3786 17.985L4.01465 11.6211L5.42886 10.2069L10.3786 15.1566L19.571 5.96423L20.9852 7.37845Z",fill:"black"}))}}t(l,"css",y),t(l,"defaultProps",{size:"1em",style:{fill:"#000"}}),t(l,"propTypes",{size:[String,Number],style:Object,class:String});g("t-icon-check",l);