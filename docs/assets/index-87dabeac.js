var l=Object.defineProperty;var d=(n,t,o)=>t in n?l(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var r=(n,t,o)=>(d(n,typeof t!="symbol"?t+"":t,o),o);import{$ as c,H as i,c as a,d as e}from"./index-4a3ba173.js";import{p}from"./marked.esm-23ea8bc7.js";const h=p(`

## API
### Drawer Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式，TS 类型：\`React.CSSProperties\` | N
attach | String / Function | - | 抽屉挂载的节点，默认挂在组件本身的位置。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
body | TNode | - | 抽屉内容。TS 类型：\`string | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
cancelBtn | TNode | - | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：\`FooterButton\` | N
children | TNode | - | 抽屉内容，同 body。TS 类型：\`string | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
closeBtn | TNode | - | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：\`string | boolean | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
closeOnEscKeydown | Boolean | true | 按下 ESC 时是否触发抽屉关闭事件 | N
closeOnOverlayClick | Boolean | true | 点击蒙层时是否触发抽屉关闭事件 | N
confirmBtn | TNode | - | 确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：\`FooterButton\` \`type FooterButton = string | ButtonProps | TNode\`，[Button API Documents](./button?tab=api)。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/drawer/type.ts) | N
destroyOnClose | Boolean | false | 抽屉关闭时是否销毁节点 | N
footer | TNode | true | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 或 null 不显示任何内容，值类型为 TNode 表示自定义底部内容。TS 类型：\`boolean | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
header | TNode | true | 头部内容。值为 true 显示空白头部，值为 false 不显示头部，值类型为 string 则直接显示值，值类型为 TNode 表示自定义头部内容。TS 类型：\`string | boolean | TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
mode | String | overlay | 展开方式，有两种：直接展示在内容上方 和 推开内容区域。可选项：overlay/push | N
placement | String | right | 抽屉方向。可选项：left/right/top/bottom | N
preventScrollThrough | Boolean | true | 防止滚动穿透 | N
showInAttachedElement | Boolean | false | 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative | N
showOverlay | Boolean | true | 是否显示遮罩层 | N
size | String | 'small' | 尺寸，支持 'small', 'medium', 'large'，'35px', '30%',  '3em' 等。纵向抽屉调整的是抽屉宽度，横向抽屉调整的是抽屉高度 | N
sizeDraggable | Boolean | false | 抽屉大小可拖拽调整，横向抽屉调整宽度，纵向抽屉调整高度 | N
visible | Boolean | false | 组件是否可见 | N
zIndex | Number | - | 抽屉层级，样式默认为 1500 | N
onCancel | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果“取消”按钮存在，点击“取消”按钮时触发，同时触发关闭事件 | N
onClose | Function |  | TS 类型：\`(context: DrawerCloseContext) => void\`<br/>关闭事件，取消按钮点击时、关闭按钮点击时、ESC 按下时、点击蒙层时均会触发。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/drawer/type.ts)。<br/>\`type DrawerEventSource = 'esc' | 'close-btn' | 'cancel' | 'overlay'\`<br/><br/>\`interface DrawerCloseContext { trigger: DrawerEventSource; e: MouseEvent | KeyboardEvent }\`<br/> | N
onCloseBtnClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果关闭按钮存在，点击关闭按钮时触发该事件，同时触发关闭事件 | N
onConfirm | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果“确认”按钮存在，则点击“确认”按钮时触发 | N
onEscKeydown | Function |  | TS 类型：\`(context: { e: KeyboardEvent }) => void\`<br/>按下 ESC 键时触发 | N
onOverlayClick | Function |  | TS 类型：\`(context: { e: MouseEvent }) => void\`<br/>如果蒙层存在，点击蒙层时触发 | N

### DrawerOptions

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
attach | String / Function | 'body' | 抽屉挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：\`AttachNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
className | String | - | 抽屉类名，示例：'t-class-drawer-first t-class-drawer-second' | N
style | Object | - | 弹框 style 属性，输入 [CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText)。TS 类型：\`Styles\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
\`Omit<DrawerProps, 'attach'>\` | - | - | 继承 \`Omit<DrawerProps, 'attach'>\` 中的全部 API | N

### DrawerInstance

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
destroy | - | - | 销毁抽屉
hide | - | - | 隐藏抽屉
show | - | - | 显示抽屉
update | \`(props: DrawerOptions)\` | - | 更新抽屉内容

### drawer 或 DrawerPlugin

参数名称 | 参数类型 | 参数默认值 | 参数说明
-- | -- | -- | --
options | - | - | TS 类型：\`DrawerOptions\`

`);var s;c("page-drawer",(s=class extends i{constructor(){super(...arguments);r(this,"tab",["demo","api","design"]);r(this,"tdDocHeader",a());r(this,"tdDocTabs",a());r(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:o})=>{this.updateTab(o)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"可查看的抽屉"},"可查看的抽屉 ",e("a",{class:"header-anchor",href:"#可查看的抽屉"})),e("p",null,"承载展示性的信息内容。当页面空间有限时，可用抽屉增大页面扩展性。"),e("demo-wrapper",null,e("drawer-base",null)),e("h3",{id:"可操作的抽屉"},"可操作的抽屉 ",e("a",{class:"header-anchor",href:"#可操作的抽屉"})),e("p",null,"操作类抽屉在抽屉中承载需要编辑或操作的表单，可在用户需要操作时使用。"),e("demo-wrapper",null,e("drawer-operation",null)),e("h3",{id:"不显示蒙层的抽屉"},"不显示蒙层的抽屉 ",e("a",{class:"header-anchor",href:"#不显示蒙层的抽屉"})),e("p",null,"通过设置",e("td-code",{text:"showOverlay"}),"，可以控制是否显示抽屉的蒙层。"),e("demo-wrapper",null,e("drawer-no-mask",null)),e("h3",{id:"不同位置的抽屉"},"不同位置的抽屉 ",e("a",{class:"header-anchor",href:"#不同位置的抽屉"})),e("p",null,"通过",e("td-code",{text:"placement"}),"，可以让抽屉在不同的位置展示。"),e("demo-wrapper",null,e("drawer-placement",null)),e("h3",{id:"不同尺寸的抽屉"},"不同尺寸的抽屉 ",e("a",{class:"header-anchor",href:"#不同尺寸的抽屉"})),e("p",null,"通过 ",e("td-code",{text:"size"})," 属性控制抽屉展示宽度。"),e("demo-wrapper",null,e("drawer-size",null)),e("h3",{id:"自定义头部和底部的抽屉"},"自定义头部和底部的抽屉 ",e("a",{class:"header-anchor",href:"#自定义头部和底部的抽屉"})),e("p",null,"通过",e("td-code",{text:"header"}),"和",e("td-code",{text:"footer"})," 可以调整抽屉的头部和底部内容。"),e("demo-wrapper",null,e("drawer-custom",null)),e("h3",{id:"弹出模式抽屉"},"弹出模式抽屉 ",e("a",{class:"header-anchor",href:"#弹出模式抽屉"})),e("p",null,"支持覆盖及推开内容区域的方式展示抽屉， 整个页面的 ",e("td-code",{text:"push"})," 模式需设置"," ",e("td-code",{text:"attach"})," 为 body。（抽屉组件默认挂载到元素本身所在的位置）。"),e("demo-wrapper",null,e("drawer-popup",null)),e("h3",{id:"渲染和呈现在当前父元素的抽屉"},"渲染和呈现在当前父元素的抽屉 ",e("a",{class:"header-anchor",href:"#渲染和呈现在当前父元素的抽屉"})),e("p",null,"通过 ",e("td-code",{text:"showInAttachedElement"})," ","属性指定抽屉出现的父容器元素，父元素需要有定位属性，如：position: relative。"),e("demo-wrapper",null,"待完善"),e("h3",{id:"关闭时销毁抽屉"},"关闭时销毁抽屉 ",e("a",{class:"header-anchor",href:"#关闭时销毁抽屉"})),e("p",null,"通过",e("td-code",{text:"destroyOnClose"}),"，可以在关闭抽屉时将抽屉从页面节点上销毁。"),e("demo-wrapper",null,e("drawer-destroy",null)),e("h3",{id:"可拖拽的抽屉"},"可拖拽的抽屉 ",e("a",{class:"header-anchor",href:"#可拖拽的抽屉"})),e("p",null,"通过",e("td-code",{text:"sizeDraggable"}),"，可以拖拽抽屉的边缘自由改变抽屉的大小。"),e("demo-wrapper",null,e("drawer-size-draggable",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:h}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},r(s,"defaultProps",{tab:"demo"}),r(s,"propTypes",{tab:String}),s));
