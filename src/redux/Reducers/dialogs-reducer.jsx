import {dialogAPI} from '../../Api/Api'

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const SET_CHAT = 'dialogs/SET_CHAT';
const GET_DIALOGS = 'dialogs/GET_DIALOGS';
const TOGGLE_IS_FETCHING = 'dialogs/TOGGLE_IS_FETCHING'
const START_CHAT = 'dialogs/START_CHAT'


let initialState = {

    isFetching: false,
    dialogsData: [
        {
            recipientName: null,
            body: null,
            id: null,
            addedAt: null,
            deletedByRecipient: false,
            deletedBySender: false,
            recipientId: null,
            senderName: null,
            senderId: null,
            isSpam: false,
            viewed: false
        }
    ],
    contacts: [
        {
            hasNewMessage: null,
            id: null,
            lastDialogActivityDate: null,
            lastUserActivityDate: null,
            newMessagesCount: false,
            photos: {
                small: null,
                large: null
            },
            userName: null,
        }
    ],
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case GET_DIALOGS: {
            
            console.log(action.dialogs)
            for (let i = 0; i < state.contacts.length; i++) {
                for (let j = 0; j <action.dialogs.length; j++) {
                    if(state.contacts[i].id ===(action.dialogs[j].id)){
                        return state
                    }
                }
            }
            let stateCopy = {...state};
            stateCopy.contacts = [...state.contacts]

            for (let i = 0; i < action.dialogs.length; i++) {
                stateCopy.contacts.push(action.dialogs[i])
            }
            return stateCopy
        }
        case SET_CHAT: {

            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.dialogsData.length = 1;

            for (let i = 0; i < action.items.items.length; i++) {
                stateCopy.dialogsData.push(action.items.items[i])
            }
            return stateCopy
        }
        case SEND_MESSAGE: {

            return {
                ...state,
                dialogsData: [...state.dialogsData, action.data.message]
            }
        }
        default:
            return state;
    }
}

export const sendMessage = (data) => ({type: SEND_MESSAGE, data});
export const setChatWithId = (items) => ({type: SET_CHAT, items})
export const getDialogs = (dialogs) => ({type: GET_DIALOGS, dialogs})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const startChat = (isFetching) => ({type: START_CHAT, isFetching});

let userIdData;

export const startChatting = (id) =>async (dispatch) => {
    
        let data = await dialogAPI.startChatting(id)
        dispatch(startChat(data));
}

export const getAllDialogs = () => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    let data = await dialogAPI.getAllDialogs()
    dispatch(toggleIsFetching(false))
    dispatch(getDialogs(data));
}

export const getChat = (userId) => async (dispatch) => {
    
    userIdData = userId;
    dispatch(toggleIsFetching(true))
    let data = await dialogAPI.getUsersIdMessage(userId)
    dispatch(toggleIsFetching(false))
    dispatch(setChatWithId(data));
}

export const sendMessageCreator = (requestData) => async (dispatch) => {

    requestData[0] = userIdData;
    let data = await dialogAPI.sendMessage(requestData)
    dispatch(sendMessage(data.data));
}


export default dialogsReducer;

// {
//     recipientName: action.data.message.recipientName,
//     body: action.data.message.body,
//     id: action.data.message.id,
//     addedAt: action.data.message.addedAt,
//     deletedByRecipient: action.data.message.deletedByRecipient,
//     deletedBySender: action.data.message.deletedBySender,
//     recipientId: action.data.message.recipientId,
//     senderName: action.data.message.senderName,
//     senderId: action.data.message.senderId,
//     isSpam: action.data.message.isSpam,
//     viewed: action.data.message.viewed
// }
//forEach(function(items, i, arr) {
//                     return  {
//                         recipientName: action.items.items[i].recipientName,
//                         body: action.items.items[i].body,
//                         id: action.items.items[i].id,
//                         addedAt: action.items.items[i].addedAt,
//                         deletedByRecipient: action.items.items[i].deletedByRecipient,
//                         deletedBySender: action.items.items[i].deletedBySender,
//                         recipientId: action.items.items[i].recipientId,
//                         senderName: action.items.items[i].senderName,
//                         senderId: action.items.items[i].senderId,
//                         isSpam: action.items.items[i].isSpam,
//                         viewed: action.items.items[i].viewed
//                     }
//                 })

