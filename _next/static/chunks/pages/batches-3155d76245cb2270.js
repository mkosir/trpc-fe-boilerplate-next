(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{3586:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batches",function(){return i(4896)}])},689:function(e,t,i){"use strict";i.d(t,{_m:function(){return l},Uv:function(){return r},m6:function(){return a}});var s=i(5893),n=i(178);let l=()=>{let{data:e}=n.trpcApiBoilerplateClient.batch.list.useQuery();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,s.jsxs)("div",{style:{paddingBottom:"10px",fontStyle:"italic"},children:["Total No. of batches: ",null==e?void 0:e.length]}),e?(0,s.jsx)("ul",{children:e.map(e=>(0,s.jsxs)("li",{children:[e.title," - ",e.weight,"kg - ",e.purity,"%"]},e.id))}):"Loading..."]})},r=()=>{let e=n.trpcApiBoilerplateClient.util.seedDb.useMutation({onSuccess:e=>console.log(e)});return(0,s.jsx)("div",{className:"flex justify-center text-center mt-10",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"./heisenberg.png",alt:"heisenberg",className:"mx-auto w-[110px] mb-1"}),(0,s.jsx)("div",{className:"mb-1 text-lg font-medium",children:"tRPC Frontend Boilerplate"}),(0,s.jsx)("button",{onClick:()=>{e.mutate()},children:"Seed DB"})]})})},u=e=>{var t;let{user:i,onUserDelete:n}=e;return(0,s.jsxs)("div",{className:"flex justify-between w-72 mr-4 mb-4 p-3 rounded-md bg-blueSky-100/5 shadow shadow-blueSky-150/50",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:i.name}),(0,s.jsx)("div",{className:"italic text-gray-400",children:i.username}),(0,s.jsx)("div",{className:"capitalize",children:i.role}),(0,s.jsx)("button",{onClick:()=>n(i.id),children:"Delete"})]}),(0,s.jsx)("img",{src:null!==(t=i.imageUrl)&&void 0!==t?t:"/no-user.jpg",alt:i.username,className:"rounded ml-4 h-24"})]})},a=()=>{let{data:e}=n.trpcApiBoilerplateClient.user.list.useQuery(),t=n.trpcApiBoilerplateClient.user.destroy.useMutation(),i=e=>{t.mutate({id:e})};return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,s.jsx)("div",{className:"flex flex-wrap mt-4",children:e?e.map(e=>(0,s.jsx)(u,{user:e,onUserDelete:i},e.id)):"Loading..."})]})}},4896:function(e,t,i){"use strict";i.r(t);var s=i(5893),n=i(689);t.default=()=>(0,s.jsx)(n._m,{})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3586)}),_N_E=e.O()}]);