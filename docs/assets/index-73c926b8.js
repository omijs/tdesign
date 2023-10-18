var r=Object.defineProperty;var l=(n,e,t)=>e in n?r(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var a=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);import{$ as i,H as d,c as s}from"./index-3f1c186f.js";import{p}from"./marked.esm-23ea8bc7.js";const c=p(`

## API
### Skeleton Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
className | String | - | 类名 | N
style | Object | - | 样式 | N
animation | String | none | 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 'none' 则表示没有动画。可选项：gradient/flashed/none | N
delay | Number | 0 | 【开发中】延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 | N
loading | Boolean | true | 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容 | N
rowCol | Array | - | 高级设置，用于自定义行列数量、宽度高度、间距等。【示例一】，\`[1, 1, 2]\` 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，\`[1, 1, { width: '100px' }]\` 表示自定义第三行的宽度为 \`100px\`。【示例三】，\`[1, 2, [{ width, height }, { width, height, marginLeft }]]\` 表示第三行有两列，且自定义宽度、高度、尺寸（圆形或方形使用）、间距、内容等。TS 类型：\`SkeletonRowCol\` \`type SkeletonRowCol = Array < Number \\| SkeletonRowColObj \\| Array < SkeletonRowColObj >>\` \`interface SkeletonRowColObj { width?: string; height?: string; size?: string; marginRight?: string; marginLeft?: string; margin?: string; content?: string | TNode; type ?: 'rect' | 'circle' | 'text' }\`。[通用类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/common.ts)。[详细类型定义](https://github.com/Tencent/omi/blob/master/tdesign/desktop/src/skeleton/type.ts) | N
theme | String | text | 快捷定义骨架图风格，有基础、头像组合等，具体参看代码示例。可选项：text/avatar/paragraph/avatar-text/tab/article | N

`);var o;i("page-skeleton",(o=class extends d{constructor(){super(...arguments);a(this,"tab",["demo","api","design"]);a(this,"tdDocHeader",s());a(this,"tdDocTabs",s());a(this,"updateTab",e=>{this.updateProps({tab:e})})}isShow(e){return this.props.tab===e?{display:"block"}:{display:"none"}}installed(){const e=this.tdDocTabs.current;e.onchange=({detail:t})=>{this.updateTab(t)}}render(){return h(h.f,null,h("td-doc-tabs",{ref:this.tdDocTabs,tab:this.props.tab,style:"display:block"}),h("div",{style:this.isShow("demo"),name:"DEMO"},h("h3",{id:"基础骨架屏"},"基础骨架屏 ",h("a",{class:"header-anchor",href:"#基础骨架屏"})),h("p",null,"最简单的骨架屏效果。"),h("demo-wrapper",null,h("skeleton-base",null)),h("h3",{id:"带动画效果的骨架屏"},"带动画效果的骨架屏 ",h("a",{class:"header-anchor",href:"#带动画效果的骨架屏"})),h("p",null,"提供渐变和闪烁两种动画效果。"),h("demo-wrapper",null,h("skeleton-animation",null)),h("h3",{id:"带延迟效果的骨架屏"},"带延迟效果的骨架屏 ",h("a",{class:"header-anchor",href:"#带延迟效果的骨架屏"})),h("p",null,"设置最短延迟响应时间，低于响应时间的操作不显示加载状态。"),h("demo-wrapper",null,h("skeleton-delay",null)),h("h3",{id:"不同主题的骨架屏"},"不同主题的骨架屏 ",h("a",{class:"header-anchor",href:"#不同主题的骨架屏"})),h("p",null,"可以通过'theme'属性快速定义不同主题风格的骨架屏。"),h("demo-wrapper",null,h("skeleton-theme",null)),h("h3",{id:"组合用法"},"组合用法 ",h("a",{class:"header-anchor",href:"#组合用法"})),h("p",null,"包含图片、文字、按钮、输入框、头像、标签等多种元素组合在一起的占位效果。"),h("demo-wrapper",null,h("skeleton-advance",null))),h("div",{style:this.isShow("api"),name:"API"},h("div",{style:"margin-bottom:76px",dangerouslySetInnerHTML:{__html:c}})),h("div",{style:this.isShow("design"),name:"DESIGN"}))}},a(o,"defaultProps",{tab:"demo"}),a(o,"propTypes",{tab:String}),o));
