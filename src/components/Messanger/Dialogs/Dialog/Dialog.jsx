import React from 'react'
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.status}>
                <svg viewBox="0 0 80 80" width="10" height="10">
                    <circle className={s.circle} cx="40" cy="40" r="38"/>
                </svg>
            </div>
            <div className={s.name}>
                <NavLink to={'/dialogs/' + props.id}
                         className={(navData) => navData.isActive ? s.active : ""}>{props.name}</NavLink>
            </div>
        </div>
    )
}


export default DialogItem;