var i=Object.defineProperty;var r=(o,e,a)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var s=(o,e,a)=>(r(o,typeof e!="symbol"?e+"":e,a),a);import{$ as p,H as l,c as d,d as t}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const m=c(`

## API
### InputAdornment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式| N
append | TNode | - | 后缀装饰。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
prepend | TNode | - | 前缀装饰。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
`);var n;p("page-input-adornment",(n=class extends l{constructor(){super(...arguments);s(this,"tab",["demo","api","design"]);s(this,"tdDocHeader",d());s(this,"tdDocTabs",d());s(this,"updateTab",e=>{this.updateProps({tab:e})})}isShow(e){return this.props.tab===e?{display:"block"}:{display:"none"}}installed(){const e=this.tdDocTabs.current;e.onchange=({detail:a})=>{this.updateTab(a)}}render(){return t(t.f,null,t("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),t("div",{style:this.isShow("demo"),name:"DEMO"},t("h3",{id:"文本装饰"},"文本装饰",t("a",{class:"header-anchor",href:"#文本装饰"})),t("p",null,"在输入框前后加入一些特定的纯展示标签，通常在需要提高辨识效率时使用。"),t("demo-wrapper",null,t("input-adornment-text",null)),t("h4",{id:"下拉列表装饰"},"下拉列表装饰 ",t("a",{class:"header-anchor",href:"#下拉列表装饰"})),t("p",null,"装饰内容可以是下拉菜单"),t("demo-wrapper",null,t("p",null,"下拉列表选择select待完善"))),t("div",{style:this.isShow("api"),name:"API"},t("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:m}})),t("div",{style:this.isShow("design"),name:"DESIGN"}))}},s(n,"css",""),s(n,"defaultProps",{tab:"demo"}),s(n,"propTypes",{tab:String}),n));
