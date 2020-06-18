import {auth} from '../Reducers/auth-reducer'

const SET_INITIALIZED =  'app/SET_INITIALIZED';


let initialState = {
  
    initialized: false
    

} 

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED: {   
            return { ...state,
                     initialized: true
            } 
        }
        default: 
            return state;
    }
}

  
//ActionCreators


export const initializedSuccess = () => ({ type: SET_INITIALIZED});

//ThunkFunctions


export const initializedApp = () => (dispatch) => { 

        let promise = dispatch(auth())
        Promise.all([promise])
        .then(()=> {
            dispatch(initializedSuccess())
        });
    }  

export default appReducer;            