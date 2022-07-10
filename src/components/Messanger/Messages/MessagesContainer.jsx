import React from 'react';
import s from "./Messages.module.css";
import MessageItem from "./Message/Message";
import {addMessageActionCreator, setMessageTextActionCreator} from "../../../redux/messanger-reducer";

const Messages = (props) => {

    let messagesElements = (state.messages).map(m => <MessageItem message={m.message}/>);

    let messageText = store.getState().messanger.messageText;

    let addMessage = () => {
        store.dispatch(addMessageActionCreator());
    }
    let updateMessageText = (e) => {
        let message = e.target.value;
        store.dispatch(setMessageTextActionCreator(message));
    }

    return (
        <div className={s.messages}>
            {messagesElements}
            <div className={s.sendMessage}>
                <textarea onChange={props.updateMessageText} className={s.writeMessage} value={props.messageText} placeholder={'Write message...'}></textarea>
                <input onClick={props.addMessage} value="Send" className={s.sendBtn} type="submit"/>
            </div>
        </div>
    )
}

export default Messages