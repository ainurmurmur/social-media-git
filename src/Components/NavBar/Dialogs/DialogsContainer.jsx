import Dialogs from './Dialogs';
import { sendMessageCreator, getAllDialogs } from '../../../redux/Reducers/dialogs-reducer';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'
import { getDialogPage, getIsFetching } from './../../../redux/Selectors/dialogs-selectors';
import { getChat } from '../../../redux/Reducers/dialogs-reducer'
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";


class DialogsContainer extends React.Component {

    componentDidMount() {
        this.props.getAllDialogs()
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props.dialogPage.dialogsData !== nextProps) {
            return true
        }
    }

    render() {
        return <>
            <div>{this.props.isFetching ? <Preloader /> : null}</div>
            <Dialogs dialogPage={this.props.dialogPage}
                isFetching={this.props.isFetching}
                onSendMessageClick={this.props.onSendMessageClick}
                getChatWithId={this.props.getChatWithId}
                getAllDialogs={this.props.getAllDialogs}

            />
        </>
    };
}

let mapStateToProps = (state) => {
    return {
        dialogPage: getDialogPage(state),
        isFetching: getIsFetching(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
        getChatWithId: (id) => {
            dispatch(getChat(id))
        },
        getAllDialogs: () => {
            dispatch(getAllDialogs())
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer);

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