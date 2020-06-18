import React from 'react';
import Profile from '../Content/Profile'
import {getUsersId, updateStatus, getStatus} from '../../redux/Reducers/profile-reducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'
//import { getProfile, getStatusSelector, getIsAuth } from '../../redux/Selectors/profile-selectors';
//import  {withAuthRedirect} from '../HOC/withAuthRedirect';
//getAuthorizedUserId


class ProfileContainer extends React.Component{
   

   componentDidMount() {

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
   render() {

   return (    
     <Profile {...this.props} profile={this.props.profile} status ={this.props.status} updateStatus = {this.props.updateStatus}/>
    );
  }
};

let mapStateToProps = (state) => ({
      profile: state.profilePage.profile,
      status:  state.profilePage.status,
      authorizedUserId: state.auth.id,
      isAuth: state.auth.isAuth
  }); 


export default compose (withRouter, connect (mapStateToProps, {getUsersId, getStatus, updateStatus})) (ProfileContainer)
  

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