import React from 'react';
import logo from './logo.svg'
import classes from './Header.module.css';
import { Redirect } from 'react-router-dom';
import { ButtonStyled } from '../Common/UI/StylesUI.jsx'
import { Typography } from '@material-ui/core'
import 'fontsource-roboto';


class Header extends React.Component {

    render() {
        return (
            <header className={classes.header}>
                <img src={logo} className={classes.logo} alt="logo" />
                <div > {this.props.isAuth
                    ? <div className={classes.loginBlock}>
                        <p className={classes.loginName}>
                            {this.props.login}
                        </p>
                        - <ButtonStyled onClick={this.props.logout} className={classes.logout}>
                            <Typography variant='button'>
                                Log out
                            </Typography>
                        </ButtonStyled></div>
                    : <div className={classes.loginBlock}>
                        <Redirect to={'/login'}>
                            <ButtonStyled className={classes.logout}>
                                <Typography variant='button'>
                                    Login
                                </Typography>
                            </ButtonStyled></Redirect></div>}
                </div>

            </header>
        );
    }
}


export default Header;