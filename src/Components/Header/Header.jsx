import React from 'react';
import logo from './logo.svg'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={classes.header}>
             <img src={logo} className={classes.logo} alt="logo" /> 
             
            <div > {props.isAuth
             ? <div className={classes.loginBlock}><p className={classes.loginName}>{props.login} </p>
              - <button onClick={props.logout} className={classes.logout}>Log out</button></div>
              : <div className={classes.loginBlock}><NavLink to= '/login'>
                  <button  className={classes.logout}>Login</button></NavLink></div>}
             </div>
           
        </header>
    );
}
export default Header;