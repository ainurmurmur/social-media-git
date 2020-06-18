import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message.jsx';
import { reduxForm, Field } from 'redux-form';
import {required} from '../../../Utils/Validators'
import {Input} from '../../Common/FormsControl/FormsControl'



const Dialogs = (props) => {   

let state= props.dialogPage ;
  
  
    
let addNewMessage = (values) => {
       props.onSendMessageClick(values.newMessageBody);
      
    }


    let dialogsElements = state.dialogsData.map( d => <DialogItem  name= {d.name}  id={d.id} key={d.id}/>);
    let messagesElements = state.messagesData.map( m => <Message  messag= {m.message}  id={m.id} key={m.id}/>);

    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
               <div className={classes.messages}>
                {messagesElements}
               </div>
               <NewMessageForm onSubmit={addNewMessage}/>
              
            </div>
        </div>
    )
 }


let newMessage = (props) => {
    return(   <form onSubmit={props.handleSubmit}>
                 <Field component={Input} validate={[required]} name={'newMessageBody'}  placeholder='Enter your message'/>
                 <button>Send</button>
              </form> 
    )
}
let NewMessageForm = reduxForm ( {
    form: 'messageForm'
})(newMessage);


export default Dialogs;


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