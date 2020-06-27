import React from 'react';
import classes from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../Common/FormsControl/FormsControl'
import { reduxForm } from 'redux-form';
import style from './../../../Components/Common/FormsControl/FormsControl.module.css'




export const ProfileDataForm = ({ handleSubmit, profile, error }) => {

    return <form onSubmit={handleSubmit}>

        <div><button>save</button></div>

        { error && <div className={style.formControlError}>
              {error}
            </div>}

        <div><b>Full Name: </b>{createField('fullName', 'Full Name', Input)}</div>
        <div className={classes.descriptionBlock}>
            <b>Looking for a job:</b>{createField('lookingForAJob', '', Input, [], { type: 'checkbox' })}
            <div><b>My professional skills</b>: {createField('lookingForAJobDescription', 'My professional skills', Textarea)}</div>
            <br></br>
            <div><b>About Me</b>: {createField('aboutMe', 'About Me', Textarea)}</div>
            <div>
                <b>Contacts:</b>
                <br />
                {Object.keys(profile.contacts).map(key => {
                    return <>
                        <b>{key}:</b>{createField("contacts." + key, key, Input)}
                    </>
                })}
            </div>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataReduxForm;
