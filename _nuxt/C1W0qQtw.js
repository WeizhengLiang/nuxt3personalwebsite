import{n as k,m as z,y as te,E as Te,G as xe,r as $,f as Q,o as R,p as E,w as _,q as P,x as b,a as Ne,t as oe,H as Fe,I as Ve,J as we,K as $e,L as je,v as U,M as Ge,N as Be,O as We,P as Le,Q as Ke,d as Ue,s as Ce,u as Se,R as De,S as He,l as X,T as ne,F as Je,D as Qe}from"./Dwp7R5xO.js";function se(e,t){const r=typeof e=="string"&&!t?`${e}Context`:t,o=Symbol(r);return[a=>{const n=De(o,a);if(n||n===null)return n;throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},a=>(He(o,a),a)]}function Xe(e){let t=!1,r;const o=Fe(!0);return(...a)=>(t||(r=o.run(()=>e(...a)),t=!0),r)}function qe(e){return typeof e=="function"?e():b(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ze=e=>typeof e<"u";function Ye(e){var t;const r=qe(e);return(t=r==null?void 0:r.$el)!=null?t:r}function et(e){return JSON.parse(JSON.stringify(e))}function tt(e,t,r,o={}){var a,n,s;const{clone:l=!1,passive:c=!1,eventName:i,deep:d=!1,defaultValue:m,shouldEmit:v}=o,y=X(),C=r||(y==null?void 0:y.emit)||((a=y==null?void 0:y.$emit)==null?void 0:a.bind(y))||((s=(n=y==null?void 0:y.proxy)==null?void 0:n.$emit)==null?void 0:s.bind(y==null?void 0:y.proxy));let g=i;g=g||`update:${t.toString()}`;const p=f=>l?typeof l=="function"?l(f):et(f):f,h=()=>Ze(e[t])?p(e[t]):m,S=f=>{v?v(f)&&C(g,f):C(g,f)};if(c){const f=h(),A=$(f);let I=!1;return Q(()=>e[t],V=>{I||(I=!0,A.value=p(V),ne(()=>I=!1))}),Q(A,V=>{!I&&(V!==e[t]||d)&&S(V)},{deep:d}),A}else return k({get(){return h()},set(f){S(f)}})}function Ae(e){return e?e.flatMap(t=>t.type===Je?Ae(t.children):[t]):[]}const rt=["INPUT","TEXTAREA"];function ot(e,t,r,o={}){if(!t||o.enableIgnoredElement&&rt.includes(t.nodeName))return null;const{arrowKeyOptions:a="both",attributeName:n="[data-radix-vue-collection-item]",itemsArray:s=[],loop:l=!0,dir:c="ltr",preventScroll:i=!0,focus:d=!1}=o,[m,v,y,C,g,p]=[e.key==="ArrowRight",e.key==="ArrowLeft",e.key==="ArrowUp",e.key==="ArrowDown",e.key==="Home",e.key==="End"],h=y||C,S=m||v;if(!g&&!p&&(!h&&!S||a==="vertical"&&S||a==="horizontal"&&h))return null;const f=s;if(!f.length)return null;i&&e.preventDefault();let A=null;return S||h?A=ke(f,t,{goForward:h?C:c==="ltr"?m:v,loop:l}):g?A=f.at(0)||null:p&&(A=f.at(-1)||null),d&&(A==null||A.focus()),A}function ke(e,t,r,o=e.length){if(--o===0)return null;const a=e.indexOf(t),n=r.goForward?a+1:a-1;if(!r.loop&&(n<0||n>=e.length))return null;const s=(n+e.length)%e.length,l=e[s];return l?l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"?ke(e,l,r,o):l:null}const[ze,er]=se("ConfigProvider");function nt(e){const t=ze({dir:$("ltr")});return k(()=>{var r;return(e==null?void 0:e.value)||((r=t.dir)==null?void 0:r.value)||"ltr"})}function at(e){const t=X(),r=t==null?void 0:t.type.emits,o={};return r!=null&&r.length||console.warn(`No emitted event found. Please check component: ${t==null?void 0:t.type.__name}`),r==null||r.forEach(a=>{o[Ve(we(a))]=(...n)=>e(a,...n)}),o}function st(e){const t=X(),r=Object.keys((t==null?void 0:t.type.props)??{}).reduce((a,n)=>{const s=(t==null?void 0:t.type.props[n]).default;return s!==void 0&&(a[n]=s),a},{}),o=$e(e);return k(()=>{const a={},n=(t==null?void 0:t.vnode.props)??{};return Object.keys(n).forEach(s=>{a[we(s)]=n[s]}),Object.keys({...r,...a}).reduce((s,l)=>(o.value[l]!==void 0&&(s[l]=o.value[l]),s),{})})}function tr(e,t){const r=st(e),o=t?at(t):{};return k(()=>({...r.value,...o}))}function j(){const e=X(),t=$(),r=k(()=>{var s,l;return["#text","#comment"].includes((s=t.value)==null?void 0:s.$el.nodeName)?(l=t.value)==null?void 0:l.$el.nextElementSibling:Ye(t)}),o=Object.assign({},e.exposed),a={};for(const s in e.props)Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>e.props[s]});if(Object.keys(o).length>0)for(const s in o)Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get:()=>o[s]});Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=a;function n(s){t.value=s,!(s instanceof Element||!s)&&(Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>s.$el}),e.exposed=a)}return{forwardRef:n,currentRef:t,currentElement:r}}let lt=0;function ge(e,t="radix"){const{useId:r}=ze({useId:void 0});return r&&typeof r=="function"?`${t}-${r()}`:`${t}-${++lt}`}function it(){return{ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",SPACE_CODE:"Space"}}const dt=z({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:r}){return()=>{var o,a;if(!r.default)return null;const n=Ae(r.default()),s=n.findIndex(d=>d.type!==je);if(s===-1)return n;const l=n[s];(o=l.props)==null||delete o.ref;const c=l.props?U(t,l.props):t;t.class&&(a=l.props)!=null&&a.class&&delete l.props.class;const i=Ge(l,c);for(const d in c)d.startsWith("on")&&(i.props||(i.props={}),i.props[d]=c[d]);return n.length===1?i:(n[s]=i,n)}}}),F=z({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:r}){const o=e.asChild?"template":e.as;return typeof o=="string"&&["area","img","input"].includes(o)?()=>te(o,t):o!=="template"?()=>te(e.as,t,{default:r.default}):()=>te(dt,t,{default:r.default})}});Te({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});Xe(()=>$([]));const ct=z({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e,r=["horizontal","vertical"];function o(l){return r.includes(l)}const a=k(()=>o(t.orientation)?t.orientation:"horizontal"),n=k(()=>a.value==="vertical"?t.orientation:void 0),s=k(()=>t.decorative?{role:"none"}:{"aria-orientation":n.value,role:"separator"});return(l,c)=>(R(),E(b(F),U({as:l.as,"as-child":l.asChild,"data-orientation":a.value},s.value),{default:_(()=>[P(l.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),ut=z({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e;return(r,o)=>(R(),E(ct,Ce(Se(t)),{default:_(()=>[P(r.$slots,"default")]),_:3},16))}});function pt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}pt();const ft={"aria-live":"polite","aria-atomic":"true",role:"status",style:{transform:"translateX(-100%)",position:"absolute",pointerEvents:"none",opacity:0,margin:0}},[le,bt]=se("StepperRoot"),rr=z({__name:"StepperRoot",props:{defaultValue:{default:1},orientation:{default:"horizontal"},dir:{},modelValue:{},linear:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:t}){const r=e,o=t,{dir:a,orientation:n,linear:s}=xe(r),l=nt(a);j();const c=$(new Set),i=tt(r,"modelValue",o,{defaultValue:r.defaultValue,passive:r.modelValue===void 0}),d=k(()=>Array.from(c.value)),m=k(()=>i.value===1),v=k(()=>i.value===d.value.length),y=k(()=>c.value.size);function C(f){f>y.value||f<1||c.value.size&&d.value[f]&&d.value[f].getAttribute("disabled")||s.value&&f>(i.value??1)+1||(i.value=f)}const g=$(null),p=$(null),h=k(()=>g.value?g.value.getAttribute("disabled")==="":!0),S=k(()=>p.value?p.value.getAttribute("disabled")==="":!0);return Q(i,async()=>{await ne(()=>{g.value=d.value.length&&i.value<d.value.length?d.value[i.value]:null,p.value=d.value.length&&i.value>1?d.value[i.value-2]:null})}),Q(d,async()=>{await ne(()=>{g.value=d.value.length&&i.value<d.value.length?d.value[i.value]:null,p.value=d.value.length&&i.value>1?d.value[i.value-2]:null})}),bt({modelValue:i,changeModelValue:f=>{i.value=f},orientation:n,dir:l,linear:s,totalStepperItems:c}),(f,A)=>(R(),E(b(F),{role:"group","aria-label":"progress",as:f.as,"as-child":f.asChild,"data-linear":b(s)?"":void 0,"data-orientation":f.orientation},{default:_(()=>[P(f.$slots,"default",{modelValue:b(i),totalSteps:c.value.size,isNextDisabled:h.value,isPrevDisabled:S.value,isFirstStep:m.value,isLastStep:v.value,goToStep:C,nextStep:()=>C((b(i)??1)+1),prevStep:()=>C((b(i)??1)-1)}),Ne("div",ft," Step "+oe(b(i))+" of "+oe(c.value.size),1)]),_:3},8,["as","as-child","data-linear","data-orientation"]))}}),[D,gt]=se("StepperItem"),or=z({__name:"StepperItem",props:{step:{},disabled:{type:Boolean,default:!1},completed:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},setup(e){const t=e,{disabled:r,step:o,completed:a}=xe(t),{forwardRef:n}=j(),s=le(),l=ge(void 0,"radix-vue-stepper-item-title"),c=ge(void 0,"radix-vue-stepper-item-description"),i=k(()=>a.value?"completed":s.modelValue.value===o.value?"active":s.modelValue.value>o.value?"completed":"inactive"),d=k(()=>r.value?!1:s.linear.value?o.value<=s.modelValue.value||o.value===s.modelValue.value+1:!0);return gt({titleId:l,descriptionId:c,state:i,disabled:r,step:o,isFocusable:d}),(m,v)=>(R(),E(b(F),{ref:b(n),as:m.as,"as-child":m.asChild,"aria-current":i.value==="active"?"true":void 0,"data-state":i.value,disabled:b(r)||!d.value?"":void 0,"data-disabled":b(r)||!d.value?"":void 0,"data-orientation":b(s).orientation.value},{default:_(()=>[P(m.$slots,"default",{state:i.value})]),_:3},8,["as","as-child","aria-current","data-state","disabled","data-disabled","data-orientation"]))}}),nr=z({__name:"StepperTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=le(),r=D(),o=it(),a=k(()=>Array.from(t.totalStepperItems.value));function n(i){if(!r.disabled.value){if(t.linear.value){if((r.step.value<=t.modelValue.value||r.step.value===t.modelValue.value+1)&&i.ctrlKey===!1){t.changeModelValue(r.step.value);return}}else if(i.ctrlKey===!1){t.changeModelValue(r.step.value);return}i.preventDefault()}}function s(i){i.preventDefault(),!r.disabled.value&&((i.key===o.ENTER||i.key===o.SPACE)&&!i.ctrlKey&&!i.shiftKey&&t.changeModelValue(r.step.value),[o.ARROW_LEFT,o.ARROW_RIGHT,o.ARROW_UP,o.ARROW_DOWN].includes(i.key)&&ot(i,document.activeElement,void 0,{itemsArray:a.value,focus:!0,loop:!1,arrowKeyOptions:t.orientation.value,dir:t.dir.value}))}const{forwardRef:l,currentElement:c}=j();return Be(()=>{t.totalStepperItems.value.add(c.value)}),We(()=>{t.totalStepperItems.value.delete(c.value)}),(i,d)=>(R(),E(b(F),{ref:b(l),type:i.as==="button"?"button":void 0,as:i.as,"as-child":i.asChild,"data-state":b(r).state.value,disabled:b(r).disabled.value||!b(r).isFocusable.value?"":void 0,"data-disabled":b(r).disabled.value||!b(r).isFocusable.value?"":void 0,"data-orientation":b(t).orientation.value,tabindex:b(r).isFocusable.value?0:-1,"aria-describedby":b(r).descriptionId,"aria-labelledby":b(r).titleId,onMousedown:Le(n,["left"]),onKeydown:Ke(s,["enter","space","left","right","up","down"])},{default:_(()=>[P(i.$slots,"default")]),_:3},8,["type","as","as-child","data-state","disabled","data-disabled","data-orientation","tabindex","aria-describedby","aria-labelledby"]))}}),ar=z({__name:"StepperDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(e){const t=e;j();const r=D();return(o,a)=>(R(),E(b(F),U(t,{id:b(r).descriptionId}),{default:_(()=>[P(o.$slots,"default")]),_:3},16,["id"]))}}),sr=z({__name:"StepperTitle",props:{asChild:{type:Boolean},as:{default:"h4"}},setup(e){const t=e,r=D();return j(),(o,a)=>(R(),E(b(F),U(t,{id:b(r).titleId}),{default:_(()=>[P(o.$slots,"default")]),_:3},16,["id"]))}}),lr=z({__name:"StepperIndicator",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e,r=D();return j(),(o,a)=>(R(),E(b(F),Ce(Se(t)),{default:_(()=>[P(o.$slots,"default",{},()=>[Ue(" Step "+oe(b(r).step.value),1)])]),_:3},16))}}),ir=z({__name:"StepperSeparator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e,r=le(),o=D();return j(),(a,n)=>(R(),E(b(ut),U(t,{decorative:"",orientation:b(r).orientation.value,"data-state":b(o).state.value}),{default:_(()=>[P(a.$slots,"default")]),_:3},16,["orientation","data-state"]))}});function Re(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Re(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function mt(){for(var e,t,r=0,o="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Re(e))&&(o&&(o+=" "),o+=t);return o}const ie="-",vt=e=>{const t=yt(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:s=>{const l=s.split(ie);return l[0]===""&&l.length!==1&&l.shift(),Ee(l,t)||ht(s)},getConflictingClassGroupIds:(s,l)=>{const c=r[s]||[];return l&&o[s]?[...c,...o[s]]:c}}},Ee=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),a=o?Ee(e.slice(1),o):void 0;if(a)return a;if(t.validators.length===0)return;const n=e.join(ie);return(s=t.validators.find(({validator:l})=>l(n)))==null?void 0:s.classGroupId},me=/^\[(.+)\]$/,ht=e=>{if(me.test(e)){const t=me.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},yt=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return wt(Object.entries(e.classGroups),r).forEach(([n,s])=>{ae(s,o,n,t)}),o},ae=(e,t,r,o)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?t:ve(t,a);n.classGroupId=r;return}if(typeof a=="function"){if(xt(a)){ae(a(o),t,r,o);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([n,s])=>{ae(s,ve(t,n),r,o)})})},ve=(e,t)=>{let r=e;return t.split(ie).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},xt=e=>e.isThemeGetter,wt=(e,t)=>t?e.map(([r,o])=>{const a=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,l])=>[t+s,l])):n);return[r,a]}):e,Ct=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const a=(n,s)=>{r.set(n,s),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let s=r.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){r.has(n)?r.set(n,s):a(n,s)}}},_e="!",St=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,a=t[0],n=t.length,s=l=>{const c=[];let i=0,d=0,m;for(let p=0;p<l.length;p++){let h=l[p];if(i===0){if(h===a&&(o||l.slice(p,p+n)===t)){c.push(l.slice(d,p)),d=p+n;continue}if(h==="/"){m=p;continue}}h==="["?i++:h==="]"&&i--}const v=c.length===0?l:l.substring(d),y=v.startsWith(_e),C=y?v.substring(1):v,g=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:C,maybePostfixModifierPosition:g}};return r?l=>r({className:l,parseClassName:s}):s},At=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},kt=e=>({cache:Ct(e.cacheSize),parseClassName:St(e),...vt(e)}),zt=/\s+/,Rt=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:a}=t,n=[],s=e.trim().split(zt);let l="";for(let c=s.length-1;c>=0;c-=1){const i=s[c],{modifiers:d,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:y}=r(i);let C=!!y,g=o(C?v.substring(0,y):v);if(!g){if(!C){l=i+(l.length>0?" "+l:l);continue}if(g=o(v),!g){l=i+(l.length>0?" "+l:l);continue}C=!1}const p=At(d).join(":"),h=m?p+_e:p,S=h+g;if(n.includes(S))continue;n.push(S);const f=a(g,C);for(let A=0;A<f.length;++A){const I=f[A];n.push(h+I)}l=i+(l.length>0?" "+l:l)}return l};function Et(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Pe(t))&&(o&&(o+=" "),o+=r);return o}const Pe=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=Pe(e[o]))&&(r&&(r+=" "),r+=t);return r};function _t(e,...t){let r,o,a,n=s;function s(c){const i=t.reduce((d,m)=>m(d),e());return r=kt(i),o=r.cache.get,a=r.cache.set,n=l,l(c)}function l(c){const i=o(c);if(i)return i;const d=Rt(c,r);return a(c,d),d}return function(){return n(Et.apply(null,arguments))}}const x=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Ie=/^\[(?:([a-z-]+):)?(.+)\]$/i,Pt=/^\d+\/\d+$/,It=new Set(["px","full","screen"]),Ot=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Tt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Nt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ft=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>G(e)||It.has(e)||Pt.test(e),T=e=>B(e,"length",Kt),G=e=>!!e&&!Number.isNaN(Number(e)),re=e=>B(e,"number",G),L=e=>!!e&&Number.isInteger(Number(e)),Vt=e=>e.endsWith("%")&&G(e.slice(0,-1)),u=e=>Ie.test(e),N=e=>Ot.test(e),$t=new Set(["length","size","percentage"]),jt=e=>B(e,$t,Oe),Gt=e=>B(e,"position",Oe),Bt=new Set(["image","url"]),Wt=e=>B(e,Bt,Dt),Lt=e=>B(e,"",Ut),K=()=>!0,B=(e,t,r)=>{const o=Ie.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},Kt=e=>Mt.test(e)&&!Tt.test(e),Oe=()=>!1,Ut=e=>Nt.test(e),Dt=e=>Ft.test(e),Ht=()=>{const e=x("colors"),t=x("spacing"),r=x("blur"),o=x("brightness"),a=x("borderColor"),n=x("borderRadius"),s=x("borderSpacing"),l=x("borderWidth"),c=x("contrast"),i=x("grayscale"),d=x("hueRotate"),m=x("invert"),v=x("gap"),y=x("gradientColorStops"),C=x("gradientColorStopPositions"),g=x("inset"),p=x("margin"),h=x("opacity"),S=x("padding"),f=x("saturate"),A=x("scale"),I=x("sepia"),V=x("skew"),de=x("space"),ce=x("translate"),q=()=>["auto","contain","none"],Z=()=>["auto","hidden","clip","visible","scroll"],Y=()=>["auto",u,t],w=()=>[u,t],ue=()=>["",M,T],H=()=>["auto",G,u],pe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],J=()=>["solid","dashed","dotted","double","none"],fe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>["start","end","center","between","around","evenly","stretch"],W=()=>["","0",u],be=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>[G,u];return{cacheSize:500,separator:":",theme:{colors:[K],spacing:[M,T],blur:["none","",N,u],brightness:O(),borderColor:[e],borderRadius:["none","","full",N,u],borderSpacing:w(),borderWidth:ue(),contrast:O(),grayscale:W(),hueRotate:O(),invert:W(),gap:w(),gradientColorStops:[e],gradientColorStopPositions:[Vt,T],inset:Y(),margin:Y(),opacity:O(),padding:w(),saturate:O(),scale:O(),sepia:W(),skew:O(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",u]}],container:["container"],columns:[{columns:[N]}],"break-after":[{"break-after":be()}],"break-before":[{"break-before":be()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...pe(),u]}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,u]}],basis:[{basis:Y()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",u]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",L,u]}],"grid-cols":[{"grid-cols":[K]}],"col-start-end":[{col:["auto",{span:["full",L,u]},u]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[K]}],"row-start-end":[{row:["auto",{span:[L,u]},u]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",u]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",u]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...ee()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ee(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ee(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[de]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[de]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",u,t]}],"min-w":[{"min-w":[u,t,"min","max","fit"]}],"max-w":[{"max-w":[u,t,"none","full","min","max","fit","prose",{screen:[N]},N]}],h:[{h:[u,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[u,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[u,t,"auto","min","max","fit"]}],"font-size":[{text:["base",N,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[K]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",u]}],"line-clamp":[{"line-clamp":["none",G,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,u]}],"list-image":[{"list-image":["none",u]}],"list-style-type":[{list:["none","disc","decimal",u]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,T]}],"underline-offset":[{"underline-offset":["auto",M,u]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",u]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",u]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...pe(),Gt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",jt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Wt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...J(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:J()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...J()]}],"outline-offset":[{"outline-offset":[M,u]}],"outline-w":[{outline:[M,T]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[M,T]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",N,Lt]}],"shadow-color":[{shadow:[K]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...fe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":fe()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",N,u]}],grayscale:[{grayscale:[i]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[f]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[i]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[f]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",u]}],duration:[{duration:O()}],ease:[{ease:["linear","in","out","in-out",u]}],delay:[{delay:O()}],animate:[{animate:["none","spin","ping","pulse","bounce",u]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[L,u]}],"translate-x":[{"translate-x":[ce]}],"translate-y":[{"translate-y":[ce]}],"skew-x":[{"skew-x":[V]}],"skew-y":[{"skew-y":[V]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",u]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",u]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",u]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,T,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Jt=_t(Ht);function Qt(...e){return Jt(mt(e))}function Me(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Me(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Xt(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=Me(e))&&(o&&(o+=" "),o+=t);return o}const he=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ye=Xt,qt=(e,t)=>r=>{var o;if((t==null?void 0:t.variants)==null)return ye(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:a,defaultVariants:n}=t,s=Object.keys(a).map(i=>{const d=r==null?void 0:r[i],m=n==null?void 0:n[i];if(d===null)return null;const v=he(d)||he(m);return a[i][v]}),l=r&&Object.entries(r).reduce((i,d)=>{let[m,v]=d;return v===void 0||(i[m]=v),i},{}),c=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((i,d)=>{let{class:m,className:v,...y}=d;return Object.entries(y).every(C=>{let[g,p]=C;return Array.isArray(p)?p.includes({...n,...l}[g]):{...n,...l}[g]===p})?[...i,m,v]:i},[]);return ye(e,s,c,r==null?void 0:r.class,r==null?void 0:r.className)},dr=z({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e;return(r,o)=>(R(),E(b(F),{as:r.as,"as-child":r.asChild,class:Qe(b(Qt)(b(Zt)({variant:r.variant,size:r.size}),t.class))},{default:_(()=>[P(r.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),Zt=qt("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{st as I,dr as _,rr as a,Qt as c,ir as i,ar as l,or as n,nr as o,lr as r,sr as s,tr as x};
