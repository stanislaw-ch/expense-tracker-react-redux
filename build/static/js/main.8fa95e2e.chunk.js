(this["webpackJsonpmoney-tracker"]=this["webpackJsonpmoney-tracker"]||[]).push([[0],[,,,,function(e,t,n){e.exports={MonthExpenses:"MonthExpenses_MonthExpenses__1d6Ze",List:"MonthExpenses_List__lP4wz",Wrapper:"MonthExpenses_Wrapper__26g9q",Category:"MonthExpenses_Category__1h297",Balance:"MonthExpenses_Balance__1OzdB",TotalBg:"MonthExpenses_TotalBg__1bypZ",TotalBg1:"MonthExpenses_TotalBg1__3Wq0k",TotalBg2:"MonthExpenses_TotalBg2__3R1DX",TotalTitle:"MonthExpenses_TotalTitle__UeveH",TotalSumWrapper:"MonthExpenses_TotalSumWrapper__L6BZN",TotalSumAverage:"MonthExpenses_TotalSumAverage__1yZVO",TotalSum:"MonthExpenses_TotalSum__mLr8D",AverageWrapper:"MonthExpenses_AverageWrapper__3bkdw",TotalExpense:"MonthExpenses_TotalExpense__1lS3U",Expense:"MonthExpenses_Expense__2FmXx"}},function(e,t,n){e.exports={TransactionsMonth:"ListContainer_TransactionsMonth__VTwQk",TransactionsHeader:"ListContainer_TransactionsHeader__1Nwh7",TransactionsDateContent:"ListContainer_TransactionsDateContent__3_Wg_",TransactionsDateWrapper:"ListContainer_TransactionsDateWrapper__3_hm9",TransactionsItem:"ListContainer_TransactionsItem__2Ekf6",TransactionsItemAccount:"ListContainer_TransactionsItemAccount__2gWdH",TransactionsItemEdit:"ListContainer_TransactionsItemEdit__1Uj3y",TransactionsItemClose:"ListContainer_TransactionsItemClose__112_0",TransactionsItemOnClick:"ListContainer_TransactionsItemOnClick__20z0S",TransactionsItemWrapper:"ListContainer_TransactionsItemWrapper__A5w7n",TransactionsHidden:"ListContainer_TransactionsHidden__32C68",enter:"ListContainer_enter__fpkFx",enterActive:"ListContainer_enterActive__16sdh",exit:"ListContainer_exit__1PACa",exitActive:"ListContainer_exitActive__Mnq44",exitDone:"ListContainer_exitDone__32oW3"}},,,,,,,,,,function(e,t,n){e.exports={Balance:"Balance_Balance__23Avx",BalanceScroll:"Balance_BalanceScroll__ah868",BalanceContainer:"Balance_BalanceContainer__j86A2",BalanceContainerScroll:"Balance_BalanceContainerScroll__2NjjY",BalanceAmount:"Balance_BalanceAmount__2Q1J2",BalanceWrapper:"Balance_BalanceWrapper__176bo",BalanceIncome:"Balance_BalanceIncome__2vRM2",BalanceExpense:"Balance_BalanceExpense__2eTJu"}},,function(e,t,n){e.exports={menu:"Menu_menu__g1b0Y",wrapper:"Menu_wrapper__2i6Q0",active:"Menu_active__1T3aC",menuAddBtn:"Menu_menuAddBtn__1bjf1",addBtnEnterActive:"Menu_addBtnEnterActive__2oVJa",addBtnEnterDone:"Menu_addBtnEnterDone__1MBUj"}},function(e,t,n){e.exports={form:"Form_form__2wVGg",dialogWrapper:"Form_dialogWrapper__Asoa1",dialog:"Form_dialog__3K11j",dialogTypeWrapper:"Form_dialogTypeWrapper__3UED0",dialogType:"Form_dialogType___T7YX",addFormEnterActive:"Form_addFormEnterActive__3ky2w",showForm:"Form_showForm__3Ut7i",addFormExitActive:"Form_addFormExitActive__3REkf"}},function(e,t,n){e.exports={MonthBalance:"MonthBalance_MonthBalance__3PLio",List:"MonthBalance_List__XbgNn",Wrapper:"MonthBalance_Wrapper__3s-LA",Balance:"MonthBalance_Balance__KixWi"}},function(e,t,n){e.exports={YearExpenses:"YearExpenses_YearExpenses__1Jmci",Wrapper:"YearExpenses_Wrapper__qpM9Y",List:"YearExpenses_List__2q1Fm",Expenses:"YearExpenses_Expenses__3SbWC",Incomes:"YearExpenses_Incomes__2hXLw",Active:"YearExpenses_Active__2DlKf"}},,,,,,,,,,function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",InputType:"Input_InputType__20xp5",InputTypeCheckbox:"Input_InputTypeCheckbox__2WwxI"}},,,,,,function(e,t,n){e.exports={LayoutContainer:"Layout_LayoutContainer__19LML",LayoutMain:"Layout_LayoutMain__2hglt"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX"}},function(e,t,n){e.exports={Search:"Search_Search__2SQmI",SearchCloseBtn:"Search_SearchCloseBtn__dEG1E"}},function(e,t,n){e.exports={DummyWrapper:"Dummy_DummyWrapper__ainuq",Dummy:"Dummy_Dummy__V-6Gh"}},,function(e,t,n){e.exports={Select:"Select_Select__2qylT"}},function(e,t,n){e.exports={Statistics:"Statistics_Statistics__1Ncpx"}},function(e,t,n){e.exports={Settings:"Settings_Settings__1zu8U"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,c,s,o,i=n(1),u=n.n(i),l=n(14),d=n.n(l),j=n(16),p=n(6),m=n(3),b=n(36),h=n.n(b),f=n(8),x=n(2),O=n(7),v=n.n(O),_=n(11),g=n(10),T=n(21),y=n(22),C=n(13),w=n(29),N=[{id:1,title:"Salary"},{id:2,title:"Rent"},{id:3,title:"Groceries"},{id:4,title:"Transportation & parking fees"},{id:5,title:"Clothing & shoes"},{id:6,title:"Family"},{id:7,title:"Coffee"},{id:8,title:"Health"}],M=[{id:1,title:"Cash",balance:2e3,startBalance:0,archive:!1},{id:2,title:"Postbank",balance:55e3,startBalance:0,archive:!1},{id:3,title:"N26",balance:55e4,startBalance:0,archive:!1}],B=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},E=function(e){e=e.slice();for(var t=1,n=[];t--;)n.push.apply(n,Object(C.a)(e.splice(B(0,e.length-1),1)));return n[0]},S=function(){var e=(new Date).getTime(),t=e-new Date(31104e6).getTime();return new Date(t+Math.random()*(e-t)).toISOString().slice(0,-14)},A=(a=M,r=N,Array(100).fill({}).map((function(){return{id:Object(w.a)(6),sum:B(1,500),date:S(),expense:Boolean(Math.round(Math.random())),account:E(a),category:E(r)}}))),L=function(){function e(){Object(T.a)(this,e),this.categories=N}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.categories,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=new L,I=Object(g.b)("categories/loadData",Object(_.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),k=Object(g.b)("categories/addData",function(){var e=Object(_.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.create(t);case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(g.c)({name:"categories",initialState:{allCategories:N,newCategory:{title:""},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addCategory:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{newCategory:Object(x.a)(Object(x.a)({},e.newCategory),{},{title:t.payload})})}},extraReducers:(c={},Object(f.a)(c,I.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(f.a)(c,I.fulfilled,(function(e,t){e.allCategories=t.payload,e.isLoading=!1,e.hasError=!1})),Object(f.a)(c,I.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(f.a)(c,k.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(f.a)(c,k.fulfilled,(function(e){e.newCategory={title:""},e.isPending=!1,e.isFailedToCreate=!1})),Object(f.a)(c,k.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),c)}),F=function(e){return e.categories.allCategories},V=(W.actions.addCategory,W.reducer),R=function(){function e(){Object(T.a)(this,e),this.accounts=M}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.accounts,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Y=new R,P=Object(g.b)("accounts/loadData",Object(_.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),q=Object(g.b)("accounts/addData",function(){var e=Object(_.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.create(t);case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H=Object(g.c)({name:"accounts",initialState:{allAccounts:M,newAccount:{title:"",balance:0,startBalance:0,archive:!1},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addAccount:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{newAccount:Object(x.a)(Object(x.a)({},e.newAccount),{},{title:t.payload})})}},extraReducers:(s={},Object(f.a)(s,P.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(f.a)(s,P.fulfilled,(function(e,t){e.allAccounts=t.payload,e.isLoading=!1,e.hasError=!1})),Object(f.a)(s,P.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(f.a)(s,q.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(f.a)(s,q.fulfilled,(function(e){e.newAccount={title:"",balance:0,startBalance:0,archive:!1},e.isPending=!1,e.isFailedToCreate=!1})),Object(f.a)(s,q.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),s)}),J=function(e){return e.accounts.allAccounts},U=(H.actions.addAccount,H.reducer),X=n(9),z=n(58),G=n(17),K=n.n(G),Q=function(){function e(){Object(T.a)(this,e),this.transactions=A}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.transactions,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Z=new Q,$=Object(g.c)({name:"searchTerm",initialState:"",reducers:{setSearchTerm:function(e,t){return t.payload},clearSearchTerm:function(e,t){return""}}}),ee=function(e){return e.searchTerm},te=$.actions,ne=te.setSearchTerm,ae=te.clearSearchTerm,re=$.reducer;function ce(e){return new Date(e).toLocaleString("en-EN",{weekday:"long"})}function se(e){return new Date(e).toLocaleString("en-EN",{month:"long",year:"numeric"})}function oe(e){return new Date(e).toLocaleString("en-EN",{month:"long"})}var ie=Object(g.b)("transactions/loadData",Object(_.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),ue=Object(g.c)({name:"transactions",initialState:{allTransactions:A,newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),expense:!0,account:[],category:[]},isLoading:!1,hasError:!1,currentMonth:oe(new Date)},reducers:{setUserInput:function(e,t){var n=t.payload,a=n.name,r=n.value;return"expense"===a&&(r=!e.newTransaction.expense),"sum"===a&&(r=0===+r?"":+r),Object(x.a)(Object(x.a)({},e),{},{newTransaction:Object(x.a)(Object(x.a)({},e.newTransaction),{},Object(f.a)({},a,r))})},setCategory:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{newTransaction:Object(x.a)(Object(x.a)({},e.newTransaction),{},{category:t.payload})})},setAccount:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{newTransaction:Object(x.a)(Object(x.a)({},e.newTransaction),{},{account:t.payload})})},addTransaction:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{allTransactions:[].concat(Object(C.a)(e.allTransactions),Object(C.a)(t.payload))})},resetState:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),expense:!0,account:[],category:[]}})},deleteTransaction:function(e,t){var n=t.payload,a=e.allTransactions.filter((function(e){return e.id!==n}));return Object(x.a)(Object(x.a)({},e),{},{allTransactions:a})},updateMonth:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{currentMonth:t.payload})}},extraReducers:(o={},Object(f.a)(o,ie.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(f.a)(o,ie.fulfilled,(function(e,t){e.allTransactions=t.payload,e.newTransaction=Object(x.a)({},e.newTransaction),e.isLoading=!1,e.hasError=!1,e.showDelete=!1})),Object(f.a)(o,ie.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),o)}),le=function(e){return e.transactions.allTransactions},de=function(e){return e.transactions.newTransaction},je=function(e){return e.transactions.currentMonth},pe=function(e){var t=le(e),n=ee(e);return t.filter((function(e){return e.category.title.toLowerCase().includes(n.toLowerCase())})).sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()}))},me=ue.actions,be=me.setUserInput,he=me.setCategory,fe=me.setAccount,xe=(me.setTransactionId,me.addTransaction),Oe=me.resetState,ve=me.deleteTransaction,_e=me.updateMonth,ge=ue.reducer,Te=n(18),ye=n.n(Te),Ce=n(30),we=n.n(Ce),Ne=n(0);function Me(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Be=function(e){var t=e.type||"text",n=[we.a.Input],a="".concat(t,"-").concat(Math.random());return"checkbox"===t?n.push(we.a.InputTypeCheckbox):n.push(we.a.InputType),Me(e)&&n.push(we.a.invalid),Object(Ne.jsxs)("div",{className:n.join(" "),children:[Object(Ne.jsx)("input",{type:t,name:e.name,placeholder:e.placeholder,id:a,value:e.value,onChange:e.onChange}),Object(Ne.jsx)("label",{htmlFor:a,children:e.label}),Me(e)?Object(Ne.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})},Ee=n(41),Se=n.n(Ee);function Ae(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Le=function(e){var t=[Se.a.Select];return Object(Ne.jsx)("div",{className:t,children:Object(Ne.jsxs)("select",{onChange:e.onChange,children:[Object(Ne.jsx)("option",{value:"",hidden:!0,children:e.defaultOption}),e.options.map((function(e){return Object(Ne.jsx)("option",{value:e.title,children:e.title},e.id)})),Ae(e)?Object(Ne.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})})},De=n(37),Ie=n.n(De),ke=function(e){var t=[Ie.a.Button,Ie.a[e.type]].join(" ");return Object(Ne.jsx)("button",{onClick:e.onClick,className:t,disabled:e.disabled,children:e.children})};function We(e,t){return Object(x.a)(Object(x.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function Fe(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}function Ve(e,t,n){var a=Object(x.a)({},n),r=Object(x.a)({},a[e]);return r.touched=!0,r.value=t,r.valid=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}(r.value,r.validation),a[e]=r,a}function Re(){return{sum:We({errorMessage:"Please fill out this field"},{required:!0}),date:We({errorMessage:"Choose a date please"},{required:!0}),category:We({errorMessage:"Choose a category please"},{required:!0}),account:We({errorMessage:"Choose an account please"},{required:!0})}}var Ye=function(e){var t=e.categories,n=e.accounts,a=e.onClickAddBtn,r=e.setOnClickAddBtn,c=Object(p.c)(de),s=c.sum,o=c.date,l=Object(p.b)(),d=Object(i.useState)({isFormValid:!1,formControls:Re()}),j=Object(X.a)(d,2),m=j[0],b=j[1];Object(i.useEffect)((function(){var e=Ve("date",o,m.formControls);b(Object(x.a)(Object(x.a)({},m),{},{formControls:e}))}),[]);var h=function(e,t){var n=Ve(t,e,m.formControls);b({formControls:n,isFormValid:Fe(n)}),l(be({name:t,value:e}))},f=function(e){return function(a){var r=function(e,t){var n;return e.map((function(e){return e.title===t&&(n=e.id),n})),n};if("account"===e){var c=Ve(e,a.target.value,m.formControls);b({formControls:c,isFormValid:Fe(c)});var s=r(n,a.target.value);l(fe({id:s,title:a.target.value}))}if("category"===e){var o=Ve(e,a.target.value,m.formControls);b({formControls:o,isFormValid:Fe(o)});var i=r(t,a.target.value);l(he({id:i,title:a.target.value}))}}},O=u.a.useRef(null);return Object(Ne.jsx)("section",{className:ye.a.form,children:Object(Ne.jsx)("div",{className:ye.a.dialogWrapper,children:Object(Ne.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(Ne.jsx)(z.a,{in:a,timeout:300,classNames:{enterActive:"".concat(ye.a.addFormEnterActive),exitActive:"".concat(ye.a.addFormExitActive)},unmountOnExit:!0,nodeRef:O,children:Object(Ne.jsxs)("div",{className:ye.a.dialog,ref:O,children:[Object(Ne.jsx)(Be,{type:"number",name:"sum",placeholder:"0.00",value:s,valid:m.formControls.sum.valid,shouldValidate:!!m.formControls.sum.validation,touched:m.formControls.sum.touched,errorMessage:m.formControls.sum.errorMessage,onChange:function(e){return h(e.target.value,e.target.name)}}),Object(Ne.jsx)(Le,{options:t,defaultOption:"Choose a category",onChange:f("category"),valid:m.formControls.category.valid,shouldValidate:!!m.formControls.category.validation,touched:m.formControls.category.touched,errorMessage:m.formControls.category.errorMessage}),Object(Ne.jsx)(Le,{options:n,defaultOption:"Choose an account",onChange:f("account"),valid:m.formControls.account.valid,shouldValidate:!!m.formControls.account.validation,touched:m.formControls.account.touched,errorMessage:m.formControls.account.errorMessage}),Object(Ne.jsx)(Be,{type:"date",name:"date",value:o,valid:m.formControls.date.valid,shouldValidate:!!m.formControls.date.validation,touched:m.formControls.date.touched,errorMessage:m.formControls.date.errorMessage,onChange:function(e){return h(e.target.value,e.target.name)}}),Object(Ne.jsx)("div",{className:ye.a.dialogType,children:Object(Ne.jsx)(Be,{label:"Income",type:"checkbox",name:"expense",onChange:function(e){return h(e.target.value,e.target.name)}})}),Object(Ne.jsx)(ke,{type:"submit",onClick:function(){l(xe([c])),l(Oe()),r(!1);var e=Re();e=Ve("date",o,e),b({formControls:e,isFormValid:!1})},disabled:!m.isFormValid,children:"Create"})]})})})})})};var Pe=function(e){var t=e.categories,n=e.accounts,a=Object(i.useState)(!1),r=Object(X.a)(a,2),c=r[0],s=r[1],o=Object(p.b)(),l=[K.a.menuAddBtn,"fa",c?"fa-times":"fa-plus"].join(" "),d=function(e){return e.isActive?"".concat(K.a.active):""},m=u.a.useRef(null);return Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsx)(Ye,{categories:t,accounts:n,onClickAddBtn:c,setOnClickAddBtn:s}),Object(Ne.jsx)("nav",{className:K.a.menu,children:Object(Ne.jsxs)("div",{className:K.a.wrapper,children:[Object(Ne.jsx)(z.a,{in:c,timeout:300,classNames:{enterActive:"".concat(K.a.addBtnEnterActive),enterDone:"".concat(K.a.addBtnEnterDone)},nodeRef:m,children:Object(Ne.jsx)("i",{className:l,onClick:function(){s(!c),c&&o(Oe())},ref:m})}),Object(Ne.jsx)(j.b,{to:"/",className:d,children:"Transactions"}),Object(Ne.jsx)(j.b,{to:"/budget",className:d,children:"Statistics"}),Object(Ne.jsx)(j.b,{to:"/settings",className:d,children:"Settings"})]})})]})};var qe=function(e){var t=Object(p.c)(F),n=Object(p.c)(J);return Object(Ne.jsx)("div",{className:h.a.LayoutContainer,children:Object(Ne.jsxs)("main",{className:h.a.LayoutMain,children:[e.children,Object(Ne.jsx)(Pe,{categories:t,accounts:n})]})})},He=(n(56),n(38)),Je=n.n(He);var Ue=function(){var e=Object(p.c)(ee),t=Object(p.b)();return Object(Ne.jsxs)("section",{className:Je.a.Search,children:[Object(Ne.jsx)("input",{type:"text",name:"search",placeholder:"Search by category",value:e,onChange:function(e){var n=e.target.value;t(ne(n))}}),e.length>0&&Object(Ne.jsx)("span",{className:Je.a.SearchCloseBtn,onClick:function(){t(ae())}})]})},Xe=n(15),ze=n.n(Xe);var Ge=function(e){var t=e.transactions,n=Object(i.useState)(ze.a.BalanceContainer),a=Object(X.a)(n,2),r=a[0],c=a[1],s=Object(i.useState)(ze.a.Balance),o=Object(X.a)(s,2),u=o[0],l=o[1],d=function(){window.scrollY<60?(c(ze.a.BalanceContainer),l(ze.a.Balance)):window.scrollY>60&&(c(ze.a.BalanceContainerScroll),l(ze.a.BalanceScroll))};Object(i.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]);var j=t.map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0),p=t.map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0),m=Math.round(100*(p-j))/100;return Object(Ne.jsx)("section",{className:u,children:Object(Ne.jsx)("div",{className:"".concat(r),children:Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)("p",{children:"Your balance:"}),Object(Ne.jsxs)("p",{className:ze.a.BalanceAmount,children:[m," \u20ac"]})]})})})},Ke=n(59),Qe=n(33),Ze=n(5),$e=n.n(Ze),et=["categoryTitle","accountTitle","expense","sum","id"];var tt=function(e){var t=e.categoryTitle,n=e.accountTitle,a=e.expense,r=e.sum,c=e.id,s=Object(Qe.a)(e,et),o=Object(p.b)(),l=Object(i.useState)(!1),d=Object(X.a)(l,2),j=d[0],m=d[1],b=function(){m(!j)},h=u.a.useRef(null);return Object(Ne.jsx)(z.a,Object(x.a)(Object(x.a)({},s),{},{classNames:{enter:"".concat($e.a.enter),enterActive:"".concat($e.a.enterActive),exit:"".concat($e.a.exit),exitActive:"".concat($e.a.exitActive),exitDone:"".concat($e.a.exitDone)},timeout:300,nodeRef:h,children:Object(Ne.jsxs)("li",{className:$e.a.TransactionsItem,onMouseOver:b,onMouseOut:b,ref:h,children:[Object(Ne.jsxs)("div",{className:$e.a.TransactionsItemWrapper,children:[Object(Ne.jsx)("p",{children:t}),Object(Ne.jsxs)("p",{children:[a?"-":"+",r," \u20ac"]})]}),Object(Ne.jsxs)("div",{className:$e.a.TransactionsItemWrapper,children:[Object(Ne.jsx)("p",{className:$e.a.TransactionsItemAccount,children:n}),Object(Ne.jsx)("p",{className:"".concat($e.a.TransactionsItemEdit," ").concat(j?"":$e.a.TransactionsHidden),id:c,onClick:function(e){var t=e.target.id;o(ve(t))},children:"delete"})]})]})}))};var nt=function(e){var t=e.date,n=e.transactions.filter((function(e){return e.date===t}));return Object(Ne.jsx)(Ke.a,{component:"ul",children:n.map((function(e){return Object(Ne.jsx)(tt,{categoryTitle:e.category.title,accountTitle:e.account.title,expense:e.expense,sum:e.sum,id:e.id},e.id)}))})};var at=function(e){var t,n=e.date,a=e.transactions.filter((function(e){return e.date===n})),r=a.filter((function(e){return!0===e.expense})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),c=a.filter((function(e){return!1===e.expense})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),s=Math.round(100*(c-r))/100;return Object(Ne.jsxs)("div",{className:$e.a.TransactionsHeader,children:[Object(Ne.jsxs)("div",{className:$e.a.TransactionsDateContent,children:[Object(Ne.jsx)("p",{children:(t=n,new Date(t).toLocaleString("en-EN",{day:"2-digit"}))}),Object(Ne.jsxs)("div",{className:$e.a.TransactionsDateWrapper,children:[Object(Ne.jsx)("p",{children:ce(n)}),Object(Ne.jsx)("p",{children:se(n)})]})]}),Object(Ne.jsxs)("p",{children:[s<0?"":"+",s," \u20ac"]})]})},rt=["date","transactions"];var ct=function(e){var t=e.date,n=e.transactions,a=Object(Qe.a)(e,rt),r=u.a.useRef(null);return Object(i.createElement)(z.a,Object(x.a)(Object(x.a)({},a),{},{classNames:{enter:"".concat($e.a.enter),enterActive:"".concat($e.a.enterActive),exit:"".concat($e.a.exit),exitActive:"".concat($e.a.exitActive),exitDone:"".concat($e.a.exitDone)},timeout:300,key:t,nodeRef:r}),Object(Ne.jsxs)("li",{ref:r,children:[Object(Ne.jsx)(at,{date:t,transactions:n}),Object(Ne.jsx)(nt,{date:t,transactions:n})]}))};var st=function(e){var t=e.month,n=e.transactions,a=n.filter((function(e){return oe(e.date)===t})).map((function(e){return e.date})),r=u.a.useRef(null);return Object(Ne.jsxs)("ul",{className:"transactions__list",children:[Object(Ne.jsx)("p",{className:$e.a.TransactionsMonth,ref:r,children:t}),Object(Ne.jsx)(Ke.a,{children:a.map((function(e){return Object(Ne.jsx)(ct,{date:e,transactions:n},e)}))})]})};var ot=function(e){var t=e.transactions,n=Object(C.a)(new Set(t.map((function(e){return oe(e.date)}))));return Object(Ne.jsx)("section",{className:"transactions",children:n.map((function(e){return Object(Ne.jsx)(st,{month:e,transactions:t},e)}))})};var it=function(){var e=Object(p.c)(le),t=Object(p.c)(pe);return Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsx)(Ge,{transactions:e}),Object(Ne.jsx)(Ue,{}),Object(Ne.jsx)(ot,{transactions:t})]})},ut=n(19),lt=n.n(ut);var dt=function(e){var t=e.currentMonth,n=e.transactions.filter((function(e){return oe(e.date)===t})),a=n.map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0),r=n.map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0);return Object(Ne.jsxs)("section",{className:lt.a.MonthBalance,children:[Object(Ne.jsx)("h2",{children:t}),Object(Ne.jsxs)("ul",{className:lt.a.List,children:[Object(Ne.jsxs)("li",{className:lt.a.Wrapper,children:[Object(Ne.jsx)("p",{children:"incomes:"}),Object(Ne.jsxs)("p",{className:lt.a.Balance,children:["+",r," \u20ac"]})]}),Object(Ne.jsxs)("li",{className:lt.a.Wrapper,children:[Object(Ne.jsx)("p",{children:"expenses:"}),Object(Ne.jsxs)("p",{className:lt.a.Balance,children:["-",a," \u20ac"]})]})]})]})},jt=n(4),pt=n.n(jt);var mt=function(e){var t=e.currentMonth,n=e.transactions,a=n.filter((function(e){return oe(e.date)===t})),r=Object(C.a)(new Set(a.filter((function(e){return e.expense?0!==e.sum:e=null})).map((function(e){return e.category.title})))),c=Object(C.a)(new Set(a.filter((function(e){return e.expense?e=null:0!==e.sum})).map((function(e){return e.category.title})))),s=a.map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0),o=a.map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0),i=n.map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0),u=n.map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0),l=Math.round(100*i/12/100),d=Math.round(100*u/12/100),j=function(e){return a.filter((function(t){return t.category.title===e})).map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0)},p=function(e){return a.filter((function(t){return t.category.title===e})).map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0)},m=function(e){var t=e/s*100,n=(t=Math.round(t))>=100?100:t;return 0===n?1:n},b=function(e){var t=e/o*100,n=(t=Math.round(t))>=100?100:t;return 0===n?1:n},h=function(e){var t=e/(i/12)*100,n=t>=100?100:t;return 0===n?1:n},f=function(e){var t=e/(u/12)*100,n=t>=100?100:t;return 0===n?1:n};return Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsxs)("section",{className:pt.a.MonthExpenses,children:[Object(Ne.jsxs)("div",{style:{width:"100%",display:"flex"},children:[Object(Ne.jsx)("div",{className:pt.a.TotalBg1,style:{width:"".concat(function(e){var t=e/(i/12)*100,n=0;return t>100?t-100:n}(s),"%")}}),Object(Ne.jsx)("div",{className:pt.a.TotalExpense,style:{width:"".concat(h(s),"%")}}),Object(Ne.jsx)("div",{className:pt.a.TotalBg,style:{width:"".concat(100-h(s),"%")}})]}),Object(Ne.jsx)("h4",{className:pt.a.TotalTitle,children:"Expenses"}),Object(Ne.jsxs)("div",{className:pt.a.TotalSumWrapper,children:[Object(Ne.jsx)("h4",{className:pt.a.TotalSumAverage,children:function(e){var t=l-s;return t>=0?"".concat(t,"\u20ac up to average"):"".concat(Math.abs(t),"\u20ac above to average")}()}),Object(Ne.jsxs)("h4",{className:pt.a.TotalSum,children:["-",s,"\u20ac"]})]}),Object(Ne.jsx)("ul",{className:pt.a.List,children:r.map((function(e){return Object(Ne.jsxs)("li",{className:pt.a.Wrapper,children:[Object(Ne.jsx)("div",{className:pt.a.TotalBg}),Object(Ne.jsx)("div",{className:pt.a.Expense,style:{width:"".concat(m(j(e)),"%")}}),Object(Ne.jsx)("p",{className:pt.a.Category,children:"".concat(m(j(e)),"% ").concat(e)}),Object(Ne.jsxs)("div",{className:pt.a.AverageWrapper,children:[Object(Ne.jsx)("p",{className:pt.a.TotalSumAverage,children:"0\u20ac up to average"}),Object(Ne.jsxs)("p",{className:pt.a.Balance,children:["-",j(e),"\u20ac"]})]})]},e)}))})]}),Object(Ne.jsxs)("section",{className:pt.a.MonthExpenses,children:[Object(Ne.jsxs)("div",{style:{width:"100%",display:"flex"},children:[Object(Ne.jsx)("div",{className:pt.a.TotalBg2,style:{width:"".concat(function(e){var t=e/(u/12)*100,n=0;return t>100?t-100:n}(o),"%")}}),Object(Ne.jsx)("div",{className:pt.a.TotalExpense,style:{width:"".concat(f(o),"%")}}),Object(Ne.jsx)("div",{className:pt.a.TotalBg,style:{width:"".concat(100-f(o),"%")}})]}),Object(Ne.jsx)("h4",{className:pt.a.TotalTitle,children:"Incomes"}),Object(Ne.jsxs)("div",{className:pt.a.TotalSumWrapper,children:[Object(Ne.jsx)("h4",{className:pt.a.TotalSumAverage,children:function(e){var t=d-o;return t>=0?"".concat(t,"\u20ac up to average"):"".concat(Math.abs(t),"\u20ac above to average")}()}),Object(Ne.jsxs)("h4",{className:pt.a.TotalSum,children:["+",o,"\u20ac"]})]}),Object(Ne.jsx)("ul",{className:pt.a.List,children:c.map((function(e){return Object(Ne.jsxs)("li",{className:pt.a.Wrapper,children:[Object(Ne.jsx)("div",{className:pt.a.TotalBg}),Object(Ne.jsx)("div",{className:pt.a.Expense,style:{width:"".concat(b(p(e)),"%")}}),Object(Ne.jsx)("p",{className:pt.a.Category,children:"".concat(b(p(e)),"% ").concat(e)}),Object(Ne.jsxs)("div",{className:pt.a.AverageWrapper,children:[Object(Ne.jsx)("p",{className:pt.a.TotalSumAverage,children:"0\u20ac up to average"}),Object(Ne.jsxs)("p",{className:pt.a.Balance,children:["+",p(e),"\u20ac"]})]})]},e)}))})]})]})},bt=n(20),ht=n.n(bt);var ft=function(e){var t=e.currentMonth,n=e.transactions,a=Object(p.b)(),r=function(e){var t=n.filter((function(t){return oe(t.date)===e})).map((function(e){return e=e.expense?+e.sum:null})).reduce((function(e,t){return e+t}),0)/3e3*100,a=t>=100?100:t;return 0===a?1:a},c=function(e){var t=n.filter((function(t){return oe(t.date)===e})).map((function(e){return e=e.expense?null:+e.sum})).reduce((function(e,t){return e+t}),0)/3e3*100,a=t>=100?100:t;return 0===a?1:a},s=function(e){var t=e.target;a(_e(t.id))};return Object(Ne.jsx)(Ne.Fragment,{children:Object(Ne.jsx)("section",{className:ht.a.YearExpenses,children:Object(Ne.jsx)("div",{className:ht.a.Wrapper,children:["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e){return Object(Ne.jsxs)("div",{className:"".concat(ht.a.List," ").concat(e===t?ht.a.Active:""),id:e,onClick:s,children:[Object(Ne.jsx)("div",{className:ht.a.Incomes,id:e,style:{height:"".concat(c(e),"%")}}),Object(Ne.jsx)("div",{className:ht.a.Expenses,id:e,style:{height:"".concat(r(e),"%")}}),Object(Ne.jsx)("p",{id:e,children:e.slice(0,3)})]},e)}))})})})},xt=n(42),Ot=n.n(xt);var vt=function(){var e=Object(p.c)(le),t=Object(p.c)(je);return Object(Ne.jsxs)("section",{className:Ot.a.Statistics,children:[Object(Ne.jsx)(dt,{currentMonth:t,transactions:e}),Object(Ne.jsx)(ft,{currentMonth:t,transactions:e}),Object(Ne.jsx)(mt,{currentMonth:t,transactions:e})]})},_t=n(39),gt=n.n(_t);var Tt=function(){return Object(Ne.jsx)("section",{className:gt.a.DummyWrapper,children:Object(Ne.jsx)("div",{className:gt.a.Dummy,style:{height:"calc(100vh - 100px)"},children:"Coming soon..."})})},yt=n(43),Ct=n.n(yt);var wt=function(){return Object(Ne.jsx)("section",{className:Ct.a.Settings,children:Object(Ne.jsx)(Tt,{})})};var Nt=function(){return Object(Ne.jsx)(qe,{children:Object(Ne.jsxs)(m.d,{children:[Object(Ne.jsx)(m.b,{path:"/",element:Object(Ne.jsx)(it,{})}),Object(Ne.jsx)(m.b,{path:"/budget",element:Object(Ne.jsx)(vt,{})}),Object(Ne.jsx)(m.b,{path:"/settings",element:Object(Ne.jsx)(wt,{})}),Object(Ne.jsx)(m.b,{path:"*",element:Object(Ne.jsx)(m.a,{to:"/"})})]})})},Mt=Object(g.a)({reducer:{transactions:ge,categories:V,accounts:U,searchTerm:re}});d.a.render(Object(Ne.jsx)(u.a.StrictMode,{children:Object(Ne.jsx)(p.a,{store:Mt,children:Object(Ne.jsx)(j.a,{children:Object(Ne.jsx)(Nt,{})})})}),document.getElementById("root"))}],[[57,1,2]]]);
//# sourceMappingURL=main.8fa95e2e.chunk.js.map