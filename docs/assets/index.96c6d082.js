var P=Object.defineProperty;var O=(n,t,r)=>t in n?P(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var c=(n,t,r)=>(O(n,typeof t!="symbol"?t+"":t,r),r);import{D as _,W as i,V as x,p as u,$ as C,c as a}from"./index.7ac70225.js";import"./index.5af62aa0.js";import{i as $}from"./style.d07ab3f3.js";import"./dropdown.49ef850f.js";import"./popup.8854d94f.js";import{p as S}from"./marked.esm.01ee1597.js";import"./button.55a70fd8.js";import"./ellipsis.206afbf2.js";import"./discount.ca685144.js";import"./lodash.0f80b01b.js";import"./clsx.f76af8a1.js";import"./index.184f6101.js";import"./divider.bbe0b32b.js";import"./isObject.979aae4d.js";import"./helper.fa485ad2.js";import"./index.es.3bb5cac9.js";import"./parseTNode.6312bff6.js";import"./loading.602b989c.js";import"./dom.52d90348.js";class p extends i{render(t){const r=x("t-icon",t.class,{["t-size-s"]:t.size==="small",["t-size-m"]:t.size==="medium",["t-size-l"]:t.size==="large"}),o=t.size==="small"||t.size==="medium"||t.size==="large",e={...t.style,fontSize:t.size};return u("svg",{class:r,width:o?"24":t.size,height:o?"24":t.size,style:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M17.5001 8.08582L12.0002 13.5858L6.50015 8.08582L5.08594 9.50003L12.0002 16.4142L18.9144 9.50003L17.5001 8.08582Z",fill:"black"}))}}c(p,"css",$),c(p,"defaultProps",{size:"1em",style:{fill:"#000"}}),c(p,"propTypes",{size:[String,Number],style:Object,class:String});_("t-icon-chevron-down",p);var N=Object.defineProperty,y=Object.getOwnPropertyDescriptor,T=(n,t,r,o)=>{for(var e=o>1?void 0:o?y(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&N(t,r,e),e};let F=class extends i{constructor(){super(...arguments),this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3},{content:this.getContent(),value:4}]}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler},u("t-button",{variant:"text",suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};F=T([C("dropdown-base")],F);var z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,H=(n,t,r,o)=>{for(var e=o>1?void 0:o?j(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&z(t,r,e),e};let E=class extends i{constructor(){super(...arguments),this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3},{content:this.getContent(),value:4}]}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler},u("t-button",{theme:"default",variant:"outline",shape:"square"},u("t-icon-ellipsis",{size:"16"})))}};E=H([C("dropdown-button")],E);var I=Object.defineProperty,L=Object.getOwnPropertyDescriptor,M=(n,t,r,o)=>{for(var e=o>1?void 0:o?L(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&I(t,r,e),e};let D=class extends i{constructor(){super(...arguments),this.dropdownCss=`ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`,this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)}}render(){return u("t-dropdown",{css:this.dropdownCss,minColumnWidth:100,trigger:"click"},u("t-button",{variant:"text",suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"),u("t-dropdown-menu",null,u("t-dropdown-item",{value:1},"\u64CD\u4F5C\u4E00",u("t-dropdown-menu",null,u("t-dropdown-item",{value:11},"\u64CD\u4F5C1-1"),u("t-dropdown-item",{value:12},"\u64CD\u4F5C1-2",u("t-dropdown-menu",null,u("t-dropdown-item",{value:111},"\u64CD\u4F5C1-1-1"),u("t-dropdown-item",{value:112},"\u64CD\u4F5C1-1-2"))))),u("t-dropdown-item",{value:2},"\u64CD\u4F5C\u4E8C",u("t-dropdown-menu",null,u("t-dropdown-item",{value:21},"\u64CD\u4F5C2-1",u("t-dropdown-menu",null,u("t-dropdown-item",{value:211},"\u64CD\u4F5C2-1-1"),u("t-dropdown-item",{value:211},"\u64CD\u4F5C2-1-2"))),u("t-dropdown-item",{value:22,onClick:this.clickHandler},"\u64CD\u4F5C2-2"))),u("t-dropdown-item",{value:3},"\u64CD\u4F5C\u4E09")))}};D=M([C("dropdown-child")],D);var W=Object.defineProperty,R=Object.getOwnPropertyDescriptor,q=(n,t,r,o)=>{for(var e=o>1?void 0:o?R(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&W(t,r,e),e};let h=class extends i{constructor(){super(...arguments),this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.options=[{content:"\u64CD\u4F5C\u4E00",value:1,onClick:()=>console.log("\u64CD\u4F5C\u4E00")},{content:"\u64CD\u4F5C\u4E8C",value:2,onClick:()=>console.log("\u64CD\u4F5C\u4E8C")},{content:"\u64CD\u4F5C\u4E09",value:3,onClick:()=>console.log("\u64CD\u4F5C\u4E09")},{content:this.getContent(),value:4,onClick:()=>console.log("\u64CD\u4F5C\u56DB")}]}render(){return u("t-dropdown",{options:this.options},u("t-button",null,"hover\u6211\u8BD5\u8BD5"))}};h=q([C("dropdown-click")],h);var G=Object.defineProperty,V=Object.getOwnPropertyDescriptor,Z=(n,t,r,o)=>{for(var e=o>1?void 0:o?V(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&G(t,r,e),e};let B=class extends i{constructor(){super(...arguments),this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3},{content:this.getContent(),value:4}]}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler,trigger:"click",popupProps:{overlayInnerStyle:{padding:4}}},u("t-button",null,"\u70B9\u51FB\u6211\u8BD5\u8BD5"))}};B=Z([C("dropdown-custom")],B);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(n,t,r,o)=>{for(var e=o>1?void 0:o?K(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&J(t,r,e),e};let v=class extends i{constructor(){super(...arguments),this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3,disabled:!0},{content:this.getContent(),value:4,disabled:!0}]}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler},u("t-button",{suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};v=Q([C("dropdown-disable")],v);var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(n,t,r,o)=>{for(var e=o>1?void 0:o?X(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&U(t,r,e),e};let m=class extends i{constructor(){super(...arguments),this.dropdownCss=`ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`,this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u9009\u9879\u4E00",value:1,children:[{content:"\u9009\u9879\u4E5D",value:9}]},{content:"\u9009\u9879\u4E8C",value:2,children:[{content:"\u9009\u9879\u4E94",value:5},{content:"\u9009\u9879\u516D",value:6,children:[{content:"\u9009\u9879\u4E03",value:7},{content:"\u9009\u9879\u516B",value:8}]}]},{content:"\u9009\u9879\u4E09",value:3,children:[{content:"\u9009\u9879\u5341",value:10}]}]}render(){return u("t-dropdown",{css:this.dropdownCss,options:this.options,onClick:this.clickHandler,direction:"left",popupProps:{placement:"bottom-right"}},u("t-button",{variant:"text",suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};m=Y([C("dropdown-left")],m);var k=Object.defineProperty,uu=Object.getOwnPropertyDescriptor,eu=(n,t,r,o)=>{for(var e=o>1?void 0:o?uu(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&k(t,r,e),e};let w=class extends i{constructor(){super(...arguments),this.dropdownCss=`ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`,this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u9009\u9879\u4E00",value:1,prefixIcon:u("t-icon-discount",{size:"16"})},{content:"\u9009\u9879\u4E8C",value:2,prefixIcon:u("t-icon-discount",{size:"16"})},{content:"\u9009\u9879\u4E09",value:3,prefixIcon:u("t-icon-discount",{size:"16"})},{content:"\u9009\u9879\u56DB",value:4,prefixIcon:u("t-icon-discount",{size:"16"}),children:[{content:"\u9009\u9879\u4E94",value:5,prefixIcon:u("t-icon-discount",{size:"16"})},{content:"\u9009\u9879\u516D",value:6,prefixIcon:u("t-icon-discount",{size:"16"})}]}]}render(){return u("t-dropdown",{css:this.dropdownCss,options:this.options,onClick:this.clickHandler},u("t-button",{suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};w=eu([C("dropdown-icon")],w);var tu=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,ou=(n,t,r,o)=>{for(var e=o>1?void 0:o?nu(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&tu(t,r,e),e};let f=class extends i{constructor(){super(...arguments),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=Array.from({length:20}).map((n,t)=>({content:`\u9009\u9879${t+1}`,value:t+1}))}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler,maxHeight:400,minColumnWidth:"90px"},u("t-button",null,"hover\u6211\u8BD5\u8BD5"))}};f=ou([C("dropdown-long")],f);var ru=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,su=(n,t,r,o)=>{for(var e=o>1?void 0:o?lu(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&ru(t,r,e),e};let A=class extends i{constructor(){super(...arguments),this.dropdownCss=`ul, dl, ol {
    margin: 0;
    padding: 0;
    padding-left: 1.2em;
    line-height: 22px;
}`,this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u64CD\u4F5C\u4E00",value:1,children:[{content:"\u64CD\u4F5C\u4E5D",value:9}]},{content:"\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C",value:2,children:[{content:"\u64CD\u4F5C\u4E94",value:5},{content:"\u64CD\u4F5C\u516D",value:6}]},{content:"\u64CD\u4F5C\u4E09",value:3,children:[{content:"\u64CD\u4F5C\u5341",value:10}]},{content:"\u64CD\u4F5C\u56DB",value:4,children:[{content:"\u64CD\u4F5C\u5341\u4E00",value:11}]},{content:"\u64CD\u4F5C\u4E94",value:5,children:[{content:"\u64CD\u4F5C\u5341\u4E8C",value:12}]},{content:"\u64CD\u4F5C\u516D",value:6,children:[{content:"\u64CD\u4F5C\u5341\u4E09",value:13}]},{content:"\u64CD\u4F5C\u4E03",value:7},{content:"\u64CD\u4F5C\u516B",value:8},{content:"\u64CD\u4F5C\u5341\u516B",value:18,children:[{content:"\u64CD\u4F5C\u5341\u56DB",value:14},{content:"\u64CD\u4F5C\u5341\u4E94",value:15},{content:"\u64CD\u4F5C\u5341\u516D",value:16,children:[{content:"\u4E09\u7EA7\u64CD\u4F5C\u4E00",value:20},{content:"\u4E09\u7EA7\u64CD\u4F5C\u4E8C",value:21}]},{content:"\u64CD\u4F5C\u5341\u4E03",value:17}]}]}render(){return u("t-dropdown",{css:this.dropdownCss,options:this.options,onClick:this.clickHandler,maxHeight:200},u("t-button",{theme:"default",variant:"outline",shape:"square"},u("t-icon-ellipsis",{size:"16"})))}};A=su([C("dropdown-multiple")],A);var iu=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,cu=(n,t,r,o)=>{for(var e=o>1?void 0:o?Cu(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&iu(t,r,e),e};let g=class extends i{constructor(){super(...arguments),this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.getContent=()=>u("div",null,"\u64CD\u4F5C\u56DB"),this.options=[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3,divider:!0},{content:this.getContent(),value:4}]}render(){return u("t-dropdown",{options:this.options,onClick:this.clickHandler,trigger:"click"},u("t-button",{variant:"text",suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};g=cu([C("dropdown-split")],g);var du=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,au=(n,t,r,o)=>{for(var e=o>1?void 0:o?pu(t,r):t,l=n.length-1,s;l>=0;l--)(s=n[l])&&(e=(o?s(t,r,e):s(e))||e);return o&&e&&du(t,r,e),e};let b=class extends i{constructor(){super(...arguments),this.dropdownCss=`ul, dl, ol {
        margin: 0;
        padding: 0;
        padding-left: 1.2em;
        line-height: 22px;
    }`,this.clickHandler=n=>{console.log(`\u9009\u4E2D\u3010${n.value}\u3011`)},this.options=[{content:"\u9009\u9879\u4E00",value:1,children:[{content:"\u9009\u9879\u4E5D",value:9}]},{content:"\u9009\u9879\u4E8C",value:3,children:[{content:"\u9009\u9879\u5341",value:10}]},{content:"\u5371\u9669\u64CD\u4F5C",value:4,theme:"error",children:[{content:"\u5371\u9669\u64CD\u4F5C\u4E00",value:11,theme:"error",children:[{content:"\u5371\u9669\u64CD\u4F5C\u9879",value:13,theme:"error"},{content:"\u64CD\u4F5C\u9879",value:12}]}]}]}render(){return u("t-dropdown",{css:this.dropdownCss,options:this.options,onClick:this.clickHandler,trigger:"click"},u("t-button",{variant:"text",suffix:u("t-icon-chevron-down",{size:"16"})},"\u66F4\u591A"))}};b=au([C("dropdown-theme")],b);var d;const Fu=S(`
## API
### Dropdown Props

\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20
-- | -- | -- | -- | --
className | String | - | \u7C7B\u540D | N
style | Object | - | \u6837\u5F0F\uFF0CTS \u7C7B\u578B\uFF1A\`React.CSSProperties\` | N
direction | String | right | \u591A\u5C42\u7EA7\u64CD\u4F5C\u65F6\uFF0C\u5B50\u5C42\u7EA7\u5C55\u5F00\u65B9\u5411\u3002\u53EF\u9009\u9879\uFF1Aleft/right | N
disabled | Boolean | false | \u662F\u5426\u7981\u7528\u7EC4\u4EF6 | N
hideAfterItemClick | Boolean | true | \u70B9\u51FB\u9009\u9879\u540E\u662F\u5426\u81EA\u52A8\u9690\u85CF\u5F39\u7A97 | N
maxColumnWidth | String / Number | 100 | \u9009\u9879\u6700\u5927\u5BBD\u5EA6\uFF0C\u5185\u5BB9\u8D85\u51FA\u65F6\uFF0C\u663E\u793A\u4E3A\u7701\u7565\u53F7\u3002\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u503C\u5C31\u662F\u6700\u5927\u5BBD\u5EA6\uFF1B\u503C\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\uFF1Apx | N
maxHeight | Number | 300 | \u5F39\u7A97\u6700\u5927\u9AD8\u5EA6\uFF0C\u5355\u4F4D\uFF1Apx \u3002\u7EDF\u4E00\u63A7\u5236\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6 | N
minColumnWidth | String / Number | 10 | \u9009\u9879\u6700\u5C0F\u5BBD\u5EA6\u3002\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u503C\u5C31\u662F\u6700\u5C0F\u5BBD\u5EA6\uFF1B\u503C\u4E3A\u6570\u5B57\u65F6\uFF0C\u5355\u4F4D\uFF1Apx | N
options | Array | [] | \u4E0B\u62C9\u64CD\u4F5C\u9879\u3002TS \u7C7B\u578B\uFF1A\`Array<DropdownOption>\` \`type DropdownOption = { children?: Array<TdDropdownItemProps> } & TdDropdownItemProps & Record<string, any>\`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
placement | String | bottom-left | \u5F39\u7A97\u5B9A\u4F4D\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u540C Popup \u7EC4\u4EF6\u3002\u53EF\u9009\u9879\uFF1Atop/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
popupProps | Object | - | \u900F\u4F20  Popup \u7EC4\u4EF6\u5C5E\u6027\uFF0C\u65B9\u4FBF\u66F4\u52A0\u81EA\u7531\u5730\u63A7\u5236\u3002\u6BD4\u5982\u4F7F\u7528 popupProps.overlayStyle \u8BBE\u7F6E\u6D6E\u5C42\u6837\u5F0F\u3002TS \u7C7B\u578B\uFF1A\`PopupProps\`\uFF0C[Popup API Documents](./popup?tab=api)\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
trigger | String | hover | \u89E6\u53D1\u4E0B\u62C9\u663E\u793A\u7684\u65B9\u5F0F\u3002\u53EF\u9009\u9879\uFF1Ahover/click/focus/context-menu | N
onClick | Function |  | TS \u7C7B\u578B\uFF1A\`(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void\`<br/>\u4E0B\u62C9\u64CD\u4F5C\u9879\u70B9\u51FB\u65F6\u89E6\u53D1 | N

### DropdownItem Props

\u540D\u79F0 | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u8BF4\u660E | \u5FC5\u4F20
-- | -- | -- | -- | --
className | String | - | \u7C7B\u540D | N
style | Object | - | \u6837\u5F0F\uFF0CTS \u7C7B\u578B\uFF1A\`React.CSSProperties\` | N
active | Boolean | false | \u662F\u5426\u9AD8\u4EAE\u5F53\u524D\u64CD\u4F5C\u9879 | N
content | TNode | '' | \u4E0B\u62C9\u64CD\u4F5C\u9879\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A\`string | TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
disabled | Boolean | false | \u662F\u5426\u7981\u7528\u64CD\u4F5C\u9879 | N
divider | Boolean | false | \u662F\u5426\u663E\u793A\u64CD\u4F5C\u9879\u4E4B\u95F4\u7684\u5206\u9694\u7EBF\uFF08\u5206\u9694\u7EBF\u9ED8\u8BA4\u5728\u4E0B\u65B9\uFF09 | N
prefixIcon | TElement | - | \u7EC4\u4EF6\u524D\u7F6E\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A\`TNode\`\u3002[\u901A\u7528\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts) | N
theme | String | default | \u4E0B\u62C9\u83DC\u5355\u9009\u9879\u4E3B\u9898\u3002\u53EF\u9009\u9879\uFF1Adefault/success/warning/error\u3002TS \u7C7B\u578B\uFF1A\`DropdownItemTheme\` \`type DropdownItemTheme = 'default' | 'success' | 'warning' | 'error'\`\u3002[\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/dropdown/type.ts) | N
value | String / Number / Object | - | \u4E0B\u62C9\u64CD\u4F5C\u9879\u552F\u4E00\u6807\u8BC6\u3002TS \u7C7B\u578B\uFF1A\`string | number | { [key: string]: any }\` | N
onClick | Function |  | TS \u7C7B\u578B\uFF1A\`(dropdownItem: DropdownOption, context: { e: MouseEvent }) => void\`<br/>\u70B9\u51FB\u65F6\u89E6\u53D1 | N
`);_("page-dropdown",(d=class extends i{constructor(){super(...arguments),this.tab=["demo","api","design"],this.tdDocHeader=a(),this.tdDocTabs=a(),this.updateTab=n=>{this.updateProps({tab:n})}}isShow(n){return this.props.tab===n?{display:"block"}:{display:"none"}}installed(){const n=this.tdDocTabs.current;n.onchange=({detail:t})=>{this.updateTab(t)}}render(){return u(u.f,null,u("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),u("div",{style:this.isShow("demo"),name:"DEMO"},u("h3",{id:"\u6587\u5B57\u4E0B\u62C9\u83DC\u5355"},"\u6587\u5B57\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u6587\u5B57\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u6587\u5B57\u6309\u94AE\u89E6\u53D1\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u7A7A\u95F4\u6781\u5EA6\u53D7\u9650\u7684\u6536\u7EB3\u64CD\u4F5C\u573A\u666F\uFF0C\u4E00\u822C\u7528\u4E8E\u8868\u683C\u5185\u8BE6\u60C5\u64CD\u4F5C\u7684\u6536\u7EB3\u3002"),u("demo-wrapper",null,u("dropdown-base",null)),u("h3",{id:"\u6309\u94AE\u4E0B\u62C9\u83DC\u5355"},"\u6309\u94AE\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u6309\u94AE\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u666E\u901A\u6309\u94AE\u89E6\u53D1\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u64CD\u4F5C\u6536\u7EB3\u573A\u666F\u3002"),u("demo-wrapper",null,u("dropdown-button",null)),u("h3",{id:"\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355"},"\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u5E26\u5206\u5272\u7EBF\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u901A\u8FC7\u5206\u5272\u7EBF\u533A\u5206\u4E0D\u540C\u7684\u4E0B\u62C9\u83DC\u5355\u64CD\u4F5C\u3002\u5E38\u7528\u4E8E\u9700\u8981\u533A\u5206\u4E0D\u540C\u64CD\u4F5C\u7ED3\u679C\u7684\u573A\u666F\u3002"),u("demo-wrapper",null,u("dropdown-split",null)),u("h3",{id:"\u591A\u5C42\u4E0B\u62C9\u83DC\u5355"},"\u591A\u5C42\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u591A\u5C42\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u5E26\u903B\u8F91\u5C42\u7EA7\u5173\u7CFB\u7684\u64CD\u4F5C\u4E0B\u62C9\u83DC\u5355\u3002\u5E38\u7528\u4E8E\u9700\u8981\u6536\u7EB3\u591A\u5C42\u903B\u8F91\u7684\u64CD\u4F5C\u573A\u666F\u3002"),u("demo-wrapper",null,u("dropdown-multiple",null)),u("h3",{id:"\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355"},"\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u5E26\u7981\u7528\u64CD\u4F5C\u9879\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u7684\u64CD\u4F5C\u9879\u53EF\u4EE5\u8BBE\u7F6E\u7981\u7528\u3002\u5E38\u7528\u4E8E\u7981\u7528\u90E8\u5206\u64CD\u4F5C\u9879\u7684\u573A\u666F\u3002"),u("demo-wrapper",null,u("dropdown-disable",null)),u("h3",{id:"\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355"},"\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u4F9D\u8D56 ",u("td-code",{text:"Popup"})," \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u900F\u4F20\u81EA\u5B9A\u4E49 ",u("td-code",{text:"Popup"})," ","\u7EC4\u4EF6\u7684\u5C5E\u6027\u3002"),u("demo-wrapper",null,u("dropdown-custom",null)),u("h3",{id:"\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355"},"\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u5B9A\u4E49\u6700\u5927\u9AD8\u5EA6\u3002"),u("demo-wrapper",null,u("dropdown-long",null)),u("h3",{id:"\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355"},"\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u4E3B\u9898\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u7684\u83DC\u5355\u9879\u90FD\u652F\u6301\u81EA\u5B9A\u4E49\u4E3B\u9898\uFF0C\u6839\u636E\u5177\u4F53\u573A\u666F\u4F7F\u7528\u3002"),u("demo-wrapper",null,u("dropdown-theme",null)),u("h3",{id:"\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355"},"\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u5411\u5DE6\u5C55\u5F00\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u5411\u5DE6\u4FA7\u5C55\u5F00\u3002"),u("demo-wrapper",null,u("dropdown-left",null)),u("h3",{id:"\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355"},"\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u5E26\u56FE\u6807\u7684\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u652F\u6301\u914D\u7F6E\u83DC\u5355\u9879\u7684\u524D\u7F6E\u56FE\u6807\u3002"),u("demo-wrapper",null,u("dropdown-icon",null)),u("h3",{id:"\u901A\u8FC7\u4F20\u5165children\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355"},"\u901A\u8FC7\u4F20\u5165Children\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355 ",u("a",{class:"header-anchor",href:"#\u901A\u8FC7\u4F20\u5165children\u65B9\u5F0F\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355"})),u("p",null,"\u4E0B\u62C9\u83DC\u5355\u64CD\u4F5C\u9879\u652F\u6301\u901A\u8FC7\u4F20\u5165Children\u7684\u65B9\u5F0F\u4F20\u9012\u64CD\u4F5C\u9879\u3002"),u("demo-wrapper",null,u("dropdown-child",null))),u("div",{style:this.isShow("api"),name:"API"},u("div",{style:"margin-bottom:76px",unsafeHTML:{html:Fu}})),u("div",{style:this.isShow("design"),name:"DESIGN"}))}},d.defaultProps={tab:"demo"},d.propTypes={tab:String},d));