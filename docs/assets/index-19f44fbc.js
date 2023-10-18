var n=Object.defineProperty;var l=(a,e,t)=>e in a?n(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var s=(a,e,t)=>(l(a,typeof e!="symbol"?e+"":e,t),t);import{$ as d,H as i,c as r}from"./index-3f1c186f.js";import{p as c}from"./marked.esm-23ea8bc7.js";const p=c(`

## API
### Badge Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
children | TNode | - | 徽标内容，同 content。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
color | String | - | 颜色 | N
content | TNode | - | 徽标内容。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
count | TNode | 0 | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。TS 类型：\`string | number | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dot | Boolean | false | 是否为红点 | N
maxCount | Number | 99 | 封顶的数字值 | N
offset | Array | - | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：\`Array < string \\| number >\` | N
shape | String | circle | 形状。可选项：circle/round | N
showZero | Boolean | false | 当数值为 0 时，是否展示徽标 | N
size | String | medium | 尺寸。可选项：small/medium | N

`);var o;d("page-badge",(o=class extends i{constructor(){super(...arguments);s(this,"tab",["demo","api","design"]);s(this,"tdDocHeader",r());s(this,"tdDocTabs",r());s(this,"updateTab",e=>{this.updateProps({tab:e})})}isShow(e){return this.props.tab===e?{display:"block"}:{display:"none"}}installed(){const e=this.tdDocTabs.current;e.onchange=({detail:t})=>{this.updateTab(t)}}render(){return h(h.f,null,h("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),h("div",{style:this.isShow("demo"),name:"DEMO"},h("h3",{id:"红点样式的徽标"},"红点样式的徽标 ",h("a",{class:"header-anchor",href:"#红点样式的徽标"})),h("p",null,"仅显示为圆点的徽标，有图标时位于图标右上角，无图标时位于文字标题后侧。弱提示场景下，不显示数量，需要用户去手动点击查看进行消除。"),h("demo-wrapper",null,h("badge-base",null)),h("h3",{id:"数字样式的徽标"},"数字样式的徽标 ",h("a",{class:"header-anchor",href:"#数字样式的徽标"})),h("p",null,"含数字的徽标，适用于需要较强提醒的场景，直接提醒用户相关信息数量。"),h("demo-wrapper",null,h("badge-number",null)),h("h3",{id:"自定样式的徽标"},"自定样式的徽标 ",h("a",{class:"header-anchor",href:"#自定样式的徽标"})),h("p",null,"可对显示信息进行自定义配置，如展示为“热门hot” “最新new”等。"),h("demo-wrapper",null,h("badge-custom",null)),h("h3",{id:"不同尺寸的徽标"},"不同尺寸的徽标 ",h("a",{class:"header-anchor",href:"#不同尺寸的徽标"})),h("p",null,"提供标准（默认）、小两种尺寸。"),h("demo-wrapper",null,h("badge-size",null)),h("h3",{id:"不同形状的徽标"},"不同形状的徽标 ",h("a",{class:"header-anchor",href:"#不同形状的徽标"})),h("p",null,"提供圆形和方形两种不同形状的徽标展示。"),h("demo-wrapper",null,h("badge-shape",null)),h("h3",{id:"控制徽标显示偏移位置"},"控制徽标显示偏移位置 ",h("a",{class:"header-anchor",href:"#控制徽标显示偏移位置"})),h("demo-wrapper",null,h("badge-offset",null))),h("div",{style:this.isShow("api"),name:"API"},h("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:p}})),h("div",{style:this.isShow("design"),name:"DESIGN"}))}},s(o,"defaultProps",{tab:"demo"}),s(o,"propTypes",{tab:String}),o));
