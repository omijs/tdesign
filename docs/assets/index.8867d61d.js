import{W as b,p as t,$ as m,V as _}from"./index.7ac70225.js";import{i as v}from"./input-group.0004e544.js";import{T as c}from"./clsx.f76af8a1.js";import{l as u}from"./lodash.0f80b01b.js";import"./index.184f6101.js";import"./marked.esm.01ee1597.js";var g=`.t-slider__input-container{display:flex;align-items:center;margin-left:var(--td-comp-margin-xxl)}.t-slider__input-container.is-vertical{padding-top:var(--td-comp-paddingTB-l);margin-left:0}.t-slider__input-container .t-slider__center-line{width:var(--td-size-4);height:1px;background:rgba(0,0,0,.9);margin:0 var(--td-comp-margin-s)}.t-slider{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;height:calc(var(--td-comp-paddingTB-xs) * 2 + var(--td-size-2));width:100%;position:relative;padding:var(--td-comp-paddingTB-xs) 0}.t-slider__container{width:100%;display:flex;justify-content:center;align-items:center}.t-slider__container.is-vertical{height:100%;flex-direction:column}.t-slider__rail{position:absolute;width:100%;height:var(--td-size-2);background-color:var(--td-bg-color-secondarycomponent);transition:.2s linear;border-radius:var(--td-radius-round)}.t-slider__rail:hover{background-color:var(--td-bg-color-secondarycomponent-hover)}.t-slider__track{position:absolute;height:var(--td-size-2);background-color:var(--td-brand-color);right:auto;border-radius:var(--td-radius-round)}.t-slider__step{position:absolute;width:100%;height:var(--td-size-2);cursor:pointer}.t-slider__button{width:var(--td-comp-size-xxxs);height:var(--td-comp-size-xxxs);border:2px solid var(--td-brand-color);background-color:#fff;border-radius:var(--td-radius-circle);transition:.2s;user-select:none;box-sizing:border-box;box-shadow:var(--td-shadow-1)}.t-slider__button--dragging{box-shadow:0 0 0 2px var(--td-brand-color-focus)}.t-slider__button:hover{background-color:var(--td-gray-color-1)}.t-slider__button-wrapper{position:absolute;z-index:2;top:50%;transform:translate(-50%,-50%);background-color:transparent;text-align:center;user-select:none;line-height:normal;outline:none;cursor:pointer;display:flex;align-items:center}.t-slider__stop{position:absolute;width:1px;height:var(--td-size-2);background-color:var(--td-bg-color-secondarycomponent);top:4px}.t-slider__mark{position:absolute;top:2px;left:0;width:100%}.t-slider__mark-text{position:absolute;display:inline-block;font:var(--td-font-body-small);color:var(--td-text-color-primary);top:calc(var(--td-size-2) + var(--td-comp-paddingTB-xs) + 2px);transform:translate(-50%);cursor:pointer}.t-slider__mark-text:first-child{transform:translate(0)}.t-slider__mark-text:last-child{transform:translate(-100%)}.t-slider--vertical{height:100%;padding:0;display:flex;justify-content:center;position:relative}.t-slider--vertical .t-slider__rail{width:var(--td-size-2);height:100%}.t-slider--vertical .t-slider__track{width:var(--td-size-2);top:auto}.t-slider--vertical .t-slider__step{width:var(--td-size-2);height:100%}.t-slider--vertical .t-slider__handle{margin-top:-6px;margin-left:-5px;top:auto;transform:translateY(50%)}.t-slider--vertical .t-slider__mark{top:0;left:12px;width:18px;height:100%}.t-slider--vertical .t-slider__stop{width:var(--td-size-2);height:1px;left:4px;background-color:var(--td-bg-color-secondarycomponent)}.t-slider--vertical .t-slider__mark-text{transform:translateY(-50%);margin-top:0;margin-left:var(--td-comp-margin-xxs)}.t-slider--vertical .t-slider__button-wrapper{top:auto;position:absolute;z-index:2;left:50%;transform:translate(-50%,50%);background-color:transparent;text-align:center;user-select:none;line-height:normal;outline:none;cursor:pointer;display:flex;align-items:center}.t-is-disabled{cursor:not-allowed}.t-is-disabled .t-slider__track{background-color:var(--td-brand-color-disabled)}.t-is-disabled .t-slider__rail{background-color:var(--td-bg-color-component-disabled)}.t-is-disabled .t-slider__handle{border:2px solid var(--td-brand-color-disabled)}.t-is-disabled .t-slider__button{border-color:var(--td-brand-color-disabled);outline:none}.t-is-disabled .t-slider__mark-text{color:var(--td-text-color-disabled);cursor:not-allowed}.t-is-disabled .t-slider__button-wrapper{cursor:not-allowed}
`,h=`@keyframes t-fade-in{0%{opacity:0}to{opacity:1}}@keyframes t-fade-out{0%{opacity:1}to{opacity:0}}@keyframes t-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.t-icon-loading{animation:t-spin 1s linear infinite}@keyframes t-zoom-out{0%{transform:scale(.2)}to{transform:scale(1)}}.t-input-number{font:var(--td-font-body-medium);color:var(--td-text-color-primary);margin:0;padding:0;list-style:none;display:inline-block;position:relative;box-sizing:border-box;padding:0 var(--td-comp-size-m);user-select:none;width:144px}.t-input-number:not(.t-input-number--column)>.t-input-number__decrease+.t-input__wrap{margin-left:var(--td-comp-margin-xs)}.t-input-number input::-webkit-outer-spin-button,.t-input-number input::-webkit-inner-spin-button{appearance:none}.t-input-number input[type=number]{appearance:textfield}.t-input-number>.t-input__tips{position:absolute;left:0}.t-input-number input+.t-input__suffix{margin-left:var(--td-comp-paddingLR-s)}.t-input-number .t-input__prefix{margin-right:var(--td-comp-paddingLR-s)}.t-input-number .t-input{color:var(--td-text-color-primary)}.t-input-number.t-input-number--auto-width{width:auto}.t-input-number.t-input-number--auto-width.t-is-controls-right{min-width:auto;width:auto}.t-input-number.t-input-number--auto-width .t-input__inner{min-width:42px}.t-input-number .t-input-number__decrease,.t-input-number .t-input-number__increase{width:var(--td-comp-size-m);height:var(--td-comp-size-m);position:absolute;top:0;border:1px solid var(--td-border-level-2-color);box-sizing:border-box;border-radius:var(--td-radius-default);background-color:transparent;display:flex;justify-content:center;align-items:center;z-index:1;cursor:pointer;transition:all cubic-bezier(.38,0,.24,1) .2s}.t-input-number .t-input-number__decrease:hover,.t-input-number .t-input-number__increase:hover{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-input-number .t-input-number__decrease:hover .t-icon,.t-input-number .t-input-number__increase:hover .t-icon{color:var(--td-brand-color)}.t-input-number .t-input-number__decrease:active,.t-input-number .t-input-number__increase:active{color:var(--td-brand-color);background-color:var(--td-bg-color-container-hover)}.t-input-number .t-input-number__decrease .t-icon,.t-input-number .t-input-number__increase .t-icon{position:relative;z-index:1;font-size:var(--td-font-size-body-large);color:var(--td-text-color-secondary)}.t-input-number .t-input-number__decrease.t-is-disabled,.t-input-number .t-input-number__increase.t-is-disabled{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled .t-icon,.t-input-number .t-input-number__increase.t-is-disabled .t-icon{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled:hover,.t-input-number .t-input-number__increase.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-input-number .t-input-number__decrease.t-is-disabled:hover .t-icon,.t-input-number .t-input-number__increase.t-is-disabled:hover .t-icon{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease.t-is-disabled::placeholder,.t-input-number .t-input-number__increase.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number .t-input-number__decrease{left:0}.t-input-number .t-input-number__increase{right:-8px}.t-input-number.t-is-disabled .t-input{cursor:no-drop;background-color:var(--td-bg-color-component-disabled);color:var(--td-text-color-disabled)}.t-input-number.t-is-disabled .t-input:hover,.t-input-number.t-is-disabled .t-input:focus,.t-input-number.t-is-disabled .t-input:active{border-color:var(--td-border-level-2-color)}.t-input-number.t-is-disabled .t-input-number__decrease,.t-input-number.t-is-disabled .t-input-number__increase{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number.t-is-disabled .t-input-number__decrease .t-icon,.t-input-number.t-is-disabled .t-input-number__increase .t-icon{color:var(--td-text-color-secondary)}.t-input-number.t-size-s{width:120px;padding:0 var(--td-comp-size-xs)}.t-input-number.t-size-s .t-input{font-size:var(--td-font-size-body-small);height:var(--td-comp-size-xs);line-height:var(--td-comp-size-xs)}.t-input-number.t-size-s .t-input-number__decrease,.t-input-number.t-size-s .t-input-number__increase{font-size:var(--td-font-size-body-medium);width:var(--td-comp-size-xs);height:var(--td-comp-size-xs)}.t-input-number.t-size-l{width:168px;padding:0 var(--td-comp-size-xl)}.t-input-number.t-size-l .t-input{height:var(--td-comp-size-xl);line-height:var(--td-comp-size-xl)}.t-input-number.t-size-l .t-input-number__decrease,.t-input-number.t-size-l .t-input-number__increase{font-size:18px;width:var(--td-comp-size-xl);height:var(--td-comp-size-xl)}.t-input-number.t-size-l.t-is-controls-right .t-input{height:var(--td-comp-size-xl);line-height:var(--td-comp-size-xl);padding-right:calc(var(--td-comp-size-xl) + var(--td-comp-paddingLR-s))}.t-input-number.t-size-l.t-is-controls-right .t-input-number__decrease,.t-input-number.t-size-l.t-is-controls-right .t-input-number__increase{width:var(--td-comp-size-xl);font-size:var(--td-font-size-body-large)}.t-input-number.t-size-l .t-input--prefix{font:var(--td-font-body-large);padding:0 var(--td-comp-paddingLR-m)}.t-input-number.t-input-number--normal{padding:0;border-radius:var(--td-radius-default)}.t-input-number.t-input-number--normal.t-is-disabled{cursor:no-drop;color:var(--td-text-color-disabled)}.t-input-number.t-input-number--normal.t-is-disabled:hover .t-input{border-color:var(--td-border-level-2-color)}.t-input-number.t-input-number--normal.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number.t-input-number--normal.t-is-disabled .t-input:focus{box-shadow:none}.t-input-number.t-is-controls-right{width:96px;padding:0}.t-input-number.t-is-controls-right:hover .t-input-number__decrease,.t-input-number.t-is-controls-right:hover .t-input-number__increase{opacity:1;visibility:visible}.t-input-number.t-is-controls-right .t-input{width:100%;box-sizing:border-box;margin:0;padding-right:calc(var(--td-comp-size-m) + var(--td-comp-paddingLR-s));border-radius:var(--td-radius-default)}.t-input-number.t-is-controls-right .t-input-number__decrease,.t-input-number.t-is-controls-right .t-input-number__increase{width:var(--td-comp-size-m);height:calc(calc(var(--td-comp-size-m) / 2) - 2px);border:0;left:initial;top:initial;right:1px;border-radius:0;background:var(--td-bg-color-secondarycontainer);opacity:0;visibility:hidden;z-index:2}.t-input-number.t-is-controls-right .t-input-number__decrease .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase .t-icon{font-size:var(--td-font-size-body-small)}.t-input-number.t-is-controls-right .t-input-number__decrease:hover,.t-input-number.t-is-controls-right .t-input-number__increase:hover{background:var(--td-bg-color-component-hover)}.t-input-number.t-is-controls-right .t-input-number__decrease:hover .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase:hover .t-icon{color:var(--td-text-color-primary)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled{color:var(--td-text-color-disabled);cursor:no-drop;background-color:var(--td-bg-color-component-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled .t-icon{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled:hover,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled:hover{border-color:var(--td-border-level-2-color)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled:hover .t-icon,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled:hover .t-icon{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__decrease.t-is-disabled::placeholder,.t-input-number.t-is-controls-right .t-input-number__increase.t-is-disabled::placeholder{color:var(--td-text-color-disabled)}.t-input-number.t-is-controls-right .t-input-number__increase{top:1px;border-top-right-radius:calc(var(--td-radius-default) - 1px)}.t-input-number.t-is-controls-right .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-m) / 2) - 2px) + 3px);border-bottom-right-radius:calc(var(--td-radius-default) - 1px)}.t-input-number.t-is-controls-right.t-size-l{width:120px}.t-input-number.t-is-controls-right.t-size-l .t-input-number__increase,.t-input-number.t-is-controls-right.t-size-l .t-input-number__decrease{height:calc(calc(var(--td-comp-size-xl) / 2) - 2px)}.t-input-number.t-is-controls-right.t-size-l .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-xl) / 2) - 2px) + 3px)}.t-input-number.t-is-controls-right.t-size-s{width:88px}.t-input-number.t-is-controls-right.t-size-s .t-input-number__increase,.t-input-number.t-is-controls-right.t-size-s .t-input-number__decrease{height:calc(calc(var(--td-comp-size-xs) / 2) - 2px)}.t-input-number.t-is-controls-right.t-size-s .t-input-number__decrease{top:calc(calc(calc(var(--td-comp-size-xs) / 2) - 2px) + 3px)}.t-input-number--row .t-input__wrap{width:initial;margin-right:var(--td-comp-margin-xs)}.t-input-number--row .t-input-number__increase{right:0}
`,x=g+h+v,f=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=(i,e,r,n)=>{for(var o=n>1?void 0:n?z(e,r):e,a=i.length-1,s;a>=0;a--)(s=i[a])&&(o=(n?s(e,r,o):s(o))||o);return n&&o&&f(e,r,o),o};let p=class extends b{constructor(){super(...arguments),this.handleChange=i=>{var e,r;(r=(e=this.props)==null?void 0:e.onChangeValue)==null||r.call(e,i)}}render(i,e){const{value:r}=i;return t(t.f,null,t("div",{class:"t-slider__input-container"},t("div",{class:"t-input-number t-size-m t-is-controls-right t-input-number--column t-slider-input"},t("button",{onClick:()=>{this.handleChange(r-1)},type:"button",class:"t-input-number__decrease t-button t-button--theme-default t-button--variant-outline t-button--shape-square"},t("svg",{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em",class:"t-icon t-icon-chevron-down t-size-m"},t("path",{fill:"currentColor",d:"M17.5 8.09l-5.5 5.5-5.5-5.5L5.09 9.5 12 16.41l6.91-6.91-1.41-1.41z"}))),t("t-input",{autocomplete:"off",value:r||0}),t("button",{onClick:()=>{this.handleChange(r+1)},type:"button",class:"t-input-number__increase t-button t-button--theme-default t-button--variant-outline t-button--shape-square"},t("svg",{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em",class:"t-icon t-icon-chevron-up t-size-m"},t("path",{fill:"currentColor",d:"M17.5 15.91l-5.5-5.5-5.5 5.5-1.41-1.41L12 7.59l6.91 6.91-1.41 1.41z"}))))))}};p.css=h;p=w([m("t-input-number")],p);var y=Object.defineProperty,k=Object.getOwnPropertyDescriptor,L=(i,e,r,n)=>{for(var o=n>1?void 0:n?k(e,r):e,a=i.length-1,s;a>=0;a--)(s=i[a])&&(o=(n?s(e,r,o):s(o))||o);return n&&o&&y(e,r,o),o};const d=i=>c("slider__")+i;let l=class extends b{constructor(){super(...arguments),this.preLeft=0,this.maxLeft=0,this.curLeft=[0,0],this.buttonIdx=1,this.track=[0,0],this.handleButtonMove=i=>{const e=i.clientX;let r=0;if(this.buttonIdx===1)r=u.exports.clamp(e-this.preLeft,this.curLeft[0],this.maxLeft);else{const n=this.maxLeft*Number(`0.${this.curLeft[1]}`);r=u.exports.clamp(e-this.preLeft,0,n)}this.curLeft[this.buttonIdx]=u.exports.ceil(u.exports.ceil(r/this.maxLeft,2)*100),this.track=[this.curLeft[0],this.curLeft[1]-this.curLeft[0]],this.update()}}handleButtonDown(i,e){const n=e.currentTarget.parentElement.parentElement.parentElement,{left:o,width:a}=n.getBoundingClientRect();this.preLeft=o,this.maxLeft=a,this.buttonIdx=i,window.addEventListener("pointermove",this.handleButtonMove);const s=()=>{window.removeEventListener("pointermove",this.handleButtonMove),window.removeEventListener("pointerup",s)};window.addEventListener("pointerup",s)}handleChangeValue(i){this.props.range||(this.curLeft[1]=Math.min(100,i),this.track=[this.curLeft[0],this.curLeft[1]-this.curLeft[0]],this.update())}render(i){const{range:e,inputNumberProps:r}=i;return t(t.f,null,t("div",{class:d("container")},t("div",{class:_({[c("slider--with-input")]:!0},c("slider"))},t("div",{class:d("rail")},t("div",{style:`left: ${this.track[0]}%; width: ${this.track[1]}%;`,class:d("track")}),e&&t("div",{style:`left: ${this.curLeft[0]}%;`,class:d("button-wrapper")},t("div",{class:d("button"),onPointerDown:n=>{this.handleButtonDown(0,n)}})),t("div",{style:`left: ${this.curLeft[1]}%;`,class:d("button-wrapper")},t("div",{class:d("button"),onPointerDown:n=>{this.handleButtonDown(1,n)}})),t("div",{class:d("stops")}),t("div",{class:d("mark")}))),r&&t("div",{class:"t-slider__input-container"},t("t-input-number",{value:this.curLeft[1]-this.curLeft[0],onChangeValue:this.handleChangeValue.bind(this)}))))}};l.css=x;l.defaultProps={range:!1};l=L([m("t-slider")],l);