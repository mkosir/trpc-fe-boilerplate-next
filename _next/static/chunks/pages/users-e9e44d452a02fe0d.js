(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4764:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(4783)}])},689:function(e,i,t){"use strict";t.d(i,{_m:function(){return l},Uv:function(){return r},m6:function(){return u}});var s=t(5893),n=t(178);let l=()=>{let{data:e}=n.trpcApiBoilerplateClient.batch.list.useQuery();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,s.jsxs)("div",{style:{paddingBottom:"10px",fontStyle:"italic"},children:["Total No. of batches: ",null==e?void 0:e.length]}),e?e.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:e.title}),(0,s.jsxs)("div",{children:[e.weight,"kg"]}),(0,s.jsxs)("div",{children:[e.purity,"%"]})]},e.id)):"Loading..."]})},r=()=>{let e=n.trpcApiBoilerplateClient.util.seedDb.useMutation({onSuccess:e=>console.log(e)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"./heisenberg.png",alt:"heisenberg",width:110}),(0,s.jsx)("div",{children:"tRPC Frontend Boilerplate"}),(0,s.jsx)("button",{onClick:()=>{e.mutate()},children:"Seed DB"})]})},d=e=>{var i;let{user:t,onUserDelete:n}=e;return(0,s.jsxs)("div",{className:"flex m-3 p-3 rounded-md shadow shadow-blueSky-150/50",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:t.name}),(0,s.jsx)("div",{className:"italic text-gray-400",children:t.username}),(0,s.jsx)("div",{className:"capitalize",children:t.role}),(0,s.jsx)("button",{onClick:()=>n(t.id),children:"Delete"})]}),(0,s.jsx)("img",{src:null!==(i=t.imageUrl)&&void 0!==i?i:"/no-user.jpg",alt:t.username,className:"rounded ml-2 h-24"})]})},u=()=>{let{data:e}=n.trpcApiBoilerplateClient.user.list.useQuery(),i=n.trpcApiBoilerplateClient.user.destroy.useMutation(),t=e=>{i.mutate({id:e})};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,s.jsx)("div",{className:"flex flex-wrap",children:e?e.map(e=>(0,s.jsx)(d,{user:e,onUserDelete:t},e.id)):"Loading..."})]})}},4783:function(e,i,t){"use strict";t.r(i);var s=t(5893),n=t(689);i.default=()=>(0,s.jsx)(n.m6,{})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4764)}),_N_E=e.O()}]);