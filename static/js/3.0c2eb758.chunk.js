(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[3],{426:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),s=t.n(n),i=t(66),l=t(27),c=function(e){return{isAuth:e.auth.isAuth}},o=function(e){return Object(l.b)(c)((function(a){return a.isAuth?s.a.createElement(e,a):s.a.createElement(i.a,{to:"/login"})}))}},427:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1hUY4",dialogsItems:"Dialogs_dialogsItems__JJoCJ",dialog:"Dialogs_dialog__17hht",active:"Dialogs_active__5LEUc",messages:"Dialogs_messages__tS6bo",message:"Dialogs_message__2zs0l",messageSend:"Dialogs_messageSend__3FgBZ",messageP:"Dialogs_messageP__1x4aP",send:"Dialogs_send__1SzDV",sendBtn:"Dialogs_sendBtn__frBDl",messageInput:"Dialogs_messageInput__1Mni0",item:"Dialogs_item__1twiN",contacts_list:"Dialogs_contacts_list__28jrb",contacts_NameAndDate:"Dialogs_contacts_NameAndDate__2NaMv",dialogs_NameAndDate:"Dialogs_dialogs_NameAndDate__nOhOB",post:"Dialogs_post__1-mDC",ava:"Dialogs_ava__3yLvV",date:"Dialogs_date__2LG7i",senderName:"Dialogs_senderName__2F-ni"}},429:function(e,a,t){"use strict";t.r(a);var n=t(56),s=t(57),i=t(58),l=t(59),c=t(0),o=t.n(c),r=t(427),m=t.n(r),d=t(46),g=function(e){var a;if(null!==e.addedAt){new Array;a=e.addedAt.split("T")[1].split(".")[0]}return o.a.createElement("div",null,o.a.createElement("div",{className:m.a.message},null===e.body?null:o.a.createElement("div",{className:m.a.messageSend},o.a.createElement("p",{className:m.a.messageP},e.body),o.a.createElement("div",{className:m.a.dialogs_NameAndDate},o.a.createElement("p",{className:m.a.date},a),o.a.createElement("p",{className:m.a.senderName},e.senderName)))))},u=(t(85),t(36)),_=t(137),p=t(184),h=t(30),D=t(32),v=t(217),E=t(29),N=t(175),b=t.n(N);var f=function(e){var a=e.lastDialogActivityDate,t=new Date(a),n=t.getDate(),s=t.getMonth(),i=t.getFullYear(),l=n+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][s]+", "+i,c="/dialogs/"+e.id;return o.a.createElement(o.a.Fragment,null,null===e.lastDialogActivityDate&&null==e.id&&null==e.userName&&null===e.photos.small?null:o.a.createElement("div",{className:m.a.item,onClick:function(){return a=e.id,void e.getChatWithId(a);var a}},o.a.createElement("div",{className:m.a.dialog},o.a.createElement(E.b,{to:c,activeClassName:m.a.active},o.a.createElement("div",{className:m.a.contacts_list},o.a.createElement("div",null,o.a.createElement("img",{src:e.photos.small||b.a,alt:"contactImg",className:m.a.ava})),o.a.createElement("div",{className:m.a.contacts_NameAndDate},o.a.createElement("p",{className:m.a.post},e.userName),o.a.createElement("p",{className:m.a.date},l)))))))};var y=Object(p.a)({form:"messageForm",onSubmitSuccess:function(e,a){return a(Object(u.a)("messageForm"))}})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(_.a,{component:h.a,name:"newMessageBody",placeholder:"Enter your message",className:m.a.messageInput}),o.a.createElement("br",null),o.a.createElement(D.a,{type:"submit",margin:"10px"},o.a.createElement(v.a,{variant:"button"},"Send")))})),A=function(e){console.log("render");var a=e.dialogPage,t=a.contacts.map((function(t){return o.a.createElement(f,{lastDialogActivityDate:t.lastDialogActivityDate,id:t.id,key:t.id,photos:t.photos,userName:t.userName,isFetching:a.isFetching,getChatWithId:e.getChatWithId})})),n=a.dialogsData.map((function(e){return o.a.createElement(g,{recipientName:e.recipientName,id:e.id,key:e.id,body:e.body,addedAt:e.addedAt,deletedByRecipient:e.deletedByRecipient,deletedBySender:e.deletedBySender,recipientId:e.recipientId,senderName:e.senderName,senderId:e.senderId,isSpam:e.isSpam,viewed:e.viewed,isFetching:a.isFetching})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:m.a.dialogs},o.a.createElement("div",{className:m.a.dialogsItems},e.isFetching?o.a.createElement(d.a,null):null,1===a.contacts.length?o.a.createElement("p",null,"Empty"):t),o.a.createElement("div",{className:m.a.messages},n),o.a.createElement("div",{className:m.a.send},o.a.createElement(y,{onSubmit:function(a){e.onSendMessageClick([null,a.newMessageBody])}}))))},S=t(75),F=t(27),I=t(426),C=t(17),O=function(e){return e.dialogPage},j=function(e){return e.isFetching},k=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllDialogs()}},{key:"shouldComponentUpdate",value:function(e,a,t){if(this.props.dialogPage.dialogsData!==e)return!0}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,this.props.isFetching?o.a.createElement(d.a,null):null),o.a.createElement(A,{dialogPage:this.props.dialogPage,isFetching:this.props.isFetching,onSendMessageClick:this.props.onSendMessageClick,getChatWithId:this.props.getChatWithId,getAllDialogs:this.props.getAllDialogs}))}}]),t}(o.a.Component);a.default=Object(C.d)(Object(F.b)((function(e){return{dialogPage:O(e),isFetching:j(e)}}),(function(e){return{onSendMessageClick:function(a){e(Object(S.d)(a))},getChatWithId:function(a){e(Object(S.c)(a))},getAllDialogs:function(){e(Object(S.b)())}}})),I.a)(k)}}]);
//# sourceMappingURL=3.0c2eb758.chunk.js.map