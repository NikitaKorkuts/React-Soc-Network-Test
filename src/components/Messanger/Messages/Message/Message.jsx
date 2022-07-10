import React from 'react'
import s from './Message.module.css'
import avatar from '../../../../assets/images/user.png'

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={s.text}>
                <p className={s.bubble + ' ' + s.speech}>{props.message}</p>
            </div>
        </div>
    )
}

export default MessageItem;