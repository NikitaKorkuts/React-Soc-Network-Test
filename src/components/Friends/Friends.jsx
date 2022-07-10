import React from 'react'
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";
import UserContainer from "./FindFriends/User/UserContainer";
import userImage from '../../assets/images/user.png'

const Friends = (props) => {
    let UserElements = (props.users).map(u => {
            if(u.followed) {
                return (<UserContainer
                    id={u.id}
                    imgUrl={u.photos.small !== null ? u.photos.small : userImage}
                    age={u.age}
                    name={u.name}
                    education={u.education}
                    city={u.city}
                    key={u.id}
                    isFriend={u.followed}/>)
            }
        }
    )
    return (
        <div>
            <div className={s.header}>
                <h1 className={s.headerHeader}>Friends</h1>
                <NavLink className={s.headerFindFriends} to="/friends/findFriends">&#128269; <span>Find New Friends</span></NavLink>
            </div>
            <div className={s.friends}>
                {UserElements}
            </div>
        </div>
    )
}

export default Friends;