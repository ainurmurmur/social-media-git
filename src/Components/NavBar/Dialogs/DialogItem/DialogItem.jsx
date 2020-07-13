import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
   let path ='/dialogs/' + props.id;

   return <div >
                    <div className={classes.item}> <p className={classes.dialog}><NavLink to={path} activeClassName={classes.active}>{props.name} </NavLink></p></div>
                </div> 
}
{/* <li className={classes.item}><NavLink to='/profile' activeClassName={classes.active}><br/><div className={classes.navDiv}>
Profile</div></NavLink></li> */}
export default DialogItem;