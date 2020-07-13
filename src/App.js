import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Settings from './Components/NavBar/Settings/Settings';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileContainer from './Components/Content/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login'
import { connect } from 'react-redux'
import { initializedApp } from './redux/Reducers/app-reducer'
import Preloader from './Components/Common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './redux/redux-store';
import { withLazy } from './Components/Common/Lazy/withLazySuspense'
import classes from './App.module.css'



//import UsersContainer  from './Components/Users/UsersContainer';
//import DialogsContainer from './Components/NavBar/Dialogs/DialogsContainer';

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./Components/NavBar/Dialogs/DialogsContainer'));


class App extends React.Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert ("Some error ocured")
  }
  componentDidMount() {
    this.props.initializedApp();
    window.addEventListener('unhandlesrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandlesrejection', this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (<div className={classes.wrapper}>  
      
      <HeaderContainer />
      <NavBar />
      <div className={classes.wrapperContent}>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={"/profile"}  />} />
          <Route path='/dialogs' render={withLazy(DialogsContainer)} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={withLazy(UsersContainer)} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/settings' component={Settings} />
          <Route path='*' render={() => <div><b>404 NOT FOUND</b></div>} />
        </Switch>

      </div>
      <Footer />
    </div>


    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});




const AppWithRouter = compose(withRouter, connect(mapStateToProps, { initializedApp }))(App);

const AppMain = (props) => {
  return (<HashRouter >
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </HashRouter>)
}

export default AppMain;



//export default App;
//dialogsData = {props.state.dialogPage.dialogsData} messagesData={props.state.dialogPage.messagesData} dispatch={props.dispatch} newMessageBody={props.state.dialogPage.newMessageBody}
//postsData = {props.state.profilePage.postsData} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText} 
//store={props.store}