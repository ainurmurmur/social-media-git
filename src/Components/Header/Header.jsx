import React from 'react';
import logo from './logo.svg'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {ButtonStyled} from '../Common/UI/StylesUI.jsx'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';

const Header = (props) => {

    return (
        <header className={classes.header}>
             <img src={logo} className={classes.logo} alt="logo" /> 
             
            <div > {props.isAuth
             ? <div className={classes.loginBlock}><p className={classes.loginName}>{props.login} </p>
              - <ButtonStyled onClick={props.logout} className={classes.logout}>
                  <Typography variant='button'>Log out</Typography>
                  </ButtonStyled></div>
              : <div className={classes.loginBlock}><NavLink to= '/login'>
                  <ButtonStyled  className={classes.logout}>
                      <Typography variant='button'>Login</Typography>
                    </ButtonStyled></NavLink></div>}
             </div>
           
        </header>
    );
}
export default Header;