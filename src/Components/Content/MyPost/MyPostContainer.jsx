import MyPost from './MyPost';
import {addPostActionCreator } from '../../../redux/Reducers/profile-reducer';
import {connect} from 'react-redux'


let mapStateToProps = (state) =>{
  return {
    posts: state.profilePage.postsData,
    newPostText:state.profilePage.newPostText
  }
};
let mapDispatchToProps = (dispatch) =>{
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
    // updateNewPostText: (text) => {
    //   let action =  updateNewPostTextActionCreator(text);
    //   dispatch(action)

    // }
  }
}
let MyPostContainer = connect (mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;
  
/* const MyPostContainer = () => {
 
  return ( 
    <StoreContext.Consumer>
       {
      (store)=> {
      let state = store.getState();

      let addPost  = () => {
         store.dispatch(addPostActionCreator()); 
}
        let onPostChange = (text) => {
        let action =  updateNewPostTextActionCreator(text);
        store.dispatch(action);
} 
  
      return <MyPost addPost ={addPost} updateNewPostText ={onPostChange} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
      }}
      </StoreContext.Consumer>
  );
} */