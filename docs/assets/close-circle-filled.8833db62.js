var n=Object.defineProperty;var z=(i,e,s)=>e in i?n(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var t=(i,e,s)=>(z(i,typeof e!="symbol"?e+"":e,s),s);import{D as L,W as f,V as g,p as c}from"./index.1013dd05.js";import{i as y}from"./style.d07ab3f3.js";class l extends f{render(e){const s=g("t-icon",e.class,{["t-size-s"]:e.size==="small",["t-size-m"]:e.size==="medium",["t-size-l"]:e.size==="large"}),a=e.size==="small"||e.size==="medium"||e.size==="large",m={...e.style,fontSize:e.size};return c("svg",{class:s,width:a?"24":e.size,height:a?"24":e.size,style:m,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z",fill:"black"}))}}t(l,"css",y),t(l,"defaultProps",{size:"1em",style:{fill:"#000"}}),t(l,"propTypes",{size:[String,Number],style:Object,class:String});L("t-icon-close-circle-filled",l);