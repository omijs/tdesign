var r=Object.defineProperty;var i=(n,t,o)=>t in n?r(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var a=(n,t,o)=>(i(n,typeof t!="symbol"?t+"":t,o),o);import{$ as d,H as c,c as l,d as e}from"./index-3f1c186f.js";import{p}from"./marked.esm-23ea8bc7.js";const h=p(`
## API
### Alert Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class |	String |	- |	类名 |	N
style |	Object |	- 	|样式，TS 类型：React.CSSProperties |	N
close |	TNode |	false |	关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮。TS 类型：string,boolean,TNode。通用类型定义 |	N
icon |	TElement |	- |	图标。TS 类型：TNode。通用类型定义 |	N
maxLine |	Number |	0 	| 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠 |	N
message |	TNode |	- |	内容（子元素）。TS 类型：string, TNode。通用类型定义 |	N
operation |	TElement |	- |	跟在告警内容后面的操作区。TS 类型：TNode。通用类型定义 | 	N
theme |	String |	info |	组件风格。可选项：success/info/warning/error |	N
title |	TNode |	- |	标题。TS 类型：string , TNode。通用类型定义 |	N
onClose |	Function |-	|	TS 类型：(context: { e: MouseEvent }) => void 关闭按钮点击时触发 |	N
onClosed |	Function | - |	TS 类型：(context: { e: TransitionEvent }) => void 告警提示框关闭动画结束后触发 |	N
`);var s;d("page-alert",(s=class extends c{constructor(){super(...arguments);a(this,"tab",["demo","api","design"]);a(this,"tdDocHeader",l());a(this,"tdDocTabs",l());a(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:o})=>{this.updateTab(o)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础警告"},"基础警告 ",e("a",{class:"header-anchor",href:"#基础警告"})),e("p",null,"使用简洁文字提示的最基础警告条，包含 4 种情况的提示：普通消息，成功，警示，失败。"),e("demo-wrapper",null,e("alert-base",null)),e("h3",{id:"带操作的警告"},"带操作的警告 ",e("a",{class:"header-anchor",href:"#带操作的警告"})),e("p",null,"当需要对此警告做操作，可以配置 ",e("td-code",{text:"operation"})," 来增加相关操作。"),e("demo-wrapper",null,e("alert-operation",null)),e("h3",{id:"带相关描述文字的警告"},"带相关描述文字的警告 ",e("a",{class:"header-anchor",href:"#带相关描述文字的警告"})),e("p",null,"当信息内容较复杂时，可使用相关描述文字辅助说明。"),e("demo-wrapper",null,e("alert-title",null)),e("h3",{id:"折叠的警告"},"折叠的警告 ",e("a",{class:"header-anchor",href:"#折叠的警告"})),e("p",null,"当信息内容超过 2 行时，可使用折叠的方式将部分信息隐藏。"),e("demo-wrapper",null,e("alert-collapse",null)),e("h3",{id:"自定义icon的警告"},"自定义icon的警告 ",e("a",{class:"header-anchor",href:"#自定义icon的警告"})),e("p",null,"用户可以通过自定义icon的方式设置警告的icon"),e("demo-wrapper",null,e("alert-icon",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:h}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},a(s,"defaultProps",{tab:"demo"}),a(s,"propTypes",{tab:String}),s));
