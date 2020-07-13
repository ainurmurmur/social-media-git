import React, { useState }from 'react';
import classes from './Post.module.css';
import userPhoto from '../../../../Assets/Photo/userPhoto.png'
import Preloader from '../../../Common/Preloader/Preloader'
import likeIcon from '../../../../Assets/Photo/like.png'

const Post = ({profile, ...props}) => {

  const [count, setCount] = useState(props.likesCounter); 

  if (!profile) {
    return <Preloader />
 };

 

    return (
    <div className={classes.postBlock}>
    <img className={classes.ava} src={profile.photos.small || userPhoto} alt='postAva'/>  
          <p className={classes.post}>{props.post}</p>
          <div className={classes.like}><img src={likeIcon} onClick={() => setCount(count+1)} className={classes.likeIconCss} alt={'postLike'}/> <p className={classes.post}>{count}</p></div>    
    </div>
    );    
  }
  
  export default Post;


  //src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1" alt='p'/>
  