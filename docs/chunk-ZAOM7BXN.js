import{a as h}from"./chunk-7OHD4TNP.js";import{f as S,j as x}from"./chunk-5SUX6J7J.js";import"./chunk-VYCLLLSI.js";import{a as F}from"./chunk-IVMLUBSK.js";import{$a as n,Va as s,W as c,Za as u,_ as p,_a as d,ab as o,bb as m,kb as l,nb as f,pb as v,qb as _,ya as r}from"./chunk-GQVLGCHM.js";var E=(e,t)=>t.id,L=e=>["/dashboard/user",e];function T(e,t){if(e&1&&(n(0,"li",1),m(1,"img",2),o(),n(2,"a",3),l(3),o()),e&2){let i=t.$implicit;r(),s("srcset",i.avatar)("alt",i.first_name),r(),s("routerLink",_(5,L,i.id)),r(),f(" ",i.first_name," ",i.last_name," ")}}function g(e,t){e&1&&(n(0,"h3"),l(1,"Loading..."),o())}var b=(()=>{let t=class t{constructor(){this.usersService=c(h)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=p({type:t,selectors:[["app-frm-users"]],standalone:!0,features:[v],decls:5,vars:1,consts:[["titulo","Listado de Usuario - Se\xF1ales"],[1,"flex","item-center","my-2","cursor-pointer"],[1,"rounded","w-14",3,"srcset","alt"],[1,"mx-5","hover:underline",3,"routerLink"]],template:function(a,C){a&1&&(m(0,"app-title",0),n(1,"ul"),u(2,T,4,7,null,null,E,!1,g,2,0,"h3"),o()),a&2&&(r(2),d(C.usersService.users()))},dependencies:[F,x,S]});let e=t;return e})();export{b as FrmUsersComponent};