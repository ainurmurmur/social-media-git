(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(34),r=n(0),o=n.n(r),u=n(56),c=n.n(u),i=n(89),s=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return o.a.createElement("div",{className:c.a.formControl+" "+(r?c.a.error:"")},o.a.createElement("div",null,n.children),r&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({name:e,placeholder:t,component:n,validate:a},r))," ",u)}},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n(136),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"bb24df90-925e-4eb5-a07f-24f5b0731fe5"}}),o={getUsersApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUsersId:function(e){return console.warn("Absolute method. Please profileAPI object"),u.getUsersId(e)},deleteUnfollow:function(e){return r.delete("follow/"+e).then((function(e){return e.data}))},postFollow:function(e){return r.post("follow/"+e).then((function(e){return e.data}))}},u={getUsersId:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile/",e)}},c={headerAuth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(46),r=n(9),o={dialogsData:[{name:"Vika",id:"1"},{name:"Alla",id:"2"},{name:"Aidana",id:"3"},{name:"Tanya",id:"4"},{name:"Anzhela",id:"5"}],messagesData:[{message:"How are you?",id:"1"},{message:"Hi",id:"2"},{message:"Hi",id:"3"},{message:"Hi",id:"4"},{message:"Hi",id:"5"}]},u=function(e){return{type:"dialogs/SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[{message:n,id:"6"}])});default:return e}}},129:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return h})),n.d(t,"g",(function(){return E})),n.d(t,"i",(function(){return v})),n.d(t,"h",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"j",(function(){return _}));var a=n(6),r=n.n(a),o=n(14),u=n(46),c=n(9),i=n(11),s=function(e,t,n,a){return e.map((function(e){return e[t]===n?Object(c.a)({},e,{},a):e}))},l="users/FOLLOW",f={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},p=function(e){return{type:l,userId:e}},m=function(e){return{type:"users/UNFOLLOW",userId:e}},d=function(e){return{type:"users/SET_USERS",users:e}},h=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"users/SET_USERS_TOTAL_COUNT",count:e}},v=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS",followingInProgress:e,userId:t}},g=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(v(!0)),n.next=3,i.c.getUsersApi(e,t);case 3:o=n.sent,a(v(!1)),a(d(o.items)),a(E(o.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(v(!0)),a(h(e)),n.next=4,i.c.getUsersApi(e,t);case 4:o=n.sent,a(v(!1)),a(d(o.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(b(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&n(o(t)),n(b(!1,t)),n(o(t));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),j=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e,n,i.c.postFollow.bind(i.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e,n,i.c.deleteUnfollow.bind(i.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)({},e,{users:s(e.users,"id",t.userId,{followed:!0})});case"users/UNFOLLOW":return Object(c.a)({},e,{users:s(e.users,"id",t.userId,{followed:!1})});case"users/SET_USERS":return Object(c.a)({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"users/SET_USERS_TOTAL_COUNT":return Object(c.a)({},e,{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS":return Object(c.a)({},e,{followingInProgress:t.followingInProgress?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},131:function(e,t,n){e.exports={footer:"Footer_footer__29sgD"}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.2aea4710.svg"},135:function(e,t,n){e.exports={ava:"Post_ava__1RwCL"}},137:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},164:function(e,t,n){e.exports=n(293)},169:function(e,t,n){},170:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},18:function(e,t,n){e.exports={navBar:"NavBar_navBar__3pzK-",ul:"NavBar_ul__2amjO",item:"NavBar_item__1I6ss",active:"NavBar_active__2twHf"}},293:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(67),u=n.n(o),c=(n(169),n(36)),i=n(37),s=n(40),l=n(41),f=(n(170),n(18)),p=n.n(f),m=n(15),d=function(){return r.a.createElement("div",{className:p.a.navBar},r.a.createElement("ul",null,r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/profile",activeClassName:p.a.active},"Profile")),r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/dialogs",activeClassName:p.a.active},"Dialogs")),r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/users",activeClassName:p.a.active},"Users")),r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/news",activeClassName:p.a.active},"News")),r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/music",activeClassName:p.a.active},"Music")),r.a.createElement("li",{className:p.a.item},r.a.createElement(m.b,{to:"/settings",activeClassName:p.a.active},"Settings"))))},h=n(131),E=n.n(h),v=function(){return r.a.createElement("div",{className:E.a.footer},r.a.createElement("p",null,"Copyright"))},b=(n(175),function(){return r.a.createElement("div",null,"News")}),g=(n(176),function(){return r.a.createElement("div",null,"Music")}),O=(n(177),function(){return r.a.createElement("div",null,"Settings")}),w=n(29),j=n(52),_=n(34),S=n(55),y=n.n(S),P=n(39),N=function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),o=n[0],u=n[1],c=Object(a.useState)(e.status),i=Object(j.a)(c,2),s=i[0],l=i[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){u(!0)}},e.status||"Status should be placed here")),o&&r.a.createElement("div",null,r.a.createElement("input",{onBlur:function(){u(!1),e.updateStatus(s)},autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},value:s})))},k=n(95),I=n.n(k),C=n(10),T=n(127),A=Object(T.a)({form:"fullName"})((function(e){var t=e.handleSubmit;e.profile;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"save")),r.a.createElement("div",null,r.a.createElement("b",null,"Full Name: "),Object(C.c)("Full Name","fullName",C.a)),r.a.createElement("div",{className:y.a.descriptionBlock},r.a.createElement("b",null,"Looking for a job:"),Object(C.c)("","lookingForAJob",C.a,[],{type:"checkbox"}),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",Object(C.c)("My professional skills","lookingForAJobDescription",C.b)),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"About Me"),": ",Object(C.c)("About Me","aboutMe",C.b))))})),x=function(e){var t=e.profile,n=e.goToEditMode,a=Object(_.a)(e,["profile","goToEditMode"]);return r.a.createElement(r.a.Fragment,null,a.isOwner&&r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Full Name: "),t.fullName),r.a.createElement("div",{className:y.a.descriptionBlock},r.a.createElement("img",{src:t.photos.large||I.a,alt:"profile largePic",className:y.a.avatar}),a.isOwner&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&a.savePhoto(e.target.files[0])}}),r.a.createElement("div",null,t.fullName),r.a.createElement(N,{status:a.status,updateStatus:a.updateStatus}),r.a.createElement("b",null,"Looking for a job:"),t.lookingForAJob?" yes":" no",t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional Skills"),": ",t.lookingForAJobDescription),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"About Me"),": ",t.aboutMe),r.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return r.a.createElement(F,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},F=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",null,r.a.createElement("b",null,t),":",n)},U=function(e){var t=e.profile,n=e.saveProfile,o=Object(_.a)(e,["profile","saveProfile"]),u=Object(a.useState)(!1),c=Object(j.a)(u,2),i=c[0],s=c[1];return t?r.a.createElement("div",{className:"wrapper-content"},i?r.a.createElement(A,{profile:t,onSubmit:function(e){n(e)}}):r.a.createElement(x,{profile:t,savePhoto:o.savePhoto,isOwner:o.isOwner,status:o.status,updateStatus:o.updateStatus,goToEditMode:function(){s(!0)}})):r.a.createElement(P.a,null)},L=n(135),D=n.n(L),M=function(e){return r.a.createElement("div",null,r.a.createElement("img",{className:D.a.ava,src:"https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1",alt:"p"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,e.post)),r.a.createElement("span",null,"Like ",e.likesCounter)))},R=n(89),B=n(45),G=Object(B.a)(10),z=Object(T.a)({form:"newPostText"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(R.a,{component:C.b,name:"newPostText",placeholder:"Write your post",validate:[B.b,G]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),H=function(e){var t=e.posts.map((function(e){return r.a.createElement(M,{id:e.id,post:e.post,likesCounter:e.likesCouter})}));return r.a.createElement("div",{className:"wrapper-content"},r.a.createElement("h3",null,"My Posts"),r.a.createElement(z,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)},J=n(6),W=n.n(J),V=n(14),X=n(46),K=n(9),Z=n(11),q="personalInfo/profile/ADD-POST",Q="personalInfo/profile/SET_USER_PROFILE",Y="personalInfo/profile/SET_STATUS",$="personalInfo/profile/SAVE_PHOTO_SUCCESS",ee={postsData:[{id:"1",post:"Hi, how are you?",likesCouter:"0"},{id:"2",post:"Fine, how is your work?",likesCouter:"1"}],profile:null,status:""},te=function(e){return{type:Y,status:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:var n={id:"3",post:t.newPostText,likesCouter:"0"};return Object(K.a)({},e,{postsData:[].concat(Object(X.a)(e.postsData),[n])});case Q:return Object(K.a)({},e,{profile:t.profile});case Y:return Object(K.a)({},e,{status:t.status});case $:return Object(K.a)({},e,{profile:Object(K.a)({},e.profile,{photos:t.photos})});default:return e}},ae=n(12),re=Object(ae.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:q,newPostText:e}}(t))}}}))(H),oe=function(e){return r.a.createElement("div",{className:"wrapper-content"},"Profile",r.a.createElement("div",null,r.a.createElement(U,{isOwner:e.isOwner,saveProfile:e.saveProfile,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto})),r.a.createElement("div",null,r.a.createElement(re,null)))},ue=n(8),ce=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUsersId(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(oe,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))}}]),n}(r.a.Component),ie=Object(ue.d)(w.f,Object(ae.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUsersId:function(e){return function(){var t=Object(V.a)(W.a.mark((function t(n){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.c.getUsersId(e);case 2:a=t.sent,n({type:Q,profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(V.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.b.saveProfile(e);case 2:t.sent.data.resultCode;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(V.a)(W.a.mark((function t(n){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.b.getStatus(e);case 2:a=t.sent,n(te(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(V.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(te(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(V.a)(W.a.mark((function t(n){var a;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:$,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(ce),se=n(137),le=n.n(se),fe=n(72),pe=n.n(fe),me=function(e){return r.a.createElement("header",{className:pe.a.header},r.a.createElement("img",{src:le.a,className:pe.a.logo,alt:"logo"}),r.a.createElement("div",{className:pe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(m.b,{to:"/login"},"Login")))},de=n(32),he={id:null,login:null,email:null,isAuth:!1},Ee=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},ve=function(){return function(){var e=Object(V.a)(W.a.mark((function e(t){var n,a,r,o,u;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.headerAuth();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,u=a.email,t(Ee(r,u,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(K.a)({},e,{},t.payload);default:return e}},ge=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(me,this.props)}}]),n}(r.a.Component),Oe=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(V.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.logout();case 2:0===e.sent.resultCode&&t(Ee(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ge),we=n(56),je=n.n(we),_e=Object(T.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(C.c)("email","Login",C.a,[B.b]),Object(C.c)("password","Password",C.a,[B.b],{type:"password"}),Object(C.c)("rememberMe",null,C.a,[],{type:"checkbox"},"Remember me"),n&&r.a.createElement("div",{className:je.a.formControlError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Se=Object(ae.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(V.a)(W.a.mark((function a(r){var o;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z.a.login(e,t,n);case 2:0===(o=a.sent).resultCode?r(ve()):r(Object(de.a)("login",{_error:o.messages}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(w.a,{to:"/profile"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(_e,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ye={initialized:!1},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIALIZED":return Object(K.a)({},e,{initialized:!0});default:return e}},Ne=n(126),ke={},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;arguments.length>1&&arguments[1];return e},Ce=n(129),Te=n(138),Ae=n(128),xe=Object(ue.c)({profilePage:ne,dialogPage:Ne.a,sidebar:Ie,usersPage:Ce.b,auth:be,form:Ae.a,app:Pe}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,Ue=Object(ue.e)(xe,Fe(Object(ue.a)(Te.a)));window.store=Ue;var Le=Ue,De=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(P.a,null)},r.a.createElement(e,t))}},Me=r.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Re=r.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Be=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"wrapper"},r.a.createElement(Oe,null),r.a.createElement(d,null),r.a.createElement("div",{className:"wrapper-content"},r.a.createElement(w.b,{path:"/dialogs",render:De(Re)}),r.a.createElement(w.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(w.b,{path:"/users",render:De(Me)}),r.a.createElement(w.b,{path:"/login",render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(w.b,{path:"/news",component:b}),r.a.createElement(w.b,{path:"/settings",component:O}),r.a.createElement(w.b,{path:"/music",component:g})),r.a.createElement(v,null)):r.a.createElement(P.a,null)}}]),n}(r.a.Component),Ge=Object(ue.d)(w.f,Object(ae.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(ve());Promise.all([t]).then((function(){e({type:"app/SET_INITIALIZED"})}))}}}))(Be),ze=function(e){return r.a.createElement(m.a,null,r.a.createElement(ae.a,{store:Le},r.a.createElement(Ge,null)))};u.a.render(r.a.createElement(ze,null),document.getElementById("root"))},39:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(132),u=n.n(o);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null," ",r.a.createElement("img",{src:u.a,alt:"preloader"})," "))}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length&&t.length>=e)return"Field should contain ".concat(e," symbols")}}},55:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__30jTl",avatar:"ProfileInfo_avatar__3L1e9"}},56:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2iHH5",error:"FormsControl_error__2owc3",formControlError:"FormsControl_formControlError__3kTtw"}},72:function(e,t,n){e.exports={header:"Header_header__2Q_Xh",logo:"Header_logo__2ip53",loginBlock:"Header_loginBlock__375zB"}},95:function(e,t,n){e.exports=n.p+"static/media/userPhoto.6db09181.png"}},[[164,1,2]]]);
//# sourceMappingURL=main.c86f9069.chunk.js.map