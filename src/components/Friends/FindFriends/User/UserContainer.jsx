import React from 'react'
import s from './User.module.css'

const User = (props) => {

    const getIsFriend = (isFriend) => {
        if (isFriend) {
            return (
                <div className={s.infoFriend}>
                    <span>&#10003; Your friend</span>
                    <input type="submit" value="Remove From Friends"/>
                </div>
            )
        } else {
            return (
                <div className={s.infoFriend}>
                    <input type="submit" value="Add To Friends"/>
                </div>
            )
        }
    }

    return (
        <div className={s.user}>
            <div className={s.userAvatar}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
            </div>
            <div className={s.userInfo}>
                <div className={s.infoName}>
                    <p>{props.name}</p>
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