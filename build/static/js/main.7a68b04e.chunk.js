(this["webpackJsonpmoney-tracker"]=this["webpackJsonpmoney-tracker"]||[]).push([[0],{13:function(e,t,n){e.exports={Balance:"Balance_Balance__23Avx",BalanceScroll:"Balance_BalanceScroll__ah868",BalanceContainer:"Balance_BalanceContainer__j86A2",BalanceContainerScroll:"Balance_BalanceContainerScroll__2NjjY",BalanceAmount:"Balance_BalanceAmount__2Q1J2",BalanceWrapper:"Balance_BalanceWrapper__176bo",BalanceIncome:"Balance_BalanceIncome__2vRM2",BalanceExpense:"Balance_BalanceExpense__2eTJu"}},16:function(e,t,n){e.exports={menu:"Menu_menu__g1b0Y",wrapper:"Menu_wrapper__2i6Q0",active:"Menu_active__1T3aC",menuAddBtn:"Menu_menuAddBtn__1bjf1",addBtnEnterActive:"Menu_addBtnEnterActive__2oVJa",addBtnEnterDone:"Menu_addBtnEnterDone__1MBUj"}},17:function(e,t,n){e.exports={form:"Form_form__2wVGg",dialogWrapper:"Form_dialogWrapper__Asoa1",dialog:"Form_dialog__3K11j",dialogTypeWrapper:"Form_dialogTypeWrapper__3UED0",dialogType:"Form_dialogType___T7YX",addFormEnterActive:"Form_addFormEnterActive__3ky2w",showForm:"Form_showForm__3Ut7i",addFormExitActive:"Form_addFormExitActive__3REkf"}},27:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",InputType:"Input_InputType__20xp5",InputTypeCheckbox:"Input_InputTypeCheckbox__2WwxI"}},33:function(e,t,n){e.exports={LayoutContainer:"Layout_LayoutContainer__19LML",LayoutMain:"Layout_LayoutMain__2hglt"}},34:function(e,t,n){e.exports={Button:"Button_Button__3gFiX"}},35:function(e,t,n){e.exports={Search:"Search_Search__2SQmI",SearchCloseBtn:"Search_SearchCloseBtn__dEG1E"}},37:function(e,t,n){e.exports={Select:"Select_Select__2qylT"}},4:function(e,t,n){e.exports={TransactionsMonth:"ListContainer_TransactionsMonth__VTwQk",TransactionsHeader:"ListContainer_TransactionsHeader__1Nwh7",TransactionsDateContent:"ListContainer_TransactionsDateContent__3_Wg_",TransactionsDateWrapper:"ListContainer_TransactionsDateWrapper__3_hm9",TransactionsItem:"ListContainer_TransactionsItem__2Ekf6",TransactionsItemAccount:"ListContainer_TransactionsItemAccount__2gWdH",TransactionsItemEdit:"ListContainer_TransactionsItemEdit__1Uj3y",TransactionsItemClose:"ListContainer_TransactionsItemClose__112_0",TransactionsItemOnClick:"ListContainer_TransactionsItemOnClick__20z0S",TransactionsItemWrapper:"ListContainer_TransactionsItemWrapper__A5w7n",TransactionsHidden:"ListContainer_TransactionsHidden__32C68",enter:"ListContainer_enter__fpkFx",enterActive:"ListContainer_enterActive__16sdh",exit:"ListContainer_exit__1PACa",exitActive:"ListContainer_exitActive__Mnq44",exitDone:"ListContainer_exitDone__32oW3"}},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s=n(0),u=n.n(s),l=n(12),d=n.n(l),j=n(15),b=n(7),f=n(3),m=n(33),O=n.n(m),h=n(6),p=n(2),v=n(5),g=n.n(v),x=n(10),_=n(9),C=n(18),T=n(19),y=n(14),w=n(26),A=[{id:1,title:"Salary"},{id:2,title:"Rent"},{id:3,title:"Groceries"},{id:4,title:"Transportation & parking fees"},{id:5,title:"Clothing & shoes"},{id:6,title:"Family"},{id:7,title:"Coffee"},{id:8,title:"Health"}],B=[{id:1,title:"Cash",balance:2e3,startBalance:0,archive:!1},{id:2,title:"Postbank",balance:55e3,startBalance:0,archive:!1},{id:3,title:"N26",balance:55e4,startBalance:0,archive:!1}],S=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},E=function(e){e=e.slice();for(var t=1,n=[];t--;)n.push.apply(n,Object(y.a)(e.splice(S(0,e.length-1),1)));return n[0]},L=function(){var e=(new Date).getTime(),t=e-new Date(7776e6).getTime();return new Date(t+Math.random()*(e-t)).toISOString().slice(0,-14)},M=(a=B,r=A,Array(20).fill({}).map((function(){return{id:Object(w.a)(6),sum:S(1,500),date:L(),outcome:Boolean(Math.round(Math.random())),account:E(a),category:E(r)}}))),N=function(){function e(){Object(C.a)(this,e),this.categories=A}return Object(T.a)(e,[{key:"getAll",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.categories,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),k=new N,I=Object(_.b)("categories/loadData",Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),F=Object(_.b)("categories/addData",function(){var e=Object(x.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.create(t);case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(_.c)({name:"categories",initialState:{allCategories:[],newCategory:{title:""},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addCategory:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newCategory:Object(p.a)(Object(p.a)({},e.newCategory),{},{title:t.payload})})}},extraReducers:(c={},Object(h.a)(c,I.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(h.a)(c,I.fulfilled,(function(e,t){e.allCategories=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(c,I.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(h.a)(c,F.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(h.a)(c,F.fulfilled,(function(e){e.newCategory={title:""},e.isPending=!1,e.isFailedToCreate=!1})),Object(h.a)(c,F.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),c)}),W=function(e){return e.categories.allCategories},R=(D.actions.addCategory,D.reducer),V=function(){function e(){Object(C.a)(this,e),this.accounts=B}return Object(T.a)(e,[{key:"getAll",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.accounts,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=new V,H=Object(_.b)("accounts/loadData",Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),q=Object(_.b)("accounts/addData",function(){var e=Object(x.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\ude80 ~ file: accounts-slice.js ~ line 17 ~ newAccount",t),e.next=3,P.create(t);case 3:return n=e.sent,e.next=6,n;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(_.c)({name:"accounts",initialState:{allAccounts:[],newAccount:{title:"",balance:0,startBalance:0,archive:!1},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addAccount:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newAccount:Object(p.a)(Object(p.a)({},e.newAccount),{},{title:t.payload})})}},extraReducers:(o={},Object(h.a)(o,H.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(h.a)(o,H.fulfilled,(function(e,t){e.allAccounts=t.payload,e.isLoading=!1,e.hasError=!1})),Object(h.a)(o,H.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(h.a)(o,q.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(h.a)(o,q.fulfilled,(function(e){e.newAccount={title:"",balance:0,startBalance:0,archive:!1},e.isPending=!1,e.isFailedToCreate=!1})),Object(h.a)(o,q.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),o)}),Y=function(e){return e.accounts.allAccounts},J=(U.actions.addAccount,U.reducer),Q=n(8),G=n(52),K=n(16),X=n.n(K),z=function(){function e(){Object(C.a)(this,e),this.transactions=M}return Object(T.a)(e,[{key:"getAll",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.transactions,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Z=new z,$=Object(_.c)({name:"searchTerm",initialState:"",reducers:{setSearchTerm:function(e,t){return t.payload},clearSearchTerm:function(e,t){return""}}}),ee=function(e){return e.searchTerm},te=$.actions,ne=te.setSearchTerm,ae=te.clearSearchTerm,re=$.reducer,ce=Object(_.b)("transactions/loadData",Object(x.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),oe=Object(_.c)({name:"transactions",initialState:{allTransactions:[],newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]},isLoading:!1,hasError:!1},reducers:{setUserInput:function(e,t){var n=t.payload,a=n.name,r=n.value;return"outcome"===a&&(r=!e.newTransaction.outcome),"sum"===a&&(r=0===+r?"":+r),Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},Object(h.a)({},a,r))})},setCategory:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},{category:t.payload})})},setAccount:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},{account:t.payload})})},addTransaction:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{allTransactions:[].concat(Object(y.a)(e.allTransactions),Object(y.a)(t.payload))})},resetState:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]}})},deleteTransaction:function(e,t){var n=t.payload,a=e.allTransactions.filter((function(e){return e.id!==n}));return Object(p.a)(Object(p.a)({},e),{},{allTransactions:a})}},extraReducers:(i={},Object(h.a)(i,ce.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(h.a)(i,ce.fulfilled,(function(e,t){e.allTransactions=t.payload,e.newTransaction=Object(p.a)({},e.newTransaction),e.isLoading=!1,e.hasError=!1,e.showDelete=!1})),Object(h.a)(i,ce.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),i)}),ie=function(e){return e.transactions.allTransactions},se=function(e){return e.transactions.newTransaction},ue=function(e){var t=ie(e),n=ee(e);return t.filter((function(e){return e.category.title.toLowerCase().includes(n.toLowerCase())})).sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()}))},le=oe.actions,de=le.setUserInput,je=le.setCategory,be=le.setAccount,fe=(le.setTransactionId,le.addTransaction),me=le.resetState,Oe=le.deleteTransaction,he=oe.reducer,pe=n(17),ve=n.n(pe),ge=n(27),xe=n.n(ge),_e=n(1);function Ce(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Te=function(e){var t=e.type||"text",n=[xe.a.Input],a="".concat(t,"-").concat(Math.random());return"checkbox"===t?n.push(xe.a.InputTypeCheckbox):n.push(xe.a.InputType),Ce(e)&&n.push(xe.a.invalid),Object(_e.jsxs)("div",{className:n.join(" "),children:[Object(_e.jsx)("input",{type:t,name:e.name,placeholder:e.placeholder,id:a,value:e.value,onChange:e.onChange}),Object(_e.jsx)("label",{htmlFor:a,children:e.label}),Ce(e)?Object(_e.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})},ye=n(37),we=n.n(ye);function Ae(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Be=function(e){var t=[we.a.Select];return Object(_e.jsx)("div",{className:t,children:Object(_e.jsxs)("select",{onChange:e.onChange,children:[Object(_e.jsx)("option",{value:"",hidden:!0,children:e.defaultOption}),e.options.map((function(e){return Object(_e.jsx)("option",{value:e.title,children:e.title},e.id)})),Ae(e)?Object(_e.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})})},Se=n(34),Ee=n.n(Se),Le=function(e){var t=[Ee.a.Button,Ee.a[e.type]].join(" ");return Object(_e.jsx)("button",{onClick:e.onClick,className:t,disabled:e.disabled,children:e.children})};function Me(e,t){return Object(p.a)(Object(p.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function Ne(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}function ke(e,t,n){var a=Object(p.a)({},n),r=Object(p.a)({},a[e]);return r.touched=!0,r.value=t,r.valid=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}(r.value,r.validation),a[e]=r,a}function Ie(){return{sum:Me({errorMessage:"Please fill out this field"},{required:!0}),date:Me({errorMessage:"Choose a date please"},{required:!0}),category:Me({errorMessage:"Choose a category please"},{required:!0}),account:Me({errorMessage:"Choose an account please"},{required:!0})}}var Fe=function(e){var t=e.categories,n=e.accounts,a=e.onClickAddBtn,r=e.setOnClickAddBtn,c=Object(b.c)(se),o=c.sum,i=c.date,l=Object(b.b)(),d=Object(s.useState)({isFormValid:!1,formControls:Ie()}),j=Object(Q.a)(d,2),f=j[0],m=j[1];Object(s.useEffect)((function(){var e=ke("date",i,f.formControls);m(Object(p.a)(Object(p.a)({},f),{},{formControls:e}))}),[]);var O=function(e,t){var n=ke(t,e,f.formControls);m({formControls:n,isFormValid:Ne(n)}),l(de({name:t,value:e}))},h=function(e){return function(a){var r=function(e,t){var n;return e.map((function(e){return e.title===t&&(n=e.id),n})),n};if("account"===e){var c=ke(e,a.target.value,f.formControls);m({formControls:c,isFormValid:Ne(c)});var o=r(n,a.target.value);l(be({id:o,title:a.target.value}))}if("category"===e){var i=ke(e,a.target.value,f.formControls);m({formControls:i,isFormValid:Ne(i)});var s=r(t,a.target.value);l(je({id:s,title:a.target.value}))}}},v=u.a.useRef(null);return Object(_e.jsx)("section",{className:ve.a.form,children:Object(_e.jsx)("div",{className:ve.a.dialogWrapper,children:Object(_e.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(_e.jsx)(G.a,{in:a,timeout:300,classNames:{enterActive:"".concat(ve.a.addFormEnterActive),exitActive:"".concat(ve.a.addFormExitActive)},unmountOnExit:!0,nodeRef:v,children:Object(_e.jsxs)("div",{className:ve.a.dialog,ref:v,children:[Object(_e.jsx)(Te,{type:"number",name:"sum",placeholder:"0.00",value:o,valid:f.formControls.sum.valid,shouldValidate:!!f.formControls.sum.validation,touched:f.formControls.sum.touched,errorMessage:f.formControls.sum.errorMessage,onChange:function(e){return O(e.target.value,e.target.name)}}),Object(_e.jsx)(Be,{options:t,defaultOption:"Choose a category",onChange:h("category"),valid:f.formControls.category.valid,shouldValidate:!!f.formControls.category.validation,touched:f.formControls.category.touched,errorMessage:f.formControls.category.errorMessage}),Object(_e.jsx)(Be,{options:n,defaultOption:"Choose an account",onChange:h("account"),valid:f.formControls.account.valid,shouldValidate:!!f.formControls.account.validation,touched:f.formControls.account.touched,errorMessage:f.formControls.account.errorMessage}),Object(_e.jsx)(Te,{type:"date",name:"date",value:i,valid:f.formControls.date.valid,shouldValidate:!!f.formControls.date.validation,touched:f.formControls.date.touched,errorMessage:f.formControls.date.errorMessage,onChange:function(e){return O(e.target.value,e.target.name)}}),Object(_e.jsx)("div",{className:ve.a.dialogType,children:Object(_e.jsx)(Te,{label:"Income",type:"checkbox",name:"outcome",onChange:function(e){return O(e.target.value,e.target.name)}})}),Object(_e.jsx)(Le,{type:"submit",onClick:function(){l(fe([c])),l(me()),r(!1);var e=Ie();e=ke("date",i,e),m({formControls:e,isFormValid:!1})},disabled:!f.isFormValid,children:"Create"})]})})})})})};var De=function(e){var t=e.categories,n=e.accounts,a=Object(s.useState)(!1),r=Object(Q.a)(a,2),c=r[0],o=r[1],i=Object(b.b)(),l=[X.a.menuAddBtn,"fa",c?"fa-times":"fa-plus"].join(" "),d=function(e){return e.isActive?"".concat(X.a.active):""},f=u.a.useRef(null);return Object(_e.jsxs)(_e.Fragment,{children:[Object(_e.jsx)(Fe,{categories:t,accounts:n,onClickAddBtn:c,setOnClickAddBtn:o}),Object(_e.jsx)("nav",{className:X.a.menu,children:Object(_e.jsxs)("div",{className:X.a.wrapper,children:[Object(_e.jsx)(G.a,{in:c,timeout:300,classNames:{enterActive:"".concat(X.a.addBtnEnterActive),enterDone:"".concat(X.a.addBtnEnterDone)},nodeRef:f,children:Object(_e.jsx)("i",{className:l,onClick:function(){o(!c),c&&i(me())},ref:f})}),Object(_e.jsx)(j.b,{to:"/",className:d,children:"Transactions"}),Object(_e.jsx)(j.b,{to:"/budget",className:d,children:"Analytics"}),Object(_e.jsx)(j.b,{to:"/settings",className:d,children:"Settings"})]})})]})};var We=function(e){var t=Object(b.c)(W),n=Object(b.c)(Y);return Object(_e.jsx)("div",{className:O.a.LayoutContainer,children:Object(_e.jsxs)("main",{className:O.a.LayoutMain,children:[e.children,Object(_e.jsx)(De,{categories:t,accounts:n})]})})},Re=(n(50),n(35)),Ve=n.n(Re);var Pe=function(){var e=Object(b.c)(ee),t=Object(b.b)();return Object(_e.jsxs)("section",{className:Ve.a.Search,children:[Object(_e.jsx)("input",{type:"text",name:"search",placeholder:"Search by category",value:e,onChange:function(e){var n=e.target.value;t(ne(n))}}),e.length>0&&Object(_e.jsx)("span",{className:Ve.a.SearchCloseBtn,onClick:function(){t(ae())}})]})},He=n(13),qe=n.n(He);var Ue=function(e){var t=e.transactions,n=Object(s.useState)(qe.a.BalanceContainer),a=Object(Q.a)(n,2),r=a[0],c=a[1],o=Object(s.useState)(qe.a.Balance),i=Object(Q.a)(o,2),u=i[0],l=i[1],d=function(){window.scrollY<60?(c(qe.a.BalanceContainer),l(qe.a.Balance)):window.scrollY>60&&(c(qe.a.BalanceContainerScroll),l(qe.a.BalanceScroll))};Object(s.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]);var j=t.map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0),b=t.map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0),f=Math.round(100*(b-j))/100;return Object(_e.jsx)("section",{className:u,children:Object(_e.jsx)("div",{className:"".concat(r),children:Object(_e.jsxs)("div",{children:[Object(_e.jsx)("p",{children:"Your balance:"}),Object(_e.jsxs)("p",{className:qe.a.BalanceAmount,children:[f," \u20ac"]})]})})})},Ye=n(53),Je=n(30),Qe=n(4),Ge=n.n(Qe),Ke=["categoryTitle","accountTitle","outcome","sum","id"];var Xe=function(e){var t=e.categoryTitle,n=e.accountTitle,a=e.outcome,r=e.sum,c=e.id,o=Object(Je.a)(e,Ke),i=Object(b.b)(),l=Object(s.useState)(!1),d=Object(Q.a)(l,2),j=d[0],f=d[1],m=function(){f(!j)},O=u.a.useRef(null);return Object(_e.jsx)(G.a,Object(p.a)(Object(p.a)({},o),{},{classNames:{enter:"".concat(Ge.a.enter),enterActive:"".concat(Ge.a.enterActive),exit:"".concat(Ge.a.exit),exitActive:"".concat(Ge.a.exitActive),exitDone:"".concat(Ge.a.exitDone)},timeout:300,nodeRef:O,children:Object(_e.jsxs)("li",{className:Ge.a.TransactionsItem,onMouseOver:m,onMouseOut:m,ref:O,children:[Object(_e.jsxs)("div",{className:Ge.a.TransactionsItemWrapper,children:[Object(_e.jsx)("p",{children:t}),Object(_e.jsxs)("p",{children:[a?"-":"+",r," \u20ac"]})]}),Object(_e.jsxs)("div",{className:Ge.a.TransactionsItemWrapper,children:[Object(_e.jsx)("p",{className:Ge.a.TransactionsItemAccount,children:n}),Object(_e.jsx)("p",{className:"".concat(Ge.a.TransactionsItemEdit," ").concat(j?"":Ge.a.TransactionsHidden),id:c,onClick:function(e){var t=e.target.id;i(Oe(t))},children:"delete"})]})]})}))};var ze=function(e){var t=e.date,n=e.transactions.filter((function(e){return e.date===t}));return Object(_e.jsx)(Ye.a,{component:"ul",children:n.map((function(e){return Object(_e.jsx)(Xe,{categoryTitle:e.category.title,accountTitle:e.account.title,outcome:e.outcome,sum:e.sum,id:e.id},e.id)}))})};function Ze(e){return new Date(e).toLocaleString("en-EN",{weekday:"long"})}function $e(e){return new Date(e).toLocaleString("en-EN",{month:"long",year:"numeric"})}function et(e){return new Date(e).toLocaleString("en-EN",{month:"long"})}var tt=function(e){var t,n=e.date,a=e.transactions.filter((function(e){return e.date===n})),r=a.filter((function(e){return!0===e.outcome})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),c=a.filter((function(e){return!1===e.outcome})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),o=Math.round(100*(c-r))/100;return Object(_e.jsxs)("div",{className:Ge.a.TransactionsHeader,children:[Object(_e.jsxs)("div",{className:Ge.a.TransactionsDateContent,children:[Object(_e.jsx)("p",{children:(t=n,new Date(t).toLocaleString("en-EN",{day:"2-digit"}))}),Object(_e.jsxs)("div",{className:Ge.a.TransactionsDateWrapper,children:[Object(_e.jsx)("p",{children:Ze(n)}),Object(_e.jsx)("p",{children:$e(n)})]})]}),Object(_e.jsxs)("p",{children:[o<0?"":"+",o," \u20ac"]})]})},nt=["date","transactions"];var at=function(e){var t=e.date,n=e.transactions,a=Object(Je.a)(e,nt),r=u.a.useRef(null);return Object(s.createElement)(G.a,Object(p.a)(Object(p.a)({},a),{},{classNames:{enter:"".concat(Ge.a.enter),enterActive:"".concat(Ge.a.enterActive),exit:"".concat(Ge.a.exit),exitActive:"".concat(Ge.a.exitActive),exitDone:"".concat(Ge.a.exitDone)},timeout:300,key:t,nodeRef:r}),Object(_e.jsxs)("li",{ref:r,children:[Object(_e.jsx)(tt,{date:t,transactions:n}),Object(_e.jsx)(ze,{date:t,transactions:n})]}))};var rt=function(e){var t=e.month,n=e.transactions,a=n.filter((function(e){return et(e.date)===t})).map((function(e){return e.date})),r=u.a.useRef(null);return Object(_e.jsxs)("ul",{className:"transactions__list",children:[Object(_e.jsx)("p",{className:Ge.a.TransactionsMonth,ref:r,children:t}),Object(_e.jsx)(Ye.a,{children:a.map((function(e){return Object(_e.jsx)(at,{date:e,transactions:n},e)}))})]})};var ct=function(e){var t=e.transactions,n=Object(y.a)(new Set(t.map((function(e){return et(e.date)}))));return Object(_e.jsx)("section",{className:"transactions",children:n.map((function(e){return Object(_e.jsx)(rt,{month:e,transactions:t},e)}))})};var ot=function(){var e=Object(b.c)(ie),t=Object(b.c)(ue),n=Object(b.b)();return Object(s.useEffect)((function(){n(ce()),n(I()),n(H())}),[]),Object(_e.jsxs)(_e.Fragment,{children:[Object(_e.jsx)(Ue,{transactions:e}),Object(_e.jsx)(Pe,{}),Object(_e.jsx)(ct,{transactions:t})]})};var it=function(){return Object(_e.jsx)("div",{children:Object(_e.jsx)("h1",{children:"Analytics"})})};var st=function(){return Object(_e.jsx)("div",{children:Object(_e.jsx)("h1",{children:"Settings"})})};var ut=function(){return Object(_e.jsx)(We,{children:Object(_e.jsxs)(f.d,{children:[Object(_e.jsx)(f.b,{path:"/",element:Object(_e.jsx)(ot,{})}),Object(_e.jsx)(f.b,{path:"/budget",element:Object(_e.jsx)(it,{})}),Object(_e.jsx)(f.b,{path:"/settings",element:Object(_e.jsx)(st,{})}),Object(_e.jsx)(f.b,{path:"*",element:Object(_e.jsx)(f.a,{to:"/"})})]})})},lt=Object(_.a)({reducer:{transactions:he,categories:R,accounts:J,searchTerm:re}});d.a.render(Object(_e.jsx)(u.a.StrictMode,{children:Object(_e.jsx)(b.a,{store:lt,children:Object(_e.jsx)(j.a,{children:Object(_e.jsx)(ut,{})})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7a68b04e.chunk.js.map