import{t as v}from"./marked.esm.01ee1597.js";import{W as w,c as y,V as k,p as n,$}from"./index.79a2e431.js";import{i as x}from"./isObject.979aae4d.js";import{c as N,g as a}from"./dom.ca39bf0a.js";var P=`.t-row{font:var(--td-font-body-medium);color:var(--td-text-color-primary);box-sizing:border-box;margin:0;padding:0;list-style:none;display:flex;flex-flow:row wrap}.t-row--start{justify-content:flex-start}.t-row--center{justify-content:center}.t-row--end{justify-content:flex-end}.t-row--space-between{justify-content:space-between}.t-row--space-around{justify-content:space-around}.t-row--top{align-items:flex-start}.t-row--middle{align-items:center}.t-row--bottom{align-items:flex-end}.t-row--align-top,.t-row--align-start{align-items:flex-start}.t-row--align-middle,.t-row--align-center{align-items:center}.t-row--align-bottom,.t-row--align-end{align-items:flex-end}.t-row--align-stretch{align-items:stretch}.t-row--align-baseline{align-items:baseline}.t-col{position:relative;max-width:100%;min-height:1px;box-sizing:border-box}.t-col-12{display:block;flex:0 0 100%;max-width:100%}.t-col-push-12{left:100%}.t-col-pull-12{right:100%}.t-col-offset-12{margin-left:100%}.t-col-order-12{order:12}.t-col-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-push-11{left:91.66666667%}.t-col-pull-11{right:91.66666667%}.t-col-offset-11{margin-left:91.66666667%}.t-col-order-11{order:11}.t-col-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-push-10{left:83.33333333%}.t-col-pull-10{right:83.33333333%}.t-col-offset-10{margin-left:83.33333333%}.t-col-order-10{order:10}.t-col-9{display:block;flex:0 0 75%;max-width:75%}.t-col-push-9{left:75%}.t-col-pull-9{right:75%}.t-col-offset-9{margin-left:75%}.t-col-order-9{order:9}.t-col-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-push-8{left:66.66666667%}.t-col-pull-8{right:66.66666667%}.t-col-offset-8{margin-left:66.66666667%}.t-col-order-8{order:8}.t-col-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-push-7{left:58.33333333%}.t-col-pull-7{right:58.33333333%}.t-col-offset-7{margin-left:58.33333333%}.t-col-order-7{order:7}.t-col-6{display:block;flex:0 0 50%;max-width:50%}.t-col-push-6{left:50%}.t-col-pull-6{right:50%}.t-col-offset-6{margin-left:50%}.t-col-order-6{order:6}.t-col-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-push-5{left:41.66666667%}.t-col-pull-5{right:41.66666667%}.t-col-offset-5{margin-left:41.66666667%}.t-col-order-5{order:5}.t-col-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-push-4{left:33.33333333%}.t-col-pull-4{right:33.33333333%}.t-col-offset-4{margin-left:33.33333333%}.t-col-order-4{order:4}.t-col-3{display:block;flex:0 0 25%;max-width:25%}.t-col-push-3{left:25%}.t-col-pull-3{right:25%}.t-col-offset-3{margin-left:25%}.t-col-order-3{order:3}.t-col-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-push-2{left:16.66666667%}.t-col-pull-2{right:16.66666667%}.t-col-offset-2{margin-left:16.66666667%}.t-col-order-2{order:2}.t-col-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-push-1{left:8.33333333%}.t-col-pull-1{right:8.33333333%}.t-col-offset-1{margin-left:8.33333333%}.t-col-order-1{order:1}.t-col-0{display:none}.t-col-offset-0{margin-left:0}.t-col-order-0{order:0}.t-col-xs-12{display:block;flex:0 0 100%;max-width:100%}.t-col-xs-push-12{left:100%}.t-col-xs-pull-12{right:100%}.t-col-xs-offset-12{margin-left:100%}.t-col-xs-order-12{order:12}.t-col-xs-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-xs-push-11{left:91.66666667%}.t-col-xs-pull-11{right:91.66666667%}.t-col-xs-offset-11{margin-left:91.66666667%}.t-col-xs-order-11{order:11}.t-col-xs-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-xs-push-10{left:83.33333333%}.t-col-xs-pull-10{right:83.33333333%}.t-col-xs-offset-10{margin-left:83.33333333%}.t-col-xs-order-10{order:10}.t-col-xs-9{display:block;flex:0 0 75%;max-width:75%}.t-col-xs-push-9{left:75%}.t-col-xs-pull-9{right:75%}.t-col-xs-offset-9{margin-left:75%}.t-col-xs-order-9{order:9}.t-col-xs-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-xs-push-8{left:66.66666667%}.t-col-xs-pull-8{right:66.66666667%}.t-col-xs-offset-8{margin-left:66.66666667%}.t-col-xs-order-8{order:8}.t-col-xs-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-xs-push-7{left:58.33333333%}.t-col-xs-pull-7{right:58.33333333%}.t-col-xs-offset-7{margin-left:58.33333333%}.t-col-xs-order-7{order:7}.t-col-xs-6{display:block;flex:0 0 50%;max-width:50%}.t-col-xs-push-6{left:50%}.t-col-xs-pull-6{right:50%}.t-col-xs-offset-6{margin-left:50%}.t-col-xs-order-6{order:6}.t-col-xs-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-xs-push-5{left:41.66666667%}.t-col-xs-pull-5{right:41.66666667%}.t-col-xs-offset-5{margin-left:41.66666667%}.t-col-xs-order-5{order:5}.t-col-xs-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-xs-push-4{left:33.33333333%}.t-col-xs-pull-4{right:33.33333333%}.t-col-xs-offset-4{margin-left:33.33333333%}.t-col-xs-order-4{order:4}.t-col-xs-3{display:block;flex:0 0 25%;max-width:25%}.t-col-xs-push-3{left:25%}.t-col-xs-pull-3{right:25%}.t-col-xs-offset-3{margin-left:25%}.t-col-xs-order-3{order:3}.t-col-xs-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-xs-push-2{left:16.66666667%}.t-col-xs-pull-2{right:16.66666667%}.t-col-xs-offset-2{margin-left:16.66666667%}.t-col-xs-order-2{order:2}.t-col-xs-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-xs-push-1{left:8.33333333%}.t-col-xs-pull-1{right:8.33333333%}.t-col-xs-offset-1{margin-left:8.33333333%}.t-col-xs-order-1{order:1}.t-col-xs-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-xs-push-0{left:auto}.t-col-xs-pull-0{right:auto}.t-col-xs-offset-0{margin-left:0}.t-col-xs-order-0{order:0}@media (min-width: 768px){.t-col-sm-12{display:block;flex:0 0 100%;max-width:100%}.t-col-sm-push-12{left:100%}.t-col-sm-pull-12{right:100%}.t-col-sm-offset-12{margin-left:100%}.t-col-sm-order-12{order:12}.t-col-sm-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-sm-push-11{left:91.66666667%}.t-col-sm-pull-11{right:91.66666667%}.t-col-sm-offset-11{margin-left:91.66666667%}.t-col-sm-order-11{order:11}.t-col-sm-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-sm-push-10{left:83.33333333%}.t-col-sm-pull-10{right:83.33333333%}.t-col-sm-offset-10{margin-left:83.33333333%}.t-col-sm-order-10{order:10}.t-col-sm-9{display:block;flex:0 0 75%;max-width:75%}.t-col-sm-push-9{left:75%}.t-col-sm-pull-9{right:75%}.t-col-sm-offset-9{margin-left:75%}.t-col-sm-order-9{order:9}.t-col-sm-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-sm-push-8{left:66.66666667%}.t-col-sm-pull-8{right:66.66666667%}.t-col-sm-offset-8{margin-left:66.66666667%}.t-col-sm-order-8{order:8}.t-col-sm-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-sm-push-7{left:58.33333333%}.t-col-sm-pull-7{right:58.33333333%}.t-col-sm-offset-7{margin-left:58.33333333%}.t-col-sm-order-7{order:7}.t-col-sm-6{display:block;flex:0 0 50%;max-width:50%}.t-col-sm-push-6{left:50%}.t-col-sm-pull-6{right:50%}.t-col-sm-offset-6{margin-left:50%}.t-col-sm-order-6{order:6}.t-col-sm-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-sm-push-5{left:41.66666667%}.t-col-sm-pull-5{right:41.66666667%}.t-col-sm-offset-5{margin-left:41.66666667%}.t-col-sm-order-5{order:5}.t-col-sm-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-sm-push-4{left:33.33333333%}.t-col-sm-pull-4{right:33.33333333%}.t-col-sm-offset-4{margin-left:33.33333333%}.t-col-sm-order-4{order:4}.t-col-sm-3{display:block;flex:0 0 25%;max-width:25%}.t-col-sm-push-3{left:25%}.t-col-sm-pull-3{right:25%}.t-col-sm-offset-3{margin-left:25%}.t-col-sm-order-3{order:3}.t-col-sm-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-sm-push-2{left:16.66666667%}.t-col-sm-pull-2{right:16.66666667%}.t-col-sm-offset-2{margin-left:16.66666667%}.t-col-sm-order-2{order:2}.t-col-sm-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-sm-push-1{left:8.33333333%}.t-col-sm-pull-1{right:8.33333333%}.t-col-sm-offset-1{margin-left:8.33333333%}.t-col-sm-order-1{order:1}.t-col-sm-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-sm-push-0{left:auto}.t-col-sm-pull-0{right:auto}.t-col-sm-offset-0{margin-left:0}.t-col-sm-order-0{order:0}}@media (min-width: 992px){.t-col-md-12{display:block;flex:0 0 100%;max-width:100%}.t-col-md-push-12{left:100%}.t-col-md-pull-12{right:100%}.t-col-md-offset-12{margin-left:100%}.t-col-md-order-12{order:12}.t-col-md-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-md-push-11{left:91.66666667%}.t-col-md-pull-11{right:91.66666667%}.t-col-md-offset-11{margin-left:91.66666667%}.t-col-md-order-11{order:11}.t-col-md-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-md-push-10{left:83.33333333%}.t-col-md-pull-10{right:83.33333333%}.t-col-md-offset-10{margin-left:83.33333333%}.t-col-md-order-10{order:10}.t-col-md-9{display:block;flex:0 0 75%;max-width:75%}.t-col-md-push-9{left:75%}.t-col-md-pull-9{right:75%}.t-col-md-offset-9{margin-left:75%}.t-col-md-order-9{order:9}.t-col-md-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-md-push-8{left:66.66666667%}.t-col-md-pull-8{right:66.66666667%}.t-col-md-offset-8{margin-left:66.66666667%}.t-col-md-order-8{order:8}.t-col-md-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-md-push-7{left:58.33333333%}.t-col-md-pull-7{right:58.33333333%}.t-col-md-offset-7{margin-left:58.33333333%}.t-col-md-order-7{order:7}.t-col-md-6{display:block;flex:0 0 50%;max-width:50%}.t-col-md-push-6{left:50%}.t-col-md-pull-6{right:50%}.t-col-md-offset-6{margin-left:50%}.t-col-md-order-6{order:6}.t-col-md-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-md-push-5{left:41.66666667%}.t-col-md-pull-5{right:41.66666667%}.t-col-md-offset-5{margin-left:41.66666667%}.t-col-md-order-5{order:5}.t-col-md-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-md-push-4{left:33.33333333%}.t-col-md-pull-4{right:33.33333333%}.t-col-md-offset-4{margin-left:33.33333333%}.t-col-md-order-4{order:4}.t-col-md-3{display:block;flex:0 0 25%;max-width:25%}.t-col-md-push-3{left:25%}.t-col-md-pull-3{right:25%}.t-col-md-offset-3{margin-left:25%}.t-col-md-order-3{order:3}.t-col-md-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-md-push-2{left:16.66666667%}.t-col-md-pull-2{right:16.66666667%}.t-col-md-offset-2{margin-left:16.66666667%}.t-col-md-order-2{order:2}.t-col-md-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-md-push-1{left:8.33333333%}.t-col-md-pull-1{right:8.33333333%}.t-col-md-offset-1{margin-left:8.33333333%}.t-col-md-order-1{order:1}.t-col-md-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-md-push-0{left:auto}.t-col-md-pull-0{right:auto}.t-col-md-offset-0{margin-left:0}.t-col-md-order-0{order:0}}@media (min-width: 1200px){.t-col-lg-12{display:block;flex:0 0 100%;max-width:100%}.t-col-lg-push-12{left:100%}.t-col-lg-pull-12{right:100%}.t-col-lg-offset-12{margin-left:100%}.t-col-lg-order-12{order:12}.t-col-lg-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-lg-push-11{left:91.66666667%}.t-col-lg-pull-11{right:91.66666667%}.t-col-lg-offset-11{margin-left:91.66666667%}.t-col-lg-order-11{order:11}.t-col-lg-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-lg-push-10{left:83.33333333%}.t-col-lg-pull-10{right:83.33333333%}.t-col-lg-offset-10{margin-left:83.33333333%}.t-col-lg-order-10{order:10}.t-col-lg-9{display:block;flex:0 0 75%;max-width:75%}.t-col-lg-push-9{left:75%}.t-col-lg-pull-9{right:75%}.t-col-lg-offset-9{margin-left:75%}.t-col-lg-order-9{order:9}.t-col-lg-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-lg-push-8{left:66.66666667%}.t-col-lg-pull-8{right:66.66666667%}.t-col-lg-offset-8{margin-left:66.66666667%}.t-col-lg-order-8{order:8}.t-col-lg-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-lg-push-7{left:58.33333333%}.t-col-lg-pull-7{right:58.33333333%}.t-col-lg-offset-7{margin-left:58.33333333%}.t-col-lg-order-7{order:7}.t-col-lg-6{display:block;flex:0 0 50%;max-width:50%}.t-col-lg-push-6{left:50%}.t-col-lg-pull-6{right:50%}.t-col-lg-offset-6{margin-left:50%}.t-col-lg-order-6{order:6}.t-col-lg-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-lg-push-5{left:41.66666667%}.t-col-lg-pull-5{right:41.66666667%}.t-col-lg-offset-5{margin-left:41.66666667%}.t-col-lg-order-5{order:5}.t-col-lg-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-lg-push-4{left:33.33333333%}.t-col-lg-pull-4{right:33.33333333%}.t-col-lg-offset-4{margin-left:33.33333333%}.t-col-lg-order-4{order:4}.t-col-lg-3{display:block;flex:0 0 25%;max-width:25%}.t-col-lg-push-3{left:25%}.t-col-lg-pull-3{right:25%}.t-col-lg-offset-3{margin-left:25%}.t-col-lg-order-3{order:3}.t-col-lg-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-lg-push-2{left:16.66666667%}.t-col-lg-pull-2{right:16.66666667%}.t-col-lg-offset-2{margin-left:16.66666667%}.t-col-lg-order-2{order:2}.t-col-lg-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-lg-push-1{left:8.33333333%}.t-col-lg-pull-1{right:8.33333333%}.t-col-lg-offset-1{margin-left:8.33333333%}.t-col-lg-order-1{order:1}.t-col-lg-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-lg-push-0{left:auto}.t-col-lg-pull-0{right:auto}.t-col-lg-offset-0{margin-left:0}.t-col-lg-order-0{order:0}}@media (min-width: 1400px){.t-col-xl-12{display:block;flex:0 0 100%;max-width:100%}.t-col-xl-push-12{left:100%}.t-col-xl-pull-12{right:100%}.t-col-xl-offset-12{margin-left:100%}.t-col-xl-order-12{order:12}.t-col-xl-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-xl-push-11{left:91.66666667%}.t-col-xl-pull-11{right:91.66666667%}.t-col-xl-offset-11{margin-left:91.66666667%}.t-col-xl-order-11{order:11}.t-col-xl-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-xl-push-10{left:83.33333333%}.t-col-xl-pull-10{right:83.33333333%}.t-col-xl-offset-10{margin-left:83.33333333%}.t-col-xl-order-10{order:10}.t-col-xl-9{display:block;flex:0 0 75%;max-width:75%}.t-col-xl-push-9{left:75%}.t-col-xl-pull-9{right:75%}.t-col-xl-offset-9{margin-left:75%}.t-col-xl-order-9{order:9}.t-col-xl-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-xl-push-8{left:66.66666667%}.t-col-xl-pull-8{right:66.66666667%}.t-col-xl-offset-8{margin-left:66.66666667%}.t-col-xl-order-8{order:8}.t-col-xl-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-xl-push-7{left:58.33333333%}.t-col-xl-pull-7{right:58.33333333%}.t-col-xl-offset-7{margin-left:58.33333333%}.t-col-xl-order-7{order:7}.t-col-xl-6{display:block;flex:0 0 50%;max-width:50%}.t-col-xl-push-6{left:50%}.t-col-xl-pull-6{right:50%}.t-col-xl-offset-6{margin-left:50%}.t-col-xl-order-6{order:6}.t-col-xl-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-xl-push-5{left:41.66666667%}.t-col-xl-pull-5{right:41.66666667%}.t-col-xl-offset-5{margin-left:41.66666667%}.t-col-xl-order-5{order:5}.t-col-xl-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-xl-push-4{left:33.33333333%}.t-col-xl-pull-4{right:33.33333333%}.t-col-xl-offset-4{margin-left:33.33333333%}.t-col-xl-order-4{order:4}.t-col-xl-3{display:block;flex:0 0 25%;max-width:25%}.t-col-xl-push-3{left:25%}.t-col-xl-pull-3{right:25%}.t-col-xl-offset-3{margin-left:25%}.t-col-xl-order-3{order:3}.t-col-xl-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-xl-push-2{left:16.66666667%}.t-col-xl-pull-2{right:16.66666667%}.t-col-xl-offset-2{margin-left:16.66666667%}.t-col-xl-order-2{order:2}.t-col-xl-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-xl-push-1{left:8.33333333%}.t-col-xl-pull-1{right:8.33333333%}.t-col-xl-offset-1{margin-left:8.33333333%}.t-col-xl-order-1{order:1}.t-col-xl-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-xl-push-0{left:auto}.t-col-xl-pull-0{right:auto}.t-col-xl-offset-0{margin-left:0}.t-col-xl-order-0{order:0}}@media (min-width: 1880px){.t-col-xxl-12{display:block;flex:0 0 100%;max-width:100%}.t-col-xxl-push-12{left:100%}.t-col-xxl-pull-12{right:100%}.t-col-xxl-offset-12{margin-left:100%}.t-col-xxl-order-12{order:12}.t-col-xxl-11{display:block;flex:0 0 91.66666667%;max-width:91.66666667%}.t-col-xxl-push-11{left:91.66666667%}.t-col-xxl-pull-11{right:91.66666667%}.t-col-xxl-offset-11{margin-left:91.66666667%}.t-col-xxl-order-11{order:11}.t-col-xxl-10{display:block;flex:0 0 83.33333333%;max-width:83.33333333%}.t-col-xxl-push-10{left:83.33333333%}.t-col-xxl-pull-10{right:83.33333333%}.t-col-xxl-offset-10{margin-left:83.33333333%}.t-col-xxl-order-10{order:10}.t-col-xxl-9{display:block;flex:0 0 75%;max-width:75%}.t-col-xxl-push-9{left:75%}.t-col-xxl-pull-9{right:75%}.t-col-xxl-offset-9{margin-left:75%}.t-col-xxl-order-9{order:9}.t-col-xxl-8{display:block;flex:0 0 66.66666667%;max-width:66.66666667%}.t-col-xxl-push-8{left:66.66666667%}.t-col-xxl-pull-8{right:66.66666667%}.t-col-xxl-offset-8{margin-left:66.66666667%}.t-col-xxl-order-8{order:8}.t-col-xxl-7{display:block;flex:0 0 58.33333333%;max-width:58.33333333%}.t-col-xxl-push-7{left:58.33333333%}.t-col-xxl-pull-7{right:58.33333333%}.t-col-xxl-offset-7{margin-left:58.33333333%}.t-col-xxl-order-7{order:7}.t-col-xxl-6{display:block;flex:0 0 50%;max-width:50%}.t-col-xxl-push-6{left:50%}.t-col-xxl-pull-6{right:50%}.t-col-xxl-offset-6{margin-left:50%}.t-col-xxl-order-6{order:6}.t-col-xxl-5{display:block;flex:0 0 41.66666667%;max-width:41.66666667%}.t-col-xxl-push-5{left:41.66666667%}.t-col-xxl-pull-5{right:41.66666667%}.t-col-xxl-offset-5{margin-left:41.66666667%}.t-col-xxl-order-5{order:5}.t-col-xxl-4{display:block;flex:0 0 33.33333333%;max-width:33.33333333%}.t-col-xxl-push-4{left:33.33333333%}.t-col-xxl-pull-4{right:33.33333333%}.t-col-xxl-offset-4{margin-left:33.33333333%}.t-col-xxl-order-4{order:4}.t-col-xxl-3{display:block;flex:0 0 25%;max-width:25%}.t-col-xxl-push-3{left:25%}.t-col-xxl-pull-3{right:25%}.t-col-xxl-offset-3{margin-left:25%}.t-col-xxl-order-3{order:3}.t-col-xxl-2{display:block;flex:0 0 16.66666667%;max-width:16.66666667%}.t-col-xxl-push-2{left:16.66666667%}.t-col-xxl-pull-2{right:16.66666667%}.t-col-xxl-offset-2{margin-left:16.66666667%}.t-col-xxl-order-2{order:2}.t-col-xxl-1{display:block;flex:0 0 8.33333333%;max-width:8.33333333%}.t-col-xxl-push-1{left:8.33333333%}.t-col-xxl-pull-1{right:8.33333333%}.t-col-xxl-offset-1{margin-left:8.33333333%}.t-col-xxl-order-1{order:1}.t-col-xxl-0{display:none}.t-col-push-0{left:auto}.t-col-pull-0{right:auto}.t-col-xxl-push-0{left:auto}.t-col-xxl-pull-0{right:auto}.t-col-xxl-offset-0{margin-left:0}.t-col-xxl-order-0{order:0}}
`,U=P+v,L=Object.defineProperty,_=Object.getOwnPropertyDescriptor,R=(l,t,o,s)=>{for(var e=s>1?void 0:s?_(t,o):t,c=l.length-1,r;c>=0;c--)(r=l[c])&&(e=(s?r(t,o,e):r(e))||e);return s&&e&&L(t,o,e),e};const b=l=>{const t=a("--td-screen-sm")||768,o=a("--td-screen-md")||992,s=a("--td-screen-lg")||1200,e=a("--td-screen-xl")||1400,c=a("--td-screen-xxl")||1880;let r="xs";return l>=c?r="xxl":l>=e?r="xl":l>=s?r="lg":l>=o?r="md":l>=t?r="sm":r="xs",r},C=(l,t)=>{const o={};return typeof l=="number"?Object.assign(o,{marginLeft:`${l/-2}px`,marginRight:`${l/-2}px`}):Array.isArray(l)&&l.length?(typeof l[0]=="number"&&Object.assign(o,{marginLeft:`${l[0]/-2}px`,marginRight:`${l[0]/-2}px`}),typeof l[1]=="number"&&Object.assign(o,{rowGap:`${l[1]}px`}),x(l[0])&&l[0][t]!==void 0&&Object.assign(o,{marginLeft:`${l[0][t]/-2}px`,marginRight:`${l[0][t]/-2}px`}),x(l[1])&&l[1][t]!==void 0&&Object.assign(o,{rowGap:`${l[1][t]}px`})):x(l)&&l[t]&&(Array.isArray(l[t])&&l[t].length?(Object.assign(o,{marginLeft:`${l[t][0]/-2}px`,marginRight:`${l[t][0]/-2}px`}),Object.assign(o,{rowGap:`${l[t][1]}px`})):Object.assign(o,{marginLeft:`${l[t]/-2}px`,marginRight:`${l[t]/-2}px`})),o};let p=class extends w{constructor(){super(...arguments),this.size=N?b(window.innerWidth):"md",this.updateSize=()=>{const l=b(window.innerWidth);l!==this.size&&(this.size=l)},this.provide={gutter:this.props.gutter,size:this.size},this.ref=y()}install(){window.addEventListener("resize",this.updateSize)}unintall(){window.removeEventListener("resize",this.updateSize)}installed(){this.provide={gutter:this.props.gutter,size:this.size}}render(l){const t="t",o=k(`${t}-row`,l.class,{[`${t}-row--${l.justify}`]:!0,[`${t}-row--${l.align}`]:!0}),s=C(l.gutter,this.size);return Object.keys(s).forEach(e=>{this.style[e]=s[e]}),this.className=o,n(n.f,null)}};p.defaultProps={align:"top",gutter:0,justify:"start",tag:"div"};p.isLightDOM=!0;p.propTypes={align:String,gutter:[Number,Object,Array],justify:String,tag:String,class:String,style:Object};p=R([$("t-row")],p);var I=Object.defineProperty,W=Object.getOwnPropertyDescriptor,A=(l,t,o,s)=>{for(var e=s>1?void 0:s?W(t,o):t,c=l.length-1,r;c>=0;c--)(r=l[c])&&(e=(s?r(t,o,e):r(e))||e);return s&&e&&I(t,o,e),e};const D=(l,t)=>{const o={};return typeof l=="number"?Object.assign(o,{paddingLeft:`${l/2}px`,paddingRight:`${l/2}px`}):Array.isArray(l)&&l.length?(typeof l[0]=="number"&&Object.assign(o,{paddingLeft:`${l[0]/2}px`,paddingRight:`${l[0]/2}px`}),x(l[0])&&l[0][t]&&Object.assign(o,{paddingLeft:`${l[0][t]/2}px`,paddingRight:`${l[0][t]/2}px`})):x(l)&&l[t]&&Object.assign(o,{paddingLeft:`${l[t]/2}px`,paddingRight:`${l[t]/2}px`}),o},E=l=>typeof l=="number"?`${l} ${l} auto`:/^\d+(\.\d+)?(px|r?em|%)$/.test(l)?`0 0 ${l}`:l;let m=class extends w{constructor(){super(...arguments),this.inject=["gutter","size"],this.tagRef=y()}render(l){const{flex:t,offset:o,order:s,pull:e,push:c,span:r,tag:z}=l,f="t",j=["xs","sm","md","lg","xl","xxl"].reduce((h,d)=>{const g=l[d];let i={};return typeof g=="number"?i.span=g:x(g)&&(i=g||{}),{...h,[`${f}-col-${d}-${i.span}`]:i.span!==void 0,[`${f}-col-${d}-order-${i.order}`]:parseInt(i.order,10)>=0,[`${f}-col-${d}-offset-${i.offset}`]:parseInt(i.offset,10)>=0,[`${f}-col-${d}-push-${i.push}`]:parseInt(i.push,10)>=0,[`${f}-col-${d}-pull-${i.pull}`]:parseInt(i.pull,10)>=0}},{}),O=k(`${f}-col`,l.class,{[`${f}-col-${r}`]:r!==void 0,[`${f}-col-offset-${o}`]:parseInt(o,10)>=0,[`${f}-col-pull-${e}`]:parseInt(e,10)>=0,[`${f}-col-push-${c}`]:parseInt(c,10)>=0,[`${f}-col-order-${s}`]:parseInt(s,10)>=0},j),u=D(this.injection.gutter,this.injection.size);return t&&(u.flex=E(t)),this.className=O,Object.keys(u).forEach(h=>{this.style[h]=u[h]}),n(n.f,null)}};m.defaultProps={offset:0,order:0,pull:0,push:0,tag:"div"};m.isLightDOM=!0;m.propTypes={flex:[String,Number],lg:[Number,Object],md:[Number,Object],offset:Number,order:Number,pull:Number,push:Number,sm:[Number,Object],span:Number,tag:String,xl:[Number,Object],xs:[Number,Object],xxl:[Number,Object]};m=A([$("t-col")],m);export{U as c};
