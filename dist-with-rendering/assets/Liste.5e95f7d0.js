import{d as i,i as f,o as t,c as s,F as m,k as x,u as h,s as k,r as g,f as n,w,m as v,a as c}from"./index.c7dd4f78.js";import{_ as C}from"./Montre.vue_vue_type_script_setup_true_lang.8e85f804.js";const E={class:"flex gap-3 ml-40"},L=i({__name:"ListeMontre",props:{max:null},async setup(l){let e,o;const p=l,{data:u,error:_}=([e,o]=f(()=>{var a;return k.from("montre").select("*").limit((a=p.max)!=null?a:100)}),e=await e,o(),e);return _&&console.log("n'a pas pu r\xE9cup\xE9rer les montres",{error:_}),(a,B)=>{const d=g("router-link");return t(),s("ul",E,[(t(!0),s(m,null,x(h(u),r=>(t(),s("li",{key:r.id_montre},[n(d,{to:`/edit/${r.id_montre}`},{default:w(()=>[n(C,v({class:"w-32"},r),null,16)]),_:2},1032,["to"])]))),128))])}}}),$=c("div",{class:"mt-40 ml-40"},[c("p",{class:"font-montserrat font-light text-base"},"Liste de vos cr\xE9ations :")],-1),y={class:""},N=i({__name:"Liste",setup(l){return(e,o)=>(t(),s(m,null,[$,c("div",y,[n(L)])],64))}});export{N as default};
