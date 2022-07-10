import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userImg from "../../assets/images/user.png";

const Header = (props) => {
    const getLoginElement = (isAuth, login) => {
        if(isAuth && props.authUserProfile) {
            let img = props.authUserProfile.photos.small
            return (
                <div className={s.loginBlock}>
                    <NavLink to={`/profile/${props.userId}`} className={s.loginName}>{login}</NavLink>
                    <NavLink to={`/profile/${props.userId}`}>
                        <img className={s.loginImg} src={img ? img : userImg} alt="avatar"/>
                    </NavLink>

                </div>
            )
        } else {
            return (
                <NavLink to={'/login'} className={s.login}>Login</NavLink>
            )
        }
    }
    return (
        <header className={s.header}>
            <div className={s.loginWrapper}>
                {getLoginElement(props.isAuth, props.login)}
            </div>
        </header>
    )
}

export default Header;