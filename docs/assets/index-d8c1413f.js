var i=Object.defineProperty;var p=(r,t,a)=>t in r?i(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var s=(r,t,a)=>(p(r,typeof t!="symbol"?t+"":t,a),a);import{$ as l,H as d,c as n,d as e}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const m=c(`

## API
### Avatar Props
name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式,TS 类型：\`React.CSSProperties\` | N
alt | String | - | 头像替换文本，仅当图片加载失败时有效 | N
children | TNode | - | 子元素内容，同 content。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
content | TNode | - | 子元素内容。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
hideOnLoadFailed | Boolean | false | 加载失败时隐藏图片 | N
icon | TElement | - | 图标。TS 类型：\`TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
image | String | - | 图片地址 | N
imageProps | Object | - | 透传至 Image 组件。TS 类型：\`ImageProps\`,[Image API Documents](./image?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
shape | String | circle | 形状。可选项:circle/round。TS 类型：\`ShapeEnum\` type ShapeEnum = circle \\| round。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
size | String | - | 尺寸,示例值:small /medium /large /24px /38px等,Avatar 单独存在时，默认值为 medium。如果父组件存在 AvatarGroup，默认值便由 AvatarGroup.size 决定 | N
onError | Function |  | TS 类型：(context: { e: ImageEvent }) => void ,图片加载失败时触发 | N


### AvatarGroup Props
name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式。 | N
cascading | String | 'right-up' | 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项:left-up/right-up。TS 类型：\`CascadingValue\` type CascadingValue = left-up \\| right-up。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
collapseAvatar | TNode | - | 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 \`+ N\`。示例：\` + 5\\|...\\|更多\`。TS 类型：\`string \\| TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
max | Number | - | 能够同时显示的最多头像数量 | N      
popupProps | Object | - | 头像右上角提示信息。TS 类型：\`PopupProps\`,[Popup API Documents](./popup?tab=api)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/avatar/type.ts) | N
size | String | - | 尺寸,示例值:small/medium/large/24px/38px 等。优先级低于 Avatar.size | N

`);var o;l("page-avatar",(o=class extends d{constructor(){super(...arguments);s(this,"tab",["demo","api","design"]);s(this,"tdDocHeader",n());s(this,"tdDocTabs",n());s(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:a})=>{this.updateTab(a)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"头像类型"},"头像类型",e("a",{class:"header-anchor",href:"#头像类型"})),e("p",null,"头像提供了 3 种不同类型的头像：图标头像、图片头像、字符头像"),e("demo-wrapper",null,e("avatar-base",null)),e("h4",{id:"头像形状"},"头像形状 ",e("a",{class:"header-anchor",href:"#头像形状"})),e("p",null,"头像默认支持两种形状：round、circle，用户也可自定义设置头像形状"),e("demo-wrapper",null,e("avatar-shape",null)),e("h4",{id:"头像大小"},"头像大小 ",e("a",{class:"header-anchor",href:"#头像大小"})),e("p",null,"头像默认支持三种大小：small、medium、large，用户可自定义设置大小"),e("demo-wrapper",null,e("avatar-size",null)),e("h3",{id:"字符头像大小自适应"},"字符头像大小自适应 ",e("a",{class:"header-anchor",href:"#字符头像大小自适应"})),e("p",null,"头像支持字符自适应，即字符长度过长时，头像可自动调整字符以便呈现完整内容"),e("demo-wrapper",null,e("avatar-adjust",null)),e("h3",{id:"组合头像"},"组合头像 ",e("a",{class:"header-anchor",href:"#组合头像"})),e("p",null,"组合头像展示"),e("demo-wrapper",null,e("avatar-group",null)),e("h3",{id:"组合头像偏移方向"},"组合头像偏移方向 ",e("a",{class:"header-anchor",href:"#组合头像偏移方向"})),e("p",null,"组合头像可控制层叠方向"),e("demo-wrapper",null,e("avatar-group-cascading",null)),e("h3",{id:"组合头像个数"},"组合头像个数 ",e("a",{class:"header-anchor",href:"#组合头像个数"})),e("p",null,"组合头像可设置最大展示个数，超过则隐藏显示"),e("demo-wrapper",null,e("avatar-group-max",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:m}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},s(o,"defaultProps",{tab:"demo"}),s(o,"propTypes",{tab:String}),o));
