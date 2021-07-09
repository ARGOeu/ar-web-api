(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),b=(n(0),n(89)),p={id:"trends",title:"trends"},l={unversionedId:"trends",id:"trends",isDocsHomePage:!1,title:"trends",description:"API calls to find flapping trends among metrics, endpoints, services and groups by Date",source:"@site/docs/trends.md",slug:"/trends",permalink:"/argo-web-api/docs/trends",version:"current",sidebar:"someSidebar",previous:{title:"issues",permalink:"/argo-web-api/docs/issues"},next:{title:"Metric Resulst",permalink:"/argo-web-api/docs/metric_results"}},c=[{value:"API calls to find flapping trends among metrics, endpoints, services and groups by Date",id:"api-calls-to-find-flapping-trends-among-metrics-endpoints-services-and-groups-by-date",children:[{value:"GET: Daily Flapping trends in service endpoint metrics",id:"get-daily-flapping-trends-in-service-endpoint-metrics",children:[]},{value:"Input",id:"input",children:[]},{value:"GET: Daily Flapping trends in service endpoints",id:"get-daily-flapping-trends-in-service-endpoints",children:[]},{value:"Input",id:"input-1",children:[]},{value:"GET: Daily Flapping trends in services",id:"get-daily-flapping-trends-in-services",children:[]},{value:"Input",id:"input-2",children:[]},{value:"GET: Daily Flapping trends in endpoint groups",id:"get-daily-flapping-trends-in-endpoint-groups",children:[]},{value:"Input",id:"input-3",children:[]}]}],i={rightToc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"api-calls-to-find-flapping-trends-among-metrics-endpoints-services-and-groups-by-date"},"API calls to find flapping trends among metrics, endpoints, services and groups by Date"),Object(b.b)("p",null,"Flapping items are the ones that change state too frequently causing a lot of alarms and notifications. State flapping might be the case of wrong configuration. "),Object(b.b)("h3",{id:"get-daily-flapping-trends-in-service-endpoint-metrics"},"[GET]",": Daily Flapping trends in service endpoint metrics"),Object(b.b)("p",null,"This method may be used to retrieve a list of top flapping service endpoint metrics. "),Object(b.b)("h3",{id:"input"},"Input"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/metrics?date=2020-05-01\n")),Object(b.b)("h4",{id:"path-parameters"},"Path Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"report_name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name of the report"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"url-parameters"},"Url Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date to view problematic endpoints of"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"start_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define start date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"end_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define end date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer to define a top number of results displayed"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"granularity")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string value to define if you want monthly granularity in the results - e.g ",Object(b.b)("inlineCode",{parentName:"td"},"?granularity=monthly")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"headers"},"Headers"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n")),Object(b.b)("h4",{id:"response-code"},"Response Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("h6",{id:"example-request"},"Example Request:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/metrics?date=2020-05-01\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "metric": "check-1",\n      "flapping": 55\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "metric": "check-2",\n      "flapping": 40\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-B",\n      "endpoint": "hostb.example.foo",\n      "metric": "web-check",\n      "flapping": 12\n    },\n    {\n      "endpoint_group": "SITE-B",\n      "service": "service-A",\n      "endpoint": "hosta.example2.foo",\n      "metric": "web-check",\n      "flapping": 5\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-range-and-top-number-of-results"},"Example Request with Range and top number of results:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/metrics?start_date=2020-05-01&end_date=2021-06-15&top=3\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-1"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "metric": "check-1",\n      "flapping": 255\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "metric": "check-2",\n      "flapping": 340\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-B",\n      "endpoint": "hostb.example.foo",\n      "metric": "web-check",\n      "flapping": 112\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-granularitymonthly-option-enabled"},"Example Request with granularity=monthly option enabled:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/metrics?start_date=2020-04-01&end_date=2021-05-31&granularity=monthly&top=3\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-2"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "date": "2015-04",\n      "top": [\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "metric": "check-1",\n          "flapping": 55\n        },\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "metric": "check-2",\n          "flapping": 40\n        },\n        {\n          "endpoint_group": "SITE-XB",\n          "service": "service-XA",\n          "endpoint": "hosta.examplex2.foo",\n          "metric": "web-check",\n          "flapping": 25\n        }\n      ]\n    },\n    {\n      "date": "2015-05",\n      "top": [\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "metric": "check-1",\n          "flapping": 100\n        },\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "metric": "check-2",\n          "flapping": 72\n        },\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-B",\n          "endpoint": "hostb.example.foo",\n          "metric": "web-check",\n          "flapping": 20\n        }\n      ]\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"get-daily-flapping-trends-in-service-endpoints"},"[GET]",": Daily Flapping trends in service endpoints"),Object(b.b)("p",null,"This method may be used to retrieve a list of top flapping service endpoints"),Object(b.b)("h3",{id:"input-1"},"Input"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/endpoints?date=2020-05-01\n")),Object(b.b)("h4",{id:"path-parameters-1"},"Path Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"report_name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name of the report"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"url-parameters-1"},"Url Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date to view problematic endpoints of"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"start_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define start date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"end_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define end date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer to define a top number of results displayed"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"granularity")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string value to define if you want monthly granularity in the results - e.g ",Object(b.b)("inlineCode",{parentName:"td"},"?granularity=monthly")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"headers-1"},"Headers"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n")),Object(b.b)("h4",{id:"response-code-1"},"Response Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("h6",{id:"example-request-1"},"Example Request:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/endpoints?date=2020-05-01\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-3"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "flapping": 55\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-B",\n      "endpoint": "hostb.example.foo",\n      "flapping": 12\n    },\n    {\n      "endpoint_group": "SITE-B",\n      "service": "service-A",\n      "endpoint": "hosta.example2.foo",\n      "flapping": 5\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-date-range-and-top-number-of-results"},"Example Request with date range and top number of results:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/endpoints?start_date=2020-05-01&end_date=2020-05-15&top=2\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-4"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "endpoint": "hosta.example.foo",\n      "flapping": 83\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-B",\n      "endpoint": "hostb.example.foo",\n      "flapping": 53\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-granularitymonthly-option-enabled-1"},"Example Request with granularity=monthly option enabled"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/endpoints?start_date=2020-04-01&end_date=2020-05-31&top=2&granularity=monthly\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-5"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "date": "2015-04",\n      "top": [\n        {\n          "endpoint_group": "SITE-XB",\n          "service": "service-XA",\n          "endpoint": "hosta.exampleX2.foo",\n          "flapping": 35\n        },\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "flapping": 25\n        }\n      ]\n    },\n    {\n      "date": "2015-05",\n      "top": [\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-A",\n          "endpoint": "hosta.example.foo",\n          "flapping": 103\n        },\n        {\n          "endpoint_group": "SITE-A",\n          "service": "service-B",\n          "endpoint": "hostb.example.foo",\n          "flapping": 19\n        }\n      ]\n    }\n  ]\n}\n')),Object(b.b)("h3",{id:"get-daily-flapping-trends-in-services"},"[GET]",": Daily Flapping trends in services"),Object(b.b)("p",null,"This method may be used to retrieve a list of top flapping services"),Object(b.b)("h3",{id:"input-2"},"Input"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/services?date=2020-05-01\n")),Object(b.b)("h4",{id:"path-parameters-2"},"Path Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"report_name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name of the report"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"url-parameters-2"},"Url Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date to view problematic endpoints of"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"start_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define start date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"end_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define end date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer to define a top number of results displayed"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"granularity")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string value to define if you want monthly granularity in the results - e.g ",Object(b.b)("inlineCode",{parentName:"td"},"?granularity=monthly")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"headers-2"},"Headers"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n")),Object(b.b)("h4",{id:"response-code-2"},"Response Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("h6",{id:"example-request-2"},"Example Request:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/services?date=2020-05-01\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-6"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "flapping": 55\n    },\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-B",\n      "flapping": 12\n    },\n    {\n      "endpoint_group": "SITE-B",\n      "service": "service-A",\n      "flapping": 5\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-date-range-and-top-number-of-results-1"},"Example Request with date range and top number of results:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/services?start_date=2020-05-01&end_date=2020-07-05&top=1\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-7"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "service": "service-A",\n      "flapping": 955\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-granularitymonthly-option-enabled-2"},"Example Request with granularity=monthly option enabled:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/services?start_date=2020-04-01&end_date=2020-05-31&top=1&granularity=monthly\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-8"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n "status": {\n  "message": "Success",\n  "code": "200"\n },\n "data": [\n  {\n   "date": "2015-04",\n   "top": [\n    {\n     "endpoint_group": "SITE-A",\n     "service": "service-A",\n     "flapping": 25\n    }\n   ]\n  },\n  {\n   "date": "2015-05",\n   "top": [\n    {\n     "endpoint_group": "SITE-A",\n     "service": "service-A",\n     "flapping": 98\n    }\n   ]\n  }\n ]\n}\n')),Object(b.b)("h3",{id:"get-daily-flapping-trends-in-endpoint-groups"},"[GET]",": Daily Flapping trends in endpoint groups"),Object(b.b)("p",null,"This method may be used to retrieve a list of top endpoint groups"),Object(b.b)("h3",{id:"input-3"},"Input"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/groups?date=2020-05-01\n")),Object(b.b)("h4",{id:"path-parameters-3"},"Path Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"report_name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name of the report"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"YES"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"url-parameters-3"},"Url Parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Date to view problematic endpoints of"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"start_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define start date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"end_date")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"define end date to view problematic endpoints over range"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer to define a top number of results displayed"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"granularity")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string value to define if you want monthly granularity in the results - e.g ",Object(b.b)("inlineCode",{parentName:"td"},"?granularity=monthly")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NO"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h4",{id:"headers-3"},"Headers"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n")),Object(b.b)("h4",{id:"response-code-3"},"Response Code"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("h6",{id:"example-request-3"},"Example Request:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/groups?date=2020-05-01\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-9"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "flapping": 55\n    },\n    {\n      "endpoint_group": "SITE-B",\n      "flapping": 5\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-date-range-and-top-number-of-results-2"},"Example Request with date range and top number of results:"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/groups?start_date=2020-05-01&end_date=2020-05-03&top=1\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-10"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "status": {\n    "message": "Success",\n    "code": "200"\n  },\n  "data": [\n    {\n      "endpoint_group": "SITE-A",\n      "flapping": 75\n    }\n  ]\n}\n')),Object(b.b)("h6",{id:"example-request-with-granularitymonthly-option-enabled-3"},"Example Request with granularity=monthly option enabled"),Object(b.b)("p",null,"URL:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"/trends/{report_name}/flapping/groups?start_date=2020-04-01&end_date=2020-05-31&top=1&granularity=monthly\n")),Object(b.b)("p",null,"Headers:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"x-api-key: shared_key_value\nAccept: application/json or application/xml\n\n")),Object(b.b)("h6",{id:"example-response-11"},"Example Response:"),Object(b.b)("p",null,"Code:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"Status: 200 OK\n")),Object(b.b)("p",null,"Reponse body:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n "status": {\n  "message": "Success",\n  "code": "200"\n },\n "data": [\n  {\n   "date": "2015-04",\n   "top": [\n    {\n     "endpoint_group": "SITE-A",\n     "flapping": 35\n    }\n   ]\n  },\n  {\n   "date": "2015-05",\n   "top": [\n    {\n     "endpoint_group": "SITE-A",\n     "flapping": 66\n    }\n   ]\n  }\n ]\n}\n')))}o.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=o(n),j=a,s=d["".concat(p,".").concat(j)]||d[j]||O[j]||b;return n?r.a.createElement(s,l(l({ref:t},i),{},{components:n})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,p=new Array(b);p[0]=j;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var i=2;i<b;i++)p[i]=n[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);