//, {
//
//                     recipientName: action.items.items[0].recipientName,
//                     body: action.items.items.body,
//                     id: action.items.items.id,
//                     addedAt: action.items.items.addedAt,
//                     deletedByRecipient: action.items.items.deletedByRecipient,
//                     deletedBySender: action.items.items.deletedBySender,
//                     recipientId: action.items.items.recipientId,
//                     senderName: action.items.items.senderName,
//                     senderId: action.items.items.senderId,
//                     isSpam: action.items.items.isSpam,
//                     viewed: action.items.items.viewed
//                 }
//{
//
//                 recipientName: action.data.message.recipientName,
//                     body: action.data.message.body,
//                     id: action.data.message.id,
//                     addedAt: action.data.message.addedAt,
//                     deletedByRecipient: action.data.message.deletedByRecipient,
//                     deletedBySender: action.data.message.deletedBySender,
//                     recipientId: action.data.message.recipientId,
//                     senderName: action.data.message.senderName,
//                     senderId: action.data.message.senderId,
//                     isSpam: action.data.message.isSpam,
//                     viewed: action.data.message.viewed
//                 }


//case SET_CHAT: {
//             return {
//                 ...state,
//                 messagesData: [...state.messagesData, {message: action.items}]
//             };
//         }

//// case SEND_MESSAGE: {
//         //     // let body = action.newMessageBody;
//         //     let body = action.data;
//         //     return {
//         //         ...state,
//         //         messagesData: [...state.messagesData, {message: body, id: 1}],
//         //     };
//         // }

//case SEND_MESSAGE: {
//             console.log(action.data)
//             return {
//                 ...state,
//                 messagesData: [...state.messagesData, null],
//                 dialogsData: [...state.dialogsData[action.id - 1], {
//                     id: action.id - 1,
//                     items: [...state.dialogsData[action.id - 1].items[action.id - 1].data]
//                 }]
//             };
//         }

// dialogsData: [
//     {name: 'Vika', id: 1, items: [{data: null, idOfData: null}]},
//     {name: 'samurai', id: 2, items: [{data: null, idOfData: null}]},
//     {name: 'Aidana', id: 3, items: [{data: null, idOfData: null}]},
//     {name: 'Tanya', id: 4, items: [{data: null, idOfData: null}]},
//     {name: 'Anzhela', id: 5, items: [{data: null, idOfData: null}]}
// ],
//
// case SET_CHAT: {
//     console.log(action.id)
//     console.log(state.dialogsData[action.id-1])
//     return {...state,
//         messagesData: [...state.messagesData, null],
//         dialogsData: [...state.dialogsData[action.id-1],{
//             id: action.id-1,
//             items: [...state.dialogsData[action.id-1].items[action.id-1].data]
//         } ]
//     };
// }

//    dialogsData: [
//         {name: 'Vika', id: '1', items: [{data: '', idOfData:''}]},
//         {name: 'Alla', id: '2', items: [{data: '', idOfData:''}]},
//         {name: 'Aidana', id: '3', items: [{data: '', idOfData:''}]},
//         {name: 'Tanya', id: '4', items: [{data: '', idOfData:''}]},
//         {name: 'Anzhela', id: '5', items: [{data: '', idOfData:''}]}
//     ],
//     messagesData: [
//         {message: '', id: null},
//     ],


//Before redux-form

/* if (action.type === UPDATE_NEW_MESSAGE_BODY) {
       state.newMessageBody = action.body;

 }
 else if (action.type === SEND_MESSAGE){
       let body = state.newMessageBody;
       state.messagesData.push({message:body, id:'6'});
       state.newMessageBody = '';

 } */

//export const updateNewMessageBodyCreator = (body) => ({  type: UPDATE_NEW_MESSAGE_BODY, body: body});
//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
//case UPDATE_NEW_MESSAGE_BODY:{
//     return {...state, newMessageBody:action.body};


// }
    

