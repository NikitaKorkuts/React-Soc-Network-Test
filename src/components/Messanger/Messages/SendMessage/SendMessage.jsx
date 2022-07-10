import React from 'react'
import s from "../Messages.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators";

let maxLength = maxLengthCreator(13);

const SendMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.sendMessage}>
                <Field name="message" component={Textarea} validate={[required, maxLength]} className={s.writeMessage} placeholder={'Write message...'} />
                <button className={s.sendBtn} type="submit">Send</button>
            </div>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({
    form: 'sendMessage'
})(SendMessageForm)

const SendMessage = (props) => {
    const onSubmit = (formData, dispatch) => {
        props.addMessage(formData.message)
        props.resetMessageForm(dispatch)
    }
    return (
        <SendMessageReduxForm onSubmit={onSubmit} />
    )
}

export default SendMessage