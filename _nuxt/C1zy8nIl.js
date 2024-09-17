import{x as V,c as u,a as T,I as w,n as M,r as N,o as j,s as q,l as H,i as L}from"./C1W0qQtw.js";import{m as _,n as m,o as l,p as d,w as c,q as x,s as S,u as B,v as f,x as o,y as v,c as $,b as i,a as I,F as z,z as F,A as G,d as P,t as A,B as E}from"./Dwp7R5xO.js";import K from"./DXqX5Rln.js";const R=_({__name:"Stepper",props:{defaultValue:{},orientation:{},dir:{},modelValue:{},linear:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue"],setup(s,{emit:e}){const r=s,n=e,a=m(()=>{const{class:p,...g}=r;return g}),t=V(a,n);return(p,g)=>(l(),d(o(T),f({class:o(u)("flex gap-2",r.class)},o(t)),{default:c(h=>[x(p.$slots,"default",S(B(h)))]),_:3},16,["class"]))}}),Z=_({__name:"StepperItem",props:{step:{},disabled:{type:Boolean},completed:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(M),f(o(n),{class:o(u)("flex items-center gap-2 group data-[disabled]:pointer-events-none",e.class)}),{default:c(p=>[x(a.$slots,"default",S(B(p)))]),_:3},16,["class"]))}}),J=_({__name:"StepperIndicator",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(N),f(o(n),{class:o(u)("inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-10 h-10","group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50","group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground","group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground",e.class)}),{default:c(()=>[x(a.$slots,"default")]),_:3},16,["class"]))}}),O=_({__name:"StepperTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(j),f(o(n),{class:o(u)("p-2 flex flex-col items-center text-center gap-2 rounded-md",e.class)}),{default:c(()=>[x(a.$slots,"default")]),_:3},16,["class"]))}}),Q=_({__name:"StepperTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(q),f(o(n),{class:o(u)("text-md font-semibold whitespace-nowrap",e.class)}),{default:c(()=>[x(a.$slots,"default")]),_:3},16,["class"]))}}),U=_({__name:"StepperDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(H),f(o(n),{class:o(u)("text-xs text-muted-foreground",e.class)}),{default:c(p=>[x(a.$slots,"default",S(B(p)))]),_:3},16,["class"]))}}),X=_({__name:"StepperSeparator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,r=m(()=>{const{class:a,...t}=e;return t}),n=w(r);return(a,t)=>(l(),d(o(L),f(o(n),{class:o(u)("bg-muted","group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50","group-data-[state=completed]:bg-accent-foreground",e.class)}),null,16,["class"]))}});/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=({size:s,strokeWidth:e=2,absoluteStrokeWidth:r,color:n,iconNode:a,name:t,class:p,...g},{slots:h})=>v("svg",{...k,width:s||k.width,height:s||k.height,stroke:n||k.stroke,"stroke-width":r?Number(e)*24/Number(s):e,class:["lucide",`lucide-${Y(t??"icon")}`],...g},[...a.map(C=>v(...C)),...h.default?[h.default()]:[]]);/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(s,e)=>(r,{slots:n})=>v(W,{...r,iconNode:e,name:s},n);/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=b("AArrowDownIcon",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=b("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=b("CreditCardIcon",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.429.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=b("TruckIcon",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]),oe={class:"mt-4"},re={class:"flex flex-col"},pe={__name:"about-me",setup(s){const e=[{step:1,title:"罗格斯大学",description:"Computer Science",icon:ee},{step:2,title:"香港大学",description:"Computer Science",icon:ae},{step:3,title:"竹子科技",description:"Game Development",icon:se},{step:4,title:"自由职业",description:"Game Development",icon:te}];return(r,n)=>{const a=J,t=Q,p=U,g=O,h=X,C=Z,D=R;return l(),$("div",null,[i(K),I("div",oe,[i(D,{"default-value":4},{default:c(()=>[(l(),$(z,null,F(e,y=>i(C,{key:y.step,class:"basis-1/4",step:y.step},{default:c(()=>[i(g,null,{default:c(()=>[i(a,null,{default:c(()=>[(l(),d(G(y.icon),{class:"w-4 h-4"}))]),_:2},1024),I("div",re,[i(t,null,{default:c(()=>[P(A(y.title),1)]),_:2},1024),i(p,null,{default:c(()=>[P(A(y.description),1)]),_:2},1024)])]),_:2},1024),y.step!==e[e.length-1].step?(l(),d(h,{key:0,class:"w-full h-px"})):E("",!0)]),_:2},1032,["step"])),64))]),_:1})])])}}};export{pe as default};
