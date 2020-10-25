import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import userPhoto from '../../../../Assets/Photo/userPhoto.png'

function Message(props) {

    let lastDialogActivityDate = props.lastDialogActivityDate
    let currentDate = new Date(lastDialogActivityDate);
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    let monthDateYear = date + " " + (monthNames[month]) + ", " + year;

    let openChat = (id) => {
        props.getChatWithId(id)
    }

    let path = '/dialogs/' + props.id;

    return (<>
        {props.lastDialogActivityDate === null && props.id == null
            && props.userName == null && props.photos.small === null ? null :
            <div className={classes.item} onClick={() => openChat(props.id)}>
                <div className={classes.dialog}>
                    <NavLink to={path}
                        activeClassName={classes.active}>
                        <div className={classes.contacts_list}>
                            <div>
                                <img src={props.photos.small || userPhoto} alt={"contactImg"} className={classes.ava} />
                            </div>
                            <div className={classes.contacts_NameAndDate}>
                                <p className={classes.post}>
                                    {props.userName}
                                </p>
                                <p className={classes.date}>
                                    {/* {props.lastDialogActivityDate} */}
                                    {monthDateYear}
                                </p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>}
    </>
    );
}

export default Message;


//    {props.messag == null} ?
//         <div className= {classes.message}>
//          <div className= {classes.messageSend}>
//                  <p>No messages here yet... </p>
//                  :<p className={classes.messageP}> {props.messag} </p></div>
//               </div>