import React from 'react'
import s from "../Posts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

let maxLengthValidator = maxLengthCreator(10);

const SendPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLengthValidator]} component={Textarea} name="post" id="post"/>
            <button type="submit">Send Post</button>
        </form>
    )
}
const SendPostReduxForm = reduxForm({
    form: 'sendPost'
})(SendPostForm)

const SendPost = (props) => {
    const createRecord = (formData, dispatch) => {
        props.addPost(formData.post);
        props.resetPost(dispatch)
    }
    return (
        <div className={s.sendPost}>
            <h1>My posts</h1>
            <SendPostReduxForm onSubmit={createRecord} />
        </div>
    )
}


export default SendPost

