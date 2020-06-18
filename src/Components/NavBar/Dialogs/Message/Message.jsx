import React from 'react';
import classes from './../Dialogs.module.css';



const Message = (props) => {

   

   return  <div>
             <div className= {classes.message}>{props.messag} </div>
               
              </div>
}

export default Message;