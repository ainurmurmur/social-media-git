import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';


const Profile = (props) => {

   return (    
      <div className="wrapper-content">
          Profile 
         <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus = {props.updateStatus}/>
         </div>
         <div>
            <MyPostContainer  />
         </div>
      </div>
    );
  }
  
  export default Profile;
  
  //dispatch = {props.dispatch} store={props.store}