/*! For license information please see 3.09908560.chunk.js.LICENSE.txt */
(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[3],{293:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),a=n.n(r),o=n(29),s=n(10),l=function(e){return{isAuth:e.auth.isAuth}},u=function(e){return Object(s.b)(l)((function(t){return t.isAuth?a.a.createElement(e,t):a.a.createElement(o.a,{to:"/login"})}))}},295:function(e,t,n){e.exports={paginator:"Users_paginator__1KcHa",pageNumber:"Users_pageNumber__1jrYh",selectedPage:"Users_selectedPage__2I0HA",userBlock:"Users_userBlock__sBJrI"}},296:function(e,t,n){e.exports=n.p+"static/media/userPhoto.6db09181.png"},297:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},299:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(36),o=n(39),s=n(40),l=n(0),u=n.n(l),i=n(10),c=n(127),g=n(115),p=n(88),f=n(295),m=n.n(f),h=n(296),d=n.n(h),P=n(12),E=function(e){var t=e.followingInProgress,n=e.user,r=e.unfollow,a=e.follow,o=n;return u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement(P.b,{to:"/Profile/"+o.id},u.a.createElement("img",{src:null!=o.photos.small?o.photos.small:d.a,alt:"small pic",style:m.a.img})),u.a.createElement("div",null,o.followed?u.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){r(o.id)}},"Unfollow"):u.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){a(o.id)}},"Follow"))),u.a.createElement("span",null,u.a.createElement("span",null,u.a.createElement("div",null,o.name),u.a.createElement("div",null,o.status)),u.a.createElement("span",null,u.a.createElement("div",null,"u.location.country"),u.a.createElement("div",null,"u.location.city"))))},b=n(297),v=n.n(b),w=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var a=Math.ceil(t/10),o=Object(l.useState)(1),s=Object(p.a)(o,2),i=s[0],c=s[1],f=10*(i-1)+1,h=10*i;return u.a.createElement("div",{className:m.a.paginator},i>1&&u.a.createElement("button",{onClick:function(){c(i-1)}}," PREV "),n.filter((function(e){return e>=f&&e<=h})).map((function(t){return u.a.createElement("span",{className:v()(Object(g.a)({},m.a.selectedPage,e.currentPage===t),m.a.pageNumber),onClick:function(n){e.onPageChange(t)}},t)})),a>i&&u.a.createElement("button",{onClick:function(){c(i+1)}}," NEXT "),u.a.createElement("div",{className:m.a.userBlock},e.users.map((function(t){return u.a.createElement(E,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})}))))},C=n(38),I=n(7),j=n(293),y=function(e){return e.usersPage.users},k=function(e){return e.usersPage.pageSize},_=function(e){return e.usersPage.totalUsersCount},O=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.followingInProgress},z=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){e.props.currentPageChanger(t,e.props.pageSize)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,this.props.isFetching?u.a.createElement(C.a,null):null),u.a.createElement(w,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow}))}}]),n}(u.a.Component);t.default=Object(I.d)(j.a,Object(i.b)((function(e){return{users:y(e),pageSize:k(e),totalItemsCount:_(e),currentPage:O(e),isFetching:U(e),followingInProgress:S(e)}}),{setUsers:c.f,setUsersTotalCount:c.g,setCurrentPage:c.e,toggleIsFetching:c.i,toggleFollowingInProgress:c.h,requestUsers:c.d,follow:c.c,unfollow:c.j,currentPageChanger:c.a}))(z)}}]);
//# sourceMappingURL=3.09908560.chunk.js.map