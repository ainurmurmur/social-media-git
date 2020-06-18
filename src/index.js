import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as serviceWorker from './serviceWorker';
import AppMain from './App'




  
ReactDOM.render(  <AppMain   />, document.getElementById('root'));
  


//let rerenderEntireTree = () => {
/* }
rerenderEntireTree(store.getState()); */

//store.subscribe(rerenderEntireTree());

/* store.subscribe ( ()=> {
  let state = store.getState();
  rerenderEntireTree(state);
});  */
//мы больше не подписываемся на изменения потому что функция connect  перерисовывает локально изменения.

//serviceWorker.unregister();


//state = {store._state}
//store={store} state={state} dispatch={store.dispatch.bind(store)} 