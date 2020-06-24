import {usersAPI, profileAPI} from '../../Api/Api'

const ADD_POST = 'personalInfo/profile/ADD-POST';
const SET_USER_PROFILE = 'personalInfo/profile/SET_USER_PROFILE'
const SET_STATUS = 'personalInfo/profile/SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'personalInfo/profile/SAVE_PHOTO_SUCCESS'


let initialState = {
    
    postsData:[
            {id:'1', post:"Hi, how are you?", likesCouter:'0'},
            {id:'2', post:"Fine, how is your work?", likesCouter:'1'}
    ],
    profile: null,
    status: "",
  

} 
const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id:'3', 
                post:action.newPostText, 
                likesCouter:'0' 
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
        default: 
            return state;
    }
}
   
//ActionCreator
export const addPostActionCreator = (newPostText)=> ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos})

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
        
    let response =await profileAPI.savePhoto(file)
         
            if (response.data.resultCode === 0) {
                
            dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
   
export default profileReducer;

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