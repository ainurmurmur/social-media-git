import React from 'react';
import classes from './../Dialogs.module.css';



const Message = (props) => {

  
   
   return  <div className= {classes.message}>
             <div className= {classes.messageSend}><p className={classes.messageP}> {props.messag} </p></div>
               
              </div>
}

export default Message;