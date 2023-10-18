import{$ as F,W as i,p as u,D as x,c as d}from"./index.79a2e431.js";import"./index.ed35924c.js";import"./textarea.d172f63f.js";import{p as h}from"./marked.esm.01ee1597.js";import"./space.81e99772.js";import"./clsx.f76af8a1.js";import"./lodash.966b3234.js";import"./index.01b533f1.js";import"./noop.ee300efa.js";import"./helper.a6745112.js";var m=Object.defineProperty,C=Object.getOwnPropertyDescriptor,A=(a,e,r,n)=>{for(var t=n>1?void 0:n?C(e,r):e,o=a.length-1,s;o>=0;o--)(s=a[o])&&(t=(n?s(e,r,t):s(t))||t);return n&&t&&m(e,r,t),t};let c=class extends i{render(){return u(u.f,null,u("t-space",{direction:"vertical",style:{width:"100%"}},u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848"}),u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true",autosize:!0}),u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}",autosize:{minRows:3,maxRows:5}})))}};c=A([F("textarea-base")],c);var v=Object.defineProperty,y=Object.getOwnPropertyDescriptor,g=(a,e,r,n)=>{for(var t=n>1?void 0:n?y(e,r):e,o=a.length-1,s;o>=0;o--)(s=a[o])&&(t=(n?s(e,r,t):s(t))||t);return n&&t&&v(e,r,t),t};let p=class extends i{render(){return u(u.f,null,u("t-space",{direction:"vertical",style:{width:"100%"}},u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20",maxlength:"20"}),u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20",maxcharacter:"20"})))}};p=g([F("textarea-limit")],p);var D=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(a,e,r,n)=>{for(var t=n>1?void 0:n?b(e,r):e,o=a.length-1,s;o>=0;o--)(s=a[o])&&(t=(n?s(e,r,t):s(t))||t);return n&&t&&D(e,r,t),t};let B=class extends i{constructor(){super(...arguments),this.value="",this.onBlur=(a,{e})=>{console.log("onBlur: ",a,e)},this.onFocus=(a,{e})=>{console.log("onFocus: ",a,e)},this.onKeyup=(a,{e})=>{console.log("onKeyup",a,e)},this.onKeypress=(a,{e})=>{console.log("onKeypress",a,e)},this.onKeydown=(a,{e})=>{console.log("onKeydown",a,e)}}render(){return u(u.f,null,u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165",value:this.value,onBlur:this.onBlur,onFocus:this.onFocus,onKeypress:this.onKeypress,onKeydown:this.onKeydown,onKeyup:this.onKeyup}))}};B=f([F("textarea-event")],B);var w=Object.defineProperty,T=Object.getOwnPropertyDescriptor,_=(a,e,r,n)=>{for(var t=n>1?void 0:n?T(e,r):e,o=a.length-1,s;o>=0;o--)(s=a[o])&&(t=(n?s(e,r,t):s(t))||t);return n&&t&&w(e,r,t),t};let E=class extends i{render(){return u(u.f,null,u("t-space",{direction:"vertical",style:{width:"100%"}},u("t-textarea",{placeholder:"\u7981\u7528\u72B6\u6001",disabled:"true"}),u("t-textarea",{placeholder:"\u53EA\u8BFB\u72B6\u6001",readonly:"true"}),u("t-textarea",{placeholder:"\u666E\u901A\u72B6\u6001",readonly:"true",tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"}),u("t-textarea",{placeholder:"\u6210\u529F\u72B6\u6001",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A",status:"success"}),u("t-textarea",{placeholder:"\u8B66\u544A\u72B6\u6001",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A",status:"warning"}),u("t-textarea",{placeholder:"\u9519\u8BEF\u72B6\u6001",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A",status:"error"})))}};E=_([F("textarea-status")],E);var l;const K=h(`

## API
### Rate Props

\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20
-- | -- | -- | -- | --
allowInputOverMax | Boolean | false | \u8D85\u51FAmaxlength\u6216maxcharacter\u4E4B\u540E\u662F\u5426\u8FD8\u5141\u8BB8\u8F93\u5165 | N
autofocus | Boolean | false | \u81EA\u52A8\u805A\u7126\uFF0C\u62C9\u8D77\u952E\u76D8 | N
autosize | Boolean / Object | false | \u9AD8\u5EA6\u81EA\u52A8\u6491\u5F00\u3002 autosize = true \u8868\u793A\u7EC4\u4EF6\u9AD8\u5EA6\u81EA\u52A8\u6491\u5F00\uFF0C\u540C\u65F6\uFF0C\u4F9D\u65E7\u5141\u8BB8\u624B\u52A8\u62D6\u9AD8\u5EA6\u3002\u5982\u679C\u8BBE\u7F6E\u4E86 autosize.maxRows \u6216\u8005 autosize.minRows \u5219\u4E0D\u5141\u8BB8\u624B\u52A8\u8C03\u6574\u9AD8\u5EA6\u3002TS \u7C7B\u578B\uFF1A \`boolean / { minRows?: number; maxRows?: number }\` | N
disabled | Boolean | false | 	\u662F\u5426\u7981\u7528\u6587\u672C\u6846 | N
label | String / Slot / Function | - | \u5DE6\u4FA7\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A\`string / TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
maxcharacter | Number | - | \u7528\u6237\u6700\u591A\u53EF\u4EE5\u8F93\u5165\u7684\u5B57\u7B26\u4E2A\u6570\uFF0C\u4E00\u4E2A\u4E2D\u6587\u6C49\u5B57\u8868\u793A\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6 | N
maxlength | Number | - | \u7528\u6237\u6700\u591A\u53EF\u4EE5\u8F93\u5165\u7684\u5B57\u7B26\u4E2A\u6570 | N
name | String | - | 	\u540D\u79F0\uFF0CHTML \u5143\u7D20\u539F\u751F\u5C5E\u6027 | N
placeholder | String | undefined | \u5360\u4F4D\u7B26 | N
readonly | Boolean | false | \u53EA\u8BFB\u72B6\u6001 | N
status | String | - | \u6587\u672C\u6846\u72B6\u6001\u3002\u53EF\u9009\u9879\uFF1Adefault/success/warning/error | N
tips | String / Slot / Function | - | \u8F93\u5165\u6846\u4E0B\u65B9\u63D0\u793A\u6587\u672C\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u7684 status \u5448\u73B0\u4E0D\u540C\u7684\u6837\u5F0F\u3002TS \u7C7B\u578B\uFF1A\`string / TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
value | String / Number	 | - | \u6587\u672C\u6846\u503C\u3002TS \u7C7B\u578B\uFF1A\`TextareaValue type TextareaValue = string\`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
defaultValue | String / Number | - | \u6587\u672C\u6846\u503C\u3002\u975E\u53D7\u63A7\u5C5E\u6027\u3002TS \u7C7B\u578B\uFF1A\`TextareaValue type TextareaValue = string\`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/textarea/type.ts) | N
onBlur | Function | - | 	TS \u7C7B\u578B\uFF1A\`(value: TextareaValue, context: { e: FocusEvent }) => void\` <br/>\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1 | N
onChange | Function | - | TS \u7C7B\u578B\uFF1A\`(value: TextareaValue, context?: { e?: InputEvent }) => void\` <br/>\u8F93\u5165\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1 | N
onFocus | Function | - | TS \u7C7B\u578B\uFF1A\`TS \u7C7B\u578B\uFF1A(value: TextareaValue, context : { e: FocusEvent }) => void\` <br/>\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1 | N
onKeydown | Function | - | TS \u7C7B\u578B\uFF1A\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>\u952E\u76D8\u6309\u4E0B\u65F6\u89E6\u53D1 | N
onKeypress | Function | - | TS \u7C7B\u578B\uFF1A\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>\u6309\u4E0B\u5B57\u7B26\u952E\u65F6\u89E6\u53D1\uFF08keydown -> keypress -> keyup\uFF09 | N
onKeyup | Function | - | TS \u7C7B\u578B\uFF1A\`(value: TextareaValue, context: { e: KeyboardEvent }) => void\` <br/>\u91CA\u653E\u952E\u76D8\u65F6\u89E6\u53D1 | N

`);x("page-textarea",(l=class extends i{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=d(),this.tdDocTabs=d(),this.updateTab=a=>{this.updateProps({tab:a})}}isShow(a){return this.props.tab===a?{display:"block"}:{display:"none"}}installed(){const a=this.tdDocTabs.current;a.onchange=({detail:e})=>{this.updateTab(e)}}render(){return u(u.f,null,u("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),u("div",{style:this.isShow("demo"),name:"DEMO"},u("td-doc-usage",{language:"markup",panel:"textarea",code:`<t-textarea
  allowInputOverMax={false}
  autofocus={false}
  autosize={false}
  placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
  readonly={false}
/>`},u("div",{slot:"textarea",style:"width: 100%; display: flex; align-items: center; justify-content: center;"},u("t-textarea",{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",style:"width: 100%;"}))),u("h3",{id:"\u57FA\u672C\u591A\u884C\u6587\u672C\u6846"},"\u57FA\u672C\u591A\u884C\u6587\u672C\u6846 ",u("a",{class:"header-anchor",href:"#\u57FA\u672C\u591A\u884C\u6587\u672C\u6846"})),u("p",null,"\u7528\u4E8E\u591A\u884C\u6587\u672C\u7684\u8F93\u5165\u3002"),u("td-doc-demo",{code:`import { OmiProps, WeElement, h, tag, render } from "omi"
import "../index"

@tag("textarea-base")
export default class TextareaBase extends WeElement{
  render(){
    return <h.f>
      <t-textarea placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848"></t-textarea>
      <t-textarea placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true" autosize={true}></t-textarea>
      <t-textarea placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}" autosize={{minRows: 3, maxRows: 5}}></t-textarea>
    </h.f>
  }
}`,language:"jsx",mode:"auto"},u("div",{class:"tdesign-demo-item__body"},u("div",{style:"width: 100%;"},u("textarea-base",null)))),u("h3",{id:"\u9650\u5236\u6700\u5927\u5B57\u7B26\u6570"},"\u9650\u5236\u6700\u5927\u5B57\u7B26\u6570 ",u("a",{class:"header-anchor",href:"#\u9650\u5236\u6700\u5927\u5B57\u7B26\u6570"})),u("p",null,"\u7528\u4E8E\u591A\u884C\u6587\u672C\u7684\u8F93\u5165\u3002"),u("td-doc-demo",{code:`import { OmiProps, WeElement, h, tag, render } from "omi"

import "../index"
import "../../space/index"

@tag("textarea-limit")
export default class TextareaLimit extends WeElement{

  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: 100% }}>
        <t-textarea placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20" maxlength="20"></t-textarea>
        <t-textarea placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20" maxcharacter="20"></t-textarea>
      </t-space>
    </h.f>
    
  }
}`,language:"jsx",mode:"auto"},u("div",{class:"tdesign-demo-item__body"},u("div",{style:"width: 100%;"},u("textarea-limit",null)))),u("h3",{id:"\u7ED1\u5B9A DOM \u4E8B\u4EF6"},"\u7ED1\u5B9A DOM \u4E8B\u4EF6 ",u("a",{class:"header-anchor",href:"#\u7ED1\u5B9A DOM \u4E8B\u4EF6"})),u("p",null,"\u53EF\u7ED1\u5B9A ",u("code",null,"onKeypress")," ",u("code",null,"onKeydown")," ",u("code",null,"onKeyup")," ",u("code",null,"onFocus")," ",u("code",null,"onBlur")," \u7B49 DOM \u539F\u751F\u4E8B\u4EF6\u3002"),u("td-doc-demo",{code:`import { OmiProps, WeElement, h, tag, render} from "omi"
import "../index"

@tag("textarea-event")
export default class TextareaEvent extends WeElement {

  evtDetail: number
  value :string
  
  onBlur = (evt : Event) =>{
    console.log("onBlur", evt.detail.value, evt.detail.event)
  }

  onFocus = (evt : Event) =>{
    console.log("onFocus", evt.detail.value, evt.detail.event)
  }

  onKeyup = (evt : Event) =>{
    console.log("onKeyup", evt.detail.value, evt.detail.event)
  }

  onKeypress = (evt : Event) =>{
    console.log("onKeypress", evt.detail.value, evt.detail.event)
  }

  onKeydown = (evt : Event) =>{
    console.log("onKeydown", evt.detail.value, evt.detail.event)
  }

  render() {
    return (
      <h.f>
        <t-textarea
          placeholder="\u8BF7\u8F93\u5165"
          // value={this.value}
          onMyBlur={this.onBlur}
          onMyFocus={this.onFocus}
          onMyKeypress={this.onKeypress}
          onMyKeydown={this.onKeydown}
          onMyKeyup={this.onKeyup}
        ></t-textarea>
      </h.f>
    )
  }
}`,language:"jsx",mode:"auto"},u("div",{class:"tdesign-demo-item__body"},u("div",{style:"width: 100%;"},u("textarea-event",null)))),u("h3",{id:"\u4E0D\u540C\u72B6\u6001\u7684\u591A\u884C\u6587\u672C\u6846"},"\u4E0D\u540C\u72B6\u6001\u7684\u591A\u884C\u6587\u672C\u6846 ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u72B6\u6001\u7684\u591A\u884C\u6587\u672C\u6846"})),u("p",null,"\u652F\u6301\u53EA\u8BFB\u3001\u7981\u7528\u72B6\u6001\u3002"),u("td-doc-demo",{code:`import { OmiProps, WeElement, h, tag, render } from "omi"

import "../index"
import "../../space/index"

@tag("textarea-status")
export default class TextareaStatus extends WeElement{

  render(){
    return <h.f>
      <t-space direction="vertical" style={{ width: "100%" }}>
        <t-textarea placeholder="\u7981\u7528\u72B6\u6001" disabled="true"></t-textarea>
        <t-textarea placeholder="\u53EA\u8BFB\u72B6\u6001" readonly="true"></t-textarea>
        <t-textarea placeholder="\u666E\u901A\u72B6\u6001" readonly="true" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"></t-textarea>
        <t-textarea placeholder="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" status="success"></t-textarea>
        <t-textarea placeholder="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" status="warning"></t-textarea>
        <t-textarea placeholder="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" status="error"></t-textarea>
        </t-space>
    </h.f>
  }
}`,language:"jsx",mode:"auto"},u("div",{class:"tdesign-demo-item__body"},u("div",{style:"width: 100%;"},u("textarea-status",null))))),u("div",{style:this.isShow("api"),name:"API"},u("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:K}})),u("div",{style:this.isShow("design"),name:"DESIGN"}))}},l.defaultProps={tab:"demo"},l.css=`
    code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }
    
    .tdesign-demo-item__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      min-height: 204px;
      padding: 40px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      overflow: auto;
    }
    `,l.propTypes={tab:String},l));
