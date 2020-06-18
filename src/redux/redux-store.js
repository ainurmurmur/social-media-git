import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './Reducers/dialogs-reducer';
import profileReducer from './Reducers/profile-reducer';
import sidebarReducer from './Reducers/sidebar-reducer';
import usersReducer from "./Reducers/users-reducer";
import authReducer from "./Reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './Reducers/app-reducer'
import { compose } from 'redux';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form:formReducer,
    app:appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store =store;
export default store;