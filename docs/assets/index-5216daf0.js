var r=Object.defineProperty;var n=(l,t,s)=>t in l?r(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var a=(l,t,s)=>(n(l,typeof t!="symbol"?t+"":t,s),s);import{$ as d,H as c,c as i,d as e}from"./index-4a3ba173.js";import{p as h}from"./marked.esm-23ea8bc7.js";const p=h(`

## API
### Switch Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
class | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
customValue | Array | - | 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close']。TS 类型：\`Array<SwitchValue>\` | N
disabled | Boolean | - | 是否禁用组件，默认为 false | N
label | TNode | [] | 开关内容，[开启时内容，关闭时内容]。示例：['开', '关'] 或 (value) => value ? '开' : '关'。TS 类型：\`Array<string \\| TNode>  \\| TNode<{ value: SwitchValue }>\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
loading | Boolean | false | 是否处于加载中状态 | N
size | String | medium | 开关尺寸。可选项：small/medium/large | N
value | String / Number / Boolean | - | 开关值。TS 类型：\`T\` \`type SwitchValue = string | number | boolean\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/switch/type.ts) | N
defaultValue | String / Number / Boolean | - | 开关值。非受控属性。TS 类型：\`T\` \`type SwitchValue = string \\| number \\| boolean\`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/switch/type.ts) | N
onChange | Function |  | TS 类型：\`(value: T, context: { e: MouseEvent }) => void\`<br/>数据发生变化时触发 | N
`);var o;d("page-switch",(o=class extends c{constructor(){super(...arguments);a(this,"tab",["demo","api","design"]);a(this,"tdDocHeader",i());a(this,"tdDocTabs",i());a(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:s})=>{this.updateTab(s)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础开关"},"基础开关 ",e("a",{class:"header-anchor",href:"#基础开关"})),e("p",null,"不带描述，最基础的开关。"),e("demo-wrapper",null,e("switch-base",null)),e("h3",{id:"带描述的开关"},"带描述的开关 ",e("a",{class:"header-anchor",href:"#带描述的开关"})),e("p",null,"开关内部带有文字或图标等描述，含义对应开关当前状态，切换时文字同步切换。视觉上更加醒目，用于需要描述当前开关对应状态及含义，更直观且方便用户理解。"),e("demo-wrapper",null,e("switch-describe",null)),e("h3",{id:"不同状态的开关"},"不同状态的开关 ",e("a",{class:"header-anchor",href:"#不同状态的开关"})),e("p",null,"提供 normal、loading 和 disabled 3种状态的开关。根据不同场景设置对应状态。"),e("demo-wrapper",null,e("switch-status",null)),e("h3",{id:"不同大小的开关"},"不同大小的开关 ",e("a",{class:"header-anchor",href:"#不同大小的开关"})),e("p",null,"提供 大、中（默认）、小 3种开关。"),e("demo-wrapper",null,e("switch-size",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:p}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},a(o,"defaultProps",{tab:"demo"}),a(o,"propTypes",{tab:String}),o));
