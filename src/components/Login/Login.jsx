import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {Navigate} from "react-router-dom";

let maxLengthValidation = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form className={s.formLogin} onSubmit={handleSubmit}>

            <div className={s.formLogInWithEmail}>

                <div className={s.formTitleRow}>
                    <h1>Log in</h1>
                </div>

                <div className={s.formRow}>
                    <label>
                        <p >Login</p>
                        {createField(Input, [required, maxLengthValidation], 'login', 'email')}
                    </label>
                </div>

                <div className={s.formRow}>
                    <label>
                        <p >Password</p>
                        {createField(Input, [required, maxLengthValidation], 'password', 'password')}
                    </label>
                </div>

                <div className={s.formRow}>
                    <label className={s.formCheckbox}>
                        {createField('input', [], 'checkbox', 'rememberMe')}
                        <span>Remember me</span>
                    </label>
                </div>
                <div className={s.formRow}>
                    <label >
                        <span className={s.formErrorText}>{error}</span>
                    </label>
                </div>

                <div className={s.formRow}>
                    <button type="submit">Log in</button>
                </div>

                <a href="#" className={s.formForgottenPassword}>Forgotten password &middot;</a>
                <a href="#" className={s.formCreateAnAccount}>Create an account &rarr;</a>

            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return (
            <Navigate to={'/profile'}/>
        )
    }
    return (
        <div className={s.mainContent}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )


}

export default Login