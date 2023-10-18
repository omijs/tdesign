import{W as _,c as x,p as g,V as m,$ as y}from"./index.7ac70225.js";import{T as c}from"./clsx.f76af8a1.js";import"./lodash.0f80b01b.js";import"./index.184f6101.js";import{n as k}from"./noop.ee300efa.js";import"./close.6c42b509.js";import{t as z}from"./marked.esm.01ee1597.js";var C=`.t-tag{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-flex;align-items:center;flex-direction:row;padding:0px var(--td-comp-paddingLR-s);height:var(--td-comp-size-xs);font:var(--td-font-body-small);color:var(--td-text-color-anti);border-radius:var(--td-radius-default);border:1px solid transparent;white-space:nowrap}.t-tag .t-icon{margin-right:var(--td-comp-margin-xs);width:calc(var(--td-font-size-body-medium) + 2px);height:calc(var(--td-font-size-body-medium) + 2px);flex-shrink:0}.t-tag .t-tag__icon-close{margin-right:0;margin-left:var(--td-comp-margin-s);font:var(--td-font-body-medium);cursor:pointer;transition:color .2s cubic-bezier(.38,0,.24,1)}.t-tag--default{color:var(--td-text-color-primary);background-color:var(--td-bg-color-component)}.t-tag--default .t-tag__icon-close{color:var(--td-text-color-placeholder)}.t-tag--default .t-tag__icon-close:hover{color:var(--td-text-color-primary)}.t-tag--default.t-tag--checked{color:var(--td-text-color-anti);background-color:var(--td-brand-color)}.t-tag--default.t-tag--checked:hover{background-color:var(--td-brand-color-hover)}.t-tag--default:active{cursor:default}.t-tag--default.t-tag--check{transition:background-color .2s cubic-bezier(.38,0,.24,1);cursor:pointer}.t-tag--default.t-tag--check:hover:not(.t-tag--checked):not(.t-tag--disabled){background-color:var(--td-bg-color-component-hover)}.t-tag--default.t-tag--disabled{color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled);cursor:not-allowed}.t-tag--default.t-tag--disabled:hover{color:var(--td-text-color-disabled);background-color:var(--td-bg-color-component-disabled)}.t-tag--default.t-tag--disabled .t-icon:hover{cursor:pointer}.t-tag--default.t-tag--outline{border-color:var(--td-component-border)}.t-tag--default.t-tag--light{background-color:var(--td-bg-color-secondarycontainer)}.t-tag--default.t-tag--light-outline{border-color:var(--td-component-border);background-color:var(--td-bg-color-secondarycontainer)}.t-tag--primary{background-color:var(--td-brand-color)}.t-tag--primary.t-tag--outline{border-color:var(--td-brand-color)}.t-tag--primary.t-tag--light{background-color:var(--td-brand-color-light)}.t-tag--primary.t-tag--light-outline{border-color:var(--td-brand-color);background-color:var(--td-brand-color-light)}.t-tag--primary.t-tag--light,.t-tag--primary.t-tag--outline,.t-tag--primary.t-tag--light-outline{color:var(--td-brand-color)}.t-tag--primary.t-tag--light .t-tag__icon-close:hover,.t-tag--primary.t-tag--outline .t-tag__icon-close:hover,.t-tag--primary.t-tag--light-outline .t-tag__icon-close:hover{color:var(--td-brand-color-hover)}.t-tag--success{background-color:var(--td-success-color)}.t-tag--success.t-tag--outline{border-color:var(--td-success-color)}.t-tag--success.t-tag--light{background-color:var(--td-success-color-light)}.t-tag--success.t-tag--light-outline{border-color:var(--td-success-color);background-color:var(--td-success-color-light)}.t-tag--success.t-tag--light,.t-tag--success.t-tag--outline,.t-tag--success.t-tag--light-outline{color:var(--td-success-color)}.t-tag--success.t-tag--light .t-tag__icon-close:hover,.t-tag--success.t-tag--outline .t-tag__icon-close:hover,.t-tag--success.t-tag--light-outline .t-tag__icon-close:hover{color:var(--td-success-color-hover)}.t-tag--warning{background-color:var(--td-warning-color)}.t-tag--warning.t-tag--outline{border-color:var(--td-warning-color)}.t-tag--warning.t-tag--light{background-color:var(--td-warning-color-light)}.t-tag--warning.t-tag--light-outline{border-color:var(--td-warning-color);background-color:var(--td-warning-color-light)}.t-tag--warning.t-tag--light,.t-tag--warning.t-tag--outline,.t-tag--warning.t-tag--light-outline{color:var(--td-warning-color)}.t-tag--warning.t-tag--light .t-tag__icon-close:hover,.t-tag--warning.t-tag--outline .t-tag__icon-close:hover,.t-tag--warning.t-tag--light-outline .t-tag__icon-close:hover{color:var(--td-warning-color-hover)}.t-tag--danger{background-color:var(--td-error-color)}.t-tag--danger.t-tag--outline{border-color:var(--td-error-color)}.t-tag--danger.t-tag--light{background-color:var(--td-error-color-light)}.t-tag--danger.t-tag--light-outline{border-color:var(--td-error-color);background-color:var(--td-error-color-light)}.t-tag--danger .t-tag__icon-close{fill:var(--td-error-color)}.t-tag--danger .t-tag__icon-close:hover{fill:var(--td-error-color-hover)}.t-tag--danger.t-tag--light,.t-tag--danger.t-tag--outline,.t-tag--danger.t-tag--light-outline{color:var(--td-error-color)}.t-tag--danger.t-tag--light .t-tag__icon-close:hover,.t-tag--danger.t-tag--outline .t-tag__icon-close:hover,.t-tag--danger.t-tag--light-outline .t-tag__icon-close:hover{color:var(--td-error-color-hover)}.t-tag--dark.t-tag:not(.t-tag--default) .t-tag__icon-close{color:var(--td-font-white-2)}.t-tag--dark.t-tag:not(.t-tag--default) .t-tag__icon-close:hover{color:var(--td-font-white-1)}.t-tag.t-tag--outline{background:transparent}.t-tag.t-size-s{padding:0px var(--td-comp-paddingLR-xs);height:var(--td-comp-size-xxs);font:var(--td-font-body-small)}.t-tag.t-size-s .t-icon{font-size:var(--td-font-body-small)}.t-tag.t-size-l{padding:0px var(--td-comp-paddingLR-m);height:var(--td-comp-size-m);font:var(--td-font-body-medium)}.t-tag.t-size-l .t-icon{font:var(--td-font-body-medium)}.t-tag.t-tag--round{border-radius:var(--td-radius-extraLarge)}.t-tag.t-tag--mark{border-radius:0 var(--td-radius-extraLarge) var(--td-radius-extraLarge) 0}.t-tag.t-tag--ellipsis .t-tag--text{display:inline-block;white-space:nowrap;word-wrap:normal;overflow:hidden;text-overflow:ellipsis}a .t-tag{cursor:pointer;transition:all .2s linear}a .t-tag:hover{color:var(--td-brand-color);background-color:var(--td-bg-color-component-hover)}a .t-tag:active{color:var(--td-brand-color-active);background-color:var(--td-bg-color-component-active)}
`,b=C+z,P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,T=(o,l,e,r)=>{for(var t=r>1?void 0:r?S(l,e):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(r?i(l,e,t):i(t))||t);return r&&t&&P(l,e,t),t};const s=o=>c("tag")+o;let u=class extends _{constructor(){super(...arguments),this.span=x(),this.deleteIcon=g("t-icon-close",{onClick:o=>{this.props.disabled||this.fire("close",{event:o})},class:m(s("__icon-close"))})}install(){}cls(){return m(c("tag"),s(`--${this.props.theme}`),s(`--${this.props.variant}`),{[s(`--${this.props.shape}`)]:this.props.shape!=="square",[s("--ellipsis")]:!!this.props.maxWidth,[s("--disabled")]:this.props.disabled,[c("size-s")]:this.props.size=="small",[c("size-l")]:this.props.size=="large"})}getTitle(o){if(o&&typeof o=="object")return{title:o[0]}}render(o,l){const{disabled:e,maxWidth:r,icon:t,children:a,content:i,closable:d,onClick:f}=o;return t&&(t.attributes.style={},t.attributes.style.marginRight=4),g("span",{class:this.cls(),part:"my-part",ref:this.span,onClick:n=>{e||f({e:n})},style:r?{maxWidth:typeof r=="number"?`${r}px`:r,...b}:b},g(g.f,null,t,g("span",{class:r?s("--text"):void 0,...this.getTitle(a)},a!=null?a:i),d&&!e&&this.deleteIcon))}};u.css=b;u.defaultProps={closable:!1,disabled:!1,icon:void 0,shape:"square",size:"medium",theme:"default",variant:"dark",onClick:k,onClose:k};u.propTypes={closable:Boolean,disabled:Boolean,children:String,content:String,icon:String,maxWidth:String,shape:String,size:String,theme:String,variant:String,onClick:Function,onClose:Function};u=T([y("t-tag")],u);var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,L=(o,l,e,r)=>{for(var t=r>1?void 0:r?O(l,e):l,a=o.length-1,i;a>=0;a--)(i=o[a])&&(t=(r?i(l,e,t):i(t))||t);return r&&t&&$(l,e,t),t};const h=o=>c("tag")+o;let p=class extends _{constructor(){super(...arguments),this.iconStyle=`
  .t-icon{
    margin-right: var(--td-comp-margin-xs);
    width: calc(var(--td-font-size-body-medium) + 2px);
    height: calc(var(--td-font-size-body-medium) + 2px);
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  `,this.span=x()}install(){this.checked=this.props.checked,this.defaultChecked=this.props.defaultChecked}cls(){return m(c("tag"),h("--default"),h("--check"),h(`--${this.props.size}`),{[h("--checked")]:this.defaultChecked||this.checked,[h("--disabled")]:this.props.disabled,[c("size-s")]:this.props.size=="small",[c("size-l")]:this.props.size=="large"})}render(o,l){const{content:e,onClick:r=k,disabled:t,children:a,size:i,onChange:d,...f}=o;let n=this;this.checked=this.defaultChecked?this.defaultChecked:this.checked;function w(v){console.log(typeof n.defaultChecked),n.checked=!v,typeof n.defaultChecked!="undefined"?(n.defaultChecked=!1,n.update()):d==null||d(!v)}return g("span",{ref:this.span,class:this.cls(),...f,onClick:v=>{t||(w(this.checked),r({e:v}))}},a||e)}};p.css=b;p.defaultProps={disabled:!1,size:"medium"};p.propTypes={checked:Boolean,defaultChecked:Boolean,disabled:Boolean,children:String,content:String,size:String,onClick:Function,onChange:Function};p=L([y("t-check-tag")],p);