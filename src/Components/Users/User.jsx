import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../Assets/Photo/userPhoto.png'
import { NavLink } from 'react-router-dom'

let User =({followingInProgress, user, unfollow, follow }) =>{

    let u = user;

            return (<div>

                <span>
                    <NavLink to = {'/Profile/' + u.id}><img src={ u.photos.small != null ? u.photos.small : userPhoto } alt='small pic' style={classes.img}/></NavLink>
                    <div>{u.followed 
                    ? <button disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        unfollow(u.id)}
                    }>Unfollow</button> 
                    : <button disabled= {followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        follow(u.id)}
                    }>Follow</button>}</div>
                </span>
                <span>
                    <span> 
                       <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                         <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
}


export default User;


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