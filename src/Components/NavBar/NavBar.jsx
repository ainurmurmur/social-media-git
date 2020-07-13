import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import name from '../../Assets/Photo/name.png'
import message from '../../Assets/Photo/message.png'
import news from '../../Assets/Photo/news.png'
import user from '../../Assets/Photo/users.png'

const NavBar = () => {
    return (
        <div className={classes.navBar}>
           <ul>
               <li className={classes.item}><NavLink to='/profile' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={name} className={classes.navLogo} alt={'navIcon'}/>Profile</div></NavLink></li>
               <li className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={message} className={classes.navLogo} alt={'navIcon'}/>Dialogs</div></NavLink></li>
               <li className={classes.item}><NavLink to='/users' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={user} className={classes.navLogo} alt={'navIcon'}/>Users</div></NavLink></li>
               <li className={classes.item}><NavLink to='/news' activeClassName={classes.active}><br/><div className={classes.navDiv}><img src={news} className={classes.navLogo} alt={'navIcon'}/>News</div></NavLink></li>
           </ul>
        </div>
    );
}
export default NavBar;     