(self.webpackChunk=self.webpackChunk||[]).push([[245],{245:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});
// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const a=async(e,t,r=e.name)=>{const i=[],n=[];for await(const s of e.values()){const c=`${r}/${s.name}`;"file"===s.kind?n.push(s.getFile().then((t=>(t.directoryHandle=e,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>c}))))):"directory"===s.kind&&t&&i.push(a(s,t,c))}return[...(await Promise.all(i)).flat(),...await Promise.all(n)]},i=async(e={})=>{e.recursive=e.recursive||!1;const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return a(t,e.recursive)}}}]);