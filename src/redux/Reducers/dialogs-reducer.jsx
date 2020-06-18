
const SEND_MESSAGE= 'dialogs/SEND-MESSAGE';

 let initialState= {
     
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
  
}

const dialogsReducer = (state=initialState, action) => {
   

    switch(action.type) {
        
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
           return  {...state, messagesData: [...state.messagesData, {message:body, id:'6'}], };
            
        }
        default: return state;
    }
    /* if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
        
  }
  else if (action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        state.messagesData.push({message:body, id:'6'});
        state.newMessageBody = '';
        
  } */
  
}

export const sendMessageCreator = (newMessageBody)=> ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;



//Before redux-form 

//export const updateNewMessageBodyCreator = (body) => ({  type: UPDATE_NEW_MESSAGE_BODY, body: body});
//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
//case UPDATE_NEW_MESSAGE_BODY:{
//     return {...state, newMessageBody:action.body};
       

// }
    

