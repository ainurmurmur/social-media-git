import React from 'react';
import ProfileInfo2 from './ProfileInfo/ProfileInfo2';
import MyPostContainer from './MyPost/MyPostContainer';
import classes from './Profile.module.css'


const Profile = (props) => {
  
   return (
      <div className={classes.wrapperProfile}>
            <ProfileInfo2  isOwner ={props.isOwner} saveProfile={props.saveProfile}
             profile={props.profile} status={props.status} updateStatus = {props.updateStatus} 
             savePhoto={props.savePhoto} getChat={props.getChat} getAllDialogs={props.getAllDialogs}
             startChatting={props.startChatting}
            isFetching={props.isFetching}
             />
            <MyPostContainer  profile={props.profile}/>
      </div>
    );
  }
  
  export default Profile;
  
  //dispatch = {props.dispatch} store={props.store}