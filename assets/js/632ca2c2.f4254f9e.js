"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null},o=void 0,l={unversionedId:"misc_docs/software/nvhpc",id:"misc_docs/software/nvhpc",title:"Software",description:"Software - nvhpc",source:"@site/docs/misc_docs/software/nvhpc.mdx",sourceDirName:"misc_docs/software",slug:"/misc_docs/software/nvhpc",permalink:"/docs/misc_docs/software/nvhpc",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null}},p={},c=[{value:"Software - nvhpc",id:"software---nvhpc",level:2},{value:"Description",id:"description",level:4},{value:"Website",id:"website",level:4},{value:"Variants installed",id:"variants-installed",level:4}],s={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"software---nvhpc"},"Software - nvhpc"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The NVIDIA HPC SDK is a comprehensive suite of compilers, libraries and tools essential to maximizing developer productivity and the performance and portability of HPC applications. The NVIDIA HPC SDK C, C++, and Fortran compilers support GPU acceleration of HPC modeling and simulation applications with standard C++ and Fortran, OpenACC directives, and CUDA. GPU-accelerated math libraries maximize performance on common HPC algorithms, and optimized communications libraries enable standards-based multi-GPU and scalable systems programming. Performance profiling and debugging tools simplify porting and optimization of HPC applications."),(0,r.kt)("h4",{id:"website"},"Website"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/hpc-sdk"},"https://developer.nvidia.com/hpc-sdk")),(0,r.kt)("h4",{id:"variants-installed"},"Variants installed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"nvhpc 22.3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen2")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load nvhpc/haau2u7\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"nvhpc 22.5"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,r.kt)("li",{parentName:"ul"},"Supports MPI")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load nvhpc/ks76kzj\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"nvhpc 22.9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,r.kt)("li",{parentName:"ul"},"Supports MPI")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load nvhpc/2wu2dwj\n")))))}d.isMDXComponent=!0}}]);