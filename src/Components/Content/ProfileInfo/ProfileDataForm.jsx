import React from 'react';
import classes from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../Common/FormsControl/FormsControl'
import { reduxForm } from 'redux-form';
import style from './../../../Components/Common/FormsControl/FormsControl.module.css'
import { Field } from 'redux-form';
import {ButtonStyled} from '../../Common/UI/StylesUI'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';



export const ProfileDataForm = ({ handleSubmit, profile, error }) => {


    return <form onSubmit={handleSubmit} className={classes.aboutMe}>
        

        {/* <div className={classes.btnSaveDiv}><button className={classes.btnEdit} >save</button></div> */}
        <div className={classes.btnSaveDiv}><ButtonStyled type='submit' margin='10px'><Typography variant='button'>save</Typography></ButtonStyled></div>
        {error && <div className={style.formControlError}>
            {error}
        </div>}

        <div><h4>Full Name: </h4>{createField('fullName', 'Full Name', Input)}</div>
        <div className={classes.descriptionBlock}>
            <h4 className={classes.edit}>Looking for a job:</h4><div className={classes.checkboxBlock}><Field className={classes.checkbox} name={'checkbox'} component={Input} type={'checkbox'} /></div>
            <div><h4 className={classes.edit}>My professional skills</h4>: {createField('lookingForAJobDescription', 'My professional skills', Textarea)}</div>
              
            <div><h4 className={classes.edit}>About Me</h4>: {createField('aboutMe', 'About Me', Textarea)}</div>
            <div>
                <br></br>
                <h4 className={classes.edit}>Contacts:</h4>
                <br></br>
                <br />
                {Object.keys(profile.contacts).map(key => { 
                    return <>
                        <b key={key} className={classes.contactsTitle}>{key}:</b>{createField("contacts." + key, key, Input)}
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
