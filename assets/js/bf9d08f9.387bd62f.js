"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[2817],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7466:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null},p=void 0,c={unversionedId:"misc_docs/software/fftw",id:"misc_docs/software/fftw",title:"Software",description:"Software - fftw",source:"@site/docs/misc_docs/software/fftw.mdx",sourceDirName:"misc_docs/software",slug:"/misc_docs/software/fftw",permalink:"/docs/misc_docs/software/fftw",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null}},s={},f=[{value:"Software - fftw",id:"software---fftw",level:2},{value:"Description",id:"description",level:4},{value:"Website",id:"website",level:4},{value:"Variants installed",id:"variants-installed",level:4}],u={toc:f};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"software---fftw"},"Software - fftw"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"FFTW is a C subroutine library for computing the discrete Fourier transform (DFT) in one or more dimensions, of arbitrary input size, and of both real and complex data (as well as of even/odd data, i.e. the discrete cosine/sine transforms or DCT/DST). We believe that FFTW, which is free software, should become the FFT library of choice for most applications."),(0,i.kt)("h4",{id:"website"},"Website"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.fftw.org"},"https://www.fftw.org")),(0,i.kt)("h4",{id:"variants-installed"},"Variants installed"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"fftw 2.1.5"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compiler: gcc 10.2.0"),(0,i.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,i.kt)("li",{parentName:"ul"},"Supports MPI")),(0,i.kt)("p",{parentName:"li"},"Spack Command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load fftw/majug3v\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"fftw 3.3.9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compiler: gcc 10.2.0"),(0,i.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,i.kt)("li",{parentName:"ul"},"Supports MPI")),(0,i.kt)("p",{parentName:"li"},"Spack Command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load fftw/7fklgad\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"fftw 3.3.9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compiler: gcc 10.2.0"),(0,i.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,i.kt)("li",{parentName:"ul"},"Supports MPI")),(0,i.kt)("p",{parentName:"li"},"Spack Command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load fftw/lvw267y\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"fftw 3.3.10"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,i.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,i.kt)("li",{parentName:"ul"},"Supports MPI")),(0,i.kt)("p",{parentName:"li"},"Spack Command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load fftw/2cbhd2v\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"fftw 3.3.10"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,i.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,i.kt)("li",{parentName:"ul"},"Supports MPI"),(0,i.kt)("li",{parentName:"ul"},"Supports OpenMP")),(0,i.kt)("p",{parentName:"li"},"Spack Command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load fftw/5dh2jfc\n")))))}m.isMDXComponent=!0}}]);