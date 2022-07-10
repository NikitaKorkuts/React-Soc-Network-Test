import React from 'react';
import s from './User.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    const onAddToFriends = () => {
        props.follow(props.id)
    }
    const onRemoveFromFriends = () => {
        props.unfollow(props.id);
    }
    const getIsFriend = (isFriend) => {
        if (isFriend) {
            return (
                <div className={s.infoFriend}>
                    <span>&#10003; Your friend</span>
                    <button disabled={props.isFollowingInProgress.some(id => id === props.id)} onClick={onRemoveFromFriends}>Remove From Friends</button>
                </div>
            )
        } else {
            return (
                <div className={s.infoFriend}>
                    <button disabled={props.isFollowingInProgress.some(id => id === props.id)} onClick={onAddToFriends}>Add To Friends</button>
                </div>
            )
        }
    }

    return (
        <div className={s.user}>
            <div className={s.userAvatar}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.imgUrl}/>
                </NavLink>
            </div>
            <div className={s.userInfo}>
                <div className={s.infoName}>
                    <NavLink to={`/profile/${props.id}`}>
                        <p>{props.name}</p>
                    </NavLink>
                </div>
                <div className={s.infoInfo}>
                    <p>Age: {props.age}, City: {props.city}, Education: {props.education}</p>
                </div>
                {getIsFriend(props.isFriend)}
            </div>
        </div>
    )
}

export default User;