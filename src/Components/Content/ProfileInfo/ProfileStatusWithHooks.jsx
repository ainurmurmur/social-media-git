import React, {useState, useEffect} from 'react';
import classes from './ProfileStatus.module.css'
import TextField from '@material-ui/core/TextField';


const ProfileStatusWithHooks = (props) => {

   
let [editMode, setEditMode] = useState(false) ;
let [status, setStatus] = useState(props.status) ;

useEffect(()=>{
    setStatus(props.status)
}, [props.status])

let activateEditMode =() => {
    {props.isOwner &&   
    setEditMode(true)};
}
   
let deactivateEditMode =() => {

    setEditMode(false);
    props.updateStatus(status)

}

let onStatusChange = (e) => {
    
        setStatus(e.currentTarget.value);
    
}
      
   return (
        <div>
            {!editMode &&  
             <div>
                <p>Status:</p><span onDoubleClick ={activateEditMode} className={classes.statusSpan}>{props.status || 'Status should be placed here'}</span>
           </div>
            }{editMode && 
             <div>
               <p>Status:</p><TextField id="standard-basic"  onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status}></TextField>
               {/* <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status} className={classes.statusInput}></input> */}
           </div>}
   </div>
   )
  }

  
  export default ProfileStatusWithHooks;
  
  //dispatch = {props.dispatch} store={props.store}

  //let stateWithUseState = useState(false) ;  
//    let editMode =   stateWithUseState[0];
//    let setEditMode =  stateWithUseState[1];
   