(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);a(52);var n=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))},r=a(0),i=a.n(r),s=a(15),c=a.n(s),o=a(31),l=a(5),d=a(21),u=a(30),b=Object(u.b)({name:"employees",initialState:[],reducers:{addEmployee:function(e,t){e.push(t.payload)}}}),m=b.actions,p=b.reducer,j=m.addEmployee,h=p,v=Object(u.a)({reducer:{employees:h}}),O=a(9),f=(a(62),a(22)),g=(a(65),a(2)),x=function(e){var t=e.rows,a=e.previousPage,n=e.nextPage,r=e.canPreviousPage,i=e.canNextPage,s=e.pageIndex,c=e.pageSize,o=t.length,l=c*s+1,d=l+c>o?o:l+c-1;return Object(g.jsxs)("div",{className:"BottomNavigation",children:[Object(g.jsx)("div",{className:"BottomNavigation__showing-x-to-y-of-z-entries",children:Object(g.jsxs)("p",{children:["Showing ",l>d?d:l," to"," ",d," of ",t.length," entries"]})}),Object(g.jsxs)("div",{className:"BottomNavigation__buttons-wrapper",children:[Object(g.jsx)("button",{name:"previous-page-button","data-testid":"Previous",className:"BottomNavigation__buttons",onClick:function(){return a()},disabled:!r,children:"\u2039"}),Object(g.jsx)("button",{"data-testid":"Next",name:"next-page-button",className:"BottomNavigation__buttons",onClick:function(){return n()},disabled:!i,children:"\u203a"})]})]})},y=a(7),_=(a(67),a(68),function(e){var t=e.options,a=e.id,n=e.initialInputValue,i=e.onChange,s=Object(r.useState)(n||""),c=Object(y.a)(s,2),o=c[0],l=c[1],d=function(e,t,n,r){e.stopPropagation();var i=document.querySelector(".DropdownMenu--".concat(a));i.hasAttribute("open")?i.removeAttribute("open"):i.setAttribute("open",""),t&&n(t),r&&r(t)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"DropdownMenu DropdownMenu--".concat(a),children:[Object(g.jsx)("button",{type:"button",className:"DropdownMenu__button",onClick:d,children:""!==o?o:"Click to select a ".concat(a)}),Object(g.jsx)("ul",{className:"DropdownMenu__options",children:t.map((function(e){var t="object"===typeof e?e.name:e;return Object(g.jsx)("li",{className:"DropdownMenu__option",onClick:function(e){return d(e,t,l,i)},children:t},t)}))})]}),Object(g.jsx)("input",{type:"hidden",id:a,value:o,"data-testid":a})]})}),N=(a(69),function(e){var t=e.setValue,a=e.onChange,n=e.value,r=e.count;return Object(g.jsxs)("div",{className:"SearchBar",children:[Object(g.jsx)("label",{className:"SearchBar__label",children:"Search:"}),Object(g.jsx)("input",{className:"SearchBar__input",value:n||"",onChange:function(e){t(e.target.value),a(e.target.value)},placeholder:"".concat(r," records...")})]})}),w=function(e){var t=e.setPageSize,a=e.preGlobalFilteredRows,n=e.globalFilter,i=e.setGlobalFilter,s=e.useAsyncDebounce,c=a.length,o=Object(r.useState)(n),l=Object(y.a)(o,2),d=l[0],u=l[1],b=s((function(e){i(e||void 0)}),200);return Object(g.jsxs)("div",{className:"TopNavigation",children:[Object(g.jsxs)("div",{className:"TopNavigation__select-number-of-entries-wrapper",children:[Object(g.jsx)("span",{children:"Entries per page:"}),Object(g.jsx)(_,{options:[10,25,50,100],initialInputValue:10,onChange:function(e){return t(Number(e))},id:"employees-list"})]}),Object(g.jsx)(N,{setValue:u,onChange:b,value:d,count:c})]})},S=(a(70),function(e){var t=e.isSortedDesc;return Object(g.jsxs)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sort-up",className:"SortIcon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:[Object(g.jsx)("path",{className:!1===t?"SortIcon__active-icon":"",d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"}),Object(g.jsx)("path",{className:!0===t?"SortIcon__active-icon":"",d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"})]})}),E=function(e){var t=e.data,a=e.columns,n=Object(f.useTable)({columns:a,data:t},f.useGlobalFilter,f.useSortBy,f.usePagination),r=n.getTableProps,i=n.getTableBodyProps,s=n.headerGroups,c=n.prepareRow,o=n.rows,l=n.page,d=n.canPreviousPage,u=n.canNextPage,b=n.nextPage,m=n.previousPage,p=n.setPageSize,j=n.state,h=j.pageIndex,v=j.pageSize,y=j.globalFilter,_=n.preGlobalFilteredRows,N=n.setGlobalFilter;return Object(g.jsxs)("div",{className:"EmployeesTable-wrapper",children:[Object(g.jsx)(w,{pageSize:v,setPageSize:p,preGlobalFilteredRows:_,globalFilter:y,setGlobalFilter:N,useAsyncDebounce:f.useAsyncDebounce}),Object(g.jsxs)("table",Object(O.a)(Object(O.a)({},r()),{},{id:"employee-table",className:"EmployeesTable",children:[Object(g.jsx)("thead",{children:s.map((function(e){return Object(g.jsx)("tr",Object(O.a)(Object(O.a)({className:"EmployeesTable__heading-row"},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(g.jsxs)("th",Object(O.a)(Object(O.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:"EmployeesTable__header",children:[Object(g.jsx)("span",{className:"EmployeesTable__header-text-content",children:e.render("Header")}),e.isSorted?e.isSortedDesc?Object(g.jsx)(S,{isSortedDesc:!0}):Object(g.jsx)(S,{isSortedDesc:!1}):Object(g.jsx)(S,{isSortedDesc:null})]}))}))}))}))}),Object(g.jsx)("tbody",Object(O.a)(Object(O.a)({},i()),{},{children:l.map((function(e,t){return c(e),Object(g.jsx)("tr",Object(O.a)(Object(O.a)({className:"EmployeesTable__content-row"},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(g.jsx)("td",Object(O.a)(Object(O.a)({},e.getCellProps()),{},{className:"EmployeesTable__cell",children:e.render("Cell")}))}))}))}))}))]})),Object(g.jsx)(x,{rows:o,previousPage:m,nextPage:b,canPreviousPage:d,canNextPage:u,pageIndex:h,pageSize:v})]})},C=(a(71),a(72),function(e){var t=e.url,a=e.className,n=e.direction,r=e.textContent;return Object(g.jsxs)(o.b,{to:t,className:"link ".concat(a),"data-direction":n,children:[Object(g.jsx)("span",{className:"link__mask",children:Object(g.jsxs)("div",{className:"link__container",children:[Object(g.jsx)("span",{className:"link__title1 link__title",children:r}),Object(g.jsx)("span",{className:"link__title2 link__title",children:r})]})}),Object(g.jsxs)("div",{className:"link__icon-wrapper",children:[Object(g.jsx)("svg",{className:"link__icon",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(g.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})}),Object(g.jsx)("svg",{className:"link__icon",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",children:Object(g.jsx)("path",{d:"M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"})})]})]})}),I=function(){return Object(g.jsxs)("header",{className:"HeaderEmployeesList",children:[Object(g.jsx)(C,{className:"HeaderEmployeesList__link-to-home",url:"/BenjaminLesne_14_07122021/",direction:"left",textContent:"Go Back to Home"}),Object(g.jsx)("h1",{className:"HeaderEmployeesList__heading",children:"Current Employees"})]})},M=["Sales","Marketing","Engineering","Human Ressources","Legal"],P=[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Start Date",accessor:"startDate"},{Header:"Department",accessor:"department"},{Header:"Date of Birth",accessor:"dateOfBirth"},{Header:"Street",accessor:"street"},{Header:"City",accessor:"city"},{Header:"State",accessor:"state"},{Header:"Zip Code",accessor:"zipCode"}],k=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],D=function(){var e=Object(d.c)((function(e){return e.employees})),t=Object(r.useMemo)((function(){return P}),[]),a=Object(r.useMemo)((function(){return e}),[e]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I,{}),Object(g.jsx)(E,{data:a,columns:t})]})},B=(a(73),a(74),function(){return Object(g.jsxs)("header",{className:"Header",children:[Object(g.jsx)("h1",{className:"Header__heading",children:"HRnet"}),Object(g.jsx)(C,{url:"/BenjaminLesne_14_07122021/employee-list",textContent:"view current employees"})]})});a(75);var F=function(e){return e.replace(/-/g," ")},H=a(47),T=a.n(H),A=(a(76),function e(t){return t.map((function(t){switch(t.element){case"input":return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("label",{htmlFor:t.id,className:"createEmployee__label",children:F(t.id)}),Object(g.jsx)("input",{className:"createEmployee__input",type:"text",id:t.id})]},t.id+"-fragment");case"DatePicker":return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("label",{htmlFor:t.id,className:"createEmployee__label",children:F(t.id)}),Object(g.jsx)(T.a,{className:"createEmployee__input",id:t.id,selected:t.selected,onChange:t.onChange,maxDate:t.maxDate})]},t.id+"-fragment");case"fieldset":return Object(g.jsx)("fieldset",{className:"createEmployee__fieldset",children:e(t.childrenInputs)},t.id);case"select":return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("label",{htmlFor:t.id,className:"createEmployee__label",children:F(t.id)}),Object(g.jsx)(_,{options:t.options,id:t.id})]},t.id+"-fragment");default:return console.log("unknown child element"),null}}))}),L=a(11),z=a.n(L),R=a(20);var V,G=function(e,t,a){var n,r=document.getElementById("createEmployee__input-error-message--".concat(t.id));return e?(t.setCustomValidity(""),null===(n=r)||void 0===n||n.remove(),!0):(r||(r=(new DOMParser).parseFromString('<p id="createEmployee__input-error-message--'.concat(t.id,'" class="createEmployee__input-error-message">\n          ').concat(a,"\n        </p>"),"text/html").body.firstChild,t.after(r),t.setCustomValidity(a)),!1)},W=function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.map((function(e){switch(e.id){case"city":case"street":case"last-name":case"first-name":return G("string"===typeof e.value&&e.value.length>0,e,"It must be a string");case"zip-code":return G("number"===typeof parseInt(e.value)&&parseInt(e.value)>0,e,"It must be a Number greater than zero");case"department":return G(M.includes(e.value),e,"Select a valid department option");case"state":return G(k.filter((function(t){return t.name===e.value})).length>0,e,"Select a valid state option");case"date-of-birth":case"start-date":return G(/^(\d{2}\/\d{2}\/\d{4})$/.test(e.value),e,"It must be a date with mm-dd-yyyy format");default:return console.log("error: unknown input id"),console.log(e.id),!1}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=W,Y=function(){var e=Object(R.a)(z.a.mark((function e(t,a,n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t>=0&&(n.push(a[t]),Y(t-1,a,n)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),J=Y,U=function(){var e=Object(R.a)(z.a.mark((function e(t,a,n){var r,i,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=document.forms["create-employee"].elements.length-2,i=document.forms["create-employee"].elements,e.next=5,J(r,i,[]).then((function(e){return e.filter((function(e){return"SELECT"===e.tagName||"INPUT"===e.tagName}))}));case 5:s=e.sent;try{K(s).then((function(e){if(!e.includes(!1)){var t=document.getElementById("first-name").value,r=document.getElementById("last-name").value,i=document.getElementById("street").value,s=document.getElementById("city").value,c=document.getElementById("state").value,o=document.getElementById("zip-code").value,l=document.getElementById("department").value,d=document.getElementById("start-date").value,u=document.getElementById("date-of-birth").value;a({firstName:t,lastName:r,dateOfBirth:u,startDate:d,street:i,city:s,state:c,zipCode:o,department:l}),n(!0)}}))}catch(c){console.log(c)}case 7:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Z=U,q=(a(119),["title","titleId"]);function X(){return X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)}function $(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Q(e,t){var a=e.title,n=e.titleId,i=$(e,q);return r.createElement("svg",X({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",className:"svg-inline--fa fa-check fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,V||(V=r.createElement("path",{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"})))}var ee=r.forwardRef(Q),te=(a.p,function(e){var t=e.textContent,a=e.open,n=e.setShouldModalOpen;return Object(g.jsx)("dialog",{className:"Modal",id:"modal","data-testid":"modal",open:a,children:Object(g.jsxs)("div",{className:"Modal__content-wrapper modalbox success animate",children:[Object(g.jsx)("div",{className:"Modal__icon icon",children:Object(g.jsx)(ee,{})}),Object(g.jsxs)("div",{className:"Modal__text-content",children:[Object(g.jsx)("h1",{children:"Success!"}),Object(g.jsx)("p",{children:t})]}),Object(g.jsx)("button",{onClick:function(){return n(!1)},type:"button",className:"Modal__ok-button redo btn",children:"Ok"})]})})}),ae=a(42),ne=function(){var e=Object(r.useState)(!1),t=Object(y.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(null),s=Object(y.a)(i,2),c=s[0],o=s[1],l=Object(r.useState)(null),u=Object(y.a)(l,2),b=u[0],m=u[1],p=Object(d.b)(),h=[{element:"input",type:"text",id:"first-name"},{element:"input",type:"text",id:"last-name"},{element:"DatePicker",selected:c,onChange:function(e){return o(e)},maxDate:Object(ae.default)(new Date,18),id:"date-of-birth"},{element:"DatePicker",selected:b,onChange:function(e){return m(e)},maxDate:new Date,id:"start-date"},{element:"fieldset",id:"createEmployeeFieldset",childrenInputs:[{element:"input",type:"text",id:"street"},{element:"input",type:"text",id:"city"},{element:"select",id:"state",options:k},{element:"input",type:"number",id:"zip-code"}]},{element:"select",id:"department",options:M}];return Object(g.jsxs)("section",{className:"createEmployee",children:[Object(g.jsx)("h2",{className:"createEmployee__heading",children:"create an employee form"}),Object(g.jsxs)("form",{action:"#",id:"create-employee",className:"createEmployee__form",children:[A(h),Object(g.jsx)("button",{className:"createEmployee__submit-button",name:"submit",type:"submit",onClick:function(e){return Z(e,(function(e){return p(j(e))}),n)},children:"Save"})]}),Object(g.jsx)(te,{setShouldModalOpen:n,open:a,textContent:"You added an employee"})]})},re=function(){return Object(g.jsxs)("div",{className:"Home",children:[Object(g.jsx)(B,{}),Object(g.jsx)("main",{className:"container Home__main",children:Object(g.jsx)(ne,{})})]})};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(d.a,{store:v,children:Object(g.jsx)(o.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/BenjaminLesne_14_07122021",element:Object(g.jsx)(re,{})}),Object(g.jsx)(l.a,{path:"/BenjaminLesne_14_07122021/employee-list",element:Object(g.jsx)(D,{})})]})})})}),document.getElementById("root")),n()},52:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.5d062c20.chunk.js.map