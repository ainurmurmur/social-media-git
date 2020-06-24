import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';


const Profile = (props) => {

   return (    
      <div className="wrapper-content">
          Profile 
         <div>
            <ProfileInfo isOwner ={props.isOwner}profile={props.profile} status={props.status} updateStatus = {props.updateStatus} savePhoto={props.savePhoto}/>
         </div>
         <div>
            <MyPostContainer  />
         </div>
      </div>
    );
  }
  
  export default Profile;
  
  //dispatch = {props.dispatch} store={props.store}