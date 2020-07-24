import React, { useState } from 'react'
import style from './Users.module.css'
import User from './User'
import cn from 'classnames'

let Users = (props) => {


    let pagesCount = Math.ceil((props.totalItemsCount) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={style.userWrapper}>
        <div className={style.paginator}>
        {portionNumber > 1 &&
            <button className={style.btnPage} onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>
        }
            
            { pages  
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={ cn({[style.selectedPage]:props.currentPage === p},style.pageNumber ) } 
                            onClick={(e) => { props.onPageChange(p) } } key={p}>{p}</span>
                })
            }
      
        {portionCount > portionNumber &&
            <button className={style.btnPage} onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>
        }
        </div>
        <div className={style.userBlock}>
        {props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)}
        </div>

        </div>
   )
};


/* <span>
            
                    <NavLink to = {'/Profile/' + u.id}><img src={ u.photos.small != null ? u.photos.small : userPhoto } alt='small pic' style={classes.img}/></NavLink>
                    <div>{u.followed 
                    ? <button disabled= {props.followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        props.unfollow(u.id)}
                    }>Unfollow</button> 

                    : <button disabled= {props.followingInProgress.some(id=> id===u.id)} onClick ={()=>{
                        props.follow(u.id)}
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
                </span> */
           // props.currentPage === p && classes.selectedPage, classes.pageNumber  } onClick={(e) => { props.onPageChange(p) } }>{p}</span>
               //props.currentPage === p && classes.pageNumber
               //classes.pageNumber



export default Users;


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