import React, {useState, useEffect} from 'react';



const ProfileStatusWithHooks = (props) => {

   
let [editMode, setEditMode] = useState(false) ;
let [status, setStatus] = useState(props.status) ;

useEffect(()=>{
    setStatus(props.status)
}, [props.status])

let activateEditMode =() => {
    setEditMode(true);
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
                <span onDoubleClick ={activateEditMode}>{props.status || 'Status should be placed here'}</span>
           </div>
            }{editMode &&
             <div>
                <input onBlur={deactivateEditMode} autoFocus={true} onChange={onStatusChange} value={status}></input>
           </div>}
   </div>
   )
  }

  
  export default ProfileStatusWithHooks;
  
  //dispatch = {props.dispatch} store={props.store}

  //let stateWithUseState = useState(false) ;  
//    let editMode =   stateWithUseState[0];
//    let setEditMode =  stateWithUseState[1];
   