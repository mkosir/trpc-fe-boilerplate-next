(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4764:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return t(878)}])},8454:function(e,s,t){"use strict";t.d(s,{_m:function(){return a},Uv:function(){return o},m6:function(){return x}});var n=t(5893);let i=()=>(0,n.jsx)("div",{className:"w inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blueSky-300",role:"status","aria-label":"loading",children:(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})});var r=t(9593);let a=()=>{let{data:e}=r.Am.batch.list.useQuery();return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,n.jsxs)("div",{className:"my-2 italic",children:["Total No. of batches: ",null==e?void 0:e.length]}),e?(0,n.jsx)("ul",{className:"list-inside list-disc",children:e.map(e=>(0,n.jsxs)("li",{children:[e.title," - ",e.weight,"kg - ",e.purity,"%"]},e.id))}):(0,n.jsx)(i,{})]})};var l=t(7294),u=t(1604),d=["administrator","apprentice","standard"];u.z.object({id:u.z.string(),email:u.z.string(),name:u.z.string(),username:u.z.string(),imageUrl:u.z.string().optional(),role:u.z.enum(d)});var c={shape:"square",size:50};let o=()=>{let[e,s]=(0,l.useState)(null),{mutate:t}=r.Am.util.seedDb.useMutation({onSuccess:s});return console.info("Exported from tRPC backend repo - SharedSquareObject: ",c),console.info("Exported from tRPC backend repo - USER_ROLES: ",d),(0,n.jsx)("div",{className:"mt-10 flex justify-center text-center",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{src:"https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate-next/main/misc/heisenberg.png",alt:"heisenberg",className:"mx-auto mb-1 w-[110px]"}),(0,n.jsx)("div",{className:"mb-1 text-lg font-medium",children:"tRPC Frontend Boilerplate"}),(0,n.jsx)("button",{className:"mb-5 rounded bg-blueSky-400 p-1 px-3 text-sm text-white hover:bg-blueSky-500 active:bg-blueSky-600",onClick:()=>t(),children:"Seed DB"}),e&&(0,n.jsx)("div",{className:"animate-text-appear text-sm text-blueSky-300 opacity-0",onAnimationEnd:()=>s(null),children:e})]})})},m=e=>{var s;let{user:t}=e,i=r.Am.useContext(),a=async e=>{console.info("Deleted user: ",e),await i.user.list.invalidate()},{mutate:l,isLoading:u}=r.Am.user.destroy.useMutation({onSuccess:a});return(0,n.jsxs)("div",{className:"mb-4 mr-4 flex w-72 justify-between rounded-md bg-blueSky-50/5 p-3 shadow shadow-blueSky-500/60",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:t.name}),(0,n.jsx)("div",{className:"italic text-gray-400",children:t.username}),(0,n.jsx)("div",{className:"capitalize",children:t.role}),(0,n.jsx)("button",{className:"rounded bg-blueSky-400 p-0.5 px-2 text-xs text-white hover:bg-blueSky-500 active:bg-blueSky-600",disabled:u,onClick:()=>{l({id:t.id})},children:u?(0,n.jsx)("span",{className:"animate-pulse",children:"Deleting..."}):"Delete"})]}),(0,n.jsx)("img",{src:null!==(s=t.imageUrl)&&void 0!==s?s:"no-user.jpg",alt:t.username,className:"ml-4 h-24 rounded"})]})},x=()=>{let{data:e}=r.Am.user.list.useQuery();return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,n.jsx)("div",{className:"mt-4 flex flex-wrap",children:e?e.map(e=>(0,n.jsx)(m,{user:e},e.id)):(0,n.jsx)(i,{})})]})}},878:function(e,s,t){"use strict";t.r(s);var n=t(5893),i=t(8454);s.default=()=>(0,n.jsx)(i.m6,{})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4764)}),_N_E=e.O()}]);