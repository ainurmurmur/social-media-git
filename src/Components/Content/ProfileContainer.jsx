import React from 'react';
import Profile from '../Content/Profile'
import {getUsersId, updateStatus, getStatus, savePhoto, saveProfile} from '../../redux/Reducers/profile-reducer'
import {getChat, getAllDialogs, startChatting} from '../../redux/Reducers/dialogs-reducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'


class ProfileContainer extends React.Component{

   refreshProfile () {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = this.props.authorizedUserId;
          if (!userId) { 
            this.props.history.push('/login')
         }
      }
      this.props.getUsersId(userId)
      this.props.getStatus(userId)
   }
   componentDidMount() {
      this.refreshProfile();
}
   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
   }
   }

   render() {

   return (
     <Profile {...this.props} profile={this.props.profile} status ={this.props.status} updateStatus = {this.props.updateStatus}
              isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
              getChat={this.props.getChat} getAllDialogs={this.props.getAllDialogs}
              startChatting ={this.props.startChatting}
              />
    );
  }
};

let mapStateToProps = (state) => ({
      profile: state.profilePage.profile,
      status:  state.profilePage.status,
      authorizedUserId: state.auth.id,
      isAuth: state.auth.isAuth
  }); 

export default compose (withRouter, connect (mapStateToProps,
    {getUsersId, saveProfile, getStatus, updateStatus, 
      savePhoto, getChat, getAllDialogs, startChatting})) (ProfileContainer)
  
//withAuthRedirect
//dispatch = {props.dispatch} store={props.store}

//Dispatch
   /* usersAPI.getUsersId(userId).then(data =>{
                this.props.setUserProfile(data);
   }); */

//Callbacks before compose () ()
   /*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect (mapStateToProps, {getUserId})(WithUrlDataContainerComponent); */

//mapStateToProps
// let mapStateToProps = (state) => ({
//    profile: state.profilePage.profile,
//    status:  state.profilePage.status,
//    authorizedUserId: state.auth.userId,
//    isAuth:state.auth.isAuth
// }); 