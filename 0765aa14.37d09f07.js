(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(87)),p={id:"feeds",title:"Feeds"},s={unversionedId:"feeds",id:"feeds",isDocsHomePage:!1,title:"Feeds",description:"API Calls",source:"@site/docs/feeds.md",slug:"/feeds",permalink:"/argo-web-api/docs/feeds",version:"current",sidebar:"someSidebar",previous:{title:"Tenants",permalink:"/argo-web-api/docs/"},next:{title:"Downtimes",permalink:"/argo-web-api/docs/downtimes"}},c=[{value:"API Calls",id:"api-calls",children:[]},{value:"GET: List Feed topology parameters",id:"get-list-feed-topology-parameters",children:[{value:"Input",id:"input",children:[]},{value:"Request headers",id:"request-headers",children:[]},{value:"Response",id:"response",children:[]}]},{value:"PUT: Update topology feed parameters",id:"put-update-topology-feed-parameters",children:[{value:"Input",id:"input-1",children:[]},{value:"Response",id:"response-1",children:[]}]},{value:"GET: List Feed weights parameters",id:"get-list-feed-weights-parameters",children:[{value:"Input",id:"input-2",children:[]},{value:"Request headers",id:"request-headers-2",children:[]},{value:"Response",id:"response-2",children:[]}]},{value:"PUT: Update topology feed parameters",id:"put-update-topology-feed-parameters-1",children:[{value:"Input",id:"input-3",children:[]},{value:"Response",id:"response-3",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api-calls"},"API Calls"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Shortcut"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GET: Feed Topology information"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This method can be used to retrieve a list of feed topology parameters"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#1"})," Description"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PUT: Update feed topology info"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This method can be used to update feed topology information parameters"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#2"})," Description"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GET: Feed Weights information"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This method can be used to retrieve a list of feed weights parameters"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#3"})," Description"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"PUT: Update feed weights info"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This method can be used to update feed weights information parameters"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"#4"})," Description"))))),Object(o.b)("a",{id:"1"}),Object(o.b)("h2",{id:"get-list-feed-topology-parameters"},"[GET]",": List Feed topology parameters"),Object(o.b)("p",null,"This method can be used to retrieve a list of feed topology parameters"),Object(o.b)("h3",{id:"input"},"Input"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /feeds/topology\n")),Object(o.b)("h3",{id:"request-headers"},"Request headers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json\n")),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("p",null,"Headers: ",Object(o.b)("inlineCode",{parentName:"p"},"Status: 200 OK")),Object(o.b)("h4",{id:"response-body"},"Response body"),Object(o.b)("p",null,"Json Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "status": {\n  "message": "Success",\n  "code": "200"\n },\n "data": [\n  {\n   "type": "gocdb",\n   "feed_url": "https://somewhere.foo.bar/topology/feed",\n   "paginated": "true",\n   "fetch_type": [\n    "item1",\n    "item2"\n   ],\n   "uid_endpoints": "endpointA"\n  }\n ]\n}\n')),Object(o.b)("a",{id:"2"}),Object(o.b)("h2",{id:"put-update-topology-feed-parameters"},"[PUT]",": Update topology feed parameters"),Object(o.b)("p",null,"This method is used to upadte topology feed parameters"),Object(o.b)("h3",{id:"input-1"},"Input"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PUT /feeds/topology\n")),Object(o.b)("h4",{id:"put-body"},"PUT BODY"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  {\n   "type": "gocdb",\n   "feed_url": "https://somewhere.foo.bar/topology/feed",\n   "paginated": "true",\n   "fetch_type": [\n    "item1",\n    "item2"\n   ],\n   "uid_endpoints": "endpointA"\n  }\n')),Object(o.b)("h4",{id:"request-headers-1"},"Request headers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json\n")),Object(o.b)("h3",{id:"response-1"},"Response"),Object(o.b)("p",null,"Headers: ",Object(o.b)("inlineCode",{parentName:"p"},"Status: 200 OK")),Object(o.b)("h4",{id:"response-body-1"},"Response body"),Object(o.b)("p",null,"Json Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "status": {\n  "message": "Feeds resource succesfully updated",\n  "code": "200"\n },\n "data": [\n  {\n   "type": "gocdb",\n   "feed_url": "https://somewhere2.foo.bar/topology/feed",\n   "paginated": "true",\n   "fetch_type": [\n    "item4",\n    "item5"\n   ],\n   "uid_endpoints": "endpointA"\n  }\n ]\n}\n')),Object(o.b)("a",{id:"3"}),Object(o.b)("h2",{id:"get-list-feed-weights-parameters"},"[GET]",": List Feed weights parameters"),Object(o.b)("p",null,"This method can be used to retrieve a list of feed weights parameters"),Object(o.b)("h3",{id:"input-2"},"Input"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"GET /feeds/weights\n")),Object(o.b)("h3",{id:"request-headers-2"},"Request headers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json\n")),Object(o.b)("h3",{id:"response-2"},"Response"),Object(o.b)("p",null,"Headers: ",Object(o.b)("inlineCode",{parentName:"p"},"Status: 200 OK")),Object(o.b)("h4",{id:"response-body-2"},"Response body"),Object(o.b)("p",null,"Json Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "type": "vapor",\n      "feed_url": "https://somewhere.foo.bar/weight/feed",\n      "weight_type": "hepspec2006 cpu",\n      "group_type": "SITES"\n    }\n  ]\n}\n')),Object(o.b)("a",{id:"2"}),Object(o.b)("h2",{id:"put-update-topology-feed-parameters-1"},"[PUT]",": Update topology feed parameters"),Object(o.b)("p",null,"This method is used to upadte topology feed parameters"),Object(o.b)("h3",{id:"input-3"},"Input"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PUT /feeds/topology\n")),Object(o.b)("h4",{id:"put-body-1"},"PUT BODY"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' {\n      "type": "item2",\n      "feed_url": "https://somewhere.foo.bar/weight/feed",\n      "weight_type": "weight_type2",\n      "group_type": "group2"\n}\n')),Object(o.b)("h4",{id:"request-headers-3"},"Request headers"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json\n")),Object(o.b)("h3",{id:"response-3"},"Response"),Object(o.b)("p",null,"Headers: ",Object(o.b)("inlineCode",{parentName:"p"},"Status: 200 OK")),Object(o.b)("h4",{id:"response-body-3"},"Response body"),Object(o.b)("p",null,"Json Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "message": "Feeds resource succesfully updated",\n    "code": "200"\n  },\n  "data": [\n    {\n      "type": "item2",\n      "feed_url": "https://somewhere2.foo.bar/weights/feed",\n      "weight_type": "weight_type2",\n      "group_type": "group2"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),i=d(n),u=a,O=i["".concat(p,".").concat(u)]||i[u]||l[u]||o;return n?r.a.createElement(O,s(s({ref:t},b),{},{components:n})):r.a.createElement(O,s({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var b=2;b<o;b++)p[b]=n[b];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);