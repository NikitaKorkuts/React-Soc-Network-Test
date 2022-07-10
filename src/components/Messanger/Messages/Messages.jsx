import React from 'react';
import s from "./Messages.module.css";
import MessageItem from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";

const Messages = (props) => {
    let messagesElements = (props.messages).map(m => <MessageItem key={m.id} message={m.message}/>);
    return (
        <div className={s.messages}>
            {messagesElements}
            <SendMessage resetMessageForm={props.resetMessageForm} addMessage={props.addMessage} />
        </div>
    )
}

export default Messages