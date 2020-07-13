import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
           <p >Copyright</p>
           <p ><a  href="https://icons8.com/icons/set/good-quality">Good Quality icon</a> icon by <a  href="https://icons8.com">Icons8</a></p> 
        </div>
    );
}
export default Footer;