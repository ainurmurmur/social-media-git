import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import {maxLengthCreator, required} from '../../../Utils/Validators'
import {Textarea} from '../../Common/FormsControl/FormsControl'


const MyPost = (props) => {


  let postsElement = props.posts.map(p => <Post id={p.id} post={p.post}  likesCounter={p.likesCouter} />);
  
  // let newPostElement = React.createRef();


  let onPostChange = (values) => {
    props.addPost(values.newPostText)
  
  }


    return ( 
 
      <div className="wrapper-content">
       <h3>My Posts</h3>
       <MyPostForm onSubmit={onPostChange}/>
       
        {postsElement}
       </div>
    );
  }

const MaxLength10 = maxLengthCreator(10);
const MyPostPreForm = (props) => {
  return ( <form onSubmit={props.handleSubmit}>
       <div>
        <Field component={Textarea} name ={'newPostText'}  placeholder='Write your post' validate={[ required, MaxLength10]}/>
       </div>
       <div>
         <button>Add post</button>
        </div>
       </form>
  )
}

const MyPostForm = reduxForm ({
  form:'newPostText'
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
      