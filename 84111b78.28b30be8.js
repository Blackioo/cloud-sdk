(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),o=(t(0),t(205)),r={id:"manage-dependencies",title:"Managing Dependencies",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Dependency Management",description:"How to manage dependencies, detect and resolve conflicts",keywords:["sap","cloud","sdk","cloud native","cloud sdk","dependency","dependency conflicts","manage dependencies","how-to"],image:null},c={unversionedId:"java/guides/manage-dependencies",id:"java/guides/manage-dependencies",isDocsHomePage:!1,title:"Managing Dependencies",description:"How to manage dependencies, detect and resolve conflicts",source:"@site/docs/java/guides/dependencies.mdx",slug:"/java/guides/manage-dependencies",permalink:"/cloud-sdk/docs/java/guides/manage-dependencies",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/dependencies.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1608739340,sidebar_label:"Dependency Management",sidebar:"someSidebar",previous:{title:"SAP Cloud Platform Cloud Foundry XSUAA Explained",permalink:"/cloud-sdk/docs/java/guides/cloud-foundry-xsuaa-service"},next:{title:"Logging",permalink:"/cloud-sdk/docs/java/guides/logging-overview"}},d=[{value:"General Information",id:"general-information",children:[{value:"The SAP Cloud SDK Bill-of-Material",id:"the-sap-cloud-sdk-bill-of-material",children:[]}]},{value:"Dealing With Dependency Conflicts",id:"dealing-with-dependency-conflicts",children:[{value:"Updating the SAP Cloud SDK Version",id:"updating-the-sap-cloud-sdk-version",children:[]},{value:"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material",id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material",children:[]}]}],l={toc:d};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general-information"},"General Information"),Object(o.b)("p",null,"The SAP Cloud SDK for Java is a set of libraries that itself depends on other libraries.\nTo manage these relationships it relies on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"}),"dependency management functionality")," of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://maven.apache.org/index.html"}),"Maven"),"."),Object(o.b)("p",null,"This article shows how to manage dependencies for the SAP Cloud SDK for Java specifically.\nFor general information on how to deal with dependencies refer to the resources linked above and throughout this page."),Object(o.b)("h3",{id:"the-sap-cloud-sdk-bill-of-material"},"The SAP Cloud SDK Bill-of-Material"),Object(o.b)("p",null,"The SAP Cloud SDK provides a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dzone.com/articles/the-bill-of-materials-in-maven"}),"Bill-of-Material"),".\nIt comprises all dependencies and their specific version that the SAP Cloud SDK relies upon."),Object(o.b)("p",null,"It can be used in the dependency management as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>use-latest-version-here</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),Object(o.b)("p",null,"It helps in various ways:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Minimizing the effort for updating SAP Cloud SDK versions"),Object(o.b)("li",{parentName:"ul"},"Ensuring all SAP Cloud SDK components are used consistently with the same version"),Object(o.b)("li",{parentName:"ul"},"Compatibility with some other key SAP libraries or frameworks like ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/SAP/cloud-security-xsuaa-integration"}),"XSUAA")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://cap.cloud.sap/docs/"}),"CAP"),"."),Object(o.b)("li",{parentName:"ul"},"Avoiding some potential dependency conflicts"),Object(o.b)("li",{parentName:"ul"},"Checking which components & their respective version the SAP Cloud SDK depends upon")),Object(o.b)("p",null,"For these reasons we highly recommend using the ",Object(o.b)("inlineCode",{parentName:"p"},"sdk-bom")," in your project."),Object(o.b)("h2",{id:"dealing-with-dependency-conflicts"},"Dealing With Dependency Conflicts"),Object(o.b)("p",null,"When using multiple libraries you will probably run into a version conflict at some point.\nThis is caused by the way dependencies are resolved.\nIf you are using two libraries ",Object(o.b)("inlineCode",{parentName:"p"},"A")," and ",Object(o.b)("inlineCode",{parentName:"p"},"B")," where both depend on a different version of ",Object(o.b)("inlineCode",{parentName:"p"},"C")," you encounter a conflict."),Object(o.b)("p",null,"This conflict can only be solved by you as the consumer be explicitly stating which version of ",Object(o.b)("inlineCode",{parentName:"p"},"C")," should be used."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dzone.com/articles/solving-dependency-conflicts-in-maven"}),"This guide")," outlines this problem in more detail and provides general guidance on how to find and resolve such problems."),Object(o.b)("h3",{id:"updating-the-sap-cloud-sdk-version"},"Updating the SAP Cloud SDK Version"),Object(o.b)("p",null,"You may run into dependency related problems when updating SAP Cloud SDK versions since it's dependencies are frequently updated.\nHere are some recommendations from our experience that should help to mitigate any problems:"),Object(o.b)("p",null,"We recommend increasing the SAP Cloud SDK version in a dedicated change e.g. a pull request."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This isolates the change and makes finding problems easier.")),Object(o.b)("p",null,"Look out for ",Object(o.b)("inlineCode",{parentName:"p"},"MethodNotFound")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ClassDefNotFound")," exceptions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"They are common when a library is provided with an unexpected version.")),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}),"release notes"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Under improvements, you will see all dependency changes.")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"mvn dependency:tree")," to analyze the dependency tree."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It shows where dependencies are used and in which version.")),Object(o.b)("p",null,"Google the error message."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Usually, you will at least get an idea which library is causing the problems.")),Object(o.b)("p",null,"Update the SAP Cloud SDK version frequently."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This mitigates the risk per update and ensures you are up to date.")),Object(o.b)("h3",{id:"overriding-dependency-versions-of-the-sap-cloud-sdk-bill-of-material"},"Overriding Dependency Versions of the SAP Cloud SDK Bill-of-Material"),Object(o.b)("p",null,"Sometimes you may want to override the version of a specific dependency the SAP Cloud SDK is using.\nYou can achieve this by listing it in the dependency management ",Object(o.b)("em",{parentName:"p"},"before the SAP Cloud SDK BOM"),"."),Object(o.b)("p",null,"For example to override the version of SLF4J:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-api</artifactId>\n            <version>your-slf4j-version</version>\n        </dependency>\n        <dependency>\n            <groupId>com.sap.cloud.sdk</groupId>\n            <artifactId>sdk-bom</artifactId>\n            <version>latest-sdk-version</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Remember that including a dependency in the ",Object(o.b)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section only enforces its version.\nIt does not yet include it as a dependency in your project."))))}s.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return t?i.a.createElement(m,c(c({ref:n},l),{},{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=b;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);