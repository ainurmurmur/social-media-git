import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {


   if (!props.profile) {
      return <Preloader />
   }
   

   
    return ( 
      <div className="wrapper-content">
          ProfileInfo 
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ymk9Cmkk8qInmHm-k9uilghmLGoYTNbWczNiF-cEE_idy2Hq&usqp=CAU" alt='profilePic'/>
         </div>
         
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt='profile largePic'/>
            <div>{props.profile.fullName}</div>
           
            <ProfileStatusWithHooks status ={props.status} updateStatus= {props.updateStatus}/>
               <h4>Looking for a job:</h4><div>{props.profile.lookingForAJob}</div>
               <h4>Looking for a job decription:</h4><div>{props.profile.lookingForAJobDescription}</div>
            
                <h4>Contacts:</h4> 
                <ul>
                   <li>{props.profile.contacts.github}</li>
                   <li>{props.profile.contacts.vk}</li>
                   <li>{props.profile.contacts.instagram}</li>
                   <li>{props.profile.contacts.facebook}</li>
                   <li>{props.profile.contacts.twitter}</li>
                   <li>{props.profile.contacts.website}</li>
                   <li>{props.profile.contacts.youtube}</li>
                   <li>{props.profile.contacts.mainLink}</li>
               </ul>
               
            ava+descroption
         </div>
      </div>
    );
  }
  
  export default ProfileInfo;
  