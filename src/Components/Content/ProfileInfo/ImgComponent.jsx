import React from 'react';
import classes from './ProfileInfo.module.css';
import userPhoto from '../../../Assets/Photo/avatar.png'

//<img src={profile.photos.large || userPhoto} alt='profile largePic' className={classes.avatar} />

export default class ImageComponent extends React.Component {


    shouldComponentUpdate(nextProps){
        return nextProps.profile.photos.large !== this.props.profile.photos.large;
    }

    state = {isOpen: false};

    handleShowDialog = () => {
        this.setState({isOpen: !this.state.isOpen});
        console.log('cliked');
    };

    render() {
        return (
            <div>
                <img
                    className={classes.avatar}
                    src={this.props.profile.photos.large || userPhoto}
                    onClick={this.handleShowDialog}
                    alt="no image"
                />
                {this.state.isOpen && (
                    <dialog
                        className={classes.dialog}
                        style={{position: 'absolute'}}
                        open
                        onClick={this.handleShowDialog}
                        onBlue={this.handleShowDialog}
                    >
                        <img
                            className={classes.image}
                            src={this.props.profile.photos.large || userPhoto}
                            onClick={this.handleShowDialog}
                            alt="no image"
                        />
                    </dialog>
                )}
            </div>
        );
    }
}