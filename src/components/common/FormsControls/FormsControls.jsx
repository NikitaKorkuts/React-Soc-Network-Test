import React from 'react'
import s from './FormControls.module.css'
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children}) => {
    let hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>)
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return ( <FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}

export const createField = (component, validate, type, name, props) => {
    return (
        <Field component={component} validate={validate} type={type} name={name} {...props}/>
    )
}