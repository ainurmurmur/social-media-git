import React from 'react';
import classes from './../Dialogs.module.css';
import Preloader from "../../../Common/Preloader/Preloader";

const DialogItem = (props) => {

    let time;

    if (props.addedAt !== null) {
        let array = new Array();
        let addedAt = props.addedAt
        array = addedAt.split('T');
        time = array[1].split('.')[0]
    }

    return (

        <div>
            <div className={classes.message}>
                {props.body === null
                    ? null
                    : <div className={classes.messageSend}>
                        <p className={classes.messageP}>
                            {props.body}
                        </p>
                        <div className={classes.dialogs_NameAndDate}>
                            <p className={classes.date}>
                                {time}
                            </p>
                            <p className={classes.senderName}>
                                {props.senderName}
                            </p>
                        </div>
                    </div>}


            </div>
        </div>
    )
}

export default DialogItem;
