import{W as C,p as d,V as L,$ as R}from"./index.1013dd05.js";import{t as S}from"./marked.esm.01ee1597.js";import{T as a}from"./clsx.f76af8a1.js";import"./lodash.7222df35.js";import"./index.1b6b9343.js";import{p as P}from"./parseTNode.6312bff6.js";import"./loading.49d516a2.js";var T=`.t-button{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;z-index:0;overflow:hidden;font-size:var(--td-font-body-medium);outline:none;border-width:1px;border-style:solid;border-color:transparent;background-color:transparent;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;white-space:nowrap;border-radius:var(--td-radius-default);transition:all .2s linear;touch-action:manipulation;text-decoration:none}.t-button .t-button__text,.t-button .t-icon{position:relative;z-index:1;display:inline-flex}.t-button .t-icon,.t-button .t-loading{font-size:var(--td-font-size-body-large)}.t-button .t-icon+.t-button__text:not(:empty){margin-left:8px}.t-button .t-loading+.t-button__text:not(:empty){margin-left:8px}.t-button .t-button__suffix:not(:empty){display:inline-flex;margin-left:8px}.t-button--variant-base{color:var(--td-text-color-anti);height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);background-color:var(--td-bg-color-component);border-color:var(--td-bg-color-component);color:var(--td-text-color-primary)}.t-button--variant-base .t-icon,.t-button--variant-base .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-base:hover{background-color:var(--td-bg-color-component-hover)}.t-button--variant-base.t-is-loading{background-color:var(--td-bg-color-component)}.t-button--variant-base.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-base:hover{border-color:var(--td-bg-color-component-hover)}.t-button--variant-base.t-is-loading{border-color:var(--td-bg-color-component)}.t-button--variant-base.t-is-disabled{border-color:var(--td-bg-color-component-disabled)}.t-button--variant-base:hover,.t-button--variant-base.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-base.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-base.t-button--theme-primary{color:var(--td-text-color-anti);background-color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary:hover{background-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--theme-primary.t-is-loading{background-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary.t-is-disabled{background-color:var(--td-brand-color-disabled)}.t-button--variant-base.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-base.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-base.t-button--theme-success{color:var(--td-text-color-anti);background-color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success:hover{background-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--theme-success.t-is-loading{background-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success.t-is-disabled{background-color:var(--td-success-color-disabled)}.t-button--variant-base.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-base.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-base.t-button--theme-warning{color:var(--td-text-color-anti);background-color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning:hover{background-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--theme-warning.t-is-loading{background-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning.t-is-disabled{background-color:var(--td-warning-color-disabled)}.t-button--variant-base.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-base.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-base.t-button--theme-danger{color:var(--td-text-color-anti);background-color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger:hover{background-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--theme-danger.t-is-loading{background-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger.t-is-disabled{background-color:var(--td-error-color-disabled)}.t-button--variant-base.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-base.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-base.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost:hover,.t-button--variant-base.t-button--ghost:active,.t-button--variant-base.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-base.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost:hover{color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-base.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-base.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-base.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-base.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-base.t-button--ghost.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-base.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-base.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent);border-color:var(--td-border-level-2-color)}.t-button--variant-outline .t-icon,.t-button--variant-outline .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-outline:hover{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-outline.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-outline:hover,.t-button--variant-outline.t-is-loading{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-outline.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-outline:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-is-loading,.t-button--variant-outline.t-is-disabled{border-color:var(--td-border-level-2-color)}.t-button--variant-outline.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-outline.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-outline.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-outline.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-outline.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-outline.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-outline.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-outline.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-outline.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-outline.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-outline.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost:hover,.t-button--variant-outline.t-button--ghost:active,.t-button--variant-outline.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-outline.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost:hover{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-outline.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-outline.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:var(--td-bg-color-specialcomponent);border-color:var(--td-border-level-2-color);border-style:dashed}.t-button--variant-dashed .t-icon,.t-button--variant-dashed .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-dashed:hover{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-dashed.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-dashed:hover,.t-button--variant-dashed.t-is-loading{background-color:var(--td-bg-color-specialcomponent)}.t-button--variant-dashed.t-is-disabled{background-color:var(--td-bg-color-component-disabled)}.t-button--variant-dashed:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-is-loading,.t-button--variant-dashed.t-is-disabled{border-color:var(--td-border-level-2-color)}.t-button--variant-dashed.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-dashed.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--theme-primary.t-is-disabled{border-color:var(--td-brand-color-disabled)}.t-button--variant-dashed.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-dashed.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--theme-success.t-is-disabled{border-color:var(--td-success-color-disabled)}.t-button--variant-dashed.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-dashed.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--theme-warning.t-is-disabled{border-color:var(--td-warning-color-disabled)}.t-button--variant-dashed.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-dashed.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--theme-danger.t-is-disabled{border-color:var(--td-error-color-disabled)}.t-button--variant-dashed.t-button--ghost{background-color:transparent;color:var(--td-text-color-anti);border-color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost:hover,.t-button--variant-dashed.t-button--ghost:active,.t-button--variant-dashed.t-button--ghost.t-is-loading{background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-is-disabled{background-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost:hover{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost:active{border-color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-is-loading{border-color:var(--td-text-color-anti)}.t-button--variant-dashed.t-button--ghost.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color);border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:hover{border-color:var(--td-brand-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary:active{border-color:var(--td-brand-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-loading{border-color:var(--td-brand-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-primary.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-success{color:var(--td-success-color);border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:hover{border-color:var(--td-success-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success:active{border-color:var(--td-success-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-loading{border-color:var(--td-success-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-success.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color);border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:hover{border-color:var(--td-warning-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning:active{border-color:var(--td-warning-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-loading{border-color:var(--td-warning-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-warning.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger{color:var(--td-error-color);border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:hover{border-color:var(--td-error-color-hover)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger:active{border-color:var(--td-error-color-active)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-loading{border-color:var(--td-error-color)}.t-button--variant-dashed.t-button--ghost.t-button--theme-danger.t-is-disabled{border-color:#ffffff38;background-color:transparent}.t-button--variant-text{height:var(--td-comp-size-m);font:var(--td-font-body-medium);padding-left:calc(var(--td-comp-paddingLR-l) - 1px);padding-right:calc(var(--td-comp-paddingLR-l) - 1px);color:var(--td-text-color-primary);background-color:transparent;border-color:transparent}.t-button--variant-text .t-icon,.t-button--variant-text .t-loading{font-size:var(--td-font-size-body-large)}.t-button--variant-text:hover,.t-button--variant-text.t-is-loading{color:var(--td-text-color-primary)}.t-button--variant-text.t-is-disabled{color:var(--td-text-color-disabled)}.t-button--variant-text:hover{background-color:var(--td-bg-color-container-hover)}.t-button--variant-text.t-is-loading,.t-button--variant-text.t-is-disabled{background-color:transparent}.t-button--variant-text:hover{border-color:var(--td-bg-color-container-hover)}.t-button--variant-text.t-is-loading,.t-button--variant-text.t-is-disabled{border-color:transparent}.t-button--variant-text.t-button--theme-primary{color:var(--td-brand-color)}.t-button--variant-text.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-text.t-button--theme-primary.t-is-disabled{color:var(--td-brand-color-disabled)}.t-button--variant-text.t-button--theme-success{color:var(--td-success-color)}.t-button--variant-text.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-text.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-text.t-button--theme-success.t-is-disabled{color:var(--td-success-color-disabled)}.t-button--variant-text.t-button--theme-warning{color:var(--td-warning-color)}.t-button--variant-text.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-text.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-text.t-button--theme-warning.t-is-disabled{color:var(--td-warning-color-disabled)}.t-button--variant-text.t-button--theme-danger{color:var(--td-error-color)}.t-button--variant-text.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-text.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-text.t-button--theme-danger.t-is-disabled{color:var(--td-error-color-disabled)}.t-button--variant-text.t-button--ghost{background:none;color:var(--td-text-color-anti)}.t-button--variant-text.t-button--ghost:hover{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--ghost:active{color:var(--td-brand-color-active)}.t-button--variant-text.t-button--ghost.t-is-loading{color:var(--td-text-color-anti)}.t-button--variant-text.t-button--ghost.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-primary{color:var(--td-brand-color)}.t-button--variant-text.t-button--ghost.t-button--theme-primary:hover{color:var(--td-brand-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-primary:active{color:var(--td-brand-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-primary.t-is-loading{color:var(--td-brand-color)}.t-button--variant-text.t-button--ghost.t-button--theme-primary.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-success{color:var(--td-success-color)}.t-button--variant-text.t-button--ghost.t-button--theme-success:hover{color:var(--td-success-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-success:active{color:var(--td-success-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-success.t-is-loading{color:var(--td-success-color)}.t-button--variant-text.t-button--ghost.t-button--theme-success.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-warning{color:var(--td-warning-color)}.t-button--variant-text.t-button--ghost.t-button--theme-warning:hover{color:var(--td-warning-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-warning:active{color:var(--td-warning-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-warning.t-is-loading{color:var(--td-warning-color)}.t-button--variant-text.t-button--ghost.t-button--theme-warning.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button--variant-text.t-button--ghost.t-button--theme-danger{color:var(--td-error-color)}.t-button--variant-text.t-button--ghost.t-button--theme-danger:hover{color:var(--td-error-color-hover)}.t-button--variant-text.t-button--ghost.t-button--theme-danger:active{color:var(--td-error-color-active)}.t-button--variant-text.t-button--ghost.t-button--theme-danger.t-is-loading{color:var(--td-error-color)}.t-button--variant-text.t-button--ghost.t-button--theme-danger.t-is-disabled{color:#ffffff38;background-color:transparent}.t-button.t-is-loading,.t-button.t-is-disabled{cursor:not-allowed}.t-button.t-size-s{height:var(--td-comp-size-xs);font:var(--td-font-body-small);padding-left:calc(var(--td-comp-paddingLR-s) - 1px);padding-right:calc(var(--td-comp-paddingLR-s) - 1px)}.t-button.t-size-s .t-icon,.t-button.t-size-s .t-loading{font-size:var(--td-font-size-body-medium)}.t-button.t-size-l{height:var(--td-comp-size-xl);font:var(--td-font-body-large);padding-left:calc(var(--td-comp-paddingLR-xl) - 1px);padding-right:calc(var(--td-comp-paddingLR-xl) - 1px)}.t-button.t-size-l .t-icon,.t-button.t-size-l .t-loading{font-size:var(--td-font-size-title-large)}.t-button--shape-square{width:var(--td-comp-size-m);padding:0}.t-button--shape-square.t-size-s{width:var(--td-comp-size-xs);padding:0}.t-button--shape-square.t-size-l{width:var(--td-comp-size-xl);padding:0}.t-button--shape-round{border-radius:var(--td-radius-round)}.t-button--shape-round.t-size-s{border-radius:calc(var(--td-comp-size-xs) / 2)}.t-button--shape-round.t-size-l{border-radius:calc(var(--td-comp-size-xl) / 2)}.t-button--shape-circle{width:var(--td-comp-size-m);padding:0;text-align:center;border-radius:calc(var(--td-comp-size-m) / 2)}.t-button--shape-circle .t-icon,.t-button--shape-circle .t-loading{font-size:var(--td-font-size-body-large)}.t-button--shape-circle.t-size-s{width:var(--td-comp-size-xs);border-radius:calc(var(--td-comp-size-xs) / 2)}.t-button--shape-circle.t-size-l{width:var(--td-comp-size-xl);padding:0;border-radius:calc(var(--td-comp-size-xl) / 2)}.t-button.t-size-full-width{display:flex;width:100%}.t-button--ghost{--ripple-color: var(--td-gray-color-10)}.t-button:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-bg-color-container-active)}.t-button--variant-base:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-bg-color-component-active)}.t-button--variant-base.t-button--theme-primary:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-brand-color-active)}.t-button--variant-base.t-button--theme-success:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-success-color-active)}.t-button--variant-base.t-button--theme-warning:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-warning-color-active)}.t-button--variant-base.t-button--theme-danger:not(.t-is-disabled):not(.t-button--ghost){--ripple-color: var(--td-error-color-active)}
`,O=T+S,j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,N=(t,o,n,e)=>{for(var r=e>1?void 0:e?B(o,n):o,c=t.length-1,b;c>=0;c--)(b=t[c])&&(r=(e?b(o,n,r):b(r))||r);return e&&r&&j(o,n,r),r};let s=class extends C{constructor(){super(...arguments),this.renderTag=()=>{const{tag:t,href:o,disabled:n}=this.props;return!t&&o&&!n?"a":!t&&n?"div":t||"button"},this.renderTheme=()=>{const{theme:t,variant:o}=this.props;return t||(o==="base"?"primary":"default")},this.generateSubCss=()=>(this.props,`
      .t-icon {
        position: relative;
        z-index: 1;
        display: inline-flex;
      }

      .t-icon {
        font-size: var(--td-font-size-body-large);
      }

      .t-loading {
        font-size: var(--td-font-size-body-large) !important;
      }
    `),this.handleClick=t=>{var e,r;const{disabled:o,loading:n}=this.props;t.stopPropagation(),!o&&!n&&((r=(e=this.props).onClick)==null||r.call(e,t))}}render(t){const{renderTag:o,renderTheme:n,generateSubCss:e}=this,{type:r,theme:c,variant:b,icon:l,disabled:v,loading:i,size:h,block:p,ghost:x,shape:g,children:m,content:u,class:$,suffix:w,href:y,tag:q,onClick:D,...k}=t,z=o(),_=m,f=(u!=null?u:_.length>0)?m:null;return l&&(l.attributes.css=e()),d(z,{...k,href:y,type:r,disabled:v||i,class:L(t.class,[a("button"),a(`button--theme-${n()}`),a(`button--variant-${b}`)],{[a(`button--shape-${g}`)]:g!=="rectangle",[a("button--ghost")]:x,[a("is-loading")]:i,[a("is-disabled")]:v,[a("size-s")]:h==="small",[a("size-l")]:h==="large",[a("size-full-width")]:p}),onClick:this.handleClick},d(d.f,null,i?d("t-loading",{css:e(),loading:i,inheritColor:!0}):l,f&&d("span",{className:"t-button__text",style:(i||l)&&{marginLeft:"8px"}},f),t.suffix&&d("span",{class:a("button__suffix")},P(w))))}};s.css=O;s.defaultProps={block:!1,disabled:!1,ghost:!1,loading:!1,shape:"rectangle",size:"medium",type:"button",variant:"base"};s.propTypes={block:Boolean,content:Object,disabled:Boolean,ghost:Boolean,href:String,icon:Object,loading:Boolean,shape:String,size:String,suffix:Object,tag:String,theme:String,type:String,variant:String,onClick:Function};s=N([R("t-button")],s);