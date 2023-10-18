var d=Object.defineProperty;var m=(n,e,o)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o;var s=(n,e,o)=>(m(n,typeof e!="symbol"?e+"":e,o),o);import{$ as i,H as l,c as r,d as t}from"./index-4a3ba173.js";import{p as c}from"./marked.esm-23ea8bc7.js";const p=c(`

## API
### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
actions | Array | - | 操作。TS 类型：\`Array<TNode>\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
author | TNode | - | 作者。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
avatar | TNode | - | 头像。TS 类型：\`string\\|AvaterProps\\|TNode\`,[Avatar API Documents](./avatar?tab=api)。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) 。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/comment/type.ts)  | N
content | TNode | - | 内容。TS 类型：\`string \\|  TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
datetime | TNode | - | 时间。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
quote | TNode | - | 引用。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
reply | TNode | - | 回复。TS 类型：\`string\\|TNode\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N




`);var a;i("page-comment",(a=class extends l{constructor(){super(...arguments);s(this,"tab",["demo","api","design"]);s(this,"tdDocHeader",r());s(this,"tdDocTabs",r());s(this,"updateTab",e=>{this.updateProps({tab:e})})}isShow(e){return this.props.tab===e?{display:"block"}:{display:"none"}}installed(){const e=this.tdDocTabs.current;e.onchange=({detail:o})=>{this.updateTab(o)}}render(){return t(t.f,null,t("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),t("div",{style:this.isShow("demo"),name:"DEMO"},t("h3",{id:"基础评论"},"基础评论",t("a",{class:"header-anchor",href:"#基础评论"})),t("p",null,"评论最基本的组件，包括头像、作者、时间、评论内容，适用于各种需要进行评论展示的场景。"),t("demo-wrapper",null,t("comment-base",null)),t("h4",{id:"带操作的评论"},"带操作的评论 ",t("a",{class:"header-anchor",href:"#带操作的评论"})),t("p",null,"可对评论内容进行相关操作的组件，适用于需要自定义操作列的场景"),t("demo-wrapper",null,t("comment-operation",null)),t("h4",{id:"列表评论"},"列表评论 ",t("a",{class:"header-anchor",href:"#列表评论"})),t("p",null,"以列表形式展示的评论。"),t("demo-wrapper",null,t("comment-list",null)),t("h3",{id:"带回复的评论"},"带回复的评论 ",t("a",{class:"header-anchor",href:"#带回复的评论"})),t("p",null,"展示一条评论的回复内容的组件，适用于对评论进行回复的场景，作者名称后可标明回复对象的名称。"),t("demo-wrapper",null,t("comment-reply",null)),t("h3",{id:"带引用的评论"},"带引用的评论 ",t("a",{class:"header-anchor",href:"#带引用的评论"})),t("p",null,"评论可以引用其他内容，表示评论和其他内容的引用关系。"),t("demo-wrapper",null,t("comment-quote",null)),t("h3",{id:"带回复框的评论"},"带回复框的评论 ",t("a",{class:"header-anchor",href:"#带回复框的评论"})),t("p",null,"对评论内容进行回复操作的组件，可在回复框内直接输入内容进行回复。"),t("demo-wrapper",null,t("comment-reply-form",null))),t("div",{style:this.isShow("api"),name:"API"},t("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:p}})),t("div",{style:this.isShow("design"),name:"DESIGN"}))}},s(a,"defaultProps",{tab:"demo"}),s(a,"propTypes",{tab:String}),a));
