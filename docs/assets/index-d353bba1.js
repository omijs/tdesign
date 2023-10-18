var n=Object.defineProperty;var d=(s,a,t)=>a in s?n(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var r=(s,a,t)=>(d(s,typeof a!="symbol"?a+"":a,t),t);import{$ as i,H as h,c as l,d as e}from"./index-4a3ba173.js";import{p}from"./marked.esm-23ea8bc7.js";const c=p(`

## API
### Rate Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
allowHalf | Boolean | false | 是否允许半选 | N
color | String / Array | '#ED7B2F' | 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB']。TS 类型：\`string | Array<string>\` | N
count | Number | 5 | 评分的数量 | N
disabled | Boolean | - | 是否禁用评分 | N
gap | Number | 4 | 评分图标的间距 | N
icon | TElement | - | 自定义评分图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
showText | Boolean | false | 是否显示对应的辅助文字 | N
size | String | 24px | 评分图标的大小，示例：\`20px\` | N
texts | Array | [] | 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分']。TS 类型：\`Array<string>\` | N
value | Number | 0 | 选择评分的值 | N
defaultValue | Number | 0 | 选择评分的值。非受控属性 | N
onChange | Function |  | TS 类型：\`(value: number) => void\`<br/>评分数改变时触发 | N

`);var o;i("page-rate",(o=class extends h{constructor(){super(...arguments);r(this,"tab",["demo","api","design"]);r(this,"tdDocHeader",l());r(this,"tdDocTabs",l());r(this,"updateTab",a=>{this.updateProps({tab:a})})}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:t})=>{this.updateTab(t)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"实心评分"},"实心评分 ",e("a",{class:"header-anchor",href:"#实心评分"})),e("demo-wrapper",null,e("rate-base",null)),e("h3",{id:"自定义评分数量"},"自定义评分数量 ",e("a",{class:"header-anchor",href:"#自定义评分数量"})),e("demo-wrapper",null,e("rate-custom",null)),e("h3",{id:"带描述评分"},"带描述评分 ",e("a",{class:"header-anchor",href:"#带描述评分"})),e("demo-wrapper",null,"待完善"),e("h3",{id:"组件状态"},"组件状态 ",e("a",{class:"header-anchor",href:"#组件状态"})),e("demo-wrapper",null,e("rate-status",null)),e("h3",{id:"组件大小"},"组件大小 ",e("a",{class:"header-anchor",href:"#组件大小"})),e("p",null,"可以通过 ",e("td-code",{text:"size"})," 属性调整图标尺寸。"),e("demo-wrapper",null,e("rate-size",null)),e("h3",{id:"自定义评分图标"},"自定义评分图标 ",e("a",{class:"header-anchor",href:"#自定义评分图标"})),e("p",null,"可以通过 ",e("td-code",{text:"icon"})," 属性自定义高亮图标。"),e("demo-wrapper",null,e("rate-icon",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:c}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},r(o,"defaultProps",{tab:"demo"}),r(o,"propTypes",{tab:String}),o));
