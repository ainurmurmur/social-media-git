import React from 'react';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import {Textarea} from '../../Common/FormsControl/FormsControl'
import classes from './MyPost.module.css'
import {reset} from 'redux-form';
import {ButtonStyled} from '../../Common/UI/StylesUI'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';
import TextField  from '@material-ui/core/TextField';


const MyPost = (props) => {


  let postsElement = props.posts.map(p => <Post key={p.id} id={p.id} post={p.post}  likesCounter={p.likesCouter} profile={props.profile}/>);
  
  // let newPostElement = React.createRef();


  let onPostChange = (values) => {
    {values.newPostText &&
    props.addPost(values.newPostText)}
  }
    return ( 
      <div className={classes.contentMyPost}>
       <h3>Posts:</h3>
       <MyPostForm onSubmit={onPostChange}/>
        {postsElement}
       </div>
    );
  }
  const renderTextField = ({label,input, meta: { touched, invalid, error }, ...custom}) => {
    return (<TextField
      id="standard-basic"
       label={label}
       placeholder={label}
       error={touched && invalid}
       helperText={touched && error}
       {...input}
       {...custom}
     />
     
     )
     
   }

  const afterSubmit = (value, dispatch) =>
  dispatch(reset('newPostText'));
 
const MyPostPreForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
       <div>
        <Field className={classes.globalField} component={renderTextField} name ={'newPostText'}  placeholder='Write your post'/>
       </div>
       <div className={classes.margin}>
       <ButtonStyled type='submit' margin='10px'><Typography variant='button'>Add post</Typography></ButtonStyled>
        </div>
       </form>
  )
}
// className={classes.btnPost}
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
      