"use strict";(self.webpackChunklow_ops=self.webpackChunklow_ops||[]).push([[3058],{8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}},8924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"platform/high-level-architecture","title":"High Level Architecture","description":"Low-Ops is made up of a set of components that work together to provide a platform for running applications.","source":"@site/docs/08-platform/03-high-level-architecture.mdx","sourceDirName":"08-platform","slug":"/platform/high-level-architecture","permalink":"/doc-test/docs/platform/high-level-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"High Level Architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Authantication","permalink":"/doc-test/docs/platform/authantications"},"next":{"title":"Advanced Configurations","permalink":"/doc-test/docs/platform/advanced-configurations"}}');var s=n(4848),r=n(8453);const i={title:"High Level Architecture"},a=void 0,l={},c=[{value:"Low-Ops Layers",id:"low-ops-layers",level:3},{value:"Philosophy",id:"philosophy",level:3}];function d(e){const t={code:"code",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Low-Ops is made up of a set of components that work together to provide a platform for running applications."}),"\n",(0,s.jsx)(t.h3,{id:"low-ops-layers",children:"Low-Ops Layers"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.strong,{children:["There are ",(0,s.jsx)(t.code,{children:"three"})," main layers in Low-Ops architecture:"]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Applications"})," - Custom-built applications that run on Low-Ops."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Platform"})," - The platform that runs the applications. It also provides a diverse set of services that are used by the\napplications or enables developers to build, deliver, and own their applications end-to-end."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Foundation"})," - The foundation that the platform runs on. This is the cloud provider or on-premise datacenter that\nprovides a cloud-agnostic foundation which must be a Kubernetes cluster."]}),"\n",(0,s.jsx)(t.mermaid,{value:"flowchart BT\n  style Applications stroke-width:1px,stroke-dasharray: 5 5\n  style Platform stroke-width:1px,stroke-dasharray: 5 5\n  style Foundation stroke-width:1px,stroke-dasharray: 5 5\n\n  style mendix stroke-width:1px\n  style nextjs stroke-width:1px\n  style flask stroke-width:1px\n\n  subgraph Applications\n    mendix[Mendix App]\n    nextjs[NextJS App]\n    flask[Flask App]\n    nestjs[NestJS App]\n  end\n\n  subgraph Platform\n    core[Core Services]\n    devops[DevOps Services]\n    data[Data Services]\n  end\n\n  subgraph Foundation\n    aws[AWS]\n    azure[Azure]\n    hetzner[Hetzner]\n    gcp[GCP]\n    digitalocean[DigitalOcean]\n  end\n\n  Foundation <--\x3e Platform\n  Platform <--\x3e Applications"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"philosophy",children:"Philosophy"}),"\n",(0,s.jsx)(t.p,{children:"Deploying components onto Kubernetes is not rocket science. However, having the platform to be reproducible, scalable,\nand maintainable is a challenge. Low-Ops is designed to be easy to use and requires minimal maintenance. It is designed\nto be used by developers and operators with minimal knowledge of Kubernetes and cloud infrastructure. You will be able\nto do all your tasks through the Low-Ops Portal supported with best practices of delivering applications to your\nbusiness and customers."}),"\n",(0,s.jsx)(t.p,{children:"Because the whole platform is fully automated and runs on your infrastructure, you have 100% control over your data and\ncan be sure that it is secure. You can also easily integrate it with your existing systems and processes."}),"\n",(0,s.jsx)(t.p,{children:"Don't want or need upgradability of Low-Ops? You can modify it to fit your needs. You can also use it as a starting\npoint for your own platform."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);