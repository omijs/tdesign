var s=Object.defineProperty;var i=(l,t,a)=>t in l?s(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var o=(l,t,a)=>(i(l,typeof t!="symbol"?t+"":t,a),a);import{$ as d,H as m,c as n,d as e}from"./index-3f1c186f.js";import{p as c}from"./marked.esm-23ea8bc7.js";const h=c(`
## API
### Timeline Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
labelAlign | String | left | 标签信息放在时间轴的位置，\`mode='alternate'\` 时生效。纵向时间轴信息位置：左侧、右侧或两侧，默认信息在时间轴右侧。横向时间轴信息位置：上方、下方、两侧。可选项：left/right/alternate/top/bottom | N
layout | String | vertical | 时间轴方向：水平方向、垂直方向。可选项：horizontal/vertical | N
mode | String | alternate | 标签与内容文本的位置关系，\`alternate\` 为展示在轴两侧，\`same\` 为展示在同一侧。可选项：alternate/same | N
reverse | Boolean | false | 时间轴是否表现为倒序 | N
theme | String | default | 步骤条风格。可选项：default/dot | N

### TimelineItem Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
children | TNode | - | 描述内容，同 content。TS 类型：\`string | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | 描述内容。TS 类型：\`string | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dot | TElement | - | 用于自定义时间轴节点元素。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
dotColor | String | primary | 时间轴颜色，内置 \`primary/warning/error/default\` 四种色值，可传入 16 进制颜色码或 RGB 颜色值.。TS 类型：\`string\` | N
label | TNode | - | 标签文本内容，可完全自定义。TS 类型：\`string | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
labelAlign | String | - | 标签信息相对于时间轴的位置，在 \`mode='alternate'\` 时生效，优先级高于 \`Timeline.labelAlign\`。可选项：left/right/top/bottom | N
loading | Boolean | - | 是否处在加载状态 | N
`);var r;d("page-timeline",(r=class extends m{constructor(){super(...arguments);o(this,"tab",["demo","api","design"]);o(this,"tdDocHeader",n());o(this,"tdDocTabs",n());o(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:a})=>{this.updateTab(a)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础时间轴"},"基础时间轴 ",e("a",{class:"header-anchor",href:"#基础时间轴"})),e("demo-wrapper",null,e("timeline-base",null)),e("h3",{id:"控制排序的时间轴"},"控制排序的时间轴 ",e("a",{class:"header-anchor",href:"#控制排序的时间轴"})),e("demo-wrapper",null,e("timeline-reverse",null)),e("h3",{id:"自定义节点"},"自定义节点 ",e("a",{class:"header-anchor",href:"#自定义节点"})),e("demo-wrapper",null,e("timeline-custom-dot",null)),e("h3",{id:"自定义内容"},"自定义内容 ",e("a",{class:"header-anchor",href:"#自定义内容"})),e("demo-wrapper",null,e("timeline-custom-content",null)),e("h3",{id:"布局方式"},"布局方式 ",e("a",{class:"header-anchor",href:"#布局方式"})),e("demo-wrapper",null,e("timeline-layout",null)),e("h3",{id:"加载状态"},"加载状态 ",e("a",{class:"header-anchor",href:"#加载状态"})),e("demo-wrapper",null,e("timeline-loading",null)),e("h3",{id:"主题色"},"主题色 ",e("a",{class:"header-anchor",href:"#主题色"})),e("demo-wrapper",null,e("timeline-theme",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:h}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},o(r,"defaultProps",{tab:"demo"}),o(r,"propTypes",{tab:String}),r));
