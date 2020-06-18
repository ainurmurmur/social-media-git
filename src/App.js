import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import News from './Components/NavBar/News/News';
import Music from './Components/NavBar/Music/Music';
import Settings from './Components/NavBar/Settings/Settings';
import { Route } from 'react-router-dom';
import ProfileContainer from './Components/Content/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login'
import {connect} from 'react-redux'
import {initializedApp} from '../src/redux/Reducers/app-reducer'
import Preloader from './Components/Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/redux-store';
import {withLazy} from './Components/Common/Lazy/withLazySuspense'

//import UsersContainer  from './Components/Users/UsersContainer';
//import DialogsContainer from './Components/NavBar/Dialogs/DialogsContainer';

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./Components/NavBar/Dialogs/DialogsContainer'));


class App extends React.Component {

  componentDidMount(){
      this.props.initializedApp();

 }

render() {

      if (!this.props.initialized) {
        return <Preloader />
  }

  return ( <div className="wrapper">
 
      <HeaderContainer />
      <NavBar />
      <div className="wrapper-content">
        <Route path='/dialogs' render={withLazy(DialogsContainer)}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer /> }/>
        <Route path='/users' render={withLazy(UsersContainer)}/>
        <Route path='/login' render={() => <Login /> }/>
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
        <Route path='/music' component={Music} />
      </div>
      <Footer />
     </div> 
       
    
  );
}
}

const mapStateToProps = (state) => ({
    initialized:state.app.initialized
 });




const AppWithRouter = compose ( withRouter, connect (mapStateToProps, {initializedApp})) (App);

const  AppMain = (props) => {
return (<BrowserRouter>
    <Provider store={store}>
      <AppWithRouter  />
    </Provider>
    </BrowserRouter>)
}

export default AppMain; 



//export default App;
//dialogsData = {props.state.dialogPage.dialogsData} messagesData={props.state.dialogPage.messagesData} dispatch={props.dispatch} newMessageBody={props.state.dialogPage.newMessageBody}
//postsData = {props.state.profilePage.postsData} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText} 
//store={props.store}