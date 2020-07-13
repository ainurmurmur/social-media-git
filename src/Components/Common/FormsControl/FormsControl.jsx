import React from 'react'
import classes from './FormsControl.module.css' 
import { Field } from 'redux-form';
import styles from '../../../Components/Login/Login.module.css'


export const FormControl = ({ input, meta, child, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")} >
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const { input, meta,child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}


export const Input = (props) => {
    const { input, meta,child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}

export const createField = (name, placeholder, component, validates, props={}, text="") => (
    <div>
        <Field  className={styles.globalField} name={name} placeholder={placeholder} component={component} validate={validates} {...props}/> {text}
    </div>
)