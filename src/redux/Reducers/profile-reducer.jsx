import {usersAPI, profileAPI } from '../../Api/Api'
import {stopSubmit} from 'redux-form';

const ADD_POST = 'personalInfo/profile/ADD-POST';
const SET_USER_PROFILE = 'personalInfo/profile/SET_USER_PROFILE'
const SET_STATUS = 'personalInfo/profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'personalInfo/profile/SAVE_PHOTO_SUCCESS'
const TOGGLE_IS_FETCHING = 'personalInfo/profile/TOGGLE_IS_FETCHING'

let initialState = {
    
    postsData:[
            {id:'1', 
            post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
            likesCouter: 0},
            {id:'2', 
            post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
            likesCouter: 2}
    ],
    profile: null,
    status: "",
    isFetching: false,
  

} 
const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:'3', 
                post:action.newPostText, 
                likesCouter: 0 
            };
            
            return {...state, postsData:[...state.postsData, newPost], };
           
        }
       
        case SET_USER_PROFILE:{
            return {...state, profile:action.profile}; 
        }
        case SET_STATUS:{
            return {...state, status:action.status}; 
        }
        case SAVE_PHOTO_SUCCESS:{
            return {...state, profile:{...state.profile, photos:action.photos}}; 
        } 
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: 
            return state;
    }
}
   
//ActionCreator
export const addPostActionCreator = (newPostText)=> ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


//THUNK 
export const getUsersId = (userId) => async (dispatch) => { 

        let data =await usersAPI.getUsersId(userId);
         
            dispatch(setUserProfile(data))
    } 
    
export const getStatus = (userId) =>  async (dispatch) => {
 
    let response =await profileAPI.getStatus(userId)
           
            dispatch(setProfileStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => { 
        
    let response =await profileAPI.updateStatus(status)
         
            if (response.data.resultCode === 0) {
                
            dispatch(setProfileStatus(status));
    }
}   
export const savePhoto = (file) => async (dispatch) => { 
    debugger
    dispatch(toggleIsFetching(true))
    let response =await profileAPI.savePhoto(file)
    dispatch(toggleIsFetching(false))
            if (response.data.resultCode === 0) {
                
            dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => { 

    const userId = getState().auth.id;
        
    let response =await profileAPI.saveProfile(profile)
         
            if (response.data.resultCode === 0) {
                
                dispatch(getUsersId(userId));
    }
            else {
                dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0])
            }
}
export default profileReducer;


//                dispatch(stopSubmit('edit-profile', {"contacts":{"facebook": response.data.data.messages[0]}}))

//Another type of actions 
   /*    
    if (action.type === ADD_POST)   {
        let newPost = {id:'3', post:state.newPostText, likesCouter:'0' };
        state.postsData.push(newPost);
        state.newPostText = '';
       
  }
  else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
       
  } */



  
//before redux-form


//const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// export const updateNewPostTextActionCreator = (text) => ({  type: UPDATE_NEW_POST_TEXT, newText: text});
 // case UPDATE_NEW_POST_TEXT:{
        //     return {...state, newPostText:action.newPostText}; 
        // }