var l=Object.defineProperty;var i=(r,a,o)=>a in r?l(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o;var t=(r,a,o)=>(i(r,typeof a!="symbol"?a+"":a,o),o);import{$ as d,H as u,c as s,d as e}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const p=c(`

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

`);var n;d("page-back-top",(n=class extends u{constructor(){super(...arguments);t(this,"tab",["demo","api","design"]);t(this,"tdDocHeader",s());t(this,"tdDocTabs",s());t(this,"updateTab",a=>{this.updateProps({tab:a})})}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:o})=>{this.updateTab(o)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础的回到顶部"},"基础的回到顶部 ",e("a",{class:"header-anchor",href:"#基础的回到顶部"})),e("p",null,"默认距离页面右侧24px，距离页面底部80px，滚动动画时长200ms"),e("demo-wrapper",null,e("back-top-base",null)),e("h3",{id:"可设置不同耗时的回到顶部"},"可设置不同耗时的回到顶部 ",e("a",{class:"header-anchor",href:"#可设置不同耗时的回到顶部"})),e("demo-wrapper",null,e("back-top-duration",null)),e("h3",{id:"不同组件尺寸的回到顶部"},"不同组件尺寸的回到顶部 ",e("a",{class:"header-anchor",href:"#不同组件尺寸的回到顶部"})),e("demo-wrapper",null,e("back-top-size",null)),e("h3",{id:"不同组件主题的回到顶部"},"不同组件形状的回到顶部 ",e("a",{class:"header-anchor",href:"#不同组件形状的回到顶部"})),e("p",null,"不同组件形状的回到顶部"),e("demo-wrapper",null,e("back-top-shape",null)),e("h3",{id:"不同组件主题的回到顶部"},"不同组件主题的回到顶部 ",e("a",{class:"header-anchor",href:"#不同组件主题的回到顶部"})),e("demo-wrapper",null,e("back-top-theme",null)),e("h3",{id:"可自定义内容的回到顶部"},"可自定义内容的回到顶部 ",e("a",{class:"header-anchor",href:"#可自定义内容的回到顶部"})),e("demo-wrapper",null,e("back-top-custom",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:p}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},t(n,"defaultProps",{tab:"demo"}),t(n,"css",`code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }`),t(n,"propTypes",{tab:String}),n));
