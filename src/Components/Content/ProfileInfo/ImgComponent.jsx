import React, { useState }  from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../Assets/Photo/avatar.png'
import Preloader from "../../Common/Preloader/Preloader";

 let ImageComponent =(props)=> {

   
    const [state, setState] = useState({isOpen: false});

     let handleShowDialog = () => {
        setState({isOpen: !state.isOpen});
             console.log('cliked');
         };

debugger
        return (<>
            <div>
            {props.isFetching ? <Preloader /> : null}
                <img
                    className={classes.avatar}
                    src={props.profile.photos.large || userPhoto}
                    onClick={()=>handleShowDialog()}
                    alt="no image"
                />
                {state.isOpen && (
                    <dialog
                        className={classes.dialog}
                        style={{position: 'absolute'}}
                        open
                        onClick={()=>handleShowDialog()}
                        onBlue={()=>handleShowDialog()}
                    >
                        <img
                            className={classes.image}
                            src={props.profile.photos.large || userPhoto}
                            onClick={()=>handleShowDialog()}
                            alt="no image"
                        />
                    </dialog>
                )}
            </div>
            </>
        );
    }

export default ImageComponent;