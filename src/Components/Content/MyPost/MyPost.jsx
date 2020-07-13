import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import {Textarea} from '../../Common/FormsControl/FormsControl'
import classes from './MyPost.module.css'
import {reset} from 'redux-form';


const MyPost = (props) => {


  let postsElement = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post}  likesCounter={p.likesCouter} profile={props.profile}/>);
  
  // let newPostElement = React.createRef();


  let onPostChange = (values) => {
    props.addPost(values.newPostText)
   
  
  }


    return ( 
      <div className={classes.contentMyPost}>
       <h3>Posts:</h3>
       <MyPostForm onSubmit={onPostChange}/>
        {postsElement}
       </div>
    );
  }

 
  const afterSubmit = (value, dispatch) =>
  dispatch(reset('newPostText'));
 
const MyPostPreForm = (props) => {
  return ( <form onSubmit={props.handleSubmit}>
       <div>
        <Field className={classes.globalField} component={Textarea} name ={'newPostText'}  placeholder={'Write your post'}/>
       </div>
       <div>
         <button className={classes.btnPost}>Add post</button>
        </div>
       </form>
  )
}

const MyPostForm = reduxForm ({
  form:'newPostText',
  onSubmitSuccess: afterSubmit,
})(MyPostPreForm)
  export default MyPost;
  

//Before redux-form

/* <div>
         <textarea onChange = {onPostChange} ref={newPostElement} value ={props.newPostText}  placeholder='Write your post'></textarea>
       </div>
       <div>
         <button onClick ={ onAddPost }>Add post</button>
       </div> */


      //  let text = newPostElement.current.value;
      //  props.updateNewPostText(text);
      // /* let action =  updateNewPostTextActionCreator(text);
      //   props.dispatch(action); */

      // let onAddPost  = () => {
      //   props.addPost();
    
      //   //props.dispatch(addPostActionCreator());
      
      // }
      