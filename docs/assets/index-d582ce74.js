var d=Object.defineProperty;var n=(r,t,s)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var i=(r,t,s)=>(n(r,typeof t!="symbol"?t+"":t,s),s);import{$ as l,H as p,c as o,d as e}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const h=c(`

## API
### Divider Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，Typescript：\`React.CSSProperties\` | N
align | String | center | options：left/right/center | N
children | TNode | - | Typescript：\`string \\|  TNode\`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | Typescript：\`string \\|  TNode\`。[see more ts definition](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dashed | Boolean | false | - | N
layout | String | horizontal | options：horizontal/vertical | N

`);var a;l("page-divider",(a=class extends p{constructor(){super(...arguments);i(this,"tab",["demo","api","design"]);i(this,"tdDocHeader",o());i(this,"tdDocTabs",o());i(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:s})=>{this.updateTab(s)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础分割线"},"基础分割线 ",e("a",{class:"header-anchor",href:"#基础分割线"})),e("p",null,"基础分割线是没有文字的独立线条，又分为水平分割线和垂直分割线。"),e("h4",{id:"水平分割线"},"水平分割线 ",e("a",{class:"header-anchor",href:"#水平分割线"})),e("p",null,"水平分割线常用来对不同元素内容进行分割。"),e("demo-wrapper",null,e("divider-base",null)),e("h4",{id:"垂直分割线"},"垂直分割线 ",e("a",{class:"header-anchor",href:"#垂直分割线"})),e("p",null,"垂直分割线常用来做行内分割。"),e("demo-wrapper",null,e("divider-vertical",null)),e("h3",{id:"带文字的分割线"},"带文字的分割线 ",e("a",{class:"header-anchor",href:"#带文字的分割线"})),e("p",null,"带文字的分割线是在分割线中嵌入文字，在需要对分割内容进行解释说明时使用。"),e("demo-wrapper",null,e("divider-text",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:h}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},i(a,"defaultProps",{tab:"demo"}),i(a,"propTypes",{tab:String}),a));
