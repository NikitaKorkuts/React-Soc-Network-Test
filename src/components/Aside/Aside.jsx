import React from 'react';
import s from './Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = (props) => {
    return (
        <aside className={s.aside}>
            <div>
                <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/4/45/Parrot_Logo.png" alt="logo" />
            </div>
            <nav className={s.nav}>
                <ul>
                    <li><span><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/profile">Profile</NavLink></span></li>
                    <li><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/messanger">Messanger</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/news">News</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/music">Music</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/friends">Friends</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? s.active : "" } to="/settings">Settings</NavLink></li>
                    {props.isAuth ? <li className={s.logout}><p onClick={props.logout} >Logout</p></li> : null}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside