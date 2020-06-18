import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (
    <div>
        <img className={classes.ava} src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1" alt='p'/>
        <div>
        <div>
          <span>{props.post}</span>
         </div>
          <span>Like {props.likesCounter}</span>
         </div>
         
    </div>
    );    
  }
  
  export default Post;
  