import{_ as h}from"./Dcry0nG7.js";import{u as x}from"./BdWZ08K2.js";import{f as l,u as y,o as i,g as _,w as f,a,c as m,k as p,y as u,t as $,aa as b,V as g,F as B,r as C,b as I,j as w}from"./BFfYl9YF.js";import{_ as M}from"./DlAUqK2U.js";const j=a("div",{i:"ri-sun-line dark:ri-moon-line"},null,-1),q=l({__name:"DarkToggle",setup(r){const e=x();y({meta:[{id:"theme-color",name:"theme-color",content:()=>e.value==="dark"?"#222222":"#ffffff"}]});function n(){e.preference=e.value==="dark"?"light":"dark"}return(t,o)=>{const s=h;return i(),_(s,{class:"icon-btn hover:text-yellow-400 !outline-none","text-xl":"",title:"切换",onClick:o[0]||(o[0]=d=>n())},{default:f(()=>[j]),_:1})}}}),Y=["to"],D={flex:"~ col",justify:"center",items:"center"},V={"text-xs":"",mt:"1"},F=l({__name:"YlfBottomMenuItem",props:{active:{type:Boolean},item:{}},emits:["click"],setup(r,{emit:e}){const n=e;return(t,o)=>(i(),m("button",{class:u([{active:t.active},"ylf-bottom-menu-item cursor-pointer transition"]),flex:"~ 1",justify:"center",items:"center","text-gray-800":"",dark:"text-white",hover:"text-blue-500",p:"2",to:t.item.to,onClick:o[0]||(o[0]=s=>n("click",t.item))},[a("div",D,[p(t.$slots,"default",{},()=>[a("div",{"text-xl":"",class:u(t.active&&t.item.activeIcon||t.item.icon)},null,2),a("span",V,$(t.item.title),1)])])],10,Y))}}),N={},R={class:"ylf-bottom-menu mx-auto flex justify-between"};function S(r,e){return i(),m("nav",R,[p(r.$slots,"default")])}const T=M(N,[["render",S]]),A=l({__name:"TheBottomMenu",setup(r){const e=[{icon:"i-ri-home-line",activeIcon:"i-ri-home-fill",title:"首页",to:"/"},{icon:"i-ri-compass-2-line",activeIcon:"i-ri-compass-2-fill",title:"吃什么",to:"/random"},{icon:"i-ri-user-line",activeIcon:"i-ri-user-fill",title:"我的",to:"/user"}],n=b(),t=g();function o(s){t.replace(s.to||"/")}return(s,d)=>{const v=F,k=T;return i(),_(k,{"shadow-2xl":"",pb:"$cook-bottom-menu-padding-bottom"},{default:f(()=>[(i(),m(B,null,C(e,c=>I(v,{key:c.to,item:c,active:w(n).path===c.to,class:"pt-3",onClick:o},null,8,["item","active"])),64))]),_:1})}}});export{q as _,A as a};
