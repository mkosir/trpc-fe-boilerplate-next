(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4764:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return i(4783)}])},689:function(e,t,i){"use strict";i.d(t,{_m:function(){return n},Uv:function(){return u},m6:function(){return o}});var r=i(5893),s=i(178);let n=()=>{let{data:e}=s.trpcApiBoilerplateClient.batch.list.useQuery();return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"\uD83D\uDC8A Batches"}),(0,r.jsxs)("div",{className:"my-2 italic",children:["Total No. of batches: ",null==e?void 0:e.length]}),e?(0,r.jsx)("ul",{className:"list-inside list-disc",children:e.map(e=>(0,r.jsxs)("li",{children:[e.title," - ",e.weight,"kg - ",e.purity,"%"]},e.id))}):"Loading..."]})};var l=i(7294),a=i(3346);let u=()=>{let[e,t]=(0,l.useState)(null),{mutate:i}=s.trpcApiBoilerplateClient.util.seedDb.useMutation({onSuccess:t});return console.info("Exported - SharedSquareObject: ",a.SharedSquareObject),console.info("Exported - USER_ROLES: ",a.USER_ROLES),(0,r.jsx)("div",{className:"mt-10 flex justify-center text-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:"https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate/main/misc/heisenberg.png",alt:"heisenberg",className:"mx-auto mb-1 w-[110px]"}),(0,r.jsx)("div",{className:"mb-1 text-lg font-medium",children:"tRPC Frontend Boilerplate"}),(0,r.jsx)("button",{className:"mb-5 rounded bg-blueSky-400 p-1 px-3 text-sm text-white hover:bg-blueSky-500 active:bg-blueSky-600",onClick:()=>i(),children:"Seed DB"}),e&&(0,r.jsx)("div",{className:"animate-text-appear text-sm text-blueSky-300 opacity-0",onAnimationEnd:()=>t(null),children:e})]})})},c=e=>{var t;let{user:i}=e,n=s.trpcApiBoilerplateClient.useContext(),l=async e=>{console.info("Deleted user: ",e),await n.user.list.invalidate()},{mutate:a,isLoading:u}=s.trpcApiBoilerplateClient.user.destroy.useMutation({onSuccess:l});return(0,r.jsxs)("div",{className:"mb-4 mr-4 flex w-72 justify-between rounded-md bg-blueSky-50/5 p-3 shadow shadow-blueSky-500/60",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:i.name}),(0,r.jsx)("div",{className:"italic text-gray-400",children:i.username}),(0,r.jsx)("div",{className:"capitalize",children:i.role}),(0,r.jsxs)("button",{className:"rounded bg-blueSky-400 p-0.5 px-2 text-xs text-white hover:bg-blueSky-500 active:bg-blueSky-600",disabled:u,onClick:()=>{a({id:i.id})},children:[u&&"..."," Delete"]})]}),(0,r.jsx)("img",{src:null!==(t=i.imageUrl)&&void 0!==t?t:"no-user.jpg",alt:i.username,className:"ml-4 h-24 rounded"})]})},o=()=>{let{data:e}=s.trpcApiBoilerplateClient.user.list.useQuery();return(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"\uD83D\uDC64 Users"}),(0,r.jsx)("div",{className:"mt-4 flex flex-wrap",children:e?e.map(e=>(0,r.jsx)(c,{user:e},e.id)):"Loading..."})]})}},4783:function(e,t,i){"use strict";i.r(t);var r=i(5893),s=i(689);t.default=()=>(0,r.jsx)(s.m6,{})},3346:function(e,t,i){"use strict";var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,a={};((e,t)=>{for(var i in t)r(e,i,{get:t[i],enumerable:!0})})(a,{SharedSquareObject:()=>o,USER_ROLES:()=>c}),e.exports=((e,t,i,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of n(t))l.call(e,i)||void 0===i||r(e,i,{get:()=>t[i],enumerable:!(a=s(t,i))||a.enumerable});return e})(r({},"__esModule",{value:!0}),a);var u=i(3096),c=["administrator","apprentice","standard"];u.z.object({id:u.z.string(),email:u.z.string(),name:u.z.string(),username:u.z.string(),imageUrl:u.z.string().optional(),role:u.z.enum(c)});var o={shape:"square",size:50}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4764)}),_N_E=e.O()}]);