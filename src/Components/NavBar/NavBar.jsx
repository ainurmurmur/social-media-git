import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={classes.navBar}>
           <ul>
               <li className={classes.item}><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></li>
               <li className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Dialogs</NavLink></li>
               <li className={classes.item}><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></li>
               <li className={classes.item}><NavLink to='/news' activeClassName={classes.active}>News</NavLink></li>
               <li className={classes.item}><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></li>
               <li className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></li>
           </ul>
        </div>
    );
}
export default NavBar;     