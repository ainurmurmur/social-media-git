import React from 'react';
import classes from './ProfileInfo.module.css';
import {createField, Input, Textarea} from '../../Common/FormsControl/FormsControl'
import { reduxForm } from 'redux-form';


export const ProfileDataForm = ({handleSubmit, profile}) => {

    return <form onSubmit ={handleSubmit }> 
    <div><button>save</button></div>
   <div><b>Full Name: </b>{createField('Full Name', 'fullName', Input)}</div>
   <div className={classes.descriptionBlock}>
      <b>Looking for a job:</b>{createField('', 'lookingForAJob', Input, [], {type:'checkbox'})}
       <div><b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', Textarea )}</div>
      <br></br>
      <div><b>About Me</b>: {createField('About Me', 'aboutMe', Textarea )}</div>
    {/* <b>Contacts:</b> {Object.keys(profile.contacts).map( key => {
        return <Contacts key ={key} contactTitle={key} contactValue={profile.contacts[key] }/>
    })} */}
   </div>
   </form>
}

 const ProfileDataReduxForm = reduxForm ({
    form: 'fullName'
}) (ProfileDataForm);

export default ProfileDataReduxForm;
