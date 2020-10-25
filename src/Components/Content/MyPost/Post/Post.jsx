import React, { useState }from 'react';
import classes from './Post.module.css';
import userPhoto from '../../../../Assets/Photo/userPhoto.png'
import Preloader from '../../../Common/Preloader/Preloader'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const Post = ({profile, ...props}) => {

  
  let [notChecked, Checked] = useState(false);

  const setChecked = (e) => {
    Checked(e.target.checked)
  }

  if (!profile) {
    return <Preloader />
 };

    return (
    <div className={classes.postBlock}>
    <img className={classes.ava} src={profile.photos.small || userPhoto} alt='postAva'/>  
          <p className={classes.post}>{props.post}</p>

          <div className={classes.like}>
          <FormControlLabel className={classes.likeIconCss} style={{marginLeft:"20px", marginRight:"0px" }}
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH"  
        checked={notChecked}
        onChange={(e) => setChecked(e) }
        // onClick={() => setCount==true}
        />}
          />
           <p className={classes.post}>{!notChecked ? 0 : 1}</p></div>
        
          </div>
          
    );    
  }
  
  export default Post;


  //src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1" alt='p'/>
    {/* <div className={classes.like}><img src={likeIcon} onClick={() => setCount(count+1)} className={classes.likeIconCss} alt={'postLike'}/> <p className={classes.post}>{count}</p></div>     */}