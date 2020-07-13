import React from 'react';
import preLoader from '../../../Assets/Photo/preloader.svg'
import style from './Preloader.module.css'

let Preloader =(props) => {
    return <>
        <div className={style.preloader}> <img src={preLoader}   alt='preloader'/> </div>
        </>
}

export default Preloader;   