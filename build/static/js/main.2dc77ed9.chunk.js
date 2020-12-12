(this["webpackJsonpmaterial-table-api-crud"]=this["webpackJsonpmaterial-table-api-crud"]||[]).push([[0],{362:function(e,t,a){},388:function(e,t,a){e.exports=a(503)},393:function(e,t,a){},394:function(e,t,a){},503:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=(a(393),a(82)),f=a(341),s=a(530),l=a(324),u=a(342),m=a(254),d=a(378),b=a.n(d),j=(a(394),a(66)),O=a(527),w=a(184),E=a.n(w),p=a(203),h=a.n(p),g=a(213),v=a.n(g),R=a(204),k=a.n(R),y=a(211),P=a.n(y),S=a(128),_=a.n(S),C=a(127),D=a.n(C),x=a(205),N=a.n(x),A=a(206),B=a.n(A),U=a(208),F=a.n(U),M=a(209),T=a.n(M),L=a(210),G=a.n(L),J=a(214),K=a.n(J),V=a(207),W=a.n(V),z=a(212),I=a.n(z),$=a(215),q=a.n($),H=a(531),Q=a(377),X=a.n(Q).a.create({baseURL:"https://table-project.azurewebsites.net"}),Y=(a(362),{Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(h.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(G.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(K.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))}))});var Z=function(e){var t=e.companies,a={};t.forEach((function(e){a[e.company_name]=e.company_name}));var c=[{title:"Market Name",field:"market_name"},{title:"Companies",field:"companies",lookup:a},{title:"Keywords",field:"keywords"}],o=Object(n.useState)([]),f=Object(i.a)(o,2),s=f[0],l=f[1],u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],b=m[1],w=Object(n.useState)([]),p=Object(i.a)(w,2),h=p[0],g=p[1];return Object(n.useEffect)((function(){X.get("/markets").then((function(e){l(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"table"},r.a.createElement(O.a,{container:!0,spacing:1},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("div",null,d&&r.a.createElement(H.a,{severity:"error"},h.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(E.a,{title:"Market Table",columns:c,data:s,icons:Y,editable:{onRowUpdate:function(e,t){return new Promise((function(a){!function(e,t,a){var n=[];""===e.market_name&&n.push("Please enter market name"),""===e.companies&&n.push("Please enter companies"),""===e.keywords&&n.push("Please enter valid keywords"),n.length<1?X.patch("/markets/"+e._id,e).then((function(n){var r=Object(j.a)(s);r[t.tableData._id]=e,l(Object(j.a)(r)),a(),window.location.reload(!1),b(!1),g([])})).catch((function(e){g(["Update failed! Server error"]),b(!0),a()})):(g(n),b(!0),a())}(e,t,a)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var a=[];void 0===e.market_name&&a.push("Please enter market name"),void 0===e.companies&&a.push("Please enter companies"),void 0===e.keywords&&a.push("Please enter keywords"),a.length<1?X.post("/markets",e).then((function(a){var n=Object(j.a)(s);n.push(e),l(n),t(),window.location.reload(!1),g([]),b(!1)})).catch((function(e){g(["Cannot add data. Server error!"]),b(!0),t()})):(g(a),b(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){X.delete("/markets/"+e._id).then((function(a){var n=Object(j.a)(s),r=e.tableData._id,c=n.filter((function(e){return e._id!==r}));l(Object(j.a)(c)),t(),window.location.reload(!1)})).catch((function(e){g(["Delete failed! Server error"]),b(!0),t()}))}(e,t)}))}},options:{exportButton:!0}}))))},ee={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(h.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(G.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(K.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(q.a,Object.assign({},e,{ref:t}))}))};var te=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];console.log("data",a);var o=Object(n.useState)(!1),f=Object(i.a)(o,2),s=f[0],l=f[1],u=Object(n.useState)([]),m=Object(i.a)(u,2),d=m[0],b=m[1];return Object(n.useEffect)((function(){X.get("/companies").then((function(e){c(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"table"},r.a.createElement(O.a,{container:!0,spacing:1},r.a.createElement(O.a,{item:!0,xs:12},r.a.createElement("div",null,s&&r.a.createElement(H.a,{severity:"error"},d.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(E.a,{title:"Company Table",columns:[{title:"Company Name",field:"company_name"},{title:"Keywords",field:"keywords"}],data:a,icons:ee,editable:{onRowUpdate:function(e,t){return new Promise((function(n){!function(e,t,n){var r=[];""===e.company_name&&r.push("Please enter company name"),""===e.keywords&&r.push("Please enter valid keywords"),r.length<1?X.patch("/companies/"+e._id,e).then((function(r){var o=Object(j.a)(a);o[t.tableData._id]=e,c(Object(j.a)(o)),n(),window.location.reload(!1),l(!1),b([])})).catch((function(e){b(["Update failed! Server error"]),l(!0),n()})):(b(r),l(!0),n())}(e,t,n)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var n=[];void 0===e.company_name&&n.push("Please enter company name"),void 0===e.keywords&&n.push("Please enter keywords"),n.length<1?X.post("/companies",e).then((function(n){var r=Object(j.a)(a);r.push(e),c(r),t(),window.location.reload(!1),b([]),l(!1)})).catch((function(e){b(["Cannot add data. Server error!"]),l(!0),t()})):(b(n),l(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){X.delete("/companies/"+e._id).then((function(n){var r=Object(j.a)(a),o=e.tableData._id,i=r.filter((function(e){return e._id!==o}));c(Object(j.a)(i)),t(),window.location.reload(!1)})).catch((function(e){b(["Delete failed! Server error"]),l(!0),t()}))}(e,t)}))}},options:{exportButton:!0}}))))},ae=a(222),ne=a(28),re=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var ce=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=re();return Object(n.useEffect)((function(){X.get("/companies").then((function(e){c(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(ae.a,null,r.a.createElement("div",null,r.a.createElement(s.a,{position:"static"},r.a.createElement(l.a,null,r.a.createElement(m.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(b.a,null)),r.a.createElement(ae.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement(u.a,{color:"inherit"},"Companies")),r.a.createElement(ae.b,{to:"/markets",style:{textDecoration:"none",color:"white"}},r.a.createElement(u.a,{color:"inherit"},"Markets")))),r.a.createElement(ne.c,null,r.a.createElement(ne.a,{path:"/markets"},r.a.createElement(Z,{companies:a})),r.a.createElement(ne.a,{path:"/"},r.a.createElement(te,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[388,1,2]]]);
//# sourceMappingURL=main.2dc77ed9.chunk.js.map