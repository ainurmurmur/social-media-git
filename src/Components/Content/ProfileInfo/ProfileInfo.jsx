import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../Assets/Photo/userPhoto.png'
import ProfileDataReduxForm from './ProfileDataForm'

const ProfileInfo = ({ profile,saveProfile, ...props }) => {

   const onSubmit = (formData) => {
      saveProfile(formData)
     
  }


   let [editMode, setEditMode] = useState(false) ;

   if (!profile) {
      return <Preloader /> 
   }

   return (

      <div className="wrapper-content">
        { editMode ? <ProfileDataReduxForm profile = {profile} onSubmit={onSubmit}/> : <ProfileData profile = {profile}   savePhoto={props.savePhoto} isOwner ={props.isOwner} status ={props.status} updateStatus={props.updateStatus} goToEditMode={ ()=>{setEditMode(true)} }/>} 
      </div>
   );
}

const ProfileData = ({profile, goToEditMode, ...props}) => {

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0]);
      }
   }

   return <>
   { props.isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
   <div><b>Full Name: </b>{profile.fullName}</div>
   <div className={classes.descriptionBlock}>
      <img src={profile.photos.large || userPhoto} alt='profile largePic' className={classes.avatar} />
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />} 
      <div>{profile.fullName}</div>

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      <b>Looking for a job:</b>{profile.lookingForAJob ? ' yes' : ' no'}
      {profile.lookingForAJob && <div><b>My professional Skills</b>: {profile.lookingForAJobDescription}</div>}
      <br></br>
      <div><b>About Me</b>: {profile.aboutMe}</div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map( key => {
         return <Contacts key ={key} contactTitle={key} contactValue={profile.contacts[key] }/>
      })}
   </div>
   </>
}




const Contacts = ({ contactTitle, contactValue }) => {
   return <div><b>{contactTitle}</b>:{contactValue}</div>
}
export default ProfileInfo;
