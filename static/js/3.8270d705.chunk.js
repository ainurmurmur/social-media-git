(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[3],{310:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(0),n=s.n(t),i=s(34),m=s(15),c=function(e){return{isAuth:e.auth.isAuth}},o=function(e){return Object(m.b)(c)((function(a){return a.isAuth?n.a.createElement(e,a):n.a.createElement(i.a,{to:"/login"})}))}},311:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__Qhkgn",dialogsItems:"Dialogs_dialogsItems__2hvVD",dialog:"Dialogs_dialog__34SIB",active:"Dialogs_active__3aMAI",messages:"Dialogs_messages__1FsQ6",message:"Dialogs_message__2gjFH",messageSend:"Dialogs_messageSend__2uXSL",messageP:"Dialogs_messageP__3i9R9",send:"Dialogs_send__3TTR0",sendBtn:"Dialogs_sendBtn__3IkVe",messageInput:"Dialogs_messageInput__dpB2G",item:"Dialogs_item__3bL5v"}},313:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(311),m=s.n(i),c=s(22),o=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",null,n.a.createElement("div",{className:m.a.item}," ",n.a.createElement("p",{className:m.a.dialog},n.a.createElement(c.b,{to:a,activeClassName:m.a.active},e.name," "))))},l=function(e){return n.a.createElement("div",{className:m.a.message},n.a.createElement("div",{className:m.a.messageSend},n.a.createElement("p",{className:m.a.messageP}," ",e.messag," ")))},r=s(92),g=s(133),u=s(13),d=s(21),_=Object(g.a)({form:"messageForm",onSubmitSuccess:function(e,a){return a(Object(d.a)("messageForm"))}})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(r.a,{component:u.a,name:"newMessageBody",placeholder:"Enter your message",className:m.a.messageInput}),n.a.createElement("button",{className:m.a.sendBtn},"Send"))})),f=function(e){var a=e.dialogPage,s=a.dialogsData.map((function(e){return n.a.createElement(o,{name:e.name,id:e.id,key:e.id})})),t=a.messagesData.map((function(e){return n.a.createElement(l,{messag:e.message,id:e.id,key:e.id})}));return n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},s),n.a.createElement("div",{className:m.a.messages},t),n.a.createElement("div",{className:m.a.send},n.a.createElement(_,{onSubmit:function(a){e.onSendMessageClick(a.newMessageBody)}})))},E=s(132),b=s(15),v=s(310),p=s(9),D=function(e){return e.dialogPage};a.default=Object(p.d)(Object(b.b)((function(e){return{dialogPage:D(e)}}),(function(e){return{onSendMessageClick:function(a){e(Object(E.b)(a))}}})),v.a)(f)}}]);
//# sourceMappingURL=3.8270d705.chunk.js.map