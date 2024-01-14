import{j as R,b as Ge}from"./index.5zNK-FcK.js";import{r as s,m as S,e as Te}from"./index.ArZaGh9N.js";var We=Object.defineProperty,Xe=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,le=(e,t,r)=>(Xe(e,typeof t!="symbol"?t+"":t,r),r);let Ye=class{constructor(){le(this,"current",this.detect()),le(this,"handoffState","pending"),le(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},k=new Ye,N=(e,t)=>{k.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function O(e){let t=s.useRef(e);return N(()=>{t.current=e},[e]),t}let y=function(e){let t=O(e);return S.useCallback((...r)=>t.current(...r),[t])};function Je(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function D(){let e=[],t={addEventListener(r,n,i,o){return r.addEventListener(n,i,o),t.add(()=>r.removeEventListener(n,i,o))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Je(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,i){let o=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:i}),this.add(()=>{Object.assign(r.style,{[n]:o})})},group(r){let n=D();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let i of e.splice(n,1))i()}},dispose(){for(let r of e.splice(0))r()}};return t}function Z(){let[e]=s.useState(D);return s.useEffect(()=>()=>e.dispose(),[e]),e}function Ze(){let e=typeof document>"u";return"useSyncExternalStore"in Te?(t=>t.useSyncExternalStore)(Te)(()=>()=>{},()=>!1,()=>!e):!1}function ge(){let e=Ze(),[t,r]=s.useState(k.isHandoffComplete);return t&&k.isHandoffComplete===!1&&r(!1),s.useEffect(()=>{t!==!0&&r(!0)},[t]),s.useEffect(()=>k.handoff(),[]),e?!1:t}var Re;let he=(Re=S.useId)!=null?Re:function(){let e=ge(),[t,r]=S.useState(e?()=>k.nextId():null);return N(()=>{t===null&&r(k.nextId())},[t]),t!=null?""+t:void 0};function F(e,t,...r){if(e in t){let i=t[e];return typeof i=="function"?i(...r):i}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,F),n}function ee(e){return k.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let me=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var pe=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(pe||{}),et=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(et||{}),tt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tt||{});function Le(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(me)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var be=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(be||{});function ye(e,t=0){var r;return e===((r=ee(e))==null?void 0:r.body)?!1:F(t,{0(){return e.matches(me)},1(){let n=e;for(;n!==null;){if(n.matches(me))return!0;n=n.parentElement}return!1}})}function Oe(e){let t=ee(e);D().nextFrame(()=>{t&&!ye(t.activeElement,0)&&nt(e)})}var rt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(rt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function nt(e){e?.focus({preventScroll:!0})}let it=["textarea","input"].join(",");function ot(e){var t,r;return(r=(t=e?.matches)==null?void 0:t.call(e,it))!=null?r:!1}function ke(e,t=r=>r){return e.slice().sort((r,n)=>{let i=t(r),o=t(n);if(i===null||o===null)return 0;let u=i.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ut(e,t){return at(Le(),t,{relativeTo:e})}function at(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:i=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?r?ke(e):e:Le(e);i.length>0&&u.length>1&&(u=u.filter(h=>!i.includes(h))),n=n??o.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,m=u.length,g;do{if(c>=m||c+m<=0)return 0;let h=l+c;if(t&16)h=(h+m)%m;else{if(h<0)return 3;if(h>=m)return 1}g=u[h],g?.focus(d),c+=a}while(g!==o.activeElement);return t&6&&ot(g)&&g.select(),2}function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function st(){return/Android/gi.test(window.navigator.userAgent)}function ct(){return lt()||st()}function G(e,t,r){let n=O(t);s.useEffect(()=>{function i(o){n.current(o)}return document.addEventListener(e,i,r),()=>document.removeEventListener(e,i,r)},[e,r])}function dt(e,t,r){let n=O(t);s.useEffect(()=>{function i(o){n.current(o)}return window.addEventListener(e,i,r),()=>window.removeEventListener(e,i,r)},[e,r])}function ft(e,t,r=!0){let n=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function i(u,a){if(!n.current||u.defaultPrevented)return;let l=a(u);if(l===null||!l.getRootNode().contains(l)||!l.isConnected)return;let d=function c(m){return typeof m=="function"?c(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e);for(let c of d){if(c===null)continue;let m=c instanceof HTMLElement?c:c.current;if(m!=null&&m.contains(l)||u.composed&&u.composedPath().includes(m))return}return!ye(l,be.Loose)&&l.tabIndex!==-1&&u.preventDefault(),t(u,l)}let o=s.useRef(null);G("pointerdown",u=>{var a,l;n.current&&(o.current=((l=(a=u.composedPath)==null?void 0:a.call(u))==null?void 0:l[0])||u.target)},!0),G("mousedown",u=>{var a,l;n.current&&(o.current=((l=(a=u.composedPath)==null?void 0:a.call(u))==null?void 0:l[0])||u.target)},!0),G("click",u=>{ct()||o.current&&(i(u,()=>o.current),o.current=null)},!0),G("touchend",u=>i(u,()=>u.target instanceof HTMLElement?u.target:null),!0),dt("blur",u=>i(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function mt(...e){return s.useMemo(()=>ee(...e),[...e])}function Ne(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function pt(e,t){let[r,n]=s.useState(()=>Ne(e));return N(()=>{n(Ne(e))},[e.type,e.as]),N(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}let vt=Symbol();function _(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let r=y(n=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(n):i.current=n)});return e.every(n=>n==null||n?.[vt])?void 0:r}function Pe(e){return[e.screenX,e.screenY]}function gt(){let e=s.useRef([-1,-1]);return{wasMoved(t){let r=Pe(t);return e.current[0]===r[0]&&e.current[1]===r[1]?!1:(e.current=r,!0)},update(t){e.current=Pe(t)}}}function ht({container:e,accept:t,walk:r,enabled:n=!0}){let i=s.useRef(t),o=s.useRef(r);s.useEffect(()=>{i.current=t,o.current=r},[t,r]),N(()=>{if(!e||!n)return;let u=ee(e);if(!u)return;let a=i.current,l=o.current,d=Object.assign(m=>a(m),{acceptNode:a}),c=u.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;c.nextNode();)l(c.currentNode)},[e,n,i,o])}function Y(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var J=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(J||{}),L=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(L||{});function B({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:i,visible:o=!0,name:u,mergeRefs:a}){a=a??bt;let l=je(t,e);if(o)return W(l,r,n,u,a);let d=i??0;if(d&2){let{static:c=!1,...m}=l;if(c)return W(m,r,n,u,a)}if(d&1){let{unmount:c=!0,...m}=l;return F(c?0:1,{0(){return null},1(){return W({...m,hidden:!0,style:{display:"none"}},r,n,u,a)}})}return W(l,r,n,u,a)}function W(e,t={},r,n,i){let{as:o=r,children:u,refName:a="ref",...l}=se(e,["unmount","static"]),d=e.ref!==void 0?{[a]:e.ref}:{},c=typeof u=="function"?u(t):u;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let m={};if(t){let g=!1,h=[];for(let[b,f]of Object.entries(t))typeof f=="boolean"&&(g=!0),f===!0&&h.push(b);g&&(m["data-headlessui-state"]=h.join(" "))}if(o===s.Fragment&&Object.keys($e(l)).length>0){if(!s.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let g=c.props,h=typeof g?.className=="function"?(...f)=>Y(g?.className(...f),l.className):Y(g?.className,l.className),b=h?{className:h}:{};return s.cloneElement(c,Object.assign({},je(c.props,$e(se(l,["ref"]))),m,d,{ref:i(c.ref,d.ref)},b))}return s.createElement(o,Object.assign({},se(l,["ref"]),o!==s.Fragment&&d,o!==s.Fragment&&m),c)}function bt(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function je(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let i in n)i.startsWith("on")&&typeof n[i]=="function"?(r[i]!=null||(r[i]=[]),r[i].push(n[i])):t[i]=n[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](i,...o){let u=r[n];for(let a of u){if((i instanceof Event||i?.nativeEvent instanceof Event)&&i.defaultPrevented)return;a(i,...o)}}});return t}function j(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function $e(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function se(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let Ee=s.createContext(null);Ee.displayName="OpenClosedContext";var I=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(I||{});function xe(){return s.useContext(Ee)}function He({value:e,children:t}){return S.createElement(Ee.Provider,{value:e},t)}function yt(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=t?.getAttribute("disabled")==="";return n&&Et(r)?!1:n}function Et(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function xt(e){throw new Error("Unexpected object: "+e)}var M=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(M||{});function wt(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),i=n??-1;switch(e.focus){case 0:{for(let o=0;o<r.length;++o)if(!t.resolveDisabled(r[o],o,r))return o;return n}case 1:{for(let o=i-1;o>=0;--o)if(!t.resolveDisabled(r[o],o,r))return o;return n}case 2:{for(let o=i+1;o<r.length;++o)if(!t.resolveDisabled(r[o],o,r))return o;return n}case 3:{for(let o=r.length-1;o>=0;--o)if(!t.resolveDisabled(r[o],o,r))return o;return n}case 4:{for(let o=0;o<r.length;++o)if(t.resolveId(r[o],o,r)===e.id)return o;return n}case 5:return null;default:xt(e)}}var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{});function we(){let e=s.useRef(!1);return N(()=>(e.current=!0,()=>{e.current=!1}),[]),e}let Me=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function De(e){var t,r;let n=(t=e.innerText)!=null?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return n;let o=!1;for(let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),o=!0;let u=o?(r=i.innerText)!=null?r:"":n;return Me.test(u)&&(u=u.replace(Me,"")),u}function St(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let n=r.split(" ").map(i=>{let o=document.getElementById(i);if(o){let u=o.getAttribute("aria-label");return typeof u=="string"?u.trim():De(o).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return De(e).trim()}function It(e){let t=s.useRef(""),r=s.useRef("");return y(()=>{let n=e.current;if(!n)return"";let i=n.innerText;if(t.current===i)return r.current;let o=St(n).trim().toLowerCase();return t.current=i,r.current=o,o})}var Ft=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ft||{}),Tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Tt||{}),Rt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Rt||{});function ce(e,t=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=ke(t(e.items.slice()),o=>o.dataRef.current.domRef.current),i=r?n.indexOf(r):null;return i===-1&&(i=null),{items:n,activeItemIndex:i}}let Nt={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,t)=>{var r;let n=ce(e),i=wt(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:i,activationTrigger:(r=t.trigger)!=null?r:1}},3:(e,t)=>{let r=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),i=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(u=>{var a;return((a=u.dataRef.current.textValue)==null?void 0:a.startsWith(n))&&!u.dataRef.current.disabled}),o=i?e.items.indexOf(i):-1;return o===-1||o===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:o,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,t)=>{let r=ce(e,n=>[...n,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},6:(e,t)=>{let r=ce(e,n=>{let i=n.findIndex(o=>o.id===t.id);return i!==-1&&n.splice(i,1),n});return{...e,...r,activationTrigger:1}}},Se=s.createContext(null);Se.displayName="MenuContext";function te(e){let t=s.useContext(Se);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,te),r}return t}function Pt(e,t){return F(t.type,Nt,e,t)}let $t=s.Fragment;function Mt(e,t){let{__demoMode:r=!1,...n}=e,i=s.useReducer(Pt,{__demoMode:r,menuState:r?0:1,buttonRef:s.createRef(),itemsRef:s.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:u,buttonRef:a},l]=i,d=_(t);ft([a,u],(h,b)=>{var f;l({type:1}),ye(b,be.Loose)||(h.preventDefault(),(f=a.current)==null||f.focus())},o===0);let c=y(()=>{l({type:1})}),m=s.useMemo(()=>({open:o===0,close:c}),[o,c]),g={ref:d};return S.createElement(Se.Provider,{value:i},S.createElement(He,{value:F(o,{0:I.Open,1:I.Closed})},B({ourProps:g,theirProps:n,slot:m,defaultTag:$t,name:"Menu"})))}let Dt="button";function At(e,t){var r;let n=he(),{id:i=`headlessui-menu-button-${n}`,...o}=e,[u,a]=te("Menu.Button"),l=_(u.buttonRef,t),d=Z(),c=y(f=>{switch(f.key){case w.Space:case w.Enter:case w.ArrowDown:f.preventDefault(),f.stopPropagation(),a({type:0}),d.nextFrame(()=>a({type:2,focus:M.First}));break;case w.ArrowUp:f.preventDefault(),f.stopPropagation(),a({type:0}),d.nextFrame(()=>a({type:2,focus:M.Last}));break}}),m=y(f=>{switch(f.key){case w.Space:f.preventDefault();break}}),g=y(f=>{if(yt(f.currentTarget))return f.preventDefault();e.disabled||(u.menuState===0?(a({type:1}),d.nextFrame(()=>{var v;return(v=u.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})})):(f.preventDefault(),a({type:0})))}),h=s.useMemo(()=>({open:u.menuState===0}),[u]),b={ref:l,id:i,type:pt(e,u.buttonRef),"aria-haspopup":"menu","aria-controls":(r=u.itemsRef.current)==null?void 0:r.id,"aria-expanded":u.menuState===0,onKeyDown:c,onKeyUp:m,onClick:g};return B({ourProps:b,theirProps:o,slot:h,defaultTag:Dt,name:"Menu.Button"})}let Ct="div",Lt=J.RenderStrategy|J.Static;function Ot(e,t){var r,n;let i=he(),{id:o=`headlessui-menu-items-${i}`,...u}=e,[a,l]=te("Menu.Items"),d=_(a.itemsRef,t),c=mt(a.itemsRef),m=Z(),g=xe(),h=g!==null?(g&I.Open)===I.Open:a.menuState===0;s.useEffect(()=>{let p=a.itemsRef.current;p&&a.menuState===0&&p!==c?.activeElement&&p.focus({preventScroll:!0})},[a.menuState,a.itemsRef,c]),ht({container:a.itemsRef.current,enabled:a.menuState===0,accept(p){return p.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let b=y(p=>{var E,T;switch(m.dispose(),p.key){case w.Space:if(a.searchQuery!=="")return p.preventDefault(),p.stopPropagation(),l({type:3,value:p.key});case w.Enter:if(p.preventDefault(),p.stopPropagation(),l({type:1}),a.activeItemIndex!==null){let{dataRef:x}=a.items[a.activeItemIndex];(T=(E=x.current)==null?void 0:E.domRef.current)==null||T.click()}Oe(a.buttonRef.current);break;case w.ArrowDown:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:M.Next});case w.ArrowUp:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:M.Previous});case w.Home:case w.PageUp:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:M.First});case w.End:case w.PageDown:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:M.Last});case w.Escape:p.preventDefault(),p.stopPropagation(),l({type:1}),D().nextFrame(()=>{var x;return(x=a.buttonRef.current)==null?void 0:x.focus({preventScroll:!0})});break;case w.Tab:p.preventDefault(),p.stopPropagation(),l({type:1}),D().nextFrame(()=>{ut(a.buttonRef.current,p.shiftKey?pe.Previous:pe.Next)});break;default:p.key.length===1&&(l({type:3,value:p.key}),m.setTimeout(()=>l({type:4}),350));break}}),f=y(p=>{switch(p.key){case w.Space:p.preventDefault();break}}),v=s.useMemo(()=>({open:a.menuState===0}),[a]),P={"aria-activedescendant":a.activeItemIndex===null||(r=a.items[a.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(n=a.buttonRef.current)==null?void 0:n.id,id:o,onKeyDown:b,onKeyUp:f,role:"menu",tabIndex:0,ref:d};return B({ourProps:P,theirProps:u,slot:v,defaultTag:Ct,features:Lt,visible:h,name:"Menu.Items"})}let kt=s.Fragment;function jt(e,t){let r=he(),{id:n=`headlessui-menu-item-${r}`,disabled:i=!1,...o}=e,[u,a]=te("Menu.Item"),l=u.activeItemIndex!==null?u.items[u.activeItemIndex].id===n:!1,d=s.useRef(null),c=_(t,d);N(()=>{if(u.__demoMode||u.menuState!==0||!l||u.activationTrigger===0)return;let x=D();return x.requestAnimationFrame(()=>{var $,H;(H=($=d.current)==null?void 0:$.scrollIntoView)==null||H.call($,{block:"nearest"})}),x.dispose},[u.__demoMode,d,l,u.menuState,u.activationTrigger,u.activeItemIndex]);let m=It(d),g=s.useRef({disabled:i,domRef:d,get textValue(){return m()}});N(()=>{g.current.disabled=i},[g,i]),N(()=>(a({type:5,id:n,dataRef:g}),()=>a({type:6,id:n})),[g,n]);let h=y(()=>{a({type:1})}),b=y(x=>{if(i)return x.preventDefault();a({type:1}),Oe(u.buttonRef.current)}),f=y(()=>{if(i)return a({type:2,focus:M.Nothing});a({type:2,focus:M.Specific,id:n})}),v=gt(),P=y(x=>v.update(x)),p=y(x=>{v.wasMoved(x)&&(i||l||a({type:2,focus:M.Specific,id:n,trigger:0}))}),E=y(x=>{v.wasMoved(x)&&(i||l&&a({type:2,focus:M.Nothing}))}),T=s.useMemo(()=>({active:l,disabled:i,close:h}),[l,i,h]);return B({ourProps:{id:n,ref:c,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:b,onFocus:f,onPointerEnter:P,onMouseEnter:P,onPointerMove:p,onMouseMove:p,onPointerLeave:E,onMouseLeave:E},theirProps:o,slot:T,defaultTag:kt,name:"Menu.Item"})}let Ht=j(Mt),Ut=j(At),_t=j(Ot),Bt=j(jt),X=Object.assign(Ht,{Button:Ut,Items:_t,Item:Bt});function qt(e=0){let[t,r]=s.useState(e),n=we(),i=s.useCallback(l=>{n.current&&r(d=>d|l)},[t,n]),o=s.useCallback(l=>!!(t&l),[t]),u=s.useCallback(l=>{n.current&&r(d=>d&~l)},[r,n]),a=s.useCallback(l=>{n.current&&r(d=>d^l)},[r]);return{flags:t,addFlag:i,hasFlag:o,removeFlag:u,toggleFlag:a}}function Kt(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function de(e,...t){e&&t.length>0&&e.classList.add(...t)}function fe(e,...t){e&&t.length>0&&e.classList.remove(...t)}function zt(e,t){let r=D();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:i}=getComputedStyle(e),[o,u]=[n,i].map(l=>{let[d=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,m)=>m-c);return d}),a=o+u;if(a!==0){r.group(d=>{d.setTimeout(()=>{t(),d.dispose()},a),d.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&d.dispose()})});let l=r.addEventListener(e,"transitionend",d=>{d.target===d.currentTarget&&(t(),l())})}else t();return r.add(()=>t()),r.dispose}function Qt(e,t,r,n){let i=r?"enter":"leave",o=D(),u=n!==void 0?Kt(n):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=F(i,{enter:()=>t.enter,leave:()=>t.leave}),l=F(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),d=F(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return fe(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),de(e,...t.base,...a,...d),o.nextFrame(()=>{fe(e,...t.base,...a,...d),de(e,...t.base,...a,...l),zt(e,()=>(fe(e,...t.base,...a),de(e,...t.base,...t.entered),u()))}),o.dispose}function Vt({immediate:e,container:t,direction:r,classes:n,onStart:i,onStop:o}){let u=we(),a=Z(),l=O(r);N(()=>{e&&(l.current="enter")},[e]),N(()=>{let d=D();a.add(d.dispose);let c=t.current;if(c&&l.current!=="idle"&&u.current)return d.dispose(),i.current(l.current),d.add(Qt(c,n.current,l.current==="enter",()=>{d.dispose(),o.current(l.current)})),d.dispose},[r])}function C(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let re=s.createContext(null);re.displayName="TransitionContext";var Gt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Gt||{});function Wt(){let e=s.useContext(re);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Xt(){let e=s.useContext(ne);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let ne=s.createContext(null);ne.displayName="NestingContext";function ie(e){return"children"in e?ie(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Ue(e,t){let r=O(e),n=s.useRef([]),i=we(),o=Z(),u=y((h,b=L.Hidden)=>{let f=n.current.findIndex(({el:v})=>v===h);f!==-1&&(F(b,{[L.Unmount](){n.current.splice(f,1)},[L.Hidden](){n.current[f].state="hidden"}}),o.microTask(()=>{var v;!ie(n)&&i.current&&((v=r.current)==null||v.call(r))}))}),a=y(h=>{let b=n.current.find(({el:f})=>f===h);return b?b.state!=="visible"&&(b.state="visible"):n.current.push({el:h,state:"visible"}),()=>u(h,L.Unmount)}),l=s.useRef([]),d=s.useRef(Promise.resolve()),c=s.useRef({enter:[],leave:[],idle:[]}),m=y((h,b,f)=>{l.current.splice(0),t&&(t.chains.current[b]=t.chains.current[b].filter(([v])=>v!==h)),t?.chains.current[b].push([h,new Promise(v=>{l.current.push(v)})]),t?.chains.current[b].push([h,new Promise(v=>{Promise.all(c.current[b].map(([P,p])=>p)).then(()=>v())})]),b==="enter"?d.current=d.current.then(()=>t?.wait.current).then(()=>f(b)):f(b)}),g=y((h,b,f)=>{Promise.all(c.current[b].splice(0).map(([v,P])=>P)).then(()=>{var v;(v=l.current.shift())==null||v()}).then(()=>f(b))});return s.useMemo(()=>({children:n,register:a,unregister:u,onStart:m,onStop:g,wait:d,chains:c}),[a,u,n,m,g,c,d])}function Yt(){}let Jt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Ae(e){var t;let r={};for(let n of Jt)r[n]=(t=e[n])!=null?t:Yt;return r}function Zt(e){let t=s.useRef(Ae(e));return s.useEffect(()=>{t.current=Ae(e)},[e]),t}let er="div",_e=J.RenderStrategy;function tr(e,t){var r,n;let{beforeEnter:i,afterEnter:o,beforeLeave:u,afterLeave:a,enter:l,enterFrom:d,enterTo:c,entered:m,leave:g,leaveFrom:h,leaveTo:b,...f}=e,v=s.useRef(null),P=_(v,t),p=(r=f.unmount)==null||r?L.Unmount:L.Hidden,{show:E,appear:T,initial:x}=Wt(),[$,H]=s.useState(E?"visible":"hidden"),Ie=Xt(),{register:K,unregister:z}=Ie;s.useEffect(()=>K(v),[K,v]),s.useEffect(()=>{if(p===L.Hidden&&v.current){if(E&&$!=="visible"){H("visible");return}return F($,{hidden:()=>z(v),visible:()=>K(v)})}},[$,v,K,z,E,p]);let oe=O({base:C(f.className),enter:C(l),enterFrom:C(d),enterTo:C(c),entered:C(m),leave:C(g),leaveFrom:C(h),leaveTo:C(b)}),Q=Zt({beforeEnter:i,afterEnter:o,beforeLeave:u,afterLeave:a}),ue=ge();s.useEffect(()=>{if(ue&&$==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,$,ue]);let qe=x&&!T,Fe=T&&E&&x,Ke=!ue||qe?"idle":E?"enter":"leave",q=qt(0),ze=y(A=>F(A,{enter:()=>{q.addFlag(I.Opening),Q.current.beforeEnter()},leave:()=>{q.addFlag(I.Closing),Q.current.beforeLeave()},idle:()=>{}})),Qe=y(A=>F(A,{enter:()=>{q.removeFlag(I.Opening),Q.current.afterEnter()},leave:()=>{q.removeFlag(I.Closing),Q.current.afterLeave()},idle:()=>{}})),V=Ue(()=>{H("hidden"),z(v)},Ie),ae=s.useRef(!1);Vt({immediate:Fe,container:v,classes:oe,direction:Ke,onStart:O(A=>{ae.current=!0,V.onStart(v,A,ze)}),onStop:O(A=>{ae.current=!1,V.onStop(v,A,Qe),A==="leave"&&!ie(V)&&(H("hidden"),z(v))})});let U=f,Ve={ref:P};return Fe?U={...U,className:Y(f.className,...oe.current.enter,...oe.current.enterFrom)}:ae.current&&(U.className=Y(f.className,(n=v.current)==null?void 0:n.className),U.className===""&&delete U.className),S.createElement(ne.Provider,{value:V},S.createElement(He,{value:F($,{visible:I.Open,hidden:I.Closed})|q.flags},B({ourProps:Ve,theirProps:U,defaultTag:er,features:_e,visible:$==="visible",name:"Transition.Child"})))}function rr(e,t){let{show:r,appear:n=!1,unmount:i=!0,...o}=e,u=s.useRef(null),a=_(u,t);ge();let l=xe();if(r===void 0&&l!==null&&(r=(l&I.Open)===I.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,c]=s.useState(r?"visible":"hidden"),m=Ue(()=>{c("hidden")}),[g,h]=s.useState(!0),b=s.useRef([r]);N(()=>{g!==!1&&b.current[b.current.length-1]!==r&&(b.current.push(r),h(!1))},[b,r]);let f=s.useMemo(()=>({show:r,appear:n,initial:g}),[r,n,g]);s.useEffect(()=>{if(r)c("visible");else if(!ie(m))c("hidden");else{let E=u.current;if(!E)return;let T=E.getBoundingClientRect();T.x===0&&T.y===0&&T.width===0&&T.height===0&&c("hidden")}},[r,m]);let v={unmount:i},P=y(()=>{var E;g&&h(!1),(E=e.beforeEnter)==null||E.call(e)}),p=y(()=>{var E;g&&h(!1),(E=e.beforeLeave)==null||E.call(e)});return S.createElement(ne.Provider,{value:m},S.createElement(re.Provider,{value:f},B({ourProps:{...v,as:s.Fragment,children:S.createElement(Be,{ref:a,...v,...o,beforeEnter:P,beforeLeave:p})},theirProps:{},defaultTag:s.Fragment,features:_e,visible:d==="visible",name:"Transition"})))}function nr(e,t){let r=s.useContext(re)!==null,n=xe()!==null;return S.createElement(S.Fragment,null,!r&&n?S.createElement(ve,{ref:t,...e}):S.createElement(Be,{ref:t,...e}))}let ve=j(rr),Be=j(tr),ir=j(nr),or=Object.assign(ve,{Child:ir,Root:ve});function ur(...e){return e.filter(Boolean).join(" ")}function Ce({href:e,children:t}){return R.jsx(X.Item,{children:({active:r})=>R.jsx("a",{href:e,className:ur(r?"bg-purple-200 dark:bg-zinc-700":"","block px-4 py-2 text-sm"),children:t})})}function cr(){return R.jsxs(X,{as:"div",className:"relative inline-block text-left",children:[R.jsx("div",{className:"inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-purple-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all","aria-label":"menu",children:R.jsx(X.Button,{children:R.jsx(Ge,{className:"h-5 w-5"})})}),R.jsx(or,{as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 sclae-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:R.jsx(X.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-purple-50 dark:bg-zinc-800 shadow-xl ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700",children:R.jsxs("div",{className:"py-1",children:[R.jsx("div",{className:"px-3 py-2 uppercase font-bold text-xs",children:"Categories"}),R.jsx(Ce,{href:"/uses/categories/computador",children:"Computador"}),R.jsx(Ce,{href:"/uses/categories/perifericos",children:"Periféricos"})]})})})]})}export{cr as default};