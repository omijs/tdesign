var s=Object.defineProperty;var i=(l,a,n)=>a in l?s(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n;var t=(l,a,n)=>(i(l,typeof a!="symbol"?a+"":a,n),n);import{$ as u,H as d,c as o,d as e}from"./index-4a3ba173.js";import{p}from"./marked.esm-23ea8bc7.js";const c=p(`

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

`);var r;u("page-input",(r=class extends d{constructor(){super(...arguments);t(this,"tab",["demo","api","design"]);t(this,"tdDocHeader",o());t(this,"tdDocTabs",o());t(this,"updateTab",a=>{this.updateProps({tab:a})})}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:n})=>{this.updateTab(n)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础输入框"},"基础输入框 ",e("a",{class:"header-anchor",href:"#基础输入框"})),e("p",null,"最基础的单行输入框，按状态可分为正常、禁用、错误、带额外提示。通常在需要输入少量内容（20个字以内）的场景下使用。"),e("demo-wrapper",null,e("input-base",null)),e("h3",{id:"组合输入框"},"组合输入框 ",e("a",{class:"header-anchor",href:"#组合输入框"})),e("p",null,"多个输入框相组合，或与其他控件（如下拉）相组合，以方便识别。用于一些固定组合或者固定格式输入的场景，如输入电话号码。"),e("demo-wrapper",null,e("input-group",null)),e("h3",{id:"可清空内容输入框"},"可清空内容输入框 ",e("a",{class:"header-anchor",href:"#可清空内容输入框"})),e("p",null,"带清空操作的输入框，可快捷清空输入过的内容。"),e("demo-wrapper",null,e("input-clear",null)),e("h3",{id:"密码输入框"},"密码输入框 ",e("a",{class:"header-anchor",href:"#密码输入框"})),e("p",null,"由符号代替输入内容的输入框，并可通过操作展示原文信息。用于强安全信息输入的场景。"),e("demo-wrapper",null,e("input-password",null)),e("h3",{id:"不同状态的输入框"},"不同状态的输入框 ",e("a",{class:"header-anchor",href:"#不同状态的输入框"})),e("p",null,"输入框状态可分为：正常、禁用、异常（带提示）、带额外内容提示、带状态图标提示。"),e("demo-wrapper",null,e("input-status",null)),e("h3",{id:"不同尺寸的输入框"},"不同尺寸的输入框 ",e("a",{class:"header-anchor",href:"#不同尺寸的输入框"})),e("p",null,"有大中小三种不同高度、宽度的输入框，以适应不同尺寸布局。设置 size = large | medium | small 实现不同的尺寸。"),e("demo-wrapper",null,e("input-size",null)),e("h3",{id:"不同对齐方式的输入框"},"不同对齐方式的输入框 ",e("a",{class:"header-anchor",href:"#不同对齐方式的输入框"})),e("p",null,"不同对齐方式的输入框 size = large | medium | small 实现不同的尺寸。"),e("demo-wrapper",null,e("input-align",null)),e("h3",{id:"自适应宽度的输入框"},"自适应宽度的输入框 ",e("a",{class:"header-anchor",href:"#自适应宽度的输入框"})),e("p",null,"输入框支持宽度随输入内容变化而变化，设置属性 autoWidth 即可。"),e("demo-wrapper",null,e("input-autowidth",null)),e("h3",{id:"带长度限制的输入框"},"带长度限制的输入框 ",e("a",{class:"header-anchor",href:"#带长度限制的输入框"})),e("ul",null,e("li",null,"使用 ",e("td-code",{text:"maxlength"})," 设置输入框的长度限度，一个中文等于一个计数长度。"),e("li",null,"使用 ",e("td-code",{text:"maxcharacter"})," 设置输入框的长度限度，一个中文汉字表示两个字符长度。"),e("li",null,"使用 ",e("td-code",{text:"allowInputOverMax"})," 设置是否允许在输入内容已经超出限制时继续输入。"),e("li",null,"使用 ",e("td-code",{text:"showLimitNumber"})," 设置是否显示输入框右侧的字数统计。")),e("demo-wrapper",null,e("input-lenlimit",null)),e("h3",{id:"可格式化数据的输入框"},"可格式化数据的输入框 ",e("a",{class:"header-anchor",href:"#可格式化数据的输入框"})),e("p",null,"可以使用 format 设置输入框在失焦和聚焦时的不同内容呈现。"),e("demo-wrapper",null,e("input-format",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:c}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},t(r,"defaultProps",{tab:"demo"}),t(r,"css",`
    code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }
    
    ul li{
      margin-top: 4px;
    }
    `),t(r,"propTypes",{tab:String}),r));
