import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../Assets/Photo/userava.png'
import ProfileDataReduxForm from './ProfileDataForm'
import youtube from '../../../Assets/Photo/youtube.png'
import twitter from '../../../Assets/Photo/twitter.png'
import instagram from '../../../Assets/Photo/instagram.png'
import github from '../../../Assets/Photo/github.png'
import vk from '../../../Assets/Photo/vk.png'
import website from '../../../Assets/Photo/website.png'
import facebook from '../../../Assets/Photo/facebook.png'



const ProfileInfo2 = ({ profile, saveProfile, ...props }) => {

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
         <ProfileData  profile={profile} savePhoto={props.savePhoto} isOwner={props.isOwner} status={props.status}
               updateStatus={props.updateStatus} goToEditMode={() => { setEditMode(true) }} onSubmit={onSubmit}
               editMode={editMode}/>
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
        <div className={classes.profileImgName}>
         <div><h2> {profile.fullName} </h2></div>
            <img src={profile.photos.large || userPhoto} alt='profile largePic' className={classes.avatar} />
            {props.isOwner && <div className={classes.uploadImg}><span className={classes.hiddenFileInput} > 
                             <input className={classes.btnEdit} type={'file'} onChange={onMainPhotoSelected} /> </span><p> Upload Image</p></div> }
         </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         </div> 

         {props.editMode ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={props.onSubmit} />
            : 
         <div className={classes.aboutMe}>

         {props.isOwner && <div className={classes.btnEditDiv} >
            <h3>About Me</h3><button className={classes.btnEdit} onClick={goToEditMode}>edit</button></div>}
            <div className={classes.bottom}>
               <h4>Looking for a job:</h4>{profile.lookingForAJob ?
             <p className={classes.aboutMeP}>{' yes'}</p> : <p>{' no'}</p>}</div>
            {profile.lookingForAJob && 
               <div className={classes.bottom}>
                  <h4>My professional Skills</h4>:<p className={classes.aboutMeP}> {profile.lookingForAJobDescription}</p></div>}
            
            <div className={classes.bottom}>
               <h4>About Me</h4>: <p className={classes.aboutMeP}>{profile.aboutMe}</p></div>
            <br></br>
            <h4><b>Contacts:</b></h4> {Object.keys(profile.contacts).map(key => { 
               if(profile.contacts[key]){
                  return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
               }
            return <div></div>
            })}
         </div>}
 </>
}




const Contacts = ({ contactTitle, contactValue }) => {
   return <div className={classes.contacts}><ContactIcons contactTitle={contactTitle}/>
   <b className={classes.contactsTitle}>{contactTitle}:</b><p>{contactValue}</p></div>
   
}

export const ContactIcons =(props) => {
   switch(props.contactTitle) {
      case 'youtube':  
        return <img src={youtube} className={classes.icons} alt={'icon'}/>

      case 'website':  
      return <img src={website} className={classes.icons} alt={'icon'}/>

      case 'vk':  
      return <img src={vk} className={classes.icons} alt={'icon'}/>

      case 'twitter':  
      return <img  src={twitter} className={classes.icons} alt={'icon'}/>

      case 'instagram':
         return <img src={instagram} className={classes.icons} alt={'icon'}/>

      case 'github':
         return <img src={github} className={classes.icons} alt={'icon'}/>

      case 'facebook':
        return <img src={facebook} className={classes.icons} alt={'icon'}/>

      default:
      return  <img src={website} className={classes.icons} alt={'icon'}/>

   }
}

export default ProfileInfo2;

