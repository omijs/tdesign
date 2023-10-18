var E=Object.defineProperty;var v=(e,B,n)=>B in e?E(e,B,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[B]=n;var i=(e,B,n)=>(v(e,typeof B!="symbol"?B+"":B,n),n);import{W as C,p as u,$ as o,D as g,V as b,c as D}from"./index.1013dd05.js";import"./index.4aa3870c.js";import"./comment.e373580e.js";import"./button.509cfde5.js";import"./index.ce7a5051.js";import"./space.1c898208.js";import"./textarea.f932445f.js";import{p as f}from"./marked.esm.01ee1597.js";import{i as y}from"./style.d07ab3f3.js";import"./clsx.f76af8a1.js";import"./lodash.7222df35.js";import"./index.1b6b9343.js";import"./parseTNode.6312bff6.js";import"./loading.49d516a2.js";import"./dom.3f43d172.js";import"./helper.48ca9b19.js";import"./noop.ee300efa.js";var _=Object.defineProperty,T=Object.getOwnPropertyDescriptor,P=(e,B,n,s)=>{for(var t=s>1?void 0:s?T(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&_(B,n,t),t};let m=class extends C{render(){return u("t-comment",{avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540D",datetime:"\u4ECA\u592916:38",content:"\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002"})}};m.css="t-comment{}";m=P([o("comment-base")],m);var w=Object.defineProperty,O=Object.getOwnPropertyDescriptor,N=(e,B,n,s)=>{for(var t=s>1?void 0:s?O(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&w(B,n,t),t};let c=class extends C{constructor(){super(...arguments),this.actions=[u("div",null,u("t-icon-thumb-up",{size:"16px"}),u("span",null," 6")),u("div",null,u("t-icon-chat",{size:"16px"}),u("span",null," \u56DE\u590D"))],this.commentsData=[{id:"A",avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540DA",datetime:"\u4ECA\u592916:38",content:"A\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",action:this.actions},{id:"B",avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540DB",datetime:"\u4ECA\u592916:38",content:"B\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",action:this.actions},{id:"C",avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540DC",datetime:"\u4ECA\u592916:38",content:"C\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",action:this.actions}]}render(){return u("div",{split:!0},this.commentsData.map(e=>u("div",{key:e.id},u("t-comment",{avatar:e.avatar,author:e.author,datetime:e.datetime,content:e.content,actions:this.actions}))))}};c.css="t-comment{}";c=N([o("comment-list")],c);var j=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=(e,B,n,s)=>{for(var t=s>1?void 0:s?z(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&j(B,n,t),t};let p=class extends C{constructor(){super(...arguments),this.actions=[u("div",null,u("t-icon-thumb-up",{size:"16px"}),u("span",null," 6")),u("div",null,u("t-icon-chat",{size:"16px"}),u("span",null," \u56DE\u590D"))]}render(){return u("t-comment",{avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540D",datetime:"\u4ECA\u592916:38",content:"\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",actions:this.actions})}};p.css="t-comment{}";p=x([o("comment-operation")],p);var S=Object.defineProperty,$=Object.getOwnPropertyDescriptor,L=(e,B,n,s)=>{for(var t=s>1?void 0:s?$(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&S(B,n,t),t};let h=class extends C{constructor(){super(...arguments),this.actions=[u("div",null,u("t-icon-thumb-up",{size:"16px"}),u("span",null," 6")),u("div",null,u("t-icon-chat",{size:"16px"}),u("span",null," \u56DE\u590D"))],this.quoteElement=u("t-comment",{author:"\u5F15\u7528\u5185\u5BB9\u6807\u9898",content:"\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u5F15\u7528\u5185\u5BB9\u3002"})}render(){return u("t-comment",{avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540DA",datetime:"\u4ECA\u592916:38",content:"A\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",actions:this.actions,quote:this.quoteElement})}};h.css="t-comment{}";h=L([o("comment-quote")],h);var q=Object.defineProperty,M=Object.getOwnPropertyDescriptor,H=(e,B,n,s)=>{for(var t=s>1?void 0:s?M(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&q(B,n,t),t};let d=class extends C{constructor(){super(...arguments),this.replyData="",this.submitReply=()=>{alert(`\u56DE\u590D\u5185\u5BB9\uFF1A
`+this.replyData)},this.valueChange=e=>{this.replyData=e.target.value},this.replyForm=u("t-space",{direction:"vertical",align:"end",style:{width:"100%"}},u("t-textarea",{onChange:this.valueChange,cols:"30",rows:"10",style:{width:500,height:50},placeholder:"\u8BF7\u8F93\u5165\u56DE\u590D\u5185\u5BB9"}),u("t-button",{style:{float:"right"},onClick:this.submitReply,theme:"primary"},"\u56DE\u590D"))}render(){return u("t-comment",{avatar:"https://tdesign.gtimg.com/site/avatar.jpg",content:this.replyForm})}};d.css="t-comment{}";d=H([o("comment-reply-form")],d);class l extends C{render(B){const n=b("t-icon",B.class,{["t-size-s"]:B.size==="small",["t-size-m"]:B.size==="medium",["t-size-l"]:B.size==="large"}),s=B.size==="small"||B.size==="medium"||B.size==="large",t={...B.style,fontSize:B.size};return u("svg",{class:n,width:s?"24":B.size,height:s?"24":B.size,style:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M4.5 11L16.0858 11L11.5858 6.50003L13 5.08582L19.9142 12L13 18.9142L11.5858 17.5L16.0858 13L4.5 13L4.5 11Z",fill:"black"}))}}i(l,"css",y),i(l,"defaultProps",{size:"1em",style:{fill:"#000"}}),i(l,"propTypes",{size:[String,Number],style:Object,class:String});g("t-icon-arrow-right",l);var I=Object.defineProperty,G=Object.getOwnPropertyDescriptor,V=(e,B,n,s)=>{for(var t=s>1?void 0:s?G(B,n):B,a=e.length-1,r;a>=0;a--)(r=e[a])&&(t=(s?r(B,n,t):r(t))||t);return s&&t&&I(B,n,t),t};let F=class extends C{constructor(){super(...arguments),this.actions=[u("div",null,u("t-icon-thumb-up",{size:"16px"}),u("span",null," 6")),u("div",null,u("t-icon-chat",{size:"16px"}),u("span",null," \u56DE\u590D"))],this.replyAuthor=u(u.f,null,u("span",null,"\u8BC4\u8BBA\u4F5C\u8005\u540DB"),u("t-icon-arrow-right",null),u("span",null,"\u8BC4\u8BBA\u4F5C\u8005\u540DA")),this.replyElement=u("t-comment",{avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:this.replyAuthor,datetime:"\u4ECA\u592916:38",content:"B\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",actions:this.actions})}render(){return u("t-comment",{className:"comment-reply",avatar:"https://tdesign.gtimg.com/site/avatar.jpg",author:"\u8BC4\u8BBA\u4F5C\u8005\u540DA",datetime:"\u4ECA\u592916:38",content:"A\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u8BC4\u8BBA\u5185\u5BB9\u3002",actions:this.actions,reply:this.replyElement})}};F.css="t-comment{}";F=V([o("comment-reply")],F);var A;const W=f(`

## API
### Comment Props

name | type | default | description | required
-- | -- | -- | -- | --
className | String | - | \u7C7B\u540D | N
style | Object | - | \u6837\u5F0F | N
actions | Array | - | \u64CD\u4F5C\u3002TS \u7C7B\u578B\uFF1A\`Array<TNode>\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
author | TNode | - | \u4F5C\u8005\u3002TS \u7C7B\u578B\uFF1A\`string\\|TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
avatar | TNode | - | \u5934\u50CF\u3002TS \u7C7B\u578B\uFF1A\`string\\|AvaterProps\\|TNode\`,[Avatar API Documents](./avatar?tab=api)\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) \u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/comment/type.ts)  | N
content | TNode | - | \u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A\`string \\|  TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
datetime | TNode | - | \u65F6\u95F4\u3002TS \u7C7B\u578B\uFF1A\`string\\|TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
quote | TNode | - | \u5F15\u7528\u3002TS \u7C7B\u578B\uFF1A\`string\\|TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)  | N
reply | TNode | - | \u56DE\u590D\u3002TS \u7C7B\u578B\uFF1A\`string\\|TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N




`);g("page-comment",(A=class extends C{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=D(),this.tdDocTabs=D(),this.updateTab=e=>{this.updateProps({tab:e})}}isShow(e){return this.props.tab===e?{display:"block"}:{display:"none"}}installed(){const e=this.tdDocTabs.current;e.onchange=({detail:B})=>{this.updateTab(B)}}render(){return u(u.f,null,u("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),u("div",{style:this.isShow("demo"),name:"DEMO"},u("h3",{id:"\u57FA\u7840\u8BC4\u8BBA"},"\u57FA\u7840\u8BC4\u8BBA",u("a",{class:"header-anchor",href:"#\u57FA\u7840\u8BC4\u8BBA"})),u("p",null,"\u8BC4\u8BBA\u6700\u57FA\u672C\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u5934\u50CF\u3001\u4F5C\u8005\u3001\u65F6\u95F4\u3001\u8BC4\u8BBA\u5185\u5BB9\uFF0C\u9002\u7528\u4E8E\u5404\u79CD\u9700\u8981\u8FDB\u884C\u8BC4\u8BBA\u5C55\u793A\u7684\u573A\u666F\u3002"),u("demo-wrapper",null,u("comment-base",null)),u("h4",{id:"\u5E26\u64CD\u4F5C\u7684\u8BC4\u8BBA"},"\u5E26\u64CD\u4F5C\u7684\u8BC4\u8BBA ",u("a",{class:"header-anchor",href:"#\u5E26\u64CD\u4F5C\u7684\u8BC4\u8BBA"})),u("p",null,"\u53EF\u5BF9\u8BC4\u8BBA\u5185\u5BB9\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\u7684\u7EC4\u4EF6\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u81EA\u5B9A\u4E49\u64CD\u4F5C\u5217\u7684\u573A\u666F"),u("demo-wrapper",null,u("comment-operation",null)),u("h4",{id:"\u5217\u8868\u8BC4\u8BBA"},"\u5217\u8868\u8BC4\u8BBA ",u("a",{class:"header-anchor",href:"#\u5217\u8868\u8BC4\u8BBA"})),u("p",null,"\u4EE5\u5217\u8868\u5F62\u5F0F\u5C55\u793A\u7684\u8BC4\u8BBA\u3002"),u("demo-wrapper",null,u("comment-list",null)),u("h3",{id:"\u5E26\u56DE\u590D\u7684\u8BC4\u8BBA"},"\u5E26\u56DE\u590D\u7684\u8BC4\u8BBA ",u("a",{class:"header-anchor",href:"#\u5E26\u56DE\u590D\u7684\u8BC4\u8BBA"})),u("p",null,"\u5C55\u793A\u4E00\u6761\u8BC4\u8BBA\u7684\u56DE\u590D\u5185\u5BB9\u7684\u7EC4\u4EF6\uFF0C\u9002\u7528\u4E8E\u5BF9\u8BC4\u8BBA\u8FDB\u884C\u56DE\u590D\u7684\u573A\u666F\uFF0C\u4F5C\u8005\u540D\u79F0\u540E\u53EF\u6807\u660E\u56DE\u590D\u5BF9\u8C61\u7684\u540D\u79F0\u3002"),u("demo-wrapper",null,u("comment-reply",null)),u("h3",{id:"\u5E26\u5F15\u7528\u7684\u8BC4\u8BBA"},"\u5E26\u5F15\u7528\u7684\u8BC4\u8BBA ",u("a",{class:"header-anchor",href:"#\u5E26\u5F15\u7528\u7684\u8BC4\u8BBA"})),u("p",null,"\u8BC4\u8BBA\u53EF\u4EE5\u5F15\u7528\u5176\u4ED6\u5185\u5BB9\uFF0C\u8868\u793A\u8BC4\u8BBA\u548C\u5176\u4ED6\u5185\u5BB9\u7684\u5F15\u7528\u5173\u7CFB\u3002"),u("demo-wrapper",null,u("comment-quote",null)),u("h3",{id:"\u5E26\u56DE\u590D\u6846\u7684\u8BC4\u8BBA"},"\u5E26\u56DE\u590D\u6846\u7684\u8BC4\u8BBA ",u("a",{class:"header-anchor",href:"#\u5E26\u56DE\u590D\u6846\u7684\u8BC4\u8BBA"})),u("p",null,"\u5BF9\u8BC4\u8BBA\u5185\u5BB9\u8FDB\u884C\u56DE\u590D\u64CD\u4F5C\u7684\u7EC4\u4EF6\uFF0C\u53EF\u5728\u56DE\u590D\u6846\u5185\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u8FDB\u884C\u56DE\u590D\u3002"),u("demo-wrapper",null,u("comment-reply-form",null))),u("div",{style:this.isShow("api"),name:"API"},u("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:W}})),u("div",{style:this.isShow("design"),name:"DESIGN"}))}},A.defaultProps={tab:"demo"},A.propTypes={tab:String},A));