"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[254],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8554:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],r={sidebar_position:3,sidebar_label:"With Spack",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"faq/package/spack",id:"faq/package/spack",title:"spack",description:"Package Management with Spack",source:"@site/docs/faq/package/spack.md",sourceDirName:"faq/package",slug:"/faq/package/spack",permalink:"/docs/faq/package/spack",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"With Spack",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},sidebar:"FAQ"},p={},u=[{value:"Package Management with Spack",id:"package-management-with-spack",level:2},{value:"How to view the list of available packages installed in the facility?",id:"how-to-view-the-list-of-available-packages-installed-in-the-facility",level:3},{value:"How to load and unload a package(s)?",id:"how-to-load-and-unload-a-packages",level:3},{value:"How to view the list of loaded packages?",id:"how-to-view-the-list-of-loaded-packages",level:3},{value:"How do I check the version of the package installed?",id:"how-do-i-check-the-version-of-the-package-installed",level:3},{value:"After submitting a job, I am getting messages like &quot;spack: command not found&quot;. Why am I getting this message?",id:"after-submitting-a-job-i-am-getting-messages-like-spack-command-not-found-why-am-i-getting-this-message",level:3}],d={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"package-management-with-spack"},"Package Management with Spack"),(0,i.kt)("h3",{id:"how-to-view-the-list-of-available-packages-installed-in-the-facility"},"How to view the list of available packages installed in the facility?"),(0,i.kt)("p",null,"Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"spack")," command to view the list of installed packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ spack find\n  ==> 45 installed packages\n-- linux-centos8-broadwell / gcc@7.4.0 --------------------------\narmadillo@9.800.3  cmake@3.17.3   libpciaccess@0.13.5  m4@1.4.18        openmpi@3.1.6   \narpack-ng@3.7.0    gdbm@1.18.1    libsigsegv@2.12      ncurses@6.2      openssl@1.1.1g  \nautoconf@2.69      hwloc@1.11.11  libtool@2.4.6        numactl@2.0.12   perl@5.30.3     \nautomake@1.16.2    libiconv@1.16  libxml2@2.9.10       openblas@0.3.10  pkgconf@1.7.3 \n\n-- linux-centos8-broadwell / gcc@8.3.1 --------------------------\nautoconf@2.69    expat@2.2.9     isl@0.20              libsigsegv@2.12  mpfr@3.1.6      \nautomake@1.16.2  gcc@9.3.0       libbsd@0.10.0         libtool@2.4.6    mpfr@3.1.6     \nbzip2@1.0.8      gdbm@1.18.1     libedit@3.1-20170329  m4@1.4.18        ncurses@6.1     \ncmake@3.16.2     gettext@0.20.1  libffi@3.2.1          mpc@1.1.0        ncurses@6.2     \ndiffutils@3.7    gmp@6.1.2       libiconv@1.16         mpc@1.1.0        openssl@1.1.1d  \n")),(0,i.kt)("p",null,"Note that the above list is for representational purpose and differs from the actual output on Sharanga."),(0,i.kt)("h3",{id:"how-to-load-and-unload-a-packages"},"How to load and unload a package(s)?"),(0,i.kt)("p",null,"Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"spack load")," command to load the package into their current environment. For example a user who wishes to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PETSc")," library can use the following syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ spack load petsc\n")),(0,i.kt)("p",null,"If a user wishes to unload the ",(0,i.kt)("inlineCode",{parentName:"p"},"PETSc")," library from their environment, they can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"spack unload")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ spack unload petsc\n")),(0,i.kt)("p",null,"If a user wishes to unload all the loaded libraries from their user environment, please use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ spack unload\n")),(0,i.kt)("h3",{id:"how-to-view-the-list-of-loaded-packages"},"How to view the list of loaded packages?"),(0,i.kt)("p",null,"Users can use the following command to find the list of currently loaded packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  $ spack find --loaded\n")),(0,i.kt)("h3",{id:"how-do-i-check-the-version-of-the-package-installed"},"How do I check the version of the package installed?"),(0,i.kt)("p",null,"Users can type ",(0,i.kt)("inlineCode",{parentName:"p"},"spack find <package name>")," to find the version of the package installed. Note that the package version is shown after ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," in the output."),(0,i.kt)("h3",{id:"after-submitting-a-job-i-am-getting-messages-like-spack-command-not-found-why-am-i-getting-this-message"},'After submitting a job, I am getting messages like "spack: command not found". Why am I getting this message?'),(0,i.kt)("p",null,"Spack is sourced by the default shell ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/bash"),". You may get this message if you have changed the shell to something other than ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". We request you to change the shell back to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," for optimal functioning. Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chsh")," shell command to change their user shell environment back to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". Another reason could be due to the unavailability of the desired package."))}h.isMDXComponent=!0}}]);