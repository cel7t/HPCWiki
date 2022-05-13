"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[1459],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4478:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:6,sidebar_label:"Packages",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},c=void 0,s={unversionedId:"faq/package/package",id:"faq/package/package",title:"Package Management",description:"Package Management",source:"@site/docs/faq/package/package.md",sourceDirName:"faq/package",slug:"/faq/package/",permalink:"/docs/faq/package/",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Packages",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},sidebar:"FAQ"},p={},f=[{value:"Package Management",id:"package-management",level:2},{value:"What are ModuleFiles?",id:"what-are-modulefiles",level:3},{value:"What is Spack?",id:"what-is-spack",level:3},{value:"What is the difference between Modulefiles and Spack?",id:"what-is-the-difference-between-modulefiles-and-spack",level:3},{value:"Between Modulefiles and Spack, which is more user friendly?",id:"between-modulefiles-and-spack-which-is-more-user-friendly",level:3},{value:"Where to find more information about the command line syntax for Spack and Modulefiles?",id:"where-to-find-more-information-about-the-command-line-syntax-for-spack-and-modulefiles",level:3}],d={toc:f};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"package-management"},"Package Management"),(0,o.kt)("h3",{id:"what-are-modulefiles"},"What are ModuleFiles?"),(0,o.kt)("p",null,"Modulefiles are files that are used to setup the local environment to configure various software packages."),(0,o.kt)("h3",{id:"what-is-spack"},"What is Spack?"),(0,o.kt)("p",null,"The HPC facility provides users access to Spack, a package management tool designed to support multiple versions and configurations of a software on a wide variety of platforms and environments."),(0,o.kt)("h3",{id:"what-is-the-difference-between-modulefiles-and-spack"},"What is the difference between Modulefiles and Spack?"),(0,o.kt)("p",null,"Modulefiles are either generated by the package or by the administrator. On the other hand, Spack is a superset of modulefiles and generates the appropriate modulefiles for the installed package. An advantage of Spack is that it offers dependency management for packages."),(0,o.kt)("h3",{id:"between-modulefiles-and-spack-which-is-more-user-friendly"},"Between Modulefiles and Spack, which is more user friendly?"),(0,o.kt)("p",null,"Spack is more user friendly and also offers bash auto-completion for its commands. It simplifies package management and version control for the system administrator."),(0,o.kt)("h3",{id:"where-to-find-more-information-about-the-command-line-syntax-for-spack-and-modulefiles"},"Where to find more information about the command line syntax for Spack and Modulefiles?"),(0,o.kt)("p",null,"You can type ",(0,o.kt)("inlineCode",{parentName:"p"},"spack help")," to get information about the command line syntax for Spack. Similarly, type ",(0,o.kt)("inlineCode",{parentName:"p"},"module help")," for information related to Modulefiles.\nFor further details kindly visit the links for ",(0,o.kt)("a",{parentName:"p",href:"https://spack.readthedocs.io/en/latest/command_index.html"},"Spack")," and ",(0,o.kt)("a",{parentName:"p",href:"https://modules.readthedocs.io/en/stable/modulefile.html"},"Modulefiles"),"."))}u.isMDXComponent=!0}}]);