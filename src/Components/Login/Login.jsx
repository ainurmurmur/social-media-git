import React from 'react';
import { reduxForm } from 'redux-form';
import {Input} from '../Common/FormsControl/FormsControl'
import { required} from '../../Utils/Validators'
import {login} from '../../redux/Reducers/auth-reducer'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import styles from './Login.module.css'
import classNames  from 'classnames'
import { Field } from 'redux-form';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  
    //const  maxLength= maxLengthCreator(10);
    return (  
         <form onSubmit={handleSubmit} className={styles.input}>
            <div className={classNames(styles.everyInput)}> <Field  name='email' placeholder={'Login'} component={Input} validate={[required]} className={styles.globalField} /></div>
             <div className={classNames(styles.everyInput)}><Field  name='password' placeholder={'Password'} type={'password'}component={Input} validate={[required]} className={styles.globalField} /></div> 
            <div className={styles.checkboxBlock}><Field className={styles.checkbox}  name={'rememberMe'} component={Input} type={'checkbox'}/> <p>Remember me</p></div> <br></br>
            { error && <div className={styles.formControlError}>
              {error}
            </div>}
            {captchaUrl && <img src={captchaUrl} alt={'captcha'}/>}
            {captchaUrl && <div className={classNames(styles.everyInput)}><Field  name='captcha' placeholder={'Symbols from image'} component={Input} validate={[required]} className={styles.globalField} /></div>}   
            <div>
                <button className={styles.btnLogin}>Login</button>
            </div>
        </form>
        )
}
let LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm);





const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha )
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

   
    return <div className={ styles.loginWrapper}>
        <span id={styles.loginSpan}>LOGIN</span>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl= {props.captchaUrl}/>
        </div>
    
}

const mapStateToProps =(state) =>({
    isAuth:state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})
//export default Login;
export default connect (mapStateToProps, {login}) (Login);

 /* <div className={styles.everyInput}>{createField('password', 'Password', Input, [required], {type:'password'})}</div> */
 /* <div className={classNames(styles.everyInput)}>{createField('email', 'Login', Input, [required] ) }</div> */
// <div>
// <Field name={'email'} placeholder={'Login'} component={Input} validate={[required]} />
// </div>
// <div>
// <Field name={'password'}  placeholder={'Password'} component={Input} validate={[required]} type={'password'}/>
// </div>
// <div>
// <Field type={'checkbox'} name={'rememberMe'} component={Input}  />
//  <span>Remember me</span>
// </div>
// <div className={styles.everyInput}>{createField('rememberMe', null , Input, [], {type:'checkbox'}, 'Remember me')}</div>