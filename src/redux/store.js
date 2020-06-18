// import dialogsReducer from './dialogs-reducer';
// import profileReducer from './profile-reducer';
// import sidebarReducer from './sidebar-reducer';


let store = {
      _state:{
    
            profilePage: {
                  postsData:[
                {id:'1', post:"Hi, how are you?", likesCouter:'0'},
                {id:'2', post:"Fine, how is your work?", likesCouter:'1'}
                  ],
                  newPostText: '',
           
             },

            dialogPage: { 
                  dialogsData: [
                {name:'Vika', id:'1'},
                {name:'Alla', id:'2'},
                {name:'Aidana', id:'3'},
                {name:'Tanya', id:'4'},
                {name:'Anzhela', id:'5'}
          ],
                  messagesData:  [
                {message:'How are you?', id:'1'},
                {message:'Hi', id:'2'},
                {message:'Hi', id:'3'},
                {message:'Hi', id:'4'},
                {message:'Hi', id:'5'}    
            ],
                newMessageBody: '',
            
            },
            sidebar: {}
      },
      _callSubscriber() {
                  console.log('');
            },

      getState()  {
            return this._state;
      },

      subscribe (observer) {
            this._callSubscriber = observer;
        },

      dispatch(action) {

            this._state.profilePage =  profileReducer(this._state.profilePage, action);
            this._state.dialogPage =  dialogsReducer(this._state.dialogPage, action);
            this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);

      }
}
 

      /*   if (action.type === ADD_POST)   {
            let newPost = {id:'3', post:this._state.profilePage.newPostText, likesCouter:'0' };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
      }
      else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
      }
      else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.messagesData.push({message:body, id:'6'});
            this._state.dialogPage.newMessageBody = '';
            this._callSubscriber(this._state);
      } */ 


export default store;
window.store = store;