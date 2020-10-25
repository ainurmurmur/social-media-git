import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import 'fontsource-roboto';
import { Field, reduxForm, reset } from "redux-form";
import { Input } from "../../Common/FormsControl/FormsControl";
import { ButtonStyled } from "../../Common/UI/StylesUI";
import { Typography } from "@material-ui/core";
import Message from '../Dialogs/Message/Message'
import Preloader from "../../Common/Preloader/Preloader";


function Dialogs(props) {

    console.log('render')
    let state = props.dialogPage;
    let chatUsers = state.contacts.map(m =>
        <Message lastDialogActivityDate={m.lastDialogActivityDate} id={m.id} key={m.id}
            photos={m.photos} userName={m.userName} isFetching={state.isFetching}
            getChatWithId={props.getChatWithId}
        />);
    let dialogsElements = state.dialogsData.map(d =>
        <DialogItem recipientName={d.recipientName} id={d.id} key={d.id}
            body={d.body}
            addedAt={d.addedAt}
            deletedByRecipient={d.deletedByRecipient}
            deletedBySender={d.deletedBySender}
            recipientId={d.recipientId}
            senderName={d.senderName}
            senderId={d.senderId}
            isSpam={d.isSpam}
            viewed={d.viewed}
            isFetching={state.isFetching}
        />);
    let addNewMessage = (values) => {

        props.onSendMessageClick([null, values.newMessageBody]);
    }

    return (
        <>

            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {props.isFetching ? <Preloader /> : null}
                    {state.contacts.length === 1
                        ? <p>Empty</p>
                        :
                        chatUsers}
                </div>
                <div className={classes.messages}>
                    {dialogsElements}
                </div>
                <div className={classes.send}>
                    <NewMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </>
    )
}

const afterSubmit = (value, dispatch) =>
    dispatch(reset('messageForm'));


let newMessage = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <Field component={Input} name={'newMessageBody'} placeholder='Enter your message'
            className={classes.messageInput} />
        <br></br>
        <ButtonStyled type='submit' margin='10px'><Typography variant='button'>Send</Typography></ButtonStyled>
        {/* <button className={classes.sendBtn} >Send</button> */}
    </form>
    )
}

let NewMessageForm = reduxForm({
    form: 'messageForm',
    onSubmitSuccess: afterSubmit,
})(newMessage);
export default Dialogs;

//
//         let messagesElements2 = state.dialogsData[0].items.map(m =>
//                                                     <Message data={m.data} id={m.idOfData} key={m.idOfData}/>);

//  <div className={classes.dialogs}>
//                 <div className={classes.dialogsItems}>
//                     {dialogsElements}
//                 </div>
//                 <div className={classes.messages}>
//                     {messagesElements}
//                 </div>
//                 <div className={classes.send}>
//                     <NewMessageForm onSubmit={ addNewMessage }/>
//                 </div>
//             </div>

// До использования redux-form

// let onSendMessageClick = () => {

//     props.onSendMessageClick();
// }


// let onNewMessageChange = () => {
//     let body = e.target.value;
//     props.updateNewMessageBody(body)

//let action =  updateNewMessageBodyCreator(body);
//  props.dispatch(action);

//}


/* <div >
            <textarea onChange= {onNewMessageChange}   value ={state.newMessageBody} placeholder='Enter your message'></textarea>
            <button onClick ={onSendMessageClick}>Send</button>
         </div>  */