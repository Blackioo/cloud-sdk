(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{143:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return d}));var n=t(2),r=t(6),o=(t(0),t(181)),i={id:"overview",title:"OData with the Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},c={unversionedId:"java/features/odata/overview",id:"java/features/odata/overview",isDocsHomePage:!1,title:"OData with the Cloud SDK for Java",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",source:"@site/docs/java/features/odata/overview.mdx",slug:"/java/features/odata/overview",permalink:"/cloud-sdk/docs/java/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/overview.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1600064950,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Getting started - SDK for Java",permalink:"/cloud-sdk/docs/java/getting-started"},next:{title:"Generate a typed OData client for Java",permalink:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"}},s=[{value:"What is OData?",id:"what-is-odata",children:[]},{value:"What OData versions are supported?",id:"what-odata-versions-are-supported",children:[]},{value:"What does the Cloud SDK offer?",id:"what-does-the-cloud-sdk-offer",children:[{value:"Type-safe OData client",id:"type-safe-odata-client",children:[]},{value:"Code generator",id:"code-generator",children:[]},{value:"Connectivity",id:"connectivity",children:[]}]},{value:"Popular use-cases for Type-safe OData client",id:"popular-use-cases-for-type-safe-odata-client",children:[{value:"You are extending an SAP product or service, building a middle-ware, publishing a cloud App",id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app",children:[]},{value:"Developing and publishing OData service",id:"developing-and-publishing-odata-service",children:[]},{value:"Coding convention and interoparability",id:"coding-convention-and-interoparability",children:[]},{value:"Advanced features and custom development",id:"advanced-features-and-custom-development",children:[]}]}],l={rightToc:s};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-odata"},"What is OData?"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/"}),"OData")," is an open standard for building and consuming RESTful APIs. It defines a query language to send and retrieve data via HTTP and to perform operations on data."),Object(o.b)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4. The latter comes with extended and improved functionality. You can find full details on OData standards in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"documentation"),"."),Object(o.b)("h2",{id:"what-odata-versions-are-supported"},"What OData versions are supported?"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"OData protocol version"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Cloud SDK V3"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"}),"OData v2")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"}),"OData v4")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")))),Object(o.b)("h2",{id:"what-does-the-cloud-sdk-offer"},"What does the Cloud SDK offer?"),Object(o.b)("p",null,"The Cloud SDK simplifies consumption of OData services through the following features:"),Object(o.b)("h3",{id:"type-safe-odata-client"},"Type-safe OData client"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests"),Object(o.b)("li",{parentName:"ul"},"For many popular SAP OData services we ship pre-generated type-safe clients. In SAP universe they are called Virtual Data Model or VDM. The most popular type-safe client module contains a collection of ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"}),"all OData services of SAP S/4HANA Cloud")),Object(o.b)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for Java.")),Object(o.b)("h3",{id:"code-generator"},"Code generator"),Object(o.b)("p",null,"If you need a client for an OData service where we do not ship a pre-generated client use our versatile ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"generate-typed-odata-v2-and-v4-client-for-java"}),"code generator")," to convert OData service definition into type-safe Java client library. You can do it for any service either developed by yourself, provided by SAP or other 3rd party."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service definition usually comes in form of ",Object(o.b)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of Odata service. The simplest way to obtain it if you have access to the service is navigating to ",Object(o.b)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint. You can easily generate a client for any 3rd party service or a service that you've build on you own."),Object(o.b)("li",{parentName:"ul"},"You can invoke code generator via our command line interface (CLI) or via Maven plugin")),Object(o.b)("h3",{id:"connectivity"},"Connectivity"),Object(o.b)("p",null,"We simplify connectivity to SAP enabled OData services via type-safe abstractions over ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../connectivity/sdk-connectivity-destination-service"}),"Destinations"),", Authentication and some other related concepts."),Object(o.b)("h2",{id:"popular-use-cases-for-type-safe-odata-client"},"Popular use-cases for Type-safe OData client"),Object(o.b)("h3",{id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app"},"You are extending an SAP product or service, building a middle-ware, publishing a cloud App"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Type-safe consumption of OData services.")," By consumption, we mean building and executing API calls against OData service with serialized request data and processing serialized responses. All in a type-safe way. Your code focuses on business logic and leaves lower level tasks to the SAP Cloud SDK."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Converting OData API into a different flavor of REST API.")," You can use SAP Cloud SDK for Java to build an App that converts your desired REST format to OData calls and vice versa. Such App may serve as a proxy, integration adaptor, service gateway, etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Serving as a layer to fetch data from and push data to OData services.")," Instead of building your query tool you can fetch the data with SAP Cloud SDK and pass it on to your UX framework, analytics tool, data converter, etc. Reverse data flow will allow you to push new or modified data to the OData service for processing or persistence. In that manner, the SAP Cloud SDK can help  you implement adapters for a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"}),"hexagonal architecture"),".")),Object(o.b)("h3",{id:"developing-and-publishing-odata-service"},"Developing and publishing OData service"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Use SAP Cloud SDK to create a robust automated testing framework.")," Benefiting from a code generator provided by us you can quickly create a type-safe client for your own OData service and scale your automated testing capabilities. This comes with the advantage of easily updating your client code while your service grows and its metadata evolves."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Shipping your client module with SAP Cloud SDK for Java.")," As a service developer, you're usually interested in an easy way for your customers to consume your service. That's exactly what Cloud SDK does. When your service approaches release you can generate an API client with the SAP Cloud SDK and release it to developers using your service. As an SAP service, you can contribute your API definition via our contribution process and benefit from shipping of a ",Object(o.b)("strong",{parentName:"li"},"pre-generated type-safe client")," as a Maven module of SAP Cloud SDK.")),Object(o.b)("h3",{id:"coding-convention-and-interoparability"},"Coding convention and interoparability"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Making sure different teams in your organization coherently consume OData services.")," SAP Cloud SDK will help you to save developers' time, ensure best coding practices, and knowledge sharing. Such an approach ensures you won't have duplication of work to save the same problem by different teams and guaranteed high levels of interoperability and integration.")),Object(o.b)("h3",{id:"advanced-features-and-custom-development"},"Advanced features and custom development"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Using certain SDK features for Custom OData service consumption or publishing.")," If SDK's features for OData consumption do not cover your use-case end-to-end you can benefit from our public utility and helper methods like OData expression builder, non-type safe request builders, and some others. Make sure you know what you're doing because SDK can't guarantee convenience and correctness in such a case.")))}d.isMDXComponent=!0},181:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return v}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=d(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=n,v=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return t?r.a.createElement(v,c(c({ref:a},l),{},{components:t})):r.a.createElement(v,c({ref:a},l))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);