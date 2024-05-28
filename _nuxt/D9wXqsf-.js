import{_ as F}from"./v7XK3jXD.js";import{h as $,q as d,f as b,x as P,i as Y,D as j,R as V,F as A,o as C,g as K,w as v,a as h,y as w,j as _,m as O,c as R,b as c,d as q}from"./BFfYl9YF.js";import{I as H,E as M,A as z,T as G,a as S,o as J}from"./CYDPBP1E.js";import{s as Q}from"./DAGl8cS6.js";import{f as W,u as X}from"./i0EPXsUR.js";import{_ as Z,a as ee}from"./BUeE8yqH.js";import"./DlAUqK2U.js";import"./DYekaqMq.js";function te(l,n,o){let a=$(o==null?void 0:o.value),e=d(()=>l.value!==void 0);return[d(()=>e.value?l.value:a.value),function(u){return e.value||(a.value=u),n==null?void 0:n(u)}]}function le(l){var n,o;let a=(n=l==null?void 0:l.form)!=null?n:l.closest("form");if(a){for(let e of a.elements)if(e!==l&&(e.tagName==="INPUT"&&e.type==="submit"||e.tagName==="BUTTON"&&e.type==="submit"||e.nodeName==="INPUT"&&e.type==="image")){e.click();return}(o=a.requestSubmit)==null||o.call(a)}}let ae=Symbol("GroupContext"),ne=b({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(l,{emit:n,attrs:o,slots:a,expose:e}){var u;let p=(u=l.id)!=null?u:`headlessui-switch-${H()}`,r=P(ae,null),[s,y]=te(d(()=>l.modelValue),t=>n("update:modelValue",t),d(()=>l.defaultChecked));function g(){y(!s.value)}let B=$(null),m=r===null?B:r.switchRef,N=Q(d(()=>({as:l.as,type:o.type})),m);e({el:m,$el:m});function T(t){t.preventDefault(),g()}function D(t){t.key===S.Space?(t.preventDefault(),g()):t.key===S.Enter&&le(t.currentTarget)}function I(t){t.preventDefault()}let f=d(()=>{var t,i;return(i=(t=J(m))==null?void 0:t.closest)==null?void 0:i.call(t,"form")});return Y(()=>{j([f],()=>{if(!f.value||l.defaultChecked===void 0)return;function t(){y(l.defaultChecked)}return f.value.addEventListener("reset",t),()=>{var i;(i=f.value)==null||i.removeEventListener("reset",t)}},{immediate:!0})}),()=>{let{name:t,value:i,form:E,tabIndex:k,...x}=l,U={checked:s.value},L={id:p,ref:m,role:"switch",type:N.value,tabIndex:k===-1?0:k,"aria-checked":s.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:T,onKeyup:D,onKeypress:I};return V(A,[t!=null&&s.value!=null?V(W,M({features:X.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:s.value,form:E,disabled:x.disabled,name:t,value:i})):null,z({ourProps:L,theirProps:{...o,...G(x,["modelValue","defaultChecked"])},slot:U,attrs:o,slots:a,name:"Switch"})])}}});const oe=h("span",{class:"sr-only"},"Use setting",-1),ue=b({__name:"YlfSwitch",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:n}){const o=n;function a(e){o("update:modelValue",e)}return(e,u)=>(C(),K(_(ne),{"model-value":e.modelValue,class:w([e.modelValue?"bg-blue-600":"bg-gray","relative h-6 w-11 inline-flex shrink-0 cursor-pointer border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"]),"onUpdate:modelValue":a},{default:v(()=>[oe,h("span",{"aria-hidden":"true",class:w([e.modelValue?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"])},null,2)]),_:1},8,["model-value","class"]))}}),re={class:"mx-auto max-w-md w-full","px-2":"","text-left":""},_e=b({__name:"settings",setup(l){const n=O();return(o,a)=>{const e=F,u=ue,p=Z,r=ee;return C(),R("div",null,[c(e,null,{default:v(()=>[q(" 设置 ")]),_:1}),h("div",re,[c(r,null,{default:v(()=>[c(p,{label:"离开网页后保留选中数据"},{default:v(()=>[c(u,{modelValue:_(n).settings.keepLocalData,"onUpdate:modelValue":a[0]||(a[0]=s=>_(n).settings.keepLocalData=s)},null,8,["modelValue"])]),_:1}),c(p,{label:"更多设置，敬请期待"})]),_:1})])])}}});export{_e as default};
