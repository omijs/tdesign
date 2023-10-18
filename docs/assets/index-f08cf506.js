var a=Object.defineProperty;var p=(r,t,o)=>t in r?a(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var n=(r,t,o)=>(p(r,typeof t!="symbol"?t+"":t,o),o);import{$ as i,H as d,c as s,d as e}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const m=c("\n\n## API\n### Popup Props\n\n名称 | 类型 | 默认值 | 说明 | 必传\n-- | -- | -- | -- | --\nattach | String / Function | 'body' | 制定挂载节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body。TS 类型：`AttachNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\nchildren | TNode | - | 触发元素，同 triggerElement。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\ncontent | TNode | - | 浮层里面的内容。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\ndelay | Number / Array | - | 延时显示或隐藏浮层，[延迟显示的时间，延迟隐藏的时间]，单位：毫秒。如果只有一个时间，则表示显示和隐藏的延迟时间相同。示例 `'300'` 或者 `[200, 200]`。默认为：[250, 150]。TS 类型：`number | Array<number>` | N\ndestroyOnClose | Boolean | false | 是否在关闭浮层时销毁浮层 | N\ndisabled | Boolean | - | 是否禁用组件 | N\nhideEmptyPopup | Boolean | false | 浮层是否隐藏空内容，默认不隐藏 | N\noverlayClassName | String / Object / Array | - | 浮层类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\noverlayInnerClassName | String / Object / Array | - | 浮层内容部分类名，示例：'name1 name2 name3' 或 `['name1', 'name2']` 或 `[{ 'name1': true }]`。TS 类型：`ClassName`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\noverlayInnerStyle | Boolean / Object / Function | - | 浮层内容部分样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点。TS 类型：`Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\noverlayStyle | Boolean / Object / Function | - | 浮层样式，第一个参数 `triggerElement` 表示触发元素 DOM 节点，第二个参数 `popupElement` 表示浮层元素 DOM 节点。TS 类型：`Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles)`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\nplacement | String | top | 浮层出现位置。TS 类型：`PopupPlacement` `type PopupPlacement = 'top'|'left'|'right'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'|'left-top'|'left-bottom'|'right-top'|'right-bottom'`。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/popup/type.ts) | N\npopperOptions | Object | - | popper 初始化配置，详情参考 https://popper.js.org/docs/ | N\nshowArrow | Boolean | false | 是否显示浮层箭头 | N\ntrigger | String | hover | 触发浮层出现的方式。可选项：hover/click/focus/mousedown/context-menu | N\ntriggerElement | TNode | - | 触发元素。值类型为字符串表示元素选择器。TS 类型：`string | TNode`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N\nvisible | Boolean | - | 是否显示浮层。TS 类型：`boolean` | N\ndefaultVisible | Boolean | - | 是否显示浮层。非受控属性。TS 类型：`boolean` | N\nzIndex | Number | - | 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500 | N\nonScroll | Function |  | TS 类型：`(context: { e: WheelEvent }) => void`<br/>下拉选项滚动事件 | N\nonScrollToBottom | Function |  | TS 类型：`(context: { e: WheelEvent }) => void`<br/>下拉滚动触底事件，常用于滚动到底执行具体业务逻辑 | N\nonVisibleChange | Function |  | TS 类型：`(visible: boolean, context: PopupVisibleChangeContext) => void`<br/>当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/popup/type.ts)。<br/>`interface PopupVisibleChangeContext { e?: PopupTriggerEvent; trigger?: PopupTriggerSource }`<br/><br/>`type PopupTriggerEvent = MouseEvent | FocusEvent | KeyboardEvent`<br/><br/>`type PopupTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus' | 'trigger-element-mousedown' | 'context-menu' | 'keydown-esc'`<br/> | N\n");var l;i("page-popup",(l=class extends d{constructor(){super(...arguments);n(this,"tab",["demo","api","design"]);n(this,"tdDocHeader",s());n(this,"tdDocTabs",s());n(this,"updateTab",t=>{this.updateProps({tab:t})})}isShow(t){return this.props.tab===t?{display:"block"}:{display:"none"}}installed(){const t=this.tdDocTabs.current;t.onchange=({detail:o})=>{this.updateTab(o)}}render(){return e(e.f,null,e("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),e("div",{style:this.isShow("demo"),name:"DEMO"},e("h3",{id:"基础弹出层"},"基础弹出层 ",e("a",{class:"header-anchor",href:"#基础弹出层"})),e("p",null,"由是让浮层内容和触发元素组成，两者均可自定义。使用 ",e("td-code",{text:"content"})," 自定义浮层内容。"),e("demo-wrapper",null,e("popup-base",null)),e("h3",{id:"触发元素"},"触发元素 ",e("a",{class:"header-anchor",href:"#触发元素"})),e("p",null,"可以使用 ",e("td-code",{text:"triggerElement"})," 自定义触发元素。",e("h3",{id:"触发元素"},"触发元素 ",e("a",{class:"header-anchor",href:"#触发元素"}))),e("demo-wrapper",null,e("popup-trigger-element",null)),e("h3",{id:"不同触发方式的弹出层"},"不同触发方式的弹出层 ",e("a",{class:"header-anchor",href:"#不同触发方式的弹出层"})),e("p",null,"提供悬浮时触发（默认）、点击时触发、获取焦点时触发、右击时触发等方式。"),e("demo-wrapper",null,e("popup-trigger",null)),e("h3",{id:"位置方向"},"位置方向 ",e("a",{class:"header-anchor",href:"#位置方向"})),e("p",null,"使用 ",e("td-code",{text:"placement"})," 控制浮层方向，如果需要浮层箭头，设置"," ",e("td-code",{text:"showArrow=true"})," 即可。"),e("demo-wrapper",null,e("popup-placement",null)),e("h3",{id:"浮层样式"},"浮层样式 ",e("a",{class:"header-anchor",href:"#浮层样式"})),e("p",null,"浮层样式可以使用 overlayClassName、 overlayStyle、 overlayInnerStyle 控制。"),e("ul",null,e("li",null,e("td-code",{text:"overlayClassName"})," 用于定义浮层样式类名。"),e("li",null,e("td-code",{text:"overlayStyle"})," ","用于定义浮层样式，比如浮层宽度。浮层宽度默认根据内容宽度呈现，可自由设置宽度和最大宽度。"),e("li",null,e("td-code",{text:"overlayInnerStyle"})," ","用于定义浮层内容部分样式，比如内容最大高度以及是否出滚动条。值为类型为函数时，可以实现浮层内容宽度和触发元素同宽。")),e("demo-wrapper",null,e("popup-style",null)),e("h3",{id:"可控制显示的弹出层"},"可控制显示的弹出层 ",e("a",{class:"header-anchor",href:"#可控制显示的弹出层"})),e("p",null,"可以通过 ",e("td-code",{text:"visible"})," 自由控制弹出层的显示或隐藏。"),e("demo-wrapper",null,e("popup-visible",null)),e("h3",{id:"挂载父节点"},"挂载父节点 ",e("a",{class:"header-anchor",href:"#挂载父节点"})),e("p",null,"浮层默认父节点是 ",e("td-code",{text:"body"}),"，可通过 ",e("td-code",{text:"attach"})," ","自由调整挂载的父节点元素。"),e("demo-wrapper",null,"待完善"),e("h3",{id:"可隐藏时销毁的弹出层"},"可隐藏时销毁的弹出层 ",e("a",{class:"header-anchor",href:"#可隐藏时销毁的弹出层"})),e("td-code",{text:"destroyOnClose"})," 用于控制浮层隐藏时是否销毁浮层内容。",e("demo-wrapper",null,e("popup-destroy",null)),e("h3",{id:"禁用状态的弹出层"},"禁用状态的弹出层 ",e("a",{class:"header-anchor",href:"#禁用状态的弹出层"})),e("p",null,"组件禁用后，不再显示弹出层。"),e("demo-wrapper",null,e("popup-disable",null)),e("h3",{id:"动态自适应"},"动态自适应 ",e("a",{class:"header-anchor",href:"#动态自适应"})),e("p",null,"当trigger或popup显示内容动态变化时，自适应调整位置"),e("demo-wrapper",null,e("popup-dynamic",null))),e("div",{style:this.isShow("api"),name:"API"},e("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:m}})),e("div",{style:this.isShow("design"),name:"DESIGN"}))}},n(l,"defaultProps",{tab:"demo"}),n(l,"propTypes",{tab:String}),l));