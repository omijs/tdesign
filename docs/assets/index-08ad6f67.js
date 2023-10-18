var s=Object.defineProperty;var u=(l,a,n)=>a in l?s(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n;var t=(l,a,n)=>(u(l,typeof a!="symbol"?a+"":a,n),n);import{$ as i,H as d,c as o,d as e}from"./index-4a3ba173.js";import{p}from"./marked.esm-23ea8bc7.js";const c=p(`

## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allowInputOverMax | Boolean | false | 超出maxlength或maxcharacter之后是否还允许输入 | N
autofocus | Boolean | false | 自动聚焦，拉起键盘 | N
autosize | Boolean / Object | false | 高度自动撑开。 autosize = true 表示组件高度自动撑开，同时，依旧允许手动拖高度。如果设置了 autosize.maxRows 或者 autosize.minRows 则不允许手动调整高度。TS 类型： \`boolean / { minRows?: number; maxRows?: number }\` | N
disabled | Boolean | false | 	是否禁用文本框 | N
label | String / Slot / Function | - | 左侧文本。TS 类型：\`string / TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
maxcharacter | Number | - | 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 | N
maxlength | Number | - | 用户最多可以输入的字符个数 | N
name | String | - | 	名称，HTML 元素原生属性 | N
placeholder | String | undefined | 占位符 | N
readonly | Boolean | false | 只读状态 | N
status | String | - | 文本框状态。可选项：default/success/warning/error | N
tips | String / Slot / Function | - | 输入框下方提示文本，会根据不同的 status 呈现不同的样式。TS 类型：\`string / TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
value | String / Number	 | - | 文本框值。TS 类型：\`TextareaValue type TextareaValue = string\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
defaultValue | String / Number | - | 文本框值。非受控属性。TS 类型：\`TextareaValue type TextareaValue = string\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
onBlur | Function | - | 	TS 类型：\`(value: TextareaValue, context: { e: FocusEvent }) => void\` <br/>失去焦点时触发 | N
onChange | Function | - | TS 类型：\`(value: TextareaValue, context?: { e?: InputEvent }) => void\` <br/>输入内容变化时触发 | N
onFocus | Function | - | TS 类型：\`TS 类型：(value: TextareaValue, context : { e: FocusEvent }) => void\` <br/>获得焦点时触发 | N
onKeydown | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>键盘按下时触发 | N
onKeypress | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>按下字符键时触发（keydown -> keypress -> keyup） | N
onKeyup | Function | - | TS 类型：\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>释放键盘时触发 | N

`);var r;i("page-tag-input",(r=class extends d{constructor(){super(...arguments);t(this,"tab",["demo","api","design"]);t(this,"tdDocHeader",o());t(this,"tdDocTabs",o());t(this,"updateTab",a=>{this.updateProps({tab:a})})}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:n})=>{this.updateTab(n)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础标签输入框"},"基础标签输入框 ",e("a",{class:"header-anchor",href:"#基础标签输入框"})),e("demo-wrapper",null,e("tag-input-base",null)),e("h3",{id:"标签数量超出的输入框"},"标签数量超出的输入框 ",e("a",{class:"header-anchor",href:"#标签数量超出的输入框"})),e("p",null,"使用 excessTagsDisplayType 控制标签超出时的呈现方式：横向滚动显示和换行显示，默认为换行显示。"),e("demo-wrapper",null,e("tag-input-excess",null)),e("h3",{id:"有数量限制的标签输入框"},"有数量限制的标签输入框 ",e("a",{class:"header-anchor",href:"#有数量限制的标签输入框"})),e("p",null,"使用 max 控制最大标签数量。"),e("demo-wrapper",null,e("tag-input-limit",null)),e("h3",{id:"不同尺寸的标签输入框"},"不同尺寸的标签输入框 ",e("a",{class:"header-anchor",href:"#不同尺寸的标签输入框"})),e("p",null,"提供大、中（默认）、小三种不同尺寸的的标签输入框。"),e("demo-wrapper",null,e("tag-input-size",null)),e("h3",{id:"可折叠过多标签的标签输入框"},"可折叠过多标签的标签输入框 ",e("a",{class:"header-anchor",href:"#可折叠过多标签的标签输入框"})),e("ul",null,e("li",null,"mincollapsedNum 用于控制超出这个数量的标签折叠省略显示。"),e("li",null,"collapsedItems 用于自定义折叠标签呈现方式。")),e("demo-wrapper",null,e("tag-input-collapse",null)),e("h3",{id:"可自定义标签的标签输入框"},"可自定义标签的标签输入框 ",e("a",{class:"header-anchor",href:"#可自定义标签的标签输入框"})),e("ul",null,e("li",null,"tag 用于定义单个标签的内容"),e("li",null,"valueDispaly 用于完全自定义全量标签内容")),e("demo-wrapper",null,e("tag-input-diy",null)),e("h3",{id:"不同状态的标签输入框"},"不同状态的标签输入框 ",e("a",{class:"header-anchor",href:"#不同状态的标签输入框"})),e("p",null,"标签输入框状态可分为：正常、只读、禁用、成功、告警、错误等，其中 成功、告警、错误 等状态一般用于表单验证。此特性继承至 Input 输入框组件。"),e("demo-wrapper",null,e("tag-input-status",null)),e("h3",{id:"不同主题的标签输入框"},"不同主题的标签输入框 ",e("a",{class:"header-anchor",href:"#不同主题的标签输入框"})),e("p",null,"使用 tagProps 控制标签的所有属性，如：颜色设置。"),e("demo-wrapper",null,e("tag-input-theme",null)),e("h3",{id:"宽度自适应的标签输入框"},"宽度自适应的标签输入框 ",e("a",{class:"header-anchor",href:"#宽度自适应的标签输入框"})),e("demo-wrapper",null,e("tag-input-auto",null)),e("h3",{id:"可拖拽调整顺序的标签输入框"},"可拖拽调整顺序的标签输入框 ",e("a",{class:"header-anchor",href:"#可拖拽调整顺序的标签输入框"})),e("demo-wrapper",null,e("tag-input-drag",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:c}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},t(r,"defaultProps",{tab:"demo"}),t(r,"css",`code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }`),t(r,"propTypes",{tab:String}),r));
