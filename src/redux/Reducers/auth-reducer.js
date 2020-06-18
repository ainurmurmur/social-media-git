import {headersAPI} from '../../Api/Api'
import {stopSubmit} from 'redux-form';

const SET_USER_DATA =  'auth/SET_USER_DATA';


let initialState = {
    

    id: null,
    login: null,
    email: null,
    isAuth: false
    

} 

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {   
            return { ...state,
                     ...action.payload,
                     
            } 
        }
        default: 
            return state;
    }
}

  
//ActionCreators


export const setAuthUserData = (id, email, login, isAuth) => ({  type: SET_USER_DATA, payload: {id, email, login, isAuth}});

//ThunkFunctions


export const auth = () => async (dispatch) => {

        let data = await headersAPI.headerAuth();

            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login, true))
            }
    };  
export const login = (email, password, rememberMe) => async (dispatch) => { 

        let data = await headersAPI.login(email, password, rememberMe)

            if (data.resultCode === 0) {
                    dispatch(auth())
            }
            else {
            dispatch(stopSubmit('login', {_error:data.messages}))
    }  
}
export const logout = () => async (dispatch) => { 

       let data = await headersAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }  



export default authReducer;            