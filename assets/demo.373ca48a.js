import{c as t}from"./mobile.26ea9aac.js";import{x as e,y as o,r as a,o as r,c as p,f as l,s as i,j as n}from"./vendor.6c8f51ae.js";import"./index.5ad10c44.js";const{createDemo:d}=t("drag");var s=d({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})});const u=i();e("data-v-54433304");const c={class:"demo full"},f=l("h2",null,"基础用法",-1),y=n("触摸移动"),m=l("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),x=n("只能X轴拖拽"),_=n("只能Y轴拖拽"),h=l("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),v=n("拖动我"),b=l("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),g=l("div",{class:"drag-boundary"},null,-1),j=n("限制拖拽边界");o();const E=u(((t,e,o,i,n,d)=>{const s=a("nut-button"),E=a("nut-drag");return r(),p("div",c,[f,l(E,{style:{top:"120px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[y])),_:1})])),_:1}),m,l(E,{direction:"x",style:{top:"200px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[x])),_:1})])),_:1}),l(E,{direction:"y",style:{top:"200px",right:"50px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[_])),_:1})])),_:1}),h,l(E,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[v])),_:1})])),_:1}),b,g,l(E,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:u((()=>[l(s,{type:"primary"},{default:u((()=>[j])),_:1})])),_:1},8,["boundary"])])}));s.render=E,s.__scopeId="data-v-54433304";export default s;