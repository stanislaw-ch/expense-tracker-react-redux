(this["webpackJsonpmoney-tracker"]=this["webpackJsonpmoney-tracker"]||[]).push([[0],{10:function(e,t){e.exports={category:[{id:1,title:"Salary"},{id:2,title:"Rent"},{id:3,title:"Groceries"},{id:4,title:"Transportation & parking fees"},{id:5,title:"Clothing & shoes"},{id:6,title:"Family"},{id:7,title:"Coffee"},{id:8,title:"Health"}],account:[{id:1,title:"Cash",balance:2e3,startBalance:0,archive:!1},{id:2,title:"Postbank",balance:55e3,startBalance:0,archive:!1},{id:3,title:"N26",balance:55e4,startBalance:0,archive:!1}],transactions:[{id:1,sum:70,date:"2021-11-02",outcome:!0,account:{id:1,title:"N26"},category:{id:1,title:"Health"}},{id:2,sum:11.5,date:"2021-11-02",outcome:!0,account:{id:1,title:"Cash"},category:{id:1,title:"Coffee"}},{id:3,sum:350,date:"2021-11-02",outcome:!0,account:{id:1,title:"Postbank"},category:{id:1,title:"Clothing & shoes"}},{id:4,sum:120,date:"2021-11-01",outcome:!0,account:{id:1,title:"N26"},category:{id:1,title:"Groceries"}},{id:5,sum:3500,date:"2021-11-01",outcome:!1,account:{id:1,title:"N26"},category:{id:1,title:"Salary"}},{id:5,sum:47.3,date:"2021-11-03",outcome:!0,account:{id:1,title:"N26"},category:{id:1,title:"Family"}}]}},31:function(e,t,a){"use strict";a.r(t);var n,c,r,i=a(1),s=a.n(i),o=a(14),u=a.n(o),l=a(5),d=a(12),j=a(4),b=a(2),O=a(3),f=a.n(O),h=a(7),m=a(6),p=a(8),g=a(9),v=a(10),x=a.n(v),y=function(){function e(){Object(p.a)(this,e);var t=x.a.transactions;this.transactions=t}return Object(g.a)(e,[{key:"getAll",value:function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.transactions,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),w=new y,T=Object(m.c)({name:"searchTerm",initialState:"",reducers:{setSearchTerm:function(e,t){return t.payload},clearSearchTerm:function(e,t){return""}}}),_=function(e){return e.searchTerm},C=T.actions,N=C.setSearchTerm,S=C.clearSearchTerm,k=T.reducer,A=Object(m.b)("transactions/loadData",Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),D=Object(m.c)({name:"transactions",initialState:{allTransactions:[],newTransaction:{id:(new Date).getTime(),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]},isLoading:!1,hasError:!1},reducers:{setUserInput:function(e,t){var a=t.payload,n=a.name,c=a.value;return"outcome"===n&&(c=!0!==e.newTransaction.outcome),Object(b.a)(Object(b.a)({},e),{},{newTransaction:Object(b.a)(Object(b.a)({},e.newTransaction),{},Object(j.a)({},n,c))})},setCategory:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{newTransaction:Object(b.a)(Object(b.a)({},e.newTransaction),{},{category:t.payload})})},setAccount:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{newTransaction:Object(b.a)(Object(b.a)({},e.newTransaction),{},{account:t.payload})})},addTransaction:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{allTransactions:[].concat(Object(d.a)(e.allTransactions),Object(d.a)(t.payload))})},resetState:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{newTransaction:{id:(new Date).getTime(),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]}})},deleteTransaction:function(e,t){var a=t.payload,n=e.allTransactions.filter((function(e){return e.id!==+a}));return Object(b.a)(Object(b.a)({},e),{},{allTransactions:n})}},extraReducers:(n={},Object(j.a)(n,A.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(j.a)(n,A.fulfilled,(function(e,t){e.allTransactions=t.payload,e.newTransaction=Object(b.a)({},e.newTransaction),e.isLoading=!1,e.hasError=!1,e.showDelete=!1})),Object(j.a)(n,A.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),n)}),E=function(e){return e.transactions.allTransactions},L=function(e){return e.transactions.newTransaction},F=function(e){var t=E(e),a=_(e);return t.filter((function(e){return e.category.title.toLowerCase().includes(a.toLowerCase())})).sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()}))},P=D.actions,I=P.setUserInput,B=P.setCategory,q=P.setAccount,R=(P.setTransactionId,P.addTransaction),M=P.resetState,G=P.deleteTransaction,H=D.reducer,J=function(){function e(){Object(p.a)(this,e);var t=x.a.category;this.category=t}return Object(g.a)(e,[{key:"getAll",value:function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.category,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),U=new J,Y=Object(m.b)("categories/loadData",Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),z=Object(m.b)("categories/addData",function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.create(t);case 2:return a=e.sent,e.next=5,a;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),K=Object(m.c)({name:"categories",initialState:{allCategories:[],newCategory:{title:""},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addCategory:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{newCategory:Object(b.a)(Object(b.a)({},e.newCategory),{},{title:t.payload})})}},extraReducers:(c={},Object(j.a)(c,Y.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(j.a)(c,Y.fulfilled,(function(e,t){e.allCategories=t.payload,e.isLoading=!1,e.hasError=!1})),Object(j.a)(c,Y.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(j.a)(c,z.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(j.a)(c,z.fulfilled,(function(e){e.newCategory={title:""},e.isPending=!1,e.isFailedToCreate=!1})),Object(j.a)(c,z.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),c)}),Q=function(e){return e.categories.allCategories},V=(K.actions.addCategory,K.reducer),W=function(){function e(){Object(p.a)(this,e);var t=x.a.account;this.account=t}return Object(g.a)(e,[{key:"getAll",value:function(){var e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.account,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),X=new W,Z=Object(m.b)("accounts/loadData",Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),$=Object(m.b)("accounts/addData",function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\ude80 ~ file: accounts-slice.js ~ line 17 ~ newAccount",t),e.next=3,X.create(t);case 3:return a=e.sent,e.next=6,a;case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ee=Object(m.c)({name:"accounts",initialState:{allAccounts:[],newAccount:{title:"",balance:0,startBalance:0,archive:!1},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addAccount:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{newAccount:Object(b.a)(Object(b.a)({},e.newAccount),{},{title:t.payload})})}},extraReducers:(r={},Object(j.a)(r,Z.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(j.a)(r,Z.fulfilled,(function(e,t){e.allAccounts=t.payload,e.isLoading=!1,e.hasError=!1})),Object(j.a)(r,Z.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(j.a)(r,$.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(j.a)(r,$.fulfilled,(function(e){e.newAccount={title:"",balance:0,startBalance:0,archive:!1},e.isPending=!1,e.isFailedToCreate=!1})),Object(j.a)(r,$.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),r)}),te=function(e){return e.accounts.allAccounts},ae=(ee.actions.addAccount,ee.reducer),ne=a(0);var ce=function(){var e=Object(l.c)(_),t=Object(l.b)();return Object(ne.jsxs)("section",{className:"search",children:[Object(ne.jsx)("input",{type:"text",name:"search",placeholder:"Search by category",value:e,onChange:function(e){var a=e.target.value;t(N(a))}}),e.length>0&&Object(ne.jsx)("span",{className:"search__close-btn",onClick:function(){t(S())}})]})},re=a(13);var ie=function(e){var t=e.categories,a=e.accounts,n=Object(l.c)(L),c=Object(l.b)(),r=Object(i.useState)(!1),s=Object(re.a)(r,2),o=s[0],u=s[1],d=Object(i.useState)(!0),j=Object(re.a)(d,2),b=j[0],O=j[1],f=n.sum,h=n.date,m=function(e){var t=e.target,a=t.name,n=t.value;c(I({name:a,value:n}))},p=function(e){return function(n){var r=function(e,t){var a;return e.map((function(e){return e.title===t&&(a=e.id),a})),a};if("account"===e){var i=r(a,n.target.value);c(q({id:i,title:n.target.value}))}if("category"===e){var s=r(t,n.target.value);c(B({id:s,title:n.target.value}))}}};return Object(ne.jsxs)("section",{className:"transactions",children:[Object(ne.jsxs)("div",{className:"transactions__title",children:[Object(ne.jsx)("h2",{children:"Transactions"}),Object(ne.jsx)("p",{className:"transaction-add__btn ".concat(o?"transaction-add__btn--click":""),onClick:function(){var e=!0!==b;u(!0!==o),!1===e?O(e):setTimeout((function(){O(e)}),500)},children:"Add"})]}),Object(ne.jsx)("div",{className:"transactions__wrapper",children:Object(ne.jsx)("form",{onSubmit:function(e){e.preventDefault(),c(R([n])),c(M()),u(!1),setTimeout((function(){O(!0)}),500)},children:Object(ne.jsxs)("div",{className:"transaction-add ".concat(b?"transaction-add__hidden":""," ").concat(o?"transaction-add__fade-in":"transaction-add__fade-out"),children:[Object(ne.jsx)("input",{type:"number",name:"sum",placeholder:"Enter an amount",value:f,onChange:m,required:!0}),Object(ne.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:p("category"),required:!0,children:[Object(ne.jsx)("option",{value:"",hidden:!0,children:"Choose a category"}),t&&t.map((function(e){return Object(ne.jsx)("option",{value:e.title,selected:e.id===n.category.id,children:e.title},e.id)}))]}),Object(ne.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:p("account"),required:!0,children:[Object(ne.jsx)("option",{value:"",hidden:!0,children:"Choose an account"}),a&&a.map((function(e){return Object(ne.jsx)("option",{value:e.title,selected:e.id===n.account.id,children:e.title},e.id)}))]}),Object(ne.jsx)("input",{type:"date",name:"date",value:h,onChange:m,required:!0}),Object(ne.jsx)("div",{className:"transaction-add__wrapper",children:Object(ne.jsxs)("div",{className:"transaction-add__type",children:[Object(ne.jsx)("input",{type:"checkbox",id:"type",name:"outcome",onChange:m}),Object(ne.jsx)("label",{htmlFor:"type",children:"Income"})]})}),Object(ne.jsx)("button",{className:"button",type:"submit",children:"Create"})]})})})]})};var se=function(e){var t=e.transactions,a=t.map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0),n=t.map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0);return Object(ne.jsx)("section",{className:"balance",children:Object(ne.jsx)("div",{className:"balance__container balance__balance",children:Object(ne.jsxs)("div",{children:[Object(ne.jsx)("p",{children:"Your balance"}),Object(ne.jsxs)("p",{className:"balance__amount",children:[n-a," \u20ac"]})]})})})};function oe(e){return new Date(e).toLocaleString("en-EN",{day:"2-digit",month:"short",year:"numeric"})}var ue=function(e){var t=e.categoryTitle,a=e.accountTitle,n=e.outcome,c=e.sum,r=e.id,s=Object(l.b)(),o=Object(i.useState)(!1),u=Object(re.a)(o,2),d=u[0],j=u[1],b=function(){j(!0!==d)};return Object(ne.jsxs)("li",{className:"transactions-list__item",onMouseOver:b,onMouseOut:b,children:[Object(ne.jsxs)("div",{className:"transactions-list__item-wrapper",children:[Object(ne.jsx)("p",{children:t}),Object(ne.jsxs)("p",{className:"transactions-list__item--expense",children:[n?"- ":"+ ",c," \u20ac"]})]}),Object(ne.jsxs)("div",{className:"transactions-list__item-wrapper",children:[Object(ne.jsx)("p",{className:"transactions-list__item--account",children:a}),Object(ne.jsx)("p",{className:"transactions-list__item--edit ".concat(d?"":"hidden"),id:r,onClick:function(e){var t=e.target.id;s(G(t))},children:"delete"})]})]})};var le=function(e){var t=e.date;return e.transactions.filter((function(e){return oe(e.date)===t})).map((function(e,t){return Object(ne.jsx)("div",{children:Object(ne.jsx)(ue,{categoryTitle:e.category.title,accountTitle:e.account.title,outcome:e.outcome,sum:e.sum,id:e.id})},t)}))};var de=function(e){var t=e.transactions,a=Object(d.a)(new Set(t.map((function(e){return oe(e.date)}))));return Object(ne.jsxs)("section",{className:"transactions-list",children:[Object(ne.jsx)("h2",{children:"Transactions List"}),a.map((function(e,a){return Object(ne.jsxs)("ul",{className:"transactions-list__list",children:[Object(ne.jsx)("div",{className:"transactions-list__day",children:Object(ne.jsx)("p",{children:e})}),Object(ne.jsx)(le,{date:e,transactions:t})]},a)}))]})};var je=function(){var e=Object(l.c)(E),t=Object(l.c)(F),a=Object(l.c)(Q),n=Object(l.c)(te),c=Object(l.b)();return Object(i.useEffect)((function(){c(A()),c(Y()),c(Z())}),[c]),Object(ne.jsx)("div",{className:"container",children:Object(ne.jsxs)("main",{className:"page-main",children:[Object(ne.jsx)(ce,{}),Object(ne.jsx)(ie,{categories:a,accounts:n}),Object(ne.jsx)(se,{transactions:e}),Object(ne.jsx)(de,{transactions:t})]})})},be=Object(m.a)({reducer:{transactions:H,categories:V,accounts:ae,searchTerm:k}});u.a.render(Object(ne.jsx)(s.a.StrictMode,{children:Object(ne.jsx)(l.a,{store:be,children:Object(ne.jsx)(je,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.77fe4876.chunk.js.map