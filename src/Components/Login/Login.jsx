import React from 'react';
import { reduxForm } from 'redux-form';
import {Input} from '../Common/FormsControl/FormsControl'
import { required} from '../../Utils/Validators'
import {login} from '../../redux/Reducers/auth-reducer'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import classes from '../../Components/Common/FormsControl/FormsControl.module.css';
import {createField} from '../../Components/Common/FormsControl/FormsControl'

const LoginForm = ({handleSubmit, error}) => {
  
    //const  maxLength= maxLengthCreator(10);
    return (  
         <form onSubmit={handleSubmit}>
             {createField('email', 'Login', Input, [required])}
             {createField('password', 'Password', Input, [required],  {type:'password'})}
             {createField('rememberMe', null , Input, [], {type:'checkbox'}, 'Remember me')}
           
            { error && <div className={classes.formControlError}>
              {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}
let LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm);





const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe )
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

   
    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </>
    
}

const mapStateToProps =(state) =>({
    isAuth:state.auth.isAuth

})
//export default Login;
export default connect (mapStateToProps, {login}) (Login);



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
