import {headersAPI, securityAPI} from '../../Api/Api'
import {stopSubmit} from 'redux-form';


const SET_USER_DATA =  'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    

    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
    

} 

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {   
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
export const getCaptchaUrlSuccsess = (captchaUrl) => ({  type: GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl} });

//ThunkFunctions


export const auth = () => async (dispatch) => {

        let data = await headersAPI.headerAuth();

            if (data.resultCode === 0) {
                let {id, login, email, captcha=null} = data.data;
                    dispatch(setAuthUserData(id, email, login, true, captcha))
            }
    };  
export const login = (email, password, rememberMe, captcha) => async (dispatch) => { 

        let data = await headersAPI.login(email, password, rememberMe, captcha)

            if (data.resultCode === 0) {
                    dispatch(auth())
            }
            else {
                if (data.resultCode === 10) {
                    dispatch(getCaptcha());
                }
            dispatch(stopSubmit('login', {_error:data.messages}))
    }  
}

export const getCaptcha = () => async (dispatch) => { 

    let data = await securityAPI.getCaptchaUrl()

        const captchaUrl = data.url;

        dispatch(getCaptchaUrlSuccsess(captchaUrl))

}
export const logout = () => async (dispatch) => { 

       let data = await headersAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }  



export default authReducer;            