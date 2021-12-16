(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);a(52);var n=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))},r=a(1),i=a.n(r),s=a(15),o=a.n(s),c=a(22),l=a(5),b=a(21),d=a(31),m={firstName:"Benjamin",lastName:"Lesne",dateOfBirth:"07-08-1990",startDate:"08-08-1990",street:"antoine de jussieu",city:"Saint nazaire",state:"France",zipCode:2,department:"Sale"},u=Object(d.b)({name:"employees",initialState:[m,m,m],reducers:{addEmployee:function(e,t){e.push(t.payload)}}}),p=u.actions,j=u.reducer,v=p.addEmployee,h=j,g=Object(d.a)({reducer:{employees:h}}),O=a(8),f=a(9),x=(a(62),a(23)),y=(a(65),a(3)),N=function(e){var t=e.rows,a=e.previousPage,n=e.nextPage,r=e.canPreviousPage,i=e.canNextPage,s=e.pageIndex,o=e.pageSize,c=o*s,l=c+o;return Object(y.jsxs)("div",{className:"BottomNavigation",children:[Object(y.jsx)("div",{className:"BottomNavigation__showing-x-to-y-of-z-entries",children:Object(y.jsxs)("p",{children:["Showing ",c," to ",l," of ",t.length," entries"]})}),Object(y.jsxs)("div",{className:"BottomNavigation__buttons-wrapper",children:[Object(y.jsx)("button",{className:"BottomNavigation__buttons",onClick:function(){return a()},disabled:!r,children:"Previous"}),Object(y.jsxs)("button",{className:"BottomNavigation__buttons",onClick:function(){return n()},disabled:!i,children:["Next"," "]})]})]})},C=(a(67),function(e){var t=e.pageSize,a=e.setPageSize,n=e.preGlobalFilteredRows,i=e.globalFilter,s=e.setGlobalFilter,o=e.useAsyncDebounce,c=n.length,l=Object(r.useState)(i),b=Object(O.a)(l,2),d=b[0],m=b[1],u=o((function(e){s(e||void 0)}),200);return Object(y.jsxs)("div",{className:"TopNavigation",children:[Object(y.jsxs)("div",{className:"TopNavigation__select-number-of-entries-wrapper",children:[Object(y.jsx)("span",{children:"Show"}),Object(y.jsx)("select",{value:t,onChange:function(e){a(Number(e.target.value))},children:[10,25,50,100].map((function(e){return Object(y.jsx)("option",{value:e,children:e},e)}))}),Object(y.jsx)("span",{children:"entries"})]}),Object(y.jsxs)("div",{className:"TopNavigation__search-bar-wrapper",children:[Object(y.jsx)("label",{children:"Search:"}),Object(y.jsx)("input",{className:"TopNavigation__search-bar",value:d||"",onChange:function(e){m(e.target.value),u(e.target.value)},placeholder:"".concat(c," records...")})]})]})}),I=function(e){var t=e.data,a=e.columns,n=Object(x.useTable)({columns:a,data:t},x.useGlobalFilter,x.useSortBy,x.usePagination),r=n.getTableProps,i=n.getTableBodyProps,s=n.headerGroups,o=n.prepareRow,c=n.rows,l=n.page,b=n.canPreviousPage,d=n.canNextPage,m=n.nextPage,u=n.previousPage,p=n.setPageSize,j=n.state,v=j.pageIndex,h=j.pageSize,g=j.globalFilter,O=n.preGlobalFilteredRows,I=n.setGlobalFilter;return Object(y.jsxs)("div",{className:"EmployeesTable-wrapper",children:[Object(y.jsx)(C,{pageSize:h,setPageSize:p,preGlobalFilteredRows:O,globalFilter:g,setGlobalFilter:I,useAsyncDebounce:x.useAsyncDebounce}),Object(y.jsxs)("table",Object(f.a)(Object(f.a)({},r()),{},{id:"employee-table",className:"EmployeesTable",children:[Object(y.jsx)("thead",{children:s.map((function(e){return Object(y.jsx)("tr",Object(f.a)(Object(f.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(y.jsxs)("th",Object(f.a)(Object(f.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"EmployeesTable__header",children:[e.render("Header"),Object(y.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))}))}))}),Object(y.jsx)("tbody",Object(f.a)(Object(f.a)({},i()),{},{children:l.map((function(e,t){return o(e),Object(y.jsx)("tr",Object(f.a)(Object(f.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(y.jsx)("td",Object(f.a)(Object(f.a)({},e.getCellProps()),{},{className:"EmployeesTable__cell",children:e.render("Cell")}))}))}))}))}))]})),Object(y.jsx)(N,{rows:c,previousPage:u,nextPage:m,canPreviousPage:b,canNextPage:d,pageIndex:v,pageSize:h})]})},S=["Sales","Marketing","Engineering","Human Ressources","Legal"],P=[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Start Date",accessor:"startDate"},{Header:"Department",accessor:"department"},{Header:"Date of Birth",accessor:"dateOfBirth"},{Header:"Street",accessor:"street"},{Header:"City",accessor:"city"},{Header:"State",accessor:"state"},{Header:"Zip Code",accessor:"zipCode"}],w=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],_=function(){var e=Object(r.useState)(!1),t=Object(O.a)(e,2),a=t[0],n=(t[1],Object(b.c)((function(e){return e.employees}))),i=Object(r.useMemo)((function(){return P}),[]),s=Object(r.useMemo)((function(){return n}),[n]);return Object(y.jsxs)("div",{id:"employee-div",className:"container",children:[Object(y.jsx)("h1",{children:"Current Employees"}),Object(y.jsx)("button",{onClick:function(){return console.log(n)},children:"Cliquez bande de salope"}),a?Object(y.jsx)("div",{children:"Loading..."}):Object(y.jsx)(I,{data:s,columns:i}),Object(y.jsx)(c.b,{to:"/",children:"Home"})]})},E=(a(68),function(){return Object(y.jsx)("header",{className:"title",children:Object(y.jsx)("h1",{children:"HRnet"})})}),M=(a(69),a(47)),D=a.n(M),F=(a(70),function e(t){return t.map((function(t){switch(t.element){case"input":return Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)("label",{htmlFor:t.id,className:"createEmployee__label",children:t.id}),Object(y.jsx)("input",{className:"createEmployee__input",type:"text",id:t.id})]},t.id+"-fragment");case"DatePicker":return Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)("label",{htmlFor:t.id,className:"createEmployee__label",children:t.id}),Object(y.jsx)(D.a,{id:t.id,selected:t.selected,onChange:t.onChange,maxDate:t.maxDate})]},t.id+"-fragment");case"fieldset":return Object(y.jsx)("fieldset",{className:"createEmployee__fieldset",children:e(t.childrenInputs)},t.id);case"select":return Object(y.jsx)("select",{id:t.id,children:t.options.map((function(e){var t="object"===typeof e?e.name:e;return Object(y.jsx)("option",{children:t},t)}))},t.id);default:return console.log("unknown child element"),null}}))}),B=a(11),k=a.n(B),T=a(20);var A=function(e,t,a){var n,r=document.getElementById("".concat(t.id+"__error-message"));return e?(t.setCustomValidity(""),null===(n=r)||void 0===n||n.remove(),!0):(r||(r=(new DOMParser).parseFromString("<p id=".concat(t.id+"__error-message",' className="input__error-message">\n          ').concat(a,"\n        </p>"),"text/html").body.firstChild,t.after(r),t.setCustomValidity(a)),!1)},H=function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.map((function(e){switch(e.id){case"city":case"street":case"last-name":case"first-name":return A("string"===typeof e.value&&e.value.length>0,e,"It must be a string");case"zip-code":return A("number"===typeof parseInt(e.value)&&parseInt(e.value)>0,e,"It must be a Number greater than zero");case"department":return A(S.includes(e.value),e,"Select a valid department option");case"state":return A(w.filter((function(t){return t.name===e.value})).length>0,e,"Select a valid state option");case"date-of-birth":case"start-date":return A(/^(\d{2}\/\d{2}\/\d{4})$/.test(e.value),e,"It must be a date with mm-dd-yyyy format");default:return alert("error: unknown input id"),console.log(e.id),!1}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=H,G=function(){var e=Object(T.a)(k.a.mark((function e(t,a,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t>=0&&(n.push(a[t]),G(t-1,a,n)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),R=G,L=function(){var e=Object(T.a)(k.a.mark((function e(t,a){var n,r,i,s,o,c,l,b,d,m,u,p;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.forms["create-employee"].elements.length-2,r=document.forms["create-employee"].elements,e.next=5,R(n,r,[]).then((function(e){return e.filter((function(e){return"SELECT"===e.tagName||"INPUT"===e.tagName}))}));case 5:return i=e.sent,e.prev=6,e.next=9,z(i);case 9:e.sent.includes(!1)||(s=document.getElementById("first-name").value,o=document.getElementById("last-name").value,c=document.getElementById("street").value,l=document.getElementById("city").value,b=document.getElementById("state").value,d=document.getElementById("zip-code").value,m=document.getElementById("department").value,u=document.getElementById("start-date").value,p=document.getElementById("date-of-birth").value,a({firstName:s,lastName:o,dateOfBirth:p,startDate:u,street:c,city:l,state:b,zipCode:d,department:m}),document.getElementById("modal").setAttribute("open","")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t,a){return e.apply(this,arguments)}}(),V=L,W=(a(113),function(){return Object(y.jsx)("dialog",{className:"Modal",id:"modal",children:Object(y.jsxs)("div",{className:"Modal__content-wrapper",children:[Object(y.jsx)("span",{className:"Modal__message",children:"Employee Created!"}),Object(y.jsx)("button",{onClick:function(){document.getElementById("modal").removeAttribute("open")},className:"Modal__close-button"})]})})}),K=a(42),J=function(){var e=Object(r.useState)(null),t=Object(O.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(null),s=Object(O.a)(i,2),o=s[0],c=s[1],l=Object(b.b)(),d=[{element:"input",type:"text",id:"first-name"},{element:"input",type:"text",id:"last-name"},{element:"DatePicker",selected:a,onChange:function(e){return n(e)},maxDate:Object(K.default)(new Date,18),id:"date-of-birth"},{element:"DatePicker",selected:o,onChange:function(e){return c(e)},maxDate:new Date,id:"start-date"},{element:"fieldset",id:"createEmployeeFieldset",childrenInputs:[{element:"input",type:"text",id:"street"},{element:"input",type:"text",id:"city"},{element:"select",id:"state",options:w},{element:"input",type:"number",id:"zip-code"}]},{element:"select",id:"department",options:S}];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{action:"#",id:"create-employee",className:"createEmployeeForm",children:[F(d),Object(y.jsx)("button",{type:"submit",onClick:function(e){return V(e,(function(e){return l(v(e))}))},children:"Save"})]}),Object(y.jsx)(W,{})]})},U=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(E,{}),Object(y.jsxs)("main",{className:"container",children:[Object(y.jsx)(c.b,{to:"/employee-list",children:"View Current Employees"}),Object(y.jsx)("h2",{children:"Create Employee"}),Object(y.jsx)(J,{})]})]})};o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(b.a,{store:g,children:Object(y.jsx)(c.a,{children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{index:!0,element:Object(y.jsx)(U,{})}),Object(y.jsx)(l.a,{path:"/employee-list",element:Object(y.jsx)(_,{})})]})})})}),document.getElementById("root")),n()},52:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.1c73c6af.chunk.js.map