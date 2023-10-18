var _=Object.defineProperty;var T=(l,t,s)=>t in l?_(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s;var o=(l,t,s)=>(T(l,typeof t!="symbol"?t+"":t,s),s);import{W as n,p as u,$ as a,D as p,V as y,c as C}from"./index.1013dd05.js";import"./index.4aa3870c.js";import{c as w}from"./list.a6004a7f.js";import"./link.b06b0ee5.js";import"./space.1c898208.js";import{i as x}from"./style.d07ab3f3.js";import{p as L}from"./marked.esm.01ee1597.js";import"./clsx.f76af8a1.js";import"./lodash.7222df35.js";import"./index.1b6b9343.js";import"./loading.49d516a2.js";import"./dom.3f43d172.js";import"./helper.48ca9b19.js";import"./parseTNode.6312bff6.js";var P=Object.defineProperty,z=Object.getOwnPropertyDescriptor,S=(l,t,s,i)=>{for(var e=i>1?void 0:i?z(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&P(t,s,e),e};let d=class extends n{render(){return u(u.f,null,u("t-list",null,u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},"\u5217\u8868\u5185\u5BB9\u7684\u63CF\u8FF0\u6027\u6587\u5B57"),u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},"\u5217\u8868\u5185\u5BB9\u7684\u63CF\u8FF0\u6027\u6587\u5B57"),u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},"\u5217\u8868\u5185\u5BB9\u7684\u63CF\u8FF0\u6027\u6587\u5B57"),u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},"\u5217\u8868\u5185\u5BB9\u7684\u63CF\u8FF0\u6027\u6587\u5B57")))}};d.css=w;d=S([a("list-base-text")],d);var O=Object.defineProperty,N=Object.getOwnPropertyDescriptor,$=(l,t,s,i)=>{for(var e=i>1?void 0:i?N(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&O(t,s,e),e};let E=class extends n{constructor(){super(...arguments),this.listData=[{id:1,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:2,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:3,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:4,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}]}render(){return u(u.f,null,u("t-list",null,this.listData.map(l=>u("t-list-item",{key:l.id},u("t-list-item-meta",{title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:l.content})))))}};E=$([a("list-multiple-text")],E);var j=Object.defineProperty,V=Object.getOwnPropertyDescriptor,M=(l,t,s,i)=>{for(var e=i>1?void 0:i?V(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&j(t,s,e),e};let v=class extends n{constructor(){super(...arguments),this.avatarUrl="https://tdesign.gtimg.com/list-icon.png",this.listData=[{id:1,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:2,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:3,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:4,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:5,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:6,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:7,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}]}render(){return u(u.f,null,u("t-list",null,this.listData.map(l=>u("t-list-item",{key:l.id},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:l.content})))))}};v=M([a("list-base-image-text")],v);class F extends n{render(t){const s=y("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),i=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:s,width:i?"24":t.size,height:i?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M15.7478 2.94736C16.5289 2.16631 17.7952 2.16631 18.5763 2.94736L21.0511 5.42223C21.8322 6.20328 21.8322 7.46961 21.0511 8.25066L9.15806 20.1437L2.77832 21.2202L3.85476 14.8404L15.7478 2.94736ZM15.5192 6.00439L17.9941 8.47927L19.6369 6.83645L17.1621 4.36157L15.5192 6.00439ZM16.5799 9.89348L14.105 7.41861L5.72062 15.803L5.21828 18.7802L8.19549 18.2779L16.5799 9.89348Z",fill:"black"}))}}o(F,"css",x),o(F,"defaultProps",{size:"1em",style:{fill:"#000"}}),o(F,"propTypes",{size:[String,Number],style:Object,class:String});p("t-icon-edit",F);class m extends n{render(t){const s=y("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),i=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:s,width:i?"24":t.size,height:i?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M13 3L13 12.5858L16.5 9.08579L17.9142 10.5L12 16.4142L6.08579 10.5L7.5 9.08579L11 12.5858L11 3L13 3ZM4.5 14V19H19.5V14H21.5V21H2.5V14H4.5Z",fill:"black"}))}}o(m,"css",x),o(m,"defaultProps",{size:"1em",style:{fill:"#000"}}),o(m,"propTypes",{size:[String,Number],style:Object,class:String});p("t-icon-download",m);var H=Object.defineProperty,U=Object.getOwnPropertyDescriptor,K=(l,t,s,i)=>{for(var e=i>1?void 0:i?U(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&H(t,s,e),e};let D=class extends n{constructor(){super(...arguments),this.avatarUrl="https://tdesign.gtimg.com/site/avatar.jpg"}render(){return u(u.f,null,u("t-list",null,u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"})),u("t-list-item",{action:u("t-space",null,u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C1"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C2"),u("t-link",{theme:"primary",hover:"color"},"\u64CD\u4F5C3"))},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}))),u("div",{style:{marginTop:10}}),u("t-list",{split:!0},u("t-list-item",{action:u("t-space",null,u("t-icon-edit",null),u("t-icon-download",null))},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"})),u("t-list-item",{action:u("t-space",null,u("t-icon-edit",null),u("t-icon-download",null))},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}))))}};D=K([a("list-with-action")],D);var Z=Object.defineProperty,R=Object.getOwnPropertyDescriptor,I=(l,t,s,i)=>{for(var e=i>1?void 0:i?R(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&Z(t,s,e),e};let h=class extends n{render(){return u(u.f,null,u("h4",null,"\u5C3A\u5BF8-\u5C0F"),u("t-list",{size:"small"},u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9")),u("h4",{style:{marginTop:32}},"\u5C3A\u5BF8-\u4E2D\uFF08\u9ED8\u8BA4\uFF09"),u("t-list",null,u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9")),u("h4",{style:{marginTop:32}},"\u5C3A\u5BF8-\u5927"),u("t-list",{size:"large"},u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9")))}};h.css=w;h=I([a("list-size")],h);var W=Object.defineProperty,G=Object.getOwnPropertyDescriptor,q=(l,t,s,i)=>{for(var e=i>1?void 0:i?G(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&W(t,s,e),e};let A=class extends n{render(){return u(u.f,null,u("t-list",{stripe:!0},u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"),u("t-list-item",null,"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9")))}};A=q([a("list-zebra")],A);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,X=(l,t,s,i)=>{for(var e=i>1?void 0:i?Q(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&J(t,s,e),e};let g=class extends n{constructor(){super(...arguments),this.asyncLoading="load-more",this.listData=[{id:1,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:2,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:3,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:4,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}],this.onLoadMore=l=>{console.log(l),this.asyncLoading="loading",this.update(),console.log(this.asyncLoading)}}render(){return u(u.f,null,u("t-list",{split:!0,asyncLoading:this.asyncLoading,onLoadMore:({e:l})=>this.onLoadMore(l)},this.listData.map(l=>u("t-list-item",{key:l.id},l.content))))}};g=X([a("list-async-loading")],g);var Y=Object.defineProperty,k=Object.getOwnPropertyDescriptor,uu=(l,t,s,i)=>{for(var e=i>1?void 0:i?k(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&Y(t,s,e),e};let f=class extends n{constructor(){super(...arguments),this.listData=[{id:1,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:2,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:3,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:4,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}]}render(){return u(u.f,null,u("t-list",{header:"\u8FD9\u91CC\u662F Header",footer:"\u8FD9\u91CC\u662F Footer"},this.listData.map(l=>u("t-list-item",{key:l.id},l.content))),u("t-list",{header:u("p",null,"\u901A\u8FC7 TNode \u63D2\u5165\u7684 Header"),footer:u("p",null,"\u901A\u8FC7 TNode \u63D2\u5165\u7684 Footer")},this.listData.map(l=>u("t-list-item",{key:l.id},l.content))))}};f=uu([a("list-header-footer")],f);var tu=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,lu=(l,t,s,i)=>{for(var e=i>1?void 0:i?eu(t,s):t,r=l.length-1,B;r>=0;r--)(B=l[r])&&(e=(i?B(t,s,e):B(e))||e);return i&&e&&tu(t,s,e),e};let b=class extends n{constructor(){super(...arguments),this.height=300,this.scrollCss=`.t-list{
    height: `+this.height+`px !important;
    overflow: auto,
  }`,this.avatarUrl="https://tdesign.gtimg.com/list-icon.png",this.listData=[{id:1,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:2,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:3,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:4,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:5,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"},{id:6,content:"\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9\u5217\u8868\u5185\u5BB9"}],this.handleScroll=()=>{console.log(111)}}install(){}render(){return u(u.f,null,u("t-list",{css:this.scrollCss,onScroll:this.handleScroll},this.listData.map(l=>u("t-list-item",{key:l.id},u("t-list-item-meta",{image:this.avatarUrl,title:"\u5217\u8868\u4E3B\u5185\u5BB9",description:l.content})))))}};b=lu([a("list-scroll")],b);var c;const iu=L(`

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

`);p("page-list",(c=class extends n{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=C(),this.tdDocTabs=C(),this.updateTab=l=>{this.updateProps({tab:l})}}isShow(l){return this.props.tab===l?{display:"block"}:{display:"none"}}installed(){const l=this.tdDocTabs.current;l.onchange=({detail:t})=>{this.updateTab(t)}}render(){return u(u.f,null,u("div",{style:this.isShow("demo"),name:"DEMO"},u("h3",{id:"\u57FA\u7840\u6587\u5B57\u5217\u8868"},"\u57FA\u7840\u6587\u5B57\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u57FA\u7840\u6587\u5B57\u5217\u8868"})),u("p",null,"\u4EC5\u5305\u542B\u7B80\u5355\u6587\u5B57\u7684\u5217\u8868\u3002\u5BF9\u8F83\u7B80\u5355\u7684\u4FE1\u606F\u8FDB\u884C\u9648\u5217\u65F6\u4F7F\u7528\u3002"),u("demo-wrapper",null,u("list-base-text",null)),u("h3",{id:"\u591A\u884C\u6587\u5B57\u5217\u8868"},"\u591A\u884C\u6587\u5B57\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u591A\u884C\u6587\u5B57\u5217\u8868"})),u("p",null,"\u4EC5\u5305\u542B\u4E3B\u8981\u6587\u5B57\u53CA\u63CF\u8FF0\u6027\u6587\u5B57\u7684\u5217\u8868\u3002\u5BF9\u8F83\u590D\u6742\u7684\uFF0C\u5305\u542B\u591A\u4E2A\u5B57\u6BB5\u6216\u5185\u5BB9\u7684\u4FE1\u606F\u8FDB\u884C\u5C55\u793A\u65F6\u4F7F\u7528\u3002"),u("demo-wrapper",null,u("list-multiple-text",null)),u("h3",{id:"\u57FA\u7840\u56FE\u6587\u5217\u8868"},"\u57FA\u7840\u56FE\u6587\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u57FA\u7840\u56FE\u6587\u5217\u8868"})),u("p",null,"\u5305\u542B\u7B80\u5355\u56FE\u6587\u7684\u5217\u8868\u3002\u9700\u4F7F\u7528\u56FE\u7247\u548C\u6587\u5B57\u7ED3\u5408\u5C55\u793A\u4FE1\u606F\u3002"),u("demo-wrapper",null,u("list-base-image-text",null)),u("h3",{id:"\u5E26\u64CD\u4F5C\u5217\u8868"},"\u5E26\u64CD\u4F5C\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u5E26\u64CD\u4F5C\u5217\u8868"})),u("p",null,"\u5305\u542B\u64CD\u4F5C\u7684\u5217\u8868\u3002\u9700\u8981\u5BF9\u6240\u5728\u5217\u8FDB\u884C\u64CD\u4F5C\u65F6\u4F7F\u7528\u3002"),u("demo-wrapper",null,u("list-with-action",null)),u("h3",{id:"\u4E0D\u540C\u5C3A\u5BF8\u7684\u5217\u8868"},"\u4E0D\u540C\u5C3A\u5BF8\u7684\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u4E0D\u540C\u5C3A\u5BF8\u7684\u5217\u8868"})),u("p",null,"\u63D0\u4F9B\u5927\u3001\u4E2D\uFF08\u9ED8\u8BA4\uFF09\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002"),u("demo-wrapper",null,u("list-size",null)),u("h3",{id:"\u6591\u9A6C\u7EB9\u533A\u5206\u5217\u8868"},"\u6591\u9A6C\u7EB9\u533A\u5206\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u6591\u9A6C\u7EB9\u533A\u5206\u5217\u8868"})),u("demo-wrapper",null,u("list-zebra",null)),u("h3",{id:"\u5F02\u6B65\u52A0\u8F7D\u7684\u5217\u8868"},"\u5F02\u6B65\u52A0\u8F7D\u7684\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u5F02\u6B65\u52A0\u8F7D\u7684\u5217\u8868"})),u("demo-wrapper",null,u("list-async-loading",null)),u("h3",{id:"\u5E26\u5934\u90E8\u53CA\u5C3E\u90E8\u7684\u5217\u8868"},"\u5E26\u5934\u90E8\u53CA\u5C3E\u90E8\u7684\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u5E26\u5934\u90E8\u53CA\u5C3E\u90E8\u7684\u5217\u8868"})),u("demo-wrapper",null,u("list-header-footer",null)),u("h3",{id:"\u5E26\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5217\u8868"},"\u5E26\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5217\u8868 ",u("a",{class:"header-anchor",href:"#\u5E26\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5217\u8868"})),u("demo-wrapper",null,u("list-scroll",null))),u("div",{style:this.isShow("api"),name:"API"},u("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:iu}})),u("div",{style:this.isShow("design"),name:"DESIGN"}))}},c.defaultProps={tab:"demo"},c.css=`code {
      margin: 0 2px;
      color: var(--error-8);
      background: var(--error-1);
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 12px;
      word-break: break-word;
    }`,c.propTypes={tab:String},c));