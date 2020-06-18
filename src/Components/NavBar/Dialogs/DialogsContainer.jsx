import Dialogs from './Dialogs';
import {sendMessageCreator} from '../../../redux/Reducers/dialogs-reducer';
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'
import {compose} from 'redux'
import { getDialogPage } from './../../../redux/Selectors/dialogs-selectors';




let mapStateToProps = (state) => {
    return {
        dialogPage: getDialogPage(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
        
    }
}





export default compose ( connect(mapStateToProps, mapDispatchToProps), withAuthRedirect) (Dialogs);

// connect создает контейнерную компоненту, внутри рендерит презентационную компоненту и внустри презентационной комп.,
// в качестве пропсов и атрибутов передает те свойства которые сидят в  2 функии

/* const DialogsContainer = () => {   

    

    return <StoreContext.Consumer> 
        {    (store) => {  
             let state= store.getState().dialogPage ;

             let onSendMessageClick = () => {
       
              store.dispatch(sendMessageCreator());
    }
           let onNewMessageChange = (body) => {
               store.dispatch(updateNewMessageBodyCreator(body));    
      
    }
         return <Dialogs onSendMessageClick= {onSendMessageClick} updateNewMessageBody={onNewMessageChange} dialogPage={state}/>
        }   }
         </StoreContext.Consumer>

    
 } */

//Вид функции до compose() ()

 /* let AuthRedirectComponent = withAuthRedirect(Dialogs) 

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); */



 //Before redux-form

//  updateNewMessageBody: (body) => {
//     dispatch(updateNewMessageBodyCreator(body))
// }