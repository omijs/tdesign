var a=Object.defineProperty;var l=(o,i,e)=>i in o?a(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var n=(o,i,e)=>(l(o,typeof i!="symbol"?i+"":i,e),e);import{$ as d,H as c,c as r,d as t}from"./index-4a3ba173.js";import{p as T}from"./marked.esm-23ea8bc7.js";const p=T(`
## API
### Link Props

名称 | 类型 | 默认值 | 说明 | 必传
--  |  --  |  --  |  ---  |  -- 
className |	String |	- | 	类名	N
style |	Object |	- | 	样式，TS 类型：React.CSSProperties	| N
children |	TNode |	- | 	自定义内容，同 content。TS 类型：string - TNode。通用类型定义	| N
closeBtn |	TNode |	undefined | 	关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：string - boolean - TNode。通用类型定义	N
content |	TNode |	- | 	自定义内容。TS 类型：string - TNode。通用类型定义	| N
duration |	Number |	3000 | 	消息显示时长，单位：毫秒。值为 0 表示永久显示	| N
footer |	TNode |	- | 	用于自定义底部内容。TS 类型：string - TNode。通用类型定义	| N
icon |	TNode |	true | 	用于自定义消息通知前面的图标，优先级大于 theme 设定的图标。值为 false 则不显示图标，值为 true 显示 theme 设定图标。TS 类型：boolean - TNode。通用类型定义	| N
theme |	String |	info | 	消息类型。可选项：info/success/warning/error。TS 类型：NotificationThemeList type NotificationThemeList = 'info' - 'success' - 'warning' - 'error'。详细类型定义	| N
title |	TNode |	- | 	标题。TS 类型：string - TNode。通用类型定义	| N
onCloseBtnClick |	Function |	 | 	TS 类型：(context: { e: MouseEvent }) => void点击关闭按钮时触发	| N
onDurationEnd |	Function |	 | 	TS 类型：() => void时结束时触发	| N
`);var s;d("page-notification",(s=class extends c{constructor(){super(...arguments);n(this,"tab",["demo","api","design"]);n(this,"tdDocHeader",r());n(this,"tdDocTabs",r());n(this,"updateTab",i=>{this.updateProps({tab:i})})}isShow(i){return this.props.tab===i?{display:"block"}:{display:"none"}}installed(){const i=this.tdDocTabs.current;i.onchange=({detail:e})=>{this.updateTab(e)}}render(i,e){return t(t.f,null,t("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),t("div",{style:"padding:24px"},t("h2",null,"基础的消息通知"),t("p",null,"消息通知点击即会消失"),t("demo-wrapper",null,t("t-notification",{style:"margin:12px;",duration:0,theme:"info",title:"info",content:"This is my info"})),t("h2",null,"带图标的消息通知"),t("p",null,"带图标的消息通知提供两种情况：普通消息通知和重要消息通知（如：系统错误等）。"),t("demo-wrapper",null,t("t-space",{direction:"vertical",size:"large"},t("t-notification",{duration:0,theme:"info",title:"info",content:"This is my info.This is my info.This is my info.This is my info.This is my info.This is my info.This is my info."}),t("t-notification",{duration:0,theme:"success",title:"success",content:"This is my success"}),t("t-notification",{duration:0,theme:"warning",title:"warning",content:"This is my warning"}),t("t-notification",{duration:0,theme:"error",title:"error",content:"This is my error"}))),t("h2",null,"带操作的消息通知"),t("p",null,"带有操作的消息通知为用户提供下一步行动点，在消息提示框中进行简要快捷的交互。"),t("demo-wrapper",null,"待补充"),t("h2",null,"关闭提示"),t("p",null,"如果不希望通过计时关闭，或者用户点击按钮关闭，也可以使用关闭函数。"),t("demo-wrapper",null,t("t-button",{theme:"primary"},"自由控制关闭时机"),t("div",null,"待补充")),t("div",{direction:"vertical",style:"width:100%",dangerouslySetInnerHTML:{__html:p}})))}},n(s,"defaultProps",{tab:"demo"}),n(s,"propTypes",{tab:String}),s));
