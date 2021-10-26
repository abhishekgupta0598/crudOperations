(this.webpackJsonpjobforentrylevel=this.webpackJsonpjobforentrylevel||[]).push([[0],{110:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(39),i=n.n(r),c=(n(110),n(34)),o=n(25),l=n(42),d=n(41),j=n(96),u=n(15),h=n(16),b=n(69),p=n.n(b),x=n(88),O=n(70),f=n(5),g=(n(112),n(55)),v=n.n(g),m=n(196),y=n(187),U=n(193),w=n(92),C=n.n(w),D=n(94),A=n.n(D),N=n(93),S=n.n(N),k=n(194),H=n(195),E=n(191),T=n(190),L=n(185),P=n(186),I=n(188),R=n(197),F=n(1),q=a.a.forwardRef((function(e,t){return Object(F.jsx)(T.a,Object(O.a)({elevation:6,ref:t,variant:"filled"},e))})),B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={users:[],pageNo:1,totalPages:null},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes;return console.log("page",this.state.pageNo),Object(F.jsxs)(U.a,{elevation:3,className:t.bottom,children:[Object(F.jsx)("h5",{children:"Users list from reqres.in"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(F.jsxs)("table",{children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"ID"}),Object(F.jsx)("th",{children:"FIRST NAME"}),Object(F.jsx)("th",{children:"LAST NAME"}),Object(F.jsx)("th",{children:"EMAIL"})]})}),Object(F.jsx)("tbody",{children:this.state.users.map((function(e){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:e.id}),Object(F.jsx)("td",{children:e.first_name}),Object(F.jsx)("td",{children:e.last_name}),Object(F.jsx)("td",{children:e.email})]},e.id)}))})]}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(F.jsx)("div",{style:{display:"flex",flex:1}}),Object(F.jsx)(k.a,{disabled:this.state.pageNo<=1,onClick:function(){return e.setPage(e.state.pageNo-1)},children:Object(F.jsx)(C.a,{})}),Object(F.jsxs)("span",{children:["Page ",this.state.pageNo,"/",this.state.totalPages]}),Object(F.jsx)(k.a,{disabled:!this.state.totalPages||this.state.pageNo>=this.state.totalPages,onClick:function(){return e.setPage(e.state.pageNo+1)},children:Object(F.jsx)(S.a,{})})]})]})]})}},{key:"componentDidMount",value:function(){this.loadUsers(this.state.pageNo)}},{key:"setPage",value:function(e){this.setState({pageNo:e}),this.loadUsers(e)}},{key:"loadUsers",value:function(){var e=Object(x.a)(p.a.mark((function e(t){var n,s=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={headers:{Accept:"application/json","Content-Type":"application/json"}},v.a.get("https://reqres.in/api/users?page=".concat(t),n).then((function(e){console.log(e.data.data),s.setState({users:e.data.data,totalPages:e.data.total_pages,pageNo:e.data.page})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(s.Component),M=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={warning:!1},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;console.log("local users render",this.props.users);var t=this.props,n=t.classes,s=t.editHandler,a=t.deleteHandler,r=t.users,i=function(t,n){"clickaway"!==n&&e.setState({warning:!1})};return Object(F.jsxs)(U.a,{className:n.localUsers,elevation:3,children:[Object(F.jsx)("h5",{children:"Users list from local storage"}),Object(F.jsx)("div",{children:Object(F.jsxs)("table",{children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{children:"ID"}),Object(F.jsx)("th",{children:"FIRST NAME"}),Object(F.jsx)("th",{children:"LAST NAME"}),Object(F.jsx)("th",{children:"DELETE"}),Object(F.jsx)("th",{children:"EDIT"})]})}),Object(F.jsx)("tbody",{children:r.map((function(t){return Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:t.id}),Object(F.jsx)("td",{children:t.name}),Object(F.jsx)("td",{children:t.job}),Object(F.jsx)("td",{children:Object(F.jsxs)(H.a,{spacing:2,sx:{width:"25%"},children:[Object(F.jsx)(k.a,{variant:"contained",onClick:function(){return a(t.id)},children:Object(F.jsx)(L.a,{})}),Object(F.jsx)(E.a,{open:e.state.warning,autoHideDuration:4e3,onClose:i,children:Object(F.jsx)(q,{onClose:i,severity:"warning",sx:{width:"100%"},children:"A user is deleted successfully!"})})]})}),Object(F.jsx)("td",{children:Object(F.jsx)(k.a,{variant:"contained",className:n.box,onClick:function(){return s(t.id)},children:Object(F.jsx)(P.a,{})})})]},t.id)}))})]})})]})}}]),n}(s.Component),_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;if(Object(c.a)(this,n),(s=t.call(this,e)).props.editedUser){var a=s.props.editedUser;s.state={id:a.id,name:a.name,job:a.job}}else s.state={id:"",name:"",job:""};return s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.submitHandler,s=(t.classes,t.open),a=t.cancelHandler,r=function(t,n){"clickaway"!==n&&e.setState({open:!1})};return Object(F.jsx)(I.a,{open:s,children:Object(F.jsxs)("div",{style:{padding:"15px",width:"240px"},children:[Object(F.jsx)("h5",{children:"Create Users"}),Object(F.jsxs)("form",{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"Id : "}),Object(F.jsx)("input",{type:"text",onChange:function(t){return e.setState({id:t.target.value})},value:this.state.id})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"First Name : "}),Object(F.jsx)("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"Last Name : "}),Object(F.jsx)("input",{type:"text",onChange:function(t){return e.setState({job:t.target.value})},value:this.state.job})]}),Object(F.jsxs)("div",{style:{display:"flex",flexDirecton:"row"},children:[Object(F.jsx)("span",{style:{flex:1}}),Object(F.jsx)(m.a,{color:"secondary",variant:"contained",onClick:function(){return a()},children:"CANCEL"}),Object(F.jsx)(m.a,{disabled:!this.state.id||!this.state.name||!this.state.job,variant:"contained",onClick:function(){return n(e.state.id,e.state.name,e.state.job)},style:{marginLeft:"10px"},children:"CREATE"})]}),Object(F.jsx)(H.a,{spacing:2,sx:{width:"25%"},children:Object(F.jsx)(E.a,{open:this.state.open,autoHideDuration:4e3,onClose:r,children:Object(F.jsx)(q,{onClose:r,severity:"success",sx:{width:"100%"},children:"User has been created successfully!"})})})]})]})})}}]),n}(s.Component),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;Object(c.a)(this,n);var a=(s=t.call(this,e)).props.editedUser;return s.state={id:a.id,name:a.name,job:a.job},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.submitHandler,s=(t.classes,t.open),a=t.cancelHandler;return Object(F.jsx)(I.a,{open:s,children:Object(F.jsxs)("div",{style:{padding:"15px",width:"240px"},children:[Object(F.jsx)("h5",{children:"Update User"}),Object(F.jsxs)("form",{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"Id : "}),Object(F.jsx)("input",{type:"text",disabled:!0,onChange:function(t){return e.setState({id:t.target.value})},value:this.state.id})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"First Name : "}),Object(F.jsx)("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("label",{children:"Last Name : "}),Object(F.jsx)("input",{type:"text",onChange:function(t){return e.setState({job:t.target.value})},value:this.state.job})]}),Object(F.jsxs)("div",{style:{display:"flex",flexDirecton:"row"},children:[Object(F.jsx)("span",{style:{flex:1}}),Object(F.jsx)(m.a,{color:"secondary",variant:"contained",onClick:function(){return a()},children:"CANCEL"}),Object(F.jsx)(m.a,{disabled:!this.state.id||!this.state.name||!this.state.job,variant:"contained",onClick:function(){return n(e.state.id,e.state.name,e.state.job)},style:{marginLeft:"10px"},children:"UPDATE"})]})]})]})})}}]),n}(s.Component),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).deleteHandler=function(e){console.log(e),v.a.delete("https://reqres.in/api/users/".concat(e)).then((function(){s.setState({users:s.state.users.filter((function(t){return t.id!==e}))}),s.addAlert("User with id ".concat(e," deleted at reqres.in and local storage."))})).catch((function(e){return console.log(e)}))},s.createUserHandler=function(e,t,n){s.state.users.find((function(t){return t.id===e}))?s.addAlert("Error! The user having id ".concat(e," is already present")):v.a.post("https://reqres.in/api/users",{id:e,name:t,job:n}).then((function(){s.setState({users:[].concat(Object(h.a)(s.state.users),[{id:e,name:t,job:n}]).sort((function(e,t){return e.id-t.id})),showCreateUserDialog:!1}),s.addAlert("User ".concat(t," created with id ").concat(e," at reqres.in and local storage."))})).catch((function(e){console.log(e),s.addAlert(e)}))},s.updateUserHandler=function(e,t,n){s.state.users.find((function(t){return t.id===e}))?v.a.post("https://reqres.in/api/users",{id:e,name:t,job:n}).then((function(a){s.state.users.find((function(t){return t.id===e}));s.setState({users:[].concat(Object(h.a)(s.state.users.filter((function(t){return t.id!==e}))),[{id:e,name:t,job:n}]).sort((function(e,t){return e.id-t.id})),showUpdateUserDialog:!1}),s.addAlert("User ".concat(t," with id ").concat(e," updated at reqres.in and local storage."))})).catch((function(e){console.log(e)})):s.addAlert("Error! User with id ".concat(e," does not exist."))},s.editHandler=function(e){console.log(e);var t=s.state.users.find((function(t){return t.id===e}));s.setState({editedUser:Object(O.a)({},t),showUpdateUserDialog:!0})},s.deleteAlert=function(e){s.setState({alerts:Object(h.a)(s.state.alerts.filter((function(t){return t!==e})))})},s.addAlert=function(e){s.setState({alerts:[].concat(Object(h.a)(s.state.alerts),[e])})},s.render=function(){console.log("render called for users"),console.log(s.state.users),console.log("users",s.state.users);var e=s.props.classes;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:e.root,children:[Object(F.jsx)("h3",{children:"User Operations Demo App"}),Object(F.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginBottom:"-70px",padding:"10px"},children:[Object(F.jsx)("span",{style:{flex:1}}),Object(F.jsxs)(R.a,{color:"primary",variant:"extended",onClick:function(){return s.setState({showCreateUserDialog:!0})},style:{marginTop:"10px"},children:[Object(F.jsx)(A.a,{})," Add User"]})]}),Object(F.jsx)(M,{users:s.state.users,classes:e,editHandler:s.editHandler,deleteHandler:s.deleteHandler}),Object(F.jsx)(B,{classes:e})]}),Object(F.jsx)(_,{cancelHandler:function(){return s.setState({showCreateUserDialog:!1})},submitHandler:s.createUserHandler,classes:e,open:s.state.showCreateUserDialog}),s.state.showUpdateUserDialog?Object(F.jsx)(J,{cancelHandler:function(){return s.setState({showUpdateUserDialog:!1})},submitHandler:s.updateUserHandler,classes:e,open:!0,editedUser:s.state.editedUser},s.state.editedUser.id):null,s.state.alerts.map((function(e){return Object(F.jsx)(H.a,{spacing:2,sx:{width:"25%"},children:Object(F.jsx)(E.a,{open:!0,autoHideDuration:4e3,onClose:function(){return s.deleteAlert(e)},children:Object(F.jsx)(q,{severity:"success",sx:{width:"100%"},children:e})})})}))]})},s.state={users:[],showCreateUserDialog:!1,showUpdateUserDialog:!1,alerts:[]},s}return n}(s.Component),G=Object(y.a)((function(e){return{root:{width:"80%",margin:"auto"},localUsers:{width:"100%",padding:"1%",flex:1,marginBottom:"20px"},left:Object(f.a)({width:"100%",paddingLeft:"1%",paddingRight:"1%",paddingTop:"1%",marginBottom:"1%",paddingBottom:"1%"},e.breakpoints.up("md"),{width:"39%",marginBottom:"0%",marginRight:"1%",paddingLeft:"3%",paddingRight:"3%",paddingTop:"1%",paddingBottom:"1%",marginTop:"1%"}),box:{marginRight:"2%",width:"30%"},bottom:{padding:"1%"}}}),{withTheme:!0})(z),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(F.jsx)("div",{children:Object(F.jsx)(j.a,{children:Object(F.jsx)(u.c,{children:Object(F.jsx)(u.a,{path:"/CRUD_OPERATION/",exact:!0,component:G})})})})}}]),n}(s.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(K,{})}),document.getElementById("root")),Q()}},[[144,1,2]]]);
//# sourceMappingURL=main.dce182a6.chunk.js.map