(this["webpackJsonpmoney-tracker"]=this["webpackJsonpmoney-tracker"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={TransactionsMonth:"ListContainer_TransactionsMonth__VTwQk",TransactionsHeader:"ListContainer_TransactionsHeader__1Nwh7",TransactionsDateContent:"ListContainer_TransactionsDateContent__3_Wg_",TransactionsDateWrapper:"ListContainer_TransactionsDateWrapper__3_hm9",TransactionsItem:"ListContainer_TransactionsItem__2Ekf6",TransactionsItemAccount:"ListContainer_TransactionsItemAccount__2gWdH",TransactionsItemEdit:"ListContainer_TransactionsItemEdit__1Uj3y",TransactionsItemClose:"ListContainer_TransactionsItemClose__112_0",TransactionsItemOnClick:"ListContainer_TransactionsItemOnClick__20z0S",TransactionsItemWrapper:"ListContainer_TransactionsItemWrapper__A5w7n",TransactionsHidden:"ListContainer_TransactionsHidden__32C68",enter:"ListContainer_enter__fpkFx",enterActive:"ListContainer_enterActive__16sdh",exit:"ListContainer_exit__1PACa",exitActive:"ListContainer_exitActive__Mnq44",exitDone:"ListContainer_exitDone__32oW3"}},,,,,,,,function(e,t,n){e.exports={MonthOutcomes:"MonthOutcomes_MonthOutcomes__qTFFv",List:"MonthOutcomes_List__W7KE2",Wrapper:"MonthOutcomes_Wrapper__32i-W",Balance:"MonthOutcomes_Balance__1hlER"}},,function(e,t,n){e.exports={Balance:"Balance_Balance__23Avx",BalanceScroll:"Balance_BalanceScroll__ah868",BalanceContainer:"Balance_BalanceContainer__j86A2",BalanceContainerScroll:"Balance_BalanceContainerScroll__2NjjY",BalanceAmount:"Balance_BalanceAmount__2Q1J2",BalanceWrapper:"Balance_BalanceWrapper__176bo",BalanceIncome:"Balance_BalanceIncome__2vRM2",BalanceExpense:"Balance_BalanceExpense__2eTJu"}},,function(e,t,n){e.exports={menu:"Menu_menu__g1b0Y",wrapper:"Menu_wrapper__2i6Q0",active:"Menu_active__1T3aC",menuAddBtn:"Menu_menuAddBtn__1bjf1",addBtnEnterActive:"Menu_addBtnEnterActive__2oVJa",addBtnEnterDone:"Menu_addBtnEnterDone__1MBUj"}},function(e,t,n){e.exports={form:"Form_form__2wVGg",dialogWrapper:"Form_dialogWrapper__Asoa1",dialog:"Form_dialog__3K11j",dialogTypeWrapper:"Form_dialogTypeWrapper__3UED0",dialogType:"Form_dialogType___T7YX",addFormEnterActive:"Form_addFormEnterActive__3ky2w",showForm:"Form_showForm__3Ut7i",addFormExitActive:"Form_addFormExitActive__3REkf"}},function(e,t,n){e.exports={MonthBalance:"MonthBalance_MonthBalance__3PLio",List:"MonthBalance_List__XbgNn",Wrapper:"MonthBalance_Wrapper__3s-LA",Balance:"MonthBalance_Balance__KixWi"}},,,,,,,,,,function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",InputType:"Input_InputType__20xp5",InputTypeCheckbox:"Input_InputTypeCheckbox__2WwxI"}},function(e,t,n){e.exports={YearOutcomes:"YearOutcomes_YearOutcomes__3t9We",Wrapper:"YearOutcomes_Wrapper__FyGBk",List:"YearOutcomes_List__88P11",Active:"YearOutcomes_Active__208oG"}},,,,,,function(e,t,n){e.exports={LayoutContainer:"Layout_LayoutContainer__19LML",LayoutMain:"Layout_LayoutMain__2hglt"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX"}},function(e,t,n){e.exports={Search:"Search_Search__2SQmI",SearchCloseBtn:"Search_SearchCloseBtn__dEG1E"}},function(e,t,n){e.exports={DummyWrapper:"Dummy_DummyWrapper__ainuq",Dummy:"Dummy_Dummy__V-6Gh"}},,function(e,t,n){e.exports={Select:"Select_Select__2qylT"}},function(e,t,n){e.exports={Analytics:"Analytics_Analytics__1BBMh"}},function(e,t,n){e.exports={Analytics:"Settings_Analytics__2f0Bd"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s=n(1),u=n.n(s),l=n(14),d=n.n(l),j=n(16),m=n(4),b=n(3),f=n(36),h=n.n(f),O=n(7),p=n(2),v=n(6),x=n.n(v),_=n(10),g=n(9),C=n(20),y=n(21),T=n(12),w=n(28),B=[{id:1,title:"Salary"},{id:2,title:"Rent"},{id:3,title:"Groceries"},{id:4,title:"Transportation & parking fees"},{id:5,title:"Clothing & shoes"},{id:6,title:"Family"},{id:7,title:"Coffee"},{id:8,title:"Health"}],A=[{id:1,title:"Cash",balance:2e3,startBalance:0,archive:!1},{id:2,title:"Postbank",balance:55e3,startBalance:0,archive:!1},{id:3,title:"N26",balance:55e4,startBalance:0,archive:!1}],M=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},N=function(e){e=e.slice();for(var t=1,n=[];t--;)n.push.apply(n,Object(T.a)(e.splice(M(0,e.length-1),1)));return n[0]},L=function(){var e=(new Date).getTime(),t=e-new Date(31104e6).getTime();return new Date(t+Math.random()*(e-t)).toISOString().slice(0,-14)},S=(a=A,r=B,Array(20).fill({}).map((function(){return{id:Object(w.a)(6),sum:M(1,500),date:L(),outcome:Boolean(Math.round(Math.random())),account:N(a),category:N(r)}}))),E=function(){function e(){Object(C.a)(this,e),this.categories=B}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.categories,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=new E,k=Object(g.b)("categories/loadData",Object(_.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),F=Object(g.b)("categories/addData",function(){var e=Object(_.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.create(t);case 2:return n=e.sent,e.next=5,n;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(g.c)({name:"categories",initialState:{allCategories:[],newCategory:{title:""},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addCategory:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newCategory:Object(p.a)(Object(p.a)({},e.newCategory),{},{title:t.payload})})}},extraReducers:(c={},Object(O.a)(c,k.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(O.a)(c,k.fulfilled,(function(e,t){e.allCategories=t.payload,e.isLoading=!1,e.hasError=!1})),Object(O.a)(c,k.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(O.a)(c,F.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(O.a)(c,F.fulfilled,(function(e){e.newCategory={title:""},e.isPending=!1,e.isFailedToCreate=!1})),Object(O.a)(c,F.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),c)}),W=function(e){return e.categories.allCategories},R=(I.actions.addCategory,I.reducer),V=function(){function e(){Object(C.a)(this,e),this.accounts=A}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.accounts,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=new V,Y=Object(g.b)("accounts/loadData",Object(_.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),q=Object(g.b)("accounts/addData",function(){var e=Object(_.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\ude80 ~ file: accounts-slice.js ~ line 17 ~ newAccount",t),e.next=3,P.create(t);case 3:return n=e.sent,e.next=6,n;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H=Object(g.c)({name:"accounts",initialState:{allAccounts:[],newAccount:{title:"",balance:0,startBalance:0,archive:!1},isLoading:!1,hasError:!1,isPending:!1,isFailedToCreate:!1},reducers:{addAccount:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newAccount:Object(p.a)(Object(p.a)({},e.newAccount),{},{title:t.payload})})}},extraReducers:(o={},Object(O.a)(o,Y.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(O.a)(o,Y.fulfilled,(function(e,t){e.allAccounts=t.payload,e.isLoading=!1,e.hasError=!1})),Object(O.a)(o,Y.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),Object(O.a)(o,q.pending,(function(e){e.isPending=!0,e.isFailedToCreate=!1})),Object(O.a)(o,q.fulfilled,(function(e){e.newAccount={title:"",balance:0,startBalance:0,archive:!1},e.isPending=!1,e.isFailedToCreate=!1})),Object(O.a)(o,q.rejected,(function(e){e.isPending=!1,e.isFailedToCreate=!0})),o)}),J=function(e){return e.accounts.allAccounts},G=(H.actions.addAccount,H.reducer),U=n(8),K=n(58),Q=n(17),X=n.n(Q),z=function(){function e(){Object(C.a)(this,e),this.transactions=S}return Object(y.a)(e,[{key:"getAll",value:function(){var e=Object(_.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.transactions,e.abrupt("return",t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),Z=new z,$=Object(g.c)({name:"searchTerm",initialState:"",reducers:{setSearchTerm:function(e,t){return t.payload},clearSearchTerm:function(e,t){return""}}}),ee=function(e){return e.searchTerm},te=$.actions,ne=te.setSearchTerm,ae=te.clearSearchTerm,re=$.reducer;function ce(e){return new Date(e).toLocaleString("en-EN",{weekday:"long"})}function oe(e){return new Date(e).toLocaleString("en-EN",{month:"long",year:"numeric"})}function ie(e){return new Date(e).toLocaleString("en-EN",{month:"long"})}var se=Object(g.b)("transactions/loadData",Object(_.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getAll();case 2:return t=e.sent,e.next=5,t;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),ue=Object(g.c)({name:"transactions",initialState:{allTransactions:[],newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]},isLoading:!1,hasError:!1,currentMonth:ie(new Date)},reducers:{setUserInput:function(e,t){var n=t.payload,a=n.name,r=n.value;return"outcome"===a&&(r=!e.newTransaction.outcome),"sum"===a&&(r=0===+r?"":+r),Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},Object(O.a)({},a,r))})},setCategory:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},{category:t.payload})})},setAccount:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:Object(p.a)(Object(p.a)({},e.newTransaction),{},{account:t.payload})})},addTransaction:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{allTransactions:[].concat(Object(T.a)(e.allTransactions),Object(T.a)(t.payload))})},resetState:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{newTransaction:{id:Object(w.a)(6),sum:"",date:(new Date).toISOString().slice(0,-14),outcome:!0,account:[],category:[]}})},deleteTransaction:function(e,t){var n=t.payload,a=e.allTransactions.filter((function(e){return e.id!==n}));return Object(p.a)(Object(p.a)({},e),{},{allTransactions:a})},updateMonth:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{currentMonth:t.payload})}},extraReducers:(i={},Object(O.a)(i,se.pending,(function(e){e.isLoading=!0,e.hasError=!1})),Object(O.a)(i,se.fulfilled,(function(e,t){e.allTransactions=t.payload,e.newTransaction=Object(p.a)({},e.newTransaction),e.isLoading=!1,e.hasError=!1,e.showDelete=!1})),Object(O.a)(i,se.rejected,(function(e){e.isLoading=!1,e.hasError=!0})),i)}),le=function(e){return e.transactions.allTransactions},de=function(e){return e.transactions.newTransaction},je=function(e){return e.transactions.currentMonth},me=function(e){var t=le(e),n=ee(e);return t.filter((function(e){return e.category.title.toLowerCase().includes(n.toLowerCase())})).sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()}))},be=ue.actions,fe=be.setUserInput,he=be.setCategory,Oe=be.setAccount,pe=(be.setTransactionId,be.addTransaction),ve=be.resetState,xe=be.deleteTransaction,_e=be.updateMonth,ge=ue.reducer,Ce=n(18),ye=n.n(Ce),Te=n(29),we=n.n(Te),Be=n(0);function Ae(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Me=function(e){var t=e.type||"text",n=[we.a.Input],a="".concat(t,"-").concat(Math.random());return"checkbox"===t?n.push(we.a.InputTypeCheckbox):n.push(we.a.InputType),Ae(e)&&n.push(we.a.invalid),Object(Be.jsxs)("div",{className:n.join(" "),children:[Object(Be.jsx)("input",{type:t,name:e.name,placeholder:e.placeholder,id:a,value:e.value,onChange:e.onChange}),Object(Be.jsx)("label",{htmlFor:a,children:e.label}),Ae(e)?Object(Be.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})},Ne=n(41),Le=n.n(Ne);function Se(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var Ee=function(e){var t=[Le.a.Select];return Object(Be.jsx)("div",{className:t,children:Object(Be.jsxs)("select",{onChange:e.onChange,children:[Object(Be.jsx)("option",{value:"",hidden:!0,children:e.defaultOption}),e.options.map((function(e){return Object(Be.jsx)("option",{value:e.title,children:e.title},e.id)})),Se(e)?Object(Be.jsx)("span",{children:e.errorMessage||"Enter correct value"}):null]})})},De=n(37),ke=n.n(De),Fe=function(e){var t=[ke.a.Button,ke.a[e.type]].join(" ");return Object(Be.jsx)("button",{onClick:e.onClick,className:t,disabled:e.disabled,children:e.children})};function Ie(e,t){return Object(p.a)(Object(p.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function We(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}function Re(e,t,n){var a=Object(p.a)({},n),r=Object(p.a)({},a[e]);return r.touched=!0,r.value=t,r.valid=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}(r.value,r.validation),a[e]=r,a}function Ve(){return{sum:Ie({errorMessage:"Please fill out this field"},{required:!0}),date:Ie({errorMessage:"Choose a date please"},{required:!0}),category:Ie({errorMessage:"Choose a category please"},{required:!0}),account:Ie({errorMessage:"Choose an account please"},{required:!0})}}var Pe=function(e){var t=e.categories,n=e.accounts,a=e.onClickAddBtn,r=e.setOnClickAddBtn,c=Object(m.c)(de),o=c.sum,i=c.date,l=Object(m.b)(),d=Object(s.useState)({isFormValid:!1,formControls:Ve()}),j=Object(U.a)(d,2),b=j[0],f=j[1];Object(s.useEffect)((function(){var e=Re("date",i,b.formControls);f(Object(p.a)(Object(p.a)({},b),{},{formControls:e}))}),[]);var h=function(e,t){var n=Re(t,e,b.formControls);f({formControls:n,isFormValid:We(n)}),l(fe({name:t,value:e}))},O=function(e){return function(a){var r=function(e,t){var n;return e.map((function(e){return e.title===t&&(n=e.id),n})),n};if("account"===e){var c=Re(e,a.target.value,b.formControls);f({formControls:c,isFormValid:We(c)});var o=r(n,a.target.value);l(Oe({id:o,title:a.target.value}))}if("category"===e){var i=Re(e,a.target.value,b.formControls);f({formControls:i,isFormValid:We(i)});var s=r(t,a.target.value);l(he({id:s,title:a.target.value}))}}},v=u.a.useRef(null);return Object(Be.jsx)("section",{className:ye.a.form,children:Object(Be.jsx)("div",{className:ye.a.dialogWrapper,children:Object(Be.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(Be.jsx)(K.a,{in:a,timeout:300,classNames:{enterActive:"".concat(ye.a.addFormEnterActive),exitActive:"".concat(ye.a.addFormExitActive)},unmountOnExit:!0,nodeRef:v,children:Object(Be.jsxs)("div",{className:ye.a.dialog,ref:v,children:[Object(Be.jsx)(Me,{type:"number",name:"sum",placeholder:"0.00",value:o,valid:b.formControls.sum.valid,shouldValidate:!!b.formControls.sum.validation,touched:b.formControls.sum.touched,errorMessage:b.formControls.sum.errorMessage,onChange:function(e){return h(e.target.value,e.target.name)}}),Object(Be.jsx)(Ee,{options:t,defaultOption:"Choose a category",onChange:O("category"),valid:b.formControls.category.valid,shouldValidate:!!b.formControls.category.validation,touched:b.formControls.category.touched,errorMessage:b.formControls.category.errorMessage}),Object(Be.jsx)(Ee,{options:n,defaultOption:"Choose an account",onChange:O("account"),valid:b.formControls.account.valid,shouldValidate:!!b.formControls.account.validation,touched:b.formControls.account.touched,errorMessage:b.formControls.account.errorMessage}),Object(Be.jsx)(Me,{type:"date",name:"date",value:i,valid:b.formControls.date.valid,shouldValidate:!!b.formControls.date.validation,touched:b.formControls.date.touched,errorMessage:b.formControls.date.errorMessage,onChange:function(e){return h(e.target.value,e.target.name)}}),Object(Be.jsx)("div",{className:ye.a.dialogType,children:Object(Be.jsx)(Me,{label:"Income",type:"checkbox",name:"outcome",onChange:function(e){return h(e.target.value,e.target.name)}})}),Object(Be.jsx)(Fe,{type:"submit",onClick:function(){l(pe([c])),l(ve()),r(!1);var e=Ve();e=Re("date",i,e),f({formControls:e,isFormValid:!1})},disabled:!b.isFormValid,children:"Create"})]})})})})})};var Ye=function(e){var t=e.categories,n=e.accounts,a=Object(s.useState)(!1),r=Object(U.a)(a,2),c=r[0],o=r[1],i=Object(m.b)(),l=[X.a.menuAddBtn,"fa",c?"fa-times":"fa-plus"].join(" "),d=function(e){return e.isActive?"".concat(X.a.active):""},b=u.a.useRef(null);return Object(Be.jsxs)(Be.Fragment,{children:[Object(Be.jsx)(Pe,{categories:t,accounts:n,onClickAddBtn:c,setOnClickAddBtn:o}),Object(Be.jsx)("nav",{className:X.a.menu,children:Object(Be.jsxs)("div",{className:X.a.wrapper,children:[Object(Be.jsx)(K.a,{in:c,timeout:300,classNames:{enterActive:"".concat(X.a.addBtnEnterActive),enterDone:"".concat(X.a.addBtnEnterDone)},nodeRef:b,children:Object(Be.jsx)("i",{className:l,onClick:function(){o(!c),c&&i(ve())},ref:b})}),Object(Be.jsx)(j.b,{to:"/",className:d,children:"Transactions"}),Object(Be.jsx)(j.b,{to:"/budget",className:d,children:"Analytics"}),Object(Be.jsx)(j.b,{to:"/settings",className:d,children:"Settings"})]})})]})};var qe=function(e){var t=Object(m.c)(W),n=Object(m.c)(J);return Object(Be.jsx)("div",{className:h.a.LayoutContainer,children:Object(Be.jsxs)("main",{className:h.a.LayoutMain,children:[e.children,Object(Be.jsx)(Ye,{categories:t,accounts:n})]})})},He=(n(56),n(38)),Je=n.n(He);var Ge=function(){var e=Object(m.c)(ee),t=Object(m.b)();return Object(Be.jsxs)("section",{className:Je.a.Search,children:[Object(Be.jsx)("input",{type:"text",name:"search",placeholder:"Search by category",value:e,onChange:function(e){var n=e.target.value;t(ne(n))}}),e.length>0&&Object(Be.jsx)("span",{className:Je.a.SearchCloseBtn,onClick:function(){t(ae())}})]})},Ue=n(15),Ke=n.n(Ue);var Qe=function(e){var t=e.transactions,n=Object(s.useState)(Ke.a.BalanceContainer),a=Object(U.a)(n,2),r=a[0],c=a[1],o=Object(s.useState)(Ke.a.Balance),i=Object(U.a)(o,2),u=i[0],l=i[1],d=function(){window.scrollY<60?(c(Ke.a.BalanceContainer),l(Ke.a.Balance)):window.scrollY>60&&(c(Ke.a.BalanceContainerScroll),l(Ke.a.BalanceScroll))};Object(s.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]);var j=t.map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0),m=t.map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0),b=Math.round(100*(m-j))/100;return Object(Be.jsx)("section",{className:u,children:Object(Be.jsx)("div",{className:"".concat(r),children:Object(Be.jsxs)("div",{children:[Object(Be.jsx)("p",{children:"Your balance:"}),Object(Be.jsxs)("p",{className:Ke.a.BalanceAmount,children:[b," \u20ac"]})]})})})},Xe=n(59),ze=n(33),Ze=n(5),$e=n.n(Ze),et=["categoryTitle","accountTitle","outcome","sum","id"];var tt=function(e){var t=e.categoryTitle,n=e.accountTitle,a=e.outcome,r=e.sum,c=e.id,o=Object(ze.a)(e,et),i=Object(m.b)(),l=Object(s.useState)(!1),d=Object(U.a)(l,2),j=d[0],b=d[1],f=function(){b(!j)},h=u.a.useRef(null);return Object(Be.jsx)(K.a,Object(p.a)(Object(p.a)({},o),{},{classNames:{enter:"".concat($e.a.enter),enterActive:"".concat($e.a.enterActive),exit:"".concat($e.a.exit),exitActive:"".concat($e.a.exitActive),exitDone:"".concat($e.a.exitDone)},timeout:300,nodeRef:h,children:Object(Be.jsxs)("li",{className:$e.a.TransactionsItem,onMouseOver:f,onMouseOut:f,ref:h,children:[Object(Be.jsxs)("div",{className:$e.a.TransactionsItemWrapper,children:[Object(Be.jsx)("p",{children:t}),Object(Be.jsxs)("p",{children:[a?"-":"+",r," \u20ac"]})]}),Object(Be.jsxs)("div",{className:$e.a.TransactionsItemWrapper,children:[Object(Be.jsx)("p",{className:$e.a.TransactionsItemAccount,children:n}),Object(Be.jsx)("p",{className:"".concat($e.a.TransactionsItemEdit," ").concat(j?"":$e.a.TransactionsHidden),id:c,onClick:function(e){var t=e.target.id;i(xe(t))},children:"delete"})]})]})}))};var nt=function(e){var t=e.date,n=e.transactions.filter((function(e){return e.date===t}));return Object(Be.jsx)(Xe.a,{component:"ul",children:n.map((function(e){return Object(Be.jsx)(tt,{categoryTitle:e.category.title,accountTitle:e.account.title,outcome:e.outcome,sum:e.sum,id:e.id},e.id)}))})};var at=function(e){var t,n=e.date,a=e.transactions.filter((function(e){return e.date===n})),r=a.filter((function(e){return!0===e.outcome})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),c=a.filter((function(e){return!1===e.outcome})).map((function(e){return e.sum})).reduce((function(e,t){return e+t}),0),o=Math.round(100*(c-r))/100;return Object(Be.jsxs)("div",{className:$e.a.TransactionsHeader,children:[Object(Be.jsxs)("div",{className:$e.a.TransactionsDateContent,children:[Object(Be.jsx)("p",{children:(t=n,new Date(t).toLocaleString("en-EN",{day:"2-digit"}))}),Object(Be.jsxs)("div",{className:$e.a.TransactionsDateWrapper,children:[Object(Be.jsx)("p",{children:ce(n)}),Object(Be.jsx)("p",{children:oe(n)})]})]}),Object(Be.jsxs)("p",{children:[o<0?"":"+",o," \u20ac"]})]})},rt=["date","transactions"];var ct=function(e){var t=e.date,n=e.transactions,a=Object(ze.a)(e,rt),r=u.a.useRef(null);return Object(s.createElement)(K.a,Object(p.a)(Object(p.a)({},a),{},{classNames:{enter:"".concat($e.a.enter),enterActive:"".concat($e.a.enterActive),exit:"".concat($e.a.exit),exitActive:"".concat($e.a.exitActive),exitDone:"".concat($e.a.exitDone)},timeout:300,key:t,nodeRef:r}),Object(Be.jsxs)("li",{ref:r,children:[Object(Be.jsx)(at,{date:t,transactions:n}),Object(Be.jsx)(nt,{date:t,transactions:n})]}))};var ot=function(e){var t=e.month,n=e.transactions,a=n.filter((function(e){return ie(e.date)===t})).map((function(e){return e.date})),r=u.a.useRef(null);return Object(Be.jsxs)("ul",{className:"transactions__list",children:[Object(Be.jsx)("p",{className:$e.a.TransactionsMonth,ref:r,children:t}),Object(Be.jsx)(Xe.a,{children:a.map((function(e){return Object(Be.jsx)(ct,{date:e,transactions:n},e)}))})]})};var it=function(e){var t=e.transactions,n=Object(T.a)(new Set(t.map((function(e){return ie(e.date)}))));return Object(Be.jsx)("section",{className:"transactions",children:n.map((function(e){return Object(Be.jsx)(ot,{month:e,transactions:t},e)}))})};var st=function(){var e=Object(m.c)(le),t=Object(m.c)(me),n=Object(m.b)();return Object(s.useEffect)((function(){n(se()),n(k()),n(Y())}),[]),Object(Be.jsxs)(Be.Fragment,{children:[Object(Be.jsx)(Qe,{transactions:e}),Object(Be.jsx)(Ge,{}),Object(Be.jsx)(it,{transactions:t})]})},ut=n(19),lt=n.n(ut);var dt=function(e){var t=e.currentMonth,n=Object(m.c)(le),a=Object(m.b)();Object(s.useEffect)((function(){a(se())}),[]);var r=n.filter((function(e){return ie(e.date)===t})),c=r.map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0),o=r.map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0);return Object(Be.jsxs)("section",{className:lt.a.MonthBalance,children:[Object(Be.jsx)("h2",{children:t}),Object(Be.jsxs)("ul",{className:lt.a.List,children:[Object(Be.jsxs)("li",{className:lt.a.Wrapper,children:[Object(Be.jsx)("p",{children:"income:"}),Object(Be.jsxs)("p",{className:lt.a.Balance,children:["+",o," \u20ac"]})]}),Object(Be.jsxs)("li",{className:lt.a.Wrapper,children:[Object(Be.jsx)("p",{children:"outcome:"}),Object(Be.jsxs)("p",{className:lt.a.Balance,children:["-",c," \u20ac"]})]})]})]})},jt=n(13),mt=n.n(jt);var bt=function(e){var t=e.currentMonth,n=Object(m.c)(le),a=Object(m.b)();Object(s.useEffect)((function(){a(se())}),[]);var r=n.filter((function(e){return ie(e.date)===t})),c=Object(T.a)(new Set(r.filter((function(e){return e.outcome?0!==e.sum:e=null})).map((function(e){return e.category.title})))),o=Object(T.a)(new Set(r.filter((function(e){return e.outcome?e=null:0!==e.sum})).map((function(e){return e.category.title})))),i=r.map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0),u=r.map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0),l=function(e){return r.filter((function(t){return t.category.title===e})).map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0)},d=function(e){return r.filter((function(t){return t.category.title===e})).map((function(e){return e=e.outcome?null:+e.sum})).reduce((function(e,t){return e+t}),0)};return Object(Be.jsxs)(Be.Fragment,{children:[Object(Be.jsxs)("section",{className:mt.a.MonthOutcomes,children:[Object(Be.jsxs)("h3",{children:["Outcome: -",i," \u20ac"]}),Object(Be.jsx)("ul",{className:mt.a.List,children:c.map((function(e){return Object(Be.jsxs)("li",{className:mt.a.Wrapper,children:[Object(Be.jsxs)("p",{children:[e,":"]}),Object(Be.jsxs)("p",{className:mt.a.Balance,children:["-",l(e)," \u20ac"]})]},e)}))})]}),Object(Be.jsxs)("section",{className:mt.a.MonthOutcomes,children:[Object(Be.jsxs)("h3",{children:["Income: +",u," \u20ac"]}),Object(Be.jsx)("ul",{className:mt.a.List,children:o.map((function(e){return Object(Be.jsxs)("li",{className:mt.a.Wrapper,children:[Object(Be.jsxs)("p",{children:[e,":"]}),Object(Be.jsxs)("p",{className:mt.a.Balance,children:["+",d(e)," \u20ac"]})]},e)}))})]})]})},ft=n(30),ht=n.n(ft);var Ot=function(e){var t=e.currentMonth,n=Object(m.c)(le),a=Object(m.b)(),r=function(e){var t=n.filter((function(t){return ie(t.date)===e})).map((function(e){return e=e.outcome?+e.sum:null})).reduce((function(e,t){return e+t}),0)/3e3*100;return 0===t?1:t},c=function(e){var t=e.target;a(_e(t.id))};return Object(Be.jsx)(Be.Fragment,{children:Object(Be.jsx)("section",{className:ht.a.YearOutcomes,children:Object(Be.jsx)("div",{className:ht.a.Wrapper,children:["January","February","March","April","May","June","July","August","September","October","November","December"].map((function(e){return Object(Be.jsxs)("div",{className:"".concat(ht.a.List," ").concat(e===t?ht.a.Active:""),id:e,onClick:c,children:[Object(Be.jsx)("div",{id:e,style:{height:"".concat(r(e),"%")}}),Object(Be.jsx)("p",{id:e,children:e.slice(0,3)})]},e)}))})})})},pt=n(42),vt=n.n(pt);var xt=function(){var e=Object(m.c)(je);return Object(Be.jsxs)("section",{className:vt.a.Analytics,children:[Object(Be.jsx)(dt,{currentMonth:e}),Object(Be.jsx)(Ot,{currentMonth:e}),Object(Be.jsx)(bt,{currentMonth:e})]})},_t=n(39),gt=n.n(_t);var Ct=function(){return Object(Be.jsx)("section",{className:gt.a.DummyWrapper,children:Object(Be.jsx)("div",{className:gt.a.Dummy,style:{height:"calc(100vh - 100px)"},children:"Coming soon..."})})},yt=n(43),Tt=n.n(yt);var wt=function(){return Object(Be.jsx)("section",{className:Tt.a.Analytics,children:Object(Be.jsx)(Ct,{})})};var Bt=function(){return Object(Be.jsx)(qe,{children:Object(Be.jsxs)(b.d,{children:[Object(Be.jsx)(b.b,{path:"/",element:Object(Be.jsx)(st,{})}),Object(Be.jsx)(b.b,{path:"/budget",element:Object(Be.jsx)(xt,{})}),Object(Be.jsx)(b.b,{path:"/settings",element:Object(Be.jsx)(wt,{})}),Object(Be.jsx)(b.b,{path:"*",element:Object(Be.jsx)(b.a,{to:"/"})})]})})},At=Object(g.a)({reducer:{transactions:ge,categories:R,accounts:G,searchTerm:re}});d.a.render(Object(Be.jsx)(u.a.StrictMode,{children:Object(Be.jsx)(m.a,{store:At,children:Object(Be.jsx)(j.a,{children:Object(Be.jsx)(Bt,{})})})}),document.getElementById("root"))}],[[57,1,2]]]);
//# sourceMappingURL=main.3dc928b4.chunk.js.map