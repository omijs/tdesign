var d=Object.defineProperty;var a=(i,t,l)=>t in i?d(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l;var n=(i,t,l)=>(a(i,typeof t!="symbol"?t+"":t,l),l);import{$ as o,H as c,c as s,d as e}from"./index-4a3ba173.js";import{p as h}from"./marked.esm-23ea8bc7.js";import{t as m}from"./index-a9c698e5.js";const u=h(`

## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | TNode | - | 链接内容。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
default | TNode | - | 链接内容，同 content。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | - | 禁用链接 | N
hover | String | underline | 链接悬浮态样式，有 文本颜色变化、添加下划线等 2 种方法。可选项：color/underline | N
href | String | - | 跳转链接 | N
prefixIcon | TElement | - | 前置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：\`SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
suffixIcon | TElement | - | 后置图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
target | String | - | 跳转方式，如：当前页面打开、新页面打开等，同 HTML 属性 target 含义相同 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 普通状态是否显示链接下划线 | N
onClick | Function |  | TS 类型：\`(e: MouseEvent) => void\`<br/>点击事件，禁用状态不会触发点击事件 | N

`);var r;o("page-link",(r=class extends c{constructor(){super(...arguments);n(this,"tab",["demo","api","design"]);n(this,"tdDocHeader",s());n(this,"tdDocTabs",s());n(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:l})=>{this.updateTab(l)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("code-box",{title:"下划线文字链接",describe:"在文字下加横线，表明此处为链接。",code:`
\`\`\`html
<div>
  <t-link theme="default" underline> 跳转链接 </t-link>
  <t-link theme="primary" underline> 跳转链接 </t-link>
  <t-link theme="danger" underline> 跳转链接 </t-link>
  <t-link theme="warning" underline> 跳转链接 </t-link>
  <t-link theme="success" underline> 跳转链接 </t-link>
</div>
\`\`\`
          `},e("div",{slot:"demo",class:m`px-5 py-5`},e("t-link",{theme:"default",underline:!0}," ","跳转链接"," "),e("t-link",{theme:"primary",underline:!0}," ","跳转链接"," "),e("t-link",{theme:"danger",underline:!0}," ","跳转链接"," "),e("t-link",{theme:"warning",underline:!0}," ","跳转链接"," "),e("t-link",{theme:"success",underline:!0}," ","跳转链接"," "))),e("h3",{id:"文字链接"},"文字链接 ",e("a",{class:"header-anchor",href:"#文字链接"})),e("h4",{id:"基础文字链接"},"基础文字链接 ",e("a",{class:"header-anchor",href:"#基础文字链接"})),e("p",null,"最简单的文字链接形式，点击后直接跳转到对应链接。"),e("demo-wrapper",null,e("link-base",null)),e("h4",{id:"下划线文字链接"},"下划线文字链接 ",e("a",{class:"header-anchor",href:"#下划线文字链接"})),e("p",null,"在文字下加横线，表明此处为链接。"),e("demo-wrapper",null,e("link-underline",null)),e("h4",{id:"带图标的文字链接"},"带图标的文字链接 ",e("a",{class:"header-anchor",href:"#带图标的文字链接"})),e("p",null,"文字链接与图标搭配使用，通过图标快速了解链接所代表的含义。"),e("demo-wrapper",null,e("link-icon",null)),e("h3",{id:"链接悬浮态样式的链接"},"链接悬浮态样式的链接 ",e("a",{class:"header-anchor",href:"#链接悬浮态样式的链接"})),e("p",null,"悬浮状态包含 2 种状态：文本颜色变化 和 添加下划线。由 ",e("td-code",{text:"hover"})," 控制，可选值：",e("td-code",{text:"color | underline"})),e("demo-wrapper",null,e("link-hover",null)),e("h3",{id:"提示不同状态的链接"},"提示不同状态的链接 ",e("a",{class:"header-anchor",href:"#提示不同状态的链接"})),e("p",null,"在",e("td-code",{text:"default、primary、success、warning、danger"}),"不同状态下，可提供对应的链接主题色。"),e("demo-wrapper",null,e("link-theme",null)),e("h3",{id:"禁用的链接"},"禁用的链接 ",e("a",{class:"header-anchor",href:"#禁用的链接"})),e("p",null,"当链接不可用时，显示禁用状态。"),e("demo-wrapper",null,e("link-disabled",null)),e("h3",{id:"不同尺寸的链接"},"不同尺寸的链接 ",e("a",{class:"header-anchor",href:"#不同尺寸的链接"})),e("p",null,"提供大、中（默认）、小三种尺寸。"),e("demo-wrapper",null,e("link-size",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",unsafeHTML:{html:u}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},n(r,"defaultProps",{tab:"demo"}),n(r,"css","t-link { margin: 5px }"),n(r,"propTypes",{tab:String}),r));
