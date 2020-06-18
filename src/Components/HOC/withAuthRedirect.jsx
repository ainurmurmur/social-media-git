
import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'



let mapStateToPropsRedirected = (state) => ({
    isAuth: state.auth.isAuth
})


export const withAuthRedirect = (Component) => {
    let authWrapperContainer = (props) => {
        if (!props.isAuth) return <Redirect to = '/login' />
        return <Component {...props} />
    }
   

let ConnectedAuthRedirectComponent = connect (mapStateToPropsRedirected) (authWrapperContainer);

return ConnectedAuthRedirectComponent

}
