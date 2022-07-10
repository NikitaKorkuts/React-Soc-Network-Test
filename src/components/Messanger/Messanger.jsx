import React from 'react'
import s from './Messanger.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.status}>
                <svg viewBox="0 0 80 80" width="10" height="10">
                    <circle className={s.circle}  cx="40" cy="40" r="38"/>
                </svg>
            </div>
            <div className={s.name}>
                <NavLink to={'/dialogs/' + props.id} className={(navData) => navData.isActive ? s.active : ""} >{props.user}</NavLink>
            </div>
        </div>
    )
}

const Messanger = (props) => {
    return (
        <div className={s.messangerWrapper}>
            <div className={s.dialogs}>
                <h1 className={s.header}>Dialogs</h1>
                <DialogItem id='0' user='Nikita Korkuts'/>
                <DialogItem id='1' user={'Slava Kesya'}/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div className={s.avatar}>
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
                    </div>
                    <div className={s.text}>
                        <p className={s.bubble + ' ' + s.speech}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                            quos</p>
                    </div>
                </div>
                <div className={s.message}>
                    <div className={s.avatar}>
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
                    </div>
                    <div className={s.text}>
                        <p className={s.bubble + ' ' + s.speech}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                            quosLorem ipsum dolor sit aLwidth: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;width: 80%;orem ipsum dolor sit aLorem ipsum dolor sit aLorem ipsum dolor sit a</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messanger;