(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[4],{293:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),s=t.n(n),i=t(29),o=t(10),c=function(e){return{isAuth:e.auth.isAuth}},l=function(e){return Object(o.b)(c)((function(a){return a.isAuth?s.a.createElement(e,a):s.a.createElement(i.a,{to:"/login"})}))}},294:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__Qhkgn",dialogsItems:"Dialogs_dialogsItems__2hvVD",dialog:"Dialogs_dialog__34SIB",active:"Dialogs_active__3aMAI",messages:"Dialogs_messages__1FsQ6"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(294),o=t.n(i),c=t(12),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:o.a.dialog+" "+o.a.active},s.a.createElement(c.b,{to:a}," ",e.name," "))},r=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:o.a.message},e.messag," "))},m=t(87),u=t(125),d=t(41),g=t(23),f=Object(u.a)({form:"messageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(m.a,{component:g.a,validate:[d.b],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("button",null,"Send"))})),E=function(e){var a=e.dialogPage,t=a.dialogsData.map((function(e){return s.a.createElement(l,{name:e.name,id:e.id,key:e.id})})),n=a.messagesData.map((function(e){return s.a.createElement(r,{messag:e.message,id:e.id,key:e.id})}));return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",null,s.a.createElement("div",{className:o.a.messages},n),s.a.createElement(f,{onSubmit:function(a){e.onSendMessageClick(a.newMessageBody)}})))},b=t(124),v=t(10),_=t(293),h=t(7),p=function(e){return e.dialogPage};a.default=Object(h.d)(Object(v.b)((function(e){return{dialogPage:p(e)}}),(function(e){return{onSendMessageClick:function(a){e(Object(b.b)(a))}}})),_.a)(E)}}]);
//# sourceMappingURL=4.c20f3cec.chunk.js.map