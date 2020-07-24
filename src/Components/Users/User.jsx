import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../Assets/Photo/avatar.png'
import { NavLink } from 'react-router-dom'
import {ButtonStyled} from '../Common/UI/StylesUI'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';

let User =({followingInProgress, user, unfollow, follow }) =>{

    let u = user;

    return (<div className={classes.user} >

                <span className={classes.userSpan1} >
                    <NavLink to = {'/Profile/' + u.id}><img src={ u.photos.small != null ? u.photos.small : userPhoto } alt='small pic' style={classes.img}/></NavLink>
                    <div>{u.followed 
                    ?
                    <ButtonStyled type='submit' style={{ margin: "10px"}} disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        unfollow(u.id)}}><Typography variant='button'>Unfollow</Typography></ButtonStyled>
                   
                    :
                    <ButtonStyled type='submit'  style={{ margin: "10px"}} disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        follow(u.id)}}><Typography variant='button'>Follow</Typography></ButtonStyled> 
                   
                   }
                    </div>
                </span>
                <span className={classes.userSpan2}>
                    <span> 
                       <p className={classes.userP}>{u.name}</p>
                       <br></br>
                        <p>{u.status}</p>
                    </span>
                </span>
            </div>)
}


export default User;


 // <button className={classes.btnPage} disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                    //     follow(u.id)}
                    // }>Follow</button>
 // <button className={classes.btnPage} disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                    //     unfollow(u.id)}
                    // }>Unfollow</button> 
//StateData
     /*    [
        {id:'1', photoUrl:'https://qph.fs.quoracdn.net/main-qimg-d171a30624492d6041d5b23548136440', followed:true, fullName: 'Alena', status:"Hi, how are you?", location:{country: 'India', city:'New-Delhi'}},
        {id:'2', photoUrl:'https://qph.fs.quoracdn.net/main-qimg-d171a30624492d6041d5b23548136440', followed:false,fullName: 'Ansar', status:"Hi", location:{country: 'Kazakhstan', city:'Almaty'}},
        {id:'3', photoUrl:'https://qph.fs.quoracdn.net/main-qimg-d171a30624492d6041d5b23548136440',followed:true, fullName: 'Boris', status:"Strong", location:{country: 'Ukraine', city:'Kiev'}}
])}; */

//   


//Dispatch

 /*  props.toggleFollowingInProgress(true, u.id);
                        usersAPI.deleteUnfollow(u.id).then(data =>{
                        if (data.resultCode == 0) {
                            props.unfollow(u.id);
                        }  
                             props.toggleFollowingInProgress(false, u.id)
                    }); 
                        props.unfollow(u.id)} */

 /* props.toggleFollowingInProgress(true, u.id);
                        usersAPI.postFollow(u.id).then(data =>{
                        if (data.resultCode == 0) {
                            props.follow(u.id); 
                        }    
                            props.toggleFollowingInProgress(false, u.id)
                    }); */
                        //props.follow(u.id)}