(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4764:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return s(4783)}])},5134:function(e,t,s){"use strict";s.d(t,{_m:function(){return r},Uv:function(){return u},m6:function(){return o}});var i=s(5893);let l=()=>(0,i.jsx)("div",{className:"w inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blueSky-300",role:"status","aria-label":"loading",children:(0,i.jsx)("span",{className:"sr-only",children:"Loading..."})});var n=s(5651);let r=()=>{let{data:e}=n.trpcApiBoilerplateClient.batch.list.useQuery();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,i.jsxs)("div",{className:"my-2 italic",children:["Total No. of batches: ",null==e?void 0:e.length]}),e?(0,i.jsx)("ul",{className:"list-inside list-disc",children:e.map(e=>(0,i.jsxs)("li",{children:[e.title," - ",e.weight,"kg - ",e.purity,"%"]},e.id))}):(0,i.jsx)(l,{})]})};var a=s(7294),c=s(3346);let u=()=>{let[e,t]=(0,a.useState)(null),{mutate:s}=n.trpcApiBoilerplateClient.util.seedDb.useMutation({onSuccess:t});return console.info("Exported - SharedSquareObject: ",c.SharedSquareObject),console.info("Exported - USER_ROLES: ",c.USER_ROLES),(0,i.jsx)("div",{className:"mt-10 flex justify-center text-center",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate/main/misc/heisenberg.png",alt:"heisenberg",className:"mx-auto mb-1 w-[110px]"}),(0,i.jsx)("div",{className:"mb-1 text-lg font-medium",children:"tRPC Frontend Boilerplate"}),(0,i.jsx)("button",{className:"mb-5 rounded bg-blueSky-400 p-1 px-3 text-sm text-white hover:bg-blueSky-500 active:bg-blueSky-600",onClick:()=>s(),children:"Seed DB"}),e&&(0,i.jsx)("div",{className:"animate-text-appear text-sm text-blueSky-300 opacity-0",onAnimationEnd:()=>t(null),children:e})]})})},d=e=>{var t;let{user:s}=e,l=n.trpcApiBoilerplateClient.useContext(),r=async e=>{console.info("Deleted user: ",e),await l.user.list.invalidate()},{mutate:a,isLoading:c}=n.trpcApiBoilerplateClient.user.destroy.useMutation({onSuccess:r});return(0,i.jsxs)("div",{className:"mb-4 mr-4 flex w-72 justify-between rounded-md bg-blueSky-50/5 p-3 shadow shadow-blueSky-500/60",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:s.name}),(0,i.jsx)("div",{className:"italic text-gray-400",children:s.username}),(0,i.jsx)("div",{className:"capitalize",children:s.role}),(0,i.jsx)("button",{className:"rounded bg-blueSky-400 p-0.5 px-2 text-xs text-white hover:bg-blueSky-500 active:bg-blueSky-600",disabled:c,onClick:()=>{a({id:s.id})},children:c?(0,i.jsx)("span",{className:"animate-pulse",children:"Deleting..."}):"Delete"})]}),(0,i.jsx)("img",{src:null!==(t=s.imageUrl)&&void 0!==t?t:"no-user.jpg",alt:s.username,className:"ml-4 h-24 rounded"})]})},o=()=>{let{data:e}=n.trpcApiBoilerplateClient.user.list.useQuery();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,i.jsx)("div",{className:"mt-4 flex flex-wrap",children:e?e.map(e=>(0,i.jsx)(d,{user:e},e.id)):(0,i.jsx)(l,{})})]})}},4783:function(e,t,s){"use strict";s.r(t);var i=s(5893),l=s(5134);t.default=()=>(0,i.jsx)(l.m6,{})}},function(e){e.O(0,[486,774,888,179],function(){return e(e.s=4764)}),_N_E=e.O()}]);