var l=Object.defineProperty;var d=(r,a,o)=>a in r?l(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o;var t=(r,a,o)=>(d(r,typeof a!="symbol"?a+"":a,o),o);import{$ as i,H as u,c as s,d as e}from"./index-3f1c186f.js";import{p as c}from"./marked.esm-23ea8bc7.js";const p=c(`

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

`);var n;i("page-tag",(n=class extends u{constructor(){super(...arguments);t(this,"tab",["demo","api","design"]);t(this,"tdDocHeader",s());t(this,"tdDocTabs",s());t(this,"updateTab",a=>{this.updateProps({tab:a})})}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:o})=>{this.updateTab(o)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础标签"},"基础标签 ",e("a",{class:"header-anchor",href:"#基础标签"})),e("p",null,"基础标签为默认的标签样式。适用于常规表单。"),e("demo-wrapper",null,e("tag-base",null)),e("h3",{id:"带图标的标签"},"带图标的标签 ",e("a",{class:"header-anchor",href:"#带图标的标签"})),e("p",null,"在标签内嵌入图标。适用于用图标来辅助标签分类，或表达标签的属性。"),e("demo-wrapper",null,e("tag-icon",null)),e("h3",{id:"可删除和添加标签"},"可删除和添加标签 ",e("a",{class:"header-anchor",href:"#可删除和添加标签"})),e("p",null,"可删除或添加的标签。添加标签可组合输入框组件使用。"),e("demo-wrapper",null,e("tag-add",null)),e("h3",{id:"可选择标签"},"可选择标签 ",e("a",{class:"header-anchor",href:"#可选择标签"})),e("p",null,"标签有已选和未选两种状态，可以通过点击标签来切换。类似多选框的效果。"),e("demo-wrapper",null,e("tag-checkbox",null)),e("h3",{id:"超长省略文本标签"},"超长省略文本标签 ",e("a",{class:"header-anchor",href:"#超长省略文本标签"})),e("p",null,"通过 maxWidth 设置最大宽度，超出部分自动省略。"),e("demo-wrapper",null,e("tag-maxwidth",null)),e("h3",{id:"不同尺寸的标签"},"不同尺寸的标签 ",e("a",{class:"header-anchor",href:"#不同尺寸的标签"})),e("p",null,"提供大、中（默认）、小三种尺寸。"),e("demo-wrapper",null,e("tag-size",null)),e("h3",{id:"不同形状的标签"},"不同形状的标签 ",e("a",{class:"header-anchor",href:"#不同形状的标签"})),e("p",null,"提供方形、圆角方形、标记型三种形状。"),e("demo-wrapper",null,e("tag-shape",null)),e("h3",{id:"可选择标签"},"可选择标签 ",e("a",{class:"header-anchor",href:"#可选择标签"})),e("p",null,"标签有已选和未选两种状态，可以通过点击标签来切换。类似多选框的效果。"),e("demo-wrapper",null,e("tag-checkbox",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:p}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},t(n,"defaultProps",{tab:"demo"}),t(n,"css",`code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }`),t(n,"propTypes",{tab:String}),n));
