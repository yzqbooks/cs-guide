"use strict";(self.webpackChunkcs_guide=self.webpackChunkcs_guide||[]).push([[66560],{68926:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(66252),a=n(2262),s=n(22201);const u=(0,o.aZ)({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=(0,s.yj)(),n=(0,a.iH)();(0,o.YP)((()=>e.path),(()=>n.value.focus()));const u=({target:t})=>{const e=document.querySelector(t.hash);if(e){const t=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",t)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",t),e.focus(),window.scrollTo(0,0)}};return()=>[(0,o.h)("span",{ref:n,tabindex:"-1"}),(0,o.h)("a",{href:`#${t.content}`,class:"skip-link sr-only",onClick:u},"Skip to content")]}})},66560:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var o=n(66252),a=n(22201),s=n(74393),u=n(68926),c=n(44528),r=n(24466);const i=(0,o.aZ)({name:"404",setup(){const t=(0,s.I)(),e=(0,r.X6)(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:i}=(0,a.nB)({to:e.value.home??t.value});return()=>[(0,o.h)(u.Z),(0,o.h)((0,o.up)("CommonWrapper"),{sidebar:!1},(()=>(0,o.h)("main",{class:"page not-found",id:"main-content"},[(0,o.h)(c.u),(0,o.h)("blockquote",n()),(0,o.h)("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),(0,o.h)("button",{class:"action-button",onClick:()=>i()},e.value.routeLocales.home)])))]}})}}]);