import React from 'react'
import s from './Message.module.css'

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
            </div>
            <div className={s.text}>
                <p className={s.bubble + ' ' + s.speech}>{props.message}</p>
            </div>
        </div>
    )
}

export default MessageItem;