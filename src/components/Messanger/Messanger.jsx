import React from 'react'
import s from './Messanger.module.css'
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

const Messanger = (props) => {
    return (
        <div className={s.messangerWrapper}>
            <DialogsContainer />
            <MessagesContainer />
        </div>
    )
}

export default Messanger;