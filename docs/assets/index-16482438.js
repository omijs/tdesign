var n=Object.defineProperty;var d=(r,t,a)=>t in r?n(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var s=(r,t,a)=>(d(r,typeof t!="symbol"?t+"":t,a),a);import{$ as i,H as c,c as l,d as e}from"./index-4a3ba173.js";import{p}from"./marked.esm-23ea8bc7.js";const h=p(`

## API
### Space Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
align | String | - | 对齐方式。可选项：start/end/center/baseline | N
breakLine | Boolean | false | 是否自动换行，仅在 horizontal 时有效	 | N
direction | String | horizontal | 间距方向。可选项：vertical/horizontal | N
separator | TNode | - | 分隔符。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
size | String / Number / Array | 'medium' | 间距大小。TS 类型：\`SpaceSize \\| SpaceSize[]\` \`type SpaceSize = number \\| string \\| SizeEnum\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义]((https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/space/type.ts) | N

`);var o;i("page-space",(o=class extends c{constructor(){super(...arguments);s(this,"tab",["demo","api","design"]);s(this,"tdDocHeader",l());s(this,"tdDocTabs",l());s(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:a})=>{this.updateTab(a)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基本用法"},"基本用法 ",e("a",{class:"header-anchor",href:"#基本用法"})),e("p",null,"默认为横向排列，控制相邻组件水平间距。"),e("demo-wrapper",null,e("space-base",null)),e("h3",{id:"垂直间距"},"垂直间距 ",e("a",{class:"header-anchor",href:"#垂直间距"})),e("p",null,"可以设置 ",e("td-code",{text:"direction=vertical"})," 调整为竖向排列。"),e("demo-wrapper",null,e("space-vertical",null)),e("h3",{id:"间距大小"},"间距大小 ",e("a",{class:"header-anchor",href:"#间距大小"})),e("p",null,"可以通过 ",e("td-code",{text:"size"})," 调整间距大小，自带三个可选值 ",e("td-code",{text:"small"}),"、",e("td-code",{text:"medium"}),"、",e("td-code",{text:"large"}),"。 也可以自定义设置，设置为数组时参数为"," ",e("td-code",{text:"[row-gap, column-gap]"}),"。"),e("demo-wrapper",null,e("space-size",null)),e("h3",{id:"对齐方式"},"对齐方式 ",e("a",{class:"header-anchor",href:"#对齐方式"})),e("p",null,"可以通过 ",e("td-code",{text:"align"})," 设置辅轴对齐方式，效果与 ",e("td-code",{text:"align-items"})," ","一致。"),e("demo-wrapper",null,e("space-align",null)),e("h3",{id:"自动换行"},"自动换行 ",e("a",{class:"header-anchor",href:"#自动换行"})),e("p",null,"可以通过 ",e("td-code",{text:"breakLine"})," 控制是否自动换行，默认不换行。"),e("demo-wrapper",null,e("space-break-line",null)),e("h3",{id:"设置分隔符"},"设置分隔符 ",e("a",{class:"header-anchor",href:"#设置分隔符"})),e("p",null,"可以通过 ",e("td-code",{text:"separator"})," 设置分隔符。"),e("demo-wrapper",null,e("space-separator",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:h}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},s(o,"defaultProps",{tab:"demo"}),s(o,"propTypes",{tab:String}),o));
