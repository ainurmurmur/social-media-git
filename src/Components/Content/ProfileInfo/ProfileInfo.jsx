import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../Assets/Photo/userPhoto.png'
import ProfileDataReduxForm from './ProfileDataForm'
import {ButtonStyled} from '../../Common/UI/StylesUI'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';
import ImageComponent from './ImgComponent';

const ProfileInfo = ({ profile, saveProfile, ...props }) => {

   let [editMode, setEditMode] = useState(false);

   const onSubmit = (formData) => {
      saveProfile(formData).then(
         () => {
            setEditMode(false)
         }
      )


   }

   if (!profile) {
      return <Preloader />
   }

   return (<>
         {editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData  profile={profile} savePhoto={props.savePhoto} isOwner={props.isOwner} status={props.status}
               updateStatus={props.updateStatus} goToEditMode={() => { setEditMode(true) }} />}
          </>
   );
}

const ProfileData = ({ profile, goToEditMode, ...props }) => {

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0]);
      }
   }

   return <>
        <div className={classes.profileBlock}>
           
            <div><b>Full Name: </b>{profile.fullName}</div>
            <ImageComponent profile={profile}/>
            {/* <img src={profile.photos.large || userPhoto} alt='profile largePic' className={classes.avatar} /> */}
            {props.isOwner && <input className={classes.btnEdit} type={'file'} onChange={onMainPhotoSelected} />}
            
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         </div> 


         <div className={classes.aboutMe}>
         {props.isOwner && <div className={classes.btnEditDiv} >
            {/* <button className={classes.btnEdit} onClick={goToEditMode}>edit</button></div>} */}
         <ButtonStyled type='submit' margin='10px'><Typography variant='button'  onClick={goToEditMode}>edit</Typography></ButtonStyled></div>}

            <b>Looking for a job:</b>{profile.lookingForAJob ? ' yes' : ' no'}
            {profile.lookingForAJob && <div><b>My professional Skills</b>: {profile.lookingForAJobDescription}</div>}
            <br></br>
            <div><b>About Me</b>: {profile.aboutMe}</div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {  key={key}
               return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
         </div>
 </>
}




const Contacts = ({ contactTitle, contactValue }) => {

   return <div><b>{contactTitle}</b>:{contactValue}</div>
}


export default ProfileInfo;
